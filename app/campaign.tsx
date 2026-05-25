import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View, type DimensionValue } from 'react-native';

import { Sidebar } from '@/src/components/dashboard/Sidebar';
import { StatusStrip } from '@/src/components/dashboard/StatusStrip';
import { regions as displayRegions } from '@/src/data/regions';
import { previewActionImpact } from '@/src/game/engine';
import type { CampaignActionCategory, CampaignActionV2 } from '@/src/game/types';
import { regionalCampaignEvents } from '@/src/simulation/data/regionalCampaignEvents';
import { krajIdByRegionId, krajeById } from '@/src/simulation/model/regionalEnrichment';
import { useGameStore } from '@/src/store/useGameStore';
import { colors } from '@/src/theme/colors';
import type { RegionId } from '@/src/types/region';

type CategoryFilter = CampaignActionCategory | 'all';

const categories: CategoryFilter[] = [
  'all',
  'field',
  'ads',
  'digital',
  'turnout',
  'negative',
  'ally',
  'grayZone',
  'blackOps',
];

const categoryIcons: Partial<Record<CampaignActionCategory, string>> = {
  ads: 'AD',
  ally: 'AL',
  analytics: 'AN',
  blackOps: '!!',
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

const categoryLabels: Partial<Record<CampaignActionCategory, string>> & { all: string } = {
  ads: 'Reklama',
  all: 'Vse',
  ally: 'Spojenci',
  analytics: 'Analyza',
  blackOps: 'Black ops',
  crisis: 'Krize',
  digital: 'Digital',
  field: 'Teren',
  grayZone: 'Seda zona',
  media: 'Media',
  negative: 'Negativni',
  organization: 'Organizace',
  parliament: 'Snemovna',
  program: 'Program',
  turnout: 'Mobilizace',
};

const recommendedTargets: Partial<Record<string, RegionId[]>> = {
  doorToDoor: ['ustecky', 'stredocesky', 'praha'],
  factoryVisit: ['moravskoslezsky', 'ustecky', 'zlinsky'],
  localTownHall: ['stredocesky', 'ustecky', 'jihomoravsky'],
  regionalMeeting: ['ustecky', 'stredocesky', 'jihomoravsky'],
  regionalMedia: ['moravskoslezsky', 'stredocesky', 'jihomoravsky'],
  regionalPoll: ['ustecky', 'stredocesky', 'praha'],
  schoolVisit: ['praha', 'jihomoravsky', 'stredocesky'],
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [targetRegionId, setTargetRegionId] = useState<RegionId | undefined>(selectedRegionId);
  const [targetIssueId, setTargetIssueId] = useState<string>(gameState.issueLayer.issues[0]?.id ?? 'housing');
  const [executionMessage, setExecutionMessage] = useState<string>();
  const { width } = useWindowDimensions();
  const tileWidth: DimensionValue = width >= 1500 ? '19.2%' : width >= 1200 ? '24.2%' : width >= 900 ? '32.4%' : width >= 680 ? '49%' : '100%';
  const runtime = gameState.partyRuntime.player;
  const campaignActions = useMemo(
    () => gameState.campaignActionsV2.filter((action) => action.placement === 'campaign' && action.availability === 'player_initiated'),
    [gameState.campaignActionsV2],
  );
  const plannedCampaignActions = useMemo(
    () =>
      plannedActions
        .map((plannedAction) => {
          const action = campaignActions.find((candidate) => candidate.id === plannedAction.actionV2Id);
          return action ? { action, plannedAction } : undefined;
        })
        .filter((item): item is { action: CampaignActionV2; plannedAction: (typeof plannedActions)[number] } => Boolean(item)),
    [campaignActions, plannedActions],
  );
  const plannedActionCounts = useMemo(
    () =>
      plannedCampaignActions.reduce<Record<string, number>>((counts, item) => {
        counts[item.action.id] = (counts[item.action.id] ?? 0) + 1;
        return counts;
      }, {}),
    [plannedCampaignActions],
  );
  const reserved = useMemo(
    () =>
      plannedCampaignActions.reduce(
        (totals, item) => ({
          cash: totals.cash + item.action.cost,
          leader: totals.leader + item.action.leaderTimeCost,
          staff: totals.staff + item.action.staffCost,
        }),
        { cash: 0, leader: 0, staff: 0 },
      ),
    [plannedCampaignActions],
  );
  const remainingLeaderTime = runtime.leader.timeCap - runtime.leader.timeUsed - reserved.leader;
  const remainingCash = runtime.cash - reserved.cash;
  const remainingStaff = (runtime.staffCap ?? 6) - (runtime.staffUsed ?? 0) - reserved.staff;
  const selectedAction = campaignActions.find((action) => action.id === selectedActionId);
  const filteredActions = campaignActions.filter((action) => selectedCategory === 'all' || action.category === selectedCategory);
  const categoryCounts = useMemo(() => countByCategory(campaignActions), [campaignActions]);
  const preview =
    selectedAction && (selectedAction.target.scope !== 'region' || targetRegionId)
      ? previewActionImpact(gameState, {
          actionV2Id: selectedAction.id,
          id: 'preview',
          targetProgramIssueId: selectedAction.target.scope === 'issue' ? targetIssueId : undefined,
          targetRegionId: selectedAction.target.scope === 'region' ? targetRegionId : undefined,
        })
      : undefined;
  const canExecute = Boolean(
    selectedAction &&
      remainingCash >= selectedAction.cost &&
      remainingLeaderTime >= selectedAction.leaderTimeCost &&
      remainingStaff >= selectedAction.staffCost &&
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
    setExecutionMessage(undefined);
    if (action.target.scope === 'region') {
      setTargetRegionId((recommendedTargets[action.id]?.[0] ?? selectedRegionId) as RegionId);
    }
  };

  const executeAction = () => {
    if (!selectedAction || !canExecute) {
      return;
    }

    const ok = planCampaignActionV2(selectedAction.id, targetRegionId, targetIssueId);
    setExecutionMessage(ok ? `${selectedAction.name}: v planu tydne.` : `${selectedAction.name}: nelze pridat pri soucasnych limitech.`);
  };

  const removeSelectedActionFromPlan = () => {
    if (!selectedAction) {
      return;
    }

    const plannedAction = [...plannedCampaignActions].reverse().find((item) => item.action.id === selectedAction.id)?.plannedAction;
    if (!plannedAction) {
      return;
    }

    removePlannedAction(plannedAction.id);
    setExecutionMessage(`${selectedAction.name}: odebrano z planu.`);
  };

  const finishWeek = () => {
    resolvePlannedWeek();
    router.replace('/briefing');
  };

  return (
    <View style={styles.screen}>
      <Sidebar activeItem="campaign" />

      <View style={styles.workspace}>
        <StatusStrip />

        <View style={styles.commandBar}>
          <Pressable onPress={() => setIsFilterOpen((value) => !value)} style={styles.filterToggle}>
            <Text style={styles.filterToggleLabel}>Filtr</Text>
            <Text style={styles.filterToggleValue}>
              {labelForCategory(selectedCategory)} / {filteredActions.length}
            </Text>
            <Text style={styles.filterArrow}>{isFilterOpen ? '^' : 'v'}</Text>
          </Pressable>

          <View style={styles.quickStats}>
            <CompactStat label="Rozpocet" value={`${Math.max(0, remainingCash).toFixed(1)}M`} />
            <CompactStat label="Lidr" value={`${Math.max(0, remainingLeaderTime).toFixed(2)}`} />
            <CompactStat label="Stab" value={`${Math.max(0, remainingStaff).toFixed(2)}`} />
            <Pressable onPress={finishWeek} style={styles.finishWeekButton}>
              <Text style={styles.finishWeekText}>Odehrat tyden</Text>
            </Pressable>
          </View>
        </View>

        {isFilterOpen ? (
          <CategoryFilterRollup
            counts={categoryCounts}
            onSelect={(category) => {
              setSelectedCategory(category);
              setIsFilterOpen(false);
            }}
            selectedCategory={selectedCategory}
          />
        ) : null}

        <View style={styles.catalogPanel}>
          <ScrollView contentContainerStyle={styles.tileGrid} showsVerticalScrollIndicator>
            {filteredActions.map((action) => (
              <CampaignActionTile
                action={action}
                isDisabled={remainingCash < action.cost || remainingLeaderTime < action.leaderTimeCost || remainingStaff < action.staffCost}
                isSelected={action.id === selectedAction?.id}
                key={action.id}
                onPress={() => selectAction(action)}
                plannedCount={plannedActionCounts[action.id] ?? 0}
                tileWidth={tileWidth}
              />
            ))}
          </ScrollView>
        </View>

        {selectedAction ? (
          <>
            <Pressable onPress={() => setSelectedActionId(undefined)} style={styles.drawerScrim} />
            <ActionDrawer
              action={selectedAction}
              canExecute={canExecute}
              executionMessage={executionMessage}
              issues={gameState.issueLayer.issues}
              onClose={() => setSelectedActionId(undefined)}
              onExecute={executeAction}
              onRemovePlanned={removeSelectedActionFromPlan}
              onSelectIssue={setTargetIssueId}
              onSelectTarget={setTargetRegionId}
              previewLabel={preview?.label}
              regionalTargetSummary={regionalTargetSummary}
              recommendedRegions={drawerRegions}
              plannedCount={plannedActionCounts[selectedAction.id] ?? 0}
              selectedIssueId={targetIssueId}
              selectedRegionId={targetRegionId}
            />
          </>
        ) : null}
      </View>
    </View>
  );
}

function CategoryFilterRollup({
  counts,
  onSelect,
  selectedCategory,
}: {
  counts: Record<CategoryFilter, number>;
  onSelect: (category: CategoryFilter) => void;
  selectedCategory: CategoryFilter;
}) {
  return (
    <View style={styles.rollup}>
      {categories.map((category) => {
        const count = counts[category] ?? 0;
        const isSelected = category === selectedCategory;
        if (category !== 'all' && count === 0) {
          return null;
        }

        return (
          <Pressable key={category} onPress={() => onSelect(category)} style={[styles.rollupItem, isSelected && styles.rollupItemActive]}>
            <Text style={[styles.rollupText, isSelected && styles.rollupTextActive]} numberOfLines={1}>
              {labelForCategory(category)}
            </Text>
            <Text style={[styles.rollupCount, isSelected && styles.rollupTextActive]}>{count}</Text>
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
  plannedCount,
  tileWidth,
}: {
  action: CampaignActionV2;
  isDisabled: boolean;
  isSelected: boolean;
  onPress: () => void;
  plannedCount: number;
  tileWidth: DimensionValue;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.actionTile,
        { width: tileWidth },
        action.legality === 'gray' && styles.actionTileGray,
        action.legality === 'illegal' && styles.actionTileIllegal,
        plannedCount > 0 && styles.actionTilePlanned,
        isSelected && styles.actionTileSelected,
        isDisabled && styles.actionTileDisabled,
      ]}
    >
      {plannedCount > 0 ? (
        <View style={styles.plannedMark}>
          <Text style={styles.plannedMarkText}>V planu{plannedCount > 1 ? ` x${plannedCount}` : ''}</Text>
        </View>
      ) : null}
      <View style={[styles.tileRail, action.legality !== 'clean' && styles.tileRailRisk]} />
      <View style={styles.tileContent}>
        <View style={styles.tileTop}>
          <View style={[styles.tileIcon, action.legality !== 'clean' && styles.tileIconDanger, isSelected && styles.tileIconSelected]}>
            <Text style={[styles.tileIconText, isSelected && styles.tileIconTextSelected]}>{iconForCategory(action.category)}</Text>
          </View>
          <View style={styles.tileTitleWrap}>
            <Text style={[styles.tileCategory, isSelected && styles.tileCategorySelected]} numberOfLines={1}>
              {labelForCategory(action.category).toUpperCase()} / {action.legality.toUpperCase()}
            </Text>
            <Text style={[styles.tileTitle, isSelected && styles.tileTitleSelected]} numberOfLines={2}>
              {action.name}
            </Text>
          </View>
        </View>

        <Text style={[styles.tileDescription, isSelected && styles.tileDescriptionSelected]} numberOfLines={2}>
          {safeDescription(action)}
        </Text>

        <View style={styles.tileStats}>
          <TileBadge label="Cena" value={`${action.cost.toFixed(1)}M`} selected={isSelected} />
          <TileBadge label="Lidr" value={action.leaderTimeCost.toFixed(2)} selected={isSelected} />
          <ImpactTag label={action.preview.riskLabel ?? riskLabel(action)} selected={isSelected} tone={action.legality !== 'clean' ? 'danger' : undefined} />
        </View>
      </View>
    </Pressable>
  );
}

function ActionDrawer({
  action,
  canExecute,
  executionMessage,
  issues,
  onClose,
  onExecute,
  onRemovePlanned,
  onSelectIssue,
  onSelectTarget,
  plannedCount,
  previewLabel,
  regionalTargetSummary,
  recommendedRegions,
  selectedIssueId,
  selectedRegionId,
}: {
  action: CampaignActionV2;
  canExecute: boolean;
  executionMessage?: string;
  issues: { id: string; name: string; shortName?: string }[];
  onClose: () => void;
  onExecute: () => void;
  onRemovePlanned: () => void;
  onSelectIssue: (issueId: string) => void;
  onSelectTarget: (regionId: RegionId) => void;
  plannedCount: number;
  previewLabel?: string;
  regionalTargetSummary?: string;
  recommendedRegions: typeof displayRegions;
  selectedIssueId: string;
  selectedRegionId?: RegionId;
}) {
  return (
    <View style={styles.drawer}>
      <View style={styles.drawerHeader}>
        <View style={[styles.tileIcon, action.legality !== 'clean' && styles.tileIconDanger]}>
          <Text style={styles.tileIconText}>{iconForCategory(action.category)}</Text>
        </View>
        <View style={styles.drawerTitleWrap}>
          <Text style={styles.drawerCategory}>
            {labelForCategory(action.category).toUpperCase()} / {action.legality.toUpperCase()} / {action.target.scope.toUpperCase()}
          </Text>
          <Text style={styles.drawerTitle} numberOfLines={2}>
            {action.name}
          </Text>
        </View>
        <Pressable onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.detailContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.drawerDescription}>{safeDescription(action)}</Text>

        {action.legality !== 'clean' ? (
          <View style={styles.illegalWarning}>
            <Text style={styles.illegalTitle}>{action.legality === 'illegal' ? 'Ilegalni abstraktni mechanika' : 'Seda zona'}</Text>
            <Text style={styles.illegalText}>
              Dopad je modelovan pres odhaleni, pravni expozici, backlash, reputaci a koalicni toxicitu.
            </Text>
          </View>
        ) : null}

        <View style={styles.drawerStats}>
          <PanelStat label="Rozpocet" value={`${action.cost.toFixed(1)}M Kc`} />
          <PanelStat label="Cas lidra" value={`${action.leaderTimeCost.toFixed(2)} tydne`} />
          <PanelStat label="Stab" value={`${action.staffCost.toFixed(2)} tydne`} />
          <PanelStat label="Eticke riziko" value={`${Math.round(action.ethicalRisk * 100)}%`} />
        </View>

        <View style={styles.impactPanel}>
          <Text style={styles.blockTitle}>Dopady</Text>
          <View style={styles.impactList}>
            {effectTags(action).map((tag) => (
              <ImpactTag key={tag} label={tag} selected={false} />
            ))}
          </View>
        </View>

        {action.target.scope === 'region' ? (
          <View style={styles.targetSection}>
            <Text style={styles.blockTitle}>Cilovy region</Text>
            <View style={styles.recommendedList}>
              {recommendedRegions.map((region) => {
                const isSelected = region.id === selectedRegionId;
                return (
                  <Pressable key={region.id} onPress={() => onSelectTarget(region.id)} style={[styles.targetCard, isSelected && styles.targetCardSelected]}>
                    <Text style={[styles.targetName, isSelected && styles.targetNameSelected]} numberOfLines={1}>
                      {region.name}
                    </Text>
                    <Text style={[styles.targetNote, isSelected && styles.targetNoteSelected]}>
                      {isSelected ? 'vybrany cil' : 'doporuceny prekryv'}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        ) : null}

        {action.target.scope === 'issue' ? (
          <View style={styles.targetSection}>
            <Text style={styles.blockTitle}>Cilove tema</Text>
            <View style={styles.issueList}>
              {issues.map((issue) => {
                const isSelected = issue.id === selectedIssueId;
                return (
                  <Pressable key={issue.id} onPress={() => onSelectIssue(issue.id)} style={[styles.issueTarget, isSelected && styles.targetCardSelected]}>
                    <Text style={[styles.targetName, isSelected && styles.targetNameSelected]} numberOfLines={1}>
                      {issue.shortName ?? issue.name}
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

        {executionMessage ? <Text style={styles.executionMessage}>{executionMessage}</Text> : null}
      </ScrollView>

      <View style={styles.drawerActions}>
        {plannedCount > 0 ? (
          <Pressable onPress={onRemovePlanned} style={styles.removeFromPlanButton}>
            <Text style={styles.removeFromPlanText}>Odebrat z planu</Text>
          </Pressable>
        ) : null}
        <Pressable disabled={!canExecute} onPress={onExecute} style={[styles.executeButton, !canExecute && styles.executeButtonDisabled]}>
          <Text style={styles.executeButtonText}>Pridat do planu</Text>
        </Pressable>
      </View>
    </View>
  );
}

function CompactStat({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.compactStat}>
      <Text style={styles.compactStatLabel}>{label}</Text>
      <Text style={styles.compactStatValue}>{value}</Text>
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

function countByCategory(actions: CampaignActionV2[]) {
  const counts = { all: actions.length } as Record<CategoryFilter, number>;
  for (const action of actions) {
    counts[action.category] = (counts[action.category] ?? 0) + 1;
  }
  return counts;
}

function iconForCategory(category: CampaignActionCategory) {
  return categoryIcons[category] ?? '??';
}

function labelForCategory(category: CategoryFilter) {
  return categoryLabels[category] ?? category;
}

function effectTags(action: CampaignActionV2) {
  const effects = action.effects;
  return [
    effects.fieldAmplitude || effects.latentCenterShift || effects.latentWidthShift ? 'pole strany' : undefined,
    effects.issuePositionShift || effects.issueSalienceShift || effects.framingChange ? 'temata' : undefined,
    effects.turnoutModifier || effects.demobilizationModifier ? 'mobilizace' : undefined,
    effects.reputationShift ? 'reputace' : undefined,
    effects.regionOrganizationShift ? 'organizace' : undefined,
    effects.informationQualityShift ? 'informacni kvalita' : undefined,
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
    return 'Vysoko rizikova herni mechanika modelovana pres odhaleni, pravni expozici, backlash a ztratu integrity.';
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
  actionTile: {
    backgroundColor: colors.surface,
    borderColor: '#C7D1DE',
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 146,
    overflow: 'hidden',
  },
  actionTileDisabled: {
    opacity: 0.52,
  },
  actionTileGray: {
    borderColor: '#C8A24B',
  },
  actionTileIllegal: {
    borderColor: colors.danger,
  },
  actionTilePlanned: {
    borderColor: colors.selected,
    borderWidth: 2,
  },
  actionTileSelected: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
    borderWidth: 2,
  },
  blockTitle: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
  },
  catalogPanel: {
    flex: 1,
  },
  closeButton: {
    alignItems: 'center',
    backgroundColor: colors.surfaceMuted,
    borderRadius: 8,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  closeButtonText: {
    color: colors.primaryDark,
    fontSize: 13,
    fontWeight: '900',
  },
  commandBar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  compactStat: {
    alignItems: 'flex-end',
    minWidth: 70,
  },
  compactStatLabel: {
    color: colors.textMuted,
    fontSize: 9,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  compactStatValue: {
    color: colors.primaryDark,
    fontSize: 15,
    fontWeight: '900',
    marginTop: 1,
  },
  detailContent: {
    paddingBottom: 14,
  },
  drawer: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderLeftWidth: 1,
    bottom: 0,
    padding: 14,
    position: 'absolute',
    right: 0,
    top: 0,
    width: 380,
    zIndex: 3,
  },
  drawerCategory: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
  },
  drawerDescription: {
    color: colors.textMuted,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
    marginTop: 12,
  },
  drawerHeader: {
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    gap: 9,
    paddingBottom: 12,
  },
  drawerScrim: {
    backgroundColor: 'rgba(11,46,79,0.12)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
  },
  drawerActions: {
    gap: 7,
  },
  drawerStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 12,
  },
  drawerTitle: {
    color: colors.primaryDark,
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 23,
    marginTop: 2,
  },
  drawerTitleWrap: {
    flex: 1,
  },
  executeButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderRadius: 8,
    marginTop: 10,
    paddingVertical: 12,
  },
  executeButtonDisabled: {
    backgroundColor: colors.textMuted,
  },
  executeButtonText: {
    color: colors.textOnPrimary,
    fontSize: 14,
    fontWeight: '900',
  },
  finishWeekButton: {
    alignItems: 'center',
    backgroundColor: colors.accent,
    borderColor: colors.selected,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 36,
    paddingHorizontal: 12,
  },
  finishWeekText: {
    color: colors.textOnPrimary,
    fontSize: 12,
    fontWeight: '900',
  },
  executionMessage: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
    marginTop: 10,
  },
  filterArrow: {
    color: colors.selected,
    fontSize: 14,
    fontWeight: '900',
    marginLeft: 4,
  },
  filterToggle: {
    alignItems: 'center',
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  filterToggleLabel: {
    color: '#BFD3E6',
    fontSize: 10,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  filterToggleValue: {
    color: colors.textOnPrimary,
    fontSize: 13,
    fontWeight: '900',
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
  issueList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
    marginTop: 8,
  },
  issueTarget: {
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 7,
    width: '48.5%',
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
  quickStats: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
  },
  plannedMark: {
    backgroundColor: colors.selected,
    borderBottomLeftRadius: 8,
    borderColor: colors.primaryDark,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    right: -1,
    top: -1,
    zIndex: 1,
  },
  plannedMarkText: {
    color: colors.primaryDark,
    fontSize: 9,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  removeFromPlanButton: {
    alignItems: 'center',
    backgroundColor: colors.primaryDark,
    borderColor: colors.primary,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 40,
  },
  removeFromPlanText: {
    color: colors.textOnPrimary,
    fontSize: 13,
    fontWeight: '900',
  },
  recommendedList: {
    gap: 7,
    marginTop: 8,
  },
  rollup: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    padding: 7,
  },
  rollupCount: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '900',
  },
  rollupItem: {
    alignItems: 'center',
    backgroundColor: colors.surfaceMuted,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 6,
    minWidth: 92,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  rollupItemActive: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.selected,
  },
  rollupText: {
    color: colors.primaryDark,
    flex: 1,
    fontSize: 11,
    fontWeight: '900',
  },
  rollupTextActive: {
    color: colors.textOnPrimary,
  },
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'row',
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
  tileContent: {
    flex: 1,
    padding: 10,
    paddingLeft: 13,
  },
  tileDescription: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
    marginTop: 8,
  },
  tileDescriptionSelected: {
    color: '#DCEAF7',
  },
  tileGrid: {
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    gap: 8,
    paddingBottom: 8,
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
  tileRail: {
    backgroundColor: colors.selected,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 4,
  },
  tileRailRisk: {
    backgroundColor: colors.accent,
  },
  tileStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginTop: 9,
  },
  tileTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 18,
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
  workspace: {
    flex: 1,
    gap: 8,
    padding: 8,
  },
});
