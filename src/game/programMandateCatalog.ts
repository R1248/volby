import { actionCost, actionRisks, type ActionTemplate } from './actions/actionTypes';

export type ProgramMandateTemplate = ActionTemplate & {
  placement: 'program_mandate';
  availability: 'player_initiated' | 'opportunity' | 'implicit_system';
};

const program = (id: string, name: string, effects: ActionTemplate['effects'], availability: ProgramMandateTemplate['availability'] = 'player_initiated') => ({
  availability,
  placement: 'program_mandate',
  id,
  name,
  description: 'Programova nebo mandatova prace patri do Program/Mandate, ne do katalogu kampanovych prostredku.',
  category: id.includes('Speech') ? 'parliament' : 'program',
  legality: 'clean',
  ethicalRisk: 0.02,
  allowedTargets: ['national', 'issue'],
  requiredTargets: ['issue'],
  cost: actionCost({ money: 0.12, centralStaffHours: 8, leaderHours: id.includes('Speech') ? 3 : 1, fatigue: 0.015 }),
  effects,
  risks: actionRisks({ mediaBacklash: 0.035, messageDiscipline: 0.04 }),
  tags: ['program_mandate'],
}) satisfies ProgramMandateTemplate;

export const programMandateTemplates = [
  program('programDeclaration', 'Programove prohlaseni', { issueSalience: { target: 0.18 }, reputation: { competence: 0.008 } }),
  program('issuePositionUpdate', 'Update pozice k tematu', { issuePosition: { target: 0.12 }, issueSalience: { target: 0.08 } }),
  program('thematicPolicyPackage', 'Tematicky policy balik', { issueSalience: { target: 0.22 }, reputation: { competence: 0.012 } }),
  program('expertTeamPresentation', 'Predstaveni expertniho tymu', { reputation: { competence: 0.016 }, issueSalience: { target: 0.12 } }),
  program('billProposal', 'Navrh zakona', { issuePosition: { target: 0.1 }, reputation: { competence: 0.01 } }),
  program('amendmentProposal', 'Pozmenovaci navrh', { issuePosition: { target: 0.08 }, reputation: { competence: 0.008 } }),
  program('critiqueControversialBill', 'Kritika kontroverzniho zakona', { issueSalience: { target: 0.16 }, reputation: { consistency: 0.008 } }),
  program('shadowGovernmentStatement', 'Stanovisko stinove vlady', { reputation: { competence: 0.014 }, issueSalience: { target: 0.1 } }),
  program('parliamentarySpeechOpportunity', 'Prilezitost parlamentniho projevu', { reputation: { competence: 0.008 }, issueSalience: { target: 0.12 } }, 'opportunity'),
] satisfies ProgramMandateTemplate[];

// TODO(program/mandate): derive parliament attendance from remaining leader and staff capacity
// after campaign, media and event-response allocations instead of exposing it as a click action.
export function deriveParliamentAttendancePressure(availableLeaderHours: number, availableStaffHours: number) {
  return Math.max(0, 1 - (availableLeaderHours * 0.65 + availableStaffHours * 0.35) / 40);
}
