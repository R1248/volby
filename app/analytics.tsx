import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GameScreen } from '@/src/components/layout/GameScreen';
import { Card, Grid, Metric, SectionTitle } from '@/src/components/ui/StrategyCards';
import { formatPercent } from '@/src/game/engine';
import { segmentLabels } from '@/src/game/seed';
import type { ActionType, MarketingAdvisor } from '@/src/game/types';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

export default function AnalyticsScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const selectedRegionId = useGameStore((state) => state.selectedRegionId);
  const selectRegion = useGameStore((state) => state.selectRegion);
  const plannedActions = useGameStore((state) => state.plannedActions);
  const planAction = useGameStore((state) => state.planAction);
  const removePlannedAction = useGameStore((state) => state.removePlannedAction);
  const hireMarketingAdvisor = useGameStore((state) => state.hireMarketingAdvisor);
  const runtime = gameState.partyRuntime.player;
  const analyticsActions = gameState.actions.filter((action) => action.category === 'Analytika');
  const advisor = gameState.marketingAdvisors.find((item) => item.id === runtime.marketingAdvisorId) ?? gameState.marketingAdvisors[0];
  const plannedCost = plannedActions.reduce((sum, item) => {
    const action = gameState.actions.find((candidate) => candidate.id === item.actionId);
    return sum + (action?.cost ?? 0);
  }, 0);
  const plannedCapacity = plannedActions.reduce((sum, item) => {
    const action = gameState.actions.find((candidate) => candidate.id === item.actionId);
    return sum + (action?.capacityCost ?? 0);
  }, 0);
  const remainingBudget = runtime.cash - plannedCost;
  const remainingCapacity = gameState.rules.maxActionsPerWeek - plannedCapacity;
  const selectedRegion = gameState.regions.find((region) => region.id === selectedRegionId) ?? gameState.regions[0];

  return (
    <GameScreen
      activeItem="Analytika"
      subtitle="InternÃ­ vÃ½zkum kupuje pÅ™esnost pro Å¡tÃ¡b, veÅ™ejnÃ© agentury dÃ¡vajÃ­ mediÃ¡lnÃ­ obraz reality."
      title="Analytika a prÅ¯zkumy"
    >
      <Grid>
        {gameState.parties.map((party) => {
          const support = gameState.nationalSupport[party.id];
          return (
            <Metric
              key={party.id}
              label={party.shortName}
              value={formatPercent(support)}
            />
          );
        })}
        <Metric label="Marketing" value={advisor.level === 0 ? 'bez tÃ½mu' : `L${advisor.level}`} />
      </Grid>

      <Card>
        <SectionTitle>InternÃ­ stranickÃ¡ analytika</SectionTitle>
        <View style={styles.regionPicker}>
          {gameState.regions.map((region) => {
            const isSelected = region.id === selectedRegion.id;
            return (
              <Pressable
                key={region.id}
                onPress={() => selectRegion(region.id)}
                style={[styles.regionPill, isSelected && styles.regionPillActive]}
              >
                <Text style={[styles.regionPillText, isSelected && styles.regionPillTextActive]} numberOfLines={1}>
                  {region.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
        <View style={styles.actionGrid}>
          {analyticsActions.map((action) => {
            const isPlanned = plannedActions.some(
              (plannedAction) =>
                plannedAction.actionId === action.id &&
                (action.target === 'national' || plannedAction.targetRegionId === selectedRegion.id),
            );
            const isDisabled = isPlanned || remainingBudget < action.cost || remainingCapacity < action.capacityCost;
            return (
              <AnalyticsActionCard
                action={action}
                disabled={isDisabled}
                isPlanned={isPlanned}
                key={action.id}
                onPress={() => planAction(action.id, action.target === 'region' ? selectedRegion.id : undefined)}
                regionName={action.target === 'region' ? selectedRegion.name : 'CelostÃ¡tnÄ›'}
              />
            );
          })}
        </View>
      </Card>

      <Card tone="dark">
        <SectionTitle>PlÃ¡novanÃ¡ analytickÃ¡ zadÃ¡nÃ­</SectionTitle>
        <View style={styles.darkList}>
          {plannedActions
            .map((plannedAction) => {
              const action = analyticsActions.find((candidate) => candidate.id === plannedAction.actionId);
              const region = plannedAction.targetRegionId
                ? gameState.regions.find((candidate) => candidate.id === plannedAction.targetRegionId)
                : undefined;
              return action ? { action, id: plannedAction.id, regionName: region?.name ?? 'CelostÃ¡tnÄ›' } : undefined;
            })
            .filter((item): item is { action: ActionType; id: string; regionName: string } => Boolean(item))
            .map((item) => (
              <View key={item.id} style={styles.darkRow}>
                <View style={styles.darkTextGroup}>
                  <Text style={styles.darkRowTitle}>{item.action.name}</Text>
                  <Text style={styles.darkRowMeta}>{item.regionName} Â· {item.action.cost.toFixed(1)}M KÄ</Text>
                </View>
                <Pressable onPress={() => removePlannedAction(item.id)} style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>ZruÅ¡it</Text>
                </Pressable>
              </View>
            ))}
          {plannedActions.every((plannedAction) => !analyticsActions.some((action) => action.id === plannedAction.actionId)) ? (
            <Text style={styles.emptyDarkText}>Å½Ã¡dnÃ© internÃ­ analytickÃ© zadÃ¡nÃ­ nenÃ­ v plÃ¡nu tÃ½dne.</Text>
          ) : null}
        </View>
      </Card>

      <View style={styles.twoColumn}>
        <View style={styles.columnPanel}>
          <SectionTitle>Veřejnoprávní modelový průzkum</SectionTitle>
          <Text style={styles.note}>
            Hlavní čísla v aplikaci ukazují výstup zjednodušeného 8D modelu bez agenturního šumu a bez intervalu.
          </Text>
          <Text style={styles.note}>
            Interní analytika slouží pro konkrétní zadání: region, segment, kvadrant nebo téma. Neovlivňuje obecný průzkum podpory.
          </Text>
        </View>

        <View style={styles.columnPanel}>
          <SectionTitle>MarketingovÃ½ tÃ½m</SectionTitle>
          <View style={styles.advisorGrid}>
            {gameState.marketingAdvisors.map((item) => (
              <AdvisorCard
                advisor={item}
                isActive={item.id === advisor.id}
                key={item.id}
                onPress={() => hireMarketingAdvisor(item.id)}
              />
            ))}
          </View>
        </View>
      </View>

      <Card tone="gold">
        <SectionTitle>SegmentovÃ© signÃ¡ly</SectionTitle>
        {gameState.segments.slice(0, advisor.level >= 2 ? 24 : 6).map((segment) => (
          <Text key={segment.id} style={styles.note}>
            {segmentLabels[segment.id]} Â· volatilita {Math.round(segment.volatility * 100)} % Â· ÃºÄast {Math.round(segment.turnoutBase * 100)} %
          </Text>
        ))}
      </Card>
    </GameScreen>
  );
}

function AnalyticsActionCard({
  action,
  disabled,
  isPlanned,
  onPress,
  regionName,
}: {
  action: ActionType;
  disabled: boolean;
  isPlanned: boolean;
  onPress: () => void;
  regionName: string;
}) {
  return (
    <Pressable disabled={disabled} onPress={onPress} style={[styles.actionCard, isPlanned && styles.plannedCard, disabled && !isPlanned && styles.disabledCard]}>
      <View style={styles.actionHeader}>
        <Text style={styles.actionTitle}>{action.name}</Text>
        <Text style={styles.actionCost}>{action.cost.toFixed(1)}M</Text>
      </View>
      <Text style={styles.actionDescription}>{action.description}</Text>
      <Text style={styles.actionMeta}>{regionName} Â· {action.capacityCost} rozkaz Â· riziko {action.risk}</Text>
      <Text style={[styles.actionCta, isPlanned && styles.doneText]}>{isPlanned ? 'V plÃ¡nu tÃ½dne' : 'PÅ™idat do plÃ¡nu'}</Text>
    </Pressable>
  );
}

function AdvisorCard({
  advisor,
  isActive,
  onPress,
}: {
  advisor: MarketingAdvisor;
  isActive: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.advisorCard, isActive && styles.advisorCardActive]}>
      <Text style={[styles.advisorName, isActive && styles.advisorNameActive]}>{advisor.name}</Text>
      <Text style={[styles.advisorMeta, isActive && styles.advisorMetaActive]}>
        L{advisor.level} Â· {advisor.costPerWeek.toFixed(2)}M KÄ tÃ½dnÄ›
      </Text>
      <Text style={[styles.advisorText, isActive && styles.advisorMetaActive]}>
        odhady +{Math.round(advisor.predictionAccuracyBonus * 100)} Â· rizika +{Math.round(advisor.riskDetectionBonus * 100)}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  actionCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    flexBasis: 250,
    flexGrow: 1,
    minWidth: 0,
  },
  actionCost: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '900',
  },
  actionCta: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 5,
  },
  actionDescription: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 5,
  },
  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  actionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  actionMeta: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '900',
    marginTop: 5,
  },
  actionTitle: {
    color: colors.text,
    flex: 1,
    fontSize: 14,
    fontWeight: '900',
  },
  advisorCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 9,
    flexBasis: 190,
    flexGrow: 1,
    minWidth: 0,
  },
  advisorCardActive: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
  },
  advisorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  advisorMeta: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '800',
    marginTop: 3,
  },
  advisorMetaActive: {
    color: '#DCEAF7',
  },
  advisorName: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  advisorNameActive: {
    color: colors.textOnPrimary,
  },
  advisorText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
    marginTop: 3,
  },
  columnPanel: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 8,
    minWidth: 0,
    padding: 10,
  },
  darkList: {
    gap: 8,
  },
  darkRow: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.09)',
    borderColor: 'rgba(255,255,255,0.18)',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    padding: 8,
  },
  darkRowMeta: {
    color: '#BFD3E6',
    fontSize: 11,
    fontWeight: '800',
    marginTop: 2,
  },
  darkRowTitle: {
    color: colors.textOnPrimary,
    fontSize: 13,
    fontWeight: '900',
  },
  darkTextGroup: {
    flex: 1,
  },
  disabledCard: {
    opacity: 0.42,
  },
  doneText: {
    color: colors.success,
  },
  emptyDarkText: {
    color: '#DCEAF7',
    fontSize: 12,
    fontWeight: '700',
  },
  note: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
  },
  plannedCard: {
    borderColor: colors.success,
    borderWidth: 2,
  },
  publicPollCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 0,
    padding: 9,
  },
  publicPollCta: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 4,
  },
  publicPollList: {
    gap: 8,
  },
  publicPollMeta: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '800',
    marginTop: 3,
  },
  publicPollName: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  regionPicker: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  regionPill: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  regionPillActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  regionPillText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '900',
  },
  regionPillTextActive: {
    color: colors.textOnPrimary,
  },
  removeButton: {
    backgroundColor: colors.surface,
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  removeButtonText: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '900',
  },
  twoColumn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
