import type { RegionId } from '../types/region';
import type { SegmentId, VoterSegment } from './types';

// Generated from volby_ess10_eb103_8d_nms_calibrated. Do not edit by hand.
export const essVoterSegments = [
  {
    "id": "ess_center_40_54_secondary_rural_center",
    "name": "stred - 40-54 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.007401,
    "position": {
      "econ": -0.019005,
      "culture": 0.041988,
      "authority": 0.203237
    },
    "space": {
      "econ": -0.019005,
      "culture": 0.041988,
      "authority": 0.203237,
      "establishment": 0.146447,
      "globalism": -0.004142,
      "green": 0.085555,
      "ukraine": 0.067185,
      "greenDeal": 0.218068
    },
    "axisSalience": {
      "econ": 0.427982,
      "culture": 0.437635,
      "authority": 0.453165
    },
    "issuePrefs": {
      "housing": 0.005414,
      "transport": -0.003304,
      "security": 0.133134,
      "healthcare": 0.017043,
      "climate": -0.122659,
      "industry": -0.053521,
      "education": -0.009223,
      "taxes": -0.008645
    },
    "issueSalience": {
      "housing": 0.283032,
      "transport": 0.28185,
      "security": 0.354555,
      "healthcare": 0.289544,
      "climate": 0.348689,
      "industry": 0.309972,
      "education": 0.285165,
      "taxes": 0.284841
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.501467,
    "turnoutBase": 0.595126,
    "volatility": 0.60682
  },
  {
    "id": "ess_center_55_plus_secondary_large_town_center",
    "name": "stred - 55+ - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.007032,
    "position": {
      "econ": 0.001672,
      "culture": -0.01468,
      "authority": 0.116433
    },
    "space": {
      "econ": 0.001672,
      "culture": -0.01468,
      "authority": 0.116433,
      "establishment": 0.072923,
      "globalism": 0.064514,
      "green": 0.067251,
      "ukraine": 0.034446,
      "greenDeal": 0.230403
    },
    "axisSalience": {
      "econ": 0.420702,
      "culture": 0.426166,
      "authority": 0.421916
    },
    "issuePrefs": {
      "housing": 0.000842,
      "transport": 0.009966,
      "security": 0.05371,
      "healthcare": -0.002378,
      "climate": -0.112934,
      "industry": -0.05717,
      "education": -0.009457,
      "taxes": -0.000558
    },
    "issueSalience": {
      "housing": 0.280471,
      "transport": 0.285581,
      "security": 0.310077,
      "healthcare": 0.281332,
      "climate": 0.343243,
      "industry": 0.312015,
      "education": 0.285296,
      "taxes": 0.280312
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.499705,
    "turnoutBase": 0.672552,
    "volatility": 0.523437
  },
  {
    "id": "ess_center_55_plus_secondary_rural_center",
    "name": "stred - 55+ - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00697,
    "position": {
      "econ": -0.012425,
      "culture": -0.002181,
      "authority": 0.271935
    },
    "space": {
      "econ": -0.012425,
      "culture": -0.002181,
      "authority": 0.271935,
      "establishment": 0.091951,
      "globalism": 0.125847,
      "green": 0.188728,
      "ukraine": 0.004288,
      "greenDeal": 0.291255
    },
    "axisSalience": {
      "econ": 0.425218,
      "culture": 0.420916,
      "authority": 0.477896
    },
    "issuePrefs": {
      "housing": 0.007095,
      "transport": 0.0186,
      "security": 0.144993,
      "healthcare": 0.008771,
      "climate": -0.217436,
      "industry": -0.076009,
      "education": -0.023941,
      "taxes": -0.009208
    },
    "issueSalience": {
      "housing": 0.283973,
      "transport": 0.290416,
      "security": 0.361196,
      "healthcare": 0.284912,
      "climate": 0.401764,
      "industry": 0.322565,
      "education": 0.293407,
      "taxes": 0.285156
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.504907,
    "turnoutBase": 0.673218,
    "volatility": 0.521724
  },
  {
    "id": "ess_center_55_plus_secondary_town_center",
    "name": "stred - 55+ - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.006417,
    "position": {
      "econ": -0.009897,
      "culture": -0.008111,
      "authority": 0.115085
    },
    "space": {
      "econ": -0.009897,
      "culture": -0.008111,
      "authority": 0.115085,
      "establishment": 0.053888,
      "globalism": -0.056339,
      "green": 0.071207,
      "ukraine": -0.081548,
      "greenDeal": 0.174692
    },
    "axisSalience": {
      "econ": 0.424157,
      "culture": 0.423407,
      "authority": 0.421431
    },
    "issuePrefs": {
      "housing": 0.006416,
      "transport": -0.002826,
      "security": 0.085746,
      "healthcare": 0.006477,
      "climate": -0.100183,
      "industry": -0.047939,
      "education": 0.017609,
      "taxes": -0.008099
    },
    "issueSalience": {
      "housing": 0.283593,
      "transport": 0.281583,
      "security": 0.328018,
      "healthcare": 0.283627,
      "climate": 0.336102,
      "industry": 0.306846,
      "education": 0.289861,
      "taxes": 0.284535
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.490931,
    "turnoutBase": 0.671886,
    "volatility": 0.52515
  },
  {
    "id": "ess_center_55_plus_secondary_rural_right",
    "name": "stred - 55+ - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.005474,
    "position": {
      "econ": 0.008079,
      "culture": 0.011226,
      "authority": 0.092472
    },
    "space": {
      "econ": 0.008079,
      "culture": 0.011226,
      "authority": 0.092472,
      "establishment": -0.067945,
      "globalism": -0.003834,
      "green": 0.103179,
      "ukraine": -0.063344,
      "greenDeal": 0.057313
    },
    "axisSalience": {
      "econ": 0.423393,
      "culture": 0.424715,
      "authority": 0.41329
    },
    "issuePrefs": {
      "housing": -0.00579,
      "transport": -0.0045,
      "security": 0.066233,
      "healthcare": -0.004919,
      "climate": -0.090336,
      "industry": -0.008018,
      "education": -0.005025,
      "taxes": 0.007164
    },
    "issueSalience": {
      "housing": 0.283243,
      "transport": 0.28252,
      "security": 0.317091,
      "healthcare": 0.282754,
      "climate": 0.330588,
      "industry": 0.28449,
      "education": 0.282814,
      "taxes": 0.284012
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.484334,
    "turnoutBase": 0.667622,
    "volatility": 0.436115
  },
  {
    "id": "ess_center_55_plus_secondary_town_right",
    "name": "stred - 55+ - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.005412,
    "position": {
      "econ": 0.028405,
      "culture": -0.035524,
      "authority": 0.194003
    },
    "space": {
      "econ": 0.028405,
      "culture": -0.035524,
      "authority": 0.194003,
      "establishment": 0.194803,
      "globalism": 0.309408,
      "green": 0.084156,
      "ukraine": 0.365552,
      "greenDeal": 0.203317
    },
    "axisSalience": {
      "econ": 0.43193,
      "culture": 0.43492,
      "authority": 0.449841
    },
    "issuePrefs": {
      "housing": -0.01136,
      "transport": 0.036422,
      "security": 0.025398,
      "healthcare": -0.023294,
      "climate": -0.117521,
      "industry": -0.042124,
      "education": -0.062454,
      "taxes": 0.016189
    },
    "issueSalience": {
      "housing": 0.286362,
      "transport": 0.300396,
      "security": 0.294223,
      "healthcare": 0.293045,
      "climate": 0.345812,
      "industry": 0.303589,
      "education": 0.314974,
      "taxes": 0.289066
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.524149,
    "turnoutBase": 0.676818,
    "volatility": 0.412468
  },
  {
    "id": "ess_center_40_54_secondary_large_town_center",
    "name": "stred - 40-54 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00533,
    "position": {
      "econ": 0.021287,
      "culture": -0.033238,
      "authority": 0.217331
    },
    "space": {
      "econ": 0.021287,
      "culture": -0.033238,
      "authority": 0.217331,
      "establishment": 0.141034,
      "globalism": 0.090448,
      "green": 0.020693,
      "ukraine": 0.048322,
      "greenDeal": 0.209614
    },
    "axisSalience": {
      "econ": 0.42894,
      "culture": 0.43396,
      "authority": 0.458239
    },
    "issuePrefs": {
      "housing": -0.007719,
      "transport": 0.011515,
      "security": 0.105292,
      "healthcare": -0.017985,
      "climate": -0.073591,
      "industry": -0.046498,
      "education": -0.013374,
      "taxes": 0.011338
    },
    "issueSalience": {
      "housing": 0.284323,
      "transport": 0.286448,
      "security": 0.338964,
      "healthcare": 0.290072,
      "climate": 0.321211,
      "industry": 0.306039,
      "education": 0.287489,
      "taxes": 0.286349
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.50671,
    "turnoutBase": 0.594936,
    "volatility": 0.607307
  },
  {
    "id": "ess_center_25_39_secondary_town_center",
    "name": "stred - 25-39 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.005043,
    "position": {
      "econ": 0.00623,
      "culture": -0.000654,
      "authority": 0.065849
    },
    "space": {
      "econ": 0.00623,
      "culture": -0.000654,
      "authority": 0.065849,
      "establishment": 0.124973,
      "globalism": 0.008844,
      "green": 0.064047,
      "ukraine": 0.05524,
      "greenDeal": 0.246564
    },
    "axisSalience": {
      "econ": 0.422616,
      "culture": 0.420275,
      "authority": 0.403706
    },
    "issuePrefs": {
      "housing": -0.003348,
      "transport": -0.000378,
      "security": 0.034632,
      "healthcare": -0.004538,
      "climate": -0.115152,
      "industry": -0.056428,
      "education": -0.003212,
      "taxes": 0.004407
    },
    "issueSalience": {
      "housing": 0.281875,
      "transport": 0.280212,
      "security": 0.299394,
      "healthcare": 0.282541,
      "climate": 0.344485,
      "industry": 0.311599,
      "education": 0.281799,
      "taxes": 0.282468
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.500528,
    "turnoutBase": 0.574374,
    "volatility": 0.588752
  },
  {
    "id": "ess_center_40_54_secondary_rural_right",
    "name": "stred - 40-54 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.004818,
    "position": {
      "econ": 0.044753,
      "culture": -0.000121,
      "authority": 0.2729
    },
    "space": {
      "econ": 0.044753,
      "culture": -0.000121,
      "authority": 0.2729,
      "establishment": 0.286296,
      "globalism": 0.279169,
      "green": 0.097233,
      "ukraine": 0.393859,
      "greenDeal": 0.221687
    },
    "axisSalience": {
      "econ": 0.438796,
      "culture": 0.420051,
      "authority": 0.478244
    },
    "issuePrefs": {
      "housing": -0.0246,
      "transport": 0.022334,
      "security": 0.087405,
      "healthcare": -0.032232,
      "climate": -0.13208,
      "industry": -0.03264,
      "education": -0.072116,
      "taxes": 0.032208
    },
    "issueSalience": {
      "housing": 0.293776,
      "transport": 0.292507,
      "security": 0.328947,
      "healthcare": 0.29805,
      "climate": 0.353965,
      "industry": 0.298279,
      "education": 0.320385,
      "taxes": 0.298036
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.529654,
    "turnoutBase": 0.60002,
    "volatility": 0.494233
  },
  {
    "id": "ess_center_40_54_secondary_town_center",
    "name": "stred - 40-54 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00449,
    "position": {
      "econ": -0.030931,
      "culture": -0.021373,
      "authority": 0.090636
    },
    "space": {
      "econ": -0.030931,
      "culture": -0.021373,
      "authority": 0.090636,
      "establishment": 0.070261,
      "globalism": 0.092759,
      "green": 0.086067,
      "ukraine": 0.139693,
      "greenDeal": 0.22088
    },
    "axisSalience": {
      "econ": 0.432991,
      "culture": 0.428977,
      "authority": 0.412629
    },
    "issuePrefs": {
      "housing": 0.019577,
      "transport": 0.022711,
      "security": 0.022338,
      "healthcare": 0.02056,
      "climate": -0.123815,
      "industry": -0.071087,
      "education": -0.005503,
      "taxes": -0.024835
    },
    "issueSalience": {
      "housing": 0.290963,
      "transport": 0.292718,
      "security": 0.292509,
      "healthcare": 0.291514,
      "climate": 0.349336,
      "industry": 0.319808,
      "education": 0.283082,
      "taxes": 0.293908
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.501186,
    "turnoutBase": 0.592459,
    "volatility": 0.613677
  },
  {
    "id": "ess_center_25_39_secondary_rural_center",
    "name": "stred - 25-39 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004387,
    "position": {
      "econ": -0.033438,
      "culture": 0.016551,
      "authority": 0.203232
    },
    "space": {
      "econ": -0.033438,
      "culture": 0.016551,
      "authority": 0.203232,
      "establishment": 0.122747,
      "globalism": 0.019603,
      "green": -0.021779,
      "ukraine": 0.0515,
      "greenDeal": 0.050237
    },
    "axisSalience": {
      "econ": 0.434044,
      "culture": 0.426952,
      "authority": 0.453163
    },
    "issuePrefs": {
      "housing": 0.016405,
      "transport": 0.007733,
      "security": 0.122989,
      "healthcare": 0.025399,
      "climate": 0.001614,
      "industry": -0.024459,
      "education": -0.00208,
      "taxes": -0.022089
    },
    "issueSalience": {
      "housing": 0.289187,
      "transport": 0.28433,
      "security": 0.348874,
      "healthcare": 0.294224,
      "climate": 0.280904,
      "industry": 0.293697,
      "education": 0.281165,
      "taxes": 0.29237
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.500996,
    "turnoutBase": 0.574296,
    "volatility": 0.588953
  },
  {
    "id": "ess_center_15_24_secondary_town_center",
    "name": "stred - 15-24 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003731,
    "position": {
      "econ": 0.02218,
      "culture": 0.023182,
      "authority": 0.083299
    },
    "space": {
      "econ": 0.02218,
      "culture": 0.023182,
      "authority": 0.083299,
      "establishment": 0.128983,
      "globalism": 0.03587,
      "green": -0.080084,
      "ukraine": 0.104454,
      "greenDeal": -0.034248
    },
    "axisSalience": {
      "econ": 0.429316,
      "culture": 0.429736,
      "authority": 0.409988
    },
    "issuePrefs": {
      "housing": -0.014981,
      "transport": -0.005413,
      "security": 0.043324,
      "healthcare": -0.014115,
      "climate": 0.06725,
      "industry": 0.022595,
      "education": -0.021328,
      "taxes": 0.018752
    },
    "issueSalience": {
      "housing": 0.288389,
      "transport": 0.283031,
      "security": 0.304261,
      "healthcare": 0.287904,
      "climate": 0.31766,
      "industry": 0.292653,
      "education": 0.291944,
      "taxes": 0.290501
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.502471,
    "turnoutBase": 0.574514,
    "volatility": 0.588392
  },
  {
    "id": "ess_center_40_54_secondary_town_right",
    "name": "stred - 40-54 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.003465,
    "position": {
      "econ": 0.0513,
      "culture": 0.045203,
      "authority": 0.156805
    },
    "space": {
      "econ": 0.0513,
      "culture": 0.045203,
      "authority": 0.156805,
      "establishment": 0.184139,
      "globalism": 0.305652,
      "green": 0.136764,
      "ukraine": 0.192939,
      "greenDeal": 0.415551
    },
    "axisSalience": {
      "econ": 0.441546,
      "culture": 0.438985,
      "authority": 0.43645
    },
    "issuePrefs": {
      "housing": -0.033639,
      "transport": 0.015717,
      "security": 0.039423,
      "healthcare": -0.03332,
      "climate": -0.214825,
      "industry": -0.067998,
      "education": -0.095376,
      "taxes": 0.04236
    },
    "issueSalience": {
      "housing": 0.298838,
      "transport": 0.288801,
      "security": 0.302077,
      "healthcare": 0.298659,
      "climate": 0.400302,
      "industry": 0.318079,
      "education": 0.333411,
      "taxes": 0.303722
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.52307,
    "turnoutBase": 0.596445,
    "volatility": 0.503427
  },
  {
    "id": "ess_center_40_54_secondary_large_town_left",
    "name": "stred - 40-54 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.003014,
    "position": {
      "econ": -0.025911,
      "culture": 0.017797,
      "authority": 0.044717
    },
    "space": {
      "econ": -0.025911,
      "culture": 0.017797,
      "authority": 0.044717,
      "establishment": 0.132205,
      "globalism": 0.135439,
      "green": 0.055082,
      "ukraine": 0.065813,
      "greenDeal": 0.277043
    },
    "axisSalience": {
      "econ": 0.430883,
      "culture": 0.427475,
      "authority": 0.396098
    },
    "issuePrefs": {
      "housing": 0.012115,
      "transport": 0.019527,
      "security": 0.003064,
      "healthcare": 0.02008,
      "climate": -0.117231,
      "industry": -0.075206,
      "education": -0.029807,
      "taxes": -0.01652
    },
    "issueSalience": {
      "housing": 0.286785,
      "transport": 0.290935,
      "security": 0.281716,
      "healthcare": 0.291245,
      "climate": 0.34565,
      "industry": 0.322115,
      "education": 0.296692,
      "taxes": 0.289251
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.508703,
    "turnoutBase": 0.594627,
    "volatility": 0.508102
  },
  {
    "id": "ess_center_40_54_tertiary_rural_center",
    "name": "stred - 40-54 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002932,
    "position": {
      "econ": 0.040207,
      "culture": -0.004332,
      "authority": -0.013916
    },
    "space": {
      "econ": 0.040207,
      "culture": -0.004332,
      "authority": -0.013916,
      "establishment": -0.096367,
      "globalism": 0.192863,
      "green": 0.202989,
      "ukraine": 0.011475,
      "greenDeal": 0.610566
    },
    "axisSalience": {
      "econ": 0.436887,
      "culture": 0.421819,
      "authority": 0.38501
    },
    "issuePrefs": {
      "housing": -0.021594,
      "transport": 0.013871,
      "security": -0.045474,
      "healthcare": -0.029296,
      "climate": -0.317111,
      "industry": -0.12882,
      "education": -0.050564,
      "taxes": 0.02843
    },
    "issueSalience": {
      "housing": 0.292093,
      "transport": 0.287768,
      "security": 0.305466,
      "healthcare": 0.296406,
      "climate": 0.457582,
      "industry": 0.352139,
      "education": 0.308316,
      "taxes": 0.295921
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.603862,
    "turnoutBase": 0.646627,
    "volatility": 0.578673
  },
  {
    "id": "ess_center_25_39_secondary_town_right",
    "name": "stred - 25-39 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002727,
    "position": {
      "econ": 0.024594,
      "culture": 0.040184,
      "authority": 0.200404
    },
    "space": {
      "econ": 0.024594,
      "culture": 0.040184,
      "authority": 0.200404,
      "establishment": 0.293623,
      "globalism": 0.332776,
      "green": 0.105519,
      "ukraine": 0.214672,
      "greenDeal": 0.328955
    },
    "axisSalience": {
      "econ": 0.430329,
      "culture": 0.436877,
      "authority": 0.452145
    },
    "issuePrefs": {
      "housing": -0.018349,
      "transport": 0.026551,
      "security": 0.058429,
      "healthcare": -0.014493,
      "climate": -0.168081,
      "industry": -0.060403,
      "education": -0.093178,
      "taxes": 0.02253
    },
    "issueSalience": {
      "housing": 0.290275,
      "transport": 0.294869,
      "security": 0.31272,
      "healthcare": 0.288116,
      "climate": 0.374126,
      "industry": 0.313826,
      "education": 0.33218,
      "taxes": 0.292617
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.533456,
    "turnoutBase": 0.580277,
    "volatility": 0.473574
  },
  {
    "id": "ess_center_15_24_lower_town_center",
    "name": "stred - 15-24 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002706,
    "position": {
      "econ": 0.012774,
      "culture": -0.033699,
      "authority": 0.186771
    },
    "space": {
      "econ": 0.012774,
      "culture": -0.033699,
      "authority": 0.186771,
      "establishment": 0.247774,
      "globalism": 0.265518,
      "green": -0.089835,
      "ukraine": 0.340151,
      "greenDeal": 0.227991
    },
    "axisSalience": {
      "econ": 0.425365,
      "culture": 0.434154,
      "authority": 0.447237
    },
    "issuePrefs": {
      "housing": -0.002982,
      "transport": 0.034734,
      "security": 0.031357,
      "healthcare": -0.011894,
      "climate": 0.000844,
      "industry": -0.054907,
      "education": -0.049685,
      "taxes": 0.005154
    },
    "issueSalience": {
      "housing": 0.28167,
      "transport": 0.299451,
      "security": 0.29756,
      "healthcare": 0.28666,
      "climate": 0.280473,
      "industry": 0.310748,
      "education": 0.307824,
      "taxes": 0.282886
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.435753,
    "turnoutBase": 0.518672,
    "volatility": 0.6177
  },
  {
    "id": "ess_center_15_24_secondary_rural_center",
    "name": "stred - 15-24 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002481,
    "position": {
      "econ": -0.026354,
      "culture": 0.001371,
      "authority": -0.067229
    },
    "space": {
      "econ": -0.026354,
      "culture": 0.001371,
      "authority": -0.067229,
      "establishment": 0.333511,
      "globalism": 0.338382,
      "green": 0.08061,
      "ukraine": 0.198034,
      "greenDeal": 0.472607
    },
    "axisSalience": {
      "econ": 0.431069,
      "culture": 0.420576,
      "authority": 0.404202
    },
    "issuePrefs": {
      "housing": 0.01433,
      "transport": 0.046948,
      "security": -0.11805,
      "healthcare": 0.019084,
      "climate": -0.190369,
      "industry": -0.125302,
      "education": -0.068599,
      "taxes": -0.01881
    },
    "issueSalience": {
      "housing": 0.288025,
      "transport": 0.306291,
      "security": 0.346108,
      "healthcare": 0.290687,
      "climate": 0.386607,
      "industry": 0.350169,
      "education": 0.318415,
      "taxes": 0.290534
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.536984,
    "turnoutBase": 0.581673,
    "volatility": 0.569984
  },
  {
    "id": "ess_center_15_24_lower_rural_center",
    "name": "stred - 15-24 - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00244,
    "position": {
      "econ": -0.035432,
      "culture": 0.048339,
      "authority": 0.453891
    },
    "space": {
      "econ": -0.035432,
      "culture": 0.048339,
      "authority": 0.453891,
      "establishment": 0.348647,
      "globalism": 0.45139,
      "green": 0.275897,
      "ukraine": 0.507489,
      "greenDeal": 0.769402
    },
    "axisSalience": {
      "econ": 0.434881,
      "culture": 0.440302,
      "authority": 0.543401
    },
    "issuePrefs": {
      "housing": 0.013687,
      "transport": 0.054324,
      "security": 0.173098,
      "healthcare": 0.029378,
      "climate": -0.414078,
      "industry": -0.192254,
      "education": -0.107721,
      "taxes": -0.01971
    },
    "issueSalience": {
      "housing": 0.287665,
      "transport": 0.310421,
      "security": 0.376935,
      "healthcare": 0.296452,
      "climate": 0.511884,
      "industry": 0.387662,
      "education": 0.340324,
      "taxes": 0.291038
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.454975,
    "turnoutBase": 0.522203,
    "volatility": 0.608622
  },
  {
    "id": "ess_center_25_39_secondary_rural_right",
    "name": "stred - 25-39 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002378,
    "position": {
      "econ": 0.002432,
      "culture": -0.00607,
      "authority": 0.217203
    },
    "space": {
      "econ": 0.002432,
      "culture": -0.00607,
      "authority": 0.217203,
      "establishment": 0.344506,
      "globalism": 0.374349,
      "green": 0.223228,
      "ukraine": 0.393991,
      "greenDeal": 0.392072
    },
    "axisSalience": {
      "econ": 0.421021,
      "culture": 0.422549,
      "authority": 0.458193
    },
    "issuePrefs": {
      "housing": -0.000609,
      "transport": 0.045407,
      "security": 0.034064,
      "healthcare": -0.002237,
      "climate": -0.270504,
      "industry": -0.094071,
      "education": -0.080816,
      "taxes": 0.001023
    },
    "issueSalience": {
      "housing": 0.280341,
      "transport": 0.305428,
      "security": 0.299076,
      "healthcare": 0.281252,
      "climate": 0.431482,
      "industry": 0.33268,
      "education": 0.325257,
      "taxes": 0.280573
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.540021,
    "turnoutBase": 0.582058,
    "volatility": 0.468994
  },
  {
    "id": "ess_center_55_plus_secondary_large_town_left",
    "name": "stred - 55+ - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002378,
    "position": {
      "econ": -0.072361,
      "culture": 0.026076,
      "authority": 0.184574
    },
    "space": {
      "econ": -0.072361,
      "culture": 0.026076,
      "authority": 0.184574,
      "establishment": 0.176137,
      "globalism": 0.185035,
      "green": 0.168326,
      "ukraine": 0.075453,
      "greenDeal": 0.320626
    },
    "axisSalience": {
      "econ": 0.450392,
      "culture": 0.430952,
      "authority": 0.446447
    },
    "issuePrefs": {
      "housing": 0.03667,
      "transport": 0.035601,
      "security": 0.082395,
      "healthcare": 0.054186,
      "climate": -0.21097,
      "industry": -0.105543,
      "education": -0.032468,
      "taxes": -0.048971
    },
    "issueSalience": {
      "housing": 0.300535,
      "transport": 0.299936,
      "security": 0.326141,
      "healthcare": 0.310344,
      "climate": 0.398143,
      "industry": 0.339104,
      "education": 0.298182,
      "taxes": 0.307424
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.515193,
    "turnoutBase": 0.676165,
    "volatility": 0.414148
  },
  {
    "id": "ess_center_55_plus_secondary_town_left",
    "name": "stred - 55+ - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002091,
    "position": {
      "econ": -0.077749,
      "culture": 0.003378,
      "authority": 0.224205
    },
    "space": {
      "econ": -0.077749,
      "culture": 0.003378,
      "authority": 0.224205,
      "establishment": 0.309916,
      "globalism": 0.18606,
      "green": 0.077712,
      "ukraine": 0.212241,
      "greenDeal": 0.369764
    },
    "axisSalience": {
      "econ": 0.452655,
      "culture": 0.421419,
      "authority": 0.460714
    },
    "issuePrefs": {
      "housing": 0.042357,
      "transport": 0.041157,
      "security": 0.089483,
      "healthcare": 0.05625,
      "climate": -0.159487,
      "industry": -0.1239,
      "education": -0.023456,
      "taxes": -0.055574
    },
    "issueSalience": {
      "housing": 0.30372,
      "transport": 0.303048,
      "security": 0.33011,
      "healthcare": 0.3115,
      "climate": 0.369312,
      "industry": 0.349384,
      "education": 0.293135,
      "taxes": 0.311122
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.525957,
    "turnoutBase": 0.680847,
    "volatility": 0.402108
  },
  {
    "id": "ess_center_25_39_tertiary_large_town_center",
    "name": "stred - 25-39 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001927,
    "position": {
      "econ": 0.004502,
      "culture": 0.023751,
      "authority": 0.37354
    },
    "space": {
      "econ": 0.004502,
      "culture": 0.023751,
      "authority": 0.37354,
      "establishment": 0.358489,
      "globalism": 0.368737,
      "green": 0.313802,
      "ukraine": 0.2482,
      "greenDeal": 0.211163
    },
    "axisSalience": {
      "econ": 0.421891,
      "culture": 0.429975,
      "authority": 0.514474
    },
    "issuePrefs": {
      "housing": -0.005326,
      "transport": 0.038848,
      "security": 0.152016,
      "healthcare": -0.001342,
      "climate": -0.285063,
      "industry": -0.044333,
      "education": -0.090515,
      "taxes": 0.006092
    },
    "issueSalience": {
      "housing": 0.282983,
      "transport": 0.301755,
      "security": 0.365129,
      "healthcare": 0.280751,
      "climate": 0.439635,
      "industry": 0.304826,
      "education": 0.330689,
      "taxes": 0.283411
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.650803,
    "turnoutBase": 0.642547,
    "volatility": 0.517736
  },
  {
    "id": "ess_center_25_39_secondary_large_town_center",
    "name": "stred - 25-39 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001907,
    "position": {
      "econ": -0.035914,
      "culture": -0.02271,
      "authority": 0.094238
    },
    "space": {
      "econ": -0.035914,
      "culture": -0.02271,
      "authority": 0.094238,
      "establishment": 0.060743,
      "globalism": 0.000603,
      "green": 0.019859,
      "ukraine": 0.02392,
      "greenDeal": 0.27731
    },
    "axisSalience": {
      "econ": 0.435084,
      "culture": 0.429538,
      "authority": 0.413926
    },
    "issuePrefs": {
      "housing": 0.022478,
      "transport": 0.013139,
      "security": 0.050047,
      "healthcare": 0.024041,
      "climate": -0.091945,
      "industry": -0.087163,
      "education": 0.016435,
      "taxes": -0.028583
    },
    "issueSalience": {
      "housing": 0.292588,
      "transport": 0.287358,
      "security": 0.308026,
      "healthcare": 0.293463,
      "climate": 0.331489,
      "industry": 0.328811,
      "education": 0.289204,
      "taxes": 0.296007
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.494896,
    "turnoutBase": 0.572126,
    "volatility": 0.594533
  },
  {
    "id": "ess_center_40_54_secondary_large_town_right",
    "name": "stred - 40-54 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001804,
    "position": {
      "econ": 0.072321,
      "culture": -0.016642,
      "authority": 0.14197
    },
    "space": {
      "econ": 0.072321,
      "culture": -0.016642,
      "authority": 0.14197,
      "establishment": 0.151102,
      "globalism": 0.176055,
      "green": 0.148128,
      "ukraine": -0.190285,
      "greenDeal": 0.268052
    },
    "axisSalience": {
      "econ": 0.450375,
      "culture": 0.42699,
      "authority": 0.431109
    },
    "issuePrefs": {
      "housing": -0.037779,
      "transport": 0.006042,
      "security": 0.066895,
      "healthcare": -0.053402,
      "climate": -0.181707,
      "industry": -0.034061,
      "education": -0.050264,
      "taxes": 0.050074
    },
    "issueSalience": {
      "housing": 0.301156,
      "transport": 0.283383,
      "security": 0.317461,
      "healthcare": 0.309905,
      "climate": 0.381756,
      "industry": 0.299074,
      "education": 0.308148,
      "taxes": 0.308041
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.512651,
    "turnoutBase": 0.595289,
    "volatility": 0.506401
  },
  {
    "id": "ess_center_55_plus_secondary_large_town_right",
    "name": "stred - 55+ - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001804,
    "position": {
      "econ": 0.036308,
      "culture": 0.002229,
      "authority": 0.216019
    },
    "space": {
      "econ": 0.036308,
      "culture": 0.002229,
      "authority": 0.216019,
      "establishment": 0.31866,
      "globalism": 0.041016,
      "green": -7.2e-05,
      "ukraine": 0.052941,
      "greenDeal": 0.307515
    },
    "axisSalience": {
      "econ": 0.435249,
      "culture": 0.420936,
      "authority": 0.457767
    },
    "issuePrefs": {
      "housing": -0.020237,
      "transport": -0.004556,
      "security": 0.122938,
      "healthcare": -0.025963,
      "climate": -0.086052,
      "industry": -0.0567,
      "education": -0.018518,
      "taxes": 0.026409
    },
    "issueSalience": {
      "housing": 0.291333,
      "transport": 0.282552,
      "security": 0.348845,
      "healthcare": 0.29454,
      "climate": 0.328189,
      "industry": 0.311752,
      "education": 0.29037,
      "taxes": 0.294789
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.517954,
    "turnoutBase": 0.681153,
    "volatility": 0.401321
  },
  {
    "id": "ess_center_15_24_lower_rural_unknown",
    "name": "stred - 15-24 - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001763,
    "position": {
      "econ": 0.015207,
      "culture": 0.086963,
      "authority": 0.131679
    },
    "space": {
      "econ": 0.015207,
      "culture": 0.086963,
      "authority": 0.131679,
      "establishment": -0.405476,
      "globalism": -0.33942,
      "green": 0.258914,
      "ukraine": -0.203746,
      "greenDeal": 0.267711
    },
    "axisSalience": {
      "econ": 0.426387,
      "culture": 0.456524,
      "authority": 0.427404
    },
    "issuePrefs": {
      "housing": -0.0188,
      "transport": -0.060186,
      "security": 0.183386,
      "healthcare": -0.003992,
      "climate": -0.261377,
      "industry": -0.041602,
      "education": 0.040586,
      "taxes": 0.021385
    },
    "issueSalience": {
      "housing": 0.290528,
      "transport": 0.313704,
      "security": 0.382696,
      "healthcare": 0.282236,
      "climate": 0.426371,
      "industry": 0.303297,
      "education": 0.302728,
      "taxes": 0.291975
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.347197,
    "turnoutBase": 0.495808,
    "volatility": 0.576493
  },
  {
    "id": "ess_center_40_54_tertiary_rural_left",
    "name": "stred - 40-54 - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001763,
    "position": {
      "econ": -0.031444,
      "culture": -0.037737,
      "authority": 0.339982
    },
    "space": {
      "econ": -0.031444,
      "culture": -0.037737,
      "authority": 0.339982,
      "establishment": 0.056455,
      "globalism": -0.293144,
      "green": 0.48591,
      "ukraine": -0.366764,
      "greenDeal": 0.271245
    },
    "axisSalience": {
      "econ": 0.433207,
      "culture": 0.43585,
      "authority": 0.502393
    },
    "issuePrefs": {
      "housing": 0.021823,
      "transport": -0.020524,
      "security": 0.282329,
      "healthcare": 0.019621,
      "climate": -0.425804,
      "industry": -0.086356,
      "education": 0.085246,
      "taxes": -0.027168
    },
    "issueSalience": {
      "housing": 0.292221,
      "transport": 0.291493,
      "security": 0.438104,
      "healthcare": 0.290988,
      "climate": 0.51845,
      "industry": 0.328359,
      "education": 0.327738,
      "taxes": 0.295214
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.586928,
    "turnoutBase": 0.651976,
    "volatility": 0.464919
  },
  {
    "id": "ess_center_40_54_secondary_town_left",
    "name": "stred - 40-54 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001661,
    "position": {
      "econ": -0.018407,
      "culture": 0.0019,
      "authority": 0.4364
    },
    "space": {
      "econ": -0.018407,
      "culture": 0.0019,
      "authority": 0.4364,
      "establishment": 0.012054,
      "globalism": -0.035895,
      "green": 0.259587,
      "ukraine": 0.160241,
      "greenDeal": 0.254395
    },
    "axisSalience": {
      "econ": 0.427731,
      "culture": 0.420798,
      "authority": 0.537104
    },
    "issuePrefs": {
      "housing": 0.009896,
      "transport": -4.8e-05,
      "security": 0.264742,
      "healthcare": 0.013405,
      "climate": -0.258133,
      "industry": -0.06918,
      "education": 0.01165,
      "taxes": -0.013025
    },
    "issueSalience": {
      "housing": 0.285542,
      "transport": 0.280027,
      "security": 0.428255,
      "healthcare": 0.287507,
      "climate": 0.424555,
      "industry": 0.318741,
      "education": 0.286524,
      "taxes": 0.287294
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.488811,
    "turnoutBase": 0.590422,
    "volatility": 0.518915
  },
  {
    "id": "ess_center_40_54_tertiary_town_center",
    "name": "stred - 40-54 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001558,
    "position": {
      "econ": 0.014227,
      "culture": -0.058221,
      "authority": 0.056911
    },
    "space": {
      "econ": 0.014227,
      "culture": -0.058221,
      "authority": 0.056911,
      "establishment": 0.163241,
      "globalism": 0.35164,
      "green": 0.232697,
      "ukraine": 0.124381,
      "greenDeal": 0.532503
    },
    "axisSalience": {
      "econ": 0.425975,
      "culture": 0.444453,
      "authority": 0.400488
    },
    "issuePrefs": {
      "housing": -0.000838,
      "transport": 0.04912,
      "security": -0.054263,
      "healthcare": -0.014901,
      "climate": -0.316643,
      "industry": -0.131736,
      "education": -0.060398,
      "taxes": 0.003257
    },
    "issueSalience": {
      "housing": 0.280469,
      "transport": 0.307507,
      "security": 0.310387,
      "healthcare": 0.288345,
      "climate": 0.45732,
      "industry": 0.353772,
      "education": 0.313823,
      "taxes": 0.281824
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.634158,
    "turnoutBase": 0.655713,
    "volatility": 0.555308
  },
  {
    "id": "ess_center_25_39_tertiary_town_center",
    "name": "stred - 25-39 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001538,
    "position": {
      "econ": -0.016513,
      "culture": 0.056121,
      "authority": 0.15556
    },
    "space": {
      "econ": -0.016513,
      "culture": 0.056121,
      "authority": 0.15556,
      "establishment": 0.231305,
      "globalism": 0.270988,
      "green": 0.027733,
      "ukraine": 0.109507,
      "greenDeal": 0.27416
    },
    "axisSalience": {
      "econ": 0.426936,
      "culture": 0.443571,
      "authority": 0.436002
    },
    "issuePrefs": {
      "housing": 0.002348,
      "transport": 0.026545,
      "security": 0.054623,
      "healthcare": 0.016379,
      "climate": -0.096733,
      "industry": -0.063293,
      "education": -0.075297,
      "taxes": -0.005155
    },
    "issueSalience": {
      "housing": 0.281315,
      "transport": 0.294865,
      "security": 0.310589,
      "healthcare": 0.289172,
      "climate": 0.33417,
      "industry": 0.315444,
      "education": 0.322166,
      "taxes": 0.282887
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.634764,
    "turnoutBase": 0.638096,
    "volatility": 0.529183
  },
  {
    "id": "ess_center_55_plus_tertiary_rural_center",
    "name": "stred - 55+ - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001435,
    "position": {
      "econ": 0.000458,
      "culture": 0.049818,
      "authority": 0.170425
    },
    "space": {
      "econ": 0.000458,
      "culture": 0.049818,
      "authority": 0.170425,
      "establishment": -0.04897,
      "globalism": 0.051124,
      "green": 0.201367,
      "ukraine": -0.184931,
      "greenDeal": 0.281109
    },
    "axisSalience": {
      "econ": 0.420192,
      "culture": 0.440923,
      "authority": 0.441353
    },
    "issuePrefs": {
      "housing": -0.00623,
      "transport": -0.002947,
      "security": 0.125205,
      "healthcare": 0.003656,
      "climate": -0.223695,
      "industry": -0.058288,
      "education": -0.028793,
      "taxes": 0.006308
    },
    "issueSalience": {
      "housing": 0.283489,
      "transport": 0.28165,
      "security": 0.350115,
      "healthcare": 0.282047,
      "climate": 0.405269,
      "industry": 0.312642,
      "education": 0.296124,
      "taxes": 0.283532
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.59915,
    "turnoutBase": 0.728286,
    "volatility": 0.484407
  },
  {
    "id": "ess_center_15_24_lower_large_town_right",
    "name": "stred - 15-24 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001312,
    "position": {
      "econ": 0.020943,
      "culture": -0.003704,
      "authority": -0.09463
    },
    "space": {
      "econ": 0.020943,
      "culture": -0.003704,
      "authority": -0.09463,
      "establishment": 0.491276,
      "globalism": 0.226344,
      "green": 0.104463,
      "ukraine": 0.159227,
      "greenDeal": 0.229435
    },
    "axisSalience": {
      "econ": 0.428796,
      "culture": 0.421555,
      "authority": 0.414067
    },
    "issuePrefs": {
      "housing": -0.011074,
      "transport": 0.022592,
      "security": -0.113188,
      "healthcare": -0.015375,
      "climate": -0.139455,
      "industry": -0.046097,
      "education": -0.053526,
      "taxes": 0.014635
    },
    "issueSalience": {
      "housing": 0.286202,
      "transport": 0.292652,
      "security": 0.343385,
      "healthcare": 0.28861,
      "climate": 0.358095,
      "industry": 0.305814,
      "education": 0.309974,
      "taxes": 0.288195
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.452883,
    "turnoutBase": 0.527195,
    "volatility": 0.495785
  },
  {
    "id": "ess_center_55_plus_lower_town_center",
    "name": "stred - 55+ - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001312,
    "position": {
      "econ": -0.013929,
      "culture": 0.029092,
      "authority": 0.097869
    },
    "space": {
      "econ": -0.013929,
      "culture": 0.029092,
      "authority": 0.097869,
      "establishment": 0.341167,
      "globalism": 0.39217,
      "green": 0.060546,
      "ukraine": 0.333415,
      "greenDeal": 0.535058
    },
    "axisSalience": {
      "econ": 0.42585,
      "culture": 0.432219,
      "authority": 0.415233
    },
    "issuePrefs": {
      "housing": 0.00417,
      "transport": 0.045306,
      "security": -0.028439,
      "healthcare": 0.012356,
      "climate": -0.193409,
      "industry": -0.129585,
      "education": -0.093117,
      "taxes": -0.006538
    },
    "issueSalience": {
      "housing": 0.282335,
      "transport": 0.305371,
      "security": 0.295926,
      "healthcare": 0.286919,
      "climate": 0.388309,
      "industry": 0.352567,
      "education": 0.332145,
      "taxes": 0.283661
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.450824,
    "turnoutBase": 0.621941,
    "volatility": 0.539295
  },
  {
    "id": "ess_center_40_54_tertiary_large_town_right",
    "name": "stred - 40-54 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001292,
    "position": {
      "econ": 0.070606,
      "culture": 0.061324,
      "authority": -0.03331
    },
    "space": {
      "econ": 0.070606,
      "culture": 0.061324,
      "authority": -0.03331,
      "establishment": 0.067114,
      "globalism": 0.270676,
      "green": -0.148846,
      "ukraine": 0.085126,
      "greenDeal": 0.096128
    },
    "axisSalience": {
      "econ": 0.449655,
      "culture": 0.445756,
      "authority": 0.391991
    },
    "issuePrefs": {
      "housing": -0.046192,
      "transport": 0.003791,
      "security": -0.059013,
      "healthcare": -0.045931,
      "climate": 0.080253,
      "industry": 0.020446,
      "education": -0.097958,
      "taxes": 0.058195
    },
    "issueSalience": {
      "housing": 0.305868,
      "transport": 0.282123,
      "security": 0.313047,
      "healthcare": 0.305721,
      "climate": 0.324942,
      "industry": 0.29145,
      "education": 0.334856,
      "taxes": 0.312589
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.62161,
    "turnoutBase": 0.652349,
    "volatility": 0.46396
  },
  {
    "id": "ess_center_15_24_secondary_large_town_unknown",
    "name": "stred - 15-24 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.00121,
    "position": {
      "econ": 0.017758,
      "culture": 0.121478,
      "authority": -0.024527
    },
    "space": {
      "econ": 0.017758,
      "culture": 0.121478,
      "authority": -0.024527,
      "establishment": 0.422658,
      "globalism": 0.377532,
      "green": -0.171037,
      "ukraine": 0.617056,
      "greenDeal": 0.16833
    },
    "axisSalience": {
      "econ": 0.427458,
      "culture": 0.471021,
      "authority": 0.38883
    },
    "issuePrefs": {
      "housing": -0.024344,
      "transport": 0.018998,
      "security": -0.098513,
      "healthcare": -0.003068,
      "climate": 0.076014,
      "industry": -0.010364,
      "education": -0.129836,
      "taxes": 0.027363
    },
    "issueSalience": {
      "housing": 0.293633,
      "transport": 0.290639,
      "security": 0.335167,
      "healthcare": 0.281718,
      "climate": 0.322568,
      "industry": 0.285804,
      "education": 0.352708,
      "taxes": 0.295323
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.546465,
    "turnoutBase": 0.584793,
    "volatility": 0.461961
  },
  {
    "id": "ess_center_15_24_secondary_large_town_center",
    "name": "stred - 15-24 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001189,
    "position": {
      "econ": -0.040275,
      "culture": -0.099029,
      "authority": 0.208829
    },
    "space": {
      "econ": -0.040275,
      "culture": -0.099029,
      "authority": 0.208829,
      "establishment": 0.325467,
      "globalism": 0.186047,
      "green": -0.171552,
      "ukraine": 0.047999,
      "greenDeal": 0.140465
    },
    "axisSalience": {
      "econ": 0.436916,
      "culture": 0.461592,
      "authority": 0.455179
    },
    "issuePrefs": {
      "housing": 0.034035,
      "transport": 0.05022,
      "security": 0.064418,
      "healthcare": 0.021076,
      "climate": 0.084187,
      "industry": -0.070063,
      "education": 0.003396,
      "taxes": -0.040882
    },
    "issueSalience": {
      "housing": 0.299059,
      "transport": 0.308123,
      "security": 0.316074,
      "healthcare": 0.291802,
      "climate": 0.327145,
      "industry": 0.319235,
      "education": 0.281902,
      "taxes": 0.302894
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.5272,
    "turnoutBase": 0.581391,
    "volatility": 0.570708
  },
  {
    "id": "ess_center_25_39_secondary_large_town_right",
    "name": "stred - 25-39 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001189,
    "position": {
      "econ": 0.031769,
      "culture": -0.003624,
      "authority": -0.11271
    },
    "space": {
      "econ": 0.031769,
      "culture": -0.003624,
      "authority": -0.11271,
      "establishment": 0.066355,
      "globalism": 0.110156,
      "green": 0.191608,
      "ukraine": 0.178304,
      "greenDeal": 0.305856
    },
    "axisSalience": {
      "econ": 0.433343,
      "culture": 0.421522,
      "authority": 0.420576
    },
    "issuePrefs": {
      "housing": -0.017038,
      "transport": 0.005929,
      "security": -0.104987,
      "healthcare": -0.023164,
      "climate": -0.223598,
      "industry": -0.059444,
      "education": -0.030591,
      "taxes": 0.022439
    },
    "issueSalience": {
      "housing": 0.289541,
      "transport": 0.28332,
      "security": 0.338793,
      "healthcare": 0.292972,
      "climate": 0.405215,
      "industry": 0.313289,
      "education": 0.297131,
      "taxes": 0.292566
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.501918,
    "turnoutBase": 0.572322,
    "volatility": 0.494028
  },
  {
    "id": "ess_center_40_54_lower_large_town_right",
    "name": "stred - 40-54 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001189,
    "position": {
      "econ": 0.014455,
      "culture": -0.099454,
      "authority": 0.452995
    },
    "space": {
      "econ": 0.014455,
      "culture": -0.099454,
      "authority": 0.452995,
      "establishment": 0.639148,
      "globalism": 0.425121,
      "green": -0.103576,
      "ukraine": 0.748507,
      "greenDeal": 0.39136
    },
    "axisSalience": {
      "econ": 0.426071,
      "culture": 0.461771,
      "authority": 0.543078
    },
    "issuePrefs": {
      "housing": 0.003984,
      "transport": 0.065303,
      "security": 0.116607,
      "healthcare": -0.018364,
      "climate": -0.035006,
      "industry": -0.105179,
      "education": -0.062187,
      "taxes": -0.001527
    },
    "issueSalience": {
      "housing": 0.282231,
      "transport": 0.316569,
      "security": 0.3453,
      "healthcare": 0.290284,
      "climate": 0.299603,
      "industry": 0.3389,
      "education": 0.314825,
      "taxes": 0.280855
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.476639,
    "turnoutBase": 0.55237,
    "volatility": 0.502477
  },
  {
    "id": "ess_center_55_plus_tertiary_large_town_center",
    "name": "stred - 55+ - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001169,
    "position": {
      "econ": 0.040264,
      "culture": -0.015952,
      "authority": 0.305946
    },
    "space": {
      "econ": 0.040264,
      "culture": -0.015952,
      "authority": 0.305946,
      "establishment": 0.239902,
      "globalism": 0.111528,
      "green": 0.11998,
      "ukraine": 0.132182,
      "greenDeal": 0.676838
    },
    "axisSalience": {
      "econ": 0.436911,
      "culture": 0.4267,
      "authority": 0.49014
    },
    "issuePrefs": {
      "housing": -0.020231,
      "transport": 0.006189,
      "security": 0.15457,
      "healthcare": -0.030266,
      "climate": -0.2759,
      "industry": -0.146791,
      "education": -0.028616,
      "taxes": 0.027076
    },
    "issueSalience": {
      "housing": 0.291329,
      "transport": 0.283466,
      "security": 0.366559,
      "healthcare": 0.296949,
      "climate": 0.434504,
      "industry": 0.362203,
      "education": 0.296025,
      "taxes": 0.295163
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.625884,
    "turnoutBase": 0.738397,
    "volatility": 0.458409
  },
  {
    "id": "ess_center_40_54_tertiary_large_town_center",
    "name": "stred - 40-54 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001148,
    "position": {
      "econ": 0.029584,
      "culture": -0.066391,
      "authority": -0.254836
    },
    "space": {
      "econ": 0.029584,
      "culture": -0.066391,
      "authority": -0.254836,
      "establishment": 0.158271,
      "globalism": 0.318478,
      "green": 0.08241,
      "ukraine": 0.256662,
      "greenDeal": 0.359466
    },
    "axisSalience": {
      "econ": 0.432425,
      "culture": 0.447884,
      "authority": 0.471741
    },
    "issuePrefs": {
      "housing": -0.008304,
      "transport": 0.042772,
      "security": -0.254447,
      "healthcare": -0.026612,
      "climate": -0.159986,
      "industry": -0.084614,
      "education": -0.053929,
      "taxes": 0.013333
    },
    "issueSalience": {
      "housing": 0.28465,
      "transport": 0.303952,
      "security": 0.42249,
      "healthcare": 0.294902,
      "climate": 0.369592,
      "industry": 0.327384,
      "education": 0.3102,
      "taxes": 0.287467
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.63177,
    "turnoutBase": 0.655539,
    "volatility": 0.555756
  },
  {
    "id": "ess_center_55_plus_lower_large_town_center",
    "name": "stred - 55+ - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001148,
    "position": {
      "econ": -0.084606,
      "culture": 0.040415,
      "authority": -0.049232
    },
    "space": {
      "econ": -0.084606,
      "culture": 0.040415,
      "authority": -0.049232,
      "establishment": 0.020581,
      "globalism": -0.499526,
      "green": 0.067148,
      "ukraine": -0.713633,
      "greenDeal": -0.233528
    },
    "axisSalience": {
      "econ": 0.455534,
      "culture": 0.436974,
      "authority": 0.397723
    },
    "issuePrefs": {
      "housing": 0.041683,
      "transport": -0.046066,
      "security": 0.127798,
      "healthcare": 0.064149,
      "climate": 0.017041,
      "industry": 0.024403,
      "education": 0.116056,
      "taxes": -0.056066
    },
    "issueSalience": {
      "housing": 0.303343,
      "transport": 0.305797,
      "security": 0.351567,
      "healthcare": 0.315924,
      "climate": 0.289543,
      "industry": 0.293666,
      "education": 0.344991,
      "taxes": 0.311397
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.371675,
    "turnoutBase": 0.61072,
    "volatility": 0.568148
  },
  {
    "id": "ess_center_55_plus_secondary_rural_left",
    "name": "stred - 55+ - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001128,
    "position": {
      "econ": -0.03798,
      "culture": 0.008704,
      "authority": 0.045433
    },
    "space": {
      "econ": -0.03798,
      "culture": 0.008704,
      "authority": 0.045433,
      "establishment": 0.021863,
      "globalism": 0.147691,
      "green": 0.153241,
      "ukraine": 0.181159,
      "greenDeal": 0.311245
    },
    "axisSalience": {
      "econ": 0.435952,
      "culture": 0.423656,
      "authority": 0.396356
    },
    "issuePrefs": {
      "housing": 0.019845,
      "transport": 0.025651,
      "security": -0.010472,
      "healthcare": 0.028042,
      "climate": -0.197482,
      "industry": -0.090603,
      "education": -0.026423,
      "taxes": -0.026301
    },
    "issueSalience": {
      "housing": 0.291113,
      "transport": 0.294365,
      "security": 0.285864,
      "healthcare": 0.295704,
      "climate": 0.39059,
      "industry": 0.330738,
      "education": 0.294797,
      "taxes": 0.294729
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.50061,
    "turnoutBase": 0.670765,
    "volatility": 0.428032
  },
  {
    "id": "ess_center_25_39_tertiary_rural_center",
    "name": "stred - 25-39 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001046,
    "position": {
      "econ": -0.015102,
      "culture": 0.031977,
      "authority": 0.027954
    },
    "space": {
      "econ": -0.015102,
      "culture": 0.031977,
      "authority": 0.027954,
      "establishment": 0.202591,
      "globalism": 0.095226,
      "green": 0.066017,
      "ukraine": 0.291621,
      "greenDeal": 0.491464
    },
    "axisSalience": {
      "econ": 0.426343,
      "culture": 0.43343,
      "authority": 0.390064
    },
    "issuePrefs": {
      "housing": 0.004469,
      "transport": 0.009447,
      "security": -0.014185,
      "healthcare": 0.013431,
      "climate": -0.185142,
      "industry": -0.119142,
      "education": -0.028517,
      "taxes": -0.007036
    },
    "issueSalience": {
      "housing": 0.282502,
      "transport": 0.28529,
      "security": 0.287944,
      "healthcare": 0.287522,
      "climate": 0.383679,
      "industry": 0.34672,
      "education": 0.29597,
      "taxes": 0.28394
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.621921,
    "turnoutBase": 0.637091,
    "volatility": 0.531767
  },
  {
    "id": "ess_center_55_plus_lower_large_town_right",
    "name": "stred - 55+ - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001046,
    "position": {
      "econ": 0.020152,
      "culture": 0.093163,
      "authority": 0.095822
    },
    "space": {
      "econ": 0.020152,
      "culture": 0.093163,
      "authority": 0.095822,
      "establishment": 0.079039,
      "globalism": 0.256073,
      "green": 0.055022,
      "ukraine": -0.363105,
      "greenDeal": -0.309226
    },
    "axisSalience": {
      "econ": 0.428464,
      "culture": 0.459129,
      "authority": 0.414496
    },
    "issuePrefs": {
      "housing": -0.022263,
      "transport": 0.008921,
      "security": 0.068451,
      "healthcare": -0.007056,
      "climate": 0.046967,
      "industry": 0.100253,
      "education": -0.09378,
      "taxes": 0.025689
    },
    "issueSalience": {
      "housing": 0.292467,
      "transport": 0.284996,
      "security": 0.318332,
      "healthcare": 0.283951,
      "climate": 0.306302,
      "industry": 0.336142,
      "education": 0.332517,
      "taxes": 0.294386
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.421687,
    "turnoutBase": 0.612766,
    "volatility": 0.462886
  },
  {
    "id": "ess_center_25_39_secondary_rural_left",
    "name": "stred - 25-39 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001025,
    "position": {
      "econ": 0.00537,
      "culture": 0.012254,
      "authority": 0.227936
    },
    "space": {
      "econ": 0.00537,
      "culture": 0.012254,
      "authority": 0.227936,
      "establishment": 0.340192,
      "globalism": 0.189161,
      "green": -0.04315,
      "ukraine": 0.081077,
      "greenDeal": 0.171028
    },
    "axisSalience": {
      "econ": 0.422256,
      "culture": 0.425146,
      "authority": 0.462057
    },
    "issuePrefs": {
      "housing": -0.004424,
      "transport": 0.019151,
      "security": 0.104216,
      "healthcare": -0.002886,
      "climate": -0.01682,
      "industry": -0.036371,
      "education": -0.047193,
      "taxes": 0.005337
    },
    "issueSalience": {
      "housing": 0.282478,
      "transport": 0.290725,
      "security": 0.338361,
      "healthcare": 0.281616,
      "climate": 0.289419,
      "industry": 0.300368,
      "education": 0.306428,
      "taxes": 0.282989
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.528565,
    "turnoutBase": 0.581907,
    "volatility": 0.469383
  },
  {
    "id": "ess_center_15_24_secondary_town_unknown",
    "name": "stred - 15-24 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001005,
    "position": {
      "econ": 0.023957,
      "culture": 0.098468,
      "authority": -0.162023
    },
    "space": {
      "econ": 0.023957,
      "culture": 0.098468,
      "authority": -0.162023,
      "establishment": 0.01441,
      "globalism": 0.366371,
      "green": 0.286343,
      "ukraine": 0.06153,
      "greenDeal": 0.488178
    },
    "axisSalience": {
      "econ": 0.430062,
      "culture": 0.461357,
      "authority": 0.438328
    },
    "issuePrefs": {
      "housing": -0.024992,
      "transport": 0.020251,
      "security": -0.143752,
      "healthcare": -0.009371,
      "climate": -0.342857,
      "industry": -0.088418,
      "education": -0.120815,
      "taxes": 0.029065
    },
    "issueSalience": {
      "housing": 0.293996,
      "transport": 0.291341,
      "security": 0.360501,
      "healthcare": 0.285248,
      "climate": 0.472,
      "industry": 0.329514,
      "education": 0.347656,
      "taxes": 0.296276
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.513135,
    "turnoutBase": 0.570504,
    "volatility": 0.498703
  },
  {
    "id": "ess_center_25_39_secondary_rural_unknown",
    "name": "stred - 25-39 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001005,
    "position": {
      "econ": 0.008292,
      "culture": 0.101904,
      "authority": -0.149756
    },
    "space": {
      "econ": 0.008292,
      "culture": 0.101904,
      "authority": -0.149756,
      "establishment": 0.210195,
      "globalism": 0.190817,
      "green": 0.267586,
      "ukraine": 0.369283,
      "greenDeal": 0.533159
    },
    "axisSalience": {
      "econ": 0.423483,
      "culture": 0.4628,
      "authority": 0.433912
    },
    "issuePrefs": {
      "housing": -0.016789,
      "transport": 0.002482,
      "security": -0.128205,
      "healthcare": 0.002182,
      "climate": -0.341947,
      "industry": -0.105801,
      "education": -0.079636,
      "taxes": 0.018199
    },
    "issueSalience": {
      "housing": 0.289402,
      "transport": 0.28139,
      "security": 0.351795,
      "healthcare": 0.281222,
      "climate": 0.47149,
      "industry": 0.339249,
      "education": 0.324596,
      "taxes": 0.290191
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.518265,
    "turnoutBase": 0.577357,
    "volatility": 0.481082
  },
  {
    "id": "ess_center_40_54_tertiary_town_unknown",
    "name": "stred - 40-54 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000943,
    "position": {
      "econ": -0.005346,
      "culture": -0.025901,
      "authority": 0.212694
    },
    "space": {
      "econ": -0.005346,
      "culture": -0.025901,
      "authority": 0.212694,
      "establishment": 0.093447,
      "globalism": 0.298135,
      "green": 0.212596,
      "ukraine": 0.225977,
      "greenDeal": 0.550694
    },
    "axisSalience": {
      "econ": 0.422245,
      "culture": 0.430879,
      "authority": 0.45657
    },
    "issuePrefs": {
      "housing": 0.006048,
      "transport": 0.041775,
      "security": 0.052875,
      "healthcare": 0.001777,
      "climate": -0.307263,
      "industry": -0.139288,
      "education": -0.055241,
      "taxes": -0.006957
    },
    "issueSalience": {
      "housing": 0.283387,
      "transport": 0.303394,
      "security": 0.30961,
      "healthcare": 0.280995,
      "climate": 0.452068,
      "industry": 0.358001,
      "education": 0.310935,
      "taxes": 0.283896
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.625364,
    "turnoutBase": 0.653271,
    "volatility": 0.46159
  },
  {
    "id": "ess_center_55_plus_secondary_rural_unknown",
    "name": "stred - 55+ - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000882,
    "position": {
      "econ": 0.011942,
      "culture": 0.079034,
      "authority": -0.328427
    },
    "space": {
      "econ": 0.011942,
      "culture": 0.079034,
      "authority": -0.328427,
      "establishment": -0.417935,
      "globalism": -0.559247,
      "green": 0.019445,
      "ukraine": -0.637176,
      "greenDeal": 0.294053
    },
    "axisSalience": {
      "econ": 0.425016,
      "culture": 0.453194,
      "authority": 0.498234
    },
    "issuePrefs": {
      "housing": -0.016052,
      "transport": -0.084321,
      "security": -0.029857,
      "healthcare": -0.002275,
      "climate": -0.096335,
      "industry": -0.050853,
      "education": 0.092506,
      "taxes": 0.018082
    },
    "issueSalience": {
      "housing": 0.288989,
      "transport": 0.32722,
      "security": 0.29672,
      "healthcare": 0.281274,
      "climate": 0.333948,
      "industry": 0.308478,
      "education": 0.331803,
      "taxes": 0.290126
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.42301,
    "turnoutBase": 0.655372,
    "volatility": 0.467614
  },
  {
    "id": "ess_center_55_plus_lower_rural_center",
    "name": "stred - 55+ - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000738,
    "position": {
      "econ": -0.094539,
      "culture": -0.043821,
      "authority": 0.689623
    },
    "space": {
      "econ": -0.094539,
      "culture": -0.043821,
      "authority": 0.689623,
      "establishment": 0.511747,
      "globalism": 0.429497,
      "green": 0.222244,
      "ukraine": 0.183832,
      "greenDeal": 0.947848
    },
    "axisSalience": {
      "econ": 0.459706,
      "culture": 0.438405,
      "authority": 0.628264
    },
    "issuePrefs": {
      "housing": 0.057255,
      "transport": 0.083062,
      "security": 0.32328,
      "healthcare": 0.064562,
      "climate": -0.425413,
      "industry": -0.278859,
      "education": -0.056463,
      "taxes": -0.073327
    },
    "issueSalience": {
      "housing": 0.312063,
      "transport": 0.326515,
      "security": 0.461037,
      "healthcare": 0.316155,
      "climate": 0.518231,
      "industry": 0.436161,
      "education": 0.311619,
      "taxes": 0.321063
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.46671,
    "turnoutBase": 0.627911,
    "volatility": 0.523943
  },
  {
    "id": "ess_center_40_54_tertiary_large_town_left",
    "name": "stred - 40-54 - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000697,
    "position": {
      "econ": -0.014571,
      "culture": -0.01497,
      "authority": 0.227413
    },
    "space": {
      "econ": -0.014571,
      "culture": -0.01497,
      "authority": 0.227413,
      "establishment": -0.00354,
      "globalism": 0.355925,
      "green": 0.483811,
      "ukraine": 0.155189,
      "greenDeal": 0.822037
    },
    "axisSalience": {
      "econ": 0.42612,
      "culture": 0.426287,
      "authority": 0.461869
    },
    "issuePrefs": {
      "housing": 0.009811,
      "transport": 0.049048,
      "security": 0.060323,
      "healthcare": 0.009294,
      "climate": -0.578514,
      "industry": -0.206686,
      "education": -0.069567,
      "taxes": -0.012288
    },
    "issueSalience": {
      "housing": 0.285494,
      "transport": 0.307467,
      "security": 0.313781,
      "healthcare": 0.285204,
      "climate": 0.603968,
      "industry": 0.395744,
      "education": 0.318957,
      "taxes": 0.286881
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.621072,
    "turnoutBase": 0.649876,
    "volatility": 0.470319
  },
  {
    "id": "ess_center_40_54_secondary_town_unknown",
    "name": "stred - 40-54 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000677,
    "position": {
      "econ": 0.01653,
      "culture": 0.075272,
      "authority": 0.224859
    },
    "space": {
      "econ": 0.01653,
      "culture": 0.075272,
      "authority": 0.224859,
      "establishment": -0.125739,
      "globalism": 0.24705,
      "green": 0.085355,
      "ukraine": -0.076483,
      "greenDeal": 0.227363
    },
    "axisSalience": {
      "econ": 0.426943,
      "culture": 0.451614,
      "authority": 0.460949
    },
    "issuePrefs": {
      "housing": -0.018124,
      "transport": 0.011964,
      "security": 0.122139,
      "healthcare": -0.00588,
      "climate": -0.125117,
      "industry": -0.033414,
      "education": -0.084664,
      "taxes": 0.020934
    },
    "issueSalience": {
      "housing": 0.29015,
      "transport": 0.2867,
      "security": 0.348398,
      "healthcare": 0.283293,
      "climate": 0.350066,
      "industry": 0.298712,
      "education": 0.327412,
      "taxes": 0.291723
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.494764,
    "turnoutBase": 0.585599,
    "volatility": 0.531317
  },
  {
    "id": "ess_center_55_plus_tertiary_town_center",
    "name": "stred - 55+ - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000677,
    "position": {
      "econ": -0.052601,
      "culture": 0.054921,
      "authority": 0.258839
    },
    "space": {
      "econ": -0.052601,
      "culture": 0.054921,
      "authority": 0.258839,
      "establishment": 0.200569,
      "globalism": 0.238346,
      "green": 0.156886,
      "ukraine": 0.158365,
      "greenDeal": 0.374718
    },
    "axisSalience": {
      "econ": 0.442092,
      "culture": 0.443067,
      "authority": 0.473182
    },
    "issuePrefs": {
      "housing": 0.02234,
      "transport": 0.031866,
      "security": 0.120287,
      "healthcare": 0.042266,
      "climate": -0.217879,
      "industry": -0.104243,
      "education": -0.059034,
      "taxes": -0.031282
    },
    "issueSalience": {
      "housing": 0.29251,
      "transport": 0.297845,
      "security": 0.34736,
      "healthcare": 0.303669,
      "climate": 0.402012,
      "industry": 0.338376,
      "education": 0.313059,
      "taxes": 0.297518
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.630346,
    "turnoutBase": 0.73702,
    "volatility": 0.461949
  },
  {
    "id": "ess_center_15_24_lower_large_town_unknown",
    "name": "stred - 15-24 - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000656,
    "position": {
      "econ": 0.006784,
      "culture": 0.104241,
      "authority": -0.066537
    },
    "space": {
      "econ": 0.006784,
      "culture": 0.104241,
      "authority": -0.066537,
      "establishment": 0.088145,
      "globalism": -0.278118,
      "green": -0.125736,
      "ukraine": -0.837044,
      "greenDeal": 0.239142
    },
    "axisSalience": {
      "econ": 0.422849,
      "culture": 0.463781,
      "authority": 0.403953
    },
    "issuePrefs": {
      "housing": -0.01624,
      "transport": -0.053834,
      "security": 0.104959,
      "healthcare": 0.003455,
      "climate": 0.02357,
      "industry": -0.03551,
      "education": 0.023074,
      "taxes": 0.017394
    },
    "issueSalience": {
      "housing": 0.289095,
      "transport": 0.310147,
      "security": 0.338777,
      "healthcare": 0.281935,
      "climate": 0.293199,
      "industry": 0.299886,
      "education": 0.292921,
      "taxes": 0.28974
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.390364,
    "turnoutBase": 0.513085,
    "volatility": 0.532067
  },
  {
    "id": "ess_center_15_24_lower_town_right",
    "name": "stred - 15-24 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000656,
    "position": {
      "econ": 0.077497,
      "culture": -0.038474,
      "authority": 0.088886
    },
    "space": {
      "econ": 0.077497,
      "culture": -0.038474,
      "authority": 0.088886,
      "establishment": -0.092983,
      "globalism": -0.032511,
      "green": 0.376544,
      "ukraine": -0.033231,
      "greenDeal": 0.476939
    },
    "axisSalience": {
      "econ": 0.452549,
      "culture": 0.436159,
      "authority": 0.411999
    },
    "issuePrefs": {
      "housing": -0.038007,
      "transport": -0.01635,
      "security": 0.052847,
      "healthcare": -0.058876,
      "climate": -0.404655,
      "industry": -0.085742,
      "education": 0.002019,
      "taxes": 0.051181
    },
    "issueSalience": {
      "housing": 0.301284,
      "transport": 0.289156,
      "security": 0.309594,
      "healthcare": 0.312971,
      "climate": 0.506607,
      "industry": 0.328015,
      "education": 0.281131,
      "taxes": 0.308661
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.390611,
    "turnoutBase": 0.506746,
    "volatility": 0.548368
  },
  {
    "id": "ess_center_40_54_secondary_rural_unknown",
    "name": "stred - 40-54 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000656,
    "position": {
      "econ": -0.001469,
      "culture": 0.101515,
      "authority": 0.194591
    },
    "space": {
      "econ": -0.001469,
      "culture": 0.101515,
      "authority": 0.194591,
      "establishment": -0.236189,
      "globalism": -0.213591,
      "green": 0.037344,
      "ukraine": -0.205205,
      "greenDeal": -0.117184
    },
    "axisSalience": {
      "econ": 0.420617,
      "culture": 0.462636,
      "authority": 0.450053
    },
    "issuePrefs": {
      "housing": -0.011374,
      "transport": -0.043536,
      "security": 0.203934,
      "healthcare": 0.009179,
      "climate": 0.005924,
      "industry": 0.045721,
      "education": 0.011812,
      "taxes": 0.011124
    },
    "issueSalience": {
      "housing": 0.286369,
      "transport": 0.30438,
      "security": 0.394203,
      "healthcare": 0.28514,
      "climate": 0.283318,
      "industry": 0.305604,
      "education": 0.286615,
      "taxes": 0.28623
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.458289,
    "turnoutBase": 0.581733,
    "volatility": 0.541257
  },
  {
    "id": "ess_center_55_plus_tertiary_town_left",
    "name": "stred - 55+ - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000656,
    "position": {
      "econ": 0.095699,
      "culture": 0.05363,
      "authority": -0.064746
    },
    "space": {
      "econ": 0.095699,
      "culture": 0.05363,
      "authority": -0.064746,
      "establishment": -0.070289,
      "globalism": -0.79642,
      "green": -0.320887,
      "ukraine": -0.673367,
      "greenDeal": -0.275963
    },
    "axisSalience": {
      "econ": 0.460193,
      "culture": 0.442525,
      "authority": 0.403309
    },
    "issuePrefs": {
      "housing": -0.05907,
      "transport": -0.129148,
      "security": 0.172099,
      "healthcare": -0.064613,
      "climate": 0.308308,
      "industry": 0.119906,
      "education": 0.133474,
      "taxes": 0.075339
    },
    "issueSalience": {
      "housing": 0.313079,
      "transport": 0.352323,
      "security": 0.376375,
      "healthcare": 0.316183,
      "climate": 0.452653,
      "industry": 0.347147,
      "education": 0.354746,
      "taxes": 0.32219
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.546592,
    "turnoutBase": 0.72754,
    "volatility": 0.386326
  },
  {
    "id": "ess_center_15_24_lower_large_town_center",
    "name": "stred - 15-24 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000636,
    "position": {
      "econ": -0.022655,
      "culture": -0.107635,
      "authority": -0.018371
    },
    "space": {
      "econ": -0.022655,
      "culture": -0.107635,
      "authority": -0.018371,
      "establishment": 0.282679,
      "globalism": 0.071752,
      "green": 0.128562,
      "ukraine": 0.141181,
      "greenDeal": 0.326699
    },
    "axisSalience": {
      "econ": 0.429515,
      "culture": 0.465207,
      "authority": 0.386613
    },
    "issuePrefs": {
      "housing": 0.025376,
      "transport": 0.033648,
      "security": -0.065737,
      "healthcare": 0.007701,
      "climate": -0.18404,
      "industry": -0.108203,
      "education": 0.027324,
      "taxes": -0.029228
    },
    "issueSalience": {
      "housing": 0.294211,
      "transport": 0.298843,
      "security": 0.316813,
      "healthcare": 0.284312,
      "climate": 0.383063,
      "industry": 0.340594,
      "education": 0.295301,
      "taxes": 0.296368
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.426919,
    "turnoutBase": 0.519894,
    "volatility": 0.614559
  },
  {
    "id": "ess_center_15_24_secondary_rural_unknown",
    "name": "stred - 15-24 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000636,
    "position": {
      "econ": 0.010109,
      "culture": 0.03371,
      "authority": 0.018172
    },
    "space": {
      "econ": 0.010109,
      "culture": 0.03371,
      "authority": 0.018172,
      "establishment": 0.177695,
      "globalism": 0.48501,
      "green": 0.64244,
      "ukraine": 0.402054,
      "greenDeal": 0.57996
    },
    "axisSalience": {
      "econ": 0.424246,
      "culture": 0.434158,
      "authority": 0.386542
    },
    "issuePrefs": {
      "housing": -0.009605,
      "transport": 0.049606,
      "security": -0.098761,
      "healthcare": -0.004582,
      "climate": -0.624946,
      "industry": -0.128472,
      "education": -0.120927,
      "taxes": 0.011324
    },
    "issueSalience": {
      "housing": 0.285379,
      "transport": 0.307779,
      "security": 0.335306,
      "healthcare": 0.282566,
      "climate": 0.629969,
      "industry": 0.351945,
      "education": 0.347719,
      "taxes": 0.286341
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.533316,
    "turnoutBase": 0.576219,
    "volatility": 0.484007
  },
  {
    "id": "ess_center_15_24_secondary_unknown_unknown",
    "name": "stred - 15-24 - stredoskolaci - nezname sidlo - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "unknown",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000615,
    "position": {
      "econ": 0.029515,
      "culture": 0.053322,
      "authority": 0.127092
    },
    "space": {
      "econ": 0.029515,
      "culture": 0.053322,
      "authority": 0.127092,
      "establishment": 0.075884,
      "globalism": 0.027986,
      "green": 0.102727,
      "ukraine": 0.754511,
      "greenDeal": 0.216854
    },
    "axisSalience": {
      "econ": 0.432396,
      "culture": 0.442395,
      "authority": 0.425753
    },
    "issuePrefs": {
      "housing": -0.022632,
      "transport": -0.013618,
      "security": 0.028329,
      "healthcare": -0.016985,
      "climate": -0.134683,
      "industry": -0.02887,
      "education": -0.031904,
      "taxes": 0.02765
    },
    "issueSalience": {
      "housing": 0.292674,
      "transport": 0.287626,
      "security": 0.295864,
      "healthcare": 0.289512,
      "climate": 0.355422,
      "industry": 0.296167,
      "education": 0.297866,
      "taxes": 0.295484
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.49775,
    "turnoutBase": 0.572656,
    "volatility": 0.49317
  },
  {
    "id": "ess_center_25_39_secondary_large_town_left",
    "name": "stred - 25-39 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000615,
    "position": {
      "econ": -0.031976,
      "culture": -0.064089,
      "authority": 0.413569
    },
    "space": {
      "econ": -0.031976,
      "culture": -0.064089,
      "authority": 0.413569,
      "establishment": 0.167373,
      "globalism": 0.133597,
      "green": 0.117665,
      "ukraine": 0.243716,
      "greenDeal": 0.284682
    },
    "axisSalience": {
      "econ": 0.43343,
      "culture": 0.446917,
      "authority": 0.528885
    },
    "issuePrefs": {
      "housing": 0.025278,
      "transport": 0.035562,
      "security": 0.194923,
      "healthcare": 0.017896,
      "climate": -0.16443,
      "industry": -0.094569,
      "education": 0.000714,
      "taxes": -0.030714
    },
    "issueSalience": {
      "housing": 0.294155,
      "transport": 0.299915,
      "security": 0.389157,
      "healthcare": 0.290022,
      "climate": 0.372081,
      "industry": 0.332958,
      "education": 0.2804,
      "taxes": 0.2972
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.511406,
    "turnoutBase": 0.575858,
    "volatility": 0.484936
  },
  {
    "id": "ess_center_55_plus_tertiary_rural_right",
    "name": "stred - 55+ - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000615,
    "position": {
      "econ": 0.08743,
      "culture": 0.078388,
      "authority": 0.240732
    },
    "space": {
      "econ": 0.08743,
      "culture": 0.078388,
      "authority": 0.240732,
      "establishment": 0.268112,
      "globalism": 0.337341,
      "green": 0.029036,
      "ukraine": 0.10979,
      "greenDeal": 0.685496
    },
    "axisSalience": {
      "econ": 0.456721,
      "culture": 0.452923,
      "authority": 0.466664
    },
    "issuePrefs": {
      "housing": -0.057493,
      "transport": 0.004514,
      "security": 0.101698,
      "healthcare": -0.056679,
      "climate": -0.212844,
      "industry": -0.110191,
      "education": -0.122634,
      "taxes": 0.072356
    },
    "issueSalience": {
      "housing": 0.312196,
      "transport": 0.282528,
      "security": 0.336951,
      "healthcare": 0.31174,
      "climate": 0.399193,
      "industry": 0.341707,
      "education": 0.348675,
      "taxes": 0.32052
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.641689,
    "turnoutBase": 0.739384,
    "volatility": 0.35587
  },
  {
    "id": "ess_center_15_24_secondary_town_right",
    "name": "stred - 15-24 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000554,
    "position": {
      "econ": 0.00015,
      "culture": -0.035663,
      "authority": 0.356787
    },
    "space": {
      "econ": 0.00015,
      "culture": -0.035663,
      "authority": 0.356787,
      "establishment": 0.49056,
      "globalism": -0.143735,
      "green": 0.257943,
      "ukraine": 0.369225,
      "greenDeal": 0.646994
    },
    "axisSalience": {
      "econ": 0.420063,
      "culture": 0.434979,
      "authority": 0.508443
    },
    "issuePrefs": {
      "housing": 0.004197,
      "transport": -0.010866,
      "security": 0.207557,
      "healthcare": -0.002961,
      "climate": -0.366877,
      "industry": -0.161629,
      "education": 0.044068,
      "taxes": -0.004172
    },
    "issueSalience": {
      "housing": 0.28235,
      "transport": 0.286085,
      "security": 0.396232,
      "healthcare": 0.281658,
      "climate": 0.485451,
      "industry": 0.370512,
      "education": 0.304678,
      "taxes": 0.282336
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.520621,
    "turnoutBase": 0.58717,
    "volatility": 0.45585
  },
  {
    "id": "ess_center_25_39_tertiary_town_left",
    "name": "stred - 25-39 - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000554,
    "position": {
      "econ": -0.091919,
      "culture": 0.080783,
      "authority": 0.032732
    },
    "space": {
      "econ": -0.091919,
      "culture": 0.080783,
      "authority": 0.032732,
      "establishment": -0.908832,
      "globalism": -0.819268,
      "green": 0.074085,
      "ukraine": -0.935971,
      "greenDeal": -0.851799
    },
    "axisSalience": {
      "econ": 0.458606,
      "culture": 0.453929,
      "authority": 0.391784
    },
    "issuePrefs": {
      "housing": 0.040861,
      "transport": -0.089873,
      "security": 0.265259,
      "healthcare": 0.072644,
      "climate": 0.185162,
      "industry": 0.17669,
      "education": 0.174025,
      "taxes": -0.056488
    },
    "issueSalience": {
      "housing": 0.302882,
      "transport": 0.330329,
      "security": 0.428545,
      "healthcare": 0.320681,
      "climate": 0.383691,
      "industry": 0.378946,
      "education": 0.377454,
      "taxes": 0.311633
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.478137,
    "turnoutBase": 0.598191,
    "volatility": 0.531795
  },
  {
    "id": "ess_center_40_54_lower_large_town_center",
    "name": "stred - 40-54 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000533,
    "position": {
      "econ": -0.128503,
      "culture": -0.044342,
      "authority": 0.121015
    },
    "space": {
      "econ": -0.128503,
      "culture": -0.044342,
      "authority": 0.121015,
      "establishment": 0.183419,
      "globalism": 0.632596,
      "green": 0.051448,
      "ukraine": -0.055905,
      "greenDeal": 0.753718
    },
    "axisSalience": {
      "econ": 0.473971,
      "culture": 0.438624,
      "authority": 0.423565
    },
    "issuePrefs": {
      "housing": 0.075998,
      "transport": 0.116019,
      "security": -0.046782,
      "healthcare": 0.088975,
      "climate": -0.248084,
      "industry": -0.247985,
      "education": -0.092811,
      "taxes": -0.097843
    },
    "issueSalience": {
      "housing": 0.322559,
      "transport": 0.344971,
      "security": 0.306198,
      "healthcare": 0.329826,
      "climate": 0.418927,
      "industry": 0.418872,
      "education": 0.331974,
      "taxes": 0.334792
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.452629,
    "turnoutBase": 0.53642,
    "volatility": 0.643492
  },
  {
    "id": "ess_center_40_54_tertiary_rural_right",
    "name": "stred - 40-54 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000533,
    "position": {
      "econ": 0.032065,
      "culture": -0.031136,
      "authority": 0.505006
    },
    "space": {
      "econ": 0.032065,
      "culture": -0.031136,
      "authority": 0.505006,
      "establishment": 0.639624,
      "globalism": 0.491083,
      "green": -0.10358,
      "ukraine": 0.526701,
      "greenDeal": 0.151132
    },
    "axisSalience": {
      "econ": 0.433467,
      "culture": 0.433077,
      "authority": 0.561802
    },
    "issuePrefs": {
      "housing": -0.0139,
      "transport": 0.056518,
      "security": 0.173855,
      "healthcare": -0.025578,
      "climate": 0.032261,
      "industry": -0.027126,
      "education": -0.104837,
      "taxes": 0.019351
    },
    "issueSalience": {
      "housing": 0.287784,
      "transport": 0.31165,
      "security": 0.377359,
      "healthcare": 0.294324,
      "climate": 0.298066,
      "industry": 0.295191,
      "education": 0.338708,
      "taxes": 0.290836
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.680635,
    "turnoutBase": 0.672387,
    "volatility": 0.412434
  },
  {
    "id": "ess_center_15_24_secondary_rural_right",
    "name": "stred - 15-24 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000492,
    "position": {
      "econ": 0.123834,
      "culture": -0.110165,
      "authority": 0.086816
    },
    "space": {
      "econ": 0.123834,
      "culture": -0.110165,
      "authority": 0.086816,
      "establishment": 0.33712,
      "globalism": 0.360517,
      "green": 0.15932,
      "ukraine": 0.420967,
      "greenDeal": 0.527839
    },
    "axisSalience": {
      "econ": 0.47201,
      "culture": 0.466269,
      "authority": 0.411254
    },
    "issuePrefs": {
      "housing": -0.054889,
      "transport": 0.032133,
      "security": -0.075591,
      "healthcare": -0.097974,
      "climate": -0.262506,
      "industry": -0.089547,
      "education": -0.070476,
      "taxes": 0.075941
    },
    "issueSalience": {
      "housing": 0.310738,
      "transport": 0.297995,
      "security": 0.322331,
      "healthcare": 0.334865,
      "climate": 0.427003,
      "industry": 0.330147,
      "education": 0.319467,
      "taxes": 0.322527
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.538601,
    "turnoutBase": 0.581799,
    "volatility": 0.469659
  },
  {
    "id": "ess_center_15_24_secondary_large_town_right",
    "name": "stred - 15-24 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000472,
    "position": {
      "econ": 0.033422,
      "culture": -0.055843,
      "authority": 0.152358
    },
    "space": {
      "econ": 0.033422,
      "culture": -0.055843,
      "authority": 0.152358,
      "establishment": 0.168971,
      "globalism": 0.134447,
      "green": -0.044937,
      "ukraine": 0.16677,
      "greenDeal": 0.306869
    },
    "axisSalience": {
      "econ": 0.434037,
      "culture": 0.443454,
      "authority": 0.434849
    },
    "issuePrefs": {
      "housing": -0.011681,
      "transport": 0.01783,
      "security": 0.041284,
      "healthcare": -0.028532,
      "climate": -0.053568,
      "industry": -0.068326,
      "education": -0.018055,
      "taxes": 0.017363
    },
    "issueSalience": {
      "housing": 0.286541,
      "transport": 0.289985,
      "security": 0.303119,
      "healthcare": 0.295978,
      "climate": 0.309998,
      "industry": 0.318263,
      "education": 0.290111,
      "taxes": 0.289723
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.511584,
    "turnoutBase": 0.575914,
    "volatility": 0.484793
  },
  {
    "id": "ess_center_15_24_lower_rural_right",
    "name": "stred - 15-24 - nizsi vzdelani - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000451,
    "position": {
      "econ": -0.051731,
      "culture": -0.022774,
      "authority": 0.084365
    },
    "space": {
      "econ": -0.051731,
      "culture": -0.022774,
      "authority": 0.084365,
      "establishment": 0.192097,
      "globalism": 0.420178,
      "green": 0.202613,
      "ukraine": 0.697179,
      "greenDeal": 0.216813
    },
    "axisSalience": {
      "econ": 0.441727,
      "culture": 0.429565,
      "authority": 0.410371
    },
    "issuePrefs": {
      "housing": 0.031185,
      "transport": 0.067453,
      "security": -0.085477,
      "healthcare": 0.035425,
      "climate": -0.206589,
      "industry": -0.079931,
      "education": -0.072053,
      "taxes": -0.039979
    },
    "issueSalience": {
      "housing": 0.297464,
      "transport": 0.317774,
      "security": 0.327867,
      "healthcare": 0.299838,
      "climate": 0.39569,
      "industry": 0.324761,
      "education": 0.32035,
      "taxes": 0.302388
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.440578,
    "turnoutBase": 0.516723,
    "volatility": 0.522711
  },
  {
    "id": "ess_center_40_54_secondary_large_town_unknown",
    "name": "stred - 40-54 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000451,
    "position": {
      "econ": -0.010002,
      "culture": -0.027117,
      "authority": 0.114957
    },
    "space": {
      "econ": -0.010002,
      "culture": -0.027117,
      "authority": 0.114957,
      "establishment": -0.287939,
      "globalism": -0.428487,
      "green": 0.270126,
      "ukraine": -0.205484,
      "greenDeal": 0.308913
    },
    "axisSalience": {
      "econ": 0.424201,
      "culture": 0.431389,
      "authority": 0.421384
    },
    "issuePrefs": {
      "housing": 0.008755,
      "transport": -0.044037,
      "security": 0.157247,
      "healthcare": 0.005032,
      "climate": -0.280986,
      "industry": -0.083621,
      "education": 0.106159,
      "taxes": -0.010456
    },
    "issueSalience": {
      "housing": 0.284903,
      "transport": 0.304661,
      "security": 0.368058,
      "healthcare": 0.282818,
      "climate": 0.437352,
      "industry": 0.326828,
      "education": 0.339449,
      "taxes": 0.285855
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.441256,
    "turnoutBase": 0.579922,
    "volatility": 0.545915
  },
  {
    "id": "ess_center_15_24_tertiary_rural_center",
    "name": "stred - 15-24 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000431,
    "position": {
      "econ": -0.138241,
      "culture": 0.114008,
      "authority": 0.306586
    },
    "space": {
      "econ": -0.138241,
      "culture": 0.114008,
      "authority": 0.306586,
      "establishment": 0.055402,
      "globalism": 0.28056,
      "green": 0.054503,
      "ukraine": 0.25995,
      "greenDeal": -0.035465
    },
    "axisSalience": {
      "econ": 0.478061,
      "culture": 0.467883,
      "authority": 0.490371
    },
    "issuePrefs": {
      "housing": 0.062352,
      "transport": 0.047706,
      "security": 0.150708,
      "healthcare": 0.108654,
      "climate": -0.029312,
      "industry": -0.034558,
      "education": -0.068448,
      "taxes": -0.085853
    },
    "issueSalience": {
      "housing": 0.314917,
      "transport": 0.306715,
      "security": 0.364397,
      "healthcare": 0.340846,
      "climate": 0.296415,
      "industry": 0.299352,
      "education": 0.318331,
      "taxes": 0.328077
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.621266,
    "turnoutBase": 0.631939,
    "volatility": 0.545014
  },
  {
    "id": "ess_center_55_plus_tertiary_large_town_left",
    "name": "stred - 55+ - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000431,
    "position": {
      "econ": -0.006976,
      "culture": -0.062247,
      "authority": 0.270604
    },
    "space": {
      "econ": -0.006976,
      "culture": -0.062247,
      "authority": 0.270604,
      "establishment": -0.084361,
      "globalism": 0.025657,
      "green": 0.112375,
      "ukraine": -0.608909,
      "greenDeal": 0.325584
    },
    "axisSalience": {
      "econ": 0.42293,
      "culture": 0.446144,
      "authority": 0.477418
    },
    "issuePrefs": {
      "housing": 0.011306,
      "transport": 0.016027,
      "security": 0.19444,
      "healthcare": 4.3e-05,
      "climate": -0.172074,
      "industry": -0.092553,
      "education": 0.017816,
      "taxes": -0.012492
    },
    "issueSalience": {
      "housing": 0.286332,
      "transport": 0.288975,
      "security": 0.388886,
      "healthcare": 0.280024,
      "climate": 0.376361,
      "industry": 0.33183,
      "education": 0.289977,
      "taxes": 0.286996
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.594791,
    "turnoutBase": 0.727047,
    "volatility": 0.387592
  },
  {
    "id": "ess_center_25_39_lower_town_center",
    "name": "stred - 25-39 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00039,
    "position": {
      "econ": -0.008116,
      "culture": -0.123797,
      "authority": -0.071306
    },
    "space": {
      "econ": -0.008116,
      "culture": -0.123797,
      "authority": -0.071306,
      "establishment": 0.5166,
      "globalism": 0.312167,
      "green": 0.281272,
      "ukraine": 0.795883,
      "greenDeal": 0.951976
    },
    "axisSalience": {
      "econ": 0.423409,
      "culture": 0.471995,
      "authority": 0.40567
    },
    "issuePrefs": {
      "housing": 0.019319,
      "transport": 0.061772,
      "security": -0.198734,
      "healthcare": -0.00406,
      "climate": -0.469069,
      "industry": -0.254491,
      "education": -0.0234,
      "taxes": -0.020699
    },
    "issueSalience": {
      "housing": 0.290819,
      "transport": 0.314593,
      "security": 0.391291,
      "healthcare": 0.282274,
      "climate": 0.542679,
      "industry": 0.422515,
      "education": 0.293104,
      "taxes": 0.291591
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.460058,
    "turnoutBase": 0.528081,
    "volatility": 0.593506
  },
  {
    "id": "ess_center_40_54_lower_town_center",
    "name": "stred - 40-54 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000349,
    "position": {
      "econ": -0.010229,
      "culture": -0.007768,
      "authority": 0.081782
    },
    "space": {
      "econ": -0.010229,
      "culture": -0.007768,
      "authority": 0.081782,
      "establishment": -0.182738,
      "globalism": -0.092798,
      "green": -0.046997,
      "ukraine": 0.031095,
      "greenDeal": -0.124016
    },
    "axisSalience": {
      "econ": 0.424296,
      "culture": 0.423263,
      "authority": 0.409441
    },
    "issuePrefs": {
      "housing": 0.006558,
      "transport": -0.00718,
      "security": 0.062746,
      "healthcare": 0.006743,
      "climate": 0.068563,
      "industry": 0.02366,
      "education": 0.025589,
      "taxes": -0.008297
    },
    "issueSalience": {
      "housing": 0.283672,
      "transport": 0.284021,
      "security": 0.315138,
      "healthcare": 0.283776,
      "climate": 0.318395,
      "industry": 0.29325,
      "education": 0.29433,
      "taxes": 0.284646
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.379813,
    "turnoutBase": 0.523604,
    "volatility": 0.676446
  },
  {
    "id": "ess_center_25_39_secondary_town_unknown",
    "name": "stred - 25-39 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000328,
    "position": {
      "econ": -0.003934,
      "culture": 0.037558,
      "authority": -0.062816
    },
    "space": {
      "econ": -0.003934,
      "culture": 0.037558,
      "authority": -0.062816,
      "establishment": -0.501142,
      "globalism": -0.400178,
      "green": 0.499803,
      "ukraine": -0.488207,
      "greenDeal": 0.284694
    },
    "axisSalience": {
      "econ": 0.421652,
      "culture": 0.435774,
      "authority": 0.402614
    },
    "issuePrefs": {
      "housing": -0.002343,
      "transport": -0.053798,
      "security": 0.082659,
      "healthcare": 0.005837,
      "climate": -0.439572,
      "industry": -0.063376,
      "education": 0.075838,
      "taxes": 0.001674
    },
    "issueSalience": {
      "housing": 0.281312,
      "transport": 0.310127,
      "security": 0.326289,
      "healthcare": 0.283269,
      "climate": 0.52616,
      "industry": 0.31549,
      "education": 0.322469,
      "taxes": 0.280938
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.425898,
    "turnoutBase": 0.55246,
    "volatility": 0.545103
  },
  {
    "id": "ess_center_25_39_tertiary_large_town_unknown",
    "name": "stred - 25-39 - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000328,
    "position": {
      "econ": -0.001002,
      "culture": 0.13601,
      "authority": -0.319215
    },
    "space": {
      "econ": -0.001002,
      "culture": 0.13601,
      "authority": -0.319215,
      "establishment": 0.08866,
      "globalism": 0.119719,
      "green": 0.508776,
      "ukraine": 0.361476,
      "greenDeal": 0.538023
    },
    "axisSalience": {
      "econ": 0.420421,
      "culture": 0.477124,
      "authority": 0.494918
    },
    "issuePrefs": {
      "housing": -0.01577,
      "transport": -0.009865,
      "security": -0.210298,
      "healthcare": 0.011602,
      "climate": -0.516965,
      "industry": -0.105105,
      "education": -0.073701,
      "taxes": 0.0156
    },
    "issueSalience": {
      "housing": 0.288831,
      "transport": 0.285524,
      "security": 0.397767,
      "healthcare": 0.286497,
      "climate": 0.569501,
      "industry": 0.338859,
      "education": 0.321273,
      "taxes": 0.288736
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.614276,
    "turnoutBase": 0.633103,
    "volatility": 0.442021
  },
  {
    "id": "ess_center_25_39_unknown_unknown_unknown",
    "name": "stred - 25-39 - nezname vzdelani - nezname sidlo - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "unknown",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000308,
    "position": {
      "econ": 0.004073,
      "culture": -0.014413,
      "authority": 0.107999
    },
    "space": {
      "econ": 0.004073,
      "culture": -0.014413,
      "authority": 0.107999,
      "establishment": -0.41708,
      "globalism": 0.442102,
      "green": -0.963718,
      "ukraine": 0.006613,
      "greenDeal": -0.81528
    },
    "axisSalience": {
      "econ": 0.421711,
      "culture": 0.426053,
      "authority": 0.41888
    },
    "issuePrefs": {
      "housing": -0.00051,
      "transport": 0.054628,
      "security": -0.017184,
      "healthcare": -0.004085,
      "climate": 0.922156,
      "industry": 0.194946,
      "education": -0.093195,
      "taxes": 0.001203
    },
    "issueSalience": {
      "housing": 0.280286,
      "transport": 0.310592,
      "security": 0.289623,
      "healthcare": 0.282288,
      "climate": 0.796407,
      "industry": 0.38917,
      "education": 0.332189,
      "taxes": 0.280674
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.47316,
    "turnoutBase": 0.545402,
    "volatility": 0.517537
  },
  {
    "id": "ess_center_40_54_lower_rural_left",
    "name": "stred - 40-54 - nizsi vzdelani - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000308,
    "position": {
      "econ": -0.078142,
      "culture": 0.119266,
      "authority": 0.106366
    },
    "space": {
      "econ": -0.078142,
      "culture": 0.119266,
      "authority": 0.106366,
      "establishment": 0.07972,
      "globalism": 0.21733,
      "green": 0.127927,
      "ukraine": 0.102166,
      "greenDeal": 0.624037
    },
    "axisSalience": {
      "econ": 0.452819,
      "culture": 0.470092,
      "authority": 0.418292
    },
    "issuePrefs": {
      "housing": 0.028666,
      "transport": 0.024147,
      "security": 0.052049,
      "healthcare": 0.065803,
      "climate": -0.266838,
      "industry": -0.164246,
      "education": -0.070802,
      "taxes": -0.04195
    },
    "issueSalience": {
      "housing": 0.296053,
      "transport": 0.293522,
      "security": 0.309147,
      "healthcare": 0.31685,
      "climate": 0.429429,
      "industry": 0.371978,
      "education": 0.319649,
      "taxes": 0.303492
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.419417,
    "turnoutBase": 0.53279,
    "volatility": 0.552825
  },
  {
    "id": "ess_center_25_39_tertiary_town_right",
    "name": "stred - 25-39 - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000287,
    "position": {
      "econ": 0.03463,
      "culture": 0.072427,
      "authority": 0.288123
    },
    "space": {
      "econ": 0.03463,
      "culture": 0.072427,
      "authority": 0.288123,
      "establishment": 0.020211,
      "globalism": 0.285522,
      "green": 0.597242,
      "ukraine": -0.133631,
      "greenDeal": 0.198165
    },
    "axisSalience": {
      "econ": 0.434545,
      "culture": 0.45042,
      "authority": 0.483724
    },
    "issuePrefs": {
      "housing": -0.027738,
      "transport": 0.012568,
      "security": 0.158212,
      "healthcare": -0.019139,
      "climate": -0.4855,
      "industry": -0.018593,
      "education": -0.096476,
      "taxes": 0.033625
    },
    "issueSalience": {
      "housing": 0.295533,
      "transport": 0.287038,
      "security": 0.368599,
      "healthcare": 0.290718,
      "climate": 0.55188,
      "industry": 0.290412,
      "education": 0.334026,
      "taxes": 0.29883
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.618748,
    "turnoutBase": 0.630707,
    "volatility": 0.448181
  },
  {
    "id": "ess_center_40_54_unknown_unknown_unknown",
    "name": "stred - 40-54 - nezname vzdelani - nezname sidlo - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "unknown",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000287,
    "position": {
      "econ": 0.005948,
      "culture": 0.055093,
      "authority": 0.141896
    },
    "space": {
      "econ": 0.005948,
      "culture": 0.055093,
      "authority": 0.141896,
      "establishment": 0.088834,
      "globalism": 0.061532,
      "green": 0.093065,
      "ukraine": -0.068993,
      "greenDeal": 0.306568
    },
    "axisSalience": {
      "econ": 0.422498,
      "culture": 0.443139,
      "authority": 0.431083
    },
    "issuePrefs": {
      "housing": -0.009882,
      "transport": -0.00402,
      "security": 0.097845,
      "healthcare": 0.000125,
      "climate": -0.152846,
      "industry": -0.060924,
      "education": -0.034247,
      "taxes": 0.010894
    },
    "issueSalience": {
      "housing": 0.285534,
      "transport": 0.282251,
      "security": 0.334793,
      "healthcare": 0.28007,
      "climate": 0.365594,
      "industry": 0.314117,
      "education": 0.299178,
      "taxes": 0.2861
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.490799,
    "turnoutBase": 0.583109,
    "volatility": 0.492005
  },
  {
    "id": "ess_center_55_plus_lower_town_right",
    "name": "stred - 55+ - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000287,
    "position": {
      "econ": 0.119272,
      "culture": 0.054808,
      "authority": 0.154175
    },
    "space": {
      "econ": 0.119272,
      "culture": 0.054808,
      "authority": 0.154175,
      "establishment": 0.078353,
      "globalism": 0.201174,
      "green": 0.014152,
      "ukraine": 0.195885,
      "greenDeal": 0.649766
    },
    "axisSalience": {
      "econ": 0.470094,
      "culture": 0.443019,
      "authority": 0.435503
    },
    "issuePrefs": {
      "housing": -0.072176,
      "transport": -0.015542,
      "security": 0.059053,
      "healthcare": -0.081491,
      "climate": -0.192124,
      "industry": -0.091214,
      "education": -0.092066,
      "taxes": 0.092452
    },
    "issueSalience": {
      "housing": 0.320419,
      "transport": 0.288704,
      "security": 0.313069,
      "healthcare": 0.325635,
      "climate": 0.38759,
      "industry": 0.33108,
      "education": 0.331557,
      "taxes": 0.331773
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.418339,
    "turnoutBase": 0.612742,
    "volatility": 0.462948
  },
  {
    "id": "ess_center_15_24_tertiary_town_center",
    "name": "stred - 15-24 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000246,
    "position": {
      "econ": 0.034132,
      "culture": 0.126358,
      "authority": 0.080492
    },
    "space": {
      "econ": 0.034132,
      "culture": 0.126358,
      "authority": 0.080492,
      "establishment": -0.594275,
      "globalism": -0.805747,
      "green": 0.309883,
      "ukraine": -0.633087,
      "greenDeal": -0.329615
    },
    "axisSalience": {
      "econ": 0.434335,
      "culture": 0.47307,
      "authority": 0.408977
    },
    "issuePrefs": {
      "housing": -0.033935,
      "transport": -0.127967,
      "security": 0.280967,
      "healthcare": -0.014466,
      "climate": -0.130823,
      "industry": 0.117553,
      "education": 0.124847,
      "taxes": 0.039738
    },
    "issueSalience": {
      "housing": 0.299004,
      "transport": 0.351662,
      "security": 0.437342,
      "healthcare": 0.288101,
      "climate": 0.353261,
      "industry": 0.34583,
      "education": 0.349915,
      "taxes": 0.302253
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.504113,
    "turnoutBase": 0.6092,
    "volatility": 0.603485
  },
  {
    "id": "ess_center_25_39_tertiary_rural_unknown",
    "name": "stred - 25-39 - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000246,
    "position": {
      "econ": 0.036503,
      "culture": 0.014434,
      "authority": 0.240547
    },
    "space": {
      "econ": 0.036503,
      "culture": 0.014434,
      "authority": 0.240547,
      "establishment": -0.136876,
      "globalism": 0.225289,
      "green": -0.345457,
      "ukraine": 0.087798,
      "greenDeal": -0.452492
    },
    "axisSalience": {
      "econ": 0.435331,
      "culture": 0.426062,
      "authority": 0.466597
    },
    "issuePrefs": {
      "housing": -0.021809,
      "transport": 0.015311,
      "security": 0.105605,
      "healthcare": -0.025128,
      "climate": 0.375427,
      "industry": 0.127988,
      "education": -0.063376,
      "taxes": 0.028014
    },
    "issueSalience": {
      "housing": 0.292213,
      "transport": 0.288574,
      "security": 0.339139,
      "healthcare": 0.294072,
      "climate": 0.490239,
      "industry": 0.351673,
      "education": 0.315491,
      "taxes": 0.295688
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.602567,
    "turnoutBase": 0.625209,
    "volatility": 0.462319
  },
  {
    "id": "ess_center_40_54_lower_town_right",
    "name": "stred - 40-54 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000246,
    "position": {
      "econ": 0.142842,
      "culture": 0.108977,
      "authority": 0.056772
    },
    "space": {
      "econ": 0.142842,
      "culture": 0.108977,
      "authority": 0.056772,
      "establishment": 0.277678,
      "globalism": -0.265479,
      "green": -0.059056,
      "ukraine": -0.133835,
      "greenDeal": 0.173956
    },
    "axisSalience": {
      "econ": 0.479994,
      "culture": 0.46577,
      "authority": 0.400438
    },
    "issuePrefs": {
      "housing": -0.09164,
      "transport": -0.087184,
      "security": 0.124205,
      "healthcare": -0.094128,
      "climate": -0.006188,
      "industry": 0.043574,
      "education": -0.014018,
      "taxes": 0.115923
    },
    "issueSalience": {
      "housing": 0.331318,
      "transport": 0.328823,
      "security": 0.349555,
      "healthcare": 0.332712,
      "climate": 0.283465,
      "industry": 0.304401,
      "education": 0.28785,
      "taxes": 0.344917
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.406286,
    "turnoutBase": 0.539719,
    "volatility": 0.535009
  },
  {
    "id": "ess_center_40_54_tertiary_rural_unknown",
    "name": "stred - 40-54 - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000246,
    "position": {
      "econ": 0.030025,
      "culture": 0.134451,
      "authority": -0.396261
    },
    "space": {
      "econ": 0.030025,
      "culture": 0.134451,
      "authority": -0.396261,
      "establishment": -0.368285,
      "globalism": -0.723694,
      "green": 0.144324,
      "ukraine": 0.108676,
      "greenDeal": -0.814505
    },
    "axisSalience": {
      "econ": 0.43261,
      "culture": 0.476469,
      "authority": 0.522654
    },
    "issuePrefs": {
      "housing": -0.032648,
      "transport": -0.118551,
      "security": -0.086465,
      "healthcare": -0.010862,
      "climate": 0.124148,
      "industry": 0.233494,
      "education": 0.104949,
      "taxes": 0.037752
    },
    "issueSalience": {
      "housing": 0.298283,
      "transport": 0.346388,
      "security": 0.32842,
      "healthcare": 0.286083,
      "climate": 0.349523,
      "industry": 0.410756,
      "education": 0.338771,
      "taxes": 0.301141
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.527116,
    "turnoutBase": 0.63711,
    "volatility": 0.503146
  },
  {
    "id": "ess_center_40_54_tertiary_town_right",
    "name": "stred - 40-54 - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000246,
    "position": {
      "econ": 0.084386,
      "culture": 0.100056,
      "authority": 0.076685
    },
    "space": {
      "econ": 0.084386,
      "culture": 0.100056,
      "authority": 0.076685,
      "establishment": 0.380823,
      "globalism": 0.379691,
      "green": 0.284182,
      "ukraine": 0.721642,
      "greenDeal": 0.43814
    },
    "axisSalience": {
      "econ": 0.455442,
      "culture": 0.462024,
      "authority": 0.407607
    },
    "issuePrefs": {
      "housing": -0.058419,
      "transport": 0.006456,
      "security": -0.050515,
      "healthcare": -0.052753,
      "climate": -0.327291,
      "industry": -0.048326,
      "education": -0.138804,
      "taxes": 0.072765
    },
    "issueSalience": {
      "housing": 0.312715,
      "transport": 0.283616,
      "security": 0.308288,
      "healthcare": 0.309542,
      "climate": 0.463283,
      "industry": 0.307063,
      "education": 0.35773,
      "taxes": 0.320748
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.653247,
    "turnoutBase": 0.663329,
    "volatility": 0.435726
  },
  {
    "id": "ess_center_25_39_secondary_town_left",
    "name": "stred - 25-39 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000185,
    "position": {
      "econ": -0.028039,
      "culture": -0.136778,
      "authority": 0.324225
    },
    "space": {
      "econ": -0.028039,
      "culture": -0.136778,
      "authority": 0.324225,
      "establishment": -0.256483,
      "globalism": -0.017754,
      "green": 0.047303,
      "ukraine": -0.279982,
      "greenDeal": 0.168947
    },
    "axisSalience": {
      "econ": 0.431776,
      "culture": 0.477447,
      "authority": 0.496721
    },
    "issuePrefs": {
      "housing": 0.031835,
      "transport": 0.029499,
      "security": 0.188316,
      "healthcare": 0.009246,
      "climate": -0.081363,
      "industry": -0.078065,
      "education": 0.058508,
      "taxes": -0.036602
    },
    "issueSalience": {
      "housing": 0.297828,
      "transport": 0.29652,
      "security": 0.385457,
      "healthcare": 0.285178,
      "climate": 0.325563,
      "industry": 0.323717,
      "education": 0.312764,
      "taxes": 0.300497
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.468416,
    "turnoutBase": 0.561023,
    "volatility": 0.523083
  },
  {
    "id": "ess_center_40_54_secondary_rural_left",
    "name": "stred - 40-54 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000185,
    "position": {
      "econ": 0.032821,
      "culture": -0.090341,
      "authority": 0.090066
    },
    "space": {
      "econ": 0.032821,
      "culture": -0.090341,
      "authority": 0.090066,
      "establishment": -0.214314,
      "globalism": -0.081683,
      "green": -0.188558,
      "ukraine": -0.064085,
      "greenDeal": -0.206716
    },
    "axisSalience": {
      "econ": 0.433785,
      "culture": 0.457943,
      "authority": 0.412424
    },
    "issuePrefs": {
      "housing": -0.00721,
      "transport": -0.001746,
      "security": 0.050376,
      "healthcare": -0.030858,
      "climate": 0.193642,
      "industry": 0.048448,
      "education": 0.041713,
      "taxes": 0.01279
    },
    "issueSalience": {
      "housing": 0.284038,
      "transport": 0.280978,
      "security": 0.30821,
      "healthcare": 0.297281,
      "climate": 0.38844,
      "industry": 0.307131,
      "education": 0.303359,
      "taxes": 0.287162
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.467954,
    "turnoutBase": 0.582499,
    "volatility": 0.539288
  },
  {
    "id": "ess_center_15_24_secondary_town_left",
    "name": "stred - 15-24 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000164,
    "position": {
      "econ": 0.080296,
      "culture": 0.101043,
      "authority": 0.131111
    },
    "space": {
      "econ": 0.080296,
      "culture": 0.101043,
      "authority": 0.131111,
      "establishment": 0.328798,
      "globalism": -0.188269,
      "green": -0.158368,
      "ukraine": 0.12243,
      "greenDeal": -0.290168
    },
    "axisSalience": {
      "econ": 0.453724,
      "culture": 0.462438,
      "authority": 0.4272
    },
    "issuePrefs": {
      "housing": -0.056288,
      "transport": -0.060854,
      "security": 0.133675,
      "healthcare": -0.049729,
      "climate": 0.195272,
      "industry": 0.124764,
      "education": -0.013217,
      "taxes": 0.069938
    },
    "issueSalience": {
      "housing": 0.311521,
      "transport": 0.314078,
      "security": 0.354858,
      "healthcare": 0.307848,
      "climate": 0.389352,
      "industry": 0.349868,
      "education": 0.287401,
      "taxes": 0.319165
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.505008,
    "turnoutBase": 0.581508,
    "volatility": 0.470408
  },
  {
    "id": "ess_center_25_39_lower_large_town_unknown",
    "name": "stred - 25-39 - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000164,
    "position": {
      "econ": -0.022421,
      "culture": 0.136415,
      "authority": -0.092757
    },
    "space": {
      "econ": -0.022421,
      "culture": 0.136415,
      "authority": -0.092757,
      "establishment": -0.576769,
      "globalism": -0.598365,
      "green": -0.972094,
      "ukraine": -0.665791,
      "greenDeal": -0.034597
    },
    "axisSalience": {
      "econ": 0.429417,
      "culture": 0.477294,
      "authority": 0.413392
    },
    "issuePrefs": {
      "housing": -0.004038,
      "transport": -0.090753,
      "security": 0.141656,
      "healthcare": 0.027056,
      "climate": 0.709595,
      "industry": 0.022544,
      "education": 0.089276,
      "taxes": 0.000227
    },
    "issueSalience": {
      "housing": 0.282262,
      "transport": 0.330822,
      "security": 0.359327,
      "healthcare": 0.295151,
      "climate": 0.677373,
      "industry": 0.292625,
      "education": 0.329995,
      "taxes": 0.280127
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.317957,
    "turnoutBase": 0.489813,
    "volatility": 0.591909
  },
  {
    "id": "ess_center_25_39_tertiary_rural_right",
    "name": "stred - 25-39 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000164,
    "position": {
      "econ": 0.087835,
      "culture": -0.035188,
      "authority": 0.007916
    },
    "space": {
      "econ": 0.087835,
      "culture": -0.035188,
      "authority": 0.007916,
      "establishment": 0.327091,
      "globalism": 0.405835,
      "green": -0.210459,
      "ukraine": 0.534507,
      "greenDeal": 0.213591
    },
    "axisSalience": {
      "econ": 0.456891,
      "culture": 0.434779,
      "authority": 0.38285
    },
    "issuePrefs": {
      "housing": -0.044087,
      "transport": 0.033075,
      "security": -0.120755,
      "healthcare": -0.066056,
      "climate": 0.091725,
      "industry": -0.017191,
      "education": -0.098048,
      "taxes": 0.059019
    },
    "issueSalience": {
      "housing": 0.304689,
      "transport": 0.298522,
      "security": 0.347623,
      "healthcare": 0.316992,
      "climate": 0.331366,
      "industry": 0.289627,
      "education": 0.334907,
      "taxes": 0.313051
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.650517,
    "turnoutBase": 0.641448,
    "volatility": 0.420562
  },
  {
    "id": "ess_center_55_plus_tertiary_town_right",
    "name": "stred - 55+ - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000144,
    "position": {
      "econ": 0.082099,
      "culture": -0.074931,
      "authority": 0.200538
    },
    "space": {
      "econ": 0.082099,
      "culture": -0.074931,
      "authority": 0.200538,
      "establishment": -0.05249,
      "globalism": 0.370086,
      "green": 0.527523,
      "ukraine": 0.579607,
      "greenDeal": 0.684326
    },
    "axisSalience": {
      "econ": 0.454482,
      "culture": 0.451471,
      "authority": 0.452194
    },
    "issuePrefs": {
      "housing": -0.036163,
      "transport": 0.037373,
      "security": -0.009631,
      "healthcare": -0.065106,
      "climate": -0.571428,
      "industry": -0.13996,
      "education": -0.074897,
      "taxes": 0.05012
    },
    "issueSalience": {
      "housing": 0.300251,
      "transport": 0.300929,
      "security": 0.285393,
      "healthcare": 0.316459,
      "climate": 0.6,
      "industry": 0.358378,
      "education": 0.321942,
      "taxes": 0.308067
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.618006,
    "turnoutBase": 0.728163,
    "volatility": 0.384724
  },
  {
    "id": "ess_center_40_54_tertiary_town_left",
    "name": "stred - 40-54 - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000123,
    "position": {
      "econ": -0.158361,
      "culture": -0.059157,
      "authority": 0.072116
    },
    "space": {
      "econ": -0.158361,
      "culture": -0.059157,
      "authority": 0.072116,
      "establishment": 0.251528,
      "globalism": 0.428927,
      "green": 0.25186,
      "ukraine": 0.246079,
      "greenDeal": 0.975564
    },
    "axisSalience": {
      "econ": 0.486512,
      "culture": 0.444846,
      "authority": 0.405962
    },
    "issuePrefs": {
      "housing": 0.094197,
      "transport": 0.10171,
      "security": -0.068746,
      "healthcare": 0.109287,
      "climate": -0.454497,
      "industry": -0.31763,
      "education": -0.035652,
      "taxes": -0.121119
    },
    "issueSalience": {
      "housing": 0.332751,
      "transport": 0.336957,
      "security": 0.318498,
      "healthcare": 0.341201,
      "climate": 0.534518,
      "industry": 0.457873,
      "education": 0.299965,
      "taxes": 0.347827
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.645858,
    "turnoutBase": 0.658803,
    "volatility": 0.447362
  },
  {
    "id": "ess_center_55_plus_tertiary_large_town_right",
    "name": "stred - 55+ - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000123,
    "position": {
      "econ": 0.152676,
      "culture": 0.136358,
      "authority": -0.043809
    },
    "space": {
      "econ": 0.152676,
      "culture": 0.136358,
      "authority": -0.043809,
      "establishment": 0.286201,
      "globalism": 0.188437,
      "green": 0.070925,
      "ukraine": 0.29969,
      "greenDeal": 0.707984
    },
    "axisSalience": {
      "econ": 0.484124,
      "culture": 0.47727,
      "authority": 0.395771
    },
    "issuePrefs": {
      "housing": -0.100335,
      "transport": -0.040101,
      "security": -0.046875,
      "healthcare": -0.099018,
      "climate": -0.249302,
      "industry": -0.075141,
      "education": -0.125824,
      "taxes": 0.12629
    },
    "issueSalience": {
      "housing": 0.336187,
      "transport": 0.302457,
      "security": 0.30625,
      "healthcare": 0.33545,
      "climate": 0.419609,
      "industry": 0.322079,
      "education": 0.350461,
      "taxes": 0.350722
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.634202,
    "turnoutBase": 0.740017,
    "volatility": 0.354242
  },
  {
    "id": "ess_center_15_24_lower_town_unknown",
    "name": "stred - 15-24 - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000103,
    "position": {
      "econ": 0.021475,
      "culture": 0.056455,
      "authority": -0.207771
    },
    "space": {
      "econ": 0.021475,
      "culture": 0.056455,
      "authority": -0.207771,
      "establishment": -0.814692,
      "globalism": -0.479132,
      "green": 0.237958,
      "ukraine": -0.650578,
      "greenDeal": 0.140241
    },
    "axisSalience": {
      "econ": 0.429019,
      "culture": 0.443711,
      "authority": 0.454798
    },
    "issuePrefs": {
      "housing": -0.018586,
      "transport": -0.073026,
      "security": 0.025279,
      "healthcare": -0.010945,
      "climate": -0.210597,
      "industry": -0.013618,
      "education": 0.080496,
      "taxes": 0.022236
    },
    "issueSalience": {
      "housing": 0.290408,
      "transport": 0.320895,
      "security": 0.294156,
      "healthcare": 0.286129,
      "climate": 0.397934,
      "industry": 0.287626,
      "education": 0.325078,
      "taxes": 0.292452
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.306077,
    "turnoutBase": 0.481486,
    "volatility": 0.613322
  },
  {
    "id": "ess_center_25_39_lower_town_unknown",
    "name": "stred - 25-39 - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000103,
    "position": {
      "econ": -0.032102,
      "culture": 0.134426,
      "authority": 0.453613
    },
    "space": {
      "econ": -0.032102,
      "culture": 0.134426,
      "authority": 0.453613,
      "establishment": -0.328274,
      "globalism": 0.254407,
      "green": 0.407657,
      "ukraine": -0.259236,
      "greenDeal": 0.564561
    },
    "axisSalience": {
      "econ": 0.433483,
      "culture": 0.476459,
      "authority": 0.543301
    },
    "issuePrefs": {
      "housing": 0.001525,
      "transport": 0.014358,
      "security": 0.293825,
      "healthcare": 0.033867,
      "climate": -0.45159,
      "industry": -0.126065,
      "education": -0.095314,
      "taxes": -0.006982
    },
    "issueSalience": {
      "housing": 0.280854,
      "transport": 0.28804,
      "security": 0.444542,
      "healthcare": 0.298966,
      "climate": 0.53289,
      "industry": 0.350596,
      "education": 0.333376,
      "taxes": 0.28391
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.389002,
    "turnoutBase": 0.49851,
    "volatility": 0.569545
  },
  {
    "id": "ess_center_25_39_tertiary_large_town_right",
    "name": "stred - 25-39 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000103,
    "position": {
      "econ": 0.12965,
      "culture": 0.096373,
      "authority": 0.228216
    },
    "space": {
      "econ": 0.12965,
      "culture": 0.096373,
      "authority": 0.228216,
      "establishment": -0.085745,
      "globalism": 0.261053,
      "green": 0.026192,
      "ukraine": -0.189844,
      "greenDeal": 0.096299
    },
    "axisSalience": {
      "econ": 0.474453,
      "culture": 0.460477,
      "authority": 0.462158
    },
    "issuePrefs": {
      "housing": -0.082872,
      "transport": -0.018433,
      "security": 0.136676,
      "healthcare": -0.085638,
      "climate": -0.045822,
      "industry": 0.053875,
      "education": -0.122278,
      "taxes": 0.104913
    },
    "issueSalience": {
      "housing": 0.326409,
      "transport": 0.290323,
      "security": 0.356539,
      "healthcare": 0.327958,
      "climate": 0.30566,
      "industry": 0.31017,
      "education": 0.348476,
      "taxes": 0.338751
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.608804,
    "turnoutBase": 0.626999,
    "volatility": 0.457717
  },
  {
    "id": "ess_center_15_24_secondary_rural_left",
    "name": "stred - 15-24 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 8.2e-05,
    "position": {
      "econ": 0.035105,
      "culture": -0.122039,
      "authority": 0.086839
    },
    "space": {
      "econ": 0.035105,
      "culture": -0.122039,
      "authority": 0.086839,
      "establishment": 0.272858,
      "globalism": 0.264295,
      "green": 0.147466,
      "ukraine": 0.184507,
      "greenDeal": 0.300314
    },
    "axisSalience": {
      "econ": 0.434744,
      "culture": 0.471257,
      "authority": 0.411262
    },
    "issuePrefs": {
      "housing": -0.004663,
      "transport": 0.044906,
      "security": -0.042664,
      "healthcare": -0.035038,
      "climate": -0.190264,
      "industry": -0.077894,
      "education": -0.023856,
      "taxes": 0.010631
    },
    "issueSalience": {
      "housing": 0.282611,
      "transport": 0.305148,
      "security": 0.303892,
      "healthcare": 0.299622,
      "climate": 0.386548,
      "industry": 0.323621,
      "education": 0.293359,
      "taxes": 0.285953
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.527686,
    "turnoutBase": 0.57955,
    "volatility": 0.475443
  },
  {
    "id": "ess_center_55_plus_secondary_large_town_unknown",
    "name": "stred - 55+ - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 8.2e-05,
    "position": {
      "econ": -0.007617,
      "culture": -0.152725,
      "authority": 0.08272
    },
    "space": {
      "econ": -0.007617,
      "culture": -0.152725,
      "authority": 0.08272,
      "establishment": -0.265787,
      "globalism": 0.402354,
      "green": 0.547939,
      "ukraine": 0.586014,
      "greenDeal": 0.475927
    },
    "axisSalience": {
      "econ": 0.423199,
      "culture": 0.484145,
      "authority": 0.409779
    },
    "issuePrefs": {
      "housing": 0.022516,
      "transport": 0.077677,
      "security": -0.110782,
      "healthcare": -0.006734,
      "climate": -0.527776,
      "industry": -0.145217,
      "education": -0.033236,
      "taxes": -0.023811
    },
    "issueSalience": {
      "housing": 0.292609,
      "transport": 0.323499,
      "security": 0.342038,
      "healthcare": 0.283771,
      "climate": 0.575554,
      "industry": 0.361321,
      "education": 0.298612,
      "taxes": 0.293334
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.492878,
    "turnoutBase": 0.660697,
    "volatility": 0.453921
  },
  {
    "id": "ess_center_25_39_tertiary_town_unknown",
    "name": "stred - 25-39 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 4.1e-05,
    "position": {
      "econ": 0.021732,
      "culture": 0.101524,
      "authority": -0.378091
    },
    "space": {
      "econ": 0.021732,
      "culture": 0.101524,
      "authority": -0.378091,
      "establishment": -0.235713,
      "globalism": 0.154972,
      "green": -0.509292,
      "ukraine": 0.241092,
      "greenDeal": -0.600726
    },
    "axisSalience": {
      "econ": 0.429127,
      "culture": 0.46264,
      "authority": 0.516113
    },
    "issuePrefs": {
      "housing": -0.024135,
      "transport": -0.005111,
      "security": -0.253172,
      "healthcare": -0.007525,
      "climate": 0.534893,
      "industry": 0.172445,
      "education": -0.074843,
      "taxes": 0.02783
    },
    "issueSalience": {
      "housing": 0.293516,
      "transport": 0.282862,
      "security": 0.421777,
      "healthcare": 0.284214,
      "climate": 0.57954,
      "industry": 0.376569,
      "education": 0.321912,
      "taxes": 0.295585
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.590441,
    "turnoutBase": 0.62175,
    "volatility": 0.471214
  },
  {
    "id": "ess_center_55_plus_lower_town_left",
    "name": "stred - 55+ - nizsi vzdelani - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 4.1e-05,
    "position": {
      "econ": -0.13992,
      "culture": 0.163794,
      "authority": -0.243043
    },
    "space": {
      "econ": -0.13992,
      "culture": 0.163794,
      "authority": -0.243043,
      "establishment": 0.43896,
      "globalism": 0.054045,
      "green": 0.211085,
      "ukraine": 0.981388,
      "greenDeal": -0.108381
    },
    "axisSalience": {
      "econ": 0.478766,
      "culture": 0.488793,
      "authority": 0.467496
    },
    "issuePrefs": {
      "housing": 0.057301,
      "transport": 0.011982,
      "security": -0.193064,
      "healthcare": 0.113846,
      "climate": -0.121634,
      "industry": -0.008869,
      "education": -0.035637,
      "taxes": -0.081087
    },
    "issueSalience": {
      "housing": 0.312088,
      "transport": 0.28671,
      "security": 0.388116,
      "healthcare": 0.343754,
      "climate": 0.348115,
      "industry": 0.284967,
      "education": 0.299957,
      "taxes": 0.325409
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.438359,
    "turnoutBase": 0.625364,
    "volatility": 0.430494
  },
  {
    "id": "ess_center_55_plus_secondary_town_unknown",
    "name": "stred - 55+ - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 4.1e-05,
    "position": {
      "econ": -0.002354,
      "culture": 0.119004,
      "authority": -0.321371
    },
    "space": {
      "econ": -0.002354,
      "culture": 0.119004,
      "authority": -0.321371,
      "establishment": -0.42225,
      "globalism": -0.573135,
      "green": 0.212127,
      "ukraine": -0.776499,
      "greenDeal": 0.503372
    },
    "axisSalience": {
      "econ": 0.420989,
      "culture": 0.469982,
      "authority": 0.495693
    },
    "issuePrefs": {
      "housing": -0.012986,
      "transport": -0.089608,
      "security": -0.000644,
      "healthcare": 0.011215,
      "climate": -0.293676,
      "industry": -0.100471,
      "education": 0.085003,
      "taxes": 0.012586
    },
    "issueSalience": {
      "housing": 0.287272,
      "transport": 0.330181,
      "security": 0.280361,
      "healthcare": 0.28628,
      "climate": 0.444458,
      "industry": 0.336264,
      "education": 0.327602,
      "taxes": 0.287048
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.421832,
    "turnoutBase": 0.655221,
    "volatility": 0.468002
  },
  {
    "id": "ess_center_15_24_tertiary_large_town_center",
    "name": "stred - 15-24 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 2.1e-05,
    "position": {
      "econ": -0.102556,
      "culture": -0.169647,
      "authority": -0.298206
    },
    "space": {
      "econ": -0.102556,
      "culture": -0.169647,
      "authority": -0.298206,
      "establishment": 0.041408,
      "globalism": 0.329885,
      "green": 0.445298,
      "ukraine": 0.423067,
      "greenDeal": 0.404943
    },
    "axisSalience": {
      "econ": 0.463073,
      "culture": 0.491252,
      "authority": 0.487354
    },
    "issuePrefs": {
      "housing": 0.076763,
      "transport": 0.095762,
      "security": -0.325614,
      "healthcare": 0.060268,
      "climate": -0.433999,
      "industry": -0.174898,
      "education": 0.011415,
      "taxes": -0.094198
    },
    "issueSalience": {
      "housing": 0.322987,
      "transport": 0.333627,
      "security": 0.462344,
      "healthcare": 0.31375,
      "climate": 0.523039,
      "industry": 0.377943,
      "education": 0.286392,
      "taxes": 0.332751
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.623106,
    "turnoutBase": 0.631449,
    "volatility": 0.546273
  },
  {
    "id": "ess_center_25_39_lower_large_town_right",
    "name": "stred - 25-39 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 2.1e-05,
    "position": {
      "econ": -0.089092,
      "culture": -0.174887,
      "authority": 0.317103
    },
    "space": {
      "econ": -0.089092,
      "culture": -0.174887,
      "authority": 0.317103,
      "establishment": -0.177678,
      "globalism": 0.445934,
      "green": -0.419199,
      "ukraine": 0.341415,
      "greenDeal": -0.518414
    },
    "axisSalience": {
      "econ": 0.457419,
      "culture": 0.493453,
      "authority": 0.494157
    },
    "issuePrefs": {
      "housing": 0.069987,
      "transport": 0.107265,
      "security": 0.040054,
      "healthcare": 0.050155,
      "climate": 0.446979,
      "industry": 0.051957,
      "education": -0.015513,
      "taxes": -0.085133
    },
    "issueSalience": {
      "housing": 0.319193,
      "transport": 0.340068,
      "security": 0.30243,
      "healthcare": 0.308087,
      "climate": 0.530308,
      "industry": 0.309096,
      "education": 0.288687,
      "taxes": 0.327674
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.412542,
    "turnoutBase": 0.503781,
    "volatility": 0.555991
  },
  {
    "id": "ess_center_25_39_tertiary_large_town_left",
    "name": "stred - 25-39 - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 2.1e-05,
    "position": {
      "econ": -0.146761,
      "culture": 0.116397,
      "authority": 0.401369
    },
    "space": {
      "econ": -0.146761,
      "culture": 0.116397,
      "authority": 0.401369,
      "establishment": 0.648035,
      "globalism": 0.25977,
      "green": -0.033203,
      "ukraine": -0.101462,
      "greenDeal": 0.44993
    },
    "axisSalience": {
      "econ": 0.481639,
      "culture": 0.468887,
      "authority": 0.524493
    },
    "issuePrefs": {
      "housing": 0.066751,
      "transport": 0.046911,
      "security": 0.242798,
      "healthcare": 0.114979,
      "climate": -0.102074,
      "industry": -0.154542,
      "education": -0.062666,
      "taxes": -0.0917
    },
    "issueSalience": {
      "housing": 0.31738,
      "transport": 0.30627,
      "security": 0.415967,
      "healthcare": 0.344388,
      "climate": 0.337162,
      "industry": 0.366543,
      "education": 0.315093,
      "taxes": 0.331352
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.667429,
    "turnoutBase": 0.652681,
    "volatility": 0.391677
  },
  {
    "id": "ess_center_25_39_tertiary_rural_left",
    "name": "stred - 25-39 - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 2.1e-05,
    "position": {
      "econ": -0.088835,
      "culture": -0.064886,
      "authority": -0.20364
    },
    "space": {
      "econ": -0.088835,
      "culture": -0.064886,
      "authority": -0.20364,
      "establishment": 0.273317,
      "globalism": 0.210036,
      "green": -0.26896,
      "ukraine": 0.139057,
      "greenDeal": 0.272848
    },
    "axisSalience": {
      "econ": 0.457311,
      "culture": 0.447252,
      "authority": 0.453311
    },
    "issuePrefs": {
      "housing": 0.056646,
      "transport": 0.059093,
      "security": -0.193356,
      "healthcare": 0.05877,
      "climate": 0.117254,
      "industry": -0.118027,
      "education": -0.002177,
      "taxes": -0.071748
    },
    "issueSalience": {
      "housing": 0.311722,
      "transport": 0.313092,
      "security": 0.388279,
      "healthcare": 0.312911,
      "climate": 0.345662,
      "industry": 0.346095,
      "education": 0.281219,
      "taxes": 0.320179
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.634467,
    "turnoutBase": 0.639566,
    "volatility": 0.425401
  },
  {
    "id": "ess_center_40_54_tertiary_large_town_unknown",
    "name": "stred - 40-54 - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 2.1e-05,
    "position": {
      "econ": 0.005857,
      "culture": -0.142866,
      "authority": -0.047821
    },
    "space": {
      "econ": 0.005857,
      "culture": -0.142866,
      "authority": -0.047821,
      "establishment": 0.010546,
      "globalism": 0.18784,
      "green": -0.143855,
      "ukraine": 0.34889,
      "greenDeal": -0.020605
    },
    "axisSalience": {
      "econ": 0.42246,
      "culture": 0.480004,
      "authority": 0.397216
    },
    "issuePrefs": {
      "housing": 0.013923,
      "transport": 0.046792,
      "security": -0.131374,
      "healthcare": -0.015646,
      "climate": 0.109345,
      "industry": -0.018077,
      "education": 0.007273,
      "taxes": -0.012927
    },
    "issueSalience": {
      "housing": 0.287797,
      "transport": 0.306204,
      "security": 0.353569,
      "healthcare": 0.288762,
      "climate": 0.341233,
      "industry": 0.290123,
      "education": 0.284073,
      "taxes": 0.287239
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.612114,
    "turnoutBase": 0.650369,
    "volatility": 0.469051
  },
  {
    "id": "ess_center_55_plus_lower_rural_unknown",
    "name": "stred - 55+ - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "center",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 2.1e-05,
    "position": {
      "econ": 0.060964,
      "culture": 0.179337,
      "authority": -0.569468
    },
    "space": {
      "econ": 0.060964,
      "culture": 0.179337,
      "authority": -0.569468,
      "establishment": -0.387192,
      "globalism": -0.094604,
      "green": 0.476982,
      "ukraine": -0.103647,
      "greenDeal": 0.565425
    },
    "axisSalience": {
      "econ": 0.445605,
      "culture": 0.495322,
      "authority": 0.585009
    },
    "issuePrefs": {
      "housing": -0.05505,
      "transport": -0.058874,
      "security": -0.277535,
      "healthcare": -0.029547,
      "climate": -0.501746,
      "industry": -0.075378,
      "education": -0.056586,
      "taxes": 0.065414
    },
    "issueSalience": {
      "housing": 0.310828,
      "transport": 0.312969,
      "security": 0.43542,
      "healthcare": 0.296546,
      "climate": 0.560978,
      "industry": 0.322212,
      "education": 0.311688,
      "taxes": 0.316632
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.363348,
    "turnoutBase": 0.596448,
    "volatility": 0.504847
  },
  {
    "id": "ess_lib_left_40_54_secondary_town_center",
    "name": "liberalni levice - 40-54 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.008116,
    "position": {
      "econ": -0.259252,
      "culture": -0.194314,
      "authority": 0.097915
    },
    "space": {
      "econ": -0.259252,
      "culture": -0.194314,
      "authority": 0.097915,
      "establishment": -0.013994,
      "globalism": 0.104834,
      "green": 0.203361,
      "ukraine": 0.244126,
      "greenDeal": 0.424257
    },
    "axisSalience": {
      "econ": 0.528886,
      "culture": 0.501612,
      "authority": 0.41525
    },
    "issuePrefs": {
      "housing": 0.165906,
      "transport": 0.11237,
      "security": -0.032101,
      "healthcare": 0.171116,
      "climate": -0.265211,
      "industry": -0.256054,
      "education": 0.107167,
      "taxes": -0.209979
    },
    "issueSalience": {
      "housing": 0.372908,
      "transport": 0.342927,
      "security": 0.297976,
      "healthcare": 0.375825,
      "climate": 0.428518,
      "industry": 0.42339,
      "education": 0.340014,
      "taxes": 0.397588
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.495171,
    "turnoutBase": 0.58951,
    "volatility": 0.621259
  },
  {
    "id": "ess_lib_left_55_plus_secondary_town_center",
    "name": "liberalni levice - 55+ - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.007422,
    "position": {
      "econ": -0.245901,
      "culture": -0.231067,
      "authority": 0.195764
    },
    "space": {
      "econ": -0.245901,
      "culture": -0.231067,
      "authority": 0.195764,
      "establishment": 0.18179,
      "globalism": 0.173766,
      "green": 0.095055,
      "ukraine": 0.17639,
      "greenDeal": 0.323566
    },
    "axisSalience": {
      "econ": 0.523278,
      "culture": 0.517048,
      "authority": 0.450475
    },
    "issuePrefs": {
      "housing": 0.162974,
      "transport": 0.123919,
      "security": 0.011286,
      "healthcare": 0.158563,
      "climate": -0.159038,
      "industry": -0.232362,
      "education": 0.101661,
      "taxes": -0.204777
    },
    "issueSalience": {
      "housing": 0.371265,
      "transport": 0.349395,
      "security": 0.28632,
      "healthcare": 0.368795,
      "climate": 0.369061,
      "industry": 0.410123,
      "education": 0.33693,
      "taxes": 0.394675
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.514969,
    "turnoutBase": 0.676363,
    "volatility": 0.513639
  },
  {
    "id": "ess_lib_left_55_plus_secondary_large_town_center",
    "name": "liberalni levice - 55+ - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.006671,
    "position": {
      "econ": -0.277911,
      "culture": -0.199258,
      "authority": 0.341458
    },
    "space": {
      "econ": -0.277911,
      "culture": -0.199258,
      "authority": 0.341458,
      "establishment": 0.180095,
      "globalism": 0.317385,
      "green": 0.331669,
      "ukraine": 0.329902,
      "greenDeal": 0.495954
    },
    "axisSalience": {
      "econ": 0.536722,
      "culture": 0.503688,
      "authority": 0.502925
    },
    "issuePrefs": {
      "housing": 0.176762,
      "transport": 0.14343,
      "security": 0.07239,
      "healthcare": 0.184155,
      "climate": -0.377669,
      "industry": -0.282734,
      "education": 0.066614,
      "taxes": -0.224007
    },
    "issueSalience": {
      "housing": 0.378987,
      "transport": 0.360321,
      "security": 0.320539,
      "healthcare": 0.383127,
      "climate": 0.491494,
      "industry": 0.438331,
      "education": 0.317304,
      "taxes": 0.405444
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.523451,
    "turnoutBase": 0.676303,
    "volatility": 0.513791
  },
  {
    "id": "ess_lib_left_55_plus_secondary_town_left",
    "name": "liberalni levice - 55+ - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.006671,
    "position": {
      "econ": -0.545679,
      "culture": -0.169865,
      "authority": 0.315067
    },
    "space": {
      "econ": -0.545679,
      "culture": -0.169865,
      "authority": 0.315067,
      "establishment": 0.259954,
      "globalism": 0.245466,
      "green": 0.087047,
      "ukraine": 0.167764,
      "greenDeal": 0.387379
    },
    "axisSalience": {
      "econ": 0.649185,
      "culture": 0.491343,
      "authority": 0.493424
    },
    "issuePrefs": {
      "housing": 0.320507,
      "transport": 0.196451,
      "security": 0.090174,
      "healthcare": 0.3793,
      "climate": -0.17114,
      "industry": -0.374559,
      "education": 0.136413,
      "taxes": -0.413273
    },
    "issueSalience": {
      "housing": 0.459484,
      "transport": 0.390013,
      "security": 0.330498,
      "healthcare": 0.492408,
      "climate": 0.375838,
      "industry": 0.489753,
      "education": 0.356391,
      "taxes": 0.511433
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.525524,
    "turnoutBase": 0.679098,
    "volatility": 0.406604
  },
  {
    "id": "ess_lib_left_55_plus_secondary_large_town_left",
    "name": "liberalni levice - 55+ - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.006354,
    "position": {
      "econ": -0.472619,
      "culture": -0.091275,
      "authority": 0.142925
    },
    "space": {
      "econ": -0.472619,
      "culture": -0.091275,
      "authority": 0.142925,
      "establishment": 0.019894,
      "globalism": -0.008985,
      "green": 0.086504,
      "ukraine": -0.106252,
      "greenDeal": 0.241302
    },
    "axisSalience": {
      "econ": 0.6185,
      "culture": 0.458336,
      "authority": 0.431453
    },
    "issuePrefs": {
      "housing": 0.270893,
      "transport": 0.133506,
      "security": 0.073174,
      "healthcare": 0.332983,
      "climate": -0.129848,
      "industry": -0.291747,
      "education": 0.147351,
      "taxes": -0.351238
    },
    "issueSalience": {
      "housing": 0.4317,
      "transport": 0.354763,
      "security": 0.320977,
      "healthcare": 0.466471,
      "climate": 0.352715,
      "industry": 0.443378,
      "education": 0.362517,
      "taxes": 0.476694
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.491052,
    "turnoutBase": 0.670696,
    "volatility": 0.42821
  },
  {
    "id": "ess_lib_left_25_39_secondary_town_center",
    "name": "liberalni levice - 25-39 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.006267,
    "position": {
      "econ": -0.349258,
      "culture": -0.318445,
      "authority": 0.043243
    },
    "space": {
      "econ": -0.349258,
      "culture": -0.318445,
      "authority": 0.043243,
      "establishment": 0.16548,
      "globalism": 0.188409,
      "green": -0.028149,
      "ukraine": 0.163547,
      "greenDeal": 0.296002
    },
    "axisSalience": {
      "econ": 0.566688,
      "culture": 0.553747,
      "authority": 0.395568
    },
    "issuePrefs": {
      "housing": 0.230305,
      "transport": 0.167244,
      "security": -0.109351,
      "healthcare": 0.22599,
      "climate": -0.062614,
      "industry": -0.289019,
      "education": 0.153828,
      "taxes": -0.289679
    },
    "issueSalience": {
      "housing": 0.408971,
      "transport": 0.373657,
      "security": 0.341237,
      "healthcare": 0.406555,
      "climate": 0.315064,
      "industry": 0.441851,
      "education": 0.366143,
      "taxes": 0.44222
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.514543,
    "turnoutBase": 0.575792,
    "volatility": 0.585107
  },
  {
    "id": "ess_lib_left_15_24_secondary_town_unknown",
    "name": "liberalni levice - 15-24 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.006152,
    "position": {
      "econ": -0.61747,
      "culture": -0.34086,
      "authority": 0.144979
    },
    "space": {
      "econ": -0.61747,
      "culture": -0.34086,
      "authority": 0.144979,
      "establishment": 0.165849,
      "globalism": 0.332171,
      "green": 0.239267,
      "ukraine": 0.130369,
      "greenDeal": 0.736395
    },
    "axisSalience": {
      "econ": 0.679337,
      "culture": 0.563161,
      "authority": 0.432193
    },
    "issuePrefs": {
      "housing": 0.380511,
      "transport": 0.255583,
      "security": -0.075774,
      "healthcare": 0.417309,
      "climate": -0.378463,
      "industry": -0.522126,
      "education": 0.194416,
      "taxes": -0.485481
    },
    "issueSalience": {
      "housing": 0.493086,
      "transport": 0.423126,
      "security": 0.322433,
      "healthcare": 0.513693,
      "climate": 0.491939,
      "industry": 0.57239,
      "education": 0.388873,
      "taxes": 0.55187
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.523198,
    "turnoutBase": 0.575805,
    "volatility": 0.485074
  },
  {
    "id": "ess_lib_left_15_24_lower_rural_center",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.006036,
    "position": {
      "econ": -0.294974,
      "culture": -0.250501,
      "authority": 0.22338
    },
    "space": {
      "econ": -0.294974,
      "culture": -0.250501,
      "authority": 0.22338,
      "establishment": 0.110544,
      "globalism": 0.219464,
      "green": 0.049188,
      "ukraine": 0.205477,
      "greenDeal": 0.210569
    },
    "axisSalience": {
      "econ": 0.543889,
      "culture": 0.52521,
      "authority": 0.460417
    },
    "issuePrefs": {
      "housing": 0.192296,
      "transport": 0.145169,
      "security": 0.012414,
      "healthcare": 0.192342,
      "climate": -0.094375,
      "industry": -0.231315,
      "education": 0.110187,
      "taxes": -0.242442
    },
    "issueSalience": {
      "housing": 0.387686,
      "transport": 0.361295,
      "security": 0.286952,
      "healthcare": 0.387711,
      "climate": 0.33285,
      "industry": 0.409536,
      "education": 0.341705,
      "taxes": 0.415767
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.422011,
    "turnoutBase": 0.513869,
    "volatility": 0.630051
  },
  {
    "id": "ess_lib_left_55_plus_secondary_rural_left",
    "name": "liberalni levice - 55+ - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.005863,
    "position": {
      "econ": -0.536976,
      "culture": -0.177678,
      "authority": 0.23792
    },
    "space": {
      "econ": -0.536976,
      "culture": -0.177678,
      "authority": 0.23792,
      "establishment": 0.154243,
      "globalism": 0.003023,
      "green": 0.029828,
      "ukraine": 0.072901,
      "greenDeal": 0.290775
    },
    "axisSalience": {
      "econ": 0.64553,
      "culture": 0.494625,
      "authority": 0.465651
    },
    "issuePrefs": {
      "housing": 0.316658,
      "transport": 0.166589,
      "security": 0.091384,
      "healthcare": 0.372408,
      "climate": -0.102893,
      "industry": -0.348777,
      "education": 0.190396,
      "taxes": -0.407944
    },
    "issueSalience": {
      "housing": 0.457329,
      "transport": 0.37329,
      "security": 0.331175,
      "healthcare": 0.488549,
      "climate": 0.33762,
      "industry": 0.475315,
      "education": 0.386622,
      "taxes": 0.508449
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.502521,
    "turnoutBase": 0.675398,
    "volatility": 0.416118
  },
  {
    "id": "ess_lib_left_40_54_secondary_large_town_left",
    "name": "liberalni levice - 40-54 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.005661,
    "position": {
      "econ": -0.414733,
      "culture": -0.189965,
      "authority": 0.24776
    },
    "space": {
      "econ": -0.414733,
      "culture": -0.189965,
      "authority": 0.24776,
      "establishment": -0.06227,
      "globalism": 0.085931,
      "green": 0.193628,
      "ukraine": 0.005277,
      "greenDeal": 0.317052
    },
    "axisSalience": {
      "econ": 0.594188,
      "culture": 0.499785,
      "authority": 0.469194
    },
    "issuePrefs": {
      "housing": 0.250899,
      "transport": 0.148188,
      "security": 0.084531,
      "healthcare": 0.28341,
      "climate": -0.228187,
      "industry": -0.301063,
      "education": 0.147119,
      "taxes": -0.321403
    },
    "issueSalience": {
      "housing": 0.420503,
      "transport": 0.362986,
      "security": 0.327338,
      "healthcare": 0.43871,
      "climate": 0.407785,
      "industry": 0.448595,
      "education": 0.362387,
      "taxes": 0.459986
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.490174,
    "turnoutBase": 0.587821,
    "volatility": 0.525604
  },
  {
    "id": "ess_lib_left_40_54_secondary_town_left",
    "name": "liberalni levice - 40-54 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.004708,
    "position": {
      "econ": -0.535606,
      "culture": -0.223652,
      "authority": 0.273711
    },
    "space": {
      "econ": -0.535606,
      "culture": -0.223652,
      "authority": 0.273711,
      "establishment": -0.111523,
      "globalism": 0.080409,
      "green": 0.201759,
      "ukraine": 0.018792,
      "greenDeal": 0.19962
    },
    "axisSalience": {
      "econ": 0.644955,
      "culture": 0.513934,
      "authority": 0.478536
    },
    "issuePrefs": {
      "housing": 0.321422,
      "transport": 0.183808,
      "security": 0.091101,
      "healthcare": 0.367744,
      "climate": -0.20116,
      "industry": -0.334545,
      "education": 0.189134,
      "taxes": -0.412475
    },
    "issueSalience": {
      "housing": 0.459996,
      "transport": 0.382932,
      "security": 0.331017,
      "healthcare": 0.485937,
      "climate": 0.39265,
      "industry": 0.467345,
      "education": 0.385915,
      "taxes": 0.510986
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.485903,
    "turnoutBase": 0.586097,
    "volatility": 0.530037
  },
  {
    "id": "ess_lib_left_55_plus_secondary_rural_center",
    "name": "liberalni levice - 55+ - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004505,
    "position": {
      "econ": -0.320059,
      "culture": -0.147266,
      "authority": 0.265781
    },
    "space": {
      "econ": -0.320059,
      "culture": -0.147266,
      "authority": 0.265781,
      "establishment": 0.223879,
      "globalism": 0.217555,
      "green": 0.17604,
      "ukraine": 0.122928,
      "greenDeal": 0.386568
    },
    "axisSalience": {
      "econ": 0.554425,
      "culture": 0.481852,
      "authority": 0.475681
    },
    "issuePrefs": {
      "housing": 0.193704,
      "transport": 0.132629,
      "security": 0.074556,
      "healthcare": 0.218661,
      "climate": -0.234988,
      "industry": -0.266511,
      "education": 0.080495,
      "taxes": -0.248114
    },
    "issueSalience": {
      "housing": 0.388474,
      "transport": 0.354272,
      "security": 0.321751,
      "healthcare": 0.40245,
      "climate": 0.411593,
      "industry": 0.429246,
      "education": 0.325077,
      "taxes": 0.418944
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.520964,
    "turnoutBase": 0.677836,
    "volatility": 0.509851
  },
  {
    "id": "ess_lib_left_15_24_lower_rural_unknown",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.00439,
    "position": {
      "econ": -0.501295,
      "culture": -0.355375,
      "authority": 0.330675
    },
    "space": {
      "econ": -0.501295,
      "culture": -0.355375,
      "authority": 0.330675,
      "establishment": 0.362423,
      "globalism": 0.318417,
      "green": 0.282697,
      "ukraine": 0.4582,
      "greenDeal": 0.768098
    },
    "axisSalience": {
      "econ": 0.630544,
      "culture": 0.569257,
      "authority": 0.499043
    },
    "issuePrefs": {
      "housing": 0.318357,
      "transport": 0.227501,
      "security": 0.011542,
      "healthcare": 0.332502,
      "climate": -0.418609,
      "industry": -0.478907,
      "education": 0.17464,
      "taxes": -0.403577
    },
    "issueSalience": {
      "housing": 0.45828,
      "transport": 0.407401,
      "security": 0.286464,
      "healthcare": 0.466201,
      "climate": 0.514421,
      "industry": 0.548188,
      "education": 0.377799,
      "taxes": 0.506003
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.448099,
    "turnoutBase": 0.522685,
    "volatility": 0.507382
  },
  {
    "id": "ess_lib_left_15_24_lower_large_town_center",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004332,
    "position": {
      "econ": -0.1981,
      "culture": -0.403768,
      "authority": 0.143221
    },
    "space": {
      "econ": -0.1981,
      "culture": -0.403768,
      "authority": 0.143221,
      "establishment": 0.201838,
      "globalism": 0.278573,
      "green": 0.249844,
      "ukraine": 0.318948,
      "greenDeal": 0.376078
    },
    "axisSalience": {
      "econ": 0.503202,
      "culture": 0.589583,
      "authority": 0.43156
    },
    "issuePrefs": {
      "housing": 0.157407,
      "transport": 0.155632,
      "security": -0.099917,
      "healthcare": 0.110331,
      "climate": -0.28519,
      "industry": -0.254063,
      "education": 0.127577,
      "taxes": -0.191084
    },
    "issueSalience": {
      "housing": 0.368148,
      "transport": 0.367154,
      "security": 0.335954,
      "healthcare": 0.341785,
      "climate": 0.439706,
      "industry": 0.422275,
      "education": 0.351443,
      "taxes": 0.387007
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.432861,
    "turnoutBase": 0.517064,
    "volatility": 0.621835
  },
  {
    "id": "ess_lib_left_25_39_secondary_large_town_center",
    "name": "liberalni levice - 25-39 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004217,
    "position": {
      "econ": -0.31858,
      "culture": -0.121216,
      "authority": 0.111306
    },
    "space": {
      "econ": -0.31858,
      "culture": -0.121216,
      "authority": 0.111306,
      "establishment": 0.00307,
      "globalism": 0.078483,
      "green": 0.143515,
      "ukraine": 0.142865,
      "greenDeal": 0.233622
    },
    "axisSalience": {
      "econ": 0.553804,
      "culture": 0.470911,
      "authority": 0.42007
    },
    "issuePrefs": {
      "housing": 0.189765,
      "transport": 0.110882,
      "security": 0.009513,
      "healthcare": 0.21968,
      "climate": -0.168745,
      "industry": -0.224435,
      "education": 0.101618,
      "taxes": -0.243923
    },
    "issueSalience": {
      "housing": 0.386268,
      "transport": 0.342094,
      "security": 0.285327,
      "healthcare": 0.403021,
      "climate": 0.374497,
      "industry": 0.405683,
      "education": 0.336906,
      "taxes": 0.416597
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.494955,
    "turnoutBase": 0.570107,
    "volatility": 0.599724
  },
  {
    "id": "ess_lib_left_25_39_tertiary_town_center",
    "name": "liberalni levice - 25-39 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003841,
    "position": {
      "econ": -0.275875,
      "culture": -0.265777,
      "authority": 0.336832
    },
    "space": {
      "econ": -0.275875,
      "culture": -0.265777,
      "authority": 0.336832,
      "establishment": 0.15353,
      "globalism": 0.317823,
      "green": 0.417358,
      "ukraine": 0.232141,
      "greenDeal": 0.638413
    },
    "axisSalience": {
      "econ": 0.535868,
      "culture": 0.531626,
      "authority": 0.501259
    },
    "issuePrefs": {
      "housing": 0.183625,
      "transport": 0.154947,
      "security": 0.058639,
      "healthcare": 0.177368,
      "climate": -0.479254,
      "industry": -0.327962,
      "education": 0.089311,
      "taxes": -0.230524
    },
    "issueSalience": {
      "housing": 0.38283,
      "transport": 0.366771,
      "security": 0.312838,
      "healthcare": 0.379326,
      "climate": 0.548382,
      "industry": 0.463659,
      "education": 0.330014,
      "taxes": 0.409093
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.631352,
    "turnoutBase": 0.635374,
    "volatility": 0.536182
  },
  {
    "id": "ess_lib_left_15_24_secondary_town_center",
    "name": "liberalni levice - 15-24 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003755,
    "position": {
      "econ": -0.212696,
      "culture": -0.306779,
      "authority": 0.286707
    },
    "space": {
      "econ": -0.212696,
      "culture": -0.306779,
      "authority": 0.286707,
      "establishment": 0.192938,
      "globalism": 0.355809,
      "green": 0.512077,
      "ukraine": 0.365057,
      "greenDeal": 0.551993
    },
    "axisSalience": {
      "econ": 0.509332,
      "culture": 0.548847,
      "authority": 0.483215
    },
    "issuePrefs": {
      "housing": 0.153796,
      "transport": 0.151091,
      "security": -0.00139,
      "healthcare": 0.128599,
      "climate": -0.523254,
      "industry": -0.285538,
      "education": 0.080142,
      "taxes": -0.189954
    },
    "issueSalience": {
      "housing": 0.366126,
      "transport": 0.364611,
      "security": 0.280778,
      "healthcare": 0.352015,
      "climate": 0.573022,
      "industry": 0.439902,
      "education": 0.324879,
      "taxes": 0.386374
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.526784,
    "turnoutBase": 0.576753,
    "volatility": 0.582636
  },
  {
    "id": "ess_lib_left_15_24_lower_large_town_unknown",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.003726,
    "position": {
      "econ": -0.375032,
      "culture": -0.252083,
      "authority": -0.167234
    },
    "space": {
      "econ": -0.375032,
      "culture": -0.252083,
      "authority": -0.167234,
      "establishment": 0.065867,
      "globalism": 0.341573,
      "green": 0.270469,
      "ukraine": 0.154978,
      "greenDeal": 0.260994
    },
    "axisSalience": {
      "econ": 0.577513,
      "culture": 0.525875,
      "authority": 0.440204
    },
    "issuePrefs": {
      "housing": 0.236518,
      "transport": 0.180122,
      "security": -0.24815,
      "healthcare": 0.249856,
      "climate": -0.267816,
      "industry": -0.280528,
      "education": 0.103091,
      "taxes": -0.300273
    },
    "issueSalience": {
      "housing": 0.41245,
      "transport": 0.380868,
      "security": 0.418964,
      "healthcare": 0.41992,
      "climate": 0.429977,
      "industry": 0.437096,
      "education": 0.337731,
      "taxes": 0.448153
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.425764,
    "turnoutBase": 0.512305,
    "volatility": 0.534072
  },
  {
    "id": "ess_lib_left_25_39_tertiary_large_town_left",
    "name": "liberalni levice - 25-39 - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.003495,
    "position": {
      "econ": -0.359856,
      "culture": -0.526559,
      "authority": 0.030416
    },
    "space": {
      "econ": -0.359856,
      "culture": -0.526559,
      "authority": 0.030416,
      "establishment": 0.249198,
      "globalism": 0.57521,
      "green": 0.61242,
      "ukraine": 0.449164,
      "greenDeal": 0.510193
    },
    "axisSalience": {
      "econ": 0.57114,
      "culture": 0.641155,
      "authority": 0.39095
    },
    "issuePrefs": {
      "housing": 0.261108,
      "transport": 0.25377,
      "security": -0.26805,
      "healthcare": 0.216972,
      "climate": -0.583797,
      "industry": -0.382761,
      "education": 0.144115,
      "taxes": -0.322284
    },
    "issueSalience": {
      "housing": 0.426221,
      "transport": 0.422111,
      "security": 0.430108,
      "healthcare": 0.401504,
      "climate": 0.606926,
      "industry": 0.494346,
      "education": 0.360704,
      "taxes": 0.460479
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.654448,
    "turnoutBase": 0.638722,
    "volatility": 0.427572
  },
  {
    "id": "ess_lib_left_25_39_secondary_rural_center",
    "name": "liberalni levice - 25-39 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003466,
    "position": {
      "econ": -0.273872,
      "culture": -0.184783,
      "authority": 0.156129
    },
    "space": {
      "econ": -0.273872,
      "culture": -0.184783,
      "authority": 0.156129,
      "establishment": 0.109688,
      "globalism": 0.259925,
      "green": -0.015575,
      "ukraine": 0.101124,
      "greenDeal": 0.191868
    },
    "axisSalience": {
      "econ": 0.535026,
      "culture": 0.497609,
      "authority": 0.436206
    },
    "issuePrefs": {
      "housing": 0.172804,
      "transport": 0.13292,
      "security": -0.009816,
      "healthcare": 0.182405,
      "climate": -0.042509,
      "industry": -0.20529,
      "education": 0.07322,
      "taxes": -0.219362
    },
    "issueSalience": {
      "housing": 0.37677,
      "transport": 0.354435,
      "security": 0.285497,
      "healthcare": 0.382147,
      "climate": 0.303805,
      "industry": 0.394963,
      "education": 0.321003,
      "taxes": 0.402843
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.514371,
    "turnoutBase": 0.573839,
    "volatility": 0.590128
  },
  {
    "id": "ess_lib_left_25_39_secondary_town_unknown",
    "name": "liberalni levice - 25-39 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.003292,
    "position": {
      "econ": -0.521747,
      "culture": -0.332738,
      "authority": -0.207314
    },
    "space": {
      "econ": -0.521747,
      "culture": -0.332738,
      "authority": -0.207314,
      "establishment": -0.26574,
      "globalism": 0.144626,
      "green": 0.348966,
      "ukraine": 0.069571,
      "greenDeal": 0.480749
    },
    "axisSalience": {
      "econ": 0.639134,
      "culture": 0.55975,
      "authority": 0.454633
    },
    "issuePrefs": {
      "housing": 0.326889,
      "transport": 0.207685,
      "security": -0.2533,
      "healthcare": 0.349039,
      "climate": -0.385865,
      "industry": -0.415276,
      "education": 0.20986,
      "taxes": -0.415586
    },
    "issueSalience": {
      "housing": 0.463058,
      "transport": 0.396303,
      "security": 0.421848,
      "healthcare": 0.475462,
      "climate": 0.496085,
      "industry": 0.512555,
      "education": 0.397522,
      "taxes": 0.512728
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.477418,
    "turnoutBase": 0.560699,
    "volatility": 0.523917
  },
  {
    "id": "ess_lib_left_40_54_secondary_large_town_unknown",
    "name": "liberalni levice - 40-54 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.003177,
    "position": {
      "econ": -0.74299,
      "culture": -0.466684,
      "authority": 0.174928
    },
    "space": {
      "econ": -0.74299,
      "culture": -0.466684,
      "authority": 0.174928,
      "establishment": 0.033745,
      "globalism": -0.237209,
      "green": 0.03738,
      "ukraine": -0.156723,
      "greenDeal": -0.121191
    },
    "axisSalience": {
      "econ": 0.732056,
      "culture": 0.616007,
      "authority": 0.442974
    },
    "issuePrefs": {
      "housing": 0.464647,
      "transport": 0.241285,
      "security": 0.033019,
      "healthcare": 0.497618,
      "climate": 0.00702,
      "industry": -0.396693,
      "education": 0.393843,
      "taxes": -0.590955
    },
    "issueSalience": {
      "housing": 0.540202,
      "transport": 0.41512,
      "security": 0.298491,
      "healthcare": 0.558666,
      "climate": 0.283931,
      "industry": 0.502148,
      "education": 0.500552,
      "taxes": 0.610935
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.478467,
    "turnoutBase": 0.591181,
    "volatility": 0.516963
  },
  {
    "id": "ess_lib_left_15_24_secondary_large_town_center",
    "name": "liberalni levice - 15-24 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003061,
    "position": {
      "econ": -0.2324,
      "culture": -0.237989,
      "authority": 0.068316
    },
    "space": {
      "econ": -0.2324,
      "culture": -0.237989,
      "authority": 0.068316,
      "establishment": 0.119083,
      "globalism": 0.239994,
      "green": -0.148597,
      "ukraine": 0.236566,
      "greenDeal": 0.01204
    },
    "axisSalience": {
      "econ": 0.517608,
      "culture": 0.519955,
      "authority": 0.404594
    },
    "issuePrefs": {
      "housing": 0.156379,
      "transport": 0.129737,
      "security": -0.086405,
      "healthcare": 0.148289,
      "climate": 0.103618,
      "industry": -0.152632,
      "education": 0.086273,
      "taxes": -0.195887
    },
    "issueSalience": {
      "housing": 0.367572,
      "transport": 0.352653,
      "security": 0.328387,
      "healthcare": 0.363042,
      "climate": 0.338026,
      "industry": 0.365474,
      "education": 0.328313,
      "taxes": 0.389697
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.513926,
    "turnoutBase": 0.574168,
    "volatility": 0.589282
  },
  {
    "id": "ess_lib_left_40_54_secondary_rural_left",
    "name": "liberalni levice - 40-54 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.00283,
    "position": {
      "econ": -0.401599,
      "culture": -0.266109,
      "authority": 0.242098
    },
    "space": {
      "econ": -0.401599,
      "culture": -0.266109,
      "authority": 0.242098,
      "establishment": 0.343984,
      "globalism": 0.536755,
      "green": -0.014245,
      "ukraine": 0.353402,
      "greenDeal": 0.475118
    },
    "axisSalience": {
      "econ": 0.588672,
      "culture": 0.531766,
      "authority": 0.467155
    },
    "issuePrefs": {
      "housing": 0.252813,
      "transport": 0.21271,
      "security": -0.049298,
      "healthcare": 0.267863,
      "climate": -0.122776,
      "industry": -0.346664,
      "education": 0.071436,
      "taxes": -0.321084
    },
    "issueSalience": {
      "housing": 0.421575,
      "transport": 0.399118,
      "security": 0.307607,
      "healthcare": 0.430003,
      "climate": 0.348755,
      "industry": 0.474132,
      "education": 0.320004,
      "taxes": 0.459807
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.549724,
    "turnoutBase": 0.602039,
    "volatility": 0.489041
  },
  {
    "id": "ess_lib_left_40_54_secondary_large_town_center",
    "name": "liberalni levice - 40-54 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002801,
    "position": {
      "econ": -0.173011,
      "culture": -0.229241,
      "authority": 0.226094
    },
    "space": {
      "econ": -0.173011,
      "culture": -0.229241,
      "authority": 0.226094,
      "establishment": 0.104821,
      "globalism": 0.306744,
      "green": 0.283422,
      "ukraine": 0.147308,
      "greenDeal": 0.564744
    },
    "axisSalience": {
      "econ": 0.492664,
      "culture": 0.516281,
      "authority": 0.461394
    },
    "issuePrefs": {
      "housing": 0.122665,
      "transport": 0.121325,
      "security": 0.008992,
      "healthcare": 0.106228,
      "climate": -0.362192,
      "industry": -0.256387,
      "education": 0.054273,
      "taxes": -0.152077
    },
    "issueSalience": {
      "housing": 0.348692,
      "transport": 0.347942,
      "security": 0.285036,
      "healthcare": 0.339488,
      "climate": 0.482827,
      "industry": 0.423577,
      "education": 0.310393,
      "taxes": 0.365163
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.51679,
    "turnoutBase": 0.593669,
    "volatility": 0.610566
  },
  {
    "id": "ess_lib_left_40_54_secondary_large_town_right",
    "name": "liberalni levice - 40-54 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002715,
    "position": {
      "econ": -0.145308,
      "culture": -0.37406,
      "authority": -0.088765
    },
    "space": {
      "econ": -0.145308,
      "culture": -0.37406,
      "authority": -0.088765,
      "establishment": 0.275159,
      "globalism": 0.500821,
      "green": 0.059312,
      "ukraine": 0.185424,
      "greenDeal": 0.396928
    },
    "axisSalience": {
      "econ": 0.481029,
      "culture": 0.577105,
      "authority": 0.411955
    },
    "issuePrefs": {
      "housing": 0.124807,
      "transport": 0.163756,
      "security": -0.264753,
      "healthcare": 0.074697,
      "climate": -0.153845,
      "industry": -0.229436,
      "education": 0.055615,
      "taxes": -0.149509
    },
    "issueSalience": {
      "housing": 0.349892,
      "transport": 0.371704,
      "security": 0.428262,
      "healthcare": 0.32183,
      "climate": 0.366153,
      "industry": 0.408484,
      "education": 0.311144,
      "taxes": 0.363725
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.542062,
    "turnoutBase": 0.599631,
    "volatility": 0.495236
  },
  {
    "id": "ess_lib_left_40_54_tertiary_large_town_left",
    "name": "liberalni levice - 40-54 - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002686,
    "position": {
      "econ": -0.577956,
      "culture": -0.297069,
      "authority": 0.108729
    },
    "space": {
      "econ": -0.577956,
      "culture": -0.297069,
      "authority": 0.108729,
      "establishment": 0.158657,
      "globalism": 0.352726,
      "green": -0.012764,
      "ukraine": 0.237347,
      "greenDeal": 0.134328
    },
    "axisSalience": {
      "econ": 0.662742,
      "culture": 0.544769,
      "authority": 0.419143
    },
    "issuePrefs": {
      "housing": 0.353524,
      "transport": 0.240289,
      "security": -0.098246,
      "healthcare": 0.392363,
      "climate": -0.028422,
      "industry": -0.351571,
      "education": 0.165084,
      "taxes": -0.451777
    },
    "issueSalience": {
      "housing": 0.477974,
      "transport": 0.414562,
      "security": 0.335018,
      "healthcare": 0.499723,
      "climate": 0.295916,
      "industry": 0.47688,
      "education": 0.372447,
      "taxes": 0.532995
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.633856,
    "turnoutBase": 0.655553,
    "volatility": 0.455721
  },
  {
    "id": "ess_lib_left_15_24_lower_town_unknown",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.002484,
    "position": {
      "econ": -0.673624,
      "culture": -0.317099,
      "authority": -0.4026
    },
    "space": {
      "econ": -0.673624,
      "culture": -0.317099,
      "authority": -0.4026,
      "establishment": -0.142884,
      "globalism": -0.348975,
      "green": -0.691902,
      "ukraine": 0.10987,
      "greenDeal": -0.582234
    },
    "axisSalience": {
      "econ": 0.702922,
      "culture": 0.553182,
      "authority": 0.524936
    },
    "issuePrefs": {
      "housing": 0.408545,
      "transport": 0.183607,
      "security": -0.284374,
      "healthcare": 0.459642,
      "climate": 0.661195,
      "industry": -0.227209,
      "education": 0.349429,
      "taxes": -0.523061
    },
    "issueSalience": {
      "housing": 0.508785,
      "transport": 0.38282,
      "security": 0.439249,
      "healthcare": 0.537399,
      "climate": 0.650269,
      "industry": 0.407237,
      "education": 0.47568,
      "taxes": 0.572914
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.367631,
    "turnoutBase": 0.504999,
    "volatility": 0.55286
  },
  {
    "id": "ess_lib_left_55_plus_lower_town_left",
    "name": "liberalni levice - 55+ - nizsi vzdelani - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002426,
    "position": {
      "econ": -0.446393,
      "culture": -0.084781,
      "authority": 0.331845
    },
    "space": {
      "econ": -0.446393,
      "culture": -0.084781,
      "authority": 0.331845,
      "establishment": -0.444585,
      "globalism": -0.459629,
      "green": 0.161212,
      "ukraine": -0.782461,
      "greenDeal": 0.062968
    },
    "axisSalience": {
      "econ": 0.607485,
      "culture": 0.455608,
      "authority": 0.499464
    },
    "issuePrefs": {
      "housing": 0.25569,
      "transport": 0.071703,
      "security": 0.327335,
      "healthcare": 0.31462,
      "climate": -0.133703,
      "industry": -0.235713,
      "education": 0.237926,
      "taxes": -0.331576
    },
    "issueSalience": {
      "housing": 0.423186,
      "transport": 0.320154,
      "security": 0.463308,
      "healthcare": 0.456187,
      "climate": 0.354874,
      "industry": 0.411999,
      "education": 0.413238,
      "taxes": 0.465683
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.336855,
    "turnoutBase": 0.59444,
    "volatility": 0.510013
  },
  {
    "id": "ess_lib_left_15_24_secondary_large_town_unknown",
    "name": "liberalni levice - 15-24 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.002368,
    "position": {
      "econ": -0.458114,
      "culture": -0.169491,
      "authority": -0.07941
    },
    "space": {
      "econ": -0.458114,
      "culture": -0.169491,
      "authority": -0.07941,
      "establishment": 0.163114,
      "globalism": 0.348293,
      "green": -0.194909,
      "ukraine": -0.082953,
      "greenDeal": 0.03767
    },
    "axisSalience": {
      "econ": 0.612408,
      "culture": 0.491186,
      "authority": 0.408588
    },
    "issuePrefs": {
      "housing": 0.272301,
      "transport": 0.186832,
      "security": -0.152748,
      "healthcare": 0.316283,
      "climate": 0.129787,
      "industry": -0.250281,
      "education": 0.092645,
      "taxes": -0.350181
    },
    "issueSalience": {
      "housing": 0.432489,
      "transport": 0.384626,
      "security": 0.365539,
      "healthcare": 0.457118,
      "climate": 0.352681,
      "industry": 0.420158,
      "education": 0.331881,
      "taxes": 0.476101
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.523947,
    "turnoutBase": 0.575709,
    "volatility": 0.48532
  },
  {
    "id": "ess_lib_left_25_39_tertiary_large_town_center",
    "name": "liberalni levice - 25-39 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002339,
    "position": {
      "econ": -0.259887,
      "culture": -0.249477,
      "authority": 0.040993
    },
    "space": {
      "econ": -0.259887,
      "culture": -0.249477,
      "authority": 0.040993,
      "establishment": 0.101517,
      "globalism": 0.150852,
      "green": 0.110792,
      "ukraine": 0.215219,
      "greenDeal": 0.380713
    },
    "axisSalience": {
      "econ": 0.529152,
      "culture": 0.524781,
      "authority": 0.394757
    },
    "issuePrefs": {
      "housing": 0.172875,
      "transport": 0.12798,
      "security": -0.088809,
      "healthcare": 0.16716,
      "climate": -0.18637,
      "industry": -0.255825,
      "education": 0.116503,
      "taxes": -0.217056
    },
    "issueSalience": {
      "housing": 0.37681,
      "transport": 0.351669,
      "security": 0.329733,
      "healthcare": 0.37361,
      "climate": 0.384367,
      "industry": 0.423262,
      "education": 0.345241,
      "taxes": 0.401551
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.617172,
    "turnoutBase": 0.633553,
    "volatility": 0.540863
  },
  {
    "id": "ess_lib_left_15_24_lower_large_town_right",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002282,
    "position": {
      "econ": -0.170149,
      "culture": -0.420636,
      "authority": -0.279153
    },
    "space": {
      "econ": -0.170149,
      "culture": -0.420636,
      "authority": -0.279153,
      "establishment": 0.47638,
      "globalism": 0.303179,
      "green": 0.14723,
      "ukraine": 0.547668,
      "greenDeal": 0.08556
    },
    "axisSalience": {
      "econ": 0.491463,
      "culture": 0.596667,
      "authority": 0.480495
    },
    "issuePrefs": {
      "housing": 0.144058,
      "transport": 0.154633,
      "security": -0.389239,
      "healthcare": 0.088856,
      "climate": -0.129962,
      "industry": -0.174517,
      "education": 0.121359,
      "taxes": -0.172984
    },
    "issueSalience": {
      "housing": 0.360673,
      "transport": 0.366595,
      "security": 0.497974,
      "healthcare": 0.32976,
      "climate": 0.352779,
      "industry": 0.37773,
      "education": 0.347961,
      "taxes": 0.376871
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.456301,
    "turnoutBase": 0.526673,
    "volatility": 0.497126
  },
  {
    "id": "ess_lib_left_40_54_secondary_rural_center",
    "name": "liberalni levice - 40-54 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002224,
    "position": {
      "econ": -0.236401,
      "culture": -0.101508,
      "authority": 0.311217
    },
    "space": {
      "econ": -0.236401,
      "culture": -0.101508,
      "authority": 0.311217,
      "establishment": -0.00443,
      "globalism": 0.060185,
      "green": 0.034165,
      "ukraine": 0.203525,
      "greenDeal": 0.064422
    },
    "axisSalience": {
      "econ": 0.519289,
      "culture": 0.462633,
      "authority": 0.492038
    },
    "issuePrefs": {
      "housing": 0.142202,
      "transport": 0.084594,
      "security": 0.137417,
      "healthcare": 0.162088,
      "climate": -0.042637,
      "industry": -0.142477,
      "education": 0.079023,
      "taxes": -0.18239
    },
    "issueSalience": {
      "housing": 0.359633,
      "transport": 0.327373,
      "security": 0.356954,
      "healthcare": 0.370769,
      "climate": 0.303877,
      "industry": 0.359787,
      "education": 0.324253,
      "taxes": 0.382138
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.493257,
    "turnoutBase": 0.589845,
    "volatility": 0.620399
  },
  {
    "id": "ess_lib_left_15_24_lower_town_center",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002166,
    "position": {
      "econ": -0.368218,
      "culture": -0.276388,
      "authority": 0.218302
    },
    "space": {
      "econ": -0.368218,
      "culture": -0.276388,
      "authority": 0.218302,
      "establishment": 0.268036,
      "globalism": 0.283308,
      "green": 0.168983,
      "ukraine": 0.583844,
      "greenDeal": 0.524567
    },
    "axisSalience": {
      "econ": 0.574651,
      "culture": 0.536083,
      "authority": 0.458589
    },
    "issuePrefs": {
      "housing": 0.235686,
      "transport": 0.175801,
      "security": -0.039744,
      "healthcare": 0.243006,
      "climate": -0.268547,
      "industry": -0.345026,
      "education": 0.12278,
      "taxes": -0.298283
    },
    "issueSalience": {
      "housing": 0.411984,
      "transport": 0.378449,
      "security": 0.302257,
      "healthcare": 0.416083,
      "climate": 0.430386,
      "industry": 0.473215,
      "education": 0.348757,
      "taxes": 0.447039
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.438441,
    "turnoutBase": 0.519381,
    "volatility": 0.615877
  },
  {
    "id": "ess_lib_left_55_plus_secondary_town_right",
    "name": "liberalni levice - 55+ - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002137,
    "position": {
      "econ": -0.115084,
      "culture": -0.219679,
      "authority": 0.093962
    },
    "space": {
      "econ": -0.115084,
      "culture": -0.219679,
      "authority": 0.093962,
      "establishment": 0.412489,
      "globalism": 0.389628,
      "green": -0.217323,
      "ukraine": 0.739271,
      "greenDeal": 0.202516
    },
    "axisSalience": {
      "econ": 0.468335,
      "culture": 0.512265,
      "authority": 0.413826
    },
    "issuePrefs": {
      "housing": 0.089658,
      "transport": 0.115069,
      "security": -0.132528,
      "healthcare": 0.065286,
      "climate": 0.099768,
      "industry": -0.141085,
      "education": 0.018789,
      "taxes": -0.109222
    },
    "issueSalience": {
      "housing": 0.330208,
      "transport": 0.344438,
      "security": 0.354216,
      "healthcare": 0.31656,
      "climate": 0.33587,
      "industry": 0.359007,
      "education": 0.290522,
      "taxes": 0.341164
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.546377,
    "turnoutBase": 0.684437,
    "volatility": 0.392876
  },
  {
    "id": "ess_lib_left_15_24_secondary_rural_center",
    "name": "liberalni levice - 15-24 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002079,
    "position": {
      "econ": -0.257634,
      "culture": -0.234206,
      "authority": 0.14501
    },
    "space": {
      "econ": -0.257634,
      "culture": -0.234206,
      "authority": 0.14501,
      "establishment": 0.211733,
      "globalism": 0.447052,
      "green": 0.23711,
      "ukraine": 0.329081,
      "greenDeal": 0.528163
    },
    "axisSalience": {
      "econ": 0.528206,
      "culture": 0.518367,
      "authority": 0.432203
    },
    "issuePrefs": {
      "housing": 0.169803,
      "transport": 0.160212,
      "security": -0.082468,
      "healthcare": 0.16676,
      "climate": -0.318605,
      "industry": -0.287428,
      "education": 0.045453,
      "taxes": -0.213601
    },
    "issueSalience": {
      "housing": 0.37509,
      "transport": 0.369719,
      "security": 0.326182,
      "healthcare": 0.373386,
      "climate": 0.458419,
      "industry": 0.44096,
      "education": 0.305454,
      "taxes": 0.399617
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.533762,
    "turnoutBase": 0.577411,
    "volatility": 0.580944
  },
  {
    "id": "ess_lib_left_15_24_secondary_rural_left",
    "name": "liberalni levice - 15-24 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002079,
    "position": {
      "econ": -0.631593,
      "culture": -0.174991,
      "authority": 0.219787
    },
    "space": {
      "econ": -0.631593,
      "culture": -0.174991,
      "authority": 0.219787,
      "establishment": 0.22288,
      "globalism": 0.391311,
      "green": -0.267404,
      "ukraine": 0.04046,
      "greenDeal": 0.243897
    },
    "axisSalience": {
      "econ": 0.685269,
      "culture": 0.493496,
      "authority": 0.459123
    },
    "issuePrefs": {
      "housing": 0.368375,
      "transport": 0.236354,
      "security": 0.013597,
      "healthcare": 0.440748,
      "climate": 0.12424,
      "industry": -0.380567,
      "education": 0.126741,
      "taxes": -0.475746
    },
    "issueSalience": {
      "housing": 0.48629,
      "transport": 0.412358,
      "security": 0.287615,
      "healthcare": 0.526819,
      "climate": 0.349574,
      "industry": 0.493117,
      "education": 0.350975,
      "taxes": 0.546418
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.531309,
    "turnoutBase": 0.577801,
    "volatility": 0.479941
  },
  {
    "id": "ess_lib_left_25_39_secondary_large_town_left",
    "name": "liberalni levice - 25-39 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002051,
    "position": {
      "econ": -0.448314,
      "culture": -0.393295,
      "authority": 0.113219
    },
    "space": {
      "econ": -0.448314,
      "culture": -0.393295,
      "authority": 0.113219,
      "establishment": 0.063794,
      "globalism": 0.167344,
      "green": 0.116694,
      "ukraine": 0.203861,
      "greenDeal": 0.193924
    },
    "axisSalience": {
      "econ": 0.608292,
      "culture": 0.585184,
      "authority": 0.420759
    },
    "issuePrefs": {
      "housing": 0.293768,
      "transport": 0.202953,
      "security": -0.086358,
      "healthcare": 0.291323,
      "climate": -0.138319,
      "industry": -0.323559,
      "education": 0.208433,
      "taxes": -0.369982
    },
    "issueSalience": {
      "housing": 0.44451,
      "transport": 0.393654,
      "security": 0.32836,
      "healthcare": 0.443141,
      "climate": 0.357459,
      "industry": 0.461193,
      "education": 0.396722,
      "taxes": 0.48719
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.505144,
    "turnoutBase": 0.572233,
    "volatility": 0.494259
  },
  {
    "id": "ess_lib_left_55_plus_lower_large_town_unknown",
    "name": "liberalni levice - 55+ - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001935,
    "position": {
      "econ": -0.490156,
      "culture": -0.055732,
      "authority": -0.354776
    },
    "space": {
      "econ": -0.490156,
      "culture": -0.055732,
      "authority": -0.354776,
      "establishment": -0.264929,
      "globalism": -0.406759,
      "green": 0.111818,
      "ukraine": -0.165323,
      "greenDeal": -0.222
    },
    "axisSalience": {
      "econ": 0.625865,
      "culture": 0.443407,
      "authority": 0.507719
    },
    "issuePrefs": {
      "housing": 0.276273,
      "transport": 0.083759,
      "security": -0.149123,
      "healthcare": 0.348453,
      "climate": -0.018349,
      "industry": -0.182223,
      "education": 0.22663,
      "taxes": -0.3596
    },
    "issueSalience": {
      "housing": 0.434713,
      "transport": 0.326905,
      "security": 0.363509,
      "healthcare": 0.475134,
      "climate": 0.290276,
      "industry": 0.382045,
      "education": 0.406913,
      "taxes": 0.481376
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.3544,
    "turnoutBase": 0.600728,
    "volatility": 0.493844
  },
  {
    "id": "ess_lib_left_40_54_secondary_town_unknown",
    "name": "liberalni levice - 40-54 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001906,
    "position": {
      "econ": -0.7596,
      "culture": -0.214519,
      "authority": 0.341947
    },
    "space": {
      "econ": -0.7596,
      "culture": -0.214519,
      "authority": 0.341947,
      "establishment": 0.318612,
      "globalism": 0.463307,
      "green": -0.13705,
      "ukraine": 0.359202,
      "greenDeal": 0.59117
    },
    "axisSalience": {
      "econ": 0.739032,
      "culture": 0.510098,
      "authority": 0.503101
    },
    "issuePrefs": {
      "housing": 0.443522,
      "transport": 0.28411,
      "security": 0.03981,
      "healthcare": 0.52975,
      "climate": -0.066852,
      "industry": -0.52991,
      "education": 0.155458,
      "taxes": -0.572654
    },
    "issueSalience": {
      "housing": 0.528372,
      "transport": 0.439102,
      "security": 0.302294,
      "healthcare": 0.57666,
      "climate": 0.317437,
      "industry": 0.57675,
      "education": 0.367057,
      "taxes": 0.600686
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.543287,
    "turnoutBase": 0.601151,
    "volatility": 0.491325
  },
  {
    "id": "ess_lib_left_15_24_lower_town_left",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001848,
    "position": {
      "econ": -0.354533,
      "culture": -0.440244,
      "authority": 0.156856
    },
    "space": {
      "econ": -0.354533,
      "culture": -0.440244,
      "authority": 0.156856,
      "establishment": 0.27468,
      "globalism": 0.41814,
      "green": 0.5025,
      "ukraine": 0.389275,
      "greenDeal": 0.279469
    },
    "axisSalience": {
      "econ": 0.568904,
      "culture": 0.604903,
      "authority": 0.436468
    },
    "issuePrefs": {
      "housing": 0.247823,
      "transport": 0.218054,
      "security": -0.132425,
      "healthcare": 0.220044,
      "climate": -0.440052,
      "industry": -0.309402,
      "education": 0.147183,
      "taxes": -0.308093
    },
    "issueSalience": {
      "housing": 0.418781,
      "transport": 0.40211,
      "security": 0.354158,
      "healthcare": 0.403225,
      "climate": 0.526429,
      "industry": 0.453265,
      "education": 0.362422,
      "taxes": 0.452532
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.447063,
    "turnoutBase": 0.519614,
    "volatility": 0.515279
  },
  {
    "id": "ess_lib_left_15_24_tertiary_large_town_center",
    "name": "liberalni levice - 15-24 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001791,
    "position": {
      "econ": -0.222389,
      "culture": -0.267599,
      "authority": -0.275254
    },
    "space": {
      "econ": -0.222389,
      "culture": -0.267599,
      "authority": -0.275254,
      "establishment": 0.168156,
      "globalism": 0.483392,
      "green": 0.503157,
      "ukraine": 0.59574,
      "greenDeal": 0.439218
    },
    "axisSalience": {
      "econ": 0.513403,
      "culture": 0.532392,
      "authority": 0.479092
    },
    "issuePrefs": {
      "housing": 0.154426,
      "transport": 0.161772,
      "security": -0.380255,
      "healthcare": 0.138712,
      "climate": -0.485254,
      "industry": -0.255879,
      "education": 0.040687,
      "taxes": -0.192232
    },
    "issueSalience": {
      "housing": 0.366478,
      "transport": 0.370592,
      "security": 0.492943,
      "healthcare": 0.357679,
      "climate": 0.551742,
      "industry": 0.423292,
      "education": 0.302785,
      "taxes": 0.38765
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.642456,
    "turnoutBase": 0.635885,
    "volatility": 0.534866
  },
  {
    "id": "ess_lib_left_25_39_secondary_rural_unknown",
    "name": "liberalni levice - 25-39 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001791,
    "position": {
      "econ": -0.751235,
      "culture": -0.165753,
      "authority": -0.204172
    },
    "space": {
      "econ": -0.751235,
      "culture": -0.165753,
      "authority": -0.204172,
      "establishment": -0.20557,
      "globalism": 0.07306,
      "green": 0.124669,
      "ukraine": 0.11991,
      "greenDeal": 0.202353
    },
    "axisSalience": {
      "econ": 0.735519,
      "culture": 0.489616,
      "authority": 0.453502
    },
    "issuePrefs": {
      "housing": 0.43307,
      "transport": 0.226411,
      "security": -0.195741,
      "healthcare": 0.527629,
      "climate": -0.14642,
      "industry": -0.423968,
      "education": 0.222237,
      "taxes": -0.56078
    },
    "issueSalience": {
      "housing": 0.522519,
      "transport": 0.40679,
      "security": 0.389615,
      "healthcare": 0.575472,
      "climate": 0.361995,
      "industry": 0.517422,
      "education": 0.404452,
      "taxes": 0.594037
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.477938,
    "turnoutBase": 0.562805,
    "volatility": 0.518501
  },
  {
    "id": "ess_lib_left_15_24_secondary_large_town_left",
    "name": "liberalni levice - 15-24 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001762,
    "position": {
      "econ": -0.273493,
      "culture": -0.625439,
      "authority": -0.055312
    },
    "space": {
      "econ": -0.273493,
      "culture": -0.625439,
      "authority": -0.055312,
      "establishment": 0.131516,
      "globalism": 0.19533,
      "green": 0.474955,
      "ukraine": 0.17822,
      "greenDeal": 0.584593
    },
    "axisSalience": {
      "econ": 0.534867,
      "culture": 0.682685,
      "authority": 0.399912
    },
    "issuePrefs": {
      "housing": 0.225474,
      "transport": 0.204392,
      "security": -0.258833,
      "healthcare": 0.14688,
      "climate": -0.505653,
      "industry": -0.378688,
      "education": 0.24157,
      "taxes": -0.271968
    },
    "issueSalience": {
      "housing": 0.406265,
      "transport": 0.39446,
      "security": 0.424947,
      "healthcare": 0.362253,
      "climate": 0.563166,
      "industry": 0.492065,
      "education": 0.415279,
      "taxes": 0.432302
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.512241,
    "turnoutBase": 0.574603,
    "volatility": 0.488164
  },
  {
    "id": "ess_lib_left_25_39_tertiary_rural_left",
    "name": "liberalni levice - 25-39 - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001762,
    "position": {
      "econ": -0.642507,
      "culture": -0.443817,
      "authority": -0.186914
    },
    "space": {
      "econ": -0.642507,
      "culture": -0.443817,
      "authority": -0.186914,
      "establishment": 0.060494,
      "globalism": 0.361399,
      "green": 0.433022,
      "ukraine": 0.217049,
      "greenDeal": 0.651741
    },
    "axisSalience": {
      "econ": 0.689853,
      "culture": 0.606403,
      "authority": 0.447289
    },
    "issuePrefs": {
      "housing": 0.406637,
      "transport": 0.283882,
      "security": -0.322571,
      "healthcare": 0.427099,
      "climate": -0.494263,
      "industry": -0.531858,
      "education": 0.23003,
      "taxes": -0.515863
    },
    "issueSalience": {
      "housing": 0.507717,
      "transport": 0.438974,
      "security": 0.46064,
      "healthcare": 0.519176,
      "climate": 0.556787,
      "industry": 0.577841,
      "education": 0.408817,
      "taxes": 0.568883
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.626523,
    "turnoutBase": 0.632117,
    "volatility": 0.444556
  },
  {
    "id": "ess_lib_left_25_39_secondary_large_town_right",
    "name": "liberalni levice - 25-39 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001733,
    "position": {
      "econ": -0.145484,
      "culture": -0.364805,
      "authority": -0.034331
    },
    "space": {
      "econ": -0.145484,
      "culture": -0.364805,
      "authority": -0.034331,
      "establishment": 0.49986,
      "globalism": 0.589573,
      "green": 0.407897,
      "ukraine": 0.820137,
      "greenDeal": 0.793414
    },
    "axisSalience": {
      "econ": 0.481103,
      "culture": 0.573218,
      "authority": 0.392359
    },
    "issuePrefs": {
      "housing": 0.123793,
      "transport": 0.172785,
      "security": -0.295165,
      "healthcare": 0.075564,
      "climate": -0.515842,
      "industry": -0.323007,
      "education": 0.032892,
      "taxes": -0.148525
    },
    "issueSalience": {
      "housing": 0.349324,
      "transport": 0.376759,
      "security": 0.445292,
      "healthcare": 0.322316,
      "climate": 0.568872,
      "industry": 0.460884,
      "education": 0.298419,
      "taxes": 0.363174
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.565363,
    "turnoutBase": 0.587495,
    "volatility": 0.455013
  },
  {
    "id": "ess_lib_left_25_39_secondary_town_left",
    "name": "liberalni levice - 25-39 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001704,
    "position": {
      "econ": -0.463815,
      "culture": -0.189691,
      "authority": 0.151187
    },
    "space": {
      "econ": -0.463815,
      "culture": -0.189691,
      "authority": 0.151187,
      "establishment": 0.033929,
      "globalism": -0.011968,
      "green": 0.157511,
      "ukraine": -0.12619,
      "greenDeal": 0.200029
    },
    "axisSalience": {
      "econ": 0.614802,
      "culture": 0.49967,
      "authority": 0.434427
    },
    "issuePrefs": {
      "housing": 0.277861,
      "transport": 0.148662,
      "security": 0.052872,
      "healthcare": 0.318772,
      "climate": -0.169416,
      "industry": -0.295506,
      "education": 0.18034,
      "taxes": -0.35671
    },
    "issueSalience": {
      "housing": 0.435602,
      "transport": 0.363251,
      "security": 0.309608,
      "healthcare": 0.458512,
      "climate": 0.374873,
      "industry": 0.445483,
      "education": 0.380991,
      "taxes": 0.479757
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.491996,
    "turnoutBase": 0.571188,
    "volatility": 0.496946
  },
  {
    "id": "ess_lib_left_25_39_lower_large_town_right",
    "name": "liberalni levice - 25-39 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001588,
    "position": {
      "econ": -0.248473,
      "culture": -0.267317,
      "authority": 0.369049
    },
    "space": {
      "econ": -0.248473,
      "culture": -0.267317,
      "authority": 0.369049,
      "establishment": -0.181505,
      "globalism": 0.456738,
      "green": -0.404785,
      "ukraine": 0.329313,
      "greenDeal": -0.506391
    },
    "axisSalience": {
      "econ": 0.524359,
      "culture": 0.532273,
      "authority": 0.512858
    },
    "issuePrefs": {
      "housing": 0.168738,
      "transport": 0.165044,
      "security": 0.045404,
      "healthcare": 0.157515,
      "climate": 0.433235,
      "industry": -0.040881,
      "education": 0.052712,
      "taxes": -0.210979
    },
    "issueSalience": {
      "housing": 0.374493,
      "transport": 0.372425,
      "security": 0.305426,
      "healthcare": 0.368209,
      "climate": 0.522612,
      "industry": 0.302893,
      "education": 0.309519,
      "taxes": 0.398148
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.412884,
    "turnoutBase": 0.503647,
    "volatility": 0.556335
  },
  {
    "id": "ess_lib_left_15_24_tertiary_town_center",
    "name": "liberalni levice - 15-24 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001531,
    "position": {
      "econ": -0.237179,
      "culture": -0.540036,
      "authority": -0.046333
    },
    "space": {
      "econ": -0.237179,
      "culture": -0.540036,
      "authority": -0.046333,
      "establishment": 0.132401,
      "globalism": 0.195981,
      "green": 0.274603,
      "ukraine": 0.19369,
      "greenDeal": 0.115502
    },
    "axisSalience": {
      "econ": 0.519615,
      "culture": 0.646815,
      "authority": 0.39668
    },
    "issuePrefs": {
      "housing": 0.195253,
      "transport": 0.180019,
      "security": -0.230708,
      "healthcare": 0.127566,
      "climate": -0.230055,
      "industry": -0.234029,
      "education": 0.20282,
      "taxes": -0.235573
    },
    "issueSalience": {
      "housing": 0.389342,
      "transport": 0.380811,
      "security": 0.409196,
      "healthcare": 0.351437,
      "climate": 0.408831,
      "industry": 0.411056,
      "education": 0.393579,
      "taxes": 0.411921
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.622351,
    "turnoutBase": 0.634634,
    "volatility": 0.538084
  },
  {
    "id": "ess_lib_left_55_plus_secondary_large_town_unknown",
    "name": "liberalni levice - 55+ - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001531,
    "position": {
      "econ": -0.442012,
      "culture": -0.142001,
      "authority": 0.187439
    },
    "space": {
      "econ": -0.442012,
      "culture": -0.142001,
      "authority": 0.187439,
      "establishment": -0.017378,
      "globalism": 0.422221,
      "green": 0.402221,
      "ukraine": 0.131025,
      "greenDeal": 0.540723
    },
    "axisSalience": {
      "econ": 0.605645,
      "culture": 0.47964,
      "authority": 0.447478
    },
    "issuePrefs": {
      "housing": 0.260147,
      "transport": 0.18673,
      "security": -0.01003,
      "healthcare": 0.306889,
      "climate": -0.441001,
      "industry": -0.358659,
      "education": 0.062895,
      "taxes": -0.335289
    },
    "issueSalience": {
      "housing": 0.425682,
      "transport": 0.384569,
      "security": 0.285617,
      "healthcare": 0.451858,
      "climate": 0.526961,
      "industry": 0.480849,
      "education": 0.315221,
      "taxes": 0.467762
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.513943,
    "turnoutBase": 0.669392,
    "volatility": 0.431564
  },
  {
    "id": "ess_lib_left_25_39_tertiary_town_left",
    "name": "liberalni levice - 25-39 - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001502,
    "position": {
      "econ": -0.201772,
      "culture": -0.374705,
      "authority": 0.119936
    },
    "space": {
      "econ": -0.201772,
      "culture": -0.374705,
      "authority": 0.119936,
      "establishment": 0.433783,
      "globalism": 0.634038,
      "green": 0.19296,
      "ukraine": 0.170375,
      "greenDeal": 0.538045
    },
    "axisSalience": {
      "econ": 0.504744,
      "culture": 0.577376,
      "authority": 0.423177
    },
    "issuePrefs": {
      "housing": 0.155939,
      "transport": 0.193975,
      "security": -0.158314,
      "healthcare": 0.1153,
      "climate": -0.289584,
      "industry": -0.289393,
      "education": 0.040084,
      "taxes": -0.190241
    },
    "issueSalience": {
      "housing": 0.367326,
      "transport": 0.388626,
      "security": 0.368656,
      "healthcare": 0.344568,
      "climate": 0.442167,
      "industry": 0.44206,
      "education": 0.302447,
      "taxes": 0.386535
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.672745,
    "turnoutBase": 0.645182,
    "volatility": 0.41096
  },
  {
    "id": "ess_lib_left_40_54_lower_large_town_center",
    "name": "liberalni levice - 40-54 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001329,
    "position": {
      "econ": -0.249404,
      "culture": -0.053348,
      "authority": 0.145863
    },
    "space": {
      "econ": -0.249404,
      "culture": -0.053348,
      "authority": 0.145863,
      "establishment": 0.145187,
      "globalism": 0.613476,
      "green": 0.048356,
      "ukraine": -0.085445,
      "greenDeal": 0.702767
    },
    "axisSalience": {
      "econ": 0.52475,
      "culture": 0.442406,
      "authority": 0.432511
    },
    "issuePrefs": {
      "housing": 0.143574,
      "transport": 0.145571,
      "security": -0.028092,
      "healthcare": 0.175303,
      "climate": -0.231591,
      "industry": -0.292992,
      "education": -0.056436,
      "taxes": -0.185973
    },
    "issueSalience": {
      "housing": 0.360401,
      "transport": 0.36152,
      "security": 0.295732,
      "healthcare": 0.37817,
      "climate": 0.409691,
      "industry": 0.444076,
      "education": 0.311604,
      "taxes": 0.384145
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.448424,
    "turnoutBase": 0.535082,
    "volatility": 0.646933
  },
  {
    "id": "ess_lib_left_25_39_lower_town_center",
    "name": "liberalni levice - 25-39 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001242,
    "position": {
      "econ": -0.41207,
      "culture": -0.12863,
      "authority": -0.143622
    },
    "space": {
      "econ": -0.41207,
      "culture": -0.12863,
      "authority": -0.143622,
      "establishment": -0.213773,
      "globalism": -0.074847,
      "green": 0.021273,
      "ukraine": -0.456411,
      "greenDeal": -0.122216
    },
    "axisSalience": {
      "econ": 0.593069,
      "culture": 0.474024,
      "authority": 0.431704
    },
    "issuePrefs": {
      "housing": 0.242074,
      "transport": 0.117189,
      "security": -0.075076,
      "healthcare": 0.2864,
      "climate": 0.018904,
      "industry": -0.183374,
      "education": 0.160384,
      "taxes": -0.312126
    },
    "issueSalience": {
      "housing": 0.415561,
      "transport": 0.345626,
      "security": 0.322043,
      "healthcare": 0.440384,
      "climate": 0.290586,
      "industry": 0.382689,
      "education": 0.369815,
      "taxes": 0.454791
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.378407,
    "turnoutBase": 0.502518,
    "volatility": 0.65924
  },
  {
    "id": "ess_lib_left_25_39_tertiary_rural_center",
    "name": "liberalni levice - 25-39 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001213,
    "position": {
      "econ": -0.269835,
      "culture": -0.306825,
      "authority": -0.042446
    },
    "space": {
      "econ": -0.269835,
      "culture": -0.306825,
      "authority": -0.042446,
      "establishment": 0.265807,
      "globalism": 0.349133,
      "green": 0.410864,
      "ukraine": 0.192462,
      "greenDeal": 0.612701
    },
    "axisSalience": {
      "econ": 0.53333,
      "culture": 0.548866,
      "authority": 0.395281
    },
    "issuePrefs": {
      "housing": 0.185228,
      "transport": 0.164583,
      "security": -0.190468,
      "healthcare": 0.169735,
      "climate": -0.467378,
      "industry": -0.326401,
      "education": 0.09534,
      "taxes": -0.2311
    },
    "issueSalience": {
      "housing": 0.383728,
      "transport": 0.372166,
      "security": 0.386662,
      "healthcare": 0.375052,
      "climate": 0.541732,
      "industry": 0.462784,
      "education": 0.33339,
      "taxes": 0.409416
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.642213,
    "turnoutBase": 0.639303,
    "volatility": 0.526077
  },
  {
    "id": "ess_lib_left_55_plus_tertiary_town_left",
    "name": "liberalni levice - 55+ - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001213,
    "position": {
      "econ": -0.695453,
      "culture": -0.232775,
      "authority": 0.049305
    },
    "space": {
      "econ": -0.695453,
      "culture": -0.232775,
      "authority": 0.049305,
      "establishment": -0.018362,
      "globalism": 0.133529,
      "green": 0.088567,
      "ukraine": -0.033358,
      "greenDeal": 0.2665
    },
    "axisSalience": {
      "econ": 0.71209,
      "culture": 0.517765,
      "authority": 0.39775
    },
    "issuePrefs": {
      "housing": 0.410432,
      "transport": 0.231786,
      "security": -0.055974,
      "healthcare": 0.482104,
      "climate": -0.138388,
      "industry": -0.425768,
      "education": 0.219004,
      "taxes": -0.528659
    },
    "issueSalience": {
      "housing": 0.509842,
      "transport": 0.4098,
      "security": 0.311346,
      "healthcare": 0.549978,
      "climate": 0.357497,
      "industry": 0.51843,
      "education": 0.402642,
      "taxes": 0.576049
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.606543,
    "turnoutBase": 0.729357,
    "volatility": 0.381653
  },
  {
    "id": "ess_lib_left_25_39_secondary_large_town_unknown",
    "name": "liberalni levice - 25-39 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001184,
    "position": {
      "econ": -0.748002,
      "culture": -0.304877,
      "authority": 0.182284
    },
    "space": {
      "econ": -0.748002,
      "culture": -0.304877,
      "authority": 0.182284,
      "establishment": -0.273464,
      "globalism": -0.115875,
      "green": 0.018994,
      "ukraine": -0.447504,
      "greenDeal": -0.175836
    },
    "axisSalience": {
      "econ": 0.734161,
      "culture": 0.548048,
      "authority": 0.445622
    },
    "issuePrefs": {
      "housing": 0.447986,
      "transport": 0.227973,
      "security": 0.084308,
      "healthcare": 0.514171,
      "climate": 0.035558,
      "industry": -0.356758,
      "education": 0.31172,
      "taxes": -0.575146
    },
    "issueSalience": {
      "housing": 0.530872,
      "transport": 0.407665,
      "security": 0.327213,
      "healthcare": 0.567936,
      "climate": 0.299913,
      "industry": 0.479785,
      "education": 0.454563,
      "taxes": 0.602082
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.46117,
    "turnoutBase": 0.560429,
    "volatility": 0.524612
  },
  {
    "id": "ess_lib_left_25_39_secondary_rural_left",
    "name": "liberalni levice - 25-39 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001184,
    "position": {
      "econ": -0.451135,
      "culture": -0.178446,
      "authority": -0.013029
    },
    "space": {
      "econ": -0.451135,
      "culture": -0.178446,
      "authority": -0.013029,
      "establishment": 0.013517,
      "globalism": -0.109172,
      "green": 0.243641,
      "ukraine": -0.032178,
      "greenDeal": 0.404446
    },
    "axisSalience": {
      "econ": 0.609477,
      "culture": 0.494947,
      "authority": 0.384691
    },
    "issuePrefs": {
      "housing": 0.269538,
      "transport": 0.131803,
      "security": -0.035818,
      "healthcare": 0.310541,
      "climate": -0.288667,
      "industry": -0.336709,
      "education": 0.194746,
      "taxes": -0.346231
    },
    "issueSalience": {
      "housing": 0.430941,
      "transport": 0.35381,
      "security": 0.300058,
      "healthcare": 0.453903,
      "climate": 0.441653,
      "industry": 0.468557,
      "education": 0.389058,
      "taxes": 0.473889
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.484531,
    "turnoutBase": 0.570473,
    "volatility": 0.498783
  },
  {
    "id": "ess_lib_left_40_54_lower_rural_center",
    "name": "liberalni levice - 40-54 - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00104,
    "position": {
      "econ": -0.20568,
      "culture": -0.300981,
      "authority": 0.127384
    },
    "space": {
      "econ": -0.20568,
      "culture": -0.300981,
      "authority": 0.127384,
      "establishment": -0.437791,
      "globalism": 0.186023,
      "green": 0.123239,
      "ukraine": -0.399132,
      "greenDeal": 0.26486
    },
    "axisSalience": {
      "econ": 0.506386,
      "culture": 0.546412,
      "authority": 0.425858
    },
    "issuePrefs": {
      "housing": 0.149242,
      "transport": 0.127919,
      "security": -0.00685,
      "healthcare": 0.124011,
      "climate": -0.162893,
      "industry": -0.212356,
      "education": 0.113781,
      "taxes": -0.184208
    },
    "issueSalience": {
      "housing": 0.363575,
      "transport": 0.351635,
      "security": 0.283836,
      "healthcare": 0.349446,
      "climate": 0.37122,
      "industry": 0.398919,
      "education": 0.343718,
      "taxes": 0.383156
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.376138,
    "turnoutBase": 0.514677,
    "volatility": 0.699401
  },
  {
    "id": "ess_lib_left_40_54_tertiary_rural_left",
    "name": "liberalni levice - 40-54 - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000953,
    "position": {
      "econ": -0.193004,
      "culture": -0.237007,
      "authority": 0.200501
    },
    "space": {
      "econ": -0.193004,
      "culture": -0.237007,
      "authority": 0.200501,
      "establishment": 0.31593,
      "globalism": 0.296871,
      "green": 0.282714,
      "ukraine": 0.483896,
      "greenDeal": 0.555806
    },
    "axisSalience": {
      "econ": 0.501062,
      "culture": 0.519543,
      "authority": 0.45218
    },
    "issuePrefs": {
      "housing": 0.134593,
      "transport": 0.126537,
      "security": -0.0342,
      "healthcare": 0.120003,
      "climate": -0.35918,
      "industry": -0.264837,
      "education": 0.063962,
      "taxes": -0.167404
    },
    "issueSalience": {
      "housing": 0.355372,
      "transport": 0.350861,
      "security": 0.299152,
      "healthcare": 0.347201,
      "climate": 0.481141,
      "industry": 0.428309,
      "education": 0.315819,
      "taxes": 0.373746
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.643087,
    "turnoutBase": 0.661058,
    "volatility": 0.441566
  },
  {
    "id": "ess_lib_left_40_54_lower_large_town_left",
    "name": "liberalni levice - 40-54 - nizsi vzdelani - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000924,
    "position": {
      "econ": -0.547505,
      "culture": -0.074891,
      "authority": 0.357032
    },
    "space": {
      "econ": -0.547505,
      "culture": -0.074891,
      "authority": 0.357032,
      "establishment": -0.110743,
      "globalism": -0.559564,
      "green": -0.243047,
      "ukraine": -0.630378,
      "greenDeal": -0.412742
    },
    "axisSalience": {
      "econ": 0.649952,
      "culture": 0.451454,
      "authority": 0.508532
    },
    "issuePrefs": {
      "housing": 0.310115,
      "transport": 0.083209,
      "security": 0.351542,
      "healthcare": 0.388212,
      "climate": 0.290561,
      "industry": -0.166275,
      "education": 0.280717,
      "taxes": -0.403191
    },
    "issueSalience": {
      "housing": 0.453664,
      "transport": 0.326597,
      "security": 0.476864,
      "healthcare": 0.497399,
      "climate": 0.442714,
      "industry": 0.373114,
      "education": 0.437202,
      "taxes": 0.505787
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.357567,
    "turnoutBase": 0.526124,
    "volatility": 0.569967
  },
  {
    "id": "ess_lib_left_55_plus_lower_large_town_left",
    "name": "liberalni levice - 55+ - nizsi vzdelani - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000809,
    "position": {
      "econ": -0.54292,
      "culture": -0.041099,
      "authority": -0.03365
    },
    "space": {
      "econ": -0.54292,
      "culture": -0.041099,
      "authority": -0.03365,
      "establishment": 0.230206,
      "globalism": -0.256902,
      "green": 0.222433,
      "ukraine": -0.155843,
      "greenDeal": 0.414019
    },
    "axisSalience": {
      "econ": 0.648026,
      "culture": 0.437262,
      "authority": 0.392114
    },
    "issuePrefs": {
      "housing": 0.303538,
      "transport": 0.1123,
      "security": 0.026339,
      "healthcare": 0.387614,
      "climate": -0.276077,
      "industry": -0.356505,
      "education": 0.201204,
      "taxes": -0.395834
    },
    "issueSalience": {
      "housing": 0.449981,
      "transport": 0.342888,
      "security": 0.29475,
      "healthcare": 0.497064,
      "climate": 0.434603,
      "industry": 0.479643,
      "education": 0.392674,
      "taxes": 0.501667
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.403002,
    "turnoutBase": 0.618057,
    "volatility": 0.449281
  },
  {
    "id": "ess_lib_left_55_plus_tertiary_rural_center",
    "name": "liberalni levice - 55+ - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00078,
    "position": {
      "econ": -0.265697,
      "culture": -0.161003,
      "authority": 0.314366
    },
    "space": {
      "econ": -0.265697,
      "culture": -0.161003,
      "authority": 0.314366,
      "establishment": 0.253501,
      "globalism": 0.237906,
      "green": 0.436361,
      "ukraine": 0.254444,
      "greenDeal": 0.706129
    },
    "axisSalience": {
      "econ": 0.531593,
      "culture": 0.487621,
      "authority": 0.493172
    },
    "issuePrefs": {
      "housing": 0.165454,
      "transport": 0.123954,
      "security": 0.086647,
      "healthcare": 0.178422,
      "climate": -0.511896,
      "industry": -0.320672,
      "education": 0.067779,
      "taxes": -0.210622
    },
    "issueSalience": {
      "housing": 0.372654,
      "transport": 0.349414,
      "security": 0.328522,
      "healthcare": 0.379916,
      "climate": 0.566662,
      "industry": 0.459576,
      "education": 0.317956,
      "taxes": 0.397948
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.634554,
    "turnoutBase": 0.738873,
    "volatility": 0.457185
  },
  {
    "id": "ess_lib_left_15_24_lower_rural_left",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000751,
    "position": {
      "econ": -0.136619,
      "culture": -0.329781,
      "authority": 0.292614
    },
    "space": {
      "econ": -0.136619,
      "culture": -0.329781,
      "authority": 0.292614,
      "establishment": 0.075405,
      "globalism": 0.407245,
      "green": 0.414145,
      "ukraine": -0.503437,
      "greenDeal": 0.448118
    },
    "axisSalience": {
      "econ": 0.47738,
      "culture": 0.558508,
      "authority": 0.485341
    },
    "issuePrefs": {
      "housing": 0.114714,
      "transport": 0.142385,
      "security": 0.056053,
      "healthcare": 0.071983,
      "climate": -0.423657,
      "industry": -0.229754,
      "education": 0.058618,
      "taxes": -0.13794
    },
    "issueSalience": {
      "housing": 0.34424,
      "transport": 0.359736,
      "security": 0.31139,
      "healthcare": 0.320311,
      "climate": 0.517248,
      "industry": 0.408662,
      "education": 0.312826,
      "taxes": 0.357246
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.430467,
    "turnoutBase": 0.512639,
    "volatility": 0.533214
  },
  {
    "id": "ess_lib_left_40_54_tertiary_large_town_center",
    "name": "liberalni levice - 40-54 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000751,
    "position": {
      "econ": -0.440548,
      "culture": -0.385791,
      "authority": -0.104565
    },
    "space": {
      "econ": -0.440548,
      "culture": -0.385791,
      "authority": -0.104565,
      "establishment": -0.66482,
      "globalism": -0.892743,
      "green": -0.257004,
      "ukraine": -0.980393,
      "greenDeal": -0.987798
    },
    "axisSalience": {
      "econ": 0.60503,
      "culture": 0.582032,
      "authority": 0.417643
    },
    "issuePrefs": {
      "housing": 0.288596,
      "transport": 0.07245,
      "security": 0.066273,
      "healthcare": 0.286331,
      "climate": 0.461627,
      "industry": -0.035023,
      "education": 0.437162,
      "taxes": -0.363489
    },
    "issueSalience": {
      "housing": 0.441614,
      "transport": 0.320572,
      "security": 0.317113,
      "healthcare": 0.440345,
      "climate": 0.538511,
      "industry": 0.299613,
      "education": 0.524811,
      "taxes": 0.483554
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.49325,
    "turnoutBase": 0.626731,
    "volatility": 0.629834
  },
  {
    "id": "ess_lib_left_55_plus_tertiary_large_town_left",
    "name": "liberalni levice - 55+ - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000722,
    "position": {
      "econ": -0.367828,
      "culture": -0.240497,
      "authority": 0.327979
    },
    "space": {
      "econ": -0.367828,
      "culture": -0.240497,
      "authority": 0.327979,
      "establishment": -0.251469,
      "globalism": -0.069027,
      "green": 0.045969,
      "ukraine": -0.021741,
      "greenDeal": -0.304337
    },
    "axisSalience": {
      "econ": 0.574488,
      "culture": 0.521009,
      "authority": 0.498073
    },
    "issuePrefs": {
      "housing": 0.231165,
      "transport": 0.126963,
      "security": 0.150172,
      "healthcare": 0.245596,
      "climate": 0.052117,
      "industry": -0.139449,
      "education": 0.187639,
      "taxes": -0.293696
    },
    "issueSalience": {
      "housing": 0.409452,
      "transport": 0.351099,
      "security": 0.364096,
      "healthcare": 0.417534,
      "climate": 0.309185,
      "industry": 0.358092,
      "education": 0.385078,
      "taxes": 0.44447
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.575741,
    "turnoutBase": 0.721199,
    "volatility": 0.402632
  },
  {
    "id": "ess_lib_left_15_24_secondary_rural_right",
    "name": "liberalni levice - 15-24 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000693,
    "position": {
      "econ": -0.105359,
      "culture": -0.482535,
      "authority": 0.073102
    },
    "space": {
      "econ": -0.105359,
      "culture": -0.482535,
      "authority": 0.073102,
      "establishment": -0.154554,
      "globalism": 0.430409,
      "green": 0.856758,
      "ukraine": 0.598171,
      "greenDeal": 0.596243
    },
    "axisSalience": {
      "econ": 0.464251,
      "culture": 0.622665,
      "authority": 0.406317
    },
    "issuePrefs": {
      "housing": 0.115852,
      "transport": 0.164845,
      "security": -0.215114,
      "healthcare": 0.037255,
      "climate": -0.783814,
      "industry": -0.27842,
      "education": 0.099484,
      "taxes": -0.133763
    },
    "issueSalience": {
      "housing": 0.344877,
      "transport": 0.372313,
      "security": 0.400464,
      "healthcare": 0.300863,
      "climate": 0.718936,
      "industry": 0.435915,
      "education": 0.335711,
      "taxes": 0.354907
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.50346,
    "turnoutBase": 0.564591,
    "volatility": 0.51391
  },
  {
    "id": "ess_lib_left_40_54_tertiary_town_left",
    "name": "liberalni levice - 40-54 - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000693,
    "position": {
      "econ": -0.434503,
      "culture": -0.040589,
      "authority": 0.02484
    },
    "space": {
      "econ": -0.434503,
      "culture": -0.040589,
      "authority": 0.02484,
      "establishment": 0.022418,
      "globalism": -0.094079,
      "green": 0.366285,
      "ukraine": -0.096607,
      "greenDeal": 0.641553
    },
    "axisSalience": {
      "econ": 0.602491,
      "culture": 0.437047,
      "authority": 0.388942
    },
    "issuePrefs": {
      "housing": 0.243847,
      "transport": 0.104642,
      "security": 0.028698,
      "healthcare": 0.309595,
      "climate": -0.44336,
      "industry": -0.36115,
      "education": 0.139184,
      "taxes": -0.317713
    },
    "issueSalience": {
      "housing": 0.416554,
      "transport": 0.3386,
      "security": 0.296071,
      "healthcare": 0.453373,
      "climate": 0.528282,
      "industry": 0.482244,
      "education": 0.357943,
      "taxes": 0.457919
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.596149,
    "turnoutBase": 0.650785,
    "volatility": 0.467982
  },
  {
    "id": "ess_lib_left_15_24_secondary_large_town_right",
    "name": "liberalni levice - 15-24 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000664,
    "position": {
      "econ": -0.136719,
      "culture": -0.398945,
      "authority": 0.070349
    },
    "space": {
      "econ": -0.136719,
      "culture": -0.398945,
      "authority": 0.070349,
      "establishment": 0.341638,
      "globalism": 0.475986,
      "green": 0.156397,
      "ukraine": 0.51202,
      "greenDeal": 0.670473
    },
    "axisSalience": {
      "econ": 0.477422,
      "culture": 0.587557,
      "authority": 0.405326
    },
    "issuePrefs": {
      "housing": 0.123069,
      "transport": 0.163108,
      "security": -0.194727,
      "healthcare": 0.066522,
      "climate": -0.300338,
      "industry": -0.295614,
      "education": 0.067726,
      "taxes": -0.146311
    },
    "issueSalience": {
      "housing": 0.348919,
      "transport": 0.371341,
      "security": 0.389047,
      "healthcare": 0.317252,
      "climate": 0.44819,
      "industry": 0.445544,
      "education": 0.317927,
      "taxes": 0.361934
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.54589,
    "turnoutBase": 0.581957,
    "volatility": 0.469253
  },
  {
    "id": "ess_lib_left_25_39_tertiary_large_town_right",
    "name": "liberalni levice - 25-39 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000664,
    "position": {
      "econ": -0.059879,
      "culture": -0.658344,
      "authority": -0.232396
    },
    "space": {
      "econ": -0.059879,
      "culture": -0.658344,
      "authority": -0.232396,
      "establishment": 0.191677,
      "globalism": 0.74748,
      "green": 0.467251,
      "ukraine": 0.731873,
      "greenDeal": 0.826716
    },
    "axisSalience": {
      "econ": 0.445149,
      "culture": 0.696504,
      "authority": 0.463662
    },
    "issuePrefs": {
      "housing": 0.111935,
      "transport": 0.223169,
      "security": -0.521518,
      "healthcare": -0.009555,
      "climate": -0.567901,
      "industry": -0.344458,
      "education": 0.080346,
      "taxes": -0.122114
    },
    "issueSalience": {
      "housing": 0.342683,
      "transport": 0.404975,
      "security": 0.57205,
      "healthcare": 0.285351,
      "climate": 0.598024,
      "industry": 0.472896,
      "education": 0.324994,
      "taxes": 0.348384
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.660183,
    "turnoutBase": 0.636709,
    "volatility": 0.432749
  },
  {
    "id": "ess_lib_left_15_24_secondary_rural_unknown",
    "name": "liberalni levice - 15-24 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000635,
    "position": {
      "econ": -0.276267,
      "culture": -0.379571,
      "authority": 0.51466
    },
    "space": {
      "econ": -0.276267,
      "culture": -0.379571,
      "authority": 0.51466,
      "establishment": 0.447018,
      "globalism": 0.586065,
      "green": 0.385006,
      "ukraine": 0.155066,
      "greenDeal": 0.836398
    },
    "axisSalience": {
      "econ": 0.536032,
      "culture": 0.57942,
      "authority": 0.565278
    },
    "issuePrefs": {
      "housing": 0.197495,
      "transport": 0.207717,
      "security": 0.094912,
      "healthcare": 0.168547,
      "climate": -0.511396,
      "industry": -0.396141,
      "education": 0.07022,
      "taxes": -0.244461
    },
    "issueSalience": {
      "housing": 0.390597,
      "transport": 0.396322,
      "security": 0.333151,
      "healthcare": 0.374386,
      "climate": 0.566382,
      "industry": 0.501839,
      "education": 0.319323,
      "taxes": 0.416898
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.560925,
    "turnoutBase": 0.585646,
    "volatility": 0.459768
  },
  {
    "id": "ess_lib_left_40_54_tertiary_rural_center",
    "name": "liberalni levice - 40-54 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000635,
    "position": {
      "econ": -0.093598,
      "culture": -0.329132,
      "authority": -0.230299
    },
    "space": {
      "econ": -0.093598,
      "culture": -0.329132,
      "authority": -0.230299,
      "establishment": -0.030819,
      "globalism": -0.117543,
      "green": -0.454393,
      "ukraine": 0.200189,
      "greenDeal": -0.054025
    },
    "axisSalience": {
      "econ": 0.459311,
      "culture": 0.558235,
      "authority": 0.462908
    },
    "issuePrefs": {
      "housing": 0.090975,
      "transport": 0.068538,
      "security": -0.2298,
      "healthcare": 0.04106,
      "climate": 0.34229,
      "industry": -0.089333,
      "education": 0.163519,
      "taxes": -0.106887
    },
    "issueSalience": {
      "housing": 0.330946,
      "transport": 0.318381,
      "security": 0.408688,
      "healthcare": 0.302994,
      "climate": 0.471682,
      "industry": 0.330027,
      "education": 0.371571,
      "taxes": 0.339857
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.590482,
    "turnoutBase": 0.648921,
    "volatility": 0.572774
  },
  {
    "id": "ess_lib_left_40_54_secondary_rural_unknown",
    "name": "liberalni levice - 40-54 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000549,
    "position": {
      "econ": -0.915912,
      "culture": -0.21155,
      "authority": 0.23355
    },
    "space": {
      "econ": -0.915912,
      "culture": -0.21155,
      "authority": 0.23355,
      "establishment": -0.12413,
      "globalism": 0.104536,
      "green": 0.034264,
      "ukraine": 0.153329,
      "greenDeal": -0.154217
    },
    "axisSalience": {
      "econ": 0.804683,
      "culture": 0.508851,
      "authority": 0.464078
    },
    "issuePrefs": {
      "housing": 0.529138,
      "transport": 0.279601,
      "security": 0.054485,
      "healthcare": 0.642533,
      "climate": 0.018511,
      "industry": -0.422386,
      "education": 0.270863,
      "taxes": -0.684843
    },
    "issueSalience": {
      "housing": 0.576317,
      "transport": 0.436577,
      "security": 0.310511,
      "healthcare": 0.639818,
      "climate": 0.290366,
      "industry": 0.516536,
      "education": 0.431683,
      "taxes": 0.663512
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.486342,
    "turnoutBase": 0.585655,
    "volatility": 0.531172
  },
  {
    "id": "ess_lib_left_55_plus_unknown_town_right",
    "name": "liberalni levice - 55+ - nezname vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00052,
    "position": {
      "econ": -0.059407,
      "culture": -0.384612,
      "authority": 0.196264
    },
    "space": {
      "econ": -0.059407,
      "culture": -0.384612,
      "authority": 0.196264,
      "establishment": -0.257191,
      "globalism": 0.281886,
      "green": 0.628151,
      "ukraine": -0.342284,
      "greenDeal": 0.704994
    },
    "axisSalience": {
      "econ": 0.444951,
      "culture": 0.581537,
      "authority": 0.450655
    },
    "issuePrefs": {
      "housing": 0.078828,
      "transport": 0.117908,
      "security": -0.009364,
      "healthcare": 0.012004,
      "climate": -0.649667,
      "industry": -0.265756,
      "education": 0.086857,
      "taxes": -0.088927
    },
    "issueSalience": {
      "housing": 0.324143,
      "transport": 0.346029,
      "security": 0.285244,
      "healthcare": 0.286722,
      "climate": 0.643813,
      "industry": 0.428823,
      "education": 0.32864,
      "taxes": 0.329799
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.476338,
    "turnoutBase": 0.650998,
    "volatility": 0.433147
  },
  {
    "id": "ess_lib_left_15_24_lower_town_right",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000491,
    "position": {
      "econ": -0.045973,
      "culture": -0.442714,
      "authority": -0.061018
    },
    "space": {
      "econ": -0.045973,
      "culture": -0.442714,
      "authority": -0.061018,
      "establishment": 0.137536,
      "globalism": 0.595182,
      "green": 0.631263,
      "ukraine": 0.412476,
      "greenDeal": 0.598118
    },
    "axisSalience": {
      "econ": 0.439308,
      "culture": 0.60594,
      "authority": 0.401966
    },
    "issuePrefs": {
      "housing": 0.078411,
      "transport": 0.162603,
      "security": -0.301922,
      "healthcare": -0.002317,
      "climate": -0.621983,
      "industry": -0.244384,
      "education": 0.035043,
      "taxes": -0.086226
    },
    "issueSalience": {
      "housing": 0.32391,
      "transport": 0.371058,
      "security": 0.449076,
      "healthcare": 0.281297,
      "climate": 0.62831,
      "industry": 0.416855,
      "education": 0.299624,
      "taxes": 0.328286
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.446714,
    "turnoutBase": 0.514814,
    "volatility": 0.527622
  },
  {
    "id": "ess_lib_left_15_24_secondary_town_left",
    "name": "liberalni levice - 15-24 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000491,
    "position": {
      "econ": -0.343371,
      "culture": -0.233369,
      "authority": 0.064366
    },
    "space": {
      "econ": -0.343371,
      "culture": -0.233369,
      "authority": 0.064366,
      "establishment": -0.06194,
      "globalism": 0.084541,
      "green": -0.024214,
      "ukraine": -0.230969,
      "greenDeal": -0.093535
    },
    "axisSalience": {
      "econ": 0.564216,
      "culture": 0.518015,
      "authority": 0.403172
    },
    "issuePrefs": {
      "housing": 0.216858,
      "transport": 0.137994,
      "security": -0.022176,
      "healthcare": 0.228557,
      "climate": 0.043624,
      "industry": -0.177509,
      "education": 0.145489,
      "taxes": -0.275231
    },
    "issueSalience": {
      "housing": 0.401441,
      "transport": 0.357277,
      "security": 0.292419,
      "healthcare": 0.407992,
      "climate": 0.30443,
      "industry": 0.379405,
      "education": 0.361474,
      "taxes": 0.43413
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.490117,
    "turnoutBase": 0.567832,
    "volatility": 0.505575
  },
  {
    "id": "ess_lib_left_40_54_tertiary_rural_right",
    "name": "liberalni levice - 40-54 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000491,
    "position": {
      "econ": -0.204647,
      "culture": -0.147703,
      "authority": 0.533086
    },
    "space": {
      "econ": -0.204647,
      "culture": -0.147703,
      "authority": 0.533086,
      "establishment": 0.55049,
      "globalism": 0.534725,
      "green": 0.217266,
      "ukraine": 0.148628,
      "greenDeal": 0.583521
    },
    "axisSalience": {
      "econ": 0.505952,
      "culture": 0.482035,
      "authority": 0.571911
    },
    "issuePrefs": {
      "housing": 0.13028,
      "transport": 0.141915,
      "security": 0.181016,
      "healthcare": 0.135529,
      "climate": -0.319818,
      "industry": -0.260769,
      "education": -0.016828,
      "taxes": -0.16507
    },
    "issueSalience": {
      "housing": 0.352957,
      "transport": 0.359473,
      "security": 0.381369,
      "healthcare": 0.355896,
      "climate": 0.459098,
      "industry": 0.426031,
      "education": 0.289424,
      "taxes": 0.372439
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.676123,
    "turnoutBase": 0.669267,
    "volatility": 0.420456
  },
  {
    "id": "ess_lib_left_55_plus_lower_large_town_right",
    "name": "liberalni levice - 55+ - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000462,
    "position": {
      "econ": -0.051768,
      "culture": -0.280508,
      "authority": 0.220094
    },
    "space": {
      "econ": -0.051768,
      "culture": -0.280508,
      "authority": 0.220094,
      "establishment": 0.351781,
      "globalism": 0.178513,
      "green": 0.077032,
      "ukraine": -0.270203,
      "greenDeal": 0.396367
    },
    "axisSalience": {
      "econ": 0.441742,
      "culture": 0.537813,
      "authority": 0.459234
    },
    "issuePrefs": {
      "housing": 0.062133,
      "transport": 0.084855,
      "security": 0.0474,
      "healthcare": 0.014832,
      "climate": -0.166446,
      "industry": -0.169433,
      "education": 0.071329,
      "taxes": -0.070934
    },
    "issueSalience": {
      "housing": 0.314795,
      "transport": 0.327519,
      "security": 0.306544,
      "healthcare": 0.288306,
      "climate": 0.37321,
      "industry": 0.374882,
      "education": 0.319944,
      "taxes": 0.319723
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.438853,
    "turnoutBase": 0.622312,
    "volatility": 0.43834
  },
  {
    "id": "ess_lib_left_15_24_tertiary_rural_center",
    "name": "liberalni levice - 15-24 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000433,
    "position": {
      "econ": -0.442768,
      "culture": -0.06643,
      "authority": 0.227941
    },
    "space": {
      "econ": -0.442768,
      "culture": -0.06643,
      "authority": 0.227941,
      "establishment": 0.011418,
      "globalism": 0.12396,
      "green": -0.503897,
      "ukraine": 0.332577,
      "greenDeal": -0.212686
    },
    "axisSalience": {
      "econ": 0.605962,
      "culture": 0.4479,
      "authority": 0.462059
    },
    "issuePrefs": {
      "housing": 0.251494,
      "transport": 0.137524,
      "security": 0.073804,
      "healthcare": 0.313478,
      "climate": 0.422358,
      "industry": -0.164586,
      "education": 0.102244,
      "taxes": -0.326764
    },
    "issueSalience": {
      "housing": 0.420837,
      "transport": 0.357014,
      "security": 0.32133,
      "healthcare": 0.455548,
      "climate": 0.51652,
      "industry": 0.372168,
      "education": 0.337256,
      "taxes": 0.462988
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.608351,
    "turnoutBase": 0.6304,
    "volatility": 0.548972
  },
  {
    "id": "ess_lib_left_55_plus_tertiary_rural_left",
    "name": "liberalni levice - 55+ - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000404,
    "position": {
      "econ": -0.416606,
      "culture": -0.091314,
      "authority": 0.357302
    },
    "space": {
      "econ": -0.416606,
      "culture": -0.091314,
      "authority": 0.357302,
      "establishment": 0.180649,
      "globalism": 0.0983,
      "green": 0.201669,
      "ukraine": -0.298476,
      "greenDeal": 0.567163
    },
    "axisSalience": {
      "econ": 0.594975,
      "culture": 0.458352,
      "authority": 0.508629
    },
    "issuePrefs": {
      "housing": 0.240091,
      "transport": 0.132384,
      "security": 0.202144,
      "healthcare": 0.292651,
      "climate": -0.304008,
      "industry": -0.344195,
      "education": 0.110319,
      "taxes": -0.310914
    },
    "issueSalience": {
      "housing": 0.414451,
      "transport": 0.354135,
      "security": 0.3932,
      "healthcare": 0.443885,
      "climate": 0.450244,
      "industry": 0.472749,
      "education": 0.341779,
      "taxes": 0.454112
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.62035,
    "turnoutBase": 0.736323,
    "volatility": 0.363742
  },
  {
    "id": "ess_lib_left_25_39_lower_large_town_center",
    "name": "liberalni levice - 25-39 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000347,
    "position": {
      "econ": -0.433657,
      "culture": -0.313215,
      "authority": 0.399958
    },
    "space": {
      "econ": -0.433657,
      "culture": -0.313215,
      "authority": 0.399958,
      "establishment": 0.19049,
      "globalism": 0.05345,
      "green": 0.679998,
      "ukraine": 0.180239,
      "greenDeal": 0.755314
    },
    "axisSalience": {
      "econ": 0.602136,
      "culture": 0.55155,
      "authority": 0.523985
    },
    "issuePrefs": {
      "housing": 0.276097,
      "transport": 0.171207,
      "security": 0.136234,
      "healthcare": 0.287176,
      "climate": -0.701087,
      "industry": -0.437136,
      "education": 0.201944,
      "taxes": -0.349819
    },
    "issueSalience": {
      "housing": 0.434614,
      "transport": 0.375876,
      "security": 0.356291,
      "healthcare": 0.440818,
      "climate": 0.672608,
      "industry": 0.524796,
      "education": 0.393089,
      "taxes": 0.475899
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.418446,
    "turnoutBase": 0.516667,
    "volatility": 0.622856
  },
  {
    "id": "ess_lib_left_40_54_secondary_rural_right",
    "name": "liberalni levice - 40-54 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000347,
    "position": {
      "econ": -0.125327,
      "culture": -0.220438,
      "authority": 0.291868
    },
    "space": {
      "econ": -0.125327,
      "culture": -0.220438,
      "authority": 0.291868,
      "establishment": 0.259563,
      "globalism": 0.290001,
      "green": 0.096541,
      "ukraine": 0.585754,
      "greenDeal": 0.117345
    },
    "axisSalience": {
      "econ": 0.472637,
      "culture": 0.512584,
      "authority": 0.485072
    },
    "issuePrefs": {
      "housing": 0.095382,
      "transport": 0.105811,
      "security": 0.020175,
      "healthcare": 0.0726,
      "climate": -0.102366,
      "industry": -0.125492,
      "education": 0.043431,
      "taxes": -0.116688
    },
    "issueSalience": {
      "housing": 0.333414,
      "transport": 0.339254,
      "security": 0.291298,
      "healthcare": 0.320656,
      "climate": 0.337325,
      "industry": 0.350275,
      "education": 0.304322,
      "taxes": 0.345345
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.528165,
    "turnoutBase": 0.599085,
    "volatility": 0.496639
  },
  {
    "id": "ess_lib_left_25_39_lower_town_unknown",
    "name": "liberalni levice - 25-39 - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000318,
    "position": {
      "econ": -0.483744,
      "culture": -0.069522,
      "authority": 0.011733
    },
    "space": {
      "econ": -0.483744,
      "culture": -0.069522,
      "authority": 0.011733,
      "establishment": -0.52169,
      "globalism": -0.64765,
      "green": -0.102396,
      "ukraine": -0.716,
      "greenDeal": -0.337147
    },
    "axisSalience": {
      "econ": 0.623172,
      "culture": 0.449199,
      "authority": 0.384224
    },
    "issuePrefs": {
      "housing": 0.274402,
      "transport": 0.055732,
      "security": 0.161665,
      "healthcare": 0.342734,
      "climate": 0.168126,
      "industry": -0.154121,
      "education": 0.282914,
      "taxes": -0.356638
    },
    "issueSalience": {
      "housing": 0.433665,
      "transport": 0.31121,
      "security": 0.370533,
      "healthcare": 0.471931,
      "climate": 0.374151,
      "industry": 0.366308,
      "education": 0.438432,
      "taxes": 0.479717
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.319406,
    "turnoutBase": 0.491741,
    "volatility": 0.586952
  },
  {
    "id": "ess_lib_left_25_39_secondary_town_right",
    "name": "liberalni levice - 25-39 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000318,
    "position": {
      "econ": -0.07259,
      "culture": -0.389237,
      "authority": 0.221147
    },
    "space": {
      "econ": -0.07259,
      "culture": -0.389237,
      "authority": 0.221147,
      "establishment": 0.346643,
      "globalism": 0.454022,
      "green": -0.16522,
      "ukraine": 0.195713,
      "greenDeal": 0.470227
    },
    "axisSalience": {
      "econ": 0.450488,
      "culture": 0.58348,
      "authority": 0.459613
    },
    "issuePrefs": {
      "housing": 0.086633,
      "transport": 0.142693,
      "security": -0.069257,
      "healthcare": 0.021126,
      "climate": -0.012705,
      "industry": -0.216308,
      "education": 0.05377,
      "taxes": -0.098973
    },
    "issueSalience": {
      "housing": 0.328514,
      "transport": 0.359908,
      "security": 0.318784,
      "healthcare": 0.29183,
      "climate": 0.287115,
      "industry": 0.401133,
      "education": 0.310111,
      "taxes": 0.335425
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.544973,
    "turnoutBase": 0.582133,
    "volatility": 0.468802
  },
  {
    "id": "ess_lib_left_25_39_tertiary_large_town_unknown",
    "name": "liberalni levice - 25-39 - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000318,
    "position": {
      "econ": -0.560765,
      "culture": -0.168547,
      "authority": 0.165073
    },
    "space": {
      "econ": -0.560765,
      "culture": -0.168547,
      "authority": 0.165073,
      "establishment": 0.803351,
      "globalism": 0.763512,
      "green": 0.422825,
      "ukraine": 0.8172,
      "greenDeal": 0.910118
    },
    "axisSalience": {
      "econ": 0.655521,
      "culture": 0.49079,
      "authority": 0.439426
    },
    "issuePrefs": {
      "housing": 0.328646,
      "transport": 0.262151,
      "security": -0.147656,
      "healthcare": 0.390267,
      "climate": -0.559267,
      "industry": -0.506719,
      "education": 0.025602,
      "taxes": -0.423976
    },
    "issueSalience": {
      "housing": 0.464042,
      "transport": 0.426805,
      "security": 0.362687,
      "healthcare": 0.498549,
      "climate": 0.59319,
      "industry": 0.563762,
      "education": 0.294337,
      "taxes": 0.517427
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.710079,
    "turnoutBase": 0.658117,
    "volatility": 0.377698
  },
  {
    "id": "ess_lib_left_55_plus_secondary_rural_right",
    "name": "liberalni levice - 55+ - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000318,
    "position": {
      "econ": -0.111119,
      "culture": -0.144743,
      "authority": -0.008143
    },
    "space": {
      "econ": -0.111119,
      "culture": -0.144743,
      "authority": -0.008143,
      "establishment": -0.144908,
      "globalism": -0.131868,
      "green": 0.106617,
      "ukraine": 0.028479,
      "greenDeal": 0.282095
    },
    "axisSalience": {
      "econ": 0.46667,
      "culture": 0.480792,
      "authority": 0.382932
    },
    "issuePrefs": {
      "housing": 0.078484,
      "transport": 0.038009,
      "security": -0.024119,
      "healthcare": 0.068426,
      "climate": -0.155751,
      "industry": -0.144871,
      "education": 0.10634,
      "taxes": -0.097375
    },
    "issueSalience": {
      "housing": 0.323951,
      "transport": 0.301285,
      "security": 0.293507,
      "healthcare": 0.318319,
      "climate": 0.36722,
      "industry": 0.361128,
      "education": 0.33955,
      "taxes": 0.33453
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.470495,
    "turnoutBase": 0.664928,
    "volatility": 0.443042
  },
  {
    "id": "ess_lib_left_55_plus_secondary_town_unknown",
    "name": "liberalni levice - 55+ - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000318,
    "position": {
      "econ": -0.974055,
      "culture": -0.0497,
      "authority": 0.360399
    },
    "space": {
      "econ": -0.974055,
      "culture": -0.0497,
      "authority": 0.360399,
      "establishment": -0.590636,
      "globalism": -0.655279,
      "green": 0.335689,
      "ukraine": -0.927573,
      "greenDeal": 0.165227
    },
    "axisSalience": {
      "econ": 0.829103,
      "culture": 0.440874,
      "authority": 0.509744
    },
    "issuePrefs": {
      "housing": 0.541694,
      "transport": 0.173826,
      "security": 0.401688,
      "healthcare": 0.697344,
      "climate": -0.28796,
      "industry": -0.496666,
      "education": 0.395329,
      "taxes": -0.707283
    },
    "issueSalience": {
      "housing": 0.583349,
      "transport": 0.377343,
      "security": 0.504945,
      "healthcare": 0.670512,
      "climate": 0.441257,
      "industry": 0.558133,
      "education": 0.501385,
      "taxes": 0.676079
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.403432,
    "turnoutBase": 0.649328,
    "volatility": 0.483157
  },
  {
    "id": "ess_lib_left_40_54_secondary_town_right",
    "name": "liberalni levice - 40-54 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000289,
    "position": {
      "econ": -0.067463,
      "culture": -0.190882,
      "authority": 0.41877
    },
    "space": {
      "econ": -0.067463,
      "culture": -0.190882,
      "authority": 0.41877,
      "establishment": 0.281933,
      "globalism": 0.569038,
      "green": 0.117083,
      "ukraine": 0.350736,
      "greenDeal": 0.305945
    },
    "axisSalience": {
      "econ": 0.448334,
      "culture": 0.50017,
      "authority": 0.530757
    },
    "issuePrefs": {
      "housing": 0.06001,
      "transport": 0.119509,
      "security": 0.075705,
      "healthcare": 0.033303,
      "climate": -0.169964,
      "industry": -0.138818,
      "education": -0.042189,
      "taxes": -0.071479
    },
    "issueSalience": {
      "housing": 0.313606,
      "transport": 0.346925,
      "security": 0.322395,
      "healthcare": 0.29865,
      "climate": 0.37518,
      "industry": 0.357738,
      "education": 0.303626,
      "taxes": 0.320028
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.546697,
    "turnoutBase": 0.599868,
    "volatility": 0.494626
  },
  {
    "id": "ess_lib_left_40_54_tertiary_town_right",
    "name": "liberalni levice - 40-54 - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00026,
    "position": {
      "econ": -0.044597,
      "culture": -0.259489,
      "authority": 0.353543
    },
    "space": {
      "econ": -0.044597,
      "culture": -0.259489,
      "authority": 0.353543,
      "establishment": 0.485108,
      "globalism": 0.626012,
      "green": 0.17103,
      "ukraine": 0.933636,
      "greenDeal": 0.795562
    },
    "axisSalience": {
      "econ": 0.438731,
      "culture": 0.528985,
      "authority": 0.507276
    },
    "issuePrefs": {
      "housing": 0.055667,
      "transport": 0.132979,
      "security": -0.040833,
      "healthcare": 0.011351,
      "climate": -0.345899,
      "industry": -0.258158,
      "education": -0.036198,
      "taxes": -0.063249
    },
    "issueSalience": {
      "housing": 0.311174,
      "transport": 0.354468,
      "security": 0.302866,
      "healthcare": 0.286356,
      "climate": 0.473703,
      "industry": 0.424568,
      "education": 0.300271,
      "taxes": 0.315419
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.676369,
    "turnoutBase": 0.666979,
    "volatility": 0.42634
  },
  {
    "id": "ess_lib_left_40_54_lower_large_town_right",
    "name": "liberalni levice - 40-54 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000231,
    "position": {
      "econ": -0.082421,
      "culture": -0.184503,
      "authority": 0.57494
    },
    "space": {
      "econ": -0.082421,
      "culture": -0.184503,
      "authority": 0.57494,
      "establishment": 0.760571,
      "globalism": 0.507776,
      "green": -0.060877,
      "ukraine": 0.789461,
      "greenDeal": 0.578607
    },
    "axisSalience": {
      "econ": 0.454617,
      "culture": 0.497491,
      "authority": 0.586978
    },
    "issuePrefs": {
      "housing": 0.067472,
      "transport": 0.114749,
      "security": 0.150245,
      "healthcare": 0.044583,
      "climate": -0.118178,
      "industry": -0.20999,
      "education": -0.027353,
      "taxes": -0.081484
    },
    "issueSalience": {
      "housing": 0.317784,
      "transport": 0.344259,
      "security": 0.364137,
      "healthcare": 0.304967,
      "climate": 0.34618,
      "industry": 0.397594,
      "education": 0.295318,
      "taxes": 0.325631
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.491312,
    "turnoutBase": 0.55662,
    "volatility": 0.491549
  },
  {
    "id": "ess_lib_left_40_54_tertiary_large_town_unknown",
    "name": "liberalni levice - 40-54 - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000202,
    "position": {
      "econ": -0.05932,
      "culture": -0.289076,
      "authority": -0.071426
    },
    "space": {
      "econ": -0.05932,
      "culture": -0.289076,
      "authority": -0.071426,
      "establishment": 0.079089,
      "globalism": 0.422246,
      "green": -0.070786,
      "ukraine": 0.526643,
      "greenDeal": 0.238655
    },
    "axisSalience": {
      "econ": 0.444914,
      "culture": 0.541412,
      "authority": 0.405713
    },
    "issuePrefs": {
      "housing": 0.067315,
      "transport": 0.117533,
      "security": -0.243361,
      "healthcare": 0.019584,
      "climate": -0.015858,
      "industry": -0.136598,
      "education": 0.022519,
      "taxes": -0.0774
    },
    "issueSalience": {
      "housing": 0.317696,
      "transport": 0.345819,
      "security": 0.416282,
      "healthcare": 0.290967,
      "climate": 0.28888,
      "industry": 0.356495,
      "education": 0.292611,
      "taxes": 0.323344
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.631662,
    "turnoutBase": 0.652768,
    "volatility": 0.462882
  },
  {
    "id": "ess_lib_left_25_39_secondary_rural_right",
    "name": "liberalni levice - 25-39 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000173,
    "position": {
      "econ": -0.095544,
      "culture": -0.228328,
      "authority": 0.400736
    },
    "space": {
      "econ": -0.095544,
      "culture": -0.228328,
      "authority": 0.400736,
      "establishment": 0.828688,
      "globalism": 0.62499,
      "green": -0.365838,
      "ukraine": 0.410036,
      "greenDeal": 0.671653
    },
    "axisSalience": {
      "econ": 0.460129,
      "culture": 0.515898,
      "authority": 0.524265
    },
    "issuePrefs": {
      "housing": 0.079949,
      "transport": 0.139984,
      "security": 0.039224,
      "healthcare": 0.050526,
      "climate": 0.07534,
      "industry": -0.246246,
      "education": -0.034652,
      "taxes": -0.096191
    },
    "issueSalience": {
      "housing": 0.324771,
      "transport": 0.358391,
      "security": 0.301965,
      "healthcare": 0.308294,
      "climate": 0.322191,
      "industry": 0.417898,
      "education": 0.299405,
      "taxes": 0.333867
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.593794,
    "turnoutBase": 0.599004,
    "volatility": 0.425418
  },
  {
    "id": "ess_lib_left_40_54_tertiary_town_center",
    "name": "liberalni levice - 40-54 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000173,
    "position": {
      "econ": -0.172083,
      "culture": -0.178118,
      "authority": -0.115174
    },
    "space": {
      "econ": -0.172083,
      "culture": -0.178118,
      "authority": -0.115174,
      "establishment": 0.155057,
      "globalism": 0.592493,
      "green": 0.481026,
      "ukraine": 0.592253,
      "greenDeal": 0.936339
    },
    "axisSalience": {
      "econ": 0.492275,
      "culture": 0.49481,
      "authority": 0.421463
    },
    "issuePrefs": {
      "housing": 0.11602,
      "transport": 0.146181,
      "security": -0.27531,
      "healthcare": 0.10965,
      "climate": -0.608513,
      "industry": -0.335941,
      "education": -0.026707,
      "taxes": -0.145274
    },
    "issueSalience": {
      "housing": 0.344971,
      "transport": 0.361861,
      "security": 0.434174,
      "healthcare": 0.341404,
      "climate": 0.620767,
      "industry": 0.468127,
      "education": 0.294956,
      "taxes": 0.361353
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.647954,
    "turnoutBase": 0.655427,
    "volatility": 0.556045
  },
  {
    "id": "ess_lib_left_55_plus_lower_rural_center",
    "name": "liberalni levice - 55+ - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000173,
    "position": {
      "econ": -0.216057,
      "culture": -0.073217,
      "authority": 0.737092
    },
    "space": {
      "econ": -0.216057,
      "culture": -0.073217,
      "authority": 0.737092,
      "establishment": 0.484294,
      "globalism": 0.40632,
      "green": 0.264438,
      "ukraine": 0.14406,
      "greenDeal": 0.934361
    },
    "axisSalience": {
      "econ": 0.510744,
      "culture": 0.450751,
      "authority": 0.645353
    },
    "issuePrefs": {
      "housing": 0.127618,
      "transport": 0.115952,
      "security": 0.351834,
      "healthcare": 0.149704,
      "climate": -0.452016,
      "industry": -0.336812,
      "education": -0.011911,
      "taxes": -0.164347
    },
    "issueSalience": {
      "housing": 0.351466,
      "transport": 0.344933,
      "security": 0.477027,
      "healthcare": 0.363834,
      "climate": 0.533129,
      "industry": 0.468615,
      "education": 0.28667,
      "taxes": 0.372034
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.463123,
    "turnoutBase": 0.62695,
    "volatility": 0.526413
  },
  {
    "id": "ess_lib_left_55_plus_secondary_large_town_right",
    "name": "liberalni levice - 55+ - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000173,
    "position": {
      "econ": -0.117441,
      "culture": -0.178831,
      "authority": 0.033224
    },
    "space": {
      "econ": -0.117441,
      "culture": -0.178831,
      "authority": 0.033224,
      "establishment": 0.152468,
      "globalism": 0.194972,
      "green": 0.158,
      "ukraine": 0.014161,
      "greenDeal": 0.792722
    },
    "axisSalience": {
      "econ": 0.469325,
      "culture": 0.495109,
      "authority": 0.391961
    },
    "issuePrefs": {
      "housing": 0.086052,
      "transport": 0.084947,
      "security": -0.065702,
      "healthcare": 0.070251,
      "climate": -0.335722,
      "industry": -0.276466,
      "education": 0.047883,
      "taxes": -0.106017
    },
    "issueSalience": {
      "housing": 0.328189,
      "transport": 0.32757,
      "security": 0.316793,
      "healthcare": 0.319341,
      "climate": 0.468004,
      "industry": 0.434821,
      "education": 0.306814,
      "taxes": 0.33937
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.513896,
    "turnoutBase": 0.675336,
    "volatility": 0.416278
  },
  {
    "id": "ess_lib_left_55_plus_secondary_rural_unknown",
    "name": "liberalni levice - 55+ - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000173,
    "position": {
      "econ": -0.923211,
      "culture": -0.046015,
      "authority": 0.022194
    },
    "space": {
      "econ": -0.923211,
      "culture": -0.046015,
      "authority": 0.022194,
      "establishment": 0.094683,
      "globalism": -0.335055,
      "green": -0.302711,
      "ukraine": -0.609269,
      "greenDeal": -0.164941
    },
    "axisSalience": {
      "econ": 0.807749,
      "culture": 0.439326,
      "authority": 0.38799
    },
    "issuePrefs": {
      "housing": 0.513288,
      "transport": 0.198879,
      "security": 0.109927,
      "healthcare": 0.661031,
      "climate": 0.264135,
      "industry": -0.393374,
      "education": 0.311388,
      "taxes": -0.670234
    },
    "issueSalience": {
      "housing": 0.567441,
      "transport": 0.391372,
      "security": 0.341559,
      "healthcare": 0.650177,
      "climate": 0.427916,
      "industry": 0.500289,
      "education": 0.454377,
      "taxes": 0.655331
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.477471,
    "turnoutBase": 0.673314,
    "volatility": 0.421479
  },
  {
    "id": "ess_lib_left_55_plus_tertiary_town_center",
    "name": "liberalni levice - 55+ - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000173,
    "position": {
      "econ": -0.222123,
      "culture": -0.06448,
      "authority": 0.65371
    },
    "space": {
      "econ": -0.222123,
      "culture": -0.06448,
      "authority": 0.65371,
      "establishment": 0.0402,
      "globalism": 0.287871,
      "green": 0.524471,
      "ukraine": 0.122778,
      "greenDeal": 0.35131
    },
    "axisSalience": {
      "econ": 0.513292,
      "culture": 0.447082,
      "authority": 0.615336
    },
    "issuePrefs": {
      "housing": 0.129905,
      "transport": 0.101682,
      "security": 0.325607,
      "healthcare": 0.15477,
      "climate": -0.475986,
      "industry": -0.198098,
      "education": 0.012546,
      "taxes": -0.167666
    },
    "issueSalience": {
      "housing": 0.352747,
      "transport": 0.336942,
      "security": 0.46234,
      "healthcare": 0.366671,
      "climate": 0.546552,
      "industry": 0.390935,
      "education": 0.287026,
      "taxes": 0.373893
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.620488,
    "turnoutBase": 0.731407,
    "volatility": 0.476382
  },
  {
    "id": "ess_lib_left_40_54_tertiary_rural_unknown",
    "name": "liberalni levice - 40-54 - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000144,
    "position": {
      "econ": -0.054845,
      "culture": -0.464608,
      "authority": -0.494574
    },
    "space": {
      "econ": -0.054845,
      "culture": -0.464608,
      "authority": -0.494574,
      "establishment": -0.097773,
      "globalism": 0.704508,
      "green": -0.126038,
      "ukraine": 0.654497,
      "greenDeal": 0.727154
    },
    "axisSalience": {
      "econ": 0.443035,
      "culture": 0.615135,
      "authority": 0.558046
    },
    "issuePrefs": {
      "housing": 0.085918,
      "transport": 0.181882,
      "security": -0.615897,
      "healthcare": 0.00232,
      "climate": -0.112856,
      "industry": -0.283375,
      "education": 0.020784,
      "taxes": -0.095241
    },
    "issueSalience": {
      "housing": 0.328114,
      "transport": 0.381854,
      "security": 0.624902,
      "healthcare": 0.281299,
      "climate": 0.343199,
      "industry": 0.43869,
      "education": 0.291639,
      "taxes": 0.333335
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.634449,
    "turnoutBase": 0.646578,
    "volatility": 0.4788
  },
  {
    "id": "ess_lib_left_55_plus_lower_rural_unknown",
    "name": "liberalni levice - 55+ - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 8.7e-05,
    "position": {
      "econ": -0.454436,
      "culture": -0.020973,
      "authority": -0.173901
    },
    "space": {
      "econ": -0.454436,
      "culture": -0.020973,
      "authority": -0.173901,
      "establishment": -0.385906,
      "globalism": -0.546614,
      "green": -0.062163,
      "ukraine": -0.377046,
      "greenDeal": 0.177218
    },
    "axisSalience": {
      "econ": 0.610863,
      "culture": 0.428809,
      "authority": 0.442604
    },
    "issuePrefs": {
      "housing": 0.252456,
      "transport": 0.05179,
      "security": 0.014863,
      "healthcare": 0.325516,
      "climate": -0.004863,
      "industry": -0.255348,
      "education": 0.23666,
      "taxes": -0.329711
    },
    "issueSalience": {
      "housing": 0.421376,
      "transport": 0.309003,
      "security": 0.288323,
      "healthcare": 0.462289,
      "climate": 0.282724,
      "industry": 0.422995,
      "education": 0.41253,
      "taxes": 0.464638
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.336331,
    "turnoutBase": 0.596493,
    "volatility": 0.504732
  },
  {
    "id": "ess_lib_left_15_24_lower_rural_right",
    "name": "liberalni levice - 15-24 - nizsi vzdelani - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 5.8e-05,
    "position": {
      "econ": -0.142484,
      "culture": -0.125405,
      "authority": 0.05132
    },
    "space": {
      "econ": -0.142484,
      "culture": -0.125405,
      "authority": 0.05132,
      "establishment": 0.290839,
      "globalism": 0.470421,
      "green": 0.20606,
      "ukraine": 0.892823,
      "greenDeal": 0.35911
    },
    "axisSalience": {
      "econ": 0.479843,
      "culture": 0.47267,
      "authority": 0.398475
    },
    "issuePrefs": {
      "housing": 0.093415,
      "transport": 0.114644,
      "security": -0.159396,
      "healthcare": 0.092556,
      "climate": -0.248914,
      "industry": -0.174302,
      "education": -0.025405,
      "taxes": -0.117637
    },
    "issueSalience": {
      "housing": 0.332312,
      "transport": 0.344201,
      "security": 0.369262,
      "healthcare": 0.331831,
      "climate": 0.419392,
      "industry": 0.377609,
      "education": 0.294227,
      "taxes": 0.345877
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.451492,
    "turnoutBase": 0.520179,
    "volatility": 0.513824
  },
  {
    "id": "ess_lib_left_25_39_tertiary_rural_right",
    "name": "liberalni levice - 25-39 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 5.8e-05,
    "position": {
      "econ": -0.043354,
      "culture": -0.355201,
      "authority": -0.225358
    },
    "space": {
      "econ": -0.043354,
      "culture": -0.355201,
      "authority": -0.225358,
      "establishment": 0.425743,
      "globalism": 0.735929,
      "green": 0.15258,
      "ukraine": 0.543207,
      "greenDeal": 0.330124
    },
    "axisSalience": {
      "econ": 0.438209,
      "culture": 0.569184,
      "authority": 0.461129
    },
    "issuePrefs": {
      "housing": 0.066469,
      "transport": 0.163086,
      "security": -0.415102,
      "healthcare": 0.002799,
      "climate": -0.202292,
      "industry": -0.163109,
      "education": -0.027179,
      "taxes": -0.073839
    },
    "issueSalience": {
      "housing": 0.317223,
      "transport": 0.371328,
      "security": 0.512457,
      "healthcare": 0.281567,
      "climate": 0.393284,
      "industry": 0.371341,
      "education": 0.29522,
      "taxes": 0.32135
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.678215,
    "turnoutBase": 0.644901,
    "volatility": 0.411683
  },
  {
    "id": "ess_lib_left_55_plus_lower_large_town_center",
    "name": "liberalni levice - 55+ - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 5.8e-05,
    "position": {
      "econ": -0.224499,
      "culture": -0.005124,
      "authority": -0.092412
    },
    "space": {
      "econ": -0.224499,
      "culture": -0.005124,
      "authority": -0.092412,
      "establishment": -0.043736,
      "globalism": -0.513857,
      "green": -0.017375,
      "ukraine": -0.788504,
      "greenDeal": -0.258056
    },
    "axisSalience": {
      "econ": 0.51429,
      "culture": 0.422152,
      "authority": 0.413268
    },
    "issuePrefs": {
      "housing": 0.124089,
      "transport": -0.004616,
      "security": 0.096845,
      "healthcare": 0.16123,
      "climate": 0.084766,
      "industry": -0.042258,
      "education": 0.168722,
      "taxes": -0.162254
    },
    "issueSalience": {
      "housing": 0.34949,
      "transport": 0.282585,
      "security": 0.334233,
      "healthcare": 0.370289,
      "climate": 0.327469,
      "industry": 0.303665,
      "education": 0.374484,
      "taxes": 0.370862
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.36567,
    "turnoutBase": 0.608469,
    "volatility": 0.573936
  },
  {
    "id": "ess_lib_left_55_plus_lower_town_unknown",
    "name": "liberalni levice - 55+ - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 5.8e-05,
    "position": {
      "econ": -0.395236,
      "culture": -0.017988,
      "authority": 0.097145
    },
    "space": {
      "econ": -0.395236,
      "culture": -0.017988,
      "authority": 0.097145,
      "establishment": -0.142123,
      "globalism": -0.624607,
      "green": -0.076564,
      "ukraine": -0.561366,
      "greenDeal": -0.183191
    },
    "axisSalience": {
      "econ": 0.585999,
      "culture": 0.427555,
      "authority": 0.414972
    },
    "issuePrefs": {
      "housing": 0.219538,
      "transport": 0.027094,
      "security": 0.212532,
      "healthcare": 0.283131,
      "climate": 0.106419,
      "industry": -0.141081,
      "education": 0.238566,
      "taxes": -0.286729
    },
    "issueSalience": {
      "housing": 0.402942,
      "transport": 0.295173,
      "security": 0.399018,
      "healthcare": 0.438553,
      "climate": 0.339595,
      "industry": 0.359005,
      "education": 0.413597,
      "taxes": 0.440568
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.351154,
    "turnoutBase": 0.605026,
    "volatility": 0.482791
  },
  {
    "id": "ess_lib_left_40_54_tertiary_large_town_right",
    "name": "liberalni levice - 40-54 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 2.9e-05,
    "position": {
      "econ": -0.2862,
      "culture": -0.011501,
      "authority": 0.766572
    },
    "space": {
      "econ": -0.2862,
      "culture": -0.011501,
      "authority": 0.766572,
      "establishment": 0.918518,
      "globalism": 0.624265,
      "green": -0.587108,
      "ukraine": 0.898145,
      "greenDeal": 0.208364
    },
    "axisSalience": {
      "econ": 0.540204,
      "culture": 0.424831,
      "authority": 0.655966
    },
    "issuePrefs": {
      "housing": 0.15879,
      "transport": 0.148532,
      "security": 0.287835,
      "healthcare": 0.205144,
      "climate": 0.364376,
      "industry": -0.18373,
      "education": -0.064625,
      "taxes": -0.207444
    },
    "issueSalience": {
      "housing": 0.368923,
      "transport": 0.363178,
      "security": 0.441188,
      "healthcare": 0.394881,
      "climate": 0.48405,
      "industry": 0.382889,
      "education": 0.31619,
      "taxes": 0.396169
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.710937,
    "turnoutBase": 0.682148,
    "volatility": 0.387333
  },
  {
    "id": "ess_lib_left_40_54_tertiary_town_unknown",
    "name": "liberalni levice - 40-54 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 2.9e-05,
    "position": {
      "econ": -0.029845,
      "culture": -0.199697,
      "authority": 0.227503
    },
    "space": {
      "econ": -0.029845,
      "culture": -0.199697,
      "authority": 0.227503,
      "establishment": 0.016967,
      "globalism": 0.393425,
      "green": 0.255379,
      "ukraine": 0.521281,
      "greenDeal": 0.099036
    },
    "axisSalience": {
      "econ": 0.432535,
      "culture": 0.503873,
      "authority": 0.461901
    },
    "issuePrefs": {
      "housing": 0.040378,
      "transport": 0.090618,
      "security": -0.027382,
      "healthcare": 0.005513,
      "climate": -0.211603,
      "industry": -0.073443,
      "education": -0.009497,
      "taxes": -0.045452
    },
    "issueSalience": {
      "housing": 0.302612,
      "transport": 0.330746,
      "security": 0.295334,
      "healthcare": 0.283087,
      "climate": 0.398498,
      "industry": 0.321128,
      "education": 0.285318,
      "taxes": 0.305453
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.624963,
    "turnoutBase": 0.650594,
    "volatility": 0.468473
  },
  {
    "id": "ess_lib_left_55_plus_tertiary_town_right",
    "name": "liberalni levice - 55+ - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 2.9e-05,
    "position": {
      "econ": -0.000873,
      "culture": -0.232613,
      "authority": 0.122866
    },
    "space": {
      "econ": -0.000873,
      "culture": -0.232613,
      "authority": 0.122866,
      "establishment": -0.09214,
      "globalism": 0.419727,
      "green": 0.539981,
      "ukraine": 0.568292,
      "greenDeal": 0.699497
    },
    "axisSalience": {
      "econ": 0.420367,
      "culture": 0.517698,
      "authority": 0.424232
    },
    "issuePrefs": {
      "housing": 0.028394,
      "transport": 0.092456,
      "security": -0.109969,
      "healthcare": -0.017981,
      "climate": -0.584645,
      "industry": -0.210151,
      "education": -0.010716,
      "taxes": -0.028542
    },
    "issueSalience": {
      "housing": 0.2959,
      "transport": 0.331775,
      "security": 0.341583,
      "healthcare": 0.290069,
      "climate": 0.607401,
      "industry": 0.397685,
      "education": 0.286001,
      "taxes": 0.295984
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.617812,
    "turnoutBase": 0.726775,
    "volatility": 0.388293
  },
  {
    "id": "ess_lib_right_40_54_secondary_large_town_right",
    "name": "liberalni pravice - 40-54 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.003376,
    "position": {
      "econ": 0.445227,
      "culture": -0.245266,
      "authority": -0.052168
    },
    "space": {
      "econ": 0.445227,
      "culture": -0.245266,
      "authority": -0.052168,
      "establishment": 0.185006,
      "globalism": 0.296457,
      "green": 0.030797,
      "ukraine": 0.264405,
      "greenDeal": 0.48327
    },
    "axisSalience": {
      "econ": 0.606995,
      "culture": 0.523012,
      "authority": 0.39878
    },
    "issuePrefs": {
      "housing": -0.215443,
      "transport": -0.031584,
      "security": -0.175533,
      "healthcare": -0.340185,
      "climate": -0.157489,
      "industry": 0.044672,
      "education": -0.086232,
      "taxes": 0.291131
    },
    "issueSalience": {
      "housing": 0.400648,
      "transport": 0.297687,
      "security": 0.378299,
      "healthcare": 0.470503,
      "climate": 0.368194,
      "industry": 0.305016,
      "education": 0.32829,
      "taxes": 0.443034
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.522588,
    "turnoutBase": 0.596475,
    "volatility": 0.503349
  },
  {
    "id": "ess_lib_right_55_plus_secondary_town_right",
    "name": "liberalni pravice - 55+ - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002837,
    "position": {
      "econ": 0.446263,
      "culture": -0.184384,
      "authority": 0.094404
    },
    "space": {
      "econ": 0.446263,
      "culture": -0.184384,
      "authority": 0.094404,
      "establishment": 0.301542,
      "globalism": 0.336275,
      "green": 0.057068,
      "ukraine": 0.42714,
      "greenDeal": 0.396275
    },
    "axisSalience": {
      "econ": 0.60743,
      "culture": 0.497441,
      "authority": 0.413985
    },
    "issuePrefs": {
      "housing": -0.223318,
      "transport": -0.038024,
      "security": -0.087798,
      "healthcare": -0.33606,
      "climate": -0.152046,
      "industry": 0.076986,
      "education": -0.116549,
      "taxes": 0.299183
    },
    "issueSalience": {
      "housing": 0.405058,
      "transport": 0.301293,
      "security": 0.329167,
      "healthcare": 0.468194,
      "climate": 0.365146,
      "industry": 0.323112,
      "education": 0.345267,
      "taxes": 0.447542
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.5343,
    "turnoutBase": 0.680554,
    "volatility": 0.402861
  },
  {
    "id": "ess_lib_right_40_54_secondary_town_right",
    "name": "liberalni pravice - 40-54 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002633,
    "position": {
      "econ": 0.406062,
      "culture": -0.187704,
      "authority": -0.003143
    },
    "space": {
      "econ": 0.406062,
      "culture": -0.187704,
      "authority": -0.003143,
      "establishment": 0.269967,
      "globalism": 0.289022,
      "green": 0.066683,
      "ukraine": 0.334879,
      "greenDeal": 0.370398
    },
    "axisSalience": {
      "econ": 0.590546,
      "culture": 0.498836,
      "authority": 0.381131
    },
    "issuePrefs": {
      "housing": -0.20081,
      "transport": -0.033046,
      "security": -0.13332,
      "healthcare": -0.307381,
      "climate": -0.151723,
      "industry": 0.064106,
      "education": -0.095343,
      "taxes": 0.26984
    },
    "issueSalience": {
      "housing": 0.392453,
      "transport": 0.298506,
      "security": 0.354659,
      "healthcare": 0.452133,
      "climate": 0.364965,
      "industry": 0.3159,
      "education": 0.333392,
      "taxes": 0.431111
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.528939,
    "turnoutBase": 0.599449,
    "volatility": 0.495703
  },
  {
    "id": "ess_lib_right_55_plus_secondary_large_town_right",
    "name": "liberalni pravice - 55+ - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002072,
    "position": {
      "econ": 0.460159,
      "culture": -0.200426,
      "authority": -0.009233
    },
    "space": {
      "econ": 0.460159,
      "culture": -0.200426,
      "authority": -0.009233,
      "establishment": 0.141888,
      "globalism": 0.274294,
      "green": 0.003703,
      "ukraine": 0.339111,
      "greenDeal": 0.374392
    },
    "axisSalience": {
      "econ": 0.613267,
      "culture": 0.504179,
      "authority": 0.383324
    },
    "issuePrefs": {
      "housing": -0.229037,
      "transport": -0.046048,
      "security": -0.138345,
      "healthcare": -0.347349,
      "climate": -0.107496,
      "industry": 0.085743,
      "education": -0.100634,
      "taxes": 0.307264
    },
    "issueSalience": {
      "housing": 0.408261,
      "transport": 0.305787,
      "security": 0.357473,
      "healthcare": 0.474515,
      "climate": 0.340198,
      "industry": 0.328016,
      "education": 0.336355,
      "taxes": 0.452068
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.517809,
    "turnoutBase": 0.674966,
    "volatility": 0.41723
  },
  {
    "id": "ess_lib_right_40_54_secondary_rural_right",
    "name": "liberalni pravice - 40-54 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001968,
    "position": {
      "econ": 0.55137,
      "culture": -0.220065,
      "authority": -0.137418
    },
    "space": {
      "econ": 0.55137,
      "culture": -0.220065,
      "authority": -0.137418,
      "establishment": 0.232521,
      "globalism": 0.32032,
      "green": 0.118274,
      "ukraine": 0.416658,
      "greenDeal": 0.445301
    },
    "axisSalience": {
      "econ": 0.651575,
      "culture": 0.512427,
      "authority": 0.42947
    },
    "issuePrefs": {
      "housing": -0.276845,
      "transport": -0.059792,
      "security": -0.237808,
      "healthcare": -0.414591,
      "climate": -0.209842,
      "industry": 0.107146,
      "education": -0.125776,
      "taxes": 0.370578
    },
    "issueSalience": {
      "housing": 0.435033,
      "transport": 0.313484,
      "security": 0.413172,
      "healthcare": 0.512171,
      "climate": 0.397511,
      "industry": 0.340002,
      "education": 0.350435,
      "taxes": 0.487524
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.527821,
    "turnoutBase": 0.598138,
    "volatility": 0.499073
  },
  {
    "id": "ess_lib_right_25_39_tertiary_rural_right",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001621,
    "position": {
      "econ": 0.469453,
      "culture": -0.22404,
      "authority": 0.039936
    },
    "space": {
      "econ": 0.469453,
      "culture": -0.22404,
      "authority": 0.039936,
      "establishment": 0.170484,
      "globalism": 0.246868,
      "green": 0.220606,
      "ukraine": 0.298529,
      "greenDeal": 0.544401
    },
    "axisSalience": {
      "econ": 0.61717,
      "culture": 0.514097,
      "authority": 0.394377
    },
    "issuePrefs": {
      "housing": -0.231314,
      "transport": -0.047412,
      "security": -0.106289,
      "healthcare": -0.355929,
      "climate": -0.311268,
      "industry": 0.044965,
      "education": -0.088566,
      "taxes": 0.311121
    },
    "issueSalience": {
      "housing": 0.409536,
      "transport": 0.306551,
      "security": 0.339522,
      "healthcare": 0.47932,
      "climate": 0.45431,
      "industry": 0.30518,
      "education": 0.329597,
      "taxes": 0.454228
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.628451,
    "turnoutBase": 0.635967,
    "volatility": 0.434656
  },
  {
    "id": "ess_lib_right_40_54_tertiary_large_town_right",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001616,
    "position": {
      "econ": 0.560027,
      "culture": -0.237237,
      "authority": -0.095515
    },
    "space": {
      "econ": 0.560027,
      "culture": -0.237237,
      "authority": -0.095515,
      "establishment": 0.218118,
      "globalism": 0.455016,
      "green": 0.164494,
      "ukraine": 0.423194,
      "greenDeal": 0.501857
    },
    "axisSalience": {
      "econ": 0.655211,
      "culture": 0.51964,
      "authority": 0.414385
    },
    "issuePrefs": {
      "housing": -0.279546,
      "transport": -0.042702,
      "security": -0.241404,
      "healthcare": -0.422198,
      "climate": -0.258956,
      "industry": 0.094464,
      "education": -0.151477,
      "taxes": 0.374751
    },
    "issueSalience": {
      "housing": 0.436546,
      "transport": 0.303913,
      "security": 0.415186,
      "healthcare": 0.516431,
      "climate": 0.425015,
      "industry": 0.3329,
      "education": 0.364827,
      "taxes": 0.48986
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.64475,
    "turnoutBase": 0.657634,
    "volatility": 0.450369
  },
  {
    "id": "ess_lib_right_55_plus_secondary_rural_right",
    "name": "liberalni pravice - 55+ - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001516,
    "position": {
      "econ": 0.519781,
      "culture": -0.206536,
      "authority": -0.036026
    },
    "space": {
      "econ": 0.519781,
      "culture": -0.206536,
      "authority": -0.036026,
      "establishment": 0.067958,
      "globalism": 0.172356,
      "green": 0.096407,
      "ukraine": 0.161184,
      "greenDeal": 0.415726
    },
    "axisSalience": {
      "econ": 0.638308,
      "culture": 0.506745,
      "authority": 0.392969
    },
    "issuePrefs": {
      "housing": -0.261095,
      "transport": -0.072086,
      "security": -0.124085,
      "healthcare": -0.390765,
      "climate": -0.185816,
      "industry": 0.102149,
      "education": -0.090378,
      "taxes": 0.349458
    },
    "issueSalience": {
      "housing": 0.426213,
      "transport": 0.320368,
      "security": 0.349488,
      "healthcare": 0.498828,
      "climate": 0.384057,
      "industry": 0.337203,
      "education": 0.330612,
      "taxes": 0.475696
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.505778,
    "turnoutBase": 0.672379,
    "volatility": 0.423884
  },
  {
    "id": "ess_lib_right_40_54_secondary_large_town_center",
    "name": "liberalni pravice - 40-54 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001447,
    "position": {
      "econ": 0.268837,
      "culture": -0.262811,
      "authority": -0.060301
    },
    "space": {
      "econ": 0.268837,
      "culture": -0.262811,
      "authority": -0.060301,
      "establishment": 0.149411,
      "globalism": 0.317861,
      "green": 0.046437,
      "ukraine": 0.355177,
      "greenDeal": 0.362556
    },
    "axisSalience": {
      "econ": 0.532912,
      "culture": 0.530381,
      "authority": 0.401708
    },
    "issuePrefs": {
      "housing": -0.116323,
      "transport": 0.01824,
      "security": -0.196602,
      "healthcare": -0.214588,
      "climate": -0.13495,
      "industry": -0.010654,
      "education": -0.042466,
      "taxes": 0.162026
    },
    "issueSalience": {
      "housing": 0.345141,
      "transport": 0.290214,
      "security": 0.390097,
      "healthcare": 0.400169,
      "climate": 0.355572,
      "industry": 0.285966,
      "education": 0.303781,
      "taxes": 0.370734
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.521024,
    "turnoutBase": 0.595229,
    "volatility": 0.606553
  },
  {
    "id": "ess_lib_right_25_39_secondary_large_town_right",
    "name": "liberalni pravice - 25-39 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001386,
    "position": {
      "econ": 0.512053,
      "culture": -0.301892,
      "authority": -0.079827
    },
    "space": {
      "econ": 0.512053,
      "culture": -0.301892,
      "authority": -0.079827,
      "establishment": 0.057171,
      "globalism": 0.215793,
      "green": 0.175458,
      "ukraine": 0.143057,
      "greenDeal": 0.379492
    },
    "axisSalience": {
      "econ": 0.635062,
      "culture": 0.546795,
      "authority": 0.408738
    },
    "issuePrefs": {
      "housing": -0.245402,
      "transport": -0.047778,
      "security": -0.18431,
      "healthcare": -0.392829,
      "climate": -0.232587,
      "industry": 0.090126,
      "education": -0.064705,
      "taxes": 0.332451
    },
    "issueSalience": {
      "housing": 0.417425,
      "transport": 0.306755,
      "security": 0.383213,
      "healthcare": 0.499985,
      "climate": 0.410249,
      "industry": 0.33047,
      "education": 0.316235,
      "taxes": 0.466173
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.507521,
    "turnoutBase": 0.572001,
    "volatility": 0.494855
  },
  {
    "id": "ess_lib_right_15_24_secondary_large_town_right",
    "name": "liberalni pravice - 15-24 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001382,
    "position": {
      "econ": 0.39639,
      "culture": -0.339145,
      "authority": -0.000687
    },
    "space": {
      "econ": 0.39639,
      "culture": -0.339145,
      "authority": -0.000687,
      "establishment": 0.333113,
      "globalism": 0.477513,
      "green": 0.281102,
      "ukraine": 0.659727,
      "greenDeal": 0.700512
    },
    "axisSalience": {
      "econ": 0.586484,
      "culture": 0.562441,
      "authority": 0.380247
    },
    "issuePrefs": {
      "housing": -0.177317,
      "transport": 0.01925,
      "security": -0.234117,
      "healthcare": -0.312533,
      "climate": -0.398537,
      "industry": -0.04683,
      "education": -0.081486,
      "taxes": 0.244704
    },
    "issueSalience": {
      "housing": 0.379298,
      "transport": 0.29078,
      "security": 0.411106,
      "healthcare": 0.455018,
      "climate": 0.503181,
      "industry": 0.306225,
      "education": 0.325632,
      "taxes": 0.417034
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.5453,
    "turnoutBase": 0.581659,
    "volatility": 0.47002
  },
  {
    "id": "ess_lib_right_25_39_tertiary_large_town_right",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001364,
    "position": {
      "econ": 0.402041,
      "culture": -0.37102,
      "authority": -0.056234
    },
    "space": {
      "econ": 0.402041,
      "culture": -0.37102,
      "authority": -0.056234,
      "establishment": 0.108457,
      "globalism": 0.399219,
      "green": 0.375595,
      "ukraine": 0.566305,
      "greenDeal": 0.663279
    },
    "axisSalience": {
      "econ": 0.588857,
      "culture": 0.575828,
      "authority": 0.400244
    },
    "issuePrefs": {
      "housing": -0.1766,
      "transport": 0.01418,
      "security": -0.255914,
      "healthcare": -0.319151,
      "climate": -0.456146,
      "industry": -0.041032,
      "education": -0.054461,
      "taxes": 0.244947
    },
    "issueSalience": {
      "housing": 0.378896,
      "transport": 0.287941,
      "security": 0.423312,
      "healthcare": 0.458725,
      "climate": 0.535442,
      "industry": 0.302978,
      "education": 0.310498,
      "taxes": 0.41717
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.63263,
    "turnoutBase": 0.633796,
    "volatility": 0.440239
  },
  {
    "id": "ess_lib_right_55_plus_tertiary_large_town_right",
    "name": "liberalni pravice - 55+ - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001299,
    "position": {
      "econ": 0.676024,
      "culture": -0.204902,
      "authority": -0.106512
    },
    "space": {
      "econ": 0.676024,
      "culture": -0.204902,
      "authority": -0.106512,
      "establishment": 0.110862,
      "globalism": 0.382096,
      "green": 0.0477,
      "ukraine": 0.343587,
      "greenDeal": 0.320608
    },
    "axisSalience": {
      "econ": 0.70393,
      "culture": 0.506059,
      "authority": 0.418344
    },
    "issuePrefs": {
      "housing": -0.347225,
      "transport": -0.086272,
      "security": -0.219674,
      "healthcare": -0.50313,
      "climate": -0.124114,
      "industry": 0.197143,
      "education": -0.174591,
      "taxes": 0.462149
    },
    "issueSalience": {
      "housing": 0.474446,
      "transport": 0.328312,
      "security": 0.403018,
      "healthcare": 0.561753,
      "climate": 0.349504,
      "industry": 0.3904,
      "education": 0.377771,
      "taxes": 0.538804
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.631795,
    "turnoutBase": 0.73388,
    "volatility": 0.370022
  },
  {
    "id": "ess_lib_right_25_39_secondary_rural_right",
    "name": "liberalni pravice - 25-39 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00129,
    "position": {
      "econ": 0.477021,
      "culture": -0.198504,
      "authority": 0.01212
    },
    "space": {
      "econ": 0.477021,
      "culture": -0.198504,
      "authority": 0.01212,
      "establishment": 0.109623,
      "globalism": 0.230972,
      "green": 0.102253,
      "ukraine": 0.159721,
      "greenDeal": 0.181988
    },
    "axisSalience": {
      "econ": 0.620349,
      "culture": 0.503372,
      "authority": 0.384363
    },
    "issuePrefs": {
      "housing": -0.238541,
      "transport": -0.055808,
      "security": -0.102419,
      "healthcare": -0.359336,
      "climate": -0.124579,
      "industry": 0.140022,
      "education": -0.095822,
      "taxes": 0.319635
    },
    "issueSalience": {
      "housing": 0.413583,
      "transport": 0.311252,
      "security": 0.337355,
      "healthcare": 0.481228,
      "climate": 0.349764,
      "industry": 0.358412,
      "education": 0.333661,
      "taxes": 0.458996
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.512628,
    "turnoutBase": 0.573837,
    "volatility": 0.490134
  },
  {
    "id": "ess_lib_right_55_plus_secondary_large_town_center",
    "name": "liberalni pravice - 55+ - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001256,
    "position": {
      "econ": 0.249771,
      "culture": -0.20746,
      "authority": 0.036858
    },
    "space": {
      "econ": 0.249771,
      "culture": -0.20746,
      "authority": 0.036858,
      "establishment": 0.081665,
      "globalism": 0.169021,
      "green": 0.035703,
      "ukraine": 0.173121,
      "greenDeal": 0.248166
    },
    "axisSalience": {
      "econ": 0.524904,
      "culture": 0.507133,
      "authority": 0.393269
    },
    "issuePrefs": {
      "housing": -0.112479,
      "transport": -0.004817,
      "security": -0.07951,
      "healthcare": -0.196432,
      "climate": -0.095192,
      "industry": 0.017992,
      "education": -0.024519,
      "taxes": 0.15494
    },
    "issueSalience": {
      "housing": 0.342988,
      "transport": 0.282698,
      "security": 0.324526,
      "healthcare": 0.390002,
      "climate": 0.333308,
      "industry": 0.290075,
      "education": 0.29373,
      "taxes": 0.366766
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.506675,
    "turnoutBase": 0.672858,
    "volatility": 0.52265
  },
  {
    "id": "ess_lib_right_55_plus_secondary_town_center",
    "name": "liberalni pravice - 55+ - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001204,
    "position": {
      "econ": 0.202204,
      "culture": -0.263349,
      "authority": 0.083652
    },
    "space": {
      "econ": 0.202204,
      "culture": -0.263349,
      "authority": 0.083652,
      "establishment": 0.193989,
      "globalism": 0.20301,
      "green": 0.062673,
      "ukraine": 0.372794,
      "greenDeal": 0.227971
    },
    "axisSalience": {
      "econ": 0.504926,
      "culture": 0.530607,
      "authority": 0.410115
    },
    "issuePrefs": {
      "housing": -0.079611,
      "transport": 0.021213,
      "security": -0.088239,
      "healthcare": -0.166655,
      "climate": -0.108957,
      "industry": -0.009102,
      "education": -0.001019,
      "taxes": 0.113985
    },
    "issueSalience": {
      "housing": 0.324582,
      "transport": 0.291879,
      "security": 0.329414,
      "healthcare": 0.373327,
      "climate": 0.341016,
      "industry": 0.285097,
      "education": 0.280571,
      "taxes": 0.343832
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.5177,
    "turnoutBase": 0.67679,
    "volatility": 0.512541
  },
  {
    "id": "ess_lib_right_40_54_secondary_town_center",
    "name": "liberalni pravice - 40-54 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00103,
    "position": {
      "econ": 0.215225,
      "culture": -0.280608,
      "authority": -0.137633
    },
    "space": {
      "econ": 0.215225,
      "culture": -0.280608,
      "authority": -0.137633,
      "establishment": 0.182752,
      "globalism": 0.124951,
      "green": 0.157805,
      "ukraine": 0.282896,
      "greenDeal": 0.405916
    },
    "axisSalience": {
      "econ": 0.510395,
      "culture": 0.537856,
      "authority": 0.429548
    },
    "issuePrefs": {
      "housing": -0.084701,
      "transport": 0.011697,
      "security": -0.209026,
      "healthcare": -0.177411,
      "climate": -0.227276,
      "industry": -0.048926,
      "education": 0.01907,
      "taxes": 0.121289
    },
    "issueSalience": {
      "housing": 0.327432,
      "transport": 0.286551,
      "security": 0.397054,
      "healthcare": 0.37935,
      "climate": 0.407275,
      "industry": 0.307398,
      "education": 0.290679,
      "taxes": 0.347922
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.512117,
    "turnoutBase": 0.596396,
    "volatility": 0.603552
  },
  {
    "id": "ess_lib_right_55_plus_tertiary_town_right",
    "name": "liberalni pravice - 55+ - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000912,
    "position": {
      "econ": 0.493539,
      "culture": -0.181345,
      "authority": 0.160062
    },
    "space": {
      "econ": 0.493539,
      "culture": -0.181345,
      "authority": 0.160062,
      "establishment": 0.269838,
      "globalism": 0.354172,
      "green": 0.240937,
      "ukraine": 0.449826,
      "greenDeal": 0.485404
    },
    "axisSalience": {
      "econ": 0.627286,
      "culture": 0.496165,
      "authority": 0.437622
    },
    "issuePrefs": {
      "housing": -0.249685,
      "transport": -0.048242,
      "security": -0.051276,
      "healthcare": -0.369855,
      "climate": -0.309388,
      "industry": 0.077889,
      "education": -0.132896,
      "taxes": 0.333586
    },
    "issueSalience": {
      "housing": 0.419824,
      "transport": 0.307015,
      "security": 0.308714,
      "healthcare": 0.487119,
      "climate": 0.453257,
      "industry": 0.323618,
      "education": 0.354422,
      "taxes": 0.466808
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.642837,
    "turnoutBase": 0.739444,
    "volatility": 0.355715
  },
  {
    "id": "ess_lib_right_55_plus_secondary_rural_center",
    "name": "liberalni pravice - 55+ - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000873,
    "position": {
      "econ": 0.29522,
      "culture": -0.18416,
      "authority": 0.016045
    },
    "space": {
      "econ": 0.29522,
      "culture": -0.18416,
      "authority": 0.016045,
      "establishment": 0.319022,
      "globalism": 0.327277,
      "green": 0.131574,
      "ukraine": 0.397106,
      "greenDeal": 0.464763
    },
    "axisSalience": {
      "econ": 0.543993,
      "culture": 0.497347,
      "authority": 0.385776
    },
    "issuePrefs": {
      "housing": -0.140272,
      "transport": -0.001383,
      "security": -0.132295,
      "healthcare": -0.227291,
      "climate": -0.224867,
      "industry": -0.008891,
      "education": -0.078398,
      "taxes": 0.190459
    },
    "issueSalience": {
      "housing": 0.358552,
      "transport": 0.280774,
      "security": 0.354085,
      "healthcare": 0.407283,
      "climate": 0.405925,
      "industry": 0.284979,
      "education": 0.323903,
      "taxes": 0.386657
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.535158,
    "turnoutBase": 0.681166,
    "volatility": 0.501288
  },
  {
    "id": "ess_lib_right_40_54_tertiary_town_right",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000856,
    "position": {
      "econ": 0.539109,
      "culture": -0.236268,
      "authority": 0.197366
    },
    "space": {
      "econ": 0.539109,
      "culture": -0.236268,
      "authority": 0.197366,
      "establishment": 0.368782,
      "globalism": 0.359588,
      "green": 0.252401,
      "ukraine": 0.479089,
      "greenDeal": 0.430041
    },
    "axisSalience": {
      "econ": 0.646426,
      "culture": 0.519232,
      "authority": 0.451052
    },
    "issuePrefs": {
      "housing": -0.268158,
      "transport": -0.049098,
      "security": -0.046841,
      "healthcare": -0.40706,
      "climate": -0.30214,
      "industry": 0.102252,
      "education": -0.125802,
      "taxes": 0.359806
    },
    "issueSalience": {
      "housing": 0.430168,
      "transport": 0.307495,
      "security": 0.306231,
      "healthcare": 0.507953,
      "climate": 0.449199,
      "industry": 0.337261,
      "education": 0.350449,
      "taxes": 0.481491
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.651078,
    "turnoutBase": 0.662907,
    "volatility": 0.43681
  },
  {
    "id": "ess_lib_right_15_24_secondary_rural_right",
    "name": "liberalni pravice - 15-24 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00083,
    "position": {
      "econ": 0.537141,
      "culture": -0.297604,
      "authority": -0.064628
    },
    "space": {
      "econ": 0.537141,
      "culture": -0.297604,
      "authority": -0.064628,
      "establishment": 0.16813,
      "globalism": 0.322948,
      "green": -0.019211,
      "ukraine": 0.588452,
      "greenDeal": 0.298043
    },
    "axisSalience": {
      "econ": 0.645599,
      "culture": 0.544994,
      "authority": 0.403266
    },
    "issuePrefs": {
      "housing": -0.259715,
      "transport": -0.041963,
      "security": -0.228606,
      "healthcare": -0.41055,
      "climate": -0.06962,
      "industry": 0.121986,
      "education": -0.095801,
      "taxes": 0.351029
    },
    "issueSalience": {
      "housing": 0.42544,
      "transport": 0.303499,
      "security": 0.408019,
      "healthcare": 0.509908,
      "climate": 0.318987,
      "industry": 0.348312,
      "education": 0.333649,
      "taxes": 0.476576
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.522827,
    "turnoutBase": 0.575885,
    "volatility": 0.484868
  },
  {
    "id": "ess_lib_right_25_39_tertiary_town_right",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000747,
    "position": {
      "econ": 0.514557,
      "culture": -0.311765,
      "authority": -0.080296
    },
    "space": {
      "econ": 0.514557,
      "culture": -0.311765,
      "authority": -0.080296,
      "establishment": 0.237622,
      "globalism": 0.351711,
      "green": 0.29624,
      "ukraine": 0.590349,
      "greenDeal": 0.512505
    },
    "axisSalience": {
      "econ": 0.636114,
      "culture": 0.550941,
      "authority": 0.408907
    },
    "issuePrefs": {
      "housing": -0.245595,
      "transport": -0.030316,
      "security": -0.247614,
      "healthcare": -0.395422,
      "climate": -0.356794,
      "industry": 0.057577,
      "education": -0.091752,
      "taxes": 0.333069
    },
    "issueSalience": {
      "housing": 0.417533,
      "transport": 0.296977,
      "security": 0.418664,
      "healthcare": 0.501437,
      "climate": 0.479805,
      "industry": 0.312243,
      "education": 0.331381,
      "taxes": 0.466519
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.640112,
    "turnoutBase": 0.638317,
    "volatility": 0.428614
  },
  {
    "id": "ess_lib_right_15_24_lower_large_town_center",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000704,
    "position": {
      "econ": 0.286921,
      "culture": -0.296168,
      "authority": -0.187581
    },
    "space": {
      "econ": 0.286921,
      "culture": -0.296168,
      "authority": -0.187581,
      "establishment": 0.271197,
      "globalism": 0.394995,
      "green": 0.188883,
      "ukraine": 0.299596,
      "greenDeal": 0.566101
    },
    "axisSalience": {
      "econ": 0.540507,
      "culture": 0.544391,
      "authority": 0.447529
    },
    "issuePrefs": {
      "housing": -0.122266,
      "transport": 0.028979,
      "security": -0.294294,
      "healthcare": -0.230277,
      "climate": -0.294504,
      "industry": -0.057191,
      "education": -0.052101,
      "taxes": 0.171043
    },
    "issueSalience": {
      "housing": 0.348469,
      "transport": 0.296228,
      "security": 0.444805,
      "healthcare": 0.408955,
      "climate": 0.444922,
      "industry": 0.312027,
      "education": 0.309177,
      "taxes": 0.375784
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.445395,
    "turnoutBase": 0.519492,
    "volatility": 0.615592
  },
  {
    "id": "ess_lib_right_25_39_secondary_rural_center",
    "name": "liberalni pravice - 25-39 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000682,
    "position": {
      "econ": 0.421913,
      "culture": -0.32613,
      "authority": 0.110357
    },
    "space": {
      "econ": 0.421913,
      "culture": -0.32613,
      "authority": 0.110357,
      "establishment": 0.204173,
      "globalism": 0.287213,
      "green": 0.25616,
      "ukraine": 0.213207,
      "greenDeal": 0.345468
    },
    "axisSalience": {
      "econ": 0.597203,
      "culture": 0.556975,
      "authority": 0.419728
    },
    "issuePrefs": {
      "housing": -0.192917,
      "transport": -0.012309,
      "security": -0.09165,
      "healthcare": -0.329868,
      "climate": -0.281167,
      "industry": 0.052464,
      "education": -0.0503,
      "taxes": 0.264642
    },
    "issueSalience": {
      "housing": 0.388033,
      "transport": 0.286893,
      "security": 0.331324,
      "healthcare": 0.464726,
      "climate": 0.437453,
      "industry": 0.30938,
      "education": 0.308168,
      "taxes": 0.428199
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.523567,
    "turnoutBase": 0.577146,
    "volatility": 0.581624
  },
  {
    "id": "ess_lib_right_25_39_secondary_town_right",
    "name": "liberalni pravice - 25-39 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000682,
    "position": {
      "econ": 0.396615,
      "culture": -0.232134,
      "authority": 0.134862
    },
    "space": {
      "econ": 0.396615,
      "culture": -0.232134,
      "authority": 0.134862,
      "establishment": 0.330561,
      "globalism": 0.374928,
      "green": 0.260093,
      "ukraine": 0.392781,
      "greenDeal": 0.728301
    },
    "axisSalience": {
      "econ": 0.586578,
      "culture": 0.517496,
      "authority": 0.42855
    },
    "issuePrefs": {
      "housing": -0.190282,
      "transport": -0.012378,
      "security": -0.080293,
      "healthcare": -0.304134,
      "climate": -0.391191,
      "industry": -0.034133,
      "education": -0.096425,
      "taxes": 0.257707
    },
    "issueSalience": {
      "housing": 0.386558,
      "transport": 0.286932,
      "security": 0.324964,
      "healthcare": 0.450315,
      "climate": 0.499067,
      "industry": 0.299115,
      "education": 0.333998,
      "taxes": 0.424316
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.538941,
    "turnoutBase": 0.58157,
    "volatility": 0.47025
  },
  {
    "id": "ess_lib_right_55_plus_tertiary_rural_right",
    "name": "liberalni pravice - 55+ - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000587,
    "position": {
      "econ": 0.511466,
      "culture": -0.165229,
      "authority": -0.073949
    },
    "space": {
      "econ": 0.511466,
      "culture": -0.165229,
      "authority": -0.073949,
      "establishment": 0.116508,
      "globalism": 0.437838,
      "green": 0.154349,
      "ukraine": 0.530125,
      "greenDeal": 0.561125
    },
    "axisSalience": {
      "econ": 0.634816,
      "culture": 0.489396,
      "authority": 0.406622
    },
    "issuePrefs": {
      "housing": -0.261479,
      "transport": -0.045585,
      "security": -0.213333,
      "healthcare": -0.381474,
      "climate": -0.268247,
      "industry": 0.070863,
      "education": -0.161246,
      "taxes": 0.348428
    },
    "issueSalience": {
      "housing": 0.426428,
      "transport": 0.305527,
      "security": 0.399467,
      "healthcare": 0.493625,
      "climate": 0.430218,
      "industry": 0.319683,
      "education": 0.370298,
      "taxes": 0.47512
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.635591,
    "turnoutBase": 0.734078,
    "volatility": 0.369514
  },
  {
    "id": "ess_lib_right_40_54_secondary_rural_center",
    "name": "liberalni pravice - 40-54 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000565,
    "position": {
      "econ": 0.25497,
      "culture": -0.21478,
      "authority": -0.067653
    },
    "space": {
      "econ": 0.25497,
      "culture": -0.21478,
      "authority": -0.067653,
      "establishment": 0.164108,
      "globalism": 0.285149,
      "green": 0.011096,
      "ukraine": 0.294811,
      "greenDeal": 0.335263
    },
    "axisSalience": {
      "econ": 0.527088,
      "culture": 0.510208,
      "authority": 0.404355
    },
    "issuePrefs": {
      "housing": -0.11446,
      "transport": 0.009136,
      "security": -0.176995,
      "healthcare": -0.200761,
      "climate": -0.101862,
      "industry": -0.001837,
      "education": -0.048753,
      "taxes": 0.157805
    },
    "issueSalience": {
      "housing": 0.344098,
      "transport": 0.285116,
      "security": 0.379117,
      "healthcare": 0.392426,
      "climate": 0.337043,
      "industry": 0.281029,
      "education": 0.307302,
      "taxes": 0.368371
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.520238,
    "turnoutBase": 0.595744,
    "volatility": 0.60523
  },
  {
    "id": "ess_lib_right_25_39_secondary_town_center",
    "name": "liberalni pravice - 25-39 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.0005,
    "position": {
      "econ": 0.343127,
      "culture": -0.263522,
      "authority": 0.025027
    },
    "space": {
      "econ": 0.343127,
      "culture": -0.263522,
      "authority": 0.025027,
      "establishment": 0.111298,
      "globalism": 0.161228,
      "green": 0.170585,
      "ukraine": 0.347185,
      "greenDeal": 0.305982
    },
    "axisSalience": {
      "econ": 0.564113,
      "culture": 0.530679,
      "authority": 0.38901
    },
    "issuePrefs": {
      "housing": -0.157097,
      "transport": -0.019,
      "security": -0.115065,
      "healthcare": -0.268133,
      "climate": -0.208496,
      "industry": 0.036969,
      "education": -0.025588,
      "taxes": 0.215429
    },
    "issueSalience": {
      "housing": 0.367974,
      "transport": 0.29064,
      "security": 0.344436,
      "healthcare": 0.430155,
      "climate": 0.396758,
      "industry": 0.300703,
      "education": 0.294329,
      "taxes": 0.40064
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.508577,
    "turnoutBase": 0.573895,
    "volatility": 0.589983
  },
  {
    "id": "ess_lib_right_25_39_tertiary_town_center",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000491,
    "position": {
      "econ": 0.20027,
      "culture": -0.296289,
      "authority": -0.009604
    },
    "space": {
      "econ": 0.20027,
      "culture": -0.296289,
      "authority": -0.009604,
      "establishment": 0.070752,
      "globalism": 0.170766,
      "green": 0.154673,
      "ukraine": 0.101184,
      "greenDeal": 0.507042
    },
    "axisSalience": {
      "econ": 0.504113,
      "culture": 0.544442,
      "authority": 0.383457
    },
    "issuePrefs": {
      "housing": -0.074594,
      "transport": 0.023756,
      "security": -0.127748,
      "healthcare": -0.167898,
      "climate": -0.253337,
      "industry": -0.082898,
      "education": 0.018068,
      "taxes": 0.10864
    },
    "issueSalience": {
      "housing": 0.321773,
      "transport": 0.293304,
      "security": 0.351539,
      "healthcare": 0.374023,
      "climate": 0.421869,
      "industry": 0.326423,
      "education": 0.290118,
      "taxes": 0.340838
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.615906,
    "turnoutBase": 0.632476,
    "volatility": 0.543632
  },
  {
    "id": "ess_lib_right_25_39_secondary_large_town_center",
    "name": "liberalni pravice - 25-39 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000478,
    "position": {
      "econ": 0.302056,
      "culture": -0.337371,
      "authority": 0.087637
    },
    "space": {
      "econ": 0.302056,
      "culture": -0.337371,
      "authority": 0.087637,
      "establishment": -0.035245,
      "globalism": 0.071809,
      "green": 0.226968,
      "ukraine": 0.070099,
      "greenDeal": 0.212181
    },
    "axisSalience": {
      "econ": 0.546864,
      "culture": 0.561696,
      "authority": 0.411549
    },
    "issuePrefs": {
      "housing": -0.125647,
      "transport": -0.00617,
      "security": -0.058662,
      "healthcare": -0.24447,
      "climate": -0.222828,
      "industry": 0.027296,
      "education": 0.029788,
      "taxes": 0.176996
    },
    "issueSalience": {
      "housing": 0.350362,
      "transport": 0.283455,
      "security": 0.312851,
      "healthcare": 0.416903,
      "climate": 0.404784,
      "industry": 0.295286,
      "education": 0.296681,
      "taxes": 0.379118
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.491489,
    "turnoutBase": 0.568766,
    "volatility": 0.603172
  },
  {
    "id": "ess_lib_right_25_39_tertiary_large_town_center",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000474,
    "position": {
      "econ": 0.28604,
      "culture": -0.265561,
      "authority": -0.02204
    },
    "space": {
      "econ": 0.28604,
      "culture": -0.265561,
      "authority": -0.02204,
      "establishment": 0.275456,
      "globalism": 0.380309,
      "green": 0.043697,
      "ukraine": 0.210214,
      "greenDeal": 0.321962
    },
    "axisSalience": {
      "econ": 0.540137,
      "culture": 0.531536,
      "authority": 0.387934
    },
    "issuePrefs": {
      "housing": -0.125454,
      "transport": 0.021928,
      "security": -0.173294,
      "healthcare": -0.227193,
      "climate": -0.121611,
      "industry": 0.006506,
      "education": -0.059371,
      "taxes": 0.174081
    },
    "issueSalience": {
      "housing": 0.350255,
      "transport": 0.29228,
      "security": 0.377045,
      "healthcare": 0.407228,
      "climate": 0.348102,
      "industry": 0.283644,
      "education": 0.313248,
      "taxes": 0.377485
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.644855,
    "turnoutBase": 0.639641,
    "volatility": 0.525209
  },
  {
    "id": "ess_lib_right_15_24_lower_rural_center",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000452,
    "position": {
      "econ": 0.403302,
      "culture": -0.213197,
      "authority": -0.105589
    },
    "space": {
      "econ": 0.403302,
      "culture": -0.213197,
      "authority": -0.105589,
      "establishment": 0.173165,
      "globalism": 0.214448,
      "green": 0.159638,
      "ukraine": 0.40964,
      "greenDeal": 0.543686
    },
    "axisSalience": {
      "econ": 0.589387,
      "culture": 0.509543,
      "authority": 0.418012
    },
    "issuePrefs": {
      "housing": -0.196233,
      "transport": -0.036716,
      "security": -0.196532,
      "healthcare": -0.307433,
      "climate": -0.267172,
      "industry": 0.016659,
      "education": -0.069352,
      "taxes": 0.264794
    },
    "issueSalience": {
      "housing": 0.38989,
      "transport": 0.300561,
      "security": 0.390058,
      "healthcare": 0.452163,
      "climate": 0.429616,
      "industry": 0.289329,
      "education": 0.318837,
      "taxes": 0.428285
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.42672,
    "turnoutBase": 0.516061,
    "volatility": 0.624415
  },
  {
    "id": "ess_lib_right_40_54_tertiary_rural_right",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000448,
    "position": {
      "econ": 0.555686,
      "culture": -0.426502,
      "authority": 0.02889
    },
    "space": {
      "econ": 0.555686,
      "culture": -0.426502,
      "authority": 0.02889,
      "establishment": 0.297356,
      "globalism": 0.622129,
      "green": 0.272585,
      "ukraine": 0.371484,
      "greenDeal": 0.488895
    },
    "axisSalience": {
      "econ": 0.653388,
      "culture": 0.599131,
      "authority": 0.3904
    },
    "issuePrefs": {
      "housing": -0.254447,
      "transport": 0.012504,
      "security": -0.243211,
      "healthcare": -0.434214,
      "climate": -0.333152,
      "industry": 0.061511,
      "education": -0.120957,
      "taxes": 0.348914
    },
    "issueSalience": {
      "housing": 0.42249,
      "transport": 0.287002,
      "security": 0.416198,
      "healthcare": 0.52316,
      "climate": 0.466565,
      "industry": 0.314446,
      "education": 0.347736,
      "taxes": 0.475392
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.661116,
    "turnoutBase": 0.660407,
    "volatility": 0.443238
  },
  {
    "id": "ess_lib_right_15_24_lower_rural_right",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000378,
    "position": {
      "econ": 0.372196,
      "culture": -0.319696,
      "authority": -0.247096
    },
    "space": {
      "econ": 0.372196,
      "culture": -0.319696,
      "authority": -0.247096,
      "establishment": 0.349643,
      "globalism": 0.526656,
      "green": 0.399976,
      "ukraine": 0.499146,
      "greenDeal": 0.8303
    },
    "axisSalience": {
      "econ": 0.576322,
      "culture": 0.554272,
      "authority": 0.468955
    },
    "issuePrefs": {
      "housing": -0.166344,
      "transport": 0.027695,
      "security": -0.377444,
      "healthcare": -0.293557,
      "climate": -0.520467,
      "industry": -0.085607,
      "education": -0.093298,
      "taxes": 0.229617
    },
    "issueSalience": {
      "housing": 0.373153,
      "transport": 0.295509,
      "security": 0.491369,
      "healthcare": 0.444392,
      "climate": 0.571462,
      "industry": 0.32794,
      "education": 0.332247,
      "taxes": 0.408586
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.459571,
    "turnoutBase": 0.522238,
    "volatility": 0.508532
  },
  {
    "id": "ess_lib_right_15_24_lower_town_right",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000374,
    "position": {
      "econ": 0.248694,
      "culture": -0.251414,
      "authority": 0.346368
    },
    "space": {
      "econ": 0.248694,
      "culture": -0.251414,
      "authority": 0.346368,
      "establishment": 0.337847,
      "globalism": 0.449622,
      "green": 0.305368,
      "ukraine": 0.401084,
      "greenDeal": 0.383286
    },
    "axisSalience": {
      "econ": 0.524452,
      "culture": 0.525594,
      "authority": 0.504693
    },
    "issuePrefs": {
      "housing": -0.106612,
      "transport": 0.037035,
      "security": 0.031334,
      "healthcare": -0.199173,
      "climate": -0.327185,
      "industry": -0.022844,
      "education": -0.070609,
      "taxes": 0.14889
    },
    "issueSalience": {
      "housing": 0.339703,
      "transport": 0.30074,
      "security": 0.297547,
      "healthcare": 0.391537,
      "climate": 0.463224,
      "industry": 0.292792,
      "education": 0.319541,
      "taxes": 0.363379
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.454005,
    "turnoutBase": 0.521825,
    "volatility": 0.509594
  },
  {
    "id": "ess_lib_right_15_24_lower_town_center",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000365,
    "position": {
      "econ": 0.273476,
      "culture": -0.321016,
      "authority": -0.317421
    },
    "space": {
      "econ": 0.273476,
      "culture": -0.321016,
      "authority": -0.317421,
      "establishment": 0.301005,
      "globalism": 0.319852,
      "green": 0.040498,
      "ukraine": 0.607752,
      "greenDeal": 0.600158
    },
    "axisSalience": {
      "econ": 0.53486,
      "culture": 0.554827,
      "authority": 0.494271
    },
    "issuePrefs": {
      "housing": -0.11189,
      "transport": 0.027796,
      "security": -0.392879,
      "healthcare": -0.222584,
      "climate": -0.197202,
      "industry": -0.076022,
      "education": -0.023646,
      "taxes": 0.158381
    },
    "issueSalience": {
      "housing": 0.342658,
      "transport": 0.295566,
      "security": 0.500012,
      "healthcare": 0.404647,
      "climate": 0.390433,
      "industry": 0.322572,
      "education": 0.293242,
      "taxes": 0.368693
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.443272,
    "turnoutBase": 0.520535,
    "volatility": 0.61291
  },
  {
    "id": "ess_lib_right_40_54_secondary_rural_unknown",
    "name": "liberalni pravice - 40-54 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000365,
    "position": {
      "econ": 0.549005,
      "culture": -0.410173,
      "authority": -0.171716
    },
    "space": {
      "econ": 0.549005,
      "culture": -0.410173,
      "authority": -0.171716,
      "establishment": 0.14625,
      "globalism": 0.310918,
      "green": 0.137916,
      "ukraine": 0.386498,
      "greenDeal": 0.418625
    },
    "axisSalience": {
      "econ": 0.650582,
      "culture": 0.592273,
      "authority": 0.441818
    },
    "issuePrefs": {
      "housing": -0.252732,
      "transport": -0.02611,
      "security": -0.308197,
      "healthcare": -0.428098,
      "climate": -0.216514,
      "industry": 0.078241,
      "education": -0.056603,
      "taxes": 0.346063
    },
    "issueSalience": {
      "housing": 0.42153,
      "transport": 0.294622,
      "security": 0.452591,
      "healthcare": 0.519735,
      "climate": 0.401248,
      "industry": 0.323815,
      "education": 0.311697,
      "taxes": 0.473795
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.520355,
    "turnoutBase": 0.595119,
    "volatility": 0.506838
  },
  {
    "id": "ess_lib_right_15_24_lower_large_town_right",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000361,
    "position": {
      "econ": 0.355391,
      "culture": -0.441634,
      "authority": -0.174021
    },
    "space": {
      "econ": 0.355391,
      "culture": -0.441634,
      "authority": -0.174021,
      "establishment": 0.364671,
      "globalism": 0.422879,
      "green": 0.153942,
      "ukraine": 0.497013,
      "greenDeal": 0.524036
    },
    "axisSalience": {
      "econ": 0.569264,
      "culture": 0.605486,
      "authority": 0.442648
    },
    "issuePrefs": {
      "housing": -0.142469,
      "transport": 0.041392,
      "security": -0.34743,
      "healthcare": -0.291212,
      "climate": -0.257569,
      "industry": -0.041783,
      "education": -0.023756,
      "taxes": 0.202886
    },
    "issueSalience": {
      "housing": 0.359783,
      "transport": 0.303179,
      "security": 0.474561,
      "healthcare": 0.443079,
      "climate": 0.424238,
      "industry": 0.303398,
      "education": 0.293303,
      "taxes": 0.393616
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.454546,
    "turnoutBase": 0.522763,
    "volatility": 0.50718
  },
  {
    "id": "ess_lib_right_15_24_secondary_town_right",
    "name": "liberalni pravice - 15-24 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000356,
    "position": {
      "econ": 0.634681,
      "culture": -0.316185,
      "authority": -0.08515
    },
    "space": {
      "econ": 0.634681,
      "culture": -0.316185,
      "authority": -0.08515,
      "establishment": 0.262723,
      "globalism": 0.394689,
      "green": -0.100347,
      "ukraine": 0.405085,
      "greenDeal": 0.468286
    },
    "axisSalience": {
      "econ": 0.686566,
      "culture": 0.552798,
      "authority": 0.410654
    },
    "issuePrefs": {
      "housing": -0.311132,
      "transport": -0.054394,
      "security": -0.244776,
      "healthcare": -0.482265,
      "climate": -0.05887,
      "industry": 0.122651,
      "education": -0.12849,
      "taxes": 0.419028
    },
    "issueSalience": {
      "housing": 0.454234,
      "transport": 0.310461,
      "security": 0.417075,
      "healthcare": 0.550068,
      "climate": 0.312967,
      "industry": 0.348685,
      "education": 0.351955,
      "taxes": 0.514656
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.534699,
    "turnoutBase": 0.579195,
    "volatility": 0.476355
  },
  {
    "id": "ess_lib_right_55_plus_tertiary_town_center",
    "name": "liberalni pravice - 55+ - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000335,
    "position": {
      "econ": 0.384967,
      "culture": -0.207445,
      "authority": -0.006004
    },
    "space": {
      "econ": 0.384967,
      "culture": -0.207445,
      "authority": -0.006004,
      "establishment": -0.111998,
      "globalism": -0.097231,
      "green": -0.09915,
      "ukraine": -0.426773,
      "greenDeal": 0.106273
    },
    "axisSalience": {
      "econ": 0.581686,
      "culture": 0.507127,
      "authority": 0.382161
    },
    "issuePrefs": {
      "housing": -0.186838,
      "transport": -0.070569,
      "security": -0.010164,
      "healthcare": -0.293771,
      "climate": 0.041631,
      "industry": 0.114239,
      "education": 0.001605,
      "taxes": 0.252283
    },
    "issueSalience": {
      "housing": 0.384629,
      "transport": 0.319519,
      "security": 0.285692,
      "healthcare": 0.444512,
      "climate": 0.303313,
      "industry": 0.343974,
      "education": 0.280899,
      "taxes": 0.421278
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.585206,
    "turnoutBase": 0.72608,
    "volatility": 0.49008
  },
  {
    "id": "ess_lib_right_15_24_tertiary_large_town_right",
    "name": "liberalni pravice - 15-24 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00033,
    "position": {
      "econ": 0.47407,
      "culture": -0.290693,
      "authority": 0.380012
    },
    "space": {
      "econ": 0.47407,
      "culture": -0.290693,
      "authority": 0.380012,
      "establishment": 0.226615,
      "globalism": 0.447369,
      "green": 0.134361,
      "ukraine": 0.576125,
      "greenDeal": 0.555778
    },
    "axisSalience": {
      "econ": 0.61911,
      "culture": 0.542091,
      "authority": 0.516804
    },
    "issuePrefs": {
      "housing": -0.225856,
      "transport": -0.012509,
      "security": 0.027597,
      "healthcare": -0.364586,
      "climate": -0.252358,
      "industry": 0.032361,
      "education": -0.110456,
      "taxes": 0.306448
    },
    "issueSalience": {
      "housing": 0.406479,
      "transport": 0.287005,
      "security": 0.295455,
      "healthcare": 0.484168,
      "climate": 0.421321,
      "industry": 0.298122,
      "education": 0.341855,
      "taxes": 0.451611
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.644971,
    "turnoutBase": 0.637932,
    "volatility": 0.429605
  },
  {
    "id": "ess_lib_right_40_54_tertiary_town_center",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000317,
    "position": {
      "econ": 0.260292,
      "culture": -0.185639,
      "authority": -0.105082
    },
    "space": {
      "econ": 0.260292,
      "culture": -0.185639,
      "authority": -0.105082,
      "establishment": 0.221194,
      "globalism": 0.378799,
      "green": 0.005238,
      "ukraine": 0.306951,
      "greenDeal": 0.401952
    },
    "axisSalience": {
      "econ": 0.529323,
      "culture": 0.497968,
      "authority": 0.41783
    },
    "issuePrefs": {
      "housing": -0.120884,
      "transport": 0.013798,
      "security": -0.20987,
      "healthcare": -0.202262,
      "climate": -0.116318,
      "industry": -0.010149,
      "education": -0.080832,
      "taxes": 0.165134
    },
    "issueSalience": {
      "housing": 0.347695,
      "transport": 0.287727,
      "security": 0.397527,
      "healthcare": 0.393267,
      "climate": 0.345138,
      "industry": 0.285683,
      "education": 0.325266,
      "taxes": 0.372475
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.640423,
    "turnoutBase": 0.657742,
    "volatility": 0.550093
  },
  {
    "id": "ess_lib_right_15_24_secondary_rural_center",
    "name": "liberalni pravice - 15-24 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000295,
    "position": {
      "econ": 0.238137,
      "culture": -0.308199,
      "authority": -0.193687
    },
    "space": {
      "econ": 0.238137,
      "culture": -0.308199,
      "authority": -0.193687,
      "establishment": 0.188053,
      "globalism": 0.280588,
      "green": 0.057438,
      "ukraine": 0.31591,
      "greenDeal": 0.171945
    },
    "axisSalience": {
      "econ": 0.520018,
      "culture": 0.549444,
      "authority": 0.449727
    },
    "issuePrefs": {
      "housing": -0.093992,
      "transport": 0.029612,
      "security": -0.282161,
      "healthcare": -0.196115,
      "climate": -0.0895,
      "industry": 0.012801,
      "education": -0.011013,
      "taxes": 0.134475
    },
    "issueSalience": {
      "housing": 0.332635,
      "transport": 0.296583,
      "security": 0.43801,
      "healthcare": 0.389824,
      "climate": 0.33012,
      "industry": 0.287168,
      "education": 0.286167,
      "taxes": 0.355306
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.52188,
    "turnoutBase": 0.576582,
    "volatility": 0.583075
  },
  {
    "id": "ess_lib_right_40_54_lower_large_town_right",
    "name": "liberalni pravice - 40-54 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000295,
    "position": {
      "econ": 0.52292,
      "culture": -0.095647,
      "authority": 0.182888
    },
    "space": {
      "econ": 0.52292,
      "culture": -0.095647,
      "authority": 0.182888,
      "establishment": 0.572456,
      "globalism": 0.326154,
      "green": -0.004858,
      "ukraine": 0.804224,
      "greenDeal": 0.690208
    },
    "axisSalience": {
      "econ": 0.639627,
      "culture": 0.460172,
      "authority": 0.44584
    },
    "issuePrefs": {
      "housing": -0.276129,
      "transport": -0.074375,
      "security": -0.036436,
      "healthcare": -0.384154,
      "climate": -0.18976,
      "industry": 0.057677,
      "education": -0.163778,
      "taxes": 0.365025
    },
    "issueSalience": {
      "housing": 0.434632,
      "transport": 0.32165,
      "security": 0.300404,
      "healthcare": 0.495126,
      "climate": 0.386266,
      "industry": 0.312299,
      "education": 0.371716,
      "taxes": 0.484414
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.465366,
    "turnoutBase": 0.550036,
    "volatility": 0.508479
  },
  {
    "id": "ess_lib_right_40_54_tertiary_rural_center",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000291,
    "position": {
      "econ": 0.265645,
      "culture": -0.292047,
      "authority": -0.075745
    },
    "space": {
      "econ": 0.265645,
      "culture": -0.292047,
      "authority": -0.075745,
      "establishment": 0.135372,
      "globalism": 0.414778,
      "green": 0.234601,
      "ukraine": 0.46358,
      "greenDeal": 0.534717
    },
    "axisSalience": {
      "econ": 0.531571,
      "culture": 0.54266,
      "authority": 0.407268
    },
    "issuePrefs": {
      "housing": -0.111059,
      "transport": 0.035931,
      "security": -0.240482,
      "healthcare": -0.214628,
      "climate": -0.318634,
      "industry": -0.058704,
      "education": -0.05279,
      "taxes": 0.156219
    },
    "issueSalience": {
      "housing": 0.342193,
      "transport": 0.300121,
      "security": 0.41467,
      "healthcare": 0.400192,
      "climate": 0.458435,
      "industry": 0.312874,
      "education": 0.309562,
      "taxes": 0.367483
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.635716,
    "turnoutBase": 0.654738,
    "volatility": 0.557817
  },
  {
    "id": "ess_lib_right_55_plus_tertiary_large_town_center",
    "name": "liberalni pravice - 55+ - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000287,
    "position": {
      "econ": 0.387986,
      "culture": -0.25645,
      "authority": -0.184572
    },
    "space": {
      "econ": 0.387986,
      "culture": -0.25645,
      "authority": -0.184572,
      "establishment": 0.026678,
      "globalism": 0.23693,
      "green": 0.124848,
      "ukraine": 0.240211,
      "greenDeal": 0.557417
    },
    "axisSalience": {
      "econ": 0.582954,
      "culture": 0.527709,
      "authority": 0.446446
    },
    "issuePrefs": {
      "housing": -0.182619,
      "transport": -0.022404,
      "security": -0.248105,
      "healthcare": -0.299866,
      "climate": -0.245968,
      "industry": -0.001467,
      "education": -0.055484,
      "taxes": 0.248576
    },
    "issueSalience": {
      "housing": 0.382266,
      "transport": 0.292546,
      "security": 0.418939,
      "healthcare": 0.447925,
      "climate": 0.417742,
      "industry": 0.280822,
      "education": 0.311071,
      "taxes": 0.419203
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.61635,
    "turnoutBase": 0.730934,
    "volatility": 0.477599
  },
  {
    "id": "ess_lib_right_25_39_tertiary_rural_center",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000256,
    "position": {
      "econ": 0.398529,
      "culture": -0.169895,
      "authority": -0.068606
    },
    "space": {
      "econ": 0.398529,
      "culture": -0.169895,
      "authority": -0.068606,
      "establishment": 0.197242,
      "globalism": 0.108255,
      "green": 0.393231,
      "ukraine": 0.248184,
      "greenDeal": 0.50832
    },
    "axisSalience": {
      "econ": 0.587382,
      "culture": 0.491356,
      "authority": 0.404698
    },
    "issuePrefs": {
      "housing": -0.198804,
      "transport": -0.056061,
      "security": -0.129447,
      "healthcare": -0.300533,
      "climate": -0.425456,
      "industry": 0.030746,
      "education": -0.06,
      "taxes": 0.266554
    },
    "issueSalience": {
      "housing": 0.39133,
      "transport": 0.311394,
      "security": 0.35249,
      "healthcare": 0.448298,
      "climate": 0.518255,
      "industry": 0.297218,
      "education": 0.3136,
      "taxes": 0.42927
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.622275,
    "turnoutBase": 0.636903,
    "volatility": 0.532248
  },
  {
    "id": "ess_lib_right_40_54_tertiary_rural_unknown",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000239,
    "position": {
      "econ": 0.471998,
      "culture": -0.329994,
      "authority": 0.36007
    },
    "space": {
      "econ": 0.471998,
      "culture": -0.329994,
      "authority": 0.36007,
      "establishment": 0.383736,
      "globalism": 0.539442,
      "green": -0.097264,
      "ukraine": 0.549297,
      "greenDeal": 0.723546
    },
    "axisSalience": {
      "econ": 0.618239,
      "culture": 0.558597,
      "authority": 0.509625
    },
    "issuePrefs": {
      "housing": -0.219999,
      "transport": 0.006132,
      "security": -0.010198,
      "healthcare": -0.366238,
      "climate": -0.132563,
      "industry": -0.015931,
      "education": -0.116459,
      "taxes": 0.300239
    },
    "issueSalience": {
      "housing": 0.4032,
      "transport": 0.283434,
      "security": 0.285711,
      "healthcare": 0.485093,
      "climate": 0.354235,
      "industry": 0.288921,
      "education": 0.345217,
      "taxes": 0.448134
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.663065,
    "turnoutBase": 0.663431,
    "volatility": 0.435464
  },
  {
    "id": "ess_lib_right_55_plus_tertiary_rural_center",
    "name": "liberalni pravice - 55+ - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000239,
    "position": {
      "econ": 0.272181,
      "culture": -0.195385,
      "authority": -0.039478
    },
    "space": {
      "econ": 0.272181,
      "culture": -0.195385,
      "authority": -0.039478,
      "establishment": 0.401849,
      "globalism": 0.401977,
      "green": 0.24277,
      "ukraine": 0.627207,
      "greenDeal": 0.471457
    },
    "axisSalience": {
      "econ": 0.534316,
      "culture": 0.502062,
      "authority": 0.394212
    },
    "issuePrefs": {
      "housing": -0.126253,
      "transport": 0.015361,
      "security": -0.201717,
      "healthcare": -0.211601,
      "climate": -0.306802,
      "industry": -0.023116,
      "education": -0.085374,
      "taxes": 0.172524
    },
    "issueSalience": {
      "housing": 0.350702,
      "transport": 0.288602,
      "security": 0.392961,
      "healthcare": 0.398496,
      "climate": 0.451809,
      "industry": 0.292945,
      "education": 0.327809,
      "taxes": 0.376613
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.656267,
    "turnoutBase": 0.744065,
    "volatility": 0.443834
  },
  {
    "id": "ess_lib_right_40_54_tertiary_large_town_center",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00023,
    "position": {
      "econ": 0.263944,
      "culture": -0.228754,
      "authority": -0.006387
    },
    "space": {
      "econ": 0.263944,
      "culture": -0.228754,
      "authority": -0.006387,
      "establishment": 0.022197,
      "globalism": 0.25467,
      "green": 0.02382,
      "ukraine": 0.411673,
      "greenDeal": 0.198945
    },
    "axisSalience": {
      "econ": 0.530856,
      "culture": 0.516077,
      "authority": 0.382299
    },
    "issuePrefs": {
      "housing": -0.117719,
      "transport": 0.00575,
      "security": -0.146786,
      "healthcare": -0.20834,
      "climate": -0.072855,
      "industry": 0.032492,
      "education": -0.03931,
      "taxes": 0.162589
    },
    "issueSalience": {
      "housing": 0.345922,
      "transport": 0.28322,
      "security": 0.3622,
      "healthcare": 0.39667,
      "climate": 0.320799,
      "industry": 0.298195,
      "education": 0.302014,
      "taxes": 0.37105
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.617056,
    "turnoutBase": 0.650777,
    "volatility": 0.568002
  },
  {
    "id": "ess_lib_right_15_24_lower_large_town_unknown",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000222,
    "position": {
      "econ": 0.067464,
      "culture": -0.408245,
      "authority": 0.007909
    },
    "space": {
      "econ": 0.067464,
      "culture": -0.408245,
      "authority": 0.007909,
      "establishment": 0.160755,
      "globalism": 0.30923,
      "green": 0.766408,
      "ukraine": 0.096235,
      "greenDeal": 0.716444
    },
    "axisSalience": {
      "econ": 0.448335,
      "culture": 0.591463,
      "authority": 0.382847
    },
    "issuePrefs": {
      "housing": 0.011884,
      "transport": 0.093726,
      "security": -0.172765,
      "healthcare": -0.081234,
      "climate": -0.752418,
      "industry": -0.214397,
      "education": 0.058664,
      "taxes": -0.000415
    },
    "issueSalience": {
      "housing": 0.286655,
      "transport": 0.332486,
      "security": 0.376748,
      "healthcare": 0.325491,
      "climate": 0.701354,
      "industry": 0.400063,
      "education": 0.312852,
      "taxes": 0.280233
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.431414,
    "turnoutBase": 0.515626,
    "volatility": 0.525532
  },
  {
    "id": "ess_lib_right_40_54_secondary_town_unknown",
    "name": "liberalni pravice - 40-54 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000217,
    "position": {
      "econ": 0.309298,
      "culture": -0.307887,
      "authority": 0.178268
    },
    "space": {
      "econ": 0.309298,
      "culture": -0.307887,
      "authority": 0.178268,
      "establishment": 0.020588,
      "globalism": 0.217058,
      "green": -0.146776,
      "ukraine": 0.228391,
      "greenDeal": 0.485054
    },
    "axisSalience": {
      "econ": 0.549905,
      "culture": 0.549312,
      "authority": 0.444176
    },
    "issuePrefs": {
      "housing": -0.133167,
      "transport": 0.004142,
      "security": -0.033024,
      "healthcare": -0.247325,
      "climate": -0.030136,
      "industry": -0.029555,
      "education": -0.014224,
      "taxes": 0.185748
    },
    "issueSalience": {
      "housing": 0.354574,
      "transport": 0.28232,
      "security": 0.298493,
      "healthcare": 0.418502,
      "climate": 0.296876,
      "industry": 0.296551,
      "education": 0.287965,
      "taxes": 0.384019
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.504671,
    "turnoutBase": 0.590721,
    "volatility": 0.518147
  },
  {
    "id": "ess_lib_right_55_plus_lower_large_town_center",
    "name": "liberalni pravice - 55+ - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000217,
    "position": {
      "econ": 0.545377,
      "culture": -0.105451,
      "authority": -0.214138
    },
    "space": {
      "econ": 0.545377,
      "culture": -0.105451,
      "authority": -0.214138,
      "establishment": 0.209648,
      "globalism": -0.069528,
      "green": 0.311867,
      "ukraine": 0.450676,
      "greenDeal": 0.917397
    },
    "axisSalience": {
      "econ": 0.649058,
      "culture": 0.46429,
      "authority": 0.45709
    },
    "issuePrefs": {
      "housing": -0.287303,
      "transport": -0.125706,
      "security": -0.185831,
      "healthcare": -0.401108,
      "climate": -0.481415,
      "industry": 0.011717,
      "education": -0.078686,
      "taxes": 0.380017
    },
    "issueSalience": {
      "housing": 0.44089,
      "transport": 0.350396,
      "security": 0.384065,
      "healthcare": 0.50462,
      "climate": 0.549593,
      "industry": 0.286561,
      "education": 0.324064,
      "taxes": 0.49281
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.4126,
    "turnoutBase": 0.617338,
    "volatility": 0.551132
  },
  {
    "id": "ess_lib_right_55_plus_secondary_rural_unknown",
    "name": "liberalni pravice - 55+ - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000217,
    "position": {
      "econ": 0.918083,
      "culture": -0.071626,
      "authority": 0.18725
    },
    "space": {
      "econ": 0.918083,
      "culture": -0.071626,
      "authority": 0.18725,
      "establishment": -0.182624,
      "globalism": -0.149114,
      "green": 0.445333,
      "ukraine": 0.030144,
      "greenDeal": 0.255713
    },
    "axisSalience": {
      "econ": 0.805595,
      "culture": 0.450083,
      "authority": 0.44741
    },
    "issuePrefs": {
      "housing": -0.49635,
      "transport": -0.234522,
      "security": 0.120468,
      "healthcare": -0.66675,
      "climate": -0.392239,
      "industry": 0.348054,
      "education": -0.162466,
      "taxes": 0.652424
    },
    "issueSalience": {
      "housing": 0.557956,
      "transport": 0.411332,
      "security": 0.347462,
      "healthcare": 0.65338,
      "climate": 0.499654,
      "industry": 0.47491,
      "education": 0.370981,
      "taxes": 0.645358
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.466443,
    "turnoutBase": 0.663608,
    "volatility": 0.446436
  },
  {
    "id": "ess_lib_right_15_24_lower_town_unknown",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000196,
    "position": {
      "econ": 0.41357,
      "culture": -0.757175,
      "authority": 0.072893
    },
    "space": {
      "econ": 0.41357,
      "culture": -0.757175,
      "authority": 0.072893,
      "establishment": -0.057402,
      "globalism": 0.437255,
      "green": -0.141318,
      "ukraine": 0.434988,
      "greenDeal": 0.324166
    },
    "axisSalience": {
      "econ": 0.593699,
      "culture": 0.738013,
      "authority": 0.406242
    },
    "issuePrefs": {
      "housing": -0.136603,
      "transport": 0.08537,
      "security": -0.28032,
      "healthcare": -0.358345,
      "climate": 0.010982,
      "industry": -0.023849,
      "education": 0.069558,
      "taxes": 0.20691
    },
    "issueSalience": {
      "housing": 0.356497,
      "transport": 0.327807,
      "security": 0.436979,
      "healthcare": 0.480673,
      "climate": 0.28615,
      "industry": 0.293355,
      "education": 0.318953,
      "taxes": 0.395869
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.421643,
    "turnoutBase": 0.507991,
    "volatility": 0.545166
  },
  {
    "id": "ess_lib_right_15_24_secondary_town_unknown",
    "name": "liberalni pravice - 15-24 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000191,
    "position": {
      "econ": 0.061121,
      "culture": -0.526013,
      "authority": 0.267122
    },
    "space": {
      "econ": 0.061121,
      "culture": -0.526013,
      "authority": 0.267122,
      "establishment": 0.276268,
      "globalism": 0.633355,
      "green": 0.234699,
      "ukraine": 0.348811,
      "greenDeal": 0.766829
    },
    "axisSalience": {
      "econ": 0.445671,
      "culture": 0.640925,
      "authority": 0.476164
    },
    "issuePrefs": {
      "housing": 0.029505,
      "transport": 0.155405,
      "security": -0.123577,
      "healthcare": -0.086088,
      "climate": -0.383695,
      "industry": -0.250605,
      "education": 0.030097,
      "taxes": -0.019114
    },
    "issueSalience": {
      "housing": 0.296523,
      "transport": 0.367027,
      "security": 0.349203,
      "healthcare": 0.328209,
      "climate": 0.494869,
      "industry": 0.420339,
      "education": 0.296854,
      "taxes": 0.290704
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.550103,
    "turnoutBase": 0.579669,
    "volatility": 0.475136
  },
  {
    "id": "ess_lib_right_55_plus_lower_rural_center",
    "name": "liberalni pravice - 55+ - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000191,
    "position": {
      "econ": 0.227639,
      "culture": -0.257666,
      "authority": 0.205974
    },
    "space": {
      "econ": 0.227639,
      "culture": -0.257666,
      "authority": 0.205974,
      "establishment": 0.111231,
      "globalism": -0.581016,
      "green": 0.484354,
      "ukraine": 0.208089,
      "greenDeal": 0.232167
    },
    "axisSalience": {
      "econ": 0.515608,
      "culture": 0.52822,
      "authority": 0.454151
    },
    "issuePrefs": {
      "housing": -0.094281,
      "transport": -0.080252,
      "security": 0.143493,
      "healthcare": -0.184513,
      "climate": -0.413741,
      "industry": 0.002614,
      "education": 0.163373,
      "taxes": 0.13298
    },
    "issueSalience": {
      "housing": 0.332798,
      "transport": 0.324941,
      "security": 0.360356,
      "healthcare": 0.383327,
      "climate": 0.511695,
      "industry": 0.281464,
      "education": 0.371489,
      "taxes": 0.354469
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.374038,
    "turnoutBase": 0.613893,
    "volatility": 0.559989
  },
  {
    "id": "ess_lib_right_15_24_lower_rural_unknown",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000182,
    "position": {
      "econ": 0.082511,
      "culture": -0.474381,
      "authority": -0.050074
    },
    "space": {
      "econ": 0.082511,
      "culture": -0.474381,
      "authority": -0.050074,
      "establishment": 0.41115,
      "globalism": 0.460143,
      "green": 0.5173,
      "ukraine": 0.707353,
      "greenDeal": 0.844589
    },
    "axisSalience": {
      "econ": 0.454654,
      "culture": 0.61924,
      "authority": 0.398027
    },
    "issuePrefs": {
      "housing": 0.011545,
      "transport": 0.119978,
      "security": -0.303287,
      "healthcare": -0.097358,
      "climate": -0.608941,
      "industry": -0.250135,
      "education": 0.044999,
      "taxes": 0.002482
    },
    "issueSalience": {
      "housing": 0.286465,
      "transport": 0.347188,
      "security": 0.449841,
      "healthcare": 0.334521,
      "climate": 0.621007,
      "industry": 0.420076,
      "education": 0.3052,
      "taxes": 0.28139
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.460501,
    "turnoutBase": 0.52439,
    "volatility": 0.502997
  },
  {
    "id": "ess_lib_right_15_24_secondary_large_town_center",
    "name": "liberalni pravice - 15-24 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000182,
    "position": {
      "econ": 0.23222,
      "culture": -0.385128,
      "authority": 0.084638
    },
    "space": {
      "econ": 0.23222,
      "culture": -0.385128,
      "authority": 0.084638,
      "establishment": 0.285908,
      "globalism": 0.516764,
      "green": 0.296117,
      "ukraine": 0.272673,
      "greenDeal": 0.492069
    },
    "axisSalience": {
      "econ": 0.517533,
      "culture": 0.581754,
      "authority": 0.41047
    },
    "issuePrefs": {
      "housing": -0.081506,
      "transport": 0.07328,
      "security": -0.170191,
      "healthcare": -0.198009,
      "climate": -0.350984,
      "industry": -0.080598,
      "education": -0.034626,
      "taxes": 0.120983
    },
    "issueSalience": {
      "housing": 0.325643,
      "transport": 0.321037,
      "security": 0.375307,
      "healthcare": 0.390885,
      "climate": 0.476551,
      "industry": 0.325135,
      "education": 0.299391,
      "taxes": 0.347751
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.543878,
    "turnoutBase": 0.580007,
    "volatility": 0.574268
  },
  {
    "id": "ess_lib_right_15_24_secondary_large_town_unknown",
    "name": "liberalni pravice - 15-24 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000182,
    "position": {
      "econ": 0.541537,
      "culture": -0.424716,
      "authority": 0.215057
    },
    "space": {
      "econ": 0.541537,
      "culture": -0.424716,
      "authority": 0.215057,
      "establishment": 0.315881,
      "globalism": 0.556384,
      "green": 0.308391,
      "ukraine": 0.395738,
      "greenDeal": 0.312699
    },
    "axisSalience": {
      "econ": 0.647446,
      "culture": 0.598381,
      "authority": 0.457421
    },
    "issuePrefs": {
      "housing": -0.24688,
      "transport": 0.007831,
      "security": -0.117393,
      "healthcare": -0.423884,
      "climate": -0.309597,
      "industry": 0.097611,
      "education": -0.103723,
      "taxes": 0.338941
    },
    "issueSalience": {
      "housing": 0.418253,
      "transport": 0.284385,
      "security": 0.34574,
      "healthcare": 0.517375,
      "climate": 0.453374,
      "industry": 0.334662,
      "education": 0.338085,
      "taxes": 0.469807
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.548653,
    "turnoutBase": 0.581056,
    "volatility": 0.471571
  },
  {
    "id": "ess_lib_right_15_24_secondary_town_center",
    "name": "liberalni pravice - 15-24 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000169,
    "position": {
      "econ": 0.17181,
      "culture": -0.18029,
      "authority": -0.016106
    },
    "space": {
      "econ": 0.17181,
      "culture": -0.18029,
      "authority": -0.016106,
      "establishment": 0.143763,
      "globalism": 0.291849,
      "green": 0.072698,
      "ukraine": 0.233773,
      "greenDeal": 0.312175
    },
    "axisSalience": {
      "econ": 0.49216,
      "culture": 0.495722,
      "authority": 0.385798
    },
    "issuePrefs": {
      "housing": -0.072861,
      "transport": 0.024522,
      "security": -0.131702,
      "healthcare": -0.138126,
      "climate": -0.139752,
      "industry": -0.028342,
      "education": -0.04234,
      "taxes": 0.102068
    },
    "issueSalience": {
      "housing": 0.320802,
      "transport": 0.293732,
      "security": 0.353753,
      "healthcare": 0.357351,
      "climate": 0.358261,
      "industry": 0.295871,
      "education": 0.30371,
      "taxes": 0.337158
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.519012,
    "turnoutBase": 0.575032,
    "volatility": 0.587061
  },
  {
    "id": "ess_lib_right_15_24_tertiary_large_town_center",
    "name": "liberalni pravice - 15-24 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000169,
    "position": {
      "econ": 0.327549,
      "culture": -0.362957,
      "authority": -0.053383
    },
    "space": {
      "econ": 0.327549,
      "culture": -0.362957,
      "authority": -0.053383,
      "establishment": 0.321451,
      "globalism": 0.315075,
      "green": 0.214303,
      "ukraine": 0.505522,
      "greenDeal": 0.384634
    },
    "axisSalience": {
      "econ": 0.55757,
      "culture": 0.572442,
      "authority": 0.399218
    },
    "issuePrefs": {
      "housing": -0.136597,
      "transport": 0.021254,
      "security": -0.231881,
      "healthcare": -0.264871,
      "climate": -0.261995,
      "industry": -0.006972,
      "education": -0.020893,
      "taxes": 0.19228
    },
    "issueSalience": {
      "housing": 0.356494,
      "transport": 0.291902,
      "security": 0.409853,
      "healthcare": 0.428328,
      "climate": 0.426717,
      "industry": 0.283904,
      "education": 0.2917,
      "taxes": 0.387677
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.644621,
    "turnoutBase": 0.641251,
    "volatility": 0.521069
  },
  {
    "id": "ess_lib_right_40_54_tertiary_rural_left",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000169,
    "position": {
      "econ": 0.241919,
      "culture": -0.233345,
      "authority": 0.120658
    },
    "space": {
      "econ": 0.241919,
      "culture": -0.233345,
      "authority": 0.120658,
      "establishment": 0.327698,
      "globalism": 0.432969,
      "green": 0.203872,
      "ukraine": 0.265661,
      "greenDeal": 0.696361
    },
    "axisSalience": {
      "econ": 0.521606,
      "culture": 0.518005,
      "authority": 0.423437
    },
    "issuePrefs": {
      "housing": -0.105054,
      "transport": 0.033479,
      "security": -0.089716,
      "healthcare": -0.192849,
      "climate": -0.341769,
      "industry": -0.097846,
      "education": -0.071643,
      "taxes": 0.14618
    },
    "issueSalience": {
      "housing": 0.33883,
      "transport": 0.298748,
      "security": 0.330241,
      "healthcare": 0.387996,
      "climate": 0.471391,
      "industry": 0.334794,
      "education": 0.32012,
      "taxes": 0.361861
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.652194,
    "turnoutBase": 0.661469,
    "volatility": 0.440507
  },
  {
    "id": "ess_lib_right_15_24_secondary_large_town_left",
    "name": "liberalni pravice - 15-24 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000148,
    "position": {
      "econ": 0.049769,
      "culture": -0.927326,
      "authority": -0.26285
    },
    "space": {
      "econ": 0.049769,
      "culture": -0.927326,
      "authority": -0.26285,
      "establishment": 0.144107,
      "globalism": 0.508579,
      "green": 0.460607,
      "ukraine": 0.450578,
      "greenDeal": 0.754748
    },
    "axisSalience": {
      "econ": 0.440903,
      "culture": 0.809477,
      "authority": 0.474626
    },
    "issuePrefs": {
      "housing": 0.083906,
      "transport": 0.215506,
      "security": -0.550209,
      "healthcare": -0.110019,
      "climate": -0.542967,
      "industry": -0.325165,
      "education": 0.200732,
      "taxes": -0.075446
    },
    "issueSalience": {
      "housing": 0.326988,
      "transport": 0.400683,
      "security": 0.588117,
      "healthcare": 0.341611,
      "climate": 0.584061,
      "industry": 0.462092,
      "education": 0.39241,
      "taxes": 0.32225
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.532043,
    "turnoutBase": 0.575044,
    "volatility": 0.48703
  },
  {
    "id": "ess_lib_right_15_24_tertiary_rural_right",
    "name": "liberalni pravice - 15-24 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000148,
    "position": {
      "econ": 0.778268,
      "culture": -0.36296,
      "authority": -0.13846
    },
    "space": {
      "econ": 0.778268,
      "culture": -0.36296,
      "authority": -0.13846,
      "establishment": -0.076566,
      "globalism": 0.256998,
      "green": 0.534191,
      "ukraine": 0.496498,
      "greenDeal": 0.278727
    },
    "axisSalience": {
      "econ": 0.746873,
      "culture": 0.572443,
      "authority": 0.429845
    },
    "issuePrefs": {
      "housing": -0.384492,
      "transport": -0.098394,
      "security": -0.273453,
      "healthcare": -0.58939,
      "climate": -0.462661,
      "industry": 0.225776,
      "education": -0.116288,
      "taxes": 0.516798
    },
    "issueSalience": {
      "housing": 0.495316,
      "transport": 0.335101,
      "security": 0.433134,
      "healthcare": 0.610058,
      "climate": 0.53909,
      "industry": 0.406435,
      "education": 0.345121,
      "taxes": 0.569407
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.609295,
    "turnoutBase": 0.62732,
    "volatility": 0.456891
  },
  {
    "id": "ess_lib_right_15_24_tertiary_town_unknown",
    "name": "liberalni pravice - 15-24 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000148,
    "position": {
      "econ": 0.975496,
      "culture": -0.209676,
      "authority": 0.092274
    },
    "space": {
      "econ": 0.975496,
      "culture": -0.209676,
      "authority": 0.092274,
      "establishment": 0.132125,
      "globalism": 0.070554,
      "green": 0.507278,
      "ukraine": 0.530862,
      "greenDeal": 0.253318
    },
    "axisSalience": {
      "econ": 0.829708,
      "culture": 0.508064,
      "authority": 0.413219
    },
    "issuePrefs": {
      "housing": -0.511362,
      "transport": -0.197666,
      "security": -0.056668,
      "healthcare": -0.719131,
      "climate": -0.436169,
      "industry": 0.35019,
      "education": -0.176254,
      "taxes": 0.677196
    },
    "issueSalience": {
      "housing": 0.566363,
      "transport": 0.390693,
      "security": 0.311734,
      "healthcare": 0.682713,
      "climate": 0.524255,
      "industry": 0.476107,
      "education": 0.378703,
      "taxes": 0.65923
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.614803,
    "turnoutBase": 0.634624,
    "volatility": 0.438109
  },
  {
    "id": "ess_lib_right_15_24_secondary_rural_unknown",
    "name": "liberalni pravice - 15-24 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000126,
    "position": {
      "econ": 0.220515,
      "culture": -0.255168,
      "authority": 0.117833
    },
    "space": {
      "econ": 0.220515,
      "culture": -0.255168,
      "authority": 0.117833,
      "establishment": 0.326621,
      "globalism": 0.477135,
      "green": 0.212191,
      "ukraine": 0.465178,
      "greenDeal": 0.664564
    },
    "axisSalience": {
      "econ": 0.512616,
      "culture": 0.527171,
      "authority": 0.42242
    },
    "issuePrefs": {
      "housing": -0.090663,
      "transport": 0.048058,
      "security": -0.121489,
      "healthcare": -0.179184,
      "climate": -0.338856,
      "industry": -0.103989,
      "education": -0.068584,
      "taxes": 0.128151
    },
    "issueSalience": {
      "housing": 0.330771,
      "transport": 0.306912,
      "security": 0.348034,
      "healthcare": 0.380343,
      "climate": 0.469759,
      "industry": 0.338234,
      "education": 0.318407,
      "taxes": 0.351764
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.544758,
    "turnoutBase": 0.581432,
    "volatility": 0.470604
  },
  {
    "id": "ess_lib_right_55_plus_secondary_town_unknown",
    "name": "liberalni pravice - 55+ - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000122,
    "position": {
      "econ": 0.515779,
      "culture": -0.261993,
      "authority": 0.111474
    },
    "space": {
      "econ": 0.515779,
      "culture": -0.261993,
      "authority": 0.111474,
      "establishment": -0.3648,
      "globalism": 0.461105,
      "green": 0.552073,
      "ukraine": 0.089011,
      "greenDeal": 0.331981
    },
    "axisSalience": {
      "econ": 0.636627,
      "culture": 0.530037,
      "authority": 0.42013
    },
    "issuePrefs": {
      "housing": -0.252239,
      "transport": -0.026453,
      "security": -0.094364,
      "healthcare": -0.39232,
      "climate": -0.490447,
      "industry": 0.110424,
      "education": -0.133532,
      "taxes": 0.339921
    },
    "issueSalience": {
      "housing": 0.421254,
      "transport": 0.294814,
      "security": 0.332844,
      "healthcare": 0.499699,
      "climate": 0.55465,
      "industry": 0.341837,
      "education": 0.354778,
      "taxes": 0.470356
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.488482,
    "turnoutBase": 0.657232,
    "volatility": 0.462832
  },
  {
    "id": "ess_lib_right_25_39_secondary_large_town_left",
    "name": "liberalni pravice - 25-39 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000117,
    "position": {
      "econ": 0.108602,
      "culture": -0.360452,
      "authority": -0.117909
    },
    "space": {
      "econ": 0.108602,
      "culture": -0.360452,
      "authority": -0.117909,
      "establishment": -0.18856,
      "globalism": 0.188918,
      "green": 0.173932,
      "ukraine": 0.35839,
      "greenDeal": 0.657182
    },
    "axisSalience": {
      "econ": 0.465613,
      "culture": 0.57139,
      "authority": 0.422447
    },
    "issuePrefs": {
      "housing": -0.016477,
      "transport": 0.060401,
      "security": -0.236707,
      "healthcare": -0.107029,
      "climate": -0.309242,
      "industry": -0.172648,
      "education": 0.058532,
      "taxes": 0.034939
    },
    "issueSalience": {
      "housing": 0.289227,
      "transport": 0.313825,
      "security": 0.412556,
      "healthcare": 0.339936,
      "climate": 0.453175,
      "industry": 0.376683,
      "education": 0.312778,
      "taxes": 0.299566
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.48625,
    "turnoutBase": 0.5634,
    "volatility": 0.51697
  },
  {
    "id": "ess_lib_right_25_39_lower_town_right",
    "name": "liberalni pravice - 25-39 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000109,
    "position": {
      "econ": 0.604708,
      "culture": -0.137387,
      "authority": 0.304683
    },
    "space": {
      "econ": 0.604708,
      "culture": -0.137387,
      "authority": 0.304683,
      "establishment": 0.276583,
      "globalism": 0.267088,
      "green": 0.403908,
      "ukraine": 0.476651,
      "greenDeal": 0.948374
    },
    "axisSalience": {
      "econ": 0.673978,
      "culture": 0.477703,
      "authority": 0.489686
    },
    "issuePrefs": {
      "housing": -0.316103,
      "transport": -0.094397,
      "security": 0.064227,
      "healthcare": -0.446381,
      "climate": -0.556358,
      "industry": 0.025826,
      "education": -0.155804,
      "taxes": 0.418904
    },
    "issueSalience": {
      "housing": 0.457018,
      "transport": 0.332862,
      "security": 0.315967,
      "healthcare": 0.529973,
      "climate": 0.591561,
      "industry": 0.294463,
      "education": 0.36725,
      "taxes": 0.514586
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.438152,
    "turnoutBase": 0.51968,
    "volatility": 0.515108
  },
  {
    "id": "ess_lib_right_55_plus_tertiary_town_unknown",
    "name": "liberalni pravice - 55+ - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000109,
    "position": {
      "econ": 0.51156,
      "culture": -0.066875,
      "authority": 0.334422
    },
    "space": {
      "econ": 0.51156,
      "culture": -0.066875,
      "authority": 0.334422,
      "establishment": 0.386676,
      "globalism": 0.27089,
      "green": 0.074137,
      "ukraine": 0.353068,
      "greenDeal": 0.237892
    },
    "axisSalience": {
      "econ": 0.634855,
      "culture": 0.448087,
      "authority": 0.500392
    },
    "issuePrefs": {
      "housing": -0.273333,
      "transport": -0.083346,
      "security": 0.111611,
      "healthcare": -0.373673,
      "climate": -0.119988,
      "industry": 0.166186,
      "education": -0.158964,
      "taxes": 0.360298
    },
    "issueSalience": {
      "housing": 0.433066,
      "transport": 0.326674,
      "security": 0.342502,
      "healthcare": 0.489257,
      "climate": 0.347193,
      "industry": 0.373064,
      "education": 0.36902,
      "taxes": 0.481767
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.647188,
    "turnoutBase": 0.743534,
    "volatility": 0.345199
  },
  {
    "id": "ess_lib_right_40_54_tertiary_town_unknown",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.0001,
    "position": {
      "econ": 0.962454,
      "culture": -0.217258,
      "authority": 0.176762
    },
    "space": {
      "econ": 0.962454,
      "culture": -0.217258,
      "authority": 0.176762,
      "establishment": -0.207307,
      "globalism": -0.186373,
      "green": 0.379797,
      "ukraine": -0.534229,
      "greenDeal": -0.073666
    },
    "axisSalience": {
      "econ": 0.824231,
      "culture": 0.511249,
      "authority": 0.443634
    },
    "issuePrefs": {
      "housing": -0.503279,
      "transport": -0.223872,
      "security": 0.125045,
      "healthcare": -0.710348,
      "climate": -0.252828,
      "industry": 0.421302,
      "education": -0.113947,
      "taxes": 0.666896
    },
    "issueSalience": {
      "housing": 0.561836,
      "transport": 0.405368,
      "security": 0.350025,
      "healthcare": 0.677795,
      "climate": 0.421583,
      "industry": 0.515929,
      "education": 0.34381,
      "taxes": 0.653462
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.572233,
    "turnoutBase": 0.642744,
    "volatility": 0.488658
  },
  {
    "id": "ess_lib_right_55_plus_lower_rural_unknown",
    "name": "liberalni pravice - 55+ - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.0001,
    "position": {
      "econ": 0.490953,
      "culture": -0.105182,
      "authority": 0.550182
    },
    "space": {
      "econ": 0.490953,
      "culture": -0.105182,
      "authority": 0.550182,
      "establishment": 0.1619,
      "globalism": 0.119116,
      "green": -0.391438,
      "ukraine": -0.133007,
      "greenDeal": -0.147125
    },
    "axisSalience": {
      "econ": 0.6262,
      "culture": 0.464176,
      "authority": 0.578066
    },
    "issuePrefs": {
      "housing": -0.257402,
      "transport": -0.089512,
      "security": 0.300862,
      "healthcare": -0.3619,
      "climate": 0.323031,
      "industry": 0.242215,
      "education": -0.107221,
      "taxes": 0.340864
    },
    "issueSalience": {
      "housing": 0.424145,
      "transport": 0.330126,
      "security": 0.448483,
      "healthcare": 0.482664,
      "climate": 0.460897,
      "industry": 0.415641,
      "education": 0.340044,
      "taxes": 0.470884
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.420099,
    "turnoutBase": 0.615667,
    "volatility": 0.455429
  },
  {
    "id": "ess_lib_right_25_39_tertiary_town_unknown",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 9.6e-05,
    "position": {
      "econ": 0.851764,
      "culture": -0.463471,
      "authority": -0.22412
    },
    "space": {
      "econ": 0.851764,
      "culture": -0.463471,
      "authority": -0.22412,
      "establishment": 0.156188,
      "globalism": 0.626015,
      "green": 0.529725,
      "ukraine": 0.888625,
      "greenDeal": 0.378952
    },
    "axisSalience": {
      "econ": 0.777741,
      "culture": 0.614658,
      "authority": 0.460683
    },
    "issuePrefs": {
      "housing": -0.412853,
      "transport": -0.054394,
      "security": -0.452499,
      "healthcare": -0.650347,
      "climate": -0.487508,
      "industry": 0.217438,
      "education": -0.179932,
      "taxes": 0.557653
    },
    "issueSalience": {
      "housing": 0.511198,
      "transport": 0.310461,
      "security": 0.533399,
      "healthcare": 0.644195,
      "climate": 0.553005,
      "industry": 0.401765,
      "education": 0.380762,
      "taxes": 0.592286
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.650056,
    "turnoutBase": 0.635467,
    "volatility": 0.435943
  },
  {
    "id": "ess_lib_right_15_24_secondary_rural_left",
    "name": "liberalni pravice - 15-24 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 9.1e-05,
    "position": {
      "econ": 0.262536,
      "culture": -0.118542,
      "authority": 0.193347
    },
    "space": {
      "econ": 0.262536,
      "culture": -0.118542,
      "authority": 0.193347,
      "establishment": 0.274003,
      "globalism": 0.222881,
      "green": 0.21743,
      "ukraine": 0.17011,
      "greenDeal": 0.30351
    },
    "axisSalience": {
      "econ": 0.530265,
      "culture": 0.469788,
      "authority": 0.449605
    },
    "issuePrefs": {
      "housing": -0.130169,
      "transport": -0.017551,
      "security": 0.032956,
      "healthcare": -0.198509,
      "climate": -0.241533,
      "industry": 0.026586,
      "education": -0.070553,
      "taxes": 0.174801
    },
    "issueSalience": {
      "housing": 0.352895,
      "transport": 0.289828,
      "security": 0.298455,
      "healthcare": 0.391165,
      "climate": 0.415258,
      "industry": 0.294888,
      "education": 0.319509,
      "taxes": 0.377888
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.525293,
    "turnoutBase": 0.57959,
    "volatility": 0.47534
  },
  {
    "id": "ess_lib_right_25_39_secondary_town_unknown",
    "name": "liberalni pravice - 25-39 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 9.1e-05,
    "position": {
      "econ": 0.124399,
      "culture": -0.316944,
      "authority": -0.026389
    },
    "space": {
      "econ": 0.124399,
      "culture": -0.316944,
      "authority": -0.026389,
      "establishment": -0.356116,
      "globalism": -0.554748,
      "green": 0.223655,
      "ukraine": -0.425767,
      "greenDeal": 0.16004
    },
    "axisSalience": {
      "econ": 0.472248,
      "culture": 0.553117,
      "authority": 0.3895
    },
    "issuePrefs": {
      "housing": -0.030386,
      "transport": -0.04062,
      "security": 0.028811,
      "healthcare": -0.114923,
      "climate": -0.205843,
      "industry": -0.038236,
      "education": 0.203119,
      "taxes": 0.051534
    },
    "issueSalience": {
      "housing": 0.297016,
      "transport": 0.302747,
      "security": 0.296134,
      "healthcare": 0.344357,
      "climate": 0.395272,
      "industry": 0.301412,
      "education": 0.393747,
      "taxes": 0.308859
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.428226,
    "turnoutBase": 0.557536,
    "volatility": 0.53205
  },
  {
    "id": "ess_lib_right_25_39_tertiary_large_town_unknown",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 9.1e-05,
    "position": {
      "econ": 0.972169,
      "culture": -0.187505,
      "authority": -0.03865
    },
    "space": {
      "econ": 0.972169,
      "culture": -0.187505,
      "authority": -0.03865,
      "establishment": 0.066025,
      "globalism": 0.428045,
      "green": 0.760957,
      "ukraine": 0.973127,
      "greenDeal": 0.96054
    },
    "axisSalience": {
      "econ": 0.828311,
      "culture": 0.498752,
      "authority": 0.393914
    },
    "issuePrefs": {
      "housing": -0.512192,
      "transport": -0.157926,
      "security": -0.231362,
      "healthcare": -0.714962,
      "climate": -0.81684,
      "industry": 0.182917,
      "education": -0.261864,
      "taxes": 0.677461
    },
    "issueSalience": {
      "housing": 0.566828,
      "transport": 0.368438,
      "security": 0.409563,
      "healthcare": 0.680379,
      "climate": 0.737431,
      "industry": 0.382434,
      "education": 0.426644,
      "taxes": 0.659378
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.630965,
    "turnoutBase": 0.632311,
    "volatility": 0.444058
  },
  {
    "id": "ess_lib_right_25_39_secondary_rural_unknown",
    "name": "liberalni pravice - 25-39 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 8.3e-05,
    "position": {
      "econ": 0.903651,
      "culture": -0.047439,
      "authority": -0.325272
    },
    "space": {
      "econ": 0.903651,
      "culture": -0.047439,
      "authority": -0.325272,
      "establishment": -0.361183,
      "globalism": -0.477216,
      "green": 0.478641,
      "ukraine": -0.282911,
      "greenDeal": 0.240209
    },
    "axisSalience": {
      "econ": 0.799534,
      "culture": 0.439924,
      "authority": 0.497098
    },
    "issuePrefs": {
      "housing": -0.491316,
      "transport": -0.27464,
      "security": -0.10642,
      "healthcare": -0.654424,
      "climate": -0.41188,
      "industry": 0.349491,
      "education": -0.095285,
      "taxes": 0.644936
    },
    "issueSalience": {
      "housing": 0.555137,
      "transport": 0.433798,
      "security": 0.339595,
      "healthcare": 0.646477,
      "climate": 0.510653,
      "industry": 0.475715,
      "education": 0.33336,
      "taxes": 0.641164
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.432472,
    "turnoutBase": 0.557359,
    "volatility": 0.532507
  },
  {
    "id": "ess_lib_right_40_54_tertiary_large_town_left",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 7.8e-05,
    "position": {
      "econ": 0.137993,
      "culture": -0.271549,
      "authority": -0.222277
    },
    "space": {
      "econ": 0.137993,
      "culture": -0.271549,
      "authority": -0.222277,
      "establishment": 0.185767,
      "globalism": 0.246593,
      "green": 0.085869,
      "ukraine": 0.483887,
      "greenDeal": 0.076497
    },
    "axisSalience": {
      "econ": 0.477957,
      "culture": 0.534051,
      "authority": 0.46002
    },
    "issuePrefs": {
      "housing": -0.04331,
      "transport": 0.043972,
      "security": -0.296943,
      "healthcare": -0.121079,
      "climate": -0.083245,
      "industry": -0.003761,
      "education": 0.007674,
      "taxes": 0.066769
    },
    "issueSalience": {
      "housing": 0.304254,
      "transport": 0.304624,
      "security": 0.446288,
      "healthcare": 0.347804,
      "climate": 0.326617,
      "industry": 0.282106,
      "education": 0.284297,
      "taxes": 0.317391
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.629657,
    "turnoutBase": 0.656502,
    "volatility": 0.453281
  },
  {
    "id": "ess_lib_right_25_39_lower_rural_center",
    "name": "liberalni pravice - 25-39 - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 7e-05,
    "position": {
      "econ": 0.211733,
      "culture": -0.481657,
      "authority": 0.427841
    },
    "space": {
      "econ": 0.211733,
      "culture": -0.481657,
      "authority": 0.427841,
      "establishment": -0.177411,
      "globalism": 0.746829,
      "green": 0.206282,
      "ukraine": 0.918022,
      "greenDeal": 0.78792
    },
    "axisSalience": {
      "econ": 0.508928,
      "culture": 0.622296,
      "authority": 0.534023
    },
    "issuePrefs": {
      "housing": -0.058655,
      "transport": 0.123384,
      "security": -0.077473,
      "healthcare": -0.190981,
      "climate": -0.369141,
      "industry": -0.178402,
      "education": -0.046538,
      "taxes": 0.094649
    },
    "issueSalience": {
      "housing": 0.312847,
      "transport": 0.349095,
      "security": 0.323385,
      "healthcare": 0.386949,
      "climate": 0.486719,
      "industry": 0.379905,
      "education": 0.306061,
      "taxes": 0.333004
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.430617,
    "turnoutBase": 0.503791,
    "volatility": 0.655967
  },
  {
    "id": "ess_lib_right_55_plus_secondary_large_town_unknown",
    "name": "liberalni pravice - 55+ - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 7e-05,
    "position": {
      "econ": 0.055787,
      "culture": -0.262579,
      "authority": 0.301826
    },
    "space": {
      "econ": 0.055787,
      "culture": -0.262579,
      "authority": 0.301826,
      "establishment": 0.122519,
      "globalism": 0.623174,
      "green": 0.268062,
      "ukraine": 0.412216,
      "greenDeal": 0.701902
    },
    "axisSalience": {
      "econ": 0.443431,
      "culture": 0.530283,
      "authority": 0.488657
    },
    "issuePrefs": {
      "housing": 0.000827,
      "transport": 0.108098,
      "security": -0.031539,
      "healthcare": -0.061173,
      "climate": -0.389537,
      "industry": -0.190059,
      "education": -0.058584,
      "taxes": 0.008657
    },
    "issueSalience": {
      "housing": 0.280463,
      "transport": 0.340535,
      "security": 0.297662,
      "healthcare": 0.314257,
      "climate": 0.498141,
      "industry": 0.386433,
      "education": 0.312807,
      "taxes": 0.284848
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.537192,
    "turnoutBase": 0.674288,
    "volatility": 0.418973
  },
  {
    "id": "ess_lib_right_25_39_lower_large_town_right",
    "name": "liberalni pravice - 25-39 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 6.5e-05,
    "position": {
      "econ": 0.228968,
      "culture": -0.347361,
      "authority": 0.508081
    },
    "space": {
      "econ": 0.228968,
      "culture": -0.347361,
      "authority": 0.508081,
      "establishment": 0.470203,
      "globalism": -0.397605,
      "green": 0.435536,
      "ukraine": -0.282626,
      "greenDeal": -0.033923
    },
    "axisSalience": {
      "econ": 0.516166,
      "culture": 0.565892,
      "authority": 0.562909
    },
    "issuePrefs": {
      "housing": -0.084249,
      "transport": -0.042429,
      "security": 0.311928,
      "healthcare": -0.192646,
      "climate": -0.304087,
      "industry": 0.050942,
      "education": 0.154097,
      "taxes": 0.123173
    },
    "issueSalience": {
      "housing": 0.327179,
      "transport": 0.30376,
      "security": 0.45468,
      "healthcare": 0.387882,
      "climate": 0.450289,
      "industry": 0.308527,
      "education": 0.366294,
      "taxes": 0.348977
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.41376,
    "turnoutBase": 0.526457,
    "volatility": 0.497682
  },
  {
    "id": "ess_lib_right_40_54_secondary_large_town_unknown",
    "name": "liberalni pravice - 40-54 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 6.1e-05,
    "position": {
      "econ": 0.498528,
      "culture": -0.167289,
      "authority": 0.263326
    },
    "space": {
      "econ": 0.498528,
      "culture": -0.167289,
      "authority": 0.263326,
      "establishment": 0.312179,
      "globalism": 0.463384,
      "green": -0.185749,
      "ukraine": 0.649377,
      "greenDeal": 0.220706
    },
    "axisSalience": {
      "econ": 0.629382,
      "culture": 0.490261,
      "authority": 0.474797
    },
    "issuePrefs": {
      "housing": -0.254116,
      "transport": -0.038914,
      "security": -0.018938,
      "healthcare": -0.372323,
      "climate": 0.071941,
      "industry": 0.146241,
      "education": -0.16304,
      "taxes": 0.338865
    },
    "issueSalience": {
      "housing": 0.422305,
      "transport": 0.301792,
      "security": 0.290606,
      "healthcare": 0.488501,
      "climate": 0.320287,
      "industry": 0.361895,
      "education": 0.371302,
      "taxes": 0.469765
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.542777,
    "turnoutBase": 0.600926,
    "volatility": 0.491904
  },
  {
    "id": "ess_lib_right_55_plus_lower_large_town_right",
    "name": "liberalni pravice - 55+ - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 6.1e-05,
    "position": {
      "econ": 0.074746,
      "culture": -0.246555,
      "authority": 0.209077
    },
    "space": {
      "econ": 0.074746,
      "culture": -0.246555,
      "authority": 0.209077,
      "establishment": 0.356468,
      "globalism": 0.191509,
      "green": 0.086679,
      "ukraine": -0.174299,
      "greenDeal": 0.44484
    },
    "axisSalience": {
      "econ": 0.451393,
      "culture": 0.523553,
      "authority": 0.455268
    },
    "issuePrefs": {
      "housing": -0.011523,
      "transport": 0.048675,
      "security": 0.040064,
      "healthcare": -0.073541,
      "climate": -0.186964,
      "industry": -0.116759,
      "education": 0.026223,
      "taxes": 0.02423
    },
    "issueSalience": {
      "housing": 0.286453,
      "transport": 0.307258,
      "security": 0.302436,
      "healthcare": 0.321183,
      "climate": 0.3847,
      "industry": 0.345385,
      "education": 0.294685,
      "taxes": 0.293569
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.440008,
    "turnoutBase": 0.622476,
    "volatility": 0.437918
  },
  {
    "id": "ess_lib_right_25_39_secondary_town_left",
    "name": "liberalni pravice - 25-39 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 5.6e-05,
    "position": {
      "econ": 0.294224,
      "culture": -0.204393,
      "authority": -0.025308
    },
    "space": {
      "econ": 0.294224,
      "culture": -0.204393,
      "authority": -0.025308,
      "establishment": 0.046376,
      "globalism": 0.312109,
      "green": -0.23419,
      "ukraine": 0.235974,
      "greenDeal": 0.408136
    },
    "axisSalience": {
      "econ": 0.543574,
      "culture": 0.505845,
      "authority": 0.389111
    },
    "issuePrefs": {
      "housing": -0.137296,
      "transport": 0.000688,
      "security": -0.147979,
      "healthcare": -0.228193,
      "climate": 0.054339,
      "industry": 0.0006,
      "education": -0.06774,
      "taxes": 0.187314
    },
    "issueSalience": {
      "housing": 0.356886,
      "transport": 0.280385,
      "security": 0.362868,
      "healthcare": 0.407788,
      "climate": 0.31043,
      "industry": 0.280336,
      "education": 0.317935,
      "taxes": 0.384896
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.512437,
    "turnoutBase": 0.571623,
    "volatility": 0.495826
  },
  {
    "id": "ess_lib_right_55_plus_secondary_rural_left",
    "name": "liberalni pravice - 55+ - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 5.6e-05,
    "position": {
      "econ": 0.322853,
      "culture": -0.05332,
      "authority": 0.053435
    },
    "space": {
      "econ": 0.322853,
      "culture": -0.05332,
      "authority": 0.053435,
      "establishment": -0.081583,
      "globalism": 0.240248,
      "green": 0.714597,
      "ukraine": 0.096699,
      "greenDeal": 0.811879
    },
    "axisSalience": {
      "econ": 0.555598,
      "culture": 0.442395,
      "authority": 0.399237
    },
    "issuePrefs": {
      "housing": -0.171171,
      "transport": -0.042286,
      "security": -0.032781,
      "healthcare": -0.23672,
      "climate": -0.741836,
      "industry": -0.055936,
      "education": -0.111677,
      "taxes": 0.226056
    },
    "issueSalience": {
      "housing": 0.375856,
      "transport": 0.30368,
      "security": 0.298357,
      "healthcare": 0.412563,
      "climate": 0.695428,
      "industry": 0.311324,
      "education": 0.342539,
      "taxes": 0.406591
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.497888,
    "turnoutBase": 0.667145,
    "volatility": 0.437343
  },
  {
    "id": "ess_lib_right_55_plus_tertiary_town_left",
    "name": "liberalni pravice - 55+ - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 4.8e-05,
    "position": {
      "econ": 0.149777,
      "culture": -0.218591,
      "authority": 0.123872
    },
    "space": {
      "econ": 0.149777,
      "culture": -0.218591,
      "authority": 0.123872,
      "establishment": 0.186011,
      "globalism": -0.163277,
      "green": 0.091995,
      "ukraine": -0.045018,
      "greenDeal": 0.198805
    },
    "axisSalience": {
      "econ": 0.482906,
      "culture": 0.511808,
      "authority": 0.424594
    },
    "issuePrefs": {
      "housing": -0.056146,
      "transport": -0.017691,
      "security": 0.048586,
      "healthcare": -0.125327,
      "climate": -0.121901,
      "industry": -0.018162,
      "education": 0.076481,
      "taxes": 0.081609
    },
    "issueSalience": {
      "housing": 0.311442,
      "transport": 0.289907,
      "security": 0.307208,
      "healthcare": 0.350183,
      "climate": 0.348265,
      "industry": 0.290171,
      "education": 0.32283,
      "taxes": 0.325701
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.605084,
    "turnoutBase": 0.73651,
    "volatility": 0.363259
  },
  {
    "id": "ess_lib_right_40_54_secondary_town_left",
    "name": "liberalni pravice - 40-54 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 4.3e-05,
    "position": {
      "econ": 0.220974,
      "culture": -0.040438,
      "authority": 0.530818
    },
    "space": {
      "econ": 0.220974,
      "culture": -0.040438,
      "authority": 0.530818,
      "establishment": 0.104578,
      "globalism": 0.323134,
      "green": 0.074995,
      "ukraine": 0.061247,
      "greenDeal": 0.124732
    },
    "axisSalience": {
      "econ": 0.512809,
      "culture": 0.436984,
      "authority": 0.571094
    },
    "issuePrefs": {
      "housing": -0.116683,
      "transport": -0.009189,
      "security": 0.25472,
      "healthcare": -0.162336,
      "climate": -0.088921,
      "industry": 0.064434,
      "education": -0.10997,
      "taxes": 0.154249
    },
    "issueSalience": {
      "housing": 0.345343,
      "transport": 0.285146,
      "security": 0.422643,
      "healthcare": 0.370908,
      "climate": 0.329796,
      "industry": 0.316083,
      "education": 0.341583,
      "taxes": 0.366379
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.517754,
    "turnoutBase": 0.59366,
    "volatility": 0.510588
  },
  {
    "id": "ess_lib_right_25_39_tertiary_large_town_left",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 3.5e-05,
    "position": {
      "econ": 0.027529,
      "culture": -0.461913,
      "authority": -0.015994
    },
    "space": {
      "econ": 0.027529,
      "culture": -0.461913,
      "authority": -0.015994,
      "establishment": 0.283223,
      "globalism": 0.509302,
      "green": 0.149201,
      "ukraine": 0.142873,
      "greenDeal": 0.679053
    },
    "axisSalience": {
      "econ": 0.431562,
      "culture": 0.614004,
      "authority": 0.385758
    },
    "issuePrefs": {
      "housing": 0.040289,
      "transport": 0.137378,
      "security": -0.242356,
      "healthcare": -0.056774,
      "climate": -0.29756,
      "industry": -0.233454,
      "education": 0.043016,
      "taxes": -0.035609
    },
    "issueSalience": {
      "housing": 0.302562,
      "transport": 0.356932,
      "security": 0.415719,
      "healthcare": 0.311793,
      "climate": 0.446633,
      "industry": 0.410734,
      "education": 0.304089,
      "taxes": 0.299941
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.653216,
    "turnoutBase": 0.639913,
    "volatility": 0.42451
  },
  {
    "id": "ess_lib_right_40_54_secondary_large_town_left",
    "name": "liberalni pravice - 40-54 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 3.5e-05,
    "position": {
      "econ": 0.045753,
      "culture": -0.266684,
      "authority": -0.089974
    },
    "space": {
      "econ": 0.045753,
      "culture": -0.266684,
      "authority": -0.089974,
      "establishment": -0.177016,
      "globalism": 0.383393,
      "green": 0.371171,
      "ukraine": 0.227715,
      "greenDeal": 0.526299
    },
    "axisSalience": {
      "econ": 0.439216,
      "culture": 0.532007,
      "authority": 0.412391
    },
    "issuePrefs": {
      "housing": 0.006838,
      "transport": 0.082572,
      "security": -0.217684,
      "healthcare": -0.054277,
      "climate": -0.414607,
      "industry": -0.153268,
      "education": -0.001988,
      "taxes": 0.00094
    },
    "issueSalience": {
      "housing": 0.283829,
      "transport": 0.32624,
      "security": 0.401903,
      "healthcare": 0.310395,
      "climate": 0.51218,
      "industry": 0.36583,
      "education": 0.281113,
      "taxes": 0.280526
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.498842,
    "turnoutBase": 0.583804,
    "volatility": 0.535931
  },
  {
    "id": "ess_lib_right_40_54_secondary_rural_left",
    "name": "liberalni pravice - 40-54 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 3e-05,
    "position": {
      "econ": 0.104962,
      "culture": -0.239931,
      "authority": 0.079066
    },
    "space": {
      "econ": 0.104962,
      "culture": -0.239931,
      "authority": 0.079066,
      "establishment": -0.101897,
      "globalism": 0.152978,
      "green": -0.203805,
      "ukraine": 0.182169,
      "greenDeal": -0.015634
    },
    "axisSalience": {
      "econ": 0.464084,
      "culture": 0.520771,
      "authority": 0.408464
    },
    "issuePrefs": {
      "housing": -0.028938,
      "transport": 0.035304,
      "security": -0.060269,
      "healthcare": -0.094767,
      "climate": 0.151117,
      "industry": 0.008847,
      "education": 0.02513,
      "taxes": 0.046781
    },
    "issueSalience": {
      "housing": 0.296205,
      "transport": 0.29977,
      "security": 0.313751,
      "healthcare": 0.33307,
      "climate": 0.364626,
      "industry": 0.284954,
      "education": 0.294073,
      "taxes": 0.306197
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.491027,
    "turnoutBase": 0.586434,
    "volatility": 0.529171
  },
  {
    "id": "ess_lib_right_40_54_tertiary_large_town_unknown",
    "name": "liberalni pravice - 40-54 - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 3e-05,
    "position": {
      "econ": 0.055034,
      "culture": -0.286132,
      "authority": -0.105515
    },
    "space": {
      "econ": 0.055034,
      "culture": -0.286132,
      "authority": -0.105515,
      "establishment": 0.065825,
      "globalism": 0.370227,
      "green": -0.090605,
      "ukraine": 0.478584,
      "greenDeal": 0.217552
    },
    "axisSalience": {
      "econ": 0.443114,
      "culture": 0.540175,
      "authority": 0.417985
    },
    "issuePrefs": {
      "housing": 0.004067,
      "transport": 0.082173,
      "security": -0.250464,
      "healthcare": -0.062515,
      "climate": 0.004321,
      "industry": -0.078401,
      "education": 0.005488,
      "taxes": 0.005288
    },
    "issueSalience": {
      "housing": 0.282278,
      "transport": 0.326017,
      "security": 0.42026,
      "healthcare": 0.315008,
      "climate": 0.28242,
      "industry": 0.323904,
      "education": 0.283073,
      "taxes": 0.282962
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.62748,
    "turnoutBase": 0.652304,
    "volatility": 0.464076
  },
  {
    "id": "ess_lib_right_55_plus_unknown_town_right",
    "name": "liberalni pravice - 55+ - nezname vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 2.6e-05,
    "position": {
      "econ": 0.050843,
      "culture": -0.358937,
      "authority": 0.170851
    },
    "space": {
      "econ": 0.050843,
      "culture": -0.358937,
      "authority": 0.170851,
      "establishment": -0.268583,
      "globalism": 0.278549,
      "green": 0.583802,
      "ukraine": -0.331912,
      "greenDeal": 0.669881
    },
    "axisSalience": {
      "econ": 0.441354,
      "culture": 0.570754,
      "authority": 0.441506
    },
    "issuePrefs": {
      "housing": 0.015109,
      "transport": 0.085324,
      "security": -0.01816,
      "healthcare": -0.065322,
      "climate": -0.607904,
      "industry": -0.201992,
      "education": 0.052145,
      "taxes": -0.006465
    },
    "issueSalience": {
      "housing": 0.288461,
      "transport": 0.327781,
      "security": 0.29017,
      "healthcare": 0.31658,
      "climate": 0.620426,
      "industry": 0.393116,
      "education": 0.309201,
      "taxes": 0.28362
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.475226,
    "turnoutBase": 0.6506,
    "volatility": 0.434172
  },
  {
    "id": "ess_lib_right_40_54_lower_large_town_center",
    "name": "liberalni pravice - 40-54 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 2.2e-05,
    "position": {
      "econ": 0.29214,
      "culture": -0.038997,
      "authority": 0.041477
    },
    "space": {
      "econ": 0.29214,
      "culture": -0.038997,
      "authority": 0.041477,
      "establishment": 0.545216,
      "globalism": 0.593418,
      "green": 0.234333,
      "ukraine": 0.07203,
      "greenDeal": 0.962606
    },
    "axisSalience": {
      "econ": 0.542699,
      "culture": 0.436379,
      "authority": 0.394932
    },
    "issuePrefs": {
      "housing": -0.155997,
      "transport": 0.005195,
      "security": -0.097781,
      "healthcare": -0.213461,
      "climate": -0.438249,
      "industry": -0.10366,
      "education": -0.187017,
      "taxes": 0.205661
    },
    "issueSalience": {
      "housing": 0.367359,
      "transport": 0.282909,
      "security": 0.334757,
      "healthcare": 0.399538,
      "climate": 0.52542,
      "industry": 0.33805,
      "education": 0.384729,
      "taxes": 0.39517
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.479222,
    "turnoutBase": 0.549083,
    "volatility": 0.610931
  },
  {
    "id": "ess_lib_right_15_24_lower_rural_left",
    "name": "liberalni pravice - 15-24 - nizsi vzdelani - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 1.7e-05,
    "position": {
      "econ": 0.044081,
      "culture": -0.32993,
      "authority": 0.300509
    },
    "space": {
      "econ": 0.044081,
      "culture": -0.32993,
      "authority": 0.300509,
      "establishment": 0.111849,
      "globalism": 0.43589,
      "green": 0.445128,
      "ukraine": -0.509001,
      "greenDeal": 0.489735
    },
    "axisSalience": {
      "econ": 0.438514,
      "culture": 0.558571,
      "authority": 0.488183
    },
    "issuePrefs": {
      "housing": 0.015347,
      "transport": 0.100674,
      "security": 0.056195,
      "healthcare": -0.058132,
      "climate": -0.457618,
      "industry": -0.156647,
      "education": 0.009,
      "taxes": -0.007854
    },
    "issueSalience": {
      "housing": 0.288594,
      "transport": 0.336377,
      "security": 0.311469,
      "healthcare": 0.312554,
      "climate": 0.536266,
      "industry": 0.367722,
      "education": 0.28504,
      "taxes": 0.284398
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.435101,
    "turnoutBase": 0.513915,
    "volatility": 0.529934
  },
  {
    "id": "ess_lib_right_25_39_lower_town_center",
    "name": "liberalni pravice - 25-39 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 1.7e-05,
    "position": {
      "econ": 0.037325,
      "culture": -0.206538,
      "authority": -0.100654
    },
    "space": {
      "econ": 0.037325,
      "culture": -0.206538,
      "authority": -0.100654,
      "establishment": 0.509933,
      "globalism": 0.392229,
      "green": 0.268034,
      "ukraine": 0.804346,
      "greenDeal": 0.979809
    },
    "axisSalience": {
      "econ": 0.435677,
      "culture": 0.506746,
      "authority": 0.416236
    },
    "issuePrefs": {
      "housing": 0.004256,
      "transport": 0.074913,
      "security": -0.255185,
      "healthcare": -0.043397,
      "climate": -0.467331,
      "industry": -0.255161,
      "education": -0.02296,
      "taxes": 0.00209
    },
    "issueSalience": {
      "housing": 0.282383,
      "transport": 0.321951,
      "security": 0.422904,
      "healthcare": 0.304302,
      "climate": 0.541705,
      "industry": 0.42289,
      "education": 0.292858,
      "taxes": 0.28117
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.464328,
    "turnoutBase": 0.527848,
    "volatility": 0.594106
  },
  {
    "id": "ess_lib_right_25_39_secondary_large_town_unknown",
    "name": "liberalni pravice - 25-39 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 1.7e-05,
    "position": {
      "econ": 0.037228,
      "culture": -0.331884,
      "authority": 0.131638
    },
    "space": {
      "econ": 0.037228,
      "culture": -0.331884,
      "authority": 0.131638,
      "establishment": 0.520345,
      "globalism": 0.956057,
      "green": -0.34563,
      "ukraine": 0.960232,
      "greenDeal": 0.307677
    },
    "axisSalience": {
      "econ": 0.435636,
      "culture": 0.559391,
      "authority": 0.42739
    },
    "issuePrefs": {
      "housing": 0.019351,
      "transport": 0.165159,
      "security": -0.260221,
      "healthcare": -0.053355,
      "climate": 0.162704,
      "industry": -0.116457,
      "education": -0.103108,
      "taxes": -0.013022
    },
    "issueSalience": {
      "housing": 0.290837,
      "transport": 0.372489,
      "security": 0.425724,
      "healthcare": 0.309879,
      "climate": 0.371114,
      "industry": 0.345216,
      "education": 0.33774,
      "taxes": 0.287292
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.588991,
    "turnoutBase": 0.588212,
    "volatility": 0.453169
  },
  {
    "id": "ess_lib_right_25_39_tertiary_rural_unknown",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 1.7e-05,
    "position": {
      "econ": 0.43182,
      "culture": -0.057232,
      "authority": 0.33969
    },
    "space": {
      "econ": 0.43182,
      "culture": -0.057232,
      "authority": 0.33969,
      "establishment": 0.307555,
      "globalism": 0.539567,
      "green": 0.157322,
      "ukraine": 0.231004,
      "greenDeal": 0.364629
    },
    "axisSalience": {
      "econ": 0.601364,
      "culture": 0.444038,
      "authority": 0.502288
    },
    "issuePrefs": {
      "housing": -0.230633,
      "transport": -0.032905,
      "security": 0.07898,
      "healthcare": -0.315489,
      "climate": -0.215368,
      "industry": 0.100825,
      "education": -0.20231,
      "taxes": 0.304043
    },
    "issueSalience": {
      "housing": 0.409155,
      "transport": 0.298427,
      "security": 0.324229,
      "healthcare": 0.456674,
      "climate": 0.400606,
      "industry": 0.336462,
      "education": 0.393294,
      "taxes": 0.450264
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.656978,
    "turnoutBase": 0.640764,
    "volatility": 0.42232
  },
  {
    "id": "ess_lib_right_15_24_secondary_town_left",
    "name": "liberalni pravice - 15-24 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 9e-06,
    "position": {
      "econ": 0.22853,
      "culture": -0.018661,
      "authority": 0.096884
    },
    "space": {
      "econ": 0.22853,
      "culture": -0.018661,
      "authority": 0.096884,
      "establishment": 0.346443,
      "globalism": -0.114997,
      "green": -0.10411,
      "ukraine": 0.224999,
      "greenDeal": -0.233184
    },
    "axisSalience": {
      "econ": 0.515983,
      "culture": 0.427838,
      "authority": 0.414878
    },
    "issuePrefs": {
      "housing": -0.123452,
      "transport": -0.067573,
      "security": 0.057543,
      "healthcare": -0.166035,
      "climate": 0.14025,
      "industry": 0.157729,
      "education": -0.023017,
      "taxes": 0.162303
    },
    "issueSalience": {
      "housing": 0.349133,
      "transport": 0.317841,
      "security": 0.312224,
      "healthcare": 0.37298,
      "climate": 0.35854,
      "industry": 0.368328,
      "education": 0.292889,
      "taxes": 0.370889
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.510816,
    "turnoutBase": 0.582125,
    "volatility": 0.46882
  },
  {
    "id": "ess_lib_right_25_39_secondary_rural_left",
    "name": "liberalni pravice - 25-39 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 9e-06,
    "position": {
      "econ": 0.2393,
      "culture": -0.131006,
      "authority": 0.156945
    },
    "space": {
      "econ": 0.2393,
      "culture": -0.131006,
      "authority": 0.156945,
      "establishment": 0.538394,
      "globalism": 0.255189,
      "green": -0.162498,
      "ukraine": 0.131755,
      "greenDeal": 0.352915
    },
    "axisSalience": {
      "econ": 0.520506,
      "culture": 0.475023,
      "authority": 0.4365
    },
    "issuePrefs": {
      "housing": -0.115894,
      "transport": -0.005621,
      "security": 0.00415,
      "healthcare": -0.182776,
      "climate": 0.018182,
      "industry": 0.001797,
      "education": -0.067721,
      "taxes": 0.156575
    },
    "issueSalience": {
      "housing": 0.344901,
      "transport": 0.283148,
      "security": 0.282324,
      "healthcare": 0.382355,
      "climate": 0.290182,
      "industry": 0.281006,
      "education": 0.317924,
      "taxes": 0.367682
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.548383,
    "turnoutBase": 0.588844,
    "volatility": 0.451545
  },
  {
    "id": "ess_lib_right_25_39_tertiary_town_left",
    "name": "liberalni pravice - 25-39 - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 9e-06,
    "position": {
      "econ": 0.015171,
      "culture": -0.578482,
      "authority": -0.200076
    },
    "space": {
      "econ": 0.015171,
      "culture": -0.578482,
      "authority": -0.200076,
      "establishment": 0.351663,
      "globalism": 0.693163,
      "green": 0.402585,
      "ukraine": 0.211495,
      "greenDeal": 0.690086
    },
    "axisSalience": {
      "econ": 0.426372,
      "culture": 0.662962,
      "authority": 0.452027
    },
    "issuePrefs": {
      "housing": 0.061074,
      "transport": 0.183513,
      "security": -0.427711,
      "healthcare": -0.057202,
      "climate": -0.483085,
      "industry": -0.262769,
      "education": 0.046332,
      "taxes": -0.058495
    },
    "issueSalience": {
      "housing": 0.314201,
      "transport": 0.382768,
      "security": 0.519518,
      "healthcare": 0.312033,
      "climate": 0.550528,
      "industry": 0.42715,
      "education": 0.305946,
      "taxes": 0.312757
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.669723,
    "turnoutBase": 0.642308,
    "volatility": 0.41835
  },
  {
    "id": "ess_lib_right_55_plus_secondary_large_town_left",
    "name": "liberalni pravice - 55+ - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 9e-06,
    "position": {
      "econ": 0.253576,
      "culture": -0.064999,
      "authority": 0.112637
    },
    "space": {
      "econ": 0.253576,
      "culture": -0.064999,
      "authority": 0.112637,
      "establishment": 0.075701,
      "globalism": 0.16913,
      "green": 0.1426,
      "ukraine": -0.074217,
      "greenDeal": 0.145977
    },
    "axisSalience": {
      "econ": 0.526502,
      "culture": 0.4473,
      "authority": 0.420549
    },
    "issuePrefs": {
      "housing": -0.131667,
      "transport": -0.031399,
      "security": 0.027129,
      "healthcare": -0.187775,
      "climate": -0.143545,
      "industry": 0.069911,
      "education": -0.075317,
      "taxes": 0.174775
    },
    "issueSalience": {
      "housing": 0.353734,
      "transport": 0.297583,
      "security": 0.295192,
      "healthcare": 0.385154,
      "climate": 0.360385,
      "industry": 0.31915,
      "education": 0.322178,
      "taxes": 0.377874
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.506204,
    "turnoutBase": 0.67265,
    "volatility": 0.423187
  },
  {
    "id": "ess_lib_right_15_24_secondary_unknown_unknown",
    "name": "liberalni pravice - 15-24 - stredoskolaci - nezname sidlo - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "unknown",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 4e-06,
    "position": {
      "econ": 0.210519,
      "culture": -0.006129,
      "authority": 0.034471
    },
    "space": {
      "econ": 0.210519,
      "culture": -0.006129,
      "authority": 0.034471,
      "establishment": 0.120915,
      "globalism": 0.117971,
      "green": 0.151789,
      "ukraine": 0.940854,
      "greenDeal": 0.326252
    },
    "axisSalience": {
      "econ": 0.508418,
      "culture": 0.422574,
      "authority": 0.39241
    },
    "issuePrefs": {
      "housing": -0.11505,
      "transport": -0.03737,
      "security": -0.076847,
      "healthcare": -0.152064,
      "climate": -0.200639,
      "industry": 0.017435,
      "education": -0.074333,
      "taxes": 0.150838
    },
    "issueSalience": {
      "housing": 0.344428,
      "transport": 0.300927,
      "security": 0.323035,
      "healthcare": 0.365156,
      "climate": 0.392358,
      "industry": 0.289764,
      "education": 0.321626,
      "taxes": 0.364469
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.506751,
    "turnoutBase": 0.574232,
    "volatility": 0.489118
  },
  {
    "id": "ess_lib_right_25_39_unknown_unknown_unknown",
    "name": "liberalni pravice - 25-39 - nezname vzdelani - nezname sidlo - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "unknown",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 4e-06,
    "position": {
      "econ": 0.180734,
      "culture": -0.041868,
      "authority": 0.099886
    },
    "space": {
      "econ": 0.180734,
      "culture": -0.041868,
      "authority": 0.099886,
      "establishment": -0.380482,
      "globalism": 0.332731,
      "green": -0.970697,
      "ukraine": -0.066243,
      "greenDeal": -0.908204
    },
    "axisSalience": {
      "econ": 0.495908,
      "culture": 0.437584,
      "authority": 0.415959
    },
    "issuePrefs": {
      "housing": -0.09438,
      "transport": 0.00228,
      "security": -0.004386,
      "healthcare": -0.133478,
      "climate": 0.953199,
      "industry": 0.29357,
      "education": -0.101923,
      "taxes": 0.125104
    },
    "issueSalience": {
      "housing": 0.332853,
      "transport": 0.281277,
      "security": 0.282456,
      "healthcare": 0.354748,
      "climate": 0.813792,
      "industry": 0.444399,
      "education": 0.337077,
      "taxes": 0.350058
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.469525,
    "turnoutBase": 0.546683,
    "volatility": 0.514243
  },
  {
    "id": "ess_lib_right_40_54_lower_rural_center",
    "name": "liberalni pravice - 40-54 - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 4e-06,
    "position": {
      "econ": 0.031475,
      "culture": -0.407349,
      "authority": 0.159154
    },
    "space": {
      "econ": 0.031475,
      "culture": -0.407349,
      "authority": 0.159154,
      "establishment": -0.32407,
      "globalism": 0.325597,
      "green": 0.250431,
      "ukraine": -0.132926,
      "greenDeal": 0.494879
    },
    "axisSalience": {
      "econ": 0.43322,
      "culture": 0.591086,
      "authority": 0.437295
    },
    "issuePrefs": {
      "housing": 0.03157,
      "transport": 0.104526,
      "security": -0.063356,
      "healthcare": -0.05525,
      "climate": -0.318877,
      "industry": -0.177615,
      "education": 0.063387,
      "taxes": -0.02622
    },
    "issueSalience": {
      "housing": 0.297679,
      "transport": 0.338534,
      "security": 0.315479,
      "healthcare": 0.31094,
      "climate": 0.458571,
      "industry": 0.379465,
      "education": 0.315497,
      "taxes": 0.294683
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.39361,
    "turnoutBase": 0.518658,
    "volatility": 0.689166
  },
  {
    "id": "ess_lib_right_40_54_lower_town_center",
    "name": "liberalni pravice - 40-54 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 4e-06,
    "position": {
      "econ": 0.034493,
      "culture": -0.248072,
      "authority": 0.45778
    },
    "space": {
      "econ": 0.034493,
      "culture": -0.248072,
      "authority": 0.45778,
      "establishment": -0.054377,
      "globalism": 0.114468,
      "green": 0.432649,
      "ukraine": 0.142154,
      "greenDeal": -0.047784
    },
    "axisSalience": {
      "econ": 0.434487,
      "culture": 0.52419,
      "authority": 0.544801
    },
    "issuePrefs": {
      "housing": 0.010798,
      "transport": 0.049766,
      "security": 0.182387,
      "healthcare": -0.044681,
      "climate": -0.298127,
      "industry": -0.017318,
      "education": 0.053364,
      "taxes": -0.004934
    },
    "issueSalience": {
      "housing": 0.286047,
      "transport": 0.307869,
      "security": 0.382137,
      "healthcare": 0.305021,
      "climate": 0.446951,
      "industry": 0.289698,
      "education": 0.309884,
      "taxes": 0.282763
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.402518,
    "turnoutBase": 0.528097,
    "volatility": 0.664894
  },
  {
    "id": "ess_lib_right_40_54_lower_town_right",
    "name": "liberalni pravice - 40-54 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 4e-06,
    "position": {
      "econ": 0.248955,
      "culture": -0.001405,
      "authority": 0.05835
    },
    "space": {
      "econ": 0.248955,
      "culture": -0.001405,
      "authority": 0.05835,
      "establishment": 0.271428,
      "globalism": -0.125687,
      "green": -0.07771,
      "ukraine": 0.024868,
      "greenDeal": 0.072816
    },
    "axisSalience": {
      "econ": 0.524561,
      "culture": 0.42059,
      "authority": 0.401006
    },
    "issuePrefs": {
      "housing": -0.136756,
      "transport": -0.077068,
      "security": 0.056418,
      "healthcare": -0.17936,
      "climate": 0.035563,
      "industry": 0.09679,
      "education": -0.031606,
      "taxes": 0.179079
    },
    "issueSalience": {
      "housing": 0.356584,
      "transport": 0.323158,
      "security": 0.311594,
      "healthcare": 0.380441,
      "climate": 0.299915,
      "industry": 0.334203,
      "education": 0.297699,
      "taxes": 0.380284
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.414173,
    "turnoutBase": 0.5395,
    "volatility": 0.535571
  },
  {
    "id": "ess_lib_right_55_plus_lower_town_right",
    "name": "liberalni pravice - 55+ - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 4e-06,
    "position": {
      "econ": 0.436262,
      "culture": -0.035562,
      "authority": 0.153082
    },
    "space": {
      "econ": 0.436262,
      "culture": -0.035562,
      "authority": 0.153082,
      "establishment": 0.182599,
      "globalism": 0.34214,
      "green": 0.033565,
      "ukraine": 0.395191,
      "greenDeal": 0.762525
    },
    "axisSalience": {
      "econ": 0.60323,
      "culture": 0.434936,
      "authority": 0.435109
    },
    "issuePrefs": {
      "housing": -0.235677,
      "transport": -0.061607,
      "security": -0.008247,
      "healthcare": -0.316953,
      "climate": -0.237674,
      "industry": 0.011273,
      "education": -0.167527,
      "taxes": 0.309841
    },
    "issueSalience": {
      "housing": 0.411979,
      "transport": 0.3145,
      "security": 0.284618,
      "healthcare": 0.457494,
      "climate": 0.413097,
      "industry": 0.286313,
      "education": 0.373815,
      "taxes": 0.453511
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.435136,
    "turnoutBase": 0.616391,
    "volatility": 0.453566
  },
  {
    "id": "ess_lib_right_55_plus_secondary_town_left",
    "name": "liberalni pravice - 55+ - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 4e-06,
    "position": {
      "econ": 0.004511,
      "culture": -0.194729,
      "authority": 0.032773
    },
    "space": {
      "econ": 0.004511,
      "culture": -0.194729,
      "authority": 0.032773,
      "establishment": 0.235212,
      "globalism": -0.415495,
      "green": -0.489889,
      "ukraine": -0.230218,
      "greenDeal": -0.108288
    },
    "axisSalience": {
      "econ": 0.421895,
      "culture": 0.501786,
      "authority": 0.391798
    },
    "issuePrefs": {
      "housing": 0.020886,
      "transport": -0.015936,
      "security": 0.059002,
      "healthcare": -0.018826,
      "climate": 0.383041,
      "industry": -0.006987,
      "education": 0.158482,
      "taxes": -0.02012
    },
    "issueSalience": {
      "housing": 0.291696,
      "transport": 0.288924,
      "security": 0.313041,
      "healthcare": 0.290543,
      "climate": 0.494503,
      "industry": 0.283913,
      "education": 0.36875,
      "taxes": 0.291267
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.483887,
    "turnoutBase": 0.678232,
    "volatility": 0.408831
  },
  {
    "id": "ess_lib_right_55_plus_tertiary_large_town_left",
    "name": "liberalni pravice - 55+ - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "lib_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 4e-06,
    "position": {
      "econ": 0.06415,
      "culture": -0.185151,
      "authority": 0.135966
    },
    "space": {
      "econ": 0.06415,
      "culture": -0.185151,
      "authority": 0.135966,
      "establishment": -0.070504,
      "globalism": 0.110888,
      "green": 0.065045,
      "ukraine": -0.485249,
      "greenDeal": 0.356805
    },
    "axisSalience": {
      "econ": 0.446943,
      "culture": 0.497763,
      "authority": 0.428948
    },
    "issuePrefs": {
      "housing": -0.013064,
      "transport": 0.030596,
      "security": 0.051317,
      "healthcare": -0.061,
      "climate": -0.146738,
      "industry": -0.089452,
      "education": 0.025012,
      "taxes": 0.02397
    },
    "issueSalience": {
      "housing": 0.287316,
      "transport": 0.297134,
      "security": 0.308738,
      "healthcare": 0.31416,
      "climate": 0.362173,
      "industry": 0.330093,
      "education": 0.294006,
      "taxes": 0.293423
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.601013,
    "turnoutBase": 0.727532,
    "volatility": 0.386345
  },
  {
    "id": "ess_trad_left_55_plus_secondary_large_town_left",
    "name": "tradicni levice - 55+ - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.036208,
    "position": {
      "econ": -0.498153,
      "culture": 0.310448,
      "authority": 0.234142
    },
    "space": {
      "econ": -0.498153,
      "culture": 0.310448,
      "authority": 0.234142,
      "establishment": 0.009149,
      "globalism": -0.116499,
      "green": -0.036725,
      "ukraine": -0.231662,
      "greenDeal": -0.015326
    },
    "axisSalience": {
      "econ": 0.629224,
      "culture": 0.550388,
      "authority": 0.464291
    },
    "issuePrefs": {
      "housing": 0.236731,
      "transport": 0.054678,
      "security": 0.271596,
      "healthcare": 0.383506,
      "climate": 0.030733,
      "industry": -0.169592,
      "education": 0.03653,
      "taxes": -0.321417
    },
    "issueSalience": {
      "housing": 0.412569,
      "transport": 0.31062,
      "security": 0.432094,
      "healthcare": 0.494764,
      "climate": 0.297211,
      "industry": 0.374971,
      "education": 0.300457,
      "taxes": 0.459993
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.483742,
    "turnoutBase": 0.67032,
    "volatility": 0.429177
  },
  {
    "id": "ess_trad_left_55_plus_secondary_town_center",
    "name": "tradicni levice - 55+ - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.028583,
    "position": {
      "econ": -0.284361,
      "culture": 0.291632,
      "authority": 0.268673
    },
    "space": {
      "econ": -0.284361,
      "culture": 0.291632,
      "authority": 0.268673,
      "establishment": 0.022543,
      "globalism": -0.215832,
      "green": 0.119157,
      "ukraine": -0.165391,
      "greenDeal": 0.13224
    },
    "axisSalience": {
      "econ": 0.539432,
      "culture": 0.542486,
      "authority": 0.476722
    },
    "issuePrefs": {
      "housing": 0.121403,
      "transport": -0.007303,
      "security": 0.300315,
      "healthcare": 0.228071,
      "climate": -0.12282,
      "industry": -0.11005,
      "education": 0.013658,
      "taxes": -0.169744
    },
    "issueSalience": {
      "housing": 0.347986,
      "transport": 0.28409,
      "security": 0.448176,
      "healthcare": 0.40772,
      "climate": 0.348779,
      "industry": 0.341628,
      "education": 0.287649,
      "taxes": 0.375057
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.478854,
    "turnoutBase": 0.670789,
    "volatility": 0.527971
  },
  {
    "id": "ess_trad_left_55_plus_secondary_rural_left",
    "name": "tradicni levice - 55+ - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.028412,
    "position": {
      "econ": -0.528007,
      "culture": 0.375925,
      "authority": 0.258447
    },
    "space": {
      "econ": -0.528007,
      "culture": 0.375925,
      "authority": 0.258447,
      "establishment": 0.006414,
      "globalism": -0.142008,
      "green": -0.165575,
      "ukraine": -0.282198,
      "greenDeal": -0.113088
    },
    "axisSalience": {
      "econ": 0.641763,
      "culture": 0.577888,
      "authority": 0.473041
    },
    "issuePrefs": {
      "housing": 0.245293,
      "transport": 0.047294,
      "security": 0.313633,
      "healthcare": 0.410239,
      "climate": 0.150878,
      "industry": -0.148075,
      "education": 0.02639,
      "taxes": -0.335054
    },
    "issueSalience": {
      "housing": 0.417364,
      "transport": 0.306485,
      "security": 0.455635,
      "healthcare": 0.509734,
      "climate": 0.364492,
      "industry": 0.362922,
      "education": 0.294778,
      "taxes": 0.46763
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.481993,
    "turnoutBase": 0.670224,
    "volatility": 0.429423
  },
  {
    "id": "ess_trad_left_55_plus_secondary_town_left",
    "name": "tradicni levice - 55+ - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.027694,
    "position": {
      "econ": -0.478269,
      "culture": 0.290154,
      "authority": 0.398844
    },
    "space": {
      "econ": -0.478269,
      "culture": 0.290154,
      "authority": 0.398844,
      "establishment": 0.051358,
      "globalism": -0.085843,
      "green": -0.005941,
      "ukraine": -0.30923,
      "greenDeal": 0.109245
    },
    "axisSalience": {
      "econ": 0.620873,
      "culture": 0.541865,
      "authority": 0.523584
    },
    "issuePrefs": {
      "housing": 0.22823,
      "transport": 0.057038,
      "security": 0.368717,
      "healthcare": 0.367566,
      "climate": -0.026311,
      "industry": -0.193995,
      "education": 0.032116,
      "taxes": -0.309535
    },
    "issueSalience": {
      "housing": 0.407809,
      "transport": 0.311941,
      "security": 0.486481,
      "healthcare": 0.485837,
      "climate": 0.294734,
      "industry": 0.388637,
      "education": 0.297985,
      "taxes": 0.45334
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.488958,
    "turnoutBase": 0.671798,
    "volatility": 0.425378
  },
  {
    "id": "ess_trad_left_55_plus_secondary_large_town_center",
    "name": "tradicni levice - 55+ - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.022395,
    "position": {
      "econ": -0.284114,
      "culture": 0.366572,
      "authority": 0.208102
    },
    "space": {
      "econ": -0.284114,
      "culture": 0.366572,
      "authority": 0.208102,
      "establishment": 0.01084,
      "globalism": -0.266121,
      "green": 0.066357,
      "ukraine": -0.296188,
      "greenDeal": -0.002923
    },
    "axisSalience": {
      "econ": 0.539328,
      "culture": 0.57396,
      "authority": 0.454917
    },
    "issuePrefs": {
      "housing": 0.112274,
      "transport": -0.026889,
      "security": 0.30326,
      "healthcare": 0.233888,
      "climate": -0.046959,
      "industry": -0.064008,
      "education": -0.001566,
      "taxes": -0.160573
    },
    "issueSalience": {
      "housing": 0.342873,
      "transport": 0.295058,
      "security": 0.449826,
      "healthcare": 0.410977,
      "climate": 0.306297,
      "industry": 0.315844,
      "education": 0.280877,
      "taxes": 0.369921
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.4749,
    "turnoutBase": 0.670379,
    "volatility": 0.529024
  },
  {
    "id": "ess_trad_left_55_plus_secondary_rural_center",
    "name": "tradicni levice - 55+ - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.020309,
    "position": {
      "econ": -0.272731,
      "culture": 0.377868,
      "authority": 0.359008
    },
    "space": {
      "econ": -0.272731,
      "culture": 0.377868,
      "authority": 0.359008,
      "establishment": 0.04663,
      "globalism": -0.165965,
      "green": 0.042749,
      "ukraine": -0.14359,
      "greenDeal": 0.055756
    },
    "axisSalience": {
      "econ": 0.534547,
      "culture": 0.578704,
      "authority": 0.509243
    },
    "issuePrefs": {
      "housing": 0.104658,
      "transport": -0.019749,
      "security": 0.369749,
      "healthcare": 0.226596,
      "climate": -0.046391,
      "industry": -0.070822,
      "education": -0.030286,
      "taxes": -0.151023
    },
    "issueSalience": {
      "housing": 0.338609,
      "transport": 0.29106,
      "security": 0.487059,
      "healthcare": 0.406894,
      "climate": 0.305979,
      "industry": 0.31966,
      "education": 0.29696,
      "taxes": 0.364573
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.483772,
    "turnoutBase": 0.671632,
    "volatility": 0.525803
  },
  {
    "id": "ess_trad_left_40_54_secondary_rural_center",
    "name": "tradicni levice - 40-54 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.015249,
    "position": {
      "econ": -0.217856,
      "culture": 0.331406,
      "authority": 0.210568
    },
    "space": {
      "econ": -0.217856,
      "culture": 0.331406,
      "authority": 0.210568,
      "establishment": -0.071621,
      "globalism": -0.192397,
      "green": 0.111425,
      "ukraine": -0.258935,
      "greenDeal": 0.09773
    },
    "axisSalience": {
      "econ": 0.511499,
      "culture": 0.559191,
      "authority": 0.455804
    },
    "issuePrefs": {
      "housing": 0.080052,
      "transport": -0.028277,
      "security": 0.278692,
      "healthcare": 0.183369,
      "climate": -0.107591,
      "industry": -0.064016,
      "education": -0.021379,
      "taxes": -0.117088
    },
    "issueSalience": {
      "housing": 0.324829,
      "transport": 0.295835,
      "security": 0.436068,
      "healthcare": 0.382686,
      "climate": 0.340251,
      "industry": 0.315849,
      "education": 0.291972,
      "taxes": 0.345569
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.472727,
    "turnoutBase": 0.587493,
    "volatility": 0.626446
  },
  {
    "id": "ess_trad_left_40_54_secondary_town_center",
    "name": "tradicni levice - 40-54 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.015249,
    "position": {
      "econ": -0.200329,
      "culture": 0.31049,
      "authority": 0.302243
    },
    "space": {
      "econ": -0.200329,
      "culture": 0.31049,
      "authority": 0.302243,
      "establishment": 0.070034,
      "globalism": -0.225158,
      "green": 0.104821,
      "ukraine": -0.230133,
      "greenDeal": 0.110666
    },
    "axisSalience": {
      "econ": 0.504138,
      "culture": 0.550406,
      "authority": 0.488807
    },
    "issuePrefs": {
      "housing": 0.072922,
      "transport": -0.032825,
      "security": 0.333267,
      "healthcare": 0.169076,
      "climate": -0.106458,
      "industry": -0.062823,
      "education": -0.011058,
      "taxes": -0.106978
    },
    "issueSalience": {
      "housing": 0.320836,
      "transport": 0.298382,
      "security": 0.466629,
      "healthcare": 0.374683,
      "climate": 0.339616,
      "industry": 0.315181,
      "education": 0.286192,
      "taxes": 0.339908
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.482093,
    "turnoutBase": 0.592451,
    "volatility": 0.613697
  },
  {
    "id": "ess_trad_left_40_54_secondary_large_town_center",
    "name": "tradicni levice - 40-54 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.013437,
    "position": {
      "econ": -0.259555,
      "culture": 0.339065,
      "authority": 0.186025
    },
    "space": {
      "econ": -0.259555,
      "culture": 0.339065,
      "authority": 0.186025,
      "establishment": -0.09528,
      "globalism": -0.212078,
      "green": 0.062738,
      "ukraine": -0.273468,
      "greenDeal": -0.037021
    },
    "axisSalience": {
      "econ": 0.529013,
      "culture": 0.562407,
      "authority": 0.446969
    },
    "issuePrefs": {
      "housing": 0.102068,
      "transport": -0.021592,
      "security": 0.270325,
      "healthcare": 0.214005,
      "climate": -0.034806,
      "industry": -0.049479,
      "education": -0.009722,
      "taxes": -0.146192
    },
    "issueSalience": {
      "housing": 0.337158,
      "transport": 0.292092,
      "security": 0.431382,
      "healthcare": 0.399843,
      "climate": 0.299491,
      "industry": 0.307708,
      "education": 0.285444,
      "taxes": 0.361867
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.469653,
    "turnoutBase": 0.586665,
    "volatility": 0.628575
  },
  {
    "id": "ess_trad_left_40_54_secondary_large_town_left",
    "name": "tradicni levice - 40-54 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.012719,
    "position": {
      "econ": -0.382532,
      "culture": 0.29159,
      "authority": 0.220111
    },
    "space": {
      "econ": -0.382532,
      "culture": 0.29159,
      "authority": 0.220111,
      "establishment": -0.005019,
      "globalism": 0.141405,
      "green": -0.051944,
      "ukraine": -0.150114,
      "greenDeal": 0.098488
    },
    "axisSalience": {
      "econ": 0.580664,
      "culture": 0.542468,
      "authority": 0.45924
    },
    "issuePrefs": {
      "housing": 0.175402,
      "transport": 0.060115,
      "security": 0.20467,
      "healthcare": 0.29875,
      "climate": 0.009823,
      "industry": -0.147116,
      "education": -0.041358,
      "taxes": -0.240432
    },
    "issueSalience": {
      "housing": 0.378225,
      "transport": 0.313665,
      "security": 0.394615,
      "healthcare": 0.4473,
      "climate": 0.285501,
      "industry": 0.362385,
      "education": 0.30316,
      "taxes": 0.414642
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.498083,
    "turnoutBase": 0.589824,
    "volatility": 0.520452
  },
  {
    "id": "ess_trad_left_40_54_secondary_rural_left",
    "name": "tradicni levice - 40-54 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.012206,
    "position": {
      "econ": -0.526231,
      "culture": 0.241807,
      "authority": 0.33765
    },
    "space": {
      "econ": -0.526231,
      "culture": 0.241807,
      "authority": 0.33765,
      "establishment": 0.097633,
      "globalism": 0.023514,
      "green": -0.044167,
      "ukraine": 0.007672,
      "greenDeal": 0.065415
    },
    "axisSalience": {
      "econ": 0.641017,
      "culture": 0.521559,
      "authority": 0.501554
    },
    "issuePrefs": {
      "housing": 0.26041,
      "transport": 0.090854,
      "security": 0.272202,
      "healthcare": 0.398231,
      "climate": 0.013484,
      "industry": -0.214241,
      "education": 0.03649,
      "taxes": -0.349869
    },
    "issueSalience": {
      "housing": 0.42583,
      "transport": 0.330878,
      "security": 0.432433,
      "healthcare": 0.503009,
      "climate": 0.287551,
      "industry": 0.399975,
      "education": 0.300434,
      "taxes": 0.475927
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.499222,
    "turnoutBase": 0.593417,
    "volatility": 0.511213
  },
  {
    "id": "ess_trad_left_55_plus_lower_large_town_center",
    "name": "tradicni levice - 55+ - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.010326,
    "position": {
      "econ": -0.37678,
      "culture": 0.536222,
      "authority": 0.517024
    },
    "space": {
      "econ": -0.37678,
      "culture": 0.536222,
      "authority": 0.517024,
      "establishment": -0.322876,
      "globalism": -0.645384,
      "green": 0.330268,
      "ukraine": -0.50802,
      "greenDeal": -0.182119
    },
    "axisSalience": {
      "econ": 0.578248,
      "culture": 0.645213,
      "authority": 0.566129
    },
    "issuePrefs": {
      "housing": 0.142883,
      "transport": -0.079771,
      "security": 0.627508,
      "healthcare": 0.31418,
      "climate": -0.186799,
      "industry": -0.03309,
      "education": 0.044734,
      "taxes": -0.206935
    },
    "issueSalience": {
      "housing": 0.360014,
      "transport": 0.324672,
      "security": 0.631404,
      "healthcare": 0.455941,
      "climate": 0.384608,
      "industry": 0.298531,
      "education": 0.305051,
      "taxes": 0.395884
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.335447,
    "turnoutBase": 0.598699,
    "volatility": 0.599059
  },
  {
    "id": "ess_trad_left_25_39_secondary_large_town_center",
    "name": "tradicni levice - 25-39 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.009984,
    "position": {
      "econ": -0.288824,
      "culture": 0.244085,
      "authority": 0.207224
    },
    "space": {
      "econ": -0.288824,
      "culture": 0.244085,
      "authority": 0.207224,
      "establishment": -0.085063,
      "globalism": -0.334744,
      "green": 0.050839,
      "ukraine": -0.324634,
      "greenDeal": 0.034546
    },
    "axisSalience": {
      "econ": 0.541306,
      "culture": 0.522516,
      "authority": 0.454601
    },
    "issuePrefs": {
      "housing": 0.129563,
      "transport": -0.011899,
      "security": 0.283047,
      "healthcare": 0.22748,
      "climate": -0.046277,
      "industry": -0.097215,
      "education": 0.057532,
      "taxes": -0.178663
    },
    "issueSalience": {
      "housing": 0.352555,
      "transport": 0.286663,
      "security": 0.438507,
      "healthcare": 0.407389,
      "climate": 0.305915,
      "industry": 0.33444,
      "education": 0.312218,
      "taxes": 0.380051
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.46311,
    "turnoutBase": 0.567023,
    "volatility": 0.607656
  },
  {
    "id": "ess_trad_left_55_plus_lower_rural_center",
    "name": "tradicni levice - 55+ - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.009026,
    "position": {
      "econ": -0.363274,
      "culture": 0.420341,
      "authority": 0.422883
    },
    "space": {
      "econ": -0.363274,
      "culture": 0.420341,
      "authority": 0.422883,
      "establishment": 0.270622,
      "globalism": -0.027911,
      "green": 0.021125,
      "ukraine": 0.160923,
      "greenDeal": -0.071936
    },
    "axisSalience": {
      "econ": 0.572575,
      "culture": 0.596543,
      "authority": 0.532238
    },
    "issuePrefs": {
      "housing": 0.14936,
      "transport": 0.011808,
      "security": 0.372033,
      "healthcare": 0.295185,
      "climate": 0.004932,
      "industry": -0.07418,
      "education": -0.053793,
      "taxes": -0.211116
    },
    "issueSalience": {
      "housing": 0.363642,
      "transport": 0.286612,
      "security": 0.488338,
      "healthcare": 0.445303,
      "climate": 0.282762,
      "industry": 0.321541,
      "education": 0.310124,
      "taxes": 0.398225
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.419975,
    "turnoutBase": 0.619472,
    "volatility": 0.545644
  },
  {
    "id": "ess_trad_left_55_plus_lower_rural_left",
    "name": "tradicni levice - 55+ - nizsi vzdelani - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.008855,
    "position": {
      "econ": -0.710541,
      "culture": 0.405197,
      "authority": 0.444234
    },
    "space": {
      "econ": -0.710541,
      "culture": 0.405197,
      "authority": 0.444234,
      "establishment": 0.275653,
      "globalism": -0.441161,
      "green": 0.268374,
      "ukraine": -0.634229,
      "greenDeal": 0.206842
    },
    "axisSalience": {
      "econ": 0.718427,
      "culture": 0.590183,
      "authority": 0.539924
    },
    "issuePrefs": {
      "housing": 0.342174,
      "transport": 0.05176,
      "security": 0.519028,
      "healthcare": 0.544005,
      "climate": -0.251145,
      "industry": -0.303555,
      "education": 0.125766,
      "taxes": -0.462966
    },
    "issueSalience": {
      "housing": 0.471617,
      "transport": 0.308986,
      "security": 0.570656,
      "healthcare": 0.584643,
      "climate": 0.420641,
      "industry": 0.449991,
      "education": 0.350429,
      "taxes": 0.539261
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.395583,
    "turnoutBase": 0.619648,
    "volatility": 0.445191
  },
  {
    "id": "ess_trad_left_40_54_secondary_town_left",
    "name": "tradicni levice - 40-54 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.00865,
    "position": {
      "econ": -0.513972,
      "culture": 0.286601,
      "authority": 0.359121
    },
    "space": {
      "econ": -0.513972,
      "culture": 0.286601,
      "authority": 0.359121,
      "establishment": 0.051479,
      "globalism": -0.068586,
      "green": -0.045303,
      "ukraine": -0.20238,
      "greenDeal": 0.000573
    },
    "axisSalience": {
      "econ": 0.635868,
      "culture": 0.540372,
      "authority": 0.509284
    },
    "issuePrefs": {
      "housing": 0.248293,
      "transport": 0.068675,
      "security": 0.331439,
      "healthcare": 0.392988,
      "climate": 0.032458,
      "industry": -0.184977,
      "education": 0.038132,
      "taxes": -0.335668
    },
    "issueSalience": {
      "housing": 0.419044,
      "transport": 0.318458,
      "security": 0.465606,
      "healthcare": 0.500073,
      "climate": 0.298177,
      "industry": 0.383587,
      "education": 0.301354,
      "taxes": 0.467974
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.490003,
    "turnoutBase": 0.591802,
    "volatility": 0.515367
  },
  {
    "id": "ess_trad_left_25_39_secondary_rural_center",
    "name": "tradicni levice - 25-39 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.008103,
    "position": {
      "econ": -0.222079,
      "culture": 0.224188,
      "authority": 0.128833
    },
    "space": {
      "econ": -0.222079,
      "culture": 0.224188,
      "authority": 0.128833,
      "establishment": 0.054335,
      "globalism": -0.16369,
      "green": -0.093097,
      "ukraine": -0.241169,
      "greenDeal": -0.132118
    },
    "axisSalience": {
      "econ": 0.513273,
      "culture": 0.514159,
      "authority": 0.42638
    },
    "issuePrefs": {
      "housing": 0.095241,
      "transport": -0.004477,
      "security": 0.191407,
      "healthcare": 0.177832,
      "climate": 0.104023,
      "industry": -0.030094,
      "education": 0.010845,
      "taxes": -0.132994
    },
    "issueSalience": {
      "housing": 0.333335,
      "transport": 0.282507,
      "security": 0.387188,
      "healthcare": 0.379586,
      "climate": 0.338253,
      "industry": 0.296853,
      "education": 0.286073,
      "taxes": 0.354477
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.484525,
    "turnoutBase": 0.571902,
    "volatility": 0.59511
  },
  {
    "id": "ess_trad_left_55_plus_secondary_large_town_unknown",
    "name": "tradicni levice - 55+ - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.00783,
    "position": {
      "econ": -0.53315,
      "culture": 0.383975,
      "authority": 0.313485
    },
    "space": {
      "econ": -0.53315,
      "culture": 0.383975,
      "authority": 0.313485,
      "establishment": -0.05037,
      "globalism": -0.13749,
      "green": -0.247955,
      "ukraine": -0.154487,
      "greenDeal": -0.268138
    },
    "axisSalience": {
      "econ": 0.643923,
      "culture": 0.58127,
      "authority": 0.492855
    },
    "issuePrefs": {
      "housing": 0.247156,
      "transport": 0.047673,
      "security": 0.338981,
      "healthcare": 0.414586,
      "climate": 0.253606,
      "industry": -0.111781,
      "education": 0.023813,
      "taxes": -0.337791
    },
    "issueSalience": {
      "housing": 0.418407,
      "transport": 0.306697,
      "security": 0.469829,
      "healthcare": 0.512168,
      "climate": 0.42202,
      "industry": 0.342597,
      "education": 0.293335,
      "taxes": 0.469163
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.477721,
    "turnoutBase": 0.668237,
    "volatility": 0.434533
  },
  {
    "id": "ess_trad_left_25_39_secondary_town_center",
    "name": "tradicni levice - 25-39 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.006906,
    "position": {
      "econ": -0.284764,
      "culture": 0.202991,
      "authority": 0.143158
    },
    "space": {
      "econ": -0.284764,
      "culture": 0.202991,
      "authority": 0.143158,
      "establishment": -0.03984,
      "globalism": -0.221437,
      "green": -0.085183,
      "ukraine": -0.281222,
      "greenDeal": -0.097631
    },
    "axisSalience": {
      "econ": 0.539601,
      "culture": 0.505256,
      "authority": 0.431537
    },
    "issuePrefs": {
      "housing": 0.132261,
      "transport": 0.00808,
      "security": 0.207952,
      "healthcare": 0.221269,
      "climate": 0.088669,
      "industry": -0.071021,
      "education": 0.046013,
      "taxes": -0.180671
    },
    "issueSalience": {
      "housing": 0.354066,
      "transport": 0.284525,
      "security": 0.396453,
      "healthcare": 0.403911,
      "climate": 0.329654,
      "industry": 0.319772,
      "education": 0.305767,
      "taxes": 0.381176
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.473527,
    "turnoutBase": 0.568606,
    "volatility": 0.603586
  },
  {
    "id": "ess_trad_left_55_plus_lower_town_left",
    "name": "tradicni levice - 55+ - nizsi vzdelani - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.00612,
    "position": {
      "econ": -0.396118,
      "culture": 0.411215,
      "authority": 0.150946
    },
    "space": {
      "econ": -0.396118,
      "culture": 0.411215,
      "authority": 0.150946,
      "establishment": -0.026718,
      "globalism": -0.37956,
      "green": 0.440592,
      "ukraine": -0.197657,
      "greenDeal": 0.060355
    },
    "axisSalience": {
      "econ": 0.58637,
      "culture": 0.59271,
      "authority": 0.434341
    },
    "issuePrefs": {
      "housing": 0.168519,
      "transport": -0.020536,
      "security": 0.29286,
      "healthcare": 0.318102,
      "climate": -0.334126,
      "industry": -0.122681,
      "education": 0.034646,
      "taxes": -0.235859
    },
    "issueSalience": {
      "housing": 0.374371,
      "transport": 0.2915,
      "security": 0.444002,
      "healthcare": 0.458137,
      "climate": 0.46711,
      "industry": 0.348701,
      "education": 0.299402,
      "taxes": 0.412081
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.375089,
    "turnoutBase": 0.609065,
    "volatility": 0.472405
  },
  {
    "id": "ess_trad_left_55_plus_lower_large_town_left",
    "name": "tradicni levice - 55+ - nizsi vzdelani - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.005744,
    "position": {
      "econ": -0.806107,
      "culture": 0.247057,
      "authority": -0.02218
    },
    "space": {
      "econ": -0.806107,
      "culture": 0.247057,
      "authority": -0.02218,
      "establishment": 0.077087,
      "globalism": -0.265744,
      "green": -0.452845,
      "ukraine": -0.265288,
      "greenDeal": -0.218103
    },
    "axisSalience": {
      "econ": 0.758565,
      "culture": 0.523764,
      "authority": 0.387985
    },
    "issuePrefs": {
      "housing": 0.413712,
      "transport": 0.125167,
      "security": 0.124481,
      "healthcare": 0.600162,
      "climate": 0.387117,
      "industry": -0.273995,
      "education": 0.16546,
      "taxes": -0.550751
    },
    "issueSalience": {
      "housing": 0.511679,
      "transport": 0.350094,
      "security": 0.349709,
      "healthcare": 0.616091,
      "climate": 0.496785,
      "industry": 0.433437,
      "education": 0.372657,
      "taxes": 0.58842
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.390222,
    "turnoutBase": 0.612698,
    "volatility": 0.463062
  },
  {
    "id": "ess_trad_left_15_24_secondary_large_town_unknown",
    "name": "tradicni levice - 15-24 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.005539,
    "position": {
      "econ": -0.528936,
      "culture": 0.327972,
      "authority": -0.153507
    },
    "space": {
      "econ": -0.528936,
      "culture": 0.327972,
      "authority": -0.153507,
      "establishment": 0.179282,
      "globalism": 0.3133,
      "green": 0.406888,
      "ukraine": 0.12493,
      "greenDeal": 0.432868
    },
    "axisSalience": {
      "econ": 0.642153,
      "culture": 0.557748,
      "authority": 0.435263
    },
    "issuePrefs": {
      "housing": 0.251558,
      "transport": 0.110795,
      "security": -0.069731,
      "healthcare": 0.407072,
      "climate": -0.414163,
      "industry": -0.288164,
      "education": -0.056772,
      "taxes": -0.341477
    },
    "issueSalience": {
      "housing": 0.420873,
      "transport": 0.342045,
      "security": 0.319049,
      "healthcare": 0.50796,
      "climate": 0.511931,
      "industry": 0.441372,
      "education": 0.311792,
      "taxes": 0.471227
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.523141,
    "turnoutBase": 0.576275,
    "volatility": 0.483865
  },
  {
    "id": "ess_trad_left_15_24_secondary_town_unknown",
    "name": "tradicni levice - 15-24 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.004787,
    "position": {
      "econ": -0.632017,
      "culture": 0.308853,
      "authority": 0.205624
    },
    "space": {
      "econ": -0.632017,
      "culture": 0.308853,
      "authority": 0.205624,
      "establishment": -0.519942,
      "globalism": -0.611225,
      "green": -0.169112,
      "ukraine": -0.563361,
      "greenDeal": -0.303366
    },
    "axisSalience": {
      "econ": 0.685447,
      "culture": 0.549718,
      "authority": 0.454025
    },
    "issuePrefs": {
      "housing": 0.310547,
      "transport": 0.029064,
      "security": 0.369055,
      "healthcare": 0.479761,
      "climate": 0.206703,
      "industry": -0.162327,
      "education": 0.178055,
      "taxes": -0.41799
    },
    "issueSalience": {
      "housing": 0.453906,
      "transport": 0.296276,
      "security": 0.486671,
      "healthcare": 0.548666,
      "climate": 0.395754,
      "industry": 0.370903,
      "education": 0.379711,
      "taxes": 0.514074
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.411731,
    "turnoutBase": 0.551802,
    "volatility": 0.546795
  },
  {
    "id": "ess_trad_left_25_39_secondary_town_left",
    "name": "tradicni levice - 25-39 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.004582,
    "position": {
      "econ": -0.474702,
      "culture": 0.228025,
      "authority": 0.23553
    },
    "space": {
      "econ": -0.474702,
      "culture": 0.228025,
      "authority": 0.23553,
      "establishment": -0.037127,
      "globalism": -0.020334,
      "green": 0.142427,
      "ukraine": -0.059684,
      "greenDeal": 0.162904
    },
    "axisSalience": {
      "econ": 0.619375,
      "culture": 0.51577,
      "authority": 0.464791
    },
    "issuePrefs": {
      "housing": 0.233723,
      "transport": 0.075191,
      "security": 0.21831,
      "healthcare": 0.360027,
      "climate": -0.148161,
      "industry": -0.216415,
      "education": 0.038593,
      "taxes": -0.314422
    },
    "issueSalience": {
      "housing": 0.410885,
      "transport": 0.322107,
      "security": 0.402254,
      "healthcare": 0.481615,
      "climate": 0.36297,
      "industry": 0.401193,
      "education": 0.301612,
      "taxes": 0.456077
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.48581,
    "turnoutBase": 0.568701,
    "volatility": 0.503341
  },
  {
    "id": "ess_trad_left_55_plus_lower_town_center",
    "name": "tradicni levice - 55+ - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004445,
    "position": {
      "econ": -0.120797,
      "culture": 0.402289,
      "authority": 0.141787
    },
    "space": {
      "econ": -0.120797,
      "culture": 0.402289,
      "authority": 0.141787,
      "establishment": 0.224206,
      "globalism": -0.305097,
      "green": 0.121868,
      "ukraine": -0.087195,
      "greenDeal": -0.066492
    },
    "axisSalience": {
      "econ": 0.470735,
      "culture": 0.588961,
      "authority": 0.431043
    },
    "issuePrefs": {
      "housing": 0.018163,
      "transport": -0.078824,
      "security": 0.262442,
      "healthcare": 0.119157,
      "climate": -0.069127,
      "industry": 0.032803,
      "education": -0.044688,
      "taxes": -0.038699
    },
    "issueSalience": {
      "housing": 0.290172,
      "transport": 0.324142,
      "security": 0.426967,
      "healthcare": 0.346728,
      "climate": 0.318711,
      "industry": 0.29837,
      "education": 0.305026,
      "taxes": 0.301671
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.399631,
    "turnoutBase": 0.617847,
    "volatility": 0.549821
  },
  {
    "id": "ess_trad_left_15_24_lower_rural_center",
    "name": "tradicni levice - 15-24 - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004411,
    "position": {
      "econ": -0.314622,
      "culture": 0.370024,
      "authority": 0.068415
    },
    "space": {
      "econ": -0.314622,
      "culture": 0.370024,
      "authority": 0.068415,
      "establishment": 0.398246,
      "globalism": 0.412818,
      "green": -0.260766,
      "ukraine": 0.488758,
      "greenDeal": 0.055327
    },
    "axisSalience": {
      "econ": 0.552141,
      "culture": 0.57541,
      "authority": 0.404629
    },
    "issuePrefs": {
      "housing": 0.128639,
      "transport": 0.061589,
      "security": 0.032616,
      "healthcare": 0.256129,
      "climate": 0.17226,
      "industry": -0.0914,
      "education": -0.144819,
      "taxes": -0.182125
    },
    "issueSalience": {
      "housing": 0.352038,
      "transport": 0.31449,
      "security": 0.298265,
      "healthcare": 0.423433,
      "climate": 0.376466,
      "industry": 0.331184,
      "education": 0.361099,
      "taxes": 0.38199
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.456629,
    "turnoutBase": 0.523939,
    "volatility": 0.604158
  },
  {
    "id": "ess_trad_left_15_24_secondary_large_town_center",
    "name": "tradicni levice - 15-24 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004376,
    "position": {
      "econ": -0.244651,
      "culture": 0.263165,
      "authority": 0.161174
    },
    "space": {
      "econ": -0.244651,
      "culture": 0.263165,
      "authority": 0.161174,
      "establishment": 0.037567,
      "globalism": -0.04505,
      "green": 0.000512,
      "ukraine": -0.025329,
      "greenDeal": 0.246703
    },
    "axisSalience": {
      "econ": 0.522754,
      "culture": 0.530529,
      "authority": 0.438022
    },
    "issuePrefs": {
      "housing": 0.102978,
      "transport": 0.008387,
      "security": 0.183749,
      "healthcare": 0.197202,
      "climate": -0.069446,
      "industry": -0.124379,
      "education": -0.02348,
      "taxes": -0.144569
    },
    "issueSalience": {
      "housing": 0.337668,
      "transport": 0.284697,
      "security": 0.3829,
      "healthcare": 0.390433,
      "climate": 0.31889,
      "industry": 0.349652,
      "education": 0.293149,
      "taxes": 0.360959
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.490302,
    "turnoutBase": 0.571315,
    "volatility": 0.596619
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_large_town_left",
    "name": "tradicni levice - 55+ - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.004376,
    "position": {
      "econ": -0.551698,
      "culture": 0.392585,
      "authority": 0.221041
    },
    "space": {
      "econ": -0.551698,
      "culture": 0.392585,
      "authority": 0.221041,
      "establishment": 0.05534,
      "globalism": -0.145024,
      "green": 0.055094,
      "ukraine": -0.094225,
      "greenDeal": 0.110631
    },
    "axisSalience": {
      "econ": 0.651713,
      "culture": 0.584886,
      "authority": 0.459575
    },
    "issuePrefs": {
      "housing": 0.256324,
      "transport": 0.049856,
      "security": 0.280612,
      "healthcare": 0.428629,
      "climate": -0.070644,
      "industry": -0.209667,
      "education": 0.026908,
      "taxes": -0.350112
    },
    "issueSalience": {
      "housing": 0.423541,
      "transport": 0.30792,
      "security": 0.437143,
      "healthcare": 0.520032,
      "climate": 0.319561,
      "industry": 0.397414,
      "education": 0.295069,
      "taxes": 0.476063
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.595726,
    "turnoutBase": 0.731937,
    "volatility": 0.375019
  },
  {
    "id": "ess_trad_left_25_39_tertiary_rural_left",
    "name": "tradicni levice - 25-39 - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.00424,
    "position": {
      "econ": -0.43575,
      "culture": 0.261012,
      "authority": 0.181576
    },
    "space": {
      "econ": -0.43575,
      "culture": 0.261012,
      "authority": 0.181576,
      "establishment": 0.007517,
      "globalism": -0.115308,
      "green": 0.282334,
      "ukraine": -0.237298,
      "greenDeal": 0.418799
    },
    "axisSalience": {
      "econ": 0.603015,
      "culture": 0.529625,
      "authority": 0.445367
    },
    "issuePrefs": {
      "housing": 0.208341,
      "transport": 0.048118,
      "security": 0.2254,
      "healthcare": 0.334621,
      "climate": -0.320544,
      "industry": -0.253975,
      "education": 0.038594,
      "taxes": -0.282419
    },
    "issueSalience": {
      "housing": 0.396671,
      "transport": 0.306946,
      "security": 0.406224,
      "healthcare": 0.467388,
      "climate": 0.459505,
      "industry": 0.422226,
      "education": 0.301612,
      "taxes": 0.438154
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.593683,
    "turnoutBase": 0.630263,
    "volatility": 0.449323
  },
  {
    "id": "ess_trad_left_40_54_tertiary_large_town_center",
    "name": "tradicni levice - 40-54 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004103,
    "position": {
      "econ": -0.171567,
      "culture": 0.395634,
      "authority": 0.216641
    },
    "space": {
      "econ": -0.171567,
      "culture": 0.395634,
      "authority": 0.216641,
      "establishment": -0.262801,
      "globalism": -0.548326,
      "green": 0.128251,
      "ukraine": -0.668595,
      "greenDeal": -0.064452
    },
    "axisSalience": {
      "econ": 0.492058,
      "culture": 0.586166,
      "authority": 0.457991
    },
    "issuePrefs": {
      "housing": 0.046886,
      "transport": -0.094121,
      "security": 0.397281,
      "healthcare": 0.155179,
      "climate": -0.074294,
      "industry": 0.007762,
      "education": 0.023336,
      "taxes": -0.076052
    },
    "issueSalience": {
      "housing": 0.306256,
      "transport": 0.332708,
      "security": 0.502477,
      "healthcare": 0.3669,
      "climate": 0.321605,
      "industry": 0.284347,
      "education": 0.293068,
      "taxes": 0.322589
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.546076,
    "turnoutBase": 0.640802,
    "volatility": 0.593652
  },
  {
    "id": "ess_trad_left_15_24_secondary_rural_center",
    "name": "tradicni levice - 15-24 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004034,
    "position": {
      "econ": -0.199437,
      "culture": 0.30734,
      "authority": 0.094876
    },
    "space": {
      "econ": -0.199437,
      "culture": 0.30734,
      "authority": 0.094876,
      "establishment": 0.146931,
      "globalism": -0.104224,
      "green": 0.092196,
      "ukraine": 0.014703,
      "greenDeal": 0.163796
    },
    "axisSalience": {
      "econ": 0.503764,
      "culture": 0.549083,
      "authority": 0.414155
    },
    "issuePrefs": {
      "housing": 0.07281,
      "transport": -0.017969,
      "security": 0.162463,
      "healthcare": 0.168182,
      "climate": -0.112244,
      "industry": -0.075731,
      "education": -0.036775,
      "taxes": -0.106714
    },
    "issueSalience": {
      "housing": 0.320773,
      "transport": 0.290063,
      "security": 0.370979,
      "healthcare": 0.374182,
      "climate": 0.342857,
      "industry": 0.322409,
      "education": 0.300594,
      "taxes": 0.33976
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.495501,
    "turnoutBase": 0.575143,
    "volatility": 0.586776
  },
  {
    "id": "ess_trad_left_15_24_secondary_town_center",
    "name": "tradicni levice - 15-24 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003966,
    "position": {
      "econ": -0.149268,
      "culture": 0.341677,
      "authority": 0.331188
    },
    "space": {
      "econ": -0.149268,
      "culture": 0.341677,
      "authority": 0.331188,
      "establishment": 0.009482,
      "globalism": -0.461618,
      "green": -0.122186,
      "ukraine": -0.525049,
      "greenDeal": -0.274235
    },
    "axisSalience": {
      "econ": 0.482693,
      "culture": 0.563504,
      "authority": 0.499228
    },
    "issuePrefs": {
      "housing": 0.041096,
      "transport": -0.079579,
      "security": 0.426102,
      "healthcare": 0.134807,
      "climate": 0.16476,
      "industry": 0.058655,
      "education": 0.017794,
      "taxes": -0.066472
    },
    "issueSalience": {
      "housing": 0.303014,
      "transport": 0.324564,
      "security": 0.518617,
      "healthcare": 0.355492,
      "climate": 0.372265,
      "industry": 0.312847,
      "education": 0.289964,
      "taxes": 0.317224
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.463061,
    "turnoutBase": 0.570332,
    "volatility": 0.599147
  },
  {
    "id": "ess_trad_left_55_plus_secondary_rural_unknown",
    "name": "tradicni levice - 55+ - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.003829,
    "position": {
      "econ": -0.517917,
      "culture": 0.358715,
      "authority": 0.020782
    },
    "space": {
      "econ": -0.517917,
      "culture": 0.358715,
      "authority": 0.020782,
      "establishment": -0.179974,
      "globalism": -0.345433,
      "green": -0.032784,
      "ukraine": -0.425665,
      "greenDeal": -0.157392
    },
    "axisSalience": {
      "econ": 0.637525,
      "culture": 0.57066,
      "authority": 0.387482
    },
    "issuePrefs": {
      "housing": 0.241808,
      "transport": 0.023458,
      "security": 0.209556,
      "healthcare": 0.401597,
      "climate": 0.067675,
      "industry": -0.135899,
      "education": 0.074745,
      "taxes": -0.329854
    },
    "issueSalience": {
      "housing": 0.415413,
      "transport": 0.293137,
      "security": 0.397352,
      "healthcare": 0.504894,
      "climate": 0.317898,
      "industry": 0.356103,
      "education": 0.321857,
      "taxes": 0.464718
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.454876,
    "turnoutBase": 0.663701,
    "volatility": 0.446198
  },
  {
    "id": "ess_trad_left_40_54_secondary_town_unknown",
    "name": "tradicni levice - 40-54 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.00359,
    "position": {
      "econ": -0.330587,
      "culture": 0.375484,
      "authority": -0.055974
    },
    "space": {
      "econ": -0.330587,
      "culture": 0.375484,
      "authority": -0.055974,
      "establishment": -0.216084,
      "globalism": -0.278504,
      "green": 0.095327,
      "ukraine": -0.450992,
      "greenDeal": 0.083842
    },
    "axisSalience": {
      "econ": 0.558846,
      "culture": 0.577703,
      "authority": 0.400151
    },
    "issuePrefs": {
      "housing": 0.136765,
      "transport": -0.018361,
      "security": 0.156641,
      "healthcare": 0.268061,
      "climate": -0.092111,
      "industry": -0.104605,
      "education": 0.009192,
      "taxes": -0.192964
    },
    "issueSalience": {
      "housing": 0.356588,
      "transport": 0.290282,
      "security": 0.367719,
      "healthcare": 0.430114,
      "climate": 0.331582,
      "industry": 0.338579,
      "education": 0.285148,
      "taxes": 0.38806
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.456003,
    "turnoutBase": 0.582437,
    "volatility": 0.539448
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_large_town_center",
    "name": "tradicni levice - 55+ - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003487,
    "position": {
      "econ": -0.177316,
      "culture": 0.521664,
      "authority": 0.113544
    },
    "space": {
      "econ": -0.177316,
      "culture": 0.521664,
      "authority": 0.113544,
      "establishment": -0.121526,
      "globalism": -0.402841,
      "green": -0.021592,
      "ukraine": -0.686619,
      "greenDeal": -0.221154
    },
    "axisSalience": {
      "econ": 0.494473,
      "culture": 0.639099,
      "authority": 0.420876
    },
    "issuePrefs": {
      "housing": 0.034924,
      "transport": -0.097911,
      "security": 0.343904,
      "healthcare": 0.1694,
      "climate": 0.07747,
      "industry": 0.065411,
      "education": -0.051401,
      "taxes": -0.065068
    },
    "issueSalience": {
      "housing": 0.299557,
      "transport": 0.33483,
      "security": 0.472586,
      "healthcare": 0.374864,
      "climate": 0.323383,
      "industry": 0.31663,
      "education": 0.308785,
      "taxes": 0.316438
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.566107,
    "turnoutBase": 0.725747,
    "volatility": 0.490937
  },
  {
    "id": "ess_trad_left_25_39_tertiary_town_center",
    "name": "tradicni levice - 25-39 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003419,
    "position": {
      "econ": -0.211509,
      "culture": 0.248826,
      "authority": 0.273046
    },
    "space": {
      "econ": -0.211509,
      "culture": 0.248826,
      "authority": 0.273046,
      "establishment": -0.12673,
      "globalism": -0.120884,
      "green": 0.042957,
      "ukraine": -0.426005,
      "greenDeal": -0.072931
    },
    "axisSalience": {
      "econ": 0.508834,
      "culture": 0.524507,
      "authority": 0.478297
    },
    "issuePrefs": {
      "housing": 0.086471,
      "transport": -0.006417,
      "security": 0.294799,
      "healthcare": 0.172193,
      "climate": -0.010509,
      "industry": -0.035002,
      "education": -0.009732,
      "taxes": -0.122427
    },
    "issueSalience": {
      "housing": 0.328424,
      "transport": 0.283594,
      "security": 0.445088,
      "healthcare": 0.376428,
      "climate": 0.285885,
      "industry": 0.299601,
      "education": 0.28545,
      "taxes": 0.348559
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.582609,
    "turnoutBase": 0.625564,
    "volatility": 0.561406
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_town_center",
    "name": "tradicni levice - 55+ - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003351,
    "position": {
      "econ": -0.199496,
      "culture": 0.332656,
      "authority": 0.284274
    },
    "space": {
      "econ": -0.199496,
      "culture": 0.332656,
      "authority": 0.284274,
      "establishment": 0.179912,
      "globalism": -0.163188,
      "green": 0.077506,
      "ukraine": -0.318447,
      "greenDeal": 0.001383
    },
    "axisSalience": {
      "econ": 0.503788,
      "culture": 0.559715,
      "authority": 0.482339
    },
    "issuePrefs": {
      "housing": 0.069804,
      "transport": -0.029587,
      "security": 0.324243,
      "healthcare": 0.170249,
      "climate": -0.056191,
      "industry": -0.032222,
      "education": -0.032649,
      "taxes": -0.103718
    },
    "issueSalience": {
      "housing": 0.31909,
      "transport": 0.296569,
      "security": 0.461576,
      "healthcare": 0.37534,
      "climate": 0.311467,
      "industry": 0.298044,
      "education": 0.298283,
      "taxes": 0.338082
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.604602,
    "turnoutBase": 0.736297,
    "volatility": 0.463808
  },
  {
    "id": "ess_trad_left_25_39_secondary_large_town_unknown",
    "name": "tradicni levice - 25-39 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.003316,
    "position": {
      "econ": -0.694014,
      "culture": 0.254276,
      "authority": 0.209785
    },
    "space": {
      "econ": -0.694014,
      "culture": 0.254276,
      "authority": 0.209785,
      "establishment": -0.00588,
      "globalism": -0.114632,
      "green": 0.009384,
      "ukraine": -0.276668,
      "greenDeal": 0.112901
    },
    "axisSalience": {
      "econ": 0.711486,
      "culture": 0.526796,
      "authority": 0.455523
    },
    "issuePrefs": {
      "housing": 0.351194,
      "transport": 0.113978,
      "security": 0.244031,
      "healthcare": 0.520032,
      "climate": -0.038369,
      "industry": -0.300573,
      "education": 0.102786,
      "taxes": -0.469177
    },
    "issueSalience": {
      "housing": 0.476669,
      "transport": 0.343828,
      "security": 0.416658,
      "healthcare": 0.571218,
      "climate": 0.301487,
      "industry": 0.448321,
      "education": 0.33756,
      "taxes": 0.542739
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.482652,
    "turnoutBase": 0.569794,
    "volatility": 0.500529
  },
  {
    "id": "ess_trad_left_55_plus_secondary_town_unknown",
    "name": "tradicni levice - 55+ - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.003214,
    "position": {
      "econ": -0.48316,
      "culture": 0.303535,
      "authority": 0.331067
    },
    "space": {
      "econ": -0.48316,
      "culture": 0.303535,
      "authority": 0.331067,
      "establishment": -0.200435,
      "globalism": -0.277421,
      "green": 0.057441,
      "ukraine": -0.591151,
      "greenDeal": -0.084329
    },
    "axisSalience": {
      "econ": 0.622927,
      "culture": 0.547485,
      "authority": 0.499184
    },
    "issuePrefs": {
      "housing": 0.229314,
      "transport": 0.032863,
      "security": 0.38748,
      "healthcare": 0.372158,
      "climate": -0.017745,
      "industry": -0.147378,
      "education": 0.070754,
      "taxes": -0.311451
    },
    "issueSalience": {
      "housing": 0.408416,
      "transport": 0.298403,
      "security": 0.496989,
      "healthcare": 0.488408,
      "climate": 0.289937,
      "industry": 0.362532,
      "education": 0.319622,
      "taxes": 0.454412
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.45732,
    "turnoutBase": 0.662985,
    "volatility": 0.448039
  },
  {
    "id": "ess_trad_left_55_plus_lower_rural_unknown",
    "name": "tradicni levice - 55+ - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.003111,
    "position": {
      "econ": -0.258503,
      "culture": 0.290698,
      "authority": -0.194367
    },
    "space": {
      "econ": -0.258503,
      "culture": 0.290698,
      "authority": -0.194367,
      "establishment": -0.31526,
      "globalism": -0.380363,
      "green": 0.246672,
      "ukraine": -0.455257,
      "greenDeal": 0.294779
    },
    "axisSalience": {
      "econ": 0.528571,
      "culture": 0.542093,
      "authority": 0.449972
    },
    "issuePrefs": {
      "housing": 0.107293,
      "transport": -0.033344,
      "security": 0.065774,
      "healthcare": 0.209378,
      "climate": -0.260142,
      "industry": -0.137332,
      "education": 0.043976,
      "taxes": -0.151238
    },
    "issueSalience": {
      "housing": 0.340084,
      "transport": 0.298672,
      "security": 0.316833,
      "healthcare": 0.397252,
      "climate": 0.42568,
      "industry": 0.356906,
      "education": 0.304627,
      "taxes": 0.364693
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.351957,
    "turnoutBase": 0.598966,
    "volatility": 0.498373
  },
  {
    "id": "ess_trad_left_40_54_tertiary_rural_left",
    "name": "tradicni levice - 40-54 - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.003009,
    "position": {
      "econ": -0.87569,
      "culture": 0.514829,
      "authority": 0.215902
    },
    "space": {
      "econ": -0.87569,
      "culture": 0.514829,
      "authority": 0.215902,
      "establishment": -0.273984,
      "globalism": -0.640801,
      "green": -0.122948,
      "ukraine": -0.500903,
      "greenDeal": -0.301166
    },
    "axisSalience": {
      "econ": 0.78779,
      "culture": 0.636228,
      "authority": 0.457725
    },
    "issuePrefs": {
      "housing": 0.41985,
      "transport": 0.049357,
      "security": 0.433428,
      "healthcare": 0.671683,
      "climate": 0.172849,
      "industry": -0.237868,
      "education": 0.170952,
      "taxes": -0.568717
    },
    "issueSalience": {
      "housing": 0.515116,
      "transport": 0.30764,
      "security": 0.52272,
      "healthcare": 0.656142,
      "climate": 0.376795,
      "industry": 0.413206,
      "education": 0.375733,
      "taxes": 0.598482
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.539633,
    "turnoutBase": 0.640411,
    "volatility": 0.494659
  },
  {
    "id": "ess_trad_left_15_24_secondary_rural_unknown",
    "name": "tradicni levice - 15-24 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.002975,
    "position": {
      "econ": -0.460338,
      "culture": 0.257705,
      "authority": -0.313903
    },
    "space": {
      "econ": -0.460338,
      "culture": 0.257705,
      "authority": -0.313903,
      "establishment": 0.149801,
      "globalism": 0.167101,
      "green": 0.363624,
      "ukraine": 0.130746,
      "greenDeal": 0.412318
    },
    "axisSalience": {
      "econ": 0.613342,
      "culture": 0.528236,
      "authority": 0.493005
    },
    "issuePrefs": {
      "housing": 0.222261,
      "transport": 0.08875,
      "security": -0.163,
      "healthcare": 0.35206,
      "climate": -0.377258,
      "industry": -0.264325,
      "education": -0.016478,
      "taxes": -0.300519
    },
    "issueSalience": {
      "housing": 0.404466,
      "transport": 0.3297,
      "security": 0.37128,
      "healthcare": 0.477153,
      "climate": 0.491265,
      "industry": 0.428022,
      "education": 0.289228,
      "taxes": 0.44829
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.51201,
    "turnoutBase": 0.575243,
    "volatility": 0.486518
  },
  {
    "id": "ess_trad_left_55_plus_lower_town_right",
    "name": "tradicni levice - 55+ - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00294,
    "position": {
      "econ": -0.22689,
      "culture": 0.27846,
      "authority": 0.186796
    },
    "space": {
      "econ": -0.22689,
      "culture": 0.27846,
      "authority": 0.186796,
      "establishment": 0.207299,
      "globalism": 0.23502,
      "green": 0.424861,
      "ukraine": 0.216581,
      "greenDeal": 0.967646
    },
    "axisSalience": {
      "econ": 0.515294,
      "culture": 0.536953,
      "authority": 0.447246
    },
    "issuePrefs": {
      "housing": 0.091374,
      "transport": 0.034802,
      "security": 0.134152,
      "healthcare": 0.185637,
      "climate": -0.57684,
      "industry": -0.286481,
      "education": -0.094712,
      "taxes": -0.129945
    },
    "issueSalience": {
      "housing": 0.331169,
      "transport": 0.299489,
      "security": 0.355125,
      "healthcare": 0.383957,
      "climate": 0.603031,
      "industry": 0.44043,
      "education": 0.333039,
      "taxes": 0.352769
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.430685,
    "turnoutBase": 0.617255,
    "volatility": 0.451343
  },
  {
    "id": "ess_trad_left_55_plus_secondary_rural_right",
    "name": "tradicni levice - 55+ - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002872,
    "position": {
      "econ": -0.126651,
      "culture": 0.322816,
      "authority": 0.17762
    },
    "space": {
      "econ": -0.126651,
      "culture": 0.322816,
      "authority": 0.17762,
      "establishment": -0.198042,
      "globalism": -0.225538,
      "green": 0.070031,
      "ukraine": -0.20565,
      "greenDeal": 0.033362
    },
    "axisSalience": {
      "econ": 0.473193,
      "culture": 0.555583,
      "authority": 0.443943
    },
    "issuePrefs": {
      "housing": 0.03092,
      "transport": -0.053509,
      "security": 0.257562,
      "healthcare": 0.117014,
      "climate": -0.059764,
      "industry": -0.008159,
      "education": -0.032971,
      "taxes": -0.05245
    },
    "issueSalience": {
      "housing": 0.297315,
      "transport": 0.309965,
      "security": 0.424235,
      "healthcare": 0.345528,
      "climate": 0.313468,
      "industry": 0.284569,
      "education": 0.298464,
      "taxes": 0.309372
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.460624,
    "turnoutBase": 0.663069,
    "volatility": 0.447824
  },
  {
    "id": "ess_trad_left_25_39_secondary_rural_left",
    "name": "tradicni levice - 25-39 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002735,
    "position": {
      "econ": -0.40484,
      "culture": 0.163631,
      "authority": 0.253479
    },
    "space": {
      "econ": -0.40484,
      "culture": 0.163631,
      "authority": 0.253479,
      "establishment": 0.227356,
      "globalism": 0.191162,
      "green": 0.339715,
      "ukraine": 0.073155,
      "greenDeal": 0.436151
    },
    "axisSalience": {
      "econ": 0.590033,
      "culture": 0.488725,
      "authority": 0.471253
    },
    "issuePrefs": {
      "housing": 0.203026,
      "transport": 0.094696,
      "security": 0.162712,
      "healthcare": 0.304575,
      "climate": -0.366717,
      "industry": -0.261449,
      "education": -0.002165,
      "taxes": -0.271849
    },
    "issueSalience": {
      "housing": 0.393695,
      "transport": 0.33303,
      "security": 0.371119,
      "healthcare": 0.450562,
      "climate": 0.485362,
      "industry": 0.426411,
      "education": 0.281212,
      "taxes": 0.432235
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.519658,
    "turnoutBase": 0.577957,
    "volatility": 0.479538
  },
  {
    "id": "ess_trad_left_40_54_secondary_large_town_unknown",
    "name": "tradicni levice - 40-54 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.002667,
    "position": {
      "econ": -0.259589,
      "culture": 0.298822,
      "authority": 0.114658
    },
    "space": {
      "econ": -0.259589,
      "culture": 0.298822,
      "authority": 0.114658,
      "establishment": 0.051261,
      "globalism": 0.009389,
      "green": 0.008373,
      "ukraine": -0.249385,
      "greenDeal": 0.305604
    },
    "axisSalience": {
      "econ": 0.529027,
      "culture": 0.545505,
      "authority": 0.421277
    },
    "issuePrefs": {
      "housing": 0.106915,
      "transport": 0.012236,
      "security": 0.173019,
      "healthcare": 0.21081,
      "climate": -0.091598,
      "industry": -0.138968,
      "education": -0.044352,
      "taxes": -0.151045
    },
    "issueSalience": {
      "housing": 0.339872,
      "transport": 0.286852,
      "security": 0.376891,
      "healthcare": 0.398053,
      "climate": 0.331295,
      "industry": 0.357822,
      "education": 0.304837,
      "taxes": 0.364585
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.494664,
    "turnoutBase": 0.591794,
    "volatility": 0.515387
  },
  {
    "id": "ess_trad_left_40_54_lower_large_town_center",
    "name": "tradicni levice - 40-54 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002633,
    "position": {
      "econ": -0.426368,
      "culture": 0.132917,
      "authority": 0.478911
    },
    "space": {
      "econ": -0.426368,
      "culture": 0.132917,
      "authority": 0.478911,
      "establishment": -0.166407,
      "globalism": -0.206445,
      "green": 0.076773,
      "ukraine": -0.635788,
      "greenDeal": -0.523909
    },
    "axisSalience": {
      "econ": 0.599075,
      "culture": 0.475825,
      "authority": 0.552408
    },
    "issuePrefs": {
      "housing": 0.218553,
      "transport": 0.057894,
      "security": 0.422164,
      "healthcare": 0.317619,
      "climate": 0.091418,
      "industry": -0.046466,
      "education": 0.101225,
      "taxes": -0.291035
    },
    "issueSalience": {
      "housing": 0.402389,
      "transport": 0.31242,
      "security": 0.516412,
      "healthcare": 0.457866,
      "climate": 0.331194,
      "industry": 0.306021,
      "education": 0.336686,
      "taxes": 0.44298
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.374301,
    "turnoutBase": 0.524176,
    "volatility": 0.674977
  },
  {
    "id": "ess_trad_left_40_54_secondary_rural_unknown",
    "name": "tradicni levice - 40-54 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.002598,
    "position": {
      "econ": -0.442636,
      "culture": 0.224233,
      "authority": 0.040829
    },
    "space": {
      "econ": -0.442636,
      "culture": 0.224233,
      "authority": 0.040829,
      "establishment": -0.219551,
      "globalism": -0.321991,
      "green": 0.027693,
      "ukraine": -0.339383,
      "greenDeal": -0.290908
    },
    "axisSalience": {
      "econ": 0.605907,
      "culture": 0.514178,
      "authority": 0.394699
    },
    "issuePrefs": {
      "housing": 0.216542,
      "transport": 0.031658,
      "security": 0.173208,
      "healthcare": 0.336636,
      "climate": 0.061515,
      "industry": -0.093433,
      "education": 0.098589,
      "taxes": -0.29179
    },
    "issueSalience": {
      "housing": 0.401263,
      "transport": 0.297729,
      "security": 0.376997,
      "healthcare": 0.468516,
      "climate": 0.314449,
      "industry": 0.332322,
      "education": 0.33521,
      "taxes": 0.443402
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.453116,
    "turnoutBase": 0.582316,
    "volatility": 0.53976
  },
  {
    "id": "ess_trad_left_25_39_secondary_town_unknown",
    "name": "tradicni levice - 25-39 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.002564,
    "position": {
      "econ": -0.462297,
      "culture": 0.321289,
      "authority": 0.01839
    },
    "space": {
      "econ": -0.462297,
      "culture": 0.321289,
      "authority": 0.01839,
      "establishment": -0.20549,
      "globalism": -0.332329,
      "green": -0.190087,
      "ukraine": -0.480793,
      "greenDeal": -0.296462
    },
    "axisSalience": {
      "econ": 0.614165,
      "culture": 0.554941,
      "authority": 0.38662
    },
    "issuePrefs": {
      "housing": 0.215709,
      "transport": 0.017863,
      "security": 0.199645,
      "healthcare": 0.358557,
      "climate": 0.219872,
      "industry": -0.083674,
      "education": 0.071612,
      "taxes": -0.294299
    },
    "issueSalience": {
      "housing": 0.400797,
      "transport": 0.290003,
      "security": 0.391801,
      "healthcare": 0.480792,
      "climate": 0.403128,
      "industry": 0.326857,
      "education": 0.320103,
      "taxes": 0.444807
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.453621,
    "turnoutBase": 0.562808,
    "volatility": 0.518494
  },
  {
    "id": "ess_trad_left_25_39_tertiary_rural_center",
    "name": "tradicni levice - 25-39 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002564,
    "position": {
      "econ": -0.29012,
      "culture": 0.279862,
      "authority": 0.215708
    },
    "space": {
      "econ": -0.29012,
      "culture": 0.279862,
      "authority": 0.215708,
      "establishment": -0.175095,
      "globalism": -0.327557,
      "green": 0.195748,
      "ukraine": -0.564317,
      "greenDeal": -0.019583
    },
    "axisSalience": {
      "econ": 0.54185,
      "culture": 0.537542,
      "authority": 0.457655
    },
    "issuePrefs": {
      "housing": 0.125982,
      "transport": -0.017152,
      "security": 0.316206,
      "healthcare": 0.231275,
      "climate": -0.135455,
      "industry": -0.07838,
      "education": 0.043739,
      "taxes": -0.175303
    },
    "issueSalience": {
      "housing": 0.35055,
      "transport": 0.289605,
      "security": 0.457075,
      "healthcare": 0.409514,
      "climate": 0.355855,
      "industry": 0.323893,
      "education": 0.304494,
      "taxes": 0.37817
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.566339,
    "turnoutBase": 0.623872,
    "volatility": 0.565759
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_town_left",
    "name": "tradicni levice - 55+ - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.00253,
    "position": {
      "econ": -0.433665,
      "culture": 0.217043,
      "authority": 0.329203
    },
    "space": {
      "econ": -0.433665,
      "culture": 0.217043,
      "authority": 0.329203,
      "establishment": 0.217016,
      "globalism": -0.050425,
      "green": 0.096287,
      "ukraine": -0.153706,
      "greenDeal": 0.342736
    },
    "axisSalience": {
      "econ": 0.602139,
      "culture": 0.511158,
      "authority": 0.498513
    },
    "issuePrefs": {
      "housing": 0.21247,
      "transport": 0.063298,
      "security": 0.286251,
      "healthcare": 0.329602,
      "climate": -0.165292,
      "industry": -0.242675,
      "education": 0.039208,
      "taxes": -0.286194
    },
    "issueSalience": {
      "housing": 0.398983,
      "transport": 0.315447,
      "security": 0.4403,
      "healthcare": 0.464577,
      "climate": 0.372564,
      "industry": 0.415898,
      "education": 0.301956,
      "taxes": 0.440268
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.614336,
    "turnoutBase": 0.737596,
    "volatility": 0.360469
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_rural_center",
    "name": "tradicni levice - 55+ - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002496,
    "position": {
      "econ": -0.332192,
      "culture": 0.257629,
      "authority": 0.147939
    },
    "space": {
      "econ": -0.332192,
      "culture": 0.257629,
      "authority": 0.147939,
      "establishment": -0.130331,
      "globalism": -0.027027,
      "green": 0.231037,
      "ukraine": -0.253755,
      "greenDeal": 0.038969
    },
    "axisSalience": {
      "econ": 0.55952,
      "culture": 0.528204,
      "authority": 0.433258
    },
    "issuePrefs": {
      "housing": 0.15179,
      "transport": 0.033432,
      "security": 0.189023,
      "healthcare": 0.259788,
      "climate": -0.177258,
      "industry": -0.115788,
      "education": -0.004498,
      "taxes": -0.208263
    },
    "issueSalience": {
      "housing": 0.365002,
      "transport": 0.298722,
      "security": 0.385853,
      "healthcare": 0.425481,
      "climate": 0.379264,
      "industry": 0.344841,
      "education": 0.282519,
      "taxes": 0.396627
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.587952,
    "turnoutBase": 0.725438,
    "volatility": 0.49173
  },
  {
    "id": "ess_trad_left_25_39_secondary_large_town_left",
    "name": "tradicni levice - 25-39 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002428,
    "position": {
      "econ": -0.364382,
      "culture": 0.314748,
      "authority": 0.119208
    },
    "space": {
      "econ": -0.364382,
      "culture": 0.314748,
      "authority": 0.119208,
      "establishment": 0.052544,
      "globalism": 0.19986,
      "green": 0.357779,
      "ukraine": 0.211267,
      "greenDeal": 0.344232
    },
    "axisSalience": {
      "econ": 0.573041,
      "culture": 0.552194,
      "authority": 0.422915
    },
    "issuePrefs": {
      "housing": 0.162641,
      "transport": 0.058424,
      "security": 0.109162,
      "healthcare": 0.287535,
      "climate": -0.353985,
      "industry": -0.193577,
      "education": -0.066679,
      "taxes": -0.224585
    },
    "issueSalience": {
      "housing": 0.371079,
      "transport": 0.312718,
      "security": 0.341131,
      "healthcare": 0.44102,
      "climate": 0.478232,
      "industry": 0.388403,
      "education": 0.31734,
      "taxes": 0.405768
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.506195,
    "turnoutBase": 0.571839,
    "volatility": 0.495271
  },
  {
    "id": "ess_trad_left_40_54_tertiary_rural_center",
    "name": "tradicni levice - 40-54 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002428,
    "position": {
      "econ": -0.205762,
      "culture": 0.245223,
      "authority": 0.36713
    },
    "space": {
      "econ": -0.205762,
      "culture": 0.245223,
      "authority": 0.36713,
      "establishment": -0.04003,
      "globalism": -0.666032,
      "green": 0.484073,
      "ukraine": -0.459705,
      "greenDeal": 0.441266
    },
    "axisSalience": {
      "econ": 0.50642,
      "culture": 0.522994,
      "authority": 0.512167
    },
    "issuePrefs": {
      "housing": 0.083743,
      "transport": -0.072623,
      "security": 0.452945,
      "healthcare": 0.167767,
      "climate": -0.472087,
      "industry": -0.156414,
      "education": 0.110082,
      "taxes": -0.118722
    },
    "issueSalience": {
      "housing": 0.326896,
      "transport": 0.320669,
      "security": 0.533649,
      "healthcare": 0.373949,
      "climate": 0.544369,
      "industry": 0.367592,
      "education": 0.341646,
      "taxes": 0.346484
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.556836,
    "turnoutBase": 0.648599,
    "volatility": 0.573603
  },
  {
    "id": "ess_trad_left_55_plus_lower_town_unknown",
    "name": "tradicni levice - 55+ - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.002428,
    "position": {
      "econ": -0.504546,
      "culture": 0.194316,
      "authority": 0.046468
    },
    "space": {
      "econ": -0.504546,
      "culture": 0.194316,
      "authority": 0.046468,
      "establishment": -0.358739,
      "globalism": -0.697961,
      "green": -0.054979,
      "ukraine": -0.653477,
      "greenDeal": -0.364004
    },
    "axisSalience": {
      "econ": 0.631909,
      "culture": 0.501613,
      "authority": 0.396728
    },
    "issuePrefs": {
      "housing": 0.254182,
      "transport": 0.007404,
      "security": 0.26113,
      "healthcare": 0.378818,
      "climate": 0.141506,
      "industry": -0.109753,
      "education": 0.206632,
      "taxes": -0.339955
    },
    "issueSalience": {
      "housing": 0.422342,
      "transport": 0.284146,
      "security": 0.426233,
      "healthcare": 0.492138,
      "climate": 0.359243,
      "industry": 0.341462,
      "education": 0.395714,
      "taxes": 0.470375
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.329423,
    "turnoutBase": 0.597444,
    "volatility": 0.502287
  },
  {
    "id": "ess_trad_left_40_54_secondary_town_right",
    "name": "tradicni levice - 40-54 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002393,
    "position": {
      "econ": -0.146636,
      "culture": 0.276952,
      "authority": 0.339164
    },
    "space": {
      "econ": -0.146636,
      "culture": 0.276952,
      "authority": 0.339164,
      "establishment": 0.100884,
      "globalism": 0.097604,
      "green": 0.093021,
      "ukraine": -0.093433,
      "greenDeal": 0.287805
    },
    "axisSalience": {
      "econ": 0.481587,
      "culture": 0.53632,
      "authority": 0.502099
    },
    "issuePrefs": {
      "housing": 0.047416,
      "transport": -0.00148,
      "security": 0.277734,
      "healthcare": 0.127734,
      "climate": -0.14756,
      "industry": -0.086674,
      "education": -0.083213,
      "taxes": -0.072344
    },
    "issueSalience": {
      "housing": 0.306553,
      "transport": 0.280829,
      "security": 0.435531,
      "healthcare": 0.351531,
      "climate": 0.362634,
      "industry": 0.328538,
      "education": 0.326599,
      "taxes": 0.320512
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.503927,
    "turnoutBase": 0.593531,
    "volatility": 0.51092
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_rural_left",
    "name": "tradicni levice - 55+ - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002359,
    "position": {
      "econ": -0.322103,
      "culture": 0.345563,
      "authority": 0.239438
    },
    "space": {
      "econ": -0.322103,
      "culture": 0.345563,
      "authority": 0.239438,
      "establishment": 0.122872,
      "globalism": 0.003018,
      "green": 0.17201,
      "ukraine": -0.205092,
      "greenDeal": 0.206733
    },
    "axisSalience": {
      "econ": 0.555283,
      "culture": 0.565137,
      "authority": 0.466198
    },
    "issuePrefs": {
      "housing": 0.135689,
      "transport": 0.018686,
      "security": 0.261073,
      "healthcare": 0.259559,
      "climate": -0.181733,
      "industry": -0.135582,
      "education": -0.044306,
      "taxes": -0.190447
    },
    "issueSalience": {
      "housing": 0.355986,
      "transport": 0.290464,
      "security": 0.426201,
      "healthcare": 0.425353,
      "climate": 0.38177,
      "industry": 0.355926,
      "education": 0.304812,
      "taxes": 0.38665
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.610011,
    "turnoutBase": 0.734301,
    "volatility": 0.368942
  },
  {
    "id": "ess_trad_left_15_24_tertiary_rural_center",
    "name": "tradicni levice - 15-24 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002291,
    "position": {
      "econ": -0.262329,
      "culture": 0.149789,
      "authority": 0.337883
    },
    "space": {
      "econ": -0.262329,
      "culture": 0.149789,
      "authority": 0.337883,
      "establishment": 0.146705,
      "globalism": 0.258367,
      "green": 0.056495,
      "ukraine": 0.229211,
      "greenDeal": -0.005135
    },
    "axisSalience": {
      "econ": 0.530178,
      "culture": 0.482911,
      "authority": 0.501638
    },
    "issuePrefs": {
      "housing": 0.126306,
      "transport": 0.069624,
      "security": 0.186586,
      "healthcare": 0.20086,
      "climate": -0.039238,
      "industry": -0.092477,
      "education": -0.046308,
      "taxes": -0.170902
    },
    "issueSalience": {
      "housing": 0.350731,
      "transport": 0.31899,
      "security": 0.384488,
      "healthcare": 0.392481,
      "climate": 0.301973,
      "industry": 0.331787,
      "education": 0.305933,
      "taxes": 0.375705
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.627238,
    "turnoutBase": 0.635135,
    "volatility": 0.536797
  },
  {
    "id": "ess_trad_left_15_24_lower_town_unknown",
    "name": "tradicni levice - 15-24 - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.002222,
    "position": {
      "econ": -0.359983,
      "culture": 0.332208,
      "authority": 0.35601
    },
    "space": {
      "econ": -0.359983,
      "culture": 0.332208,
      "authority": 0.35601,
      "establishment": -0.074668,
      "globalism": -0.206839,
      "green": 0.125556,
      "ukraine": -0.382125,
      "greenDeal": 0.208513
    },
    "axisSalience": {
      "econ": 0.571193,
      "culture": 0.559527,
      "authority": 0.508164
    },
    "issuePrefs": {
      "housing": 0.158126,
      "transport": 0.005378,
      "security": 0.381546,
      "healthcare": 0.285765,
      "climate": -0.148784,
      "industry": -0.155838,
      "education": 0.015628,
      "taxes": -0.219323
    },
    "issueSalience": {
      "housing": 0.36855,
      "transport": 0.283012,
      "security": 0.493665,
      "healthcare": 0.440028,
      "climate": 0.363319,
      "industry": 0.367269,
      "education": 0.288752,
      "taxes": 0.402821
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.381616,
    "turnoutBase": 0.507387,
    "volatility": 0.54672
  },
  {
    "id": "ess_trad_left_15_24_secondary_rural_left",
    "name": "tradicni levice - 15-24 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.002154,
    "position": {
      "econ": -0.627223,
      "culture": 0.151056,
      "authority": 0.356695
    },
    "space": {
      "econ": -0.627223,
      "culture": 0.151056,
      "authority": 0.356695,
      "establishment": -0.200615,
      "globalism": -0.195406,
      "green": 0.270951,
      "ukraine": -0.265374,
      "greenDeal": 0.124235
    },
    "axisSalience": {
      "econ": 0.683434,
      "culture": 0.483443,
      "authority": 0.50841
    },
    "issuePrefs": {
      "housing": 0.326846,
      "transport": 0.106167,
      "security": 0.319849,
      "healthcare": 0.463685,
      "climate": -0.22987,
      "industry": -0.291149,
      "education": 0.140653,
      "taxes": -0.433474
    },
    "issueSalience": {
      "housing": 0.463034,
      "transport": 0.339454,
      "security": 0.459116,
      "healthcare": 0.539664,
      "climate": 0.408727,
      "industry": 0.443043,
      "education": 0.358766,
      "taxes": 0.522745
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.462226,
    "turnoutBase": 0.562978,
    "volatility": 0.518055
  },
  {
    "id": "ess_trad_left_25_39_lower_town_unknown",
    "name": "tradicni levice - 25-39 - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.002051,
    "position": {
      "econ": -0.503427,
      "culture": 0.223463,
      "authority": -0.161302
    },
    "space": {
      "econ": -0.503427,
      "culture": 0.223463,
      "authority": -0.161302,
      "establishment": -0.706696,
      "globalism": -0.804977,
      "green": -0.405816,
      "ukraine": -0.955623,
      "greenDeal": -0.553247
    },
    "axisSalience": {
      "econ": 0.63144,
      "culture": 0.513855,
      "authority": 0.438069
    },
    "issuePrefs": {
      "housing": 0.250069,
      "transport": -0.010964,
      "security": 0.183908,
      "healthcare": 0.380345,
      "climate": 0.447096,
      "industry": -0.058574,
      "education": 0.219705,
      "taxes": -0.335652
    },
    "issueSalience": {
      "housing": 0.420039,
      "transport": 0.28614,
      "security": 0.382989,
      "healthcare": 0.492993,
      "climate": 0.530374,
      "industry": 0.312801,
      "education": 0.403035,
      "taxes": 0.467965
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.295166,
    "turnoutBase": 0.485266,
    "volatility": 0.603603
  },
  {
    "id": "ess_trad_left_15_24_lower_large_town_center",
    "name": "tradicni levice - 15-24 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002017,
    "position": {
      "econ": -0.397596,
      "culture": 0.105814,
      "authority": 0.084836
    },
    "space": {
      "econ": -0.397596,
      "culture": 0.105814,
      "authority": 0.084836,
      "establishment": 0.007974,
      "globalism": -0.166949,
      "green": 0.280639,
      "ukraine": -0.039408,
      "greenDeal": -0.236596
    },
    "axisSalience": {
      "econ": 0.58699,
      "culture": 0.464442,
      "authority": 0.410541
    },
    "issuePrefs": {
      "housing": 0.20598,
      "transport": 0.060319,
      "security": 0.115429,
      "healthcare": 0.294734,
      "climate": -0.135813,
      "industry": -0.107065,
      "education": 0.095117,
      "taxes": -0.273571
    },
    "issueSalience": {
      "housing": 0.395349,
      "transport": 0.313778,
      "security": 0.34464,
      "healthcare": 0.445051,
      "climate": 0.356055,
      "industry": 0.339956,
      "education": 0.333265,
      "taxes": 0.4332
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.390621,
    "turnoutBase": 0.510279,
    "volatility": 0.639282
  },
  {
    "id": "ess_trad_left_25_39_secondary_rural_unknown",
    "name": "tradicni levice - 25-39 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001949,
    "position": {
      "econ": -0.46864,
      "culture": 0.533254,
      "authority": 0.251986
    },
    "space": {
      "econ": -0.46864,
      "culture": 0.533254,
      "authority": 0.251986,
      "establishment": -0.386149,
      "globalism": -0.505481,
      "green": -0.179475,
      "ukraine": -0.501744,
      "greenDeal": -0.427457
    },
    "axisSalience": {
      "econ": 0.616829,
      "culture": 0.643967,
      "authority": 0.470715
    },
    "issuePrefs": {
      "housing": 0.193761,
      "transport": -0.039484,
      "security": 0.436669,
      "healthcare": 0.380081,
      "climate": 0.24891,
      "industry": -0.016999,
      "education": 0.03704,
      "taxes": -0.27343
    },
    "issueSalience": {
      "housing": 0.388506,
      "transport": 0.302111,
      "security": 0.524535,
      "healthcare": 0.492845,
      "climate": 0.41939,
      "industry": 0.289519,
      "education": 0.300743,
      "taxes": 0.433121
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.428779,
    "turnoutBase": 0.556485,
    "volatility": 0.534753
  },
  {
    "id": "ess_trad_left_25_39_tertiary_town_left",
    "name": "tradicni levice - 25-39 - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001846,
    "position": {
      "econ": -0.474104,
      "culture": 0.542499,
      "authority": 0.175616
    },
    "space": {
      "econ": -0.474104,
      "culture": 0.542499,
      "authority": 0.175616,
      "establishment": -0.047983,
      "globalism": -0.004108,
      "green": 0.266412,
      "ukraine": -0.279827,
      "greenDeal": 0.230392
    },
    "axisSalience": {
      "econ": 0.619124,
      "culture": 0.64785,
      "authority": 0.443222
    },
    "issuePrefs": {
      "housing": 0.195657,
      "transport": 0.020383,
      "security": 0.283907,
      "healthcare": 0.384755,
      "climate": -0.256327,
      "industry": -0.175732,
      "education": -0.075186,
      "taxes": -0.276255
    },
    "issueSalience": {
      "housing": 0.389568,
      "transport": 0.291415,
      "security": 0.438988,
      "healthcare": 0.495463,
      "climate": 0.423543,
      "industry": 0.37841,
      "education": 0.322104,
      "taxes": 0.434703
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.595915,
    "turnoutBase": 0.628321,
    "volatility": 0.454318
  },
  {
    "id": "ess_trad_left_55_plus_secondary_large_town_right",
    "name": "tradicni levice - 55+ - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001812,
    "position": {
      "econ": -0.161257,
      "culture": 0.379425,
      "authority": 0.045061
    },
    "space": {
      "econ": -0.161257,
      "culture": 0.379425,
      "authority": 0.045061,
      "establishment": -0.150622,
      "globalism": 0.097004,
      "green": 0.192104,
      "ukraine": 0.080281,
      "greenDeal": 0.263733
    },
    "axisSalience": {
      "econ": 0.487728,
      "culture": 0.579358,
      "authority": 0.396222
    },
    "issuePrefs": {
      "housing": 0.04316,
      "transport": -0.016342,
      "security": 0.110293,
      "healthcare": 0.146459,
      "climate": -0.21216,
      "industry": -0.069178,
      "education": -0.115438,
      "taxes": -0.070574
    },
    "issueSalience": {
      "housing": 0.30417,
      "transport": 0.289151,
      "security": 0.341764,
      "healthcare": 0.362017,
      "climate": 0.39881,
      "industry": 0.31874,
      "education": 0.344645,
      "taxes": 0.319521
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.48377,
    "turnoutBase": 0.664728,
    "volatility": 0.443556
  },
  {
    "id": "ess_trad_left_25_39_tertiary_large_town_center",
    "name": "tradicni levice - 25-39 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001675,
    "position": {
      "econ": -0.321639,
      "culture": 0.129127,
      "authority": 0.066983
    },
    "space": {
      "econ": -0.321639,
      "culture": 0.129127,
      "authority": 0.066983,
      "establishment": -0.045105,
      "globalism": -0.128543,
      "green": 0.137343,
      "ukraine": -0.142604,
      "greenDeal": 0.111177
    },
    "axisSalience": {
      "econ": 0.555088,
      "culture": 0.474234,
      "authority": 0.404114
    },
    "issuePrefs": {
      "housing": 0.161406,
      "transport": 0.041742,
      "security": 0.112231,
      "healthcare": 0.24191,
      "climate": -0.130017,
      "industry": -0.151394,
      "education": 0.060278,
      "taxes": -0.216085
    },
    "issueSalience": {
      "housing": 0.370387,
      "transport": 0.303375,
      "security": 0.34285,
      "healthcare": 0.41547,
      "climate": 0.352809,
      "industry": 0.36478,
      "education": 0.313756,
      "taxes": 0.401008
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.588679,
    "turnoutBase": 0.628421,
    "volatility": 0.554059
  },
  {
    "id": "ess_trad_left_40_54_secondary_rural_right",
    "name": "tradicni levice - 40-54 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001573,
    "position": {
      "econ": -0.06542,
      "culture": 0.350838,
      "authority": 0.116088
    },
    "space": {
      "econ": -0.06542,
      "culture": 0.350838,
      "authority": 0.116088,
      "establishment": -0.224354,
      "globalism": -0.628301,
      "green": -0.056325,
      "ukraine": -0.183839,
      "greenDeal": 0.092943
    },
    "axisSalience": {
      "econ": 0.447476,
      "culture": 0.567352,
      "authority": 0.421792
    },
    "issuePrefs": {
      "housing": -0.00612,
      "transport": -0.122192,
      "security": 0.29801,
      "healthcare": 0.075169,
      "climate": 0.01453,
      "industry": 0.010751,
      "education": 0.031134,
      "taxes": -0.005002
    },
    "issueSalience": {
      "housing": 0.283427,
      "transport": 0.348428,
      "security": 0.446886,
      "healthcare": 0.322095,
      "climate": 0.288137,
      "industry": 0.286021,
      "education": 0.297435,
      "taxes": 0.282801
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.434354,
    "turnoutBase": 0.582148,
    "volatility": 0.540192
  },
  {
    "id": "ess_trad_left_40_54_secondary_large_town_right",
    "name": "tradicni levice - 40-54 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001436,
    "position": {
      "econ": -0.0629,
      "culture": 0.383606,
      "authority": 0.356204
    },
    "space": {
      "econ": -0.0629,
      "culture": 0.383606,
      "authority": 0.356204,
      "establishment": 0.058633,
      "globalism": -0.206395,
      "green": 0.017022,
      "ukraine": -0.159114,
      "greenDeal": -0.180182
    },
    "axisSalience": {
      "econ": 0.446418,
      "culture": 0.581115,
      "authority": 0.508233
    },
    "issuePrefs": {
      "housing": -0.011438,
      "transport": -0.078092,
      "security": 0.378136,
      "healthcare": 0.075976,
      "climate": 0.038195,
      "industry": 0.083359,
      "education": -0.073759,
      "taxes": 0.000745
    },
    "issueSalience": {
      "housing": 0.286405,
      "transport": 0.323731,
      "security": 0.491756,
      "healthcare": 0.322547,
      "climate": 0.301389,
      "industry": 0.326681,
      "education": 0.321305,
      "taxes": 0.280417
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.482307,
    "turnoutBase": 0.592052,
    "volatility": 0.514723
  },
  {
    "id": "ess_trad_left_55_plus_secondary_town_right",
    "name": "tradicni levice - 55+ - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001436,
    "position": {
      "econ": -0.070555,
      "culture": 0.293793,
      "authority": 0.031315
    },
    "space": {
      "econ": -0.070555,
      "culture": 0.293793,
      "authority": 0.031315,
      "establishment": 0.148133,
      "globalism": -0.033212,
      "green": 0.033376,
      "ukraine": 0.327982,
      "greenDeal": 0.096214
    },
    "axisSalience": {
      "econ": 0.449633,
      "culture": 0.543393,
      "authority": 0.391274
    },
    "issuePrefs": {
      "housing": 0.00355,
      "transport": -0.039229,
      "security": 0.081417,
      "healthcare": 0.074303,
      "climate": -0.05097,
      "industry": -0.002664,
      "education": -0.078588,
      "taxes": -0.015545
    },
    "issueSalience": {
      "housing": 0.281988,
      "transport": 0.301968,
      "security": 0.325594,
      "healthcare": 0.32161,
      "climate": 0.308543,
      "industry": 0.281492,
      "education": 0.324009,
      "taxes": 0.288705
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.499858,
    "turnoutBase": 0.675185,
    "volatility": 0.416668
  },
  {
    "id": "ess_trad_left_15_24_lower_large_town_left",
    "name": "tradicni levice - 15-24 - nizsi vzdelani - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001402,
    "position": {
      "econ": -0.337328,
      "culture": 0.482895,
      "authority": -0.41385
    },
    "space": {
      "econ": -0.337328,
      "culture": 0.482895,
      "authority": -0.41385,
      "establishment": 0.27453,
      "globalism": 0.100567,
      "green": 0.559157,
      "ukraine": 0.465563,
      "greenDeal": 0.740823
    },
    "axisSalience": {
      "econ": 0.561678,
      "culture": 0.622816,
      "authority": 0.528986
    },
    "issuePrefs": {
      "housing": 0.127583,
      "transport": 0.009479,
      "security": -0.176723,
      "healthcare": 0.281507,
      "climate": -0.610023,
      "industry": -0.246047,
      "education": -0.110179,
      "taxes": -0.184928
    },
    "issueSalience": {
      "housing": 0.351446,
      "transport": 0.285308,
      "security": 0.378965,
      "healthcare": 0.437644,
      "climate": 0.621613,
      "industry": 0.417786,
      "education": 0.3417,
      "taxes": 0.38356
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.427996,
    "turnoutBase": 0.519609,
    "volatility": 0.515292
  },
  {
    "id": "ess_trad_left_25_39_tertiary_large_town_left",
    "name": "tradicni levice - 25-39 - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001368,
    "position": {
      "econ": -0.414515,
      "culture": 0.20011,
      "authority": 0.304884
    },
    "space": {
      "econ": -0.414515,
      "culture": 0.20011,
      "authority": 0.304884,
      "establishment": 0.280901,
      "globalism": 0.024744,
      "green": 0.177005,
      "ukraine": -0.282754,
      "greenDeal": 0.357869
    },
    "axisSalience": {
      "econ": 0.594096,
      "culture": 0.504046,
      "authority": 0.489758
    },
    "issuePrefs": {
      "housing": 0.20397,
      "transport": 0.070578,
      "security": 0.263226,
      "healthcare": 0.31446,
      "climate": -0.227647,
      "industry": -0.240546,
      "education": 0.024001,
      "taxes": -0.274438
    },
    "issueSalience": {
      "housing": 0.394223,
      "transport": 0.319524,
      "security": 0.427406,
      "healthcare": 0.456097,
      "climate": 0.407482,
      "industry": 0.414706,
      "education": 0.293441,
      "taxes": 0.433685
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.623957,
    "turnoutBase": 0.639832,
    "volatility": 0.424719
  },
  {
    "id": "ess_trad_left_40_54_lower_rural_unknown",
    "name": "tradicni levice - 40-54 - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001333,
    "position": {
      "econ": -0.507076,
      "culture": 0.531967,
      "authority": 0.048717
    },
    "space": {
      "econ": -0.507076,
      "culture": 0.531967,
      "authority": 0.048717,
      "establishment": -0.369912,
      "globalism": -0.591261,
      "green": -0.482225,
      "ukraine": -0.963511,
      "greenDeal": -0.67351
    },
    "axisSalience": {
      "econ": 0.632972,
      "culture": 0.643426,
      "authority": 0.397538
    },
    "issuePrefs": {
      "housing": 0.215056,
      "transport": -0.039936,
      "security": 0.362663,
      "healthcare": 0.407652,
      "climate": 0.535785,
      "industry": 0.024142,
      "education": 0.065587,
      "taxes": -0.301259
    },
    "issueSalience": {
      "housing": 0.400431,
      "transport": 0.302364,
      "security": 0.483092,
      "healthcare": 0.508285,
      "climate": 0.58004,
      "industry": 0.293519,
      "education": 0.316729,
      "taxes": 0.448705
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.334931,
    "turnoutBase": 0.517053,
    "volatility": 0.593292
  },
  {
    "id": "ess_trad_left_15_24_lower_large_town_unknown",
    "name": "tradicni levice - 15-24 - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001299,
    "position": {
      "econ": -0.427608,
      "culture": 0.223474,
      "authority": 0.035263
    },
    "space": {
      "econ": -0.427608,
      "culture": 0.223474,
      "authority": 0.035263,
      "establishment": 0.089591,
      "globalism": -0.161032,
      "green": -0.233908,
      "ukraine": -0.12369,
      "greenDeal": 0.031645
    },
    "axisSalience": {
      "econ": 0.599595,
      "culture": 0.513859,
      "authority": 0.392695
    },
    "issuePrefs": {
      "housing": 0.208367,
      "transport": 0.047353,
      "security": 0.123317,
      "healthcare": 0.325756,
      "climate": 0.159553,
      "industry": -0.164069,
      "education": 0.059837,
      "taxes": -0.281061
    },
    "issueSalience": {
      "housing": 0.396686,
      "transport": 0.306518,
      "security": 0.349057,
      "healthcare": 0.462423,
      "climate": 0.36935,
      "industry": 0.371879,
      "education": 0.313509,
      "taxes": 0.437394
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.397505,
    "turnoutBase": 0.513136,
    "volatility": 0.531937
  },
  {
    "id": "ess_trad_left_40_54_tertiary_large_town_right",
    "name": "tradicni levice - 40-54 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001231,
    "position": {
      "econ": -0.120423,
      "culture": 0.269032,
      "authority": 0.31312
    },
    "space": {
      "econ": -0.120423,
      "culture": 0.269032,
      "authority": 0.31312,
      "establishment": 0.398238,
      "globalism": 0.327086,
      "green": 0.078211,
      "ukraine": 0.580031,
      "greenDeal": 0.366823
    },
    "axisSalience": {
      "econ": 0.470578,
      "culture": 0.532993,
      "authority": 0.492723
    },
    "issuePrefs": {
      "housing": 0.033949,
      "transport": 0.02093,
      "security": 0.164186,
      "healthcare": 0.108227,
      "climate": -0.159022,
      "industry": -0.095006,
      "education": -0.137219,
      "taxes": -0.05442
    },
    "issueSalience": {
      "housing": 0.299011,
      "transport": 0.291721,
      "security": 0.371944,
      "healthcare": 0.340607,
      "climate": 0.369053,
      "industry": 0.333204,
      "education": 0.356842,
      "taxes": 0.310475
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.651484,
    "turnoutBase": 0.663938,
    "volatility": 0.434159
  },
  {
    "id": "ess_trad_left_25_39_tertiary_large_town_unknown",
    "name": "tradicni levice - 25-39 - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000992,
    "position": {
      "econ": -0.336236,
      "culture": 0.428883,
      "authority": 0.062571
    },
    "space": {
      "econ": -0.336236,
      "culture": 0.428883,
      "authority": 0.062571,
      "establishment": 0.101309,
      "globalism": 0.281474,
      "green": 0.495501,
      "ukraine": 0.823412,
      "greenDeal": 0.288913
    },
    "axisSalience": {
      "econ": 0.561219,
      "culture": 0.600131,
      "authority": 0.402526
    },
    "issuePrefs": {
      "housing": 0.133464,
      "transport": 0.040637,
      "security": 0.042343,
      "healthcare": 0.2764,
      "climate": -0.437656,
      "industry": -0.146809,
      "education": -0.131337,
      "taxes": -0.190624
    },
    "issueSalience": {
      "housing": 0.35474,
      "transport": 0.302757,
      "security": 0.303712,
      "healthcare": 0.434784,
      "climate": 0.525087,
      "industry": 0.362213,
      "education": 0.353549,
      "taxes": 0.386749
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.624993,
    "turnoutBase": 0.633546,
    "volatility": 0.440882
  },
  {
    "id": "ess_trad_left_15_24_lower_rural_unknown",
    "name": "tradicni levice - 15-24 - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000889,
    "position": {
      "econ": -0.054571,
      "culture": 0.452131,
      "authority": 0.415731
    },
    "space": {
      "econ": -0.054571,
      "culture": 0.452131,
      "authority": 0.415731,
      "establishment": -0.909593,
      "globalism": -0.217732,
      "green": 0.273849,
      "ukraine": 0.036087,
      "greenDeal": -0.47663
    },
    "axisSalience": {
      "econ": 0.44292,
      "culture": 0.609895,
      "authority": 0.529663
    },
    "issuePrefs": {
      "housing": -0.024242,
      "transport": -0.093869,
      "security": 0.420655,
      "healthcare": 0.075462,
      "climate": -0.063715,
      "industry": 0.170672,
      "education": -0.097248,
      "taxes": 0.014965
    },
    "issueSalience": {
      "housing": 0.293575,
      "transport": 0.332566,
      "security": 0.515567,
      "healthcare": 0.322259,
      "climate": 0.31568,
      "industry": 0.375576,
      "education": 0.334459,
      "taxes": 0.28838
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.314169,
    "turnoutBase": 0.478164,
    "volatility": 0.621863
  },
  {
    "id": "ess_trad_left_15_24_lower_rural_right",
    "name": "tradicni levice - 15-24 - nizsi vzdelani - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000821,
    "position": {
      "econ": -0.256664,
      "culture": 0.12733,
      "authority": -0.24934
    },
    "space": {
      "econ": -0.256664,
      "culture": 0.12733,
      "authority": -0.24934,
      "establishment": -0.087734,
      "globalism": 0.097765,
      "green": 0.088554,
      "ukraine": -0.177602,
      "greenDeal": -0.254253
    },
    "axisSalience": {
      "econ": 0.527799,
      "culture": 0.473479,
      "authority": 0.469762
    },
    "issuePrefs": {
      "housing": 0.125886,
      "transport": 0.052978,
      "security": -0.122328,
      "healthcare": 0.194984,
      "climate": 0.007432,
      "industry": -0.034125,
      "education": -0.004474,
      "taxes": -0.169518
    },
    "issueSalience": {
      "housing": 0.350496,
      "transport": 0.309668,
      "security": 0.348504,
      "healthcare": 0.389191,
      "climate": 0.284162,
      "industry": 0.29911,
      "education": 0.282506,
      "taxes": 0.37493
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.398847,
    "turnoutBase": 0.506929,
    "volatility": 0.547896
  },
  {
    "id": "ess_trad_left_15_24_lower_town_center",
    "name": "tradicni levice - 15-24 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000821,
    "position": {
      "econ": -0.351468,
      "culture": 0.190154,
      "authority": 0.028193
    },
    "space": {
      "econ": -0.351468,
      "culture": 0.190154,
      "authority": 0.028193,
      "establishment": -0.370741,
      "globalism": -0.347739,
      "green": 0.015641,
      "ukraine": -0.246295,
      "greenDeal": -0.366802
    },
    "axisSalience": {
      "econ": 0.567617,
      "culture": 0.499865,
      "authority": 0.39015
    },
    "issuePrefs": {
      "housing": 0.170489,
      "transport": 0.011911,
      "security": 0.15302,
      "healthcare": 0.268269,
      "climate": 0.091443,
      "industry": -0.039415,
      "education": 0.094301,
      "taxes": -0.230238
    },
    "issueSalience": {
      "housing": 0.375474,
      "transport": 0.28667,
      "security": 0.365691,
      "healthcare": 0.430231,
      "climate": 0.331208,
      "industry": 0.302072,
      "education": 0.332809,
      "taxes": 0.408934
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.349476,
    "turnoutBase": 0.497024,
    "volatility": 0.673367
  },
  {
    "id": "ess_trad_left_25_39_secondary_rural_right",
    "name": "tradicni levice - 25-39 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000821,
    "position": {
      "econ": -0.14472,
      "culture": 0.215691,
      "authority": 0.392215
    },
    "space": {
      "econ": -0.14472,
      "culture": 0.215691,
      "authority": 0.392215,
      "establishment": 0.482932,
      "globalism": 0.245797,
      "green": 0.268663,
      "ukraine": 0.089599,
      "greenDeal": 0.458078
    },
    "axisSalience": {
      "econ": 0.480782,
      "culture": 0.51059,
      "authority": 0.521198
    },
    "issuePrefs": {
      "housing": 0.053713,
      "transport": 0.026851,
      "security": 0.252156,
      "healthcare": 0.121454,
      "climate": -0.321699,
      "industry": -0.137686,
      "education": -0.094834,
      "taxes": -0.078316
    },
    "issueSalience": {
      "housing": 0.310079,
      "transport": 0.295037,
      "security": 0.421207,
      "healthcare": 0.348014,
      "climate": 0.460152,
      "industry": 0.357104,
      "education": 0.333107,
      "taxes": 0.323857
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.543382,
    "turnoutBase": 0.586903,
    "volatility": 0.456536
  },
  {
    "id": "ess_trad_left_40_54_tertiary_large_town_left",
    "name": "tradicni levice - 40-54 - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000821,
    "position": {
      "econ": -0.392845,
      "culture": 0.062518,
      "authority": 0.266412
    },
    "space": {
      "econ": -0.392845,
      "culture": 0.062518,
      "authority": 0.266412,
      "establishment": 0.039111,
      "globalism": 0.164636,
      "green": 0.277873,
      "ukraine": -0.120386,
      "greenDeal": 0.354844
    },
    "axisSalience": {
      "econ": 0.584995,
      "culture": 0.446258,
      "authority": 0.475908
    },
    "issuePrefs": {
      "housing": 0.208563,
      "transport": 0.106714,
      "security": 0.162677,
      "healthcare": 0.28785,
      "climate": -0.299425,
      "industry": -0.254618,
      "education": 0.036181,
      "taxes": -0.275346
    },
    "issueSalience": {
      "housing": 0.396795,
      "transport": 0.33976,
      "security": 0.371099,
      "healthcare": 0.441196,
      "climate": 0.447678,
      "industry": 0.422586,
      "education": 0.300262,
      "taxes": 0.434194
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.613007,
    "turnoutBase": 0.651369,
    "volatility": 0.46648
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_large_town_unknown",
    "name": "tradicni levice - 55+ - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000752,
    "position": {
      "econ": -0.493914,
      "culture": 0.340657,
      "authority": -0.306476
    },
    "space": {
      "econ": -0.493914,
      "culture": 0.340657,
      "authority": -0.306476,
      "establishment": -0.317125,
      "globalism": -0.763546,
      "green": -0.090553,
      "ukraine": -0.73621,
      "greenDeal": -0.387572
    },
    "axisSalience": {
      "econ": 0.627444,
      "culture": 0.563076,
      "authority": 0.490331
    },
    "issuePrefs": {
      "housing": 0.230774,
      "transport": -0.029465,
      "security": 0.101704,
      "healthcare": 0.382871,
      "climate": 0.173719,
      "industry": -0.072865,
      "education": 0.167289,
      "taxes": -0.314739
    },
    "issueSalience": {
      "housing": 0.409233,
      "transport": 0.296501,
      "security": 0.336954,
      "healthcare": 0.494408,
      "climate": 0.377282,
      "industry": 0.320804,
      "education": 0.373682,
      "taxes": 0.456254
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.528817,
    "turnoutBase": 0.718901,
    "volatility": 0.408541
  },
  {
    "id": "ess_trad_left_40_54_tertiary_rural_unknown",
    "name": "tradicni levice - 40-54 - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000718,
    "position": {
      "econ": -0.345842,
      "culture": 0.240392,
      "authority": 0.150413
    },
    "space": {
      "econ": -0.345842,
      "culture": 0.240392,
      "authority": 0.150413,
      "establishment": 0.168118,
      "globalism": -0.602931,
      "green": -0.299005,
      "ukraine": -0.353213,
      "greenDeal": -0.682143
    },
    "axisSalience": {
      "econ": 0.565254,
      "culture": 0.520965,
      "authority": 0.434149
    },
    "issuePrefs": {
      "housing": 0.161366,
      "transport": -0.029162,
      "security": 0.29735,
      "healthcare": 0.268238,
      "climate": 0.406284,
      "industry": 0.047897,
      "education": 0.13151,
      "taxes": -0.220159
    },
    "issueSalience": {
      "housing": 0.370365,
      "transport": 0.29633,
      "security": 0.446516,
      "healthcare": 0.430213,
      "climate": 0.507519,
      "industry": 0.306823,
      "education": 0.353645,
      "taxes": 0.403289
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.577274,
    "turnoutBase": 0.655884,
    "volatility": 0.454869
  },
  {
    "id": "ess_trad_left_40_54_tertiary_large_town_unknown",
    "name": "tradicni levice - 40-54 - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000684,
    "position": {
      "econ": -0.505387,
      "culture": 0.582212,
      "authority": 0.406201
    },
    "space": {
      "econ": -0.505387,
      "culture": 0.582212,
      "authority": 0.406201,
      "establishment": 0.092926,
      "globalism": -0.003308,
      "green": 0.261357,
      "ukraine": -0.712918,
      "greenDeal": 0.481637
    },
    "axisSalience": {
      "econ": 0.632263,
      "culture": 0.664529,
      "authority": 0.526232
    },
    "issuePrefs": {
      "housing": 0.208097,
      "transport": 0.021152,
      "security": 0.472493,
      "healthcare": 0.410456,
      "climate": -0.323036,
      "industry": -0.243273,
      "education": -0.081754,
      "taxes": -0.294013
    },
    "issueSalience": {
      "housing": 0.396535,
      "transport": 0.291845,
      "security": 0.544596,
      "healthcare": 0.509855,
      "climate": 0.4609,
      "industry": 0.416233,
      "education": 0.325782,
      "taxes": 0.444647
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.607236,
    "turnoutBase": 0.653252,
    "volatility": 0.461637
  },
  {
    "id": "ess_trad_left_25_39_secondary_town_right",
    "name": "tradicni levice - 25-39 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000615,
    "position": {
      "econ": -0.073803,
      "culture": 0.204191,
      "authority": 0.229985
    },
    "space": {
      "econ": -0.073803,
      "culture": 0.204191,
      "authority": 0.229985,
      "establishment": 0.197991,
      "globalism": 0.251337,
      "green": 0.143604,
      "ukraine": 0.213606,
      "greenDeal": 0.362571
    },
    "axisSalience": {
      "econ": 0.450997,
      "culture": 0.50576,
      "authority": 0.462795
    },
    "issuePrefs": {
      "housing": 0.016089,
      "transport": 0.011857,
      "security": 0.137435,
      "healthcare": 0.069473,
      "climate": -0.204915,
      "industry": -0.084212,
      "education": -0.109048,
      "taxes": -0.028635
    },
    "issueSalience": {
      "housing": 0.28901,
      "transport": 0.28664,
      "security": 0.356964,
      "healthcare": 0.318905,
      "climate": 0.394752,
      "industry": 0.327159,
      "education": 0.341067,
      "taxes": 0.296036
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.520919,
    "turnoutBase": 0.57693,
    "volatility": 0.482181
  },
  {
    "id": "ess_trad_left_40_54_tertiary_town_unknown",
    "name": "tradicni levice - 40-54 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000581,
    "position": {
      "econ": -0.300215,
      "culture": 0.24113,
      "authority": 0.284297
    },
    "space": {
      "econ": -0.300215,
      "culture": 0.24113,
      "authority": 0.284297,
      "establishment": -0.010345,
      "globalism": 0.405714,
      "green": 0.39815,
      "ukraine": 0.001268,
      "greenDeal": 0.562306
    },
    "axisSalience": {
      "econ": 0.54609,
      "culture": 0.521275,
      "authority": 0.482347
    },
    "issuePrefs": {
      "housing": 0.136182,
      "transport": 0.080336,
      "security": 0.170651,
      "healthcare": 0.235445,
      "climate": -0.444114,
      "industry": -0.229649,
      "education": -0.101601,
      "taxes": -0.187219
    },
    "issueSalience": {
      "housing": 0.356262,
      "transport": 0.324988,
      "security": 0.375564,
      "healthcare": 0.411849,
      "climate": 0.528704,
      "industry": 0.408603,
      "education": 0.336897,
      "taxes": 0.384843
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.623515,
    "turnoutBase": 0.649638,
    "volatility": 0.470931
  },
  {
    "id": "ess_trad_left_55_plus_lower_large_town_unknown",
    "name": "tradicni levice - 55+ - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000581,
    "position": {
      "econ": -0.561717,
      "culture": 0.036783,
      "authority": -0.329661
    },
    "space": {
      "econ": -0.561717,
      "culture": 0.036783,
      "authority": -0.329661,
      "establishment": -0.31022,
      "globalism": -0.507586,
      "green": 0.082284,
      "ukraine": -0.274687,
      "greenDeal": -0.310237
    },
    "axisSalience": {
      "econ": 0.655921,
      "culture": 0.435449,
      "authority": 0.498678
    },
    "issuePrefs": {
      "housing": 0.30453,
      "transport": 0.072898,
      "security": -0.08075,
      "healthcare": 0.407379,
      "climate": 0.027622,
      "industry": -0.177312,
      "education": 0.233607,
      "taxes": -0.400022
    },
    "issueSalience": {
      "housing": 0.450537,
      "transport": 0.320823,
      "security": 0.32522,
      "healthcare": 0.508132,
      "climate": 0.295468,
      "industry": 0.379295,
      "education": 0.41082,
      "taxes": 0.504012
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.344727,
    "turnoutBase": 0.599142,
    "volatility": 0.49792
  },
  {
    "id": "ess_trad_left_25_39_lower_town_center",
    "name": "tradicni levice - 25-39 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000513,
    "position": {
      "econ": -0.459871,
      "culture": 0.097645,
      "authority": -0.228025
    },
    "space": {
      "econ": -0.459871,
      "culture": 0.097645,
      "authority": -0.228025,
      "establishment": -0.573773,
      "globalism": -0.927083,
      "green": -0.441475,
      "ukraine": -0.555441,
      "greenDeal": -0.935033
    },
    "axisSalience": {
      "econ": 0.613146,
      "culture": 0.461011,
      "authority": 0.462089
    },
    "issuePrefs": {
      "housing": 0.241211,
      "transport": -0.013858,
      "security": 0.097275,
      "healthcare": 0.338918,
      "climate": 0.579671,
      "industry": 0.030444,
      "education": 0.280152,
      "taxes": -0.319389
    },
    "issueSalience": {
      "housing": 0.415078,
      "transport": 0.287761,
      "security": 0.334474,
      "healthcare": 0.469794,
      "climate": 0.604616,
      "industry": 0.297048,
      "education": 0.436885,
      "taxes": 0.458858
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.298473,
    "turnoutBase": 0.489918,
    "volatility": 0.69164
  },
  {
    "id": "ess_trad_left_25_39_lower_large_town_unknown",
    "name": "tradicni levice - 25-39 - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000444,
    "position": {
      "econ": -0.682562,
      "culture": 0.453266,
      "authority": 0.197138
    },
    "space": {
      "econ": -0.682562,
      "culture": 0.453266,
      "authority": 0.197138,
      "establishment": -0.450209,
      "globalism": -0.596424,
      "green": -0.48961,
      "ukraine": -0.718198,
      "greenDeal": -0.622985
    },
    "axisSalience": {
      "econ": 0.706676,
      "culture": 0.610372,
      "authority": 0.45097
    },
    "issuePrefs": {
      "housing": 0.321017,
      "transport": 0.017482,
      "security": 0.413952,
      "healthcare": 0.527706,
      "climate": 0.526955,
      "industry": -0.082874,
      "education": 0.136385,
      "taxes": -0.437053
    },
    "issueSalience": {
      "housing": 0.45977,
      "transport": 0.28979,
      "security": 0.511813,
      "healthcare": 0.575515,
      "climate": 0.575095,
      "industry": 0.32641,
      "education": 0.356376,
      "taxes": 0.52475
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.328198,
    "turnoutBase": 0.494243,
    "volatility": 0.580519
  },
  {
    "id": "ess_trad_left_40_54_lower_rural_left",
    "name": "tradicni levice - 40-54 - nizsi vzdelani - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000444,
    "position": {
      "econ": -0.195082,
      "culture": 0.191205,
      "authority": 0.13749
    },
    "space": {
      "econ": -0.195082,
      "culture": 0.191205,
      "authority": 0.13749,
      "establishment": 0.052475,
      "globalism": 0.132478,
      "green": 0.098547,
      "ukraine": -0.028345,
      "greenDeal": 0.563278
    },
    "axisSalience": {
      "econ": 0.501935,
      "culture": 0.500306,
      "authority": 0.429496
    },
    "issuePrefs": {
      "housing": 0.084351,
      "transport": 0.030251,
      "security": 0.117203,
      "healthcare": 0.155756,
      "climate": -0.228672,
      "industry": -0.190508,
      "education": -0.049247,
      "taxes": -0.117515
    },
    "issueSalience": {
      "housing": 0.327236,
      "transport": 0.296941,
      "security": 0.345633,
      "healthcare": 0.367223,
      "climate": 0.408056,
      "industry": 0.386684,
      "education": 0.307578,
      "taxes": 0.345808
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.412147,
    "turnoutBase": 0.531837,
    "volatility": 0.555277
  },
  {
    "id": "ess_trad_left_55_plus_unknown_rural_left",
    "name": "tradicni levice - 55+ - nezname vzdelani - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000444,
    "position": {
      "econ": -0.973884,
      "culture": 0.560573,
      "authority": 0.089922
    },
    "space": {
      "econ": -0.973884,
      "culture": 0.560573,
      "authority": 0.089922,
      "establishment": -0.568023,
      "globalism": -0.864377,
      "green": 0.344922,
      "ukraine": -0.823049,
      "greenDeal": -0.248317
    },
    "axisSalience": {
      "econ": 0.829031,
      "culture": 0.655441,
      "authority": 0.412372
    },
    "issuePrefs": {
      "housing": 0.468367,
      "transport": 0.038842,
      "security": 0.434144,
      "healthcare": 0.746042,
      "climate": -0.178816,
      "industry": -0.287487,
      "education": 0.227695,
      "taxes": -0.633927
    },
    "issueSalience": {
      "housing": 0.542286,
      "transport": 0.301752,
      "security": 0.52312,
      "healthcare": 0.697784,
      "climate": 0.380137,
      "industry": 0.440993,
      "education": 0.407509,
      "taxes": 0.634999
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.382696,
    "turnoutBase": 0.640119,
    "volatility": 0.461122
  },
  {
    "id": "ess_trad_left_25_39_tertiary_town_unknown",
    "name": "tradicni levice - 25-39 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.00041,
    "position": {
      "econ": -0.063048,
      "culture": 0.228101,
      "authority": -0.345789
    },
    "space": {
      "econ": -0.063048,
      "culture": 0.228101,
      "authority": -0.345789,
      "establishment": -0.289243,
      "globalism": 0.008672,
      "green": -0.549276,
      "ukraine": 0.156285,
      "greenDeal": -0.71685
    },
    "axisSalience": {
      "econ": 0.44648,
      "culture": 0.515803,
      "authority": 0.504484
    },
    "issuePrefs": {
      "housing": 0.007304,
      "transport": -0.024256,
      "security": -0.164585,
      "healthcare": 0.063642,
      "climate": 0.596197,
      "industry": 0.1841,
      "education": -0.066612,
      "taxes": -0.018022
    },
    "issueSalience": {
      "housing": 0.28409,
      "transport": 0.293583,
      "security": 0.372167,
      "healthcare": 0.31564,
      "climate": 0.61387,
      "industry": 0.383096,
      "education": 0.317303,
      "taxes": 0.290092
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.577381,
    "turnoutBase": 0.619876,
    "volatility": 0.476032
  },
  {
    "id": "ess_trad_left_55_plus_lower_large_town_right",
    "name": "tradicni levice - 55+ - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00041,
    "position": {
      "econ": -0.069558,
      "culture": 0.206272,
      "authority": 0.128826
    },
    "space": {
      "econ": -0.069558,
      "culture": 0.206272,
      "authority": 0.128826,
      "establishment": 0.00983,
      "globalism": 0.225104,
      "green": -0.002594,
      "ukraine": -0.513317,
      "greenDeal": -0.54829
    },
    "axisSalience": {
      "econ": 0.449214,
      "culture": 0.506634,
      "authority": 0.426377
    },
    "issuePrefs": {
      "housing": 0.013504,
      "transport": 0.007273,
      "security": 0.138175,
      "healthcare": 0.066584,
      "climate": 0.155389,
      "industry": 0.136722,
      "education": -0.105024,
      "taxes": -0.025329
    },
    "issueSalience": {
      "housing": 0.287562,
      "transport": 0.284073,
      "security": 0.357378,
      "healthcare": 0.317287,
      "climate": 0.367018,
      "industry": 0.356564,
      "education": 0.338814,
      "taxes": 0.294184
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.414293,
    "turnoutBase": 0.610344,
    "volatility": 0.469115
  },
  {
    "id": "ess_trad_left_15_24_secondary_large_town_right",
    "name": "tradicni levice - 15-24 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000376,
    "position": {
      "econ": -0.123363,
      "culture": 0.415489,
      "authority": 0.386069
    },
    "space": {
      "econ": -0.123363,
      "culture": 0.415489,
      "authority": 0.386069,
      "establishment": 0.246889,
      "globalism": -0.224773,
      "green": -0.145584,
      "ukraine": -0.061497,
      "greenDeal": -0.169324
    },
    "axisSalience": {
      "econ": 0.471812,
      "culture": 0.594505,
      "authority": 0.518985
    },
    "issuePrefs": {
      "housing": 0.017991,
      "transport": -0.07092,
      "security": 0.401079,
      "healthcare": 0.12206,
      "climate": 0.152231,
      "industry": 0.058679,
      "education": -0.066364,
      "taxes": -0.038962
    },
    "issueSalience": {
      "housing": 0.290075,
      "transport": 0.319715,
      "security": 0.504604,
      "healthcare": 0.348354,
      "climate": 0.36525,
      "industry": 0.31286,
      "education": 0.317164,
      "taxes": 0.301819
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.496265,
    "turnoutBase": 0.578641,
    "volatility": 0.47778
  },
  {
    "id": "ess_trad_left_25_39_lower_large_town_center",
    "name": "tradicni levice - 25-39 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000376,
    "position": {
      "econ": -0.45952,
      "culture": 0.406567,
      "authority": -0.123537
    },
    "space": {
      "econ": -0.45952,
      "culture": 0.406567,
      "authority": -0.123537,
      "establishment": -0.623018,
      "globalism": -0.935055,
      "green": -0.68799,
      "ukraine": -0.298354,
      "greenDeal": -0.935806
    },
    "axisSalience": {
      "econ": 0.612999,
      "culture": 0.590758,
      "authority": 0.424473
    },
    "issuePrefs": {
      "housing": 0.203948,
      "transport": -0.070509,
      "security": 0.229424,
      "healthcare": 0.36338,
      "climate": 0.757378,
      "industry": 0.086396,
      "education": 0.173698,
      "taxes": -0.282067
    },
    "issueSalience": {
      "housing": 0.394211,
      "transport": 0.319485,
      "security": 0.408477,
      "healthcare": 0.483493,
      "climate": 0.704132,
      "industry": 0.328382,
      "education": 0.377271,
      "taxes": 0.437957
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.294055,
    "turnoutBase": 0.488194,
    "volatility": 0.696072
  },
  {
    "id": "ess_trad_left_40_54_tertiary_town_left",
    "name": "tradicni levice - 40-54 - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000376,
    "position": {
      "econ": -0.508207,
      "culture": 0.027865,
      "authority": 0.013025
    },
    "space": {
      "econ": -0.508207,
      "culture": 0.027865,
      "authority": 0.013025,
      "establishment": -0.116812,
      "globalism": -0.412658,
      "green": 0.396199,
      "ukraine": -0.335449,
      "greenDeal": 0.429054
    },
    "axisSalience": {
      "econ": 0.633447,
      "culture": 0.431703,
      "authority": 0.384689
    },
    "issuePrefs": {
      "housing": 0.27617,
      "transport": 0.072517,
      "security": 0.116992,
      "healthcare": 0.368138,
      "climate": -0.405398,
      "industry": -0.331733,
      "education": 0.203002,
      "taxes": -0.362565
    },
    "issueSalience": {
      "housing": 0.434655,
      "transport": 0.32061,
      "security": 0.345516,
      "healthcare": 0.486158,
      "climate": 0.507023,
      "industry": 0.46577,
      "education": 0.393681,
      "taxes": 0.483037
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.565896,
    "turnoutBase": 0.645912,
    "volatility": 0.480513
  },
  {
    "id": "ess_trad_left_15_24_tertiary_large_town_center",
    "name": "tradicni levice - 15-24 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000342,
    "position": {
      "econ": -0.04841,
      "culture": 0.40996,
      "authority": 0.323501
    },
    "space": {
      "econ": -0.04841,
      "culture": 0.40996,
      "authority": 0.323501,
      "establishment": 0.178765,
      "globalism": -0.607522,
      "green": 0.068428,
      "ukraine": -0.753595,
      "greenDeal": -0.472245
    },
    "axisSalience": {
      "econ": 0.440332,
      "culture": 0.592183,
      "authority": 0.49646
    },
    "issuePrefs": {
      "housing": -0.02257,
      "transport": -0.134593,
      "security": 0.485001,
      "healthcare": 0.067652,
      "climate": 0.082961,
      "industry": 0.164863,
      "education": 0.001787,
      "taxes": 0.01434
    },
    "issueSalience": {
      "housing": 0.292639,
      "transport": 0.355372,
      "security": 0.551601,
      "healthcare": 0.317885,
      "climate": 0.326458,
      "industry": 0.372323,
      "education": 0.281001,
      "taxes": 0.28803
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.57785,
    "turnoutBase": 0.636257,
    "volatility": 0.533911
  },
  {
    "id": "ess_trad_left_25_39_secondary_large_town_right",
    "name": "tradicni levice - 25-39 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000308,
    "position": {
      "econ": -0.216126,
      "culture": 0.178958,
      "authority": 0.066024
    },
    "space": {
      "econ": -0.216126,
      "culture": 0.178958,
      "authority": 0.066024,
      "establishment": 0.418606,
      "globalism": -0.073128,
      "green": -0.315155,
      "ukraine": 0.025923,
      "greenDeal": -0.316998
    },
    "axisSalience": {
      "econ": 0.510773,
      "culture": 0.495162,
      "authority": 0.403769
    },
    "issuePrefs": {
      "housing": 0.097394,
      "transport": 0.013044,
      "security": 0.102133,
      "healthcare": 0.169927,
      "climate": 0.315671,
      "industry": 0.008874,
      "education": 0.005323,
      "taxes": -0.134136
    },
    "issueSalience": {
      "housing": 0.334541,
      "transport": 0.287304,
      "security": 0.337194,
      "healthcare": 0.375159,
      "climate": 0.456776,
      "industry": 0.284969,
      "education": 0.282981,
      "taxes": 0.355116
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.519101,
    "turnoutBase": 0.584651,
    "volatility": 0.462325
  },
  {
    "id": "ess_trad_left_40_54_tertiary_town_center",
    "name": "tradicni levice - 40-54 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000308,
    "position": {
      "econ": -0.153922,
      "culture": 0.148267,
      "authority": 0.284824
    },
    "space": {
      "econ": -0.153922,
      "culture": 0.148267,
      "authority": 0.284824,
      "establishment": 0.099346,
      "globalism": 0.366652,
      "green": 0.200358,
      "ukraine": 0.045588,
      "greenDeal": 0.187951
    },
    "axisSalience": {
      "econ": 0.484647,
      "culture": 0.482272,
      "authority": 0.482537
    },
    "issuePrefs": {
      "housing": 0.066865,
      "transport": 0.055791,
      "security": 0.148461,
      "healthcare": 0.122685,
      "climate": -0.196884,
      "industry": -0.089224,
      "education": -0.095616,
      "taxes": -0.093032
    },
    "issueSalience": {
      "housing": 0.317444,
      "transport": 0.311243,
      "security": 0.363138,
      "healthcare": 0.348704,
      "climate": 0.390255,
      "industry": 0.329966,
      "education": 0.333545,
      "taxes": 0.332098
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.629947,
    "turnoutBase": 0.653477,
    "volatility": 0.561059
  },
  {
    "id": "ess_trad_left_40_54_unknown_rural_center",
    "name": "tradicni levice - 40-54 - nezname vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000308,
    "position": {
      "econ": -0.417155,
      "culture": 0.284962,
      "authority": -0.18039
    },
    "space": {
      "econ": -0.417155,
      "culture": 0.284962,
      "authority": -0.18039,
      "establishment": 0.042022,
      "globalism": -0.321565,
      "green": 0.410782,
      "ukraine": -0.422604,
      "greenDeal": 0.256169
    },
    "axisSalience": {
      "econ": 0.595205,
      "culture": 0.539684,
      "authority": 0.44494
    },
    "issuePrefs": {
      "housing": 0.19524,
      "transport": 0.014408,
      "security": 0.059637,
      "healthcare": 0.323148,
      "climate": -0.36749,
      "industry": -0.202079,
      "education": 0.071125,
      "taxes": -0.266156
    },
    "issueSalience": {
      "housing": 0.389334,
      "transport": 0.288068,
      "security": 0.313397,
      "healthcare": 0.460963,
      "climate": 0.485795,
      "industry": 0.393164,
      "education": 0.31983,
      "taxes": 0.429047
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.464068,
    "turnoutBase": 0.581471,
    "volatility": 0.596218
  },
  {
    "id": "ess_trad_left_25_39_tertiary_town_right",
    "name": "tradicni levice - 25-39 - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000274,
    "position": {
      "econ": -0.224602,
      "culture": 0.22897,
      "authority": 0.250501
    },
    "space": {
      "econ": -0.224602,
      "culture": 0.22897,
      "authority": 0.250501,
      "establishment": -0.251974,
      "globalism": -0.787902,
      "green": 0.536419,
      "ukraine": -0.60164,
      "greenDeal": 0.123009
    },
    "axisSalience": {
      "econ": 0.514333,
      "culture": 0.516167,
      "authority": 0.47018
    },
    "issuePrefs": {
      "housing": 0.096055,
      "transport": -0.079612,
      "security": 0.409376,
      "healthcare": 0.180031,
      "climate": -0.420664,
      "industry": -0.091624,
      "education": 0.147104,
      "taxes": -0.134237
    },
    "issueSalience": {
      "housing": 0.333791,
      "transport": 0.324583,
      "security": 0.50925,
      "healthcare": 0.380817,
      "climate": 0.515572,
      "industry": 0.33131,
      "education": 0.362378,
      "taxes": 0.355173
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.532568,
    "turnoutBase": 0.621181,
    "volatility": 0.472678
  },
  {
    "id": "ess_trad_left_25_39_lower_town_right",
    "name": "tradicni levice - 25-39 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000239,
    "position": {
      "econ": -0.029818,
      "culture": 0.702042,
      "authority": 0.385364
    },
    "space": {
      "econ": -0.029818,
      "culture": 0.702042,
      "authority": 0.385364,
      "establishment": -0.098955,
      "globalism": -0.790433,
      "green": -0.370223,
      "ukraine": -0.620974,
      "greenDeal": -0.947165
    },
    "axisSalience": {
      "econ": 0.432524,
      "culture": 0.714858,
      "authority": 0.518731
    },
    "issuePrefs": {
      "housing": -0.067845,
      "transport": -0.213765,
      "security": 0.627454,
      "healthcare": 0.077632,
      "climate": 0.531767,
      "industry": 0.339971,
      "education": -0.064663,
      "taxes": 0.062776
    },
    "issueSalience": {
      "housing": 0.317993,
      "transport": 0.399708,
      "security": 0.631374,
      "healthcare": 0.323474,
      "climate": 0.577789,
      "industry": 0.470384,
      "education": 0.316211,
      "taxes": 0.315155
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.344658,
    "turnoutBase": 0.506537,
    "volatility": 0.548906
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_unknown_center",
    "name": "tradicni levice - 55+ - vysokoskolaci - nezname sidlo - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "unknown",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000239,
    "position": {
      "econ": -0.036644,
      "culture": 0.600381,
      "authority": 0.270263
    },
    "space": {
      "econ": -0.036644,
      "culture": 0.600381,
      "authority": 0.270263,
      "establishment": 0.003053,
      "globalism": -0.989899,
      "green": 0.032348,
      "ukraine": -0.986575,
      "greenDeal": -0.509485
    },
    "axisSalience": {
      "econ": 0.43539,
      "culture": 0.67216,
      "authority": 0.477295
    },
    "issuePrefs": {
      "housing": -0.051891,
      "transport": -0.217695,
      "security": 0.592778,
      "healthcare": 0.074414,
      "climate": 0.119365,
      "industry": 0.213489,
      "education": 0.016439,
      "taxes": 0.045662
    },
    "issueSalience": {
      "housing": 0.309059,
      "transport": 0.401909,
      "security": 0.611955,
      "healthcare": 0.321672,
      "climate": 0.346844,
      "industry": 0.399554,
      "education": 0.289206,
      "taxes": 0.305571
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.54085,
    "turnoutBase": 0.730107,
    "volatility": 0.479725
  },
  {
    "id": "ess_trad_left_15_24_tertiary_town_center",
    "name": "tradicni levice - 15-24 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000205,
    "position": {
      "econ": -0.065826,
      "culture": 0.216388,
      "authority": 0.11894
    },
    "space": {
      "econ": -0.065826,
      "culture": 0.216388,
      "authority": 0.11894,
      "establishment": -0.628699,
      "globalism": -0.88366,
      "green": 0.263832,
      "ukraine": -0.702196,
      "greenDeal": -0.41564
    },
    "axisSalience": {
      "econ": 0.447647,
      "culture": 0.510883,
      "authority": 0.422818
    },
    "issuePrefs": {
      "housing": 0.010238,
      "transport": -0.128533,
      "security": 0.349566,
      "healthcare": 0.064706,
      "climate": -0.07358,
      "industry": 0.108423,
      "education": 0.134467,
      "taxes": -0.021428
    },
    "issueSalience": {
      "housing": 0.285733,
      "transport": 0.351978,
      "security": 0.475757,
      "healthcare": 0.316235,
      "climate": 0.321205,
      "industry": 0.340717,
      "education": 0.355302,
      "taxes": 0.292
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.496684,
    "turnoutBase": 0.607996,
    "volatility": 0.606583
  },
  {
    "id": "ess_trad_left_15_24_lower_large_town_right",
    "name": "tradicni levice - 15-24 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000171,
    "position": {
      "econ": -0.098609,
      "culture": 0.19303,
      "authority": -0.14748
    },
    "space": {
      "econ": -0.098609,
      "culture": 0.19303,
      "authority": -0.14748,
      "establishment": 0.356538,
      "globalism": 0.063884,
      "green": -0.330929,
      "ukraine": -0.176161,
      "greenDeal": -0.182736
    },
    "axisSalience": {
      "econ": 0.461416,
      "culture": 0.501073,
      "authority": 0.433093
    },
    "issuePrefs": {
      "housing": 0.031071,
      "transport": -0.002427,
      "security": -0.034795,
      "healthcare": 0.086441,
      "climate": 0.289435,
      "industry": 0.033242,
      "education": -0.057949,
      "taxes": -0.047835
    },
    "issueSalience": {
      "housing": 0.2974,
      "transport": 0.281359,
      "security": 0.299485,
      "healthcare": 0.328407,
      "climate": 0.442083,
      "industry": 0.298616,
      "education": 0.312451,
      "taxes": 0.306787
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.432356,
    "turnoutBase": 0.522479,
    "volatility": 0.507912
  },
  {
    "id": "ess_trad_left_40_54_lower_large_town_left",
    "name": "tradicni levice - 40-54 - nizsi vzdelani - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000171,
    "position": {
      "econ": -0.587501,
      "culture": 0.049074,
      "authority": 0.394791
    },
    "space": {
      "econ": -0.587501,
      "culture": 0.049074,
      "authority": 0.394791,
      "establishment": -0.151347,
      "globalism": -0.666982,
      "green": -0.266,
      "ukraine": -0.749183,
      "greenDeal": -0.534891
    },
    "axisSalience": {
      "econ": 0.66675,
      "culture": 0.440611,
      "authority": 0.522125
    },
    "issuePrefs": {
      "housing": 0.317237,
      "transport": 0.058004,
      "security": 0.438503,
      "healthcare": 0.426927,
      "climate": 0.341289,
      "industry": -0.133043,
      "education": 0.27056,
      "taxes": -0.417112
    },
    "issueSalience": {
      "housing": 0.457652,
      "transport": 0.312482,
      "security": 0.525561,
      "healthcare": 0.519079,
      "climate": 0.471122,
      "industry": 0.354504,
      "education": 0.431514,
      "taxes": 0.513583
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.347873,
    "turnoutBase": 0.524703,
    "volatility": 0.573621
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_rural_unknown",
    "name": "tradicni levice - 55+ - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000171,
    "position": {
      "econ": -0.080508,
      "culture": 0.383549,
      "authority": 0.264881
    },
    "space": {
      "econ": -0.080508,
      "culture": 0.383549,
      "authority": 0.264881,
      "establishment": -0.434562,
      "globalism": -0.532321,
      "green": -0.044511,
      "ukraine": -0.864316,
      "greenDeal": -0.710549
    },
    "axisSalience": {
      "econ": 0.453813,
      "culture": 0.58109,
      "authority": 0.475357
    },
    "issuePrefs": {
      "housing": -0.001747,
      "transport": -0.11279,
      "security": 0.436583,
      "healthcare": 0.088649,
      "climate": 0.231002,
      "industry": 0.202537,
      "education": 0.00219,
      "taxes": -0.01194
    },
    "issueSalience": {
      "housing": 0.280978,
      "transport": 0.343163,
      "security": 0.524486,
      "healthcare": 0.329644,
      "climate": 0.409361,
      "industry": 0.393421,
      "education": 0.281227,
      "taxes": 0.286686
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.533296,
    "turnoutBase": 0.71479,
    "volatility": 0.419111
  },
  {
    "id": "ess_trad_left_25_39_tertiary_rural_right",
    "name": "tradicni levice - 25-39 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000137,
    "position": {
      "econ": -0.105881,
      "culture": 0.27709,
      "authority": 0.217008
    },
    "space": {
      "econ": -0.105881,
      "culture": 0.27709,
      "authority": 0.217008,
      "establishment": 0.260156,
      "globalism": 0.300456,
      "green": 0.060918,
      "ukraine": 0.189023,
      "greenDeal": 0.814733
    },
    "axisSalience": {
      "econ": 0.46447,
      "culture": 0.536378,
      "authority": 0.458123
    },
    "issuePrefs": {
      "housing": 0.024984,
      "transport": 0.012649,
      "security": 0.142926,
      "healthcare": 0.098401,
      "climate": -0.271986,
      "industry": -0.194365,
      "education": -0.13767,
      "taxes": -0.042983
    },
    "issueSalience": {
      "housing": 0.293991,
      "transport": 0.287083,
      "security": 0.360039,
      "healthcare": 0.335105,
      "climate": 0.432312,
      "industry": 0.388844,
      "education": 0.357095,
      "taxes": 0.304071
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.63884,
    "turnoutBase": 0.639105,
    "volatility": 0.426586
  },
  {
    "id": "ess_trad_left_40_54_lower_town_center",
    "name": "tradicni levice - 40-54 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000137,
    "position": {
      "econ": -0.06429,
      "culture": 0.212088,
      "authority": -0.478039
    },
    "space": {
      "econ": -0.06429,
      "culture": 0.212088,
      "authority": -0.478039,
      "establishment": -0.241841,
      "globalism": -0.198354,
      "green": -0.615628,
      "ukraine": 0.104244,
      "greenDeal": -0.104865
    },
    "axisSalience": {
      "econ": 0.447002,
      "culture": 0.509077,
      "authority": 0.552094
    },
    "issuePrefs": {
      "housing": 0.009909,
      "transport": -0.045906,
      "security": -0.209635,
      "healthcare": 0.063256,
      "climate": 0.472614,
      "industry": 0.03377,
      "education": -0.015163,
      "taxes": -0.020838
    },
    "issueSalience": {
      "housing": 0.285549,
      "transport": 0.305707,
      "security": 0.397396,
      "healthcare": 0.315423,
      "climate": 0.544664,
      "industry": 0.298911,
      "education": 0.288491,
      "taxes": 0.291669
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.368751,
    "turnoutBase": 0.521536,
    "volatility": 0.681766
  },
  {
    "id": "ess_trad_left_15_24_secondary_large_town_left",
    "name": "tradicni levice - 15-24 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 6.8e-05,
    "position": {
      "econ": -0.385748,
      "culture": 0.03808,
      "authority": 0.102408
    },
    "space": {
      "econ": -0.385748,
      "culture": 0.03808,
      "authority": 0.102408,
      "establishment": -0.445219,
      "globalism": -0.088332,
      "green": -0.156145,
      "ukraine": -0.433368,
      "greenDeal": -0.437107
    },
    "axisSalience": {
      "econ": 0.582014,
      "culture": 0.435993,
      "authority": 0.416867
    },
    "issuePrefs": {
      "housing": 0.207592,
      "transport": 0.078983,
      "security": 0.124725,
      "healthcare": 0.280785,
      "climate": 0.234814,
      "industry": -0.065684,
      "education": 0.098685,
      "taxes": -0.273169
    },
    "issueSalience": {
      "housing": 0.396251,
      "transport": 0.32423,
      "security": 0.349846,
      "healthcare": 0.437239,
      "climate": 0.411496,
      "industry": 0.316783,
      "education": 0.335263,
      "taxes": 0.432975
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.449083,
    "turnoutBase": 0.554417,
    "volatility": 0.54007
  },
  {
    "id": "ess_trad_left_55_plus_tertiary_rural_right",
    "name": "tradicni levice - 55+ - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 6.8e-05,
    "position": {
      "econ": -0.056749,
      "culture": 0.454722,
      "authority": 0.567797
    },
    "space": {
      "econ": -0.056749,
      "culture": 0.454722,
      "authority": 0.567797,
      "establishment": 0.334685,
      "globalism": 0.53492,
      "green": -0.121276,
      "ukraine": 0.346465,
      "greenDeal": 0.296642
    },
    "axisSalience": {
      "econ": 0.443835,
      "culture": 0.610983,
      "authority": 0.584407
    },
    "issuePrefs": {
      "housing": -0.023355,
      "transport": -0.003472,
      "security": 0.355354,
      "healthcare": 0.077237,
      "climate": 0.004259,
      "industry": -0.015449,
      "education": -0.263215,
      "taxes": 0.013707
    },
    "issueSalience": {
      "housing": 0.293079,
      "transport": 0.281944,
      "security": 0.478998,
      "healthcare": 0.323253,
      "climate": 0.282385,
      "industry": 0.288651,
      "education": 0.427401,
      "taxes": 0.287676
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.65887,
    "turnoutBase": 0.741714,
    "volatility": 0.349878
  },
  {
    "id": "ess_trad_left_15_24_secondary_unknown_unknown",
    "name": "tradicni levice - 15-24 - stredoskolaci - nezname sidlo - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "unknown",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 3.4e-05,
    "position": {
      "econ": -0.214362,
      "culture": 0.01492,
      "authority": 0.165964
    },
    "space": {
      "econ": -0.214362,
      "culture": 0.01492,
      "authority": 0.165964,
      "establishment": 0.091127,
      "globalism": 0.01998,
      "green": 0.074136,
      "ukraine": 0.70371,
      "greenDeal": 0.251851
    },
    "axisSalience": {
      "econ": 0.510032,
      "culture": 0.426267,
      "authority": 0.439747
    },
    "issuePrefs": {
      "housing": 0.116108,
      "transport": 0.053302,
      "security": 0.047182,
      "healthcare": 0.155534,
      "climate": -0.123896,
      "industry": -0.156365,
      "education": 0.041829,
      "taxes": -0.15255
    },
    "issueSalience": {
      "housing": 0.345021,
      "transport": 0.309849,
      "security": 0.306422,
      "healthcare": 0.367099,
      "climate": 0.349382,
      "industry": 0.367564,
      "education": 0.303424,
      "taxes": 0.365428
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.498489,
    "turnoutBase": 0.573189,
    "volatility": 0.491799
  },
  {
    "id": "ess_trad_left_40_54_tertiary_rural_right",
    "name": "tradicni levice - 40-54 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_left",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 3.4e-05,
    "position": {
      "econ": -0.286259,
      "culture": 0.003799,
      "authority": 0.608264
    },
    "space": {
      "econ": -0.286259,
      "culture": 0.003799,
      "authority": 0.608264,
      "establishment": 0.464241,
      "globalism": 0.400095,
      "green": 0.17776,
      "ukraine": 0.037406,
      "greenDeal": 0.398721
    },
    "axisSalience": {
      "econ": 0.540229,
      "culture": 0.421595,
      "authority": 0.598975
    },
    "issuePrefs": {
      "housing": 0.156986,
      "transport": 0.118892,
      "security": 0.303178,
      "healthcare": 0.20641,
      "climate": -0.239629,
      "industry": -0.226688,
      "education": -0.020648,
      "taxes": -0.20565
    },
    "issueSalience": {
      "housing": 0.367912,
      "transport": 0.34658,
      "security": 0.44978,
      "healthcare": 0.39559,
      "climate": 0.414192,
      "industry": 0.406945,
      "education": 0.291563,
      "taxes": 0.395164
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.661145,
    "turnoutBase": 0.666248,
    "volatility": 0.428218
  },
  {
    "id": "ess_trad_right_55_plus_secondary_town_right",
    "name": "tradicni pravice - 55+ - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.006099,
    "position": {
      "econ": 0.44516,
      "culture": 0.216409,
      "authority": 0.137988
    },
    "space": {
      "econ": 0.44516,
      "culture": 0.216409,
      "authority": 0.137988,
      "establishment": 0.205869,
      "globalism": -0.114045,
      "green": 0.108936,
      "ukraine": 0.086652,
      "greenDeal": 0.22162
    },
    "axisSalience": {
      "econ": 0.606967,
      "culture": 0.510892,
      "authority": 0.429676
    },
    "issuePrefs": {
      "housing": -0.270807,
      "transport": -0.163929,
      "security": 0.159743,
      "healthcare": -0.303203,
      "climate": -0.140487,
      "industry": 0.190538,
      "education": -0.157491,
      "taxes": 0.346484
    },
    "issueSalience": {
      "housing": 0.431652,
      "transport": 0.3718,
      "security": 0.369456,
      "healthcare": 0.449793,
      "climate": 0.358673,
      "industry": 0.386701,
      "education": 0.368195,
      "taxes": 0.474031
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.499627,
    "turnoutBase": 0.677205,
    "volatility": 0.411472
  },
  {
    "id": "ess_trad_right_40_54_secondary_rural_right",
    "name": "tradicni pravice - 40-54 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.005664,
    "position": {
      "econ": 0.442105,
      "culture": 0.173879,
      "authority": 0.023475
    },
    "space": {
      "econ": 0.442105,
      "culture": 0.173879,
      "authority": 0.023475,
      "establishment": 0.134273,
      "globalism": -0.096876,
      "green": 0.029071,
      "ukraine": 0.123417,
      "greenDeal": 0.147298
    },
    "axisSalience": {
      "econ": 0.605684,
      "culture": 0.493029,
      "authority": 0.388451
    },
    "issuePrefs": {
      "housing": -0.264023,
      "transport": -0.15345,
      "security": 0.070805,
      "healthcare": -0.304405,
      "climate": -0.062175,
      "industry": 0.199315,
      "education": -0.14565,
      "taxes": 0.339181
    },
    "issueSalience": {
      "housing": 0.427853,
      "transport": 0.365932,
      "security": 0.319651,
      "healthcare": 0.450467,
      "climate": 0.314818,
      "industry": 0.391616,
      "education": 0.361564,
      "taxes": 0.469941
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.494929,
    "turnoutBase": 0.5947,
    "volatility": 0.507915
  },
  {
    "id": "ess_trad_right_55_plus_secondary_rural_right",
    "name": "tradicni pravice - 55+ - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.005053,
    "position": {
      "econ": 0.465121,
      "culture": 0.282793,
      "authority": 0.117269
    },
    "space": {
      "econ": 0.465121,
      "culture": 0.282793,
      "authority": 0.117269,
      "establishment": -0.061032,
      "globalism": -0.16613,
      "green": -0.058386,
      "ukraine": -0.191798,
      "greenDeal": -0.020537
    },
    "axisSalience": {
      "econ": 0.615351,
      "culture": 0.538773,
      "authority": 0.422217
    },
    "issuePrefs": {
      "housing": -0.289752,
      "transport": -0.187119,
      "security": 0.197136,
      "healthcare": -0.312264,
      "climate": 0.047789,
      "industry": 0.269787,
      "education": -0.174058,
      "taxes": 0.368822
    },
    "issueSalience": {
      "housing": 0.442261,
      "transport": 0.384786,
      "security": 0.390396,
      "healthcare": 0.454868,
      "climate": 0.306762,
      "industry": 0.431081,
      "education": 0.377472,
      "taxes": 0.486541
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.47515,
    "turnoutBase": 0.667864,
    "volatility": 0.435493
  },
  {
    "id": "ess_trad_right_40_54_secondary_town_right",
    "name": "tradicni pravice - 40-54 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.004959,
    "position": {
      "econ": 0.481281,
      "culture": 0.198849,
      "authority": -0.014272
    },
    "space": {
      "econ": 0.481281,
      "culture": 0.198849,
      "authority": -0.014272,
      "establishment": -0.060102,
      "globalism": -0.202611,
      "green": 0.021212,
      "ukraine": -0.183357,
      "greenDeal": 0.020595
    },
    "axisSalience": {
      "econ": 0.622138,
      "culture": 0.503517,
      "authority": 0.385138
    },
    "issuePrefs": {
      "housing": -0.288567,
      "transport": -0.180427,
      "security": 0.097968,
      "healthcare": -0.330615,
      "climate": -0.021039,
      "industry": 0.25224,
      "education": -0.14053,
      "taxes": 0.370384
    },
    "issueSalience": {
      "housing": 0.441597,
      "transport": 0.381039,
      "security": 0.334862,
      "healthcare": 0.465144,
      "climate": 0.291782,
      "industry": 0.421254,
      "education": 0.358697,
      "taxes": 0.487415
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.473035,
    "turnoutBase": 0.587896,
    "volatility": 0.525409
  },
  {
    "id": "ess_trad_right_55_plus_secondary_rural_center",
    "name": "tradicni pravice - 55+ - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004936,
    "position": {
      "econ": 0.229815,
      "culture": 0.260653,
      "authority": 0.120434
    },
    "space": {
      "econ": 0.229815,
      "culture": 0.260653,
      "authority": 0.120434,
      "establishment": 0.080557,
      "globalism": -0.077829,
      "green": 0.082913,
      "ukraine": -0.019947,
      "greenDeal": 0.217866
    },
    "axisSalience": {
      "econ": 0.516522,
      "culture": 0.529474,
      "authority": 0.423356
    },
    "issuePrefs": {
      "housing": -0.157677,
      "transport": -0.113711,
      "security": 0.163257,
      "healthcare": -0.144615,
      "climate": -0.1207,
      "industry": 0.100344,
      "education": -0.129262,
      "taxes": 0.196745
    },
    "issueSalience": {
      "housing": 0.368299,
      "transport": 0.343678,
      "security": 0.371424,
      "healthcare": 0.360984,
      "climate": 0.347592,
      "industry": 0.336193,
      "education": 0.352387,
      "taxes": 0.390177
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.491775,
    "turnoutBase": 0.672819,
    "volatility": 0.52275
  },
  {
    "id": "ess_trad_right_55_plus_secondary_large_town_right",
    "name": "tradicni pravice - 55+ - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.004877,
    "position": {
      "econ": 0.449535,
      "culture": 0.305772,
      "authority": 0.114718
    },
    "space": {
      "econ": 0.449535,
      "culture": 0.305772,
      "authority": 0.114718,
      "establishment": -0.04001,
      "globalism": -0.028342,
      "green": 0.038906,
      "ukraine": -0.127169,
      "greenDeal": 0.205289
    },
    "axisSalience": {
      "econ": 0.608805,
      "culture": 0.548424,
      "authority": 0.421298
    },
    "issuePrefs": {
      "housing": -0.283937,
      "transport": -0.170824,
      "security": 0.172016,
      "healthcare": -0.299204,
      "climate": -0.085494,
      "industry": 0.212556,
      "education": -0.208674,
      "taxes": 0.360358
    },
    "issueSalience": {
      "housing": 0.439005,
      "transport": 0.375661,
      "security": 0.376329,
      "healthcare": 0.447554,
      "climate": 0.327876,
      "industry": 0.399031,
      "education": 0.396857,
      "taxes": 0.481801
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.485099,
    "turnoutBase": 0.6686,
    "volatility": 0.433601
  },
  {
    "id": "ess_trad_right_40_54_secondary_large_town_right",
    "name": "tradicni pravice - 40-54 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.004666,
    "position": {
      "econ": 0.347505,
      "culture": 0.257538,
      "authority": 0.150933
    },
    "space": {
      "econ": 0.347505,
      "culture": 0.257538,
      "authority": 0.150933,
      "establishment": 0.046412,
      "globalism": -0.061119,
      "green": 0.143347,
      "ukraine": -0.067701,
      "greenDeal": 0.22011
    },
    "axisSalience": {
      "econ": 0.565952,
      "culture": 0.528166,
      "authority": 0.434336
    },
    "issuePrefs": {
      "housing": -0.222032,
      "transport": -0.140567,
      "security": 0.182106,
      "healthcare": -0.2296,
      "climate": -0.164841,
      "industry": 0.153383,
      "education": -0.160093,
      "taxes": 0.281108
    },
    "issueSalience": {
      "housing": 0.404338,
      "transport": 0.358718,
      "security": 0.38198,
      "healthcare": 0.408576,
      "climate": 0.372311,
      "industry": 0.365894,
      "education": 0.369652,
      "taxes": 0.43742
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.490046,
    "turnoutBase": 0.591624,
    "volatility": 0.515823
  },
  {
    "id": "ess_trad_right_40_54_secondary_large_town_center",
    "name": "tradicni pravice - 40-54 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004642,
    "position": {
      "econ": 0.251179,
      "culture": 0.395759,
      "authority": 0.039959
    },
    "space": {
      "econ": 0.251179,
      "culture": 0.395759,
      "authority": 0.039959,
      "establishment": -0.132528,
      "globalism": -0.410498,
      "green": 0.049529,
      "ukraine": -0.289285,
      "greenDeal": -0.269195
    },
    "axisSalience": {
      "econ": 0.525495,
      "culture": 0.586219,
      "authority": 0.394385
    },
    "issuePrefs": {
      "housing": -0.185639,
      "transport": -0.183291,
      "security": 0.232619,
      "healthcare": -0.149188,
      "climate": 0.039714,
      "industry": 0.251386,
      "education": -0.108489,
      "taxes": 0.22834
    },
    "issueSalience": {
      "housing": 0.383958,
      "transport": 0.382643,
      "security": 0.410267,
      "healthcare": 0.363545,
      "climate": 0.30224,
      "industry": 0.420776,
      "education": 0.340754,
      "taxes": 0.40787
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.454768,
    "turnoutBase": 0.585362,
    "volatility": 0.631927
  },
  {
    "id": "ess_trad_right_55_plus_secondary_town_center",
    "name": "tradicni pravice - 55+ - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.004583,
    "position": {
      "econ": 0.182407,
      "culture": 0.429562,
      "authority": 0.26992
    },
    "space": {
      "econ": 0.182407,
      "culture": 0.429562,
      "authority": 0.26992,
      "establishment": -0.124083,
      "globalism": -0.473262,
      "green": 0.114843,
      "ukraine": -0.371835,
      "greenDeal": 0.076162
    },
    "axisSalience": {
      "econ": 0.496611,
      "culture": 0.600416,
      "authority": 0.477171
    },
    "issuePrefs": {
      "housing": -0.151871,
      "transport": -0.179714,
      "security": 0.402562,
      "healthcare": -0.096968,
      "climate": -0.104012,
      "industry": 0.142949,
      "education": -0.090007,
      "taxes": 0.182881
    },
    "issueSalience": {
      "housing": 0.365048,
      "transport": 0.38064,
      "security": 0.505435,
      "healthcare": 0.334302,
      "climate": 0.338247,
      "industry": 0.360052,
      "education": 0.330404,
      "taxes": 0.382413
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.451678,
    "turnoutBase": 0.665657,
    "volatility": 0.541167
  },
  {
    "id": "ess_trad_right_55_plus_secondary_large_town_center",
    "name": "tradicni pravice - 55+ - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003784,
    "position": {
      "econ": 0.214899,
      "culture": 0.360117,
      "authority": 0.235662
    },
    "space": {
      "econ": 0.214899,
      "culture": 0.360117,
      "authority": 0.235662,
      "establishment": -0.129429,
      "globalism": -0.354315,
      "green": 0.064955,
      "ukraine": -0.404053,
      "greenDeal": -0.135588
    },
    "axisSalience": {
      "econ": 0.510257,
      "culture": 0.571249,
      "authority": 0.464838
    },
    "issuePrefs": {
      "housing": -0.161408,
      "transport": -0.161064,
      "security": 0.343044,
      "healthcare": -0.125918,
      "climate": -0.008803,
      "industry": 0.196216,
      "education": -0.099667,
      "taxes": 0.197941
    },
    "issueSalience": {
      "housing": 0.370389,
      "transport": 0.370196,
      "security": 0.472105,
      "healthcare": 0.350514,
      "climate": 0.28493,
      "industry": 0.389881,
      "education": 0.335814,
      "taxes": 0.390847
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.458387,
    "turnoutBase": 0.66547,
    "volatility": 0.541649
  },
  {
    "id": "ess_trad_right_40_54_secondary_rural_center",
    "name": "tradicni pravice - 40-54 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.003514,
    "position": {
      "econ": 0.191939,
      "culture": 0.378279,
      "authority": 0.304998
    },
    "space": {
      "econ": 0.191939,
      "culture": 0.378279,
      "authority": 0.304998,
      "establishment": 0.043958,
      "globalism": -0.270673,
      "green": 0.044334,
      "ukraine": -0.216419,
      "greenDeal": -0.115253
    },
    "axisSalience": {
      "econ": 0.500614,
      "culture": 0.578877,
      "authority": 0.489799
    },
    "issuePrefs": {
      "housing": -0.15096,
      "transport": -0.148556,
      "security": 0.361052,
      "healthcare": -0.107934,
      "climate": 0.000351,
      "industry": 0.184043,
      "education": -0.118915,
      "taxes": 0.18359
    },
    "issueSalience": {
      "housing": 0.364538,
      "transport": 0.363191,
      "security": 0.482189,
      "healthcare": 0.340443,
      "climate": 0.280196,
      "industry": 0.383064,
      "education": 0.346592,
      "taxes": 0.38281
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.477276,
    "turnoutBase": 0.591539,
    "volatility": 0.616044
  },
  {
    "id": "ess_trad_right_40_54_secondary_town_center",
    "name": "tradicni pravice - 40-54 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00315,
    "position": {
      "econ": 0.217899,
      "culture": 0.307346,
      "authority": 0.130474
    },
    "space": {
      "econ": 0.217899,
      "culture": 0.307346,
      "authority": 0.130474,
      "establishment": 0.057543,
      "globalism": -0.140945,
      "green": 0.113605,
      "ukraine": -0.034997,
      "greenDeal": 0.113365
    },
    "axisSalience": {
      "econ": 0.511518,
      "culture": 0.549085,
      "authority": 0.426971
    },
    "issuePrefs": {
      "housing": -0.156726,
      "transport": -0.126711,
      "security": 0.195121,
      "healthcare": -0.1323,
      "climate": -0.113538,
      "industry": 0.128348,
      "education": -0.128859,
      "taxes": 0.193769
    },
    "issueSalience": {
      "housing": 0.367767,
      "transport": 0.350958,
      "security": 0.389268,
      "healthcare": 0.354088,
      "climate": 0.343581,
      "industry": 0.351875,
      "education": 0.352161,
      "taxes": 0.388511
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.486147,
    "turnoutBase": 0.592014,
    "volatility": 0.614821
  },
  {
    "id": "ess_trad_right_25_39_secondary_rural_center",
    "name": "tradicni pravice - 25-39 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.002985,
    "position": {
      "econ": 0.273404,
      "culture": 0.256746,
      "authority": 0.105461
    },
    "space": {
      "econ": 0.273404,
      "culture": 0.256746,
      "authority": 0.105461,
      "establishment": 0.178458,
      "globalism": -0.054268,
      "green": 0.129672,
      "ukraine": 0.016096,
      "greenDeal": 0.13625
    },
    "axisSalience": {
      "econ": 0.53483,
      "culture": 0.527833,
      "authority": 0.417966
    },
    "issuePrefs": {
      "housing": -0.181182,
      "transport": -0.121077,
      "security": 0.145755,
      "healthcare": -0.176311,
      "climate": -0.131514,
      "industry": 0.13928,
      "education": -0.143539,
      "taxes": 0.22766
    },
    "issueSalience": {
      "housing": 0.381462,
      "transport": 0.347803,
      "security": 0.361623,
      "healthcare": 0.378734,
      "climate": 0.353648,
      "industry": 0.357997,
      "education": 0.360382,
      "taxes": 0.40749
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.501021,
    "turnoutBase": 0.576246,
    "volatility": 0.583939
  },
  {
    "id": "ess_trad_right_40_54_tertiary_large_town_right",
    "name": "tradicni pravice - 40-54 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002703,
    "position": {
      "econ": 0.341575,
      "culture": 0.233792,
      "authority": 0.148844
    },
    "space": {
      "econ": 0.341575,
      "culture": 0.233792,
      "authority": 0.148844,
      "establishment": -0.00083,
      "globalism": -0.086218,
      "green": 0.041136,
      "ukraine": -0.245742,
      "greenDeal": -0.075742
    },
    "axisSalience": {
      "econ": 0.563462,
      "culture": 0.518193,
      "authority": 0.433584
    },
    "issuePrefs": {
      "housing": -0.215921,
      "transport": -0.137823,
      "security": 0.192924,
      "healthcare": -0.227231,
      "climate": -0.00841,
      "industry": 0.217385,
      "education": -0.144837,
      "taxes": 0.273989
    },
    "issueSalience": {
      "housing": 0.400916,
      "transport": 0.357181,
      "security": 0.388037,
      "healthcare": 0.407249,
      "climate": 0.28471,
      "industry": 0.401736,
      "education": 0.361109,
      "taxes": 0.433434
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.594761,
    "turnoutBase": 0.649971,
    "volatility": 0.470075
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_rural_right",
    "name": "tradicni pravice - 55+ - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.002021,
    "position": {
      "econ": 0.552787,
      "culture": 0.253442,
      "authority": 0.065907
    },
    "space": {
      "econ": 0.552787,
      "culture": 0.253442,
      "authority": 0.065907,
      "establishment": 0.024166,
      "globalism": 0.203487,
      "green": 0.1335,
      "ukraine": 0.184962,
      "greenDeal": 0.580754
    },
    "axisSalience": {
      "econ": 0.65217,
      "culture": 0.526445,
      "authority": 0.403726
    },
    "issuePrefs": {
      "housing": -0.334446,
      "transport": -0.159398,
      "security": 0.060401,
      "healthcare": -0.377731,
      "climate": -0.258731,
      "industry": 0.16052,
      "education": -0.266141,
      "taxes": 0.428419
    },
    "issueSalience": {
      "housing": 0.46729,
      "transport": 0.369263,
      "security": 0.313825,
      "healthcare": 0.491529,
      "climate": 0.424889,
      "industry": 0.369891,
      "education": 0.429039,
      "taxes": 0.519915
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.614143,
    "turnoutBase": 0.730846,
    "volatility": 0.377825
  },
  {
    "id": "ess_trad_right_25_39_secondary_rural_right",
    "name": "tradicni pravice - 25-39 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00201,
    "position": {
      "econ": 0.42816,
      "culture": 0.195029,
      "authority": 0.043496
    },
    "space": {
      "econ": 0.42816,
      "culture": 0.195029,
      "authority": 0.043496,
      "establishment": 0.204598,
      "globalism": 0.17353,
      "green": -0.056339,
      "ukraine": 0.123704,
      "greenDeal": 0.065609
    },
    "axisSalience": {
      "econ": 0.599827,
      "culture": 0.501912,
      "authority": 0.395659
    },
    "issuePrefs": {
      "housing": -0.258892,
      "transport": -0.121322,
      "security": 0.040444,
      "healthcare": -0.292673,
      "climate": 0.022194,
      "industry": 0.216313,
      "education": -0.209195,
      "taxes": 0.331679
    },
    "issueSalience": {
      "housing": 0.424979,
      "transport": 0.34794,
      "security": 0.302649,
      "healthcare": 0.443897,
      "climate": 0.292429,
      "industry": 0.401135,
      "education": 0.397149,
      "taxes": 0.46574
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.51678,
    "turnoutBase": 0.577161,
    "volatility": 0.481586
  },
  {
    "id": "ess_trad_right_55_plus_lower_rural_right",
    "name": "tradicni pravice - 55+ - nizsi vzdelani - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001822,
    "position": {
      "econ": 0.547272,
      "culture": 0.55054,
      "authority": -0.194172
    },
    "space": {
      "econ": 0.547272,
      "culture": 0.55054,
      "authority": -0.194172,
      "establishment": -0.220196,
      "globalism": -0.806892,
      "green": 0.20977,
      "ukraine": -0.633012,
      "greenDeal": 0.095978
    },
    "axisSalience": {
      "econ": 0.649854,
      "culture": 0.651227,
      "authority": 0.449902
    },
    "issuePrefs": {
      "housing": -0.367064,
      "transport": -0.332742,
      "security": 0.229646,
      "healthcare": -0.349992,
      "climate": -0.177909,
      "industry": 0.327807,
      "education": -0.146518,
      "taxes": 0.4601
    },
    "issueSalience": {
      "housing": 0.485556,
      "transport": 0.466336,
      "security": 0.408602,
      "healthcare": 0.475996,
      "climate": 0.379629,
      "industry": 0.463572,
      "education": 0.36205,
      "taxes": 0.537656
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.333971,
    "turnoutBase": 0.602293,
    "volatility": 0.489818
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_large_town_right",
    "name": "tradicni pravice - 55+ - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001822,
    "position": {
      "econ": 0.367705,
      "culture": 0.266224,
      "authority": 0.008067
    },
    "space": {
      "econ": 0.367705,
      "culture": 0.266224,
      "authority": 0.008067,
      "establishment": 0.197266,
      "globalism": -0.168257,
      "green": -0.015861,
      "ukraine": 0.084306,
      "greenDeal": -0.139615
    },
    "axisSalience": {
      "econ": 0.574436,
      "culture": 0.531814,
      "authority": 0.382904
    },
    "issuePrefs": {
      "housing": -0.234185,
      "transport": -0.160037,
      "security": 0.103086,
      "healthcare": -0.24345,
      "climate": 0.050512,
      "industry": 0.250572,
      "education": -0.144411,
      "taxes": 0.296695
    },
    "issueSalience": {
      "housing": 0.411143,
      "transport": 0.369621,
      "security": 0.337728,
      "healthcare": 0.416332,
      "climate": 0.308287,
      "industry": 0.42032,
      "education": 0.36087,
      "taxes": 0.446149
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.605686,
    "turnoutBase": 0.736904,
    "volatility": 0.362246
  },
  {
    "id": "ess_trad_right_40_54_secondary_rural_unknown",
    "name": "tradicni pravice - 40-54 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001786,
    "position": {
      "econ": 0.766793,
      "culture": 0.200226,
      "authority": 0.107925
    },
    "space": {
      "econ": 0.766793,
      "culture": 0.200226,
      "authority": 0.107925,
      "establishment": -0.403813,
      "globalism": -0.460721,
      "green": 0.25601,
      "ukraine": -0.361372,
      "greenDeal": -0.009505
    },
    "axisSalience": {
      "econ": 0.742053,
      "culture": 0.504095,
      "authority": 0.418853
    },
    "issuePrefs": {
      "housing": -0.445763,
      "transport": -0.283026,
      "security": 0.234816,
      "healthcare": -0.536073,
      "climate": -0.181666,
      "industry": 0.391047,
      "education": -0.152751,
      "taxes": 0.576118
    },
    "issueSalience": {
      "housing": 0.529627,
      "transport": 0.438494,
      "security": 0.411497,
      "healthcare": 0.580201,
      "climate": 0.381733,
      "industry": 0.498986,
      "education": 0.36554,
      "taxes": 0.602626
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.430052,
    "turnoutBase": 0.575867,
    "volatility": 0.556343
  },
  {
    "id": "ess_trad_right_15_24_secondary_rural_unknown",
    "name": "tradicni pravice - 15-24 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001739,
    "position": {
      "econ": 0.492829,
      "culture": 0.193417,
      "authority": 0.061286
    },
    "space": {
      "econ": 0.492829,
      "culture": 0.193417,
      "authority": 0.061286,
      "establishment": 0.030352,
      "globalism": -0.066501,
      "green": 0.452645,
      "ukraine": -0.11982,
      "greenDeal": 0.34101
    },
    "axisSalience": {
      "econ": 0.626988,
      "culture": 0.501235,
      "authority": 0.402063
    },
    "issuePrefs": {
      "housing": -0.294266,
      "transport": -0.166003,
      "security": 0.11371,
      "healthcare": -0.339364,
      "climate": -0.421387,
      "industry": 0.179674,
      "education": -0.171345,
      "taxes": 0.378047
    },
    "issueSalience": {
      "housing": 0.444789,
      "transport": 0.372961,
      "security": 0.343678,
      "healthcare": 0.470044,
      "climate": 0.515977,
      "industry": 0.380618,
      "education": 0.375953,
      "taxes": 0.491706
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.488438,
    "turnoutBase": 0.571062,
    "volatility": 0.497268
  },
  {
    "id": "ess_trad_right_25_39_tertiary_town_right",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001716,
    "position": {
      "econ": 0.514232,
      "culture": 0.205255,
      "authority": 0.06476
    },
    "space": {
      "econ": 0.514232,
      "culture": 0.205255,
      "authority": 0.06476,
      "establishment": -0.004056,
      "globalism": -0.043888,
      "green": 0.118055,
      "ukraine": -0.01549,
      "greenDeal": 0.391296
    },
    "axisSalience": {
      "econ": 0.635978,
      "culture": 0.506207,
      "authority": 0.403314
    },
    "issuePrefs": {
      "housing": -0.307458,
      "transport": -0.170771,
      "security": 0.106762,
      "healthcare": -0.353827,
      "climate": -0.194562,
      "industry": 0.179582,
      "education": -0.185599,
      "taxes": 0.394878
    },
    "issueSalience": {
      "housing": 0.452177,
      "transport": 0.375632,
      "security": 0.339787,
      "healthcare": 0.478143,
      "climate": 0.388955,
      "industry": 0.380566,
      "education": 0.383936,
      "taxes": 0.501132
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.597042,
    "turnoutBase": 0.629858,
    "volatility": 0.450365
  },
  {
    "id": "ess_trad_right_25_39_tertiary_large_town_right",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001622,
    "position": {
      "econ": 0.532951,
      "culture": 0.166553,
      "authority": 0.238043
    },
    "space": {
      "econ": 0.532951,
      "culture": 0.166553,
      "authority": 0.238043,
      "establishment": 0.241489,
      "globalism": 0.182487,
      "green": 0.015903,
      "ukraine": 0.330136,
      "greenDeal": 0.303879
    },
    "axisSalience": {
      "econ": 0.643839,
      "culture": 0.489952,
      "authority": 0.465695
    },
    "issuePrefs": {
      "housing": -0.313109,
      "transport": -0.141319,
      "security": 0.134963,
      "healthcare": -0.370401,
      "climate": -0.096536,
      "industry": 0.202206,
      "education": -0.226349,
      "taxes": 0.403711
    },
    "issueSalience": {
      "housing": 0.455341,
      "transport": 0.359139,
      "security": 0.355579,
      "healthcare": 0.487424,
      "climate": 0.33406,
      "industry": 0.393235,
      "education": 0.406755,
      "taxes": 0.506078
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.630268,
    "turnoutBase": 0.638452,
    "volatility": 0.428266
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_town_right",
    "name": "tradicni pravice - 55+ - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001469,
    "position": {
      "econ": 0.483479,
      "culture": 0.255579,
      "authority": 0.115201
    },
    "space": {
      "econ": 0.483479,
      "culture": 0.255579,
      "authority": 0.115201,
      "establishment": 0.136375,
      "globalism": -0.110862,
      "green": 0.059524,
      "ukraine": -0.222603,
      "greenDeal": 0.06854
    },
    "axisSalience": {
      "econ": 0.623061,
      "culture": 0.527343,
      "authority": 0.421472
    },
    "issuePrefs": {
      "housing": -0.296583,
      "transport": -0.180178,
      "security": 0.18075,
      "healthcare": -0.327659,
      "climate": -0.062048,
      "industry": 0.251955,
      "education": -0.181098,
      "taxes": 0.378775
    },
    "issueSalience": {
      "housing": 0.446087,
      "transport": 0.380899,
      "security": 0.38122,
      "healthcare": 0.463489,
      "climate": 0.314747,
      "industry": 0.421095,
      "education": 0.381415,
      "taxes": 0.492114
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.604258,
    "turnoutBase": 0.734773,
    "volatility": 0.367726
  },
  {
    "id": "ess_trad_right_40_54_secondary_town_unknown",
    "name": "tradicni pravice - 40-54 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.001457,
    "position": {
      "econ": 0.444733,
      "culture": 0.23483,
      "authority": -0.046848
    },
    "space": {
      "econ": 0.444733,
      "culture": 0.23483,
      "authority": -0.046848,
      "establishment": -0.289865,
      "globalism": -0.381695,
      "green": 0.051726,
      "ukraine": -0.388209,
      "greenDeal": -0.054746
    },
    "axisSalience": {
      "econ": 0.606788,
      "culture": 0.518629,
      "authority": 0.396865
    },
    "issuePrefs": {
      "housing": -0.272783,
      "transport": -0.199256,
      "security": 0.136468,
      "healthcare": -0.301422,
      "climate": -0.021914,
      "industry": 0.259986,
      "education": -0.104954,
      "taxes": 0.348388
    },
    "issueSalience": {
      "housing": 0.432758,
      "transport": 0.391583,
      "security": 0.356422,
      "healthcare": 0.448796,
      "climate": 0.292272,
      "industry": 0.425592,
      "education": 0.338774,
      "taxes": 0.475097
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.443909,
    "turnoutBase": 0.579855,
    "volatility": 0.546088
  },
  {
    "id": "ess_trad_right_40_54_tertiary_town_right",
    "name": "tradicni pravice - 40-54 - vysokoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00134,
    "position": {
      "econ": 0.313424,
      "culture": 0.168404,
      "authority": 0.127477
    },
    "space": {
      "econ": 0.313424,
      "culture": 0.168404,
      "authority": 0.127477,
      "establishment": 0.045861,
      "globalism": 0.063383,
      "green": 0.316311,
      "ukraine": 0.191209,
      "greenDeal": 0.512087
    },
    "axisSalience": {
      "econ": 0.551638,
      "culture": 0.49073,
      "authority": 0.425892
    },
    "issuePrefs": {
      "housing": -0.192592,
      "transport": -0.101063,
      "security": 0.099483,
      "healthcare": -0.212193,
      "climate": -0.371129,
      "industry": 0.051587,
      "education": -0.148108,
      "taxes": 0.245874
    },
    "issueSalience": {
      "housing": 0.387851,
      "transport": 0.336595,
      "security": 0.335711,
      "healthcare": 0.398828,
      "climate": 0.487832,
      "industry": 0.308889,
      "education": 0.36294,
      "taxes": 0.417689
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.607472,
    "turnoutBase": 0.651605,
    "volatility": 0.465873
  },
  {
    "id": "ess_trad_right_55_plus_secondary_large_town_unknown",
    "name": "tradicni pravice - 55+ - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.00134,
    "position": {
      "econ": 0.481617,
      "culture": 0.509248,
      "authority": 0.182631
    },
    "space": {
      "econ": 0.481617,
      "culture": 0.509248,
      "authority": 0.182631,
      "establishment": -0.173686,
      "globalism": -0.636922,
      "green": -0.362396,
      "ukraine": -0.523213,
      "greenDeal": -0.281913
    },
    "axisSalience": {
      "econ": 0.622279,
      "culture": 0.633884,
      "authority": 0.445747
    },
    "issuePrefs": {
      "housing": -0.325999,
      "transport": -0.2885,
      "security": 0.412324,
      "healthcare": -0.306025,
      "climate": 0.339861,
      "industry": 0.380868,
      "education": -0.153702,
      "taxes": 0.407874
    },
    "issueSalience": {
      "housing": 0.46256,
      "transport": 0.44156,
      "security": 0.510901,
      "healthcare": 0.451374,
      "climate": 0.470322,
      "industry": 0.493286,
      "education": 0.366073,
      "taxes": 0.50841
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.43789,
    "turnoutBase": 0.663921,
    "volatility": 0.445632
  },
  {
    "id": "ess_trad_right_25_39_tertiary_rural_right",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001281,
    "position": {
      "econ": 0.50199,
      "culture": 0.115215,
      "authority": 0.213545
    },
    "space": {
      "econ": 0.50199,
      "culture": 0.115215,
      "authority": 0.213545,
      "establishment": 0.411323,
      "globalism": 0.221499,
      "green": 0.13472,
      "ukraine": 0.258579,
      "greenDeal": 0.308004
    },
    "axisSalience": {
      "econ": 0.630836,
      "culture": 0.468391,
      "authority": 0.456876
    },
    "issuePrefs": {
      "housing": -0.28992,
      "transport": -0.119656,
      "security": 0.104102,
      "healthcare": -0.352215,
      "climate": -0.18324,
      "industry": 0.177733,
      "education": -0.209533,
      "taxes": 0.375258
    },
    "issueSalience": {
      "housing": 0.442355,
      "transport": 0.347008,
      "security": 0.338297,
      "healthcare": 0.477241,
      "climate": 0.382614,
      "industry": 0.379531,
      "education": 0.397338,
      "taxes": 0.490145
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.646196,
    "turnoutBase": 0.644396,
    "volatility": 0.412981
  },
  {
    "id": "ess_trad_right_25_39_secondary_large_town_center",
    "name": "tradicni pravice - 25-39 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001269,
    "position": {
      "econ": 0.213332,
      "culture": 0.324119,
      "authority": 0.037413
    },
    "space": {
      "econ": 0.213332,
      "culture": 0.324119,
      "authority": 0.037413,
      "establishment": 0.018156,
      "globalism": -0.220569,
      "green": -0.09595,
      "ukraine": -0.312494,
      "greenDeal": 0.152461
    },
    "axisSalience": {
      "econ": 0.5096,
      "culture": 0.55613,
      "authority": 0.393469
    },
    "issuePrefs": {
      "housing": -0.156227,
      "transport": -0.138143,
      "security": 0.178651,
      "healthcare": -0.12767,
      "climate": 0.026395,
      "industry": 0.119884,
      "education": -0.116116,
      "taxes": 0.192494
    },
    "issueSalience": {
      "housing": 0.367487,
      "transport": 0.35736,
      "security": 0.380045,
      "healthcare": 0.351495,
      "climate": 0.294781,
      "industry": 0.347135,
      "education": 0.345025,
      "taxes": 0.387796
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.478218,
    "turnoutBase": 0.570635,
    "volatility": 0.598366
  },
  {
    "id": "ess_trad_right_25_39_tertiary_town_center",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001175,
    "position": {
      "econ": 0.246901,
      "culture": 0.319811,
      "authority": 0.057166
    },
    "space": {
      "econ": 0.246901,
      "culture": 0.319811,
      "authority": 0.057166,
      "establishment": -0.200039,
      "globalism": 0.006624,
      "green": -0.039154,
      "ukraine": -0.213907,
      "greenDeal": -0.325254
    },
    "axisSalience": {
      "econ": 0.523698,
      "culture": 0.554321,
      "authority": 0.40058
    },
    "issuePrefs": {
      "housing": -0.174173,
      "transport": -0.118496,
      "security": 0.140911,
      "healthcare": -0.152184,
      "climate": 0.119262,
      "industry": 0.249202,
      "education": -0.172648,
      "taxes": 0.216146
    },
    "issueSalience": {
      "housing": 0.377537,
      "transport": 0.346358,
      "security": 0.35891,
      "healthcare": 0.365223,
      "climate": 0.346787,
      "industry": 0.419553,
      "education": 0.376683,
      "taxes": 0.401042
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.584394,
    "turnoutBase": 0.622999,
    "volatility": 0.568004
  },
  {
    "id": "ess_trad_right_25_39_secondary_town_right",
    "name": "tradicni pravice - 25-39 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.001152,
    "position": {
      "econ": 0.362882,
      "culture": 0.152248,
      "authority": 0.137531
    },
    "space": {
      "econ": 0.362882,
      "culture": 0.152248,
      "authority": 0.137531,
      "establishment": 0.21987,
      "globalism": -0.065644,
      "green": 0.053919,
      "ukraine": 0.027344,
      "greenDeal": 0.093144
    },
    "axisSalience": {
      "econ": 0.57241,
      "culture": 0.483944,
      "authority": 0.429511
    },
    "issuePrefs": {
      "housing": -0.217855,
      "transport": -0.126002,
      "security": 0.137527,
      "healthcare": -0.249095,
      "climate": -0.064902,
      "industry": 0.171976,
      "education": -0.125937,
      "taxes": 0.279545
    },
    "issueSalience": {
      "housing": 0.401999,
      "transport": 0.350561,
      "security": 0.357015,
      "healthcare": 0.419493,
      "climate": 0.316345,
      "industry": 0.376306,
      "education": 0.350525,
      "taxes": 0.436545
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.503651,
    "turnoutBase": 0.577695,
    "volatility": 0.480212
  },
  {
    "id": "ess_trad_right_25_39_secondary_town_center",
    "name": "tradicni pravice - 25-39 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001116,
    "position": {
      "econ": 0.224011,
      "culture": 0.285621,
      "authority": 0.178566
    },
    "space": {
      "econ": 0.224011,
      "culture": 0.285621,
      "authority": 0.178566,
      "establishment": -0.030213,
      "globalism": -0.377426,
      "green": 0.080603,
      "ukraine": -0.137288,
      "greenDeal": -0.008837
    },
    "axisSalience": {
      "econ": 0.514085,
      "culture": 0.539961,
      "authority": 0.444284
    },
    "issuePrefs": {
      "housing": -0.157481,
      "transport": -0.152706,
      "security": 0.269604,
      "healthcare": -0.138439,
      "climate": -0.05556,
      "industry": 0.156578,
      "education": -0.070696,
      "taxes": 0.195563
    },
    "issueSalience": {
      "housing": 0.368189,
      "transport": 0.365515,
      "security": 0.430978,
      "healthcare": 0.357526,
      "climate": 0.311113,
      "industry": 0.367684,
      "education": 0.31959,
      "taxes": 0.389515
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.464937,
    "turnoutBase": 0.568943,
    "volatility": 0.602719
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_large_town_center",
    "name": "tradicni pravice - 55+ - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001116,
    "position": {
      "econ": 0.225812,
      "culture": 0.38456,
      "authority": 0.219516
    },
    "space": {
      "econ": 0.225812,
      "culture": 0.38456,
      "authority": 0.219516,
      "establishment": -0.049988,
      "globalism": -0.174977,
      "green": -0.029102,
      "ukraine": -0.308491,
      "greenDeal": 0.103128
    },
    "axisSalience": {
      "econ": 0.514841,
      "culture": 0.581515,
      "authority": 0.459026
    },
    "issuePrefs": {
      "housing": -0.170344,
      "transport": -0.146671,
      "security": 0.299952,
      "healthcare": -0.13182,
      "climate": -0.007922,
      "industry": 0.148344,
      "education": -0.150296,
      "taxes": 0.208732
    },
    "issueSalience": {
      "housing": 0.375393,
      "transport": 0.362136,
      "security": 0.447973,
      "healthcare": 0.353819,
      "climate": 0.284436,
      "industry": 0.363072,
      "education": 0.364166,
      "taxes": 0.39689
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.585502,
    "turnoutBase": 0.72825,
    "volatility": 0.484499
  },
  {
    "id": "ess_trad_right_15_24_secondary_rural_center",
    "name": "tradicni pravice - 15-24 - stredoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001069,
    "position": {
      "econ": 0.176821,
      "culture": 0.303215,
      "authority": 0.111319
    },
    "space": {
      "econ": 0.176821,
      "culture": 0.303215,
      "authority": 0.111319,
      "establishment": 0.123237,
      "globalism": 0.120292,
      "green": -0.016678,
      "ukraine": 0.111861,
      "greenDeal": 0.274063
    },
    "axisSalience": {
      "econ": 0.494265,
      "culture": 0.54735,
      "authority": 0.420075
    },
    "issuePrefs": {
      "housing": -0.133637,
      "transport": -0.084349,
      "security": 0.123317,
      "healthcare": -0.103054,
      "climate": -0.064729,
      "industry": 0.070141,
      "education": -0.175027,
      "taxes": 0.163697
    },
    "issueSalience": {
      "housing": 0.354837,
      "transport": 0.327235,
      "security": 0.349057,
      "healthcare": 0.33771,
      "climate": 0.316248,
      "industry": 0.319279,
      "education": 0.378015,
      "taxes": 0.37167
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.507076,
    "turnoutBase": 0.574313,
    "volatility": 0.588909
  },
  {
    "id": "ess_trad_right_25_39_tertiary_rural_center",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.001034,
    "position": {
      "econ": 0.260433,
      "culture": 0.250165,
      "authority": -0.164537
    },
    "space": {
      "econ": 0.260433,
      "culture": 0.250165,
      "authority": -0.164537,
      "establishment": 0.153415,
      "globalism": 0.25976,
      "green": 0.034689,
      "ukraine": 0.448259,
      "greenDeal": 0.354008
    },
    "axisSalience": {
      "econ": 0.529382,
      "culture": 0.525069,
      "authority": 0.439233
    },
    "issuePrefs": {
      "housing": -0.173258,
      "transport": -0.078967,
      "security": -0.114584,
      "healthcare": -0.167499,
      "climate": -0.124098,
      "industry": 0.079867,
      "education": -0.207209,
      "taxes": 0.217532
    },
    "issueSalience": {
      "housing": 0.377024,
      "transport": 0.324221,
      "security": 0.344167,
      "healthcare": 0.373799,
      "climate": 0.349495,
      "industry": 0.324725,
      "education": 0.396037,
      "taxes": 0.401818
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.627859,
    "turnoutBase": 0.63537,
    "volatility": 0.536193
  },
  {
    "id": "ess_trad_right_55_plus_secondary_rural_left",
    "name": "tradicni pravice - 55+ - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.001011,
    "position": {
      "econ": 0.262644,
      "culture": 0.262955,
      "authority": 0.016145
    },
    "space": {
      "econ": 0.262644,
      "culture": 0.262955,
      "authority": 0.016145,
      "establishment": -0.115604,
      "globalism": -0.008217,
      "green": 0.521773,
      "ukraine": -0.058149,
      "greenDeal": 0.452632
    },
    "axisSalience": {
      "econ": 0.530311,
      "culture": 0.530441,
      "authority": 0.385812
    },
    "issuePrefs": {
      "housing": -0.176009,
      "transport": -0.113979,
      "security": 0.089768,
      "healthcare": -0.168067,
      "climate": -0.502413,
      "industry": 0.059517,
      "education": -0.153261,
      "taxes": 0.220658
    },
    "issueSalience": {
      "housing": 0.378565,
      "transport": 0.343828,
      "security": 0.33027,
      "healthcare": 0.374118,
      "climate": 0.561351,
      "industry": 0.313329,
      "education": 0.365826,
      "taxes": 0.403569
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.480259,
    "turnoutBase": 0.665954,
    "volatility": 0.440404
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_town_center",
    "name": "tradicni pravice - 55+ - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000975,
    "position": {
      "econ": 0.260341,
      "culture": 0.481059,
      "authority": 0.278094
    },
    "space": {
      "econ": 0.260341,
      "culture": 0.481059,
      "authority": 0.278094,
      "establishment": -0.003163,
      "globalism": -0.384396,
      "green": 0.030539,
      "ukraine": -0.385357,
      "greenDeal": -0.372473
    },
    "axisSalience": {
      "econ": 0.529343,
      "culture": 0.622045,
      "authority": 0.480114
    },
    "issuePrefs": {
      "housing": -0.200914,
      "transport": -0.197803,
      "security": 0.407134,
      "healthcare": -0.148961,
      "climate": 0.082305,
      "industry": 0.295741,
      "education": -0.146285,
      "taxes": 0.245172
    },
    "issueSalience": {
      "housing": 0.392512,
      "transport": 0.39077,
      "security": 0.507995,
      "healthcare": 0.363418,
      "climate": 0.326091,
      "industry": 0.445615,
      "education": 0.36192,
      "taxes": 0.417297
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.576683,
    "turnoutBase": 0.729889,
    "volatility": 0.480285
  },
  {
    "id": "ess_trad_right_55_plus_lower_town_center",
    "name": "tradicni pravice - 55+ - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000964,
    "position": {
      "econ": 0.058294,
      "culture": 0.492127,
      "authority": 0.172786
    },
    "space": {
      "econ": 0.058294,
      "culture": 0.492127,
      "authority": 0.172786,
      "establishment": 0.357399,
      "globalism": -0.626686,
      "green": 0.154862,
      "ukraine": -0.408997,
      "greenDeal": -0.217531
    },
    "axisSalience": {
      "econ": 0.444484,
      "culture": 0.626693,
      "authority": 0.442203
    },
    "issuePrefs": {
      "housing": -0.091117,
      "transport": -0.178359,
      "security": 0.390446,
      "healthcare": -0.002602,
      "climate": -0.050592,
      "industry": 0.167606,
      "education": -0.048364,
      "taxes": 0.101027
    },
    "issueSalience": {
      "housing": 0.331026,
      "transport": 0.379881,
      "security": 0.49865,
      "healthcare": 0.281457,
      "climate": 0.308332,
      "industry": 0.373859,
      "education": 0.307084,
      "taxes": 0.336575
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.390991,
    "turnoutBase": 0.622509,
    "volatility": 0.537834
  },
  {
    "id": "ess_trad_right_15_24_lower_rural_unknown",
    "name": "tradicni pravice - 15-24 - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000952,
    "position": {
      "econ": 0.303981,
      "culture": 0.285076,
      "authority": 0.192806
    },
    "space": {
      "econ": 0.303981,
      "culture": 0.285076,
      "authority": 0.192806,
      "establishment": -0.495328,
      "globalism": -0.239859,
      "green": 0.392333,
      "ukraine": -0.06921,
      "greenDeal": -0.114894
    },
    "axisSalience": {
      "econ": 0.547672,
      "culture": 0.539732,
      "authority": 0.44941
    },
    "issuePrefs": {
      "housing": -0.201398,
      "transport": -0.156092,
      "security": 0.248072,
      "healthcare": -0.19606,
      "climate": -0.25031,
      "industry": 0.218719,
      "education": -0.119963,
      "taxes": 0.253075
    },
    "issueSalience": {
      "housing": 0.392783,
      "transport": 0.367411,
      "security": 0.41892,
      "healthcare": 0.389794,
      "climate": 0.420173,
      "industry": 0.402483,
      "education": 0.347179,
      "taxes": 0.421722
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.345982,
    "turnoutBase": 0.492664,
    "volatility": 0.584579
  },
  {
    "id": "ess_trad_right_55_plus_secondary_rural_unknown",
    "name": "tradicni pravice - 55+ - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.00094,
    "position": {
      "econ": 0.425168,
      "culture": 0.398405,
      "authority": 0.149777
    },
    "space": {
      "econ": 0.425168,
      "culture": 0.398405,
      "authority": 0.149777,
      "establishment": -0.261215,
      "globalism": -0.302556,
      "green": -0.082162,
      "ukraine": -0.371987,
      "greenDeal": -0.150992
    },
    "axisSalience": {
      "econ": 0.598571,
      "culture": 0.58733,
      "authority": 0.43392
    },
    "issuePrefs": {
      "housing": -0.281651,
      "transport": -0.214312,
      "security": 0.288634,
      "healthcare": -0.274249,
      "climate": 0.101435,
      "industry": 0.303528,
      "education": -0.17492,
      "taxes": 0.35393
    },
    "issueSalience": {
      "housing": 0.437725,
      "transport": 0.400015,
      "security": 0.441635,
      "healthcare": 0.433579,
      "climate": 0.336803,
      "industry": 0.449976,
      "education": 0.377955,
      "taxes": 0.478201
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.450949,
    "turnoutBase": 0.660857,
    "volatility": 0.453509
  },
  {
    "id": "ess_trad_right_15_24_secondary_town_center",
    "name": "tradicni pravice - 15-24 - stredoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000881,
    "position": {
      "econ": 0.084373,
      "culture": 0.317492,
      "authority": 0.304399
    },
    "space": {
      "econ": 0.084373,
      "culture": 0.317492,
      "authority": 0.304399,
      "establishment": 0.060678,
      "globalism": -0.382456,
      "green": -0.110242,
      "ukraine": -0.400662,
      "greenDeal": -0.234396
    },
    "axisSalience": {
      "econ": 0.455437,
      "culture": 0.553347,
      "authority": 0.489584
    },
    "issuePrefs": {
      "housing": -0.084504,
      "transport": -0.124137,
      "security": 0.378521,
      "healthcare": -0.035349,
      "climate": 0.145005,
      "industry": 0.152215,
      "education": -0.047231,
      "taxes": 0.098847
    },
    "issueSalience": {
      "housing": 0.327322,
      "transport": 0.349516,
      "security": 0.491972,
      "healthcare": 0.299795,
      "climate": 0.361203,
      "industry": 0.36524,
      "education": 0.30645,
      "taxes": 0.335355
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.471907,
    "turnoutBase": 0.572124,
    "volatility": 0.594539
  },
  {
    "id": "ess_trad_right_15_24_lower_rural_right",
    "name": "tradicni pravice - 15-24 - nizsi vzdelani - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000811,
    "position": {
      "econ": 0.362273,
      "culture": 0.280922,
      "authority": 0.259831
    },
    "space": {
      "econ": 0.362273,
      "culture": 0.280922,
      "authority": 0.259831,
      "establishment": 0.343174,
      "globalism": 0.20997,
      "green": 0.346909,
      "ukraine": 0.20875,
      "greenDeal": 0.359011
    },
    "axisSalience": {
      "econ": 0.572154,
      "culture": 0.537987,
      "authority": 0.473539
    },
    "issuePrefs": {
      "housing": -0.232961,
      "transport": -0.115938,
      "security": 0.185259,
      "healthcare": -0.238362,
      "climate": -0.350297,
      "industry": 0.131049,
      "education": -0.231462,
      "taxes": 0.294547
    },
    "issueSalience": {
      "housing": 0.410458,
      "transport": 0.344925,
      "security": 0.383745,
      "healthcare": 0.413483,
      "climate": 0.476166,
      "industry": 0.353387,
      "education": 0.409618,
      "taxes": 0.444946
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.440052,
    "turnoutBase": 0.522011,
    "volatility": 0.509114
  },
  {
    "id": "ess_trad_right_40_54_lower_large_town_right",
    "name": "tradicni pravice - 40-54 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000811,
    "position": {
      "econ": 0.659391,
      "culture": 0.218039,
      "authority": 0.348766
    },
    "space": {
      "econ": 0.659391,
      "culture": 0.218039,
      "authority": 0.348766,
      "establishment": -0.048461,
      "globalism": -0.451332,
      "green": 0.000612,
      "ukraine": -0.219393,
      "greenDeal": -0.135697
    },
    "axisSalience": {
      "econ": 0.696944,
      "culture": 0.511576,
      "authority": 0.505556
    },
    "issuePrefs": {
      "housing": -0.38883,
      "transport": -0.258255,
      "security": 0.376077,
      "healthcare": -0.457318,
      "climate": 0.037555,
      "industry": 0.375134,
      "education": -0.135274,
      "taxes": 0.500926
    },
    "issueSalience": {
      "housing": 0.497745,
      "transport": 0.424623,
      "security": 0.490603,
      "healthcare": 0.536098,
      "climate": 0.301031,
      "industry": 0.490075,
      "education": 0.355754,
      "taxes": 0.560519
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.369043,
    "turnoutBase": 0.528304,
    "volatility": 0.564361
  },
  {
    "id": "ess_trad_right_15_24_secondary_town_right",
    "name": "tradicni pravice - 15-24 - stredoskolaci - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000799,
    "position": {
      "econ": 0.704679,
      "culture": 0.475567,
      "authority": -0.062939
    },
    "space": {
      "econ": 0.704679,
      "culture": 0.475567,
      "authority": -0.062939,
      "establishment": -0.132725,
      "globalism": -0.437844,
      "green": -0.049027,
      "ukraine": -0.414954,
      "greenDeal": -0.138792
    },
    "axisSalience": {
      "econ": 0.715965,
      "culture": 0.619738,
      "authority": 0.402658
    },
    "issuePrefs": {
      "housing": -0.444642,
      "transport": -0.314313,
      "security": 0.206145,
      "healthcare": -0.469324,
      "climate": 0.074161,
      "industry": 0.443065,
      "education": -0.239246,
      "taxes": 0.564437
    },
    "issueSalience": {
      "housing": 0.528999,
      "transport": 0.456015,
      "security": 0.395441,
      "healthcare": 0.542821,
      "climate": 0.32153,
      "industry": 0.528116,
      "education": 0.413978,
      "taxes": 0.596085
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.453111,
    "turnoutBase": 0.565355,
    "volatility": 0.511945
  },
  {
    "id": "ess_trad_right_15_24_lower_town_unknown",
    "name": "tradicni pravice - 15-24 - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000787,
    "position": {
      "econ": 0.728014,
      "culture": 0.218959,
      "authority": 0.015204
    },
    "space": {
      "econ": 0.728014,
      "culture": 0.218959,
      "authority": 0.015204,
      "establishment": -0.56539,
      "globalism": -0.331528,
      "green": 0.422373,
      "ukraine": -0.389038,
      "greenDeal": 0.269008
    },
    "axisSalience": {
      "econ": 0.725766,
      "culture": 0.511963,
      "authority": 0.385473
    },
    "issuePrefs": {
      "housing": -0.426683,
      "transport": -0.261199,
      "security": 0.161533,
      "healthcare": -0.506653,
      "climate": -0.379431,
      "industry": 0.309737,
      "education": -0.178423,
      "taxes": 0.550445
    },
    "issueSalience": {
      "housing": 0.518942,
      "transport": 0.426272,
      "security": 0.370458,
      "healthcare": 0.563726,
      "climate": 0.492482,
      "industry": 0.453453,
      "education": 0.379917,
      "taxes": 0.588249
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.334877,
    "turnoutBase": 0.490211,
    "volatility": 0.590885
  },
  {
    "id": "ess_trad_right_55_plus_lower_town_right",
    "name": "tradicni pravice - 55+ - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000776,
    "position": {
      "econ": 0.466456,
      "culture": 0.383439,
      "authority": -0.013682
    },
    "space": {
      "econ": 0.466456,
      "culture": 0.383439,
      "authority": -0.013682,
      "establishment": 0.179348,
      "globalism": -0.49015,
      "green": 0.611276,
      "ukraine": -0.262841,
      "greenDeal": 0.388243
    },
    "axisSalience": {
      "econ": 0.615911,
      "culture": 0.581045,
      "authority": 0.384926
    },
    "issuePrefs": {
      "housing": -0.302563,
      "transport": -0.244451,
      "security": 0.208134,
      "healthcare": -0.305173,
      "climate": -0.548827,
      "industry": 0.19041,
      "education": -0.13832,
      "taxes": 0.381861
    },
    "issueSalience": {
      "housing": 0.449435,
      "transport": 0.416893,
      "security": 0.396555,
      "healthcare": 0.450897,
      "climate": 0.587343,
      "industry": 0.38663,
      "education": 0.357459,
      "taxes": 0.493842
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.384939,
    "turnoutBase": 0.616277,
    "volatility": 0.453859
  },
  {
    "id": "ess_trad_right_15_24_secondary_large_town_right",
    "name": "tradicni pravice - 15-24 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00074,
    "position": {
      "econ": 0.437907,
      "culture": 0.229209,
      "authority": -0.051003
    },
    "space": {
      "econ": 0.437907,
      "culture": 0.229209,
      "authority": -0.051003,
      "establishment": -0.093935,
      "globalism": -0.208081,
      "green": -0.392315,
      "ukraine": -0.470405,
      "greenDeal": -0.380222
    },
    "axisSalience": {
      "econ": 0.603921,
      "culture": 0.516268,
      "authority": 0.398361
    },
    "issuePrefs": {
      "housing": -0.268354,
      "transport": -0.175704,
      "security": 0.107644,
      "healthcare": -0.296956,
      "climate": 0.388929,
      "industry": 0.333948,
      "education": -0.139543,
      "taxes": 0.342798
    },
    "issueSalience": {
      "housing": 0.430278,
      "transport": 0.378394,
      "security": 0.340281,
      "healthcare": 0.446295,
      "climate": 0.4978,
      "industry": 0.467011,
      "education": 0.358144,
      "taxes": 0.471967
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.47,
    "turnoutBase": 0.566712,
    "volatility": 0.508454
  },
  {
    "id": "ess_trad_right_40_54_tertiary_large_town_center",
    "name": "tradicni pravice - 40-54 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000729,
    "position": {
      "econ": 0.210277,
      "culture": 0.412372,
      "authority": 0.089886
    },
    "space": {
      "econ": 0.210277,
      "culture": 0.412372,
      "authority": 0.089886,
      "establishment": -0.043005,
      "globalism": -0.098292,
      "green": -0.016483,
      "ukraine": -0.295918,
      "greenDeal": 0.111359
    },
    "axisSalience": {
      "econ": 0.508316,
      "culture": 0.593196,
      "authority": 0.412359
    },
    "issuePrefs": {
      "housing": -0.165137,
      "transport": -0.138591,
      "security": 0.212559,
      "healthcare": -0.11841,
      "climate": -0.019313,
      "industry": 0.144228,
      "education": -0.173173,
      "taxes": 0.200884
    },
    "issueSalience": {
      "housing": 0.372477,
      "transport": 0.357611,
      "security": 0.399033,
      "healthcare": 0.346309,
      "climate": 0.290815,
      "industry": 0.360768,
      "education": 0.376977,
      "taxes": 0.392495
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.590662,
    "turnoutBase": 0.648495,
    "volatility": 0.57387
  },
  {
    "id": "ess_trad_right_40_54_secondary_large_town_unknown",
    "name": "tradicni pravice - 40-54 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000717,
    "position": {
      "econ": 0.503129,
      "culture": 0.268519,
      "authority": 0.467421
    },
    "space": {
      "econ": 0.503129,
      "culture": 0.268519,
      "authority": 0.467421,
      "establishment": 0.175498,
      "globalism": 0.061361,
      "green": -0.033385,
      "ukraine": -0.052619,
      "greenDeal": 0.190515
    },
    "axisSalience": {
      "econ": 0.631314,
      "culture": 0.532778,
      "authority": 0.548272
    },
    "issuePrefs": {
      "housing": -0.308943,
      "transport": -0.166752,
      "security": 0.358151,
      "healthcare": -0.340771,
      "climate": -0.029307,
      "industry": 0.234049,
      "education": -0.228232,
      "taxes": 0.394475
    },
    "issueSalience": {
      "housing": 0.453008,
      "transport": 0.373381,
      "security": 0.480565,
      "healthcare": 0.470832,
      "climate": 0.296412,
      "industry": 0.411067,
      "education": 0.40781,
      "taxes": 0.500906
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.507722,
    "turnoutBase": 0.596142,
    "volatility": 0.504205
  },
  {
    "id": "ess_trad_right_55_plus_lower_rural_unknown",
    "name": "tradicni pravice - 55+ - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000693,
    "position": {
      "econ": 0.106937,
      "culture": 0.425412,
      "authority": -0.10667
    },
    "space": {
      "econ": 0.106937,
      "culture": 0.425412,
      "authority": -0.10667,
      "establishment": -0.194197,
      "globalism": -0.159062,
      "green": 0.463635,
      "ukraine": -0.444985,
      "greenDeal": 0.40299
    },
    "axisSalience": {
      "econ": 0.464913,
      "culture": 0.598673,
      "authority": 0.418401
    },
    "issuePrefs": {
      "housing": -0.109865,
      "transport": -0.122396,
      "security": 0.11721,
      "healthcare": -0.042962,
      "climate": -0.446655,
      "industry": 0.029048,
      "education": -0.139566,
      "taxes": 0.128044
    },
    "issueSalience": {
      "housing": 0.341524,
      "transport": 0.348542,
      "security": 0.345637,
      "healthcare": 0.304058,
      "climate": 0.530127,
      "industry": 0.296267,
      "education": 0.358157,
      "taxes": 0.351705
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.374921,
    "turnoutBase": 0.603203,
    "volatility": 0.487478
  },
  {
    "id": "ess_trad_right_55_plus_secondary_town_unknown",
    "name": "tradicni pravice - 55+ - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000682,
    "position": {
      "econ": 0.19009,
      "culture": 0.486428,
      "authority": 0.101873
    },
    "space": {
      "econ": 0.19009,
      "culture": 0.486428,
      "authority": 0.101873,
      "establishment": 0.118363,
      "globalism": -0.063659,
      "green": -0.06841,
      "ukraine": -0.047143,
      "greenDeal": 0.00514
    },
    "axisSalience": {
      "econ": 0.499838,
      "culture": 0.6243,
      "authority": 0.416674
    },
    "issuePrefs": {
      "housing": -0.162921,
      "transport": -0.142718,
      "security": 0.214591,
      "healthcare": -0.09795,
      "climate": 0.047816,
      "industry": 0.173765,
      "education": -0.201866,
      "taxes": 0.195236
    },
    "issueSalience": {
      "housing": 0.371236,
      "transport": 0.359922,
      "security": 0.400171,
      "healthcare": 0.334852,
      "climate": 0.306777,
      "industry": 0.377308,
      "education": 0.393045,
      "taxes": 0.389332
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.495649,
    "turnoutBase": 0.674143,
    "volatility": 0.419347
  },
  {
    "id": "ess_trad_right_15_24_secondary_large_town_center",
    "name": "tradicni pravice - 15-24 - stredoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.00067,
    "position": {
      "econ": 0.190622,
      "culture": 0.325855,
      "authority": 0.11352
    },
    "space": {
      "econ": 0.190622,
      "culture": 0.325855,
      "authority": 0.11352,
      "establishment": -0.276875,
      "globalism": -0.414937,
      "green": -0.012792,
      "ukraine": -0.393723,
      "greenDeal": -0.040017
    },
    "axisSalience": {
      "econ": 0.500061,
      "culture": 0.556859,
      "authority": 0.420867
    },
    "issuePrefs": {
      "housing": -0.143944,
      "transport": -0.156102,
      "security": 0.267809,
      "healthcare": -0.111179,
      "climate": 0.020415,
      "industry": 0.155944,
      "education": -0.068512,
      "taxes": 0.17635
    },
    "issueSalience": {
      "housing": 0.360609,
      "transport": 0.367417,
      "security": 0.429973,
      "healthcare": 0.34226,
      "climate": 0.291432,
      "industry": 0.367329,
      "education": 0.318367,
      "taxes": 0.378756
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.442954,
    "turnoutBase": 0.560309,
    "volatility": 0.624919
  },
  {
    "id": "ess_trad_right_25_39_secondary_large_town_right",
    "name": "tradicni pravice - 25-39 - stredoskolaci - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000658,
    "position": {
      "econ": 0.420652,
      "culture": 0.15574,
      "authority": -0.066944
    },
    "space": {
      "econ": 0.420652,
      "culture": 0.15574,
      "authority": -0.066944,
      "establishment": -0.065389,
      "globalism": 0.368602,
      "green": 0.456973,
      "ukraine": 0.211717,
      "greenDeal": 0.362541
    },
    "axisSalience": {
      "econ": 0.596674,
      "culture": 0.485411,
      "authority": 0.4041
    },
    "issuePrefs": {
      "housing": -0.250047,
      "transport": -0.088964,
      "security": -0.081184,
      "healthcare": -0.29041,
      "climate": -0.430532,
      "industry": 0.134523,
      "education": -0.236558,
      "taxes": 0.321558
    },
    "issueSalience": {
      "housing": 0.420026,
      "transport": 0.32982,
      "security": 0.325463,
      "healthcare": 0.44263,
      "climate": 0.521098,
      "industry": 0.355333,
      "education": 0.412473,
      "taxes": 0.460072
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.506885,
    "turnoutBase": 0.567711,
    "volatility": 0.505885
  },
  {
    "id": "ess_trad_right_15_24_secondary_town_unknown",
    "name": "tradicni pravice - 15-24 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000623,
    "position": {
      "econ": 0.171434,
      "culture": 0.262633,
      "authority": 0.078419
    },
    "space": {
      "econ": 0.171434,
      "culture": 0.262633,
      "authority": 0.078419,
      "establishment": -0.022866,
      "globalism": -0.075413,
      "green": 0.134539,
      "ukraine": -0.176195,
      "greenDeal": 0.214786
    },
    "axisSalience": {
      "econ": 0.492002,
      "culture": 0.530306,
      "authority": 0.408231
    },
    "issuePrefs": {
      "housing": -0.125805,
      "transport": -0.099182,
      "security": 0.149827,
      "healthcare": -0.102422,
      "climate": -0.157008,
      "industry": 0.074585,
      "education": -0.116475,
      "taxes": 0.154949
    },
    "issueSalience": {
      "housing": 0.350451,
      "transport": 0.335542,
      "security": 0.363903,
      "healthcare": 0.337356,
      "climate": 0.367924,
      "industry": 0.321768,
      "education": 0.345226,
      "taxes": 0.366771
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.483646,
    "turnoutBase": 0.5692,
    "volatility": 0.502058
  },
  {
    "id": "ess_trad_right_25_39_lower_town_right",
    "name": "tradicni pravice - 25-39 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000611,
    "position": {
      "econ": 0.117468,
      "culture": 0.657729,
      "authority": 0.300908
    },
    "space": {
      "econ": 0.117468,
      "culture": 0.657729,
      "authority": 0.300908,
      "establishment": -0.128275,
      "globalism": -0.783319,
      "green": -0.346298,
      "ukraine": -0.606821,
      "greenDeal": -0.933067
    },
    "axisSalience": {
      "econ": 0.469337,
      "culture": 0.696246,
      "authority": 0.488327
    },
    "issuePrefs": {
      "housing": -0.143535,
      "transport": -0.241757,
      "security": 0.56027,
      "healthcare": -0.031959,
      "climate": 0.510593,
      "industry": 0.396363,
      "education": -0.086067,
      "taxes": 0.163504
    },
    "issueSalience": {
      "housing": 0.36038,
      "transport": 0.415384,
      "security": 0.593751,
      "healthcare": 0.297897,
      "climate": 0.565932,
      "industry": 0.501963,
      "education": 0.328198,
      "taxes": 0.371563
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.342739,
    "turnoutBase": 0.50551,
    "volatility": 0.551545
  },
  {
    "id": "ess_trad_right_40_54_secondary_rural_left",
    "name": "tradicni pravice - 40-54 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000611,
    "position": {
      "econ": 0.337766,
      "culture": 0.19752,
      "authority": 0.194977
    },
    "space": {
      "econ": 0.337766,
      "culture": 0.19752,
      "authority": 0.194977,
      "establishment": 0.254766,
      "globalism": 0.506587,
      "green": 0.095318,
      "ukraine": 0.444878,
      "greenDeal": 0.397715
    },
    "axisSalience": {
      "econ": 0.561862,
      "culture": 0.502958,
      "authority": 0.450192
    },
    "issuePrefs": {
      "housing": -0.209474,
      "transport": -0.059205,
      "security": 0.049415,
      "healthcare": -0.22739,
      "climate": -0.179989,
      "industry": 0.095474,
      "education": -0.261645,
      "taxes": 0.266894
    },
    "issueSalience": {
      "housing": 0.397305,
      "transport": 0.313155,
      "security": 0.307673,
      "healthcare": 0.407338,
      "climate": 0.380794,
      "industry": 0.333466,
      "education": 0.426521,
      "taxes": 0.429461
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.540776,
    "turnoutBase": 0.598917,
    "volatility": 0.497071
  },
  {
    "id": "ess_trad_right_15_24_secondary_large_town_unknown",
    "name": "tradicni pravice - 15-24 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000588,
    "position": {
      "econ": 0.245703,
      "culture": 0.293195,
      "authority": 0.2022
    },
    "space": {
      "econ": 0.245703,
      "culture": 0.293195,
      "authority": 0.2022,
      "establishment": 0.238744,
      "globalism": 0.121296,
      "green": -0.01,
      "ukraine": 0.341394,
      "greenDeal": 0.145201
    },
    "axisSalience": {
      "econ": 0.523195,
      "culture": 0.543142,
      "authority": 0.452792
    },
    "issuePrefs": {
      "housing": -0.17032,
      "transport": -0.099645,
      "security": 0.158314,
      "healthcare": -0.15345,
      "climate": -0.033456,
      "industry": 0.13095,
      "education": -0.188272,
      "taxes": 0.212089
    },
    "issueSalience": {
      "housing": 0.375379,
      "transport": 0.335801,
      "security": 0.368656,
      "healthcare": 0.365932,
      "climate": 0.298735,
      "industry": 0.353332,
      "education": 0.385432,
      "taxes": 0.39877
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.516377,
    "turnoutBase": 0.578356,
    "volatility": 0.478513
  },
  {
    "id": "ess_trad_right_25_39_lower_rural_unknown",
    "name": "tradicni pravice - 25-39 - nizsi vzdelani - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000541,
    "position": {
      "econ": 0.510923,
      "culture": 0.476679,
      "authority": 0.034073
    },
    "space": {
      "econ": 0.510923,
      "culture": 0.476679,
      "authority": 0.034073,
      "establishment": 0.257267,
      "globalism": 0.776788,
      "green": -0.053028,
      "ukraine": 0.527468,
      "greenDeal": 0.359389
    },
    "axisSalience": {
      "econ": 0.634588,
      "culture": 0.620205,
      "authority": 0.392266
    },
    "issuePrefs": {
      "housing": -0.338209,
      "transport": -0.120318,
      "security": -0.027424,
      "healthcare": -0.32973,
      "climate": -0.062449,
      "industry": 0.234573,
      "education": -0.460352,
      "taxes": 0.425066
    },
    "issueSalience": {
      "housing": 0.469397,
      "transport": 0.347378,
      "security": 0.295358,
      "healthcare": 0.464649,
      "climate": 0.314971,
      "industry": 0.411361,
      "education": 0.537797,
      "taxes": 0.518037
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.467189,
    "turnoutBase": 0.519004,
    "volatility": 0.516846
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_rural_center",
    "name": "tradicni pravice - 55+ - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000529,
    "position": {
      "econ": 0.308801,
      "culture": 0.162424,
      "authority": 0.37581
    },
    "space": {
      "econ": 0.308801,
      "culture": 0.162424,
      "authority": 0.37581,
      "establishment": 0.213175,
      "globalism": -0.108653,
      "green": 0.006483,
      "ukraine": -0.21784,
      "greenDeal": 0.034881
    },
    "axisSalience": {
      "econ": 0.549696,
      "culture": 0.488218,
      "authority": 0.515291
    },
    "issuePrefs": {
      "housing": -0.189332,
      "transport": -0.119475,
      "security": 0.315465,
      "healthcare": -0.209343,
      "climate": -0.014434,
      "industry": 0.162914,
      "education": -0.107057,
      "taxes": 0.241828
    },
    "issueSalience": {
      "housing": 0.386026,
      "transport": 0.346906,
      "security": 0.456661,
      "healthcare": 0.397232,
      "climate": 0.288083,
      "industry": 0.371232,
      "education": 0.339952,
      "taxes": 0.415424
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.610535,
    "turnoutBase": 0.737461,
    "volatility": 0.460814
  },
  {
    "id": "ess_trad_right_55_plus_lower_large_town_right",
    "name": "tradicni pravice - 55+ - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000505,
    "position": {
      "econ": 0.216805,
      "culture": 0.169244,
      "authority": 0.057095
    },
    "space": {
      "econ": 0.216805,
      "culture": 0.169244,
      "authority": 0.057095,
      "establishment": 0.366327,
      "globalism": 0.128428,
      "green": 0.456697,
      "ukraine": 0.27412,
      "greenDeal": 0.809764
    },
    "axisSalience": {
      "econ": 0.511058,
      "culture": 0.491082,
      "authority": 0.400554
    },
    "issuePrefs": {
      "housing": -0.139552,
      "transport": -0.069254,
      "security": 0.037741,
      "healthcare": -0.14256,
      "climate": -0.555556,
      "industry": -0.064149,
      "education": -0.139523,
      "taxes": 0.176409
    },
    "issueSalience": {
      "housing": 0.358149,
      "transport": 0.318782,
      "security": 0.301135,
      "healthcare": 0.359834,
      "climate": 0.591111,
      "industry": 0.315924,
      "education": 0.358133,
      "taxes": 0.378789
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.437012,
    "turnoutBase": 0.622821,
    "volatility": 0.437031
  },
  {
    "id": "ess_trad_right_55_plus_lower_rural_center",
    "name": "tradicni pravice - 55+ - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000494,
    "position": {
      "econ": 0.437005,
      "culture": 0.617174,
      "authority": -0.113944
    },
    "space": {
      "econ": 0.437005,
      "culture": 0.617174,
      "authority": -0.113944,
      "establishment": -0.888983,
      "globalism": -0.973973,
      "green": 0.745859,
      "ukraine": -0.278235,
      "greenDeal": -0.059316
    },
    "axisSalience": {
      "econ": 0.603542,
      "culture": 0.679213,
      "authority": 0.42102
    },
    "issuePrefs": {
      "housing": -0.314414,
      "transport": -0.337219,
      "security": 0.299738,
      "healthcare": -0.26527,
      "climate": -0.52041,
      "industry": 0.32635,
      "education": -0.106618,
      "taxes": 0.388705
    },
    "issueSalience": {
      "housing": 0.456072,
      "transport": 0.468843,
      "security": 0.447853,
      "healthcare": 0.428551,
      "climate": 0.57143,
      "industry": 0.462756,
      "education": 0.339706,
      "taxes": 0.497675
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.270443,
    "turnoutBase": 0.578886,
    "volatility": 0.650008
  },
  {
    "id": "ess_trad_right_40_54_tertiary_rural_center",
    "name": "tradicni pravice - 40-54 - vysokoskolaci - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000482,
    "position": {
      "econ": 0.253843,
      "culture": 0.59499,
      "authority": 0.232292
    },
    "space": {
      "econ": 0.253843,
      "culture": 0.59499,
      "authority": 0.232292,
      "establishment": -0.478234,
      "globalism": -0.802408,
      "green": 0.43158,
      "ukraine": -0.706244,
      "greenDeal": 0.078029
    },
    "axisSalience": {
      "econ": 0.526614,
      "culture": 0.669896,
      "authority": 0.463625
    },
    "issuePrefs": {
      "housing": -0.211012,
      "transport": -0.266848,
      "security": 0.511551,
      "healthcare": -0.135167,
      "climate": -0.332586,
      "industry": 0.205139,
      "education": -0.092639,
      "taxes": 0.254165
    },
    "issueSalience": {
      "housing": 0.398167,
      "transport": 0.429435,
      "security": 0.566469,
      "healthcare": 0.355694,
      "climate": 0.466248,
      "industry": 0.394878,
      "education": 0.331878,
      "taxes": 0.422333
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.513597,
    "turnoutBase": 0.633262,
    "volatility": 0.613041
  },
  {
    "id": "ess_trad_right_40_54_tertiary_rural_right",
    "name": "tradicni pravice - 40-54 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00047,
    "position": {
      "econ": 0.541066,
      "culture": 0.102363,
      "authority": 0.24896
    },
    "space": {
      "econ": 0.541066,
      "culture": 0.102363,
      "authority": 0.24896,
      "establishment": 0.550816,
      "globalism": 0.493625,
      "green": 0.062188,
      "ukraine": 0.573558,
      "greenDeal": 0.546136
    },
    "axisSalience": {
      "econ": 0.647248,
      "culture": 0.462993,
      "authority": 0.469626
    },
    "issuePrefs": {
      "housing": -0.30987,
      "transport": -0.094457,
      "security": 0.04828,
      "healthcare": -0.381378,
      "climate": -0.197694,
      "industry": 0.136243,
      "education": -0.27428,
      "taxes": 0.401851
    },
    "issueSalience": {
      "housing": 0.453527,
      "transport": 0.332896,
      "security": 0.307037,
      "healthcare": 0.493572,
      "climate": 0.390709,
      "industry": 0.356296,
      "education": 0.433597,
      "taxes": 0.505037
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.673683,
    "turnoutBase": 0.669279,
    "volatility": 0.420427
  },
  {
    "id": "ess_trad_right_15_24_lower_large_town_right",
    "name": "tradicni pravice - 15-24 - nizsi vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000458,
    "position": {
      "econ": 0.239253,
      "culture": 0.141874,
      "authority": 0.092364
    },
    "space": {
      "econ": 0.239253,
      "culture": 0.141874,
      "authority": 0.092364,
      "establishment": 0.38022,
      "globalism": 0.090729,
      "green": -0.339261,
      "ukraine": -0.064729,
      "greenDeal": 0.253679
    },
    "axisSalience": {
      "econ": 0.520486,
      "culture": 0.479587,
      "authority": 0.413251
    },
    "issuePrefs": {
      "housing": -0.148614,
      "transport": -0.074463,
      "security": 0.085838,
      "healthcare": -0.160912,
      "climate": 0.173238,
      "industry": 0.074711,
      "education": -0.127037,
      "taxes": 0.189287
    },
    "issueSalience": {
      "housing": 0.363224,
      "transport": 0.321699,
      "security": 0.328069,
      "healthcare": 0.370111,
      "climate": 0.377013,
      "industry": 0.321838,
      "education": 0.351141,
      "taxes": 0.386001
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.435861,
    "turnoutBase": 0.523308,
    "volatility": 0.50578
  },
  {
    "id": "ess_trad_right_40_54_lower_town_right",
    "name": "tradicni pravice - 40-54 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000447,
    "position": {
      "econ": 0.251437,
      "culture": 0.121515,
      "authority": 0.042167
    },
    "space": {
      "econ": 0.251437,
      "culture": 0.121515,
      "authority": 0.042167,
      "establishment": 0.305085,
      "globalism": -0.226814,
      "green": -0.072304,
      "ukraine": -0.105932,
      "greenDeal": 0.19371
    },
    "axisSalience": {
      "econ": 0.525604,
      "culture": 0.471036,
      "authority": 0.39518
    },
    "issuePrefs": {
      "housing": -0.152872,
      "transport": -0.11195,
      "security": 0.109468,
      "healthcare": -0.171314,
      "climate": -0.00218,
      "industry": 0.091043,
      "education": -0.052976,
      "taxes": 0.195616
    },
    "issueSalience": {
      "housing": 0.365608,
      "transport": 0.342692,
      "security": 0.341302,
      "healthcare": 0.375936,
      "climate": 0.281221,
      "industry": 0.330984,
      "education": 0.309667,
      "taxes": 0.389545
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.410798,
    "turnoutBase": 0.540678,
    "volatility": 0.532542
  },
  {
    "id": "ess_trad_right_25_39_secondary_large_town_unknown",
    "name": "tradicni pravice - 25-39 - stredoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000411,
    "position": {
      "econ": 0.324014,
      "culture": 0.493486,
      "authority": -0.12862
    },
    "space": {
      "econ": 0.324014,
      "culture": 0.493486,
      "authority": -0.12862,
      "establishment": -0.193189,
      "globalism": -0.137679,
      "green": -0.361238,
      "ukraine": -0.130155,
      "greenDeal": -0.288095
    },
    "axisSalience": {
      "econ": 0.556086,
      "culture": 0.627264,
      "authority": 0.426303
    },
    "issuePrefs": {
      "housing": -0.237426,
      "transport": -0.186352,
      "security": 0.093626,
      "healthcare": -0.193811,
      "climate": 0.340758,
      "industry": 0.307017,
      "education": -0.220194,
      "taxes": 0.292508
    },
    "issueSalience": {
      "housing": 0.412959,
      "transport": 0.384357,
      "security": 0.332431,
      "healthcare": 0.388534,
      "climate": 0.470824,
      "industry": 0.451929,
      "education": 0.403309,
      "taxes": 0.443805
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.466284,
    "turnoutBase": 0.563238,
    "volatility": 0.517387
  },
  {
    "id": "ess_trad_right_40_54_lower_large_town_center",
    "name": "tradicni pravice - 40-54 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000388,
    "position": {
      "econ": 0.34771,
      "culture": 0.063167,
      "authority": 0.058802
    },
    "space": {
      "econ": 0.34771,
      "culture": 0.063167,
      "authority": 0.058802,
      "establishment": 0.552714,
      "globalism": 0.549939,
      "green": 0.253539,
      "ukraine": 0.076725,
      "greenDeal": 0.959409
    },
    "axisSalience": {
      "econ": 0.566038,
      "culture": 0.44653,
      "authority": 0.401169
    },
    "issuePrefs": {
      "housing": -0.198821,
      "transport": -0.032305,
      "security": -0.050983,
      "healthcare": -0.245298,
      "climate": -0.451183,
      "industry": -0.058941,
      "education": -0.226545,
      "taxes": 0.257931
    },
    "issueSalience": {
      "housing": 0.39134,
      "transport": 0.298091,
      "security": 0.30855,
      "healthcare": 0.417367,
      "climate": 0.532662,
      "industry": 0.313007,
      "education": 0.406865,
      "taxes": 0.424442
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.477213,
    "turnoutBase": 0.549345,
    "volatility": 0.610256
  },
  {
    "id": "ess_trad_right_15_24_lower_town_right",
    "name": "tradicni pravice - 15-24 - nizsi vzdelani - mensi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000376,
    "position": {
      "econ": 0.489825,
      "culture": 0.180971,
      "authority": 0.116596
    },
    "space": {
      "econ": 0.489825,
      "culture": 0.180971,
      "authority": 0.116596,
      "establishment": 0.016891,
      "globalism": 0.485058,
      "green": 0.032677,
      "ukraine": 0.112301,
      "greenDeal": 0.299204
    },
    "axisSalience": {
      "econ": 0.625726,
      "culture": 0.496008,
      "authority": 0.421974
    },
    "issuePrefs": {
      "housing": -0.29112,
      "transport": -0.096824,
      "security": 0.026667,
      "healthcare": -0.338196,
      "climate": -0.107304,
      "industry": 0.186085,
      "education": -0.287611,
      "taxes": 0.37439
    },
    "issueSalience": {
      "housing": 0.443027,
      "transport": 0.334221,
      "security": 0.294933,
      "healthcare": 0.46939,
      "climate": 0.34009,
      "industry": 0.384208,
      "education": 0.441062,
      "taxes": 0.489659
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.430455,
    "turnoutBase": 0.510591,
    "volatility": 0.53848
  },
  {
    "id": "ess_trad_right_40_54_tertiary_rural_left",
    "name": "tradicni pravice - 40-54 - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000376,
    "position": {
      "econ": 0.321228,
      "culture": 0.062405,
      "authority": 0.093296
    },
    "space": {
      "econ": 0.321228,
      "culture": 0.062405,
      "authority": 0.093296,
      "establishment": 0.67126,
      "globalism": 0.788494,
      "green": 0.253525,
      "ukraine": 0.629721,
      "greenDeal": 0.376045
    },
    "axisSalience": {
      "econ": 0.554916,
      "culture": 0.44621,
      "authority": 0.413587
    },
    "issuePrefs": {
      "housing": -0.184164,
      "transport": 0.00308,
      "security": -0.11699,
      "healthcare": -0.226292,
      "climate": -0.287831,
      "industry": 0.068747,
      "education": -0.272405,
      "taxes": 0.238772
    },
    "issueSalience": {
      "housing": 0.383132,
      "transport": 0.281725,
      "security": 0.345514,
      "healthcare": 0.406723,
      "climate": 0.441185,
      "industry": 0.318498,
      "education": 0.432547,
      "taxes": 0.413713
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.70101,
    "turnoutBase": 0.673494,
    "volatility": 0.409587
  },
  {
    "id": "ess_trad_right_25_39_secondary_rural_unknown",
    "name": "tradicni pravice - 25-39 - stredoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000364,
    "position": {
      "econ": 0.631745,
      "culture": 0.116964,
      "authority": 0.082685
    },
    "space": {
      "econ": 0.631745,
      "culture": 0.116964,
      "authority": 0.082685,
      "establishment": -0.068708,
      "globalism": -0.068553,
      "green": 0.342918,
      "ukraine": 0.016836,
      "greenDeal": 0.406744
    },
    "axisSalience": {
      "econ": 0.685333,
      "culture": 0.469125,
      "authority": 0.409766
    },
    "issuePrefs": {
      "housing": -0.361495,
      "transport": -0.187216,
      "security": 0.095007,
      "healthcare": -0.445499,
      "climate": -0.360789,
      "industry": 0.214038,
      "education": -0.177475,
      "taxes": 0.468892
    },
    "issueSalience": {
      "housing": 0.482437,
      "transport": 0.384841,
      "security": 0.333204,
      "healthcare": 0.52948,
      "climate": 0.482042,
      "industry": 0.399861,
      "education": 0.379386,
      "taxes": 0.54258
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.48039,
    "turnoutBase": 0.567595,
    "volatility": 0.506184
  },
  {
    "id": "ess_trad_right_25_39_tertiary_large_town_center",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000364,
    "position": {
      "econ": 0.208414,
      "culture": 0.106934,
      "authority": 0.265059
    },
    "space": {
      "econ": 0.208414,
      "culture": 0.106934,
      "authority": 0.265059,
      "establishment": 0.293615,
      "globalism": 0.496372,
      "green": -0.045228,
      "ukraine": 0.444175,
      "greenDeal": 0.036536
    },
    "axisSalience": {
      "econ": 0.507534,
      "culture": 0.464912,
      "authority": 0.475421
    },
    "issuePrefs": {
      "housing": -0.12746,
      "transport": -0.011787,
      "security": 0.069397,
      "healthcare": -0.141503,
      "climate": 0.022334,
      "industry": 0.10635,
      "education": -0.196648,
      "taxes": 0.16289
    },
    "issueSalience": {
      "housing": 0.351377,
      "transport": 0.286601,
      "security": 0.318862,
      "healthcare": 0.359242,
      "climate": 0.292507,
      "industry": 0.339556,
      "education": 0.390123,
      "taxes": 0.371218
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.653272,
    "turnoutBase": 0.640277,
    "volatility": 0.523575
  },
  {
    "id": "ess_trad_right_25_39_tertiary_rural_unknown",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000341,
    "position": {
      "econ": 0.661017,
      "culture": 0.505767,
      "authority": 0.095011
    },
    "space": {
      "econ": 0.661017,
      "culture": 0.505767,
      "authority": 0.095011,
      "establishment": -0.082413,
      "globalism": -0.249634,
      "green": 0.241194,
      "ukraine": -0.211654,
      "greenDeal": 0.01296
    },
    "axisSalience": {
      "econ": 0.697627,
      "culture": 0.632422,
      "authority": 0.414204
    },
    "issuePrefs": {
      "housing": -0.424252,
      "transport": -0.286248,
      "security": 0.262388,
      "healthcare": -0.435471,
      "climate": -0.177288,
      "industry": 0.391996,
      "education": -0.280743,
      "taxes": 0.536624
    },
    "issueSalience": {
      "housing": 0.517581,
      "transport": 0.440299,
      "security": 0.426937,
      "healthcare": 0.523864,
      "climate": 0.379281,
      "industry": 0.499518,
      "education": 0.437216,
      "taxes": 0.58051
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.578429,
    "turnoutBase": 0.627116,
    "volatility": 0.457417
  },
  {
    "id": "ess_trad_right_40_54_tertiary_town_center",
    "name": "tradicni pravice - 40-54 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000341,
    "position": {
      "econ": 0.297585,
      "culture": 0.15672,
      "authority": -0.001009
    },
    "space": {
      "econ": 0.297585,
      "culture": 0.15672,
      "authority": -0.001009,
      "establishment": 0.054761,
      "globalism": 0.066673,
      "green": 0.212634,
      "ukraine": 0.170302,
      "greenDeal": 0.341042
    },
    "axisSalience": {
      "econ": 0.544986,
      "culture": 0.485822,
      "authority": 0.380363
    },
    "issuePrefs": {
      "housing": -0.182478,
      "transport": -0.094605,
      "security": 0.017631,
      "healthcare": -0.201723,
      "climate": -0.248589,
      "industry": 0.083248,
      "education": -0.14094,
      "taxes": 0.233067
    },
    "issueSalience": {
      "housing": 0.382188,
      "transport": 0.332979,
      "security": 0.289873,
      "healthcare": 0.392965,
      "climate": 0.41921,
      "industry": 0.326619,
      "education": 0.358927,
      "taxes": 0.410518
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.608381,
    "turnoutBase": 0.651917,
    "volatility": 0.565072
  },
  {
    "id": "ess_trad_right_40_54_lower_rural_center",
    "name": "tradicni pravice - 40-54 - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000329,
    "position": {
      "econ": 0.359003,
      "culture": 0.715528,
      "authority": 0.191404
    },
    "space": {
      "econ": 0.359003,
      "culture": 0.715528,
      "authority": 0.191404,
      "establishment": 0.360716,
      "globalism": 0.388219,
      "green": -0.232863,
      "ukraine": 0.475734,
      "greenDeal": 0.564684
    },
    "axisSalience": {
      "econ": 0.570781,
      "culture": 0.720522,
      "authority": 0.448905
    },
    "issuePrefs": {
      "housing": -0.283315,
      "transport": -0.171959,
      "security": 0.21108,
      "healthcare": -0.20124,
      "climate": 0.00955,
      "industry": 0.158412,
      "education": -0.422004,
      "taxes": 0.344345
    },
    "issueSalience": {
      "housing": 0.438656,
      "transport": 0.376297,
      "security": 0.398205,
      "healthcare": 0.392694,
      "climate": 0.285348,
      "industry": 0.368711,
      "education": 0.516322,
      "taxes": 0.472833
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.45215,
    "turnoutBase": 0.542625,
    "volatility": 0.627536
  },
  {
    "id": "ess_trad_right_40_54_lower_rural_right",
    "name": "tradicni pravice - 40-54 - nizsi vzdelani - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000329,
    "position": {
      "econ": 0.55623,
      "culture": 0.681057,
      "authority": 0.37021
    },
    "space": {
      "econ": 0.55623,
      "culture": 0.681057,
      "authority": 0.37021,
      "establishment": -0.026556,
      "globalism": 0.337944,
      "green": -0.170194,
      "ukraine": 0.250887,
      "greenDeal": -0.431394
    },
    "axisSalience": {
      "econ": 0.653616,
      "culture": 0.706044,
      "authority": 0.513276
    },
    "issuePrefs": {
      "housing": -0.387653,
      "transport": -0.221094,
      "security": 0.339325,
      "healthcare": -0.346001,
      "climate": 0.24333,
      "industry": 0.481991,
      "education": -0.446213,
      "taxes": 0.482212
    },
    "issueSalience": {
      "housing": 0.497086,
      "transport": 0.403813,
      "security": 0.470022,
      "healthcare": 0.47376,
      "climate": 0.416265,
      "industry": 0.549915,
      "education": 0.529879,
      "taxes": 0.550039
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.418152,
    "turnoutBase": 0.529071,
    "volatility": 0.56239
  },
  {
    "id": "ess_trad_right_15_24_lower_large_town_unknown",
    "name": "tradicni pravice - 15-24 - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000306,
    "position": {
      "econ": 0.078649,
      "culture": 0.337736,
      "authority": 0.222433
    },
    "space": {
      "econ": 0.078649,
      "culture": 0.337736,
      "authority": 0.222433,
      "establishment": -0.152578,
      "globalism": -0.331509,
      "green": -0.045487,
      "ukraine": -0.270539,
      "greenDeal": 0.029611
    },
    "axisSalience": {
      "econ": 0.453032,
      "culture": 0.561849,
      "authority": 0.460076
    },
    "issuePrefs": {
      "housing": -0.083785,
      "transport": -0.120236,
      "security": 0.31379,
      "healthcare": -0.029608,
      "climate": 0.02446,
      "industry": 0.089864,
      "education": -0.064151,
      "taxes": 0.097155
    },
    "issueSalience": {
      "housing": 0.32692,
      "transport": 0.347332,
      "security": 0.455722,
      "healthcare": 0.296581,
      "climate": 0.293697,
      "industry": 0.330324,
      "education": 0.315925,
      "taxes": 0.334407
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.367903,
    "turnoutBase": 0.50466,
    "volatility": 0.553732
  },
  {
    "id": "ess_trad_right_40_54_tertiary_town_unknown",
    "name": "tradicni pravice - 40-54 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000306,
    "position": {
      "econ": 0.725386,
      "culture": 0.139955,
      "authority": 0.121249
    },
    "space": {
      "econ": 0.725386,
      "culture": 0.139955,
      "authority": 0.121249,
      "establishment": 0.043775,
      "globalism": 0.420175,
      "green": 0.577149,
      "ukraine": 0.618746,
      "greenDeal": 0.774033
    },
    "axisSalience": {
      "econ": 0.724662,
      "culture": 0.478781,
      "authority": 0.42365
    },
    "issuePrefs": {
      "housing": -0.415757,
      "transport": -0.156118,
      "security": -0.010769,
      "healthcare": -0.511082,
      "climate": -0.632277,
      "industry": 0.173102,
      "education": -0.315516,
      "taxes": 0.539073
    },
    "issueSalience": {
      "housing": 0.512824,
      "transport": 0.367426,
      "security": 0.286031,
      "healthcare": 0.566206,
      "climate": 0.634075,
      "industry": 0.376937,
      "education": 0.456689,
      "taxes": 0.581881
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.628713,
    "turnoutBase": 0.651532,
    "volatility": 0.46606
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_large_town_left",
    "name": "tradicni pravice - 55+ - vysokoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000294,
    "position": {
      "econ": 0.124343,
      "culture": 0.601733,
      "authority": 0.312981
    },
    "space": {
      "econ": 0.124343,
      "culture": 0.601733,
      "authority": 0.312981,
      "establishment": -0.249531,
      "globalism": -0.343078,
      "green": -0.044301,
      "ukraine": -0.061087,
      "greenDeal": 0.151119
    },
    "axisSalience": {
      "econ": 0.472224,
      "culture": 0.672728,
      "authority": 0.492673
    },
    "issuePrefs": {
      "housing": -0.140597,
      "transport": -0.180567,
      "security": 0.429174,
      "healthcare": -0.041389,
      "climate": -0.010416,
      "industry": 0.129241,
      "education": -0.164972,
      "taxes": 0.161735
    },
    "issueSalience": {
      "housing": 0.358734,
      "transport": 0.381118,
      "security": 0.520338,
      "healthcare": 0.303178,
      "climate": 0.285833,
      "industry": 0.352375,
      "education": 0.372384,
      "taxes": 0.370572
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.559453,
    "turnoutBase": 0.721266,
    "volatility": 0.402458
  },
  {
    "id": "ess_trad_right_15_24_secondary_rural_right",
    "name": "tradicni pravice - 15-24 - stredoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000282,
    "position": {
      "econ": 0.834424,
      "culture": 0.063384,
      "authority": -0.293659
    },
    "space": {
      "econ": 0.834424,
      "culture": 0.063384,
      "authority": -0.293659,
      "establishment": -0.006623,
      "globalism": 0.07071,
      "green": -0.387181,
      "ukraine": 0.1253,
      "greenDeal": 0.05351
    },
    "axisSalience": {
      "econ": 0.770458,
      "culture": 0.446621,
      "authority": 0.485717
    },
    "issuePrefs": {
      "housing": -0.466539,
      "transport": -0.21153,
      "security": -0.187073,
      "healthcare": -0.595714,
      "climate": 0.263788,
      "industry": 0.382402,
      "education": -0.238002,
      "taxes": 0.608391
    },
    "issueSalience": {
      "housing": 0.541262,
      "transport": 0.398457,
      "security": 0.384761,
      "healthcare": 0.6136,
      "climate": 0.427721,
      "industry": 0.494145,
      "education": 0.413281,
      "taxes": 0.620699
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.493713,
    "turnoutBase": 0.569768,
    "volatility": 0.500596
  },
  {
    "id": "ess_trad_right_55_plus_secondary_large_town_left",
    "name": "tradicni pravice - 55+ - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000282,
    "position": {
      "econ": 0.21446,
      "culture": 0.129748,
      "authority": 0.366519
    },
    "space": {
      "econ": 0.21446,
      "culture": 0.129748,
      "authority": 0.366519,
      "establishment": 0.190251,
      "globalism": 0.135158,
      "green": 0.013768,
      "ukraine": 0.008652,
      "greenDeal": 0.099011
    },
    "axisSalience": {
      "econ": 0.510073,
      "culture": 0.474494,
      "authority": 0.511947
    },
    "issuePrefs": {
      "housing": -0.133523,
      "transport": -0.060751,
      "security": 0.238551,
      "healthcare": -0.144031,
      "climate": -0.037636,
      "industry": 0.098244,
      "education": -0.126617,
      "taxes": 0.169981
    },
    "issueSalience": {
      "housing": 0.354773,
      "transport": 0.31402,
      "security": 0.413589,
      "healthcare": 0.360657,
      "climate": 0.301076,
      "industry": 0.335016,
      "education": 0.350906,
      "taxes": 0.375189
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.51333,
    "turnoutBase": 0.676659,
    "volatility": 0.412877
  },
  {
    "id": "ess_trad_right_15_24_tertiary_rural_right",
    "name": "tradicni pravice - 15-24 - vysokoskolaci - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.00027,
    "position": {
      "econ": 0.446922,
      "culture": 0.05163,
      "authority": 0.370896
    },
    "space": {
      "econ": 0.446922,
      "culture": 0.05163,
      "authority": 0.370896,
      "establishment": 0.444568,
      "globalism": 0.231569,
      "green": -0.235301,
      "ukraine": 0.307479,
      "greenDeal": 0.123256
    },
    "axisSalience": {
      "econ": 0.607707,
      "culture": 0.441685,
      "authority": 0.513522
    },
    "issuePrefs": {
      "housing": -0.252002,
      "transport": -0.093235,
      "security": 0.178131,
      "healthcare": -0.317653,
      "climate": 0.134905,
      "industry": 0.185296,
      "education": -0.176277,
      "taxes": 0.327979
    },
    "issueSalience": {
      "housing": 0.421121,
      "transport": 0.332212,
      "security": 0.379753,
      "healthcare": 0.457886,
      "climate": 0.355547,
      "industry": 0.383766,
      "education": 0.378715,
      "taxes": 0.463668
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.64946,
    "turnoutBase": 0.64556,
    "volatility": 0.409989
  },
  {
    "id": "ess_trad_right_25_39_tertiary_rural_left",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000247,
    "position": {
      "econ": 0.082166,
      "culture": 0.319161,
      "authority": 0.110328
    },
    "space": {
      "econ": 0.082166,
      "culture": 0.319161,
      "authority": 0.110328,
      "establishment": 0.352994,
      "globalism": 0.536676,
      "green": 0.117369,
      "ukraine": 0.981878,
      "greenDeal": 0.541429
    },
    "axisSalience": {
      "econ": 0.45451,
      "culture": 0.554047,
      "authority": 0.419718
    },
    "issuePrefs": {
      "housing": -0.083491,
      "transport": -0.013589,
      "security": -0.017384,
      "healthcare": -0.033627,
      "climate": -0.236106,
      "industry": -0.034698,
      "education": -0.249495,
      "taxes": 0.097459
    },
    "issueSalience": {
      "housing": 0.326755,
      "transport": 0.28761,
      "security": 0.289735,
      "healthcare": 0.298831,
      "climate": 0.412219,
      "industry": 0.299431,
      "education": 0.419717,
      "taxes": 0.334577
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.66044,
    "turnoutBase": 0.642355,
    "volatility": 0.418231
  },
  {
    "id": "ess_trad_right_15_24_lower_town_center",
    "name": "tradicni pravice - 15-24 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000176,
    "position": {
      "econ": 0.261553,
      "culture": 0.043036,
      "authority": -0.167959
    },
    "space": {
      "econ": 0.261553,
      "culture": 0.043036,
      "authority": -0.167959,
      "establishment": 0.153046,
      "globalism": -0.087779,
      "green": -0.01213,
      "ukraine": -0.278504,
      "greenDeal": 0.432988
    },
    "axisSalience": {
      "econ": 0.529852,
      "culture": 0.438075,
      "authority": 0.440465
    },
    "issuePrefs": {
      "housing": -0.149018,
      "transport": -0.083668,
      "security": -0.054004,
      "healthcare": -0.184875,
      "climate": -0.112503,
      "industry": 0.024144,
      "education": -0.058524,
      "taxes": 0.193482
    },
    "issueSalience": {
      "housing": 0.36345,
      "transport": 0.326854,
      "security": 0.310242,
      "healthcare": 0.38353,
      "climate": 0.343002,
      "industry": 0.29352,
      "education": 0.312773,
      "taxes": 0.38835
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.406977,
    "turnoutBase": 0.515357,
    "volatility": 0.626226
  },
  {
    "id": "ess_trad_right_25_39_secondary_town_unknown",
    "name": "tradicni pravice - 25-39 - stredoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000176,
    "position": {
      "econ": 0.37434,
      "culture": 0.250902,
      "authority": -0.028416
    },
    "space": {
      "econ": 0.37434,
      "culture": 0.250902,
      "authority": -0.028416,
      "establishment": -0.312936,
      "globalism": -0.136867,
      "green": 0.030571,
      "ukraine": -0.225147,
      "greenDeal": -0.125238
    },
    "axisSalience": {
      "econ": 0.577223,
      "culture": 0.525379,
      "authority": 0.39023
    },
    "issuePrefs": {
      "housing": -0.235995,
      "transport": -0.155171,
      "security": 0.095282,
      "healthcare": -0.249452,
      "climate": 0.013056,
      "industry": 0.247416,
      "education": -0.147547,
      "taxes": 0.299633
    },
    "issueSalience": {
      "housing": 0.412157,
      "transport": 0.366896,
      "security": 0.333358,
      "healthcare": 0.419693,
      "climate": 0.287311,
      "industry": 0.418553,
      "education": 0.362626,
      "taxes": 0.447794
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.456753,
    "turnoutBase": 0.559047,
    "volatility": 0.528164
  },
  {
    "id": "ess_trad_right_40_54_secondary_town_left",
    "name": "tradicni pravice - 40-54 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000176,
    "position": {
      "econ": 0.142831,
      "culture": 0.204745,
      "authority": 0.335565
    },
    "space": {
      "econ": 0.142831,
      "culture": 0.204745,
      "authority": 0.335565,
      "establishment": -0.028791,
      "globalism": -0.020062,
      "green": -0.082601,
      "ukraine": -0.313073,
      "greenDeal": -0.257941
    },
    "axisSalience": {
      "econ": 0.479989,
      "culture": 0.505993,
      "authority": 0.500803
    },
    "issuePrefs": {
      "housing": -0.103127,
      "transport": -0.074969,
      "security": 0.294036,
      "healthcare": -0.086459,
      "climate": 0.131696,
      "industry": 0.164462,
      "education": -0.101527,
      "taxes": 0.127408
    },
    "issueSalience": {
      "housing": 0.337751,
      "transport": 0.321983,
      "security": 0.44466,
      "healthcare": 0.328417,
      "climate": 0.35375,
      "industry": 0.372099,
      "education": 0.336855,
      "taxes": 0.351348
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.486493,
    "turnoutBase": 0.588992,
    "volatility": 0.522591
  },
  {
    "id": "ess_trad_right_40_54_secondary_large_town_left",
    "name": "tradicni pravice - 40-54 - stredoskolaci - vetsi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "secondary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000165,
    "position": {
      "econ": 0.135997,
      "culture": 0.221582,
      "authority": -0.045125
    },
    "space": {
      "econ": 0.135997,
      "culture": 0.221582,
      "authority": -0.045125,
      "establishment": -0.099256,
      "globalism": 0.018545,
      "green": 0.100563,
      "ukraine": -0.005748,
      "greenDeal": 0.072776
    },
    "axisSalience": {
      "econ": 0.477119,
      "culture": 0.513064,
      "authority": 0.396245
    },
    "issuePrefs": {
      "housing": -0.101388,
      "transport": -0.071659,
      "security": 0.031187,
      "healthcare": -0.080191,
      "climate": -0.092783,
      "industry": 0.084977,
      "education": -0.114273,
      "taxes": 0.124508
    },
    "issueSalience": {
      "housing": 0.336777,
      "transport": 0.320129,
      "security": 0.297465,
      "healthcare": 0.324907,
      "climate": 0.331959,
      "industry": 0.327587,
      "education": 0.343993,
      "taxes": 0.349724
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.483172,
    "turnoutBase": 0.586526,
    "volatility": 0.528933
  },
  {
    "id": "ess_trad_right_40_54_tertiary_rural_unknown",
    "name": "tradicni pravice - 40-54 - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000165,
    "position": {
      "econ": 0.722484,
      "culture": 0.1778,
      "authority": 0.047205
    },
    "space": {
      "econ": 0.722484,
      "culture": 0.1778,
      "authority": 0.047205,
      "establishment": -0.341109,
      "globalism": -0.158569,
      "green": 0.330958,
      "ukraine": -0.436252,
      "greenDeal": 0.132447
    },
    "axisSalience": {
      "econ": 0.723443,
      "culture": 0.494676,
      "authority": 0.396994
    },
    "issuePrefs": {
      "housing": -0.418702,
      "transport": -0.231653,
      "security": 0.142494,
      "healthcare": -0.505964,
      "climate": -0.275375,
      "industry": 0.332559,
      "education": -0.200741,
      "taxes": 0.541524
    },
    "issueSalience": {
      "housing": 0.514473,
      "transport": 0.409726,
      "security": 0.359796,
      "healthcare": 0.56334,
      "climate": 0.43421,
      "industry": 0.466233,
      "education": 0.392415,
      "taxes": 0.583254
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.563197,
    "turnoutBase": 0.638061,
    "volatility": 0.5007
  },
  {
    "id": "ess_trad_right_40_54_lower_town_unknown",
    "name": "tradicni pravice - 40-54 - nizsi vzdelani - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000153,
    "position": {
      "econ": 0.488209,
      "culture": 0.499668,
      "authority": -0.491036
    },
    "space": {
      "econ": 0.488209,
      "culture": 0.499668,
      "authority": -0.491036,
      "establishment": -0.037867,
      "globalism": 0.109468,
      "green": -0.172792,
      "ukraine": 0.506814,
      "greenDeal": -0.146928
    },
    "axisSalience": {
      "econ": 0.625048,
      "culture": 0.62986,
      "authority": 0.556773
    },
    "issuePrefs": {
      "housing": -0.328475,
      "transport": -0.198856,
      "security": -0.224785,
      "healthcare": -0.311537,
      "climate": 0.16555,
      "industry": 0.349779,
      "education": -0.316137,
      "taxes": 0.41147
    },
    "issueSalience": {
      "housing": 0.463946,
      "transport": 0.391359,
      "security": 0.405879,
      "healthcare": 0.454461,
      "climate": 0.372708,
      "industry": 0.475876,
      "education": 0.457037,
      "taxes": 0.510423
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.403539,
    "turnoutBase": 0.528675,
    "volatility": 0.563408
  },
  {
    "id": "ess_trad_right_15_24_secondary_rural_left",
    "name": "tradicni pravice - 15-24 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 0.000141,
    "position": {
      "econ": 0.349133,
      "culture": 0.064515,
      "authority": 0.337001
    },
    "space": {
      "econ": 0.349133,
      "culture": 0.064515,
      "authority": 0.337001,
      "establishment": 0.258267,
      "globalism": 0.108983,
      "green": 0.224963,
      "ukraine": 0.078744,
      "greenDeal": 0.208188
    },
    "axisSalience": {
      "econ": 0.566636,
      "culture": 0.447096,
      "authority": 0.50132
    },
    "issuePrefs": {
      "housing": -0.199765,
      "transport": -0.085818,
      "security": 0.201088,
      "healthcare": -0.246215,
      "climate": -0.220266,
      "industry": 0.122249,
      "education": -0.130348,
      "taxes": 0.259118
    },
    "issueSalience": {
      "housing": 0.391868,
      "transport": 0.328058,
      "security": 0.392609,
      "healthcare": 0.41788,
      "climate": 0.403349,
      "industry": 0.348459,
      "education": 0.352995,
      "taxes": 0.425106
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.5172,
    "turnoutBase": 0.579039,
    "volatility": 0.476756
  },
  {
    "id": "ess_trad_right_55_plus_unknown_large_town_right",
    "name": "tradicni pravice - 55+ - nezname vzdelani - vetsi mesta - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000129,
    "position": {
      "econ": 0.571873,
      "culture": 0.381725,
      "authority": -0.11953
    },
    "space": {
      "econ": 0.571873,
      "culture": 0.381725,
      "authority": -0.11953,
      "establishment": -0.628733,
      "globalism": -0.399852,
      "green": 0.44824,
      "ukraine": -0.901499,
      "greenDeal": 0.594262
    },
    "axisSalience": {
      "econ": 0.660187,
      "culture": 0.580324,
      "authority": 0.423031
    },
    "issuePrefs": {
      "housing": -0.360337,
      "transport": -0.259661,
      "security": 0.176867,
      "healthcare": -0.38121,
      "climate": -0.489126,
      "industry": 0.189149,
      "education": -0.182886,
      "taxes": 0.457555
    },
    "issueSalience": {
      "housing": 0.481789,
      "transport": 0.42541,
      "security": 0.379046,
      "healthcare": 0.493478,
      "climate": 0.553911,
      "industry": 0.385923,
      "education": 0.382416,
      "taxes": 0.536231
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.40571,
    "turnoutBase": 0.637994,
    "volatility": 0.466586
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_town_unknown",
    "name": "tradicni pravice - 55+ - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 0.000118,
    "position": {
      "econ": 0.767091,
      "culture": 0.161152,
      "authority": 0.063264
    },
    "space": {
      "econ": 0.767091,
      "culture": 0.161152,
      "authority": 0.063264,
      "establishment": -0.06555,
      "globalism": -0.293448,
      "green": 0.221469,
      "ukraine": -0.051137,
      "greenDeal": 0.160797
    },
    "axisSalience": {
      "econ": 0.742178,
      "culture": 0.487684,
      "authority": 0.402775
    },
    "issuePrefs": {
      "housing": -0.441238,
      "transport": -0.255994,
      "security": 0.141258,
      "healthcare": -0.539413,
      "climate": -0.204481,
      "industry": 0.343278,
      "education": -0.175946,
      "taxes": 0.571644
    },
    "issueSalience": {
      "housing": 0.527093,
      "transport": 0.423357,
      "security": 0.359104,
      "healthcare": 0.582072,
      "climate": 0.394509,
      "industry": 0.472236,
      "education": 0.37853,
      "taxes": 0.600121
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.577149,
    "turnoutBase": 0.727706,
    "volatility": 0.385899
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_unknown_center",
    "name": "tradicni pravice - 55+ - vysokoskolaci - nezname sidlo - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "unknown",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000118,
    "position": {
      "econ": 0.051012,
      "culture": 0.594513,
      "authority": 0.289698
    },
    "space": {
      "econ": 0.051012,
      "culture": 0.594513,
      "authority": 0.289698,
      "establishment": -0.018361,
      "globalism": -0.969414,
      "green": 0.062809,
      "ukraine": -0.971599,
      "greenDeal": -0.517984
    },
    "axisSalience": {
      "econ": 0.441425,
      "culture": 0.669696,
      "authority": 0.484291
    },
    "issuePrefs": {
      "housing": -0.099398,
      "transport": -0.236095,
      "security": 0.598299,
      "healthcare": 0.010833,
      "climate": 0.099813,
      "industry": 0.254794,
      "education": -0.007051,
      "taxes": 0.10807
    },
    "issueSalience": {
      "housing": 0.335663,
      "transport": 0.412213,
      "security": 0.615047,
      "healthcare": 0.286066,
      "climate": 0.335895,
      "industry": 0.422685,
      "education": 0.283949,
      "taxes": 0.340519
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.540366,
    "turnoutBase": 0.729357,
    "volatility": 0.481652
  },
  {
    "id": "ess_trad_right_55_plus_unknown_rural_right",
    "name": "tradicni pravice - 55+ - nezname vzdelani - venkov - pravicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "right",
    "populationWeight": 0.000118,
    "position": {
      "econ": 0.981971,
      "culture": 0.573884,
      "authority": 0.160132
    },
    "space": {
      "econ": 0.981971,
      "culture": 0.573884,
      "authority": 0.160132,
      "establishment": -0.83834,
      "globalism": -0.460552,
      "green": 0.410486,
      "ukraine": -0.526273,
      "greenDeal": 0.205354
    },
    "axisSalience": {
      "econ": 0.832428,
      "culture": 0.661031,
      "authority": 0.437648
    },
    "issuePrefs": {
      "housing": -0.60895,
      "transport": -0.404058,
      "security": 0.384971,
      "healthcare": -0.661108,
      "climate": -0.353049,
      "industry": 0.505721,
      "education": -0.335211,
      "taxes": 0.775885
    },
    "issueSalience": {
      "housing": 0.621012,
      "transport": 0.506272,
      "security": 0.495584,
      "healthcare": 0.650221,
      "climate": 0.477707,
      "industry": 0.563204,
      "education": 0.467718,
      "taxes": 0.714496
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.3853,
    "turnoutBase": 0.630658,
    "volatility": 0.485451
  },
  {
    "id": "ess_trad_right_15_24_lower_rural_center",
    "name": "tradicni pravice - 15-24 - nizsi vzdelani - venkov - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000106,
    "position": {
      "econ": 0.467813,
      "culture": 0.080483,
      "authority": 0.071446
    },
    "space": {
      "econ": 0.467813,
      "culture": 0.080483,
      "authority": 0.071446,
      "establishment": 0.206943,
      "globalism": -0.006752,
      "green": 0.121806,
      "ukraine": 0.228628,
      "greenDeal": 0.368548
    },
    "axisSalience": {
      "econ": 0.616482,
      "culture": 0.453803,
      "authority": 0.405721
    },
    "issuePrefs": {
      "housing": -0.266955,
      "transport": -0.13225,
      "security": 0.049757,
      "healthcare": -0.330387,
      "climate": -0.190894,
      "industry": 0.141229,
      "education": -0.138959,
      "taxes": 0.346483
    },
    "issueSalience": {
      "housing": 0.429495,
      "transport": 0.35406,
      "security": 0.307864,
      "healthcare": 0.465017,
      "climate": 0.3869,
      "industry": 0.359089,
      "education": 0.357817,
      "taxes": 0.474031
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.41615,
    "turnoutBase": 0.517243,
    "volatility": 0.621375
  },
  {
    "id": "ess_trad_right_15_24_tertiary_large_town_center",
    "name": "tradicni pravice - 15-24 - vysokoskolaci - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000106,
    "position": {
      "econ": 0.055283,
      "culture": 0.389861,
      "authority": 0.376548
    },
    "space": {
      "econ": 0.055283,
      "culture": 0.389861,
      "authority": 0.376548,
      "establishment": 0.232087,
      "globalism": -0.50684,
      "green": 0.078427,
      "ukraine": -0.677678,
      "greenDeal": -0.363643
    },
    "axisSalience": {
      "econ": 0.443219,
      "culture": 0.583742,
      "authority": 0.515557
    },
    "issuePrefs": {
      "housing": -0.077189,
      "transport": -0.144817,
      "security": 0.488066,
      "healthcare": -0.008615,
      "climate": 0.045352,
      "industry": 0.182879,
      "education": -0.038214,
      "taxes": 0.086587
    },
    "issueSalience": {
      "housing": 0.323226,
      "transport": 0.361097,
      "security": 0.553317,
      "healthcare": 0.284824,
      "climate": 0.305397,
      "industry": 0.382412,
      "education": 0.3014,
      "taxes": 0.328489
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.588157,
    "turnoutBase": 0.638123,
    "volatility": 0.529112
  },
  {
    "id": "ess_trad_right_15_24_tertiary_town_center",
    "name": "tradicni pravice - 15-24 - vysokoskolaci - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 0.000106,
    "position": {
      "econ": 0.091191,
      "culture": 0.189877,
      "authority": 0.096166
    },
    "space": {
      "econ": 0.091191,
      "culture": 0.189877,
      "authority": 0.096166,
      "establishment": -0.607295,
      "globalism": -0.848637,
      "green": 0.246314,
      "ukraine": -0.702291,
      "greenDeal": -0.385963
    },
    "axisSalience": {
      "econ": 0.4583,
      "culture": 0.499748,
      "authority": 0.41462
    },
    "issuePrefs": {
      "housing": -0.07294,
      "transport": -0.158812,
      "security": 0.321726,
      "healthcare": -0.050467,
      "climate": -0.069276,
      "industry": 0.168757,
      "education": 0.098357,
      "taxes": 0.088442
    },
    "issueSalience": {
      "housing": 0.320846,
      "transport": 0.368935,
      "security": 0.460167,
      "healthcare": 0.308262,
      "climate": 0.318795,
      "industry": 0.374504,
      "education": 0.33508,
      "taxes": 0.329528
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.500498,
    "turnoutBase": 0.608745,
    "volatility": 0.604657
  },
  {
    "id": "ess_trad_right_55_plus_secondary_town_left",
    "name": "tradicni pravice - 55+ - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 9.4e-05,
    "position": {
      "econ": 0.05796,
      "culture": 0.244819,
      "authority": 0.403018
    },
    "space": {
      "econ": 0.05796,
      "culture": 0.244819,
      "authority": 0.403018,
      "establishment": 0.192069,
      "globalism": 0.219015,
      "green": -0.248493,
      "ukraine": 0.065332,
      "greenDeal": -0.119592
    },
    "axisSalience": {
      "econ": 0.444343,
      "culture": 0.522824,
      "authority": 0.525087
    },
    "issuePrefs": {
      "housing": -0.061257,
      "transport": -0.032276,
      "security": 0.273771,
      "healthcare": -0.022146,
      "climate": 0.212401,
      "industry": 0.099431,
      "education": -0.14778,
      "taxes": 0.07111
    },
    "issueSalience": {
      "housing": 0.314304,
      "transport": 0.298074,
      "security": 0.433312,
      "healthcare": 0.292402,
      "climate": 0.398944,
      "industry": 0.335682,
      "education": 0.362757,
      "taxes": 0.319821
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.518506,
    "turnoutBase": 0.676722,
    "volatility": 0.412714
  },
  {
    "id": "ess_trad_right_25_39_tertiary_large_town_unknown",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 5.9e-05,
    "position": {
      "econ": 0.113393,
      "culture": 0.399055,
      "authority": 0.341922
    },
    "space": {
      "econ": 0.113393,
      "culture": 0.399055,
      "authority": 0.341922,
      "establishment": 0.295191,
      "globalism": 0.525856,
      "green": -0.155956,
      "ukraine": 0.81597,
      "greenDeal": -0.017031
    },
    "axisSalience": {
      "econ": 0.467625,
      "culture": 0.587603,
      "authority": 0.503092
    },
    "issuePrefs": {
      "housing": -0.110253,
      "transport": -0.037076,
      "security": 0.163795,
      "healthcare": -0.049719,
      "climate": 0.117057,
      "industry": 0.128078,
      "education": -0.282572,
      "taxes": 0.12953
    },
    "issueSalience": {
      "housing": 0.341742,
      "transport": 0.300762,
      "security": 0.371725,
      "healthcare": 0.307842,
      "climate": 0.345552,
      "industry": 0.351724,
      "education": 0.43824,
      "taxes": 0.352537
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.655167,
    "turnoutBase": 0.640332,
    "volatility": 0.423433
  },
  {
    "id": "ess_trad_right_40_54_lower_town_center",
    "name": "tradicni pravice - 40-54 - nizsi vzdelani - mensi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "40_54",
    "education": "lower",
    "urbanity3": "town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 5.9e-05,
    "position": {
      "econ": 0.053186,
      "culture": 0.225247,
      "authority": -0.401879
    },
    "space": {
      "econ": 0.053186,
      "culture": 0.225247,
      "authority": -0.401879,
      "establishment": -0.199328,
      "globalism": -0.123887,
      "green": -0.599925,
      "ukraine": 0.161727,
      "greenDeal": -0.035235
    },
    "axisSalience": {
      "econ": 0.442338,
      "culture": 0.514604,
      "authority": 0.524676
    },
    "issuePrefs": {
      "housing": -0.056282,
      "transport": -0.068707,
      "security": -0.176734,
      "healthcare": -0.020274,
      "climate": 0.441812,
      "industry": 0.073467,
      "education": -0.064346,
      "taxes": 0.065324
    },
    "issueSalience": {
      "housing": 0.311518,
      "transport": 0.318476,
      "security": 0.378971,
      "healthcare": 0.291354,
      "climate": 0.527415,
      "industry": 0.321141,
      "education": 0.316034,
      "taxes": 0.316581
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.376621,
    "turnoutBase": 0.523024,
    "volatility": 0.67794
  },
  {
    "id": "ess_trad_right_25_39_secondary_rural_left",
    "name": "tradicni pravice - 25-39 - stredoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "secondary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 4.7e-05,
    "position": {
      "econ": 0.132054,
      "culture": 0.16997,
      "authority": 0.021949
    },
    "space": {
      "econ": 0.132054,
      "culture": 0.16997,
      "authority": 0.021949,
      "establishment": -0.14418,
      "globalism": 0.240847,
      "green": -0.299651,
      "ukraine": -0.030467,
      "greenDeal": -0.431486
    },
    "axisSalience": {
      "econ": 0.475462,
      "culture": 0.491388,
      "authority": 0.387902
    },
    "issuePrefs": {
      "housing": -0.093026,
      "transport": -0.034706,
      "security": 0.020285,
      "healthcare": -0.081481,
      "climate": 0.336565,
      "industry": 0.194896,
      "education": -0.144169,
      "taxes": 0.115475
    },
    "issueSalience": {
      "housing": 0.332095,
      "transport": 0.299436,
      "security": 0.29136,
      "healthcare": 0.325629,
      "climate": 0.468476,
      "industry": 0.389142,
      "education": 0.360735,
      "taxes": 0.344666
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.28,
      "region": 0.42
    },
    "scandalSensitivity": 0.492916,
    "turnoutBase": 0.564954,
    "volatility": 0.512976
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_town_left",
    "name": "tradicni pravice - 55+ - vysokoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 4.7e-05,
    "position": {
      "econ": 0.197787,
      "culture": 0.079266,
      "authority": -0.117923
    },
    "space": {
      "econ": 0.197787,
      "culture": 0.079266,
      "authority": -0.117923,
      "establishment": -0.088426,
      "globalism": -0.801878,
      "green": -0.302409,
      "ukraine": -0.686913,
      "greenDeal": -0.241334
    },
    "axisSalience": {
      "econ": 0.50307,
      "culture": 0.453292,
      "authority": 0.422452
    },
    "issuePrefs": {
      "housing": -0.118295,
      "transport": -0.15994,
      "security": 0.148374,
      "healthcare": -0.136065,
      "climate": 0.285308,
      "industry": 0.16317,
      "education": 0.101201,
      "taxes": 0.151918
    },
    "issueSalience": {
      "housing": 0.346245,
      "transport": 0.369566,
      "security": 0.363089,
      "healthcare": 0.356196,
      "climate": 0.439772,
      "industry": 0.371375,
      "education": 0.336673,
      "taxes": 0.365074
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.18,
      "region": 0.31
    },
    "scandalSensitivity": 0.544813,
    "turnoutBase": 0.726905,
    "volatility": 0.387958
  },
  {
    "id": "ess_trad_right_15_24_secondary_unknown_unknown",
    "name": "tradicni pravice - 15-24 - stredoskolaci - nezname sidlo - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "unknown",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 3.5e-05,
    "position": {
      "econ": 0.193234,
      "culture": 0.055904,
      "authority": 0.099542
    },
    "space": {
      "econ": 0.193234,
      "culture": 0.055904,
      "authority": 0.099542,
      "establishment": 0.123566,
      "globalism": 0.083031,
      "green": 0.063453,
      "ukraine": 0.824737,
      "greenDeal": 0.176072
    },
    "axisSalience": {
      "econ": 0.501158,
      "culture": 0.44348,
      "authority": 0.415835
    },
    "issuePrefs": {
      "housing": -0.112987,
      "transport": -0.048407,
      "security": -0.003555,
      "healthcare": -0.134656,
      "climate": -0.094986,
      "industry": 0.056693,
      "education": -0.084209,
      "taxes": 0.145837
    },
    "issueSalience": {
      "housing": 0.343273,
      "transport": 0.307108,
      "security": 0.281991,
      "healthcare": 0.355407,
      "climate": 0.333192,
      "industry": 0.311748,
      "education": 0.327157,
      "taxes": 0.361669
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.504867,
    "turnoutBase": 0.574325,
    "volatility": 0.488879
  },
  {
    "id": "ess_trad_right_25_39_lower_large_town_unknown",
    "name": "tradicni pravice - 25-39 - nizsi vzdelani - vetsi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 3.5e-05,
    "position": {
      "econ": 0.117711,
      "culture": 0.230312,
      "authority": -0.068381
    },
    "space": {
      "econ": 0.117711,
      "culture": 0.230312,
      "authority": -0.068381,
      "establishment": -0.623391,
      "globalism": -0.701795,
      "green": -0.981737,
      "ukraine": -0.740689,
      "greenDeal": -0.167919
    },
    "axisSalience": {
      "econ": 0.469439,
      "culture": 0.516731,
      "authority": 0.404617
    },
    "issuePrefs": {
      "housing": -0.092378,
      "transport": -0.155099,
      "security": 0.20767,
      "healthcare": -0.066327,
      "climate": 0.753868,
      "industry": 0.135904,
      "education": 0.045535,
      "taxes": 0.112389
    },
    "issueSalience": {
      "housing": 0.331732,
      "transport": 0.366856,
      "security": 0.396295,
      "healthcare": 0.317143,
      "climate": 0.702166,
      "industry": 0.356106,
      "education": 0.3055,
      "taxes": 0.342938
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.308021,
    "turnoutBase": 0.488181,
    "volatility": 0.596105
  },
  {
    "id": "ess_trad_right_55_plus_lower_large_town_center",
    "name": "tradicni pravice - 55+ - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 3.5e-05,
    "position": {
      "econ": 0.586174,
      "culture": 0.013465,
      "authority": -0.222
    },
    "space": {
      "econ": 0.586174,
      "culture": 0.013465,
      "authority": -0.222,
      "establishment": 0.140713,
      "globalism": -0.140831,
      "green": 0.333829,
      "ukraine": 0.391778,
      "greenDeal": 0.886029
    },
    "axisSalience": {
      "econ": 0.666193,
      "culture": 0.425655,
      "authority": 0.45992
    },
    "issuePrefs": {
      "housing": -0.324012,
      "transport": -0.165867,
      "security": -0.139863,
      "healthcare": -0.420968,
      "climate": -0.488445,
      "industry": 0.059417,
      "education": -0.114412,
      "taxes": 0.423661
    },
    "issueSalience": {
      "housing": 0.461447,
      "transport": 0.372886,
      "security": 0.358323,
      "healthcare": 0.515742,
      "climate": 0.553529,
      "industry": 0.313273,
      "education": 0.344071,
      "taxes": 0.51725
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.34,
      "region": 0.24
    },
    "scandalSensitivity": 0.402807,
    "turnoutBase": 0.614925,
    "volatility": 0.557336
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_rural_left",
    "name": "tradicni pravice - 55+ - vysokoskolaci - venkov - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "left",
    "populationWeight": 3.5e-05,
    "position": {
      "econ": 0.07149,
      "culture": 0.380369,
      "authority": 0.053616
    },
    "space": {
      "econ": 0.07149,
      "culture": 0.380369,
      "authority": 0.053616,
      "establishment": -0.708698,
      "globalism": -0.957622,
      "green": -0.709379,
      "ukraine": -0.870333,
      "greenDeal": -0.431051
    },
    "axisSalience": {
      "econ": 0.450026,
      "culture": 0.579755,
      "authority": 0.399302
    },
    "issuePrefs": {
      "housing": -0.084964,
      "transport": -0.201254,
      "security": 0.381744,
      "healthcare": -0.021044,
      "climate": 0.631447,
      "industry": 0.204804,
      "education": 0.06039,
      "taxes": 0.097117
    },
    "issueSalience": {
      "housing": 0.32758,
      "transport": 0.392702,
      "security": 0.493777,
      "healthcare": 0.291784,
      "climate": 0.63361,
      "industry": 0.39469,
      "education": 0.313818,
      "taxes": 0.334386
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.485847,
    "turnoutBase": 0.705196,
    "volatility": 0.443783
  },
  {
    "id": "ess_trad_right_15_24_lower_large_town_center",
    "name": "tradicni pravice - 15-24 - nizsi vzdelani - vetsi mesta - stredova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "lower",
    "urbanity3": "large_town",
    "leftRightSelfPlacement": "center",
    "populationWeight": 2.4e-05,
    "position": {
      "econ": 0.212508,
      "culture": 0.026712,
      "authority": 0.079892
    },
    "space": {
      "econ": 0.212508,
      "culture": 0.026712,
      "authority": 0.079892,
      "establishment": 0.34107,
      "globalism": 0.261413,
      "green": 0.203754,
      "ukraine": 0.116381,
      "greenDeal": 0.793879
    },
    "axisSalience": {
      "econ": 0.509253,
      "culture": 0.431219,
      "authority": 0.408761
    },
    "issuePrefs": {
      "housing": -0.120085,
      "transport": -0.026566,
      "security": 0.000648,
      "healthcare": -0.150869,
      "climate": -0.368989,
      "industry": -0.087969,
      "education": -0.117862,
      "taxes": 0.156211
    },
    "issueSalience": {
      "housing": 0.347247,
      "transport": 0.294877,
      "security": 0.280363,
      "healthcare": 0.364486,
      "climate": 0.486634,
      "industry": 0.329263,
      "education": 0.346003,
      "taxes": 0.367478
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.52,
      "region": 0.17
    },
    "scandalSensitivity": 0.44297,
    "turnoutBase": 0.521937,
    "volatility": 0.609304
  },
  {
    "id": "ess_trad_right_25_39_tertiary_town_unknown",
    "name": "tradicni pravice - 25-39 - vysokoskolaci - mensi mesta - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "25_39",
    "education": "tertiary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 2.4e-05,
    "position": {
      "econ": 0.028821,
      "culture": 0.252282,
      "authority": -0.356953
    },
    "space": {
      "econ": 0.028821,
      "culture": 0.252282,
      "authority": -0.356953,
      "establishment": -0.251424,
      "globalism": -0.000722,
      "green": -0.540709,
      "ukraine": 0.155543,
      "greenDeal": -0.731178
    },
    "axisSalience": {
      "econ": 0.432105,
      "culture": 0.525958,
      "authority": 0.508503
    },
    "issuePrefs": {
      "housing": -0.046126,
      "transport": -0.052703,
      "security": -0.162985,
      "healthcare": -0.000569,
      "climate": 0.59404,
      "industry": 0.234151,
      "education": -0.095057,
      "taxes": 0.051025
    },
    "issueSalience": {
      "housing": 0.30583,
      "transport": 0.309514,
      "security": 0.371272,
      "healthcare": 0.280319,
      "climate": 0.612663,
      "industry": 0.411125,
      "education": 0.333232,
      "taxes": 0.308574
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.579843,
    "turnoutBase": 0.6212,
    "volatility": 0.472628
  },
  {
    "id": "ess_trad_right_15_24_secondary_town_left",
    "name": "tradicni pravice - 15-24 - stredoskolaci - mensi mesta - levicova identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "15_24",
    "education": "secondary",
    "urbanity3": "town",
    "leftRightSelfPlacement": "left",
    "populationWeight": 1.2e-05,
    "position": {
      "econ": 0.183902,
      "culture": 0.039651,
      "authority": 0.073813
    },
    "space": {
      "econ": 0.183902,
      "culture": 0.039651,
      "authority": 0.073813,
      "establishment": 0.307848,
      "globalism": -0.1699,
      "green": -0.161711,
      "ukraine": 0.174905,
      "greenDeal": -0.404829
    },
    "axisSalience": {
      "econ": 0.497239,
      "culture": 0.436654,
      "authority": 0.406573
    },
    "issuePrefs": {
      "housing": -0.105904,
      "transport": -0.073501,
      "security": 0.073456,
      "healthcare": -0.129237,
      "climate": 0.229784,
      "industry": 0.188891,
      "education": -0.020636,
      "taxes": 0.137168
    },
    "issueSalience": {
      "housing": 0.339306,
      "transport": 0.32116,
      "security": 0.321135,
      "healthcare": 0.352373,
      "climate": 0.408679,
      "industry": 0.385779,
      "education": 0.291556,
      "taxes": 0.356814
    },
    "mediaHabits": {
      "ct24": 0.43,
      "metro": 0.36,
      "region": 0.24
    },
    "scandalSensitivity": 0.504434,
    "turnoutBase": 0.580775,
    "volatility": 0.472294
  },
  {
    "id": "ess_trad_right_55_plus_tertiary_rural_unknown",
    "name": "tradicni pravice - 55+ - vysokoskolaci - venkov - neznama identifikace",
    "source": "ESS10+EB103+NMS calibrated voter space",
    "nmsBlock": "trad_right",
    "age4": "55_plus",
    "education": "tertiary",
    "urbanity3": "rural",
    "leftRightSelfPlacement": "unknown",
    "populationWeight": 1.2e-05,
    "position": {
      "econ": 0.045136,
      "culture": 0.317085,
      "authority": 0.306618
    },
    "space": {
      "econ": 0.045136,
      "culture": 0.317085,
      "authority": 0.306618,
      "establishment": -0.481085,
      "globalism": -0.53566,
      "green": -0.02235,
      "ukraine": -0.76961,
      "greenDeal": -0.668646
    },
    "axisSalience": {
      "econ": 0.438957,
      "culture": 0.553176,
      "authority": 0.490382
    },
    "issuePrefs": {
      "housing": -0.062875,
      "transport": -0.132639,
      "security": 0.436874,
      "healthcare": -0.007131,
      "climate": 0.203313,
      "industry": 0.238313,
      "education": -0.003967,
      "taxes": 0.070548
    },
    "issueSalience": {
      "housing": 0.31521,
      "transport": 0.354278,
      "security": 0.52465,
      "healthcare": 0.283993,
      "climate": 0.393855,
      "industry": 0.413455,
      "education": 0.282222,
      "taxes": 0.319507
    },
    "mediaHabits": {
      "ct24": 0.69,
      "metro": 0.1,
      "region": 0.49
    },
    "scandalSensitivity": 0.529374,
    "turnoutBase": 0.713162,
    "volatility": 0.423298
  }
] satisfies VoterSegment[];

export const essRegionMixes = {
  "praha": {
    "ess_center_15_24_lower_large_town_center": 0.001355,
    "ess_center_15_24_lower_large_town_right": 0.006192,
    "ess_center_15_24_lower_large_town_unknown": 0.005805,
    "ess_center_15_24_secondary_large_town_center": 0.00774,
    "ess_center_25_39_secondary_large_town_center": 0.002903,
    "ess_center_25_39_secondary_large_town_right": 0.004451,
    "ess_center_25_39_tertiary_large_town_center": 0.006966,
    "ess_center_25_39_tertiary_large_town_right": 0.000774,
    "ess_center_40_54_lower_large_town_center": 0.004838,
    "ess_center_40_54_lower_large_town_right": 0.001355,
    "ess_center_40_54_secondary_large_town_center": 0.010256,
    "ess_center_40_54_secondary_large_town_left": 0.013546,
    "ess_center_40_54_secondary_large_town_right": 0.005999,
    "ess_center_40_54_secondary_large_town_unknown": 0.001742,
    "ess_center_40_54_secondary_town_center": 0.000774,
    "ess_center_40_54_tertiary_large_town_center": 0.000968,
    "ess_center_40_54_tertiary_large_town_left": 0.004838,
    "ess_center_40_54_tertiary_large_town_right": 0.002322,
    "ess_center_55_plus_lower_large_town_right": 0.000774,
    "ess_center_55_plus_secondary_large_town_center": 0.028446,
    "ess_center_55_plus_secondary_large_town_left": 0.011417,
    "ess_center_55_plus_secondary_large_town_right": 0.003677,
    "ess_center_55_plus_tertiary_large_town_center": 0.005225,
    "ess_center_55_plus_tertiary_large_town_right": 0.000968,
    "ess_center_55_plus_tertiary_town_center": 0.000968,
    "ess_lib_left_15_24_lower_large_town_center": 0.007088,
    "ess_lib_left_15_24_lower_large_town_right": 0.01663,
    "ess_lib_left_15_24_lower_large_town_unknown": 0.020174,
    "ess_lib_left_15_24_secondary_large_town_center": 0.01663,
    "ess_lib_left_15_24_secondary_large_town_left": 0.011177,
    "ess_lib_left_15_24_secondary_large_town_right": 0.000818,
    "ess_lib_left_25_39_secondary_large_town_center": 0.017175,
    "ess_lib_left_25_39_secondary_large_town_left": 0.005998,
    "ess_lib_left_25_39_secondary_large_town_right": 0.013631,
    "ess_lib_left_25_39_secondary_large_town_unknown": 0.004089,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.007633,
    "ess_lib_left_25_39_tertiary_large_town_right": 0.004362,
    "ess_lib_left_25_39_tertiary_large_town_unknown": 0.002999,
    "ess_lib_left_40_54_lower_large_town_center": 0.01254,
    "ess_lib_left_40_54_secondary_large_town_center": 0.004089,
    "ess_lib_left_40_54_secondary_large_town_left": 0.007633,
    "ess_lib_left_40_54_secondary_large_town_right": 0.001363,
    "ess_lib_left_40_54_secondary_large_town_unknown": 0.014721,
    "ess_lib_left_40_54_secondary_town_center": 0.01036,
    "ess_lib_left_40_54_tertiary_large_town_left": 0.003817,
    "ess_lib_left_40_54_tertiary_large_town_unknown": 0.001908,
    "ess_lib_left_55_plus_lower_large_town_right": 0.004362,
    "ess_lib_left_55_plus_lower_large_town_unknown": 0.018265,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.010905,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.020992,
    "ess_lib_left_55_plus_secondary_large_town_right": 0.00109,
    "ess_lib_left_55_plus_secondary_large_town_unknown": 0.000818,
    "ess_lib_left_55_plus_secondary_town_center": 0.000545,
    "ess_lib_right_15_24_lower_large_town_center": 0.002133,
    "ess_lib_right_15_24_lower_large_town_right": 0.002256,
    "ess_lib_right_15_24_secondary_large_town_left": 0.001394,
    "ess_lib_right_15_24_secondary_large_town_right": 0.008079,
    "ess_lib_right_15_24_secondary_large_town_unknown": 0.000902,
    "ess_lib_right_15_24_secondary_town_right": 0.001025,
    "ess_lib_right_25_39_secondary_large_town_center": 0.000738,
    "ess_lib_right_25_39_secondary_large_town_right": 0.008285,
    "ess_lib_right_25_39_tertiary_large_town_center": 0.000615,
    "ess_lib_right_25_39_tertiary_large_town_right": 0.00689,
    "ess_lib_right_40_54_secondary_large_town_center": 0.005291,
    "ess_lib_right_40_54_secondary_large_town_right": 0.01702,
    "ess_lib_right_40_54_tertiary_large_town_right": 0.006275,
    "ess_lib_right_55_plus_lower_large_town_right": 0.000533,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.004798,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.007751,
    "ess_lib_right_55_plus_secondary_town_center": 0.000615,
    "ess_lib_right_55_plus_tertiary_large_town_right": 0.005332,
    "ess_trad_left_15_24_lower_large_town_center": 0.008068,
    "ess_trad_left_15_24_lower_large_town_right": 0.001291,
    "ess_trad_left_15_24_lower_large_town_unknown": 0.005487,
    "ess_trad_left_15_24_secondary_large_town_center": 0.02001,
    "ess_trad_left_15_24_secondary_large_town_unknown": 0.001936,
    "ess_trad_left_25_39_lower_large_town_unknown": 0.002905,
    "ess_trad_left_25_39_secondary_large_town_center": 0.036469,
    "ess_trad_left_25_39_tertiary_large_town_center": 0.001936,
    "ess_trad_left_25_39_tertiary_large_town_left": 0.005164,
    "ess_trad_left_40_54_lower_large_town_center": 0.00355,
    "ess_trad_left_40_54_secondary_large_town_center": 0.029046,
    "ess_trad_left_40_54_secondary_large_town_left": 0.024528,
    "ess_trad_left_40_54_secondary_large_town_right": 0.003873,
    "ess_trad_left_40_54_secondary_large_town_unknown": 0.003873,
    "ess_trad_left_40_54_tertiary_large_town_center": 0.013232,
    "ess_trad_left_40_54_tertiary_large_town_left": 0.002582,
    "ess_trad_left_40_54_tertiary_large_town_right": 0.004841,
    "ess_trad_left_40_54_tertiary_large_town_unknown": 0.006455,
    "ess_trad_left_55_plus_lower_large_town_unknown": 0.005487,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.067452,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.081007,
    "ess_trad_left_55_plus_secondary_large_town_right": 0.008068,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.02711,
    "ess_trad_left_55_plus_secondary_town_left": 0.010005,
    "ess_trad_left_55_plus_tertiary_large_town_center": 0.014523,
    "ess_trad_left_55_plus_tertiary_large_town_left": 0.002582,
    "ess_trad_left_55_plus_tertiary_large_town_unknown": 0.004196,
    "ess_trad_right_15_24_secondary_large_town_center": 0.000555,
    "ess_trad_right_15_24_secondary_large_town_right": 0.001886,
    "ess_trad_right_15_24_secondary_large_town_unknown": 0.000666,
    "ess_trad_right_25_39_secondary_large_town_center": 0.005325,
    "ess_trad_right_25_39_secondary_large_town_right": 0.004104,
    "ess_trad_right_25_39_tertiary_large_town_center": 0.000666,
    "ess_trad_right_25_39_tertiary_large_town_right": 0.004104,
    "ess_trad_right_40_54_lower_large_town_right": 0.001331,
    "ess_trad_right_40_54_secondary_large_town_center": 0.015863,
    "ess_trad_right_40_54_secondary_large_town_left": 0.000555,
    "ess_trad_right_40_54_secondary_large_town_right": 0.021965,
    "ess_trad_right_40_54_secondary_town_right": 0.003772,
    "ess_trad_right_40_54_tertiary_large_town_center": 0.002219,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.012646,
    "ess_trad_right_55_plus_secondary_large_town_center": 0.012313,
    "ess_trad_right_55_plus_secondary_large_town_left": 0.002219,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.03217,
    "ess_trad_right_55_plus_secondary_large_town_unknown": 0.006323,
    "ess_trad_right_55_plus_secondary_town_right": 0.001442,
    "ess_trad_right_55_plus_tertiary_large_town_left": 0.000666,
    "ess_trad_right_55_plus_tertiary_large_town_right": 0.012979,
    "ess_trad_right_55_plus_unknown_large_town_right": 0.00122
  },
  "stredocesky": {
    "ess_center_15_24_lower_rural_right": 0.002196,
    "ess_center_15_24_lower_town_center": 0.004942,
    "ess_center_15_24_secondary_rural_right": 0.000549,
    "ess_center_15_24_secondary_town_center": 0.011165,
    "ess_center_25_39_secondary_rural_center": 0.015192,
    "ess_center_25_39_secondary_rural_right": 0.003844,
    "ess_center_25_39_secondary_rural_unknown": 0.002196,
    "ess_center_25_39_secondary_town_center": 0.007139,
    "ess_center_25_39_secondary_town_right": 0.000915,
    "ess_center_25_39_tertiary_rural_center": 0.000915,
    "ess_center_25_39_tertiary_town_center": 0.00183,
    "ess_center_25_39_unknown_unknown_unknown": 0.002746,
    "ess_center_40_54_secondary_large_town_center": 0.008786,
    "ess_center_40_54_secondary_large_town_right": 0.001464,
    "ess_center_40_54_secondary_rural_center": 0.004759,
    "ess_center_40_54_secondary_rural_right": 0.009701,
    "ess_center_40_54_secondary_town_center": 0.000915,
    "ess_center_40_54_secondary_town_left": 0.002013,
    "ess_center_40_54_secondary_town_right": 0.002929,
    "ess_center_40_54_secondary_town_unknown": 0.00183,
    "ess_center_40_54_tertiary_large_town_right": 0.000915,
    "ess_center_40_54_tertiary_rural_center": 0.001647,
    "ess_center_40_54_tertiary_rural_right": 0.003295,
    "ess_center_40_54_tertiary_town_center": 0.003478,
    "ess_center_40_54_tertiary_town_unknown": 0.006589,
    "ess_center_55_plus_lower_town_right": 0.00238,
    "ess_center_55_plus_secondary_large_town_center": 0.002563,
    "ess_center_55_plus_secondary_rural_center": 0.01025,
    "ess_center_55_plus_secondary_rural_right": 0.003661,
    "ess_center_55_plus_secondary_town_center": 0.008603,
    "ess_center_55_plus_secondary_town_left": 0.003112,
    "ess_center_55_plus_secondary_town_right": 0.009884,
    "ess_center_55_plus_tertiary_rural_center": 0.004942,
    "ess_lib_left_15_24_lower_rural_center": 0.021403,
    "ess_lib_left_15_24_lower_rural_unknown": 0.003352,
    "ess_lib_left_15_24_lower_town_center": 0.002063,
    "ess_lib_left_15_24_lower_town_left": 0.009283,
    "ess_lib_left_15_24_lower_town_unknown": 0.006189,
    "ess_lib_left_15_24_secondary_rural_left": 0.017535,
    "ess_lib_left_15_24_secondary_rural_unknown": 0.005157,
    "ess_lib_left_15_24_secondary_town_center": 0.009541,
    "ess_lib_left_15_24_secondary_town_left": 0.004384,
    "ess_lib_left_15_24_secondary_town_unknown": 0.028365,
    "ess_lib_left_25_39_secondary_large_town_center": 0.001289,
    "ess_lib_left_25_39_secondary_rural_center": 0.001289,
    "ess_lib_left_25_39_secondary_rural_left": 0.003868,
    "ess_lib_left_25_39_secondary_town_center": 0.011088,
    "ess_lib_left_25_39_secondary_town_unknown": 0.009025,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.005157,
    "ess_lib_left_25_39_tertiary_rural_center": 0.003094,
    "ess_lib_left_25_39_tertiary_town_center": 0.009025,
    "ess_lib_left_25_39_tertiary_town_left": 0.004642,
    "ess_lib_left_40_54_secondary_large_town_left": 0.007478,
    "ess_lib_left_40_54_secondary_rural_left": 0.008768,
    "ess_lib_left_40_54_secondary_rural_right": 0.000516,
    "ess_lib_left_40_54_secondary_town_center": 0.010573,
    "ess_lib_left_40_54_secondary_town_right": 0.000774,
    "ess_lib_left_40_54_secondary_town_unknown": 0.006447,
    "ess_lib_left_40_54_tertiary_rural_center": 0.004642,
    "ess_lib_left_40_54_tertiary_rural_unknown": 0.001289,
    "ess_lib_left_40_54_tertiary_town_right": 0.002321,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.002321,
    "ess_lib_left_55_plus_secondary_rural_center": 0.012378,
    "ess_lib_left_55_plus_secondary_rural_left": 0.010573,
    "ess_lib_left_55_plus_secondary_town_center": 0.007994,
    "ess_lib_left_55_plus_secondary_town_left": 0.010315,
    "ess_lib_left_55_plus_secondary_town_right": 0.002837,
    "ess_lib_left_55_plus_tertiary_town_left": 0.004126,
    "ess_lib_right_15_24_lower_rural_center": 0.00128,
    "ess_lib_right_15_24_lower_rural_right": 0.001047,
    "ess_lib_right_15_24_lower_rural_unknown": 0.000659,
    "ess_lib_right_15_24_secondary_rural_unknown": 0.000698,
    "ess_lib_right_15_24_secondary_town_unknown": 0.000504,
    "ess_lib_right_25_39_secondary_rural_center": 0.002095,
    "ess_lib_right_25_39_secondary_rural_right": 0.001668,
    "ess_lib_right_25_39_secondary_town_center": 0.001125,
    "ess_lib_right_25_39_secondary_town_unknown": 0.000504,
    "ess_lib_right_25_39_tertiary_rural_center": 0.001203,
    "ess_lib_right_25_39_tertiary_rural_right": 0.003181,
    "ess_lib_right_25_39_tertiary_town_right": 0.002211,
    "ess_lib_right_40_54_lower_large_town_right": 0.00194,
    "ess_lib_right_40_54_secondary_large_town_right": 0.002366,
    "ess_lib_right_40_54_secondary_rural_right": 0.004035,
    "ess_lib_right_40_54_secondary_rural_unknown": 0.001009,
    "ess_lib_right_40_54_secondary_town_center": 0.002948,
    "ess_lib_right_40_54_secondary_town_right": 0.007177,
    "ess_lib_right_40_54_secondary_town_unknown": 0.000504,
    "ess_lib_right_40_54_tertiary_large_town_left": 0.000698,
    "ess_lib_right_40_54_tertiary_large_town_right": 0.001784,
    "ess_lib_right_40_54_tertiary_rural_right": 0.000659,
    "ess_lib_right_40_54_tertiary_town_center": 0.001668,
    "ess_lib_right_40_54_tertiary_town_right": 0.001746,
    "ess_lib_right_55_plus_lower_rural_center": 0.001707,
    "ess_lib_right_55_plus_lower_rural_unknown": 0.000892,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.000582,
    "ess_lib_right_55_plus_secondary_rural_center": 0.002017,
    "ess_lib_right_55_plus_secondary_rural_right": 0.005276,
    "ess_lib_right_55_plus_secondary_town_center": 0.002483,
    "ess_lib_right_55_plus_secondary_town_right": 0.00291,
    "ess_lib_right_55_plus_tertiary_rural_right": 0.001397,
    "ess_lib_right_55_plus_tertiary_town_right": 0.002832,
    "ess_trad_left_15_24_lower_rural_right": 0.000611,
    "ess_trad_left_15_24_secondary_town_unknown": 0.008548,
    "ess_trad_left_25_39_secondary_large_town_center": 0.0058,
    "ess_trad_left_25_39_secondary_large_town_left": 0.011295,
    "ess_trad_left_25_39_secondary_rural_center": 0.018622,
    "ess_trad_left_25_39_secondary_rural_right": 0.0058,
    "ess_trad_left_25_39_secondary_town_center": 0.004579,
    "ess_trad_left_25_39_secondary_town_unknown": 0.001832,
    "ess_trad_left_25_39_tertiary_town_center": 0.008242,
    "ess_trad_left_25_39_tertiary_town_right": 0.002442,
    "ess_trad_left_25_39_tertiary_town_unknown": 0.003663,
    "ess_trad_left_40_54_lower_rural_unknown": 0.011906,
    "ess_trad_left_40_54_secondary_large_town_left": 0.002747,
    "ess_trad_left_40_54_secondary_rural_center": 0.0058,
    "ess_trad_left_40_54_secondary_rural_left": 0.03297,
    "ess_trad_left_40_54_secondary_rural_right": 0.009464,
    "ess_trad_left_40_54_secondary_town_center": 0.008242,
    "ess_trad_left_40_54_secondary_town_left": 0.016485,
    "ess_trad_left_40_54_secondary_town_unknown": 0.0058,
    "ess_trad_left_40_54_tertiary_large_town_center": 0.015569,
    "ess_trad_left_40_54_tertiary_rural_center": 0.006411,
    "ess_trad_left_40_54_tertiary_rural_left": 0.005495,
    "ess_trad_left_40_54_tertiary_town_unknown": 0.003053,
    "ess_trad_left_55_plus_lower_rural_center": 0.025033,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.003969,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.007632,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.00519,
    "ess_trad_left_55_plus_secondary_rural_center": 0.03297,
    "ess_trad_left_55_plus_secondary_rural_left": 0.02778,
    "ess_trad_left_55_plus_secondary_rural_right": 0.000611,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.002747,
    "ess_trad_left_55_plus_secondary_town_center": 0.039991,
    "ess_trad_left_55_plus_secondary_town_left": 0.024422,
    "ess_trad_left_55_plus_secondary_town_right": 0.004579,
    "ess_trad_left_55_plus_tertiary_large_town_center": 0.000611,
    "ess_trad_left_55_plus_tertiary_rural_left": 0.008853,
    "ess_trad_left_55_plus_tertiary_rural_unknown": 0.001526,
    "ess_trad_left_55_plus_tertiary_town_center": 0.001832,
    "ess_trad_left_55_plus_tertiary_town_left": 0.001221,
    "ess_trad_right_15_24_lower_town_center": 0.00063,
    "ess_trad_right_15_24_secondary_large_town_center": 0.003043,
    "ess_trad_right_15_24_secondary_rural_right": 0.001364,
    "ess_trad_right_15_24_secondary_town_center": 0.001259,
    "ess_trad_right_15_24_secondary_town_right": 0.000944,
    "ess_trad_right_15_24_secondary_town_unknown": 0.001364,
    "ess_trad_right_25_39_secondary_large_town_center": 0.002413,
    "ess_trad_right_25_39_secondary_rural_center": 0.004407,
    "ess_trad_right_25_39_secondary_rural_right": 0.001049,
    "ess_trad_right_25_39_secondary_town_center": 0.000944,
    "ess_trad_right_25_39_secondary_town_right": 0.004827,
    "ess_trad_right_25_39_tertiary_rural_center": 0.002204,
    "ess_trad_right_25_39_tertiary_town_center": 0.001994,
    "ess_trad_right_25_39_tertiary_town_right": 0.001679,
    "ess_trad_right_40_54_lower_large_town_right": 0.001154,
    "ess_trad_right_40_54_secondary_large_town_right": 0.003463,
    "ess_trad_right_40_54_secondary_rural_center": 0.001574,
    "ess_trad_right_40_54_secondary_rural_left": 0.005456,
    "ess_trad_right_40_54_secondary_rural_right": 0.025813,
    "ess_trad_right_40_54_secondary_town_center": 0.002413,
    "ess_trad_right_40_54_secondary_town_right": 0.017838,
    "ess_trad_right_40_54_secondary_town_unknown": 0.003148,
    "ess_trad_right_40_54_tertiary_rural_right": 0.002413,
    "ess_trad_right_40_54_tertiary_town_center": 0.001364,
    "ess_trad_right_40_54_tertiary_town_right": 0.003673,
    "ess_trad_right_55_plus_lower_rural_center": 0.004407,
    "ess_trad_right_55_plus_lower_rural_right": 0.005981,
    "ess_trad_right_55_plus_lower_town_right": 0.001574,
    "ess_trad_right_55_plus_secondary_large_town_center": 0.001994,
    "ess_trad_right_55_plus_secondary_rural_center": 0.003148,
    "ess_trad_right_55_plus_secondary_rural_right": 0.004617,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.00063,
    "ess_trad_right_55_plus_secondary_town_center": 0.006925,
    "ess_trad_right_55_plus_secondary_town_right": 0.012487,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.003043,
    "ess_trad_right_55_plus_tertiary_large_town_left": 0.001994,
    "ess_trad_right_55_plus_tertiary_town_right": 0.003148,
    "ess_trad_right_55_plus_unknown_rural_right": 0.001049
  },
  "jihocesky": {
    "ess_center_15_24_lower_large_town_center": 0.000575,
    "ess_center_15_24_lower_rural_center": 0.006323,
    "ess_center_15_24_lower_town_center": 0.000958,
    "ess_center_15_24_lower_town_right": 0.002874,
    "ess_center_15_24_secondary_rural_center": 0.013605,
    "ess_center_15_24_secondary_rural_right": 0.001916,
    "ess_center_15_24_secondary_rural_unknown": 0.002874,
    "ess_center_15_24_secondary_town_unknown": 0.005748,
    "ess_center_15_24_secondary_unknown_unknown": 0.005748,
    "ess_center_25_39_lower_town_unknown": 0.000958,
    "ess_center_25_39_secondary_large_town_right": 0.000575,
    "ess_center_25_39_secondary_rural_center": 0.007665,
    "ess_center_25_39_secondary_rural_unknown": 0.000766,
    "ess_center_25_39_secondary_town_center": 0.00115,
    "ess_center_25_39_secondary_town_right": 0.000766,
    "ess_center_25_39_tertiary_large_town_center": 0.004982,
    "ess_center_25_39_tertiary_rural_center": 0.002108,
    "ess_center_25_39_tertiary_rural_right": 0.000575,
    "ess_center_25_39_tertiary_town_center": 0.002874,
    "ess_center_25_39_tertiary_town_left": 0.005174,
    "ess_center_40_54_lower_town_center": 0.001341,
    "ess_center_40_54_secondary_large_town_right": 0.000958,
    "ess_center_40_54_secondary_rural_center": 0.008239,
    "ess_center_40_54_secondary_rural_left": 0.001341,
    "ess_center_40_54_secondary_rural_right": 0.003449,
    "ess_center_40_54_secondary_town_center": 0.002683,
    "ess_center_40_54_secondary_town_right": 0.004216,
    "ess_center_40_54_secondary_town_unknown": 0.001725,
    "ess_center_40_54_tertiary_large_town_right": 0.002683,
    "ess_center_40_54_tertiary_rural_center": 0.005748,
    "ess_center_40_54_tertiary_rural_left": 0.002108,
    "ess_center_40_54_tertiary_town_center": 0.004024,
    "ess_center_40_54_tertiary_town_left": 0.00115,
    "ess_center_40_54_tertiary_town_unknown": 0.001916,
    "ess_center_55_plus_secondary_large_town_center": 0.007665,
    "ess_center_55_plus_secondary_large_town_right": 0.001533,
    "ess_center_55_plus_secondary_large_town_unknown": 0.000766,
    "ess_center_55_plus_secondary_rural_center": 0.004216,
    "ess_center_55_plus_secondary_rural_left": 0.002108,
    "ess_center_55_plus_secondary_rural_right": 0.005748,
    "ess_center_55_plus_secondary_town_center": 0.011688,
    "ess_center_55_plus_secondary_town_right": 0.006132,
    "ess_center_55_plus_tertiary_large_town_left": 0.004024,
    "ess_center_55_plus_tertiary_rural_center": 0.00115,
    "ess_center_55_plus_tertiary_rural_right": 0.005748,
    "ess_center_55_plus_tertiary_town_right": 0.000958,
    "ess_lib_left_15_24_lower_large_town_unknown": 0.005129,
    "ess_lib_left_15_24_lower_rural_center": 0.008638,
    "ess_lib_left_15_24_lower_rural_left": 0.007019,
    "ess_lib_left_15_24_lower_rural_unknown": 0.031314,
    "ess_lib_left_15_24_secondary_large_town_center": 0.00243,
    "ess_lib_left_15_24_secondary_large_town_unknown": 0.010798,
    "ess_lib_left_15_24_secondary_rural_center": 0.002969,
    "ess_lib_left_15_24_secondary_town_unknown": 0.002969,
    "ess_lib_left_15_24_tertiary_town_center": 0.007828,
    "ess_lib_left_25_39_secondary_large_town_center": 0.009448,
    "ess_lib_left_25_39_secondary_large_town_right": 0.002699,
    "ess_lib_left_25_39_secondary_rural_center": 0.004859,
    "ess_lib_left_25_39_secondary_town_center": 0.009718,
    "ess_lib_left_25_39_secondary_town_unknown": 0.011878,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.00054,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.006209,
    "ess_lib_left_25_39_tertiary_rural_center": 0.002969,
    "ess_lib_left_25_39_tertiary_rural_left": 0.003779,
    "ess_lib_left_25_39_tertiary_town_center": 0.009988,
    "ess_lib_left_40_54_secondary_large_town_center": 0.00081,
    "ess_lib_left_40_54_secondary_large_town_unknown": 0.004859,
    "ess_lib_left_40_54_secondary_rural_center": 0.00108,
    "ess_lib_left_40_54_secondary_rural_left": 0.00189,
    "ess_lib_left_40_54_secondary_rural_unknown": 0.002969,
    "ess_lib_left_40_54_secondary_town_center": 0.012148,
    "ess_lib_left_40_54_tertiary_rural_left": 0.005669,
    "ess_lib_left_40_54_tertiary_town_left": 0.003239,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.007559,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.00216,
    "ess_lib_left_55_plus_secondary_large_town_unknown": 0.009448,
    "ess_lib_left_55_plus_secondary_rural_center": 0.00054,
    "ess_lib_left_55_plus_secondary_rural_left": 0.004319,
    "ess_lib_left_55_plus_secondary_rural_right": 0.00081,
    "ess_lib_left_55_plus_secondary_town_center": 0.017817,
    "ess_lib_left_55_plus_secondary_town_left": 0.009178,
    "ess_lib_left_55_plus_secondary_town_right": 0.003509,
    "ess_lib_left_55_plus_secondary_town_unknown": 0.002969,
    "ess_lib_left_55_plus_tertiary_large_town_left": 0.00216,
    "ess_lib_left_55_plus_tertiary_rural_center": 0.003779,
    "ess_lib_left_55_plus_tertiary_rural_left": 0.002969,
    "ess_lib_right_15_24_lower_large_town_center": 0.002396,
    "ess_lib_right_15_24_lower_large_town_unknown": 0.000893,
    "ess_lib_right_15_24_lower_rural_unknown": 0.000975,
    "ess_lib_right_15_24_secondary_large_town_unknown": 0.000812,
    "ess_lib_right_15_24_tertiary_large_town_center": 0.001584,
    "ess_lib_right_15_24_tertiary_large_town_right": 0.001381,
    "ess_lib_right_15_24_tertiary_town_unknown": 0.001381,
    "ess_lib_right_25_39_secondary_large_town_right": 0.000893,
    "ess_lib_right_25_39_secondary_rural_right": 0.001949,
    "ess_lib_right_25_39_tertiary_rural_right": 0.002315,
    "ess_lib_right_25_39_tertiary_town_center": 0.001665,
    "ess_lib_right_25_39_tertiary_town_right": 0.001381,
    "ess_lib_right_40_54_secondary_large_town_center": 0.001624,
    "ess_lib_right_40_54_secondary_rural_center": 0.002071,
    "ess_lib_right_40_54_secondary_rural_right": 0.005158,
    "ess_lib_right_40_54_secondary_rural_unknown": 0.002274,
    "ess_lib_right_40_54_secondary_town_right": 0.003899,
    "ess_lib_right_40_54_secondary_town_unknown": 0.00065,
    "ess_lib_right_40_54_tertiary_large_town_center": 0.00199,
    "ess_lib_right_40_54_tertiary_large_town_right": 0.001015,
    "ess_lib_right_40_54_tertiary_rural_center": 0.001706,
    "ess_lib_right_40_54_tertiary_rural_unknown": 0.001665,
    "ess_lib_right_40_54_tertiary_town_right": 0.000772,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.001584,
    "ess_lib_right_55_plus_secondary_large_town_unknown": 0.00065,
    "ess_lib_right_55_plus_secondary_rural_center": 0.001949,
    "ess_lib_right_55_plus_secondary_rural_right": 0.0013,
    "ess_lib_right_55_plus_secondary_town_center": 0.001827,
    "ess_lib_right_55_plus_secondary_town_right": 0.004386,
    "ess_lib_right_55_plus_secondary_town_unknown": 0.001137,
    "ess_lib_right_55_plus_tertiary_rural_center": 0.00134,
    "ess_lib_right_55_plus_tertiary_rural_right": 0.000772,
    "ess_lib_right_55_plus_tertiary_town_right": 0.001868,
    "ess_trad_left_15_24_lower_rural_center": 0.022051,
    "ess_trad_left_15_24_secondary_large_town_center": 0.004474,
    "ess_trad_left_15_24_secondary_rural_center": 0.010546,
    "ess_trad_left_15_24_secondary_rural_unknown": 0.004794,
    "ess_trad_left_15_24_secondary_town_unknown": 0.001278,
    "ess_trad_left_25_39_secondary_large_town_center": 0.006392,
    "ess_trad_left_25_39_secondary_large_town_right": 0.000639,
    "ess_trad_left_25_39_secondary_rural_center": 0.001598,
    "ess_trad_left_25_39_secondary_rural_left": 0.010866,
    "ess_trad_left_25_39_secondary_rural_unknown": 0.000959,
    "ess_trad_left_25_39_secondary_town_center": 0.017257,
    "ess_trad_left_25_39_secondary_town_right": 0.001278,
    "ess_trad_left_25_39_tertiary_large_town_center": 0.000959,
    "ess_trad_left_25_39_tertiary_rural_right": 0.001278,
    "ess_trad_left_25_39_tertiary_town_center": 0.005433,
    "ess_trad_left_25_39_tertiary_town_left": 0.009907,
    "ess_trad_left_40_54_lower_town_center": 0.001278,
    "ess_trad_left_40_54_secondary_large_town_center": 0.01534,
    "ess_trad_left_40_54_secondary_large_town_left": 0.013742,
    "ess_trad_left_40_54_secondary_rural_center": 0.031638,
    "ess_trad_left_40_54_secondary_rural_left": 0.029721,
    "ess_trad_left_40_54_secondary_town_center": 0.00735,
    "ess_trad_left_40_54_secondary_town_left": 0.016618,
    "ess_trad_left_40_54_secondary_town_unknown": 0.005752,
    "ess_trad_left_40_54_tertiary_town_left": 0.000959,
    "ess_trad_left_55_plus_lower_large_town_left": 0.028442,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.023968,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.017257,
    "ess_trad_left_55_plus_secondary_rural_center": 0.010866,
    "ess_trad_left_55_plus_secondary_rural_left": 0.031958,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.000959,
    "ess_trad_left_55_plus_secondary_town_center": 0.029081,
    "ess_trad_left_55_plus_secondary_town_left": 0.008948,
    "ess_trad_left_55_plus_secondary_town_right": 0.003196,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.008309,
    "ess_trad_left_55_plus_tertiary_town_center": 0.004474,
    "ess_trad_right_15_24_lower_town_center": 0.000769,
    "ess_trad_right_15_24_secondary_large_town_right": 0.002856,
    "ess_trad_right_15_24_secondary_rural_center": 0.004394,
    "ess_trad_right_15_24_secondary_rural_unknown": 0.003845,
    "ess_trad_right_15_24_secondary_town_unknown": 0.001428,
    "ess_trad_right_25_39_secondary_large_town_right": 0.001098,
    "ess_trad_right_25_39_secondary_rural_center": 0.000879,
    "ess_trad_right_25_39_secondary_rural_right": 0.00681,
    "ess_trad_right_25_39_secondary_rural_unknown": 0.000549,
    "ess_trad_right_25_39_secondary_town_center": 0.002746,
    "ess_trad_right_25_39_secondary_town_right": 0.001977,
    "ess_trad_right_25_39_tertiary_large_town_center": 0.001208,
    "ess_trad_right_25_39_tertiary_large_town_right": 0.00703,
    "ess_trad_right_25_39_tertiary_rural_center": 0.002417,
    "ess_trad_right_25_39_tertiary_rural_right": 0.003186,
    "ess_trad_right_25_39_tertiary_town_right": 0.003954,
    "ess_trad_right_40_54_lower_town_center": 0.000549,
    "ess_trad_right_40_54_secondary_large_town_center": 0.008458,
    "ess_trad_right_40_54_secondary_rural_right": 0.006371,
    "ess_trad_right_40_54_secondary_rural_unknown": 0.002746,
    "ess_trad_right_40_54_secondary_town_center": 0.005273,
    "ess_trad_right_40_54_secondary_town_right": 0.005163,
    "ess_trad_right_40_54_secondary_town_unknown": 0.002087,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.001428,
    "ess_trad_right_40_54_tertiary_rural_left": 0.003515,
    "ess_trad_right_40_54_tertiary_town_unknown": 0.002087,
    "ess_trad_right_55_plus_secondary_large_town_center": 0.006591,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.001428,
    "ess_trad_right_55_plus_secondary_rural_center": 0.005492,
    "ess_trad_right_55_plus_secondary_rural_right": 0.013731,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.000989,
    "ess_trad_right_55_plus_secondary_town_center": 0.009996,
    "ess_trad_right_55_plus_secondary_town_right": 0.009337,
    "ess_trad_right_55_plus_secondary_town_unknown": 0.002417,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.001098,
    "ess_trad_right_55_plus_tertiary_large_town_right": 0.001867,
    "ess_trad_right_55_plus_tertiary_rural_right": 0.002526,
    "ess_trad_right_55_plus_tertiary_town_center": 0.001538
  },
  "plzensky": {
    "ess_center_15_24_lower_large_town_center": 0.000575,
    "ess_center_15_24_lower_rural_center": 0.006323,
    "ess_center_15_24_lower_town_center": 0.000958,
    "ess_center_15_24_lower_town_right": 0.002874,
    "ess_center_15_24_secondary_rural_center": 0.013605,
    "ess_center_15_24_secondary_rural_right": 0.001916,
    "ess_center_15_24_secondary_rural_unknown": 0.002874,
    "ess_center_15_24_secondary_town_unknown": 0.005748,
    "ess_center_15_24_secondary_unknown_unknown": 0.005748,
    "ess_center_25_39_lower_town_unknown": 0.000958,
    "ess_center_25_39_secondary_large_town_right": 0.000575,
    "ess_center_25_39_secondary_rural_center": 0.007665,
    "ess_center_25_39_secondary_rural_unknown": 0.000766,
    "ess_center_25_39_secondary_town_center": 0.00115,
    "ess_center_25_39_secondary_town_right": 0.000766,
    "ess_center_25_39_tertiary_large_town_center": 0.004982,
    "ess_center_25_39_tertiary_rural_center": 0.002108,
    "ess_center_25_39_tertiary_rural_right": 0.000575,
    "ess_center_25_39_tertiary_town_center": 0.002874,
    "ess_center_25_39_tertiary_town_left": 0.005174,
    "ess_center_40_54_lower_town_center": 0.001341,
    "ess_center_40_54_secondary_large_town_right": 0.000958,
    "ess_center_40_54_secondary_rural_center": 0.008239,
    "ess_center_40_54_secondary_rural_left": 0.001341,
    "ess_center_40_54_secondary_rural_right": 0.003449,
    "ess_center_40_54_secondary_town_center": 0.002683,
    "ess_center_40_54_secondary_town_right": 0.004216,
    "ess_center_40_54_secondary_town_unknown": 0.001725,
    "ess_center_40_54_tertiary_large_town_right": 0.002683,
    "ess_center_40_54_tertiary_rural_center": 0.005748,
    "ess_center_40_54_tertiary_rural_left": 0.002108,
    "ess_center_40_54_tertiary_town_center": 0.004024,
    "ess_center_40_54_tertiary_town_left": 0.00115,
    "ess_center_40_54_tertiary_town_unknown": 0.001916,
    "ess_center_55_plus_secondary_large_town_center": 0.007665,
    "ess_center_55_plus_secondary_large_town_right": 0.001533,
    "ess_center_55_plus_secondary_large_town_unknown": 0.000766,
    "ess_center_55_plus_secondary_rural_center": 0.004216,
    "ess_center_55_plus_secondary_rural_left": 0.002108,
    "ess_center_55_plus_secondary_rural_right": 0.005748,
    "ess_center_55_plus_secondary_town_center": 0.011688,
    "ess_center_55_plus_secondary_town_right": 0.006132,
    "ess_center_55_plus_tertiary_large_town_left": 0.004024,
    "ess_center_55_plus_tertiary_rural_center": 0.00115,
    "ess_center_55_plus_tertiary_rural_right": 0.005748,
    "ess_center_55_plus_tertiary_town_right": 0.000958,
    "ess_lib_left_15_24_lower_large_town_unknown": 0.005129,
    "ess_lib_left_15_24_lower_rural_center": 0.008638,
    "ess_lib_left_15_24_lower_rural_left": 0.007019,
    "ess_lib_left_15_24_lower_rural_unknown": 0.031314,
    "ess_lib_left_15_24_secondary_large_town_center": 0.00243,
    "ess_lib_left_15_24_secondary_large_town_unknown": 0.010798,
    "ess_lib_left_15_24_secondary_rural_center": 0.002969,
    "ess_lib_left_15_24_secondary_town_unknown": 0.002969,
    "ess_lib_left_15_24_tertiary_town_center": 0.007828,
    "ess_lib_left_25_39_secondary_large_town_center": 0.009448,
    "ess_lib_left_25_39_secondary_large_town_right": 0.002699,
    "ess_lib_left_25_39_secondary_rural_center": 0.004859,
    "ess_lib_left_25_39_secondary_town_center": 0.009718,
    "ess_lib_left_25_39_secondary_town_unknown": 0.011878,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.00054,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.006209,
    "ess_lib_left_25_39_tertiary_rural_center": 0.002969,
    "ess_lib_left_25_39_tertiary_rural_left": 0.003779,
    "ess_lib_left_25_39_tertiary_town_center": 0.009988,
    "ess_lib_left_40_54_secondary_large_town_center": 0.00081,
    "ess_lib_left_40_54_secondary_large_town_unknown": 0.004859,
    "ess_lib_left_40_54_secondary_rural_center": 0.00108,
    "ess_lib_left_40_54_secondary_rural_left": 0.00189,
    "ess_lib_left_40_54_secondary_rural_unknown": 0.002969,
    "ess_lib_left_40_54_secondary_town_center": 0.012148,
    "ess_lib_left_40_54_tertiary_rural_left": 0.005669,
    "ess_lib_left_40_54_tertiary_town_left": 0.003239,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.007559,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.00216,
    "ess_lib_left_55_plus_secondary_large_town_unknown": 0.009448,
    "ess_lib_left_55_plus_secondary_rural_center": 0.00054,
    "ess_lib_left_55_plus_secondary_rural_left": 0.004319,
    "ess_lib_left_55_plus_secondary_rural_right": 0.00081,
    "ess_lib_left_55_plus_secondary_town_center": 0.017817,
    "ess_lib_left_55_plus_secondary_town_left": 0.009178,
    "ess_lib_left_55_plus_secondary_town_right": 0.003509,
    "ess_lib_left_55_plus_secondary_town_unknown": 0.002969,
    "ess_lib_left_55_plus_tertiary_large_town_left": 0.00216,
    "ess_lib_left_55_plus_tertiary_rural_center": 0.003779,
    "ess_lib_left_55_plus_tertiary_rural_left": 0.002969,
    "ess_lib_right_15_24_lower_large_town_center": 0.002396,
    "ess_lib_right_15_24_lower_large_town_unknown": 0.000893,
    "ess_lib_right_15_24_lower_rural_unknown": 0.000975,
    "ess_lib_right_15_24_secondary_large_town_unknown": 0.000812,
    "ess_lib_right_15_24_tertiary_large_town_center": 0.001584,
    "ess_lib_right_15_24_tertiary_large_town_right": 0.001381,
    "ess_lib_right_15_24_tertiary_town_unknown": 0.001381,
    "ess_lib_right_25_39_secondary_large_town_right": 0.000893,
    "ess_lib_right_25_39_secondary_rural_right": 0.001949,
    "ess_lib_right_25_39_tertiary_rural_right": 0.002315,
    "ess_lib_right_25_39_tertiary_town_center": 0.001665,
    "ess_lib_right_25_39_tertiary_town_right": 0.001381,
    "ess_lib_right_40_54_secondary_large_town_center": 0.001624,
    "ess_lib_right_40_54_secondary_rural_center": 0.002071,
    "ess_lib_right_40_54_secondary_rural_right": 0.005158,
    "ess_lib_right_40_54_secondary_rural_unknown": 0.002274,
    "ess_lib_right_40_54_secondary_town_right": 0.003899,
    "ess_lib_right_40_54_secondary_town_unknown": 0.00065,
    "ess_lib_right_40_54_tertiary_large_town_center": 0.00199,
    "ess_lib_right_40_54_tertiary_large_town_right": 0.001015,
    "ess_lib_right_40_54_tertiary_rural_center": 0.001706,
    "ess_lib_right_40_54_tertiary_rural_unknown": 0.001665,
    "ess_lib_right_40_54_tertiary_town_right": 0.000772,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.001584,
    "ess_lib_right_55_plus_secondary_large_town_unknown": 0.00065,
    "ess_lib_right_55_plus_secondary_rural_center": 0.001949,
    "ess_lib_right_55_plus_secondary_rural_right": 0.0013,
    "ess_lib_right_55_plus_secondary_town_center": 0.001827,
    "ess_lib_right_55_plus_secondary_town_right": 0.004386,
    "ess_lib_right_55_plus_secondary_town_unknown": 0.001137,
    "ess_lib_right_55_plus_tertiary_rural_center": 0.00134,
    "ess_lib_right_55_plus_tertiary_rural_right": 0.000772,
    "ess_lib_right_55_plus_tertiary_town_right": 0.001868,
    "ess_trad_left_15_24_lower_rural_center": 0.022051,
    "ess_trad_left_15_24_secondary_large_town_center": 0.004474,
    "ess_trad_left_15_24_secondary_rural_center": 0.010546,
    "ess_trad_left_15_24_secondary_rural_unknown": 0.004794,
    "ess_trad_left_15_24_secondary_town_unknown": 0.001278,
    "ess_trad_left_25_39_secondary_large_town_center": 0.006392,
    "ess_trad_left_25_39_secondary_large_town_right": 0.000639,
    "ess_trad_left_25_39_secondary_rural_center": 0.001598,
    "ess_trad_left_25_39_secondary_rural_left": 0.010866,
    "ess_trad_left_25_39_secondary_rural_unknown": 0.000959,
    "ess_trad_left_25_39_secondary_town_center": 0.017257,
    "ess_trad_left_25_39_secondary_town_right": 0.001278,
    "ess_trad_left_25_39_tertiary_large_town_center": 0.000959,
    "ess_trad_left_25_39_tertiary_rural_right": 0.001278,
    "ess_trad_left_25_39_tertiary_town_center": 0.005433,
    "ess_trad_left_25_39_tertiary_town_left": 0.009907,
    "ess_trad_left_40_54_lower_town_center": 0.001278,
    "ess_trad_left_40_54_secondary_large_town_center": 0.01534,
    "ess_trad_left_40_54_secondary_large_town_left": 0.013742,
    "ess_trad_left_40_54_secondary_rural_center": 0.031638,
    "ess_trad_left_40_54_secondary_rural_left": 0.029721,
    "ess_trad_left_40_54_secondary_town_center": 0.00735,
    "ess_trad_left_40_54_secondary_town_left": 0.016618,
    "ess_trad_left_40_54_secondary_town_unknown": 0.005752,
    "ess_trad_left_40_54_tertiary_town_left": 0.000959,
    "ess_trad_left_55_plus_lower_large_town_left": 0.028442,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.023968,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.017257,
    "ess_trad_left_55_plus_secondary_rural_center": 0.010866,
    "ess_trad_left_55_plus_secondary_rural_left": 0.031958,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.000959,
    "ess_trad_left_55_plus_secondary_town_center": 0.029081,
    "ess_trad_left_55_plus_secondary_town_left": 0.008948,
    "ess_trad_left_55_plus_secondary_town_right": 0.003196,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.008309,
    "ess_trad_left_55_plus_tertiary_town_center": 0.004474,
    "ess_trad_right_15_24_lower_town_center": 0.000769,
    "ess_trad_right_15_24_secondary_large_town_right": 0.002856,
    "ess_trad_right_15_24_secondary_rural_center": 0.004394,
    "ess_trad_right_15_24_secondary_rural_unknown": 0.003845,
    "ess_trad_right_15_24_secondary_town_unknown": 0.001428,
    "ess_trad_right_25_39_secondary_large_town_right": 0.001098,
    "ess_trad_right_25_39_secondary_rural_center": 0.000879,
    "ess_trad_right_25_39_secondary_rural_right": 0.00681,
    "ess_trad_right_25_39_secondary_rural_unknown": 0.000549,
    "ess_trad_right_25_39_secondary_town_center": 0.002746,
    "ess_trad_right_25_39_secondary_town_right": 0.001977,
    "ess_trad_right_25_39_tertiary_large_town_center": 0.001208,
    "ess_trad_right_25_39_tertiary_large_town_right": 0.00703,
    "ess_trad_right_25_39_tertiary_rural_center": 0.002417,
    "ess_trad_right_25_39_tertiary_rural_right": 0.003186,
    "ess_trad_right_25_39_tertiary_town_right": 0.003954,
    "ess_trad_right_40_54_lower_town_center": 0.000549,
    "ess_trad_right_40_54_secondary_large_town_center": 0.008458,
    "ess_trad_right_40_54_secondary_rural_right": 0.006371,
    "ess_trad_right_40_54_secondary_rural_unknown": 0.002746,
    "ess_trad_right_40_54_secondary_town_center": 0.005273,
    "ess_trad_right_40_54_secondary_town_right": 0.005163,
    "ess_trad_right_40_54_secondary_town_unknown": 0.002087,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.001428,
    "ess_trad_right_40_54_tertiary_rural_left": 0.003515,
    "ess_trad_right_40_54_tertiary_town_unknown": 0.002087,
    "ess_trad_right_55_plus_secondary_large_town_center": 0.006591,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.001428,
    "ess_trad_right_55_plus_secondary_rural_center": 0.005492,
    "ess_trad_right_55_plus_secondary_rural_right": 0.013731,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.000989,
    "ess_trad_right_55_plus_secondary_town_center": 0.009996,
    "ess_trad_right_55_plus_secondary_town_right": 0.009337,
    "ess_trad_right_55_plus_secondary_town_unknown": 0.002417,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.001098,
    "ess_trad_right_55_plus_tertiary_large_town_right": 0.001867,
    "ess_trad_right_55_plus_tertiary_rural_right": 0.002526,
    "ess_trad_right_55_plus_tertiary_town_center": 0.001538
  },
  "karlovarsky": {
    "ess_center_15_24_lower_large_town_right": 0.001595,
    "ess_center_15_24_secondary_large_town_center": 0.000532,
    "ess_center_25_39_lower_large_town_unknown": 0.001418,
    "ess_center_25_39_secondary_large_town_center": 0.000886,
    "ess_center_25_39_secondary_large_town_right": 0.001241,
    "ess_center_25_39_secondary_rural_center": 0.001064,
    "ess_center_25_39_secondary_rural_left": 0.000886,
    "ess_center_25_39_secondary_town_center": 0.008509,
    "ess_center_25_39_secondary_town_right": 0.000709,
    "ess_center_25_39_tertiary_rural_unknown": 0.002127,
    "ess_center_40_54_secondary_large_town_center": 0.002836,
    "ess_center_40_54_secondary_large_town_left": 0.005673,
    "ess_center_40_54_secondary_large_town_unknown": 0.002304,
    "ess_center_40_54_secondary_rural_center": 0.006913,
    "ess_center_40_54_secondary_rural_right": 0.009041,
    "ess_center_40_54_secondary_town_center": 0.004077,
    "ess_center_40_54_secondary_town_left": 0.002836,
    "ess_center_40_54_secondary_town_right": 0.004786,
    "ess_center_40_54_tertiary_large_town_center": 0.002836,
    "ess_center_55_plus_lower_large_town_center": 0.009927,
    "ess_center_55_plus_secondary_large_town_center": 0.003545,
    "ess_center_55_plus_secondary_large_town_right": 0.000886,
    "ess_center_55_plus_secondary_rural_center": 0.002304,
    "ess_center_55_plus_secondary_town_center": 0.007268,
    "ess_center_55_plus_secondary_town_left": 0.001595,
    "ess_center_55_plus_secondary_town_right": 0.000709,
    "ess_lib_left_15_24_lower_large_town_right": 0.004495,
    "ess_lib_left_15_24_lower_town_center": 0.007992,
    "ess_lib_left_15_24_lower_town_unknown": 0.011488,
    "ess_lib_left_15_24_secondary_large_town_center": 0.001249,
    "ess_lib_left_15_24_secondary_large_town_right": 0.001998,
    "ess_lib_left_15_24_secondary_rural_center": 0.001249,
    "ess_lib_left_15_24_secondary_town_center": 0.004745,
    "ess_lib_left_15_24_secondary_town_unknown": 0.012487,
    "ess_lib_left_25_39_lower_town_unknown": 0.001249,
    "ess_lib_left_25_39_secondary_large_town_center": 0.002497,
    "ess_lib_left_25_39_secondary_large_town_left": 0.003996,
    "ess_lib_left_25_39_secondary_rural_center": 0.010239,
    "ess_lib_left_25_39_secondary_rural_left": 0.002248,
    "ess_lib_left_25_39_secondary_town_center": 0.006243,
    "ess_lib_left_25_39_secondary_town_left": 0.006743,
    "ess_lib_left_25_39_tertiary_town_center": 0.011488,
    "ess_lib_left_40_54_secondary_large_town_left": 0.007492,
    "ess_lib_left_40_54_secondary_large_town_right": 0.012986,
    "ess_lib_left_40_54_secondary_rural_center": 0.002747,
    "ess_lib_left_40_54_secondary_town_center": 0.013736,
    "ess_lib_left_40_54_secondary_town_left": 0.012986,
    "ess_lib_left_40_54_secondary_town_right": 0.000749,
    "ess_lib_left_40_54_secondary_town_unknown": 0.010239,
    "ess_lib_left_40_54_tertiary_large_town_left": 0.00924,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.005994,
    "ess_lib_left_55_plus_secondary_rural_center": 0.004495,
    "ess_lib_left_55_plus_secondary_rural_left": 0.001498,
    "ess_lib_left_55_plus_secondary_town_center": 0.007242,
    "ess_lib_left_55_plus_secondary_town_left": 0.011987,
    "ess_lib_left_55_plus_unknown_town_right": 0.004495,
    "ess_lib_right_15_24_lower_large_town_center": 0.000751,
    "ess_lib_right_15_24_lower_town_center": 0.00109,
    "ess_lib_right_15_24_secondary_rural_right": 0.001954,
    "ess_lib_right_15_24_secondary_town_right": 0.001916,
    "ess_lib_right_15_24_secondary_town_unknown": 0.000827,
    "ess_lib_right_25_39_lower_rural_center": 0.000601,
    "ess_lib_right_25_39_secondary_town_right": 0.000977,
    "ess_lib_right_40_54_secondary_large_town_center": 0.000977,
    "ess_lib_right_40_54_secondary_large_town_right": 0.00154,
    "ess_lib_right_40_54_secondary_rural_right": 0.001202,
    "ess_lib_right_40_54_secondary_town_center": 0.000639,
    "ess_lib_right_40_54_secondary_town_right": 0.00526,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.000564,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.002667,
    "ess_lib_right_55_plus_secondary_rural_right": 0.000827,
    "ess_lib_right_55_plus_secondary_town_center": 0.00154,
    "ess_lib_right_55_plus_secondary_town_right": 0.002743,
    "ess_trad_left_15_24_lower_large_town_unknown": 0.002661,
    "ess_trad_left_15_24_lower_town_unknown": 0.007096,
    "ess_trad_left_15_24_secondary_large_town_center": 0.001478,
    "ess_trad_left_15_24_secondary_large_town_unknown": 0.009461,
    "ess_trad_left_15_24_secondary_rural_center": 0.019217,
    "ess_trad_left_15_24_secondary_town_center": 0.015965,
    "ess_trad_left_15_24_secondary_town_unknown": 0.022469,
    "ess_trad_left_15_24_tertiary_large_town_center": 0.002957,
    "ess_trad_left_25_39_lower_large_town_unknown": 0.001183,
    "ess_trad_left_25_39_lower_town_unknown": 0.016852,
    "ess_trad_left_25_39_secondary_large_town_center": 0.008574,
    "ess_trad_left_25_39_secondary_large_town_unknown": 0.010643,
    "ess_trad_left_25_39_secondary_rural_center": 0.012122,
    "ess_trad_left_25_39_secondary_rural_unknown": 0.009756,
    "ess_trad_left_25_39_secondary_town_center": 0.01833,
    "ess_trad_left_25_39_secondary_town_left": 0.011235,
    "ess_trad_left_25_39_secondary_town_unknown": 0.000887,
    "ess_trad_left_25_39_tertiary_large_town_unknown": 0.002365,
    "ess_trad_left_40_54_secondary_large_town_center": 0.023061,
    "ess_trad_left_40_54_secondary_large_town_left": 0.003843,
    "ess_trad_left_40_54_secondary_large_town_right": 0.006209,
    "ess_trad_left_40_54_secondary_large_town_unknown": 0.006504,
    "ess_trad_left_40_54_secondary_rural_center": 0.023356,
    "ess_trad_left_40_54_secondary_rural_left": 0.015374,
    "ess_trad_left_40_54_secondary_town_center": 0.015374,
    "ess_trad_left_40_54_secondary_town_left": 0.004139,
    "ess_trad_left_40_54_secondary_town_right": 0.001478,
    "ess_trad_left_40_54_secondary_town_unknown": 0.00473,
    "ess_trad_left_40_54_tertiary_large_town_center": 0.001774,
    "ess_trad_left_40_54_tertiary_rural_left": 0.011235,
    "ess_trad_left_40_54_tertiary_town_center": 0.000887,
    "ess_trad_left_55_plus_lower_large_town_center": 0.071252,
    "ess_trad_left_55_plus_lower_town_center": 0.025722,
    "ess_trad_left_55_plus_lower_town_right": 0.025426,
    "ess_trad_left_55_plus_lower_town_unknown": 0.007687,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.019809,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.011235,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.00207,
    "ess_trad_left_55_plus_secondary_rural_center": 0.019217,
    "ess_trad_left_55_plus_secondary_rural_left": 0.014191,
    "ess_trad_left_55_plus_secondary_town_center": 0.012122,
    "ess_trad_left_55_plus_secondary_town_left": 0.032226,
    "ess_trad_left_55_plus_secondary_town_right": 0.001183,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.004139,
    "ess_trad_left_55_plus_tertiary_large_town_center": 0.002957,
    "ess_trad_left_55_plus_tertiary_large_town_left": 0.013009,
    "ess_trad_left_55_plus_tertiary_large_town_unknown": 0.001478,
    "ess_trad_left_55_plus_tertiary_town_center": 0.006209,
    "ess_trad_right_15_24_lower_large_town_unknown": 0.001219,
    "ess_trad_right_15_24_lower_rural_right": 0.004878,
    "ess_trad_right_15_24_lower_town_unknown": 0.000711,
    "ess_trad_right_15_24_secondary_large_town_unknown": 0.002337,
    "ess_trad_right_15_24_secondary_rural_center": 0.002439,
    "ess_trad_right_15_24_secondary_town_center": 0.00437,
    "ess_trad_right_15_24_secondary_town_unknown": 0.001423,
    "ess_trad_right_15_24_tertiary_large_town_center": 0.000915,
    "ess_trad_right_25_39_lower_rural_unknown": 0.002642,
    "ess_trad_right_25_39_secondary_large_town_center": 0.002744,
    "ess_trad_right_25_39_secondary_rural_center": 0.005996,
    "ess_trad_right_25_39_secondary_rural_right": 0.004776,
    "ess_trad_right_25_39_secondary_town_center": 0.003455,
    "ess_trad_right_25_39_secondary_town_unknown": 0.000508,
    "ess_trad_right_25_39_tertiary_large_town_unknown": 0.000508,
    "ess_trad_right_25_39_tertiary_town_center": 0.001829,
    "ess_trad_right_40_54_lower_large_town_center": 0.003354,
    "ess_trad_right_40_54_lower_rural_right": 0.002845,
    "ess_trad_right_40_54_lower_town_unknown": 0.001321,
    "ess_trad_right_40_54_secondary_large_town_center": 0.003862,
    "ess_trad_right_40_54_secondary_large_town_right": 0.005589,
    "ess_trad_right_40_54_secondary_large_town_unknown": 0.001931,
    "ess_trad_right_40_54_secondary_rural_center": 0.010975,
    "ess_trad_right_40_54_secondary_rural_right": 0.002032,
    "ess_trad_right_40_54_secondary_town_center": 0.002744,
    "ess_trad_right_40_54_secondary_town_left": 0.000508,
    "ess_trad_right_40_54_tertiary_large_town_center": 0.00315,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.002439,
    "ess_trad_right_40_54_tertiary_rural_right": 0.000711,
    "ess_trad_right_40_54_tertiary_town_center": 0.000508,
    "ess_trad_right_55_plus_lower_town_center": 0.008231,
    "ess_trad_right_55_plus_secondary_large_town_center": 0.005183,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.001931,
    "ess_trad_right_55_plus_secondary_large_town_unknown": 0.001423,
    "ess_trad_right_55_plus_secondary_rural_center": 0.007317,
    "ess_trad_right_55_plus_secondary_rural_right": 0.002541,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.001829,
    "ess_trad_right_55_plus_secondary_town_center": 0.007317,
    "ess_trad_right_55_plus_secondary_town_left": 0.00061,
    "ess_trad_right_55_plus_secondary_town_unknown": 0.00061,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.000813
  },
  "ustecky": {
    "ess_center_15_24_lower_large_town_right": 0.001595,
    "ess_center_15_24_secondary_large_town_center": 0.000532,
    "ess_center_25_39_lower_large_town_unknown": 0.001418,
    "ess_center_25_39_secondary_large_town_center": 0.000886,
    "ess_center_25_39_secondary_large_town_right": 0.001241,
    "ess_center_25_39_secondary_rural_center": 0.001064,
    "ess_center_25_39_secondary_rural_left": 0.000886,
    "ess_center_25_39_secondary_town_center": 0.008509,
    "ess_center_25_39_secondary_town_right": 0.000709,
    "ess_center_25_39_tertiary_rural_unknown": 0.002127,
    "ess_center_40_54_secondary_large_town_center": 0.002836,
    "ess_center_40_54_secondary_large_town_left": 0.005673,
    "ess_center_40_54_secondary_large_town_unknown": 0.002304,
    "ess_center_40_54_secondary_rural_center": 0.006913,
    "ess_center_40_54_secondary_rural_right": 0.009041,
    "ess_center_40_54_secondary_town_center": 0.004077,
    "ess_center_40_54_secondary_town_left": 0.002836,
    "ess_center_40_54_secondary_town_right": 0.004786,
    "ess_center_40_54_tertiary_large_town_center": 0.002836,
    "ess_center_55_plus_lower_large_town_center": 0.009927,
    "ess_center_55_plus_secondary_large_town_center": 0.003545,
    "ess_center_55_plus_secondary_large_town_right": 0.000886,
    "ess_center_55_plus_secondary_rural_center": 0.002304,
    "ess_center_55_plus_secondary_town_center": 0.007268,
    "ess_center_55_plus_secondary_town_left": 0.001595,
    "ess_center_55_plus_secondary_town_right": 0.000709,
    "ess_lib_left_15_24_lower_large_town_right": 0.004495,
    "ess_lib_left_15_24_lower_town_center": 0.007992,
    "ess_lib_left_15_24_lower_town_unknown": 0.011488,
    "ess_lib_left_15_24_secondary_large_town_center": 0.001249,
    "ess_lib_left_15_24_secondary_large_town_right": 0.001998,
    "ess_lib_left_15_24_secondary_rural_center": 0.001249,
    "ess_lib_left_15_24_secondary_town_center": 0.004745,
    "ess_lib_left_15_24_secondary_town_unknown": 0.012487,
    "ess_lib_left_25_39_lower_town_unknown": 0.001249,
    "ess_lib_left_25_39_secondary_large_town_center": 0.002497,
    "ess_lib_left_25_39_secondary_large_town_left": 0.003996,
    "ess_lib_left_25_39_secondary_rural_center": 0.010239,
    "ess_lib_left_25_39_secondary_rural_left": 0.002248,
    "ess_lib_left_25_39_secondary_town_center": 0.006243,
    "ess_lib_left_25_39_secondary_town_left": 0.006743,
    "ess_lib_left_25_39_tertiary_town_center": 0.011488,
    "ess_lib_left_40_54_secondary_large_town_left": 0.007492,
    "ess_lib_left_40_54_secondary_large_town_right": 0.012986,
    "ess_lib_left_40_54_secondary_rural_center": 0.002747,
    "ess_lib_left_40_54_secondary_town_center": 0.013736,
    "ess_lib_left_40_54_secondary_town_left": 0.012986,
    "ess_lib_left_40_54_secondary_town_right": 0.000749,
    "ess_lib_left_40_54_secondary_town_unknown": 0.010239,
    "ess_lib_left_40_54_tertiary_large_town_left": 0.00924,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.005994,
    "ess_lib_left_55_plus_secondary_rural_center": 0.004495,
    "ess_lib_left_55_plus_secondary_rural_left": 0.001498,
    "ess_lib_left_55_plus_secondary_town_center": 0.007242,
    "ess_lib_left_55_plus_secondary_town_left": 0.011987,
    "ess_lib_left_55_plus_unknown_town_right": 0.004495,
    "ess_lib_right_15_24_lower_large_town_center": 0.000751,
    "ess_lib_right_15_24_lower_town_center": 0.00109,
    "ess_lib_right_15_24_secondary_rural_right": 0.001954,
    "ess_lib_right_15_24_secondary_town_right": 0.001916,
    "ess_lib_right_15_24_secondary_town_unknown": 0.000827,
    "ess_lib_right_25_39_lower_rural_center": 0.000601,
    "ess_lib_right_25_39_secondary_town_right": 0.000977,
    "ess_lib_right_40_54_secondary_large_town_center": 0.000977,
    "ess_lib_right_40_54_secondary_large_town_right": 0.00154,
    "ess_lib_right_40_54_secondary_rural_right": 0.001202,
    "ess_lib_right_40_54_secondary_town_center": 0.000639,
    "ess_lib_right_40_54_secondary_town_right": 0.00526,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.000564,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.002667,
    "ess_lib_right_55_plus_secondary_rural_right": 0.000827,
    "ess_lib_right_55_plus_secondary_town_center": 0.00154,
    "ess_lib_right_55_plus_secondary_town_right": 0.002743,
    "ess_trad_left_15_24_lower_large_town_unknown": 0.002661,
    "ess_trad_left_15_24_lower_town_unknown": 0.007096,
    "ess_trad_left_15_24_secondary_large_town_center": 0.001478,
    "ess_trad_left_15_24_secondary_large_town_unknown": 0.009461,
    "ess_trad_left_15_24_secondary_rural_center": 0.019217,
    "ess_trad_left_15_24_secondary_town_center": 0.015965,
    "ess_trad_left_15_24_secondary_town_unknown": 0.022469,
    "ess_trad_left_15_24_tertiary_large_town_center": 0.002957,
    "ess_trad_left_25_39_lower_large_town_unknown": 0.001183,
    "ess_trad_left_25_39_lower_town_unknown": 0.016852,
    "ess_trad_left_25_39_secondary_large_town_center": 0.008574,
    "ess_trad_left_25_39_secondary_large_town_unknown": 0.010643,
    "ess_trad_left_25_39_secondary_rural_center": 0.012122,
    "ess_trad_left_25_39_secondary_rural_unknown": 0.009756,
    "ess_trad_left_25_39_secondary_town_center": 0.01833,
    "ess_trad_left_25_39_secondary_town_left": 0.011235,
    "ess_trad_left_25_39_secondary_town_unknown": 0.000887,
    "ess_trad_left_25_39_tertiary_large_town_unknown": 0.002365,
    "ess_trad_left_40_54_secondary_large_town_center": 0.023061,
    "ess_trad_left_40_54_secondary_large_town_left": 0.003843,
    "ess_trad_left_40_54_secondary_large_town_right": 0.006209,
    "ess_trad_left_40_54_secondary_large_town_unknown": 0.006504,
    "ess_trad_left_40_54_secondary_rural_center": 0.023356,
    "ess_trad_left_40_54_secondary_rural_left": 0.015374,
    "ess_trad_left_40_54_secondary_town_center": 0.015374,
    "ess_trad_left_40_54_secondary_town_left": 0.004139,
    "ess_trad_left_40_54_secondary_town_right": 0.001478,
    "ess_trad_left_40_54_secondary_town_unknown": 0.00473,
    "ess_trad_left_40_54_tertiary_large_town_center": 0.001774,
    "ess_trad_left_40_54_tertiary_rural_left": 0.011235,
    "ess_trad_left_40_54_tertiary_town_center": 0.000887,
    "ess_trad_left_55_plus_lower_large_town_center": 0.071252,
    "ess_trad_left_55_plus_lower_town_center": 0.025722,
    "ess_trad_left_55_plus_lower_town_right": 0.025426,
    "ess_trad_left_55_plus_lower_town_unknown": 0.007687,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.019809,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.011235,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.00207,
    "ess_trad_left_55_plus_secondary_rural_center": 0.019217,
    "ess_trad_left_55_plus_secondary_rural_left": 0.014191,
    "ess_trad_left_55_plus_secondary_town_center": 0.012122,
    "ess_trad_left_55_plus_secondary_town_left": 0.032226,
    "ess_trad_left_55_plus_secondary_town_right": 0.001183,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.004139,
    "ess_trad_left_55_plus_tertiary_large_town_center": 0.002957,
    "ess_trad_left_55_plus_tertiary_large_town_left": 0.013009,
    "ess_trad_left_55_plus_tertiary_large_town_unknown": 0.001478,
    "ess_trad_left_55_plus_tertiary_town_center": 0.006209,
    "ess_trad_right_15_24_lower_large_town_unknown": 0.001219,
    "ess_trad_right_15_24_lower_rural_right": 0.004878,
    "ess_trad_right_15_24_lower_town_unknown": 0.000711,
    "ess_trad_right_15_24_secondary_large_town_unknown": 0.002337,
    "ess_trad_right_15_24_secondary_rural_center": 0.002439,
    "ess_trad_right_15_24_secondary_town_center": 0.00437,
    "ess_trad_right_15_24_secondary_town_unknown": 0.001423,
    "ess_trad_right_15_24_tertiary_large_town_center": 0.000915,
    "ess_trad_right_25_39_lower_rural_unknown": 0.002642,
    "ess_trad_right_25_39_secondary_large_town_center": 0.002744,
    "ess_trad_right_25_39_secondary_rural_center": 0.005996,
    "ess_trad_right_25_39_secondary_rural_right": 0.004776,
    "ess_trad_right_25_39_secondary_town_center": 0.003455,
    "ess_trad_right_25_39_secondary_town_unknown": 0.000508,
    "ess_trad_right_25_39_tertiary_large_town_unknown": 0.000508,
    "ess_trad_right_25_39_tertiary_town_center": 0.001829,
    "ess_trad_right_40_54_lower_large_town_center": 0.003354,
    "ess_trad_right_40_54_lower_rural_right": 0.002845,
    "ess_trad_right_40_54_lower_town_unknown": 0.001321,
    "ess_trad_right_40_54_secondary_large_town_center": 0.003862,
    "ess_trad_right_40_54_secondary_large_town_right": 0.005589,
    "ess_trad_right_40_54_secondary_large_town_unknown": 0.001931,
    "ess_trad_right_40_54_secondary_rural_center": 0.010975,
    "ess_trad_right_40_54_secondary_rural_right": 0.002032,
    "ess_trad_right_40_54_secondary_town_center": 0.002744,
    "ess_trad_right_40_54_secondary_town_left": 0.000508,
    "ess_trad_right_40_54_tertiary_large_town_center": 0.00315,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.002439,
    "ess_trad_right_40_54_tertiary_rural_right": 0.000711,
    "ess_trad_right_40_54_tertiary_town_center": 0.000508,
    "ess_trad_right_55_plus_lower_town_center": 0.008231,
    "ess_trad_right_55_plus_secondary_large_town_center": 0.005183,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.001931,
    "ess_trad_right_55_plus_secondary_large_town_unknown": 0.001423,
    "ess_trad_right_55_plus_secondary_rural_center": 0.007317,
    "ess_trad_right_55_plus_secondary_rural_right": 0.002541,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.001829,
    "ess_trad_right_55_plus_secondary_town_center": 0.007317,
    "ess_trad_right_55_plus_secondary_town_left": 0.00061,
    "ess_trad_right_55_plus_secondary_town_unknown": 0.00061,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.000813
  },
  "liberecky": {
    "ess_center_15_24_lower_rural_center": 0.006191,
    "ess_center_15_24_lower_rural_unknown": 0.010268,
    "ess_center_15_24_lower_town_center": 0.008305,
    "ess_center_15_24_lower_town_right": 0.000755,
    "ess_center_15_24_lower_town_unknown": 0.000755,
    "ess_center_15_24_secondary_large_town_unknown": 0.00453,
    "ess_center_15_24_secondary_rural_center": 0.001661,
    "ess_center_15_24_secondary_town_center": 0.00302,
    "ess_center_15_24_secondary_town_right": 0.004077,
    "ess_center_15_24_secondary_town_unknown": 0.002869,
    "ess_center_25_39_secondary_large_town_center": 0.003322,
    "ess_center_25_39_secondary_large_town_right": 0.000604,
    "ess_center_25_39_secondary_rural_center": 0.002114,
    "ess_center_25_39_secondary_rural_left": 0.002114,
    "ess_center_25_39_secondary_rural_right": 0.001057,
    "ess_center_25_39_secondary_rural_unknown": 0.000755,
    "ess_center_25_39_secondary_town_center": 0.011778,
    "ess_center_25_39_secondary_town_right": 0.005436,
    "ess_center_25_39_secondary_town_unknown": 0.001963,
    "ess_center_25_39_tertiary_rural_center": 0.003624,
    "ess_center_25_39_tertiary_town_center": 0.000906,
    "ess_center_40_54_secondary_large_town_center": 0.002718,
    "ess_center_40_54_secondary_large_town_left": 0.002265,
    "ess_center_40_54_secondary_large_town_right": 0.001661,
    "ess_center_40_54_secondary_rural_center": 0.004077,
    "ess_center_40_54_secondary_rural_right": 0.005889,
    "ess_center_40_54_secondary_rural_unknown": 0.001812,
    "ess_center_40_54_secondary_town_center": 0.005134,
    "ess_center_40_54_secondary_town_right": 0.001812,
    "ess_center_40_54_secondary_town_unknown": 0.00151,
    "ess_center_40_54_tertiary_large_town_center": 0.004983,
    "ess_center_40_54_tertiary_large_town_right": 0.000906,
    "ess_center_40_54_tertiary_rural_center": 0.004379,
    "ess_center_40_54_tertiary_rural_left": 0.005889,
    "ess_center_40_54_tertiary_rural_right": 0.001057,
    "ess_center_40_54_tertiary_rural_unknown": 0.001812,
    "ess_center_40_54_tertiary_town_center": 0.000755,
    "ess_center_55_plus_lower_large_town_right": 0.005889,
    "ess_center_55_plus_lower_town_center": 0.008003,
    "ess_center_55_plus_secondary_large_town_center": 0.004983,
    "ess_center_55_plus_secondary_large_town_right": 0.004077,
    "ess_center_55_plus_secondary_rural_center": 0.00604,
    "ess_center_55_plus_secondary_rural_left": 0.00453,
    "ess_center_55_plus_secondary_rural_unknown": 0.006493,
    "ess_center_55_plus_secondary_town_center": 0.012986,
    "ess_center_55_plus_secondary_town_left": 0.003775,
    "ess_center_55_plus_secondary_town_right": 0.01359,
    "ess_center_55_plus_tertiary_large_town_center": 0.002265,
    "ess_center_55_plus_tertiary_town_center": 0.000906,
    "ess_center_55_plus_tertiary_town_left": 0.004832,
    "ess_lib_left_15_24_lower_rural_center": 0.007233,
    "ess_lib_left_15_24_lower_town_center": 0.003616,
    "ess_lib_left_15_24_lower_town_unknown": 0.003404,
    "ess_lib_left_15_24_secondary_town_center": 0.008509,
    "ess_lib_left_15_24_secondary_town_unknown": 0.001276,
    "ess_lib_left_15_24_tertiary_town_center": 0.005105,
    "ess_lib_left_25_39_lower_town_center": 0.007445,
    "ess_lib_left_25_39_secondary_large_town_center": 0.001915,
    "ess_lib_left_25_39_secondary_large_town_unknown": 0.002553,
    "ess_lib_left_25_39_secondary_rural_center": 0.00234,
    "ess_lib_left_25_39_secondary_rural_unknown": 0.008084,
    "ess_lib_left_25_39_secondary_town_center": 0.010849,
    "ess_lib_left_25_39_secondary_town_right": 0.002127,
    "ess_lib_left_25_39_secondary_town_unknown": 0.000638,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.003191,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.005956,
    "ess_lib_left_25_39_tertiary_town_left": 0.005318,
    "ess_lib_left_40_54_secondary_large_town_center": 0.002553,
    "ess_lib_left_40_54_secondary_large_town_left": 0.008509,
    "ess_lib_left_40_54_secondary_large_town_right": 0.00468,
    "ess_lib_left_40_54_secondary_large_town_unknown": 0.005956,
    "ess_lib_left_40_54_secondary_rural_center": 0.006807,
    "ess_lib_left_40_54_secondary_rural_left": 0.007871,
    "ess_lib_left_40_54_secondary_rural_right": 0.002127,
    "ess_lib_left_40_54_secondary_town_center": 0.006169,
    "ess_lib_left_40_54_secondary_town_left": 0.001064,
    "ess_lib_left_40_54_tertiary_large_town_left": 0.008296,
    "ess_lib_left_40_54_tertiary_rural_left": 0.000851,
    "ess_lib_left_40_54_tertiary_rural_right": 0.003191,
    "ess_lib_left_40_54_tertiary_town_left": 0.002553,
    "ess_lib_left_55_plus_lower_rural_unknown": 0.000638,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.011487,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.006382,
    "ess_lib_left_55_plus_secondary_large_town_unknown": 0.003191,
    "ess_lib_left_55_plus_secondary_rural_center": 0.002553,
    "ess_lib_left_55_plus_secondary_rural_left": 0.02106,
    "ess_lib_left_55_plus_secondary_rural_unknown": 0.001276,
    "ess_lib_left_55_plus_secondary_town_center": 0.01404,
    "ess_lib_left_55_plus_secondary_town_left": 0.004467,
    "ess_lib_left_55_plus_secondary_town_right": 0.002978,
    "ess_lib_left_55_plus_tertiary_large_town_left": 0.001915,
    "ess_lib_left_55_plus_tertiary_town_center": 0.000638,
    "ess_lib_right_15_24_lower_town_right": 0.002144,
    "ess_lib_right_15_24_secondary_large_town_right": 0.001568,
    "ess_lib_right_15_24_secondary_rural_center": 0.001024,
    "ess_lib_right_25_39_lower_town_right": 0.0008,
    "ess_lib_right_25_39_secondary_large_town_center": 0.0008,
    "ess_lib_right_25_39_secondary_large_town_right": 0.001184,
    "ess_lib_right_25_39_secondary_rural_center": 0.001504,
    "ess_lib_right_25_39_secondary_rural_right": 0.001664,
    "ess_lib_right_25_39_secondary_town_center": 0.000896,
    "ess_lib_right_25_39_secondary_town_right": 0.001728,
    "ess_lib_right_25_39_tertiary_large_town_unknown": 0.000672,
    "ess_lib_right_25_39_tertiary_rural_right": 0.001824,
    "ess_lib_right_25_39_tertiary_town_right": 0.001504,
    "ess_lib_right_40_54_secondary_large_town_center": 0.001248,
    "ess_lib_right_40_54_secondary_large_town_right": 0.001184,
    "ess_lib_right_40_54_secondary_rural_right": 0.003072,
    "ess_lib_right_40_54_secondary_town_center": 0.001536,
    "ess_lib_right_40_54_secondary_town_right": 0.00208,
    "ess_lib_right_40_54_tertiary_large_town_right": 0.002016,
    "ess_lib_right_40_54_tertiary_town_center": 0.00064,
    "ess_lib_right_40_54_tertiary_town_right": 0.000768,
    "ess_lib_right_40_54_tertiary_town_unknown": 0.000672,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.000992,
    "ess_lib_right_55_plus_secondary_rural_right": 0.002112,
    "ess_lib_right_55_plus_secondary_rural_unknown": 0.00128,
    "ess_lib_right_55_plus_secondary_town_center": 0.001056,
    "ess_lib_right_55_plus_secondary_town_right": 0.002816,
    "ess_lib_right_55_plus_tertiary_large_town_right": 0.00096,
    "ess_lib_right_55_plus_tertiary_town_right": 0.000832,
    "ess_trad_left_15_24_lower_rural_center": 0.002015,
    "ess_trad_left_15_24_lower_rural_unknown": 0.006548,
    "ess_trad_left_15_24_lower_town_unknown": 0.010325,
    "ess_trad_left_15_24_secondary_rural_center": 0.00277,
    "ess_trad_left_15_24_secondary_rural_left": 0.004281,
    "ess_trad_left_15_24_secondary_rural_unknown": 0.007555,
    "ess_trad_left_15_24_secondary_town_center": 0.000504,
    "ess_trad_left_15_24_secondary_town_unknown": 0.008059,
    "ess_trad_left_25_39_secondary_large_town_center": 0.006044,
    "ess_trad_left_25_39_secondary_large_town_unknown": 0.008562,
    "ess_trad_left_25_39_secondary_rural_center": 0.003022,
    "ess_trad_left_25_39_secondary_rural_left": 0.004785,
    "ess_trad_left_25_39_secondary_town_center": 0.000504,
    "ess_trad_left_25_39_secondary_town_left": 0.003022,
    "ess_trad_left_25_39_secondary_town_right": 0.000755,
    "ess_trad_left_25_39_secondary_town_unknown": 0.013347,
    "ess_trad_left_25_39_tertiary_rural_center": 0.006044,
    "ess_trad_left_25_39_tertiary_town_center": 0.00277,
    "ess_trad_left_40_54_secondary_large_town_left": 0.004281,
    "ess_trad_left_40_54_secondary_large_town_right": 0.002015,
    "ess_trad_left_40_54_secondary_large_town_unknown": 0.003526,
    "ess_trad_left_40_54_secondary_rural_center": 0.013095,
    "ess_trad_left_40_54_secondary_rural_right": 0.002266,
    "ess_trad_left_40_54_secondary_rural_unknown": 0.007303,
    "ess_trad_left_40_54_secondary_town_center": 0.016873,
    "ess_trad_left_40_54_secondary_town_left": 0.007555,
    "ess_trad_left_40_54_secondary_town_right": 0.003022,
    "ess_trad_left_40_54_secondary_town_unknown": 0.008814,
    "ess_trad_left_40_54_tertiary_large_town_center": 0.004533,
    "ess_trad_left_40_54_tertiary_rural_left": 0.002518,
    "ess_trad_left_40_54_tertiary_rural_unknown": 0.005288,
    "ess_trad_left_40_54_tertiary_town_left": 0.002015,
    "ess_trad_left_55_plus_lower_large_town_right": 0.00277,
    "ess_trad_left_55_plus_lower_rural_left": 0.020398,
    "ess_trad_left_55_plus_lower_rural_unknown": 0.022917,
    "ess_trad_left_55_plus_lower_town_unknown": 0.011332,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.005288,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.036012,
    "ess_trad_left_55_plus_secondary_large_town_right": 0.001007,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.00957,
    "ess_trad_left_55_plus_secondary_rural_center": 0.013851,
    "ess_trad_left_55_plus_secondary_rural_left": 0.020147,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.006296,
    "ess_trad_left_55_plus_secondary_town_center": 0.006044,
    "ess_trad_left_55_plus_secondary_town_left": 0.027702,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.006799,
    "ess_trad_left_55_plus_tertiary_large_town_unknown": 0.001007,
    "ess_trad_left_55_plus_tertiary_rural_left": 0.004533,
    "ess_trad_left_55_plus_tertiary_town_center": 0.000755,
    "ess_trad_left_55_plus_tertiary_town_left": 0.002518,
    "ess_trad_left_55_plus_tertiary_unknown_center": 0.001763,
    "ess_trad_right_15_24_lower_rural_unknown": 0.006752,
    "ess_trad_right_15_24_lower_town_right": 0.00251,
    "ess_trad_right_15_24_lower_town_unknown": 0.005194,
    "ess_trad_right_15_24_secondary_rural_center": 0.002251,
    "ess_trad_right_15_24_secondary_rural_unknown": 0.007531,
    "ess_trad_right_15_24_secondary_town_unknown": 0.001125,
    "ess_trad_right_15_24_tertiary_rural_right": 0.001991,
    "ess_trad_right_25_39_secondary_large_town_unknown": 0.001904,
    "ess_trad_right_25_39_secondary_rural_center": 0.002424,
    "ess_trad_right_25_39_secondary_rural_right": 0.001472,
    "ess_trad_right_25_39_secondary_rural_unknown": 0.000606,
    "ess_trad_right_25_39_secondary_town_center": 0.001385,
    "ess_trad_right_25_39_secondary_town_right": 0.000866,
    "ess_trad_right_25_39_tertiary_large_town_right": 0.00251,
    "ess_trad_right_25_39_tertiary_rural_center": 0.000866,
    "ess_trad_right_25_39_tertiary_rural_right": 0.002943,
    "ess_trad_right_25_39_tertiary_rural_unknown": 0.000952,
    "ess_trad_right_25_39_tertiary_town_right": 0.003462,
    "ess_trad_right_40_54_secondary_large_town_center": 0.001904,
    "ess_trad_right_40_54_secondary_large_town_right": 0.003289,
    "ess_trad_right_40_54_secondary_rural_center": 0.006665,
    "ess_trad_right_40_54_secondary_rural_right": 0.002077,
    "ess_trad_right_40_54_secondary_rural_unknown": 0.009175,
    "ess_trad_right_40_54_secondary_town_center": 0.007444,
    "ess_trad_right_40_54_secondary_town_right": 0.00528,
    "ess_trad_right_40_54_secondary_town_unknown": 0.00554,
    "ess_trad_right_40_54_tertiary_large_town_center": 0.000779,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.001472,
    "ess_trad_right_40_54_tertiary_rural_center": 0.001731,
    "ess_trad_right_40_54_tertiary_rural_right": 0.000519,
    "ess_trad_right_40_54_tertiary_rural_unknown": 0.001212,
    "ess_trad_right_40_54_tertiary_town_center": 0.000952,
    "ess_trad_right_55_plus_lower_rural_right": 0.003722,
    "ess_trad_right_55_plus_lower_rural_unknown": 0.004761,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.002077,
    "ess_trad_right_55_plus_secondary_large_town_unknown": 0.003722,
    "ess_trad_right_55_plus_secondary_rural_center": 0.004588,
    "ess_trad_right_55_plus_secondary_rural_left": 0.006232,
    "ess_trad_right_55_plus_secondary_rural_right": 0.005453,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.001991,
    "ess_trad_right_55_plus_secondary_town_center": 0.007531,
    "ess_trad_right_55_plus_secondary_town_right": 0.010128,
    "ess_trad_right_55_plus_secondary_town_unknown": 0.002597,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.002077,
    "ess_trad_right_55_plus_tertiary_rural_center": 0.001731,
    "ess_trad_right_55_plus_tertiary_town_center": 0.003722,
    "ess_trad_right_55_plus_tertiary_town_right": 0.002943,
    "ess_trad_right_55_plus_tertiary_town_unknown": 0.000519,
    "ess_trad_right_55_plus_tertiary_unknown_center": 0.000866
  },
  "kralovehradecky": {
    "ess_center_15_24_lower_rural_center": 0.006191,
    "ess_center_15_24_lower_rural_unknown": 0.010268,
    "ess_center_15_24_lower_town_center": 0.008305,
    "ess_center_15_24_lower_town_right": 0.000755,
    "ess_center_15_24_lower_town_unknown": 0.000755,
    "ess_center_15_24_secondary_large_town_unknown": 0.00453,
    "ess_center_15_24_secondary_rural_center": 0.001661,
    "ess_center_15_24_secondary_town_center": 0.00302,
    "ess_center_15_24_secondary_town_right": 0.004077,
    "ess_center_15_24_secondary_town_unknown": 0.002869,
    "ess_center_25_39_secondary_large_town_center": 0.003322,
    "ess_center_25_39_secondary_large_town_right": 0.000604,
    "ess_center_25_39_secondary_rural_center": 0.002114,
    "ess_center_25_39_secondary_rural_left": 0.002114,
    "ess_center_25_39_secondary_rural_right": 0.001057,
    "ess_center_25_39_secondary_rural_unknown": 0.000755,
    "ess_center_25_39_secondary_town_center": 0.011778,
    "ess_center_25_39_secondary_town_right": 0.005436,
    "ess_center_25_39_secondary_town_unknown": 0.001963,
    "ess_center_25_39_tertiary_rural_center": 0.003624,
    "ess_center_25_39_tertiary_town_center": 0.000906,
    "ess_center_40_54_secondary_large_town_center": 0.002718,
    "ess_center_40_54_secondary_large_town_left": 0.002265,
    "ess_center_40_54_secondary_large_town_right": 0.001661,
    "ess_center_40_54_secondary_rural_center": 0.004077,
    "ess_center_40_54_secondary_rural_right": 0.005889,
    "ess_center_40_54_secondary_rural_unknown": 0.001812,
    "ess_center_40_54_secondary_town_center": 0.005134,
    "ess_center_40_54_secondary_town_right": 0.001812,
    "ess_center_40_54_secondary_town_unknown": 0.00151,
    "ess_center_40_54_tertiary_large_town_center": 0.004983,
    "ess_center_40_54_tertiary_large_town_right": 0.000906,
    "ess_center_40_54_tertiary_rural_center": 0.004379,
    "ess_center_40_54_tertiary_rural_left": 0.005889,
    "ess_center_40_54_tertiary_rural_right": 0.001057,
    "ess_center_40_54_tertiary_rural_unknown": 0.001812,
    "ess_center_40_54_tertiary_town_center": 0.000755,
    "ess_center_55_plus_lower_large_town_right": 0.005889,
    "ess_center_55_plus_lower_town_center": 0.008003,
    "ess_center_55_plus_secondary_large_town_center": 0.004983,
    "ess_center_55_plus_secondary_large_town_right": 0.004077,
    "ess_center_55_plus_secondary_rural_center": 0.00604,
    "ess_center_55_plus_secondary_rural_left": 0.00453,
    "ess_center_55_plus_secondary_rural_unknown": 0.006493,
    "ess_center_55_plus_secondary_town_center": 0.012986,
    "ess_center_55_plus_secondary_town_left": 0.003775,
    "ess_center_55_plus_secondary_town_right": 0.01359,
    "ess_center_55_plus_tertiary_large_town_center": 0.002265,
    "ess_center_55_plus_tertiary_town_center": 0.000906,
    "ess_center_55_plus_tertiary_town_left": 0.004832,
    "ess_lib_left_15_24_lower_rural_center": 0.007233,
    "ess_lib_left_15_24_lower_town_center": 0.003616,
    "ess_lib_left_15_24_lower_town_unknown": 0.003404,
    "ess_lib_left_15_24_secondary_town_center": 0.008509,
    "ess_lib_left_15_24_secondary_town_unknown": 0.001276,
    "ess_lib_left_15_24_tertiary_town_center": 0.005105,
    "ess_lib_left_25_39_lower_town_center": 0.007445,
    "ess_lib_left_25_39_secondary_large_town_center": 0.001915,
    "ess_lib_left_25_39_secondary_large_town_unknown": 0.002553,
    "ess_lib_left_25_39_secondary_rural_center": 0.00234,
    "ess_lib_left_25_39_secondary_rural_unknown": 0.008084,
    "ess_lib_left_25_39_secondary_town_center": 0.010849,
    "ess_lib_left_25_39_secondary_town_right": 0.002127,
    "ess_lib_left_25_39_secondary_town_unknown": 0.000638,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.003191,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.005956,
    "ess_lib_left_25_39_tertiary_town_left": 0.005318,
    "ess_lib_left_40_54_secondary_large_town_center": 0.002553,
    "ess_lib_left_40_54_secondary_large_town_left": 0.008509,
    "ess_lib_left_40_54_secondary_large_town_right": 0.00468,
    "ess_lib_left_40_54_secondary_large_town_unknown": 0.005956,
    "ess_lib_left_40_54_secondary_rural_center": 0.006807,
    "ess_lib_left_40_54_secondary_rural_left": 0.007871,
    "ess_lib_left_40_54_secondary_rural_right": 0.002127,
    "ess_lib_left_40_54_secondary_town_center": 0.006169,
    "ess_lib_left_40_54_secondary_town_left": 0.001064,
    "ess_lib_left_40_54_tertiary_large_town_left": 0.008296,
    "ess_lib_left_40_54_tertiary_rural_left": 0.000851,
    "ess_lib_left_40_54_tertiary_rural_right": 0.003191,
    "ess_lib_left_40_54_tertiary_town_left": 0.002553,
    "ess_lib_left_55_plus_lower_rural_unknown": 0.000638,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.011487,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.006382,
    "ess_lib_left_55_plus_secondary_large_town_unknown": 0.003191,
    "ess_lib_left_55_plus_secondary_rural_center": 0.002553,
    "ess_lib_left_55_plus_secondary_rural_left": 0.02106,
    "ess_lib_left_55_plus_secondary_rural_unknown": 0.001276,
    "ess_lib_left_55_plus_secondary_town_center": 0.01404,
    "ess_lib_left_55_plus_secondary_town_left": 0.004467,
    "ess_lib_left_55_plus_secondary_town_right": 0.002978,
    "ess_lib_left_55_plus_tertiary_large_town_left": 0.001915,
    "ess_lib_left_55_plus_tertiary_town_center": 0.000638,
    "ess_lib_right_15_24_lower_town_right": 0.002144,
    "ess_lib_right_15_24_secondary_large_town_right": 0.001568,
    "ess_lib_right_15_24_secondary_rural_center": 0.001024,
    "ess_lib_right_25_39_lower_town_right": 0.0008,
    "ess_lib_right_25_39_secondary_large_town_center": 0.0008,
    "ess_lib_right_25_39_secondary_large_town_right": 0.001184,
    "ess_lib_right_25_39_secondary_rural_center": 0.001504,
    "ess_lib_right_25_39_secondary_rural_right": 0.001664,
    "ess_lib_right_25_39_secondary_town_center": 0.000896,
    "ess_lib_right_25_39_secondary_town_right": 0.001728,
    "ess_lib_right_25_39_tertiary_large_town_unknown": 0.000672,
    "ess_lib_right_25_39_tertiary_rural_right": 0.001824,
    "ess_lib_right_25_39_tertiary_town_right": 0.001504,
    "ess_lib_right_40_54_secondary_large_town_center": 0.001248,
    "ess_lib_right_40_54_secondary_large_town_right": 0.001184,
    "ess_lib_right_40_54_secondary_rural_right": 0.003072,
    "ess_lib_right_40_54_secondary_town_center": 0.001536,
    "ess_lib_right_40_54_secondary_town_right": 0.00208,
    "ess_lib_right_40_54_tertiary_large_town_right": 0.002016,
    "ess_lib_right_40_54_tertiary_town_center": 0.00064,
    "ess_lib_right_40_54_tertiary_town_right": 0.000768,
    "ess_lib_right_40_54_tertiary_town_unknown": 0.000672,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.000992,
    "ess_lib_right_55_plus_secondary_rural_right": 0.002112,
    "ess_lib_right_55_plus_secondary_rural_unknown": 0.00128,
    "ess_lib_right_55_plus_secondary_town_center": 0.001056,
    "ess_lib_right_55_plus_secondary_town_right": 0.002816,
    "ess_lib_right_55_plus_tertiary_large_town_right": 0.00096,
    "ess_lib_right_55_plus_tertiary_town_right": 0.000832,
    "ess_trad_left_15_24_lower_rural_center": 0.002015,
    "ess_trad_left_15_24_lower_rural_unknown": 0.006548,
    "ess_trad_left_15_24_lower_town_unknown": 0.010325,
    "ess_trad_left_15_24_secondary_rural_center": 0.00277,
    "ess_trad_left_15_24_secondary_rural_left": 0.004281,
    "ess_trad_left_15_24_secondary_rural_unknown": 0.007555,
    "ess_trad_left_15_24_secondary_town_center": 0.000504,
    "ess_trad_left_15_24_secondary_town_unknown": 0.008059,
    "ess_trad_left_25_39_secondary_large_town_center": 0.006044,
    "ess_trad_left_25_39_secondary_large_town_unknown": 0.008562,
    "ess_trad_left_25_39_secondary_rural_center": 0.003022,
    "ess_trad_left_25_39_secondary_rural_left": 0.004785,
    "ess_trad_left_25_39_secondary_town_center": 0.000504,
    "ess_trad_left_25_39_secondary_town_left": 0.003022,
    "ess_trad_left_25_39_secondary_town_right": 0.000755,
    "ess_trad_left_25_39_secondary_town_unknown": 0.013347,
    "ess_trad_left_25_39_tertiary_rural_center": 0.006044,
    "ess_trad_left_25_39_tertiary_town_center": 0.00277,
    "ess_trad_left_40_54_secondary_large_town_left": 0.004281,
    "ess_trad_left_40_54_secondary_large_town_right": 0.002015,
    "ess_trad_left_40_54_secondary_large_town_unknown": 0.003526,
    "ess_trad_left_40_54_secondary_rural_center": 0.013095,
    "ess_trad_left_40_54_secondary_rural_right": 0.002266,
    "ess_trad_left_40_54_secondary_rural_unknown": 0.007303,
    "ess_trad_left_40_54_secondary_town_center": 0.016873,
    "ess_trad_left_40_54_secondary_town_left": 0.007555,
    "ess_trad_left_40_54_secondary_town_right": 0.003022,
    "ess_trad_left_40_54_secondary_town_unknown": 0.008814,
    "ess_trad_left_40_54_tertiary_large_town_center": 0.004533,
    "ess_trad_left_40_54_tertiary_rural_left": 0.002518,
    "ess_trad_left_40_54_tertiary_rural_unknown": 0.005288,
    "ess_trad_left_40_54_tertiary_town_left": 0.002015,
    "ess_trad_left_55_plus_lower_large_town_right": 0.00277,
    "ess_trad_left_55_plus_lower_rural_left": 0.020398,
    "ess_trad_left_55_plus_lower_rural_unknown": 0.022917,
    "ess_trad_left_55_plus_lower_town_unknown": 0.011332,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.005288,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.036012,
    "ess_trad_left_55_plus_secondary_large_town_right": 0.001007,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.00957,
    "ess_trad_left_55_plus_secondary_rural_center": 0.013851,
    "ess_trad_left_55_plus_secondary_rural_left": 0.020147,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.006296,
    "ess_trad_left_55_plus_secondary_town_center": 0.006044,
    "ess_trad_left_55_plus_secondary_town_left": 0.027702,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.006799,
    "ess_trad_left_55_plus_tertiary_large_town_unknown": 0.001007,
    "ess_trad_left_55_plus_tertiary_rural_left": 0.004533,
    "ess_trad_left_55_plus_tertiary_town_center": 0.000755,
    "ess_trad_left_55_plus_tertiary_town_left": 0.002518,
    "ess_trad_left_55_plus_tertiary_unknown_center": 0.001763,
    "ess_trad_right_15_24_lower_rural_unknown": 0.006752,
    "ess_trad_right_15_24_lower_town_right": 0.00251,
    "ess_trad_right_15_24_lower_town_unknown": 0.005194,
    "ess_trad_right_15_24_secondary_rural_center": 0.002251,
    "ess_trad_right_15_24_secondary_rural_unknown": 0.007531,
    "ess_trad_right_15_24_secondary_town_unknown": 0.001125,
    "ess_trad_right_15_24_tertiary_rural_right": 0.001991,
    "ess_trad_right_25_39_secondary_large_town_unknown": 0.001904,
    "ess_trad_right_25_39_secondary_rural_center": 0.002424,
    "ess_trad_right_25_39_secondary_rural_right": 0.001472,
    "ess_trad_right_25_39_secondary_rural_unknown": 0.000606,
    "ess_trad_right_25_39_secondary_town_center": 0.001385,
    "ess_trad_right_25_39_secondary_town_right": 0.000866,
    "ess_trad_right_25_39_tertiary_large_town_right": 0.00251,
    "ess_trad_right_25_39_tertiary_rural_center": 0.000866,
    "ess_trad_right_25_39_tertiary_rural_right": 0.002943,
    "ess_trad_right_25_39_tertiary_rural_unknown": 0.000952,
    "ess_trad_right_25_39_tertiary_town_right": 0.003462,
    "ess_trad_right_40_54_secondary_large_town_center": 0.001904,
    "ess_trad_right_40_54_secondary_large_town_right": 0.003289,
    "ess_trad_right_40_54_secondary_rural_center": 0.006665,
    "ess_trad_right_40_54_secondary_rural_right": 0.002077,
    "ess_trad_right_40_54_secondary_rural_unknown": 0.009175,
    "ess_trad_right_40_54_secondary_town_center": 0.007444,
    "ess_trad_right_40_54_secondary_town_right": 0.00528,
    "ess_trad_right_40_54_secondary_town_unknown": 0.00554,
    "ess_trad_right_40_54_tertiary_large_town_center": 0.000779,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.001472,
    "ess_trad_right_40_54_tertiary_rural_center": 0.001731,
    "ess_trad_right_40_54_tertiary_rural_right": 0.000519,
    "ess_trad_right_40_54_tertiary_rural_unknown": 0.001212,
    "ess_trad_right_40_54_tertiary_town_center": 0.000952,
    "ess_trad_right_55_plus_lower_rural_right": 0.003722,
    "ess_trad_right_55_plus_lower_rural_unknown": 0.004761,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.002077,
    "ess_trad_right_55_plus_secondary_large_town_unknown": 0.003722,
    "ess_trad_right_55_plus_secondary_rural_center": 0.004588,
    "ess_trad_right_55_plus_secondary_rural_left": 0.006232,
    "ess_trad_right_55_plus_secondary_rural_right": 0.005453,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.001991,
    "ess_trad_right_55_plus_secondary_town_center": 0.007531,
    "ess_trad_right_55_plus_secondary_town_right": 0.010128,
    "ess_trad_right_55_plus_secondary_town_unknown": 0.002597,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.002077,
    "ess_trad_right_55_plus_tertiary_rural_center": 0.001731,
    "ess_trad_right_55_plus_tertiary_town_center": 0.003722,
    "ess_trad_right_55_plus_tertiary_town_right": 0.002943,
    "ess_trad_right_55_plus_tertiary_town_unknown": 0.000519,
    "ess_trad_right_55_plus_tertiary_unknown_center": 0.000866
  },
  "pardubicky": {
    "ess_center_15_24_lower_rural_center": 0.006191,
    "ess_center_15_24_lower_rural_unknown": 0.010268,
    "ess_center_15_24_lower_town_center": 0.008305,
    "ess_center_15_24_lower_town_right": 0.000755,
    "ess_center_15_24_lower_town_unknown": 0.000755,
    "ess_center_15_24_secondary_large_town_unknown": 0.00453,
    "ess_center_15_24_secondary_rural_center": 0.001661,
    "ess_center_15_24_secondary_town_center": 0.00302,
    "ess_center_15_24_secondary_town_right": 0.004077,
    "ess_center_15_24_secondary_town_unknown": 0.002869,
    "ess_center_25_39_secondary_large_town_center": 0.003322,
    "ess_center_25_39_secondary_large_town_right": 0.000604,
    "ess_center_25_39_secondary_rural_center": 0.002114,
    "ess_center_25_39_secondary_rural_left": 0.002114,
    "ess_center_25_39_secondary_rural_right": 0.001057,
    "ess_center_25_39_secondary_rural_unknown": 0.000755,
    "ess_center_25_39_secondary_town_center": 0.011778,
    "ess_center_25_39_secondary_town_right": 0.005436,
    "ess_center_25_39_secondary_town_unknown": 0.001963,
    "ess_center_25_39_tertiary_rural_center": 0.003624,
    "ess_center_25_39_tertiary_town_center": 0.000906,
    "ess_center_40_54_secondary_large_town_center": 0.002718,
    "ess_center_40_54_secondary_large_town_left": 0.002265,
    "ess_center_40_54_secondary_large_town_right": 0.001661,
    "ess_center_40_54_secondary_rural_center": 0.004077,
    "ess_center_40_54_secondary_rural_right": 0.005889,
    "ess_center_40_54_secondary_rural_unknown": 0.001812,
    "ess_center_40_54_secondary_town_center": 0.005134,
    "ess_center_40_54_secondary_town_right": 0.001812,
    "ess_center_40_54_secondary_town_unknown": 0.00151,
    "ess_center_40_54_tertiary_large_town_center": 0.004983,
    "ess_center_40_54_tertiary_large_town_right": 0.000906,
    "ess_center_40_54_tertiary_rural_center": 0.004379,
    "ess_center_40_54_tertiary_rural_left": 0.005889,
    "ess_center_40_54_tertiary_rural_right": 0.001057,
    "ess_center_40_54_tertiary_rural_unknown": 0.001812,
    "ess_center_40_54_tertiary_town_center": 0.000755,
    "ess_center_55_plus_lower_large_town_right": 0.005889,
    "ess_center_55_plus_lower_town_center": 0.008003,
    "ess_center_55_plus_secondary_large_town_center": 0.004983,
    "ess_center_55_plus_secondary_large_town_right": 0.004077,
    "ess_center_55_plus_secondary_rural_center": 0.00604,
    "ess_center_55_plus_secondary_rural_left": 0.00453,
    "ess_center_55_plus_secondary_rural_unknown": 0.006493,
    "ess_center_55_plus_secondary_town_center": 0.012986,
    "ess_center_55_plus_secondary_town_left": 0.003775,
    "ess_center_55_plus_secondary_town_right": 0.01359,
    "ess_center_55_plus_tertiary_large_town_center": 0.002265,
    "ess_center_55_plus_tertiary_town_center": 0.000906,
    "ess_center_55_plus_tertiary_town_left": 0.004832,
    "ess_lib_left_15_24_lower_rural_center": 0.007233,
    "ess_lib_left_15_24_lower_town_center": 0.003616,
    "ess_lib_left_15_24_lower_town_unknown": 0.003404,
    "ess_lib_left_15_24_secondary_town_center": 0.008509,
    "ess_lib_left_15_24_secondary_town_unknown": 0.001276,
    "ess_lib_left_15_24_tertiary_town_center": 0.005105,
    "ess_lib_left_25_39_lower_town_center": 0.007445,
    "ess_lib_left_25_39_secondary_large_town_center": 0.001915,
    "ess_lib_left_25_39_secondary_large_town_unknown": 0.002553,
    "ess_lib_left_25_39_secondary_rural_center": 0.00234,
    "ess_lib_left_25_39_secondary_rural_unknown": 0.008084,
    "ess_lib_left_25_39_secondary_town_center": 0.010849,
    "ess_lib_left_25_39_secondary_town_right": 0.002127,
    "ess_lib_left_25_39_secondary_town_unknown": 0.000638,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.003191,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.005956,
    "ess_lib_left_25_39_tertiary_town_left": 0.005318,
    "ess_lib_left_40_54_secondary_large_town_center": 0.002553,
    "ess_lib_left_40_54_secondary_large_town_left": 0.008509,
    "ess_lib_left_40_54_secondary_large_town_right": 0.00468,
    "ess_lib_left_40_54_secondary_large_town_unknown": 0.005956,
    "ess_lib_left_40_54_secondary_rural_center": 0.006807,
    "ess_lib_left_40_54_secondary_rural_left": 0.007871,
    "ess_lib_left_40_54_secondary_rural_right": 0.002127,
    "ess_lib_left_40_54_secondary_town_center": 0.006169,
    "ess_lib_left_40_54_secondary_town_left": 0.001064,
    "ess_lib_left_40_54_tertiary_large_town_left": 0.008296,
    "ess_lib_left_40_54_tertiary_rural_left": 0.000851,
    "ess_lib_left_40_54_tertiary_rural_right": 0.003191,
    "ess_lib_left_40_54_tertiary_town_left": 0.002553,
    "ess_lib_left_55_plus_lower_rural_unknown": 0.000638,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.011487,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.006382,
    "ess_lib_left_55_plus_secondary_large_town_unknown": 0.003191,
    "ess_lib_left_55_plus_secondary_rural_center": 0.002553,
    "ess_lib_left_55_plus_secondary_rural_left": 0.02106,
    "ess_lib_left_55_plus_secondary_rural_unknown": 0.001276,
    "ess_lib_left_55_plus_secondary_town_center": 0.01404,
    "ess_lib_left_55_plus_secondary_town_left": 0.004467,
    "ess_lib_left_55_plus_secondary_town_right": 0.002978,
    "ess_lib_left_55_plus_tertiary_large_town_left": 0.001915,
    "ess_lib_left_55_plus_tertiary_town_center": 0.000638,
    "ess_lib_right_15_24_lower_town_right": 0.002144,
    "ess_lib_right_15_24_secondary_large_town_right": 0.001568,
    "ess_lib_right_15_24_secondary_rural_center": 0.001024,
    "ess_lib_right_25_39_lower_town_right": 0.0008,
    "ess_lib_right_25_39_secondary_large_town_center": 0.0008,
    "ess_lib_right_25_39_secondary_large_town_right": 0.001184,
    "ess_lib_right_25_39_secondary_rural_center": 0.001504,
    "ess_lib_right_25_39_secondary_rural_right": 0.001664,
    "ess_lib_right_25_39_secondary_town_center": 0.000896,
    "ess_lib_right_25_39_secondary_town_right": 0.001728,
    "ess_lib_right_25_39_tertiary_large_town_unknown": 0.000672,
    "ess_lib_right_25_39_tertiary_rural_right": 0.001824,
    "ess_lib_right_25_39_tertiary_town_right": 0.001504,
    "ess_lib_right_40_54_secondary_large_town_center": 0.001248,
    "ess_lib_right_40_54_secondary_large_town_right": 0.001184,
    "ess_lib_right_40_54_secondary_rural_right": 0.003072,
    "ess_lib_right_40_54_secondary_town_center": 0.001536,
    "ess_lib_right_40_54_secondary_town_right": 0.00208,
    "ess_lib_right_40_54_tertiary_large_town_right": 0.002016,
    "ess_lib_right_40_54_tertiary_town_center": 0.00064,
    "ess_lib_right_40_54_tertiary_town_right": 0.000768,
    "ess_lib_right_40_54_tertiary_town_unknown": 0.000672,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.000992,
    "ess_lib_right_55_plus_secondary_rural_right": 0.002112,
    "ess_lib_right_55_plus_secondary_rural_unknown": 0.00128,
    "ess_lib_right_55_plus_secondary_town_center": 0.001056,
    "ess_lib_right_55_plus_secondary_town_right": 0.002816,
    "ess_lib_right_55_plus_tertiary_large_town_right": 0.00096,
    "ess_lib_right_55_plus_tertiary_town_right": 0.000832,
    "ess_trad_left_15_24_lower_rural_center": 0.002015,
    "ess_trad_left_15_24_lower_rural_unknown": 0.006548,
    "ess_trad_left_15_24_lower_town_unknown": 0.010325,
    "ess_trad_left_15_24_secondary_rural_center": 0.00277,
    "ess_trad_left_15_24_secondary_rural_left": 0.004281,
    "ess_trad_left_15_24_secondary_rural_unknown": 0.007555,
    "ess_trad_left_15_24_secondary_town_center": 0.000504,
    "ess_trad_left_15_24_secondary_town_unknown": 0.008059,
    "ess_trad_left_25_39_secondary_large_town_center": 0.006044,
    "ess_trad_left_25_39_secondary_large_town_unknown": 0.008562,
    "ess_trad_left_25_39_secondary_rural_center": 0.003022,
    "ess_trad_left_25_39_secondary_rural_left": 0.004785,
    "ess_trad_left_25_39_secondary_town_center": 0.000504,
    "ess_trad_left_25_39_secondary_town_left": 0.003022,
    "ess_trad_left_25_39_secondary_town_right": 0.000755,
    "ess_trad_left_25_39_secondary_town_unknown": 0.013347,
    "ess_trad_left_25_39_tertiary_rural_center": 0.006044,
    "ess_trad_left_25_39_tertiary_town_center": 0.00277,
    "ess_trad_left_40_54_secondary_large_town_left": 0.004281,
    "ess_trad_left_40_54_secondary_large_town_right": 0.002015,
    "ess_trad_left_40_54_secondary_large_town_unknown": 0.003526,
    "ess_trad_left_40_54_secondary_rural_center": 0.013095,
    "ess_trad_left_40_54_secondary_rural_right": 0.002266,
    "ess_trad_left_40_54_secondary_rural_unknown": 0.007303,
    "ess_trad_left_40_54_secondary_town_center": 0.016873,
    "ess_trad_left_40_54_secondary_town_left": 0.007555,
    "ess_trad_left_40_54_secondary_town_right": 0.003022,
    "ess_trad_left_40_54_secondary_town_unknown": 0.008814,
    "ess_trad_left_40_54_tertiary_large_town_center": 0.004533,
    "ess_trad_left_40_54_tertiary_rural_left": 0.002518,
    "ess_trad_left_40_54_tertiary_rural_unknown": 0.005288,
    "ess_trad_left_40_54_tertiary_town_left": 0.002015,
    "ess_trad_left_55_plus_lower_large_town_right": 0.00277,
    "ess_trad_left_55_plus_lower_rural_left": 0.020398,
    "ess_trad_left_55_plus_lower_rural_unknown": 0.022917,
    "ess_trad_left_55_plus_lower_town_unknown": 0.011332,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.005288,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.036012,
    "ess_trad_left_55_plus_secondary_large_town_right": 0.001007,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.00957,
    "ess_trad_left_55_plus_secondary_rural_center": 0.013851,
    "ess_trad_left_55_plus_secondary_rural_left": 0.020147,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.006296,
    "ess_trad_left_55_plus_secondary_town_center": 0.006044,
    "ess_trad_left_55_plus_secondary_town_left": 0.027702,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.006799,
    "ess_trad_left_55_plus_tertiary_large_town_unknown": 0.001007,
    "ess_trad_left_55_plus_tertiary_rural_left": 0.004533,
    "ess_trad_left_55_plus_tertiary_town_center": 0.000755,
    "ess_trad_left_55_plus_tertiary_town_left": 0.002518,
    "ess_trad_left_55_plus_tertiary_unknown_center": 0.001763,
    "ess_trad_right_15_24_lower_rural_unknown": 0.006752,
    "ess_trad_right_15_24_lower_town_right": 0.00251,
    "ess_trad_right_15_24_lower_town_unknown": 0.005194,
    "ess_trad_right_15_24_secondary_rural_center": 0.002251,
    "ess_trad_right_15_24_secondary_rural_unknown": 0.007531,
    "ess_trad_right_15_24_secondary_town_unknown": 0.001125,
    "ess_trad_right_15_24_tertiary_rural_right": 0.001991,
    "ess_trad_right_25_39_secondary_large_town_unknown": 0.001904,
    "ess_trad_right_25_39_secondary_rural_center": 0.002424,
    "ess_trad_right_25_39_secondary_rural_right": 0.001472,
    "ess_trad_right_25_39_secondary_rural_unknown": 0.000606,
    "ess_trad_right_25_39_secondary_town_center": 0.001385,
    "ess_trad_right_25_39_secondary_town_right": 0.000866,
    "ess_trad_right_25_39_tertiary_large_town_right": 0.00251,
    "ess_trad_right_25_39_tertiary_rural_center": 0.000866,
    "ess_trad_right_25_39_tertiary_rural_right": 0.002943,
    "ess_trad_right_25_39_tertiary_rural_unknown": 0.000952,
    "ess_trad_right_25_39_tertiary_town_right": 0.003462,
    "ess_trad_right_40_54_secondary_large_town_center": 0.001904,
    "ess_trad_right_40_54_secondary_large_town_right": 0.003289,
    "ess_trad_right_40_54_secondary_rural_center": 0.006665,
    "ess_trad_right_40_54_secondary_rural_right": 0.002077,
    "ess_trad_right_40_54_secondary_rural_unknown": 0.009175,
    "ess_trad_right_40_54_secondary_town_center": 0.007444,
    "ess_trad_right_40_54_secondary_town_right": 0.00528,
    "ess_trad_right_40_54_secondary_town_unknown": 0.00554,
    "ess_trad_right_40_54_tertiary_large_town_center": 0.000779,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.001472,
    "ess_trad_right_40_54_tertiary_rural_center": 0.001731,
    "ess_trad_right_40_54_tertiary_rural_right": 0.000519,
    "ess_trad_right_40_54_tertiary_rural_unknown": 0.001212,
    "ess_trad_right_40_54_tertiary_town_center": 0.000952,
    "ess_trad_right_55_plus_lower_rural_right": 0.003722,
    "ess_trad_right_55_plus_lower_rural_unknown": 0.004761,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.002077,
    "ess_trad_right_55_plus_secondary_large_town_unknown": 0.003722,
    "ess_trad_right_55_plus_secondary_rural_center": 0.004588,
    "ess_trad_right_55_plus_secondary_rural_left": 0.006232,
    "ess_trad_right_55_plus_secondary_rural_right": 0.005453,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.001991,
    "ess_trad_right_55_plus_secondary_town_center": 0.007531,
    "ess_trad_right_55_plus_secondary_town_right": 0.010128,
    "ess_trad_right_55_plus_secondary_town_unknown": 0.002597,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.002077,
    "ess_trad_right_55_plus_tertiary_rural_center": 0.001731,
    "ess_trad_right_55_plus_tertiary_town_center": 0.003722,
    "ess_trad_right_55_plus_tertiary_town_right": 0.002943,
    "ess_trad_right_55_plus_tertiary_town_unknown": 0.000519,
    "ess_trad_right_55_plus_tertiary_unknown_center": 0.000866
  },
  "vysocina": {
    "ess_center_15_24_lower_large_town_center": 0.00055,
    "ess_center_15_24_lower_large_town_right": 0.002419,
    "ess_center_15_24_lower_rural_center": 0.001979,
    "ess_center_15_24_lower_rural_unknown": 0.001979,
    "ess_center_15_24_secondary_large_town_right": 0.00055,
    "ess_center_15_24_secondary_large_town_unknown": 0.002969,
    "ess_center_15_24_secondary_rural_center": 0.003409,
    "ess_center_15_24_secondary_rural_unknown": 0.00143,
    "ess_center_15_24_secondary_town_center": 0.004729,
    "ess_center_15_24_tertiary_rural_center": 0.002309,
    "ess_center_25_39_secondary_large_town_center": 0.00143,
    "ess_center_25_39_secondary_large_town_right": 0.00077,
    "ess_center_25_39_secondary_rural_right": 0.004289,
    "ess_center_25_39_secondary_rural_unknown": 0.003079,
    "ess_center_25_39_secondary_town_center": 0.003629,
    "ess_center_25_39_tertiary_large_town_unknown": 0.00176,
    "ess_center_25_39_tertiary_town_center": 0.00099,
    "ess_center_25_39_tertiary_town_right": 0.0011,
    "ess_center_40_54_lower_town_right": 0.00132,
    "ess_center_40_54_secondary_large_town_left": 0.002529,
    "ess_center_40_54_secondary_rural_center": 0.007148,
    "ess_center_40_54_secondary_rural_right": 0.006158,
    "ess_center_40_54_secondary_town_center": 0.002529,
    "ess_center_40_54_secondary_town_right": 0.00165,
    "ess_center_40_54_tertiary_large_town_left": 0.00077,
    "ess_center_40_54_tertiary_large_town_right": 0.002309,
    "ess_center_40_54_tertiary_rural_center": 0.002089,
    "ess_center_40_54_tertiary_rural_left": 0.002859,
    "ess_center_40_54_tertiary_town_center": 0.00099,
    "ess_center_40_54_tertiary_town_right": 0.00077,
    "ess_center_40_54_unknown_unknown_unknown": 0.00154,
    "ess_center_55_plus_secondary_large_town_center": 0.002199,
    "ess_center_55_plus_secondary_rural_center": 0.003849,
    "ess_center_55_plus_secondary_rural_left": 0.00077,
    "ess_center_55_plus_secondary_rural_right": 0.013086,
    "ess_center_55_plus_secondary_town_center": 0.003189,
    "ess_center_55_plus_secondary_town_right": 0.00077,
    "ess_center_55_plus_tertiary_town_center": 0.0011,
    "ess_lib_left_15_24_lower_large_town_center": 0.005113,
    "ess_lib_left_15_24_lower_large_town_unknown": 0.003563,
    "ess_lib_left_15_24_lower_rural_center": 0.002014,
    "ess_lib_left_15_24_lower_town_left": 0.004338,
    "ess_lib_left_15_24_lower_town_right": 0.002014,
    "ess_lib_left_15_24_secondary_large_town_center": 0.002014,
    "ess_lib_left_15_24_secondary_large_town_unknown": 0.006507,
    "ess_lib_left_15_24_secondary_rural_center": 0.005887,
    "ess_lib_left_15_24_secondary_rural_left": 0.00062,
    "ess_lib_left_15_24_secondary_rural_right": 0.001859,
    "ess_lib_left_15_24_secondary_town_center": 0.004958,
    "ess_lib_left_15_24_secondary_town_unknown": 0.001859,
    "ess_lib_left_15_24_tertiary_large_town_center": 0.009605,
    "ess_lib_left_15_24_tertiary_rural_center": 0.002324,
    "ess_lib_left_25_39_lower_large_town_center": 0.001859,
    "ess_lib_left_25_39_secondary_large_town_center": 0.000775,
    "ess_lib_left_25_39_secondary_rural_center": 0.002634,
    "ess_lib_left_25_39_secondary_rural_left": 0.002014,
    "ess_lib_left_25_39_secondary_rural_unknown": 0.002944,
    "ess_lib_left_25_39_secondary_town_center": 0.003563,
    "ess_lib_left_25_39_secondary_town_left": 0.003099,
    "ess_lib_left_25_39_secondary_town_unknown": 0.002014,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.004028,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.005887,
    "ess_lib_left_25_39_tertiary_large_town_right": 0.001084,
    "ess_lib_left_25_39_tertiary_rural_left": 0.002479,
    "ess_lib_left_25_39_tertiary_town_center": 0.001859,
    "ess_lib_left_40_54_secondary_large_town_center": 0.002789,
    "ess_lib_left_40_54_secondary_large_town_left": 0.00062,
    "ess_lib_left_40_54_secondary_large_town_unknown": 0.001549,
    "ess_lib_left_40_54_secondary_rural_center": 0.001704,
    "ess_lib_left_40_54_secondary_rural_unknown": 0.001239,
    "ess_lib_left_40_54_secondary_town_center": 0.004338,
    "ess_lib_left_40_54_secondary_town_left": 0.003563,
    "ess_lib_left_40_54_tertiary_large_town_center": 0.004028,
    "ess_lib_left_40_54_tertiary_rural_left": 0.001084,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.008056,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.003408,
    "ess_lib_left_55_plus_secondary_rural_center": 0.002014,
    "ess_lib_left_55_plus_secondary_rural_left": 0.001239,
    "ess_lib_left_55_plus_secondary_town_center": 0.002944,
    "ess_lib_left_55_plus_secondary_town_left": 0.002789,
    "ess_lib_left_55_plus_tertiary_rural_center": 0.002014,
    "ess_lib_left_55_plus_tertiary_town_left": 0.000775,
    "ess_lib_right_15_24_lower_large_town_center": 0.000676,
    "ess_lib_right_15_24_lower_rural_center": 0.001259,
    "ess_lib_right_15_24_lower_rural_right": 0.000536,
    "ess_lib_right_15_24_lower_town_center": 0.000816,
    "ess_lib_right_15_24_lower_town_unknown": 0.000816,
    "ess_lib_right_15_24_secondary_rural_right": 0.001562,
    "ess_lib_right_25_39_secondary_large_town_center": 0.000932,
    "ess_lib_right_25_39_secondary_large_town_right": 0.000536,
    "ess_lib_right_25_39_secondary_rural_center": 0.000699,
    "ess_lib_right_25_39_secondary_rural_right": 0.001212,
    "ess_lib_right_25_39_secondary_town_center": 0.000606,
    "ess_lib_right_25_39_tertiary_large_town_center": 0.001678,
    "ess_lib_right_25_39_tertiary_large_town_right": 0.002028,
    "ess_lib_right_25_39_tertiary_rural_right": 0.000723,
    "ess_lib_right_25_39_tertiary_town_center": 0.000676,
    "ess_lib_right_40_54_secondary_large_town_center": 0.000536,
    "ess_lib_right_40_54_secondary_large_town_right": 0.001608,
    "ess_lib_right_40_54_secondary_rural_center": 0.000816,
    "ess_lib_right_40_54_secondary_rural_right": 0.000769,
    "ess_lib_right_40_54_tertiary_rural_left": 0.000699,
    "ess_lib_right_40_54_tertiary_rural_right": 0.001095,
    "ess_lib_right_40_54_tertiary_town_right": 0.000723,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.001119,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.001631,
    "ess_lib_right_55_plus_secondary_rural_center": 0.000909,
    "ess_lib_right_55_plus_secondary_rural_right": 0.000862,
    "ess_lib_right_55_plus_secondary_town_center": 0.000979,
    "ess_lib_right_55_plus_secondary_town_right": 0.001562,
    "ess_lib_right_55_plus_tertiary_large_town_center": 0.000513,
    "ess_lib_right_55_plus_tertiary_large_town_right": 0.000606,
    "ess_lib_right_55_plus_tertiary_rural_right": 0.001445,
    "ess_trad_left_15_24_lower_large_town_left": 0.00752,
    "ess_trad_left_15_24_lower_rural_center": 0.009354,
    "ess_trad_left_15_24_lower_rural_right": 0.004035,
    "ess_trad_left_15_24_secondary_large_town_center": 0.001651,
    "ess_trad_left_15_24_secondary_large_town_unknown": 0.021459,
    "ess_trad_left_15_24_secondary_rural_left": 0.008437,
    "ess_trad_left_15_24_secondary_rural_unknown": 0.007703,
    "ess_trad_left_15_24_secondary_town_center": 0.006052,
    "ess_trad_left_15_24_tertiary_rural_center": 0.012288,
    "ess_trad_left_25_39_secondary_large_town_center": 0.002201,
    "ess_trad_left_25_39_secondary_large_town_left": 0.002568,
    "ess_trad_left_25_39_secondary_large_town_right": 0.001284,
    "ess_trad_left_25_39_secondary_large_town_unknown": 0.001467,
    "ess_trad_left_25_39_secondary_rural_center": 0.015773,
    "ess_trad_left_25_39_secondary_rural_left": 0.003668,
    "ess_trad_left_25_39_secondary_rural_right": 0.000917,
    "ess_trad_left_25_39_secondary_rural_unknown": 0.003852,
    "ess_trad_left_25_39_secondary_town_center": 0.011738,
    "ess_trad_left_25_39_secondary_town_left": 0.011738,
    "ess_trad_left_25_39_secondary_town_unknown": 0.00055,
    "ess_trad_left_25_39_tertiary_large_town_center": 0.006236,
    "ess_trad_left_25_39_tertiary_large_town_unknown": 0.003852,
    "ess_trad_left_25_39_tertiary_rural_center": 0.008437,
    "ess_trad_left_25_39_tertiary_rural_left": 0.016323,
    "ess_trad_left_40_54_secondary_large_town_center": 0.013022,
    "ess_trad_left_40_54_secondary_large_town_left": 0.026777,
    "ess_trad_left_40_54_secondary_large_town_unknown": 0.002568,
    "ess_trad_left_40_54_secondary_rural_center": 0.021459,
    "ess_trad_left_40_54_secondary_rural_right": 0.0011,
    "ess_trad_left_40_54_secondary_rural_unknown": 0.00862,
    "ess_trad_left_40_54_secondary_town_center": 0.013389,
    "ess_trad_left_40_54_secondary_town_right": 0.009354,
    "ess_trad_left_40_54_secondary_town_unknown": 0.002568,
    "ess_trad_left_40_54_tertiary_large_town_center": 0.000734,
    "ess_trad_left_40_54_tertiary_large_town_left": 0.000734,
    "ess_trad_left_40_54_tertiary_large_town_right": 0.001834,
    "ess_trad_left_40_54_tertiary_rural_left": 0.004035,
    "ess_trad_left_40_54_tertiary_town_center": 0.0011,
    "ess_trad_left_40_54_unknown_rural_center": 0.001651,
    "ess_trad_left_55_plus_lower_rural_center": 0.027695,
    "ess_trad_left_55_plus_lower_rural_left": 0.00752,
    "ess_trad_left_55_plus_lower_town_left": 0.01559,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.02476,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.034114,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.013389,
    "ess_trad_left_55_plus_secondary_rural_center": 0.032647,
    "ess_trad_left_55_plus_secondary_rural_left": 0.070795,
    "ess_trad_left_55_plus_secondary_rural_right": 0.013022,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.005502,
    "ess_trad_left_55_plus_secondary_town_center": 0.069878,
    "ess_trad_left_55_plus_secondary_town_left": 0.036315,
    "ess_trad_left_55_plus_secondary_town_right": 0.002017,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.002935,
    "ess_trad_left_55_plus_tertiary_large_town_center": 0.003301,
    "ess_trad_left_55_plus_tertiary_large_town_left": 0.003301,
    "ess_trad_left_55_plus_tertiary_rural_center": 0.005686,
    "ess_trad_left_55_plus_tertiary_town_center": 0.005319,
    "ess_trad_left_55_plus_tertiary_town_left": 0.00055,
    "ess_trad_left_55_plus_unknown_rural_left": 0.002384,
    "ess_trad_right_15_24_lower_large_town_right": 0.001576,
    "ess_trad_right_15_24_secondary_large_town_center": 0.000756,
    "ess_trad_right_15_24_secondary_large_town_unknown": 0.000756,
    "ess_trad_right_15_24_secondary_rural_right": 0.000504,
    "ess_trad_right_15_24_secondary_rural_unknown": 0.001639,
    "ess_trad_right_15_24_secondary_town_center": 0.000693,
    "ess_trad_right_15_24_secondary_town_right": 0.001954,
    "ess_trad_right_25_39_secondary_rural_center": 0.001387,
    "ess_trad_right_25_39_secondary_rural_right": 0.002206,
    "ess_trad_right_25_39_secondary_rural_unknown": 0.001135,
    "ess_trad_right_25_39_tertiary_rural_center": 0.000504,
    "ess_trad_right_25_39_tertiary_rural_right": 0.000567,
    "ess_trad_right_25_39_tertiary_town_center": 0.00082,
    "ess_trad_right_25_39_tertiary_town_right": 0.002711,
    "ess_trad_right_40_54_lower_rural_center": 0.001765,
    "ess_trad_right_40_54_lower_town_right": 0.002396,
    "ess_trad_right_40_54_secondary_large_town_center": 0.00498,
    "ess_trad_right_40_54_secondary_large_town_right": 0.003404,
    "ess_trad_right_40_54_secondary_large_town_unknown": 0.000567,
    "ess_trad_right_40_54_secondary_rural_center": 0.001198,
    "ess_trad_right_40_54_secondary_rural_right": 0.001387,
    "ess_trad_right_40_54_secondary_rural_unknown": 0.001261,
    "ess_trad_right_40_54_secondary_town_center": 0.000756,
    "ess_trad_right_40_54_secondary_town_right": 0.002143,
    "ess_trad_right_40_54_secondary_town_unknown": 0.00063,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.002711,
    "ess_trad_right_40_54_tertiary_town_right": 0.003089,
    "ess_trad_right_55_plus_lower_town_right": 0.003215,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.001702,
    "ess_trad_right_55_plus_secondary_rural_center": 0.004917,
    "ess_trad_right_55_plus_secondary_rural_left": 0.00082,
    "ess_trad_right_55_plus_secondary_rural_right": 0.00643,
    "ess_trad_right_55_plus_secondary_town_center": 0.002269,
    "ess_trad_right_55_plus_secondary_town_right": 0.00435,
    "ess_trad_right_55_plus_tertiary_rural_right": 0.005295,
    "ess_trad_right_55_plus_tertiary_town_center": 0.00145
  },
  "jihomoravsky": {
    "ess_center_15_24_lower_large_town_center": 0.00055,
    "ess_center_15_24_lower_large_town_right": 0.002419,
    "ess_center_15_24_lower_rural_center": 0.001979,
    "ess_center_15_24_lower_rural_unknown": 0.001979,
    "ess_center_15_24_secondary_large_town_right": 0.00055,
    "ess_center_15_24_secondary_large_town_unknown": 0.002969,
    "ess_center_15_24_secondary_rural_center": 0.003409,
    "ess_center_15_24_secondary_rural_unknown": 0.00143,
    "ess_center_15_24_secondary_town_center": 0.004729,
    "ess_center_15_24_tertiary_rural_center": 0.002309,
    "ess_center_25_39_secondary_large_town_center": 0.00143,
    "ess_center_25_39_secondary_large_town_right": 0.00077,
    "ess_center_25_39_secondary_rural_right": 0.004289,
    "ess_center_25_39_secondary_rural_unknown": 0.003079,
    "ess_center_25_39_secondary_town_center": 0.003629,
    "ess_center_25_39_tertiary_large_town_unknown": 0.00176,
    "ess_center_25_39_tertiary_town_center": 0.00099,
    "ess_center_25_39_tertiary_town_right": 0.0011,
    "ess_center_40_54_lower_town_right": 0.00132,
    "ess_center_40_54_secondary_large_town_left": 0.002529,
    "ess_center_40_54_secondary_rural_center": 0.007148,
    "ess_center_40_54_secondary_rural_right": 0.006158,
    "ess_center_40_54_secondary_town_center": 0.002529,
    "ess_center_40_54_secondary_town_right": 0.00165,
    "ess_center_40_54_tertiary_large_town_left": 0.00077,
    "ess_center_40_54_tertiary_large_town_right": 0.002309,
    "ess_center_40_54_tertiary_rural_center": 0.002089,
    "ess_center_40_54_tertiary_rural_left": 0.002859,
    "ess_center_40_54_tertiary_town_center": 0.00099,
    "ess_center_40_54_tertiary_town_right": 0.00077,
    "ess_center_40_54_unknown_unknown_unknown": 0.00154,
    "ess_center_55_plus_secondary_large_town_center": 0.002199,
    "ess_center_55_plus_secondary_rural_center": 0.003849,
    "ess_center_55_plus_secondary_rural_left": 0.00077,
    "ess_center_55_plus_secondary_rural_right": 0.013086,
    "ess_center_55_plus_secondary_town_center": 0.003189,
    "ess_center_55_plus_secondary_town_right": 0.00077,
    "ess_center_55_plus_tertiary_town_center": 0.0011,
    "ess_lib_left_15_24_lower_large_town_center": 0.005113,
    "ess_lib_left_15_24_lower_large_town_unknown": 0.003563,
    "ess_lib_left_15_24_lower_rural_center": 0.002014,
    "ess_lib_left_15_24_lower_town_left": 0.004338,
    "ess_lib_left_15_24_lower_town_right": 0.002014,
    "ess_lib_left_15_24_secondary_large_town_center": 0.002014,
    "ess_lib_left_15_24_secondary_large_town_unknown": 0.006507,
    "ess_lib_left_15_24_secondary_rural_center": 0.005887,
    "ess_lib_left_15_24_secondary_rural_left": 0.00062,
    "ess_lib_left_15_24_secondary_rural_right": 0.001859,
    "ess_lib_left_15_24_secondary_town_center": 0.004958,
    "ess_lib_left_15_24_secondary_town_unknown": 0.001859,
    "ess_lib_left_15_24_tertiary_large_town_center": 0.009605,
    "ess_lib_left_15_24_tertiary_rural_center": 0.002324,
    "ess_lib_left_25_39_lower_large_town_center": 0.001859,
    "ess_lib_left_25_39_secondary_large_town_center": 0.000775,
    "ess_lib_left_25_39_secondary_rural_center": 0.002634,
    "ess_lib_left_25_39_secondary_rural_left": 0.002014,
    "ess_lib_left_25_39_secondary_rural_unknown": 0.002944,
    "ess_lib_left_25_39_secondary_town_center": 0.003563,
    "ess_lib_left_25_39_secondary_town_left": 0.003099,
    "ess_lib_left_25_39_secondary_town_unknown": 0.002014,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.004028,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.005887,
    "ess_lib_left_25_39_tertiary_large_town_right": 0.001084,
    "ess_lib_left_25_39_tertiary_rural_left": 0.002479,
    "ess_lib_left_25_39_tertiary_town_center": 0.001859,
    "ess_lib_left_40_54_secondary_large_town_center": 0.002789,
    "ess_lib_left_40_54_secondary_large_town_left": 0.00062,
    "ess_lib_left_40_54_secondary_large_town_unknown": 0.001549,
    "ess_lib_left_40_54_secondary_rural_center": 0.001704,
    "ess_lib_left_40_54_secondary_rural_unknown": 0.001239,
    "ess_lib_left_40_54_secondary_town_center": 0.004338,
    "ess_lib_left_40_54_secondary_town_left": 0.003563,
    "ess_lib_left_40_54_tertiary_large_town_center": 0.004028,
    "ess_lib_left_40_54_tertiary_rural_left": 0.001084,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.008056,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.003408,
    "ess_lib_left_55_plus_secondary_rural_center": 0.002014,
    "ess_lib_left_55_plus_secondary_rural_left": 0.001239,
    "ess_lib_left_55_plus_secondary_town_center": 0.002944,
    "ess_lib_left_55_plus_secondary_town_left": 0.002789,
    "ess_lib_left_55_plus_tertiary_rural_center": 0.002014,
    "ess_lib_left_55_plus_tertiary_town_left": 0.000775,
    "ess_lib_right_15_24_lower_large_town_center": 0.000676,
    "ess_lib_right_15_24_lower_rural_center": 0.001259,
    "ess_lib_right_15_24_lower_rural_right": 0.000536,
    "ess_lib_right_15_24_lower_town_center": 0.000816,
    "ess_lib_right_15_24_lower_town_unknown": 0.000816,
    "ess_lib_right_15_24_secondary_rural_right": 0.001562,
    "ess_lib_right_25_39_secondary_large_town_center": 0.000932,
    "ess_lib_right_25_39_secondary_large_town_right": 0.000536,
    "ess_lib_right_25_39_secondary_rural_center": 0.000699,
    "ess_lib_right_25_39_secondary_rural_right": 0.001212,
    "ess_lib_right_25_39_secondary_town_center": 0.000606,
    "ess_lib_right_25_39_tertiary_large_town_center": 0.001678,
    "ess_lib_right_25_39_tertiary_large_town_right": 0.002028,
    "ess_lib_right_25_39_tertiary_rural_right": 0.000723,
    "ess_lib_right_25_39_tertiary_town_center": 0.000676,
    "ess_lib_right_40_54_secondary_large_town_center": 0.000536,
    "ess_lib_right_40_54_secondary_large_town_right": 0.001608,
    "ess_lib_right_40_54_secondary_rural_center": 0.000816,
    "ess_lib_right_40_54_secondary_rural_right": 0.000769,
    "ess_lib_right_40_54_tertiary_rural_left": 0.000699,
    "ess_lib_right_40_54_tertiary_rural_right": 0.001095,
    "ess_lib_right_40_54_tertiary_town_right": 0.000723,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.001119,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.001631,
    "ess_lib_right_55_plus_secondary_rural_center": 0.000909,
    "ess_lib_right_55_plus_secondary_rural_right": 0.000862,
    "ess_lib_right_55_plus_secondary_town_center": 0.000979,
    "ess_lib_right_55_plus_secondary_town_right": 0.001562,
    "ess_lib_right_55_plus_tertiary_large_town_center": 0.000513,
    "ess_lib_right_55_plus_tertiary_large_town_right": 0.000606,
    "ess_lib_right_55_plus_tertiary_rural_right": 0.001445,
    "ess_trad_left_15_24_lower_large_town_left": 0.00752,
    "ess_trad_left_15_24_lower_rural_center": 0.009354,
    "ess_trad_left_15_24_lower_rural_right": 0.004035,
    "ess_trad_left_15_24_secondary_large_town_center": 0.001651,
    "ess_trad_left_15_24_secondary_large_town_unknown": 0.021459,
    "ess_trad_left_15_24_secondary_rural_left": 0.008437,
    "ess_trad_left_15_24_secondary_rural_unknown": 0.007703,
    "ess_trad_left_15_24_secondary_town_center": 0.006052,
    "ess_trad_left_15_24_tertiary_rural_center": 0.012288,
    "ess_trad_left_25_39_secondary_large_town_center": 0.002201,
    "ess_trad_left_25_39_secondary_large_town_left": 0.002568,
    "ess_trad_left_25_39_secondary_large_town_right": 0.001284,
    "ess_trad_left_25_39_secondary_large_town_unknown": 0.001467,
    "ess_trad_left_25_39_secondary_rural_center": 0.015773,
    "ess_trad_left_25_39_secondary_rural_left": 0.003668,
    "ess_trad_left_25_39_secondary_rural_right": 0.000917,
    "ess_trad_left_25_39_secondary_rural_unknown": 0.003852,
    "ess_trad_left_25_39_secondary_town_center": 0.011738,
    "ess_trad_left_25_39_secondary_town_left": 0.011738,
    "ess_trad_left_25_39_secondary_town_unknown": 0.00055,
    "ess_trad_left_25_39_tertiary_large_town_center": 0.006236,
    "ess_trad_left_25_39_tertiary_large_town_unknown": 0.003852,
    "ess_trad_left_25_39_tertiary_rural_center": 0.008437,
    "ess_trad_left_25_39_tertiary_rural_left": 0.016323,
    "ess_trad_left_40_54_secondary_large_town_center": 0.013022,
    "ess_trad_left_40_54_secondary_large_town_left": 0.026777,
    "ess_trad_left_40_54_secondary_large_town_unknown": 0.002568,
    "ess_trad_left_40_54_secondary_rural_center": 0.021459,
    "ess_trad_left_40_54_secondary_rural_right": 0.0011,
    "ess_trad_left_40_54_secondary_rural_unknown": 0.00862,
    "ess_trad_left_40_54_secondary_town_center": 0.013389,
    "ess_trad_left_40_54_secondary_town_right": 0.009354,
    "ess_trad_left_40_54_secondary_town_unknown": 0.002568,
    "ess_trad_left_40_54_tertiary_large_town_center": 0.000734,
    "ess_trad_left_40_54_tertiary_large_town_left": 0.000734,
    "ess_trad_left_40_54_tertiary_large_town_right": 0.001834,
    "ess_trad_left_40_54_tertiary_rural_left": 0.004035,
    "ess_trad_left_40_54_tertiary_town_center": 0.0011,
    "ess_trad_left_40_54_unknown_rural_center": 0.001651,
    "ess_trad_left_55_plus_lower_rural_center": 0.027695,
    "ess_trad_left_55_plus_lower_rural_left": 0.00752,
    "ess_trad_left_55_plus_lower_town_left": 0.01559,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.02476,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.034114,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.013389,
    "ess_trad_left_55_plus_secondary_rural_center": 0.032647,
    "ess_trad_left_55_plus_secondary_rural_left": 0.070795,
    "ess_trad_left_55_plus_secondary_rural_right": 0.013022,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.005502,
    "ess_trad_left_55_plus_secondary_town_center": 0.069878,
    "ess_trad_left_55_plus_secondary_town_left": 0.036315,
    "ess_trad_left_55_plus_secondary_town_right": 0.002017,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.002935,
    "ess_trad_left_55_plus_tertiary_large_town_center": 0.003301,
    "ess_trad_left_55_plus_tertiary_large_town_left": 0.003301,
    "ess_trad_left_55_plus_tertiary_rural_center": 0.005686,
    "ess_trad_left_55_plus_tertiary_town_center": 0.005319,
    "ess_trad_left_55_plus_tertiary_town_left": 0.00055,
    "ess_trad_left_55_plus_unknown_rural_left": 0.002384,
    "ess_trad_right_15_24_lower_large_town_right": 0.001576,
    "ess_trad_right_15_24_secondary_large_town_center": 0.000756,
    "ess_trad_right_15_24_secondary_large_town_unknown": 0.000756,
    "ess_trad_right_15_24_secondary_rural_right": 0.000504,
    "ess_trad_right_15_24_secondary_rural_unknown": 0.001639,
    "ess_trad_right_15_24_secondary_town_center": 0.000693,
    "ess_trad_right_15_24_secondary_town_right": 0.001954,
    "ess_trad_right_25_39_secondary_rural_center": 0.001387,
    "ess_trad_right_25_39_secondary_rural_right": 0.002206,
    "ess_trad_right_25_39_secondary_rural_unknown": 0.001135,
    "ess_trad_right_25_39_tertiary_rural_center": 0.000504,
    "ess_trad_right_25_39_tertiary_rural_right": 0.000567,
    "ess_trad_right_25_39_tertiary_town_center": 0.00082,
    "ess_trad_right_25_39_tertiary_town_right": 0.002711,
    "ess_trad_right_40_54_lower_rural_center": 0.001765,
    "ess_trad_right_40_54_lower_town_right": 0.002396,
    "ess_trad_right_40_54_secondary_large_town_center": 0.00498,
    "ess_trad_right_40_54_secondary_large_town_right": 0.003404,
    "ess_trad_right_40_54_secondary_large_town_unknown": 0.000567,
    "ess_trad_right_40_54_secondary_rural_center": 0.001198,
    "ess_trad_right_40_54_secondary_rural_right": 0.001387,
    "ess_trad_right_40_54_secondary_rural_unknown": 0.001261,
    "ess_trad_right_40_54_secondary_town_center": 0.000756,
    "ess_trad_right_40_54_secondary_town_right": 0.002143,
    "ess_trad_right_40_54_secondary_town_unknown": 0.00063,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.002711,
    "ess_trad_right_40_54_tertiary_town_right": 0.003089,
    "ess_trad_right_55_plus_lower_town_right": 0.003215,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.001702,
    "ess_trad_right_55_plus_secondary_rural_center": 0.004917,
    "ess_trad_right_55_plus_secondary_rural_left": 0.00082,
    "ess_trad_right_55_plus_secondary_rural_right": 0.00643,
    "ess_trad_right_55_plus_secondary_town_center": 0.002269,
    "ess_trad_right_55_plus_secondary_town_right": 0.00435,
    "ess_trad_right_55_plus_tertiary_rural_right": 0.005295,
    "ess_trad_right_55_plus_tertiary_town_center": 0.00145
  },
  "olomoucky": {
    "ess_center_15_24_lower_rural_right": 0.001261,
    "ess_center_15_24_lower_town_right": 0.002161,
    "ess_center_15_24_secondary_rural_left": 0.00054,
    "ess_center_15_24_secondary_rural_right": 0.001981,
    "ess_center_15_24_secondary_town_center": 0.002342,
    "ess_center_25_39_secondary_large_town_center": 0.001261,
    "ess_center_25_39_secondary_large_town_right": 0.002522,
    "ess_center_25_39_secondary_rural_center": 0.000901,
    "ess_center_25_39_secondary_rural_right": 0.001261,
    "ess_center_25_39_secondary_town_center": 0.003062,
    "ess_center_25_39_secondary_town_left": 0.001621,
    "ess_center_25_39_secondary_town_right": 0.01513,
    "ess_center_25_39_tertiary_large_town_center": 0.004143,
    "ess_center_25_39_tertiary_town_center": 0.003963,
    "ess_center_40_54_lower_rural_left": 0.002702,
    "ess_center_40_54_secondary_large_town_center": 0.005043,
    "ess_center_40_54_secondary_large_town_right": 0.001441,
    "ess_center_40_54_secondary_rural_center": 0.011708,
    "ess_center_40_54_secondary_rural_right": 0.003242,
    "ess_center_40_54_secondary_rural_unknown": 0.003602,
    "ess_center_40_54_secondary_town_center": 0.01423,
    "ess_center_40_54_secondary_town_right": 0.01387,
    "ess_center_40_54_tertiary_large_town_right": 0.000901,
    "ess_center_40_54_tertiary_rural_center": 0.009547,
    "ess_center_40_54_tertiary_town_center": 0.003602,
    "ess_center_55_plus_lower_town_center": 0.001981,
    "ess_center_55_plus_secondary_large_town_center": 0.001621,
    "ess_center_55_plus_secondary_large_town_left": 0.00054,
    "ess_center_55_plus_secondary_large_town_right": 0.003062,
    "ess_center_55_plus_secondary_rural_center": 0.025758,
    "ess_center_55_plus_secondary_rural_left": 0.001081,
    "ess_center_55_plus_secondary_rural_right": 0.012248,
    "ess_center_55_plus_secondary_town_center": 0.003963,
    "ess_center_55_plus_secondary_town_right": 0.011168,
    "ess_center_55_plus_tertiary_large_town_center": 0.001621,
    "ess_center_55_plus_tertiary_rural_center": 0.005043,
    "ess_center_55_plus_tertiary_town_center": 0.001081,
    "ess_lib_left_15_24_lower_large_town_center": 0.001269,
    "ess_lib_left_15_24_lower_large_town_unknown": 0.003299,
    "ess_lib_left_15_24_lower_rural_center": 0.011927,
    "ess_lib_left_15_24_lower_town_center": 0.004568,
    "ess_lib_left_15_24_lower_town_right": 0.001015,
    "ess_lib_left_15_24_secondary_large_town_center": 0.001523,
    "ess_lib_left_15_24_secondary_rural_center": 0.001776,
    "ess_lib_left_15_24_secondary_rural_right": 0.002791,
    "ess_lib_left_15_24_secondary_town_unknown": 0.00609,
    "ess_lib_left_25_39_lower_large_town_right": 0.013957,
    "ess_lib_left_25_39_secondary_large_town_center": 0.004568,
    "ess_lib_left_25_39_secondary_rural_center": 0.00406,
    "ess_lib_left_25_39_secondary_rural_right": 0.001523,
    "ess_lib_left_25_39_secondary_town_center": 0.007613,
    "ess_lib_left_25_39_secondary_town_left": 0.000761,
    "ess_lib_left_25_39_secondary_town_unknown": 0.00406,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.000508,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.003045,
    "ess_lib_left_25_39_tertiary_rural_center": 0.004314,
    "ess_lib_left_25_39_tertiary_rural_left": 0.007867,
    "ess_lib_left_25_39_tertiary_town_center": 0.000761,
    "ess_lib_left_25_39_tertiary_town_left": 0.002284,
    "ess_lib_left_40_54_secondary_rural_center": 0.004314,
    "ess_lib_left_40_54_secondary_rural_left": 0.004568,
    "ess_lib_left_40_54_secondary_town_center": 0.004314,
    "ess_lib_left_40_54_secondary_town_left": 0.003806,
    "ess_lib_left_40_54_secondary_town_right": 0.001015,
    "ess_lib_left_40_54_tertiary_rural_center": 0.000761,
    "ess_lib_left_40_54_tertiary_rural_right": 0.000508,
    "ess_lib_left_40_54_tertiary_town_center": 0.001523,
    "ess_lib_left_55_plus_lower_large_town_left": 0.007105,
    "ess_lib_left_55_plus_lower_town_left": 0.009897,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.004568,
    "ess_lib_left_55_plus_secondary_rural_center": 0.011419,
    "ess_lib_left_55_plus_secondary_rural_left": 0.005836,
    "ess_lib_left_55_plus_secondary_rural_right": 0.000508,
    "ess_lib_left_55_plus_secondary_town_center": 0.002538,
    "ess_lib_left_55_plus_secondary_town_left": 0.012688,
    "ess_lib_left_55_plus_secondary_town_right": 0.008374,
    "ess_lib_right_15_24_lower_large_town_right": 0.000802,
    "ess_lib_right_15_24_lower_rural_center": 0.000649,
    "ess_lib_right_15_24_lower_rural_right": 0.001412,
    "ess_lib_right_15_24_secondary_large_town_center": 0.000916,
    "ess_lib_right_15_24_secondary_rural_center": 0.000916,
    "ess_lib_right_15_24_secondary_rural_right": 0.000534,
    "ess_lib_right_15_24_tertiary_large_town_right": 0.001183,
    "ess_lib_right_15_24_tertiary_rural_right": 0.000954,
    "ess_lib_right_25_39_secondary_rural_right": 0.001985,
    "ess_lib_right_25_39_secondary_town_right": 0.001832,
    "ess_lib_right_25_39_tertiary_large_town_right": 0.00126,
    "ess_lib_right_25_39_tertiary_rural_right": 0.004199,
    "ess_lib_right_25_39_tertiary_town_center": 0.000764,
    "ess_lib_right_40_54_secondary_large_town_right": 0.001222,
    "ess_lib_right_40_54_secondary_rural_center": 0.001336,
    "ess_lib_right_40_54_secondary_rural_right": 0.001412,
    "ess_lib_right_40_54_secondary_town_center": 0.002023,
    "ess_lib_right_40_54_secondary_town_right": 0.003741,
    "ess_lib_right_40_54_tertiary_large_town_right": 0.001527,
    "ess_lib_right_40_54_tertiary_rural_right": 0.001374,
    "ess_lib_right_40_54_tertiary_town_right": 0.002061,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.000802,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.001794,
    "ess_lib_right_55_plus_secondary_rural_center": 0.001909,
    "ess_lib_right_55_plus_secondary_rural_right": 0.001374,
    "ess_lib_right_55_plus_secondary_town_right": 0.00691,
    "ess_lib_right_55_plus_tertiary_large_town_right": 0.002138,
    "ess_lib_right_55_plus_tertiary_town_center": 0.000725,
    "ess_lib_right_55_plus_tertiary_town_right": 0.002443,
    "ess_lib_right_55_plus_tertiary_town_unknown": 0.000954,
    "ess_trad_left_15_24_lower_large_town_center": 0.008712,
    "ess_trad_left_15_24_lower_large_town_unknown": 0.003305,
    "ess_trad_left_15_24_lower_town_center": 0.00691,
    "ess_trad_left_15_24_secondary_large_town_center": 0.011416,
    "ess_trad_left_15_24_secondary_large_town_right": 0.002704,
    "ess_trad_left_15_24_secondary_large_town_unknown": 0.001802,
    "ess_trad_left_15_24_secondary_rural_center": 0.002103,
    "ess_trad_left_15_24_secondary_town_center": 0.00751,
    "ess_trad_left_25_39_lower_town_right": 0.002103,
    "ess_trad_left_25_39_secondary_large_town_center": 0.016222,
    "ess_trad_left_25_39_secondary_rural_center": 0.00751,
    "ess_trad_left_25_39_secondary_rural_left": 0.001502,
    "ess_trad_left_25_39_secondary_town_center": 0.001502,
    "ess_trad_left_25_39_secondary_town_left": 0.006008,
    "ess_trad_left_25_39_secondary_town_right": 0.003305,
    "ess_trad_left_25_39_tertiary_large_town_center": 0.001802,
    "ess_trad_left_25_39_tertiary_rural_left": 0.010514,
    "ess_trad_left_25_39_tertiary_town_center": 0.012617,
    "ess_trad_left_40_54_lower_rural_left": 0.003905,
    "ess_trad_left_40_54_secondary_large_town_center": 0.016523,
    "ess_trad_left_40_54_secondary_large_town_left": 0.004807,
    "ess_trad_left_40_54_secondary_rural_center": 0.015321,
    "ess_trad_left_40_54_secondary_rural_left": 0.02163,
    "ess_trad_left_40_54_secondary_town_center": 0.041157,
    "ess_trad_left_40_54_secondary_town_left": 0.009914,
    "ess_trad_left_40_54_secondary_town_right": 0.000601,
    "ess_trad_left_40_54_tertiary_large_town_right": 0.003004,
    "ess_trad_left_40_54_tertiary_town_unknown": 0.002103,
    "ess_trad_left_55_plus_lower_large_town_left": 0.010214,
    "ess_trad_left_55_plus_lower_rural_center": 0.008111,
    "ess_trad_left_55_plus_lower_town_center": 0.012617,
    "ess_trad_left_55_plus_lower_town_left": 0.027938,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.008111,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.020128,
    "ess_trad_left_55_plus_secondary_large_town_right": 0.00721,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.003004,
    "ess_trad_left_55_plus_secondary_rural_center": 0.030642,
    "ess_trad_left_55_plus_secondary_rural_left": 0.022531,
    "ess_trad_left_55_plus_secondary_rural_right": 0.003305,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.013519,
    "ess_trad_left_55_plus_secondary_town_center": 0.041157,
    "ess_trad_left_55_plus_secondary_town_left": 0.027037,
    "ess_trad_left_55_plus_tertiary_large_town_center": 0.004206,
    "ess_trad_left_55_plus_tertiary_large_town_left": 0.003905,
    "ess_trad_left_55_plus_tertiary_rural_center": 0.005708,
    "ess_trad_left_55_plus_tertiary_rural_left": 0.003004,
    "ess_trad_left_55_plus_tertiary_town_center": 0.002704,
    "ess_trad_right_15_24_lower_large_town_unknown": 0.001342,
    "ess_trad_right_15_24_lower_rural_right": 0.002168,
    "ess_trad_right_15_24_secondary_large_town_center": 0.001136,
    "ess_trad_right_15_24_secondary_large_town_right": 0.000723,
    "ess_trad_right_15_24_secondary_large_town_unknown": 0.000723,
    "ess_trad_right_25_39_lower_town_right": 0.005266,
    "ess_trad_right_25_39_secondary_large_town_unknown": 0.001342,
    "ess_trad_right_25_39_secondary_rural_center": 0.002375,
    "ess_trad_right_25_39_secondary_town_right": 0.000826,
    "ess_trad_right_25_39_tertiary_large_town_right": 0.000826,
    "ess_trad_right_25_39_tertiary_rural_center": 0.002168,
    "ess_trad_right_25_39_tertiary_rural_left": 0.002168,
    "ess_trad_right_25_39_tertiary_rural_right": 0.003511,
    "ess_trad_right_25_39_tertiary_rural_unknown": 0.001446,
    "ess_trad_right_25_39_tertiary_town_center": 0.005163,
    "ess_trad_right_25_39_tertiary_town_right": 0.001136,
    "ess_trad_right_40_54_secondary_large_town_center": 0.003408,
    "ess_trad_right_40_54_secondary_large_town_right": 0.001136,
    "ess_trad_right_40_54_secondary_rural_center": 0.006196,
    "ess_trad_right_40_54_secondary_rural_right": 0.00857,
    "ess_trad_right_40_54_secondary_town_center": 0.003201,
    "ess_trad_right_40_54_secondary_town_right": 0.003304,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.001859,
    "ess_trad_right_40_54_tertiary_town_right": 0.001962,
    "ess_trad_right_40_54_tertiary_town_unknown": 0.000723,
    "ess_trad_right_55_plus_lower_rural_right": 0.005679,
    "ess_trad_right_55_plus_secondary_large_town_center": 0.000826,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.001342,
    "ess_trad_right_55_plus_secondary_rural_center": 0.008054,
    "ess_trad_right_55_plus_secondary_rural_right": 0.006815,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.002478,
    "ess_trad_right_55_plus_secondary_town_center": 0.001239,
    "ess_trad_right_55_plus_secondary_town_right": 0.005782,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.000826,
    "ess_trad_right_55_plus_tertiary_large_town_right": 0.000516,
    "ess_trad_right_55_plus_tertiary_rural_right": 0.003924,
    "ess_trad_right_55_plus_tertiary_town_right": 0.004234
  },
  "zlinsky": {
    "ess_center_15_24_lower_rural_right": 0.001261,
    "ess_center_15_24_lower_town_right": 0.002161,
    "ess_center_15_24_secondary_rural_left": 0.00054,
    "ess_center_15_24_secondary_rural_right": 0.001981,
    "ess_center_15_24_secondary_town_center": 0.002342,
    "ess_center_25_39_secondary_large_town_center": 0.001261,
    "ess_center_25_39_secondary_large_town_right": 0.002522,
    "ess_center_25_39_secondary_rural_center": 0.000901,
    "ess_center_25_39_secondary_rural_right": 0.001261,
    "ess_center_25_39_secondary_town_center": 0.003062,
    "ess_center_25_39_secondary_town_left": 0.001621,
    "ess_center_25_39_secondary_town_right": 0.01513,
    "ess_center_25_39_tertiary_large_town_center": 0.004143,
    "ess_center_25_39_tertiary_town_center": 0.003963,
    "ess_center_40_54_lower_rural_left": 0.002702,
    "ess_center_40_54_secondary_large_town_center": 0.005043,
    "ess_center_40_54_secondary_large_town_right": 0.001441,
    "ess_center_40_54_secondary_rural_center": 0.011708,
    "ess_center_40_54_secondary_rural_right": 0.003242,
    "ess_center_40_54_secondary_rural_unknown": 0.003602,
    "ess_center_40_54_secondary_town_center": 0.01423,
    "ess_center_40_54_secondary_town_right": 0.01387,
    "ess_center_40_54_tertiary_large_town_right": 0.000901,
    "ess_center_40_54_tertiary_rural_center": 0.009547,
    "ess_center_40_54_tertiary_town_center": 0.003602,
    "ess_center_55_plus_lower_town_center": 0.001981,
    "ess_center_55_plus_secondary_large_town_center": 0.001621,
    "ess_center_55_plus_secondary_large_town_left": 0.00054,
    "ess_center_55_plus_secondary_large_town_right": 0.003062,
    "ess_center_55_plus_secondary_rural_center": 0.025758,
    "ess_center_55_plus_secondary_rural_left": 0.001081,
    "ess_center_55_plus_secondary_rural_right": 0.012248,
    "ess_center_55_plus_secondary_town_center": 0.003963,
    "ess_center_55_plus_secondary_town_right": 0.011168,
    "ess_center_55_plus_tertiary_large_town_center": 0.001621,
    "ess_center_55_plus_tertiary_rural_center": 0.005043,
    "ess_center_55_plus_tertiary_town_center": 0.001081,
    "ess_lib_left_15_24_lower_large_town_center": 0.001269,
    "ess_lib_left_15_24_lower_large_town_unknown": 0.003299,
    "ess_lib_left_15_24_lower_rural_center": 0.011927,
    "ess_lib_left_15_24_lower_town_center": 0.004568,
    "ess_lib_left_15_24_lower_town_right": 0.001015,
    "ess_lib_left_15_24_secondary_large_town_center": 0.001523,
    "ess_lib_left_15_24_secondary_rural_center": 0.001776,
    "ess_lib_left_15_24_secondary_rural_right": 0.002791,
    "ess_lib_left_15_24_secondary_town_unknown": 0.00609,
    "ess_lib_left_25_39_lower_large_town_right": 0.013957,
    "ess_lib_left_25_39_secondary_large_town_center": 0.004568,
    "ess_lib_left_25_39_secondary_rural_center": 0.00406,
    "ess_lib_left_25_39_secondary_rural_right": 0.001523,
    "ess_lib_left_25_39_secondary_town_center": 0.007613,
    "ess_lib_left_25_39_secondary_town_left": 0.000761,
    "ess_lib_left_25_39_secondary_town_unknown": 0.00406,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.000508,
    "ess_lib_left_25_39_tertiary_large_town_left": 0.003045,
    "ess_lib_left_25_39_tertiary_rural_center": 0.004314,
    "ess_lib_left_25_39_tertiary_rural_left": 0.007867,
    "ess_lib_left_25_39_tertiary_town_center": 0.000761,
    "ess_lib_left_25_39_tertiary_town_left": 0.002284,
    "ess_lib_left_40_54_secondary_rural_center": 0.004314,
    "ess_lib_left_40_54_secondary_rural_left": 0.004568,
    "ess_lib_left_40_54_secondary_town_center": 0.004314,
    "ess_lib_left_40_54_secondary_town_left": 0.003806,
    "ess_lib_left_40_54_secondary_town_right": 0.001015,
    "ess_lib_left_40_54_tertiary_rural_center": 0.000761,
    "ess_lib_left_40_54_tertiary_rural_right": 0.000508,
    "ess_lib_left_40_54_tertiary_town_center": 0.001523,
    "ess_lib_left_55_plus_lower_large_town_left": 0.007105,
    "ess_lib_left_55_plus_lower_town_left": 0.009897,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.004568,
    "ess_lib_left_55_plus_secondary_rural_center": 0.011419,
    "ess_lib_left_55_plus_secondary_rural_left": 0.005836,
    "ess_lib_left_55_plus_secondary_rural_right": 0.000508,
    "ess_lib_left_55_plus_secondary_town_center": 0.002538,
    "ess_lib_left_55_plus_secondary_town_left": 0.012688,
    "ess_lib_left_55_plus_secondary_town_right": 0.008374,
    "ess_lib_right_15_24_lower_large_town_right": 0.000802,
    "ess_lib_right_15_24_lower_rural_center": 0.000649,
    "ess_lib_right_15_24_lower_rural_right": 0.001412,
    "ess_lib_right_15_24_secondary_large_town_center": 0.000916,
    "ess_lib_right_15_24_secondary_rural_center": 0.000916,
    "ess_lib_right_15_24_secondary_rural_right": 0.000534,
    "ess_lib_right_15_24_tertiary_large_town_right": 0.001183,
    "ess_lib_right_15_24_tertiary_rural_right": 0.000954,
    "ess_lib_right_25_39_secondary_rural_right": 0.001985,
    "ess_lib_right_25_39_secondary_town_right": 0.001832,
    "ess_lib_right_25_39_tertiary_large_town_right": 0.00126,
    "ess_lib_right_25_39_tertiary_rural_right": 0.004199,
    "ess_lib_right_25_39_tertiary_town_center": 0.000764,
    "ess_lib_right_40_54_secondary_large_town_right": 0.001222,
    "ess_lib_right_40_54_secondary_rural_center": 0.001336,
    "ess_lib_right_40_54_secondary_rural_right": 0.001412,
    "ess_lib_right_40_54_secondary_town_center": 0.002023,
    "ess_lib_right_40_54_secondary_town_right": 0.003741,
    "ess_lib_right_40_54_tertiary_large_town_right": 0.001527,
    "ess_lib_right_40_54_tertiary_rural_right": 0.001374,
    "ess_lib_right_40_54_tertiary_town_right": 0.002061,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.000802,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.001794,
    "ess_lib_right_55_plus_secondary_rural_center": 0.001909,
    "ess_lib_right_55_plus_secondary_rural_right": 0.001374,
    "ess_lib_right_55_plus_secondary_town_right": 0.00691,
    "ess_lib_right_55_plus_tertiary_large_town_right": 0.002138,
    "ess_lib_right_55_plus_tertiary_town_center": 0.000725,
    "ess_lib_right_55_plus_tertiary_town_right": 0.002443,
    "ess_lib_right_55_plus_tertiary_town_unknown": 0.000954,
    "ess_trad_left_15_24_lower_large_town_center": 0.008712,
    "ess_trad_left_15_24_lower_large_town_unknown": 0.003305,
    "ess_trad_left_15_24_lower_town_center": 0.00691,
    "ess_trad_left_15_24_secondary_large_town_center": 0.011416,
    "ess_trad_left_15_24_secondary_large_town_right": 0.002704,
    "ess_trad_left_15_24_secondary_large_town_unknown": 0.001802,
    "ess_trad_left_15_24_secondary_rural_center": 0.002103,
    "ess_trad_left_15_24_secondary_town_center": 0.00751,
    "ess_trad_left_25_39_lower_town_right": 0.002103,
    "ess_trad_left_25_39_secondary_large_town_center": 0.016222,
    "ess_trad_left_25_39_secondary_rural_center": 0.00751,
    "ess_trad_left_25_39_secondary_rural_left": 0.001502,
    "ess_trad_left_25_39_secondary_town_center": 0.001502,
    "ess_trad_left_25_39_secondary_town_left": 0.006008,
    "ess_trad_left_25_39_secondary_town_right": 0.003305,
    "ess_trad_left_25_39_tertiary_large_town_center": 0.001802,
    "ess_trad_left_25_39_tertiary_rural_left": 0.010514,
    "ess_trad_left_25_39_tertiary_town_center": 0.012617,
    "ess_trad_left_40_54_lower_rural_left": 0.003905,
    "ess_trad_left_40_54_secondary_large_town_center": 0.016523,
    "ess_trad_left_40_54_secondary_large_town_left": 0.004807,
    "ess_trad_left_40_54_secondary_rural_center": 0.015321,
    "ess_trad_left_40_54_secondary_rural_left": 0.02163,
    "ess_trad_left_40_54_secondary_town_center": 0.041157,
    "ess_trad_left_40_54_secondary_town_left": 0.009914,
    "ess_trad_left_40_54_secondary_town_right": 0.000601,
    "ess_trad_left_40_54_tertiary_large_town_right": 0.003004,
    "ess_trad_left_40_54_tertiary_town_unknown": 0.002103,
    "ess_trad_left_55_plus_lower_large_town_left": 0.010214,
    "ess_trad_left_55_plus_lower_rural_center": 0.008111,
    "ess_trad_left_55_plus_lower_town_center": 0.012617,
    "ess_trad_left_55_plus_lower_town_left": 0.027938,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.008111,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.020128,
    "ess_trad_left_55_plus_secondary_large_town_right": 0.00721,
    "ess_trad_left_55_plus_secondary_large_town_unknown": 0.003004,
    "ess_trad_left_55_plus_secondary_rural_center": 0.030642,
    "ess_trad_left_55_plus_secondary_rural_left": 0.022531,
    "ess_trad_left_55_plus_secondary_rural_right": 0.003305,
    "ess_trad_left_55_plus_secondary_rural_unknown": 0.013519,
    "ess_trad_left_55_plus_secondary_town_center": 0.041157,
    "ess_trad_left_55_plus_secondary_town_left": 0.027037,
    "ess_trad_left_55_plus_tertiary_large_town_center": 0.004206,
    "ess_trad_left_55_plus_tertiary_large_town_left": 0.003905,
    "ess_trad_left_55_plus_tertiary_rural_center": 0.005708,
    "ess_trad_left_55_plus_tertiary_rural_left": 0.003004,
    "ess_trad_left_55_plus_tertiary_town_center": 0.002704,
    "ess_trad_right_15_24_lower_large_town_unknown": 0.001342,
    "ess_trad_right_15_24_lower_rural_right": 0.002168,
    "ess_trad_right_15_24_secondary_large_town_center": 0.001136,
    "ess_trad_right_15_24_secondary_large_town_right": 0.000723,
    "ess_trad_right_15_24_secondary_large_town_unknown": 0.000723,
    "ess_trad_right_25_39_lower_town_right": 0.005266,
    "ess_trad_right_25_39_secondary_large_town_unknown": 0.001342,
    "ess_trad_right_25_39_secondary_rural_center": 0.002375,
    "ess_trad_right_25_39_secondary_town_right": 0.000826,
    "ess_trad_right_25_39_tertiary_large_town_right": 0.000826,
    "ess_trad_right_25_39_tertiary_rural_center": 0.002168,
    "ess_trad_right_25_39_tertiary_rural_left": 0.002168,
    "ess_trad_right_25_39_tertiary_rural_right": 0.003511,
    "ess_trad_right_25_39_tertiary_rural_unknown": 0.001446,
    "ess_trad_right_25_39_tertiary_town_center": 0.005163,
    "ess_trad_right_25_39_tertiary_town_right": 0.001136,
    "ess_trad_right_40_54_secondary_large_town_center": 0.003408,
    "ess_trad_right_40_54_secondary_large_town_right": 0.001136,
    "ess_trad_right_40_54_secondary_rural_center": 0.006196,
    "ess_trad_right_40_54_secondary_rural_right": 0.00857,
    "ess_trad_right_40_54_secondary_town_center": 0.003201,
    "ess_trad_right_40_54_secondary_town_right": 0.003304,
    "ess_trad_right_40_54_tertiary_large_town_right": 0.001859,
    "ess_trad_right_40_54_tertiary_town_right": 0.001962,
    "ess_trad_right_40_54_tertiary_town_unknown": 0.000723,
    "ess_trad_right_55_plus_lower_rural_right": 0.005679,
    "ess_trad_right_55_plus_secondary_large_town_center": 0.000826,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.001342,
    "ess_trad_right_55_plus_secondary_rural_center": 0.008054,
    "ess_trad_right_55_plus_secondary_rural_right": 0.006815,
    "ess_trad_right_55_plus_secondary_rural_unknown": 0.002478,
    "ess_trad_right_55_plus_secondary_town_center": 0.001239,
    "ess_trad_right_55_plus_secondary_town_right": 0.005782,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.000826,
    "ess_trad_right_55_plus_tertiary_large_town_right": 0.000516,
    "ess_trad_right_55_plus_tertiary_rural_right": 0.003924,
    "ess_trad_right_55_plus_tertiary_town_right": 0.004234
  },
  "moravskoslezsky": {
    "ess_center_15_24_lower_large_town_center": 0.002657,
    "ess_center_15_24_lower_rural_center": 0.004484,
    "ess_center_15_24_lower_town_center": 0.007474,
    "ess_center_15_24_secondary_large_town_center": 0.002491,
    "ess_center_15_24_secondary_large_town_right": 0.002823,
    "ess_center_15_24_secondary_rural_center": 0.001163,
    "ess_center_15_24_secondary_town_center": 0.007308,
    "ess_center_15_24_secondary_town_left": 0.001329,
    "ess_center_15_24_tertiary_town_center": 0.001993,
    "ess_center_25_39_lower_town_center": 0.003156,
    "ess_center_25_39_secondary_large_town_center": 0.005149,
    "ess_center_25_39_secondary_large_town_left": 0.004982,
    "ess_center_25_39_secondary_rural_center": 0.010463,
    "ess_center_25_39_secondary_rural_left": 0.005149,
    "ess_center_25_39_secondary_rural_right": 0.006809,
    "ess_center_25_39_secondary_town_center": 0.004152,
    "ess_center_25_39_tertiary_large_town_center": 0.000664,
    "ess_center_25_39_tertiary_rural_center": 0.001661,
    "ess_center_25_39_tertiary_town_center": 0.002159,
    "ess_center_40_54_lower_large_town_right": 0.00847,
    "ess_center_40_54_lower_town_center": 0.001661,
    "ess_center_40_54_secondary_large_town_center": 0.015778,
    "ess_center_40_54_secondary_large_town_left": 0.001163,
    "ess_center_40_54_secondary_large_town_right": 0.003986,
    "ess_center_40_54_secondary_rural_center": 0.015944,
    "ess_center_40_54_secondary_town_center": 0.006145,
    "ess_center_40_54_secondary_town_left": 0.008968,
    "ess_center_40_54_secondary_town_unknown": 0.000664,
    "ess_center_40_54_tertiary_rural_left": 0.001661,
    "ess_center_55_plus_lower_large_town_right": 0.001329,
    "ess_center_55_plus_lower_rural_center": 0.005979,
    "ess_center_55_plus_secondary_large_town_center": 0.009965,
    "ess_center_55_plus_secondary_large_town_left": 0.008636,
    "ess_center_55_plus_secondary_large_town_right": 0.001661,
    "ess_center_55_plus_secondary_rural_center": 0.005149,
    "ess_center_55_plus_secondary_rural_right": 0.004484,
    "ess_center_55_plus_secondary_town_center": 0.004484,
    "ess_center_55_plus_secondary_town_left": 0.007474,
    "ess_center_55_plus_secondary_town_right": 0.002491,
    "ess_center_55_plus_tertiary_large_town_center": 0.000996,
    "ess_center_55_plus_tertiary_rural_center": 0.001495,
    "ess_center_55_plus_tertiary_town_center": 0.000996,
    "ess_lib_left_15_24_lower_large_town_center": 0.020122,
    "ess_lib_left_15_24_lower_rural_unknown": 0.005381,
    "ess_lib_left_15_24_secondary_large_town_center": 0.002808,
    "ess_lib_left_15_24_secondary_large_town_left": 0.00468,
    "ess_lib_left_15_24_secondary_large_town_right": 0.002808,
    "ess_lib_left_15_24_secondary_rural_center": 0.002574,
    "ess_lib_left_25_39_lower_town_center": 0.001872,
    "ess_lib_left_25_39_lower_town_unknown": 0.001404,
    "ess_lib_left_25_39_secondary_large_town_left": 0.007721,
    "ess_lib_left_25_39_secondary_large_town_unknown": 0.003276,
    "ess_lib_left_25_39_secondary_rural_center": 0.002808,
    "ess_lib_left_25_39_secondary_rural_unknown": 0.00117,
    "ess_lib_left_25_39_secondary_town_center": 0.002106,
    "ess_lib_left_25_39_secondary_town_left": 0.002106,
    "ess_lib_left_25_39_tertiary_large_town_center": 0.001872,
    "ess_lib_left_40_54_lower_large_town_left": 0.007487,
    "ess_lib_left_40_54_lower_large_town_right": 0.001872,
    "ess_lib_left_40_54_lower_rural_center": 0.008423,
    "ess_lib_left_40_54_secondary_large_town_center": 0.010997,
    "ess_lib_left_40_54_secondary_large_town_left": 0.014975,
    "ess_lib_left_40_54_secondary_large_town_right": 0.00351,
    "ess_lib_left_40_54_secondary_town_center": 0.006551,
    "ess_lib_left_40_54_secondary_town_left": 0.01591,
    "ess_lib_left_40_54_tertiary_large_town_left": 0.000702,
    "ess_lib_left_55_plus_lower_rural_center": 0.001404,
    "ess_lib_left_55_plus_lower_town_left": 0.010529,
    "ess_lib_left_55_plus_secondary_large_town_center": 0.007721,
    "ess_lib_left_55_plus_secondary_large_town_left": 0.013103,
    "ess_lib_left_55_plus_secondary_rural_center": 0.004212,
    "ess_lib_left_55_plus_secondary_rural_left": 0.00234,
    "ess_lib_left_55_plus_secondary_town_center": 0.007955,
    "ess_lib_left_55_plus_secondary_town_left": 0.00468,
    "ess_lib_left_55_plus_secondary_town_right": 0.000702,
    "ess_lib_left_55_plus_tertiary_large_town_left": 0.001872,
    "ess_lib_left_55_plus_tertiary_rural_left": 0.000702,
    "ess_lib_left_55_plus_tertiary_town_center": 0.000702,
    "ess_lib_left_55_plus_tertiary_town_left": 0.004914,
    "ess_lib_right_15_24_secondary_large_town_right": 0.001654,
    "ess_lib_right_15_24_secondary_rural_right": 0.001338,
    "ess_lib_right_25_39_secondary_large_town_left": 0.00095,
    "ess_lib_right_25_39_secondary_large_town_right": 0.001162,
    "ess_lib_right_25_39_secondary_rural_center": 0.000634,
    "ess_lib_right_25_39_secondary_rural_right": 0.001338,
    "ess_lib_right_25_39_secondary_town_right": 0.000528,
    "ess_lib_right_25_39_tertiary_large_town_center": 0.000704,
    "ess_lib_right_25_39_tertiary_large_town_right": 0.000774,
    "ess_lib_right_25_39_tertiary_rural_right": 0.001267,
    "ess_lib_right_25_39_tertiary_town_right": 0.000563,
    "ess_lib_right_40_54_lower_large_town_right": 0.000598,
    "ess_lib_right_40_54_secondary_large_town_center": 0.002218,
    "ess_lib_right_40_54_secondary_large_town_right": 0.003872,
    "ess_lib_right_40_54_secondary_rural_right": 0.000845,
    "ess_lib_right_40_54_secondary_town_center": 0.000598,
    "ess_lib_right_40_54_tertiary_town_right": 0.000845,
    "ess_lib_right_55_plus_lower_large_town_center": 0.00176,
    "ess_lib_right_55_plus_secondary_large_town_center": 0.001619,
    "ess_lib_right_55_plus_secondary_large_town_right": 0.001443,
    "ess_lib_right_55_plus_secondary_rural_right": 0.000704,
    "ess_lib_right_55_plus_secondary_town_center": 0.00088,
    "ess_lib_right_55_plus_secondary_town_right": 0.00176,
    "ess_lib_right_55_plus_tertiary_large_town_center": 0.001514,
    "ess_lib_right_55_plus_tertiary_large_town_right": 0.002006,
    "ess_lib_right_55_plus_tertiary_rural_right": 0.000563,
    "ess_lib_right_55_plus_tertiary_town_center": 0.001514,
    "ess_trad_left_15_24_lower_large_town_center": 0.001385,
    "ess_trad_left_15_24_secondary_large_town_left": 0.000554,
    "ess_trad_left_15_24_secondary_large_town_right": 0.000554,
    "ess_trad_left_15_24_secondary_town_center": 0.000554,
    "ess_trad_left_15_24_tertiary_town_center": 0.001662,
    "ess_trad_left_25_39_lower_large_town_center": 0.003047,
    "ess_trad_left_25_39_lower_town_center": 0.003878,
    "ess_trad_left_25_39_lower_town_unknown": 0.000554,
    "ess_trad_left_25_39_secondary_large_town_center": 0.005817,
    "ess_trad_left_25_39_secondary_large_town_left": 0.00554,
    "ess_trad_left_25_39_secondary_large_town_unknown": 0.005263,
    "ess_trad_left_25_39_secondary_rural_center": 0.001939,
    "ess_trad_left_25_39_secondary_rural_left": 0.000554,
    "ess_trad_left_25_39_secondary_town_unknown": 0.00277,
    "ess_trad_left_25_39_tertiary_large_town_left": 0.006648,
    "ess_trad_left_25_39_tertiary_rural_center": 0.001108,
    "ess_trad_left_25_39_tertiary_town_left": 0.006371,
    "ess_trad_left_40_54_lower_large_town_center": 0.018281,
    "ess_trad_left_40_54_lower_large_town_left": 0.001385,
    "ess_trad_left_40_54_secondary_large_town_center": 0.01385,
    "ess_trad_left_40_54_secondary_large_town_left": 0.014404,
    "ess_trad_left_40_54_secondary_large_town_unknown": 0.004432,
    "ess_trad_left_40_54_secondary_rural_center": 0.008033,
    "ess_trad_left_40_54_secondary_rural_left": 0.008864,
    "ess_trad_left_40_54_secondary_town_center": 0.018558,
    "ess_trad_left_40_54_secondary_town_left": 0.019112,
    "ess_trad_left_40_54_secondary_town_unknown": 0.000831,
    "ess_trad_left_40_54_tertiary_large_town_left": 0.003324,
    "ess_trad_left_40_54_tertiary_rural_center": 0.01385,
    "ess_trad_left_55_plus_lower_large_town_center": 0.016897,
    "ess_trad_left_55_plus_lower_large_town_left": 0.012465,
    "ess_trad_left_55_plus_lower_rural_center": 0.001108,
    "ess_trad_left_55_plus_lower_rural_left": 0.037948,
    "ess_trad_left_55_plus_secondary_large_town_center": 0.029915,
    "ess_trad_left_55_plus_secondary_large_town_left": 0.081713,
    "ess_trad_left_55_plus_secondary_rural_center": 0.014404,
    "ess_trad_left_55_plus_secondary_rural_left": 0.014127,
    "ess_trad_left_55_plus_secondary_town_center": 0.008587,
    "ess_trad_left_55_plus_secondary_town_left": 0.045427,
    "ess_trad_left_55_plus_secondary_town_unknown": 0.003047,
    "ess_trad_left_55_plus_tertiary_large_town_center": 0.003601,
    "ess_trad_left_55_plus_tertiary_large_town_left": 0.012188,
    "ess_trad_left_55_plus_tertiary_rural_center": 0.006094,
    "ess_trad_left_55_plus_tertiary_rural_left": 0.003324,
    "ess_trad_left_55_plus_tertiary_town_center": 0.004432,
    "ess_trad_left_55_plus_tertiary_town_left": 0.015789,
    "ess_trad_right_15_24_lower_large_town_right": 0.001333,
    "ess_trad_right_15_24_secondary_large_town_right": 0.000952,
    "ess_trad_right_15_24_secondary_rural_left": 0.001143,
    "ess_trad_right_15_24_secondary_town_center": 0.000666,
    "ess_trad_right_15_24_secondary_town_right": 0.002666,
    "ess_trad_right_15_24_tertiary_town_center": 0.000857,
    "ess_trad_right_25_39_lower_rural_unknown": 0.001904,
    "ess_trad_right_25_39_secondary_large_town_center": 0.000762,
    "ess_trad_right_25_39_secondary_large_town_right": 0.000571,
    "ess_trad_right_25_39_secondary_rural_center": 0.006855,
    "ess_trad_right_25_39_secondary_town_center": 0.000571,
    "ess_trad_right_25_39_secondary_town_right": 0.001523,
    "ess_trad_right_25_39_tertiary_large_town_center": 0.000952,
    "ess_trad_right_25_39_tertiary_rural_center": 0.000571,
    "ess_trad_right_40_54_lower_large_town_right": 0.00438,
    "ess_trad_right_40_54_secondary_large_town_right": 0.000762,
    "ess_trad_right_40_54_secondary_large_town_unknown": 0.002856,
    "ess_trad_right_40_54_secondary_rural_center": 0.001809,
    "ess_trad_right_40_54_secondary_rural_right": 0.002761,
    "ess_trad_right_40_54_secondary_town_center": 0.003904,
    "ess_trad_right_40_54_secondary_town_left": 0.000952,
    "ess_trad_right_40_54_secondary_town_right": 0.003904,
    "ess_trad_right_40_54_tertiary_rural_center": 0.001809,
    "ess_trad_right_40_54_tertiary_town_right": 0.001047,
    "ess_trad_right_55_plus_lower_large_town_right": 0.003713,
    "ess_trad_right_55_plus_secondary_large_town_center": 0.006665,
    "ess_trad_right_55_plus_secondary_large_town_right": 0.002761,
    "ess_trad_right_55_plus_secondary_rural_center": 0.005617,
    "ess_trad_right_55_plus_secondary_town_center": 0.002475,
    "ess_trad_right_55_plus_secondary_town_right": 0.005332,
    "ess_trad_right_55_plus_tertiary_large_town_center": 0.001523,
    "ess_trad_right_55_plus_tertiary_large_town_right": 0.001523,
    "ess_trad_right_55_plus_tertiary_rural_center": 0.001809,
    "ess_trad_right_55_plus_tertiary_rural_right": 0.002285,
    "ess_trad_right_55_plus_tertiary_town_right": 0.001904
  }
} satisfies Record<RegionId, Partial<Record<SegmentId, number>>>;
