import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  type DimensionValue,
} from 'react-native';

import { Sidebar } from '@/src/components/dashboard/Sidebar';
import { StatusStrip } from '@/src/components/dashboard/StatusStrip';
import { regions as displayRegions } from '@/src/data/regions';
import { previewActionImpact } from '@/src/game/engine';
import type { ActionType, CampaignActionId, PlannedAction } from '@/src/game/types';
import { regionalCampaignEvents } from '@/src/simulation/data/regionalCampaignEvents';
import { krajIdByRegionId, krajeById } from '@/src/simulation/model/regionalEnrichment';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';
import type { RegionId } from '@/src/types/region';

type CampaignCategory = Exclude<ActionType['category'], 'Analytika' | 'Finance'>;
type CategoryFilter = CampaignCategory | 'Vše';

const DRAWER_WIDTH = 340;
const categories: CategoryFilter[] = ['Vše', 'Terén', 'Online', 'Média', 'Program'];

const actionIcons: Record<CampaignActionId, string> = {
  debate: 'TV',
  financeTransparency: 'CZ',
  focusGroup: 'FG',
  internalPoll: 'PR',
  leaderVisit: 'LD',
  negativeCampaign: '!',
  onlineCampaign: 'ON',
  opaqueSupport: '!!',
  parliamentSpeech: 'SN',
  policyPackage: 'PG',
  messageTest: 'MT',
  regionalRally: 'TR',
  schoolVisit: 'SK',
  thirdPartySupport: '3O',
  tvInterview: 'TV',
};

const actionImpactTags: Record<CampaignActionId, string[]> = {
  debate: ['Média', 'Dosah', 'Únava'],
  financeTransparency: ['Reputace', 'Riziko kauzy'],
  focusGroup: ['Program', 'Odhady'],
  internalPoll: ['Odhady', 'Region'],
  leaderVisit: ['Terén', 'Reputace', 'Únava'],
  messageTest: ['Program', 'Odhady'],
  negativeCampaign: ['Média', 'Riziko kauzy'],
  onlineCampaign: ['Dosah', 'Region'],
  opaqueSupport: ['Dosah', 'Riziko kauzy'],
  parliamentSpeech: ['Reputace', 'Program'],
  policyPackage: ['Program', 'Reputace'],
  regionalRally: ['Terén', 'Region'],
  schoolVisit: ['Média', 'Program', 'Region'],
  thirdPartySupport: ['Dosah', 'Riziko kauzy'],
  tvInterview: ['Média', 'Dosah', 'Únava'],
};

const recommendedTargets: Partial<Record<CampaignActionId, RegionId[]>> = {
  internalPoll: ['ustecky', 'stredocesky', 'praha'],
  leaderVisit: ['stredocesky', 'ustecky', 'jihomoravsky'],
  onlineCampaign: ['praha', 'jihomoravsky', 'stredocesky'],
  regionalRally: ['ustecky', 'stredocesky', 'jihomoravsky'],
  schoolVisit: ['praha', 'jihomoravsky', 'stredocesky'],
};

