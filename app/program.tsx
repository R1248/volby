import { useMemo, useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GameScreen } from '@/src/components/layout/GameScreen';
import { Card, Grid, Metric, SectionTitle } from '@/src/components/ui/StrategyCards';
import { deriveLatentFromIssues } from '@/src/game/issueEngine';
import type { Issue, IssueDomain, ProgramIssueId } from '@/src/game/issueTypes';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

const domainLabels: Record<IssueDomain, string> = {
  authority: 'Rad a bezpeci',
  culture: 'Kultura',
  economy: 'Ekonomika',
  energy: 'Energie',
  foreign_policy: 'Zahranici',
  green: 'Energie a klima',
  institutions: 'Instituce',
  migration: 'Migrace',
  welfare: 'Socialni stat',
};

const positionOptions = [
  { label: 'Silne proti', value: -2 },
  { label: 'Spise proti', value: -1 },
  { label: 'Kompromis', value: 0 },
  { label: 'Spise pro', value: 1 },
  { label: 'Silne pro', value: 2 },
];

const salienceOptions = [
  { label: 'Ignorovat', value: 0 },
  { label: 'Odpovidat', value: 1 },
  { label: 'Program', value: 2 },
  { label: 'Kampan', value: 3 },
  { label: 'Vlajka', value: 4 },
];

