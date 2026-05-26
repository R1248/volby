import type { ProgramIssueId } from '../game/issueTypes';
import type { MediaFormat, MediaMiniGameQuestion, MediaMiniGameType } from '../game/types';

const hostileFormats: MediaFormat[] = ['debate', 'duel', 'crisisInterview'];
const softFormats: MediaFormat[] = ['interview', 'podcast', 'influencer', 'regional', 'expertPanel'];
const hostileTypes: MediaMiniGameType[] = ['three_questions_timed', 'hostile_interview'];
const softTypes: MediaMiniGameType[] = ['short_interview', 'long_form', 'informal_qna'];

function hostile(topicId: ProgramIssueId, id: string, prompt: string, good: string, weak: string, risky: string): MediaMiniGameQuestion {
  return {
    formats: hostileFormats,
    id,
    miniGameTypes: hostileTypes,
    options: [
      { id: 'specific', label: 'Konkretne', text: good, performanceDelta: 0.08, tone: 'specific', bestForSpeakerRoles: ['leader', 'expert'] },
      { id: 'vague', label: 'Obecne', text: weak, performanceDelta: -0.06, tone: 'vague' },
      { id: 'attack', label: 'Protiutok', text: risky, performanceDelta: 0.01, controversyDelta: 0.08, tone: 'aggressive', bestForSpeakerRoles: ['controversialFigure'] },
    ],
    prompt,
    severity: 'hostile',
    timeLimitSec: 12,
    topicId,
  };
}

function soft(topicId: ProgramIssueId, id: string, prompt: string, good: string, human: string, weak: string): MediaMiniGameQuestion {
  return {
    formats: softFormats,
    id,
    miniGameTypes: softTypes,
    options: [
      { id: 'clear', label: 'Jasne', text: good, performanceDelta: 0.06, tone: 'specific', bestForSpeakerRoles: ['leader', 'expert'] },
      { id: 'human', label: 'Lidsky', text: human, performanceDelta: 0.05, tone: 'empathetic', bestForSpeakerRoles: ['regionalFigure', 'newFace'] },
      { id: 'avoid', label: 'Vyhnout se', text: weak, performanceDelta: -0.05, tone: 'evasive' },
    ],
    prompt,
    severity: 'normal',
    topicId,
  };
}

function position(topicId: ProgramIssueId, id: string, prompt: string, options: MediaMiniGameQuestion['options']): MediaMiniGameQuestion {
  return {
    formats: ['debate', 'duel', 'interview', 'podcast', 'crisisInterview'],
    id,
    miniGameTypes: ['three_questions_timed', 'hostile_interview', 'short_interview', 'long_form'],
    options,
    prompt,
    severity: 'hard',
    timeLimitSec: 12,
    topicId,
  };
}

function generic(id: string, prompt: string): MediaMiniGameQuestion {
  return {
    formats: ['interview', 'debate', 'duel', 'podcast', 'regional', 'expertPanel', 'influencer', 'crisisInterview'],
    id,
    isGenericFallback: true,
    miniGameTypes: ['three_questions_timed', 'short_interview', 'long_form', 'informal_qna', 'hostile_interview', 'soundbite_builder'],
    options: [
      { id: 'plan', label: 'Plan', text: 'Ukazat konkretni krok, odpovednost a termin.', performanceDelta: 0.04, answerType: 'explanation', tone: 'specific' },
      { id: 'costs', label: 'Naklady', text: 'Priznat obavy z nakladu a rict, kdo je ponese.', performanceDelta: 0.035, answerType: 'empathy', tone: 'empathetic' },
      { id: 'limit', label: 'Limit', text: 'Vymezit hranici kompromisu a co uz strana neudela.', performanceDelta: 0.03, answerType: 'technical', tone: 'technical' },
    ],
    prompt,
    severity: 'normal',
    // Placeholder only; selectMediaMiniGameQuestions rewrites generic fallbacks to the invitation topic.
    topicId: 'taxes',
  };
}

