import { StyleSheet, Text, View } from 'react-native';

import { GameScreen } from '@/src/components/layout/GameScreen';
import { Card, SectionTitle } from '@/src/components/ui/StrategyCards';
import type { LeaderTraits } from '@/src/game/types';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

export default function LeaderScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const party = gameState.parties.find((item) => item.id === gameState.playerPartyId);
  const runtime = gameState.partyRuntime.player;

  if (!party) {
    return null;
  }

  return (
    <GameScreen
      activeItem="Lídr"
      subtitle="Samostatná karta předsedy, jeho síla v kampani, únava a mediální výkon."
      title="Karta lídra"
    >
      <View style={styles.leaderStage}>
        <View style={styles.portraitCard}>
          <View style={styles.flagStrip}>
            <View style={styles.flagBlue} />
            <View style={styles.flagWhite} />
            <View style={styles.flagRed} />
          </View>
          <View style={[styles.portraitRing, { borderColor: party.color }]}>
            <Text style={styles.portraitInitials}>{initials(party.leaderName)}</Text>
          </View>
          <Text style={styles.portraitRole}>předseda strany</Text>
          <Text style={styles.portraitParty}>{party.shortName}</Text>
        </View>

        <View style={styles.leaderMainCard}>
          <Text style={styles.kicker}>Karta předsedy</Text>
          <Text style={styles.leaderName}>{party.leaderName}</Text>
          <Text style={styles.archetype}>{leaderArchetype(party.leaderTraits)}</Text>

          <View style={styles.statusRow}>
            <StatusBadge label="Čas týdne" value={`${runtime.leader.timeUsed.toFixed(1)} / ${runtime.leader.timeCap.toFixed(1)}`} />
            <StatusBadge label="Únava" value={`${Math.round(runtime.leader.fatigue * 100)} %`} warning={runtime.leader.fatigue > 0.55} />
            <StatusBadge label="Energie" value={`${Math.round(runtime.leader.energy * 100)} %`} />
          </View>

          <View style={styles.traitGrid}>
            <TraitLine label="Charisma" value={party.leaderTraits.charisma} />
            <TraitLine label="Debata" value={party.leaderTraits.debate} />
            <TraitLine label="Disciplína" value={party.leaderTraits.discipline} />
            <TraitLine label="Odbornost" value={party.leaderTraits.knowledge} />
            <TraitLine label="Empatie" value={party.leaderTraits.empathy} />
            <TraitLine label="Výdrž" value={party.leaderTraits.stamina} />
          </View>
        </View>
      </View>

      <View style={styles.detailRow}>
        <Card tone="gold">
          <SectionTitle>Kampaňový efekt</SectionTitle>
          <Text style={styles.note}>
            Předseda posiluje televizní rozhovory, debaty, výjezdy a krizové reakce. Vysoká únava snižuje výkon a zvyšuje riziko slabého mediálního týdne.
          </Text>
        </Card>

        <Card>
          <SectionTitle>Poradce štábu</SectionTitle>
          <Text style={styles.note}>
            {runtime.leader.fatigue > 0.55
              ? 'Lídr je přetížený. Tento týden zvaž terénní organizaci nebo delegování médií.'
              : 'Lídr má prostor pro viditelnou akci. Debata, TV rozhovor nebo výjezd mohou dobře navázat na hlavní téma týdne.'}
          </Text>
        </Card>
      </View>
    </GameScreen>
  );
}

function StatusBadge({ label, value, warning }: { label: string; value: string; warning?: boolean }) {
  return (
    <View style={[styles.statusBadge, warning && styles.statusBadgeWarning]}>
      <Text style={styles.statusLabel}>{label}</Text>
      <Text style={styles.statusValue}>{value}</Text>
    </View>
  );
}

function TraitLine({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.traitLine}>
      <Text style={styles.traitLabel}>{label}</Text>
      <View style={styles.traitTrack}>
        <View style={[styles.traitFill, { width: `${Math.round(value * 100)}%` }]} />
      </View>
      <Text style={styles.traitValue}>{Math.round(value * 100)}</Text>
    </View>
  );
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function leaderArchetype(traits: LeaderTraits) {
  const labels: { key: keyof LeaderTraits; text: string }[] = [
    { key: 'charisma', text: 'Mobilizátor davu' },
    { key: 'debate', text: 'Debatní specialista' },
    { key: 'discipline', text: 'Disciplinovaný stratég' },
    { key: 'knowledge', text: 'Programový mozek' },
    { key: 'empathy', text: 'Terénní tahoun' },
    { key: 'stamina', text: 'Maratonec kampaně' },
  ];
  return labels.reduce((best, item) => (traits[item.key] > traits[best.key] ? item : best), labels[0]).text;
}

const styles = StyleSheet.create({
  archetype: {
    color: '#BFD3E6',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 4,
  },
  detailRow: {
    flexDirection: 'row',
    gap: 10,
  },
  flagBlue: {
    backgroundColor: colors.primaryDark,
    flex: 1.2,
  },
  flagRed: {
    backgroundColor: colors.accent,
    flex: 1,
  },
  flagStrip: {
    flexDirection: 'row',
    height: 10,
  },
  flagWhite: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  kicker: {
    color: colors.selected,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  leaderMainCard: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 16,
  },
  leaderName: {
    color: colors.textOnPrimary,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 0,
    marginTop: 4,
  },
  leaderStage: {
    flexDirection: 'row',
    gap: 12,
  },
  note: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 19,
  },
  portraitCard: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: 220,
  },
  portraitInitials: {
    color: colors.textOnPrimary,
    fontSize: 48,
    fontWeight: '900',
  },
  portraitParty: {
    color: colors.selected,
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 18,
    textAlign: 'center',
  },
  portraitRing: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 68,
    borderWidth: 4,
    height: 136,
    justifyContent: 'center',
    marginTop: 18,
    width: 136,
  },
  portraitRole: {
    color: '#BFD3E6',
    fontSize: 11,
    fontWeight: '900',
    marginTop: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  statusBadge: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.18)',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 10,
  },
  statusBadgeWarning: {
    borderColor: colors.warning,
  },
  statusLabel: {
    color: '#BFD3E6',
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  statusRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  statusValue: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: '900',
    marginTop: 2,
  },
  traitFill: {
    backgroundColor: colors.selected,
    borderRadius: 999,
    height: '100%',
  },
  traitGrid: {
    marginTop: 16,
  },
  traitLabel: {
    color: '#DCEAF7',
    fontSize: 12,
    fontWeight: '800',
    width: 86,
  },
  traitLine: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 9,
    marginTop: 9,
  },
  traitTrack: {
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 999,
    flex: 1,
    height: 8,
    overflow: 'hidden',
  },
  traitValue: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'right',
    width: 26,
  },
});
