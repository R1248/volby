import { Pressable, StyleSheet, Text, View } from "react-native";

import type { GameState, PlannedAction } from "@/src/game/types";
import type { RecommendedCampaignAction } from "@/src/game/weeklyPlanning";
import { colors } from "@/src/theme/colors";
import { recommendationTarget } from "./actionTargets";

const effects = { limited: "omezený", moderate: "střední", strong: "silný" };
const risks = {
  low: "nízké",
  medium: "střední",
  high: "vysoké",
  extreme: "extrémní",
};
const confidences = { low: "nízká", medium: "střední", high: "vysoká" };

type Props = {
  state: GameState;
  recommendations: RecommendedCampaignAction[];
  plannedActions: PlannedAction[];
  onAdd: (recommendation: RecommendedCampaignAction) => void;
  onCatalog: () => void;
};

export function RecommendedActions({
  state,
  recommendations,
  plannedActions,
  onAdd,
  onCatalog,
}: Props) {
  return (
    <View style={styles.section}>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Doporučené tahy</Text>
        <Pressable
          accessibilityRole="button"
          onPress={onCatalog}
          style={styles.catalog}
        >
          <Text style={styles.link}>Všechny možnosti →</Text>
        </Pressable>
      </View>
      {recommendations.length === 0 && (
        <Text style={styles.reason}>
          Pro zbývající kapacity nemá štáb další doporučení. Upravte plán nebo
          otevřete všechny možnosti.
        </Text>
      )}
      {recommendations.slice(0, 6).map((recommendation) => {
        const { action } = recommendation;
        const target = recommendationTarget(state, recommendation);
        const inPlan = plannedActions.some(
          (planned) => planned.actionV2Id === action.id,
        );
        return (
          <View key={action.id} style={styles.card}>
            <Text style={styles.name}>{action.name}</Text>
            {!!target.label && (
              <Text style={styles.target}>Cíl: {target.label}</Text>
            )}
            <Text style={styles.reason}>{recommendation.reason}</Text>
            <View style={styles.tags}>
              <Text style={styles.tag}>
                Účinek: {effects[recommendation.effect]}
              </Text>
              <Text
                style={[
                  styles.tag,
                  (recommendation.risk === "high" ||
                    recommendation.risk === "extreme") &&
                    styles.risk,
                ]}
              >
                Riziko: {risks[recommendation.risk]}
              </Text>
              <Text style={styles.tag}>
                Jistota: {confidences[recommendation.confidence]}
              </Text>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={
                inPlan
                  ? `${action.name}: již v plánu`
                  : target.valid
                    ? `Přidat do plánu: ${action.name}`
                    : `Vyberte v katalogu: ${action.name}`
              }
              disabled={inPlan}
              accessibilityState={{ disabled: inPlan }}
              onPress={() =>
                target.valid ? onAdd(recommendation) : onCatalog()
              }
              style={({ pressed }) => [
                styles.add,
                inPlan && styles.inPlan,
                pressed && styles.pressed,
              ]}
            >
              <Text style={[styles.addText, inPlan && styles.inPlanText]}>
                {inPlan
                  ? "✓ Již v plánu"
                  : target.valid
                    ? "Přidat do plánu"
                    : "Vyberte v katalogu"}
              </Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  section: { gap: 10 },
  headingRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  heading: { fontSize: 18, fontWeight: "900", color: colors.primaryDark },
  catalog: { minHeight: 44, justifyContent: "center" },
  link: { fontSize: 14, fontWeight: "800", color: colors.primary },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    gap: 8,
  },
  name: { fontSize: 18, fontWeight: "800", lineHeight: 23, color: colors.text },
  target: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "700",
    color: colors.primary,
  },
  reason: { fontSize: 15, lineHeight: 21, color: colors.textMuted },
  tags: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tag: { fontSize: 14, lineHeight: 19, color: colors.textMuted },
  risk: { color: colors.danger, fontWeight: "700" },
  add: {
    minHeight: 44,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  addText: { color: colors.textOnPrimary, fontSize: 16, fontWeight: "800" },
  inPlan: { backgroundColor: colors.surfaceSoft },
  inPlanText: { color: colors.success },
  pressed: { opacity: 0.8 },
});
