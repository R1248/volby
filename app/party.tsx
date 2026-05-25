import { StyleSheet, Text, View } from 'react-native';

import { GameScreen } from '@/src/components/layout/GameScreen';
import type { MarketingAdvisor, PartyRuntime, PartySeed, RegionSeed, ReputationVector } from '@/src/game/types';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';

const roleLabels = {
  government: 'vládní strana',
  opposition: 'opozice',
  outsider: 'outsider',
} as const;

const profileLabels = {
  major: 'favorit',
  mid: 'střední síla',
  small: 'menší strana',
  outsider: 'vyzyvatel',
} as const;

export default function PartyScreen() {
  const gameState = useGameStore((state) => state.gameState);
  const player = gameState.parties.find((party) => party.id === gameState.playerPartyId);
  const runtime = gameState.partyRuntime.player;
  const advisor = gameState.marketingAdvisors.find((item) => item.id === runtime.marketingAdvisorId) ?? gameState.marketingAdvisors[0];

  if (!player) {
    return null;
  }

  const regions = topOrganizationRegions(gameState.regions, runtime);
  const reputationSignals = createReputationSignals(runtime.reputation);

  return (
    <GameScreen
      activeItem="Strana"
      subtitle="Zákulisí kampaně, nálada aparátu a stav důvěry. Detailní model běží skrytě na pozadí."
      title="Stranický stan"
    >
      <View style={styles.heroPanel}>
        <View style={styles.partyBanner}>
          <View style={[styles.partyMark, { backgroundColor: player.color }]}>
            <Text style={styles.partyMarkText}>{player.shortName}</Text>
          </View>
          <View style={styles.partyTitleBlock}>
            <Text style={styles.kicker}>Hráčova strana</Text>
            <Text style={styles.partyName}>{player.name}</Text>
            <Text style={styles.partyMeta}>
              {roleLabels[player.officeRole]} · {profileLabels[player.winProfile]} · týden {gameState.week}
            </Text>
          </View>
        </View>

        <View style={styles.heroStatusRow}>
          <StatusPill label="Nálada jádra" tone={coreTone(runtime.reputation)} value={coreMood(runtime.reputation)} />
          <StatusPill label="Disciplína" tone={runtime.reputation.consistency > 0.55 ? 'good' : 'warn'} value={disciplineLabel(runtime.reputation)} />
          <StatusPill label="Riziko kauzy" tone={runtime.scandalRisk > 0.2 ? 'danger' : runtime.scandalRisk > 0.12 ? 'warn' : 'good'} value={riskLabel(runtime.scandalRisk)} />
          <StatusPill label="Pokladna" tone={runtime.cash < 3 ? 'danger' : runtime.cash < 6 ? 'warn' : 'good'} value={cashLabel(runtime.cash)} />
        </View>
      </View>

      <View style={styles.mainGrid}>
        <View style={styles.leaderPanel}>
          <View style={styles.panelHeader}>
            <Text style={styles.panelKicker}>Předsednictvo</Text>
            <Text style={styles.panelTitle}>{player.leaderName}</Text>
          </View>

          <View style={styles.leaderBody}>
            <View style={[styles.portrait, { borderColor: player.color }]}>
              <Text style={styles.portraitInitials}>{initials(player.leaderName)}</Text>
            </View>
            <View style={styles.leaderCopy}>
              <Text style={styles.leaderArchetype}>{leaderArchetype(player)}</Text>
              <Text style={styles.bodyText}>{leaderSituation(runtime)}</Text>
            </View>
          </View>

          <View style={styles.traitStack}>
            <TraitLine label="Vystupování" value={average([player.leaderTraits.charisma, player.leaderTraits.debate])} />
            <TraitLine label="Odbornost" value={average([player.leaderTraits.knowledge, player.leaderTraits.credibility])} />
            <TraitLine label="Terén" value={average([player.leaderTraits.empathy, player.leaderTraits.stamina])} />
          </View>
        </View>

        <View style={styles.intelPanel}>
          <View style={styles.panelHeader}>
            <Text style={styles.panelKicker}>Vnitřní obraz</Text>
            <Text style={styles.panelTitle}>Co je teď cítit ve straně</Text>
          </View>

          <View style={styles.signalList}>
            {reputationSignals.map((signal) => (
              <View key={signal.title} style={styles.signalRow}>
                <View style={[styles.signalDot, styles[`${signal.tone}Dot`]]} />
                <View style={styles.signalText}>
                  <Text style={styles.signalTitle}>{signal.title}</Text>
                  <Text style={styles.signalDescription}>{signal.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.bottomGrid}>
        <View style={styles.regionPanel}>
          <View style={styles.panelHeader}>
            <Text style={styles.panelKicker}>Aparát v krajích</Text>
            <Text style={styles.panelTitle}>Kde strana opravdu stojí na nohou</Text>
          </View>
          <View style={styles.regionList}>
            {regions.map((item) => (
              <View key={item.region.id} style={styles.regionRow}>
                <View style={styles.regionText}>
                  <Text style={styles.regionName}>{item.region.name}</Text>
                  <Text style={styles.regionMeta}>{organizationLabel(item.value)}</Text>
                </View>
                <View style={styles.regionTrack}>
                  <View style={[styles.regionFill, { width: `${Math.round(item.value * 100)}%` }]} />
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.operationsPanel}>
          <View style={styles.panelHeader}>
            <Text style={styles.panelKicker}>Zázemí kampaně</Text>
            <Text style={styles.panelTitle}>Co štáb ví a zvládne</Text>
          </View>
          <OperationLine label="Marketing" value={advisorLabel(advisor)} />
          <OperationLine label="Informace" value={informationLabel(runtime.informationQuality)} />
          <OperationLine label="Kapacita týdne" value={`${runtime.leader.timeCap} rozkazy`} />
          {player.officeRole !== 'outsider' ? <OperationLine label="Sněmovna" value={parliamentLabel(runtime.parliamentAttendance)} /> : null}
          <OperationLine label="Finance" value={financePressure(runtime)} />
        </View>
      </View>
    </GameScreen>
  );
}

function StatusPill({
  label,
  tone,
  value,
}: {
  label: string;
  tone: 'danger' | 'good' | 'warn';
  value: string;
}) {
  return (
    <View style={[styles.statusPill, styles[`${tone}Pill`]]}>
      <Text style={styles.statusLabel}>{label}</Text>
      <Text style={styles.statusValue}>{value}</Text>
    </View>
  );
}

function TraitLine({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.traitLine}>
      <Text style={styles.traitLabel}>{label}</Text>
      <View style={styles.traitTrack}>
        <View style={[styles.traitFill, { width: `${Math.round(value * 100)}%` }]} />
      </View>
    </View>
  );
}

function OperationLine({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.operationLine}>
      <Text style={styles.operationLabel}>{label}</Text>
      <Text style={styles.operationValue}>{value}</Text>
    </View>
  );
}

function createReputationSignals(reputation: ReputationVector) {
  return [
    reputation.trust > 0.6
      ? {
          description: 'Dobrovolníci i regiony věří, že kampaň má směr.',
          title: 'Důvěra drží pohromadě',
          tone: 'good' as const,
        }
      : {
          description: 'Část aparátu čeká na jasnější tah nebo silnější vysvětlení.',
          title: 'Důvěra potřebuje oporu',
          tone: 'warn' as const,
        },
    reputation.integrity > 0.62
      ? {
          description: 'Financování zatím nepůsobí jako slabé místo kampaně.',
          title: 'Čistý štít pomáhá',
          tone: 'good' as const,
        }
      : {
          description: 'Zákulisí už nese reputační zátěž, která může prosáknout ven.',
          title: 'Integrita je citlivé místo',
          tone: 'danger' as const,
        },
    reputation.controversy > 0.46
      ? {
          description: 'Strana přitahuje pozornost, ale může tím odrazovat umírněné spojence.',
          title: 'Hluk kolem kampaně roste',
          tone: 'warn' as const,
        }
      : {
          description: 'Tón kampaně zatím neodvádí pozornost od hlavního sdělení.',
          title: 'Tón je pod kontrolou',
          tone: 'good' as const,
        },
  ];
}

function topOrganizationRegions(regions: RegionSeed[], runtime: PartyRuntime) {
  return regions
    .map((region) => ({
      region,
      value: runtime.organization[region.id] ?? 0.18,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
}

function advisorLabel(advisor: MarketingAdvisor) {
  return advisor.level === 0 ? 'bez externího týmu' : `${advisor.name}`;
}

function parliamentLabel(attendance = 1) {
  if (attendance < 0.35) {
    return 'výrazná absence';
  }
  if (attendance < 0.6) {
    return 'omezená přítomnost';
  }
  return 'přítomnost drží';
}

function cashLabel(cash: number) {
  if (cash < 3) {
    return 'napjatá';
  }
  if (cash < 6) {
    return 'opatrná';
  }
  return 'akceschopná';
}

function coreMood(reputation: ReputationVector) {
  const mood = (reputation.trust + reputation.authenticity + reputation.consistency - reputation.controversy * 0.35) / 3;
  if (mood > 0.62) {
    return 'sebevědomá';
  }
  if (mood > 0.48) {
    return 'soustředěná';
  }
  return 'nervózní';
}

function coreTone(reputation: ReputationVector): 'danger' | 'good' | 'warn' {
  const mood = (reputation.trust + reputation.authenticity + reputation.consistency - reputation.controversy * 0.35) / 3;
  if (mood > 0.62) {
    return 'good';
  }
  if (mood > 0.48) {
    return 'warn';
  }
  return 'danger';
}

function disciplineLabel(reputation: ReputationVector) {
  if (reputation.consistency > 0.65) {
    return 'pevná';
  }
  if (reputation.consistency > 0.5) {
    return 'udržená';
  }
  return 'kolísá';
}

function financePressure(runtime: PartyRuntime) {
  if (runtime.cash < 3) {
    return 'škrtí plán';
  }
  if (runtime.legalSpend > 28) {
    return 'hlídat limit';
  }
  return 'bez paniky';
}

function informationLabel(value: number) {
  if (value > 0.68) {
    return 'ostré odhady';
  }
  if (value > 0.5) {
    return 'slušný obraz';
  }
  return 'mlha v datech';
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function leaderArchetype(party: PartySeed) {
  const traits = party.leaderTraits;
  const entries = [
    { label: 'mobilizátor kampaně', value: traits.charisma },
    { label: 'debatní tvář', value: traits.debate },
    { label: 'programový tahoun', value: traits.knowledge },
    { label: 'terénní spojka', value: traits.empathy },
    { label: 'disciplinovaný lídr', value: traits.discipline },
  ];
  return entries.reduce((best, item) => (item.value > best.value ? item : best), entries[0]).label;
}

function leaderSituation(runtime: PartyRuntime) {
  if (runtime.leader.fatigue > 0.62) {
    return 'Lídr je přetížený. Další velké mediální nebo terénní nasazení může zvednout riziko chyby.';
  }
  if (runtime.leader.fatigue > 0.35) {
    return 'Lídr ještě zvládá tempo, ale štáb by měl pečlivě vybírat nejdůležitější vystoupení.';
  }
  return 'Lídr má prostor nést hlavní sdělení kampaně a podržet náročnější týden.';
}

function organizationLabel(value: number) {
  if (value > 0.58) {
    return 'pevná síť';
  }
  if (value > 0.38) {
    return 'funkční základna';
  }
  return 'slabé zázemí';
}

function riskLabel(value: number) {
  if (value > 0.22) {
    return 'vysoké';
  }
  if (value > 0.12) {
    return 'hlídat';
  }
  return 'nízké';
}

function average(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

const styles = StyleSheet.create({
  bodyText: {
    color: '#DCEAF7',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 4,
  },
  bottomGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  dangerDot: {
    backgroundColor: colors.danger,
  },
  dangerPill: {
    borderColor: 'rgba(193,18,31,0.5)',
  },
  goodDot: {
    backgroundColor: colors.success,
  },
  goodPill: {
    borderColor: 'rgba(47,133,90,0.45)',
  },
  heroPanel: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    gap: 14,
    padding: 14,
  },
  heroStatusRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  intelPanel: {
    backgroundColor: '#FFF7D6',
    borderColor: colors.selected,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 12,
    padding: 12,
  },
  kicker: {
    color: colors.selected,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  leaderArchetype: {
    color: colors.selected,
    fontSize: 13,
    fontWeight: '900',
  },
  leaderBody: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  leaderCopy: {
    flex: 1,
  },
  leaderPanel: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    flex: 0.82,
    gap: 12,
    padding: 12,
  },
  mainGrid: {
    flexDirection: 'row',
    gap: 10,
  },
  operationLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  operationLine: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    gap: 2,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  operationValue: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  operationsPanel: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 0.72,
    gap: 8,
    padding: 12,
  },
  panelHeader: {
    gap: 2,
  },
  panelKicker: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  panelTitle: {
    color: colors.primaryDark,
    fontSize: 16,
    fontWeight: '900',
  },
  partyBanner: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  partyMark: {
    alignItems: 'center',
    borderColor: 'rgba(255,255,255,0.7)',
    borderRadius: 8,
    borderWidth: 1,
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  partyMarkText: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: '900',
  },
  partyMeta: {
    color: '#BFD3E6',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 3,
  },
  partyName: {
    color: colors.textOnPrimary,
    fontSize: 30,
    fontWeight: '900',
  },
  partyTitleBlock: {
    flex: 1,
  },
  portrait: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 40,
    borderWidth: 3,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  portraitInitials: {
    color: colors.textOnPrimary,
    fontSize: 27,
    fontWeight: '900',
  },
  regionFill: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    height: '100%',
  },
  regionList: {
    gap: 8,
  },
  regionMeta: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '800',
    marginTop: 1,
  },
  regionName: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
  },
  regionPanel: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    gap: 10,
    padding: 12,
  },
  regionRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  regionText: {
    width: 155,
  },
  regionTrack: {
    backgroundColor: colors.surface,
    borderRadius: 999,
    flex: 1,
    height: 9,
    overflow: 'hidden',
  },
  signalDescription: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 2,
  },
  signalDot: {
    borderRadius: 999,
    height: 10,
    marginTop: 4,
    width: 10,
  },
  signalList: {
    gap: 10,
  },
  signalRow: {
    flexDirection: 'row',
    gap: 8,
  },
  signalText: {
    flex: 1,
  },
  signalTitle: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
  },
  statusLabel: {
    color: '#BFD3E6',
    fontSize: 9,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  statusPill: {
    backgroundColor: 'rgba(255,255,255,0.09)',
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 138,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  statusValue: {
    color: colors.textOnPrimary,
    fontSize: 14,
    fontWeight: '900',
    marginTop: 2,
  },
  traitFill: {
    backgroundColor: colors.selected,
    borderRadius: 999,
    height: '100%',
  },
  traitLabel: {
    color: '#DCEAF7',
    fontSize: 11,
    fontWeight: '800',
    width: 92,
  },
  traitLine: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  traitStack: {
    gap: 8,
  },
  traitTrack: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 999,
    flex: 1,
    height: 8,
    overflow: 'hidden',
  },
  warnDot: {
    backgroundColor: colors.warning,
  },
  warnPill: {
    borderColor: 'rgba(217,119,6,0.5)',
  },
});
