import type {
  CampaignTripEvent,
  IdeologicalFrame,
  Issue,
  IssueFraming,
  IssueLayerPartyState,
  IssueLayerState,
  IssueRelation,
  MediaQuestion,
  PartyIssuePosition,
  ProgramIssueId,
} from './issueTypes';

const issue = (
  id: ProgramIssueId,
  name: string,
  domain: Issue['domain'],
  description: string,
  dimensionLoadings: Issue['dimensionLoadings'],
  defaultSalience: number,
  controversy: number,
  polarization: number,
  legibility: number,
  shortName = name,
): Issue => ({
  controversy,
  defaultSalience,
  description,
  dimensionLoadings,
  domain,
  id,
  legibility,
  name,
  polarization,
  shortName,
});

export const programIssues: Issue[] = [
  issue('taxes', 'Dane', 'economy', 'Danove zatizeni, slevy a rozpoctove priority.', { econ: 0.9, establishment: 0.15 }, 0.68, 0.48, 0.58, 0.82),
  issue('redistribution', 'Prerozdelovani', 'economy', 'Mira solidarity, transferu a role statu.', { econ: -0.95, establishment: 0.1 }, 0.62, 0.52, 0.58, 0.72),
  issue('pensions', 'Duchody', 'welfare', 'Stabilita duchodu a mezigeneracni dohoda.', { econ: -0.55, authority: 0.15, establishment: 0.2 }, 0.78, 0.42, 0.46, 0.86),
  issue('regulation', 'Regulace', 'economy', 'Pravidla pro podnikani, byrokracie a dohled statu.', { econ: -0.7, authority: 0.25, establishment: 0.2 }, 0.56, 0.45, 0.52, 0.72),
  issue('housing', 'Bydleni', 'welfare', 'Dostupnost najmu, vystavba a role obci/statu.', { econ: -0.55, establishment: 0.15 }, 0.74, 0.38, 0.44, 0.78),
  issue('sameSexMarriage', 'Manzelstvi pro vsechny', 'culture', 'Rovna pravni uprava manzelstvi.', { culture: -0.75, authority: -0.25, establishment: 0.15 }, 0.44, 0.7, 0.82, 0.8),
  issue('sameSexAdoption', 'Adopce stejnopohlavnich paru', 'culture', 'Rodinna prava a adopce.', { culture: -0.78, authority: -0.18 }, 0.36, 0.76, 0.86, 0.72),
  issue('affirmativeAction', 'Vyrovnavaci opatreni', 'culture', 'Aktivni podpora znevyhodnenych skupin.', { culture: -0.7, authority: -0.2, econ: -0.25 }, 0.28, 0.82, 0.88, 0.5),
  issue('genderQuotas', 'Genderove kvoty', 'culture', 'Kvoty ve vedeni a na kandidatkach.', { culture: -0.62, authority: 0.1, establishment: 0.25 }, 0.24, 0.78, 0.84, 0.46),
  issue('cannabis', 'Konopi', 'culture', 'Legalizace nebo regulace konopi.', { culture: -0.58, authority: -0.62 }, 0.34, 0.56, 0.62, 0.72),
  issue('migration', 'Migrace', 'migration', 'Azyl, integrace a ochrana hranic.', { culture: 0.72, authority: 0.58, globalism: -0.45 }, 0.66, 0.86, 0.9, 0.72),
  issue('lawAndOrder', 'Poradek a bezpeci', 'authority', 'Trestni politika, prevence a verejny poradek.', { authority: 0.78, culture: 0.28 }, 0.7, 0.48, 0.54, 0.84),
  issue('policePowers', 'Pravomoci policie', 'authority', 'Rozsah pravomoci a dohled nad bezpecnostnimi slozkami.', { authority: 0.86, establishment: 0.18 }, 0.48, 0.58, 0.66, 0.72),
  issue('directDemocracy', 'Prima demokracie', 'institutions', 'Referenda a prime hlasovani o zasadnich otazkach.', { establishment: -0.68, authority: 0.2 }, 0.42, 0.54, 0.62, 0.68),
  issue('antiCorruption', 'Protikorupcni politika', 'institutions', 'Pravidla, transparentnost a kontrola moci.', { establishment: 0.35, authority: -0.12 }, 0.62, 0.32, 0.34, 0.9),
  issue('mediaTrust', 'Duvera v media', 'institutions', 'Vztah k verejnopravnim a soukromym mediim.', { establishment: 0.55, globalism: 0.22 }, 0.42, 0.62, 0.68, 0.64),
  issue('civilServiceReform', 'Statni sprava', 'institutions', 'Profesionalizace, digitalizace a odpolitizovani uradu.', { establishment: 0.5, econ: 0.15, authority: -0.1 }, 0.5, 0.3, 0.36, 0.74),
  issue('euIntegration', 'Evropska integrace', 'foreign_policy', 'Postoj k EU a spolecnym evropskym resenim.', { globalism: 0.88, establishment: 0.35, culture: -0.2 }, 0.54, 0.66, 0.76, 0.76),
  issue('nato', 'NATO', 'foreign_policy', 'Bezpecnostni ukotveni v NATO.', { ukraine: 0.55, globalism: 0.55, authority: 0.22 }, 0.5, 0.46, 0.54, 0.84),
  issue('ukraineSupport', 'Pomoc Ukrajine', 'foreign_policy', 'Vojenska, humanitarni a politicka podpora Ukrajine.', { ukraine: 0.95, globalism: 0.48, establishment: 0.2 }, 0.62, 0.78, 0.86, 0.78),
  issue('nationalSovereignty', 'Narodni suverenita', 'foreign_policy', 'Duvod pro domaci rozhodovani a odpor k prenosu pravomoci.', { globalism: -0.86, culture: 0.35, establishment: -0.25 }, 0.58, 0.64, 0.74, 0.72),
  issue(
    'greenDeal',
    'Green Deal',
    'green',
    'Postoj k Evropske zelene dohode jako politickemu baliku: klimaticka transformace, evropska regulace, ceny energii, prumysl, doprava a naklady pro domacnosti.',
    { green: 0.45, globalism: 0.3, establishment: 0.2, ukraine: 0.15, culture: -0.25, econ: -0.05 },
    0.75,
    0.9,
    0.85,
    0.65,
  ),
  issue('nuclearEnergy', 'Jadro', 'energy', 'Role jadra v energetice.', { green: 0.08, authority: 0.18, ukraine: 0.1 }, 0.52, 0.38, 0.44, 0.78),
  issue('coalPhaseout', 'Utlum uhli', 'energy', 'Tempo odchodu od uhli.', { green: 0.72, econ: -0.12, establishment: 0.1 }, 0.5, 0.7, 0.78, 0.66),
  issue('energyPrices', 'Ceny energii', 'energy', 'Dostupnost energie pro domacnosti a prumysl.', { econ: -0.28, authority: 0.1, establishment: -0.12 }, 0.76, 0.58, 0.64, 0.86),
];