export default function CampaignScreen() {
  const router = useRouter();
  const selectedRegionId = useGameStore((state) => state.selectedRegionId);
  const gameState = useGameStore((state) => state.gameState);
  const plannedActions = useGameStore((state) => state.plannedActions);
  const planAction = useGameStore((state) => state.planAction);
  const removePlannedAction = useGameStore((state) => state.removePlannedAction);
  const resolvePlannedWeek = useGameStore((state) => state.resolvePlannedWeek);
  const [selectedActionId, setSelectedActionId] = useState<CampaignActionId>();
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Vše');
  const [targetRegionId, setTargetRegionId] = useState<RegionId | undefined>(selectedRegionId);
  const { width } = useWindowDimensions();
  const tileWidth: DimensionValue = width >= 1050 ? '31.8%' : '48.7%';
  const selectedAction = gameState.actions.find((action) => action.id === selectedActionId);
  const plannedCost = plannedActions.reduce((sum, item) => {
    const action = gameState.actions.find((candidate) => candidate.id === item.actionId);
    return sum + (action?.cost ?? 0);
  }, 0);
  const remainingCapacity = gameState.rules.maxActionsPerWeek - plannedActions.length;
  const remainingBudget = gameState.partyRuntime.player.cash - plannedCost;
  const filteredActions = gameState.actions.filter(
    (action) =>
      action.category !== 'Analytika' &&
      action.category !== 'Finance' &&
      (selectedCategory === 'Vše' || action.category === selectedCategory),
  );
  const preview =
    selectedAction && (selectedAction.target === 'national' || targetRegionId)
      ? previewActionImpact(gameState, {
          actionId: selectedAction.id,
          id: 'preview',
          targetRegionId: selectedAction.target === 'region' ? targetRegionId : undefined,
        })
      : undefined;
  const canAddAction = Boolean(
    selectedAction &&
      remainingCapacity >= selectedAction.capacityCost &&
      remainingBudget >= selectedAction.cost &&
      (selectedAction.target === 'national' || targetRegionId),
  );
  const drawerRegions = useMemo(() => {
    const ids = selectedAction ? recommendedTargets[selectedAction.id] ?? ['praha', 'stredocesky', 'ustecky'] : [];
    return ids
      .map((regionId) => displayRegions.find((region) => region.id === regionId))
      .filter((region): region is (typeof displayRegions)[number] => Boolean(region));
  }, [selectedAction]);
  const regionalTargetSummary = selectedAction ? getRegionalTargetSummary(selectedAction.id, targetRegionId) : undefined;

  const selectAction = (action: ActionType) => {
    setSelectedActionId(action.id);
    setTargetRegionId((recommendedTargets[action.id]?.[0] ?? selectedRegionId) as RegionId);
  };
  const addToPlan = () => {
    if (!selectedAction || !canAddAction) {
      return;
    }

    planAction(selectedAction.id, selectedAction.target === 'region' ? targetRegionId : undefined);
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

        <View style={styles.hqSurface}>
          <CategoryFilterBar selectedCategory={selectedCategory} onSelect={setSelectedCategory} />
          <ScrollView contentContainerStyle={styles.tileGrid} showsVerticalScrollIndicator>
            {filteredActions.map((action) => (
              <CampaignActionTile
                action={action}
                isDisabled={remainingBudget < action.cost || remainingCapacity < action.capacityCost}
                isSelected={action.id === selectedActionId}
                key={action.id}
                onPress={() => selectAction(action)}
                tileWidth={tileWidth}
              />
            ))}
          </ScrollView>

          <WeeklyPlan
            actions={gameState.actions}
            onPlay={playPlannedWeek}
            onRemove={removePlannedAction}
            plan={plannedActions}
            plannedCost={plannedCost}
            remainingCapacity={remainingCapacity}
          />
        </View>

        <ActionDetailDrawer
          action={selectedAction}
          canAddAction={canAddAction}
          isOpen={Boolean(selectedAction)}
          onAddToPlan={addToPlan}
          onClose={() => setSelectedActionId(undefined)}
          onSelectTarget={setTargetRegionId}
          previewLabel={preview?.label}
          regionalTargetSummary={regionalTargetSummary}
          recommendedRegions={drawerRegions}
          selectedRegionId={targetRegionId}
        />
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
            <Text style={[styles.categoryText, isSelected && styles.categoryTextActive]}>{category}</Text>
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
  action: ActionType;
  isDisabled: boolean;
  isSelected: boolean;
  onPress: () => void;
  tileWidth: DimensionValue;
}) {
  return (
    <Pressable
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.actionTile,
        { width: tileWidth },
        isSelected && styles.actionTileSelected,
        isDisabled && styles.actionTileDisabled,
      ]}
    >
      <View style={styles.tileTop}>
        <View style={[styles.tileIcon, isSelected && styles.tileIconSelected]}>
          <Text style={[styles.tileIconText, isSelected && styles.tileIconTextSelected]}>{actionIcons[action.id]}</Text>
        </View>
        <View style={styles.tileTitleWrap}>
          <Text style={[styles.tileCategory, isSelected && styles.tileCategorySelected]} numberOfLines={1}>
            {action.category.toUpperCase()}
          </Text>
          <Text style={[styles.tileTitle, isSelected && styles.tileTitleSelected]} numberOfLines={2}>
            {action.name}
          </Text>
        </View>
      </View>

      <View style={styles.tileStats}>
        <TileBadge label="Cena" value={`${action.cost.toFixed(1)}M`} selected={isSelected} />
        <TileBadge label="Riziko" value={action.risk} selected={isSelected} tone={action.risk === 'vyšší' ? 'danger' : undefined} />
        {actionImpactTags[action.id].slice(0, 3).map((tag) => (
          <ImpactTag key={tag} label={tag} selected={isSelected} />
        ))}
      </View>
    </Pressable>
  );
}