export default function ProgramScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const updateProgramIssue = useGameStore((state) => state.updateProgramIssue);
  const activateCampaignPackage = useGameStore((state) => state.activateCampaignPackage);
  const answerProgramMediaQuestion = useGameStore((state) => state.answerProgramMediaQuestion);
  const answerCampaignTrip = useGameStore((state) => state.answerCampaignTrip);
  const answerDebateAttack = useGameStore((state) => state.answerDebateAttack);
  const layer = gameState.issueLayer;
  const [selectedIssueId, setSelectedIssueId] = useState<ProgramIssueId>(layer.issues[0]?.id ?? 'taxes');
  const selectedIssue = layer.issues.find((issue) => issue.id === selectedIssueId) ?? layer.issues[0];
  const selectedPosition = selectedIssue ? layer.player.currentIssuePositions[selectedIssue.id] : undefined;
  const groupedIssues = useMemo(() => groupIssues(layer.issues), [layer.issues]);
  const derivedLatent = useMemo(
    () => deriveLatentFromIssues(layer.player.currentIssuePositions, layer.issues, layer.framings),
    [layer.framings, layer.issues, layer.player.currentIssuePositions],
  );
  const pendingMedia = layer.mediaQuestions.find((question) => question.id === layer.pendingMediaQuestionId);
  const pendingTrip = layer.tripEvents.find((trip) => trip.id === layer.pendingCampaignTripId);

  if (!selectedIssue || !selectedPosition) {
    return null;
  }

  const framings = layer.framings.filter((framing) => framing.issueId === selectedIssue.id);

  return (
    <GameScreen
      activeItem="Program"
      subtitle="Konkretni temata meni latentni pozici, koherenci, mediální zranitelnost a citelnost kampane."
      title="Programovy stab"
    >
      <Grid>
        <Metric label="Koherence" value={`${layer.player.coherenceBreakdown.coherenceScore}/100`} tone={metricTone(layer.player.coherenceBreakdown.coherenceScore / 100)} />
        <Metric label="Citelnost" value={`${Math.round(layer.player.programLegibility * 100)} %`} tone={metricTone(layer.player.programLegibility)} />
        <Metric label="Media risk" value={`${Math.round(layer.player.mediaVulnerability * 100)} %`} tone={layer.player.mediaVulnerability > 0.58 ? 'warn' : undefined} />
        <Metric label="Frakce" value={`${Math.round(layer.player.factionTension * 100)} %`} tone={layer.player.factionTension > 0.55 ? 'warn' : undefined} />
      </Grid>

      <View style={styles.mainGrid}>
        <Card>
          <SectionTitle>Temata</SectionTitle>
          {Object.entries(groupedIssues).map(([domain, issues]) => (
            <View key={domain} style={styles.domainBlock}>
              <Text style={styles.domainTitle}>{domainLabels[domain as IssueDomain]}</Text>
              <View style={styles.issueWrap}>
                {issues.map((issue) => {
                  const position = layer.player.currentIssuePositions[issue.id];
                  const isSelected = issue.id === selectedIssue.id;
                  return (
                    <Pressable
                      key={issue.id}
                      onPress={() => setSelectedIssueId(issue.id)}
                      style={[styles.issueChip, isSelected && styles.issueChipActive]}
                    >
                      <Text style={[styles.issueChipText, isSelected && styles.issueChipTextActive]} numberOfLines={1}>
                        {issue.shortName ?? issue.name}
                      </Text>
                      <Text style={[styles.issueChipMeta, isSelected && styles.issueChipTextActive]}>
                        {positionLabel(position.position)} · S{position.salience}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          ))}
        </Card>

        <Card>
          <SectionTitle>{selectedIssue.name}</SectionTitle>
          <Text style={styles.bodyText}>{selectedIssue.description}</Text>

          <Text style={styles.controlTitle}>Pozice</Text>
          <View style={styles.controlRow}>
            {positionOptions.map((option) => (
              <ChoiceButton
                isActive={selectedPosition.position === option.value}
                key={option.value}
                label={selectedIssue.id === 'greenDeal' ? greenDealPositionLabel(option.value) : option.label}
                onPress={() => updateProgramIssue(selectedIssue.id, { position: option.value })}
              />
            ))}
          </View>

          <Text style={styles.controlTitle}>Salience</Text>
          <View style={styles.controlRow}>
            {salienceOptions.map((option) => (
              <ChoiceButton
                isActive={selectedPosition.salience === option.value}
                key={option.value}
                label={option.label}
                onPress={() => updateProgramIssue(selectedIssue.id, { salience: option.value })}
              />
            ))}
          </View>

          {framings.length > 0 ? (
            <>
              <Text style={styles.controlTitle}>Framing</Text>
              <View style={styles.framingStack}>
                {framings.map((framing) => (
                  <Pressable
                    key={framing.id}
                    onPress={() => updateProgramIssue(selectedIssue.id, { framingId: framing.id })}
                    style={[styles.framingCard, selectedPosition.framingId === framing.id && styles.framingCardActive]}
                  >
                    <Text style={styles.framingTitle}>{framing.name}</Text>
                    <Text style={styles.framingText}>{framing.description}</Text>
                  </Pressable>
                ))}
              </View>
            </>
          ) : null}

          <View style={styles.effectGrid}>
            <Effect label="Econ" value={derivedLatent.econ ?? 0} />
            <Effect label="Culture" value={derivedLatent.culture ?? 0} />
            <Effect label="Authority" value={derivedLatent.authority ?? 0} />
            <Effect label="Globalism" value={derivedLatent.globalism ?? 0} />
            <Effect label="Green" value={derivedLatent.green ?? 0} />
            <Effect label="Ukraine" value={derivedLatent.ukraine ?? 0} />
          </View>
        </Card>
      </View>

      <View style={styles.mainGrid}>
        <Card tone="gold">
          <SectionTitle>Kampanove balicky</SectionTitle>
          <View style={styles.packageGrid}>
            {layer.campaignPackages.map((pack) => {
              const active = layer.player.activeCampaignPackages.includes(pack.id);
              return (
                <Pressable key={pack.id} onPress={() => activateCampaignPackage(pack.id)} style={[styles.packageCard, active && styles.packageActive]}>
                  <Text style={styles.packageTitle}>{pack.name}</Text>
                  <Text style={styles.packageText}>{pack.description}</Text>
                  <Text style={styles.packageMeta}>{active ? 'Aktivni' : 'Aktivovat'}</Text>
                </Pressable>
              );
            })}
          </View>
        </Card>

        <Card>
          <SectionTitle>Koherence programu</SectionTitle>
          <Breakdown label="Pravidla grafu" value={layer.player.coherenceBreakdown.rulePenalty} />
          <Breakdown label="Ideovy ramec" value={layer.player.coherenceBreakdown.framePenalty} />
          <Breakdown label="Puvodni identita" value={layer.player.coherenceBreakdown.originPenalty} />
          <Breakdown label="Preplnena agenda" value={layer.player.coherenceBreakdown.agendaPenalty} />
          <Breakdown label="Publika v napeti" value={layer.player.coherenceBreakdown.audiencePenalty} />
        </Card>
      </View>

      <View style={styles.mainGrid}>
        {pendingMedia ? (
          <EventPanel title={pendingMedia.title} text={pendingMedia.question}>
            {pendingMedia.answerOptions.map((answer) => (
              <Pressable key={answer.id} onPress={() => answerProgramMediaQuestion(pendingMedia.id, answer.id)} style={styles.eventOption}>
                <Text style={styles.eventOptionTitle}>{answer.label}</Text>
                <Text style={styles.eventOptionText}>{answer.description}</Text>
              </Pressable>
            ))}
          </EventPanel>
        ) : null}

        {pendingTrip ? (
          <EventPanel title={pendingTrip.title} text={pendingTrip.description}>
            {pendingTrip.options.map((option) => (
              <Pressable key={option.id} onPress={() => answerCampaignTrip(pendingTrip.id, option.id)} style={styles.eventOption}>
                <Text style={styles.eventOptionTitle}>{option.label}</Text>
                <Text style={styles.eventOptionText}>{option.description}</Text>
              </Pressable>
            ))}
          </EventPanel>
        ) : null}
      </View>

      {layer.debateAttack ? (
        <Card tone="dark">
          <Text style={styles.darkTitle}>{layer.debateAttack.title}</Text>
          <Text style={styles.darkText}>{layer.debateAttack.text}</Text>
          <View style={styles.responseGrid}>
            {layer.debateAttack.responseOptions.map((response) => (
              <Pressable key={response.id} onPress={() => answerDebateAttack(response.id)} style={styles.darkOption}>
                <Text style={styles.darkOptionTitle}>{response.label}</Text>
                <Text style={styles.darkOptionText}>{response.description}</Text>
              </Pressable>
            ))}
          </View>
        </Card>
      ) : null}

      {layer.feedbackLog[0] ? (
        <Card>
          <SectionTitle>Posledni zpetna vazba</SectionTitle>
          <Text style={styles.feedbackTitle}>{layer.feedbackLog[0].title}</Text>
          <Text style={styles.bodyText}>{layer.feedbackLog[0].message}</Text>
        </Card>
      ) : null}
    </GameScreen>
  );
}

function ChoiceButton({ isActive, label, onPress }: { isActive: boolean; label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.choiceButton, isActive && styles.choiceButtonActive]}>
      <Text style={[styles.choiceText, isActive && styles.choiceTextActive]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

function EventPanel({ children, text, title }: { children: ReactNode; text: string; title: string }) {
  return (
    <Card>
      <SectionTitle>{title}</SectionTitle>
      <Text style={styles.bodyText}>{text}</Text>
      <View style={styles.eventStack}>{children}</View>
    </Card>
  );
}

function Effect({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.effect}>
      <Text style={styles.effectLabel}>{label}</Text>
      <Text style={styles.effectValue}>{formatSigned(value)}</Text>
    </View>
  );
}

function Breakdown({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.breakdownRow}>
      <Text style={styles.breakdownLabel}>{label}</Text>
      <Text style={styles.breakdownValue}>{value.toFixed(2)}</Text>
    </View>
  );
}

function groupIssues(issues: Issue[]) {
  return issues.reduce<Record<string, Issue[]>>((groups, issue) => {
    groups[issue.domain] = groups[issue.domain] ?? [];
    groups[issue.domain].push(issue);
    return groups;
  }, {});
}

function metricTone(value: number) {
  if (value >= 0.68) {
    return 'good' as const;
  }
  if (value <= 0.42) {
    return 'warn' as const;
  }
  return undefined;
}

function positionLabel(value: number) {
  if (value <= -2) return '--';
  if (value === -1) return '-';
  if (value === 0) return '0';
  if (value === 1) return '+';
  return '++';
}

function greenDealPositionLabel(value: number) {
  if (value <= -2) return 'Odmitnout jako ohrozeni';
  if (value === -1) return 'Spise odmitnout';
  if (value === 0) return 'Reformovat';
  if (value === 1) return 'Spise podporit';
  return 'Silne podporit';
}

function formatSigned(value: number) {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}`;
}

const styles = StyleSheet.create({
  bodyText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
  },
  breakdownLabel: {
    color: colors.text,
    flex: 1,
    fontSize: 12,
    fontWeight: '800',
  },
  breakdownRow: {
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 6,
  },
  breakdownValue: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },
  choiceButton: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 88,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  choiceButtonActive: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
  },
  choiceText: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '900',
    textAlign: 'center',
  },
  choiceTextActive: {
    color: colors.textOnPrimary,
  },
  controlRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  controlTitle: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 6,
  },
  darkOption: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    width: '48.5%',
  },
  darkOptionText: {
    color: '#BFD3E6',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
    marginTop: 2,
  },
  darkOptionTitle: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: '900',
  },
  darkText: {
    color: '#DCEAF7',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
  },
  darkTitle: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '900',
  },
  domainBlock: {
    gap: 6,
  },
  domainTitle: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  effect: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 98,
    padding: 8,
  },
  effectGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 4,
  },
  effectLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
  },
  effectValue: {
    color: colors.primaryDark,
    fontSize: 14,
    fontWeight: '900',
  },
  eventOption: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
  eventOptionText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
    marginTop: 2,
  },
  eventOptionTitle: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },
  eventStack: {
    gap: 7,
  },
  feedbackTitle: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  framingCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
  framingCardActive: {
    borderColor: colors.selected,
  },
  framingStack: {
    gap: 7,
  },
  framingText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
  },
  framingTitle: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },
  issueChip: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 136,
    padding: 8,
  },
  issueChipActive: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
  },
  issueChipMeta: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
  },
  issueChipText: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '900',
  },
  issueChipTextActive: {
    color: colors.textOnPrimary,
  },
  issueWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  mainGrid: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  packageActive: {
    borderColor: colors.selected,
  },
  packageCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
    width: '48.5%',
  },
  packageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  packageMeta: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '900',
    marginTop: 4,
  },
  packageText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
    marginTop: 2,
  },
  packageTitle: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },
  responseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
});
