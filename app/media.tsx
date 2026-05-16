import { Pressable, StyleSheet, Text, View } from 'react-native';

import { GameScreen } from '@/src/components/layout/GameScreen';
import { Card, Grid, Metric, SectionTitle } from '@/src/components/ui/StrategyCards';
import type { MediaInvitation } from '@/src/game/types';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

const responseLabels: Record<NonNullable<MediaInvitation['response']>, string> = {
  leader: 'Osobně',
  delegate: 'Delegovat',
  decline: 'Odmítnout',
  ignore: 'Ignorovat',
};

export default function MediaScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const answerPendingQuestion = useGameStore((state) => state.answerPendingQuestion);
  const respondToInvitation = useGameStore((state) => state.respondToInvitation);
  const pendingQuestion = gameState.questions.find((question) => !question.resolvedOptionId);

  return (
    <GameScreen
      activeItem="Média"
      subtitle="Média generují dosah, riziko, pozvánky a Q&A situace. Odpověď mění věcnost, rétoriku, konzistenci i kontroverzi."
      title="Média a Q&A"
    >
      <Grid>
        {gameState.media.map((outlet) => (
          <Metric
            key={outlet.id}
            label={outlet.name}
            value={`dosah ${Math.round(outlet.reach * 100)}%`}
            tone={outlet.scrutiny + outlet.sensationalism > 0.68 ? 'warn' : undefined}
          />
        ))}
      </Grid>

      <Card>
        <SectionTitle>Pozvánky týdne</SectionTitle>
        <View style={styles.invitationGrid}>
          {gameState.mediaInvitations.map((invitation) => {
            const outlet = gameState.media.find((item) => item.id === invitation.outletId);
            return (
              <View key={invitation.id} style={styles.invitationCard}>
                <Text style={styles.invitationTitle}>{invitation.format} · {invitation.issue}</Text>
                <Text style={styles.invitationMeta}>
                  {outlet?.name ?? invitation.outletId} · reach {Math.round((outlet?.reach ?? 0) * 100)} % · riziko {Math.round(invitation.risk * 100)} %
                </Text>
                <View style={styles.responseRow}>
                  {(Object.keys(responseLabels) as NonNullable<MediaInvitation['response']>[]).map((response) => (
                    <Pressable
                      key={response}
                      onPress={() => respondToInvitation(invitation.id, response)}
                      style={[styles.responseButton, invitation.response === response && styles.responseSelected]}
                    >
                      <Text style={[styles.responseText, invitation.response === response && styles.responseTextSelected]}>
                        {responseLabels[response]}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            );
          })}
        </View>
      </Card>

      {pendingQuestion ? (
        <Card tone="dark">
          <Text style={styles.darkTitle}>Q&A event</Text>
          <Text style={styles.darkText}>{pendingQuestion.prompt}</Text>
          <View style={styles.options}>
            {pendingQuestion.options.map((option) => (
              <Pressable
                key={option.id}
                onPress={() => answerPendingQuestion(pendingQuestion.id, option.id)}
                style={styles.option}
              >
                <Text style={styles.optionText}>{option.text}</Text>
                <Text style={styles.optionMeta}>
                  fakta {Math.round(option.factValue * 100)} · rétorika {Math.round(option.rhetoricValue * 100)} · konzistence {Math.round(option.consistencyValue * 100)} · riziko {Math.round(option.controversyRisk * 100)} %
                </Text>
              </Pressable>
            ))}
          </View>
        </Card>
      ) : (
        <Card tone="gold">
          <SectionTitle>Žádný otevřený Q&A event</SectionTitle>
          <Text style={styles.note}>Další otázky vzniknou po debatě, rozhovoru, návštěvě školy nebo krizové reakci.</Text>
        </Card>
      )}

      <Card>
        <SectionTitle>Politické události týdne</SectionTitle>
        {gameState.events.map((event) => (
          <Text key={event.id} style={styles.note}>
            {event.title} · dopad {Math.round(event.severity * 100)} % · {event.scope === 'national' ? 'celostátní' : event.regionId}
          </Text>
        ))}
      </Card>
    </GameScreen>
  );
}

const styles = StyleSheet.create({
  darkText: {
    color: '#DCEAF7',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
    marginTop: 4,
  },
  darkTitle: {
    color: colors.textOnPrimary,
    fontSize: 17,
    fontWeight: '900',
  },
  invitationCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 9,
    width: '48.5%',
  },
  invitationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  invitationMeta: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    marginTop: 3,
  },
  invitationTitle: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
  },
  note: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
  },
  option: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.18)',
    borderRadius: 8,
    borderWidth: 1,
    padding: 9,
  },
  optionMeta: {
    color: '#BFD3E6',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 3,
  },
  optionText: {
    color: colors.textOnPrimary,
    fontSize: 13,
    fontWeight: '800',
  },
  options: {
    gap: 7,
  },
  responseButton: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  responseRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },
  responseSelected: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
  },
  responseText: {
    color: colors.primaryDark,
    fontSize: 10,
    fontWeight: '900',
  },
  responseTextSelected: {
    color: colors.textOnPrimary,
  },
});