export const mediaMiniGameQuestions: MediaMiniGameQuestion[] = [
  hostile('taxes', 'taxes-hostile-gap', 'Kde vezmete penize, kdyz slibujete nizsi dane?', 'Ukazeme kryti ve vydajich a prioritach, ne slib bez rozpoctu.', 'Efektivni stat vse vyresi.', 'Problem jsou rozhazovacni souperi, ne nase dane.'),
  soft('taxes', 'taxes-soft-business', 'Jak vysvetlite dane podnikatelum i zamestnancum?', 'Jednodussi system, stabilni pravidla a zadne skryte zvysovani.', 'Lide potrebuji vedet, kolik jim zustane doma.', 'Dane jsou technicky detail.'),

  hostile('greenDeal', 'green-hostile-cost', 'Green Deal zdrazi domacnostem zivot. Proc ho neodmitnete?', 'Podporime jen opatreni, ktera maji kompenzace, energii a prumysl v planu.', 'Evropa to nejak nastavi.', 'Kdo je proti, popira budoucnost.'),
  soft('greenDeal', 'green-soft-modernization', 'Jak mluvit o klimatu bez kulturni valky?', 'Modernizace, levnejsi provoz a energeticka bezpecnost jsou spolecny jmenovatel.', 'Lidem musime priznat obavy z cen a nabidnout prakticky plan.', 'Je to slozite a nema smysl to ted resit.'),

  hostile('energyPrices', 'energy-hostile-bills', 'Proc jsou vase sliby k cenam energii uveritelne?', 'Oddelime okamzitou pomoc, sitove investice a dlouhodoby mix vcetne jadra.', 'Ceny proste snizime.', 'Vinici sedi v Bruselu a ve vladnich kancelarich.'),
  soft('energyPrices', 'energy-soft-households', 'Co reknete domacnosti, ktera nezvlada zalohy?', 'Pomoc musi byt cilena, rychla a nesmi trestat uspory.', 'Nejdriv uznat stres domacnosti, potom ukazat konkretni kroky.', 'Trh si nakonec poradi.'),

  hostile('migration', 'migration-hostile-security', 'Neohrozujete bezpecnost prilis mekkou migracni politikou?', 'Rozlisujeme azyl, praci a bezpecnostni rizika; pravidla musi byt vymahatelna.', 'Jsme pro lidskost a tim je to dane.', 'Kdo nesouhlasi, siri strach.'),
  soft('migration', 'migration-soft-integration', 'Jak spojit kontrolu hranic a integraci?', 'Kontrola, rychle rizeni a lokalni integrace jsou jeden balicek odpovednosti.', 'Obce potrebuji penize, informace a pravidla, ne hesla.', 'Migrace neni hlavni tema.'),

  hostile('antiCorruption', 'corruption-hostile-proof', 'Neni vase protikorupcni agenda jen moralizovani?', 'Zverejnime pravidla zakazek, ochranu oznamovatelu a meritelne lhuty.', 'My jsme proste cistejsi.', 'Vsechny stare strany jsou prohnile.'),
  soft('antiCorruption', 'corruption-soft-trust', 'Jak vratit duveru bez honu na carodejnice?', 'Kontrola moci ma byt normalni proces, ne teatralni pomsta.', 'Lide musi videt, ze pravidla plati i pro nase spojence.', 'Duv era se vrati sama po volbach.'),

  hostile('housing', 'housing-hostile-cost', 'Proc jste dostupne bydleni nevyresili uz davno?', 'Zrychlime povoleni, obecni pozemky a podporu najmu; kazda cast ma termin.', 'Postavime vic bytu.', 'Brzdi to developeri a aktiviste.'),
  soft('housing', 'housing-soft-young', 'Co reknete mladym, kteri nedosahnou na najem?', 'Dostupny najem je infrastruktura pro praci, rodinu i studium.', 'Nejde o selhani jednotlivce, ale o spatne nastaveny trh a povoleni.', 'Mlad i si musi zvyknout.'),

  hostile('ukraineSupport', 'ukraine-hostile-cost', 'Proc posilat penize Ukrajine, kdyz chybi doma?', 'Bezpecnostni pomoc a domaci rozpocty musi mit transparentni stropy a kontrolu.', 'Solidarita je povinnost.', 'Kdo se pta na naklady, nahrava Moskve.'),
  soft('ukraineSupport', 'ukraine-soft-security', 'Jak udrzet podporu Ukrajiny unavitelnemu publiku?', 'Mluvit o bezpecnosti Ceska, kontrole nakladu a evropske koordinaci.', 'Lidem je potreba ukazat, jak pomoc chrani i jejich bezpeci.', 'Unava je jen medialni problem.'),

  hostile('pensions', 'pensions-hostile-funding', 'Jsou vase duchodove sliby financovatelne?', 'Duchody musi stat na zamestnanosti, valorizaci a jasnem rozpoctovem ramci.', 'Seniorum dame jistotu.', 'Kdo zpochybnuje sliby, utoci na seniory.'),
  soft('pensions', 'pensions-soft-security', 'Jak uklidnit seniory bez prazdnych slibu?', 'Jistota znamena predvidatelna pravidla, ne kazdorocni improvizaci.', 'Seniori potrebuji slyset respekt a konkretni harmonogram.', 'Duchody ted nejsou akutni.'),

  hostile('sameSexMarriage', 'marriage-hostile-values', 'Neodcizujete konzervativni volice podporou manzelstvi pro vsechny?', 'Rovna prava lze udelat vecne, bez ponizovani rodin a bez kulturni valky.', 'Je to symbol moderni zeme.', 'Konzervativci jsou na spatne strane dejin.'),
  soft('sameSexMarriage', 'marriage-soft-rights', 'Jak vysvetlit tema lidem, kteri se boji konfliktu?', 'Jde o pravni jistotu pro konkretni rodiny, ne o utok na neci zivot.', 'Respekt k obavam a respekt k pravum mohou byt v jedne vete.', 'Tema radeji nechame stranou.'),

  hostile('lawAndOrder', 'order-hostile-powers', 'Nechcete dat policii prilis velkou moc?', 'Silne pravomoci musi mit dohled, pravidla a meritelny dopad na bezpeci.', 'Bezpecnost je prednejsi nez proces.', 'Kdo se boji policie, pomaha zlocinu.'),
  soft('lawAndOrder', 'order-soft-safety', 'Jak mluvit o poradku bez straseni?', 'Bezpeci je viditelna pritomnost, prevence a duvera, ne jen tvrde tresty.', 'Lide chteji klid v okoli a ferova pravidla pro vsechny.', 'Poradek vyresi represivni slozky.'),

  position('greenDeal', 'green-position-direct', 'Je vase strana pro Green Deal, proti nemu, nebo ho chce reformovat?', [
    { id: 'reform', label: 'Reformovat', text: 'Reformovat, ne odmitnout: ekologii ano, ale s ochranou cen a prumyslu.', performanceDelta: 0.05, impliedIssuePosition: { greenDeal: 0.75 }, impliedFramingId: { greenDeal: 'reformNotReject' }, commitmentStrength: 0.72, answerType: 'position', consistencyRisk: 0.08, tone: 'specific' },
    { id: 'reject', label: 'Odmitnout', text: 'Soucasny Green Deal je ohrozeni cen a prumyslu, chceme ho tvrde odmitnout.', performanceDelta: 0.02, impliedIssuePosition: { greenDeal: -2 }, commitmentStrength: 0.86, answerType: 'position', consistencyRisk: 0.14, controversyDelta: 0.04, tone: 'aggressive' },
    { id: 'support', label: 'Podporit', text: 'Green Deal plne podporujeme jako evropskou modernizaci.', performanceDelta: 0.035, impliedIssuePosition: { greenDeal: 2 }, impliedFramingId: { greenDeal: 'modernization' }, commitmentStrength: 0.9, answerType: 'position', consistencyRisk: 0.14, tone: 'specific' },
  ]),
  position('sameSexMarriage', 'marriage-position-direct', 'Podporite manzelstvi pro vsechny?', [
    { id: 'yes', label: 'Ano', text: 'Ano, rovna prava a pravni jistota pro vsechny rodiny.', performanceDelta: 0.05, impliedIssuePosition: { sameSexMarriage: 2 }, impliedFramingId: { sameSexMarriage: 'equalRights' }, commitmentStrength: 0.86, answerType: 'position', consistencyRisk: 0.12, tone: 'specific' },
    { id: 'registered', label: 'Partnerstvi', text: 'Registrovane partnerstvi staci, nechceme menit definici manzelstvi.', performanceDelta: 0.02, impliedIssuePosition: { sameSexMarriage: -1 }, commitmentStrength: 0.75, answerType: 'position', consistencyRisk: 0.1, tone: 'technical' },
    { id: 'compromise', label: 'Kompromis', text: 'Nechci kulturni valku, hledejme pravni kompromis.', performanceDelta: -0.01, impliedIssuePosition: { sameSexMarriage: 0 }, commitmentStrength: 0.35, answerType: 'pivot', consistencyRisk: 0.05, tone: 'evasive' },
  ]),
  position('migration', 'migration-position-direct', 'Jste pro zprísneni migracni politiky?', [
    { id: 'tighten', label: 'Zprisnit', text: 'Ano, vyrazne zprisnit pravidla a zrychlit navraty.', performanceDelta: 0.035, impliedIssuePosition: { migration: 2 }, commitmentStrength: 0.82, answerType: 'position', consistencyRisk: 0.12, tone: 'specific' },
    { id: 'rules', label: 'Pravidla', text: 'Pravidla, kontrola hranic i integrace musi fungovat soucasne.', performanceDelta: 0.05, impliedIssuePosition: { migration: 0.75 }, commitmentStrength: 0.62, answerType: 'explanation', consistencyRisk: 0.06, tone: 'specific' },
    { id: 'humanitarian', label: 'Humanitarne', text: 'Dulezity je hlavne humanitarni ramec a ochrana lidi v nouzi.', performanceDelta: 0.02, impliedIssuePosition: { migration: -1 }, commitmentStrength: 0.68, answerType: 'position', consistencyRisk: 0.1, tone: 'empathetic' },
  ]),
  position('taxes', 'taxes-position-direct', 'Zvysite dane?', [
    { id: 'lower', label: 'Ne', text: 'Ne, chceme nizsi a jednodussi dane.', performanceDelta: 0.045, impliedIssuePosition: { taxes: -2 }, commitmentStrength: 0.8, answerType: 'position', consistencyRisk: 0.12, tone: 'specific' },
    { id: 'selected', label: 'Vybrane', text: 'Jen u vybranych skupin, pokud to bude rozpoctove nutne a ferove.', performanceDelta: 0.025, impliedIssuePosition: { taxes: 0.5, redistribution: 1 }, commitmentStrength: 0.62, answerType: 'explanation', consistencyRisk: 0.08, tone: 'technical' },
    { id: 'higher', label: 'Vyssi prijmy', text: 'Stat potrebuje vyssi prijmy na sluzby a jistoty.', performanceDelta: 0.01, impliedIssuePosition: { taxes: 2, redistribution: 1.5 }, commitmentStrength: 0.82, answerType: 'position', consistencyRisk: 0.14, tone: 'specific' },
  ]),
  position('ukraineSupport', 'ukraine-position-direct', 'Ma pokracovat podpora Ukrajiny?', [
    { id: 'controlled', label: 'Ano s kontrolou', text: 'Ano, s kontrolou nakladu a jasnym evropskym ramecem.', performanceDelta: 0.05, impliedIssuePosition: { ukraineSupport: 1.25 }, impliedFramingId: { ukraineSupport: 'costControl' }, commitmentStrength: 0.72, answerType: 'position', consistencyRisk: 0.08, tone: 'specific' },
    { id: 'strong', label: 'Bez vahani', text: 'Ano bez vahani, je to bezpecnostni zajem Ceska.', performanceDelta: 0.04, impliedIssuePosition: { ukraineSupport: 2 }, impliedFramingId: { ukraineSupport: 'westernSecurity' }, commitmentStrength: 0.88, answerType: 'position', consistencyRisk: 0.12, tone: 'specific' },
    { id: 'limit', label: 'Omezit', text: 'Pomoc je treba omezit a vic hlidat domaci naklady.', performanceDelta: 0.01, impliedIssuePosition: { ukraineSupport: -1.5 }, commitmentStrength: 0.78, answerType: 'position', consistencyRisk: 0.13, tone: 'technical' },
  ]),
  generic('generic-concrete-plan', 'Co je vas konkretni plan v tomhle tematu?'),
  generic('generic-cost-worry', 'Co reknete lidem, kteri se boji nakladu?'),
  generic('generic-compromise-limit', 'Kde je hranice kompromisu?'),
];
