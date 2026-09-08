import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import type { GameState, PlannedAction } from "@/src/game/types";
import type { PlanPressure } from "@/src/game/weeklyPlanning";
import { colors } from "@/src/theme/colors";
import { describeTarget } from "./actionTargets";
import { ResourcePressure } from "./ResourcePressure";

type Props = {
  visible: boolean;
  state: GameState;
  plannedActions: PlannedAction[];
  pressure: PlanPressure;
  onRemove: (id: string) => void;
  onClose: () => void;
};

export function WeeklyPlanCard({
  visible,
  state,
  plannedActions,
  pressure,
  onRemove,
  onClose,
}: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.overlay}>
        <View style={styles.card} accessibilityViewIsModal>
          <View style={styles.header}>
            <Text style={styles.title}>
              Plán týdne · {plannedActions.length}
            </Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Zavřít plán"
              onPress={onClose}
              style={styles.button}
            >
              <Text style={styles.close}>Hotovo ×</Text>
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={styles.list}>
            {plannedActions.length === 0 && (
              <Text style={styles.body}>
                Plán je zatím prázdný. Přidejte doporučený tah nebo vyberte akci
                z katalogu.
              </Text>
            )}
            {plannedActions.map((planned) => {
              const action = state.campaignActionsV2.find(
                (candidate) => candidate.id === planned.actionV2Id,
              );
              const target = describeTarget(state, planned);
              return (
                <View key={planned.id} style={styles.row}>
                  <View style={styles.copy}>
                    <Text style={styles.name}>
                      {action?.name ?? "Nedostupná akce"}
                    </Text>
                    <Text style={styles.body}>
                      {target || "Celostátní kampaň"}
                    </Text>
                  </View>
                  <Pressable
                    accessibilityRole="button"
                    accessibilityLabel={`Odebrat: ${action?.name ?? "akci"}`}
                    onPress={() => onRemove(planned.id)}
                    style={styles.button}
                  >
                    <Text style={styles.remove}>Odebrat</Text>
                  </Pressable>
                </View>
              );
            })}
            <ResourcePressure pressure={pressure} />
            <Text style={styles.body}>
              Zbývá {pressure.cashRemaining.toFixed(1)} mil. · štáb{" "}
              {pressure.staffRemaining.toFixed(1)} · čas lídra{" "}
              {pressure.leaderTimeRemaining.toFixed(1)}
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(11,46,79,0.65)",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 660,
    maxHeight: "100%",
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: colors.surface,
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 8,
  },
  title: { fontSize: 22, fontWeight: "900", color: colors.primaryDark },
  list: { gap: 12, paddingBottom: 8 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 10,
  },
  copy: { flex: 1 },
  name: { fontSize: 16, lineHeight: 22, fontWeight: "800", color: colors.text },
  body: { fontSize: 14, lineHeight: 20, color: colors.textMuted },
  button: {
    minHeight: 44,
    minWidth: 72,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  close: { fontSize: 16, fontWeight: "800", color: colors.primary },
  remove: { fontSize: 14, fontWeight: "800", color: colors.danger },
});
