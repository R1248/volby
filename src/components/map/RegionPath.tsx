import { G, Path, Text as SvgText } from 'react-native-svg';

import { colors } from '@/src/theme/colors';
import type { RegionId } from '@/src/types/region';
import type { ProjectedRegion } from '@/src/utils/mapProjection';

type RegionPathProps = {
  fillColor: string;
  isSelected: boolean;
  onPress: (regionId: RegionId) => void;
  projectedRegion: ProjectedRegion;
};

export function RegionPath({ fillColor, isSelected, onPress, projectedRegion }: RegionPathProps) {
  const handlePress = () => onPress(projectedRegion.id);

  return (
    <G onPress={handlePress}>
      <Path
        d={projectedRegion.path}
        fill={fillColor}
        onPress={handlePress}
        stroke={isSelected ? colors.primaryDark : colors.mapStroke}
        strokeLinejoin="round"
        strokeWidth={isSelected ? 3.4 : projectedRegion.id === 'praha' ? 2.2 : 1.2}
      />
      <SvgText
        fill={colors.primaryDark}
        fontSize={isSelected ? 15 : 13}
        fontWeight="800"
        onPress={handlePress}
        textAnchor="middle"
        x={projectedRegion.labelX}
        y={projectedRegion.labelY}
      >
        {projectedRegion.region.shortLabel}
      </SvgText>
    </G>
  );
}
