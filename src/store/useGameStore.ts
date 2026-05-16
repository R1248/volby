import { create } from 'zustand';

import { campaignActionsV2, legacyCampaignActionV2ById } from '@/src/game/campaignActionsV2';
import {
  acceptSponsor,
  activateCampaignPackage as applyCampaignPackage,
  answerQuestion,
  answerCampaignTrip as applyCampaignTripAnswer,
  answerDebateAttack as applyDebateAnswer,
  answerProgramMediaQuestion as applyProgramMediaAnswer,
  hireMarketingAdvisor as applyMarketingAdvisor,
  initializeComputedState,
  publishPublicPoll as applyPublicPoll,
  respondToMediaInvitation as applyMediaInvitationResponse,
  resolveTurn,
  updateProgramIssue as applyProgramIssueUpdate,
} from '@/src/game/engine';
import { createIssueLayerState } from '@/src/game/issueSeed';
import type { PartyIssuePosition, ProgramIssueId } from '@/src/game/issueTypes';
import { createInitialGameState, marketingAdvisors } from '@/src/game/seed';
import { loadLatestGame, resetSave, saveGame, saveTurnSnapshot } from '@/src/game/storage';
import type { CampaignActionId, GameState, MarketingAdvisorId, MediaInvitation, PartyId, PlannedAction } from '@/src/game/types';
import type { RegionId } from '@/src/types/region';

type GameStore = {
  acceptSponsorOffer: (sponsorId: string) => void;
  activateCampaignPackage: (packageId: string) => void;
  answerCampaignTrip: (tripId: string, optionId: string) => void;
  answerDebateAttack: (responseId: string) => void;
  answerPendingQuestion: (questionId: string, optionId: string) => void;
  answerProgramMediaQuestion: (questionId: string, answerId: string) => void;
  publishPublicPoll: (pollsterId: string) => void;
  gameState: GameState;
  hireMarketingAdvisor: (advisorId: MarketingAdvisorId) => void;
  hydrateGame: () => Promise<void>;
  isHydrated: boolean;
  plannedActions: PlannedAction[];
  planAction: (actionId: CampaignActionId, targetRegionId?: RegionId) => void;
  planCampaignActionV2: (actionV2Id: string, targetRegionId?: RegionId) => void;
  removePlannedAction: (plannedActionId: string) => void;
  resetGame: () => void;
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
        staffCap: runtime.staffCap ?? state.rules?.maxActionsPerWeek ?? 3,
        staffUsed: runtime.staffUsed ?? 0,
      },
    ]),
  ) as GameState['partyRuntime'];

  return {
    ...state,
    campaignActionsV2: state.campaignActionsV2 ?? campaignActionsV2,
    issueLayer: state.issueLayer ?? createIssueLayerState(),
    marketingAdvisors: state.marketingAdvisors ?? marketingAdvisors,
    mode: 'fullRealism',
    partyRuntime,
    publicPollsterId: state.publicPollsterId ?? 'medianPlus',
    turnoutModifiers: state.turnoutModifiers ?? [],
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
    const action =
      state.campaignActionsV2?.find((candidate) => candidate.id === plannedAction.actionV2Id) ??
      state.actions.find((candidate) => candidate.id === plannedAction.actionId);
    return sum + (action?.cost ?? 0);
  }, 0);
}

function plannedCapacity(state: GameState, plannedActions: PlannedAction[]) {
  return plannedActions.reduce((sum, plannedAction) => {
    const actionV2 = state.campaignActionsV2?.find((candidate) => candidate.id === plannedAction.actionV2Id);
    const action = state.actions.find((candidate) => candidate.id === plannedAction.actionId);
    return sum + (actionV2?.staffCost ?? action?.capacityCost ?? 0);
  }, 0);
}

function legacyActionIdForActionV2(actionV2Id: string): CampaignActionId {
  const legacyEntry = Object.entries(legacyCampaignActionV2ById).find(([, mappedId]) => mappedId === actionV2Id);
  return (legacyEntry?.[0] as CampaignActionId | undefined) ?? 'regionalRally';
}

function persist(state: GameState, plannedActions: PlannedAction[] = []) {
  void saveGame(state, plannedActions);
}

export const useGameStore = create<GameStore>((set, get) => ({
  acceptSponsorOffer: (sponsorId) => {
    const nextState = acceptSponsor(get().gameState, sponsorId);
    set({ gameState: nextState });
    persist(nextState, get().plannedActions);
  },
  activateCampaignPackage: (packageId) => {
    const nextState = applyCampaignPackage(get().gameState, packageId);
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
  planAction: (actionId, targetRegionId) => {
    const { gameState, plannedActions } = get();
    const action = gameState.actions.find((item) => item.id === actionId);
    const runtime = gameState.partyRuntime.player;

    if (!action || plannedActions.length >= gameState.rules.maxActionsPerWeek) {
      return;
    }

    if (runtime.cash < plannedCost(gameState, plannedActions) + action.cost) {
      return;
    }

    if (runtime.legalSpend + plannedCost(gameState, plannedActions) + action.cost > gameState.rules.legalSpendCap) {
      return;
    }

    if (plannedCapacity(gameState, plannedActions) + action.capacityCost > gameState.rules.maxActionsPerWeek) {
      return;
    }

    const nextPlannedActions = [
      ...plannedActions,
      {
        actionId,
        id: `${actionId}-${targetRegionId ?? 'national'}-${gameState.week}-${plannedActions.length}`,
        targetRegionId,
      },
    ];

    set({ plannedActions: nextPlannedActions });
    persist(gameState, nextPlannedActions);
  },
  planCampaignActionV2: (actionV2Id, targetRegionId) => {
    const { gameState, plannedActions } = get();
    const action = gameState.campaignActionsV2.find((item) => item.id === actionV2Id);
    const runtime = gameState.partyRuntime.player;

    if (!action || plannedActions.length >= gameState.rules.maxActionsPerWeek) {
      return;
    }

    if (runtime.cash < plannedCost(gameState, plannedActions) + action.cost) {
      return;
    }

    if (action.legality !== 'illegal' && runtime.legalSpend + plannedCost(gameState, plannedActions) + action.cost > gameState.rules.legalSpendCap) {
      return;
    }

    if (plannedCapacity(gameState, plannedActions) + action.staffCost > (runtime.staffCap ?? gameState.rules.maxActionsPerWeek)) {
      return;
    }

    if (action.target.scope === 'region' && !targetRegionId) {
      return;
    }

    const nextPlannedActions = [
      ...plannedActions,
      {
        actionId: legacyActionIdForActionV2(actionV2Id),
        actionV2Id,
        id: `${actionV2Id}-${targetRegionId ?? 'national'}-${gameState.week}-${plannedActions.length}`,
        targetRegionId,
      },
    ];

    set({ plannedActions: nextPlannedActions });
    persist(gameState, nextPlannedActions);
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
