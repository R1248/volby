import { StyleSheet, Text, View } from 'react-native';

import { GameScreen } from '@/src/components/layout/GameScreen';
import { MediaInvitationCard } from '@/src/components/media/MediaInvitationCard';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

export default function MediaScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const respondToEarnedMediaInvitation = useGameStore((state) => state.respondToEarnedMediaInvitation);
  const weeklyInvitations = gameState.mediaInvitations.filter(
    (invitation) => invitation.week === gameState.week || (!invitation.resolved && invitation.week <= gameState.week),
  );

  return (
    <GameScreen activeItem="Media" title="Média a Q&A" titleInStatusStrip>
      <View style={styles.board}>
        {weeklyInvitations.length === 0 ? (
          <Text style={styles.empty}>Tento týden zatím nepřišla žádná mediální pozvánka.</Text>
        ) : null}
        {weeklyInvitations.map((invitation) => {
          const outlet = gameState.media.find((item) => item.id === invitation.outletId);
          const result = gameState.mediaAppearanceResults?.find((item) => item.invitationId === invitation.id);
          return (
            <MediaInvitationCard
              invitation={invitation}
              key={invitation.id}
              onDecision={respondToEarnedMediaInvitation}
              outlet={outlet}
              result={result}
            />
          );
        })}
      </View>
    </GameScreen>
  );
}

const styles = StyleSheet.create({
  board: {
    backgroundColor: colors.surfaceSoft,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 9,
    minHeight: 180,
    padding: 9,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '800',
    lineHeight: 18,
    padding: 10,
  },
});
