import { geoMercator, geoPath } from 'd3-geo';
import type { Feature, FeatureCollection, Geometry, MultiPolygon, Polygon, Position } from 'geojson';

import type { Region, RegionId } from '@/src/types/region';

export const MAP_VIEW_BOX = {
  height: 492,
  padding: 18,
  width: 814,
};

type CzechRegionFeature = Feature<Geometry, Record<string, unknown>> & {
  name?: string;
};

export type ProjectedRegion = {
  bounds: {
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
  };
  hitRings: [number, number][][];
  id: RegionId;
  labelX: number;
  labelY: number;
  path: string;
  region: Region;
};

const geoJsonNameToRegionId: Record<string, RegionId> = {
  'Hlavní město Praha': 'praha',
  'Středočeský kraj': 'stredocesky',
  'Jihočeský kraj': 'jihocesky',
  'Plzeňský kraj': 'plzensky',
  'Karlovarský kraj': 'karlovarsky',
  'Ústecký kraj': 'ustecky',
  'Liberecký kraj': 'liberecky',
  'Královéhradecký kraj': 'kralovehradecky',
  'Pardubický kraj': 'pardubicky',
  'Kraj Vysočina': 'vysocina',
  'Jihomoravský kraj': 'jihomoravsky',
  'Olomoucký kraj': 'olomoucky',
  'Zlínský kraj': 'zlinsky',
  'Moravskoslezský kraj': 'moravskoslezsky',
};

let projectedRegionsCache: ProjectedRegion[] | undefined;

export function projectCzechRegions(
  featureCollection: FeatureCollection<Geometry, Record<string, unknown>>,
  regionMetadata: Region[],
): ProjectedRegion[] {
  if (projectedRegionsCache) {
    return projectedRegionsCache;
  }

  const fixedFeatureCollection = fixFeatureCollectionWinding(featureCollection);
  const projection = geoMercator().fitExtent(
    [
      [MAP_VIEW_BOX.padding, MAP_VIEW_BOX.padding],
      [MAP_VIEW_BOX.width - MAP_VIEW_BOX.padding, MAP_VIEW_BOX.height - MAP_VIEW_BOX.padding],
    ],
    fixedFeatureCollection,
  );
  const pathGenerator = geoPath(projection);
  const regionsById = new Map(regionMetadata.map((region) => [region.id, region]));

  projectedRegionsCache = fixedFeatureCollection.features
    .map((feature) => {
      const regionId = getRegionIdFromFeature(feature as CzechRegionFeature);
      const region = regionId ? regionsById.get(regionId) : undefined;
      const path = pathGenerator(feature);

      if (!regionId || !region || !path) {
        return undefined;
      }

      const [labelX, labelY] = pathGenerator.centroid(feature);
      const hitRings = simplifyRings(projectGeometryRings(feature.geometry, projection));

      return {
        bounds: getRingsBounds(hitRings),
        hitRings,
        id: regionId,
        labelX,
        labelY,
        path,
        region,
      };
    })
    .filter((region): region is ProjectedRegion => Boolean(region))
    .sort(
      (a, b) =>
        Number(a.id === 'praha') - Number(b.id === 'praha') ||
        regionMetadata.findIndex((region) => region.id === a.id) -
        regionMetadata.findIndex((region) => region.id === b.id),
    );

  return projectedRegionsCache;
}

function fixFeatureCollectionWinding(
  featureCollection: FeatureCollection<Geometry, Record<string, unknown>>,
): FeatureCollection<Geometry, Record<string, unknown>> {
  return {
    ...featureCollection,
    features: featureCollection.features.map((feature) => ({
      ...feature,
      geometry: fixGeometryWinding(feature.geometry),
    })),
  };
}

function fixGeometryWinding(geometry: Geometry): Geometry {
  if (geometry.type === 'Polygon') {
    return {
      ...geometry,
      coordinates: geometry.coordinates.map(reverseRing),
    } satisfies Polygon;
  }

  if (geometry.type === 'MultiPolygon') {
    return {
      ...geometry,
      coordinates: geometry.coordinates.map((polygon) => polygon.map(reverseRing)),
    } satisfies MultiPolygon;
  }

  return geometry;
}

