import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { RegionDetailDrawer } from '../src/components/dashboard/RegionDetailDrawer';
import { Sidebar } from '../src/components/dashboard/Sidebar';
import { StatusStrip } from '../src/components/dashboard/StatusStrip';
import { CzechiaMap } from '../src/components/map/CzechiaMap';
import { regionCampaignData } from '../src/data/campaignMock';
import { regions } from '../src/data/regions';
import { useGameStore } from '../src/store/useGameStore';
import { colors } from '../src/theme/colors';
import type { RegionId } from '../src/types/region';

type MapMode = 'leadingParty' | 'mySupport';

export default function MapScreen() {
  const selectedRegionId = useGameStore((state) => state.selectedRegionId);
  const selectRegion = useGameStore((state) => state.selectRegion);
  const gameState = useGameStore((state) => state.gameState);
  const [mapMode, setMapMode] = useState<MapMode>('mySupport');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const selectedRegion = regions.find((region) => region.id === selectedRegionId);
  const partyColors = useMemo<Map<string, string>>(
    () => new Map(gameState.parties.map((party) => [party.id, party.color])),
    [gameState.parties],
  );
  const getRegionFillColor = (regionId: RegionId) => {
    const data = regionCampaignData[regionId];
    const modelSupport = gameState.regionalSupport[regionId];

    if (mapMode === 'leadingParty') {
      const leadingPartyId = modelSupport
        ? gameState.parties.reduce(
            (leader, party) => (modelSupport[party.id] ?? 0) > (modelSupport[leader] ?? 0) ? party.id : leader,
            gameState.parties[0]?.id ?? data.leadingPartyId,
          )
        : data.leadingPartyId;

      return partyColors.get(leadingPartyId) ?? colors.region;
    }

    return getSupportColor((modelSupport?.player ?? data.partySupport.player / 100) * 100);
  };
  const handleRegionPress = (regionId: RegionId) => {
    selectRegion(regionId);
    setIsDrawerOpen(true);
  };

  return (
    <View style={styles.screen}>
      <Sidebar activeItem="Mapa" />

      <View style={styles.workspace}>
        <StatusStrip />

        <View style={styles.mapCard}>
          <View style={styles.mapStage}>
            <CzechiaMap
              getRegionFillColor={getRegionFillColor}
              onRegionPress={handleRegionPress}
              selectedRegionId={isDrawerOpen ? selectedRegionId : undefined}
            />
            <View style={styles.mapToggleOverlay}>
              <MapViewToggle mode={mapMode} onChange={setMapMode} />
            </View>
            <View style={styles.sourceOverlay}>
              <Text style={styles.sourceText}>Zdroj: veřejnoprávní modelový průzkum</Text>
            </View>
            {mapMode === 'leadingParty' ? (
              <View style={styles.legendOverlay}>
                {gameState.parties.map((party) => (
                  <LegendSwatch color={party.color} key={party.id} label={party.shortName} />
                ))}
              </View>
            ) : null}
          </View>
        </View>

        <RegionDetailDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          region={selectedRegion}
        />
      </View>
    </View>
  );
}

const mapModeOptions: { label: string; mode: MapMode }[] = [
  { label: 'Podpora', mode: 'mySupport' },
  { label: 'Lídr', mode: 'leadingParty' },
];

function MapViewToggle({
  mode,
  onChange,
}: {
  mode: MapMode;
  onChange: (mode: MapMode) => void;
}) {
  return (
    <View style={styles.toggle}>
      {mapModeOptions.map((option) => {
        const isActive = option.mode === mode;

        return (
          <Pressable
            key={option.mode}
            onPress={() => onChange(option.mode)}
            style={[styles.toggleOption, isActive && styles.toggleOptionActive]}
          >
            <Text style={[styles.toggleText, isActive && styles.toggleTextActive]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function LegendSwatch({ color, label }: { color: string; label: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendSwatch, { backgroundColor: color }]} />
      <Text style={styles.legendLabel}>{label}</Text>
    </View>
  );
}

function getSupportColor(value: number) {
  if (value >= 40) {
    return '#174A7C';
  }

  if (value >= 36) {
    return '#3F78AA';
  }

  if (value >= 32) {
    return '#6FA3D2';
  }

  return '#B9D2EA';
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
    flex: 1,
    flexDirection: 'row',
  },
  workspace: {
    flex: 1,
    gap: 10,
    padding: 10,
    position: 'relative',
  },
  mapCard: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    padding: 10,
  },
  mapStage: {
    flex: 1,
    position: 'relative',
  },
  mapToggleOverlay: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  legendOverlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.82)',
    borderRadius: 8,
    bottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    left: 10,
    paddingHorizontal: 9,
    paddingVertical: 7,
    position: 'absolute',
  },
  sourceOverlay: {
    backgroundColor: 'rgba(255,255,255,0.86)',
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    bottom: 10,
    paddingHorizontal: 9,
    paddingVertical: 6,
    position: 'absolute',
    right: 10,
  },
  sourceText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '800',
  },
  legendItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  legendSwatch: {
    borderColor: colors.border,
    borderRadius: 4,
    borderWidth: 1,
    height: 12,
    width: 18,
  },
  legendLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '800',
  },
  toggle: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    padding: 3,
  },
  toggleOption: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  toggleOptionActive: {
    backgroundColor: colors.primary,
  },
  toggleText: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '800',
  },
  toggleTextActive: {
    color: colors.textOnPrimary,
  },
});
