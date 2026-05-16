import * as SQLite from 'expo-sqlite';

import type { GameState, PlannedAction, TurnBriefing } from './types';

const databaseName = 'volby.db';
const schemaVersion = 1;

type SaveRow = {
  created_at: string;
  id: number;
  payload: string;
  schema_version: number;
};

let dbPromise: Promise<SQLite.SQLiteDatabase> | undefined;

async function getDb() {
  dbPromise ??= SQLite.openDatabaseAsync(databaseName);
  const db = await dbPromise;
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS game_saves (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      schema_version INTEGER NOT NULL,
      created_at TEXT NOT NULL,
      payload TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS turn_snapshots (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      week INTEGER NOT NULL,
      created_at TEXT NOT NULL,
      payload TEXT NOT NULL
    );
  `);
  return db;
}

export async function saveGame(state: GameState, plannedActions: PlannedAction[] = []) {
  const db = await getDb();
  const payload = JSON.stringify({
    plannedActions,
    schemaVersion,
    state,
  });

  await db.runAsync(
    'INSERT INTO game_saves (schema_version, created_at, payload) VALUES (?, ?, ?)',
    schemaVersion,
    new Date().toISOString(),
    payload,
  );
}

export async function loadLatestGame() {
  const db = await getDb();
  const row = await db.getFirstAsync<SaveRow>(
    'SELECT id, schema_version, created_at, payload FROM game_saves ORDER BY id DESC LIMIT 1',
  );

  if (!row || row.schema_version !== schemaVersion) {
    return undefined;
  }

  const parsed = JSON.parse(row.payload) as {
    plannedActions?: PlannedAction[];
    schemaVersion: number;
    state: GameState;
  };

  if (parsed.schemaVersion !== schemaVersion) {
    return undefined;
  }

  return {
    plannedActions: parsed.plannedActions ?? [],
    state: parsed.state,
  };
}

export async function resetSave() {
  const db = await getDb();
  await db.execAsync('DELETE FROM game_saves; DELETE FROM turn_snapshots;');
}

export async function saveTurnSnapshot(state: GameState, briefing: TurnBriefing) {
  const db = await getDb();
  await db.runAsync(
    'INSERT INTO turn_snapshots (week, created_at, payload) VALUES (?, ?, ?)',
    briefing.week,
    new Date().toISOString(),
    JSON.stringify({ briefing, schemaVersion, state }),
  );
}