export const issueFramings: IssueFraming[] = [
  { id: 'equalRights', issueId: 'sameSexMarriage', name: 'Rovna prava', description: 'Tema je vysvetlene jako rovnost pred zakonem.', legibilityModifier: 0.12, controversyModifier: 0.04, baseMobilizationModifier: 0.06, swingAppealModifier: 0.02, dimensionEffects: { culture: -0.08 } },
  { id: 'noCultureWar', issueId: 'sameSexMarriage', name: 'Bez kulturni valky', description: 'Umirnene pravni reseni bez ostrych symbolu.', legibilityModifier: 0.06, controversyModifier: -0.12, baseMobilizationModifier: -0.02, swingAppealModifier: 0.08 },
  { id: 'traditionalFamily', issueId: 'sameSexMarriage', name: 'Tradicni rodina', description: 'Tema je zasazene do ochrany tradicni definice.', legibilityModifier: 0.08, controversyModifier: 0.08, baseMobilizationModifier: 0.05, swingAppealModifier: -0.06, dimensionEffects: { culture: 0.1 } },
  { id: 'climateResponsibility', issueId: 'greenDeal', name: 'Klimaticka odpovednost', description: 'Green Deal jako nutna klimaticka transformace a odpovednost vuci budoucnosti.', legibilityModifier: 0.08, controversyModifier: 0.12, baseMobilizationModifier: 0.06, swingAppealModifier: 0.0, dimensionEffects: { green: 0.08, globalism: 0.04 } },
  { id: 'modernization', issueId: 'greenDeal', name: 'Modernizace ekonomiky', description: 'Green Deal jako prilezitost pro inovace, energetickou bezpecnost a nove technologie.', legibilityModifier: 0.12, controversyModifier: -0.1, baseMobilizationModifier: 0.02, swingAppealModifier: 0.08, dimensionEffects: { econ: 0.06, green: 0.04 } },
  { id: 'energySecurity', issueId: 'greenDeal', name: 'Energeticka bezpecnost', description: 'Transformace jako snizeni zavislosti na fosilnich palivech a geopoliticky rizikovych dodavatelich.', legibilityModifier: 0.08, controversyModifier: -0.08, baseMobilizationModifier: 0.04, swingAppealModifier: 0.06, dimensionEffects: { authority: 0.04, ukraine: 0.05 } },
  { id: 'expensiveBureaucracy', issueId: 'greenDeal', name: 'Draha byrokracie z Bruselu', description: 'Green Deal jako preregulovany, drahy a socialne necitlivy evropsky projekt.', legibilityModifier: 0.06, controversyModifier: 0.1, baseMobilizationModifier: 0.08, swingAppealModifier: -0.05, dimensionEffects: { globalism: -0.08, establishment: -0.05 } },
  { id: 'industrialThreat', issueId: 'greenDeal', name: 'Hrozba pro prumysl a domacnosti', description: 'Green Deal jako riziko pro ceny energii, prumysl, automobilky a domacnosti.', legibilityModifier: 0.06, controversyModifier: 0.14, baseMobilizationModifier: 0.08, swingAppealModifier: -0.08, dimensionEffects: { econ: -0.05, authority: 0.04 } },
  { id: 'reformNotReject', issueId: 'greenDeal', name: 'Reformovat, ne odmitnout', description: 'Ekologicka modernizace ano, ale soucasny Green Deal je potreba upravit kvuli cenam, prumyslu a socialnim dopadum.', legibilityModifier: 0.04, controversyModifier: -0.12, baseMobilizationModifier: -0.01, swingAppealModifier: 0.1 },
  { id: 'westernSecurity', issueId: 'ukraineSupport', name: 'Zapadni bezpecnost', description: 'Podpora Ukrajiny jako ochrana Ceska.', legibilityModifier: 0.1, controversyModifier: -0.04, baseMobilizationModifier: 0.04, swingAppealModifier: 0.04, dimensionEffects: { ukraine: 0.08 } },
  { id: 'costControl', issueId: 'ukraineSupport', name: 'Kontrola nakladu', description: 'Podpora s durazem na transparentni naklady.', legibilityModifier: 0.04, controversyModifier: -0.1, baseMobilizationModifier: -0.02, swingAppealModifier: 0.08 },
  { id: 'cheapEnergy', issueId: 'energyPrices', name: 'Levna energie', description: 'Doporuceni prioritizuje ceny pro domacnosti a firmy.', legibilityModifier: 0.1, controversyModifier: 0.02, baseMobilizationModifier: 0.06, swingAppealModifier: 0.04, dimensionEffects: { econ: -0.04 } },
  { id: 'cleanState', issueId: 'antiCorruption', name: 'Cisty stat', description: 'Drazsi duslednost v pravidlech a zakazkach.', legibilityModifier: 0.12, controversyModifier: -0.04, baseMobilizationModifier: 0.04, swingAppealModifier: 0.04 },
];

