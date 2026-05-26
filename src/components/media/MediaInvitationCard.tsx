import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { scoreMediaMiniGameAnswers } from '@/src/game/mediaEngine';
import type { GameState, MediaAppearanceDecision, MediaAppearanceResult, MediaInvitation, MediaMiniGameAnswer, MediaMiniGameQuestion, MediaOutlet, SpeakerRole } from '@/src/game/types';
import { colors } from '@/src/theme/colors';

type MediaInvitationCardProps = {
  gameState: GameState;
  invitation: MediaInvitation;
  minigameQuestions?: MediaMiniGameQuestion[];
  onDecision: (decision: MediaAppearanceDecision) => void;
  outlet?: MediaOutlet;
  result?: MediaAppearanceResult;
};

export function MediaInvitationCard({ gameState, invitation, minigameQuestions = [], onDecision, outlet, result }: MediaInvitationCardProps) {
  const reach = Math.round((invitation.expectedReach ?? outlet?.baseReach ?? outlet?.reach ?? 0) * 100);
  const [speakerRole, setSpeakerRole] = useState<SpeakerRole>('leader');
  const [minigameStarted, setMinigameStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<MediaMiniGameAnswer[]>([]);
  const [secondsLeft, setSecondsLeft] = useState<number | undefined>();
  const [soundbiteProblem, setSoundbiteProblem] = useState<MediaMiniGameAnswer | undefined>();
  const [soundbiteValue, setSoundbiteValue] = useState<MediaMiniGameAnswer | undefined>();
  const [soundbiteSolution, setSoundbiteSolution] = useState<MediaMiniGameAnswer | undefined>();
  const currentQuestion = minigameStarted ? minigameQuestions[questionIndex] : undefined;
  const hasMinigame = minigameQuestions.length > 0 && Boolean(invitation.miniGameType);

  useEffect(() => {
    setQuestionIndex(0);
    setAnswers([]);
    setMinigameStarted(false);
    setSecondsLeft(undefined);
    setSoundbiteProblem(undefined);
    setSoundbiteValue(undefined);
    setSoundbiteSolution(undefined);
  }, [invitation.id]);

  const speakerOptions = useMemo(
    () =>
      (invitation.recommendedSpeakerRoles?.length ? invitation.recommendedSpeakerRoles : ['leader', 'regionalFigure']).filter(
        (role, index, roles) => roles.indexOf(role) === index,
      ),
    [invitation.recommendedSpeakerRoles],
  );

  const submitAnswer = useCallback((answer: MediaMiniGameAnswer | undefined) => {
    if (!currentQuestion || !outlet) {
      return;
    }

    const nextAnswers = [...answers, answer ?? fallbackAnswer(currentQuestion)];
    if (nextAnswers.length >= minigameQuestions.length) {
      const miniGameResult = scoreMediaMiniGameAnswers(nextAnswers, minigameQuestions, {
        invitation,
        outlet,
        speakerRole,
        state: gameState,
      });
      onDecision({
        action: 'accept',
        invitationId: invitation.id,
        miniGameResult,
        preparationLevel: 'basic',
        speakerRole,
      });
      return;
    }

    setAnswers(nextAnswers);
    setQuestionIndex((index) => index + 1);
  }, [answers, currentQuestion, gameState, invitation, minigameQuestions, onDecision, outlet, speakerRole]);

  useEffect(() => {
    if (!currentQuestion?.timeLimitSec) {
      setSecondsLeft(undefined);
      return undefined;
    }

    setSecondsLeft(currentQuestion.timeLimitSec);
    const timer = setInterval(() => {
      setSecondsLeft((current) => {
        if (current === undefined || current <= 1) {
          clearInterval(timer);
          submitAnswer(undefined);
          return undefined;
        }
        return current - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestion?.id, currentQuestion?.timeLimitSec, submitAnswer]);

  function acceptWithoutMinigame(role: SpeakerRole) {
    setSpeakerRole(role);
    if (hasMinigame) {
      setMinigameStarted(true);
      return;
    }

    onDecision({
      action: 'accept',
      invitationId: invitation.id,
      preparationLevel: 'basic',
      speakerRole: role,
    });
  }

  function submitSoundbite() {
    if (!outlet || !soundbiteProblem || !soundbiteValue || !soundbiteSolution) {
      return;
    }

    const miniGameResult = scoreMediaMiniGameAnswers([soundbiteProblem, soundbiteValue, soundbiteSolution], minigameQuestions, {
      invitation,
      outlet,
      speakerRole,
      state: gameState,
    });
    onDecision({
      action: 'accept',
      invitationId: invitation.id,
      miniGameResult,
      preparationLevel: 'basic',
      speakerRole,
    });
  }

  return (
    <View style={styles.card}>
      <View style={styles.signal} />
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.copy}>
            <Text style={styles.kicker} numberOfLines={1}>
              {outlet?.name ?? invitation.outletId}
            </Text>
            <Text style={styles.title} numberOfLines={2}>
              {invitation.title ?? 'Medialni pozvanka'}
            </Text>
          </View>
          <View style={styles.reach}>
            <Text style={styles.reachLabel}>Dosah</Text>
            <Text style={styles.reachValue}>{reach}%</Text>
          </View>
        </View>

        {invitation.resolved ? (
          <SentimentResult result={result} />
        ) : invitation.miniGameType === 'soundbite_builder' && minigameStarted ? (
          <View style={styles.minigame}>
            <Text style={styles.minigameKicker}>Soundbite</Text>
            <Text style={styles.prompt}>Slozte kratkou odpoved: problem, hodnota, reseni.</Text>
            <ChipGroup label="Problem" options={soundbiteProblems} selected={soundbiteProblem} onSelect={setSoundbiteProblem} />
            <ChipGroup label="Hodnota" options={soundbiteValues} selected={soundbiteValue} onSelect={setSoundbiteValue} />
            <ChipGroup label="Reseni" options={soundbiteSolutions(invitation.issueId)} selected={soundbiteSolution} onSelect={setSoundbiteSolution} />
            <Pressable
              disabled={!soundbiteProblem || !soundbiteValue || !soundbiteSolution}
              onPress={submitSoundbite}
              style={[styles.submitButton, (!soundbiteProblem || !soundbiteValue || !soundbiteSolution) && styles.disabledButton]}
            >
              <Text style={styles.submitText}>Odeslat vystup</Text>
            </Pressable>
          </View>
        ) : currentQuestion && hasMinigame ? (
          <View style={styles.minigame}>
            <View style={styles.speakerRow}>
              {speakerOptions.map((role) => (
                <Pressable
                  key={role}
                  onPress={() => setSpeakerRole(role)}
                  style={[styles.speakerChip, speakerRole === role && styles.speakerChipActive]}
                >
                  <Text style={[styles.speakerText, speakerRole === role && styles.speakerTextActive]}>{speakerLabel(role)}</Text>
                </Pressable>
              ))}
            </View>
            <View style={styles.minigameHeader}>
              <Text style={styles.minigameKicker}>
                {invitation.miniGameType === 'soundbite_builder' ? 'Soundbite' : 'Otazka'} {questionIndex + 1}/{minigameQuestions.length}
              </Text>
              {secondsLeft !== undefined ? <Text style={styles.timer}>{secondsLeft}s</Text> : null}
            </View>
            <Text style={styles.prompt}>{currentQuestion.prompt}</Text>
            <View style={styles.optionStack}>
              {currentQuestion.options.map((answer) => (
                <Pressable key={answer.id} onPress={() => submitAnswer(answer)} style={styles.answerOption}>
                  <Text style={styles.answerLabel}>{answer.label}</Text>
                  <Text style={styles.answerText}>{answer.text}</Text>
                </Pressable>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.actions}>
            <Pressable
              onPress={() => onDecision({ action: 'decline', invitationId: invitation.id, preparationLevel: 'none' })}
              style={[styles.action, styles.decline]}
            >
              <Text style={[styles.actionText, styles.declineText]}>Odmitnout</Text>
            </Pressable>
            {speakerOptions.map((role) => (
              <Pressable
                key={role}
                onPress={() => acceptWithoutMinigame(role)}
                style={[styles.action, role === 'leader' ? styles.accept : styles.acceptAlt]}
              >
                <Text style={styles.acceptText}>{speakerLabel(role)}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}

function SentimentResult({ result }: { result?: MediaAppearanceResult }) {
  const sentimentTitle = result?.sentimentRating
    ? `Medialni sentiment: ${result.sentimentRating}/5 (${result.sentimentLabel})`
    : `Medialni sentiment: ${result?.sentimentLabel ?? 'Vyreseno'}`;

  return (
    <View style={styles.sentimentBox}>
      <Text style={styles.resolved}>Pozvanka vyresena</Text>
      {result?.sentimentLabel ? (
        <>
          <Text style={styles.sentimentTitle}>
            {sentimentTitle} {result.status === 'pending' ? 'ceka' : 'zapocteno'}
          </Text>
          <Text style={styles.sentimentText}>{result.sentimentSummary}</Text>
          {result.programWarning ? <Text style={styles.programWarning}>{result.programWarning.text}</Text> : null}
          <Text style={styles.sentimentHint}>Presny dopad se projevi v tydennim vyhodnoceni.</Text>
        </>
      ) : null}
    </View>
  );
}

function ChipGroup({
  label,
  onSelect,
  options,
  selected,
}: {
  label: string;
  onSelect: (answer: MediaMiniGameAnswer) => void;
  options: MediaMiniGameAnswer[];
  selected?: MediaMiniGameAnswer;
}) {
  return (
    <View style={styles.chipGroup}>
      <Text style={styles.chipLabel}>{label}</Text>
      <View style={styles.speakerRow}>
        {options.map((option) => (
          <Pressable key={option.id} onPress={() => onSelect(option)} style={[styles.speakerChip, selected?.id === option.id && styles.speakerChipActive]}>
            <Text style={[styles.speakerText, selected?.id === option.id && styles.speakerTextActive]}>{option.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

function fallbackAnswer(question: MediaMiniGameQuestion): MediaMiniGameAnswer {
  return (
    question.options.find((answer) => answer.tone === 'vague' || answer.tone === 'evasive') ?? {
      id: 'timeout',
      label: 'Bez odpovedi',
      performanceDelta: -0.08,
      text: 'Bez konkretni odpovedi.',
      tone: 'vague',
    }
  );
}

function speakerLabel(role: SpeakerRole) {
  if (role === 'leader') return 'Predseda';
  if (role === 'expert') return 'Expert';
  if (role === 'regionalFigure') return 'Regionalni tvar';
  if (role === 'controversialFigure') return 'Ostry host';
  return 'Nova tvar';
}

const soundbiteProblems: MediaMiniGameAnswer[] = [
  { id: 'problem-costs', label: 'Naklady', text: 'Lide resi konkretni naklady.', performanceDelta: 0.025, answerType: 'empathy', tone: 'empathetic' },
  { id: 'problem-chaos', label: 'Chaos', text: 'Problem je nepredvidatelnost pravidel.', performanceDelta: 0.02, answerType: 'explanation', tone: 'specific' },
  { id: 'problem-blame', label: 'Vinici', text: 'Za problem mohou souperi.', performanceDelta: -0.005, controversyDelta: 0.04, answerType: 'attack', tone: 'aggressive' },
];

const soundbiteValues: MediaMiniGameAnswer[] = [
  { id: 'value-fairness', label: 'Ferovost', text: 'Reseni musi byt ferove.', performanceDelta: 0.02, answerType: 'empathy', tone: 'empathetic' },
  { id: 'value-security', label: 'Jistota', text: 'Cilem je jistota pro domacnosti.', performanceDelta: 0.025, answerType: 'explanation', tone: 'specific' },
  { id: 'value-freedom', label: 'Svoboda', text: 'Lide potrebuji prostor rozhodovat sami.', performanceDelta: 0.018, answerType: 'explanation', tone: 'technical' },
];

function soundbiteSolutions(issueId?: string): MediaMiniGameAnswer[] {
  const topicEffects: Partial<Record<string, Partial<Record<string, number>>>> = {
    energyPrices: { energyPrices: 1.2 },
    greenDeal: { greenDeal: 0.75 },
    housing: { housing: 1.2 },
    migration: { migration: 0.8 },
    nationalSovereignty: { nationalSovereignty: 1.1 },
    taxes: { taxes: 1.2 },
    ukraineSupport: { ukraineSupport: 1 },
  };
  const impliedIssuePosition = topicEffects[issueId ?? ''];
  return [
    {
      id: 'solution-plan',
      label: 'Plan',
      text: 'Ukazeme tri konkretni kroky a termin.',
      performanceDelta: 0.045,
      impliedIssuePosition,
      commitmentStrength: impliedIssuePosition ? 0.58 : 0.25,
      answerType: 'explanation',
      tone: 'specific',
    },
    {
      id: 'solution-compromise',
      label: 'Kompromis',
      text: 'Najdeme stredni cestu a pojistky.',
      performanceDelta: 0.025,
      commitmentStrength: 0.25,
      answerType: 'pivot',
      tone: 'evasive',
    },
    {
      id: 'solution-hardline',
      label: 'Razne',
      text: 'Prosadime raznou zmenu bez ustupku.',
      performanceDelta: 0.005,
      controversyDelta: 0.045,
      impliedIssuePosition,
      commitmentStrength: impliedIssuePosition ? 0.72 : 0.35,
      answerType: 'position',
      tone: 'aggressive',
    },
  ] as MediaMiniGameAnswer[];
}

const styles = StyleSheet.create({
  accept: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
  },
  acceptAlt: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    flex: 1.1,
  },
  acceptText: {
    color: colors.textOnPrimary,
    fontSize: 11,
    fontWeight: '900',
    textAlign: 'center',
  },
  action: {
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    minHeight: 38,
    paddingHorizontal: 7,
    paddingVertical: 8,
  },
  actionText: {
    fontSize: 11,
    fontWeight: '900',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 10,
  },
  answerLabel: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },
  answerOption: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
  answerText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
    marginTop: 2,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: '#FFFCF4',
    borderColor: '#B8C8D8',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 132,
    overflow: 'hidden',
    shadowColor: colors.primaryDark,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    width: '100%',
  },
  copy: {
    flex: 1,
    gap: 3,
    justifyContent: 'center',
  },
  decline: {
    backgroundColor: '#F8E4E7',
    borderColor: '#D9A0A7',
  },
  declineText: {
    color: colors.accentDark,
  },
  chipGroup: {
    gap: 5,
  },
  chipLabel: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  disabledButton: {
    opacity: 0.45,
  },
  header: {
    alignItems: 'stretch',
    flexDirection: 'row',
    gap: 9,
  },
  kicker: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  minigame: {
    gap: 8,
    marginTop: 10,
  },
  minigameHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  minigameKicker: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  optionStack: {
    gap: 6,
  },
  prompt: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
    lineHeight: 18,
  },
  reach: {
    alignItems: 'center',
    backgroundColor: colors.selected,
    borderColor: '#B18413',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 62,
    minWidth: 70,
    paddingHorizontal: 7,
  },
  reachLabel: {
    color: '#4B3600',
    fontSize: 9,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  reachValue: {
    color: '#221600',
    fontSize: 20,
    fontWeight: '900',
  },
  resolved: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primarySoft,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  sentimentBox: {
    gap: 5,
    marginTop: 10,
  },
  sentimentHint: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '800',
    lineHeight: 15,
  },
  sentimentText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },
  sentimentTitle: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },
  programWarning: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF4D6',
    borderColor: '#D9A51C',
    borderRadius: 8,
    borderWidth: 1,
    color: '#5C4200',
    fontSize: 11,
    fontWeight: '900',
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  signal: {
    backgroundColor: colors.accent,
    width: 5,
  },
  speakerChip: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  speakerChipActive: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
  },
  speakerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  speakerText: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '900',
  },
  speakerTextActive: {
    color: colors.textOnPrimary,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 38,
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  submitText: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: '900',
  },
  timer: {
    color: colors.accentDark,
    fontSize: 12,
    fontWeight: '900',
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 20,
  },
});
