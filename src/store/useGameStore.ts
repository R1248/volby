import { create } from 'zustand';

import { mediaOutlets } from '@/src/data/mediaOutlets';
import { campaignActionsV2 } from '@/src/game/campaignActionsV2';
import {
  acceptSponsor,
  answerQuestion,
  answerCampaignTrip as applyCampaignTripAnswer,
  answerDebateAttack as applyDebateAnswer,
  answerProgramMediaQuestion as applyProgramMediaAnswer,
  hireMarketingAdvisor as applyMarketingAdvisor,
  initializeComputedState,
  publishPublicPoll as applyPublicPoll,
  receiveMediaInvitations as applyReceiveMediaInvitations,
  respondToMediaAppearance as applyMediaAppearanceDecision,
  respondToMediaInvitation as applyMediaInvitationResponse,
  resolveTurn,
  updateProgramIssue as applyProgramIssueUpdate,
} from '@/src/game/engine';
import { createIssueLayerState } from '@/src/game/issueSeed';
import type { PartyIssuePosition, ProgramIssueId } from '@/src/game/issueTypes';
import { createInitialGameState, marketingAdvisors } from '@/src/game/seed';
import { loadLatestGame, resetSave, saveGame, saveTurnSnapshot } from '@/src/game/storage';
import type {
  GameState,
  MarketingAdvisorId,
  MediaAppearanceDecision,
  MediaInvitation,
  PartyId,
  PlannedAction,
} from '@/src/game/types';
import type { RegionId } from '@/src/types/region';

type GameStore = {
  acceptSponsorOffer: (sponsorId: string) => void;
  answerCampaignTrip: (tripId: string, optionId: string) => void;
  answerDebateAttack: (responseId: string) => void;
  answerPendingQuestion: (questionId: string, optionId: string) => void;
  answerProgramMediaQuestion: (questionId: string, answerId: string) => void;
  publishPublicPoll: (pollsterId: string) => void;
  receiveMediaInvitations: (invitations: MediaInvitation[]) => void;
  gameState: GameState;
  hireMarketingAdvisor: (advisorId: MarketingAdvisorId) => void;
  hydrateGame: () => Promise<void>;
  isHydrated: boolean;
  plannedActions: PlannedAction[];
  planCampaignActionV2: (actionV2Id: string, targetRegionId?: RegionId, targetProgramIssueId?: ProgramIssueId) => boolean;
  removePlannedAction: (plannedActionId: string) => void;
  resetGame: () => void;
  respondToEarnedMediaInvitation: (decision: MediaAppearanceDecision) => void;
  respondToInvitation: (invitationId: string, response: NonNullable<MediaInvitation['response']>) => void;
  respondToMediaInvitation: (invitationId: string, response: NonNullable<MediaInvitation['response']>) => void;
  saveGameNow: () => Promise<void>;
  selectedRegionId: RegionId;
  selectRegion: (regionId: RegionId) => void;
  startNewGame: (selectedPartyId: PartyId) => void;
  resolvePlannedWeek: () => void;
  updateProgramIssue: (
    issueId: ProgramIssueId,
    patch: Partial<Pick<PartyIssuePosition, 'framingId' | 'position' | 'rigidity' | 'salience'>>,
  ) => void;
};

const initialState = initializeComputedState(createInitialGameState());

function migrateStaffCap(staffCap?: number) {
  if (staffCap === undefined) {
    return 6;
  }

  if (staffCap <= 2) {
    return 4.5;
  }

  if (staffCap <= 3) {
    return 6;
  }

  return staffCap;
}

function asFullRealismState(state: GameState): GameState {
  const partyRuntime = Object.fromEntries(
    Object.entries(state.partyRuntime).map(([partyId, runtime]) => [
      partyId,
      {
        ...runtime,
        actionCooldowns: runtime.actionCooldowns ?? {},
        legalExposure: runtime.legalExposure ?? 0,
        marketingAdvisorId: runtime.marketingAdvisorId ?? 'none',
        mediaVulnerability: runtime.mediaVulnerability ?? state.issueLayer?.player?.mediaVulnerability ?? 0,
        momentum: runtime.momentum ?? 0.5,
        parliamentAttendance: runtime.parliamentAttendance,
        staffCap: migrateStaffCap(runtime.staffCap),
        staffUsed: runtime.staffUsed ?? 0,
      },
    ]),
  ) as GameState['partyRuntime'];

  return {
    ...state,
    campaignActionsV2,
    issueLayer: migrateIssueLayer(state.issueLayer ?? createIssueLayerState()),
    marketingAdvisors: state.marketingAdvisors ?? marketingAdvisors,
    media: mediaOutlets,
    mediaAppearanceResults: state.mediaAppearanceResults ?? [],
    mediaClusterModifiers: state.mediaClusterModifiers ?? [],
    pendingMediaEffects: state.pendingMediaEffects ?? [],
    mode: 'fullRealism',
    partyRuntime,
    publicPollsterId: state.publicPollsterId ?? 'medianPlus',
    turnoutModifiers: state.turnoutModifiers ?? [],
  };
}