const relation = (
  from: ProgramIssueId,
  to: ProgramIssueId,
  type: IssueRelation['type'],
  strength: number,
  confidenceForward: number,
  confidenceReverse: number,
  expectedFromDirection: IssueRelation['expectedFromDirection'],
  expectedToDirection: IssueRelation['expectedToDirection'],
  description: string,
  salienceSensitive = true,
): IssueRelation => ({
  confidenceForward,
  confidenceReverse,
  description,
  expectedFromDirection,
  expectedToDirection,
  from,
  salienceSensitive,
  strength,
  to,
  type,
});

export const issueRelations: IssueRelation[] = [
  relation('affirmativeAction', 'sameSexMarriage', 'usually_implies', 0.9, 0.84, 0.36, 'pro', 'pro', 'Vyrovnavaci opatreni obvykle patri do sirsi progresivni kulturni rodiny.'),
  relation('sameSexAdoption', 'sameSexMarriage', 'usually_implies', 0.95, 0.9, 0.55, 'pro', 'pro', 'Podpora adopci skoro vzdy predpoklada podporu pravniho uznani paru.'),
  relation('genderQuotas', 'affirmativeAction', 'usually_implies', 0.82, 0.86, 0.48, 'pro', 'pro', 'Kvoty jsou konkretni forma vyrovnavacich opatreni.'),
  relation('greenDeal', 'coalPhaseout', 'same_family', 0.74, 0.74, 0.5, 'pro', 'pro', 'Zelena transformace a utlum uhli jsou ctene spolecne.'),
  relation('greenDeal', 'euIntegration', 'usually_implies', 0.7, 0.72, 0.42, 'pro', 'pro', 'Podpora Green Dealu obvykle predpoklada alespon mirne proevropske ukotveni.'),
  relation('greenDeal', 'nationalSovereignty', 'tension', 0.62, 0.62, 0.36, 'pro', 'pro', 'Silny Green Deal je v napeti s durazem na narodni suverenitu.'),
  relation('greenDeal', 'regulation', 'tension', 0.62, 0.62, 0.34, 'pro', 'against', 'Silny Green Deal se hure sklada s ostre antiregulacni linkou bez framingu.'),
  relation('greenDeal', 'taxes', 'tension', 0.52, 0.54, 0.3, 'pro', 'against', 'Ambiciozni transformace vyvolava otazku financovani.'),
  relation('greenDeal', 'redistribution', 'splits_audience', 0.44, 0.42, 0.28, 'pro', 'pro', 'Klimaticka politika a socialni kompenzace mohou delit publika podle cen a duvery v instituce.'),
  relation('energyPrices', 'greenDeal', 'tension', 0.62, 0.58, 0.36, 'pro', 'pro', 'Levna energie a silny Green Deal vyzaduji jasny vyklad.'),
  relation('nuclearEnergy', 'energyPrices', 'same_family', 0.52, 0.58, 0.44, 'pro', 'pro', 'Jadro lze cist jako soucast stabilni energetiky.'),
  relation('coalPhaseout', 'energyPrices', 'tension', 0.58, 0.56, 0.34, 'pro', 'pro', 'Rychly utlum uhli zvysuje tlak na vysvetleni cen.'),
  relation('nationalSovereignty', 'euIntegration', 'tension', 0.86, 0.86, 0.66, 'pro', 'pro', 'Silna suverenita je v napeti se silnou integraci.'),
  relation('ukraineSupport', 'nato', 'same_family', 0.78, 0.74, 0.6, 'pro', 'pro', 'Podpora Ukrajiny je casto spojena s bezpecnostnim ukotvenim.'),
  relation('ukraineSupport', 'euIntegration', 'same_family', 0.62, 0.58, 0.44, 'pro', 'pro', 'Pro-ukrajinska linka casto navazuje na evropske ukotveni.'),
  relation('ukraineSupport', 'nationalSovereignty', 'tension', 0.46, 0.42, 0.32, 'pro', 'pro', 'Napeti vznikne hlavne pri anti-zapadnim cteni suverenity.'),
  relation('directDemocracy', 'mediaTrust', 'tension', 0.42, 0.36, 0.24, 'pro', 'pro', 'Silna prima demokracie muze byt v napeti s vysokou institucionalni duverou.'),
  relation('directDemocracy', 'civilServiceReform', 'tension', 0.45, 0.42, 0.24, 'pro', 'pro', 'Referenda a technokraticka sprava moci potrebuji srozumitelny ramec.'),
  relation('antiCorruption', 'civilServiceReform', 'same_family', 0.76, 0.7, 0.56, 'pro', 'pro', 'Protikorupcni politika a profesionalni stat se doplnuji.'),
  relation('antiCorruption', 'mediaTrust', 'same_family', 0.42, 0.38, 0.28, 'pro', 'pro', 'Duvody pro kontrolu moci se casto prekryvaji s duverou v instituce.'),
  relation('mediaTrust', 'nationalSovereignty', 'tension', 0.48, 0.44, 0.3, 'pro', 'pro', 'Institucionalni duvera se hure sklada s tvrdou anti-systemovou linkou.'),
  relation('migration', 'lawAndOrder', 'mobilizes_same_audience', 0.7, 0.62, 0.54, 'pro', 'pro', 'Tema migrace a poradku casto mobilizuje podobne publikum.'),
  relation('migration', 'euIntegration', 'tension', 0.58, 0.54, 0.38, 'pro', 'pro', 'Tvrdsi migracni linka se muze tlouct s proevropskou agendou.'),
  relation('policePowers', 'lawAndOrder', 'usually_implies', 0.72, 0.7, 0.48, 'pro', 'pro', 'Silnejsi pravomoci policie obvykle navazuji na poradkovou agendu.'),
  relation('cannabis', 'policePowers', 'tension', 0.46, 0.4, 0.28, 'pro', 'pro', 'Liberalizace konopi muze byt v napeti s tvrdou represivni linkou.'),
  relation('taxes', 'redistribution', 'tension', 0.68, 0.64, 0.42, 'against', 'pro', 'Nizke dane a silne prerozdelovani potrebuji vysvetleni financovani.'),
  relation('pensions', 'taxes', 'tension', 0.46, 0.42, 0.28, 'pro', 'against', 'Silne sliby duchodu a nizke dane tlaci na rozpoctovou duveryhodnost.'),
  relation('housing', 'regulation', 'tension', 0.36, 0.34, 0.24, 'pro', 'against', 'Dostupne bydleni s deregulaci potrebuje konkretni mechanismus.'),
  relation('housing', 'redistribution', 'same_family', 0.46, 0.42, 0.32, 'pro', 'pro', 'Dostupne bydleni casto navazuje na socialni politiku.'),
  relation('sameSexMarriage', 'cannabis', 'mobilizes_same_audience', 0.38, 0.34, 0.3, 'pro', 'pro', 'Kulturne liberalni temata casto sdili cast publika.'),
  relation('sameSexMarriage', 'migration', 'splits_audience', 0.5, 0.42, 0.34, 'pro', 'pro', 'Liberalni kulturni prava a otevrena migrace nemaji totozne publikum.'),
  relation('nationalSovereignty', 'nato', 'tension', 0.38, 0.34, 0.26, 'pro', 'pro', 'Napeti je slabsi nez u EU, ale vyzaduje bezpecnostni ramec.'),
  relation('nato', 'policePowers', 'same_family', 0.28, 0.24, 0.22, 'pro', 'pro', 'Bezpecnostni temata se mohou podporovat, ale nejsou totozna.'),
  relation('civilServiceReform', 'regulation', 'tension', 0.32, 0.28, 0.22, 'pro', 'against', 'Mene byrokracie a silna profesionalni pravidla potrebuji rozliseni.'),
  relation('antiCorruption', 'directDemocracy', 'mobilizes_same_audience', 0.34, 0.3, 0.24, 'pro', 'pro', 'Obe temata mohou mobilizovat protestni poptavku po kontrole moci.'),
  relation('genderQuotas', 'sameSexMarriage', 'usually_implies', 0.56, 0.52, 0.3, 'pro', 'pro', 'Kvoty se ctu jako cast kulturne progresivniho baliku.'),
  relation('affirmativeAction', 'migration', 'splits_audience', 0.34, 0.3, 0.2, 'pro', 'pro', 'Progresivni rovnostarska agenda a migrace nemusi mit totozne publikum.'),
  relation('energyPrices', 'coalPhaseout', 'tension', 0.56, 0.54, 0.34, 'pro', 'pro', 'Levne energie a rychly utlum uhli potrebuji spolecny plan.'),
  relation('greenDeal', 'nuclearEnergy', 'requires_framing', 0.44, 0.4, 0.3, 'pro', 'pro', 'Pro-jaderny Green Deal potrebuje ramec modernizace nebo bezpecnosti.'),
  relation('euIntegration', 'nationalSovereignty', 'tension', 0.5, 0.46, 0.7, 'pro', 'pro', 'Opacny smer existuje, ale je slabsi: proevropskost nevylucuje domaci zajmy.'),
  relation('lawAndOrder', 'directDemocracy', 'same_family', 0.28, 0.24, 0.2, 'pro', 'pro', 'Obe temata mohou znit jako zpetna kontrola poradku a elit.'),
  relation('taxes', 'civilServiceReform', 'same_family', 0.4, 0.34, 0.26, 'against', 'pro', 'Nizsi dane jsou citelnejsi s agendou efektivnejsiho statu.'),
  relation('pensions', 'redistribution', 'same_family', 0.58, 0.52, 0.4, 'pro', 'pro', 'Silne duchody casto navazuji na solidarni stat.'),
];

