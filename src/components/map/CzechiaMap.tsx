import { useMemo, useState } from 'react';
import { GestureResponderEvent, LayoutChangeEvent, Pressable, StyleSheet, View } from 'react-native';
import Svg from 'react-native-svg';
import type { FeatureCollection, Geometry } from 'geojson';

import czechRegionsGeoJson from '../../assets/maps/czech-regions.simplified.json';
import { RegionPath } from '@/src/components/map/RegionPath';
import { regions } from '@/src/data/regions';
import { colors } from '@/src/theme/colors';
import type { RegionId } from '@/src/types/region';
import { findRegionAtPoint, MAP_VIEW_BOX, projectCzechRegions } from '@/src/utils/mapProjection';

const MAP_PADDING = 12;

type CzechiaMapProps = {
  getRegionFillColor?: (regionId: RegionId) => string;
  onRegionPress: (regionId: RegionId) => void;
  selectedRegionId?: RegionId;
};

export function CzechiaMap({
  getRegionFillColor = () => colors.region,
  onRegionPress,
  selectedRegionId,
}: CzechiaMapProps) {
  const [layoutSize, setLayoutSize] = useState({ height: 0, width: 0 });
  const projectedRegions = useMemo(
    () =>
      projectCzechRegions(
        czechRegionsGeoJson as FeatureCollection<Geometry, Record<string, unknown>>,
        regions,
      ),
    [],
  );
  const visibleRegions = useMemo(
    () =>
      [...projectedRegions].sort((a, b) => {
        if (a.id === 'praha') {
          return 1;
        }

        if (b.id === 'praha') {
          return -1;
        }

        return Number(a.id === selectedRegionId) - Number(b.id === selectedRegionId);
      }),
    [projectedRegions, selectedRegionId],
  );
  const handleLayout = (event: LayoutChangeEvent) => {
    const { height, width } = event.nativeEvent.layout;

    setLayoutSize({ height, width });
  };
  const handleMapPress = (event: GestureResponderEvent) => {
    const { locationX, locationY } = event.nativeEvent;
    const contentWidth = layoutSize.width - MAP_PADDING * 2;
    const contentHeight = layoutSize.height - MAP_PADDING * 2;

    if (contentWidth <= 0 || contentHeight <= 0) {
      return;
    }

    const scale = Math.min(contentWidth / MAP_VIEW_BOX.width, contentHeight / MAP_VIEW_BOX.height);
    const offsetX = MAP_PADDING + (contentWidth - MAP_VIEW_BOX.width * scale) / 2;
    const offsetY = MAP_PADDING + (contentHeight - MAP_VIEW_BOX.height * scale) / 2;
    const viewBoxX = (locationX - offsetX) / scale;
    const viewBoxY = (locationY - offsetY) / scale;
    const regionId = findRegionAtPoint(projectedRegions, viewBoxX, viewBoxY);

    if (regionId) {
      onRegionPress(regionId);
    }
  };

  return (
    <View onLayout={handleLayout} style={styles.wrapper}>
      <Svg
        height="100%"
        pointerEvents="none"
        viewBox={`0 0 ${MAP_VIEW_BOX.width} ${MAP_VIEW_BOX.height}`}
        width="100%"
      >
        {visibleRegions.map((projectedRegion) => (
          <RegionPath
            fillColor={getRegionFillColor(projectedRegion.id)}
            isSelected={projectedRegion.id === selectedRegionId}
            key={projectedRegion.id}
            onPress={onRegionPress}
            projectedRegion={projectedRegion}
          />
        ))}
      </Svg>
      <Pressable onPressIn={handleMapPress} style={styles.hitLayer} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.mapBackground,
    borderColor: colors.border,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    minHeight: 320,
    overflow: 'hidden',
    padding: MAP_PADDING,
    position: 'relative',
  },
  hitLayer: {
    ...StyleSheet.absoluteFillObject,
  },
});
