import { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/src/theme/colors';

type AppShellProps = {
  children: ReactNode;
  sidePanel: ReactNode;
};

export function AppShell({ children, sidePanel }: AppShellProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Volby</Text>
        <View style={styles.phaseBadge}>
          <Text style={styles.phaseText}>Příprava kampaně</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.mainArea}>{children}</View>
        <View style={styles.sidePanel}>{sidePanel}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.background,
    flex: 1,
  },
  topBar: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderBottomColor: colors.primaryDark,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 62,
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },
  title: {
    color: colors.textOnPrimary,
    fontSize: 28,
    fontWeight: '900',
  },
  phaseBadge: {
    backgroundColor: colors.primaryDark,
    borderColor: 'rgba(255,255,255,0.22)',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  phaseText: {
    color: colors.textOnPrimary,
    fontSize: 13,
    fontWeight: '800',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    padding: 16,
  },
  mainArea: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 8,
  },
  sidePanel: {
    backgroundColor: colors.surfaceRaised,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexBasis: 292,
    flexShrink: 0,
    padding: 18,
  },
});
