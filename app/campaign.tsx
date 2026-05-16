import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View, type DimensionValue } from 'react-native';

import { Sidebar } from '@/src/components/dashboard/Sidebar';
import { StatusStrip } from '@/src/components/dashboard/StatusStrip';
import { regions as displayRegions } from '@/src/data/regions';
import { legacyCampaignActionV2ById } from '@/src/game/campaignActionsV2';
import { previewActionImpact } from '@/src/game/engine';
import type { CampaignActionCategory, CampaignActionV2, CampaignActionId, PlannedAction } from '@/src/game/types';
import { regionalCampaignEvents } from '@/src/simulation/data/regionalCampaignEvents';
import { krajIdByRegionId, krajeById } from '@/src/simulation/model/regionalEnrichment';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';
import type { RegionId } from '@/src/types/region';

type CategoryFilter = CampaignActionCategory | 'all';

const categories: CategoryFilter[] = [
  'all',
  'field',
  'media',
  'digital',
  'program',
  'parliament',
  'analytics',
  'organization',
  'coalition',
  'turnout',
  'crisis',
  'negative',
  'ally',
  'grayZone',
  'blackOps',
];

const categoryIcons: Record<CampaignActionCategory, string> = {
  ally: 'AL',
  analytics: 'AN',
  blackOps: '!!',
  coalition: 'KO',
  crisis: 'KR',
  digital: 'DG',
  field: 'TR',
  grayZone: 'GZ',
  media: 'TV',
  negative: '!',
  organization: 'OR',
  parliament: 'SN',
  program: 'PG',
  turnout: 'GO',
};

const categoryLabels: Record<CategoryFilter, string> = {
  all: 'Vse',
  ally: 'Spojenci',
  analytics: 'Analyza',
  blackOps: 'Black ops',
  coalition: 'Koalice',
  crisis: 'Krize',
  digital: 'Digital',
  field: 'Teren',
  grayZone: 'Seda zona',
  media: 'Media',
  negative: 'Negativni',
  organization: 'Organizace',
  parliament: 'Snemovna',
  program: 'Program',
  turnout: 'Turnout',
};

const recommendedTargets: Partial<Record<string, RegionId[]>> = {
  doorToDoor: ['ustecky', 'stredocesky', 'praha'],
  factoryVisit: ['moravskoslezsky', 'ustecky', 'zlinsky'],
  internalTrackingPoll: ['ustecky', 'stredocesky', 'praha'],
  regionalAnalysis: ['ustecky', 'stredocesky', 'praha'],
  regionalMeeting: ['ustecky', 'stredocesky', 'jihomoravsky'],
  regionalMediaAppearance: ['moravskoslezsky', 'stredocesky', 'jihomoravsky'],
  schoolVisit: ['praha', 'jihomoravsky', 'stredocesky'],
  townHall: ['stredocesky', 'ustecky', 'jihomoravsky'],
  volunteerRecruitment: ['ustecky', 'moravskoslezsky', 'stredocesky'],
};

