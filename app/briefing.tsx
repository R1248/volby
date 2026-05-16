import { StyleSheet, Text, View } from 'react-native';

import { GameScreen } from '@/src/components/layout/GameScreen';
import { ActionButton, Card, Grid, Metric, SectionTitle } from '@/src/components/ui/StrategyCards';
import { formatPercent } from '@/src/game/engine';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

export default function BriefingScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const plannedActions = useGameStore((state) => state.plannedActions);
  const resolvePlannedWeek = useGameStore((state) => state.resolvePlannedWeek);
  const briefing = gameState.history[0];
  const playerRuntime = gameState.partyRuntime.player;

  return (
    <GameScreen
      activeItem="Briefing"
      subtitle="Vysvětlení tahu, změn podpory, segmentových posunů a rizik."
      title="Briefing týdne"
    >
      <Grid>
        <Metric label="Průzkum" value={formatPercent(gameState.nationalSupport.player)} />
        <Metric
          label="Plánované akce"
          value={`${plannedActions.length}/${gameState.rules.maxActionsPerWeek}`}
          tone={plannedActions.length > 0 ? 'warn' : undefined}
        />
        <Metric
          label="Únava lídra"
          value={`${Math.round(playerRuntime.leader.fatigue * 100)}%`}
          tone={playerRuntime.leader.fatigue > 0.55 ? 'danger' : undefined}
        />
      </Grid>

      <Card tone="dark">
        <View style={styles.row}>
          <View style={styles.flex}>
            <Text style={styles.darkTitle}>Rozhodnutí týdne</Text>
            <Text style={styles.darkText}>
              Akce mění organizaci, reputaci, šířku pole, issue ownership a viditelnost. Veřejnoprávní průzkum se přepočítá na konci tahu.
            </Text>
          </View>
          <ActionButton
            disabled={plannedActions.length === 0}
            label="Odehrát týden"
            onPress={resolvePlannedWeek}
            tone="accent"
          />
        </View>
      </Card>

      {briefing ? (
        <>
          <Card>
            <SectionTitle>Co se stalo</SectionTitle>
            <BulletList items={briefing.events} />
          </Card>

          <Card>
            <SectionTitle>Dopad akcí</SectionTitle>
            <BulletList items={briefing.actionEffects.length > 0 ? briefing.actionEffects : ['Tento týden neproběhla žádná plánovaná akce.']} />
          </Card>

          <Card>
            <SectionTitle>Regiony a segmenty</SectionTitle>
            {briefing.regionHighlights.map((highlight) => (
              <Text key={highlight.regionId} style={styles.bodyText}>
                {highlight.regionId}: {highlight.delta >= 0 ? '+' : ''}
                {(highlight.delta * 100).toFixed(1)} b. - {highlight.reason}
              </Text>
            ))}
            <BulletList items={briefing.segmentNotes} />
          </Card>

          <View style={styles.twoColumn}>
            <Card>
              <SectionTitle>Média a soupeři</SectionTitle>
              <BulletList items={[...briefing.mediaNotes, ...briefing.opponentMoves]} />
            </Card>
            <Card tone="gold">
              <SectionTitle>Rizika a doporučení</SectionTitle>
              <BulletList items={[...briefing.riskNotes, ...briefing.advisorRecommendations]} />
            </Card>
          </View>
        </>
      ) : (
        <Card tone="gold">
          <SectionTitle>Zatím žádný odehraný tah</SectionTitle>
          <Text style={styles.bodyText}>Naplanuj akce ve volebním štábu a odehraj týden. Tady se potom ukáže vysvětlení výsledku.</Text>
        </Card>
      )}
    </GameScreen>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return <Text style={styles.bodyText}>Bez výrazné změny.</Text>;
  }

  return (
    <>
      {items.map((item, index) => (
        <Text key={`${item}-${index}`} style={styles.bodyText}>
          • {item}
        </Text>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
  },
  darkText: {
    color: '#DCEAF7',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 4,
  },
  darkTitle: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '900',
  },
  flex: {
    flex: 1,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  twoColumn: {
    flexDirection: 'row',
    gap: 10,
  },
});
