const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'src', 'assets', 'maps', 'czech-regions.json');
const outputPath = path.join(
  __dirname,
  '..',
  'src',
  'assets',
  'maps',
  'czech-regions.simplified.json',
);
const tolerance = 0.0025;

function getSquaredDistance(point, otherPoint) {
  const deltaX = point[0] - otherPoint[0];
  const deltaY = point[1] - otherPoint[1];

  return deltaX * deltaX + deltaY * deltaY;
}

function getSquaredSegmentDistance(point, start, end) {
  let x = start[0];
  let y = start[1];
  let deltaX = end[0] - x;
  let deltaY = end[1] - y;

  if (deltaX !== 0 || deltaY !== 0) {
    const t = ((point[0] - x) * deltaX + (point[1] - y) * deltaY) / (deltaX * deltaX + deltaY * deltaY);

    if (t > 1) {
      x = end[0];
      y = end[1];
    } else if (t > 0) {
      x += deltaX * t;
      y += deltaY * t;
    }
  }

  deltaX = point[0] - x;
  deltaY = point[1] - y;

  return deltaX * deltaX + deltaY * deltaY;
}

function simplifyDouglasPeucker(points, squaredTolerance) {
  const lastIndex = points.length - 1;
  const markers = new Uint8Array(points.length);
  const stack = [[0, lastIndex]];

  markers[0] = 1;
  markers[lastIndex] = 1;

  while (stack.length > 0) {
    const [first, last] = stack.pop();
    let maxSquaredDistance = 0;
    let splitIndex = 0;

    for (let index = first + 1; index < last; index += 1) {
      const squaredDistance = getSquaredSegmentDistance(points[index], points[first], points[last]);

      if (squaredDistance > maxSquaredDistance) {
        splitIndex = index;
        maxSquaredDistance = squaredDistance;
      }
    }

    if (maxSquaredDistance > squaredTolerance) {
      markers[splitIndex] = 1;
      stack.push([first, splitIndex], [splitIndex, last]);
    }
  }

  return points.filter((_, index) => markers[index] === 1);
}

function simplifyRadialDistance(points, squaredTolerance) {
  let previousPoint = points[0];
  const simplified = [previousPoint];

  for (let index = 1; index < points.length; index += 1) {
    const point = points[index];

    if (getSquaredDistance(point, previousPoint) > squaredTolerance) {
      simplified.push(point);
      previousPoint = point;
    }
  }

  if (previousPoint !== points[points.length - 1]) {
    simplified.push(points[points.length - 1]);
  }

  return simplified;
}

function simplifyRing(ring) {
  if (ring.length <= 8) {
    return ring;
  }

  const first = ring[0];
  const last = ring[ring.length - 1];
  const isClosed = first[0] === last[0] && first[1] === last[1];
  const openRing = isClosed ? ring.slice(0, -1) : ring;
  const squaredTolerance = tolerance * tolerance;
  const radial = simplifyRadialDistance(openRing, squaredTolerance);
  const simplified = simplifyDouglasPeucker(radial, squaredTolerance);
  const closed = isClosed ? [...simplified, simplified[0]] : simplified;

  return closed.length >= 4 ? closed : ring;
}

function simplifyGeometry(geometry) {
  if (geometry.type === 'Polygon') {
    return {
      ...geometry,
      coordinates: geometry.coordinates.map(simplifyRing),
    };
  }

  if (geometry.type === 'MultiPolygon') {
    return {
      ...geometry,
      coordinates: geometry.coordinates.map((polygon) => polygon.map(simplifyRing)),
    };
  }

  return geometry;
}

function countPositions(coordinates) {
  if (Array.isArray(coordinates) && typeof coordinates[0] === 'number') {
    return 1;
  }

  return coordinates.reduce((sum, item) => sum + countPositions(item), 0);
}

const source = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const simplified = {
  ...source,
  features: source.features.map((feature) => ({
    ...feature,
    geometry: simplifyGeometry(feature.geometry),
  })),
};

fs.writeFileSync(outputPath, `${JSON.stringify(simplified)}\n`);

const originalPoints = source.features.reduce(
  (sum, feature) => sum + countPositions(feature.geometry.coordinates),
  0,
);
const simplifiedPoints = simplified.features.reduce(
  (sum, feature) => sum + countPositions(feature.geometry.coordinates),
  0,
);
const originalBytes = fs.statSync(inputPath).size;
const simplifiedBytes = fs.statSync(outputPath).size;

console.log(
  JSON.stringify(
    {
      originalBytes,
      originalPoints,
      reduction: `${Math.round((1 - simplifiedBytes / originalBytes) * 100)}%`,
      simplifiedBytes,
      simplifiedPoints,
    },
    null,
    2,
  ),
);