export const ideologicalFrames: IdeologicalFrame[] = [
  { id: 'liberalCenter', name: 'Liberalni stred', description: 'Proevropsky, institucionalni a kulturne liberalni smer.', expectedIssues: { euIntegration: 1, ukraineSupport: 1, sameSexMarriage: 1, antiCorruption: 1 }, tolerance: { migration: 1, greenDeal: 1, taxes: 1 }, dimensionCenter: { culture: -0.35, establishment: 0.45, globalism: 0.65, ukraine: 0.65 } },
  { id: 'conservativeRight', name: 'Konzervativni pravice', description: 'Trh, poradek a opatrne kulturni zmeny.', expectedIssues: { taxes: -1, regulation: -1, lawAndOrder: 1, nato: 1 }, tolerance: { sameSexMarriage: 1, euIntegration: 1 }, dimensionCenter: { econ: 0.45, culture: 0.25, authority: 0.35 } },
  { id: 'socialDemocratic', name: 'Socialni stat', description: 'Dostupne sluzby, duchody a regulace trhu.', expectedIssues: { redistribution: 1, pensions: 1, housing: 1, antiCorruption: 1 }, tolerance: { greenDeal: 1, euIntegration: 1 }, dimensionCenter: { econ: -0.55, establishment: 0.25 } },
  { id: 'nationalConservative', name: 'Narodne konzervativni smer', description: 'Suverenita, poradek a opatrnost k integraci.', expectedIssues: { nationalSovereignty: 1, migration: 1, lawAndOrder: 1, directDemocracy: 1 }, tolerance: { taxes: 1, pensions: 1 }, dimensionCenter: { culture: 0.55, authority: 0.55, globalism: -0.65 } },
  { id: 'greenProgressive', name: 'Zeleny progresivismus', description: 'Klima, prava a evropska modernizace.', expectedIssues: { greenDeal: 1, coalPhaseout: 1, sameSexMarriage: 1, euIntegration: 1 }, tolerance: { nuclearEnergy: 1, taxes: 1 }, dimensionCenter: { culture: -0.55, green: 0.7, globalism: 0.5 } },
  { id: 'antiBureaucraticProtest', name: 'Proti byrokracii', description: 'Nizke regulace, kritika elit a levne energie.', expectedIssues: { regulation: -1, taxes: -1, greenDeal: -1, energyPrices: 1, directDemocracy: 1 }, tolerance: { nationalSovereignty: 1, lawAndOrder: 1 }, dimensionCenter: { econ: 0.35, establishment: -0.45, globalism: -0.45 } },
];