export default function CampaignScreen() {
  const router = useRouter();
  const selectedRegionId = useGameStore((state) => state.selectedRegionId);
  const gameState = useGameStore((state) => state.gameState);
  const plannedActions = useGameStore((state) => state.plannedActions);
  const planCampaignActionV2 = useGameStore((state) => state.planCampaignActionV2);
  const removePlannedAction = useGameStore((state) => state.removePlannedAction);
  const resolvePlannedWeek = useGameStore((state) => state.resolvePlannedWeek);
  const [selectedActionId, setSelectedActionId] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [targetRegionId, setTargetRegionId] = useState<RegionId | undefined>(selectedRegionId);
  const { width } = useWindowDimensions();
  const tileWidth: DimensionValue = width >= 1150 ? '31.8%' : width >= 820 ? '48.6%' : '100%';
  const selectedAction = gameState.campaignActionsV2.find((action) => action.id === selectedActionId);
  const plannedCost = plannedActions.reduce((sum, item) => {
    const action = gameState.campaignActionsV2.find((candidate) => candidate.id === item.actionV2Id);
    return sum + (action?.cost ?? 0);
  }, 0);
  const remainingCapacity = gameState.rules.maxActionsPerWeek - plannedActions.length;
  const remainingBudget = gameState.partyRuntime.player.cash - plannedCost;
  const filteredActions = gameState.campaignActionsV2.filter((action) => selectedCategory === 'all' || action.category === selectedCategory);
  const preview =
    selectedAction && (selectedAction.target.scope !== 'region' || targetRegionId)
      ? previewActionImpact(gameState, {
          actionId: legacyActionIdForActionV2(selectedAction.id),
          actionV2Id: selectedAction.id,
          id: 'preview',
          targetRegionId: selectedAction.target.scope === 'region' ? targetRegionId : undefined,
        })
      : undefined;
  const canAddAction = Boolean(
    selectedAction &&
      remainingCapacity > 0 &&
      remainingBudget >= selectedAction.cost &&
      (selectedAction.target.scope !== 'region' || targetRegionId),
  );
  const drawerRegions = useMemo(() => {
    const ids = selectedAction ? recommendedTargets[selectedAction.id] ?? ['praha', 'stredocesky', 'ustecky'] : [];
    return ids
      .map((regionId) => displayRegions.find((region) => region.id === regionId))
      .filter((region): region is (typeof displayRegions)[number] => Boolean(region));
  }, [selectedAction]);
  const regionalTargetSummary = selectedAction ? getRegionalTargetSummary(selectedAction.id, targetRegionId) : undefined;

  const selectAction = (action: CampaignActionV2) => {
    setSelectedActionId(action.id);
    setTargetRegionId((recommendedTargets[action.id]?.[0] ?? selectedRegionId) as RegionId);
  };

  const addToPlan = () => {
    if (!selectedAction || !canAddAction) {
      return;
    }
    planCampaignActionV2(selectedAction.id, selectedAction.target.scope === 'region' ? targetRegionId : undefined);
  };

  const playPlannedWeek = () => {
    resolvePlannedWeek();
    router.replace('/briefing');
  };

  return (
    <View style={styles.screen}>
      <Sidebar activeItem="campaign" />

      <View style={styles.workspace}>
        <StatusStrip />

        <View style={styles.mainGrid}>
          <View style={styles.actionSurface}>
            <CategoryFilterBar selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
            <ScrollView contentContainerStyle={styles.tileGrid} showsVerticalScrollIndicator>
              {filteredActions.map((action) => (
                <CampaignActionTile
                  action={action}
                  isDisabled={remainingBudget < action.cost || remainingCapacity <= 0}
                  isSelected={action.id === selectedActionId}
                  key={action.id}
                  onPress={() => selectAction(action)}
                  tileWidth={tileWidth}
                />
              ))}
            </ScrollView>

            <WeeklyPlan
              actions={gameState.campaignActionsV2}
              onPlay={playPlannedWeek}
              onRemove={removePlannedAction}
              plan={plannedActions}
              plannedCost={plannedCost}
              remainingCapacity={remainingCapacity}
            />
          </View>

          <ActionDetailPanel
            action={selectedAction}
            canAddAction={canAddAction}
            onAddToPlan={addToPlan}
            onSelectTarget={setTargetRegionId}
            previewLabel={preview?.label}
            regionalTargetSummary={regionalTargetSummary}
            recommendedRegions={drawerRegions}
            selectedRegionId={targetRegionId}
          />
        </View>
      </View>
    </View>
  );
}

