import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { Sidebar } from '@/src/components/dashboard/Sidebar';
import { StatusStrip } from '@/src/components/dashboard/StatusStrip';
import { colors } from '@/src/theme/colors';

type GameScreenProps = {
  activeItem: string;
  children: ReactNode;
  subtitle?: string;
  title: string;
};

export function GameScreen({ activeItem, children, subtitle, title }: GameScreenProps) {
  return (
    <View style={styles.screen}>
      <Sidebar activeItem={activeItem} />

      <View style={styles.workspace}>
        <StatusStrip />
        <View style={styles.surface}>
          <View style={styles.titleRow}>
            <View style={styles.titleAccent} />
            <View style={styles.titleCopy}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              {subtitle ? (
                <Text style={styles.subtitle} numberOfLines={2}>
                  {subtitle}
                </Text>
              ) : null}
            </View>
          </View>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: 10,
    paddingBottom: 4,
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'row',
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
    marginTop: 1,
  },
  surface: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 10,
  },
  title: {
    color: colors.primaryDark,
    fontSize: 18,
    fontWeight: '900',
  },
  titleAccent: {
    backgroundColor: colors.accent,
    borderRadius: 2,
    width: 4,
  },
  titleCopy: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
    minHeight: 36,
  },
  workspace: {
    flex: 1,
    gap: 8,
    padding: 8,
  },
});
