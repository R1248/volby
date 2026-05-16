import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/theme/colors';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.flagBar}>
        <View style={styles.flagBlue} />
        <View style={styles.flagWhite} />
        <View style={styles.flagRed} />
      </View>

      <View style={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.kicker}>Česká volební strategie</Text>
          <Text style={styles.title}>Volby: Volební štáb</Text>
          <Text style={styles.subtitle}>
            Veďte stranu skrz dvanáct týdnů kampaně, plánujte regionální zásahy, zvládejte média, finance a závěrečný boj o mandáty.
          </Text>

          <View style={styles.actions}>
            <Pressable onPress={() => router.push('/setup')} style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Nová hra</Text>
            </Pressable>
            <Pressable onPress={() => router.replace('/map')} style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Pokračovat</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.previewPanel}>
          <Text style={styles.panelTitle}>Dnešní priorita štábu</Text>
          <View style={styles.previewGrid}>
            <PreviewItem label="Mapa krajů" value="14 regionů" />
            <PreviewItem label="Voliči" value="12 segmentů" />
            <PreviewItem label="Tahy" value="3 rozkazy týdně" />
            <PreviewItem label="Cíl" value="200 mandátů" />
          </View>
        </View>
      </View>
    </View>
  );
}

function PreviewItem({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.previewItem}>
      <Text style={styles.previewLabel}>{label}</Text>
      <Text style={styles.previewValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 24,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    gap: 18,
    padding: 24,
  },
  flagBar: {
    flexDirection: 'row',
    height: 7,
  },
  flagBlue: {
    backgroundColor: colors.primaryDark,
    flex: 1.35,
  },
  flagRed: {
    backgroundColor: colors.accent,
    flex: 1,
  },
  flagWhite: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  hero: {
    flex: 1.25,
    justifyContent: 'center',
  },
  kicker: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  panelTitle: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: '900',
  },
  previewGrid: {
    gap: 9,
    marginTop: 14,
  },
  previewItem: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(255,255,255,0.16)',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  previewLabel: {
    color: '#BFD3E6',
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  previewPanel: {
    alignSelf: 'center',
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 260,
    padding: 16,
    width: '32%',
  },
  previewValue: {
    color: colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '900',
    marginTop: 2,
  },
  primaryButton: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  primaryButtonText: {
    color: colors.textOnPrimary,
    fontSize: 14,
    fontWeight: '900',
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  secondaryButtonText: {
    color: colors.primaryDark,
    fontSize: 14,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 24,
    maxWidth: 620,
    marginTop: 10,
  },
  title: {
    color: colors.primaryDark,
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 0,
  },
});