function ImpactTag({ label, selected }: { label: string; selected: boolean }) {
  return (
    <View style={[styles.impactTag, selected && styles.impactTagSelected]}>
      <Text style={[styles.impactTagText, selected && styles.impactTagTextSelected]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

function TileBadge({
  label,
  selected,
  tone,
  value,
}: {
  label: string;
  selected: boolean;
  tone?: 'danger';
  value: string;
}) {
  return (
    <View style={[styles.tileBadge, selected && styles.tileBadgeSelected]}>
      <Text style={[styles.tileBadgeLabel, selected && styles.tileBadgeLabelSelected]}>{label}</Text>
      <Text
        style={[
          styles.tileBadgeValue,
          selected && styles.tileBadgeValueSelected,
          tone === 'danger' && styles.tileBadgeDanger,
        ]}
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
}

function ActionDetailDrawer({
  action,
  canAddAction,
  isOpen,
  onAddToPlan,
  onClose,
  onSelectTarget,
  previewLabel,
  regionalTargetSummary,
  recommendedRegions,
  selectedRegionId,
}: {
  action?: ActionType;
  canAddAction: boolean;
  isOpen: boolean;
  onAddToPlan: () => void;
  onClose: () => void;
  onSelectTarget: (regionId: RegionId) => void;
  previewLabel?: string;
  regionalTargetSummary?: string;
  recommendedRegions: typeof displayRegions;
  selectedRegionId?: RegionId;
}) {
  const translateX = useRef(new Animated.Value(DRAWER_WIDTH + 20)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      duration: 220,
      toValue: isOpen ? 0 : DRAWER_WIDTH + 20,
      useNativeDriver: true,
    }).start();
  }, [isOpen, translateX]);

  if (!action) {
    return null;
  }

  return (
    <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
      <ScrollView contentContainerStyle={styles.drawerContent} showsVerticalScrollIndicator={false}>
        <View style={styles.drawerHeader}>
          <View style={styles.drawerHeaderText}>
            <Text style={styles.drawerKicker}>Taktický panel</Text>
            <Text style={styles.drawerCategory}>{action.category.toUpperCase()}</Text>
            <Text style={styles.drawerTitle} numberOfLines={2}>
              {action.name}
            </Text>
          </View>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>X</Text>
          </Pressable>
        </View>

        <Text style={styles.drawerDescription}>{action.description}</Text>

        <View style={styles.panelStats}>
          <PanelStat label="Rozpočet" value={`${action.cost.toFixed(1)}M Kč`} />
          <PanelStat label="Sloty v týdnu" value={String(action.capacityCost)} />
          <PanelStat label="Čas lídra" value={`${action.leaderTimeCost.toFixed(2)} týdne`} />
          <PanelStat label="Riziko" value={action.risk} />
        </View>

        <View style={styles.impactPanel}>
          <Text style={styles.blockTitle}>Co akce skutečně mění</Text>
          <View style={styles.impactList}>
            {actionImpactTags[action.id].map((tag) => (
              <ImpactTag key={tag} label={tag} selected={false} />
            ))}
          </View>
        </View>

        {action.target === 'region' ? (
          <View style={styles.targetSection}>
            <Text style={styles.blockTitle}>Doporučené cíle</Text>
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
                      {isSelected ? 'vybraný cíl' : 'vhodný segmentový překryv'}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ) : (
          <View style={styles.previewBox}>
            <Text style={styles.previewTitle}>Celostátní akce</Text>
            <Text style={styles.previewMuted}>Akce se aplikuje na reputaci, pole, tematickou pozici nebo mediální dosah bez výběru kraje.</Text>
          </View>
        )}

        {regionalTargetSummary ? (
          <View style={styles.previewBox}>
            <Text style={styles.previewTitle}>Regionální profil zásahu</Text>
            <Text style={styles.previewMuted}>{regionalTargetSummary}</Text>
          </View>
        ) : null}

        <View style={styles.previewBox}>
          <Text style={styles.previewTitle}>Rychlý náhled</Text>
          <Text style={styles.previewMuted}>{previewLabel ?? 'Vyberte cíl pro náhled dopadu.'}</Text>
        </View>

        <View style={styles.advisorNote}>
          <Text style={styles.advisorText}>
            Poradce kampaně: Akce nemění procenta přímo. Mění latentní parametry strany a výsledek vysvětlí briefing týdne.
          </Text>
        </View>

        <Pressable
          disabled={!canAddAction}
          onPress={onAddToPlan}
          style={[styles.addOrderButton, !canAddAction && styles.addOrderButtonDisabled]}
        >
          <Text style={styles.addOrderText}>Přidat do plánu</Text>
        </Pressable>
      </ScrollView>
    </Animated.View>
  );
}

function getRegionalTargetSummary(actionId: CampaignActionId, regionId?: RegionId) {
  if (!regionId) {
    return undefined;
  }

  const krajId = krajIdByRegionId[regionId];
  const krajName = krajId ? krajeById[krajId]?.name : undefined;
  const event =
    regionalCampaignEvents.find((candidate) => candidate.target.krajIds?.includes(krajId)) ??
    (actionId === 'schoolVisit' ? regionalCampaignEvents.find((candidate) => candidate.id === 'praha-liberal-urban') : undefined);

  if (!event) {
    return `${krajName ?? regionId}: zásah se vyhodnotí podle krajských částic, urbanity, vzdělání a socioekonomického proxy.`;
  }

  const metro = event.target.metroAreas?.join(', ') ?? 'bez metra';
  const urbanity = event.target.urbanity?.join(', ') ?? 'všechny sídelní typy';
  const education = event.target.educationGroups?.join(', ') ?? 'všechna vzdělání';

  return `${event.name}: ${krajName ?? regionId}, metro ${metro}, urbanita ${urbanity}, vzdělání ${education}.`;
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

function WeeklyPlan({
  actions,
  onPlay,
  onRemove,
  plan,
  plannedCost,
  remainingCapacity,
}: {
  actions: ActionType[];
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
          <Text style={styles.weekTitle}>Plán týdne</Text>
          <Text style={styles.planMeta}>
            Zbývá {remainingCapacity} rozkazů · náklady {plannedCost.toFixed(1)}M Kč
          </Text>
        </View>
        <Pressable disabled={plan.length === 0} onPress={onPlay} style={[styles.playButton, plan.length === 0 && styles.playButtonDisabled]}>
          <Text style={styles.playButtonText}>Odehrát týden</Text>
        </Pressable>
      </View>

      <View style={styles.slots}>
        {[0, 1, 2].map((slotIndex) => {
          const plannedAction = plan[slotIndex];
          const action = plannedAction ? actions.find((candidate) => candidate.id === plannedAction.actionId) : undefined;
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
                      {region?.name ?? 'Celostátně'}
                    </Text>
                    <Text style={styles.orderMeta} numberOfLines={1}>
                      {action.cost.toFixed(1)}M Kč · {actionImpactTags[action.id].slice(0, 2).join(', ')}
                    </Text>
                  </View>
                  <Pressable onPress={() => onRemove(plannedAction.id)} style={styles.removeButton}>
                    <Text style={styles.removeButtonText}>Zrušit</Text>
                  </Pressable>
                </View>
              ) : (
                <Text style={styles.emptyOrder}>Čeká na rozkaz</Text>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionTile: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 112,
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
  advisorNote: {
    backgroundColor: '#FFF7D6',
    borderColor: colors.selected,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 12,
    padding: 10,
  },
  advisorText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 17,
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
  closeButton: {
    alignItems: 'center',
    backgroundColor: colors.surfaceMuted,
    borderRadius: 8,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  closeText: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  drawer: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    bottom: 10,
    elevation: 10,
    position: 'absolute',
    right: 10,
    top: 10,
    width: DRAWER_WIDTH,
    zIndex: 10,
  },
  drawerCategory: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
    marginTop: 7,
  },
  drawerContent: {
    padding: 13,
  },
  drawerDescription: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
    marginTop: 9,
  },
  drawerHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  drawerHeaderText: {
    flex: 1,
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
  emptyOrder: {
    color: '#DCEAF7',
    fontSize: 12,
    fontWeight: '800',
    marginTop: 11,
  },
  hqSurface: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 12,
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
  impactTagSelected: {
    backgroundColor: 'rgba(255,255,255,0.14)',
    borderColor: 'rgba(255,255,255,0.2)',
  },
  impactTagText: {
    color: colors.primaryDark,
    fontSize: 10,
    fontWeight: '900',
  },
  impactTagTextSelected: {
    color: colors.textOnPrimary,
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
    minWidth: 54,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  tileBadgeDanger: {
    color: colors.danger,
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
    position: 'relative',
  },
});