function CategoryFilterBar({
  onSelect,
  selectedCategory,
}: {
  onSelect: (category: CategoryFilter) => void;
  selectedCategory: CategoryFilter;
}) {
  return (
    <View style={styles.categoryBar}>
      {categories.map((category) => {
        const isSelected = category === selectedCategory;
        return (
          <Pressable
            key={category}
            onPress={() => onSelect(category)}
            style={[styles.categoryButton, isSelected && styles.categoryButtonActive]}
          >
            <Text style={[styles.categoryText, isSelected && styles.categoryTextActive]}>{categoryLabels[category]}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function CampaignActionTile({
  action,
  isDisabled,
  isSelected,
  onPress,
  tileWidth,
}: {
  action: CampaignActionV2;
  isDisabled: boolean;
  isSelected: boolean;
  onPress: () => void;
  tileWidth: DimensionValue;
}) {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={[styles.actionTile, { width: tileWidth }, isSelected && styles.actionTileSelected, isDisabled && styles.actionTileDisabled]}
    >
      <View style={styles.tileTop}>
        <View style={[styles.tileIcon, action.legality === 'illegal' && styles.tileIconDanger, isSelected && styles.tileIconSelected]}>
          <Text style={[styles.tileIconText, isSelected && styles.tileIconTextSelected]}>{categoryIcons[action.category]}</Text>
        </View>
        <View style={styles.tileTitleWrap}>
          <Text style={[styles.tileCategory, isSelected && styles.tileCategorySelected]} numberOfLines={1}>
            {categoryLabels[action.category].toUpperCase()} / {action.legality.toUpperCase()}
          </Text>
          <Text style={[styles.tileTitle, isSelected && styles.tileTitleSelected]} numberOfLines={2}>
            {action.name}
          </Text>
        </View>
      </View>

      <View style={styles.tileStats}>
        <TileBadge label="Cena" value={`${action.cost.toFixed(1)}M`} selected={isSelected} />
        <TileBadge label="Stab" value={String(action.staffCost)} selected={isSelected} />
        <TileBadge label="Lidr" value={action.leaderTimeCost.toFixed(2)} selected={isSelected} />
        <TileBadge label="Cil" value={action.target.scope} selected={isSelected} />
        <ImpactTag label={action.preview.riskLabel ?? riskLabel(action)} selected={isSelected} tone={action.legality === 'illegal' ? 'danger' : undefined} />
      </View>
    </Pressable>
  );
}

function ActionDetailPanel({
  action,
  canAddAction,
  onAddToPlan,
  onSelectTarget,
  previewLabel,
  regionalTargetSummary,
  recommendedRegions,
  selectedRegionId,
}: {
  action?: CampaignActionV2;
  canAddAction: boolean;
  onAddToPlan: () => void;
  onSelectTarget: (regionId: RegionId) => void;
  previewLabel?: string;
  regionalTargetSummary?: string;
  recommendedRegions: typeof displayRegions;
  selectedRegionId?: RegionId;
}) {
  if (!action) {
    return (
      <View style={styles.detailPanel}>
        <Text style={styles.emptyDetailTitle}>Campaign Actions v2</Text>
        <Text style={styles.previewMuted}>Vyberte akci z katalogu. Kazda akce meni vice subsystemu nez jen podporu.</Text>
      </View>
    );
  }

  return (
    <View style={styles.detailPanel}>
      <ScrollView contentContainerStyle={styles.detailContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.drawerKicker}>Takticky panel v2</Text>
        <Text style={styles.drawerCategory}>
          {categoryLabels[action.category].toUpperCase()} / {action.legality.toUpperCase()}
        </Text>
        <Text style={styles.drawerTitle} numberOfLines={3}>
          {action.name}
        </Text>

        <Text style={styles.drawerDescription}>{safeDescription(action)}</Text>

        {action.legality === 'illegal' ? (
          <View style={styles.illegalWarning}>
            <Text style={styles.illegalTitle}>Vysokorizikova abstraktni simulace</Text>
            <Text style={styles.illegalText}>
              Tato volba je herni model pravni expozice, odhaleni, backlash a reputacni ztraty. Neobsahuje prakticke postupy.
            </Text>
          </View>
        ) : null}

        <View style={styles.panelStats}>
          <PanelStat label="Rozpocet" value={`${action.cost.toFixed(1)}M Kc`} />
          <PanelStat label="Stab" value={String(action.staffCost)} />
          <PanelStat label="Cas lidra" value={`${action.leaderTimeCost.toFixed(2)} tydne`} />
          <PanelStat label="Cil" value={action.target.scope} />
          <PanelStat label="Eticke riziko" value={`${Math.round(action.ethicalRisk * 100)}%`} />
          <PanelStat label="Legalita" value={action.legality} />
        </View>

        <View style={styles.impactPanel}>
          <Text style={styles.blockTitle}>Strukturovane dopady</Text>
          <View style={styles.impactList}>
            {effectTags(action).map((tag) => (
              <ImpactTag key={tag} label={tag} selected={false} />
            ))}
          </View>
        </View>

        {action.target.scope === 'region' ? (
          <View style={styles.targetSection}>
            <Text style={styles.blockTitle}>Doporucene cile</Text>
            <View style={styles.recommendedList}>
              {recommendedRegions.map((region) => {
                const isSelected = region.id === selectedRegionId;
                return (
                  <Pressable
                    key={region.id}
                    onPress={() => onSelectTarget(region.id)}
                    style={[styles.targetCard, isSelected && styles.targetCardSelected]}
                  >
                    <Text style={[styles.targetName, isSelected && styles.targetNameSelected]} numberOfLines={1}>
                      {region.name}
                    </Text>
                    <Text style={[styles.targetNote, isSelected && styles.targetNoteSelected]}>
                      {isSelected ? 'vybrany cil' : 'vhodny segmentovy prekryv'}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ) : null}

        {regionalTargetSummary ? (
          <View style={styles.previewBox}>
            <Text style={styles.previewTitle}>Regionalni profil</Text>
            <Text style={styles.previewMuted}>{regionalTargetSummary}</Text>
          </View>
        ) : null}

        <View style={styles.previewBox}>
          <Text style={styles.previewTitle}>Nahled poradce</Text>
          <Text style={styles.previewMuted}>{previewLabel ?? action.preview.shortEffectLabel ?? 'Dopad je nejisty bez dalsich dat.'}</Text>
          <Text style={styles.previewMuted}>{action.preview.riskLabel ?? riskLabel(action)}</Text>
        </View>

        <Pressable disabled={!canAddAction} onPress={onAddToPlan} style={[styles.addOrderButton, !canAddAction && styles.addOrderButtonDisabled]}>
          <Text style={styles.addOrderText}>Pridat do planu</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

function WeeklyPlan({
  actions,
  onPlay,
  onRemove,
  plan,
  plannedCost,
  remainingCapacity,
}: {
  actions: CampaignActionV2[];
  onPlay: () => void;
  onRemove: (plannedActionId: string) => void;
  plan: PlannedAction[];
  plannedCost: number;
  remainingCapacity: number;
}) {
  return (
    <View style={styles.weeklyPlan}>
      <View style={styles.weekHeader}>
        <View>
          <Text style={styles.weekTitle}>Plan tydne</Text>
          <Text style={styles.planMeta}>
            Zbyva {remainingCapacity} rozkazu / naklady {plannedCost.toFixed(1)}M Kc
          </Text>
        </View>
        <Pressable disabled={plan.length === 0} onPress={onPlay} style={[styles.playButton, plan.length === 0 && styles.playButtonDisabled]}>
          <Text style={styles.playButtonText}>Odehrat tyden</Text>
        </Pressable>
      </View>

      <View style={styles.slots}>
        {[0, 1, 2].map((slotIndex) => {
          const plannedAction = plan[slotIndex];
          const action = plannedAction ? actions.find((candidate) => candidate.id === plannedAction.actionV2Id) : undefined;
          const region = plannedAction?.targetRegionId
            ? displayRegions.find((candidate) => candidate.id === plannedAction.targetRegionId)
            : undefined;

          return (
            <View key={slotIndex} style={[styles.planSlot, plannedAction && styles.planSlotFilled]}>
              <Text style={styles.orderLabel}>Rozkaz {slotIndex + 1}</Text>
              {plannedAction && action ? (
                <View style={styles.orderContent}>
                  <View style={styles.orderText}>
                    <Text style={styles.orderTitle} numberOfLines={1}>
                      {action.name}
                    </Text>
                    <Text style={styles.orderSubtitle} numberOfLines={1}>
                      {region?.name ?? 'Celostatne'}
                    </Text>
                    <Text style={styles.orderMeta} numberOfLines={1}>
                      {action.cost.toFixed(1)}M Kc / {categoryLabels[action.category]} / {action.legality}
                    </Text>
                  </View>
                  <Pressable onPress={() => onRemove(plannedAction.id)} style={styles.removeButton}>
                    <Text style={styles.removeButtonText}>Zrusit</Text>
                  </Pressable>
                </View>
              ) : (
                <Text style={styles.emptyOrder}>Ceka na rozkaz</Text>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

function PanelStat({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.panelStat}>
      <Text style={styles.panelStatLabel}>{label}</Text>
      <Text style={styles.panelStatValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

function ImpactTag({ label, selected, tone }: { label: string; selected: boolean; tone?: 'danger' }) {
  return (
    <View style={[styles.impactTag, selected && styles.impactTagSelected, tone === 'danger' && styles.impactTagDanger]}>
      <Text style={[styles.impactTagText, selected && styles.impactTagTextSelected, tone === 'danger' && styles.impactTagTextDanger]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

function TileBadge({ label, selected, value }: { label: string; selected: boolean; value: string }) {
  return (
    <View style={[styles.tileBadge, selected && styles.tileBadgeSelected]}>
      <Text style={[styles.tileBadgeLabel, selected && styles.tileBadgeLabelSelected]}>{label}</Text>
      <Text style={[styles.tileBadgeValue, selected && styles.tileBadgeValueSelected]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

function legacyActionIdForActionV2(actionV2Id: string): CampaignActionId {
  const legacyEntry = Object.entries(legacyCampaignActionV2ById).find(([, mappedId]) => mappedId === actionV2Id);
  return (legacyEntry?.[0] as CampaignActionId | undefined) ?? 'regionalRally';
}

function effectTags(action: CampaignActionV2) {
  const effects = action.effects;
  return [
    effects.fieldAmplitude || effects.latentCenterShift || effects.latentWidthShift ? 'pole strany' : undefined,
    effects.issuePositionShift || effects.issueSalienceShift || effects.framingChange ? 'issue vrstva' : undefined,
    effects.turnoutModifier || effects.demobilizationModifier ? 'turnout priprava' : undefined,
    effects.reputationShift ? 'reputace' : undefined,
    effects.regionOrganizationShift ? 'organizace' : undefined,
    effects.informationQualityShift ? 'informacni kvalita' : undefined,
    effects.coalitionRelationShift ? 'koalice' : undefined,
    effects.mediaVulnerabilityShift ? 'media risk' : undefined,
    effects.scandalRiskShift || effects.legalExposureShift ? 'expozice' : undefined,
    effects.counterMobilizationRiskShift ? 'protimobilizace' : undefined,
  ].filter((tag): tag is string => Boolean(tag));
}

function riskLabel(action: CampaignActionV2) {
  const maxRisk = Math.max(...Object.values(action.risks));
  if (action.legality === 'illegal' || maxRisk >= 0.7) {
    return 'extremni riziko';
  }
  if (action.legality === 'gray' || maxRisk >= 0.3) {
    return 'vysoke riziko';
  }
  if (maxRisk >= 0.12) {
    return 'stredni riziko';
  }
  return 'nizke riziko';
}

function safeDescription(action: CampaignActionV2) {
  if (action.legality === 'illegal') {
    return 'Abstraktni vysoko rizikova herni mechanika. Dopad se modeluje pres odhaleni, pravni expozici, backlash, reputaci, koalicni toxicitu a protimobilizaci.';
  }

  return action.description;
}

function getRegionalTargetSummary(actionId: string, regionId?: RegionId) {
  if (!regionId) {
    return undefined;
  }

  const krajId = krajIdByRegionId[regionId];
  const krajName = krajId ? krajeById[krajId]?.name : undefined;
  const event =
    regionalCampaignEvents.find((candidate) => candidate.target.krajIds?.includes(krajId)) ??
    (actionId === 'schoolVisit' ? regionalCampaignEvents.find((candidate) => candidate.id === 'praha-liberal-urban') : undefined);

  if (!event) {
    return `${krajName ?? regionId}: zasah se vyhodnoti podle krajskych castic, urbanity, vzdelani a socioekonomickeho proxy.`;
  }

  const metro = event.target.metroAreas?.join(', ') ?? 'bez metra';
  const urbanity = event.target.urbanity?.join(', ') ?? 'vsechny sidelni typy';
  const education = event.target.educationGroups?.join(', ') ?? 'vsechna vzdelani';

  return `${event.name}: ${krajName ?? regionId}, metro ${metro}, urbanita ${urbanity}, vzdelani ${education}.`;
}

const styles = StyleSheet.create({
  actionSurface: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 12,
  },
  actionTile: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 126,
    padding: 9,
  },
  actionTileDisabled: {
    opacity: 0.42,
  },
  actionTileSelected: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
    borderWidth: 2,
  },
  addOrderButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 8,
    marginTop: 12,
    paddingVertical: 11,
  },
  addOrderButtonDisabled: {
    backgroundColor: colors.textMuted,
  },
  addOrderText: {
    color: colors.textOnPrimary,
    fontSize: 14,
    fontWeight: '900',
  },
  blockTitle: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
  },
  categoryBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 9,
  },
  categoryButton: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },
  categoryButtonActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  categoryText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '900',
  },
  categoryTextActive: {
    color: colors.textOnPrimary,
  },
  detailContent: {
    padding: 13,
  },
  detailPanel: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    width: 360,
  },
  drawerCategory: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
    marginTop: 7,
  },
  drawerDescription: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
    marginTop: 9,
  },
  drawerKicker: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  drawerTitle: {
    color: colors.primaryDark,
    fontSize: 23,
    fontWeight: '900',
    marginTop: 2,
  },
  emptyDetailTitle: {
    color: colors.primaryDark,
    fontSize: 20,
    fontWeight: '900',
    padding: 13,
  },
  emptyOrder: {
    color: '#DCEAF7',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 11,
  },
  illegalText: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 4,
  },
  illegalTitle: {
    color: colors.danger,
    fontSize: 13,
    fontWeight: '900',
  },
  illegalWarning: {
    backgroundColor: '#FFF0F0',
    borderColor: colors.danger,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 12,
    padding: 10,
  },
  impactList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },
  impactPanel: {
    marginTop: 12,
  },
  impactTag: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  impactTagDanger: {
    backgroundColor: '#FFF0F0',
    borderColor: colors.danger,
  },
  impactTagSelected: {
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderColor: 'rgba(255,255,255,0.2)',
  },
  impactTagText: {
    color: colors.primaryDark,
    fontSize: 10,
    fontWeight: '900',
  },
  impactTagTextDanger: {
    color: colors.danger,
  },
  impactTagTextSelected: {
    color: colors.textOnPrimary,
  },
  mainGrid: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  orderContent: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  orderLabel: {
    color: colors.selected,
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  orderMeta: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '700',
    marginTop: 1,
  },
  orderSubtitle: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '800',
    marginTop: 1,
  },
  orderText: {
    flex: 1,
  },
  orderTitle: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },
  panelStat: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 8,
    padding: 8,
    width: '48.8%',
  },
  panelStatLabel: {
    color: colors.textMuted,
    fontSize: 9,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  panelStatValue: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 2,
  },
  panelStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 11,
  },
  planMeta: {
    color: '#BFD3E6',
    fontSize: 11,
    fontWeight: '800',
    marginTop: 2,
  },
  planSlot: {
    backgroundColor: 'rgba(255,255,255,0.09)',
    borderColor: 'rgba(255,255,255,0.18)',
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minHeight: 82,
    padding: 8,
  },
  planSlotFilled: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.selected,
  },
  playButton: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  playButtonDisabled: {
    backgroundColor: '#52697F',
  },
  playButtonText: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: '900',
  },
  previewBox: {
    backgroundColor: colors.primarySoft,
    borderRadius: 8,
    marginTop: 12,
    padding: 10,
  },
  previewMuted: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
    marginTop: 4,
  },
  previewTitle: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  recommendedList: {
    gap: 7,
    marginTop: 8,
  },
  removeButton: {
    backgroundColor: colors.surface,
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  removeButtonText: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '900',
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'row',
  },
  slots: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 9,
  },
  targetCard: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
  targetCardSelected: {
    backgroundColor: colors.selected,
    borderColor: colors.primaryDark,
  },
  targetName: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '900',
  },
  targetNameSelected: {
    color: colors.selectedRegionText,
  },
  targetNote: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    marginTop: 2,
  },
  targetNoteSelected: {
    color: colors.selectedRegionText,
  },
  targetSection: {
    marginTop: 12,
  },
  tileBadge: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 7,
    minWidth: 48,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  tileBadgeLabel: {
    color: colors.textMuted,
    fontSize: 8,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  tileBadgeLabelSelected: {
    color: '#BFD3E6',
  },
  tileBadgeSelected: {
    backgroundColor: 'rgba(255,255,255,0.13)',
  },
  tileBadgeValue: {
    color: colors.primaryDark,
    fontSize: 11,
    fontWeight: '900',
    marginTop: 1,
  },
  tileBadgeValueSelected: {
    color: colors.textOnPrimary,
  },
  tileCategory: {
    color: colors.accent,
    fontSize: 9,
    fontWeight: '900',
  },
  tileCategorySelected: {
    color: colors.selected,
  },
  tileGrid: {
    backgroundColor: colors.surfaceSoft,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    gap: 8,
    padding: 8,
  },
  tileIcon: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  tileIconDanger: {
    backgroundColor: '#FFF0F0',
    borderColor: colors.danger,
  },
  tileIconSelected: {
    backgroundColor: colors.selected,
    borderColor: colors.selected,
  },
  tileIconText: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },
  tileIconTextSelected: {
    color: colors.selectedRegionText,
  },
  tileStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 8,
  },
  tileTitle: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 17,
    marginTop: 1,
  },
  tileTitleSelected: {
    color: colors.textOnPrimary,
  },
  tileTitleWrap: {
    flex: 1,
  },
  tileTop: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  weekHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  weekTitle: {
    color: colors.textOnPrimary,
    fontSize: 14,
    fontWeight: '900',
  },
  weeklyPlan: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 9,
    padding: 10,
  },
  workspace: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
});