function migrateIssueLayer(issueLayer: GameState['issueLayer']): GameState['issueLayer'] {
  const { campaignPackages: _campaignPackages, ...layerWithoutPackages } = issueLayer as GameState['issueLayer'] & {
    campaignPackages?: unknown[];
  };
  const { activeCampaignPackages: _activeCampaignPackages, ...playerWithoutPackages } = layerWithoutPackages.player as typeof layerWithoutPackages.player & {
    activeCampaignPackages?: string[];
  };

  return {
    ...layerWithoutPackages,
    player: {
      ...playerWithoutPackages,
      maxProgramChangesPerWeek: playerWithoutPackages.maxProgramChangesPerWeek ?? 3,
      programChangesThisWeek: playerWithoutPackages.programChangesThisWeek ?? 0,
    },
    resolvedCampaignTripIds: layerWithoutPackages.resolvedCampaignTripIds ?? [],
    resolvedDebateAttackIds: layerWithoutPackages.resolvedDebateAttackIds ?? [],
    resolvedMediaQuestionIds: layerWithoutPackages.resolvedMediaQuestionIds ?? [],
  };
}

function createGameWithSelectedParty(selectedPartyId: PartyId) {
  const baseState = createInitialGameState();
  const selectedParty = baseState.parties.find((party) => party.id === selectedPartyId);
  const defaultPlayer = baseState.parties.find((party) => party.id === 'player');

  if (selectedParty && defaultPlayer && selectedPartyId !== 'player') {
    baseState.parties = baseState.parties.map((party) => {
      if (party.id === 'player') {
        return { ...selectedParty, id: 'player', playable: true };
      }

      if (party.id === selectedPartyId) {
        return { ...defaultPlayer, id: selectedPartyId, playable: false };
      }

      return party;
    });

    baseState.partyRuntime = {
      ...baseState.partyRuntime,
      player: baseState.partyRuntime[selectedPartyId],
      [selectedPartyId]: baseState.partyRuntime.player,
    };
  }

  return initializeComputedState(asFullRealismState({
    ...baseState,
    playerPartyId: 'player',
  }));
}

function plannedCost(state: GameState, plannedActions: PlannedAction[]) {
  return plannedActions.reduce((sum, plannedAction) => {
    const action = state.campaignActionsV2?.find((candidate) => candidate.id === plannedAction.actionV2Id);
    return sum + (action?.cost ?? 0);
  }, 0);
}

function plannedCapacity(state: GameState, plannedActions: PlannedAction[]) {
  return plannedActions.reduce((sum, plannedAction) => {
    const actionV2 = state.campaignActionsV2?.find((candidate) => candidate.id === plannedAction.actionV2Id);
    return sum + (actionV2?.staffCost ?? 0);
  }, 0);
}

function persist(state: GameState, plannedActions: PlannedAction[] = []) {
  void saveGame(state, plannedActions);
}

function plannedLegalCost(state: GameState, plannedActions: PlannedAction[]) {
  return plannedActions.reduce((sum, plannedAction) => {
    const action = state.campaignActionsV2?.find((candidate) => candidate.id === plannedAction.actionV2Id);
    return sum + (action && action.legality !== 'illegal' ? action.cost : 0);
  }, 0);
}

function plannedLeaderTime(state: GameState, plannedActions: PlannedAction[]) {
  return plannedActions.reduce((sum, plannedAction) => {
    const actionV2 = state.campaignActionsV2?.find((candidate) => candidate.id === plannedAction.actionV2Id);
    return sum + (actionV2?.leaderTimeCost ?? 0);
  }, 0);
}

