import type { GameState, PlannedAction } from "@/src/game/types";
import type { RecommendedCampaignAction } from "@/src/game/weeklyPlanning";

export function describeTarget(
  state: GameState,
  target: Pick<
    PlannedAction,
    "targetRegionId" | "targetProgramIssueId" | "targetPartyId"
  >,
) {
  return [
    state.regions.find((region) => region.id === target.targetRegionId)?.name,
    state.issueLayer.issues.find(
      (issue) => issue.id === target.targetProgramIssueId,
    )?.name,
    state.parties.find((party) => party.id === target.targetPartyId)?.name,
  ]
    .filter(Boolean)
    .join(" · ");
}

export function recommendationTarget(
  state: GameState,
  recommendation: RecommendedCampaignAction,
) {
  const { action, suggestedRegionId, suggestedIssueId, suggestedPartyId } =
    recommendation;
  const targets = {
    targetRegionId: suggestedRegionId,
    targetProgramIssueId: suggestedIssueId,
    targetPartyId: suggestedPartyId,
  };
  const available: Record<string, boolean> = {
    national: true,
    leader: true,
    region:
      !!suggestedRegionId &&
      state.regions.some((region) => region.id === suggestedRegionId),
    issue:
      action.target.scope === "issue" &&
      !!suggestedIssueId &&
      state.issueLayer.issues.some((issue) => issue.id === suggestedIssueId),
    opponent:
      !!suggestedPartyId &&
      suggestedPartyId !== state.playerPartyId &&
      state.parties.some((party) => party.id === suggestedPartyId),
  };
  // Some catalog actions need more than their primary scope (e.g. a segment).
  // HQ only submits targets that the recommendation and existing store can carry.
  const valid = [action.target.scope, ...(action.target.required ?? [])].every(
    (scope) => available[scope] === true,
  );
  return { ...targets, valid, label: describeTarget(state, targets) };
}