function reverseRing<T extends Position>(ring: T[]): T[] {
  return [...ring].reverse();
}

function projectGeometryRings(
  geometry: Geometry,
  projection: ReturnType<typeof geoMercator>,
): [number, number][][] {
  if (geometry.type === 'Polygon') {
    return geometry.coordinates.map((ring) => projectRing(ring, projection));
  }

  if (geometry.type === 'MultiPolygon') {
    return geometry.coordinates.flatMap((polygon) =>
      polygon.map((ring) => projectRing(ring, projection)),
    );
  }

  return [];
}

function projectRing(
  ring: Position[],
  projection: ReturnType<typeof geoMercator>,
): [number, number][] {
  return ring
    .map((position) => projection([position[0], position[1]]))
    .filter((point): point is [number, number] => Boolean(point));
}

export function findRegionAtPoint(
  projectedRegions: ProjectedRegion[],
  x: number,
  y: number,
): RegionId | undefined {
  const region = [...projectedRegions]
    .reverse()
    .find((projectedRegion) => isPointInRegion(projectedRegion, x, y));

  return region?.id;
}

function isPointInRegion(projectedRegion: ProjectedRegion, x: number, y: number) {
  if (
    x < projectedRegion.bounds.minX ||
    x > projectedRegion.bounds.maxX ||
    y < projectedRegion.bounds.minY ||
    y > projectedRegion.bounds.maxY
  ) {
    return false;
  }

  return projectedRegion.hitRings.reduce(
    (isInside, ring) => (isPointInRing(ring, x, y) ? !isInside : isInside),
    false,
  );
}

function simplifyRings(rings: [number, number][][]): [number, number][][] {
  return rings.map((ring) => simplifyRing(ring, 2.6));
}

function simplifyRing(ring: [number, number][], minDistance: number): [number, number][] {
  if (ring.length <= 24) {
    return ring;
  }

  const simplified = ring.filter((point, index) => {
    if (index === 0 || index === ring.length - 1) {
      return true;
    }

    const previous = ring[index - 1];
    const next = ring[index + 1];

    return (
      getSquaredDistance(point, previous) >= minDistance * minDistance ||
      getSquaredDistance(point, next) >= minDistance * minDistance
    );
  });

  return simplified.length >= 4 ? simplified : ring;
}

function getSquaredDistance([x, y]: [number, number], [nextX, nextY]: [number, number]) {
  return (nextX - x) ** 2 + (nextY - y) ** 2;
}

function getRingsBounds(rings: [number, number][][]) {
  return rings.flat().reduce(
    (bounds, [x, y]) => ({
      maxX: Math.max(bounds.maxX, x),
      maxY: Math.max(bounds.maxY, y),
      minX: Math.min(bounds.minX, x),
      minY: Math.min(bounds.minY, y),
    }),
    {
      maxX: Number.NEGATIVE_INFINITY,
      maxY: Number.NEGATIVE_INFINITY,
      minX: Number.POSITIVE_INFINITY,
      minY: Number.POSITIVE_INFINITY,
    },
  );
}

function isPointInRing(ring: [number, number][], x: number, y: number) {
  let isInside = false;

  for (let index = 0, previousIndex = ring.length - 1; index < ring.length; previousIndex = index++) {
    const [pointX, pointY] = ring[index];
    const [previousPointX, previousPointY] = ring[previousIndex];
    const intersects =
      pointY > y !== previousPointY > y &&
      x < ((previousPointX - pointX) * (y - pointY)) / (previousPointY - pointY) + pointX;

    if (intersects) {
      isInside = !isInside;
    }
  }

  return isInside;
}

function getRegionIdFromFeature(feature: CzechRegionFeature): RegionId | undefined {
  const featureName = feature.name ?? getStringProperty(feature, 'name') ?? getStringProperty(feature, 'NAZ_CZNUTS3');

  return featureName ? geoJsonNameToRegionId[featureName] : undefined;
}

function getStringProperty(feature: CzechRegionFeature, key: string) {
  const value = feature.properties?.[key];

  return typeof value === 'string' ? value : undefined;
}
