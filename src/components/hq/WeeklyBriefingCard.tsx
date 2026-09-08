import { StyleSheet, Text, View } from "react-native";

import type {
  SituationSignal,
  SituationTone,
  WeekSituation,
} from "@/src/game/weeklyPlanning";
import { colors } from "@/src/theme/colors";

type WeeklyBriefingCardProps = {
  situation: WeekSituation;
};

export function WeeklyBriefingCard({ situation }: WeeklyBriefingCardProps) {
  const leadTone = toneColor(situation.lead.tone);

  return (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <Text style={styles.kicker}>Briefing týdne</Text>
        <Text style={styles.sectionHint}>Co dnes musí štáb vědět</Text>
      </View>

      <View
        style={[
          styles.lead,
          {
            borderLeftColor: leadTone,
          },
        ]}
      >
        <View style={styles.leadMetaRow}>
          <View style={[styles.toneDot, { backgroundColor: leadTone }]} />

          <Text style={[styles.leadTone, { color: leadTone }]}>
            {toneLabel(situation.lead.tone)}
          </Text>
        </View>

        <Text style={styles.leadTitle}>{situation.lead.title}</Text>

        <Text style={styles.leadReason}>{situation.lead.reason}</Text>
      </View>

      {situation.signals.length > 0 ? (
        <View style={styles.signals}>
          {situation.signals.slice(0, 3).map((signal) => (
            <SignalRow key={signal.id} signal={signal} />
          ))}
        </View>
      ) : null}
    </View>
  );
}

function SignalRow({ signal }: { signal: SituationSignal }) {
  const color = toneColor(signal.tone);

  return (
    <View style={styles.signalRow}>
      <View style={[styles.signalDot, { backgroundColor: color }]} />

      <View style={styles.signalCopy}>
        <View style={styles.signalTitleRow}>
          <Text style={styles.signalKind}>{kindLabel(signal.kind)}</Text>

          <Text style={styles.signalTitle}>{signal.title}</Text>
        </View>

        <Text style={styles.signalReason}>{signal.reason}</Text>
      </View>
    </View>
  );
}

function toneColor(tone: SituationTone) {
  switch (tone) {
    case "opportunity":
      return colors.success;

    case "threat":
      return colors.danger;

    case "neutral":
      return colors.primary;
  }
}

function toneLabel(tone: SituationTone) {
  switch (tone) {
    case "opportunity":
      return "Příležitost";

    case "threat":
      return "Pozor";

    case "neutral":
      return "Situace týdne";
  }
}

function kindLabel(kind: SituationSignal["kind"]) {
  switch (kind) {
    case "event":
      return "Událost";

    case "media":
      return "Média";

    case "region":
      return "Region";

    case "resources":
      return "Kapacita";

    case "momentum":
      return "Trend";
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 16,
    borderWidth: 1,
    padding: 14,
  },
  kicker: {
    color: colors.primaryDark,
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  lead: {
    backgroundColor: colors.surfaceSoft,
    borderLeftWidth: 4,
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  leadMetaRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
  },
  leadReason: {
    color: colors.textMuted,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 23,
    marginTop: 6,
  },
  leadTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "900",
    lineHeight: 27,
    marginTop: 7,
  },
  leadTone: {
    fontSize: 14,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  sectionHeader: {
    gap: 2,
  },
  sectionHint: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "600",
  },
  signalCopy: {
    flex: 1,
  },
  signalDot: {
    borderRadius: 5,
    height: 10,
    marginTop: 6,
    width: 10,
  },
  signalKind: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  signalReason: {
    color: colors.textMuted,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    marginTop: 3,
  },
  signalRow: {
    alignItems: "flex-start",
    borderTopColor: colors.border,
    borderTopWidth: 1,
    flexDirection: "row",
    gap: 11,
    paddingVertical: 12,
  },
  signals: {
    marginTop: 10,
  },
  signalTitle: {
    color: colors.text,
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
  },
  signalTitleRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 7,
  },
  toneDot: {
    borderRadius: 4,
    height: 8,
    width: 8,
  },
});
