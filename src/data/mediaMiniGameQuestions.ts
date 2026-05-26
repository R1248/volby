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
];