export const mediaQuestions: MediaQuestion[] = [
  {
    id: 'mq-marriage-freedom',
    issueId: 'sameSexMarriage',
    pressure: 0.68,
    title: 'Otazka na manzelstvi',
    question: 'Vase strana mluvi o svobode, ale cast clenu odmita manzelstvi pro vsechny. Jakou pozici drzite?',
    expectedAnswerType: 'clarify',
    answerOptions: [
      { id: 'rights', label: 'Rovna prava', description: 'Jasne podporit rovnost pred zakonem.', positionDelta: 1, salienceDelta: 1, framingId: 'equalRights', rigidityDelta: 0.05, baseMobilizationModifier: 0.04, swingAppealModifier: 0.02 },
      { id: 'security', label: 'Pravni jistota bez valky', description: 'Podporit kompromis a snizit kulturni konflikt.', positionDelta: 0.5, salienceDelta: 0, framingId: 'noCultureWar', mediaVulnerabilityModifier: -0.04, swingAppealModifier: 0.05 },
      { id: 'secondary', label: 'Presunout pozornost', description: 'Rict, ze hlavni tema je ekonomika.', salienceDelta: -1, coherenceModifier: 0.03, swingAppealModifier: 0.01 },
      { id: 'traditional', label: 'Tradicni definice', description: 'Vymezit se proti zmene definice manzelstvi.', positionDelta: -1, salienceDelta: 1, framingId: 'traditionalFamily', baseMobilizationModifier: 0.05, mediaVulnerabilityModifier: 0.04 },
    ],
  },
  {
    id: 'mq-green-costs',
    issueId: 'greenDeal',
    pressure: 0.72,
    title: 'Green Deal: prilezitost, nebo hrozba?',
    question: 'Podle casti verejnosti Green Deal zdrazuje energie a ohrozuje prumysl. Podporuje ho vase strana?',
    answerOptions: [
      { id: 'climate', label: 'Nutna transformace', description: 'Je to nutna klimaticka transformace.', framingId: 'climateResponsibility', positionDelta: 1, salienceDelta: 1, mediaVulnerabilityModifier: 0.05, baseMobilizationModifier: 0.04 },
      { id: 'modernization', label: 'Modernizace', description: 'Je to prilezitost pro modernizaci, pokud ji zvladneme chytre.', framingId: 'modernization', positionDelta: 0.5, salienceDelta: 1, swingAppealModifier: 0.05 },
      { id: 'reform', label: 'Reformovat', description: 'Ekologii ano, soucasny Green Deal zasadne prepracovat.', framingId: 'reformNotReject', positionDelta: -0.5, salienceDelta: 1, mediaVulnerabilityModifier: -0.03, swingAppealModifier: 0.06 },
      { id: 'bureaucracy', label: 'Draha regulace', description: 'Je to draha bruselska regulace.', framingId: 'expensiveBureaucracy', positionDelta: -1, salienceDelta: 1, baseMobilizationModifier: 0.05, mediaVulnerabilityModifier: 0.04 },
      { id: 'industry', label: 'Hrozba pro prumysl', description: 'Ohrozuje prumysl a domacnosti.', framingId: 'industrialThreat', positionDelta: -1.5, salienceDelta: 1, baseMobilizationModifier: 0.06, mediaVulnerabilityModifier: 0.06 },
    ],
  },
  {
    id: 'mq-ukraine-cost',
    issueId: 'ukraineSupport',
    pressure: 0.62,
    title: 'Pomoc Ukrajine',
    question: 'Kde je hranice mezi solidaritou a naklady pro domaci rozpocty?',
    answerOptions: [
      { id: 'security', label: 'Bezpecnost Ceska', description: 'Spojit pomoc s ochranou zeme.', framingId: 'westernSecurity', salienceDelta: 1, rigidityDelta: 0.05 },
      { id: 'audit', label: 'Kontrola nakladu', description: 'Trvat na transparentnosti a udrzet podporu.', framingId: 'costControl', mediaVulnerabilityModifier: -0.04, swingAppealModifier: 0.04 },
      { id: 'lower', label: 'Omezit zavazky', description: 'Posunout pozici k opatrnosti.', positionDelta: -1, baseMobilizationModifier: 0.03, mediaVulnerabilityModifier: 0.03 },
    ],
  },
  {
    id: 'mq-tax-pensions',
    issueId: 'taxes',
    pressure: 0.58,
    title: 'Dane a sliby',
    question: 'Slibujete nizsi dane i jistoty. Kde vezmete penize?',
    answerOptions: [
      { id: 'reform', label: 'Efektivnejsi stat', description: 'Navazat dane na reformu spravy.', salienceDelta: 1, coherenceModifier: 0.04 },
      { id: 'admit', label: 'Priznat priority', description: 'Omezit rozsah slibu a zvysit duveryhodnost.', rigidityDelta: -0.05, mediaVulnerabilityModifier: -0.04, swingAppealModifier: 0.03 },
      { id: 'attack', label: 'Zautocit na rozhazovani', description: 'Mobilizovat jadro proti souperum.', baseMobilizationModifier: 0.05, mediaVulnerabilityModifier: 0.04 },
    ],
  },
  {
    id: 'mq-migration-eu',
    issueId: 'migration',
    pressure: 0.64,
    title: 'Migrace a Evropa',
    question: 'Jak skloubite ochranu hranic se spolupraci v EU?',
    answerOptions: [
      { id: 'control', label: 'Kontrola a dohoda', description: 'Kombinovat hranice s evropskou koordinaci.', swingAppealModifier: 0.04, mediaVulnerabilityModifier: -0.03 },
      { id: 'hardline', label: 'Tvrdsi narodni kurz', description: 'Zduraznit suverenitu.', positionDelta: 1, salienceDelta: 1, baseMobilizationModifier: 0.05 },
      { id: 'integration', label: 'Evropske reseni', description: 'Zduraznit spolecnou odpovednost.', positionDelta: -0.5, swingAppealModifier: 0.03 },
    ],
  },
  {
    id: 'mq-corruption-media',
    issueId: 'antiCorruption',
    pressure: 0.46,
    title: 'Duvěra a kontrola moci',
    question: 'Je vase protikorupcni agenda konkretni, nebo jen slogan?',
    answerOptions: [
      { id: 'clean', label: 'Cisty stat', description: 'Zverejnit jasny standard.', framingId: 'cleanState', salienceDelta: 1, coherenceModifier: 0.04 },
      { id: 'process', label: 'Uredni reforma', description: 'Spojit tema se statni spravou.', salienceDelta: 0, swingAppealModifier: 0.03 },
      { id: 'attack', label: 'Jmenovat viniky', description: 'Ostry utok zveda pozornost i riziko.', baseMobilizationModifier: 0.04, mediaVulnerabilityModifier: 0.05 },
    ],
  },
  {
    id: 'mq-cannabis-police',
    issueId: 'cannabis',
    pressure: 0.42,
    title: 'Konopi a policie',
    question: 'Podporujete liberalizaci konopi, ale zaroven silnejsi pravomoci policie. Neni to rozpor?',
    answerOptions: [
      { id: 'distinguish', label: 'Rozlisit skody', description: 'Oddelit drogovou regulaci od nasili a kriminality.', coherenceModifier: 0.04, mediaVulnerabilityModifier: -0.03 },
      { id: 'liberalize', label: 'Svoboda dospelych', description: 'Posunout tema k osobni svobode.', positionDelta: 1, salienceDelta: 1 },
      { id: 'avoid', label: 'Nechat stranou', description: 'Snizit salienci a drzet agenda focus.', salienceDelta: -1, coherenceModifier: 0.02 },
    ],
  },
  {
    id: 'mq-direct-democracy',
    issueId: 'directDemocracy',
    pressure: 0.5,
    title: 'Referenda',
    question: 'Kdy ma rozhodovat referendum a kdy parlament?',
    answerOptions: [
      { id: 'guardrails', label: 'Jasne brzdy', description: 'Podpora referend s ustavnimi pravidly.', mediaVulnerabilityModifier: -0.03, swingAppealModifier: 0.03 },
      { id: 'people', label: 'At rozhodnou lide', description: 'Zesilit protestni linku.', positionDelta: 1, salienceDelta: 1, baseMobilizationModifier: 0.05 },
      { id: 'institutions', label: 'Parlamentni odpovednost', description: 'Ustoupit k institucionalni stabilite.', positionDelta: -1, mediaVulnerabilityModifier: -0.02 },
    ],
  },
];

