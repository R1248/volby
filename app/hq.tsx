import { useIsFocused } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { recommendationTarget } from "@/src/components/hq/actionTargets";
import { PriorityPicker } from "@/src/components/hq/PriorityPicker";
import { RecommendedActions } from "@/src/components/hq/RecommendedActions";
import { ResourcePressure } from "@/src/components/hq/ResourcePressure";
import { WeekHeader } from "@/src/components/hq/WeekHeader";
import { WeeklyBriefingCard } from "@/src/components/hq/WeeklyBriefingCard";
import { WeeklyPlanCard } from "@/src/components/hq/WeeklyPlanCard";
import {
  derivePriorityCandidates,
  deriveWeekSituation,
  recommendCampaignActions,
  summarizePlanPressure,
  type RecommendedCampaignAction,
} from "@/src/game/weeklyPlanning";
import { useGameStore } from "@/src/store/useGameStore";
import { colors } from "@/src/theme/colors";

export default function HqScreen() {
  const router = useRouter();
  const isFocused = useIsFocused();
  const { width, height } = useWindowDimensions();
  const landscape = width >= 700 && width > height;
  const gameState = useGameStore((state) => state.gameState);
  const isHydrated = useGameStore((state) => state.isHydrated);
  const plannedActions = useGameStore((state) => state.plannedActions);
  const prepareCurrentWeek = useGameStore((state) => state.prepareCurrentWeek);
  const planCampaignActionV2 = useGameStore(
    (state) => state.planCampaignActionV2,
  );
  const removePlannedAction = useGameStore(
    (state) => state.removePlannedAction,
  );
  const resolvePlannedWeek = useGameStore((state) => state.resolvePlannedWeek);
  const [selectedPriorityIds, setSelectedPriorityIds] = useState<string[]>([]);
  const [planVisible, setPlanVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [preparationError, setPreparationError] = useState("");
  const [resolving, setResolving] = useState(false);
  const resolvingRef = useRef(false);
  const isPrepared = gameState.preparedWeek?.week === gameState.week;

  useEffect(() => {
    // The store owns generation; don't prepare the next week behind the debrief.
    if (isFocused && isHydrated && !isPrepared && !resolving) {
      try {
        prepareCurrentWeek();
        setPreparationError("");
      } catch {
        setPreparationError(
          "Týden se nepodařilo připravit. Vraťte se do štábu a zkuste to znovu.",
        );
      }
    }
  }, [isFocused, isHydrated, isPrepared, resolving, prepareCurrentWeek]);

  useEffect(() => {
    setSelectedPriorityIds([]);
    setPlanVisible(false);
    setMessage("");
  }, [gameState.week]);

  useEffect(() => {
    if (isFocused) {
      resolvingRef.current = false;
      setResolving(false);
    }
  }, [isFocused]);

  const situation = useMemo(
    () => (isPrepared ? deriveWeekSituation(gameState) : undefined),
    [gameState, isPrepared],
  );
  const priorities = useMemo(
    () => (isPrepared ? derivePriorityCandidates(gameState) : []),
    [gameState, isPrepared],
  );
  const recommendations = useMemo(
    () =>
      isPrepared
        ? recommendCampaignActions(
            gameState,
            priorities.filter((priority) =>
              selectedPriorityIds.includes(priority.id),
            ),
            plannedActions,
          )
        : [],
    [gameState, isPrepared, priorities, selectedPriorityIds, plannedActions],
  );
  const pressure = useMemo(
    () => summarizePlanPressure(gameState, plannedActions),
    [gameState, plannedActions],
  );

  const togglePriority = (id: string) =>
    setSelectedPriorityIds((current) =>
      current.includes(id)
        ? current.filter((selected) => selected !== id)
        : current.length < 2
          ? [...current, id]
          : current,
    );

  const addRecommendation = (recommendation: RecommendedCampaignAction) => {
    if (
      plannedActions.some(
        (planned) => planned.actionV2Id === recommendation.action.id,
      )
    ) {
      setMessage("Tato akce už je v plánu.");
      return;
    }
    const target = recommendationTarget(gameState, recommendation);
    if (!target.valid) {
      router.push("/campaign");
      return;
    }
    const added = planCampaignActionV2(
      recommendation.action.id,
      target.targetRegionId,
      target.targetProgramIssueId,
      target.targetPartyId,
    );
    setMessage(
      added
        ? `V plánu: ${recommendation.action.name}`
        : "Akci nelze přidat. Zkontrolujte kapacity a limity výdajů v plánu.",
    );
  };

  const resolveWeek = () => {
    if (resolvingRef.current || !isPrepared || !isHydrated) return;
    resolvingRef.current = true;
    setResolving(true);
    try {
      resolvePlannedWeek();
      router.push("/briefing");
    } catch {
      resolvingRef.current = false;
      setResolving(false);
      setMessage(
        "Týden se nepodařilo odehrát. Zkontrolujte plán a zkuste to znovu.",
      );
    }
  };

  const runtime = gameState.partyRuntime.player;
  const ready = isHydrated && isPrepared && !!situation;
  const decisions = (
    <View style={styles.decisions}>
      <PriorityPicker
        priorities={priorities}
        selectedIds={selectedPriorityIds}
        onToggle={togglePriority}
      />
      <RecommendedActions
        state={gameState}
        recommendations={recommendations}
        plannedActions={plannedActions}
        onAdd={addRecommendation}
        onCatalog={() => router.push("/campaign")}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <WeekHeader
        cash={runtime.cash}
        leaderCapacity={Math.max(0, Math.min(1, 1 - runtime.leader.fatigue))}
        pollValue={gameState.polls.player?.value}
        week={gameState.week}
        weeksRemaining={Math.max(0, gameState.rules.finalWeek - gameState.week)}
        landscape={landscape}
      />
      {!ready ? (
        <View style={styles.preparing}>
          {!preparationError && <ActivityIndicator color={colors.primary} />}
          <Text style={styles.preparingText}>
            {preparationError ||
              (resolving
                ? "Otevíráme debrief…"
                : "Štáb připravuje nový týden…")}
          </Text>
        </View>
      ) : landscape ? (
        <View style={styles.workspace}>
          <ScrollView
            style={styles.briefingColumn}
            contentContainerStyle={styles.columnContent}
          >
            <WeeklyBriefingCard situation={situation} />
          </ScrollView>
          <ScrollView
            style={styles.decisionColumn}
            contentContainerStyle={styles.columnContent}
          >
            {decisions}
          </ScrollView>
        </View>
      ) : (
        <ScrollView
          style={styles.portrait}
          contentContainerStyle={styles.portraitContent}
        >
          <WeeklyBriefingCard situation={situation} />
          {decisions}
        </ScrollView>
      )}
      <View style={styles.footer}>
        {!landscape && (
          <ResourcePressure pressure={pressure} showSummary={false} />
        )}
        <View style={styles.footerRow}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Otevřít plán: ${plannedActions.length} akcí`}
            onPress={() => setPlanVisible(true)}
            style={styles.planButton}
          >
            <Text style={styles.planLabel}>
              Plán ({plannedActions.length}) ↑
            </Text>
          </Pressable>
          {landscape && (
            <ResourcePressure pressure={pressure} showSummary={false} />
          )}
          <Pressable
            accessibilityRole="button"
            accessibilityState={{ disabled: !ready || resolving }}
            disabled={!ready || resolving}
            onPress={resolveWeek}
            style={({ pressed }) => [
              styles.resolveButton,
              !landscape && styles.portraitResolve,
              (!ready || resolving) && styles.disabled,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.resolveLabel}>
              {resolving ? "Vyhodnocujeme…" : "Odehrát týden →"}
            </Text>
          </Pressable>
        </View>
        {!!message && (
          <Text accessibilityLiveRegion="polite" style={styles.feedback}>
            {message}
          </Text>
        )}
      </View>
      <WeeklyPlanCard
        visible={planVisible}
        state={gameState}
        plannedActions={plannedActions}
        pressure={pressure}
        onRemove={(id) => {
          removePlannedAction(id);
          setMessage("Akce odebrána z plánu.");
        }}
        onClose={() => setPlanVisible(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.background, flex: 1 },
  workspace: {
    flex: 1,
    minHeight: 0,
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 12,
  },
  briefingColumn: { width: "35%", flexGrow: 0 },
  decisionColumn: { flex: 1, minWidth: 0 },
  columnContent: { paddingVertical: 12 },
  decisions: { gap: 8 },
  portrait: { flex: 1 },
  portraitContent: { padding: 12, gap: 14 },
  preparing: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 12,
  },
  preparingText: { color: colors.primaryDark, fontSize: 16, lineHeight: 22 },
  footer: {
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 6,
  },
  footerRow: { flexDirection: "row", alignItems: "center", gap: 16 },
  portraitResolve: { flex: 1 },
  planButton: {
    minHeight: 44,
    minWidth: 94,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primarySoft,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  planLabel: { color: colors.primaryDark, fontSize: 16, fontWeight: "800" },
  resolveButton: {
    minHeight: 48,
    minWidth: 176,
    backgroundColor: colors.accent,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  resolveLabel: {
    fontSize: 16,
    fontWeight: "900",
    color: colors.textOnPrimary,
  },
  disabled: { opacity: 0.5 },
  pressed: { opacity: 0.8 },
  feedback: { fontSize: 14, lineHeight: 19, color: colors.primaryDark },
});
