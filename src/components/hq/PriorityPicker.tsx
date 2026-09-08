import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import type { WeeklyPriority } from "@/src/game/weeklyPlanning";
import { colors } from "@/src/theme/colors";

type Props = {
  priorities: WeeklyPriority[];
  selectedIds: string[];
  onToggle: (id: string) => void;
  maxSelected?: number;
};

export function PriorityPicker({
  priorities,
  selectedIds,
  onToggle,
  maxSelected = 2,
}: Props) {
  const atLimit = selectedIds.length >= maxSelected;
  return (
    <View style={styles.section}>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Priority týdne</Text>
        <Text style={styles.count}>
          {selectedIds.length} / {maxSelected} vybrány
        </Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.choices}
        showsHorizontalScrollIndicator
      >
        {priorities.map((priority) => {
          const selected = selectedIds.includes(priority.id);
          const disabled = atLimit && !selected;
          return (
            <Pressable
              key={priority.id}
              accessibilityRole="button"
              accessibilityLabel={priority.label}
              accessibilityHint={priority.reason}
              accessibilityState={{ selected, disabled }}
              disabled={disabled}
              onPress={() => onToggle(priority.id)}
              style={({ pressed }) => [
                styles.choice,
                selected && styles.selected,
                disabled && styles.disabled,
                pressed && styles.pressed,
              ]}
            >
              <Text numberOfLines={1} style={styles.label}>
                {selected ? "✓ " : "+ "}
                {priority.label}
              </Text>
              <Text numberOfLines={2} style={styles.reason}>
                {priority.reason}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
      {atLimit && (
        <Text style={styles.hint}>Pro změnu jednu prioritu odznačte.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  section: { gap: 8 },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  heading: { fontSize: 18, fontWeight: "900", color: colors.primaryDark },
  count: { fontSize: 14, fontWeight: "700", color: colors.textMuted },
  choices: { gap: 8, paddingBottom: 5 },
  choice: {
    width: 248,
    minHeight: 80,
    padding: 10,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  selected: {
    borderColor: colors.selected,
    backgroundColor: colors.primarySoft,
  },
  disabled: { opacity: 0.55 },
  pressed: { backgroundColor: colors.surfaceSoft },
  label: {
    fontSize: 16,
    fontWeight: "800",
    color: colors.text,
    lineHeight: 21,
  },
  reason: {
    fontSize: 14,
    lineHeight: 19,
    color: colors.textMuted,
    marginTop: 4,
  },
  hint: { fontSize: 14, color: colors.textMuted, lineHeight: 19 },
});