export const useGameStore = create<GameStore>((set, get) => ({
  acceptSponsorOffer: (sponsorId) => {
    const nextState = acceptSponsor(get().gameState, sponsorId);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  answerCampaignTrip: (tripId, optionId) => {
    const nextState = applyCampaignTripAnswer(get().gameState, tripId, optionId);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  answerDebateAttack: (responseId) => {
    const nextState = applyDebateAnswer(get().gameState, responseId);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  answerPendingQuestion: (questionId, optionId) => {
    const nextState = answerQuestion(get().gameState, questionId, optionId);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  answerProgramMediaQuestion: (questionId, answerId) => {
    const nextState = applyProgramMediaAnswer(get().gameState, questionId, answerId);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  publishPublicPoll: (pollsterId) => {
    const nextState = applyPublicPoll(get().gameState, pollsterId);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  receiveMediaInvitations: (invitations) => {
    const nextState = applyReceiveMediaInvitations(get().gameState, invitations);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  gameState: initialState,
  hireMarketingAdvisor: (advisorId) => {
    const nextState = applyMarketingAdvisor(get().gameState, advisorId);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  hydrateGame: async () => {
    const loaded = await loadLatestGame();

    if (loaded) {
      set({
        gameState: initializeComputedState(asFullRealismState(loaded.state)),
        isHydrated: true,
        plannedActions: loaded.plannedActions,
      });
      return;
    }

    set({ isHydrated: true });
    persist(get().gameState, get().plannedActions);
  },
  isHydrated: false,
  plannedActions: [],
  planCampaignActionV2: (actionV2Id, targetRegionId, targetProgramIssueId) => {
    const { gameState, plannedActions } = get();
    const action = gameState.campaignActionsV2.find((item) => item.id === actionV2Id);
    const runtime = gameState.partyRuntime.player;

    if (!action) {
      return false;
    }

    if (runtime.cash < plannedCost(gameState, plannedActions) + action.cost) {
      return false;
    }

    if (action.legality !== 'illegal' && runtime.legalSpend + plannedLegalCost(gameState, plannedActions) + action.cost > gameState.rules.legalSpendCap) {
      return false;
    }

    if (runtime.legalSpend + runtime.graySpend + runtime.thirdPartySpend + plannedCost(gameState, plannedActions) + action.cost > gameState.rules.spendCap) {
      return false;
    }

    if ((runtime.staffUsed ?? 0) + plannedCapacity(gameState, plannedActions) + action.staffCost > (runtime.staffCap ?? 6)) {
      return false;
    }

    if (runtime.leader.timeUsed + plannedLeaderTime(gameState, plannedActions) + action.leaderTimeCost > runtime.leader.timeCap) {
      return false;
    }

    if (action.target.scope === 'region' && !targetRegionId) {
      return false;
    }

    const nextPlannedActions = [
      ...plannedActions,
      {
        actionV2Id,
        id: `${actionV2Id}-${targetRegionId ?? 'national'}-${gameState.week}-${plannedActions.length}`,
        targetProgramIssueId: action.target.scope === 'issue' ? targetProgramIssueId : undefined,
        targetRegionId,
      },
    ];

    set({ plannedActions: nextPlannedActions });
    persist(gameState, nextPlannedActions);
    return true;
  },
  removePlannedAction: (plannedActionId) => {
    const nextPlannedActions = get().plannedActions.filter((item) => item.id !== plannedActionId);
    set({ plannedActions: nextPlannedActions });
    persist(get().gameState, nextPlannedActions);
  },
  resetGame: () => {
    const nextState = createGameWithSelectedParty('player');

    set({ gameState: nextState, plannedActions: [], selectedRegionId: 'praha' });
    void resetSave().then(() => saveGame(nextState, []));
  },
  respondToEarnedMediaInvitation: (decision) => {
    const nextState = applyMediaAppearanceDecision(get().gameState, decision);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  respondToInvitation: (invitationId, response) => {
    const nextState = applyMediaInvitationResponse(get().gameState, invitationId, response);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  respondToMediaInvitation: (invitationId, response) => {
    get().respondToInvitation(invitationId, response);
  },
  resolvePlannedWeek: () => {
    const { gameState, plannedActions } = get();
    const result = resolveTurn(gameState, plannedActions);

    set({
      gameState: result.state,
      plannedActions: [],
    });
    void saveTurnSnapshot(result.state, result.briefing);
    persist(result.state, []);
  },
  saveGameNow: async () => {
    await saveGame(get().gameState, get().plannedActions);
  },
  selectedRegionId: 'praha',
  selectRegion: (regionId) => set({ selectedRegionId: regionId }),
  startNewGame: (selectedPartyId) => {
    const nextState = createGameWithSelectedParty(selectedPartyId);
    set({ gameState: nextState, plannedActions: [], selectedRegionId: 'praha' });
    void resetSave().then(() => saveGame(nextState, []));
  },
  updateProgramIssue: (issueId, patch) => {
    const nextState = applyProgramIssueUpdate(get().gameState, issueId, patch);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
}));
