import { actionCost, actionRisks, type ActionTemplate } from './actions/actionTypes';

export type PeopleOpsTemplate = ActionTemplate & {
  placement: 'people_ops';
  availability: 'player_initiated' | 'persistent_setting';
};

const peopleOps = [
  ['recruitVolunteers', 'Nabor dobrovolniku', { organization: { volunteers: 0.05 } }],
  ['trainVolunteers', 'Skoleni dobrovolniku', { organization: { volunteerQuality: 0.05 } }],
  ['hireRegionalCoordinator', 'Najmout regionalniho koordinatora', { organization: { regionalCapacity: 0.06 } }],
  ['hireExternalFieldStaff', 'Najmout externi terenni tym', { organization: { fieldCapacity: 0.05 } }],
  ['campaignCRM', 'Kampanove CRM', { organization: { dataOps: 0.06 } }],
  ['callCenter', 'Call centrum', { organization: { contactCapacity: 0.05 } }],
  ['candidateTraining', 'Skoleni kandidatu', { organization: { candidateQuality: 0.05 }, reputation: { competence: 0.006 } }],
  ['leaderMediaTraining', 'Medialni trening lidra', { organization: { mediaPreparedness: 0.05 }, reputation: { competence: 0.006 } }],
  ['debatePreparation', 'Priprava na debatu', { organization: { debatePreparedness: 0.05 }, reputation: { competence: 0.004 } }],
  ['strengthenRegionalStaff', 'Posilit regionalni stab', { organization: { regionalCapacity: 0.07 } }],
] as const;

export const peopleOpsTemplates = peopleOps.map(([id, name, effects], index) => ({
  availability: 'player_initiated',
  placement: 'people_ops',
  id,
  name,
  description: 'Organizacni investice upravujici kapacity, multiplikatory a budouci provedeni akci, nikoli okamzitou podporu.',
  category: 'organization',
  legality: 'clean',
  ethicalRisk: 0.01,
  allowedTargets: ['national', 'region', 'leader'],
  requiredTargets: index === 2 || index === 9 ? ['region'] : ['national'],
  cost: actionCost({ money: 0.25 + index * 0.06, centralStaffHours: 6 + index, regionalStaffHours: index % 3 === 0 ? 10 : 0, leaderHours: id.includes('leader') ? 4 : 0, fatigue: 0.005 }),
  effects,
  risks: actionRisks({ internalFaction: 0.02, messageDiscipline: 0.01 }),
  tags: ['people_ops', 'capacity'],
})) satisfies PeopleOpsTemplate[];
