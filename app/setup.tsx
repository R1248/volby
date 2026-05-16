import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { GameScreen } from '@/src/components/layout/GameScreen';
import { Card, Grid, Metric, SectionTitle } from '@/src/components/ui/StrategyCards';
import { createInitialGameState } from '@/src/game/seed';
import type { PartyId, PartySeed } from '@/src/game/types';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

const roleLabels = {
  government: 'vládní strana',
  opposition: 'opozice',
  outsider: 'outsider',
} as const;

const profileLabels = {
  major: 'favorit na vítězství',
  mid: 'střední síla',
  small: 'menší strana',
  outsider: 'vyzyvatel',
} as const;

export default function SetupScreen() {
  const router = useRouter();
  const gameState = useGameStore((state) => state.gameState);
  const startNewGame = useGameStore((state) => state.startNewGame);
  const partyTemplates = useMemo(() => createInitialGameState().parties.filter((party) => party.playable), []);
  const [selectedPartyId, setSelectedPartyId] = useState<PartyId>('player');
  const selectedParty = partyTemplates.find((party) => party.id === selectedPartyId) ?? partyTemplates[0];

  const handleStart = () => {
    startNewGame(selectedParty.id);
    router.replace('/map');
  };

  return (
    <GameScreen
      activeItem="Setup"
      subtitle="Vyber stranickou šablonu a lídra kampaně. Pravidla běží ve full realism režimu."
      title="Nová kampaň"
    >
      <Grid>
        <Metric label="Režim" value="Full realism" />
        <Metric label="Týdnů kampaně" value={String(gameState.rules.totalWeeks)} />
        <Metric label="Kraje" value={String(gameState.regions.length)} />
        <Metric label="Segmenty" value={String(gameState.segments.length)} />
      </Grid>

      <View style={styles.selectionRow}>
        <Card>
          <SectionTitle>Výběr strany</SectionTitle>
          <View style={styles.partyGrid}>
            {partyTemplates.map((party) => (
              <PartyChoiceCard
                isSelected={party.id === selectedParty.id}
                key={party.id}
                onPress={() => setSelectedPartyId(party.id)}
                party={party}
              />
            ))}
          </View>
        </Card>

        <PartyProfileCard party={selectedParty} />
      </View>

      <Card tone="dark">
        <View style={styles.startRow}>
          <View style={styles.startCopy}>
            <Text style={styles.startTitle}>Připraveno ve štábu</Text>
            <Text style={styles.startText}>
              Start nové hry vytvoří čerstvý uložený stav, vybranou stranu nastaví jako hráčovu kampaň a otevře mapu krajů.
            </Text>
          </View>
          <Pressable onPress={handleStart} style={styles.startButton}>
            <Text style={styles.startButtonText}>Zahájit kampaň</Text>
          </Pressable>
        </View>
      </Card>
    </GameScreen>
  );
}

function PartyChoiceCard({
  isSelected,
  onPress,
  party,
}: {
  isSelected: boolean;
  onPress: () => void;
  party: PartySeed;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.partyCard, isSelected && styles.partyCardSelected]}>
      <View style={[styles.partyColor, { backgroundColor: party.color }]} />
      <View style={styles.partyText}>
        <Text style={[styles.partyName, isSelected && styles.partyNameSelected]} numberOfLines={1}>
          {party.name}
        </Text>
        <Text style={[styles.partyMeta, isSelected && styles.partyMetaSelected]} numberOfLines={1}>
          {party.shortName} · {roleLabels[party.officeRole]} · {profileLabels[party.winProfile]}
        </Text>
        <Text style={[styles.partyLeader, isSelected && styles.partyMetaSelected]} numberOfLines={1}>
          Předseda: {party.leaderName}
        </Text>
      </View>
    </Pressable>
  );
}

function PartyProfileCard({ party }: { party: PartySeed }) {
  return (
    <View style={styles.gameProfileCard}>
      <View style={styles.profileTop}>
        <View style={styles.profileCopy}>
          <Text style={styles.profileKicker}>Vybraná frakce</Text>
          <Text style={styles.profileTitle}>{party.name}</Text>
          <Text style={styles.profileSubtitle}>{roleLabels[party.officeRole]} · {profileLabels[party.winProfile]}</Text>
        </View>
        <View style={[styles.profileEmblem, { backgroundColor: party.color }]}>
          <Text style={styles.profileEmblemText}>{party.shortName}</Text>
        </View>
      </View>

      <View style={styles.leaderShowcase}>
        <View style={styles.leaderPortrait}>
          <View style={styles.portraitFlag}>
            <View style={styles.flagBlue} />
            <View style={styles.flagWhite} />
            <View style={styles.flagRed} />
          </View>
          <View style={[styles.portraitRing, { borderColor: party.color }]}>
            <Text style={styles.portraitInitials}>{initials(party.leaderName)}</Text>
          </View>
          <Text style={styles.portraitLabel}>kandidát</Text>
        </View>

        <View style={styles.leaderPanel}>
          <Text style={styles.leaderLabel}>Karta předsedy</Text>
          <Text style={styles.leaderName}>{party.leaderName}</Text>
          <Text style={styles.leaderRole}>{leaderArchetype(party)}</Text>
          <TraitBar label="Charisma" value={party.leaderTraits.charisma} />
          <TraitBar label="Debata" value={party.leaderTraits.debate} />
          <TraitBar label="Disciplína" value={party.leaderTraits.discipline} />
          <TraitBar label="Odbornost" value={party.leaderTraits.knowledge} />
          <TraitBar label="Výdrž" value={party.leaderTraits.stamina} />
        </View>
      </View>

      <View style={styles.profileLoadout}>
        <LoadoutPill label="Rozpočet" value={`${party.startingCash.toFixed(1)}M Kč`} />
        <LoadoutPill label="Kapacita" value={`${party.weeklyStaffCap} rozkazy`} />
        <LoadoutPill label="Startovní důvěra" value={`${Math.round(party.reputation.trust * 100)} %`} />
      </View>
    </View>
  );
}

