import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GameScreen } from '@/src/components/layout/GameScreen';
import { Card, Grid, Metric, SectionTitle } from '@/src/components/ui/StrategyCards';
import type { ActionType } from '@/src/game/types';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

const legalStatusLabel = {
  legal: 'legální',
  gray: 'šedá zóna',
  illegal: 'nelegální',
} as const;

export default function FinanceScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const acceptSponsorOffer = useGameStore((state) => state.acceptSponsorOffer);
  const plannedActions = useGameStore((state) => state.plannedActions);
  const planAction = useGameStore((state) => state.planAction);
  const removePlannedAction = useGameStore((state) => state.removePlannedAction);
  const runtime = gameState.partyRuntime.player;
  const financeActions = gameState.actions.filter((action) => action.category === 'Finance');
  const usedDonorUnits = gameState.sponsors
    .filter((sponsor) => sponsor.accepted)
    .reduce((sum, sponsor) => sum + sponsor.donorUnits, 0);
  const plannedCost = plannedActions.reduce((sum, item) => {
    const action = gameState.actions.find((candidate) => candidate.id === item.actionId);
    return sum + (action?.cost ?? 0);
  }, 0);
  const plannedCapacity = plannedActions.reduce((sum, item) => {
    const action = gameState.actions.find((candidate) => candidate.id === item.actionId);
    return sum + (action?.capacityCost ?? 0);
  }, 0);
  const remainingBudget = runtime.cash - plannedCost;
  const remainingLegalSpend = gameState.rules.legalSpendCap - runtime.legalSpend - plannedCost;
  const remainingCapacity = gameState.rules.maxActionsPerWeek - plannedCapacity;

  return (
    <GameScreen
      activeItem="Finance"
      subtitle="Rozlišujeme hotovost, legální spend, limity dárců a reputační riziko financování."
      title="Finance a sponzoři"
    >
      <Grid>
        <Metric label="Hotovost" value={`${runtime.cash.toFixed(1)}M Kč`} />
        <Metric label="Legal spend" value={`${runtime.legalSpend.toFixed(1)} / ${gameState.rules.legalSpendCap.toFixed(0)}M`} />
        <Metric label="Donor cap" value={`${usedDonorUnits} / ${gameState.rules.donorCap}`} />
        <Metric label="3rd-party cap" value={`${runtime.thirdPartySpend.toFixed(1)} / ${gameState.rules.thirdPartyCap.toFixed(1)}M`} />
        <Metric label="Integrita" value={`${Math.round(runtime.reputation.integrity * 100)}%`} />
        <Metric
          label="Kontroverze"
          value={`${Math.round(runtime.reputation.controversy * 100)}%`}
          tone={runtime.reputation.controversy > 0.45 ? 'danger' : undefined}
        />
      </Grid>

      <Card>
        <SectionTitle>Finanční kroky</SectionTitle>
        <View style={styles.financeActionGrid}>
          {financeActions.map((action) => {
            const isPlanned = plannedActions.some((plannedAction) => plannedAction.actionId === action.id);
            const isDisabled =
              isPlanned ||
              remainingBudget < action.cost ||
              remainingLegalSpend < action.cost ||
              remainingCapacity < action.capacityCost;

            return (
              <Pressable
                disabled={isDisabled}
                key={action.id}
                onPress={() => planAction(action.id)}
                style={[styles.financeActionCard, isPlanned && styles.financeActionPlanned, isDisabled && !isPlanned && styles.financeActionDisabled]}
              >
                <View style={styles.financeActionHeader}>
                  <Text style={styles.financeActionName}>{action.name}</Text>
                  <Text style={[styles.riskBadge, action.risk === 'vyšší' && styles.riskBadgeHigh]}>{action.risk}</Text>
                </View>
                <Text style={styles.financeActionDescription}>{action.description}</Text>
                <Text style={styles.financeActionMeta}>
                  {action.cost.toFixed(1)}M Kč · {action.capacityCost} rozkaz · čas lídra {action.leaderTimeCost.toFixed(2)}
                </Text>
                <Text style={[styles.financeActionCta, isPlanned && styles.financeActionDone]}>
                  {isPlanned ? 'V plánu týdne' : 'Přidat do plánu'}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </Card>

      <Card tone="dark">
        <SectionTitle>Plánované finanční kroky</SectionTitle>
        <View style={styles.plannedFinanceList}>
          {plannedActions
            .map((plannedAction) => {
              const action = financeActions.find((candidate) => candidate.id === plannedAction.actionId);
              return action ? { action, id: plannedAction.id } : undefined;
            })
            .filter((item): item is { action: ActionType; id: string } => Boolean(item))
            .map((item) => (
              <View key={item.id} style={styles.plannedFinanceRow}>
                <View style={styles.plannedFinanceText}>
                  <Text style={styles.plannedFinanceName}>{item.action.name}</Text>
                  <Text style={styles.plannedFinanceMeta}>{item.action.cost.toFixed(1)}M Kč · {item.action.risk}</Text>
                </View>
                <Pressable onPress={() => removePlannedAction(item.id)} style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>Zrušit</Text>
                </Pressable>
              </View>
            ))}
          {plannedActions.every((plannedAction) => !financeActions.some((action) => action.id === plannedAction.actionId)) ? (
            <Text style={styles.emptyDarkText}>Žádný finanční krok není v plánu týdne.</Text>
          ) : null}
        </View>
      </Card>

      <Card>
        <SectionTitle>Nabídky sponzorů</SectionTitle>
        <View style={styles.sponsorGrid}>
          {gameState.sponsors.map((sponsor) => (
            <Pressable
              disabled={sponsor.accepted}
              key={sponsor.id}
              onPress={() => acceptSponsorOffer(sponsor.id)}
              style={[styles.sponsorCard, sponsor.accepted && styles.sponsorAccepted]}
            >
              <View style={styles.sponsorHeader}>
                <Text style={styles.sponsorName}>{sponsor.name}</Text>
                <Text style={[styles.statusBadge, sponsor.legalStatus !== 'legal' && styles.statusRisk]}>
                  {legalStatusLabel[sponsor.legalStatus]}
                </Text>
              </View>
              <Text style={styles.sponsorMeta}>
                {sponsor.amount.toFixed(1)}M Kč · {sponsor.kind} · {sponsor.donorUnits} jednotek
              </Text>
              <Text style={styles.sponsorRisk}>
                reputace -{Math.round(sponsor.reputationRisk * 100)} b. · skandál {Math.round(sponsor.scandalRisk * 100)} % · stopa {Math.round(sponsor.traceability * 100)} %
              </Text>
              {Object.keys(sponsor.policyPressure).length > 0 && (
                <Text style={styles.pressure}>Tlak: {Object.entries(sponsor.policyPressure).map(([issue, value]) => `${issue} ${Math.round((value ?? 0) * 100)} %`).join(', ')}</Text>
              )}
              <Text style={[styles.sponsorAction, sponsor.accepted && styles.sponsorActionDone]}>
                {sponsor.accepted ? 'Přijato' : 'Přijmout'}
              </Text>
            </Pressable>
          ))}
        </View>
      </Card>

      <Card tone="gold">
        <SectionTitle>Pravidlový rámec</SectionTitle>
        <Text style={styles.note}>
          Full realism umožňuje i šedé a nelegální zdroje. Model sleduje reputační stopu, riziko skandálu, regionální bonus a tlak sponzorů na politiku.
        </Text>
      </Card>
    </GameScreen>
  );
}

const styles = StyleSheet.create({
  emptyDarkText: {
    color: '#DCEAF7',
    fontSize: 12,
    fontWeight: '700',
  },
  financeActionCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    width: '48.5%',
  },
  financeActionCta: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 5,
  },
  financeActionDescription: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 5,
  },
  financeActionDisabled: {
    opacity: 0.42,
  },
  financeActionDone: {
    color: colors.success,
  },
  financeActionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  financeActionHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  financeActionMeta: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '900',
    marginTop: 5,
  },
  financeActionName: {
    color: colors.text,
    flex: 1,
    fontSize: 14,
    fontWeight: '900',
  },
  financeActionPlanned: {
    borderColor: colors.success,
    borderWidth: 2,
  },
  note: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
  },
  pressure: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '800',
    marginTop: 3,
  },
  plannedFinanceList: {
    gap: 8,
  },
  plannedFinanceMeta: {
    color: '#BFD3E6',
    fontSize: 11,
    fontWeight: '800',
    marginTop: 2,
  },
  plannedFinanceName: {
    color: colors.textOnPrimary,
    fontSize: 13,
    fontWeight: '900',
  },
  plannedFinanceRow: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.09)',
    borderColor: 'rgba(255,255,255,0.18)',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    padding: 8,
  },
  plannedFinanceText: {
    flex: 1,
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
  riskBadge: {
    backgroundColor: '#E8F2EA',
    borderRadius: 999,
    color: colors.success,
    fontSize: 9,
    fontWeight: '900',
    paddingHorizontal: 7,
    paddingVertical: 3,
    textTransform: 'uppercase',
  },
  riskBadgeHigh: {
    backgroundColor: '#FFF0D1',
    color: colors.warning,
  },
  sponsorAccepted: {
    opacity: 0.55,
  },
  sponsorAction: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 4,
  },
  sponsorActionDone: {
    color: colors.success,
  },
  sponsorCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
    width: '48.5%',
  },
  sponsorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  sponsorHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  sponsorMeta: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 3,
  },
  sponsorName: {
    color: colors.text,
    flex: 1,
    fontSize: 14,
    fontWeight: '900',
  },
  sponsorRisk: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    marginTop: 3,
  },
  statusBadge: {
    backgroundColor: '#E8F2EA',
    borderRadius: 999,
    color: colors.success,
    fontSize: 9,
    fontWeight: '900',
    paddingHorizontal: 7,
    paddingVertical: 3,
    textTransform: 'uppercase',
  },
  statusRisk: {
    backgroundColor: '#FFF0D1',
    color: colors.warning,
  },
});
