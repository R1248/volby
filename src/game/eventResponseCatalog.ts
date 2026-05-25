import { actionCost, actionRisks, type ActionTemplate } from './actions/actionTypes';

export type EventResponseTemplate = ActionTemplate & {
  placement: 'event_response';
  availability: 'event_response';
  requiresActiveEvent: true;
};

const response = (id: string, name: string, description: string, risk = 0.06) => ({
  availability: 'event_response',
  placement: 'event_response',
  requiresActiveEvent: true,
  id,
  name,
  description,
  category: 'crisis',
  legality: 'clean',
  ethicalRisk: id === 'attackSource' ? 0.2 : 0.05,
  allowedTargets: ['national', 'issue', 'opponent'],
  requiredTargets: ['national'],
  cost: actionCost({ money: 0.08, centralStaffHours: 8, leaderHours: id === 'quickApology' ? 3 : 0, fatigue: 0.025 }),
  effects: { reputation: { trust: id === 'quickApology' || id === 'transparentAudit' ? 0.014 : 0.004 }, informationQuality: 0.01 },
  risks: actionRisks({ mediaBacklash: risk, scandal: risk * 0.7, messageDiscipline: risk }),
  tags: ['event_response', 'requires_active_event'],
}) satisfies EventResponseTemplate;

export const eventResponseTemplates = [
  response('quickApology', 'Rychla omluva', 'Reakce na aktivni krizi s durazem na priznani chyby a omezeni skod.', 0.04),
  response('denyAllegation', 'Odmitnout obvineni', 'Reakce na aktivni obvineni, ktera muze fungovat jen pri dostatecne nizke evidenci.', 0.12),
  response('publishDocuments', 'Zverejnit dokumenty', 'Reakce na krizi zalozena na transparentnim dolozeni dostupnych informaci.', 0.06),
  response('transparentAudit', 'Transparentni audit', 'Silnejsi odpoved na krizi s vyssi cenou a delsim reputacnim efektem.', 0.035),
  response('internalInvestigation', 'Interni vysetrovani', 'Zahaji vnitrni proverku aktivni kauzy.', 0.05),
  response('removeCandidate', 'Stahnout kandidata', 'Personalni krizova reakce na aktivni kauzu kandidata.', 0.07),
  response('legalAction', 'Pravni kroky', 'Formalni obrana pri aktivni kauze nebo utoku.', 0.09),
  response('redirectAttention', 'Presmerovat pozornost', 'Rizikovejsi komunikacni odpoutani od aktivni krize.', 0.14),
  response('attackSource', 'Zautocit na zdroj', 'Konfrontacni odpoved na aktivni obvineni s vyssim backlash rizikem.', 0.18),
] satisfies EventResponseTemplate[];
