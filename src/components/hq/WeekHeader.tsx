import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/src/theme/colors";

type Props = {
  cash: number;
  leaderCapacity: number;
  pollValue?: number;
  week: number;
  weeksRemaining: number;
  landscape: boolean;
};

export function WeekHeader({
  cash,
  leaderCapacity,
  pollValue,
  week,
  weeksRemaining,
  landscape,
}: Props) {
  const weeksLabel =
    weeksRemaining === 1
      ? "týden"
      : weeksRemaining >= 2 && weeksRemaining <= 4
        ? "týdny"
        : "týdnů";
  return (
    <View style={[styles.header, !landscape && styles.vertical]}>
      <View style={styles.identity}>
        <Text style={styles.title}>Volební štáb</Text>
        <Text style={styles.subtitle}>
          Týden {week} · {weeksRemaining} {weeksLabel} do voleb
        </Text>
      </View>
      <View style={styles.metrics}>
        <Metric
          label="Průzkum"
          value={
            pollValue === undefined ? "—" : `${(pollValue * 100).toFixed(1)} %`
          }
        />
        <Metric label="Rozpočet" value={`${cash.toFixed(1)} mil.`} />
        <Metric
          label="Energie lídra"
          value={`${Math.round(leaderCapacity * 100)} %`}
        />
      </View>
    </View>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.metric}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.subtitle}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryDark,
    paddingHorizontal: 18,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  vertical: { alignItems: "stretch", flexDirection: "column", gap: 10 },
  identity: { flex: 1 },
  title: { fontSize: 24, fontWeight: "900", color: colors.textOnPrimary },
  subtitle: { fontSize: 14, lineHeight: 19, color: colors.primarySoft },
  metrics: { flexDirection: "row", gap: 24, justifyContent: "space-between" },
  metric: { minWidth: 82 },
  value: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: "800",
    color: colors.textOnPrimary,
  },
});
