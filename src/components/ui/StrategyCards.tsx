import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/theme/colors';

export function Card({ children, tone = 'light' }: { children: ReactNode; tone?: 'dark' | 'gold' | 'light' }) {
  return <View style={[styles.card, tone === 'dark' && styles.cardDark, tone === 'gold' && styles.cardGold]}>{children}</View>;
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <Text style={styles.sectionTitle}>{children}</Text>;
}

export function Metric({ label, tone, value }: { label: string; tone?: 'danger' | 'good' | 'warn'; value: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricLabel}>{label}</Text>
      <Text
        style={[
          styles.metricValue,
          tone === 'good' && styles.good,
          tone === 'warn' && styles.warn,
          tone === 'danger' && styles.danger,
        ]}
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
}

export function ActionButton({
  disabled,
  label,
  onPress,
  tone = 'primary',
}: {
  disabled?: boolean;
  label: string;
  onPress?: () => void;
  tone?: 'accent' | 'primary';
}) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, tone === 'accent' && styles.buttonAccent, disabled && styles.buttonDisabled]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return <View style={styles.grid}>{children}</View>;
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  buttonAccent: {
    backgroundColor: colors.accent,
  },
  buttonDisabled: {
    backgroundColor: colors.textMuted,
    opacity: 0.65,
  },
  buttonText: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: '900',
  },
  card: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
    padding: 10,
  },
  cardDark: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
  },
  cardGold: {
    backgroundColor: '#FFF7D6',
    borderColor: colors.selected,
  },
  danger: {
    color: colors.danger,
  },
  good: {
    color: colors.success,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  metric: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 140,
    padding: 9,
  },
  metricLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  metricValue: {
    color: colors.primaryDark,
    fontSize: 17,
    fontWeight: '900',
    marginTop: 2,
  },
  sectionTitle: {
    color: colors.primaryDark,
    fontSize: 15,
    fontWeight: '900',
  },
  warn: {
    color: colors.warning,
  },
});