export const tripEvents: CampaignTripEvent[] = [
  { id: 'trip-energy-workers', title: 'Debata s prumyslovymi zamestnanci o energiich', description: 'Mistni lide tlaci na ceny energii a budoucnost prumyslu.', issueIds: ['energyPrices', 'greenDeal', 'coalPhaseout', 'euIntegration'], options: [
    { id: 'cheap', label: 'Levna energie a ochrana prumyslu', description: 'Zvednout ceny energii a brzdit zeleny tlak.', emphasizedIssues: ['energyPrices', 'nuclearEnergy'], deEmphasizedIssues: ['coalPhaseout'], salienceDeltas: { energyPrices: 1, nuclearEnergy: 1, coalPhaseout: -1 }, framingChanges: { energyPrices: 'cheapEnergy' }, localSupportModifier: 0.03 },
    { id: 'modern', label: 'Zelena modernizace a fondy', description: 'Spojit transformaci s investicemi.', emphasizedIssues: ['greenDeal', 'euIntegration'], salienceDeltas: { greenDeal: 1, euIntegration: 1 }, framingChanges: { greenDeal: 'modernization' }, swingAppealModifier: 0.02 },
    { id: 'blame', label: 'Zautocit na byrokracii', description: 'Tvrdsi anti-Green Deal ramec.', emphasizedIssues: ['greenDeal', 'energyPrices'], salienceDeltas: { greenDeal: 1, energyPrices: 1 }, framingChanges: { greenDeal: 'expensiveBureaucracy' }, mediaRiskModifier: 0.05 },
  ] },
  { id: 'trip-urban-green-deal', title: 'Mestska debata o Green Dealu', description: 'Mestske liberalni publikum resi evropskou modernizaci, klima a bydleni.', issueIds: ['greenDeal', 'housing', 'euIntegration', 'coalPhaseout'], regionId: 'praha', options: [
    { id: 'climate', label: 'Klimaticka odpovednost', description: 'Zvednout zelenou a proevropskou linku.', emphasizedIssues: ['greenDeal', 'euIntegration'], salienceDeltas: { greenDeal: 1, euIntegration: 1 }, framingChanges: { greenDeal: 'climateResponsibility' }, mediaRiskModifier: 0.03 },
    { id: 'modern', label: 'Modernizace bez patosu', description: 'Mluvit o technologiich a dostupnosti energii.', emphasizedIssues: ['greenDeal', 'housing'], salienceDeltas: { greenDeal: 1, housing: 1 }, framingChanges: { greenDeal: 'modernization' }, swingAppealModifier: 0.03 },
  ] },
  { id: 'trip-rural-energy-prices', title: 'Vysocina: energie a domacnosti', description: 'Venkovske a starsi publikum resi ceny energii, duchody a dopady regulaci.', issueIds: ['greenDeal', 'energyPrices', 'pensions'], regionId: 'vysocina', options: [
    { id: 'reform', label: 'Reformovat dopady', description: 'Uznat ekologii, ale tlacit socialni a cenove upravy.', emphasizedIssues: ['greenDeal', 'energyPrices'], salienceDeltas: { greenDeal: 1, energyPrices: 1 }, framingChanges: { greenDeal: 'reformNotReject' }, swingAppealModifier: 0.03 },
    { id: 'prices', label: 'Ochrana domacnosti', description: 'Zvyraznit ceny energii a jistotu duchodu.', emphasizedIssues: ['energyPrices', 'pensions'], deEmphasizedIssues: ['greenDeal'], salienceDeltas: { energyPrices: 1, pensions: 1, greenDeal: -1 }, framingChanges: { greenDeal: 'industrialThreat' } },
  ] },
  { id: 'trip-housing-city', title: 'Setkani s najemniky ve meste', description: 'Hlavni tlak je na najmy a vystavbu.', issueIds: ['housing', 'regulation', 'redistribution'], options: [
    { id: 'build', label: 'Rychla vystavba', description: 'Akcentovat povoleni a obce.', emphasizedIssues: ['housing', 'regulation'], salienceDeltas: { housing: 1, regulation: -1 }, coherenceModifier: 0.02 },
    { id: 'support', label: 'Podpora domacnosti', description: 'Socialni pomoc a dostupne bydleni.', emphasizedIssues: ['housing', 'redistribution'], salienceDeltas: { housing: 1, redistribution: 1 } },
  ] },
  { id: 'trip-border-security', title: 'Regionalni debata o bezpecnosti', description: 'Aktiviste zadostaji tvrdsi migracni linku.', issueIds: ['migration', 'lawAndOrder', 'nationalSovereignty'], options: [
    { id: 'control', label: 'Hranice a poradek', description: 'Zvednout bezpecnostni temata.', emphasizedIssues: ['migration', 'lawAndOrder'], salienceDeltas: { migration: 1, lawAndOrder: 1 }, baseMobilizationModifier: 0.03 },
    { id: 'calm', label: 'Klid a prakticka opatreni', description: 'Nesklouznout do kulturni valky.', emphasizedIssues: ['lawAndOrder'], deEmphasizedIssues: ['migration'], salienceDeltas: { lawAndOrder: 1, migration: -1 }, swingAppealModifier: 0.03 },
  ] },
  { id: 'trip-university-rights', title: 'Diskuse se studenty o pravech', description: 'Publikum se pta na svobody, konopi a rovnost.', issueIds: ['sameSexMarriage', 'cannabis', 'affirmativeAction'], options: [
    { id: 'rights', label: 'Svobody a prava', description: 'Jasne liberalni kulturni linka.', emphasizedIssues: ['sameSexMarriage', 'cannabis'], salienceDeltas: { sameSexMarriage: 1, cannabis: 1 }, framingChanges: { sameSexMarriage: 'equalRights' } },
    { id: 'avoid-aa', label: 'Prava bez kvot', description: 'Podpora prav, odstup od kvot.', emphasizedIssues: ['sameSexMarriage'], deEmphasizedIssues: ['affirmativeAction'], salienceDeltas: { sameSexMarriage: 1, affirmativeAction: -1 }, coherenceModifier: 0.01 },
  ] },
  { id: 'trip-seniors', title: 'Setkani se seniory', description: 'Lide chteji jistotu duchodu a zdravotni stabilitu.', issueIds: ['pensions', 'redistribution', 'taxes'], options: [
    { id: 'security', label: 'Jistota duchodu', description: 'Udelat z duchodu jasne tema.', emphasizedIssues: ['pensions'], salienceDeltas: { pensions: 1 }, swingAppealModifier: 0.02 },
    { id: 'fiscal', label: 'Udrzitelne financovani', description: 'Vysvetlit rozpoctovou brzdu.', emphasizedIssues: ['pensions', 'taxes'], salienceDeltas: { pensions: 1, taxes: 1 }, coherenceModifier: 0.02 },
  ] },
  { id: 'trip-townhall-corruption', title: 'Radnice a korupce', description: 'Mistni lide chteji konkretni protikorupcni zavazky.', issueIds: ['antiCorruption', 'civilServiceReform', 'mediaTrust'], options: [
    { id: 'rules', label: 'Cista pravidla', description: 'Spojit protikorupci se spravou statu.', emphasizedIssues: ['antiCorruption', 'civilServiceReform'], salienceDeltas: { antiCorruption: 1, civilServiceReform: 1 }, framingChanges: { antiCorruption: 'cleanState' }, coherenceModifier: 0.04 },
    { id: 'attack', label: 'Ostra kritika elit', description: 'Mobilizovat protestni naladu.', emphasizedIssues: ['antiCorruption', 'directDemocracy'], salienceDeltas: { antiCorruption: 1, directDemocracy: 1 }, mediaRiskModifier: 0.04 },
  ] },
];

