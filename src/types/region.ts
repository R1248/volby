export type RegionId =
  | 'praha'
  | 'stredocesky'
  | 'jihocesky'
  | 'plzensky'
  | 'karlovarsky'
  | 'ustecky'
  | 'liberecky'
  | 'kralovehradecky'
  | 'pardubicky'
  | 'vysocina'
  | 'jihomoravsky'
  | 'olomoucky'
  | 'zlinsky'
  | 'moravskoslezsky';

export type Region = {
  id: RegionId;
  name: string;
  support: number;
  turnout: number;
  organizationStrength: number;
  shortLabel: string;
};
