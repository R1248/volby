import { actionCost, actionRisks, type ActionLegality, type ActionTemplate } from './actions/actionTypes';

export type CampaignActionTemplate = ActionTemplate & {
  placement: 'campaign';
  availability: 'player_initiated';
};

const campaignActionTemplateDefinitions = [
  {
    id: "regionalMeeting",
    name: "Regionalni meeting",
    description: "Regionalni meeting",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "localTownHall",
    name: "Lokalni town hall",
    description: "Lokalni town hall / verejna debata",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "republicTour",
    name: "Tour po republice",
    description: "Tour po republice",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "regionalRoadshow",
    name: "Regionalni roadshow",
    description: "Regionalni roadshow",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "leaderRegionVisit",
    name: "Vyjezd lidra do kraje",
    description: "Vyjezd lidra do kraje",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "expertTeamRegionVisit",
    name: "Vyjezd expertniho tymu do kraje",
    description: "Vyjezd expertniho tymu do kraje",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "schoolVisit",
    name: "Navsteva skoly",
    description: "Navsteva skoly",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "hospitalVisit",
    name: "Navsteva nemocnice / socialni sluzby",
    description: "Navsteva nemocnice / socialni sluzby",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "factoryVisit",
    name: "Navsteva tovarny / prumysloveho podniku",
    description: "Navsteva tovarny / prumysloveho podniku",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "farmingVisit",
    name: "Navsteva zemedelcu / venkova",
    description: "Navsteva zemedelcu / venkova",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "problemLocalityVisit",
    name: "Navsteva problemove lokality",
    description: "Navsteva problemove lokality",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "crisisSiteVisit",
    name: "Navsteva krizoveho mista",
    description: "Navsteva krizoveho mista",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "mayorsMeeting",
    name: "Setkani se starosty",
    description: "Setkani se starosty",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "entrepreneursRoundtable",
    name: "Kulaty stul s podnikateli",
    description: "Kulaty stul s podnikateli",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "unionsMeeting",
    name: "Debata s odbory / zamestnanci",
    description: "Debata s odbory / zamestnanci",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "seniorMeeting",
    name: "Setkani se seniory",
    description: "Setkani se seniory",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "studentMeeting",
    name: "Setkani se studenty",
    description: "Setkani se studenty",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "volunteersMeeting",
    name: "Setkani s dobrovolniky",
    description: "Setkani s dobrovolniky",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "regionalRoundtable",
    name: "Regionalni kulaty stul k lokalnimu problemu",
    description: "Regionalni kulaty stul k lokalnimu problemu",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "mobileStreetBooth",
    name: "Mobilni stanek ve meste",
    description: "Mobilni stanek ve meste",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "doorToDoor",
    name: "Door-to-door kampan",
    description: "Door-to-door kampan",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "leafletCampaign",
    name: "Letakova kampan",
    description: "Rozdavani letaku",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "paidCanvassers",
    name: "Najmuti externistu na kontaktni kampan",
    description: "Najmuti externistu na kontaktni kampan",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "petitionDrive",
    name: "Petice / podpisovka",
    description: "Petice / podpisovka",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "publicServiceAction",
    name: "Verejne prospesna akce",
    description: "Verejne prospesna akce",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "regionalOffice",
    name: "Regionalni kontaktni centrum / kancelar",
    description: "Regionalni kontaktni centrum / kancelar",
    category: "field",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["region", "segment", "issue"],
    requiredTargets: ["region"],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0.05,
      "leaderHours": 10,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "awareness": 0.02,
      "issueSalience": {
        "target": 0.05
      },
      "organization": {
        "regional": 0.02
      },
      "turnout": 0.008
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["field", "region"],
  },
  {
    id: "onlineAdCampaign",
    name: "Online reklamni kampan",
    description: "Obecna online kampan",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "socialMediaAds",
    name: "Reklama na socialnich sitich",
    description: "Placena reklama na socialnich sitich",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.1,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "leaderOrganicContent",
    name: "Organicky obsah lidra",
    description: "Organicky obsah lidra",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "videoClipCampaign",
    name: "Video spot",
    description: "Kratka videa / klipova kampan",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "thematicVideoSeries",
    name: "Tematicka serie videi",
    description: "Tematicka serie videi",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.07,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "regionalOnlineCampaign",
    name: "Regionalne cilena online kampan",
    description: "Regionalne cilena online kampan",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.09,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "segmentOnlineCampaign",
    name: "Segmentove cilena online kampan",
    description: "Segmentove cilena online kampan",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.12,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "microtargeting",
    name: "Mikrotargeting",
    description: "Mikrotargeting",
    category: "digital",
    legality: "gray",
    ethicalRisk: 0.45,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["digital", "grayZone"],
  },
  {
    id: "memeReactiveCampaign",
    name: "Reaktivni meme kampan",
    description: "Reaktivni meme kampan",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.18,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "rapidResponseDigital",
    name: "Digitalni rapid response tym",
    description: "Digitalni rapid response tym",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "communityManagementCivil",
    name: "Civilni moderovani socialnich siti",
    description: "Civilni moderovani socialnich siti",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.04,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "communityManagementConfrontational",
    name: "Konfrontacni moderovani socialnich siti",
    description: "Konfrontacni moderovani socialnich siti",
    category: "digital",
    legality: "gray",
    ethicalRisk: 0.35,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["digital", "grayZone"],
  },
  {
    id: "looseConflictCommunity",
    name: "Volnejsi konfliktni komunita",
    description: "Volnejsi konfliktni komunita",
    category: "digital",
    legality: "gray",
    ethicalRisk: 0.55,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["digital", "grayZone"],
  },
  {
    id: "hardModeration",
    name: "Tvrde mazani kontroverznich komentaru",
    description: "Tvrde mazani kontroverznich komentaru",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "influencerEndorsement",
    name: "Influencer endorsement",
    description: "Influencer endorsement",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.14,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "thematicInfluencer",
    name: "Spoluprace s tematickym influencerem",
    description: "Spoluprace s tematickym influencerem",
    category: "digital",
    legality: "clean",
    ethicalRisk: 0.12,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["digital"],
  },
  {
    id: "informalChainMessage",
    name: "Neformalni retezova zprava",
    description: "Sireni retezoveho sdeleni",
    category: "digital",
    legality: "gray",
    ethicalRisk: 0.65,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["digital", "grayZone"],
  },
  {
    id: "anonymousSupportPages",
    name: "Anonymni podpurne stranky",
    description: "Anonymni podpurne stranky",
    category: "digital",
    legality: "gray",
    ethicalRisk: 0.7,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["digital", "grayZone"],
  },
  {
    id: "astroturfingNetwork",
    name: "Astroturfingova sit",
    description: "Astroturfingova sit",
    category: "digital",
    legality: "gray",
    ethicalRisk: 0.82,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["digital", "grayZone"],
  },
  {
    id: "coordinatedAmplification",
    name: "Koordinovana amplifikace",
    description: "Koordinovane amplifikacni ucty",
    category: "digital",
    legality: "gray",
    ethicalRisk: 0.78,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["digital", "grayZone"],
  },
  {
    id: "trollSupporterNetwork",
    name: "Trolli / konfliktni sit priznivcu",
    description: "Trolli / konfliktni sit priznivcu",
    category: "digital",
    legality: "gray",
    ethicalRisk: 0.8,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["digital", "grayZone"],
  },
  {
    id: "unofficialMediaCoordination",
    name: "Koordinace s neoficialnimi medii",
    description: "Koordinace s neoficialnimi medii",
    category: "digital",
    legality: "gray",
    ethicalRisk: 0.68,
    allowedTargets: ["segment", "issue", "opponent", "region"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 2,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.035,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["digital", "grayZone"],
  },
  {
    id: "coreMobilization",
    name: "Mobilizace vlastniho jadra",
    description: "Mobilizace vlastniho jadra",
    category: "mobilization",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 0
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["turnout"],
  },
  {
    id: "softSupporterMobilization",
    name: "Mobilizace mekkych sympatizantu",
    description: "Mobilizace mekkych sympatizantu",
    category: "mobilization",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 0
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["turnout"],
  },
  {
    id: "youthMobilization",
    name: "Mobilizace mladych volicu",
    description: "Mobilizace mladych volicu",
    category: "mobilization",
    legality: "clean",
    ethicalRisk: 0.06,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 0
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["turnout"],
  },
  {
    id: "seniorMobilization",
    name: "Mobilizace senioru",
    description: "Mobilizace senioru",
    category: "mobilization",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 0
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["turnout"],
  },
  {
    id: "lowTurnoutRegionMobilization",
    name: "Mobilizace regionu s nizkou ucasti",
    description: "Mobilizace regionu s nizkou ucasti",
    category: "mobilization",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 0
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["turnout"],
  },
  {
    id: "threatMobilization",
    name: "Mobilizace pres tema hrozby",
    description: "Mobilizace pres tema hrozby",
    category: "mobilization",
    legality: "gray",
    ethicalRisk: 0.4,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "counterMobilization": 0.18,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16
    }),
    tags: ["turnout", "demobilization", "grayZone"],
  },
  {
    id: "positiveVisionMobilization",
    name: "Mobilizace pres pozitivni vizi",
    description: "Mobilizace pres pozitivni vizi",
    category: "mobilization",
    legality: "clean",
    ethicalRisk: 0.04,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 0
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["turnout"],
  },
  {
    id: "antiOpponentMobilization",
    name: "Mobilizace proti hlavnimu souperi",
    description: "Mobilizace proti hlavnimu souperi",
    category: "mobilization",
    legality: "clean",
    ethicalRisk: 0.3,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 0
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["turnout"],
  },
  {
    id: "gotvOperation",
    name: "GOTV operace",
    description: "Mobilizacni GOTV operace; timing a sila efektu se pocitaji v resolveru podle aktualni faze kampane.",
    category: "mobilization",
    legality: "clean",
    ethicalRisk: 0.05,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 0
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["turnout"],
  },
  {
    id: "tacticalAntiWastedVote",
    name: "Takticka vyzva proti propadnuti hlasu",
    description: "Takticka vyzva proti propadnuti hlasu",
    category: "mobilization",
    legality: "clean",
    ethicalRisk: 0.14,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 0
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "mediaBacklash": 0.03
    }),
    tags: ["turnout"],
  },
  {
    id: "lesserEvilAppeal",
    name: "Vyzva k volbe mensiho zla",
    description: "Vyzva k volbe mensiho zla",
    category: "mobilization",
    legality: "gray",
    ethicalRisk: 0.35,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "counterMobilization": 0.18,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16
    }),
    tags: ["turnout", "demobilization", "grayZone"],
  },
  {
    id: "demobilizingNegativeCampaign",
    name: "Demobilizacni negativni kampan na segment soupere",
    description: "Demobilizacni negativni kampan na segment soupere",
    category: "mobilization",
    legality: "gray",
    ethicalRisk: 0.75,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "counterMobilization": 0.18,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16
    }),
    tags: ["turnout", "demobilization", "grayZone"],
  },
  {
    id: "cynicismCampaign",
    name: "Znechuceni mekkych volicu soupere",
    description: "Znechuceni mekkych volicu soupere",
    category: "mobilization",
    legality: "gray",
    ethicalRisk: 0.78,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "counterMobilization": 0.18,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16
    }),
    tags: ["turnout", "demobilization", "grayZone"],
  },
  {
    id: "exploitOpponentFactionConflict",
    name: "Vytezeni vnitrniho konfliktu soupere",
    description: "Vytezeni vnitrniho konfliktu soupere",
    category: "mobilization",
    legality: "gray",
    ethicalRisk: 0.5,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "counterMobilization": 0.18,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16
    }),
    tags: ["turnout", "demobilization", "grayZone"],
  },
  {
    id: "controversyDemobilization",
    name: "Kontroverze s demobilizacnim ucinkem",
    description: "Abstraktni sedozonovy model kontroverze s demobilizacnim ucinkem; timing a rizika se pocitaji v resolveru.",
    category: "mobilization",
    legality: "gray",
    ethicalRisk: 0.82,
    allowedTargets: ["segment", "region", "issue", "opponent"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 20.16,
      "durationWeeks": 1,
      "fatigue": 0,
      "leaderHours": 0,
      "money": 0.8,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 27.84,
      "volunteerHours": 36
    }),
    effects: {
      "turnout": 0.012
    },
    risks: actionRisks({
      "counterMobilization": 0.18,
      "longTermTrust": 0.12,
      "mediaBacklash": 0.16
    }),
    tags: ["turnout", "demobilization", "grayZone"],
  },
  {
    id: "contrastAd",
    name: "Kontrastni kampan my vs. oni",
    description: "Kontrastni kampan my vs. oni",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.22,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "critiqueVotingRecord",
    name: "Kritika hlasovani soupere",
    description: "Kritika hlasovani soupere",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.18,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "critiqueProgramContradiction",
    name: "Kritika programoveho rozporu soupere",
    description: "Kritika programoveho rozporu soupere",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.22,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "critiqueInconsistency",
    name: "Kritika nekonzistence vyroku",
    description: "Kritika nekonzistence vyroku",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.24,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "critiqueFundingPublicData",
    name: "Kritika financovani na zaklade verejnych dat",
    description: "Kritika financovani na zaklade verejnych dat",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.26,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "attackLeaderWeakness",
    name: "Utok na slabinu lidra soupere",
    description: "Utok na slabinu lidra soupere",
    category: "negative",
    legality: "gray",
    ethicalRisk: 0.45,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.14,
      "detection": 0.16,
      "legal": 0.1,
      "longTermTrust": 0.16,
      "mediaBacklash": 0.2
    }),
    tags: ["negative", "grayZone"],
  },
  {
    id: "attackUnpopularCoalition",
    name: "Utok na nepopularni koalici soupere",
    description: "Utok na nepopularni koalici soupere",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.28,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "exploitExistingScandal",
    name: "Vyuziti existujici kauzy soupere",
    description: "Vyuziti existujici kauzy soupere",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.3,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "remindOldStatement",
    name: "Pripomenuti stareho vyroku",
    description: "Pripomenuti stareho vyroku",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.25,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "remindGovernmentFailure",
    name: "Pripomenuti selhani ve vlade",
    description: "Pripomenuti selhani ve vlade",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.24,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "investigativeOppositionResearch",
    name: "Rozkryvani skandalu ostatnich stran",
    description: "Rozkryvani skandalu ostatnich stran",
    category: "negative",
    legality: "clean",
    ethicalRisk: 0.3,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.08,
      "mediaBacklash": 0.1
    }),
    tags: ["negative"],
  },
  {
    id: "pressureForMediaCoverage",
    name: "Tlak na otevreni tematu v mediich",
    description: "Tlak na otevreni tematu v mediich",
    category: "negative",
    legality: "gray",
    ethicalRisk: 0.55,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.14,
      "detection": 0.16,
      "legal": 0.1,
      "longTermTrust": 0.16,
      "mediaBacklash": 0.2
    }),
    tags: ["negative", "grayZone"],
  },
  {
    id: "kompromatLeak",
    name: "Unik kompromatu",
    description: "Nacasovany leak kompromaterialu",
    category: "negative",
    legality: "gray",
    ethicalRisk: 0.72,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.14,
      "detection": 0.16,
      "legal": 0.1,
      "longTermTrust": 0.16,
      "mediaBacklash": 0.2
    }),
    tags: ["negative", "grayZone"],
  },
  {
    id: "unverifiedClaimUsage",
    name: "Vyuziti neoverene informace",
    description: "Vyuziti neoverene informace",
    category: "negative",
    legality: "gray",
    ethicalRisk: 0.8,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006
      }
    },
    risks: actionRisks({
      "counterMobilization": 0.14,
      "detection": 0.16,
      "legal": 0.1,
      "longTermTrust": 0.16,
      "mediaBacklash": 0.2
    }),
    tags: ["negative", "grayZone"],
  },
  {
    id: "fabricatedScandal",
    name: "Vyfabrikovana kauza na oponenta",
    description: "Vyfabrikovana kauza na oponenta",
    category: "negative",
    legality: "illegal",
    ethicalRisk: 0.98,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006,
        "integrity": -0.04
      }
    },
    risks: actionRisks({
      "coalitionDamage": 0.34,
      "counterMobilization": 0.28,
      "detection": 0.72,
      "legal": 0.86,
      "longTermTrust": 0.72,
      "mediaBacklash": 0.74,
      "scandal": 0.82
    }),
    tags: ["negative", "blackOps"],
  },
  {
    id: "anonymousCompromat",
    name: "Anonymni kompromaterial",
    description: "Anonymni kompromaterial",
    category: "negative",
    legality: "illegal",
    ethicalRisk: 0.96,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["opponent"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006,
        "integrity": -0.04
      }
    },
    risks: actionRisks({
      "coalitionDamage": 0.34,
      "counterMobilization": 0.28,
      "detection": 0.72,
      "legal": 0.86,
      "longTermTrust": 0.72,
      "mediaBacklash": 0.74,
      "scandal": 0.82
    }),
    tags: ["negative", "blackOps"],
  },
  {
    id: "falseAccusation",
    name: "Falesne obvineni",
    description: "Poplasna ci lziva zprava",
    category: "negative",
    legality: "illegal",
    ethicalRisk: 1,
    allowedTargets: ["opponent", "issue", "segment"],
    requiredTargets: ["segment"],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.02,
      "leaderHours": 4,
      "money": 0.7,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.025,
      "opponent": {
        "trustDelta": -0.008
      },
      "reputation": {
        "controversy": 0.006,
        "integrity": -0.04
      }
    },
    risks: actionRisks({
      "coalitionDamage": 0.34,
      "counterMobilization": 0.28,
      "detection": 0.72,
      "legal": 0.86,
      "longTermTrust": 0.72,
      "mediaBacklash": 0.74,
      "scandal": 0.82
    }),
    tags: ["negative", "blackOps"],
  },
  {
    id: "civicInitiativeCooperation",
    name: "Verejna spoluprace s obcanskou iniciativou",
    description: "Verejna spoluprace s obcanskou iniciativou",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.15,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "adoptActivistIssue",
    name: "Prevzeti tematu aktivistu",
    description: "Prevzeti tematu aktivistu",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.18,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "thematicCoordination",
    name: "Ticha tematicka koordinace",
    description: "Ticha tematicka koordinace",
    category: "allies",
    legality: "gray",
    ethicalRisk: 0.55,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.1,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["allies", "grayZone", "ally_ecosystem"],
  },
  {
    id: "supportIndependentCampaign",
    name: "Vyuziti nezavisle kampane bez prime koordinace",
    description: "Vyuziti nezavisle kampane bez prime koordinace",
    category: "allies",
    legality: "gray",
    ethicalRisk: 0.45,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.1,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["allies", "grayZone", "ally_ecosystem"],
  },
  {
    id: "reactToFriendlyMedia",
    name: "Reakce na akci sprateleneho media",
    description: "Reakce na akci sprateleneho media",
    category: "allies",
    legality: "gray",
    ethicalRisk: 0.35,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.1,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["allies", "grayZone", "ally_ecosystem"],
  },
  {
    id: "cooperateIdeologicalPlatform",
    name: "Spoluprace s ideovou platformou",
    description: "Spoluprace s ideovou platformou",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.2,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "cooperateProfessionalAssociation",
    name: "Spoluprace s profesni asociaci",
    description: "Spoluprace s profesni asociaci",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.12,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "cooperateUnions",
    name: "Spoluprace s odbory",
    description: "Spoluprace s odbory",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.18,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "cooperateBusinessAssociation",
    name: "Spoluprace s podnikatelskym svazem",
    description: "Spoluprace s podnikatelskym svazem",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.18,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "cooperateNGO",
    name: "Spoluprace s neziskovou organizaci",
    description: "Spoluprace s neziskovou organizaci",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.22,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "distanceRadicalSupporters",
    name: "Distanc od radikalnich podporovatelu",
    description: "Distanc od radikalnich podporovatelu",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.1,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "celebrityActivistSupport",
    name: "Podpora znameho aktivisty",
    description: "Podpora znameho aktivisty",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.2,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "expertGroupSupport",
    name: "Podpora expertni skupiny",
    description: "Podpora expertni skupiny",
    category: "allies",
    legality: "clean",
    ethicalRisk: 0.12,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "mediaBacklash": 0.06,
      "messageDiscipline": 0.06
    }),
    tags: ["allies", "ally_ecosystem"],
  },
  {
    id: "shadySupporterCoordination",
    name: "Shady spoluprace s priznivci mimo oficialni kampan",
    description: "Shady spoluprace s priznivci mimo oficialni kampan",
    category: "allies",
    legality: "gray",
    ethicalRisk: 0.76,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.1,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["allies", "grayZone", "ally_ecosystem"],
  },
  {
    id: "externalCampaignNotOfficial",
    name: "Podpurna kampan mimo oficialni naklady",
    description: "Podpurna kampan mimo oficialni naklady",
    category: "allies",
    legality: "gray",
    ethicalRisk: 0.72,
    allowedTargets: ["allyEcosystem", "issue", "segment"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 18,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 0.3,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 6,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.018,
      "issueSalience": {
        "target": 0.1
      }
    },
    risks: actionRisks({
      "detection": 0.14,
      "legal": 0.08,
      "longTermTrust": 0.1,
      "mediaBacklash": 0.16,
      "messageDiscipline": 0.16
    }),
    tags: ["allies", "grayZone", "ally_ecosystem"],
  },
  {
    id: "billboardCampaign",
    name: "Billboardova kampan",
    description: "Billboardova kampan",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "citylightCampaign",
    name: "Citylight kampan",
    description: "Citylight kampan",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "posterCampaign",
    name: "Plakatova kampan v regionech",
    description: "Plakatova kampan v regionech",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "directMail",
    name: "Direct mail",
    description: "Direct mail",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "transitAds",
    name: "Kampan v MHD",
    description: "Kampan v MHD",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "radioAds",
    name: "Rozhlasova reklama",
    description: "Rozhlasova reklama",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "onlineBanner",
    name: "Online bannerova kampan",
    description: "Online bannerova kampan",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "electionClip",
    name: "Volebni klip",
    description: "Volebni klip; timing a opotrebeni efektu se pocitaji v resolveru podle aktualni faze kampane.",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "leaderImageCampaign",
    name: "Image kampan lidra",
    description: "Image kampan lidra",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "negativeVisualCampaign",
    name: "Negativni vizualni kampan proti souperi",
    description: "Negativni vizualni kampan proti souperi",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "counterMobilization": 0.12,
      "mediaBacklash": 0.14
    }),
    tags: ["ads"],
  },
  {
    id: "sloganCampaign",
    name: "Sloganova kampan",
    description: "Sloganova kampan",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  },
  {
    id: "campaignRebrand",
    name: "Rebranding kampane",
    description: "Rebranding kampane",
    category: "ads",
    legality: "clean",
    ethicalRisk: 0.08,
    allowedTargets: ["national", "region", "segment", "issue", "opponent", "leader"],
    requiredTargets: [],
    cost: actionCost({
      "centralStaffHours": 10.08,
      "durationWeeks": 1,
      "fatigue": 0.01,
      "leaderHours": 2,
      "money": 1,
      "recurringWeeklyCost": 0,
      "regionalStaffHours": 13.92,
      "volunteerHours": 0
    }),
    effects: {
      "awareness": 0.045,
      "persuasion": 0.004
    },
    risks: actionRisks({
      "mediaBacklash": 0.04
    }),
    tags: ["ads"],
  }
] satisfies Omit<CampaignActionTemplate, 'placement' | 'availability'>[];

export const campaignActionTemplates: CampaignActionTemplate[] = campaignActionTemplateDefinitions.map((action) => ({
  availability: 'player_initiated',
  placement: 'campaign',
  ...action,
})) as CampaignActionTemplate[];

export const executableCampaignActionTemplates = campaignActionTemplates;

export const campaignActionTemplateById = Object.fromEntries(
  campaignActionTemplates.map((action) => [action.id, action]),
) as Record<(typeof campaignActionTemplates)[number]['id'], CampaignActionTemplate>;

export function getActionTemplatesByCategory(category: CampaignActionTemplate['category']) {
  return campaignActionTemplates.filter((action) => action.category === category);
}

export function getActionTemplatesByLegality(legality: ActionLegality) {
  return campaignActionTemplates.filter((action) => action.legality === legality);
}

export function getCampaignActionTemplate(id: string) {
  return campaignActionTemplates.find((action) => action.id === id);
}
