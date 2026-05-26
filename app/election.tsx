import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GameScreen } from '@/src/components/layout/GameScreen';
import { Card, Grid, Metric, SectionTitle } from '@/src/components/ui/StrategyCards';
import { coalitionScore, computeElectionResult, formatPercent } from '@/src/game/engine';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

export default function ElectionScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const electionResult = useMemo(() => computeElectionResult(gameState), [gameState]);
  const finalState = { ...gameState, nationalSupport: electionResult.nationalSupport };
  const seats = electionResult.seats;
  const coalitionA = coalitionScore(finalState, ['player', 'spd', 'motorists']);
  const coalitionB = coalitionScore(finalState, ['ods', 'stan', 'kdu', 'top09']);

  return (
    <GameScreen
      activeItem="Volby"
      subtitle="Zjednodušená volební noc: práh 5 %, přepočet mandátů a první koaliční scénáře."
      title="Volební noc"
    >
      <Grid>
        {gameState.parties.map((party) => (
          <Metric key={party.id} label={party.shortName} value={`${formatPercent(electionResult.nationalSupport[party.id])} · ${seats[party.id]} mand.`} />
        ))}
      </Grid>

      <Card>
        <SectionTitle>Mandátový přepočet</SectionTitle>
        {gameState.parties.map((party) => (
          <View key={party.id} style={styles.partyRow}>
            <Text style={styles.partyName}>{party.name}</Text>
            <Text style={styles.partySupport}>{formatPercent(electionResult.nationalSupport[party.id])}</Text>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, { backgroundColor: party.color, width: `${Math.min(100, seats[party.id] / 2)}%` }]} />
            </View>
            <Text style={styles.seats}>{seats[party.id]}</Text>
          </View>
        ))}
      </Card>

      <Card tone="gold">
        <SectionTitle>Koaliční potenciál</SectionTitle>
        <Text style={styles.note}>ANO + SPD + AUTO: skóre {coalitionA}</Text>
        <Text style={styles.note}>ODS + STAN + KDU + TOP: skóre {coalitionB}</Text>
        <Text style={styles.note}>Skóre kombinuje mandátovou rezervu, kompatibilitu, reputaci a kontroverze.</Text>
      </Card>
    </GameScreen>
  );
}

const styles = StyleSheet.create({
  barFill: {
    borderRadius: 999,
    height: '100%',
  },
  barTrack: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 999,
    flex: 1,
    height: 9,
    overflow: 'hidden',
  },
  note: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '800',
  },
  partyName: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '800',
    width: 150,
  },
  partyRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  partySupport: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
    width: 54,
  },
  seats: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
    textAlign: 'right',
    width: 34,
  },
});
