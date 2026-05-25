import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { MediaAppearanceDecision, MediaInvitation, MediaOutlet } from '@/src/game/types';
import { colors } from '@/src/theme/colors';

type MediaInvitationCardProps = {
  invitation: MediaInvitation;
  onDecision: (decision: MediaAppearanceDecision) => void;
  outlet?: MediaOutlet;
};

export function MediaInvitationCard({ invitation, onDecision, outlet }: MediaInvitationCardProps) {
  const reach = Math.round((invitation.expectedReach ?? outlet?.baseReach ?? outlet?.reach ?? 0) * 100);

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
              {invitation.title ?? 'Mediální pozvánka'}
            </Text>
          </View>
          <View style={styles.reach}>
            <Text style={styles.reachLabel}>Dosah</Text>
            <Text style={styles.reachValue}>{reach}%</Text>
          </View>
        </View>

        {invitation.resolved ? (
          <Text style={styles.resolved}>Pozvánka vyřešena</Text>
        ) : (
          <View style={styles.actions}>
            <Pressable
              onPress={() => onDecision({ action: 'decline', invitationId: invitation.id, preparationLevel: 'none' })}
              style={[styles.action, styles.decline]}
            >
              <Text style={[styles.actionText, styles.declineText]}>Odmítnout</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                onDecision({
                  action: 'accept',
                  invitationId: invitation.id,
                  preparationLevel: 'basic',
                  speakerRole: 'leader',
                })
              }
              style={[styles.action, styles.accept]}
            >
              <Text style={styles.acceptText}>Předseda</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                onDecision({
                  action: 'accept',
                  invitationId: invitation.id,
                  preparationLevel: 'basic',
                  speakerRole: 'regionalFigure',
                })
              }
              style={[styles.action, styles.acceptAlt]}
            >
              <Text style={styles.acceptText}>Regionální tvář</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accept: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
  },
  acceptAlt: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    flex: 1.25,
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
    gap: 6,
    marginTop: 10,
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
    marginTop: 11,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  signal: {
    backgroundColor: colors.accent,
    width: 5,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '900',
    lineHeight: 20,
  },
});

