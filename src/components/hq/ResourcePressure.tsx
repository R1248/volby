import { StyleSheet, Text, View } from "react-native";

import type { PlanPressure, PressureLevel } from "@/src/game/weeklyPlanning";
import { colors } from "@/src/theme/colors";

const levels: Record<
  PressureLevel,
  { label: string; color: string; fill: number }
> = {
  low: { label: "nízký", color: colors.success, fill: 0.2 },
  medium: { label: "střední", color: colors.primary, fill: 0.5 },
  high: { label: "vysoký", color: colors.warning, fill: 0.75 },
  critical: { label: "kritický", color: colors.danger, fill: 1 },
};

export function ResourcePressure({
  pressure,
  showSummary = true,
}: {
  pressure: PlanPressure;
  showSummary?: boolean;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.indicators}>
        <Indicator label="Finance" level={pressure.cashPressure} />
        <Indicator label="Štáb" level={pressure.staffPressure} />
        <Indicator label="Čas lídra" level={pressure.leaderPressure} />
      </View>
      {showSummary && <Text style={styles.summary}>{pressure.summary}</Text>}
    </View>
  );
}

function Indicator({ label, level }: { label: string; level: PressureLevel }) {
  const item = levels[level];
  return (
    <View
      style={styles.indicator}
      accessible
      accessibilityLabel={`${label}: ${item.label} tlak`}
    >
      <Text style={styles.label}>
        {label} <Text style={{ color: item.color }}>{item.label}</Text>
      </Text>
      <View style={styles.track}>
        <View
          style={[
            styles.fill,
            { width: `${item.fill * 100}%`, backgroundColor: item.color },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 6, flexGrow: 1, flexShrink: 1 },
  indicators: { flexDirection: "row", gap: 12 },
  indicator: { flex: 1 },
  label: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
    lineHeight: 19,
  },
  track: {
    marginTop: 5,
    height: 5,
    backgroundColor: colors.surfaceSoft,
    borderRadius: 3,
    overflow: "hidden",
  },
  fill: { height: 5 },
  summary: { fontSize: 14, color: colors.textMuted, lineHeight: 19 },
});
