import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { regions } from '@/src/data/regions';
import { colors } from '@/src/theme/colors';

export default function RegionDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const region = regions.find((item) => item.id === id) ?? regions[0];
  const returnToMap = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace('/');
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>Regionální přehled</Text>
          <Text style={styles.title}>{region.name}</Text>
        </View>
        <Pressable onPress={returnToMap} style={styles.backButton}>
          <Text style={styles.backButtonText}>Zpět na mapu</Text>
        </Pressable>
      </View>

      <View style={styles.grid}>
        <Metric title="Podpora" value={`${region.support}%`} />
        <Metric title="Odhadovaná účast" value={`${region.turnout}%`} />
        <Metric title="Síla organizace" value={`${region.organizationStrength}%`} />
      </View>

      <View style={styles.placeholder}>
        <Text style={styles.placeholderTitle}>Poznámky pro budoucí simulaci</Text>
        <Text style={styles.placeholderText}>
          Tato obrazovka zatím používá pouze statická ukázková data. Výpočty výsledků,
          kampaně a volební mechaniky budou doplněny později.
        </Text>
      </View>
    </View>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.metricTitle}>{title}</Text>
      <Text style={styles.metricValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 24,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.primaryDark,
    fontSize: 32,
    fontWeight: '900',
    marginTop: 6,
  },
  backButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButtonText: {
    color: colors.textOnPrimary,
    fontSize: 15,
    fontWeight: '800',
  },
  grid: {
    flexDirection: 'row',
    gap: 14,
  },
  metric: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 18,
  },
  metricTitle: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: '700',
  },
  metricValue: {
    color: colors.primary,
    fontSize: 34,
    fontWeight: '900',
    marginTop: 12,
  },
  placeholder: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 18,
    padding: 18,
  },
  placeholderTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 8,
  },
  placeholderText: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 22,
  },
});
