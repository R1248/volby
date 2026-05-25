import { actionCost, actionRisks, type ActionCost, type ActionRisks } from './actions/actionTypes';

export type MediaResponseOption = {
  id: 'sendLeader' | 'sendSpokesperson' | 'decline' | 'ignore' | 'acceptWithPreparation' | 'acceptConfrontational' | 'acceptTechnocratic';
  label: string;
  cost: ActionCost;
  risks: ActionRisks;
  effects: {
    awareness?: number;
    persuasion?: number;
    reputation?: Record<string, number>;
    issueSalience?: Record<string, number>;
  };
};

export type MediaOpportunityTemplate = {
  id: string;
  name: string;
  placement: 'media';
  availability: 'opportunity';
  format: 'debate' | 'interview' | 'podcast' | 'panel';
  defaultIssue?: string;
  responseOptions: MediaResponseOption[];
};

const responses: MediaResponseOption[] = [
  {
    id: 'sendLeader',
    label: 'Poslat lidra',
    cost: actionCost({ centralStaffHours: 4, leaderHours: 6, fatigue: 0.045 }),
    effects: { awareness: 0.028, persuasion: 0.01, reputation: { authenticity: 0.008 } },
    risks: actionRisks({ mediaBacklash: 0.09, messageDiscipline: 0.1 }),
  },
  {
    id: 'sendSpokesperson',
    label: 'Poslat mluvciho',
    cost: actionCost({ centralStaffHours: 5, fatigue: 0.012 }),
    effects: { awareness: 0.016, persuasion: 0.004, reputation: { competence: 0.004 } },
    risks: actionRisks({ mediaBacklash: 0.06, messageDiscipline: 0.08 }),
  },
  {
    id: 'decline',
    label: 'Odmitnout',
    cost: actionCost({ centralStaffHours: 1 }),
    effects: { reputation: { authenticity: -0.004 } },
    risks: actionRisks({ mediaBacklash: 0.035 }),
  },
  {
    id: 'ignore',
    label: 'Ignorovat',
    cost: actionCost(),
    effects: { reputation: { competence: -0.006 } },
    risks: actionRisks({ mediaBacklash: 0.07, messageDiscipline: 0.04 }),
  },
  {
    id: 'acceptWithPreparation',
    label: 'Prijmout s pripravou',
    cost: actionCost({ centralStaffHours: 8, leaderHours: 7, fatigue: 0.05 }),
    effects: { awareness: 0.026, persuasion: 0.012, reputation: { competence: 0.012 } },
    risks: actionRisks({ mediaBacklash: 0.055, messageDiscipline: 0.045 }),
  },
  {
    id: 'acceptConfrontational',
    label: 'Konfrontacni vystup',
    cost: actionCost({ centralStaffHours: 5, leaderHours: 6, fatigue: 0.055 }),
    effects: { awareness: 0.034, persuasion: 0.006, reputation: { controversy: 0.02 } },
    risks: actionRisks({ counterMobilization: 0.08, mediaBacklash: 0.14, messageDiscipline: 0.13 }),
  },
  {
    id: 'acceptTechnocratic',
    label: 'Technokraticky vystup',
    cost: actionCost({ centralStaffHours: 7, leaderHours: 6, fatigue: 0.04 }),
    effects: { awareness: 0.02, persuasion: 0.008, reputation: { competence: 0.014 }, issueSalience: { target: 0.08 } },
    risks: actionRisks({ mediaBacklash: 0.05, messageDiscipline: 0.06 }),
  },
];

const mediaOpportunityTemplateDefinitions = [
  { id: 'tvDebateInvitation', name: 'Pozvani do TV debaty', format: 'debate' },
  { id: 'regionalInterviewInvitation', name: 'Pozvani do regionalniho rozhovoru', format: 'interview' },
  { id: 'podcastInvitation', name: 'Pozvani do podcastu', format: 'podcast' },
  { id: 'panelDiscussionInvitation', name: 'Pozvani do panelove diskuze', format: 'panel' },
  { id: 'leaderSuperdebateInvitation', name: 'Pozvani do superdebaty lidru', format: 'debate' },
] as const;

export const mediaOpportunityTemplates = mediaOpportunityTemplateDefinitions.map((template) => ({
  availability: 'opportunity',
  placement: 'media',
  responseOptions: responses,
  ...template,
})) satisfies MediaOpportunityTemplate[];