function TraitBar({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.traitRow}>
      <Text style={styles.traitLabel}>{label}</Text>
      <View style={styles.traitTrack}>
        <View style={[styles.traitFill, { width: `${Math.round(value * 100)}%` }]} />
      </View>
      <Text style={styles.traitValue}>{Math.round(value * 100)}</Text>
    </View>
  );
}

function LoadoutPill({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.loadoutPill}>
      <Text style={styles.loadoutLabel}>{label}</Text>
      <Text style={styles.loadoutValue}>{value}</Text>
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

function leaderArchetype(party: PartySeed) {
  const traits = party.leaderTraits;
  const entries = [
    { label: 'Mobilizátor davu', value: traits.charisma },
    { label: 'Debatní specialista', value: traits.debate },
    { label: 'Disciplinovaný stratég', value: traits.discipline },
    { label: 'Programový mozek', value: traits.knowledge },
    { label: 'Terénní tahoun', value: traits.empathy },
    { label: 'Maratonec kampaně', value: traits.stamina },
  ];
  return entries.reduce((best, item) => (item.value > best.value ? item : best), entries[0]).label;
}

const styles = StyleSheet.create({
  flagBlue: {
    backgroundColor: colors.primaryDark,
    flex: 1.2,
  },
  flagRed: {
    backgroundColor: colors.accent,
    flex: 1,
  },
  flagWhite: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  gameProfileCard: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 12,
    padding: 12,
  },
  leaderLabel: {
    color: colors.selected,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  leaderName: {
    color: colors.textOnPrimary,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 1,
  },
  leaderPanel: {
    flex: 1,
  },
  leaderPortrait: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderColor: 'rgba(255,255,255,0.16)',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: 116,
  },
  leaderRole: {
    color: '#BFD3E6',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 5,
    marginTop: 2,
  },
  leaderShowcase: {
    flexDirection: 'row',
    gap: 12,
  },
  loadoutLabel: {
    color: '#BFD3E6',
    fontSize: 9,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  loadoutPill: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.16)',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 7,
  },
  loadoutValue: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 2,
  },
  partyCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 9,
    minHeight: 74,
    padding: 10,
    width: '48.5%',
  },
  partyCardSelected: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
    borderWidth: 2,
  },
  partyColor: {
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 7,
    borderWidth: 1,
    height: 42,
    width: 12,
  },
  partyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    maxWidth: 560,
  },
  partyLeader: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
  },
  partyMeta: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
    textTransform: 'uppercase',
  },
  partyMetaSelected: {
    color: '#DCEAF7',
  },
  partyName: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  partyNameSelected: {
    color: colors.textOnPrimary,
  },
  partyText: {
    flex: 1,
  },
  portraitFlag: {
    flexDirection: 'row',
    height: 7,
  },
  portraitInitials: {
    color: colors.textOnPrimary,
    fontSize: 26,
    fontWeight: '900',
  },
  portraitLabel: {
    color: '#BFD3E6',
    fontSize: 9,
    fontWeight: '900',
    marginBottom: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  portraitRing: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 36,
    borderWidth: 3,
    height: 72,
    justifyContent: 'center',
    marginTop: 10,
    width: 72,
  },
  profileCopy: {
    flex: 1,
  },
  profileEmblem: {
    alignItems: 'center',
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 8,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    width: 54,
  },
  profileEmblemText: {
    color: colors.textOnPrimary,
    fontSize: 15,
    fontWeight: '900',
  },
  profileKicker: {
    color: colors.selected,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  profileLoadout: {
    flexDirection: 'row',
    gap: 7,
  },
  profileSubtitle: {
    color: '#BFD3E6',
    fontSize: 11,
    fontWeight: '800',
    marginTop: 2,
  },
  profileTitle: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: '900',
  },
  profileTop: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  selectionRow: {
    alignItems: 'stretch',
    flexDirection: 'row',
    gap: 10,
  },
  startButton: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  startButtonText: {
    color: colors.textOnPrimary,
    fontSize: 13,
    fontWeight: '900',
  },
  startCopy: {
    flex: 1,
  },
  startRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  startText: {
    color: '#DCEAF7',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 3,
  },
  startTitle: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '900',
  },
  traitFill: {
    backgroundColor: colors.selected,
    borderRadius: 999,
    height: '100%',
  },
  traitLabel: {
    color: '#DCEAF7',
    fontSize: 11,
    fontWeight: '800',
    width: 72,
  },
  traitRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    marginTop: 5,
  },
  traitTrack: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 999,
    flex: 1,
    height: 7,
    overflow: 'hidden',
  },
  traitValue: {
    color: colors.textOnPrimary,
    fontSize: 11,
    fontWeight: '900',
    textAlign: 'right',
    width: 24,
  },
});
