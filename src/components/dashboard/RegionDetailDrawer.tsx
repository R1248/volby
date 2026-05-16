import { useEffect, useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

import { regionCampaignData } from '@/src/data/campaignMock';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';
import type { Region } from '@/src/types/region';

const DRAWER_WIDTH = 330;

type RegionDetailDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  region?: Region;
};

export function RegionDetailDrawer({ isOpen, onClose, region }: RegionDetailDrawerProps) {
  const gameState = useGameStore((state) => state.gameState);
  const translateX = useRef(new Animated.Value(DRAWER_WIDTH + 20)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      duration: 220,
      toValue: isOpen ? 0 : DRAWER_WIDTH + 20,
      useNativeDriver: true,
    }).start();
  }, [isOpen, translateX]);

  if (!region) {
    return null;
  }

  const data = regionCampaignData[region.id];

  return (
    <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.eyebrow}>{data.descriptor}</Text>
          <Text style={styles.title} numberOfLines={2}>
            {region.name}
          </Text>
        </View>
        <Pressable onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>X</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Veřejnoprávní průzkum v kraji</Text>
        {gameState.parties.map((party) => {
          const value = gameState.regionalSupport[region.id]?.[party.id] ?? data.partySupport[party.id] / 100;

          return (
            <SupportBar
              color={party.color}
              key={party.id}
              label={party.name}
              value={value * 100}
            />
          );
        })}
      </View>

      <View style={styles.trendCard}>
        <Text style={styles.trendLabel}>Trend podpory v tomto tahu</Text>
        <Text style={[styles.trendValue, data.trend < 0 && styles.trendNegative]}>
          {data.trend > 0 ? '+' : ''}
          {data.trend.toFixed(1)}%
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Klíčová témata</Text>
        <View style={styles.tags}>
          {data.issues.map((issue) => (
            <View key={issue} style={styles.tag}>
              <Text style={styles.tagText}>{issue}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.metricGrid}>
        <Metric label="Organizace" value={data.organizationStrength} />
        <Metric label="Média" value={data.mediaPresence} />
        <Metric label="Důvěra" value={data.candidateTrust} />
        <Metric label="Potenciál" value={data.growthPotential} />
      </View>

      <View style={styles.actions}>
        <ActionButton label="Uspořádat mítink" />
        <ActionButton label="Online kampaň" />
        <ActionButton label="Vyslat lídra" />
        <ActionButton label="Objednat průzkum" />
      </View>
    </Animated.View>
  );
}

function SupportBar({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: number;
}) {
  return (
    <View style={styles.supportRow}>
      <View style={styles.supportHeader}>
        <Text style={styles.supportLabel} numberOfLines={1}>
          {label}
        </Text>
        <Text style={styles.supportValue}>{value.toFixed(1)} %</Text>
      </View>
      <View style={styles.barTrack}>
        <View style={[styles.barFill, { backgroundColor: color, width: `${Math.max(2, value)}%` }]} />
      </View>
    </View>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricValue}>{value}</Text>
      <Text style={styles.metricLabel}>{label}</Text>
    </View>
  );
}

function ActionButton({ label }: { label: string }) {
  return (
    <Pressable style={styles.actionButton}>
      <Text style={styles.actionText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    bottom: 10,
    elevation: 10,
    padding: 14,
    position: 'absolute',
    right: 10,
    top: 10,
    width: DRAWER_WIDTH,
    zIndex: 10,
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  headerText: {
    flex: 1,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  title: {
    color: colors.primaryDark,
    fontSize: 23,
    fontWeight: '900',
    marginTop: 3,
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: colors.surfaceMuted,
    borderRadius: 8,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  closeText: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 8,
  },
  supportRow: {
    marginBottom: 8,
  },
  supportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  supportLabel: {
    color: colors.text,
    flex: 1,
    fontSize: 11,
    fontWeight: '700',
  },
  supportValue: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '900',
  },
  barTrack: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 999,
    height: 7,
    marginTop: 4,
    overflow: 'hidden',
  },
  barFill: {
    borderRadius: 999,
    height: '100%',
  },
  trendCard: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    padding: 10,
  },
  trendLabel: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '800',
  },
  trendValue: {
    color: colors.success,
    fontSize: 20,
    fontWeight: '900',
  },
  trendNegative: {
    color: colors.danger,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  tagText: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '800',
  },
  metricGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 14,
  },
  metric: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 8,
    padding: 9,
    width: '48%',
  },
  metricValue: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '900',
  },
  metricLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
    marginTop: 2,
  },
  actions: {
    gap: 7,
    marginTop: 14,
  },
  actionButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 9,
  },
  actionText: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
  },
});
