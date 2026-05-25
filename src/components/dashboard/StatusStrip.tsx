import { StyleSheet, Text, View } from 'react-native';

import { formatPercent } from '@/src/game/engine';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

export function StatusStrip({ pageTitle }: { pageTitle?: string }) {
  const gameState = useGameStore((state) => state.gameState);
  const openEvents = gameState.events.filter((event) => !event.resolved).length;

  return (
    <View style={styles.strip}>
      {pageTitle ? (
        <View style={styles.pageTitleItem}>
          <Text style={styles.pageTitle} numberOfLines={1}>
            {pageTitle}
          </Text>
        </View>
      ) : null}
      <StatusItem label="Pruzkum" value={formatPercent(gameState.nationalSupport.player)} />
      <StatusItem label="Rozpocet" value={`${gameState.partyRuntime.player.cash.toFixed(1)}M Kc`} />
      <StatusItem label="Tyden" value={`${gameState.week}/${gameState.rules.finalWeek}`} />
      <StatusItem label="Udalosti" value={String(openEvents)} tone={openEvents > 0 ? 'danger' : undefined} />
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
    borderRightColor: 'rgba(255,255,255,0.14)',
    borderRightWidth: 1,
    flex: 1,
    paddingRight: 6,
  },
  label: {
    color: '#BFD3E6',
    fontSize: 8,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  pageTitle: {
    color: colors.textOnPrimary,
    fontSize: 15,
    fontWeight: '900',
  },
  pageTitleItem: {
    borderRightColor: 'rgba(255,255,255,0.14)',
    borderRightWidth: 1,
    flex: 1.3,
    justifyContent: 'center',
    minWidth: 104,
    paddingRight: 8,
  },
  positive: {
    color: '#7BD7A4',
  },
  strip: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 7,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  value: {
    color: colors.textOnPrimary,
    fontSize: 13,
    fontWeight: '900',
  },
});
