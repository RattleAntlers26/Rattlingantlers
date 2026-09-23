export type DeerType = 'Buck' | 'Doe' | 'Fawn' | 'Unknown';

export type Behavior =
  | 'Feeding'
  | 'Traveling'
  | 'Browsing'
  | 'Bedding'
  | 'Chasing'
  | 'Seeking'
  | 'Fighting'
  | 'Scraping'
  | 'Rubbing'
  | 'Alert'
  | 'Grooming'
  | 'Drinking'
  | 'Calling'
  | 'Other'
  | 'Unknown';

export const behaviors: Behavior[] = [
  'Feeding',
  'Traveling',
  'Browsing',
  'Bedding',
  'Chasing',
  'Seeking',
  'Fighting',
  'Scraping',
  'Rubbing',
  'Alert',
  'Grooming',
  'Drinking',
  'Calling',
  'Other',
  'Unknown',
];

export const doeAges = [
  'Fawn',
  'Yearling',
  '2½',
  '3½',
  '4½',
  '5½',
  'Unknown',
];

export const buckAges = [
  'Fawn',
  'Yearling',
  '2½',
  '3½',
  '4½',
  '5½',
  'Unknown',
];

export const huntMethods = [
  'Stand hunting',
  'Ground blind',
  'Still hunting',
  'Spot & stalk',
  'Saddle hunting',
  'Other',
];

export type Observation = {
  id: string;
  type: DeerType;
  behavior: Behavior;
  age?: string;
  observedAt: string;
  count: number;
};

export type Hunt = {
  id: string;
  property: string;
  stand: string;
  startedAt: string;
  method: string;
  observations: Observation[];
  active: boolean;
};

export const seedHunt: Hunt = {
  id: 'demo',
  property: 'My Property',
  stand: 'North Ridge',
  startedAt: new Date().toISOString(),
  method: 'Stand hunting',
  observations: [],
  active: false,
};