export function createIssueLayerState(): IssueLayerState {
  const originalIssuePositions = createDefaultIssuePositions();
  const player: IssueLayerPartyState = {
    coherenceBreakdown: emptyCoherence(),
    coreLoyalty: 0.5,
    currentIssuePositions: clonePositions(originalIssuePositions),
    factionTension: 0.2,
    mediaVulnerability: 0.25,
    originalIssuePositions,
    programLegibility: 0.5,
    swingAppeal: 0.5,
  };

  return {
    debateAttack: undefined,
    feedbackLog: [],
    framings: issueFramings,
    ideologicalFrames,
    issues: programIssues,
    mediaQuestions,
    pendingCampaignTripId: tripEvents[0]?.id,
    pendingMediaQuestionId: mediaQuestions[0]?.id,
    player,
    relations: issueRelations,
    tripEvents,
  };
}

export function createDefaultIssuePositions(): Record<ProgramIssueId, PartyIssuePosition> {
  const defaults: Record<ProgramIssueId, Partial<PartyIssuePosition>> = {
    antiCorruption: { position: 1, salience: 2, rigidity: 0.5, stability: 0.7 },
    civilServiceReform: { position: 1, salience: 2, rigidity: 0.45, stability: 0.65 },
    energyPrices: { position: 1, salience: 3, framingId: 'cheapEnergy', rigidity: 0.45, stability: 0.65 },
    euIntegration: { position: 1, salience: 2, rigidity: 0.45, stability: 0.62 },
    greenDeal: { position: 0, salience: 1, framingId: 'energySecurity', rigidity: 0.35, stability: 0.45 },
    housing: { position: 1, salience: 2, rigidity: 0.4, stability: 0.55 },
    pensions: { position: 1, salience: 2, rigidity: 0.55, stability: 0.72 },
    sameSexMarriage: { position: 1, salience: 1, framingId: 'noCultureWar', rigidity: 0.35, stability: 0.45 },
    taxes: { position: -1, salience: 2, rigidity: 0.45, stability: 0.6 },
    ukraineSupport: { position: 1, salience: 2, framingId: 'costControl', rigidity: 0.5, stability: 0.62 },
  };

  return Object.fromEntries(
    programIssues.map((item) => [
      item.id,
      {
        issueId: item.id,
        position: defaults[item.id]?.position ?? 0,
        salience: defaults[item.id]?.salience ?? Math.max(0, Math.round(item.defaultSalience * 2)),
        framingId: defaults[item.id]?.framingId,
        rigidity: defaults[item.id]?.rigidity ?? 0.35,
        stability: defaults[item.id]?.stability ?? 0.45,
      },
    ]),
  );
}

export function emptyCoherence() {
  return {
    agendaPenalty: 0,
    audiencePenalty: 0,
    clusterCoherenceBonus: 0,
    coherenceScore: 100,
    contradictionPenalty: 0,
    framePenalty: 0,
    mobilizationOverlapBonus: 0,
    originPenalty: 0,
    residualPenalty: 0,
    relationNotes: [],
    rulePenalty: 0,
    sameFamilyBonus: 0,
    totalIncoherence: 0,
    unresolvedTensionPenalty: 0,
  };
}

function clonePositions(positions: Record<ProgramIssueId, PartyIssuePosition>) {
  return Object.fromEntries(Object.entries(positions).map(([id, position]) => [id, { ...position }]));
}
