import { StyleSheet, Text, View } from 'react-native';

import { formatPercent } from '@/src/game/engine';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

export function StatusStrip() {
  const gameState = useGameStore((state) => state.gameState);
  const plannedActions = useGameStore((state) => state.plannedActions);
  const remainingActions = gameState.rules.maxActionsPerWeek - plannedActions.length;
  const openEvents = gameState.events.filter((event) => !event.resolved).length;

  return (
    <View style={styles.strip}>
      <StatusItem label="Průzkum" value={formatPercent(gameState.nationalSupport.player)} />
      <StatusItem label="Rozpočet" value={`${gameState.partyRuntime.player.cash.toFixed(1)}M Kč`} />
      <StatusItem label="Týden" value={`${gameState.week}/${gameState.rules.finalWeek}`} />
      <StatusItem label="Akce" value={`${remainingActions}/${gameState.rules.maxActionsPerWeek}`} tone="accent" />
      <StatusItem label="Události" value={String(openEvents)} tone={openEvents > 0 ? 'danger' : undefined} />
    </View>
  );
}

function StatusItem({
  label,
  tone,
  value,
}: {
  label: string;
  tone?: 'accent' | 'danger' | 'positive';
  value: string;
}) {
  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[
          styles.value,
          tone === 'positive' && styles.positive,
          tone === 'accent' && styles.accent,
          tone === 'danger' && styles.danger,
        ]}
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  accent: {
    color: colors.selected,
  },
  danger: {
    color: colors.accent,
  },
  item: {
    borderRightColor: 'rgba(255,255,255,0.16)',
    borderRightWidth: 1,
    flex: 1,
    paddingRight: 8,
  },
  label: {
    color: '#BFD3E6',
    fontSize: 9,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  positive: {
    color: '#7BD7A4',
  },
  strip: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  value: {
    color: colors.textOnPrimary,
    fontSize: 15,
    fontWeight: '900',
    marginTop: 1,
  },
});
