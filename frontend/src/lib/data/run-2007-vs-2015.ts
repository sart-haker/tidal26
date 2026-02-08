import type { MatchedAnomaly, NewAnomaly, MissingAnomaly, WeldAlignment } from "../types";
export const matched: MatchedAnomaly[] = [
  {
    "run1_idx": 615,
    "run2_idx": 345,
    "confidence": 0.6798,
    "event_type": "CLUSTER",
    "run1_distance": 10505.17,
    "run2_distance": 10515.15,
    "run1_clock": 5.1667,
    "run2_clock": 4.4667,
    "depth_run1": 10,
    "depth_run2": 10,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 4.09,
    "length_run2": 0.94,
    "length_change": -3.15,
    "length_growth_rate": -0.3937,
    "width_run1": 13.28,
    "width_run2": 2.36,
    "width_change": -10.92,
    "width_growth_rate": -1.365,
    "is_critical": false
  },
  {
    "run1_idx": 619,
    "run2_idx": 348,
    "confidence": 0.6726,
    "event_type": "CLUSTER",
    "run1_distance": 10577.51,
    "run2_distance": 10584.12,
    "run1_clock": 6.3333,
    "run2_clock": 6.2167,
    "depth_run1": 12,
    "depth_run2": 12,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 2.87,
    "length_run2": 1.02,
    "length_change": -1.85,
    "length_growth_rate": -0.2312,
    "width_run1": 1.43,
    "width_run2": 1.73,
    "width_change": 0.3,
    "width_growth_rate": 0.0375,
    "is_critical": false
  },
  {
    "run1_idx": 618,
    "run2_idx": 349,
    "confidence": 0.7054,
    "event_type": "CLUSTER",
    "run1_distance": 10575.13,
    "run2_distance": 10584.2,
    "run1_clock": 4.3167,
    "run2_clock": 4.55,
    "depth_run1": 17,
    "depth_run2": 10,
    "depth_change": -7,
    "depth_growth_rate": -0.875,
    "length_run1": 6.35,
    "length_run2": 0.79,
    "length_change": -5.56,
    "length_growth_rate": -0.695,
    "width_run1": 2.87,
    "width_run2": 1.5,
    "width_change": -1.37,
    "width_growth_rate": -0.1713,
    "is_critical": false
  },
  {
    "run1_idx": 617,
    "run2_idx": 350,
    "confidence": 0.5384,
    "event_type": "CLUSTER",
    "run1_distance": 10574.38,
    "run2_distance": 10584.2,
    "run1_clock": 4.35,
    "run2_clock": 5.6833,
    "depth_run1": 21,
    "depth_run2": 13,
    "depth_change": -8,
    "depth_growth_rate": -1,
    "length_run1": 6.8,
    "length_run2": 0.59,
    "length_change": -6.21,
    "length_growth_rate": -0.7762,
    "width_run1": 5.8,
    "width_run2": 0.98,
    "width_change": -4.82,
    "width_growth_rate": -0.6025,
    "is_critical": false
  },
  {
    "run1_idx": 621,
    "run2_idx": 359,
    "confidence": 0.5519,
    "event_type": "METAL_LOSS",
    "run1_distance": 10583.57,
    "run2_distance": 10587.98,
    "run1_clock": 3.8833,
    "run2_clock": 4.2667,
    "depth_run1": 26,
    "depth_run2": 22,
    "depth_change": -4,
    "depth_growth_rate": -0.5,
    "length_run1": 1.06,
    "length_run2": 1.18,
    "length_change": 0.12,
    "length_growth_rate": 0.015,
    "width_run1": 2.28,
    "width_run2": 2.21,
    "width_change": -0.07,
    "width_growth_rate": -0.0087,
    "is_critical": false
  },
  {
    "run1_idx": 620,
    "run2_idx": 365,
    "confidence": 0.5438,
    "event_type": "CLUSTER",
    "run1_distance": 10583.42,
    "run2_distance": 10589.43,
    "run1_clock": 6.45,
    "run2_clock": 5.8667,
    "depth_run1": 19,
    "depth_run2": 10,
    "depth_change": -9,
    "depth_growth_rate": -1.125,
    "length_run1": 2.99,
    "length_run2": 1.65,
    "length_change": -1.34,
    "length_growth_rate": -0.1675,
    "width_run1": 2.91,
    "width_run2": 2.21,
    "width_change": -0.7,
    "width_growth_rate": -0.0875,
    "is_critical": false
  },
  {
    "run1_idx": 629,
    "run2_idx": 379,
    "confidence": 0.9462,
    "event_type": "CLUSTER",
    "run1_distance": 10743.51,
    "run2_distance": 10755.92,
    "run1_clock": 5.3,
    "run2_clock": 5.2167,
    "depth_run1": 23,
    "depth_run2": 20,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 2.6,
    "length_run2": 1.8,
    "length_change": -0.8,
    "length_growth_rate": -0.1,
    "width_run1": 2.39,
    "width_run2": 2.89,
    "width_change": 0.5,
    "width_growth_rate": 0.0625,
    "is_critical": false
  },
  {
    "run1_idx": 638,
    "run2_idx": 389,
    "confidence": 0.9788,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 11046.93,
    "run2_distance": 11060,
    "run1_clock": 3.4167,
    "run2_clock": 3.4,
    "depth_run1": 12,
    "depth_run2": 15,
    "depth_change": 3,
    "depth_growth_rate": 0.375,
    "length_run1": 0.63,
    "length_run2": 0.39,
    "length_change": -0.24,
    "length_growth_rate": -0.03,
    "width_run1": 0.75,
    "width_run2": 0.63,
    "width_change": -0.12,
    "width_growth_rate": -0.015,
    "is_critical": false
  },
  {
    "run1_idx": 667,
    "run2_idx": 419,
    "confidence": 0.951,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 12180.29,
    "run2_distance": 12195.91,
    "run1_clock": 10.5333,
    "run2_clock": 10.5333,
    "depth_run1": 13,
    "depth_run2": 10,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 3.78,
    "length_run2": 2.21,
    "length_change": -1.57,
    "length_growth_rate": -0.1962,
    "width_run1": 1.46,
    "width_run2": 1.61,
    "width_change": 0.15,
    "width_growth_rate": 0.0188,
    "is_critical": false
  },
  {
    "run1_idx": 698,
    "run2_idx": 448,
    "confidence": 0.9654,
    "event_type": "METAL_LOSS",
    "run1_distance": 13139.11,
    "run2_distance": 13155.91,
    "run1_clock": 3.25,
    "run2_clock": 3.3333,
    "depth_run1": 11,
    "depth_run2": 12,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 0.98,
    "length_run2": 0.59,
    "length_change": -0.39,
    "length_growth_rate": -0.0487,
    "width_run1": 1.77,
    "width_run2": 1.34,
    "width_change": -0.43,
    "width_growth_rate": -0.0537,
    "is_critical": false
  },
  {
    "run1_idx": 696,
    "run2_idx": 449,
    "confidence": 0.5252,
    "event_type": "METAL_LOSS",
    "run1_distance": 13138.89,
    "run2_distance": 13155.93,
    "run1_clock": 4.0833,
    "run2_clock": 7.1167,
    "depth_run1": 33,
    "depth_run2": 24,
    "depth_change": -9,
    "depth_growth_rate": -1.125,
    "length_run1": 5.51,
    "length_run2": 1.61,
    "length_change": -3.9,
    "length_growth_rate": -0.4875,
    "width_run1": 0.63,
    "width_run2": 3.7,
    "width_change": 3.07,
    "width_growth_rate": 0.3838,
    "is_critical": false
  },
  {
    "run1_idx": 697,
    "run2_idx": 450,
    "confidence": 0.6416,
    "event_type": "CLUSTER",
    "run1_distance": 13138.9,
    "run2_distance": 13156.18,
    "run1_clock": 4.5833,
    "run2_clock": 3.4833,
    "depth_run1": 34,
    "depth_run2": 23,
    "depth_change": -11,
    "depth_growth_rate": -1.375,
    "length_run1": 8.47,
    "length_run2": 0.67,
    "length_change": -7.8,
    "length_growth_rate": -0.975,
    "width_run1": 25.13,
    "width_run2": 1.3,
    "width_change": -23.83,
    "width_growth_rate": -2.9787,
    "is_critical": false
  },
  {
    "run1_idx": 719,
    "run2_idx": 475,
    "confidence": 0.6027,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 13836.19,
    "run2_distance": 13852.54,
    "run1_clock": 10.65,
    "run2_clock": 1.6,
    "depth_run1": 14,
    "depth_run2": 10,
    "depth_change": -4,
    "depth_growth_rate": -0.5,
    "length_run1": 0.83,
    "length_run2": 0.39,
    "length_change": -0.44,
    "length_growth_rate": -0.055,
    "width_run1": 0.87,
    "width_run2": 0.59,
    "width_change": -0.28,
    "width_growth_rate": -0.035,
    "is_critical": false
  },
  {
    "run1_idx": 756,
    "run2_idx": 527,
    "confidence": 0.9307,
    "event_type": "METAL_LOSS",
    "run1_distance": 14928.01,
    "run2_distance": 14945.13,
    "run1_clock": 1.1833,
    "run2_clock": 1.0667,
    "depth_run1": 26,
    "depth_run2": 36,
    "depth_change": 10,
    "depth_growth_rate": 1.25,
    "length_run1": 0.91,
    "length_run2": 0.59,
    "length_change": -0.32,
    "length_growth_rate": -0.04,
    "width_run1": 0.94,
    "width_run2": 1.26,
    "width_change": 0.32,
    "width_growth_rate": 0.04,
    "is_critical": false
  },
  {
    "run1_idx": 757,
    "run2_idx": 528,
    "confidence": 0.8382,
    "event_type": "CLUSTER",
    "run1_distance": 14928.2,
    "run2_distance": 14945.33,
    "run1_clock": 1.1167,
    "run2_clock": 1.3,
    "depth_run1": 10,
    "depth_run2": 44,
    "depth_change": 34,
    "depth_growth_rate": 4.25,
    "length_run1": 1.57,
    "length_run2": 0.71,
    "length_change": -0.86,
    "length_growth_rate": -0.1075,
    "width_run1": 3.31,
    "width_run2": 1.38,
    "width_change": -1.93,
    "width_growth_rate": -0.2412,
    "is_critical": true
  },
  {
    "run1_idx": 759,
    "run2_idx": 530,
    "confidence": 0.8211,
    "event_type": "CLUSTER",
    "run1_distance": 14943.65,
    "run2_distance": 14960.09,
    "run1_clock": 6.1333,
    "run2_clock": 6.75,
    "depth_run1": 14,
    "depth_run2": 19,
    "depth_change": 5,
    "depth_growth_rate": 0.625,
    "length_run1": 3.23,
    "length_run2": 1.89,
    "length_change": -1.34,
    "length_growth_rate": -0.1675,
    "width_run1": 2.16,
    "width_run2": 0.59,
    "width_change": -1.57,
    "width_growth_rate": -0.1963,
    "is_critical": false
  },
  {
    "run1_idx": 760,
    "run2_idx": 531,
    "confidence": 0.8744,
    "event_type": "CLUSTER",
    "run1_distance": 14944.39,
    "run2_distance": 14960.67,
    "run1_clock": 5,
    "run2_clock": 4.7667,
    "depth_run1": 13,
    "depth_run2": 10,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 4.16,
    "length_run2": 0.75,
    "length_change": -3.41,
    "length_growth_rate": -0.4262,
    "width_run1": 3.35,
    "width_run2": 3.19,
    "width_change": -0.16,
    "width_growth_rate": -0.02,
    "is_critical": false
  },
  {
    "run1_idx": 763,
    "run2_idx": 532,
    "confidence": 0.7429,
    "event_type": "CLUSTER",
    "run1_distance": 14945.2,
    "run2_distance": 14960.83,
    "run1_clock": 4.7667,
    "run2_clock": 5.35,
    "depth_run1": 10,
    "depth_run2": 10,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 8.15,
    "length_run2": 1.3,
    "length_change": -6.85,
    "length_growth_rate": -0.8562,
    "width_run1": 6.03,
    "width_run2": 3.42,
    "width_change": -2.61,
    "width_growth_rate": -0.3263,
    "is_critical": false
  },
  {
    "run1_idx": 761,
    "run2_idx": 534,
    "confidence": 0.5929,
    "event_type": "CLUSTER",
    "run1_distance": 14944.44,
    "run2_distance": 14960.87,
    "run1_clock": 6.8,
    "run2_clock": 5.2333,
    "depth_run1": 14,
    "depth_run2": 24,
    "depth_change": 10,
    "depth_growth_rate": 1.25,
    "length_run1": 7.08,
    "length_run2": 1.02,
    "length_change": -6.06,
    "length_growth_rate": -0.7575,
    "width_run1": 6.14,
    "width_run2": 0.59,
    "width_change": -5.55,
    "width_growth_rate": -0.6937,
    "is_critical": false
  },
  {
    "run1_idx": 766,
    "run2_idx": 535,
    "confidence": 0.6419,
    "event_type": "CLUSTER",
    "run1_distance": 14948.96,
    "run2_distance": 14961.27,
    "run1_clock": 4.7333,
    "run2_clock": 4.7667,
    "depth_run1": 14,
    "depth_run2": 13,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 5.27,
    "length_run2": 1.26,
    "length_change": -4.01,
    "length_growth_rate": -0.5012,
    "width_run1": 8.84,
    "width_run2": 1.42,
    "width_change": -7.42,
    "width_growth_rate": -0.9275,
    "is_critical": false
  },
  {
    "run1_idx": 768,
    "run2_idx": 538,
    "confidence": 0.6529,
    "event_type": "CLUSTER",
    "run1_distance": 14950.79,
    "run2_distance": 14966.01,
    "run1_clock": 5.0667,
    "run2_clock": 5.95,
    "depth_run1": 15,
    "depth_run2": 11,
    "depth_change": -4,
    "depth_growth_rate": -0.5,
    "length_run1": 3.43,
    "length_run2": 2.4,
    "length_change": -1.03,
    "length_growth_rate": -0.1288,
    "width_run1": 3.5,
    "width_run2": 1.38,
    "width_change": -2.12,
    "width_growth_rate": -0.265,
    "is_critical": false
  },
  {
    "run1_idx": 771,
    "run2_idx": 539,
    "confidence": 0.5279,
    "event_type": "METAL_LOSS",
    "run1_distance": 14952.76,
    "run2_distance": 14966.13,
    "run1_clock": 5.7667,
    "run2_clock": 6.4667,
    "depth_run1": 31,
    "depth_run2": 10,
    "depth_change": -21,
    "depth_growth_rate": -2.625,
    "length_run1": 0.98,
    "length_run2": 1.69,
    "length_change": 0.71,
    "length_growth_rate": 0.0888,
    "width_run1": 4.09,
    "width_run2": 1.42,
    "width_change": -2.67,
    "width_growth_rate": -0.3337,
    "is_critical": false
  },
  {
    "run1_idx": 769,
    "run2_idx": 543,
    "confidence": 0.5659,
    "event_type": "CLUSTER",
    "run1_distance": 14951.13,
    "run2_distance": 14967.06,
    "run1_clock": 3.85,
    "run2_clock": 4.6833,
    "depth_run1": 25,
    "depth_run2": 51,
    "depth_change": 26,
    "depth_growth_rate": 3.25,
    "length_run1": 6.48,
    "length_run2": 1.74,
    "length_change": -4.74,
    "length_growth_rate": -0.5925,
    "width_run1": 10.52,
    "width_run2": 5.2,
    "width_change": -5.32,
    "width_growth_rate": -0.665,
    "is_critical": true
  },
  {
    "run1_idx": 774,
    "run2_idx": 579,
    "confidence": 0.7429,
    "event_type": "METAL_LOSS",
    "run1_distance": 15034.27,
    "run2_distance": 15049.79,
    "run1_clock": 8.95,
    "run2_clock": 8.75,
    "depth_run1": 11,
    "depth_run2": 13,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 0.71,
    "length_run2": 0.67,
    "length_change": -0.04,
    "length_growth_rate": -0.005,
    "width_run1": 0.67,
    "width_run2": 1.38,
    "width_change": 0.71,
    "width_growth_rate": 0.0887,
    "is_critical": false
  },
  {
    "run1_idx": 775,
    "run2_idx": 580,
    "confidence": 0.7621,
    "event_type": "CLUSTER",
    "run1_distance": 15036.01,
    "run2_distance": 15052.42,
    "run1_clock": 8.6167,
    "run2_clock": 8.7333,
    "depth_run1": 13,
    "depth_run2": 10,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 3.04,
    "length_run2": 2.13,
    "length_change": -0.91,
    "length_growth_rate": -0.1138,
    "width_run1": 3.31,
    "width_run2": 1.93,
    "width_change": -1.38,
    "width_growth_rate": -0.1725,
    "is_critical": false
  },
  {
    "run1_idx": 777,
    "run2_idx": 595,
    "confidence": 0.8194,
    "event_type": "CLUSTER",
    "run1_distance": 15054.15,
    "run2_distance": 15073.61,
    "run1_clock": 5.3,
    "run2_clock": 5.1667,
    "depth_run1": 15,
    "depth_run2": 10,
    "depth_change": -5,
    "depth_growth_rate": -0.625,
    "length_run1": 5.14,
    "length_run2": 0.75,
    "length_change": -4.39,
    "length_growth_rate": -0.5487,
    "width_run1": 5.32,
    "width_run2": 1.38,
    "width_change": -3.94,
    "width_growth_rate": -0.4925,
    "is_critical": false
  },
  {
    "run1_idx": 778,
    "run2_idx": 601,
    "confidence": 0.7997,
    "event_type": "METAL_LOSS",
    "run1_distance": 15066.49,
    "run2_distance": 15086.08,
    "run1_clock": 3.15,
    "run2_clock": 4.2333,
    "depth_run1": 12,
    "depth_run2": 12,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 1.1,
    "length_run2": 0.87,
    "length_change": -0.23,
    "length_growth_rate": -0.0288,
    "width_run1": 1.02,
    "width_run2": 2.17,
    "width_change": 1.15,
    "width_growth_rate": 0.1438,
    "is_critical": false
  },
  {
    "run1_idx": 779,
    "run2_idx": 605,
    "confidence": 0.8841,
    "event_type": "METAL_LOSS",
    "run1_distance": 15072.99,
    "run2_distance": 15092.78,
    "run1_clock": 8.4833,
    "run2_clock": 8.25,
    "depth_run1": 14,
    "depth_run2": 41,
    "depth_change": 27,
    "depth_growth_rate": 3.375,
    "length_run1": 0.75,
    "length_run2": 0.67,
    "length_change": -0.08,
    "length_growth_rate": -0.01,
    "width_run1": 0.59,
    "width_run2": 1.1,
    "width_change": 0.51,
    "width_growth_rate": 0.0638,
    "is_critical": true
  },
  {
    "run1_idx": 780,
    "run2_idx": 606,
    "confidence": 0.6958,
    "event_type": "METAL_LOSS",
    "run1_distance": 15074.18,
    "run2_distance": 15092.97,
    "run1_clock": 9.4667,
    "run2_clock": 7.95,
    "depth_run1": 18,
    "depth_run2": 11,
    "depth_change": -7,
    "depth_growth_rate": -0.875,
    "length_run1": 0.71,
    "length_run2": 0.83,
    "length_change": 0.12,
    "length_growth_rate": 0.015,
    "width_run1": 0.71,
    "width_run2": 0.63,
    "width_change": -0.08,
    "width_growth_rate": -0.01,
    "is_critical": false
  },
  {
    "run1_idx": 781,
    "run2_idx": 607,
    "confidence": 0.6434,
    "event_type": "CLUSTER",
    "run1_distance": 15075.24,
    "run2_distance": 15092.99,
    "run1_clock": 9.2667,
    "run2_clock": 8.2833,
    "depth_run1": 29,
    "depth_run2": 31,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 4.66,
    "length_run2": 0.98,
    "length_change": -3.68,
    "length_growth_rate": -0.46,
    "width_run1": 2.95,
    "width_run2": 1.38,
    "width_change": -1.57,
    "width_growth_rate": -0.1963,
    "is_critical": false
  },
  {
    "run1_idx": 782,
    "run2_idx": 608,
    "confidence": 0.5333,
    "event_type": "METAL_LOSS",
    "run1_distance": 15075.83,
    "run2_distance": 15093.89,
    "run1_clock": 9.6333,
    "run2_clock": 6.3167,
    "depth_run1": 22,
    "depth_run2": 10,
    "depth_change": -12,
    "depth_growth_rate": -1.5,
    "length_run1": 0.71,
    "length_run2": 1.38,
    "length_change": 0.67,
    "length_growth_rate": 0.0837,
    "width_run1": 0.71,
    "width_run2": 1.89,
    "width_change": 1.18,
    "width_growth_rate": 0.1475,
    "is_critical": false
  },
  {
    "run1_idx": 783,
    "run2_idx": 609,
    "confidence": 0.7789,
    "event_type": "METAL_LOSS",
    "run1_distance": 15078.28,
    "run2_distance": 15093.97,
    "run1_clock": 9.2833,
    "run2_clock": 9.3167,
    "depth_run1": 11,
    "depth_run2": 10,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 0.71,
    "length_run2": 0.59,
    "length_change": -0.12,
    "length_growth_rate": -0.015,
    "width_run1": 0.79,
    "width_run2": 1.06,
    "width_change": 0.27,
    "width_growth_rate": 0.0338,
    "is_critical": false
  },
  {
    "run1_idx": 784,
    "run2_idx": 611,
    "confidence": 0.7437,
    "event_type": "CLUSTER",
    "run1_distance": 15078.58,
    "run2_distance": 15094.95,
    "run1_clock": 9.3,
    "run2_clock": 9.2667,
    "depth_run1": 25,
    "depth_run2": 27,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 3.47,
    "length_run2": 0.47,
    "length_change": -3,
    "length_growth_rate": -0.375,
    "width_run1": 1.28,
    "width_run2": 0.94,
    "width_change": -0.34,
    "width_growth_rate": -0.0425,
    "is_critical": false
  },
  {
    "run1_idx": 785,
    "run2_idx": 621,
    "confidence": 0.8249,
    "event_type": "CLUSTER",
    "run1_distance": 15084.72,
    "run2_distance": 15104.59,
    "run1_clock": 3.7333,
    "run2_clock": 3.1333,
    "depth_run1": 18,
    "depth_run2": 17,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 1.81,
    "length_run2": 0.83,
    "length_change": -0.98,
    "length_growth_rate": -0.1225,
    "width_run1": 6.3,
    "width_run2": 8.9,
    "width_change": 2.6,
    "width_growth_rate": 0.325,
    "is_critical": false
  },
  {
    "run1_idx": 787,
    "run2_idx": 623,
    "confidence": 0.5476,
    "event_type": "CLUSTER",
    "run1_distance": 15086.39,
    "run2_distance": 15106.27,
    "run1_clock": 3.2,
    "run2_clock": 11.7167,
    "depth_run1": 19,
    "depth_run2": 14,
    "depth_change": -5,
    "depth_growth_rate": -0.625,
    "length_run1": 4.32,
    "length_run2": 0.59,
    "length_change": -3.73,
    "length_growth_rate": -0.4663,
    "width_run1": 10.74,
    "width_run2": 1.3,
    "width_change": -9.44,
    "width_growth_rate": -1.18,
    "is_critical": false
  },
  {
    "run1_idx": 796,
    "run2_idx": 641,
    "confidence": 0.6332,
    "event_type": "METAL_LOSS",
    "run1_distance": 15275.68,
    "run2_distance": 15295.63,
    "run1_clock": 4.8,
    "run2_clock": 2.3833,
    "depth_run1": 10,
    "depth_run2": 10,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 2.09,
    "length_run2": 1.38,
    "length_change": -0.71,
    "length_growth_rate": -0.0887,
    "width_run1": 0.71,
    "width_run2": 2.72,
    "width_change": 2.01,
    "width_growth_rate": 0.2513,
    "is_critical": false
  },
  {
    "run1_idx": 803,
    "run2_idx": 648,
    "confidence": 0.6753,
    "event_type": "METAL_LOSS",
    "run1_distance": 15345.69,
    "run2_distance": 15366.08,
    "run1_clock": 4.3333,
    "run2_clock": 2.8833,
    "depth_run1": 24,
    "depth_run2": 12,
    "depth_change": -12,
    "depth_growth_rate": -1.5,
    "length_run1": 2.05,
    "length_run2": 1.02,
    "length_change": -1.03,
    "length_growth_rate": -0.1287,
    "width_run1": 6.02,
    "width_run2": 4.05,
    "width_change": -1.97,
    "width_growth_rate": -0.2462,
    "is_critical": false
  },
  {
    "run1_idx": 807,
    "run2_idx": 653,
    "confidence": 0.6358,
    "event_type": "METAL_LOSS",
    "run1_distance": 15357.47,
    "run2_distance": 15377.43,
    "run1_clock": 5.05,
    "run2_clock": 10.0667,
    "depth_run1": 16,
    "depth_run2": 11,
    "depth_change": -5,
    "depth_growth_rate": -0.625,
    "length_run1": 1.1,
    "length_run2": 0.87,
    "length_change": -0.23,
    "length_growth_rate": -0.0288,
    "width_run1": 1.18,
    "width_run2": 2.44,
    "width_change": 1.26,
    "width_growth_rate": 0.1575,
    "is_critical": false
  },
  {
    "run1_idx": 812,
    "run2_idx": 659,
    "confidence": 0.9804,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 15433.66,
    "run2_distance": 15454.72,
    "run1_clock": 9.7167,
    "run2_clock": 9.75,
    "depth_run1": 20,
    "depth_run2": 21,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 0.51,
    "length_run2": 0.35,
    "length_change": -0.16,
    "length_growth_rate": -0.02,
    "width_run1": 0.71,
    "width_run2": 0.67,
    "width_change": -0.04,
    "width_growth_rate": -0.005,
    "is_critical": false
  },
  {
    "run1_idx": 817,
    "run2_idx": 665,
    "confidence": 0.9188,
    "event_type": "CLUSTER",
    "run1_distance": 15564.27,
    "run2_distance": 15585.19,
    "run1_clock": 4.8167,
    "run2_clock": 4.8833,
    "depth_run1": 24,
    "depth_run2": 21,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 2.72,
    "length_run2": 1.06,
    "length_change": -1.66,
    "length_growth_rate": -0.2075,
    "width_run1": 2.28,
    "width_run2": 1.34,
    "width_change": -0.94,
    "width_growth_rate": -0.1175,
    "is_critical": false
  },
  {
    "run1_idx": 832,
    "run2_idx": 678,
    "confidence": 0.9683,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 16017.19,
    "run2_distance": 16038.87,
    "run1_clock": 7.4833,
    "run2_clock": 7.4167,
    "depth_run1": 10,
    "depth_run2": 13,
    "depth_change": 3,
    "depth_growth_rate": 0.375,
    "length_run1": 0.79,
    "length_run2": 0.35,
    "length_change": -0.44,
    "length_growth_rate": -0.055,
    "width_run1": 0.71,
    "width_run2": 0.63,
    "width_change": -0.08,
    "width_growth_rate": -0.01,
    "is_critical": false
  },
  {
    "run1_idx": 843,
    "run2_idx": 690,
    "confidence": 0.7976,
    "event_type": "METAL_LOSS",
    "run1_distance": 16436.07,
    "run2_distance": 16458.49,
    "run1_clock": 4.9167,
    "run2_clock": 5.65,
    "depth_run1": 10,
    "depth_run2": 12,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 0.94,
    "length_run2": 1.85,
    "length_change": 0.91,
    "length_growth_rate": 0.1138,
    "width_run1": 0.67,
    "width_run2": 3.42,
    "width_change": 2.75,
    "width_growth_rate": 0.3438,
    "is_critical": false
  },
  {
    "run1_idx": 846,
    "run2_idx": 694,
    "confidence": 0.8183,
    "event_type": "CLUSTER",
    "run1_distance": 16509.36,
    "run2_distance": 16532.12,
    "run1_clock": 4.9,
    "run2_clock": 4.5667,
    "depth_run1": 35,
    "depth_run2": 29,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 4.56,
    "length_run2": 2.56,
    "length_change": -2,
    "length_growth_rate": -0.25,
    "width_run1": 11.58,
    "width_run2": 6.51,
    "width_change": -5.07,
    "width_growth_rate": -0.6337,
    "is_critical": false
  },
  {
    "run1_idx": 847,
    "run2_idx": 695,
    "confidence": 0.9642,
    "event_type": "METAL_LOSS",
    "run1_distance": 16509.87,
    "run2_distance": 16532.64,
    "run1_clock": 6.6167,
    "run2_clock": 6.6,
    "depth_run1": 10,
    "depth_run2": 12,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 1.81,
    "length_run2": 1.02,
    "length_change": -0.79,
    "length_growth_rate": -0.0987,
    "width_run1": 2.09,
    "width_run2": 1.69,
    "width_change": -0.4,
    "width_growth_rate": -0.05,
    "is_critical": false
  },
  {
    "run1_idx": 848,
    "run2_idx": 696,
    "confidence": 0.8113,
    "event_type": "CLUSTER",
    "run1_distance": 16515.7,
    "run2_distance": 16538.55,
    "run1_clock": 6.65,
    "run2_clock": 6.9167,
    "depth_run1": 20,
    "depth_run2": 11,
    "depth_change": -9,
    "depth_growth_rate": -1.125,
    "length_run1": 3.48,
    "length_run2": 1.26,
    "length_change": -2.22,
    "length_growth_rate": -0.2775,
    "width_run1": 16.19,
    "width_run2": 4.57,
    "width_change": -11.62,
    "width_growth_rate": -1.4525,
    "is_critical": false
  },
  {
    "run1_idx": 854,
    "run2_idx": 702,
    "confidence": 0.7466,
    "event_type": "METAL_LOSS",
    "run1_distance": 16597.57,
    "run2_distance": 16618.79,
    "run1_clock": 4.8333,
    "run2_clock": 5.3333,
    "depth_run1": 10,
    "depth_run2": 12,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 1.69,
    "length_run2": 0.94,
    "length_change": -0.75,
    "length_growth_rate": -0.0937,
    "width_run1": 8.19,
    "width_run2": 0.59,
    "width_change": -7.6,
    "width_growth_rate": -0.95,
    "is_critical": false
  },
  {
    "run1_idx": 853,
    "run2_idx": 704,
    "confidence": 0.8153,
    "event_type": "METAL_LOSS",
    "run1_distance": 16597.57,
    "run2_distance": 16620.54,
    "run1_clock": 6.4833,
    "run2_clock": 7.5,
    "depth_run1": 12,
    "depth_run2": 13,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 1.61,
    "length_run2": 0.51,
    "length_change": -1.1,
    "length_growth_rate": -0.1375,
    "width_run1": 0.79,
    "width_run2": 0.94,
    "width_change": 0.15,
    "width_growth_rate": 0.0187,
    "is_critical": false
  },
  {
    "run1_idx": 851,
    "run2_idx": 705,
    "confidence": 0.5048,
    "event_type": "METAL_LOSS",
    "run1_distance": 16595.76,
    "run2_distance": 16620.54,
    "run1_clock": 8.2833,
    "run2_clock": 4.9333,
    "depth_run1": 14,
    "depth_run2": 16,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 2.84,
    "length_run2": 1.38,
    "length_change": -1.46,
    "length_growth_rate": -0.1825,
    "width_run1": 0.71,
    "width_run2": 5.55,
    "width_change": 4.84,
    "width_growth_rate": 0.605,
    "is_critical": false
  },
  {
    "run1_idx": 857,
    "run2_idx": 713,
    "confidence": 0.5085,
    "event_type": "CLUSTER",
    "run1_distance": 16677.37,
    "run2_distance": 16699.1,
    "run1_clock": 2.4333,
    "run2_clock": 4.2833,
    "depth_run1": 18,
    "depth_run2": 17,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 4.88,
    "length_run2": 0.67,
    "length_change": -4.21,
    "length_growth_rate": -0.5262,
    "width_run1": 24.86,
    "width_run2": 4.25,
    "width_change": -20.61,
    "width_growth_rate": -2.5762,
    "is_critical": false
  },
  {
    "run1_idx": 860,
    "run2_idx": 727,
    "confidence": 0.731,
    "event_type": "CLUSTER",
    "run1_distance": 16756.69,
    "run2_distance": 16780.45,
    "run1_clock": 3.25,
    "run2_clock": 4.0333,
    "depth_run1": 12,
    "depth_run2": 10,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 4.25,
    "length_run2": 0.32,
    "length_change": -3.93,
    "length_growth_rate": -0.4912,
    "width_run1": 3.86,
    "width_run2": 0.63,
    "width_change": -3.23,
    "width_growth_rate": -0.4037,
    "is_critical": false
  },
  {
    "run1_idx": 901,
    "run2_idx": 770,
    "confidence": 0.8811,
    "event_type": "METAL_LOSS",
    "run1_distance": 18175.92,
    "run2_distance": 18203.47,
    "run1_clock": 5.9667,
    "run2_clock": 5.8667,
    "depth_run1": 23,
    "depth_run2": 28,
    "depth_change": 5,
    "depth_growth_rate": 0.625,
    "length_run1": 0.87,
    "length_run2": 1.69,
    "length_change": 0.82,
    "length_growth_rate": 0.1025,
    "width_run1": 0.87,
    "width_run2": 6.41,
    "width_change": 5.54,
    "width_growth_rate": 0.6925,
    "is_critical": false
  },
  {
    "run1_idx": 900,
    "run2_idx": 771,
    "confidence": 0.8438,
    "event_type": "METAL_LOSS",
    "run1_distance": 18175.91,
    "run2_distance": 18203.62,
    "run1_clock": 6.75,
    "run2_clock": 5.9333,
    "depth_run1": 18,
    "depth_run2": 12,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 0.87,
    "length_run2": 0.67,
    "length_change": -0.2,
    "length_growth_rate": -0.025,
    "width_run1": 0.59,
    "width_run2": 0.75,
    "width_change": 0.16,
    "width_growth_rate": 0.02,
    "is_critical": false
  },
  {
    "run1_idx": 904,
    "run2_idx": 774,
    "confidence": 0.8035,
    "event_type": "METAL_LOSS",
    "run1_distance": 18186.01,
    "run2_distance": 18213.52,
    "run1_clock": 6.0333,
    "run2_clock": 5.0667,
    "depth_run1": 14,
    "depth_run2": 10,
    "depth_change": -4,
    "depth_growth_rate": -0.5,
    "length_run1": 1.1,
    "length_run2": 1.5,
    "length_change": 0.4,
    "length_growth_rate": 0.05,
    "width_run1": 3.42,
    "width_run2": 2.28,
    "width_change": -1.14,
    "width_growth_rate": -0.1425,
    "is_critical": false
  },
  {
    "run1_idx": 920,
    "run2_idx": 793,
    "confidence": 0.5982,
    "event_type": "CLUSTER",
    "run1_distance": 18814.52,
    "run2_distance": 18841.84,
    "run1_clock": 7.3833,
    "run2_clock": 11.7,
    "depth_run1": 67,
    "depth_run2": 10,
    "depth_change": -57,
    "depth_growth_rate": -7.125,
    "length_run1": 1.88,
    "length_run2": 1.38,
    "length_change": -0.5,
    "length_growth_rate": -0.0625,
    "width_run1": 3.5,
    "width_run2": 4.45,
    "width_change": 0.95,
    "width_growth_rate": 0.1188,
    "is_critical": false
  },
  {
    "run1_idx": 936,
    "run2_idx": 813,
    "confidence": 0.9552,
    "event_type": "METAL_LOSS",
    "run1_distance": 19295.4,
    "run2_distance": 19323.51,
    "run1_clock": 5.2833,
    "run2_clock": 5.3167,
    "depth_run1": 12,
    "depth_run2": 16,
    "depth_change": 4,
    "depth_growth_rate": 0.5,
    "length_run1": 1.02,
    "length_run2": 0.63,
    "length_change": -0.39,
    "length_growth_rate": -0.0487,
    "width_run1": 2.99,
    "width_run2": 2.21,
    "width_change": -0.78,
    "width_growth_rate": -0.0975,
    "is_critical": false
  },
  {
    "run1_idx": 965,
    "run2_idx": 842,
    "confidence": 0.8411,
    "event_type": "CLUSTER",
    "run1_distance": 20335.14,
    "run2_distance": 20363.63,
    "run1_clock": 6.6,
    "run2_clock": 6.6833,
    "depth_run1": 21,
    "depth_run2": 34,
    "depth_change": 13,
    "depth_growth_rate": 1.625,
    "length_run1": 3.59,
    "length_run2": 1.98,
    "length_change": -1.61,
    "length_growth_rate": -0.2012,
    "width_run1": 5.01,
    "width_run2": 1.68,
    "width_change": -3.33,
    "width_growth_rate": -0.4162,
    "is_critical": false
  },
  {
    "run1_idx": 966,
    "run2_idx": 843,
    "confidence": 0.9432,
    "event_type": "METAL_LOSS",
    "run1_distance": 20335.33,
    "run2_distance": 20363.82,
    "run1_clock": 7.2833,
    "run2_clock": 7.2833,
    "depth_run1": 11,
    "depth_run2": 25,
    "depth_change": 14,
    "depth_growth_rate": 1.75,
    "length_run1": 1.18,
    "length_run2": 0.75,
    "length_change": -0.43,
    "length_growth_rate": -0.0537,
    "width_run1": 1.89,
    "width_run2": 1.89,
    "width_change": 0,
    "width_growth_rate": 0,
    "is_critical": false
  },
  {
    "run1_idx": 969,
    "run2_idx": 846,
    "confidence": 0.9248,
    "event_type": "METAL_LOSS",
    "run1_distance": 20413.71,
    "run2_distance": 20442.48,
    "run1_clock": 5.7833,
    "run2_clock": 5.9,
    "depth_run1": 11,
    "depth_run2": 19,
    "depth_change": 8,
    "depth_growth_rate": 1,
    "length_run1": 1.81,
    "length_run2": 1.22,
    "length_change": -0.59,
    "length_growth_rate": -0.0738,
    "width_run1": 2.87,
    "width_run2": 2.09,
    "width_change": -0.78,
    "width_growth_rate": -0.0975,
    "is_critical": false
  },
  {
    "run1_idx": 986,
    "run2_idx": 863,
    "confidence": 0.7416,
    "event_type": "CLUSTER",
    "run1_distance": 21019.81,
    "run2_distance": 21048.9,
    "run1_clock": 5.1167,
    "run2_clock": 6.1833,
    "depth_run1": 25,
    "depth_run2": 25,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 1.85,
    "length_run2": 0.55,
    "length_change": -1.3,
    "length_growth_rate": -0.1625,
    "width_run1": 8.88,
    "width_run2": 1.73,
    "width_change": -7.15,
    "width_growth_rate": -0.8937,
    "is_critical": false
  },
  {
    "run1_idx": 998,
    "run2_idx": 875,
    "confidence": 0.5423,
    "event_type": "METAL_LOSS",
    "run1_distance": 21282.59,
    "run2_distance": 21310.24,
    "run1_clock": 9.1667,
    "run2_clock": 5.4833,
    "depth_run1": 14,
    "depth_run2": 32,
    "depth_change": 18,
    "depth_growth_rate": 2.25,
    "length_run1": 1.3,
    "length_run2": 0.75,
    "length_change": -0.55,
    "length_growth_rate": -0.0687,
    "width_run1": 2.05,
    "width_run2": 2.32,
    "width_change": 0.27,
    "width_growth_rate": 0.0338,
    "is_critical": true
  },
  {
    "run1_idx": 996,
    "run2_idx": 876,
    "confidence": 0.6456,
    "event_type": "CLUSTER",
    "run1_distance": 21282.56,
    "run2_distance": 21310.26,
    "run1_clock": 3.8833,
    "run2_clock": 4.6,
    "depth_run1": 28,
    "depth_run2": 17,
    "depth_change": -11,
    "depth_growth_rate": -1.375,
    "length_run1": 4.84,
    "length_run2": 0.55,
    "length_change": -4.29,
    "length_growth_rate": -0.5362,
    "width_run1": 8.11,
    "width_run2": 1.06,
    "width_change": -7.05,
    "width_growth_rate": -0.8812,
    "is_critical": false
  },
  {
    "run1_idx": 997,
    "run2_idx": 878,
    "confidence": 0.6541,
    "event_type": "METAL_LOSS",
    "run1_distance": 21282.57,
    "run2_distance": 21311.75,
    "run1_clock": 8.3833,
    "run2_clock": 5.45,
    "depth_run1": 11,
    "depth_run2": 11,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 1.65,
    "length_run2": 1.06,
    "length_change": -0.59,
    "length_growth_rate": -0.0737,
    "width_run1": 2.28,
    "width_run2": 0.94,
    "width_change": -1.34,
    "width_growth_rate": -0.1675,
    "is_critical": false
  },
  {
    "run1_idx": 999,
    "run2_idx": 879,
    "confidence": 0.8554,
    "event_type": "METAL_LOSS",
    "run1_distance": 21282.59,
    "run2_distance": 21311.82,
    "run1_clock": 7.3,
    "run2_clock": 7.3667,
    "depth_run1": 17,
    "depth_run2": 49,
    "depth_change": 32,
    "depth_growth_rate": 4,
    "length_run1": 1.65,
    "length_run2": 1.62,
    "length_change": -0.03,
    "length_growth_rate": -0.0037,
    "width_run1": 4.21,
    "width_run2": 8.48,
    "width_change": 4.27,
    "width_growth_rate": 0.5338,
    "is_critical": true
  },
  {
    "run1_idx": 1001,
    "run2_idx": 889,
    "confidence": 0.8448,
    "event_type": "CLUSTER",
    "run1_distance": 21307.63,
    "run2_distance": 21336.97,
    "run1_clock": 6.35,
    "run2_clock": 6.3833,
    "depth_run1": 39,
    "depth_run2": 24,
    "depth_change": -15,
    "depth_growth_rate": -1.875,
    "length_run1": 7.13,
    "length_run2": 1.18,
    "length_change": -5.95,
    "length_growth_rate": -0.7437,
    "width_run1": 2.98,
    "width_run2": 1.61,
    "width_change": -1.37,
    "width_growth_rate": -0.1712,
    "is_critical": false
  },
  {
    "run1_idx": 1003,
    "run2_idx": 894,
    "confidence": 0.645,
    "event_type": "METAL_LOSS",
    "run1_distance": 21341.79,
    "run2_distance": 21367.11,
    "run1_clock": 5.7167,
    "run2_clock": 5.4167,
    "depth_run1": 11,
    "depth_run2": 11,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 3.54,
    "length_run2": 1.61,
    "length_change": -1.93,
    "length_growth_rate": -0.2412,
    "width_run1": 6.1,
    "width_run2": 2.21,
    "width_change": -3.89,
    "width_growth_rate": -0.4862,
    "is_critical": false
  },
  {
    "run1_idx": 1004,
    "run2_idx": 908,
    "confidence": 0.665,
    "event_type": "CLUSTER",
    "run1_distance": 21353.03,
    "run2_distance": 21382.4,
    "run1_clock": 4.7167,
    "run2_clock": 5.9167,
    "depth_run1": 23,
    "depth_run2": 38,
    "depth_change": 15,
    "depth_growth_rate": 1.875,
    "length_run1": 4.99,
    "length_run2": 3.3,
    "length_change": -1.69,
    "length_growth_rate": -0.2113,
    "width_run1": 17.47,
    "width_run2": 8.57,
    "width_change": -8.9,
    "width_growth_rate": -1.1125,
    "is_critical": false
  },
  {
    "run1_idx": 1005,
    "run2_idx": 909,
    "confidence": 0.6409,
    "event_type": "CLUSTER",
    "run1_distance": 21355.45,
    "run2_distance": 21382.4,
    "run1_clock": 4.0167,
    "run2_clock": 4.8167,
    "depth_run1": 19,
    "depth_run2": 24,
    "depth_change": 5,
    "depth_growth_rate": 0.625,
    "length_run1": 3.02,
    "length_run2": 1.42,
    "length_change": -1.6,
    "length_growth_rate": -0.2,
    "width_run1": 6.45,
    "width_run2": 3.23,
    "width_change": -3.22,
    "width_growth_rate": -0.4025,
    "is_critical": false
  },
  {
    "run1_idx": 1010,
    "run2_idx": 918,
    "confidence": 0.5143,
    "event_type": "METAL_LOSS",
    "run1_distance": 21362.53,
    "run2_distance": 21385.39,
    "run1_clock": 4.3833,
    "run2_clock": 4.6667,
    "depth_run1": 40,
    "depth_run2": 25,
    "depth_change": -15,
    "depth_growth_rate": -1.875,
    "length_run1": 3.27,
    "length_run2": 1.46,
    "length_change": -1.81,
    "length_growth_rate": -0.2262,
    "width_run1": 0.63,
    "width_run2": 1.89,
    "width_change": 1.26,
    "width_growth_rate": 0.1575,
    "is_critical": false
  },
  {
    "run1_idx": 1006,
    "run2_idx": 922,
    "confidence": 0.8556,
    "event_type": "METAL_LOSS",
    "run1_distance": 21360.9,
    "run2_distance": 21390.28,
    "run1_clock": 7.3667,
    "run2_clock": 7.3833,
    "depth_run1": 26,
    "depth_run2": 54,
    "depth_change": 28,
    "depth_growth_rate": 3.5,
    "length_run1": 1.5,
    "length_run2": 1.14,
    "length_change": -0.36,
    "length_growth_rate": -0.045,
    "width_run1": 7.17,
    "width_run2": 3.64,
    "width_change": -3.53,
    "width_growth_rate": -0.4412,
    "is_critical": true
  },
  {
    "run1_idx": 1008,
    "run2_idx": 925,
    "confidence": 0.6158,
    "event_type": "CLUSTER",
    "run1_distance": 21362.42,
    "run2_distance": 21391.82,
    "run1_clock": 7.1833,
    "run2_clock": 8.6833,
    "depth_run1": 28,
    "depth_run2": 45,
    "depth_change": 17,
    "depth_growth_rate": 2.125,
    "length_run1": 3.66,
    "length_run2": 2.11,
    "length_change": -1.55,
    "length_growth_rate": -0.1938,
    "width_run1": 14.43,
    "width_run2": 5.13,
    "width_change": -9.3,
    "width_growth_rate": -1.1625,
    "is_critical": true
  },
  {
    "run1_idx": 1011,
    "run2_idx": 926,
    "confidence": 0.9116,
    "event_type": "METAL_LOSS",
    "run1_distance": 21362.56,
    "run2_distance": 21391.84,
    "run1_clock": 3.4333,
    "run2_clock": 3.35,
    "depth_run1": 20,
    "depth_run2": 27,
    "depth_change": 7,
    "depth_growth_rate": 0.875,
    "length_run1": 0.83,
    "length_run2": 1.82,
    "length_change": 0.99,
    "length_growth_rate": 0.1238,
    "width_run1": 1.89,
    "width_run2": 3.06,
    "width_change": 1.17,
    "width_growth_rate": 0.1463,
    "is_critical": false
  },
  {
    "run1_idx": 1009,
    "run2_idx": 927,
    "confidence": 0.5977,
    "event_type": "CLUSTER",
    "run1_distance": 21362.49,
    "run2_distance": 21391.89,
    "run1_clock": 5.0333,
    "run2_clock": 6.9,
    "depth_run1": 32,
    "depth_run2": 23,
    "depth_change": -9,
    "depth_growth_rate": -1.125,
    "length_run1": 4.5,
    "length_run2": 1.34,
    "length_change": -3.16,
    "length_growth_rate": -0.395,
    "width_run1": 9.68,
    "width_run2": 8.59,
    "width_change": -1.09,
    "width_growth_rate": -0.1362,
    "is_critical": false
  },
  {
    "run1_idx": 1012,
    "run2_idx": 928,
    "confidence": 0.6157,
    "event_type": "METAL_LOSS",
    "run1_distance": 21362.58,
    "run2_distance": 21391.95,
    "run1_clock": 10.7833,
    "run2_clock": 4.5333,
    "depth_run1": 13,
    "depth_run2": 13,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 1.3,
    "length_run2": 2.09,
    "length_change": 0.79,
    "length_growth_rate": 0.0987,
    "width_run1": 1.42,
    "width_run2": 11.57,
    "width_change": 10.15,
    "width_growth_rate": 1.2688,
    "is_critical": false
  },
  {
    "run1_idx": 1014,
    "run2_idx": 933,
    "confidence": 0.6953,
    "event_type": "CLUSTER",
    "run1_distance": 21438.79,
    "run2_distance": 21468.32,
    "run1_clock": 5.4667,
    "run2_clock": 6.15,
    "depth_run1": 64,
    "depth_run2": 26,
    "depth_change": -38,
    "depth_growth_rate": -4.75,
    "length_run1": 7.79,
    "length_run2": 2.33,
    "length_change": -5.46,
    "length_growth_rate": -0.6825,
    "width_run1": 19.23,
    "width_run2": 8.4,
    "width_change": -10.83,
    "width_growth_rate": -1.3537,
    "is_critical": false
  },
  {
    "run1_idx": 1021,
    "run2_idx": 949,
    "confidence": 0.9892,
    "event_type": "METAL_LOSS",
    "run1_distance": 21680.42,
    "run2_distance": 21710.28,
    "run1_clock": 5.45,
    "run2_clock": 5.4333,
    "depth_run1": 15,
    "depth_run2": 16,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 0.75,
    "length_run2": 0.55,
    "length_change": -0.2,
    "length_growth_rate": -0.025,
    "width_run1": 1.3,
    "width_run2": 1.3,
    "width_change": 0,
    "width_growth_rate": 0,
    "is_critical": false
  },
  {
    "run1_idx": 1028,
    "run2_idx": 955,
    "confidence": 0.9396,
    "event_type": "METAL_LOSS",
    "run1_distance": 21815.32,
    "run2_distance": 21845.43,
    "run1_clock": 6.95,
    "run2_clock": 6.9,
    "depth_run1": 10,
    "depth_run2": 19,
    "depth_change": 9,
    "depth_growth_rate": 1.125,
    "length_run1": 0.91,
    "length_run2": 0.75,
    "length_change": -0.16,
    "length_growth_rate": -0.02,
    "width_run1": 0.87,
    "width_run2": 1.46,
    "width_change": 0.59,
    "width_growth_rate": 0.0738,
    "is_critical": false
  },
  {
    "run1_idx": 1031,
    "run2_idx": 956,
    "confidence": 0.5493,
    "event_type": "METAL_LOSS",
    "run1_distance": 21845.28,
    "run2_distance": 21873.53,
    "run1_clock": 3.9167,
    "run2_clock": 5.35,
    "depth_run1": 11,
    "depth_run2": 34,
    "depth_change": 23,
    "depth_growth_rate": 2.875,
    "length_run1": 1.53,
    "length_run2": 0.75,
    "length_change": -0.78,
    "length_growth_rate": -0.0975,
    "width_run1": 6.34,
    "width_run2": 1.5,
    "width_change": -4.84,
    "width_growth_rate": -0.605,
    "is_critical": true
  },
  {
    "run1_idx": 1030,
    "run2_idx": 957,
    "confidence": 0.5312,
    "event_type": "CLUSTER",
    "run1_distance": 21845.23,
    "run2_distance": 21873.53,
    "run1_clock": 7.3667,
    "run2_clock": 4.3167,
    "depth_run1": 10,
    "depth_run2": 11,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 1.36,
    "length_run2": 0.63,
    "length_change": -0.73,
    "length_growth_rate": -0.0913,
    "width_run1": 4.92,
    "width_run2": 1.3,
    "width_change": -3.62,
    "width_growth_rate": -0.4525,
    "is_critical": false
  },
  {
    "run1_idx": 1038,
    "run2_idx": 975,
    "confidence": 0.5873,
    "event_type": "CLUSTER",
    "run1_distance": 22083.5,
    "run2_distance": 22113.93,
    "run1_clock": 6.9667,
    "run2_clock": 9.1333,
    "depth_run1": 16,
    "depth_run2": 10,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 2.48,
    "length_run2": 1.38,
    "length_change": -1.1,
    "length_growth_rate": -0.1375,
    "width_run1": 11.02,
    "width_run2": 4.61,
    "width_change": -6.41,
    "width_growth_rate": -0.8012,
    "is_critical": false
  },
  {
    "run1_idx": 1037,
    "run2_idx": 976,
    "confidence": 0.5314,
    "event_type": "CLUSTER",
    "run1_distance": 22083.48,
    "run2_distance": 22113.94,
    "run1_clock": 4.65,
    "run2_clock": 7.4,
    "depth_run1": 48,
    "depth_run2": 28,
    "depth_change": -20,
    "depth_growth_rate": -2.5,
    "length_run1": 2.83,
    "length_run2": 1.38,
    "length_change": -1.45,
    "length_growth_rate": -0.1813,
    "width_run1": 11.63,
    "width_run2": 7.99,
    "width_change": -3.64,
    "width_growth_rate": -0.455,
    "is_critical": false
  },
  {
    "run1_idx": 1056,
    "run2_idx": 997,
    "confidence": 0.971,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 22651.75,
    "run2_distance": 22682.66,
    "run1_clock": 2.8667,
    "run2_clock": 2.8333,
    "depth_run1": 13,
    "depth_run2": 10,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 0.83,
    "length_run2": 0.51,
    "length_change": -0.32,
    "length_growth_rate": -0.04,
    "width_run1": 0.55,
    "width_run2": 0.83,
    "width_change": 0.28,
    "width_growth_rate": 0.035,
    "is_critical": false
  },
  {
    "run1_idx": 1061,
    "run2_idx": 1003,
    "confidence": 0.776,
    "event_type": "CLUSTER",
    "run1_distance": 22781.94,
    "run2_distance": 22812.91,
    "run1_clock": 5.75,
    "run2_clock": 6.25,
    "depth_run1": 18,
    "depth_run2": 11,
    "depth_change": -7,
    "depth_growth_rate": -0.875,
    "length_run1": 3.26,
    "length_run2": 0.83,
    "length_change": -2.43,
    "length_growth_rate": -0.3037,
    "width_run1": 5.59,
    "width_run2": 1.61,
    "width_change": -3.98,
    "width_growth_rate": -0.4975,
    "is_critical": false
  },
  {
    "run1_idx": 1069,
    "run2_idx": 1042,
    "confidence": 0.918,
    "event_type": "METAL_LOSS",
    "run1_distance": 23022,
    "run2_distance": 23053.14,
    "run1_clock": 5.3333,
    "run2_clock": 5.35,
    "depth_run1": 14,
    "depth_run2": 37,
    "depth_change": 23,
    "depth_growth_rate": 2.875,
    "length_run1": 1.06,
    "length_run2": 0.67,
    "length_change": -0.39,
    "length_growth_rate": -0.0487,
    "width_run1": 0.94,
    "width_run2": 1.1,
    "width_change": 0.16,
    "width_growth_rate": 0.02,
    "is_critical": true
  },
  {
    "run1_idx": 1070,
    "run2_idx": 1043,
    "confidence": 0.9795,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 23029.38,
    "run2_distance": 23060.55,
    "run1_clock": 7.3333,
    "run2_clock": 7.2833,
    "depth_run1": 12,
    "depth_run2": 10,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 0.47,
    "length_run2": 0.32,
    "length_change": -0.15,
    "length_growth_rate": -0.0187,
    "width_run1": 0.71,
    "width_run2": 0.71,
    "width_change": 0,
    "width_growth_rate": 0,
    "is_critical": false
  },
  {
    "run1_idx": 1071,
    "run2_idx": 1044,
    "confidence": 0.9822,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 23032.33,
    "run2_distance": 23063.48,
    "run1_clock": 3.55,
    "run2_clock": 3.5667,
    "depth_run1": 10,
    "depth_run2": 12,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 0.63,
    "length_run2": 0.39,
    "length_change": -0.24,
    "length_growth_rate": -0.03,
    "width_run1": 0.71,
    "width_run2": 0.67,
    "width_change": -0.04,
    "width_growth_rate": -0.005,
    "is_critical": false
  },
  {
    "run1_idx": 1075,
    "run2_idx": 1049,
    "confidence": 0.5642,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 23161.46,
    "run2_distance": 23198.67,
    "run1_clock": 1.8333,
    "run2_clock": 1.2333,
    "depth_run1": 10,
    "depth_run2": 11,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 3.35,
    "length_run2": 2.17,
    "length_change": -1.18,
    "length_growth_rate": -0.1475,
    "width_run1": 1.22,
    "width_run2": 1.77,
    "width_change": 0.55,
    "width_growth_rate": 0.0688,
    "is_critical": false
  },
  {
    "run1_idx": 1089,
    "run2_idx": 1062,
    "confidence": 0.6938,
    "event_type": "CLUSTER",
    "run1_distance": 23608.37,
    "run2_distance": 23639.84,
    "run1_clock": 2.65,
    "run2_clock": 3.85,
    "depth_run1": 15,
    "depth_run2": 19,
    "depth_change": 4,
    "depth_growth_rate": 0.5,
    "length_run1": 2.78,
    "length_run2": 0.79,
    "length_change": -1.99,
    "length_growth_rate": -0.2487,
    "width_run1": 17.2,
    "width_run2": 3.98,
    "width_change": -13.22,
    "width_growth_rate": -1.6525,
    "is_critical": false
  },
  {
    "run1_idx": 1090,
    "run2_idx": 1063,
    "confidence": 0.71,
    "event_type": "CLUSTER",
    "run1_distance": 23635.74,
    "run2_distance": 23667.04,
    "run1_clock": 12.2833,
    "run2_clock": 11.4667,
    "depth_run1": 23,
    "depth_run2": 15,
    "depth_change": -8,
    "depth_growth_rate": -1,
    "length_run1": 5.95,
    "length_run2": 0.87,
    "length_change": -5.08,
    "length_growth_rate": -0.635,
    "width_run1": 8.4,
    "width_run2": 3.66,
    "width_change": -4.74,
    "width_growth_rate": -0.5925,
    "is_critical": false
  },
  {
    "run1_idx": 1093,
    "run2_idx": 1073,
    "confidence": 0.8217,
    "event_type": "CLUSTER",
    "run1_distance": 23674.28,
    "run2_distance": 23705.79,
    "run1_clock": 3.0833,
    "run2_clock": 2.8667,
    "depth_run1": 29,
    "depth_run2": 48,
    "depth_change": 19,
    "depth_growth_rate": 2.375,
    "length_run1": 2.45,
    "length_run2": 1.81,
    "length_change": -0.64,
    "length_growth_rate": -0.08,
    "width_run1": 28.97,
    "width_run2": 5.32,
    "width_change": -23.65,
    "width_growth_rate": -2.9562,
    "is_critical": true
  },
  {
    "run1_idx": 1095,
    "run2_idx": 1074,
    "confidence": 0.61,
    "event_type": "CLUSTER",
    "run1_distance": 23674.34,
    "run2_distance": 23705.81,
    "run1_clock": 8.9,
    "run2_clock": 6.2833,
    "depth_run1": 16,
    "depth_run2": 61,
    "depth_change": 45,
    "depth_growth_rate": 5.625,
    "length_run1": 1.39,
    "length_run2": 1.42,
    "length_change": 0.03,
    "length_growth_rate": 0.0038,
    "width_run1": 6.24,
    "width_run2": 7.24,
    "width_change": 1,
    "width_growth_rate": 0.125,
    "is_critical": true
  },
  {
    "run1_idx": 1097,
    "run2_idx": 1075,
    "confidence": 0.6524,
    "event_type": "METAL_LOSS",
    "run1_distance": 23675.98,
    "run2_distance": 23705.81,
    "run1_clock": 5.15,
    "run2_clock": 4.2,
    "depth_run1": 26,
    "depth_run2": 42,
    "depth_change": 16,
    "depth_growth_rate": 2,
    "length_run1": 0.98,
    "length_run2": 1.1,
    "length_change": 0.12,
    "length_growth_rate": 0.015,
    "width_run1": 1.14,
    "width_run2": 5.04,
    "width_change": 3.9,
    "width_growth_rate": 0.4875,
    "is_critical": false
  },
  {
    "run1_idx": 1094,
    "run2_idx": 1076,
    "confidence": 0.8575,
    "event_type": "METAL_LOSS",
    "run1_distance": 23674.29,
    "run2_distance": 23705.81,
    "run1_clock": 8.05,
    "run2_clock": 7.7833,
    "depth_run1": 14,
    "depth_run2": 21,
    "depth_change": 7,
    "depth_growth_rate": 0.875,
    "length_run1": 2.09,
    "length_run2": 1.22,
    "length_change": -0.87,
    "length_growth_rate": -0.1087,
    "width_run1": 1.3,
    "width_run2": 3.9,
    "width_change": 2.6,
    "width_growth_rate": 0.325,
    "is_critical": false
  },
  {
    "run1_idx": 1099,
    "run2_idx": 1083,
    "confidence": 0.7897,
    "event_type": "CLUSTER",
    "run1_distance": 23754.1,
    "run2_distance": 23785.78,
    "run1_clock": 5.4667,
    "run2_clock": 5.2833,
    "depth_run1": 38,
    "depth_run2": 85,
    "depth_change": 47,
    "depth_growth_rate": 5.875,
    "length_run1": 3.04,
    "length_run2": 1.02,
    "length_change": -2.02,
    "length_growth_rate": -0.2525,
    "width_run1": 10.01,
    "width_run2": 4.65,
    "width_change": -5.36,
    "width_growth_rate": -0.67,
    "is_critical": true
  },
  {
    "run1_idx": 1124,
    "run2_idx": 1112,
    "confidence": 0.9138,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 24662.22,
    "run2_distance": 24696.32,
    "run1_clock": 8.9167,
    "run2_clock": 8.85,
    "depth_run1": 13,
    "depth_run2": 20,
    "depth_change": 7,
    "depth_growth_rate": 0.875,
    "length_run1": 3.78,
    "length_run2": 2.28,
    "length_change": -1.5,
    "length_growth_rate": -0.1875,
    "width_run1": 2.01,
    "width_run2": 1.3,
    "width_change": -0.71,
    "width_growth_rate": -0.0887,
    "is_critical": false
  },
  {
    "run1_idx": 1160,
    "run2_idx": 1151,
    "confidence": 0.9818,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 25875.11,
    "run2_distance": 25912.13,
    "run1_clock": 2.2333,
    "run2_clock": 2.2,
    "depth_run1": 12,
    "depth_run2": 11,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 0.55,
    "length_run2": 0.35,
    "length_change": -0.2,
    "length_growth_rate": -0.025,
    "width_run1": 0.71,
    "width_run2": 0.87,
    "width_change": 0.16,
    "width_growth_rate": 0.02,
    "is_critical": false
  },
  {
    "run1_idx": 1177,
    "run2_idx": 1169,
    "confidence": 0.9147,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 26416.04,
    "run2_distance": 26454.26,
    "run1_clock": 3.5333,
    "run2_clock": 3.4833,
    "depth_run1": 21,
    "depth_run2": 12,
    "depth_change": -9,
    "depth_growth_rate": -1.125,
    "length_run1": 3.62,
    "length_run2": 2.32,
    "length_change": -1.3,
    "length_growth_rate": -0.1625,
    "width_run1": 0.59,
    "width_run2": 1.26,
    "width_change": 0.67,
    "width_growth_rate": 0.0838,
    "is_critical": false
  },
  {
    "run1_idx": 1190,
    "run2_idx": 1183,
    "confidence": 0.9079,
    "event_type": "METAL_LOSS",
    "run1_distance": 26867.58,
    "run2_distance": 26906.78,
    "run1_clock": 7.45,
    "run2_clock": 7.4167,
    "depth_run1": 15,
    "depth_run2": 35,
    "depth_change": 20,
    "depth_growth_rate": 2.5,
    "length_run1": 1.38,
    "length_run2": 0.71,
    "length_change": -0.67,
    "length_growth_rate": -0.0837,
    "width_run1": 1.5,
    "width_run2": 1.3,
    "width_change": -0.2,
    "width_growth_rate": -0.025,
    "is_critical": true
  },
  {
    "run1_idx": 1191,
    "run2_idx": 1184,
    "confidence": 0.9032,
    "event_type": "METAL_LOSS",
    "run1_distance": 26867.91,
    "run2_distance": 26907.12,
    "run1_clock": 7.8,
    "run2_clock": 7.7333,
    "depth_run1": 14,
    "depth_run2": 40,
    "depth_change": 26,
    "depth_growth_rate": 3.25,
    "length_run1": 1.58,
    "length_run2": 0.94,
    "length_change": -0.64,
    "length_growth_rate": -0.08,
    "width_run1": 2.01,
    "width_run2": 1.81,
    "width_change": -0.2,
    "width_growth_rate": -0.025,
    "is_critical": true
  },
  {
    "run1_idx": 1193,
    "run2_idx": 1185,
    "confidence": 0.8375,
    "event_type": "CLUSTER",
    "run1_distance": 26868.17,
    "run2_distance": 26907.12,
    "run1_clock": 6.0833,
    "run2_clock": 6.0667,
    "depth_run1": 22,
    "depth_run2": 44,
    "depth_change": 22,
    "depth_growth_rate": 2.75,
    "length_run1": 2.58,
    "length_run2": 0.67,
    "length_change": -1.91,
    "length_growth_rate": -0.2387,
    "width_run1": 2.83,
    "width_run2": 1.06,
    "width_change": -1.77,
    "width_growth_rate": -0.2212,
    "is_critical": true
  },
  {
    "run1_idx": 1192,
    "run2_idx": 1186,
    "confidence": 0.5573,
    "event_type": "CLUSTER",
    "run1_distance": 26867.93,
    "run2_distance": 26907.12,
    "run1_clock": 4.3833,
    "run2_clock": 8.85,
    "depth_run1": 31,
    "depth_run2": 13,
    "depth_change": -18,
    "depth_growth_rate": -2.25,
    "length_run1": 1.33,
    "length_run2": 0.63,
    "length_change": -0.7,
    "length_growth_rate": -0.0875,
    "width_run1": 11.88,
    "width_run2": 1.18,
    "width_change": -10.7,
    "width_growth_rate": -1.3375,
    "is_critical": false
  },
  {
    "run1_idx": 1196,
    "run2_idx": 1192,
    "confidence": 0.5867,
    "event_type": "CLUSTER",
    "run1_distance": 26930.57,
    "run2_distance": 26969.94,
    "run1_clock": 2.1833,
    "run2_clock": 4.0667,
    "depth_run1": 12,
    "depth_run2": 14,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 3.12,
    "length_run2": 0.55,
    "length_change": -2.57,
    "length_growth_rate": -0.3213,
    "width_run1": 4.82,
    "width_run2": 0.75,
    "width_change": -4.07,
    "width_growth_rate": -0.5087,
    "is_critical": false
  },
  {
    "run1_idx": 1200,
    "run2_idx": 1200,
    "confidence": 0.8419,
    "event_type": "METAL_LOSS",
    "run1_distance": 26946.29,
    "run2_distance": 26985.1,
    "run1_clock": 12.4,
    "run2_clock": 11.9333,
    "depth_run1": 25,
    "depth_run2": 23,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 2.68,
    "length_run2": 0.63,
    "length_change": -2.05,
    "length_growth_rate": -0.2563,
    "width_run1": 0.71,
    "width_run2": 2.01,
    "width_change": 1.3,
    "width_growth_rate": 0.1625,
    "is_critical": false
  },
  {
    "run1_idx": 1211,
    "run2_idx": 1217,
    "confidence": 0.9561,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 27316.61,
    "run2_distance": 27356.48,
    "run1_clock": 5.9,
    "run2_clock": 5.8333,
    "depth_run1": 16,
    "depth_run2": 11,
    "depth_change": -5,
    "depth_growth_rate": -0.625,
    "length_run1": 0.91,
    "length_run2": 0.51,
    "length_change": -0.4,
    "length_growth_rate": -0.05,
    "width_run1": 0.83,
    "width_run2": 1.14,
    "width_change": 0.31,
    "width_growth_rate": 0.0387,
    "is_critical": false
  },
  {
    "run1_idx": 1233,
    "run2_idx": 1235,
    "confidence": 0.9733,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 27944.8,
    "run2_distance": 27985.61,
    "run1_clock": 10.0667,
    "run2_clock": 10.1167,
    "depth_run1": 20,
    "depth_run2": 18,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 1.06,
    "length_run2": 0.79,
    "length_change": -0.27,
    "length_growth_rate": -0.0337,
    "width_run1": 1.18,
    "width_run2": 1.46,
    "width_change": 0.28,
    "width_growth_rate": 0.035,
    "is_critical": false
  },
  {
    "run1_idx": 1262,
    "run2_idx": 1269,
    "confidence": 0.5079,
    "event_type": "CLUSTER",
    "run1_distance": 28814.67,
    "run2_distance": 28857.18,
    "run1_clock": 4.1,
    "run2_clock": 6.7167,
    "depth_run1": 30,
    "depth_run2": 46,
    "depth_change": 16,
    "depth_growth_rate": 2,
    "length_run1": 4.73,
    "length_run2": 1.73,
    "length_change": -3,
    "length_growth_rate": -0.375,
    "width_run1": 21.05,
    "width_run2": 2.4,
    "width_change": -18.65,
    "width_growth_rate": -2.3313,
    "is_critical": false
  },
  {
    "run1_idx": 1272,
    "run2_idx": 1285,
    "confidence": 0.5535,
    "event_type": "CLUSTER",
    "run1_distance": 29128.12,
    "run2_distance": 29171.19,
    "run1_clock": 3.9,
    "run2_clock": 5.9667,
    "depth_run1": 38,
    "depth_run2": 49,
    "depth_change": 11,
    "depth_growth_rate": 1.375,
    "length_run1": 3.5,
    "length_run2": 1.69,
    "length_change": -1.81,
    "length_growth_rate": -0.2262,
    "width_run1": 20.36,
    "width_run2": 7.08,
    "width_change": -13.28,
    "width_growth_rate": -1.66,
    "is_critical": false
  },
  {
    "run1_idx": 1275,
    "run2_idx": 1289,
    "confidence": 0.8105,
    "event_type": "METAL_LOSS",
    "run1_distance": 29206.49,
    "run2_distance": 29249.65,
    "run1_clock": 7.45,
    "run2_clock": 7.9167,
    "depth_run1": 38,
    "depth_run2": 48,
    "depth_change": 10,
    "depth_growth_rate": 1.25,
    "length_run1": 2.09,
    "length_run2": 1.26,
    "length_change": -0.83,
    "length_growth_rate": -0.1037,
    "width_run1": 9.8,
    "width_run2": 4.8,
    "width_change": -5,
    "width_growth_rate": -0.625,
    "is_critical": false
  },
  {
    "run1_idx": 1276,
    "run2_idx": 1290,
    "confidence": 0.8503,
    "event_type": "METAL_LOSS",
    "run1_distance": 29206.54,
    "run2_distance": 29249.68,
    "run1_clock": 3.7,
    "run2_clock": 3.9833,
    "depth_run1": 17,
    "depth_run2": 31,
    "depth_change": 14,
    "depth_growth_rate": 1.75,
    "length_run1": 1.18,
    "length_run2": 0.67,
    "length_change": -0.51,
    "length_growth_rate": -0.0637,
    "width_run1": 5.95,
    "width_run2": 3.74,
    "width_change": -2.21,
    "width_growth_rate": -0.2762,
    "is_critical": false
  },
  {
    "run1_idx": 1277,
    "run2_idx": 1291,
    "confidence": 0.8152,
    "event_type": "CLUSTER",
    "run1_distance": 29206.61,
    "run2_distance": 29249.86,
    "run1_clock": 5.2333,
    "run2_clock": 5.55,
    "depth_run1": 32,
    "depth_run2": 35,
    "depth_change": 3,
    "depth_growth_rate": 0.375,
    "length_run1": 4.13,
    "length_run2": 1.65,
    "length_change": -2.48,
    "length_growth_rate": -0.31,
    "width_run1": 10.41,
    "width_run2": 4.05,
    "width_change": -6.36,
    "width_growth_rate": -0.795,
    "is_critical": false
  },
  {
    "run1_idx": 1281,
    "run2_idx": 1293,
    "confidence": 0.8275,
    "event_type": "METAL_LOSS",
    "run1_distance": 29208.13,
    "run2_distance": 29251.38,
    "run1_clock": 5.8667,
    "run2_clock": 5.9167,
    "depth_run1": 36,
    "depth_run2": 14,
    "depth_change": -22,
    "depth_growth_rate": -2.75,
    "length_run1": 4.41,
    "length_run2": 1.34,
    "length_change": -3.07,
    "length_growth_rate": -0.3838,
    "width_run1": 1.18,
    "width_run2": 2.36,
    "width_change": 1.18,
    "width_growth_rate": 0.1475,
    "is_critical": false
  },
  {
    "run1_idx": 1279,
    "run2_idx": 1294,
    "confidence": 0.7304,
    "event_type": "CLUSTER",
    "run1_distance": 29207.99,
    "run2_distance": 29251.39,
    "run1_clock": 4.8,
    "run2_clock": 5.55,
    "depth_run1": 21,
    "depth_run2": 15,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 6.46,
    "length_run2": 1.81,
    "length_change": -4.65,
    "length_growth_rate": -0.5812,
    "width_run1": 3.65,
    "width_run2": 1.06,
    "width_change": -2.59,
    "width_growth_rate": -0.3237,
    "is_critical": false
  },
  {
    "run1_idx": 1287,
    "run2_idx": 1301,
    "confidence": 0.8557,
    "event_type": "METAL_LOSS",
    "run1_distance": 29410.95,
    "run2_distance": 29453.57,
    "run1_clock": 5.6667,
    "run2_clock": 6.0833,
    "depth_run1": 13,
    "depth_run2": 17,
    "depth_change": 4,
    "depth_growth_rate": 0.5,
    "length_run1": 1.38,
    "length_run2": 1.26,
    "length_change": -0.12,
    "length_growth_rate": -0.015,
    "width_run1": 1.06,
    "width_run2": 1.89,
    "width_change": 0.83,
    "width_growth_rate": 0.1037,
    "is_critical": false
  },
  {
    "run1_idx": 1288,
    "run2_idx": 1302,
    "confidence": 0.618,
    "event_type": "CLUSTER",
    "run1_distance": 29414.83,
    "run2_distance": 29454.29,
    "run1_clock": 5.95,
    "run2_clock": 5.6833,
    "depth_run1": 11,
    "depth_run2": 10,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 4.56,
    "length_run2": 0.91,
    "length_change": -3.65,
    "length_growth_rate": -0.4562,
    "width_run1": 6.12,
    "width_run2": 1.3,
    "width_change": -4.82,
    "width_growth_rate": -0.6025,
    "is_critical": false
  },
  {
    "run1_idx": 1289,
    "run2_idx": 1307,
    "confidence": 0.6475,
    "event_type": "CLUSTER",
    "run1_distance": 29417.63,
    "run2_distance": 29458.65,
    "run1_clock": 5.3,
    "run2_clock": 5.85,
    "depth_run1": 22,
    "depth_run2": 12,
    "depth_change": -10,
    "depth_growth_rate": -1.25,
    "length_run1": 6.3,
    "length_run2": 1.18,
    "length_change": -5.12,
    "length_growth_rate": -0.64,
    "width_run1": 3.35,
    "width_run2": 1.42,
    "width_change": -1.93,
    "width_growth_rate": -0.2412,
    "is_critical": false
  },
  {
    "run1_idx": 1290,
    "run2_idx": 1308,
    "confidence": 0.8071,
    "event_type": "CLUSTER",
    "run1_distance": 29419.53,
    "run2_distance": 29464.32,
    "run1_clock": 5.2833,
    "run2_clock": 5.05,
    "depth_run1": 22,
    "depth_run2": 11,
    "depth_change": -11,
    "depth_growth_rate": -1.375,
    "length_run1": 4.18,
    "length_run2": 2.36,
    "length_change": -1.82,
    "length_growth_rate": -0.2275,
    "width_run1": 2.91,
    "width_run2": 2.05,
    "width_change": -0.86,
    "width_growth_rate": -0.1075,
    "is_critical": false
  },
  {
    "run1_idx": 1292,
    "run2_idx": 1319,
    "confidence": 0.5584,
    "event_type": "METAL_LOSS",
    "run1_distance": 29446.92,
    "run2_distance": 29485.33,
    "run1_clock": 8.3667,
    "run2_clock": 7.9833,
    "depth_run1": 42,
    "depth_run2": 11,
    "depth_change": -31,
    "depth_growth_rate": -3.875,
    "length_run1": 1.02,
    "length_run2": 0.91,
    "length_change": -0.11,
    "length_growth_rate": -0.0137,
    "width_run1": 3.86,
    "width_run2": 1.22,
    "width_change": -2.64,
    "width_growth_rate": -0.33,
    "is_critical": false
  },
  {
    "run1_idx": 1291,
    "run2_idx": 1324,
    "confidence": 0.6053,
    "event_type": "METAL_LOSS",
    "run1_distance": 29446.91,
    "run2_distance": 29490.44,
    "run1_clock": 4.95,
    "run2_clock": 8.4333,
    "depth_run1": 15,
    "depth_run2": 44,
    "depth_change": 29,
    "depth_growth_rate": 3.625,
    "length_run1": 0.91,
    "length_run2": 0.71,
    "length_change": -0.2,
    "length_growth_rate": -0.025,
    "width_run1": 1.22,
    "width_run2": 2.28,
    "width_change": 1.06,
    "width_growth_rate": 0.1325,
    "is_critical": true
  },
  {
    "run1_idx": 1294,
    "run2_idx": 1328,
    "confidence": 0.9729,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 29452.86,
    "run2_distance": 29496.67,
    "run1_clock": 6.4667,
    "run2_clock": 6.5167,
    "depth_run1": 15,
    "depth_run2": 15,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 0.55,
    "length_run2": 0.35,
    "length_change": -0.2,
    "length_growth_rate": -0.025,
    "width_run1": 0.71,
    "width_run2": 0.63,
    "width_change": -0.08,
    "width_growth_rate": -0.01,
    "is_critical": false
  },
  {
    "run1_idx": 1317,
    "run2_idx": 1352,
    "confidence": 0.8364,
    "event_type": "METAL_LOSS",
    "run1_distance": 30262.24,
    "run2_distance": 30307.15,
    "run1_clock": 6.3333,
    "run2_clock": 6.15,
    "depth_run1": 10,
    "depth_run2": 48,
    "depth_change": 38,
    "depth_growth_rate": 4.75,
    "length_run1": 1.26,
    "length_run2": 1.37,
    "length_change": 0.11,
    "length_growth_rate": 0.0138,
    "width_run1": 1.65,
    "width_run2": 4.84,
    "width_change": 3.19,
    "width_growth_rate": 0.3988,
    "is_critical": true
  },
  {
    "run1_idx": 1318,
    "run2_idx": 1353,
    "confidence": 0.9154,
    "event_type": "METAL_LOSS",
    "run1_distance": 30264,
    "run2_distance": 30308.39,
    "run1_clock": 4.7833,
    "run2_clock": 4.4667,
    "depth_run1": 10,
    "depth_run2": 11,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 1.06,
    "length_run2": 1.38,
    "length_change": 0.32,
    "length_growth_rate": 0.04,
    "width_run1": 1.14,
    "width_run2": 1.18,
    "width_change": 0.04,
    "width_growth_rate": 0.005,
    "is_critical": false
  },
  {
    "run1_idx": 1325,
    "run2_idx": 1368,
    "confidence": 0.6008,
    "event_type": "CLUSTER",
    "run1_distance": 30471.96,
    "run2_distance": 30517.65,
    "run1_clock": 6.1,
    "run2_clock": 7.6833,
    "depth_run1": 17,
    "depth_run2": 11,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 4.76,
    "length_run2": 1.73,
    "length_change": -3.03,
    "length_growth_rate": -0.3787,
    "width_run1": 11.46,
    "width_run2": 1.1,
    "width_change": -10.36,
    "width_growth_rate": -1.295,
    "is_critical": false
  },
  {
    "run1_idx": 1332,
    "run2_idx": 1371,
    "confidence": 0.8991,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 30576.1,
    "run2_distance": 30621.83,
    "run1_clock": 11.55,
    "run2_clock": 11.45,
    "depth_run1": 15,
    "depth_run2": 13,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 3.58,
    "length_run2": 2.28,
    "length_change": -1.3,
    "length_growth_rate": -0.1625,
    "width_run1": 7.01,
    "width_run2": 4.84,
    "width_change": -2.17,
    "width_growth_rate": -0.2712,
    "is_critical": false
  },
  {
    "run1_idx": 1336,
    "run2_idx": 1372,
    "confidence": 0.8505,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 30578.61,
    "run2_distance": 30624.35,
    "run1_clock": 11.4667,
    "run2_clock": 11.65,
    "depth_run1": 28,
    "depth_run2": 10,
    "depth_change": -18,
    "depth_growth_rate": -2.25,
    "length_run1": 3.94,
    "length_run2": 2.17,
    "length_change": -1.77,
    "length_growth_rate": -0.2212,
    "width_run1": 6.38,
    "width_run2": 5.47,
    "width_change": -0.91,
    "width_growth_rate": -0.1138,
    "is_critical": false
  },
  {
    "run1_idx": 1355,
    "run2_idx": 1391,
    "confidence": 0.9923,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 31013.67,
    "run2_distance": 31060.9,
    "run1_clock": 4.2667,
    "run2_clock": 4.25,
    "depth_run1": 15,
    "depth_run2": 15,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 0.47,
    "length_run2": 0.32,
    "length_change": -0.15,
    "length_growth_rate": -0.0187,
    "width_run1": 0.71,
    "width_run2": 0.63,
    "width_change": -0.08,
    "width_growth_rate": -0.01,
    "is_critical": false
  },
  {
    "run1_idx": 1372,
    "run2_idx": 1414,
    "confidence": 0.5766,
    "event_type": "CLUSTER",
    "run1_distance": 31509.12,
    "run2_distance": 31555.44,
    "run1_clock": 2.2833,
    "run2_clock": 1.2167,
    "depth_run1": 31,
    "depth_run2": 28,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 6.41,
    "length_run2": 0.87,
    "length_change": -5.54,
    "length_growth_rate": -0.6925,
    "width_run1": 31.02,
    "width_run2": 1.3,
    "width_change": -29.72,
    "width_growth_rate": -3.715,
    "is_critical": false
  },
  {
    "run1_idx": 1373,
    "run2_idx": 1417,
    "confidence": 0.5658,
    "event_type": "CLUSTER",
    "run1_distance": 31509.22,
    "run2_distance": 31558.06,
    "run1_clock": 10.0833,
    "run2_clock": 4.6667,
    "depth_run1": 14,
    "depth_run2": 10,
    "depth_change": -4,
    "depth_growth_rate": -0.5,
    "length_run1": 3.59,
    "length_run2": 1.22,
    "length_change": -2.37,
    "length_growth_rate": -0.2962,
    "width_run1": 14.6,
    "width_run2": 3.35,
    "width_change": -11.25,
    "width_growth_rate": -1.4062,
    "is_critical": false
  },
  {
    "run1_idx": 1377,
    "run2_idx": 1421,
    "confidence": 0.7741,
    "event_type": "CLUSTER",
    "run1_distance": 31549.2,
    "run2_distance": 31597.75,
    "run1_clock": 5.4,
    "run2_clock": 5.9167,
    "depth_run1": 12,
    "depth_run2": 11,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 4.92,
    "length_run2": 1.38,
    "length_change": -3.54,
    "length_growth_rate": -0.4425,
    "width_run1": 4.34,
    "width_run2": 1.22,
    "width_change": -3.12,
    "width_growth_rate": -0.39,
    "is_critical": false
  },
  {
    "run1_idx": 1376,
    "run2_idx": 1422,
    "confidence": 0.5035,
    "event_type": "CLUSTER",
    "run1_distance": 31549.2,
    "run2_distance": 31598.12,
    "run1_clock": 2.9,
    "run2_clock": 8.6167,
    "depth_run1": 28,
    "depth_run2": 11,
    "depth_change": -17,
    "depth_growth_rate": -2.125,
    "length_run1": 5.63,
    "length_run2": 1.1,
    "length_change": -4.53,
    "length_growth_rate": -0.5662,
    "width_run1": 6.43,
    "width_run2": 0.94,
    "width_change": -5.49,
    "width_growth_rate": -0.6862,
    "is_critical": false
  },
  {
    "run1_idx": 1378,
    "run2_idx": 1428,
    "confidence": 0.7948,
    "event_type": "CLUSTER",
    "run1_distance": 31551.06,
    "run2_distance": 31599.89,
    "run1_clock": 11.5,
    "run2_clock": 11.95,
    "depth_run1": 11,
    "depth_run2": 10,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 6.3,
    "length_run2": 0.91,
    "length_change": -5.39,
    "length_growth_rate": -0.6737,
    "width_run1": 7.92,
    "width_run2": 1.65,
    "width_change": -6.27,
    "width_growth_rate": -0.7837,
    "is_critical": false
  },
  {
    "run1_idx": 1383,
    "run2_idx": 1435,
    "confidence": 0.8612,
    "event_type": "CLUSTER",
    "run1_distance": 31574.95,
    "run2_distance": 31623.69,
    "run1_clock": 3.9667,
    "run2_clock": 4.0667,
    "depth_run1": 10,
    "depth_run2": 14,
    "depth_change": 4,
    "depth_growth_rate": 0.5,
    "length_run1": 3.01,
    "length_run2": 0.91,
    "length_change": -2.1,
    "length_growth_rate": -0.2625,
    "width_run1": 5.43,
    "width_run2": 2.91,
    "width_change": -2.52,
    "width_growth_rate": -0.315,
    "is_critical": false
  },
  {
    "run1_idx": 1384,
    "run2_idx": 1436,
    "confidence": 0.8336,
    "event_type": "METAL_LOSS",
    "run1_distance": 31574.96,
    "run2_distance": 31623.7,
    "run1_clock": 5.4833,
    "run2_clock": 6.05,
    "depth_run1": 24,
    "depth_run2": 21,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 4.13,
    "length_run2": 3.49,
    "length_change": -0.64,
    "length_growth_rate": -0.08,
    "width_run1": 2.28,
    "width_run2": 4.5,
    "width_change": 2.22,
    "width_growth_rate": 0.2775,
    "is_critical": false
  },
  {
    "run1_idx": 1382,
    "run2_idx": 1437,
    "confidence": 0.5907,
    "event_type": "CLUSTER",
    "run1_distance": 31574.91,
    "run2_distance": 31623.73,
    "run1_clock": 6.3667,
    "run2_clock": 5.05,
    "depth_run1": 52,
    "depth_run2": 18,
    "depth_change": -34,
    "depth_growth_rate": -4.25,
    "length_run1": 4.91,
    "length_run2": 1.61,
    "length_change": -3.3,
    "length_growth_rate": -0.4125,
    "width_run1": 8.27,
    "width_run2": 0.59,
    "width_change": -7.68,
    "width_growth_rate": -0.96,
    "is_critical": false
  },
  {
    "run1_idx": 1385,
    "run2_idx": 1438,
    "confidence": 0.531,
    "event_type": "METAL_LOSS",
    "run1_distance": 31583.48,
    "run2_distance": 31623.87,
    "run1_clock": 6.4667,
    "run2_clock": 6.4167,
    "depth_run1": 19,
    "depth_run2": 13,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 1.42,
    "length_run2": 0.51,
    "length_change": -0.91,
    "length_growth_rate": -0.1137,
    "width_run1": 1.77,
    "width_run2": 1.26,
    "width_change": -0.51,
    "width_growth_rate": -0.0637,
    "is_critical": false
  },
  {
    "run1_idx": 1387,
    "run2_idx": 1440,
    "confidence": 0.6558,
    "event_type": "METAL_LOSS",
    "run1_distance": 31586.57,
    "run2_distance": 31632.19,
    "run1_clock": 5.7667,
    "run2_clock": 5.05,
    "depth_run1": 16,
    "depth_run2": 13,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 1.3,
    "length_run2": 0.67,
    "length_change": -0.63,
    "length_growth_rate": -0.0787,
    "width_run1": 3.62,
    "width_run2": 1.18,
    "width_change": -2.44,
    "width_growth_rate": -0.305,
    "is_critical": false
  },
  {
    "run1_idx": 1426,
    "run2_idx": 1488,
    "confidence": 0.7513,
    "event_type": "CLUSTER",
    "run1_distance": 32514.08,
    "run2_distance": 32563.95,
    "run1_clock": 11.5667,
    "run2_clock": 10.45,
    "depth_run1": 16,
    "depth_run2": 12,
    "depth_change": -4,
    "depth_growth_rate": -0.5,
    "length_run1": 4.18,
    "length_run2": 1.85,
    "length_change": -2.33,
    "length_growth_rate": -0.2912,
    "width_run1": 2.2,
    "width_run2": 1.77,
    "width_change": -0.43,
    "width_growth_rate": -0.0538,
    "is_critical": false
  },
  {
    "run1_idx": 1430,
    "run2_idx": 1495,
    "confidence": 0.8706,
    "event_type": "CLUSTER",
    "run1_distance": 32594.86,
    "run2_distance": 32644.89,
    "run1_clock": 6.6667,
    "run2_clock": 6.8333,
    "depth_run1": 28,
    "depth_run2": 15,
    "depth_change": -13,
    "depth_growth_rate": -1.625,
    "length_run1": 1.45,
    "length_run2": 0.75,
    "length_change": -0.7,
    "length_growth_rate": -0.0875,
    "width_run1": 3.58,
    "width_run2": 2.01,
    "width_change": -1.57,
    "width_growth_rate": -0.1963,
    "is_critical": false
  },
  {
    "run1_idx": 1431,
    "run2_idx": 1496,
    "confidence": 0.9484,
    "event_type": "METAL_LOSS",
    "run1_distance": 32594.9,
    "run2_distance": 32644.93,
    "run1_clock": 4.4167,
    "run2_clock": 4.3167,
    "depth_run1": 10,
    "depth_run2": 14,
    "depth_change": 4,
    "depth_growth_rate": 0.5,
    "length_run1": 0.94,
    "length_run2": 0.55,
    "length_change": -0.39,
    "length_growth_rate": -0.0487,
    "width_run1": 1.34,
    "width_run2": 1.18,
    "width_change": -0.16,
    "width_growth_rate": -0.02,
    "is_critical": false
  },
  {
    "run1_idx": 1448,
    "run2_idx": 1516,
    "confidence": 0.6561,
    "event_type": "CLUSTER",
    "run1_distance": 32952.77,
    "run2_distance": 32962.22,
    "run1_clock": 7.2,
    "run2_clock": 9.05,
    "depth_run1": 10,
    "depth_run2": 12,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 2.57,
    "length_run2": 1.5,
    "length_change": -1.07,
    "length_growth_rate": -0.1337,
    "width_run1": 2.49,
    "width_run2": 2.48,
    "width_change": -0.01,
    "width_growth_rate": -0.0013,
    "is_critical": false
  },
  {
    "run1_idx": 1451,
    "run2_idx": 1534,
    "confidence": 0.7081,
    "event_type": "CLUSTER",
    "run1_distance": 33031.14,
    "run2_distance": 33081.18,
    "run1_clock": 4.7,
    "run2_clock": 5.55,
    "depth_run1": 15,
    "depth_run2": 43,
    "depth_change": 28,
    "depth_growth_rate": 3.5,
    "length_run1": 1.87,
    "length_run2": 0.67,
    "length_change": -1.2,
    "length_growth_rate": -0.15,
    "width_run1": 10.12,
    "width_run2": 4.84,
    "width_change": -5.28,
    "width_growth_rate": -0.66,
    "is_critical": true
  },
  {
    "run1_idx": 1456,
    "run2_idx": 1538,
    "confidence": 0.6713,
    "event_type": "CLUSTER",
    "run1_distance": 33112.92,
    "run2_distance": 33161.16,
    "run1_clock": 4.0333,
    "run2_clock": 3.2,
    "depth_run1": 12,
    "depth_run2": 10,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 2.48,
    "length_run2": 0.55,
    "length_change": -1.93,
    "length_growth_rate": -0.2412,
    "width_run1": 4.75,
    "width_run2": 1.18,
    "width_change": -3.57,
    "width_growth_rate": -0.4462,
    "is_critical": false
  },
  {
    "run1_idx": 1470,
    "run2_idx": 1564,
    "confidence": 0.5312,
    "event_type": "CLUSTER",
    "run1_distance": 33390.29,
    "run2_distance": 33400.71,
    "run1_clock": 5.55,
    "run2_clock": 7.5667,
    "depth_run1": 20,
    "depth_run2": 14,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 6.35,
    "length_run2": 1.58,
    "length_change": -4.77,
    "length_growth_rate": -0.5962,
    "width_run1": 4.38,
    "width_run2": 1.42,
    "width_change": -2.96,
    "width_growth_rate": -0.37,
    "is_critical": false
  },
  {
    "run1_idx": 1474,
    "run2_idx": 1570,
    "confidence": 0.5282,
    "event_type": "CLUSTER",
    "run1_distance": 33430.71,
    "run2_distance": 33440.39,
    "run1_clock": 7.8,
    "run2_clock": 5.5833,
    "depth_run1": 21,
    "depth_run2": 37,
    "depth_change": 16,
    "depth_growth_rate": 2,
    "length_run1": 2.27,
    "length_run2": 0.75,
    "length_change": -1.52,
    "length_growth_rate": -0.19,
    "width_run1": 10.7,
    "width_run2": 1.14,
    "width_change": -9.56,
    "width_growth_rate": -1.195,
    "is_critical": false
  },
  {
    "run1_idx": 1477,
    "run2_idx": 1637,
    "confidence": 0.5049,
    "event_type": "METAL_LOSS",
    "run1_distance": 33479.84,
    "run2_distance": 33482.37,
    "run1_clock": 11.5667,
    "run2_clock": 11.9667,
    "depth_run1": 13,
    "depth_run2": 12,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 0.75,
    "length_run2": 2.09,
    "length_change": 1.34,
    "length_growth_rate": 0.1675,
    "width_run1": 0.63,
    "width_run2": 1.73,
    "width_change": 1.1,
    "width_growth_rate": 0.1375,
    "is_critical": false
  },
  {
    "run1_idx": 1479,
    "run2_idx": 1638,
    "confidence": 0.5083,
    "event_type": "CLUSTER",
    "run1_distance": 33480.35,
    "run2_distance": 33482.38,
    "run1_clock": 11.2833,
    "run2_clock": 11.5,
    "depth_run1": 13,
    "depth_run2": 14,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 3.37,
    "length_run2": 1.69,
    "length_change": -1.68,
    "length_growth_rate": -0.21,
    "width_run1": 2.1,
    "width_run2": 1.38,
    "width_change": -0.72,
    "width_growth_rate": -0.09,
    "is_critical": false
  },
  {
    "run1_idx": 1491,
    "run2_idx": 1665,
    "confidence": 0.6679,
    "event_type": "CLUSTER",
    "run1_distance": 33750.65,
    "run2_distance": 33764.38,
    "run1_clock": 7.9667,
    "run2_clock": 7.45,
    "depth_run1": 34,
    "depth_run2": 16,
    "depth_change": -18,
    "depth_growth_rate": -2.25,
    "length_run1": 0.94,
    "length_run2": 1.06,
    "length_change": 0.12,
    "length_growth_rate": 0.015,
    "width_run1": 5.43,
    "width_run2": 1.61,
    "width_change": -3.82,
    "width_growth_rate": -0.4775,
    "is_critical": false
  },
  {
    "run1_idx": 1493,
    "run2_idx": 1666,
    "confidence": 0.619,
    "event_type": "METAL_LOSS",
    "run1_distance": 33753.51,
    "run2_distance": 33764.65,
    "run1_clock": 12.4167,
    "run2_clock": 7.3833,
    "depth_run1": 13,
    "depth_run2": 30,
    "depth_change": 17,
    "depth_growth_rate": 2.125,
    "length_run1": 1.06,
    "length_run2": 0.75,
    "length_change": -0.31,
    "length_growth_rate": -0.0388,
    "width_run1": 1.1,
    "width_run2": 1.46,
    "width_change": 0.36,
    "width_growth_rate": 0.045,
    "is_critical": true
  },
  {
    "run1_idx": 1498,
    "run2_idx": 1694,
    "confidence": 0.6191,
    "event_type": "METAL_LOSS",
    "run1_distance": 33853.37,
    "run2_distance": 33867.52,
    "run1_clock": 12.0667,
    "run2_clock": 12.45,
    "depth_run1": 12,
    "depth_run2": 34,
    "depth_change": 22,
    "depth_growth_rate": 2.75,
    "length_run1": 0.71,
    "length_run2": 0.59,
    "length_change": -0.12,
    "length_growth_rate": -0.015,
    "width_run1": 0.71,
    "width_run2": 5.83,
    "width_change": 5.12,
    "width_growth_rate": 0.64,
    "is_critical": true
  },
  {
    "run1_idx": 1500,
    "run2_idx": 1695,
    "confidence": 0.6807,
    "event_type": "METAL_LOSS",
    "run1_distance": 33895.42,
    "run2_distance": 33903.09,
    "run1_clock": 11,
    "run2_clock": 11.95,
    "depth_run1": 16,
    "depth_run2": 10,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 0.71,
    "length_run2": 0.67,
    "length_change": -0.04,
    "length_growth_rate": -0.005,
    "width_run1": 1.53,
    "width_run2": 0.94,
    "width_change": -0.59,
    "width_growth_rate": -0.0738,
    "is_critical": false
  },
  {
    "run1_idx": 1688,
    "run2_idx": 1952,
    "confidence": 0.6246,
    "event_type": "CLUSTER",
    "run1_distance": 39405.56,
    "run2_distance": 39396.11,
    "run1_clock": 8.9167,
    "run2_clock": 8.1,
    "depth_run1": 17,
    "depth_run2": 13,
    "depth_change": -4,
    "depth_growth_rate": -0.5,
    "length_run1": 3.44,
    "length_run2": 0.32,
    "length_change": -3.12,
    "length_growth_rate": -0.39,
    "width_run1": 9.03,
    "width_run2": 0.59,
    "width_change": -8.44,
    "width_growth_rate": -1.055,
    "is_critical": false
  },
  {
    "run1_idx": 1690,
    "run2_idx": 1957,
    "confidence": 0.7725,
    "event_type": "METAL_LOSS",
    "run1_distance": 39479.9,
    "run2_distance": 39466.96,
    "run1_clock": 8.2,
    "run2_clock": 9.15,
    "depth_run1": 17,
    "depth_run2": 10,
    "depth_change": -7,
    "depth_growth_rate": -0.875,
    "length_run1": 0.79,
    "length_run2": 0.71,
    "length_change": -0.08,
    "length_growth_rate": -0.01,
    "width_run1": 0.91,
    "width_run2": 0.67,
    "width_change": -0.24,
    "width_growth_rate": -0.03,
    "is_critical": false
  },
  {
    "run1_idx": 1695,
    "run2_idx": 1970,
    "confidence": 0.5873,
    "event_type": "METAL_LOSS",
    "run1_distance": 39530.85,
    "run2_distance": 39540.92,
    "run1_clock": 5.9333,
    "run2_clock": 9.5667,
    "depth_run1": 15,
    "depth_run2": 15,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 1.18,
    "length_run2": 1.22,
    "length_change": 0.04,
    "length_growth_rate": 0.005,
    "width_run1": 1.81,
    "width_run2": 1.3,
    "width_change": -0.51,
    "width_growth_rate": -0.0637,
    "is_critical": false
  },
  {
    "run1_idx": 1697,
    "run2_idx": 1978,
    "confidence": 0.6415,
    "event_type": "CLUSTER",
    "run1_distance": 39553.36,
    "run2_distance": 39554.39,
    "run1_clock": 3.0167,
    "run2_clock": 3.3,
    "depth_run1": 39,
    "depth_run2": 12,
    "depth_change": -27,
    "depth_growth_rate": -3.375,
    "length_run1": 4.88,
    "length_run2": 1.58,
    "length_change": -3.3,
    "length_growth_rate": -0.4125,
    "width_run1": 30.98,
    "width_run2": 1.58,
    "width_change": -29.4,
    "width_growth_rate": -3.675,
    "is_critical": false
  },
  {
    "run1_idx": 1700,
    "run2_idx": 1980,
    "confidence": 0.5479,
    "event_type": "CLUSTER",
    "run1_distance": 39593.33,
    "run2_distance": 39592.17,
    "run1_clock": 7.6333,
    "run2_clock": 5.5,
    "depth_run1": 18,
    "depth_run2": 10,
    "depth_change": -8,
    "depth_growth_rate": -1,
    "length_run1": 2.83,
    "length_run2": 0.83,
    "length_change": -2,
    "length_growth_rate": -0.25,
    "width_run1": 6.62,
    "width_run2": 4.21,
    "width_change": -2.41,
    "width_growth_rate": -0.3012,
    "is_critical": false
  },
  {
    "run1_idx": 1701,
    "run2_idx": 1981,
    "confidence": 0.5412,
    "event_type": "CLUSTER",
    "run1_distance": 39593.37,
    "run2_distance": 39592.44,
    "run1_clock": 2.45,
    "run2_clock": 5.9333,
    "depth_run1": 27,
    "depth_run2": 21,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 3.28,
    "length_run2": 0.35,
    "length_change": -2.93,
    "length_growth_rate": -0.3662,
    "width_run1": 9.26,
    "width_run2": 1.69,
    "width_change": -7.57,
    "width_growth_rate": -0.9462,
    "is_critical": false
  },
  {
    "run1_idx": 1705,
    "run2_idx": 1991,
    "confidence": 0.5699,
    "event_type": "CLUSTER",
    "run1_distance": 39641.08,
    "run2_distance": 39654.5,
    "run1_clock": 2.0333,
    "run2_clock": 3.2667,
    "depth_run1": 31,
    "depth_run2": 19,
    "depth_change": -12,
    "depth_growth_rate": -1.5,
    "length_run1": 5.05,
    "length_run2": 0.79,
    "length_change": -4.26,
    "length_growth_rate": -0.5325,
    "width_run1": 14.2,
    "width_run2": 1.81,
    "width_change": -12.39,
    "width_growth_rate": -1.5487,
    "is_critical": false
  },
  {
    "run1_idx": 1706,
    "run2_idx": 1997,
    "confidence": 0.6327,
    "event_type": "CLUSTER",
    "run1_distance": 39641.74,
    "run2_distance": 39654.86,
    "run1_clock": 6.9667,
    "run2_clock": 7.55,
    "depth_run1": 33,
    "depth_run2": 57,
    "depth_change": 24,
    "depth_growth_rate": 3,
    "length_run1": 3.32,
    "length_run2": 0.94,
    "length_change": -2.38,
    "length_growth_rate": -0.2975,
    "width_run1": 9.3,
    "width_run2": 3.11,
    "width_change": -6.19,
    "width_growth_rate": -0.7738,
    "is_critical": true
  },
  {
    "run1_idx": 1754,
    "run2_idx": 2062,
    "confidence": 0.5422,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 41011.08,
    "run2_distance": 40993.55,
    "run1_clock": 10.2167,
    "run2_clock": 4.5667,
    "depth_run1": 10,
    "depth_run2": 11,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 3.03,
    "length_run2": 0.35,
    "length_change": -2.68,
    "length_growth_rate": -0.335,
    "width_run1": 1.3,
    "width_run2": 0.59,
    "width_change": -0.71,
    "width_growth_rate": -0.0888,
    "is_critical": false
  },
  {
    "run1_idx": 1786,
    "run2_idx": 2128,
    "confidence": 0.6398,
    "event_type": "METAL_LOSS",
    "run1_distance": 41544.45,
    "run2_distance": 41530.5,
    "run1_clock": 8.8167,
    "run2_clock": 2.5167,
    "depth_run1": 11,
    "depth_run2": 15,
    "depth_change": 4,
    "depth_growth_rate": 0.5,
    "length_run1": 0.79,
    "length_run2": 0.32,
    "length_change": -0.47,
    "length_growth_rate": -0.0587,
    "width_run1": 0.79,
    "width_run2": 0.83,
    "width_change": 0.04,
    "width_growth_rate": 0.005,
    "is_critical": false
  },
  {
    "run1_idx": 1788,
    "run2_idx": 2130,
    "confidence": 0.8941,
    "event_type": "METAL_LOSS",
    "run1_distance": 41546.08,
    "run2_distance": 41531.48,
    "run1_clock": 9.6,
    "run2_clock": 9.35,
    "depth_run1": 17,
    "depth_run2": 11,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 2.76,
    "length_run2": 1.58,
    "length_change": -1.18,
    "length_growth_rate": -0.1475,
    "width_run1": 0.59,
    "width_run2": 1.46,
    "width_change": 0.87,
    "width_growth_rate": 0.1088,
    "is_critical": false
  },
  {
    "run1_idx": 1785,
    "run2_idx": 2131,
    "confidence": 0.6812,
    "event_type": "METAL_LOSS",
    "run1_distance": 41544.42,
    "run2_distance": 41531.52,
    "run1_clock": 7.7833,
    "run2_clock": 9,
    "depth_run1": 23,
    "depth_run2": 11,
    "depth_change": -12,
    "depth_growth_rate": -1.5,
    "length_run1": 0.94,
    "length_run2": 0.79,
    "length_change": -0.15,
    "length_growth_rate": -0.0187,
    "width_run1": 1.3,
    "width_run2": 1.53,
    "width_change": 0.23,
    "width_growth_rate": 0.0288,
    "is_critical": false
  },
  {
    "run1_idx": 1789,
    "run2_idx": 2156,
    "confidence": 0.5736,
    "event_type": "CLUSTER",
    "run1_distance": 41576.47,
    "run2_distance": 41560.55,
    "run1_clock": 7.7333,
    "run2_clock": 2.5667,
    "depth_run1": 19,
    "depth_run2": 12,
    "depth_change": -7,
    "depth_growth_rate": -0.875,
    "length_run1": 2.21,
    "length_run2": 1.85,
    "length_change": -0.36,
    "length_growth_rate": -0.045,
    "width_run1": 1.8,
    "width_run2": 0.59,
    "width_change": -1.21,
    "width_growth_rate": -0.1512,
    "is_critical": false
  },
  {
    "run1_idx": 1790,
    "run2_idx": 2160,
    "confidence": 0.7466,
    "event_type": "CLUSTER",
    "run1_distance": 41581.35,
    "run2_distance": 41565.01,
    "run1_clock": 7.2833,
    "run2_clock": 7.45,
    "depth_run1": 18,
    "depth_run2": 11,
    "depth_change": -7,
    "depth_growth_rate": -0.875,
    "length_run1": 5.2,
    "length_run2": 1.42,
    "length_change": -3.78,
    "length_growth_rate": -0.4725,
    "width_run1": 4.15,
    "width_run2": 1.97,
    "width_change": -2.18,
    "width_growth_rate": -0.2725,
    "is_critical": false
  },
  {
    "run1_idx": 1792,
    "run2_idx": 2169,
    "confidence": 0.5088,
    "event_type": "METAL_LOSS",
    "run1_distance": 41593.16,
    "run2_distance": 41571.38,
    "run1_clock": 7.95,
    "run2_clock": 7.5667,
    "depth_run1": 10,
    "depth_run2": 11,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 3.03,
    "length_run2": 0.94,
    "length_change": -2.09,
    "length_growth_rate": -0.2612,
    "width_run1": 0.59,
    "width_run2": 1.53,
    "width_change": 0.94,
    "width_growth_rate": 0.1175,
    "is_critical": false
  },
  {
    "run1_idx": 1820,
    "run2_idx": 2186,
    "confidence": 0.6338,
    "event_type": "CLUSTER",
    "run1_distance": 41655.43,
    "run2_distance": 41641.68,
    "run1_clock": 9.6667,
    "run2_clock": 6.6333,
    "depth_run1": 13,
    "depth_run2": 15,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 2.38,
    "length_run2": 1.58,
    "length_change": -0.8,
    "length_growth_rate": -0.1,
    "width_run1": 2.16,
    "width_run2": 2.21,
    "width_change": 0.05,
    "width_growth_rate": 0.0062,
    "is_critical": false
  },
  {
    "run1_idx": 1821,
    "run2_idx": 2187,
    "confidence": 0.5872,
    "event_type": "CLUSTER",
    "run1_distance": 41658.63,
    "run2_distance": 41642.64,
    "run1_clock": 2.6833,
    "run2_clock": 4.4667,
    "depth_run1": 16,
    "depth_run2": 10,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 3.28,
    "length_run2": 1.1,
    "length_change": -2.18,
    "length_growth_rate": -0.2725,
    "width_run1": 1.43,
    "width_run2": 1.18,
    "width_change": -0.25,
    "width_growth_rate": -0.0312,
    "is_critical": false
  },
  {
    "run1_idx": 1822,
    "run2_idx": 2188,
    "confidence": 0.5114,
    "event_type": "CLUSTER",
    "run1_distance": 41659.02,
    "run2_distance": 41645.67,
    "run1_clock": 2.4667,
    "run2_clock": 10.5,
    "depth_run1": 15,
    "depth_run2": 25,
    "depth_change": 10,
    "depth_growth_rate": 1.25,
    "length_run1": 7.88,
    "length_run2": 0.67,
    "length_change": -7.21,
    "length_growth_rate": -0.9012,
    "width_run1": 2.75,
    "width_run2": 1.5,
    "width_change": -1.25,
    "width_growth_rate": -0.1562,
    "is_critical": false
  },
  {
    "run1_idx": 1817,
    "run2_idx": 2189,
    "confidence": 0.5638,
    "event_type": "METAL_LOSS",
    "run1_distance": 41652.8,
    "run2_distance": 41646.35,
    "run1_clock": 9.9,
    "run2_clock": 9.9333,
    "depth_run1": 11,
    "depth_run2": 10,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 1.02,
    "length_run2": 1.42,
    "length_change": 0.4,
    "length_growth_rate": 0.05,
    "width_run1": 1.26,
    "width_run2": 1.85,
    "width_change": 0.59,
    "width_growth_rate": 0.0738,
    "is_critical": false
  },
  {
    "run1_idx": 1825,
    "run2_idx": 2211,
    "confidence": 0.583,
    "event_type": "METAL_LOSS",
    "run1_distance": 41676.62,
    "run2_distance": 41668.93,
    "run1_clock": 2.8167,
    "run2_clock": 3.75,
    "depth_run1": 16,
    "depth_run2": 14,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 0.83,
    "length_run2": 0.59,
    "length_change": -0.24,
    "length_growth_rate": -0.03,
    "width_run1": 0.55,
    "width_run2": 0.59,
    "width_change": 0.04,
    "width_growth_rate": 0.005,
    "is_critical": false
  },
  {
    "run1_idx": 1824,
    "run2_idx": 2234,
    "confidence": 0.5388,
    "event_type": "CLUSTER",
    "run1_distance": 41676.35,
    "run2_distance": 41673.31,
    "run1_clock": 8.2667,
    "run2_clock": 8.8167,
    "depth_run1": 33,
    "depth_run2": 10,
    "depth_change": -23,
    "depth_growth_rate": -2.875,
    "length_run1": 5.5,
    "length_run2": 1.02,
    "length_change": -4.48,
    "length_growth_rate": -0.56,
    "width_run1": 11.56,
    "width_run2": 1.34,
    "width_change": -10.22,
    "width_growth_rate": -1.2775,
    "is_critical": false
  },
  {
    "run1_idx": 1828,
    "run2_idx": 2376,
    "confidence": 0.5514,
    "event_type": "CLUSTER",
    "run1_distance": 41704.14,
    "run2_distance": 41721.54,
    "run1_clock": 6.6833,
    "run2_clock": 7.7,
    "depth_run1": 16,
    "depth_run2": 11,
    "depth_change": -5,
    "depth_growth_rate": -0.625,
    "length_run1": 2.22,
    "length_run2": 1.5,
    "length_change": -0.72,
    "length_growth_rate": -0.09,
    "width_run1": 2.47,
    "width_run2": 1.85,
    "width_change": -0.62,
    "width_growth_rate": -0.0775,
    "is_critical": false
  },
  {
    "run1_idx": 1830,
    "run2_idx": 2386,
    "confidence": 0.5527,
    "event_type": "CLUSTER",
    "run1_distance": 41704.47,
    "run2_distance": 41722.17,
    "run1_clock": 5.0167,
    "run2_clock": 4.5333,
    "depth_run1": 23,
    "depth_run2": 10,
    "depth_change": -13,
    "depth_growth_rate": -1.625,
    "length_run1": 4.01,
    "length_run2": 1.89,
    "length_change": -2.12,
    "length_growth_rate": -0.265,
    "width_run1": 2.87,
    "width_run2": 1.1,
    "width_change": -1.77,
    "width_growth_rate": -0.2212,
    "is_critical": false
  },
  {
    "run1_idx": 1834,
    "run2_idx": 2388,
    "confidence": 0.5289,
    "event_type": "METAL_LOSS",
    "run1_distance": 41706.26,
    "run2_distance": 41722.37,
    "run1_clock": 2.7333,
    "run2_clock": 3.0167,
    "depth_run1": 10,
    "depth_run2": 18,
    "depth_change": 8,
    "depth_growth_rate": 1,
    "length_run1": 1.3,
    "length_run2": 0.55,
    "length_change": -0.75,
    "length_growth_rate": -0.0937,
    "width_run1": 3.42,
    "width_run2": 0.83,
    "width_change": -2.59,
    "width_growth_rate": -0.3237,
    "is_critical": false
  },
  {
    "run1_idx": 1833,
    "run2_idx": 2389,
    "confidence": 0.5185,
    "event_type": "CLUSTER",
    "run1_distance": 41706.26,
    "run2_distance": 41722.43,
    "run1_clock": 3.7333,
    "run2_clock": 3.9333,
    "depth_run1": 23,
    "depth_run2": 15,
    "depth_change": -8,
    "depth_growth_rate": -1,
    "length_run1": 2.44,
    "length_run2": 0.98,
    "length_change": -1.46,
    "length_growth_rate": -0.1825,
    "width_run1": 9.05,
    "width_run2": 0.87,
    "width_change": -8.18,
    "width_growth_rate": -1.0225,
    "is_critical": false
  },
  {
    "run1_idx": 1827,
    "run2_idx": 2390,
    "confidence": 0.5033,
    "event_type": "CLUSTER",
    "run1_distance": 41703.53,
    "run2_distance": 41722.61,
    "run1_clock": 4.95,
    "run2_clock": 4.0333,
    "depth_run1": 33,
    "depth_run2": 10,
    "depth_change": -23,
    "depth_growth_rate": -2.875,
    "length_run1": 5.21,
    "length_run2": 0.67,
    "length_change": -4.54,
    "length_growth_rate": -0.5675,
    "width_run1": 3.73,
    "width_run2": 1.81,
    "width_change": -1.92,
    "width_growth_rate": -0.24,
    "is_critical": false
  },
  {
    "run1_idx": 1837,
    "run2_idx": 2418,
    "confidence": 0.5305,
    "event_type": "METAL_LOSS",
    "run1_distance": 41747.21,
    "run2_distance": 41742.1,
    "run1_clock": 9.5,
    "run2_clock": 9.1,
    "depth_run1": 13,
    "depth_run2": 12,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 0.91,
    "length_run2": 0.94,
    "length_change": 0.03,
    "length_growth_rate": 0.0037,
    "width_run1": 1.3,
    "width_run2": 0.75,
    "width_change": -0.55,
    "width_growth_rate": -0.0687,
    "is_critical": false
  },
  {
    "run1_idx": 1836,
    "run2_idx": 2423,
    "confidence": 0.6456,
    "event_type": "METAL_LOSS",
    "run1_distance": 41746.38,
    "run2_distance": 41744.25,
    "run1_clock": 9.9167,
    "run2_clock": 3.5667,
    "depth_run1": 11,
    "depth_run2": 10,
    "depth_change": -1,
    "depth_growth_rate": -0.125,
    "length_run1": 0.71,
    "length_run2": 0.63,
    "length_change": -0.08,
    "length_growth_rate": -0.01,
    "width_run1": 0.55,
    "width_run2": 1.1,
    "width_change": 0.55,
    "width_growth_rate": 0.0688,
    "is_critical": false
  },
  {
    "run1_idx": 1840,
    "run2_idx": 2430,
    "confidence": 0.616,
    "event_type": "METAL_LOSS",
    "run1_distance": 41786.2,
    "run2_distance": 41768.79,
    "run1_clock": 4.2,
    "run2_clock": 5.2667,
    "depth_run1": 11,
    "depth_run2": 11,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 0.79,
    "length_run2": 1.69,
    "length_change": 0.9,
    "length_growth_rate": 0.1125,
    "width_run1": 0.71,
    "width_run2": 0.59,
    "width_change": -0.12,
    "width_growth_rate": -0.015,
    "is_critical": false
  },
  {
    "run1_idx": 1838,
    "run2_idx": 2431,
    "confidence": 0.5378,
    "event_type": "CLUSTER",
    "run1_distance": 41784.33,
    "run2_distance": 41769.29,
    "run1_clock": 3.3333,
    "run2_clock": 5.0333,
    "depth_run1": 13,
    "depth_run2": 14,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 3.85,
    "length_run2": 0.51,
    "length_change": -3.34,
    "length_growth_rate": -0.4175,
    "width_run1": 6.24,
    "width_run2": 3.15,
    "width_change": -3.09,
    "width_growth_rate": -0.3863,
    "is_critical": false
  },
  {
    "run1_idx": 1841,
    "run2_idx": 2432,
    "confidence": 0.5324,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 41787.46,
    "run2_distance": 41769.32,
    "run1_clock": 8.2,
    "run2_clock": 6.9,
    "depth_run1": 11,
    "depth_run2": 13,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 0.43,
    "length_run2": 0.71,
    "length_change": 0.28,
    "length_growth_rate": 0.035,
    "width_run1": 0.71,
    "width_run2": 2.28,
    "width_change": 1.57,
    "width_growth_rate": 0.1962,
    "is_critical": false
  },
  {
    "run1_idx": 1844,
    "run2_idx": 2456,
    "confidence": 0.5557,
    "event_type": "CLUSTER",
    "run1_distance": 41865.72,
    "run2_distance": 41851.24,
    "run1_clock": 8.5,
    "run2_clock": 2.8167,
    "depth_run1": 11,
    "depth_run2": 14,
    "depth_change": 3,
    "depth_growth_rate": 0.375,
    "length_run1": 2.05,
    "length_run2": 0.47,
    "length_change": -1.58,
    "length_growth_rate": -0.1975,
    "width_run1": 9.82,
    "width_run2": 2.05,
    "width_change": -7.77,
    "width_growth_rate": -0.9712,
    "is_critical": false
  },
  {
    "run1_idx": 1899,
    "run2_idx": 2528,
    "confidence": 0.7802,
    "event_type": "CLUSTER",
    "run1_distance": 43675.86,
    "run2_distance": 43666.96,
    "run1_clock": 6,
    "run2_clock": 6.3167,
    "depth_run1": 10,
    "depth_run2": 11,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 2.64,
    "length_run2": 1.77,
    "length_change": -0.87,
    "length_growth_rate": -0.1088,
    "width_run1": 4.11,
    "width_run2": 0.59,
    "width_change": -3.52,
    "width_growth_rate": -0.44,
    "is_critical": false
  },
  {
    "run1_idx": 1901,
    "run2_idx": 2529,
    "confidence": 0.7804,
    "event_type": "CLUSTER",
    "run1_distance": 43677.48,
    "run2_distance": 43666.98,
    "run1_clock": 4.6,
    "run2_clock": 5.25,
    "depth_run1": 16,
    "depth_run2": 29,
    "depth_change": 13,
    "depth_growth_rate": 1.625,
    "length_run1": 1.32,
    "length_run2": 1.73,
    "length_change": 0.41,
    "length_growth_rate": 0.0512,
    "width_run1": 7.54,
    "width_run2": 3.9,
    "width_change": -3.64,
    "width_growth_rate": -0.455,
    "is_critical": false
  },
  {
    "run1_idx": 1927,
    "run2_idx": 2664,
    "confidence": 0.5414,
    "event_type": "CLUSTER",
    "run1_distance": 44056.42,
    "run2_distance": 44046.68,
    "run1_clock": 5.0667,
    "run2_clock": 4.95,
    "depth_run1": 30,
    "depth_run2": 23,
    "depth_change": -7,
    "depth_growth_rate": -0.875,
    "length_run1": 1.85,
    "length_run2": 2.62,
    "length_change": 0.77,
    "length_growth_rate": 0.0963,
    "width_run1": 10.89,
    "width_run2": 1.11,
    "width_change": -9.78,
    "width_growth_rate": -1.2225,
    "is_critical": false
  },
  {
    "run1_idx": 1926,
    "run2_idx": 2665,
    "confidence": 0.5737,
    "event_type": "METAL_LOSS",
    "run1_distance": 44056.31,
    "run2_distance": 44047.57,
    "run1_clock": 7.25,
    "run2_clock": 7.5333,
    "depth_run1": 13,
    "depth_run2": 16,
    "depth_change": 3,
    "depth_growth_rate": 0.375,
    "length_run1": 5.04,
    "length_run2": 0.75,
    "length_change": -4.29,
    "length_growth_rate": -0.5362,
    "width_run1": 0.59,
    "width_run2": 1.18,
    "width_change": 0.59,
    "width_growth_rate": 0.0738,
    "is_critical": false
  },
  {
    "run1_idx": 1930,
    "run2_idx": 2686,
    "confidence": 0.6941,
    "event_type": "CLUSTER",
    "run1_distance": 44134.6,
    "run2_distance": 44126.39,
    "run1_clock": 4.2667,
    "run2_clock": 4.9167,
    "depth_run1": 26,
    "depth_run2": 29,
    "depth_change": 3,
    "depth_growth_rate": 0.375,
    "length_run1": 2.95,
    "length_run2": 0.87,
    "length_change": -2.08,
    "length_growth_rate": -0.26,
    "width_run1": 9.22,
    "width_run2": 3.58,
    "width_change": -5.64,
    "width_growth_rate": -0.705,
    "is_critical": false
  },
  {
    "run1_idx": 1933,
    "run2_idx": 2694,
    "confidence": 0.7377,
    "event_type": "CLUSTER",
    "run1_distance": 44214.46,
    "run2_distance": 44204.7,
    "run1_clock": 3.7333,
    "run2_clock": 4.2,
    "depth_run1": 25,
    "depth_run2": 10,
    "depth_change": -15,
    "depth_growth_rate": -1.875,
    "length_run1": 4.15,
    "length_run2": 0.59,
    "length_change": -3.56,
    "length_growth_rate": -0.445,
    "width_run1": 10.91,
    "width_run2": 1.1,
    "width_change": -9.81,
    "width_growth_rate": -1.2262,
    "is_critical": false
  },
  {
    "run1_idx": 1959,
    "run2_idx": 2748,
    "confidence": 0.5451,
    "event_type": "CLUSTER",
    "run1_distance": 44757.04,
    "run2_distance": 44745.1,
    "run1_clock": 6.2833,
    "run2_clock": 7.7333,
    "depth_run1": 14,
    "depth_run2": 19,
    "depth_change": 5,
    "depth_growth_rate": 0.625,
    "length_run1": 2.92,
    "length_run2": 0.55,
    "length_change": -2.37,
    "length_growth_rate": -0.2962,
    "width_run1": 2.66,
    "width_run2": 1.1,
    "width_change": -1.56,
    "width_growth_rate": -0.195,
    "is_critical": false
  },
  {
    "run1_idx": 1965,
    "run2_idx": 2811,
    "confidence": 0.68,
    "event_type": "METAL_LOSS",
    "run1_distance": 44918.76,
    "run2_distance": 44908.13,
    "run1_clock": 8.9167,
    "run2_clock": 7.9167,
    "depth_run1": 17,
    "depth_run2": 11,
    "depth_change": -6,
    "depth_growth_rate": -0.75,
    "length_run1": 1.02,
    "length_run2": 0.91,
    "length_change": -0.11,
    "length_growth_rate": -0.0137,
    "width_run1": 8.54,
    "width_run2": 1.65,
    "width_change": -6.89,
    "width_growth_rate": -0.8612,
    "is_critical": false
  },
  {
    "run1_idx": 1969,
    "run2_idx": 2815,
    "confidence": 0.551,
    "event_type": "CLUSTER",
    "run1_distance": 44997.09,
    "run2_distance": 44987.97,
    "run1_clock": 4.9167,
    "run2_clock": 2.1833,
    "depth_run1": 12,
    "depth_run2": 13,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 4.68,
    "length_run2": 0.51,
    "length_change": -4.17,
    "length_growth_rate": -0.5212,
    "width_run1": 9.8,
    "width_run2": 3.27,
    "width_change": -6.53,
    "width_growth_rate": -0.8163,
    "is_critical": false
  },
  {
    "run1_idx": 1981,
    "run2_idx": 2858,
    "confidence": 0.5508,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 45166.83,
    "run2_distance": 45178.24,
    "run1_clock": 5.9167,
    "run2_clock": 2.1,
    "depth_run1": 21,
    "depth_run2": 19,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 0.47,
    "length_run2": 1.38,
    "length_change": 0.91,
    "length_growth_rate": 0.1138,
    "width_run1": 0.55,
    "width_run2": 1.97,
    "width_change": 1.42,
    "width_growth_rate": 0.1775,
    "is_critical": false
  },
  {
    "run1_idx": 1983,
    "run2_idx": 2863,
    "confidence": 0.7227,
    "event_type": "METAL_LOSS",
    "run1_distance": 45175.13,
    "run2_distance": 45180.43,
    "run1_clock": 5.5,
    "run2_clock": 5.7333,
    "depth_run1": 22,
    "depth_run2": 10,
    "depth_change": -12,
    "depth_growth_rate": -1.5,
    "length_run1": 0.83,
    "length_run2": 0.51,
    "length_change": -0.32,
    "length_growth_rate": -0.04,
    "width_run1": 1.42,
    "width_run2": 1.26,
    "width_change": -0.16,
    "width_growth_rate": -0.02,
    "is_critical": false
  },
  {
    "run1_idx": 1984,
    "run2_idx": 2864,
    "confidence": 0.5848,
    "event_type": "METAL_LOSS",
    "run1_distance": 45175.35,
    "run2_distance": 45180.5,
    "run1_clock": 4.9,
    "run2_clock": 3.8,
    "depth_run1": 23,
    "depth_run2": 13,
    "depth_change": -10,
    "depth_growth_rate": -1.25,
    "length_run1": 0.94,
    "length_run2": 0.63,
    "length_change": -0.31,
    "length_growth_rate": -0.0387,
    "width_run1": 2.17,
    "width_run2": 1.65,
    "width_change": -0.52,
    "width_growth_rate": -0.065,
    "is_critical": false
  },
  {
    "run1_idx": 2018,
    "run2_idx": 2978,
    "confidence": 0.748,
    "event_type": "CLUSTER",
    "run1_distance": 46109.65,
    "run2_distance": 46102.96,
    "run1_clock": 7.1167,
    "run2_clock": 6.3833,
    "depth_run1": 24,
    "depth_run2": 22,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 3.65,
    "length_run2": 0.71,
    "length_change": -2.94,
    "length_growth_rate": -0.3675,
    "width_run1": 5.03,
    "width_run2": 1.06,
    "width_change": -3.97,
    "width_growth_rate": -0.4962,
    "is_critical": false
  },
  {
    "run1_idx": 2017,
    "run2_idx": 2979,
    "confidence": 0.5209,
    "event_type": "CLUSTER",
    "run1_distance": 46109.65,
    "run2_distance": 46103.01,
    "run1_clock": 4.8167,
    "run2_clock": 7.2167,
    "depth_run1": 26,
    "depth_run2": 14,
    "depth_change": -12,
    "depth_growth_rate": -1.5,
    "length_run1": 4.52,
    "length_run2": 0.83,
    "length_change": -3.69,
    "length_growth_rate": -0.4612,
    "width_run1": 5.7,
    "width_run2": 1.38,
    "width_change": -4.32,
    "width_growth_rate": -0.54,
    "is_critical": false
  },
  {
    "run1_idx": 2025,
    "run2_idx": 2983,
    "confidence": 0.7973,
    "event_type": "METAL_LOSS",
    "run1_distance": 46191.91,
    "run2_distance": 46183.26,
    "run1_clock": 8.0833,
    "run2_clock": 7.6667,
    "depth_run1": 11,
    "depth_run2": 25,
    "depth_change": 14,
    "depth_growth_rate": 1.75,
    "length_run1": 0.75,
    "length_run2": 0.55,
    "length_change": -0.2,
    "length_growth_rate": -0.025,
    "width_run1": 1.22,
    "width_run2": 1.22,
    "width_change": 0,
    "width_growth_rate": 0,
    "is_critical": false
  },
  {
    "run1_idx": 2022,
    "run2_idx": 2984,
    "confidence": 0.8125,
    "event_type": "CLUSTER",
    "run1_distance": 46190.08,
    "run2_distance": 46183.33,
    "run1_clock": 4.1833,
    "run2_clock": 4.85,
    "depth_run1": 14,
    "depth_run2": 45,
    "depth_change": 31,
    "depth_growth_rate": 3.875,
    "length_run1": 2.17,
    "length_run2": 1.54,
    "length_change": -0.63,
    "length_growth_rate": -0.0787,
    "width_run1": 4.65,
    "width_run2": 4.61,
    "width_change": -0.04,
    "width_growth_rate": -0.005,
    "is_critical": true
  },
  {
    "run1_idx": 2024,
    "run2_idx": 2985,
    "confidence": 0.7502,
    "event_type": "CLUSTER",
    "run1_distance": 46191.89,
    "run2_distance": 46183.34,
    "run1_clock": 6.4333,
    "run2_clock": 7.0833,
    "depth_run1": 12,
    "depth_run2": 12,
    "depth_change": 0,
    "depth_growth_rate": 0,
    "length_run1": 0.91,
    "length_run2": 0.98,
    "length_change": 0.07,
    "length_growth_rate": 0.0087,
    "width_run1": 7.39,
    "width_run2": 1.69,
    "width_change": -5.7,
    "width_growth_rate": -0.7125,
    "is_critical": false
  },
  {
    "run1_idx": 2026,
    "run2_idx": 2986,
    "confidence": 0.7723,
    "event_type": "METAL_LOSS",
    "run1_distance": 46191.92,
    "run2_distance": 46183.35,
    "run1_clock": 3.7333,
    "run2_clock": 3.4167,
    "depth_run1": 15,
    "depth_run2": 60,
    "depth_change": 45,
    "depth_growth_rate": 5.625,
    "length_run1": 0.87,
    "length_run2": 0.75,
    "length_change": -0.12,
    "length_growth_rate": -0.015,
    "width_run1": 1.93,
    "width_run2": 0.77,
    "width_change": -1.16,
    "width_growth_rate": -0.145,
    "is_critical": true
  },
  {
    "run1_idx": 2021,
    "run2_idx": 2987,
    "confidence": 0.5864,
    "event_type": "CLUSTER",
    "run1_distance": 46190.01,
    "run2_distance": 46183.39,
    "run1_clock": 5.5333,
    "run2_clock": 4.0333,
    "depth_run1": 15,
    "depth_run2": 40,
    "depth_change": 25,
    "depth_growth_rate": 3.125,
    "length_run1": 2.56,
    "length_run2": 0.63,
    "length_change": -1.93,
    "length_growth_rate": -0.2412,
    "width_run1": 9.59,
    "width_run2": 2.64,
    "width_change": -6.95,
    "width_growth_rate": -0.8687,
    "is_critical": true
  },
  {
    "run1_idx": 2031,
    "run2_idx": 3021,
    "confidence": 0.5377,
    "event_type": "METAL_LOSS",
    "run1_distance": 46272.09,
    "run2_distance": 46257.04,
    "run1_clock": 9.3833,
    "run2_clock": 9.3667,
    "depth_run1": 21,
    "depth_run2": 13,
    "depth_change": -8,
    "depth_growth_rate": -1,
    "length_run1": 1.02,
    "length_run2": 1.14,
    "length_change": 0.12,
    "length_growth_rate": 0.015,
    "width_run1": 0.91,
    "width_run2": 1.65,
    "width_change": 0.74,
    "width_growth_rate": 0.0925,
    "is_critical": false
  },
  {
    "run1_idx": 2034,
    "run2_idx": 3067,
    "confidence": 0.5223,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 46343.06,
    "run2_distance": 46343.57,
    "run1_clock": 8.95,
    "run2_clock": 8.6167,
    "depth_run1": 10,
    "depth_run2": 14,
    "depth_change": 4,
    "depth_growth_rate": 0.5,
    "length_run1": 3.98,
    "length_run2": 1.14,
    "length_change": -2.84,
    "length_growth_rate": -0.355,
    "width_run1": 1.73,
    "width_run2": 1.61,
    "width_change": -0.12,
    "width_growth_rate": -0.015,
    "is_critical": false
  },
  {
    "run1_idx": 2041,
    "run2_idx": 3077,
    "confidence": 0.8021,
    "event_type": "METAL_LOSS",
    "run1_distance": 46432.14,
    "run2_distance": 46423.86,
    "run1_clock": 5.1333,
    "run2_clock": 5.1,
    "depth_run1": 10,
    "depth_run2": 16,
    "depth_change": 6,
    "depth_growth_rate": 0.75,
    "length_run1": 0.91,
    "length_run2": 1.58,
    "length_change": 0.67,
    "length_growth_rate": 0.0838,
    "width_run1": 0.87,
    "width_run2": 4.06,
    "width_change": 3.19,
    "width_growth_rate": 0.3987,
    "is_critical": false
  },
  {
    "run1_idx": 2039,
    "run2_idx": 3078,
    "confidence": 0.6362,
    "event_type": "METAL_LOSS",
    "run1_distance": 46430.44,
    "run2_distance": 46423.92,
    "run1_clock": 8.05,
    "run2_clock": 2.6833,
    "depth_run1": 28,
    "depth_run2": 18,
    "depth_change": -10,
    "depth_growth_rate": -1.25,
    "length_run1": 1.06,
    "length_run2": 1.53,
    "length_change": 0.47,
    "length_growth_rate": 0.0588,
    "width_run1": 2.13,
    "width_run2": 1.38,
    "width_change": -0.75,
    "width_growth_rate": -0.0937,
    "is_critical": false
  },
  {
    "run1_idx": 2038,
    "run2_idx": 3079,
    "confidence": 0.6122,
    "event_type": "METAL_LOSS",
    "run1_distance": 46430.41,
    "run2_distance": 46423.92,
    "run1_clock": 7.5167,
    "run2_clock": 4.75,
    "depth_run1": 38,
    "depth_run2": 13,
    "depth_change": -25,
    "depth_growth_rate": -3.125,
    "length_run1": 1.65,
    "length_run2": 0.94,
    "length_change": -0.71,
    "length_growth_rate": -0.0887,
    "width_run1": 1.14,
    "width_run2": 0.98,
    "width_change": -0.16,
    "width_growth_rate": -0.02,
    "is_critical": false
  },
  {
    "run1_idx": 2042,
    "run2_idx": 3082,
    "confidence": 0.5196,
    "event_type": "METAL_LOSS_MFG",
    "run1_distance": 46437.34,
    "run2_distance": 46424.03,
    "run1_clock": 7.3,
    "run2_clock": 6.9,
    "depth_run1": 14,
    "depth_run2": 11,
    "depth_change": -3,
    "depth_growth_rate": -0.375,
    "length_run1": 0.59,
    "length_run2": 0.55,
    "length_change": -0.04,
    "length_growth_rate": -0.005,
    "width_run1": 0.71,
    "width_run2": 3.74,
    "width_change": 3.03,
    "width_growth_rate": 0.3788,
    "is_critical": false
  },
  {
    "run1_idx": 2084,
    "run2_idx": 3160,
    "confidence": 0.5959,
    "event_type": "CLUSTER",
    "run1_distance": 47325.5,
    "run2_distance": 47329.58,
    "run1_clock": 8.6167,
    "run2_clock": 7.4333,
    "depth_run1": 10,
    "depth_run2": 17,
    "depth_change": 7,
    "depth_growth_rate": 0.875,
    "length_run1": 3.55,
    "length_run2": 1.61,
    "length_change": -1.94,
    "length_growth_rate": -0.2425,
    "width_run1": 7.37,
    "width_run2": 1.81,
    "width_change": -5.56,
    "width_growth_rate": -0.695,
    "is_critical": false
  },
  {
    "run1_idx": 2083,
    "run2_idx": 3161,
    "confidence": 0.6342,
    "event_type": "CLUSTER",
    "run1_distance": 47325.43,
    "run2_distance": 47329.59,
    "run1_clock": 3.7167,
    "run2_clock": 4.4333,
    "depth_run1": 21,
    "depth_run2": 10,
    "depth_change": -11,
    "depth_growth_rate": -1.375,
    "length_run1": 5.09,
    "length_run2": 0.51,
    "length_change": -4.58,
    "length_growth_rate": -0.5725,
    "width_run1": 23.79,
    "width_run2": 1.06,
    "width_change": -22.73,
    "width_growth_rate": -2.8412,
    "is_critical": false
  },
  {
    "run1_idx": 2086,
    "run2_idx": 3163,
    "confidence": 0.5619,
    "event_type": "CLUSTER",
    "run1_distance": 47327.36,
    "run2_distance": 47330.84,
    "run1_clock": 1.25,
    "run2_clock": 7.4667,
    "depth_run1": 20,
    "depth_run2": 10,
    "depth_change": -10,
    "depth_growth_rate": -1.25,
    "length_run1": 1.61,
    "length_run2": 0.51,
    "length_change": -1.1,
    "length_growth_rate": -0.1375,
    "width_run1": 9.17,
    "width_run2": 0.98,
    "width_change": -8.19,
    "width_growth_rate": -1.0237,
    "is_critical": false
  },
  {
    "run1_idx": 2293,
    "run2_idx": 3471,
    "confidence": 0.7394,
    "event_type": "METAL_LOSS",
    "run1_distance": 53187.97,
    "run2_distance": 53192.12,
    "run1_clock": 6.5,
    "run2_clock": 6.6,
    "depth_run1": 21,
    "depth_run2": 22,
    "depth_change": 1,
    "depth_growth_rate": 0.125,
    "length_run1": 4.05,
    "length_run2": 0.87,
    "length_change": -3.18,
    "length_growth_rate": -0.3975,
    "width_run1": 1.53,
    "width_run2": 4.05,
    "width_change": 2.52,
    "width_growth_rate": 0.315,
    "is_critical": false
  },
  {
    "run1_idx": 2295,
    "run2_idx": 3473,
    "confidence": 0.6145,
    "event_type": "METAL_LOSS",
    "run1_distance": 53188.12,
    "run2_distance": 53193.84,
    "run1_clock": 4.9,
    "run2_clock": 8.9167,
    "depth_run1": 12,
    "depth_run2": 10,
    "depth_change": -2,
    "depth_growth_rate": -0.25,
    "length_run1": 1.73,
    "length_run2": 0.94,
    "length_change": -0.79,
    "length_growth_rate": -0.0987,
    "width_run1": 1.85,
    "width_run2": 2.76,
    "width_change": 0.91,
    "width_growth_rate": 0.1137,
    "is_critical": false
  },
  {
    "run1_idx": 2296,
    "run2_idx": 3474,
    "confidence": 0.8511,
    "event_type": "METAL_LOSS",
    "run1_distance": 53188.47,
    "run2_distance": 53193.86,
    "run1_clock": 5.2333,
    "run2_clock": 4.9667,
    "depth_run1": 10,
    "depth_run2": 12,
    "depth_change": 2,
    "depth_growth_rate": 0.25,
    "length_run1": 1.1,
    "length_run2": 1.58,
    "length_change": 0.48,
    "length_growth_rate": 0.06,
    "width_run1": 0.91,
    "width_run2": 2.44,
    "width_change": 1.53,
    "width_growth_rate": 0.1912,
    "is_critical": false
  }
];

export const newAnomalies: NewAnomaly[] = [
  {
    "original_index": 299,
    "log_distance": 9452.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4333,
    "depth_percent": 16,
    "length": 2.09,
    "width": 1.89,
    "joint_number": 2640
  },
  {
    "original_index": 300,
    "log_distance": 9452.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.6333,
    "depth_percent": 13,
    "length": 1.1,
    "width": 1.58,
    "joint_number": 2640
  },
  {
    "original_index": 301,
    "log_distance": 9453.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.9667,
    "depth_percent": 13,
    "length": 1.34,
    "width": 1.73,
    "joint_number": 2640
  },
  {
    "original_index": 302,
    "log_distance": 9458.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1167,
    "depth_percent": 17,
    "length": 1.22,
    "width": 1.81,
    "joint_number": 2640
  },
  {
    "original_index": 303,
    "log_distance": 9458.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0833,
    "depth_percent": 30,
    "length": 0.63,
    "width": 1.34,
    "joint_number": 2640
  },
  {
    "original_index": 304,
    "log_distance": 9459.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9,
    "depth_percent": 23,
    "length": 0.94,
    "width": 1.69,
    "joint_number": 2640
  },
  {
    "original_index": 305,
    "log_distance": 9459.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2333,
    "depth_percent": 35,
    "length": 0.94,
    "width": 1.42,
    "joint_number": 2640
  },
  {
    "original_index": 306,
    "log_distance": 9460.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0333,
    "depth_percent": 39,
    "length": 1.42,
    "width": 1.81,
    "joint_number": 2640
  },
  {
    "original_index": 332,
    "log_distance": 10119.99,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.35,
    "depth_percent": 20,
    "length": 0.96,
    "width": 4.86,
    "joint_number": 2830
  },
  {
    "original_index": 351,
    "log_distance": 10584.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1333,
    "depth_percent": 13,
    "length": 0.79,
    "width": 1.18,
    "joint_number": 2960
  },
  {
    "original_index": 352,
    "log_distance": 10586.57,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.3333,
    "depth_percent": 33,
    "length": 1.8,
    "width": 3.5,
    "joint_number": 2960
  },
  {
    "original_index": 353,
    "log_distance": 10586.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 12,
    "length": 1.3,
    "width": 2.09,
    "joint_number": 2960
  },
  {
    "original_index": 354,
    "log_distance": 10587.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0333,
    "depth_percent": 12,
    "length": 0.59,
    "width": 1.42,
    "joint_number": 2960
  },
  {
    "original_index": 355,
    "log_distance": 10587.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3833,
    "depth_percent": 20,
    "length": 0.47,
    "width": 1.26,
    "joint_number": 2960
  },
  {
    "original_index": 356,
    "log_distance": 10587.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5833,
    "depth_percent": 13,
    "length": 0.55,
    "width": 0.98,
    "joint_number": 2960
  },
  {
    "original_index": 357,
    "log_distance": 10587.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2833,
    "depth_percent": 10,
    "length": 1.18,
    "width": 1.1,
    "joint_number": 2960
  },
  {
    "original_index": 358,
    "log_distance": 10587.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.35,
    "depth_percent": 13,
    "length": 0.43,
    "width": 1.22,
    "joint_number": 2960
  },
  {
    "original_index": 360,
    "log_distance": 10588.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1,
    "depth_percent": 13,
    "length": 0.94,
    "width": 1.69,
    "joint_number": 2960
  },
  {
    "original_index": 361,
    "log_distance": 10588.47,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.2333,
    "depth_percent": 45,
    "length": 1.85,
    "width": 2.37,
    "joint_number": 2960
  },
  {
    "original_index": 362,
    "log_distance": 10588.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4167,
    "depth_percent": 16,
    "length": 0.51,
    "width": 1.97,
    "joint_number": 2960
  },
  {
    "original_index": 363,
    "log_distance": 10588.9,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5,
    "depth_percent": 19,
    "length": 0.47,
    "width": 0.91,
    "joint_number": 2960
  },
  {
    "original_index": 364,
    "log_distance": 10589.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6167,
    "depth_percent": 20,
    "length": 1.18,
    "width": 2.4,
    "joint_number": 2960
  },
  {
    "original_index": 367,
    "log_distance": 10595.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5333,
    "depth_percent": 13,
    "length": 0.47,
    "width": 1.02,
    "joint_number": 2960
  },
  {
    "original_index": 368,
    "log_distance": 10595.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4167,
    "depth_percent": 35,
    "length": 1.02,
    "width": 2.6,
    "joint_number": 2960
  },
  {
    "original_index": 369,
    "log_distance": 10595.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7833,
    "depth_percent": 50,
    "length": 0.67,
    "width": 2.17,
    "joint_number": 2960
  },
  {
    "original_index": 371,
    "log_distance": 10597.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2667,
    "depth_percent": 11,
    "length": 0.55,
    "width": 1.89,
    "joint_number": 2970
  },
  {
    "original_index": 380,
    "log_distance": 10756.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9667,
    "depth_percent": 10,
    "length": 0.75,
    "width": 1.46,
    "joint_number": 3010
  },
  {
    "original_index": 403,
    "log_distance": 11615.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9833,
    "depth_percent": 10,
    "length": 0.51,
    "width": 1.42,
    "joint_number": 3220
  },
  {
    "original_index": 426,
    "log_distance": 12427.16,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 7.9,
    "depth_percent": 16,
    "length": 2.17,
    "width": 1.73,
    "joint_number": 3430
  },
  {
    "original_index": 456,
    "log_distance": 13394.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0833,
    "depth_percent": 10,
    "length": 0.63,
    "width": 1.22,
    "joint_number": 3680
  },
  {
    "original_index": 457,
    "log_distance": 13394.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.7167,
    "depth_percent": 25,
    "length": 0.71,
    "width": 3.23,
    "joint_number": 3680
  },
  {
    "original_index": 467,
    "log_distance": 13645.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6667,
    "depth_percent": 11,
    "length": 0.71,
    "width": 1.46,
    "joint_number": 3750
  },
  {
    "original_index": 468,
    "log_distance": 13645.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3167,
    "depth_percent": 16,
    "length": 0.55,
    "width": 1.02,
    "joint_number": 3750
  },
  {
    "original_index": 476,
    "log_distance": 13853.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.4667,
    "depth_percent": 14,
    "length": 1.26,
    "width": 0.79,
    "joint_number": 3810
  },
  {
    "original_index": 477,
    "log_distance": 13853.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.6,
    "depth_percent": 14,
    "length": 0.47,
    "width": 0.94,
    "joint_number": 3810
  },
  {
    "original_index": 482,
    "log_distance": 14002.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.75,
    "depth_percent": 12,
    "length": 0.51,
    "width": 1.26,
    "joint_number": 3850
  },
  {
    "original_index": 504,
    "log_distance": 14630.88,
    "event_type_normalized": "DENT",
    "clock_decimal": 6.45,
    "depth_percent": null,
    "length": 27.54,
    "width": 8.38,
    "joint_number": 4040
  },
  {
    "original_index": 509,
    "log_distance": 14751.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6833,
    "depth_percent": 29,
    "length": 0.71,
    "width": 1.18,
    "joint_number": 4080
  },
  {
    "original_index": 510,
    "log_distance": 14751.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6667,
    "depth_percent": 29,
    "length": 0.83,
    "width": 1.38,
    "joint_number": 4080
  },
  {
    "original_index": 511,
    "log_distance": 14753.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5833,
    "depth_percent": 19,
    "length": 0.67,
    "width": 1.1,
    "joint_number": 4080
  },
  {
    "original_index": 512,
    "log_distance": 14753.35,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 2.6167,
    "depth_percent": 16,
    "length": 1.64,
    "width": 1.17,
    "joint_number": 4080
  },
  {
    "original_index": 513,
    "log_distance": 14753.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.6,
    "depth_percent": 22,
    "length": 0.98,
    "width": 1.38,
    "joint_number": 4080
  },
  {
    "original_index": 514,
    "log_distance": 14753.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3167,
    "depth_percent": 12,
    "length": 0.47,
    "width": 0.94,
    "joint_number": 4080
  },
  {
    "original_index": 515,
    "log_distance": 14754.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8,
    "depth_percent": 12,
    "length": 2.21,
    "width": 1.18,
    "joint_number": 4080
  },
  {
    "original_index": 516,
    "log_distance": 14757.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4833,
    "depth_percent": 11,
    "length": 0.94,
    "width": 2.01,
    "joint_number": 4080
  },
  {
    "original_index": 523,
    "log_distance": 14909.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3667,
    "depth_percent": 11,
    "length": 0.67,
    "width": 1.18,
    "joint_number": 4140
  },
  {
    "original_index": 525,
    "log_distance": 14932.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.3,
    "depth_percent": 27,
    "length": 0.55,
    "width": 1.3,
    "joint_number": 4150
  },
  {
    "original_index": 526,
    "log_distance": 14934.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.7833,
    "depth_percent": 14,
    "length": 1.89,
    "width": 2.17,
    "joint_number": 4150
  },
  {
    "original_index": 540,
    "log_distance": 14966.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6667,
    "depth_percent": 19,
    "length": 0.71,
    "width": 0.83,
    "joint_number": 4160.01
  },
  {
    "original_index": 541,
    "log_distance": 14966.55,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7833,
    "depth_percent": 13,
    "length": 0.59,
    "width": 0.71,
    "joint_number": 4160.01
  },
  {
    "original_index": 544,
    "log_distance": 14967.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0167,
    "depth_percent": 19,
    "length": 1.69,
    "width": 1.5,
    "joint_number": 4160.01
  },
  {
    "original_index": 545,
    "log_distance": 14967.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.75,
    "depth_percent": 14,
    "length": 2.24,
    "width": 0.71,
    "joint_number": 4160.01
  },
  {
    "original_index": 546,
    "log_distance": 14967.92,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.8167,
    "depth_percent": 24,
    "length": 2.7,
    "width": 3.1,
    "joint_number": 4160.01
  },
  {
    "original_index": 547,
    "log_distance": 14968.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6,
    "depth_percent": 10,
    "length": 0.79,
    "width": 1.53,
    "joint_number": 4160.01
  },
  {
    "original_index": 549,
    "log_distance": 14968.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2,
    "depth_percent": 15,
    "length": 0.87,
    "width": 1.38,
    "joint_number": 4160.02
  },
  {
    "original_index": 550,
    "log_distance": 14968.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9667,
    "depth_percent": 12,
    "length": 1.69,
    "width": 1.34,
    "joint_number": 4160.02
  },
  {
    "original_index": 551,
    "log_distance": 14968.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5,
    "depth_percent": 19,
    "length": 1.34,
    "width": 1.42,
    "joint_number": 4160.02
  },
  {
    "original_index": 552,
    "log_distance": 14968.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.05,
    "depth_percent": 15,
    "length": 1.5,
    "width": 1.38,
    "joint_number": 4160.02
  },
  {
    "original_index": 553,
    "log_distance": 14968.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2167,
    "depth_percent": 10,
    "length": 1.61,
    "width": 1.65,
    "joint_number": 4160.02
  },
  {
    "original_index": 554,
    "log_distance": 14969.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9667,
    "depth_percent": 11,
    "length": 0.63,
    "width": 0.59,
    "joint_number": 4160.02
  },
  {
    "original_index": 555,
    "log_distance": 14969.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4167,
    "depth_percent": 11,
    "length": 0.87,
    "width": 1.22,
    "joint_number": 4160.02
  },
  {
    "original_index": 556,
    "log_distance": 14969.81,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.1833,
    "depth_percent": 26,
    "length": 1.93,
    "width": 8.36,
    "joint_number": 4160.02
  },
  {
    "original_index": 557,
    "log_distance": 14970.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7833,
    "depth_percent": 15,
    "length": 1.02,
    "width": 0.94,
    "joint_number": 4160.02
  },
  {
    "original_index": 558,
    "log_distance": 14970.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.05,
    "depth_percent": 11,
    "length": 1.46,
    "width": 2.99,
    "joint_number": 4160.02
  },
  {
    "original_index": 559,
    "log_distance": 14970.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7667,
    "depth_percent": 14,
    "length": 1.58,
    "width": 1.18,
    "joint_number": 4160.02
  },
  {
    "original_index": 560,
    "log_distance": 14970.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.85,
    "depth_percent": 10,
    "length": 1.3,
    "width": 2.87,
    "joint_number": 4160.02
  },
  {
    "original_index": 561,
    "log_distance": 14970.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.15,
    "depth_percent": 22,
    "length": 1.14,
    "width": 1.34,
    "joint_number": 4160.02
  },
  {
    "original_index": 562,
    "log_distance": 14971.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8667,
    "depth_percent": 13,
    "length": 1.02,
    "width": 1.06,
    "joint_number": 4160.02
  },
  {
    "original_index": 563,
    "log_distance": 14971.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.6333,
    "depth_percent": 13,
    "length": 1.14,
    "width": 2.09,
    "joint_number": 4160.02
  },
  {
    "original_index": 565,
    "log_distance": 14972.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7167,
    "depth_percent": 40,
    "length": 0.99,
    "width": 3.03,
    "joint_number": 4190
  },
  {
    "original_index": 566,
    "log_distance": 14972.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6167,
    "depth_percent": 14,
    "length": 0.79,
    "width": 0.59,
    "joint_number": 4190
  },
  {
    "original_index": 567,
    "log_distance": 14972.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.0167,
    "depth_percent": 11,
    "length": 0.94,
    "width": 2.36,
    "joint_number": 4190
  },
  {
    "original_index": 568,
    "log_distance": 14973.7,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.85,
    "depth_percent": 27,
    "length": 2.17,
    "width": 3.77,
    "joint_number": 4190
  },
  {
    "original_index": 569,
    "log_distance": 14974.16,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.9667,
    "depth_percent": 21,
    "length": 0.67,
    "width": 1.38,
    "joint_number": 4190
  },
  {
    "original_index": 570,
    "log_distance": 14974.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7833,
    "depth_percent": 10,
    "length": 1.93,
    "width": 2.32,
    "joint_number": 4190
  },
  {
    "original_index": 573,
    "log_distance": 15015.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.9167,
    "depth_percent": 15,
    "length": 0.59,
    "width": 1.02,
    "joint_number": 4200
  },
  {
    "original_index": 574,
    "log_distance": 15024.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3167,
    "depth_percent": 11,
    "length": 0.87,
    "width": 0.59,
    "joint_number": 4200
  },
  {
    "original_index": 575,
    "log_distance": 15024.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.0333,
    "depth_percent": 10,
    "length": 0.59,
    "width": 2.48,
    "joint_number": 4200
  },
  {
    "original_index": 576,
    "log_distance": 15024.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9333,
    "depth_percent": 10,
    "length": 0.75,
    "width": 1.81,
    "joint_number": 4200
  },
  {
    "original_index": 578,
    "log_distance": 15026.16,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.9833,
    "depth_percent": 11,
    "length": 0.83,
    "width": 1.42,
    "joint_number": 4210
  },
  {
    "original_index": 581,
    "log_distance": 15053.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8167,
    "depth_percent": 17,
    "length": 0.79,
    "width": 1.02,
    "joint_number": 4210
  },
  {
    "original_index": 582,
    "log_distance": 15053.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8333,
    "depth_percent": 13,
    "length": 0.43,
    "width": 0.94,
    "joint_number": 4210
  },
  {
    "original_index": 583,
    "log_distance": 15054.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.85,
    "depth_percent": 12,
    "length": 0.83,
    "width": 1.26,
    "joint_number": 4210
  },
  {
    "original_index": 584,
    "log_distance": 15054.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.2333,
    "depth_percent": 18,
    "length": 0.67,
    "width": 1.06,
    "joint_number": 4210
  },
  {
    "original_index": 585,
    "log_distance": 15055.17,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.5667,
    "depth_percent": 30,
    "length": 2.22,
    "width": 2.95,
    "joint_number": 4210
  },
  {
    "original_index": 586,
    "log_distance": 15055.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0833,
    "depth_percent": 23,
    "length": 1.58,
    "width": 1.77,
    "joint_number": 4210
  },
  {
    "original_index": 587,
    "log_distance": 15055.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.7833,
    "depth_percent": 46,
    "length": 1.18,
    "width": 1.61,
    "joint_number": 4210
  },
  {
    "original_index": 588,
    "log_distance": 15056.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8667,
    "depth_percent": 13,
    "length": 1.85,
    "width": 1.1,
    "joint_number": 4210
  },
  {
    "original_index": 589,
    "log_distance": 15056.15,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.0667,
    "depth_percent": 21,
    "length": 2.09,
    "width": 3.21,
    "joint_number": 4210
  },
  {
    "original_index": 590,
    "log_distance": 15059.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9,
    "depth_percent": 17,
    "length": 1.89,
    "width": 1.38,
    "joint_number": 4210
  },
  {
    "original_index": 591,
    "log_distance": 15061.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9,
    "depth_percent": 15,
    "length": 0.83,
    "width": 1.22,
    "joint_number": 4210
  },
  {
    "original_index": 593,
    "log_distance": 15069.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8833,
    "depth_percent": 23,
    "length": 1.61,
    "width": 2.91,
    "joint_number": 4220
  },
  {
    "original_index": 594,
    "log_distance": 15069.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8833,
    "depth_percent": 10,
    "length": 0.75,
    "width": 1.61,
    "joint_number": 4220
  },
  {
    "original_index": 596,
    "log_distance": 15073.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2,
    "depth_percent": 19,
    "length": 0.75,
    "width": 1.5,
    "joint_number": 4220
  },
  {
    "original_index": 597,
    "log_distance": 15074.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.55,
    "depth_percent": 20,
    "length": 0.71,
    "width": 1.3,
    "joint_number": 4220
  },
  {
    "original_index": 598,
    "log_distance": 15074.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6667,
    "depth_percent": 26,
    "length": 0.59,
    "width": 0.94,
    "joint_number": 4220
  },
  {
    "original_index": 599,
    "log_distance": 15076.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.7,
    "depth_percent": 10,
    "length": 0.35,
    "width": 0.67,
    "joint_number": 4220
  },
  {
    "original_index": 600,
    "log_distance": 15076.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.2833,
    "depth_percent": 20,
    "length": 0.75,
    "width": 2.01,
    "joint_number": 4220
  },
  {
    "original_index": 602,
    "log_distance": 15086.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.1167,
    "depth_percent": 22,
    "length": 0.67,
    "width": 1.02,
    "joint_number": 4220
  },
  {
    "original_index": 603,
    "log_distance": 15086.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1167,
    "depth_percent": 10,
    "length": 0.55,
    "width": 0.94,
    "joint_number": 4220
  },
  {
    "original_index": 604,
    "log_distance": 15086.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1,
    "depth_percent": 10,
    "length": 0.67,
    "width": 0.79,
    "joint_number": 4220
  },
  {
    "original_index": 610,
    "log_distance": 15094.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.1333,
    "depth_percent": 19,
    "length": 0.67,
    "width": 1.61,
    "joint_number": 4220
  },
  {
    "original_index": 612,
    "log_distance": 15095.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.15,
    "depth_percent": 49,
    "length": 1.02,
    "width": 1.89,
    "joint_number": 4220
  },
  {
    "original_index": 613,
    "log_distance": 15095.29,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.3667,
    "depth_percent": 43,
    "length": 1.38,
    "width": 1.78,
    "joint_number": 4220
  },
  {
    "original_index": 614,
    "log_distance": 15095.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.5,
    "depth_percent": 29,
    "length": 0.51,
    "width": 1.02,
    "joint_number": 4220
  },
  {
    "original_index": 615,
    "log_distance": 15095.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1667,
    "depth_percent": 14,
    "length": 1.93,
    "width": 2.05,
    "joint_number": 4220
  },
  {
    "original_index": 616,
    "log_distance": 15096.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.2333,
    "depth_percent": 10,
    "length": 0.59,
    "width": 1.02,
    "joint_number": 4220
  },
  {
    "original_index": 617,
    "log_distance": 15096.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.0833,
    "depth_percent": 40,
    "length": 0.75,
    "width": 1.36,
    "joint_number": 4220
  },
  {
    "original_index": 618,
    "log_distance": 15097.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.9833,
    "depth_percent": 30,
    "length": 1.65,
    "width": 1.97,
    "joint_number": 4220
  },
  {
    "original_index": 619,
    "log_distance": 15098.37,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.1667,
    "depth_percent": 38,
    "length": 3.24,
    "width": 1.38,
    "joint_number": 4220
  },
  {
    "original_index": 620,
    "log_distance": 15098.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.95,
    "depth_percent": 13,
    "length": 0.55,
    "width": 0.94,
    "joint_number": 4220
  },
  {
    "original_index": 625,
    "log_distance": 15184.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.35,
    "depth_percent": 11,
    "length": 1.02,
    "width": 2.01,
    "joint_number": 4240
  },
  {
    "original_index": 626,
    "log_distance": 15184.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2667,
    "depth_percent": 10,
    "length": 0.79,
    "width": 2.24,
    "joint_number": 4240
  },
  {
    "original_index": 627,
    "log_distance": 15184.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1333,
    "depth_percent": 24,
    "length": 0.71,
    "width": 2.05,
    "joint_number": 4240
  },
  {
    "original_index": 629,
    "log_distance": 15186.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.1667,
    "depth_percent": 10,
    "length": 1.1,
    "width": 2.44,
    "joint_number": 4250
  },
  {
    "original_index": 631,
    "log_distance": 15263.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.75,
    "depth_percent": 14,
    "length": 0.98,
    "width": 5.08,
    "joint_number": 4260
  },
  {
    "original_index": 633,
    "log_distance": 15275.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.6833,
    "depth_percent": 12,
    "length": 0.55,
    "width": 1.1,
    "joint_number": 4270
  },
  {
    "original_index": 634,
    "log_distance": 15275.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1167,
    "depth_percent": 10,
    "length": 1.22,
    "width": 1.81,
    "joint_number": 4270
  },
  {
    "original_index": 635,
    "log_distance": 15275.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.2833,
    "depth_percent": 18,
    "length": 1.5,
    "width": 5.2,
    "joint_number": 4270
  },
  {
    "original_index": 636,
    "log_distance": 15275.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0167,
    "depth_percent": 17,
    "length": 1.1,
    "width": 2.79,
    "joint_number": 4270
  },
  {
    "original_index": 649,
    "log_distance": 15366.08,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0833,
    "depth_percent": 15,
    "length": 0.91,
    "width": 7.36,
    "joint_number": 4340
  },
  {
    "original_index": 654,
    "log_distance": 15377.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0167,
    "depth_percent": 19,
    "length": 0.67,
    "width": 1.14,
    "joint_number": 4360
  },
  {
    "original_index": 662,
    "log_distance": 15505.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.9,
    "depth_percent": 13,
    "length": 0.71,
    "width": 1.69,
    "joint_number": 4410
  },
  {
    "original_index": 687,
    "log_distance": 16377.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7333,
    "depth_percent": 11,
    "length": 0.67,
    "width": 1.42,
    "joint_number": 4620
  },
  {
    "original_index": 692,
    "log_distance": 16460.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.95,
    "depth_percent": 36,
    "length": 0.75,
    "width": 1.93,
    "joint_number": 4650
  },
  {
    "original_index": 697,
    "log_distance": 16538.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0333,
    "depth_percent": 12,
    "length": 1.18,
    "width": 1.61,
    "joint_number": 4660
  },
  {
    "original_index": 698,
    "log_distance": 16538.65,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.4167,
    "depth_percent": 29,
    "length": 1.67,
    "width": 5.24,
    "joint_number": 4660
  },
  {
    "original_index": 699,
    "log_distance": 16538.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.05,
    "depth_percent": 35,
    "length": 0.67,
    "width": 2.01,
    "joint_number": 4660
  },
  {
    "original_index": 706,
    "log_distance": 16620.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9333,
    "depth_percent": 10,
    "length": 2.05,
    "width": 2.21,
    "joint_number": 4690
  },
  {
    "original_index": 707,
    "log_distance": 16620.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3667,
    "depth_percent": 16,
    "length": 0.71,
    "width": 1.73,
    "joint_number": 4690
  },
  {
    "original_index": 708,
    "log_distance": 16620.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5333,
    "depth_percent": 10,
    "length": 0.55,
    "width": 0.59,
    "joint_number": 4690
  },
  {
    "original_index": 711,
    "log_distance": 16699.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.2167,
    "depth_percent": 13,
    "length": 0.94,
    "width": 3.11,
    "joint_number": 4700
  },
  {
    "original_index": 712,
    "log_distance": 16699.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9333,
    "depth_percent": 13,
    "length": 0.71,
    "width": 2.52,
    "joint_number": 4700
  },
  {
    "original_index": 714,
    "log_distance": 16699.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.0167,
    "depth_percent": 16,
    "length": 0.59,
    "width": 1.02,
    "joint_number": 4700
  },
  {
    "original_index": 717,
    "log_distance": 16700.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0667,
    "depth_percent": 13,
    "length": 0.91,
    "width": 2.48,
    "joint_number": 4710
  },
  {
    "original_index": 718,
    "log_distance": 16700.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.55,
    "depth_percent": 22,
    "length": 1.3,
    "width": 4.84,
    "joint_number": 4710
  },
  {
    "original_index": 719,
    "log_distance": 16700.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9,
    "depth_percent": 45,
    "length": 0.87,
    "width": 3.98,
    "joint_number": 4710
  },
  {
    "original_index": 720,
    "log_distance": 16700.8,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.1333,
    "depth_percent": 22,
    "length": 2.4,
    "width": 4.61,
    "joint_number": 4710
  },
  {
    "original_index": 721,
    "log_distance": 16700.81,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.2833,
    "depth_percent": 12,
    "length": 0.98,
    "width": 4.61,
    "joint_number": 4710
  },
  {
    "original_index": 722,
    "log_distance": 16700.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.0333,
    "depth_percent": 13,
    "length": 0.91,
    "width": 1.77,
    "joint_number": 4710
  },
  {
    "original_index": 728,
    "log_distance": 16780.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6667,
    "depth_percent": 13,
    "length": 0.51,
    "width": 1.34,
    "joint_number": 4730
  },
  {
    "original_index": 747,
    "log_distance": 17473.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1833,
    "depth_percent": 10,
    "length": 0.98,
    "width": 3.78,
    "joint_number": 4900
  },
  {
    "original_index": 775,
    "log_distance": 18213.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0833,
    "depth_percent": 31,
    "length": 0.83,
    "width": 2.48,
    "joint_number": 5120
  },
  {
    "original_index": 782,
    "log_distance": 18453.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6,
    "depth_percent": 23,
    "length": 0.55,
    "width": 1.1,
    "joint_number": 5180
  },
  {
    "original_index": 794,
    "log_distance": 18841.88,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.2833,
    "depth_percent": 54,
    "length": 2.53,
    "width": 18.14,
    "joint_number": 5270
  },
  {
    "original_index": 795,
    "log_distance": 18842.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.05,
    "depth_percent": 12,
    "length": 0.63,
    "width": 5.35,
    "joint_number": 5270
  },
  {
    "original_index": 796,
    "log_distance": 18842.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.6333,
    "depth_percent": 18,
    "length": 0.47,
    "width": 1.22,
    "joint_number": 5270
  },
  {
    "original_index": 814,
    "log_distance": 19324.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7,
    "depth_percent": 11,
    "length": 0.47,
    "width": 0.91,
    "joint_number": 5400
  },
  {
    "original_index": 837,
    "log_distance": 20203.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8,
    "depth_percent": 10,
    "length": 0.43,
    "width": 1.34,
    "joint_number": 5620
  },
  {
    "original_index": 868,
    "log_distance": 21150.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5333,
    "depth_percent": 11,
    "length": 0.47,
    "width": 0.98,
    "joint_number": 5870
  },
  {
    "original_index": 880,
    "log_distance": 21311.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.0667,
    "depth_percent": 24,
    "length": 0.94,
    "width": 1.89,
    "joint_number": 5920
  },
  {
    "original_index": 881,
    "log_distance": 21311.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6167,
    "depth_percent": 17,
    "length": 0.87,
    "width": 3.03,
    "joint_number": 5920
  },
  {
    "original_index": 882,
    "log_distance": 21311.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5,
    "depth_percent": 14,
    "length": 0.35,
    "width": 0.59,
    "joint_number": 5920
  },
  {
    "original_index": 883,
    "log_distance": 21311.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.35,
    "depth_percent": 26,
    "length": 0.59,
    "width": 1.5,
    "joint_number": 5920
  },
  {
    "original_index": 884,
    "log_distance": 21311.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6167,
    "depth_percent": 31,
    "length": 0.55,
    "width": 2.44,
    "joint_number": 5920
  },
  {
    "original_index": 885,
    "log_distance": 21312.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4,
    "depth_percent": 17,
    "length": 0.47,
    "width": 0.98,
    "joint_number": 5920
  },
  {
    "original_index": 890,
    "log_distance": 21337.2,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.2667,
    "depth_percent": 35,
    "length": 1.92,
    "width": 4.23,
    "joint_number": 5920
  },
  {
    "original_index": 895,
    "log_distance": 21367.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0667,
    "depth_percent": 15,
    "length": 1.93,
    "width": 2.6,
    "joint_number": 5930
  },
  {
    "original_index": 896,
    "log_distance": 21368.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.05,
    "depth_percent": 10,
    "length": 1.93,
    "width": 1.93,
    "joint_number": 5930
  },
  {
    "original_index": 897,
    "log_distance": 21368.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9,
    "depth_percent": 11,
    "length": 1.14,
    "width": 2.09,
    "joint_number": 5930
  },
  {
    "original_index": 898,
    "log_distance": 21369.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5667,
    "depth_percent": 14,
    "length": 1.14,
    "width": 0.67,
    "joint_number": 5930
  },
  {
    "original_index": 899,
    "log_distance": 21369.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.95,
    "depth_percent": 19,
    "length": 1.73,
    "width": 1.81,
    "joint_number": 5930
  },
  {
    "original_index": 900,
    "log_distance": 21369.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7667,
    "depth_percent": 13,
    "length": 1.06,
    "width": 1.97,
    "joint_number": 5930
  },
  {
    "original_index": 901,
    "log_distance": 21369.56,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.8333,
    "depth_percent": 28,
    "length": 3.19,
    "width": 9.3,
    "joint_number": 5930
  },
  {
    "original_index": 902,
    "log_distance": 21369.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4,
    "depth_percent": 10,
    "length": 0.39,
    "width": 0.59,
    "joint_number": 5930
  },
  {
    "original_index": 903,
    "log_distance": 21369.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3,
    "depth_percent": 14,
    "length": 0.59,
    "width": 1.69,
    "joint_number": 5930
  },
  {
    "original_index": 904,
    "log_distance": 21370.13,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.5333,
    "depth_percent": 18,
    "length": 0.82,
    "width": 3.19,
    "joint_number": 5930
  },
  {
    "original_index": 905,
    "log_distance": 21370.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0333,
    "depth_percent": 10,
    "length": 1.18,
    "width": 5.04,
    "joint_number": 5930
  },
  {
    "original_index": 906,
    "log_distance": 21370.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3,
    "depth_percent": 20,
    "length": 1.89,
    "width": 2.21,
    "joint_number": 5930
  },
  {
    "original_index": 907,
    "log_distance": 21371.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6333,
    "depth_percent": 14,
    "length": 1.97,
    "width": 3.58,
    "joint_number": 5930
  },
  {
    "original_index": 910,
    "log_distance": 21383.87,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6333,
    "depth_percent": 12,
    "length": 1.81,
    "width": 1.85,
    "joint_number": 5930
  },
  {
    "original_index": 911,
    "log_distance": 21384.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3167,
    "depth_percent": 13,
    "length": 0.55,
    "width": 1.02,
    "joint_number": 5930
  },
  {
    "original_index": 912,
    "log_distance": 21384.38,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.7167,
    "depth_percent": 23,
    "length": 3,
    "width": 3.44,
    "joint_number": 5930
  },
  {
    "original_index": 913,
    "log_distance": 21384.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.95,
    "depth_percent": 47,
    "length": 1.1,
    "width": 1.22,
    "joint_number": 5930
  },
  {
    "original_index": 914,
    "log_distance": 21384.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5667,
    "depth_percent": 12,
    "length": 0.63,
    "width": 1.89,
    "joint_number": 5930
  },
  {
    "original_index": 915,
    "log_distance": 21384.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4167,
    "depth_percent": 10,
    "length": 0.51,
    "width": 0.98,
    "joint_number": 5930
  },
  {
    "original_index": 916,
    "log_distance": 21384.58,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.0833,
    "depth_percent": 47,
    "length": 5.38,
    "width": 5.45,
    "joint_number": 5930
  },
  {
    "original_index": 917,
    "log_distance": 21384.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4,
    "depth_percent": 11,
    "length": 0.32,
    "width": 0.75,
    "joint_number": 5930
  },
  {
    "original_index": 919,
    "log_distance": 21385.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.65,
    "depth_percent": 14,
    "length": 1.5,
    "width": 1.97,
    "joint_number": 5930
  },
  {
    "original_index": 929,
    "log_distance": 21391.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.7167,
    "depth_percent": 19,
    "length": 0.83,
    "width": 1.38,
    "joint_number": 5940
  },
  {
    "original_index": 934,
    "log_distance": 21468.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6667,
    "depth_percent": 12,
    "length": 0.59,
    "width": 0.98,
    "joint_number": 5950
  },
  {
    "original_index": 935,
    "log_distance": 21468.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8833,
    "depth_percent": 11,
    "length": 0.71,
    "width": 0.59,
    "joint_number": 5950
  },
  {
    "original_index": 936,
    "log_distance": 21468.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.65,
    "depth_percent": 13,
    "length": 0.51,
    "width": 0.63,
    "joint_number": 5950
  },
  {
    "original_index": 937,
    "log_distance": 21468.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7667,
    "depth_percent": 13,
    "length": 1.61,
    "width": 1.85,
    "joint_number": 5950
  },
  {
    "original_index": 938,
    "log_distance": 21468.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6,
    "depth_percent": 12,
    "length": 0.43,
    "width": 0.59,
    "joint_number": 5950
  },
  {
    "original_index": 939,
    "log_distance": 21468.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4667,
    "depth_percent": 38,
    "length": 1.3,
    "width": 0.79,
    "joint_number": 5950
  },
  {
    "original_index": 940,
    "log_distance": 21468.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1167,
    "depth_percent": 32,
    "length": 1.89,
    "width": 5.35,
    "joint_number": 5950
  },
  {
    "original_index": 945,
    "log_distance": 21552.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4833,
    "depth_percent": 11,
    "length": 0.59,
    "width": 0.67,
    "joint_number": 5980
  },
  {
    "original_index": 959,
    "log_distance": 21875.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5667,
    "depth_percent": 18,
    "length": 0.79,
    "width": 5.75,
    "joint_number": 6070
  },
  {
    "original_index": 960,
    "log_distance": 21875.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7333,
    "depth_percent": 12,
    "length": 1.34,
    "width": 0.98,
    "joint_number": 6070
  },
  {
    "original_index": 961,
    "log_distance": 21875.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4,
    "depth_percent": 19,
    "length": 0.91,
    "width": 4.17,
    "joint_number": 6070
  },
  {
    "original_index": 964,
    "log_distance": 21955.27,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0167,
    "depth_percent": 11,
    "length": 1.22,
    "width": 2.72,
    "joint_number": 6090
  },
  {
    "original_index": 966,
    "log_distance": 22033.77,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.1667,
    "depth_percent": 51,
    "length": 3.56,
    "width": 12.51,
    "joint_number": 6100
  },
  {
    "original_index": 967,
    "log_distance": 22033.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.85,
    "depth_percent": 21,
    "length": 1.42,
    "width": 3.78,
    "joint_number": 6100
  },
  {
    "original_index": 968,
    "log_distance": 22034.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4833,
    "depth_percent": 14,
    "length": 0.91,
    "width": 0.59,
    "joint_number": 6100
  },
  {
    "original_index": 969,
    "log_distance": 22034.05,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.55,
    "depth_percent": 13,
    "length": 0.43,
    "width": 0.67,
    "joint_number": 6100
  },
  {
    "original_index": 971,
    "log_distance": 22035.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2833,
    "depth_percent": 27,
    "length": 2.21,
    "width": 0.63,
    "joint_number": 6110
  },
  {
    "original_index": 972,
    "log_distance": 22035.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7667,
    "depth_percent": 14,
    "length": 1.89,
    "width": 2.01,
    "joint_number": 6110
  },
  {
    "original_index": 977,
    "log_distance": 22113.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0833,
    "depth_percent": 47,
    "length": 0.98,
    "width": 2.32,
    "joint_number": 6120
  },
  {
    "original_index": 978,
    "log_distance": 22113.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7,
    "depth_percent": 54,
    "length": 1.02,
    "width": 4.33,
    "joint_number": 6120
  },
  {
    "original_index": 986,
    "log_distance": 22354.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3,
    "depth_percent": 10,
    "length": 0.63,
    "width": 2.79,
    "joint_number": 6180
  },
  {
    "original_index": 987,
    "log_distance": 22354.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.75,
    "depth_percent": 15,
    "length": 0.75,
    "width": 2.84,
    "joint_number": 6180
  },
  {
    "original_index": 998,
    "log_distance": 22682.99,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 5.9833,
    "depth_percent": 14,
    "length": 0.35,
    "width": 0.67,
    "joint_number": 6270
  },
  {
    "original_index": 1008,
    "log_distance": 23006.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8167,
    "depth_percent": 12,
    "length": 0.59,
    "width": 1.22,
    "joint_number": 6350
  },
  {
    "original_index": 1009,
    "log_distance": 23007,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.55,
    "depth_percent": 13,
    "length": 0.59,
    "width": 0.67,
    "joint_number": 6350
  },
  {
    "original_index": 1010,
    "log_distance": 23007.05,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9,
    "depth_percent": 19,
    "length": 0.47,
    "width": 0.79,
    "joint_number": 6350
  },
  {
    "original_index": 1011,
    "log_distance": 23007.49,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.3333,
    "depth_percent": 32,
    "length": 1.42,
    "width": 1.55,
    "joint_number": 6350
  },
  {
    "original_index": 1012,
    "log_distance": 23007.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6833,
    "depth_percent": 15,
    "length": 0.47,
    "width": 0.94,
    "joint_number": 6350
  },
  {
    "original_index": 1013,
    "log_distance": 23008.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3167,
    "depth_percent": 16,
    "length": 0.55,
    "width": 1.1,
    "joint_number": 6350
  },
  {
    "original_index": 1015,
    "log_distance": 23018.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7,
    "depth_percent": 11,
    "length": 0.59,
    "width": 1.06,
    "joint_number": 6360
  },
  {
    "original_index": 1016,
    "log_distance": 23018.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.55,
    "depth_percent": 16,
    "length": 1.5,
    "width": 1.46,
    "joint_number": 6360
  },
  {
    "original_index": 1017,
    "log_distance": 23019.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4667,
    "depth_percent": 12,
    "length": 1.5,
    "width": 1.81,
    "joint_number": 6360
  },
  {
    "original_index": 1018,
    "log_distance": 23019.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0667,
    "depth_percent": 14,
    "length": 1.73,
    "width": 1.26,
    "joint_number": 6360
  },
  {
    "original_index": 1019,
    "log_distance": 23020.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1333,
    "depth_percent": 14,
    "length": 0.91,
    "width": 1.3,
    "joint_number": 6360
  },
  {
    "original_index": 1020,
    "log_distance": 23021.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 10,
    "length": 0.59,
    "width": 1.18,
    "joint_number": 6360
  },
  {
    "original_index": 1021,
    "log_distance": 23021.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.95,
    "depth_percent": 24,
    "length": 1.22,
    "width": 1.89,
    "joint_number": 6360
  },
  {
    "original_index": 1022,
    "log_distance": 23022.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6167,
    "depth_percent": 21,
    "length": 0.71,
    "width": 1.38,
    "joint_number": 6360
  },
  {
    "original_index": 1023,
    "log_distance": 23022.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1667,
    "depth_percent": 13,
    "length": 0.75,
    "width": 1.26,
    "joint_number": 6360
  },
  {
    "original_index": 1024,
    "log_distance": 23023,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1833,
    "depth_percent": 11,
    "length": 0.63,
    "width": 1.18,
    "joint_number": 6360
  },
  {
    "original_index": 1025,
    "log_distance": 23023.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3,
    "depth_percent": 14,
    "length": 0.79,
    "width": 1.22,
    "joint_number": 6360
  },
  {
    "original_index": 1026,
    "log_distance": 23023.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5,
    "depth_percent": 10,
    "length": 0.63,
    "width": 0.94,
    "joint_number": 6360
  },
  {
    "original_index": 1027,
    "log_distance": 23023.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4833,
    "depth_percent": 11,
    "length": 1.34,
    "width": 1.34,
    "joint_number": 6360
  },
  {
    "original_index": 1028,
    "log_distance": 23024.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.3167,
    "depth_percent": 17,
    "length": 0.91,
    "width": 1.73,
    "joint_number": 6360
  },
  {
    "original_index": 1029,
    "log_distance": 23024.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2833,
    "depth_percent": 13,
    "length": 1.53,
    "width": 1.73,
    "joint_number": 6360
  },
  {
    "original_index": 1030,
    "log_distance": 23024.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7833,
    "depth_percent": 49,
    "length": 0.87,
    "width": 2.03,
    "joint_number": 6360
  },
  {
    "original_index": 1031,
    "log_distance": 23028.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3667,
    "depth_percent": 10,
    "length": 0.63,
    "width": 1.1,
    "joint_number": 6360
  },
  {
    "original_index": 1032,
    "log_distance": 23028.66,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.8667,
    "depth_percent": 29,
    "length": 1.38,
    "width": 3.65,
    "joint_number": 6360
  },
  {
    "original_index": 1033,
    "log_distance": 23028.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 12,
    "length": 1.1,
    "width": 1.5,
    "joint_number": 6360
  },
  {
    "original_index": 1034,
    "log_distance": 23029.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1333,
    "depth_percent": 16,
    "length": 0.83,
    "width": 1.26,
    "joint_number": 6360
  },
  {
    "original_index": 1035,
    "log_distance": 23030.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7833,
    "depth_percent": 12,
    "length": 0.79,
    "width": 2.05,
    "joint_number": 6360
  },
  {
    "original_index": 1036,
    "log_distance": 23030.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.35,
    "depth_percent": 11,
    "length": 0.98,
    "width": 1.38,
    "joint_number": 6360
  },
  {
    "original_index": 1037,
    "log_distance": 23031.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0333,
    "depth_percent": 23,
    "length": 1.26,
    "width": 1.53,
    "joint_number": 6360
  },
  {
    "original_index": 1038,
    "log_distance": 23032.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 11,
    "length": 0.79,
    "width": 1.42,
    "joint_number": 6360
  },
  {
    "original_index": 1039,
    "log_distance": 23040.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.75,
    "depth_percent": 22,
    "length": 0.51,
    "width": 1.3,
    "joint_number": 6360
  },
  {
    "original_index": 1040,
    "log_distance": 23040.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6167,
    "depth_percent": 20,
    "length": 1.85,
    "width": 2.4,
    "joint_number": 6360
  },
  {
    "original_index": 1045,
    "log_distance": 23074.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.65,
    "depth_percent": 10,
    "length": 0.39,
    "width": 0.63,
    "joint_number": 6370
  },
  {
    "original_index": 1064,
    "log_distance": 23667.31,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 12.4,
    "depth_percent": 31,
    "length": 3.48,
    "width": 8.23,
    "joint_number": 6520
  },
  {
    "original_index": 1065,
    "log_distance": 23667.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.3,
    "depth_percent": 12,
    "length": 0.51,
    "width": 0.59,
    "joint_number": 6520
  },
  {
    "original_index": 1066,
    "log_distance": 23668.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.65,
    "depth_percent": 10,
    "length": 0.39,
    "width": 0.83,
    "joint_number": 6520
  },
  {
    "original_index": 1067,
    "log_distance": 23668.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.45,
    "depth_percent": 10,
    "length": 1.26,
    "width": 2.48,
    "joint_number": 6520
  },
  {
    "original_index": 1068,
    "log_distance": 23669,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.4833,
    "depth_percent": 20,
    "length": 0.79,
    "width": 2.4,
    "joint_number": 6520
  },
  {
    "original_index": 1069,
    "log_distance": 23669.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.6,
    "depth_percent": 18,
    "length": 0.75,
    "width": 2.05,
    "joint_number": 6520
  },
  {
    "original_index": 1077,
    "log_distance": 23705.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.0833,
    "depth_percent": 23,
    "length": 1.1,
    "width": 6.26,
    "joint_number": 6530
  },
  {
    "original_index": 1080,
    "log_distance": 23707.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1667,
    "depth_percent": 70,
    "length": 0.55,
    "width": 1.14,
    "joint_number": 6540
  },
  {
    "original_index": 1087,
    "log_distance": 23867.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6333,
    "depth_percent": 22,
    "length": 0.71,
    "width": 1.38,
    "joint_number": 6580
  },
  {
    "original_index": 1089,
    "log_distance": 23945.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.95,
    "depth_percent": 19,
    "length": 0.47,
    "width": 0.94,
    "joint_number": 6590
  },
  {
    "original_index": 1091,
    "log_distance": 23947.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4,
    "depth_percent": 16,
    "length": 0.75,
    "width": 2.01,
    "joint_number": 6600
  },
  {
    "original_index": 1133,
    "log_distance": 25487.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7667,
    "depth_percent": 15,
    "length": 0.59,
    "width": 1.26,
    "joint_number": 6990
  },
  {
    "original_index": 1134,
    "log_distance": 25525.05,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5,
    "depth_percent": 10,
    "length": 0.75,
    "width": 1.26,
    "joint_number": 6990
  },
  {
    "original_index": 1137,
    "log_distance": 25570.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2833,
    "depth_percent": 12,
    "length": 1.26,
    "width": 1.77,
    "joint_number": 7010
  },
  {
    "original_index": 1150,
    "log_distance": 25875.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1667,
    "depth_percent": 14,
    "length": 1.3,
    "width": 2.91,
    "joint_number": 7120
  },
  {
    "original_index": 1156,
    "log_distance": 26035.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5833,
    "depth_percent": 12,
    "length": 0.98,
    "width": 1.58,
    "joint_number": 7160
  },
  {
    "original_index": 1168,
    "log_distance": 26444.25,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 9.45,
    "depth_percent": 15,
    "length": 0.43,
    "width": 0.71,
    "joint_number": 7260
  },
  {
    "original_index": 1187,
    "log_distance": 26907.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.65,
    "depth_percent": 55,
    "length": 0.87,
    "width": 4.84,
    "joint_number": 7380
  },
  {
    "original_index": 1188,
    "log_distance": 26907.36,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.95,
    "depth_percent": 62,
    "length": 1.98,
    "width": 2.87,
    "joint_number": 7380
  },
  {
    "original_index": 1193,
    "log_distance": 26970,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6,
    "depth_percent": 10,
    "length": 0.94,
    "width": 2.05,
    "joint_number": 7400
  },
  {
    "original_index": 1194,
    "log_distance": 26970.73,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.8833,
    "depth_percent": 12,
    "length": 0.55,
    "width": 0.91,
    "joint_number": 7400
  },
  {
    "original_index": 1195,
    "log_distance": 26970.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.8,
    "depth_percent": 24,
    "length": 0.51,
    "width": 1.02,
    "joint_number": 7400
  },
  {
    "original_index": 1196,
    "log_distance": 26970.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.2167,
    "depth_percent": 12,
    "length": 0.98,
    "width": 7.17,
    "joint_number": 7400
  },
  {
    "original_index": 1201,
    "log_distance": 26985.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3667,
    "depth_percent": 11,
    "length": 0.55,
    "width": 1.18,
    "joint_number": 7420
  },
  {
    "original_index": 1202,
    "log_distance": 26985.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1833,
    "depth_percent": 11,
    "length": 0.75,
    "width": 1.58,
    "joint_number": 7420
  },
  {
    "original_index": 1203,
    "log_distance": 26985.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7667,
    "depth_percent": 29,
    "length": 0.91,
    "width": 2.24,
    "joint_number": 7420
  },
  {
    "original_index": 1204,
    "log_distance": 26985.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.7167,
    "depth_percent": 20,
    "length": 1.06,
    "width": 2.91,
    "joint_number": 7420
  },
  {
    "original_index": 1212,
    "log_distance": 27284.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8833,
    "depth_percent": 13,
    "length": 1.22,
    "width": 2.13,
    "joint_number": 7490
  },
  {
    "original_index": 1213,
    "log_distance": 27285.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1167,
    "depth_percent": 17,
    "length": 0.67,
    "width": 1.42,
    "joint_number": 7490
  },
  {
    "original_index": 1221,
    "log_distance": 27515.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4167,
    "depth_percent": 12,
    "length": 0.63,
    "width": 1.1,
    "joint_number": 7550
  },
  {
    "original_index": 1222,
    "log_distance": 27515.29,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.9667,
    "depth_percent": 19,
    "length": 1.08,
    "width": 4.23,
    "joint_number": 7550
  },
  {
    "original_index": 1236,
    "log_distance": 27987.82,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.8167,
    "depth_percent": 23,
    "length": 1.74,
    "width": 2.45,
    "joint_number": 7670
  },
  {
    "original_index": 1237,
    "log_distance": 27992.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.9,
    "depth_percent": 24,
    "length": 0.71,
    "width": 1.26,
    "joint_number": 7670
  },
  {
    "original_index": 1238,
    "log_distance": 27992.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.9333,
    "depth_percent": 11,
    "length": 0.63,
    "width": 1.26,
    "joint_number": 7670
  },
  {
    "original_index": 1249,
    "log_distance": 28302.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5833,
    "depth_percent": 12,
    "length": 1.85,
    "width": 0.71,
    "joint_number": 7760
  },
  {
    "original_index": 1260,
    "log_distance": 28674.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2833,
    "depth_percent": 12,
    "length": 0.67,
    "width": 1.06,
    "joint_number": 7860
  },
  {
    "original_index": 1261,
    "log_distance": 28674.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1333,
    "depth_percent": 12,
    "length": 1.06,
    "width": 2.13,
    "joint_number": 7860
  },
  {
    "original_index": 1270,
    "log_distance": 28857.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 31,
    "length": 1.69,
    "width": 6.58,
    "joint_number": 7910
  },
  {
    "original_index": 1271,
    "log_distance": 28857.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9333,
    "depth_percent": 57,
    "length": 1.06,
    "width": 2.56,
    "joint_number": 7910
  },
  {
    "original_index": 1286,
    "log_distance": 29171.21,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.0833,
    "depth_percent": 55,
    "length": 1.74,
    "width": 6.91,
    "joint_number": 7990
  },
  {
    "original_index": 1303,
    "log_distance": 29454.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7,
    "depth_percent": 44,
    "length": 0.75,
    "width": 0.93,
    "joint_number": 8060
  },
  {
    "original_index": 1304,
    "log_distance": 29455.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5333,
    "depth_percent": 13,
    "length": 1.89,
    "width": 1.1,
    "joint_number": 8060
  },
  {
    "original_index": 1305,
    "log_distance": 29455.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2167,
    "depth_percent": 15,
    "length": 0.35,
    "width": 1.26,
    "joint_number": 8060
  },
  {
    "original_index": 1306,
    "log_distance": 29455.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0667,
    "depth_percent": 14,
    "length": 2.05,
    "width": 1.53,
    "joint_number": 8060
  },
  {
    "original_index": 1309,
    "log_distance": 29464.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4667,
    "depth_percent": 13,
    "length": 2.21,
    "width": 2.09,
    "joint_number": 8060
  },
  {
    "original_index": 1310,
    "log_distance": 29464.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9833,
    "depth_percent": 12,
    "length": 1.65,
    "width": 2.17,
    "joint_number": 8060
  },
  {
    "original_index": 1311,
    "log_distance": 29465.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4833,
    "depth_percent": 29,
    "length": 1.61,
    "width": 1.61,
    "joint_number": 8060
  },
  {
    "original_index": 1312,
    "log_distance": 29465.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3167,
    "depth_percent": 13,
    "length": 0.43,
    "width": 0.87,
    "joint_number": 8060
  },
  {
    "original_index": 1313,
    "log_distance": 29466.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4833,
    "depth_percent": 33,
    "length": 1.89,
    "width": 1.14,
    "joint_number": 8060
  },
  {
    "original_index": 1314,
    "log_distance": 29466.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0833,
    "depth_percent": 11,
    "length": 1.42,
    "width": 1.18,
    "joint_number": 8060
  },
  {
    "original_index": 1315,
    "log_distance": 29467.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4167,
    "depth_percent": 22,
    "length": 0.75,
    "width": 1.3,
    "joint_number": 8060
  },
  {
    "original_index": 1316,
    "log_distance": 29469.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7167,
    "depth_percent": 67,
    "length": 0.83,
    "width": 0.6,
    "joint_number": 8060
  },
  {
    "original_index": 1317,
    "log_distance": 29470.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1833,
    "depth_percent": 14,
    "length": 0.63,
    "width": 0.98,
    "joint_number": 8060
  },
  {
    "original_index": 1318,
    "log_distance": 29471.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6167,
    "depth_percent": 21,
    "length": 0.71,
    "width": 1.06,
    "joint_number": 8060
  },
  {
    "original_index": 1320,
    "log_distance": 29485.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3,
    "depth_percent": 13,
    "length": 1.02,
    "width": 0.63,
    "joint_number": 8060
  },
  {
    "original_index": 1321,
    "log_distance": 29485.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0667,
    "depth_percent": 13,
    "length": 0.67,
    "width": 1.1,
    "joint_number": 8060
  },
  {
    "original_index": 1322,
    "log_distance": 29486.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8,
    "depth_percent": 22,
    "length": 0.79,
    "width": 1.65,
    "joint_number": 8060
  },
  {
    "original_index": 1325,
    "log_distance": 29490.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9333,
    "depth_percent": 66,
    "length": 0.75,
    "width": 1.58,
    "joint_number": 8060
  },
  {
    "original_index": 1337,
    "log_distance": 29742.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.4833,
    "depth_percent": 47,
    "length": 0.67,
    "width": 2.01,
    "joint_number": 8140
  },
  {
    "original_index": 1354,
    "log_distance": 30308.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 10,
    "length": 0.79,
    "width": 1.42,
    "joint_number": 8280
  },
  {
    "original_index": 1355,
    "log_distance": 30308.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.75,
    "depth_percent": 16,
    "length": 0.75,
    "width": 1.46,
    "joint_number": 8280
  },
  {
    "original_index": 1356,
    "log_distance": 30309.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.45,
    "depth_percent": 23,
    "length": 0.63,
    "width": 1.18,
    "joint_number": 8280
  },
  {
    "original_index": 1357,
    "log_distance": 30309.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4833,
    "depth_percent": 10,
    "length": 0.51,
    "width": 0.79,
    "joint_number": 8280
  },
  {
    "original_index": 1359,
    "log_distance": 30333.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1833,
    "depth_percent": 19,
    "length": 0.59,
    "width": 1.06,
    "joint_number": 8290
  },
  {
    "original_index": 1361,
    "log_distance": 30357.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3333,
    "depth_percent": 10,
    "length": 0.59,
    "width": 2.05,
    "joint_number": 8300
  },
  {
    "original_index": 1362,
    "log_distance": 30395.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0167,
    "depth_percent": 11,
    "length": 1.5,
    "width": 2.05,
    "joint_number": 8300
  },
  {
    "original_index": 1363,
    "log_distance": 30396.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6167,
    "depth_percent": 12,
    "length": 0.75,
    "width": 1.14,
    "joint_number": 8300
  },
  {
    "original_index": 1384,
    "log_distance": 30970.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.85,
    "depth_percent": 14,
    "length": 0.75,
    "width": 1.5,
    "joint_number": 8460
  },
  {
    "original_index": 1385,
    "log_distance": 30970.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7333,
    "depth_percent": 18,
    "length": 0.47,
    "width": 6.97,
    "joint_number": 8460
  },
  {
    "original_index": 1394,
    "log_distance": 31153.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2833,
    "depth_percent": 12,
    "length": 1.69,
    "width": 2.36,
    "joint_number": 8520
  },
  {
    "original_index": 1395,
    "log_distance": 31153.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.0833,
    "depth_percent": 18,
    "length": 1.14,
    "width": 1.77,
    "joint_number": 8520
  },
  {
    "original_index": 1396,
    "log_distance": 31154.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9833,
    "depth_percent": 19,
    "length": 1.97,
    "width": 1.42,
    "joint_number": 8520
  },
  {
    "original_index": 1397,
    "log_distance": 31154.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.0667,
    "depth_percent": 13,
    "length": 0.98,
    "width": 2.01,
    "joint_number": 8520
  },
  {
    "original_index": 1405,
    "log_distance": 31450.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1667,
    "depth_percent": 13,
    "length": 1.85,
    "width": 0.91,
    "joint_number": 8590
  },
  {
    "original_index": 1406,
    "log_distance": 31450.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.05,
    "depth_percent": 19,
    "length": 0.79,
    "width": 1.61,
    "joint_number": 8590
  },
  {
    "original_index": 1413,
    "log_distance": 31555.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.9333,
    "depth_percent": 67,
    "length": 1.02,
    "width": 0.7,
    "joint_number": 8640
  },
  {
    "original_index": 1415,
    "log_distance": 31555.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.95,
    "depth_percent": 14,
    "length": 0.75,
    "width": 1.06,
    "joint_number": 8640
  },
  {
    "original_index": 1418,
    "log_distance": 31558.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4333,
    "depth_percent": 16,
    "length": 0.67,
    "width": 0.63,
    "joint_number": 8650
  },
  {
    "original_index": 1419,
    "log_distance": 31558.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1667,
    "depth_percent": 10,
    "length": 0.98,
    "width": 5.28,
    "joint_number": 8650
  },
  {
    "original_index": 1423,
    "log_distance": 31598.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3,
    "depth_percent": 14,
    "length": 0.79,
    "width": 1.1,
    "joint_number": 8660
  },
  {
    "original_index": 1424,
    "log_distance": 31598.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9167,
    "depth_percent": 12,
    "length": 2.13,
    "width": 1.1,
    "joint_number": 8660
  },
  {
    "original_index": 1425,
    "log_distance": 31598.18,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.9167,
    "depth_percent": 21,
    "length": 1.62,
    "width": 3.98,
    "joint_number": 8660
  },
  {
    "original_index": 1426,
    "log_distance": 31598.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1833,
    "depth_percent": 30,
    "length": 0.91,
    "width": 2.09,
    "joint_number": 8660
  },
  {
    "original_index": 1427,
    "log_distance": 31598.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.55,
    "depth_percent": 23,
    "length": 0.71,
    "width": 1.22,
    "joint_number": 8660
  },
  {
    "original_index": 1429,
    "log_distance": 31600.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.45,
    "depth_percent": 10,
    "length": 0.75,
    "width": 0.79,
    "joint_number": 8660
  },
  {
    "original_index": 1431,
    "log_distance": 31612.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4667,
    "depth_percent": 13,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 8660
  },
  {
    "original_index": 1441,
    "log_distance": 31632.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.35,
    "depth_percent": 22,
    "length": 0.79,
    "width": 1.42,
    "joint_number": 8680
  },
  {
    "original_index": 1443,
    "log_distance": 31634.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5833,
    "depth_percent": 12,
    "length": 0.75,
    "width": 1.14,
    "joint_number": 8690
  },
  {
    "original_index": 1444,
    "log_distance": 31635.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9,
    "depth_percent": 23,
    "length": 0.91,
    "width": 2.64,
    "joint_number": 8690
  },
  {
    "original_index": 1446,
    "log_distance": 31656.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1,
    "depth_percent": 13,
    "length": 0.63,
    "width": 1.14,
    "joint_number": 8700
  },
  {
    "original_index": 1447,
    "log_distance": 31695.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3167,
    "depth_percent": 15,
    "length": 1.73,
    "width": 2.36,
    "joint_number": 8700
  },
  {
    "original_index": 1469,
    "log_distance": 32268.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9167,
    "depth_percent": 14,
    "length": 0.67,
    "width": 2.52,
    "joint_number": 8910
  },
  {
    "original_index": 1470,
    "log_distance": 32268.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.95,
    "depth_percent": 11,
    "length": 1.3,
    "width": 3.19,
    "joint_number": 8910
  },
  {
    "original_index": 1477,
    "log_distance": 32400.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2833,
    "depth_percent": 15,
    "length": 0.55,
    "width": 5.87,
    "joint_number": 8960
  },
  {
    "original_index": 1481,
    "log_distance": 32410.99,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.7667,
    "depth_percent": 21,
    "length": 2.17,
    "width": 12.07,
    "joint_number": 8980
  },
  {
    "original_index": 1489,
    "log_distance": 32564.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.0667,
    "depth_percent": 12,
    "length": 1.3,
    "width": 2.01,
    "joint_number": 9030
  },
  {
    "original_index": 1491,
    "log_distance": 32564.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.9833,
    "depth_percent": 11,
    "length": 1.18,
    "width": 0.94,
    "joint_number": 9040
  },
  {
    "original_index": 1492,
    "log_distance": 32564.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.3667,
    "depth_percent": 11,
    "length": 1.69,
    "width": 1.02,
    "joint_number": 9040
  },
  {
    "original_index": 1517,
    "log_distance": 32975.48,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.6833,
    "depth_percent": 42,
    "length": 1.06,
    "width": 9.15,
    "joint_number": 9160
  },
  {
    "original_index": 1518,
    "log_distance": 32975.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9167,
    "depth_percent": 20,
    "length": 1.61,
    "width": 3.54,
    "joint_number": 9160
  },
  {
    "original_index": 1519,
    "log_distance": 32975.76,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.8167,
    "depth_percent": 41,
    "length": 2.2,
    "width": 2.26,
    "joint_number": 9160
  },
  {
    "original_index": 1520,
    "log_distance": 32976.05,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6167,
    "depth_percent": 10,
    "length": 1.73,
    "width": 0.91,
    "joint_number": 9160
  },
  {
    "original_index": 1521,
    "log_distance": 32976.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.6667,
    "depth_percent": 10,
    "length": 0.43,
    "width": 0.63,
    "joint_number": 9160
  },
  {
    "original_index": 1522,
    "log_distance": 32976.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8667,
    "depth_percent": 14,
    "length": 0.67,
    "width": 0.63,
    "joint_number": 9160
  },
  {
    "original_index": 1523,
    "log_distance": 32976.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.2667,
    "depth_percent": 26,
    "length": 0.59,
    "width": 1.42,
    "joint_number": 9160
  },
  {
    "original_index": 1524,
    "log_distance": 32976.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1833,
    "depth_percent": 12,
    "length": 1.89,
    "width": 1.69,
    "joint_number": 9160
  },
  {
    "original_index": 1525,
    "log_distance": 32976.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9167,
    "depth_percent": 10,
    "length": 0.55,
    "width": 2.13,
    "joint_number": 9160
  },
  {
    "original_index": 1526,
    "log_distance": 32976.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.7667,
    "depth_percent": 17,
    "length": 0.59,
    "width": 1.53,
    "joint_number": 9160
  },
  {
    "original_index": 1527,
    "log_distance": 32976.69,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.65,
    "depth_percent": 32,
    "length": 3.37,
    "width": 8.32,
    "joint_number": 9160
  },
  {
    "original_index": 1528,
    "log_distance": 32977.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.75,
    "depth_percent": 18,
    "length": 0.63,
    "width": 1.34,
    "joint_number": 9160
  },
  {
    "original_index": 1529,
    "log_distance": 32977.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2667,
    "depth_percent": 13,
    "length": 1.46,
    "width": 0.83,
    "joint_number": 9160
  },
  {
    "original_index": 1530,
    "log_distance": 32978.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.3,
    "depth_percent": 11,
    "length": 1.38,
    "width": 1.97,
    "joint_number": 9160
  },
  {
    "original_index": 1540,
    "log_distance": 33162.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7333,
    "depth_percent": 19,
    "length": 1.42,
    "width": 0.87,
    "joint_number": 9210
  },
  {
    "original_index": 1542,
    "log_distance": 33240.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.25,
    "depth_percent": 11,
    "length": 1.42,
    "width": 1.1,
    "joint_number": 9220
  },
  {
    "original_index": 1543,
    "log_distance": 33241.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4833,
    "depth_percent": 17,
    "length": 0.79,
    "width": 0.98,
    "joint_number": 9220
  },
  {
    "original_index": 1544,
    "log_distance": 33241.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1833,
    "depth_percent": 18,
    "length": 0.91,
    "width": 1.93,
    "joint_number": 9220
  },
  {
    "original_index": 1545,
    "log_distance": 33241.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3833,
    "depth_percent": 18,
    "length": 1.02,
    "width": 1.38,
    "joint_number": 9220
  },
  {
    "original_index": 1547,
    "log_distance": 33242.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.0833,
    "depth_percent": 17,
    "length": 0.55,
    "width": 1.73,
    "joint_number": 9230
  },
  {
    "original_index": 1550,
    "log_distance": 33322.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8167,
    "depth_percent": 16,
    "length": 0.87,
    "width": 3.07,
    "joint_number": 9250
  },
  {
    "original_index": 1551,
    "log_distance": 33354.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.05,
    "depth_percent": 41,
    "length": 2.28,
    "width": 2.17,
    "joint_number": 9250
  },
  {
    "original_index": 1552,
    "log_distance": 33355.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.5667,
    "depth_percent": 33,
    "length": 0.79,
    "width": 1.38,
    "joint_number": 9250
  },
  {
    "original_index": 1553,
    "log_distance": 33356.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.6833,
    "depth_percent": 15,
    "length": 2.05,
    "width": 2.09,
    "joint_number": 9250
  },
  {
    "original_index": 1554,
    "log_distance": 33356.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.2667,
    "depth_percent": 12,
    "length": 1.89,
    "width": 0.67,
    "joint_number": 9250
  },
  {
    "original_index": 1555,
    "log_distance": 33359.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.15,
    "depth_percent": 23,
    "length": 1.93,
    "width": 1.58,
    "joint_number": 9250
  },
  {
    "original_index": 1556,
    "log_distance": 33360.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.7833,
    "depth_percent": 10,
    "length": 0.55,
    "width": 1.58,
    "joint_number": 9250
  },
  {
    "original_index": 1557,
    "log_distance": 33360.82,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 12.6667,
    "depth_percent": 18,
    "length": 2.53,
    "width": 7.63,
    "joint_number": 9250
  },
  {
    "original_index": 1558,
    "log_distance": 33361,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.4167,
    "depth_percent": 14,
    "length": 0.35,
    "width": 0.59,
    "joint_number": 9250
  },
  {
    "original_index": 1560,
    "log_distance": 33371.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7667,
    "depth_percent": 12,
    "length": 0.39,
    "width": 0.87,
    "joint_number": 9260
  },
  {
    "original_index": 1561,
    "log_distance": 33371.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8667,
    "depth_percent": 28,
    "length": 0.75,
    "width": 1.38,
    "joint_number": 9260
  },
  {
    "original_index": 1562,
    "log_distance": 33371.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3,
    "depth_percent": 10,
    "length": 0.98,
    "width": 0.87,
    "joint_number": 9260
  },
  {
    "original_index": 1563,
    "log_distance": 33372.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4333,
    "depth_percent": 12,
    "length": 0.83,
    "width": 1.58,
    "joint_number": 9260
  },
  {
    "original_index": 1566,
    "log_distance": 33402.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6667,
    "depth_percent": 31,
    "length": 0.59,
    "width": 0.94,
    "joint_number": 9270
  },
  {
    "original_index": 1567,
    "log_distance": 33425.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5333,
    "depth_percent": 23,
    "length": 0.63,
    "width": 1.1,
    "joint_number": 9270
  },
  {
    "original_index": 1568,
    "log_distance": 33431.52,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5667,
    "depth_percent": 46,
    "length": 0.67,
    "width": 0.87,
    "joint_number": 9270
  },
  {
    "original_index": 1569,
    "log_distance": 33436.25,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.9333,
    "depth_percent": 21,
    "length": 2.18,
    "width": 1.3,
    "joint_number": 9270
  },
  {
    "original_index": 1571,
    "log_distance": 33440.62,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.4833,
    "depth_percent": 62,
    "length": 3.29,
    "width": 3.96,
    "joint_number": 9270
  },
  {
    "original_index": 1572,
    "log_distance": 33441.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5333,
    "depth_percent": 22,
    "length": 1.14,
    "width": 1.61,
    "joint_number": 9270
  },
  {
    "original_index": 1573,
    "log_distance": 33441.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5333,
    "depth_percent": 11,
    "length": 0.79,
    "width": 1.42,
    "joint_number": 9270
  },
  {
    "original_index": 1574,
    "log_distance": 33441.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7333,
    "depth_percent": 23,
    "length": 0.79,
    "width": 0.63,
    "joint_number": 9270
  },
  {
    "original_index": 1575,
    "log_distance": 33441.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2167,
    "depth_percent": 33,
    "length": 0.79,
    "width": 0.59,
    "joint_number": 9270
  },
  {
    "original_index": 1576,
    "log_distance": 33441.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9167,
    "depth_percent": 35,
    "length": 1.15,
    "width": 2.21,
    "joint_number": 9270
  },
  {
    "original_index": 1578,
    "log_distance": 33443.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4167,
    "depth_percent": 17,
    "length": 0.98,
    "width": 1.5,
    "joint_number": 9280
  },
  {
    "original_index": 1579,
    "log_distance": 33452.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0167,
    "depth_percent": 14,
    "length": 0.47,
    "width": 0.94,
    "joint_number": 9280
  },
  {
    "original_index": 1580,
    "log_distance": 33453.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6833,
    "depth_percent": 17,
    "length": 1.38,
    "width": 1.89,
    "joint_number": 9280
  },
  {
    "original_index": 1581,
    "log_distance": 33454.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 15,
    "length": 0.91,
    "width": 1.38,
    "joint_number": 9280
  },
  {
    "original_index": 1582,
    "log_distance": 33454.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5333,
    "depth_percent": 15,
    "length": 0.55,
    "width": 1.1,
    "joint_number": 9280
  },
  {
    "original_index": 1583,
    "log_distance": 33455.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.45,
    "depth_percent": 13,
    "length": 0.67,
    "width": 1.73,
    "joint_number": 9280
  },
  {
    "original_index": 1584,
    "log_distance": 33456,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3167,
    "depth_percent": 24,
    "length": 1.02,
    "width": 1.69,
    "joint_number": 9280
  },
  {
    "original_index": 1585,
    "log_distance": 33456.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.55,
    "depth_percent": 12,
    "length": 0.71,
    "width": 1.1,
    "joint_number": 9280
  },
  {
    "original_index": 1586,
    "log_distance": 33457.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5833,
    "depth_percent": 10,
    "length": 0.43,
    "width": 0.87,
    "joint_number": 9280
  },
  {
    "original_index": 1587,
    "log_distance": 33458.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5667,
    "depth_percent": 13,
    "length": 0.91,
    "width": 1.5,
    "joint_number": 9280
  },
  {
    "original_index": 1588,
    "log_distance": 33458.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1833,
    "depth_percent": 26,
    "length": 0.98,
    "width": 1.77,
    "joint_number": 9280
  },
  {
    "original_index": 1589,
    "log_distance": 33459.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5667,
    "depth_percent": 17,
    "length": 0.47,
    "width": 1.1,
    "joint_number": 9280
  },
  {
    "original_index": 1590,
    "log_distance": 33460.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7,
    "depth_percent": 17,
    "length": 1.3,
    "width": 1.61,
    "joint_number": 9280
  },
  {
    "original_index": 1591,
    "log_distance": 33460.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0333,
    "depth_percent": 10,
    "length": 0.63,
    "width": 1.34,
    "joint_number": 9280
  },
  {
    "original_index": 1592,
    "log_distance": 33469.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5333,
    "depth_percent": 14,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 9280
  },
  {
    "original_index": 1593,
    "log_distance": 33469.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4,
    "depth_percent": 14,
    "length": 0.59,
    "width": 1.69,
    "joint_number": 9280
  },
  {
    "original_index": 1594,
    "log_distance": 33469.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9833,
    "depth_percent": 16,
    "length": 0.79,
    "width": 0.63,
    "joint_number": 9280
  },
  {
    "original_index": 1595,
    "log_distance": 33470.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3833,
    "depth_percent": 12,
    "length": 1.18,
    "width": 1.42,
    "joint_number": 9280
  },
  {
    "original_index": 1596,
    "log_distance": 33470.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4167,
    "depth_percent": 10,
    "length": 0.47,
    "width": 0.75,
    "joint_number": 9280
  },
  {
    "original_index": 1597,
    "log_distance": 33472.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9167,
    "depth_percent": 10,
    "length": 0.98,
    "width": 2.21,
    "joint_number": 9280
  },
  {
    "original_index": 1598,
    "log_distance": 33472.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 12,
    "length": 0.87,
    "width": 1.14,
    "joint_number": 9280
  },
  {
    "original_index": 1599,
    "log_distance": 33473.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8,
    "depth_percent": 23,
    "length": 1.26,
    "width": 2.17,
    "joint_number": 9280
  },
  {
    "original_index": 1600,
    "log_distance": 33473.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0667,
    "depth_percent": 18,
    "length": 0.63,
    "width": 1.97,
    "joint_number": 9280
  },
  {
    "original_index": 1601,
    "log_distance": 33474.08,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9333,
    "depth_percent": 18,
    "length": 0.55,
    "width": 1.38,
    "joint_number": 9280
  },
  {
    "original_index": 1602,
    "log_distance": 33474.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 14,
    "length": 1.73,
    "width": 1.65,
    "joint_number": 9280
  },
  {
    "original_index": 1603,
    "log_distance": 33474.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8333,
    "depth_percent": 13,
    "length": 0.79,
    "width": 1.1,
    "joint_number": 9280
  },
  {
    "original_index": 1604,
    "log_distance": 33474.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2167,
    "depth_percent": 12,
    "length": 1.85,
    "width": 0.75,
    "joint_number": 9280
  },
  {
    "original_index": 1605,
    "log_distance": 33474.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9333,
    "depth_percent": 31,
    "length": 1.77,
    "width": 1.77,
    "joint_number": 9280
  },
  {
    "original_index": 1606,
    "log_distance": 33474.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.45,
    "depth_percent": 14,
    "length": 1.34,
    "width": 0.94,
    "joint_number": 9280
  },
  {
    "original_index": 1607,
    "log_distance": 33474.55,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0667,
    "depth_percent": 10,
    "length": 2.17,
    "width": 1.3,
    "joint_number": 9280
  },
  {
    "original_index": 1608,
    "log_distance": 33474.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 22,
    "length": 0.79,
    "width": 1.34,
    "joint_number": 9280
  },
  {
    "original_index": 1609,
    "log_distance": 33474.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0833,
    "depth_percent": 23,
    "length": 0.67,
    "width": 1.14,
    "joint_number": 9280
  },
  {
    "original_index": 1610,
    "log_distance": 33474.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9167,
    "depth_percent": 10,
    "length": 0.35,
    "width": 0.59,
    "joint_number": 9280
  },
  {
    "original_index": 1611,
    "log_distance": 33474.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9833,
    "depth_percent": 15,
    "length": 0.75,
    "width": 1.61,
    "joint_number": 9280
  },
  {
    "original_index": 1612,
    "log_distance": 33475.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9667,
    "depth_percent": 12,
    "length": 0.43,
    "width": 0.79,
    "joint_number": 9280
  },
  {
    "original_index": 1613,
    "log_distance": 33475.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.15,
    "depth_percent": 19,
    "length": 0.71,
    "width": 1.61,
    "joint_number": 9280
  },
  {
    "original_index": 1614,
    "log_distance": 33475.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7333,
    "depth_percent": 10,
    "length": 0.67,
    "width": 1.02,
    "joint_number": 9280
  },
  {
    "original_index": 1615,
    "log_distance": 33475.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.95,
    "depth_percent": 28,
    "length": 0.79,
    "width": 1.18,
    "joint_number": 9280
  },
  {
    "original_index": 1616,
    "log_distance": 33476.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8,
    "depth_percent": 12,
    "length": 0.59,
    "width": 1.1,
    "joint_number": 9280
  },
  {
    "original_index": 1617,
    "log_distance": 33476.08,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9,
    "depth_percent": 21,
    "length": 0.71,
    "width": 1.18,
    "joint_number": 9280
  },
  {
    "original_index": 1618,
    "log_distance": 33476.26,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.1,
    "depth_percent": 23,
    "length": 2.75,
    "width": 1.78,
    "joint_number": 9280
  },
  {
    "original_index": 1619,
    "log_distance": 33476.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1833,
    "depth_percent": 48,
    "length": 0.75,
    "width": 1.46,
    "joint_number": 9280
  },
  {
    "original_index": 1620,
    "log_distance": 33476.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 17,
    "length": 0.51,
    "width": 1.22,
    "joint_number": 9280
  },
  {
    "original_index": 1621,
    "log_distance": 33476.75,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.4667,
    "depth_percent": 26,
    "length": 1.54,
    "width": 4.44,
    "joint_number": 9280
  },
  {
    "original_index": 1622,
    "log_distance": 33476.9,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.75,
    "depth_percent": 15,
    "length": 0.59,
    "width": 1.14,
    "joint_number": 9280
  },
  {
    "original_index": 1623,
    "log_distance": 33477.16,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.05,
    "depth_percent": 12,
    "length": 0.51,
    "width": 1.06,
    "joint_number": 9280
  },
  {
    "original_index": 1624,
    "log_distance": 33477.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2167,
    "depth_percent": 11,
    "length": 0.87,
    "width": 0.63,
    "joint_number": 9280
  },
  {
    "original_index": 1625,
    "log_distance": 33477.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3,
    "depth_percent": 12,
    "length": 1.97,
    "width": 3.03,
    "joint_number": 9280
  },
  {
    "original_index": 1626,
    "log_distance": 33477.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1667,
    "depth_percent": 14,
    "length": 0.83,
    "width": 1.26,
    "joint_number": 9280
  },
  {
    "original_index": 1627,
    "log_distance": 33477.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8667,
    "depth_percent": 11,
    "length": 0.55,
    "width": 1.14,
    "joint_number": 9280
  },
  {
    "original_index": 1628,
    "log_distance": 33477.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3167,
    "depth_percent": 12,
    "length": 0.43,
    "width": 0.98,
    "joint_number": 9280
  },
  {
    "original_index": 1629,
    "log_distance": 33477.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8167,
    "depth_percent": 14,
    "length": 0.43,
    "width": 0.98,
    "joint_number": 9280
  },
  {
    "original_index": 1630,
    "log_distance": 33477.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9667,
    "depth_percent": 18,
    "length": 0.43,
    "width": 0.87,
    "joint_number": 9280
  },
  {
    "original_index": 1631,
    "log_distance": 33478.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 11,
    "length": 0.63,
    "width": 1.42,
    "joint_number": 9280
  },
  {
    "original_index": 1632,
    "log_distance": 33478.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.95,
    "depth_percent": 12,
    "length": 0.47,
    "width": 1.02,
    "joint_number": 9280
  },
  {
    "original_index": 1633,
    "log_distance": 33479.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4167,
    "depth_percent": 11,
    "length": 0.35,
    "width": 0.59,
    "joint_number": 9280
  },
  {
    "original_index": 1639,
    "log_distance": 33482.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.2667,
    "depth_percent": 13,
    "length": 0.83,
    "width": 4.37,
    "joint_number": 9290
  },
  {
    "original_index": 1641,
    "log_distance": 33527.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.6667,
    "depth_percent": 19,
    "length": 0.59,
    "width": 1.1,
    "joint_number": 9300
  },
  {
    "original_index": 1642,
    "log_distance": 33527.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.6167,
    "depth_percent": 17,
    "length": 0.67,
    "width": 1.18,
    "joint_number": 9300
  },
  {
    "original_index": 1643,
    "log_distance": 33528.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.5167,
    "depth_percent": 12,
    "length": 1.58,
    "width": 1.06,
    "joint_number": 9300
  },
  {
    "original_index": 1644,
    "log_distance": 33528.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.0167,
    "depth_percent": 14,
    "length": 0.87,
    "width": 1.22,
    "joint_number": 9300
  },
  {
    "original_index": 1645,
    "log_distance": 33529.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.75,
    "depth_percent": 10,
    "length": 0.71,
    "width": 1.69,
    "joint_number": 9300
  },
  {
    "original_index": 1646,
    "log_distance": 33529.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.5333,
    "depth_percent": 11,
    "length": 2.05,
    "width": 1.22,
    "joint_number": 9300
  },
  {
    "original_index": 1647,
    "log_distance": 33529.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.05,
    "depth_percent": 14,
    "length": 1.02,
    "width": 1.93,
    "joint_number": 9300
  },
  {
    "original_index": 1648,
    "log_distance": 33529.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.5,
    "depth_percent": 15,
    "length": 0.43,
    "width": 0.71,
    "joint_number": 9300
  },
  {
    "original_index": 1649,
    "log_distance": 33530.39,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 12.4167,
    "depth_percent": 35,
    "length": 2.69,
    "width": 3.56,
    "joint_number": 9300
  },
  {
    "original_index": 1650,
    "log_distance": 33530.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.3,
    "depth_percent": 10,
    "length": 0.35,
    "width": 0.59,
    "joint_number": 9300
  },
  {
    "original_index": 1651,
    "log_distance": 33530.56,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 11.35,
    "depth_percent": 23,
    "length": 1.96,
    "width": 1.3,
    "joint_number": 9300
  },
  {
    "original_index": 1652,
    "log_distance": 33530.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12,
    "depth_percent": 12,
    "length": 0.79,
    "width": 1.73,
    "joint_number": 9300
  },
  {
    "original_index": 1653,
    "log_distance": 33531.02,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 12.7167,
    "depth_percent": 19,
    "length": 1.61,
    "width": 1.03,
    "joint_number": 9300
  },
  {
    "original_index": 1654,
    "log_distance": 33531.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.4833,
    "depth_percent": 14,
    "length": 0.83,
    "width": 1.02,
    "joint_number": 9300
  },
  {
    "original_index": 1655,
    "log_distance": 33531.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.5667,
    "depth_percent": 22,
    "length": 0.55,
    "width": 1.1,
    "joint_number": 9300
  },
  {
    "original_index": 1657,
    "log_distance": 33562.56,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.1667,
    "depth_percent": 35,
    "length": 3.82,
    "width": 9.49,
    "joint_number": 9310
  },
  {
    "original_index": 1658,
    "log_distance": 33562.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2333,
    "depth_percent": 17,
    "length": 1.14,
    "width": 8.74,
    "joint_number": 9310
  },
  {
    "original_index": 1659,
    "log_distance": 33562.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5333,
    "depth_percent": 12,
    "length": 0.71,
    "width": 1.34,
    "joint_number": 9310
  },
  {
    "original_index": 1667,
    "log_distance": 33764.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1667,
    "depth_percent": 15,
    "length": 1.46,
    "width": 2.09,
    "joint_number": 9360
  },
  {
    "original_index": 1668,
    "log_distance": 33765.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9333,
    "depth_percent": 12,
    "length": 0.91,
    "width": 2.01,
    "joint_number": 9360
  },
  {
    "original_index": 1669,
    "log_distance": 33766.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2333,
    "depth_percent": 18,
    "length": 0.67,
    "width": 1.22,
    "joint_number": 9360
  },
  {
    "original_index": 1670,
    "log_distance": 33766.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2,
    "depth_percent": 15,
    "length": 0.98,
    "width": 1.81,
    "joint_number": 9360
  },
  {
    "original_index": 1671,
    "log_distance": 33766.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.3333,
    "depth_percent": 10,
    "length": 1.22,
    "width": 1.73,
    "joint_number": 9360
  },
  {
    "original_index": 1672,
    "log_distance": 33788.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.85,
    "depth_percent": 11,
    "length": 0.79,
    "width": 1.42,
    "joint_number": 9360
  },
  {
    "original_index": 1673,
    "log_distance": 33789.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7833,
    "depth_percent": 11,
    "length": 0.55,
    "width": 0.59,
    "joint_number": 9360
  },
  {
    "original_index": 1674,
    "log_distance": 33789.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8167,
    "depth_percent": 11,
    "length": 0.47,
    "width": 0.79,
    "joint_number": 9360
  },
  {
    "original_index": 1675,
    "log_distance": 33789.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8667,
    "depth_percent": 17,
    "length": 0.98,
    "width": 1.73,
    "joint_number": 9360
  },
  {
    "original_index": 1678,
    "log_distance": 33800.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1167,
    "depth_percent": 25,
    "length": 0.51,
    "width": 2.6,
    "joint_number": 9360
  },
  {
    "original_index": 1679,
    "log_distance": 33800.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1833,
    "depth_percent": 10,
    "length": 0.63,
    "width": 1.42,
    "joint_number": 9360
  },
  {
    "original_index": 1682,
    "log_distance": 33803.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.85,
    "depth_percent": 23,
    "length": 0.67,
    "width": 1.81,
    "joint_number": 9370
  },
  {
    "original_index": 1683,
    "log_distance": 33803.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.1667,
    "depth_percent": 11,
    "length": 0.47,
    "width": 1.14,
    "joint_number": 9370
  },
  {
    "original_index": 1684,
    "log_distance": 33803.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.3833,
    "depth_percent": 15,
    "length": 0.63,
    "width": 1.06,
    "joint_number": 9370
  },
  {
    "original_index": 1685,
    "log_distance": 33803.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3,
    "depth_percent": 15,
    "length": 0.67,
    "width": 1.3,
    "joint_number": 9370
  },
  {
    "original_index": 1686,
    "log_distance": 33803.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9,
    "depth_percent": 11,
    "length": 2.17,
    "width": 1.22,
    "joint_number": 9370
  },
  {
    "original_index": 1696,
    "log_distance": 33903.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.9833,
    "depth_percent": 13,
    "length": 0.39,
    "width": 1.1,
    "joint_number": 9390
  },
  {
    "original_index": 1697,
    "log_distance": 33903.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.8167,
    "depth_percent": 14,
    "length": 0.47,
    "width": 1.38,
    "joint_number": 9390
  },
  {
    "original_index": 1698,
    "log_distance": 33903.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.9167,
    "depth_percent": 39,
    "length": 0.55,
    "width": 1.1,
    "joint_number": 9390
  },
  {
    "original_index": 1699,
    "log_distance": 33903.9,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.9833,
    "depth_percent": 10,
    "length": 0.47,
    "width": 1.02,
    "joint_number": 9390
  },
  {
    "original_index": 1700,
    "log_distance": 33904.08,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.8333,
    "depth_percent": 10,
    "length": 2.09,
    "width": 1.02,
    "joint_number": 9390
  },
  {
    "original_index": 1703,
    "log_distance": 33946.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.9333,
    "depth_percent": 19,
    "length": 0.51,
    "width": 1.5,
    "joint_number": 9400
  },
  {
    "original_index": 1704,
    "log_distance": 33946.08,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.0667,
    "depth_percent": 36,
    "length": 0.47,
    "width": 1.89,
    "joint_number": 9400
  },
  {
    "original_index": 1712,
    "log_distance": 33999,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9333,
    "depth_percent": 14,
    "length": 1.89,
    "width": 0.67,
    "joint_number": 9420
  },
  {
    "original_index": 1713,
    "log_distance": 33999.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.25,
    "depth_percent": 17,
    "length": 1.69,
    "width": 1.69,
    "joint_number": 9420
  },
  {
    "original_index": 1714,
    "log_distance": 33999.32,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.2167,
    "depth_percent": 22,
    "length": 1.96,
    "width": 1.49,
    "joint_number": 9420
  },
  {
    "original_index": 1715,
    "log_distance": 33999.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0667,
    "depth_percent": 17,
    "length": 1.06,
    "width": 2.17,
    "joint_number": 9420
  },
  {
    "original_index": 1716,
    "log_distance": 33999.73,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.25,
    "depth_percent": 11,
    "length": 0.79,
    "width": 1.85,
    "joint_number": 9420
  },
  {
    "original_index": 1717,
    "log_distance": 33999.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0833,
    "depth_percent": 56,
    "length": 1.14,
    "width": 1.53,
    "joint_number": 9420
  },
  {
    "original_index": 1718,
    "log_distance": 34000.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 23,
    "length": 0.63,
    "width": 1.18,
    "joint_number": 9420
  },
  {
    "original_index": 1719,
    "log_distance": 34000.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1,
    "depth_percent": 19,
    "length": 1.26,
    "width": 1.73,
    "joint_number": 9420
  },
  {
    "original_index": 1720,
    "log_distance": 34000.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3,
    "depth_percent": 11,
    "length": 0.59,
    "width": 1.18,
    "joint_number": 9420
  },
  {
    "original_index": 1721,
    "log_distance": 34026.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.4333,
    "depth_percent": 13,
    "length": 1.61,
    "width": 4.65,
    "joint_number": 9420
  },
  {
    "original_index": 1722,
    "log_distance": 34026.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6167,
    "depth_percent": 33,
    "length": 1.81,
    "width": 1.53,
    "joint_number": 9420
  },
  {
    "original_index": 1723,
    "log_distance": 34026.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1667,
    "depth_percent": 34,
    "length": 1.53,
    "width": 0.59,
    "joint_number": 9420
  },
  {
    "original_index": 1724,
    "log_distance": 34026.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4333,
    "depth_percent": 12,
    "length": 1.14,
    "width": 2.91,
    "joint_number": 9420
  },
  {
    "original_index": 1725,
    "log_distance": 34026.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.3,
    "depth_percent": 37,
    "length": 0.87,
    "width": 3.23,
    "joint_number": 9420
  },
  {
    "original_index": 1727,
    "log_distance": 34059,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6,
    "depth_percent": 31,
    "length": 0.71,
    "width": 1.22,
    "joint_number": 9430
  },
  {
    "original_index": 1728,
    "log_distance": 34063.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4,
    "depth_percent": 43,
    "length": 0.51,
    "width": 1.1,
    "joint_number": 9430
  },
  {
    "original_index": 1729,
    "log_distance": 34063.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3167,
    "depth_percent": 21,
    "length": 0.59,
    "width": 1.06,
    "joint_number": 9430
  },
  {
    "original_index": 1730,
    "log_distance": 34063.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3167,
    "depth_percent": 15,
    "length": 0.59,
    "width": 1.02,
    "joint_number": 9430
  },
  {
    "original_index": 1733,
    "log_distance": 34075.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7833,
    "depth_percent": 22,
    "length": 1.34,
    "width": 1.53,
    "joint_number": 9440
  },
  {
    "original_index": 1734,
    "log_distance": 34075.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3667,
    "depth_percent": 14,
    "length": 0.91,
    "width": 1.26,
    "joint_number": 9440
  },
  {
    "original_index": 1735,
    "log_distance": 34075.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6167,
    "depth_percent": 27,
    "length": 0.91,
    "width": 1.5,
    "joint_number": 9440
  },
  {
    "original_index": 1736,
    "log_distance": 34075.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.95,
    "depth_percent": 13,
    "length": 0.51,
    "width": 1.02,
    "joint_number": 9440
  },
  {
    "original_index": 1737,
    "log_distance": 34075.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2667,
    "depth_percent": 12,
    "length": 0.47,
    "width": 0.87,
    "joint_number": 9440
  },
  {
    "original_index": 1738,
    "log_distance": 34075.9,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3333,
    "depth_percent": 29,
    "length": 0.59,
    "width": 0.94,
    "joint_number": 9440
  },
  {
    "original_index": 1743,
    "log_distance": 34106.55,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.45,
    "depth_percent": 45,
    "length": 0.98,
    "width": 4.49,
    "joint_number": 9440
  },
  {
    "original_index": 1745,
    "log_distance": 34107.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.75,
    "depth_percent": 14,
    "length": 0.94,
    "width": 1.58,
    "joint_number": 9440
  },
  {
    "original_index": 1747,
    "log_distance": 34108.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.6167,
    "depth_percent": 11,
    "length": 0.51,
    "width": 1.1,
    "joint_number": 9450
  },
  {
    "original_index": 1749,
    "log_distance": 34139.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9667,
    "depth_percent": 11,
    "length": 0.79,
    "width": 1.65,
    "joint_number": 9450
  },
  {
    "original_index": 1750,
    "log_distance": 34140.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.65,
    "depth_percent": 41,
    "length": 0.94,
    "width": 1.46,
    "joint_number": 9450
  },
  {
    "original_index": 1752,
    "log_distance": 34156.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1167,
    "depth_percent": 19,
    "length": 1.97,
    "width": 1.73,
    "joint_number": 9460
  },
  {
    "original_index": 1753,
    "log_distance": 34157.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0667,
    "depth_percent": 31,
    "length": 1.85,
    "width": 2.32,
    "joint_number": 9460
  },
  {
    "original_index": 1754,
    "log_distance": 34158.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6333,
    "depth_percent": 12,
    "length": 0.59,
    "width": 1.81,
    "joint_number": 9460
  },
  {
    "original_index": 1757,
    "log_distance": 34188.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1667,
    "depth_percent": 34,
    "length": 1.65,
    "width": 5.08,
    "joint_number": 9470
  },
  {
    "original_index": 1758,
    "log_distance": 34188.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.7833,
    "depth_percent": 31,
    "length": 1.81,
    "width": 2.05,
    "joint_number": 9470
  },
  {
    "original_index": 1759,
    "log_distance": 34188.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2833,
    "depth_percent": 21,
    "length": 1.38,
    "width": 4.17,
    "joint_number": 9470
  },
  {
    "original_index": 1760,
    "log_distance": 34188.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8833,
    "depth_percent": 29,
    "length": 1.22,
    "width": 4.57,
    "joint_number": 9470
  },
  {
    "original_index": 1761,
    "log_distance": 34188.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5667,
    "depth_percent": 29,
    "length": 1.14,
    "width": 1.81,
    "joint_number": 9470
  },
  {
    "original_index": 1775,
    "log_distance": 34670.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4,
    "depth_percent": 13,
    "length": 0.87,
    "width": 1.18,
    "joint_number": 9590
  },
  {
    "original_index": 1782,
    "log_distance": 34912.23,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 6.9833,
    "depth_percent": 21,
    "length": 0.39,
    "width": 0.75,
    "joint_number": 9650
  },
  {
    "original_index": 1783,
    "log_distance": 34913.75,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 10.8333,
    "depth_percent": 18,
    "length": 0.43,
    "width": 0.67,
    "joint_number": 9650
  },
  {
    "original_index": 1785,
    "log_distance": 34962.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.2667,
    "depth_percent": 10,
    "length": 0.79,
    "width": 1.38,
    "joint_number": 9660
  },
  {
    "original_index": 1787,
    "log_distance": 34971.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.65,
    "depth_percent": 14,
    "length": 0.43,
    "width": 1.18,
    "joint_number": 9670
  },
  {
    "original_index": 1790,
    "log_distance": 35051.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1167,
    "depth_percent": 11,
    "length": 0.39,
    "width": 1.14,
    "joint_number": 9690
  },
  {
    "original_index": 1808,
    "log_distance": 35635.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9167,
    "depth_percent": 35,
    "length": 0.51,
    "width": 1.22,
    "joint_number": 9860
  },
  {
    "original_index": 1812,
    "log_distance": 35794.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.0167,
    "depth_percent": 27,
    "length": 0.79,
    "width": 2.28,
    "joint_number": 9890
  },
  {
    "original_index": 1813,
    "log_distance": 35794.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0833,
    "depth_percent": 14,
    "length": 0.87,
    "width": 0.63,
    "joint_number": 9890
  },
  {
    "original_index": 1816,
    "log_distance": 35853.48,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 6.2,
    "depth_percent": 15,
    "length": 0.32,
    "width": 0.79,
    "joint_number": 9910
  },
  {
    "original_index": 1817,
    "log_distance": 35853.56,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 6,
    "depth_percent": 10,
    "length": 0.32,
    "width": 0.63,
    "joint_number": 9910
  },
  {
    "original_index": 1819,
    "log_distance": 35875.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7667,
    "depth_percent": 26,
    "length": 1.22,
    "width": 6.46,
    "joint_number": 9920
  },
  {
    "original_index": 1820,
    "log_distance": 35875.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5667,
    "depth_percent": 14,
    "length": 0.91,
    "width": 1.93,
    "joint_number": 9920
  },
  {
    "original_index": 1821,
    "log_distance": 35875.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8667,
    "depth_percent": 16,
    "length": 1.26,
    "width": 2.28,
    "joint_number": 9920
  },
  {
    "original_index": 1822,
    "log_distance": 35875.98,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.65,
    "depth_percent": 22,
    "length": 1.18,
    "width": 4.73,
    "joint_number": 9920
  },
  {
    "original_index": 1823,
    "log_distance": 35876,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.9167,
    "depth_percent": 25,
    "length": 0.79,
    "width": 3.46,
    "joint_number": 9920
  },
  {
    "original_index": 1824,
    "log_distance": 35876.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.7,
    "depth_percent": 19,
    "length": 0.63,
    "width": 2.95,
    "joint_number": 9920
  },
  {
    "original_index": 1825,
    "log_distance": 35876.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.4833,
    "depth_percent": 11,
    "length": 0.83,
    "width": 2.52,
    "joint_number": 9920
  },
  {
    "original_index": 1845,
    "log_distance": 36496.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.05,
    "depth_percent": 10,
    "length": 0.51,
    "width": 0.98,
    "joint_number": 10070
  },
  {
    "original_index": 1895,
    "log_distance": 37951.31,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 9.9667,
    "depth_percent": 10,
    "length": 0.32,
    "width": 0.59,
    "joint_number": 10510
  },
  {
    "original_index": 1899,
    "log_distance": 38046.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.0833,
    "depth_percent": 18,
    "length": 1.26,
    "width": 2.48,
    "joint_number": 10540
  },
  {
    "original_index": 1908,
    "log_distance": 38363.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.1333,
    "depth_percent": 11,
    "length": 2.09,
    "width": 0.59,
    "joint_number": 10620
  },
  {
    "original_index": 1911,
    "log_distance": 38444.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6667,
    "depth_percent": 18,
    "length": 2.17,
    "width": 1.5,
    "joint_number": 10640
  },
  {
    "original_index": 1912,
    "log_distance": 38444.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1833,
    "depth_percent": 11,
    "length": 2.01,
    "width": 0.83,
    "joint_number": 10640
  },
  {
    "original_index": 1913,
    "log_distance": 38444.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1,
    "depth_percent": 13,
    "length": 1.73,
    "width": 0.83,
    "joint_number": 10640
  },
  {
    "original_index": 1934,
    "log_distance": 39159.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.4667,
    "depth_percent": 10,
    "length": 0.91,
    "width": 1.73,
    "joint_number": 10830
  },
  {
    "original_index": 1935,
    "log_distance": 39176.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7167,
    "depth_percent": 10,
    "length": 0.67,
    "width": 1.3,
    "joint_number": 10830
  },
  {
    "original_index": 1936,
    "log_distance": 39176.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6667,
    "depth_percent": 19,
    "length": 0.67,
    "width": 1.1,
    "joint_number": 10830
  },
  {
    "original_index": 1937,
    "log_distance": 39176.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4833,
    "depth_percent": 13,
    "length": 0.83,
    "width": 1.69,
    "joint_number": 10830
  },
  {
    "original_index": 1939,
    "log_distance": 39205.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4167,
    "depth_percent": 12,
    "length": 0.63,
    "width": 1.22,
    "joint_number": 10840
  },
  {
    "original_index": 1950,
    "log_distance": 39375.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3667,
    "depth_percent": 14,
    "length": 1.85,
    "width": 2.48,
    "joint_number": 10920
  },
  {
    "original_index": 1951,
    "log_distance": 39375.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.95,
    "depth_percent": 10,
    "length": 1.97,
    "width": 1.14,
    "joint_number": 10920
  },
  {
    "original_index": 1954,
    "log_distance": 39425.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9,
    "depth_percent": 15,
    "length": 1.46,
    "width": 3.07,
    "joint_number": 10930
  },
  {
    "original_index": 1958,
    "log_distance": 39467.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.9333,
    "depth_percent": 13,
    "length": 0.83,
    "width": 7.4,
    "joint_number": 10950
  },
  {
    "original_index": 1959,
    "log_distance": 39467.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1167,
    "depth_percent": 28,
    "length": 1.34,
    "width": 0.59,
    "joint_number": 10950
  },
  {
    "original_index": 1960,
    "log_distance": 39467.08,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 13,
    "length": 1.22,
    "width": 2.64,
    "joint_number": 10950
  },
  {
    "original_index": 1961,
    "log_distance": 39467.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.1667,
    "depth_percent": 18,
    "length": 1.14,
    "width": 3.54,
    "joint_number": 10950
  },
  {
    "original_index": 1962,
    "log_distance": 39467.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5,
    "depth_percent": 15,
    "length": 0.91,
    "width": 1.3,
    "joint_number": 10950
  },
  {
    "original_index": 1963,
    "log_distance": 39470.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7333,
    "depth_percent": 34,
    "length": 0.79,
    "width": 1.14,
    "joint_number": 10950
  },
  {
    "original_index": 1964,
    "log_distance": 39471.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0667,
    "depth_percent": 11,
    "length": 2.01,
    "width": 1.22,
    "joint_number": 10950
  },
  {
    "original_index": 1965,
    "log_distance": 39485.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3,
    "depth_percent": 24,
    "length": 1.06,
    "width": 1.3,
    "joint_number": 10950
  },
  {
    "original_index": 1966,
    "log_distance": 39492.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8167,
    "depth_percent": 10,
    "length": 1.02,
    "width": 1.46,
    "joint_number": 10950
  },
  {
    "original_index": 1967,
    "log_distance": 39493.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.65,
    "depth_percent": 12,
    "length": 1.26,
    "width": 1.5,
    "joint_number": 10950
  },
  {
    "original_index": 1969,
    "log_distance": 39506.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.8333,
    "depth_percent": 10,
    "length": 1.5,
    "width": 0.71,
    "joint_number": 10960
  },
  {
    "original_index": 1971,
    "log_distance": 39541.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.15,
    "depth_percent": 21,
    "length": 0.71,
    "width": 0.98,
    "joint_number": 10960
  },
  {
    "original_index": 1972,
    "log_distance": 39541.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.0167,
    "depth_percent": 11,
    "length": 1.42,
    "width": 1.46,
    "joint_number": 10960
  },
  {
    "original_index": 1976,
    "log_distance": 39551.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.4667,
    "depth_percent": 16,
    "length": 0.51,
    "width": 7.21,
    "joint_number": 10980
  },
  {
    "original_index": 1977,
    "log_distance": 39551.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.55,
    "depth_percent": 10,
    "length": 0.63,
    "width": 1.58,
    "joint_number": 10980
  },
  {
    "original_index": 1983,
    "log_distance": 39614.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9333,
    "depth_percent": 11,
    "length": 1.14,
    "width": 1.1,
    "joint_number": 11000
  },
  {
    "original_index": 1984,
    "log_distance": 39615.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4667,
    "depth_percent": 17,
    "length": 1.93,
    "width": 1.38,
    "joint_number": 11000
  },
  {
    "original_index": 1985,
    "log_distance": 39615.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6833,
    "depth_percent": 15,
    "length": 1.5,
    "width": 2.76,
    "joint_number": 11000
  },
  {
    "original_index": 1986,
    "log_distance": 39615.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8333,
    "depth_percent": 11,
    "length": 1.1,
    "width": 0.94,
    "joint_number": 11000
  },
  {
    "original_index": 1987,
    "log_distance": 39615.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1,
    "depth_percent": 10,
    "length": 1.3,
    "width": 2.05,
    "joint_number": 11000
  },
  {
    "original_index": 1988,
    "log_distance": 39615.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5833,
    "depth_percent": 14,
    "length": 0.51,
    "width": 1.06,
    "joint_number": 11000
  },
  {
    "original_index": 1993,
    "log_distance": 39654.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6333,
    "depth_percent": 10,
    "length": 0.32,
    "width": 0.98,
    "joint_number": 11010
  },
  {
    "original_index": 1994,
    "log_distance": 39654.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8,
    "depth_percent": 16,
    "length": 0.32,
    "width": 0.75,
    "joint_number": 11010
  },
  {
    "original_index": 1995,
    "log_distance": 39654.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6167,
    "depth_percent": 10,
    "length": 0.32,
    "width": 2.79,
    "joint_number": 11010
  },
  {
    "original_index": 1996,
    "log_distance": 39654.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.0167,
    "depth_percent": 10,
    "length": 0.32,
    "width": 1.77,
    "joint_number": 11010
  },
  {
    "original_index": 1998,
    "log_distance": 39654.94,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 2.8667,
    "depth_percent": 31,
    "length": 2.45,
    "width": 5.51,
    "joint_number": 11010
  },
  {
    "original_index": 1999,
    "log_distance": 39655.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3333,
    "depth_percent": 12,
    "length": 0.94,
    "width": 1.42,
    "joint_number": 11010
  },
  {
    "original_index": 2005,
    "log_distance": 39703.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3667,
    "depth_percent": 14,
    "length": 1.53,
    "width": 3.35,
    "joint_number": 11030
  },
  {
    "original_index": 2006,
    "log_distance": 39703.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.4333,
    "depth_percent": 12,
    "length": 0.63,
    "width": 1.26,
    "joint_number": 11030
  },
  {
    "original_index": 2007,
    "log_distance": 39703.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.95,
    "depth_percent": 10,
    "length": 0.75,
    "width": 1.26,
    "joint_number": 11030
  },
  {
    "original_index": 2010,
    "log_distance": 39768.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.45,
    "depth_percent": 13,
    "length": 0.51,
    "width": 0.67,
    "joint_number": 11050
  },
  {
    "original_index": 2012,
    "log_distance": 39810.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1333,
    "depth_percent": 47,
    "length": 0.67,
    "width": 1.06,
    "joint_number": 11060
  },
  {
    "original_index": 2040,
    "log_distance": 40732.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.05,
    "depth_percent": 27,
    "length": 0.75,
    "width": 1.18,
    "joint_number": 11310
  },
  {
    "original_index": 2041,
    "log_distance": 40732.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.2833,
    "depth_percent": 10,
    "length": 0.67,
    "width": 1.58,
    "joint_number": 11310
  },
  {
    "original_index": 2042,
    "log_distance": 40732.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.2167,
    "depth_percent": 14,
    "length": 0.59,
    "width": 0.87,
    "joint_number": 11310
  },
  {
    "original_index": 2046,
    "log_distance": 40751.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.3167,
    "depth_percent": 10,
    "length": 1.53,
    "width": 0.59,
    "joint_number": 11330
  },
  {
    "original_index": 2047,
    "log_distance": 40752.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.05,
    "depth_percent": 16,
    "length": 0.43,
    "width": 0.59,
    "joint_number": 11330
  },
  {
    "original_index": 2048,
    "log_distance": 40752.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.6833,
    "depth_percent": 18,
    "length": 0.87,
    "width": 3.07,
    "joint_number": 11330
  },
  {
    "original_index": 2049,
    "log_distance": 40752.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.0833,
    "depth_percent": 10,
    "length": 1.14,
    "width": 2.84,
    "joint_number": 11330
  },
  {
    "original_index": 2059,
    "log_distance": 40991.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.75,
    "depth_percent": 12,
    "length": 1.61,
    "width": 2.79,
    "joint_number": 11410
  },
  {
    "original_index": 2060,
    "log_distance": 40991.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4167,
    "depth_percent": 15,
    "length": 1.14,
    "width": 0.59,
    "joint_number": 11410
  },
  {
    "original_index": 2061,
    "log_distance": 40992.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7333,
    "depth_percent": 18,
    "length": 0.59,
    "width": 0.94,
    "joint_number": 11410
  },
  {
    "original_index": 2063,
    "log_distance": 40993.59,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.3833,
    "depth_percent": 32,
    "length": 1.73,
    "width": 3.56,
    "joint_number": 11410
  },
  {
    "original_index": 2064,
    "log_distance": 40999.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0833,
    "depth_percent": 13,
    "length": 0.91,
    "width": 1.46,
    "joint_number": 11410
  },
  {
    "original_index": 2065,
    "log_distance": 40999.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8,
    "depth_percent": 14,
    "length": 0.71,
    "width": 1.34,
    "joint_number": 11410
  },
  {
    "original_index": 2066,
    "log_distance": 40999.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3,
    "depth_percent": 11,
    "length": 0.71,
    "width": 1.02,
    "joint_number": 11410
  },
  {
    "original_index": 2067,
    "log_distance": 40999.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5333,
    "depth_percent": 13,
    "length": 1.02,
    "width": 1.58,
    "joint_number": 11410
  },
  {
    "original_index": 2073,
    "log_distance": 41205.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2,
    "depth_percent": 18,
    "length": 2.17,
    "width": 0.98,
    "joint_number": 11460
  },
  {
    "original_index": 2075,
    "log_distance": 41230.32,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 8.15,
    "depth_percent": 13,
    "length": 0.39,
    "width": 0.83,
    "joint_number": 11470
  },
  {
    "original_index": 2076,
    "log_distance": 41234.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.7,
    "depth_percent": 12,
    "length": 2.32,
    "width": 1.77,
    "joint_number": 11470
  },
  {
    "original_index": 2077,
    "log_distance": 41234.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4333,
    "depth_percent": 10,
    "length": 1.81,
    "width": 2.32,
    "joint_number": 11470
  },
  {
    "original_index": 2085,
    "log_distance": 41506.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4667,
    "depth_percent": 11,
    "length": 0.98,
    "width": 1.46,
    "joint_number": 11540
  },
  {
    "original_index": 2086,
    "log_distance": 41507.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5167,
    "depth_percent": 20,
    "length": 0.79,
    "width": 1.22,
    "joint_number": 11540
  },
  {
    "original_index": 2087,
    "log_distance": 41508.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6333,
    "depth_percent": 21,
    "length": 0.59,
    "width": 1.18,
    "joint_number": 11540
  },
  {
    "original_index": 2088,
    "log_distance": 41508.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7,
    "depth_percent": 16,
    "length": 0.71,
    "width": 1.42,
    "joint_number": 11540
  },
  {
    "original_index": 2089,
    "log_distance": 41508.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3,
    "depth_percent": 21,
    "length": 0.98,
    "width": 1.53,
    "joint_number": 11540
  },
  {
    "original_index": 2090,
    "log_distance": 41509.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.45,
    "depth_percent": 15,
    "length": 1.89,
    "width": 2.21,
    "joint_number": 11540
  },
  {
    "original_index": 2091,
    "log_distance": 41509.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2667,
    "depth_percent": 31,
    "length": 0.83,
    "width": 1.42,
    "joint_number": 11540
  },
  {
    "original_index": 2092,
    "log_distance": 41509.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8,
    "depth_percent": 16,
    "length": 1.06,
    "width": 1.26,
    "joint_number": 11540
  },
  {
    "original_index": 2093,
    "log_distance": 41509.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.15,
    "depth_percent": 29,
    "length": 0.71,
    "width": 1.34,
    "joint_number": 11540
  },
  {
    "original_index": 2094,
    "log_distance": 41509.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7,
    "depth_percent": 15,
    "length": 0.75,
    "width": 1.42,
    "joint_number": 11540
  },
  {
    "original_index": 2095,
    "log_distance": 41509.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1833,
    "depth_percent": 13,
    "length": 1.26,
    "width": 0.98,
    "joint_number": 11540
  },
  {
    "original_index": 2096,
    "log_distance": 41510.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.3333,
    "depth_percent": 11,
    "length": 0.59,
    "width": 0.91,
    "joint_number": 11540
  },
  {
    "original_index": 2097,
    "log_distance": 41510.05,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8167,
    "depth_percent": 11,
    "length": 0.59,
    "width": 1.18,
    "joint_number": 11540
  },
  {
    "original_index": 2098,
    "log_distance": 41510.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2667,
    "depth_percent": 21,
    "length": 0.63,
    "width": 1.1,
    "joint_number": 11540
  },
  {
    "original_index": 2099,
    "log_distance": 41510.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8667,
    "depth_percent": 15,
    "length": 0.75,
    "width": 1.18,
    "joint_number": 11540
  },
  {
    "original_index": 2100,
    "log_distance": 41510.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8667,
    "depth_percent": 16,
    "length": 0.51,
    "width": 0.98,
    "joint_number": 11540
  },
  {
    "original_index": 2101,
    "log_distance": 41510.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.05,
    "depth_percent": 18,
    "length": 0.94,
    "width": 1.22,
    "joint_number": 11540
  },
  {
    "original_index": 2102,
    "log_distance": 41510.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.05,
    "depth_percent": 35,
    "length": 1.1,
    "width": 1.18,
    "joint_number": 11540
  },
  {
    "original_index": 2103,
    "log_distance": 41510.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8,
    "depth_percent": 15,
    "length": 0.87,
    "width": 1.34,
    "joint_number": 11540
  },
  {
    "original_index": 2104,
    "log_distance": 41511.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4,
    "depth_percent": 11,
    "length": 0.47,
    "width": 0.71,
    "joint_number": 11540
  },
  {
    "original_index": 2105,
    "log_distance": 41511.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5833,
    "depth_percent": 25,
    "length": 0.67,
    "width": 1.77,
    "joint_number": 11540
  },
  {
    "original_index": 2106,
    "log_distance": 41511.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.35,
    "depth_percent": 15,
    "length": 0.55,
    "width": 0.94,
    "joint_number": 11540
  },
  {
    "original_index": 2107,
    "log_distance": 41511.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.75,
    "depth_percent": 41,
    "length": 0.75,
    "width": 1.34,
    "joint_number": 11540
  },
  {
    "original_index": 2108,
    "log_distance": 41511.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.35,
    "depth_percent": 13,
    "length": 0.55,
    "width": 0.87,
    "joint_number": 11540
  },
  {
    "original_index": 2109,
    "log_distance": 41511.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2833,
    "depth_percent": 19,
    "length": 0.71,
    "width": 1.38,
    "joint_number": 11540
  },
  {
    "original_index": 2110,
    "log_distance": 41511.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9333,
    "depth_percent": 14,
    "length": 1.18,
    "width": 1.22,
    "joint_number": 11540
  },
  {
    "original_index": 2111,
    "log_distance": 41511.81,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9667,
    "depth_percent": 16,
    "length": 1.3,
    "width": 2.36,
    "joint_number": 11540
  },
  {
    "original_index": 2112,
    "log_distance": 41512.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2,
    "depth_percent": 32,
    "length": 0.98,
    "width": 1.38,
    "joint_number": 11540
  },
  {
    "original_index": 2113,
    "log_distance": 41512.16,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.55,
    "depth_percent": 14,
    "length": 0.63,
    "width": 2.56,
    "joint_number": 11540
  },
  {
    "original_index": 2114,
    "log_distance": 41512.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2333,
    "depth_percent": 27,
    "length": 0.75,
    "width": 0.71,
    "joint_number": 11540
  },
  {
    "original_index": 2115,
    "log_distance": 41512.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.55,
    "depth_percent": 13,
    "length": 0.51,
    "width": 0.87,
    "joint_number": 11540
  },
  {
    "original_index": 2116,
    "log_distance": 41512.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3667,
    "depth_percent": 11,
    "length": 1.14,
    "width": 1.26,
    "joint_number": 11540
  },
  {
    "original_index": 2117,
    "log_distance": 41512.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.95,
    "depth_percent": 10,
    "length": 0.35,
    "width": 0.59,
    "joint_number": 11540
  },
  {
    "original_index": 2118,
    "log_distance": 41512.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.95,
    "depth_percent": 26,
    "length": 0.67,
    "width": 0.94,
    "joint_number": 11540
  },
  {
    "original_index": 2119,
    "log_distance": 41512.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2,
    "depth_percent": 34,
    "length": 0.98,
    "width": 1.97,
    "joint_number": 11540
  },
  {
    "original_index": 2120,
    "log_distance": 41512.5,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.7333,
    "depth_percent": 22,
    "length": 2.68,
    "width": 2.33,
    "joint_number": 11540
  },
  {
    "original_index": 2121,
    "log_distance": 41512.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5167,
    "depth_percent": 30,
    "length": 1.42,
    "width": 2.44,
    "joint_number": 11540
  },
  {
    "original_index": 2122,
    "log_distance": 41513.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7667,
    "depth_percent": 11,
    "length": 1.14,
    "width": 2.24,
    "joint_number": 11540
  },
  {
    "original_index": 2123,
    "log_distance": 41513.01,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.4833,
    "depth_percent": 26,
    "length": 0.9,
    "width": 3.27,
    "joint_number": 11540
  },
  {
    "original_index": 2124,
    "log_distance": 41513.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6833,
    "depth_percent": 11,
    "length": 0.67,
    "width": 0.75,
    "joint_number": 11540
  },
  {
    "original_index": 2125,
    "log_distance": 41513.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4167,
    "depth_percent": 25,
    "length": 1.1,
    "width": 0.59,
    "joint_number": 11540
  },
  {
    "original_index": 2126,
    "log_distance": 41513.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6833,
    "depth_percent": 11,
    "length": 0.35,
    "width": 0.67,
    "joint_number": 11540
  },
  {
    "original_index": 2127,
    "log_distance": 41513.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.95,
    "depth_percent": 12,
    "length": 0.43,
    "width": 0.63,
    "joint_number": 11540
  },
  {
    "original_index": 2132,
    "log_distance": 41531.52,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.35,
    "depth_percent": 12,
    "length": 0.59,
    "width": 2.84,
    "joint_number": 11550
  },
  {
    "original_index": 2133,
    "log_distance": 41531.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8167,
    "depth_percent": 10,
    "length": 0.98,
    "width": 1.58,
    "joint_number": 11550
  },
  {
    "original_index": 2134,
    "log_distance": 41531.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.2,
    "depth_percent": 11,
    "length": 0.59,
    "width": 1.18,
    "joint_number": 11550
  },
  {
    "original_index": 2135,
    "log_distance": 41531.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.4167,
    "depth_percent": 23,
    "length": 0.83,
    "width": 2.09,
    "joint_number": 11550
  },
  {
    "original_index": 2136,
    "log_distance": 41531.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9333,
    "depth_percent": 13,
    "length": 1.06,
    "width": 2.4,
    "joint_number": 11550
  },
  {
    "original_index": 2137,
    "log_distance": 41531.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.25,
    "depth_percent": 11,
    "length": 0.71,
    "width": 1.26,
    "joint_number": 11550
  },
  {
    "original_index": 2138,
    "log_distance": 41531.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5667,
    "depth_percent": 17,
    "length": 1.1,
    "width": 0.63,
    "joint_number": 11550
  },
  {
    "original_index": 2139,
    "log_distance": 41531.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8167,
    "depth_percent": 12,
    "length": 0.87,
    "width": 2.21,
    "joint_number": 11550
  },
  {
    "original_index": 2140,
    "log_distance": 41538.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2833,
    "depth_percent": 21,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 11550
  },
  {
    "original_index": 2141,
    "log_distance": 41539.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9667,
    "depth_percent": 11,
    "length": 2.21,
    "width": 1.65,
    "joint_number": 11550
  },
  {
    "original_index": 2142,
    "log_distance": 41550.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8667,
    "depth_percent": 15,
    "length": 0.47,
    "width": 0.94,
    "joint_number": 11550
  },
  {
    "original_index": 2143,
    "log_distance": 41551.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.55,
    "depth_percent": 11,
    "length": 1.85,
    "width": 1.53,
    "joint_number": 11550
  },
  {
    "original_index": 2144,
    "log_distance": 41551.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2333,
    "depth_percent": 14,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 11550
  },
  {
    "original_index": 2145,
    "log_distance": 41551.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.8833,
    "depth_percent": 14,
    "length": 0.63,
    "width": 1.58,
    "joint_number": 11550
  },
  {
    "original_index": 2146,
    "log_distance": 41551.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1333,
    "depth_percent": 13,
    "length": 0.75,
    "width": 1.3,
    "joint_number": 11550
  },
  {
    "original_index": 2147,
    "log_distance": 41551.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.3,
    "depth_percent": 13,
    "length": 0.91,
    "width": 1.14,
    "joint_number": 11550
  },
  {
    "original_index": 2148,
    "log_distance": 41551.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.95,
    "depth_percent": 16,
    "length": 2.17,
    "width": 2.87,
    "joint_number": 11550
  },
  {
    "original_index": 2149,
    "log_distance": 41551.97,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 11.6333,
    "depth_percent": 26,
    "length": 1.48,
    "width": 5.66,
    "joint_number": 11550
  },
  {
    "original_index": 2150,
    "log_distance": 41551.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2167,
    "depth_percent": 11,
    "length": 1.1,
    "width": 0.83,
    "joint_number": 11550
  },
  {
    "original_index": 2151,
    "log_distance": 41551.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.8333,
    "depth_percent": 12,
    "length": 1.85,
    "width": 1.26,
    "joint_number": 11550
  },
  {
    "original_index": 2152,
    "log_distance": 41552.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.95,
    "depth_percent": 10,
    "length": 1.38,
    "width": 2.32,
    "joint_number": 11550
  },
  {
    "original_index": 2153,
    "log_distance": 41552.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.9,
    "depth_percent": 12,
    "length": 1.34,
    "width": 3.19,
    "joint_number": 11550
  },
  {
    "original_index": 2154,
    "log_distance": 41553.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.5833,
    "depth_percent": 10,
    "length": 1.26,
    "width": 2.28,
    "joint_number": 11550
  },
  {
    "original_index": 2155,
    "log_distance": 41553.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.3667,
    "depth_percent": 14,
    "length": 0.91,
    "width": 2.72,
    "joint_number": 11550
  },
  {
    "original_index": 2157,
    "log_distance": 41562.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4333,
    "depth_percent": 10,
    "length": 1.93,
    "width": 0.91,
    "joint_number": 11550
  },
  {
    "original_index": 2158,
    "log_distance": 41562.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.0333,
    "depth_percent": 11,
    "length": 0.67,
    "width": 1.34,
    "joint_number": 11550
  },
  {
    "original_index": 2159,
    "log_distance": 41563.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3667,
    "depth_percent": 10,
    "length": 0.79,
    "width": 1.26,
    "joint_number": 11550
  },
  {
    "original_index": 2161,
    "log_distance": 41565.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6667,
    "depth_percent": 10,
    "length": 1.18,
    "width": 1.5,
    "joint_number": 11550
  },
  {
    "original_index": 2162,
    "log_distance": 41565.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.3333,
    "depth_percent": 14,
    "length": 1.18,
    "width": 1.53,
    "joint_number": 11550
  },
  {
    "original_index": 2163,
    "log_distance": 41566.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8167,
    "depth_percent": 11,
    "length": 0.51,
    "width": 0.75,
    "joint_number": 11550
  },
  {
    "original_index": 2164,
    "log_distance": 41566.34,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.85,
    "depth_percent": 17,
    "length": 1.68,
    "width": 2.12,
    "joint_number": 11550
  },
  {
    "original_index": 2165,
    "log_distance": 41569.55,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4833,
    "depth_percent": 11,
    "length": 1.42,
    "width": 1.73,
    "joint_number": 11550
  },
  {
    "original_index": 2166,
    "log_distance": 41569.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.05,
    "depth_percent": 10,
    "length": 0.79,
    "width": 1.73,
    "joint_number": 11550
  },
  {
    "original_index": 2168,
    "log_distance": 41570.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.75,
    "depth_percent": 15,
    "length": 0.71,
    "width": 1.77,
    "joint_number": 11560
  },
  {
    "original_index": 2170,
    "log_distance": 41571.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0333,
    "depth_percent": 10,
    "length": 0.55,
    "width": 1.3,
    "joint_number": 11560
  },
  {
    "original_index": 2171,
    "log_distance": 41571.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1,
    "depth_percent": 29,
    "length": 0.83,
    "width": 1.1,
    "joint_number": 11560
  },
  {
    "original_index": 2172,
    "log_distance": 41572.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.95,
    "depth_percent": 10,
    "length": 0.43,
    "width": 0.75,
    "joint_number": 11560
  },
  {
    "original_index": 2175,
    "log_distance": 41609.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8,
    "depth_percent": 53,
    "length": 0.55,
    "width": 1.38,
    "joint_number": 11560
  },
  {
    "original_index": 2176,
    "log_distance": 41609.87,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8167,
    "depth_percent": 21,
    "length": 0.55,
    "width": 1.1,
    "joint_number": 11560
  },
  {
    "original_index": 2179,
    "log_distance": 41611.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1833,
    "depth_percent": 19,
    "length": 2.17,
    "width": 1.26,
    "joint_number": 11570
  },
  {
    "original_index": 2180,
    "log_distance": 41611.68,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.25,
    "depth_percent": 30,
    "length": 1.92,
    "width": 3.27,
    "joint_number": 11570
  },
  {
    "original_index": 2181,
    "log_distance": 41611.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5,
    "depth_percent": 11,
    "length": 1.53,
    "width": 2.01,
    "joint_number": 11570
  },
  {
    "original_index": 2182,
    "log_distance": 41611.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.95,
    "depth_percent": 13,
    "length": 1.93,
    "width": 1.38,
    "joint_number": 11570
  },
  {
    "original_index": 2183,
    "log_distance": 41611.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1667,
    "depth_percent": 19,
    "length": 0.71,
    "width": 1.85,
    "joint_number": 11570
  },
  {
    "original_index": 2184,
    "log_distance": 41611.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3167,
    "depth_percent": 11,
    "length": 1.65,
    "width": 2.79,
    "joint_number": 11570
  },
  {
    "original_index": 2190,
    "log_distance": 41646.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0833,
    "depth_percent": 11,
    "length": 0.75,
    "width": 1.3,
    "joint_number": 11570
  },
  {
    "original_index": 2193,
    "log_distance": 41653.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.5333,
    "depth_percent": 10,
    "length": 1.89,
    "width": 0.91,
    "joint_number": 11580
  },
  {
    "original_index": 2194,
    "log_distance": 41653.76,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.2333,
    "depth_percent": 28,
    "length": 1.81,
    "width": 4.4,
    "joint_number": 11580
  },
  {
    "original_index": 2195,
    "log_distance": 41654.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9,
    "depth_percent": 16,
    "length": 1.46,
    "width": 2.24,
    "joint_number": 11580
  },
  {
    "original_index": 2196,
    "log_distance": 41654.03,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.6833,
    "depth_percent": 17,
    "length": 1.93,
    "width": 4.32,
    "joint_number": 11580
  },
  {
    "original_index": 2197,
    "log_distance": 41654.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.5833,
    "depth_percent": 12,
    "length": 0.75,
    "width": 1.02,
    "joint_number": 11580
  },
  {
    "original_index": 2198,
    "log_distance": 41654.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.45,
    "depth_percent": 12,
    "length": 1.69,
    "width": 1.81,
    "joint_number": 11580
  },
  {
    "original_index": 2199,
    "log_distance": 41654.52,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.05,
    "depth_percent": 11,
    "length": 0.59,
    "width": 0.87,
    "joint_number": 11580
  },
  {
    "original_index": 2200,
    "log_distance": 41655.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.5833,
    "depth_percent": 10,
    "length": 1.65,
    "width": 1.22,
    "joint_number": 11580
  },
  {
    "original_index": 2201,
    "log_distance": 41657.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.15,
    "depth_percent": 17,
    "length": 1.65,
    "width": 2.13,
    "joint_number": 11580
  },
  {
    "original_index": 2202,
    "log_distance": 41658.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.95,
    "depth_percent": 11,
    "length": 1.14,
    "width": 1.42,
    "joint_number": 11580
  },
  {
    "original_index": 2203,
    "log_distance": 41659.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9167,
    "depth_percent": 11,
    "length": 1.02,
    "width": 1.42,
    "joint_number": 11580
  },
  {
    "original_index": 2204,
    "log_distance": 41660.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.95,
    "depth_percent": 11,
    "length": 2.01,
    "width": 0.63,
    "joint_number": 11580
  },
  {
    "original_index": 2205,
    "log_distance": 41660.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.7167,
    "depth_percent": 40,
    "length": 1.3,
    "width": 1.38,
    "joint_number": 11580
  },
  {
    "original_index": 2207,
    "log_distance": 41661.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.0167,
    "depth_percent": 69,
    "length": 1.02,
    "width": 0.87,
    "joint_number": 11580
  },
  {
    "original_index": 2209,
    "log_distance": 41662.54,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.1333,
    "depth_percent": 21,
    "length": 1.97,
    "width": 1.3,
    "joint_number": 11580
  },
  {
    "original_index": 2212,
    "log_distance": 41669.01,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 10.6167,
    "depth_percent": 38,
    "length": 2.59,
    "width": 4.32,
    "joint_number": 11580
  },
  {
    "original_index": 2213,
    "log_distance": 41669.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.35,
    "depth_percent": 11,
    "length": 0.32,
    "width": 0.94,
    "joint_number": 11580
  },
  {
    "original_index": 2214,
    "log_distance": 41669.36,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 10.3,
    "depth_percent": 45,
    "length": 2.36,
    "width": 1.61,
    "joint_number": 11580
  },
  {
    "original_index": 2215,
    "log_distance": 41670.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.1833,
    "depth_percent": 11,
    "length": 0.32,
    "width": 0.63,
    "joint_number": 11580
  },
  {
    "original_index": 2216,
    "log_distance": 41670.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7667,
    "depth_percent": 10,
    "length": 0.32,
    "width": 0.59,
    "joint_number": 11580
  },
  {
    "original_index": 2217,
    "log_distance": 41670.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.5167,
    "depth_percent": 15,
    "length": 1.93,
    "width": 0.91,
    "joint_number": 11580
  },
  {
    "original_index": 2218,
    "log_distance": 41670.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.8167,
    "depth_percent": 12,
    "length": 0.59,
    "width": 1.14,
    "joint_number": 11580
  },
  {
    "original_index": 2219,
    "log_distance": 41670.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.95,
    "depth_percent": 11,
    "length": 0.63,
    "width": 1.18,
    "joint_number": 11580
  },
  {
    "original_index": 2220,
    "log_distance": 41670.98,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.2333,
    "depth_percent": 20,
    "length": 1.57,
    "width": 3.96,
    "joint_number": 11580
  },
  {
    "original_index": 2221,
    "log_distance": 41671.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1,
    "depth_percent": 12,
    "length": 0.59,
    "width": 0.87,
    "joint_number": 11580
  },
  {
    "original_index": 2222,
    "log_distance": 41671.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.2833,
    "depth_percent": 12,
    "length": 1.53,
    "width": 1.22,
    "joint_number": 11580
  },
  {
    "original_index": 2223,
    "log_distance": 41672.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4,
    "depth_percent": 22,
    "length": 0.79,
    "width": 1.3,
    "joint_number": 11580
  },
  {
    "original_index": 2224,
    "log_distance": 41672.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.4167,
    "depth_percent": 16,
    "length": 0.94,
    "width": 0.83,
    "joint_number": 11580
  },
  {
    "original_index": 2225,
    "log_distance": 41672.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.4833,
    "depth_percent": 14,
    "length": 0.47,
    "width": 0.59,
    "joint_number": 11580
  },
  {
    "original_index": 2226,
    "log_distance": 41672.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1167,
    "depth_percent": 13,
    "length": 0.59,
    "width": 1.02,
    "joint_number": 11580
  },
  {
    "original_index": 2227,
    "log_distance": 41672.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1667,
    "depth_percent": 13,
    "length": 0.59,
    "width": 1.1,
    "joint_number": 11580
  },
  {
    "original_index": 2228,
    "log_distance": 41672.9,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.4833,
    "depth_percent": 10,
    "length": 0.63,
    "width": 0.59,
    "joint_number": 11580
  },
  {
    "original_index": 2229,
    "log_distance": 41673.02,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.4667,
    "depth_percent": 40,
    "length": 0.83,
    "width": 2.58,
    "joint_number": 11580
  },
  {
    "original_index": 2230,
    "log_distance": 41673.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4667,
    "depth_percent": 11,
    "length": 0.51,
    "width": 0.87,
    "joint_number": 11580
  },
  {
    "original_index": 2231,
    "log_distance": 41673.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5333,
    "depth_percent": 11,
    "length": 0.55,
    "width": 0.87,
    "joint_number": 11580
  },
  {
    "original_index": 2232,
    "log_distance": 41673.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.5167,
    "depth_percent": 15,
    "length": 0.43,
    "width": 0.59,
    "joint_number": 11580
  },
  {
    "original_index": 2233,
    "log_distance": 41673.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.45,
    "depth_percent": 13,
    "length": 0.43,
    "width": 0.63,
    "joint_number": 11580
  },
  {
    "original_index": 2235,
    "log_distance": 41673.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4167,
    "depth_percent": 11,
    "length": 0.51,
    "width": 0.94,
    "joint_number": 11580
  },
  {
    "original_index": 2236,
    "log_distance": 41673.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1833,
    "depth_percent": 14,
    "length": 0.71,
    "width": 0.98,
    "joint_number": 11580
  },
  {
    "original_index": 2237,
    "log_distance": 41673.69,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.4833,
    "depth_percent": 21,
    "length": 1.14,
    "width": 3.06,
    "joint_number": 11580
  },
  {
    "original_index": 2238,
    "log_distance": 41673.9,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.45,
    "depth_percent": 33,
    "length": 1.1,
    "width": 2.89,
    "joint_number": 11580
  },
  {
    "original_index": 2239,
    "log_distance": 41673.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.2333,
    "depth_percent": 17,
    "length": 0.43,
    "width": 1.26,
    "joint_number": 11580
  },
  {
    "original_index": 2240,
    "log_distance": 41674.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2,
    "depth_percent": 23,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 11580
  },
  {
    "original_index": 2241,
    "log_distance": 41674.08,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3,
    "depth_percent": 18,
    "length": 0.79,
    "width": 1.06,
    "joint_number": 11580
  },
  {
    "original_index": 2242,
    "log_distance": 41674.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.4667,
    "depth_percent": 10,
    "length": 0.67,
    "width": 0.67,
    "joint_number": 11580
  },
  {
    "original_index": 2243,
    "log_distance": 41674.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.4833,
    "depth_percent": 22,
    "length": 0.75,
    "width": 2.4,
    "joint_number": 11580
  },
  {
    "original_index": 2244,
    "log_distance": 41674.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.7667,
    "depth_percent": 22,
    "length": 0.67,
    "width": 1.06,
    "joint_number": 11580
  },
  {
    "original_index": 2245,
    "log_distance": 41674.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8167,
    "depth_percent": 10,
    "length": 1.93,
    "width": 1.69,
    "joint_number": 11580
  },
  {
    "original_index": 2246,
    "log_distance": 41674.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2,
    "depth_percent": 14,
    "length": 0.71,
    "width": 1.18,
    "joint_number": 11580
  },
  {
    "original_index": 2247,
    "log_distance": 41674.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8167,
    "depth_percent": 18,
    "length": 0.43,
    "width": 0.79,
    "joint_number": 11580
  },
  {
    "original_index": 2248,
    "log_distance": 41674.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8,
    "depth_percent": 14,
    "length": 0.43,
    "width": 0.59,
    "joint_number": 11580
  },
  {
    "original_index": 2249,
    "log_distance": 41674.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4333,
    "depth_percent": 39,
    "length": 0.79,
    "width": 1.18,
    "joint_number": 11580
  },
  {
    "original_index": 2250,
    "log_distance": 41674.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1,
    "depth_percent": 17,
    "length": 0.67,
    "width": 1.5,
    "joint_number": 11580
  },
  {
    "original_index": 2251,
    "log_distance": 41674.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.5833,
    "depth_percent": 29,
    "length": 1.53,
    "width": 2.52,
    "joint_number": 11580
  },
  {
    "original_index": 2252,
    "log_distance": 41674.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1833,
    "depth_percent": 14,
    "length": 0.83,
    "width": 1.22,
    "joint_number": 11580
  },
  {
    "original_index": 2253,
    "log_distance": 41674.87,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.1,
    "depth_percent": 16,
    "length": 1.06,
    "width": 0.83,
    "joint_number": 11580
  },
  {
    "original_index": 2254,
    "log_distance": 41674.89,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.3833,
    "depth_percent": 18,
    "length": 2.8,
    "width": 2.85,
    "joint_number": 11580
  },
  {
    "original_index": 2255,
    "log_distance": 41675.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.0667,
    "depth_percent": 10,
    "length": 0.47,
    "width": 0.94,
    "joint_number": 11580
  },
  {
    "original_index": 2256,
    "log_distance": 41675.22,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 1.8667,
    "depth_percent": 50,
    "length": 0.97,
    "width": 4.88,
    "joint_number": 11580
  },
  {
    "original_index": 2257,
    "log_distance": 41675.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.85,
    "depth_percent": 10,
    "length": 0.87,
    "width": 1.26,
    "joint_number": 11580
  },
  {
    "original_index": 2258,
    "log_distance": 41675.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.5,
    "depth_percent": 11,
    "length": 1.1,
    "width": 0.59,
    "joint_number": 11580
  },
  {
    "original_index": 2259,
    "log_distance": 41675.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8,
    "depth_percent": 17,
    "length": 1.1,
    "width": 0.83,
    "joint_number": 11580
  },
  {
    "original_index": 2260,
    "log_distance": 41675.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2667,
    "depth_percent": 11,
    "length": 0.51,
    "width": 0.94,
    "joint_number": 11580
  },
  {
    "original_index": 2261,
    "log_distance": 41675.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8,
    "depth_percent": 13,
    "length": 0.98,
    "width": 1.1,
    "joint_number": 11580
  },
  {
    "original_index": 2262,
    "log_distance": 41675.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.25,
    "depth_percent": 38,
    "length": 0.71,
    "width": 0.98,
    "joint_number": 11580
  },
  {
    "original_index": 2263,
    "log_distance": 41675.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4167,
    "depth_percent": 34,
    "length": 0.91,
    "width": 1.3,
    "joint_number": 11580
  },
  {
    "original_index": 2264,
    "log_distance": 41676.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7167,
    "depth_percent": 17,
    "length": 1.93,
    "width": 3.07,
    "joint_number": 11580
  },
  {
    "original_index": 2265,
    "log_distance": 41676.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5,
    "depth_percent": 36,
    "length": 0.75,
    "width": 1.34,
    "joint_number": 11580
  },
  {
    "original_index": 2266,
    "log_distance": 41676.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5833,
    "depth_percent": 39,
    "length": 0.63,
    "width": 1.39,
    "joint_number": 11580
  },
  {
    "original_index": 2267,
    "log_distance": 41676.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.6167,
    "depth_percent": 17,
    "length": 0.79,
    "width": 1.34,
    "joint_number": 11580
  },
  {
    "original_index": 2268,
    "log_distance": 41677.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2833,
    "depth_percent": 19,
    "length": 0.63,
    "width": 1.06,
    "joint_number": 11580
  },
  {
    "original_index": 2269,
    "log_distance": 41677.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7,
    "depth_percent": 20,
    "length": 1.5,
    "width": 1.77,
    "joint_number": 11580
  },
  {
    "original_index": 2270,
    "log_distance": 41677.81,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1,
    "depth_percent": 12,
    "length": 1.81,
    "width": 1.73,
    "joint_number": 11580
  },
  {
    "original_index": 2273,
    "log_distance": 41678.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1167,
    "depth_percent": 10,
    "length": 1.85,
    "width": 2.87,
    "joint_number": 11580
  },
  {
    "original_index": 2274,
    "log_distance": 41679.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2167,
    "depth_percent": 16,
    "length": 1.18,
    "width": 1.34,
    "joint_number": 11580
  },
  {
    "original_index": 2275,
    "log_distance": 41689.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.8333,
    "depth_percent": 13,
    "length": 0.83,
    "width": 3.39,
    "joint_number": 11580
  },
  {
    "original_index": 2276,
    "log_distance": 41690.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.4833,
    "depth_percent": 13,
    "length": 0.83,
    "width": 1.02,
    "joint_number": 11580
  },
  {
    "original_index": 2277,
    "log_distance": 41690.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.45,
    "depth_percent": 11,
    "length": 0.43,
    "width": 1.26,
    "joint_number": 11580
  },
  {
    "original_index": 2279,
    "log_distance": 41690.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9167,
    "depth_percent": 11,
    "length": 0.59,
    "width": 0.79,
    "joint_number": 11590
  },
  {
    "original_index": 2280,
    "log_distance": 41691.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.15,
    "depth_percent": 15,
    "length": 0.79,
    "width": 1.34,
    "joint_number": 11590
  },
  {
    "original_index": 2281,
    "log_distance": 41691.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.55,
    "depth_percent": 13,
    "length": 1.61,
    "width": 0.71,
    "joint_number": 11590
  },
  {
    "original_index": 2282,
    "log_distance": 41691.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.3167,
    "depth_percent": 13,
    "length": 1.61,
    "width": 3.62,
    "joint_number": 11590
  },
  {
    "original_index": 2283,
    "log_distance": 41691.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4833,
    "depth_percent": 11,
    "length": 1.06,
    "width": 3.03,
    "joint_number": 11590
  },
  {
    "original_index": 2284,
    "log_distance": 41691.86,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.6,
    "depth_percent": 23,
    "length": 1.73,
    "width": 2.49,
    "joint_number": 11590
  },
  {
    "original_index": 2285,
    "log_distance": 41700.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.0167,
    "depth_percent": 14,
    "length": 0.59,
    "width": 1.14,
    "joint_number": 11590
  },
  {
    "original_index": 2286,
    "log_distance": 41700.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6667,
    "depth_percent": 13,
    "length": 0.94,
    "width": 1.3,
    "joint_number": 11590
  },
  {
    "original_index": 2287,
    "log_distance": 41700.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.75,
    "depth_percent": 11,
    "length": 0.83,
    "width": 1.26,
    "joint_number": 11590
  },
  {
    "original_index": 2288,
    "log_distance": 41701,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6333,
    "depth_percent": 16,
    "length": 0.87,
    "width": 1.18,
    "joint_number": 11590
  },
  {
    "original_index": 2289,
    "log_distance": 41701.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4833,
    "depth_percent": 12,
    "length": 1.5,
    "width": 1.3,
    "joint_number": 11590
  },
  {
    "original_index": 2290,
    "log_distance": 41701.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.0333,
    "depth_percent": 16,
    "length": 0.47,
    "width": 0.94,
    "joint_number": 11590
  },
  {
    "original_index": 2291,
    "log_distance": 41701.45,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 10.2,
    "depth_percent": 23,
    "length": 1.14,
    "width": 3.92,
    "joint_number": 11590
  },
  {
    "original_index": 2292,
    "log_distance": 41701.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7,
    "depth_percent": 13,
    "length": 0.32,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2293,
    "log_distance": 41701.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.6333,
    "depth_percent": 18,
    "length": 0.32,
    "width": 1.85,
    "joint_number": 11590
  },
  {
    "original_index": 2294,
    "log_distance": 41701.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.05,
    "depth_percent": 10,
    "length": 1.46,
    "width": 2.28,
    "joint_number": 11590
  },
  {
    "original_index": 2295,
    "log_distance": 41701.73,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.5333,
    "depth_percent": 25,
    "length": 3.32,
    "width": 2.54,
    "joint_number": 11590
  },
  {
    "original_index": 2296,
    "log_distance": 41701.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6833,
    "depth_percent": 38,
    "length": 1.42,
    "width": 2.13,
    "joint_number": 11590
  },
  {
    "original_index": 2297,
    "log_distance": 41701.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5333,
    "depth_percent": 12,
    "length": 0.55,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2298,
    "log_distance": 41702.05,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5333,
    "depth_percent": 11,
    "length": 1.34,
    "width": 1.69,
    "joint_number": 11590
  },
  {
    "original_index": 2299,
    "log_distance": 41702.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5667,
    "depth_percent": 12,
    "length": 1.65,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2300,
    "log_distance": 41702.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.75,
    "depth_percent": 10,
    "length": 1.14,
    "width": 0.94,
    "joint_number": 11590
  },
  {
    "original_index": 2301,
    "log_distance": 41702.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1,
    "depth_percent": 10,
    "length": 1.58,
    "width": 1.69,
    "joint_number": 11590
  },
  {
    "original_index": 2302,
    "log_distance": 41702.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5333,
    "depth_percent": 12,
    "length": 1.38,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2303,
    "log_distance": 41702.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5333,
    "depth_percent": 12,
    "length": 1.46,
    "width": 0.67,
    "joint_number": 11590
  },
  {
    "original_index": 2304,
    "log_distance": 41702.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.2833,
    "depth_percent": 15,
    "length": 0.32,
    "width": 0.75,
    "joint_number": 11590
  },
  {
    "original_index": 2305,
    "log_distance": 41702.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8333,
    "depth_percent": 11,
    "length": 0.32,
    "width": 1.26,
    "joint_number": 11590
  },
  {
    "original_index": 2306,
    "log_distance": 41702.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3333,
    "depth_percent": 10,
    "length": 0.32,
    "width": 0.98,
    "joint_number": 11590
  },
  {
    "original_index": 2307,
    "log_distance": 41702.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8,
    "depth_percent": 14,
    "length": 0.43,
    "width": 1.89,
    "joint_number": 11590
  },
  {
    "original_index": 2308,
    "log_distance": 41702.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5333,
    "depth_percent": 11,
    "length": 0.32,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2309,
    "log_distance": 41702.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7833,
    "depth_percent": 13,
    "length": 0.55,
    "width": 1.73,
    "joint_number": 11590
  },
  {
    "original_index": 2310,
    "log_distance": 41702.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7667,
    "depth_percent": 11,
    "length": 0.91,
    "width": 0.71,
    "joint_number": 11590
  },
  {
    "original_index": 2311,
    "log_distance": 41702.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.85,
    "depth_percent": 18,
    "length": 0.94,
    "width": 1.1,
    "joint_number": 11590
  },
  {
    "original_index": 2312,
    "log_distance": 41703.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.7833,
    "depth_percent": 13,
    "length": 0.91,
    "width": 1.85,
    "joint_number": 11590
  },
  {
    "original_index": 2313,
    "log_distance": 41703.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5333,
    "depth_percent": 16,
    "length": 0.98,
    "width": 0.63,
    "joint_number": 11590
  },
  {
    "original_index": 2314,
    "log_distance": 41703.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2833,
    "depth_percent": 23,
    "length": 1.14,
    "width": 1.85,
    "joint_number": 11590
  },
  {
    "original_index": 2315,
    "log_distance": 41703.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5,
    "depth_percent": 10,
    "length": 1.73,
    "width": 1.73,
    "joint_number": 11590
  },
  {
    "original_index": 2316,
    "log_distance": 41703.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.5667,
    "depth_percent": 14,
    "length": 0.71,
    "width": 1.14,
    "joint_number": 11590
  },
  {
    "original_index": 2317,
    "log_distance": 41707.27,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7833,
    "depth_percent": 11,
    "length": 1.81,
    "width": 1.18,
    "joint_number": 11590
  },
  {
    "original_index": 2318,
    "log_distance": 41707.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6167,
    "depth_percent": 12,
    "length": 1.18,
    "width": 0.91,
    "joint_number": 11590
  },
  {
    "original_index": 2319,
    "log_distance": 41707.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10,
    "depth_percent": 20,
    "length": 0.87,
    "width": 0.98,
    "joint_number": 11590
  },
  {
    "original_index": 2320,
    "log_distance": 41707.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.55,
    "depth_percent": 15,
    "length": 1.3,
    "width": 1.69,
    "joint_number": 11590
  },
  {
    "original_index": 2321,
    "log_distance": 41708.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9833,
    "depth_percent": 15,
    "length": 0.67,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2322,
    "log_distance": 41709.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6667,
    "depth_percent": 13,
    "length": 1.38,
    "width": 1.77,
    "joint_number": 11590
  },
  {
    "original_index": 2323,
    "log_distance": 41709.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.0167,
    "depth_percent": 15,
    "length": 0.55,
    "width": 0.87,
    "joint_number": 11590
  },
  {
    "original_index": 2324,
    "log_distance": 41711.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.0333,
    "depth_percent": 14,
    "length": 0.59,
    "width": 1.18,
    "joint_number": 11590
  },
  {
    "original_index": 2325,
    "log_distance": 41711.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9167,
    "depth_percent": 14,
    "length": 0.67,
    "width": 1.77,
    "joint_number": 11590
  },
  {
    "original_index": 2326,
    "log_distance": 41711.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.6167,
    "depth_percent": 11,
    "length": 0.63,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2327,
    "log_distance": 41711.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.75,
    "depth_percent": 14,
    "length": 0.59,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2328,
    "log_distance": 41712.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.4167,
    "depth_percent": 10,
    "length": 0.98,
    "width": 1.34,
    "joint_number": 11590
  },
  {
    "original_index": 2329,
    "log_distance": 41712.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.2333,
    "depth_percent": 17,
    "length": 1.46,
    "width": 1.69,
    "joint_number": 11590
  },
  {
    "original_index": 2330,
    "log_distance": 41712.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7833,
    "depth_percent": 11,
    "length": 1.06,
    "width": 0.75,
    "joint_number": 11590
  },
  {
    "original_index": 2331,
    "log_distance": 41712.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9,
    "depth_percent": 12,
    "length": 1.65,
    "width": 0.75,
    "joint_number": 11590
  },
  {
    "original_index": 2332,
    "log_distance": 41712.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7833,
    "depth_percent": 10,
    "length": 0.55,
    "width": 1.14,
    "joint_number": 11590
  },
  {
    "original_index": 2333,
    "log_distance": 41712.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2167,
    "depth_percent": 11,
    "length": 0.47,
    "width": 0.87,
    "joint_number": 11590
  },
  {
    "original_index": 2334,
    "log_distance": 41712.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.95,
    "depth_percent": 37,
    "length": 1.81,
    "width": 1.53,
    "joint_number": 11590
  },
  {
    "original_index": 2335,
    "log_distance": 41713.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.75,
    "depth_percent": 11,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 11590
  },
  {
    "original_index": 2336,
    "log_distance": 41713.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.25,
    "depth_percent": 31,
    "length": 0.79,
    "width": 2.28,
    "joint_number": 11590
  },
  {
    "original_index": 2337,
    "log_distance": 41713.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1167,
    "depth_percent": 15,
    "length": 0.94,
    "width": 2.05,
    "joint_number": 11590
  },
  {
    "original_index": 2338,
    "log_distance": 41713.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.7833,
    "depth_percent": 10,
    "length": 0.47,
    "width": 0.91,
    "joint_number": 11590
  },
  {
    "original_index": 2339,
    "log_distance": 41713.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.5833,
    "depth_percent": 33,
    "length": 0.71,
    "width": 1.02,
    "joint_number": 11590
  },
  {
    "original_index": 2340,
    "log_distance": 41714.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6833,
    "depth_percent": 10,
    "length": 0.71,
    "width": 0.94,
    "joint_number": 11590
  },
  {
    "original_index": 2341,
    "log_distance": 41714.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7167,
    "depth_percent": 18,
    "length": 0.83,
    "width": 1.22,
    "joint_number": 11590
  },
  {
    "original_index": 2342,
    "log_distance": 41714.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1333,
    "depth_percent": 13,
    "length": 1.14,
    "width": 1.02,
    "joint_number": 11590
  },
  {
    "original_index": 2343,
    "log_distance": 41714.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.0833,
    "depth_percent": 10,
    "length": 1.61,
    "width": 0.63,
    "joint_number": 11590
  },
  {
    "original_index": 2344,
    "log_distance": 41715.27,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8833,
    "depth_percent": 10,
    "length": 1.06,
    "width": 1.5,
    "joint_number": 11590
  },
  {
    "original_index": 2345,
    "log_distance": 41715.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9667,
    "depth_percent": 11,
    "length": 1.14,
    "width": 1.46,
    "joint_number": 11590
  },
  {
    "original_index": 2346,
    "log_distance": 41715.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.65,
    "depth_percent": 14,
    "length": 0.63,
    "width": 1.42,
    "joint_number": 11590
  },
  {
    "original_index": 2347,
    "log_distance": 41715.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8667,
    "depth_percent": 11,
    "length": 0.51,
    "width": 1.18,
    "joint_number": 11590
  },
  {
    "original_index": 2348,
    "log_distance": 41715.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7167,
    "depth_percent": 12,
    "length": 0.71,
    "width": 1.34,
    "joint_number": 11590
  },
  {
    "original_index": 2349,
    "log_distance": 41716.18,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.6333,
    "depth_percent": 31,
    "length": 1.13,
    "width": 1.61,
    "joint_number": 11590
  },
  {
    "original_index": 2350,
    "log_distance": 41716.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7,
    "depth_percent": 11,
    "length": 1.53,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2351,
    "log_distance": 41716.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.25,
    "depth_percent": 12,
    "length": 1.06,
    "width": 1.69,
    "joint_number": 11590
  },
  {
    "original_index": 2352,
    "log_distance": 41716.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3833,
    "depth_percent": 13,
    "length": 0.59,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2353,
    "log_distance": 41716.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6667,
    "depth_percent": 11,
    "length": 0.71,
    "width": 1.1,
    "joint_number": 11590
  },
  {
    "original_index": 2354,
    "log_distance": 41716.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1167,
    "depth_percent": 16,
    "length": 1.06,
    "width": 1.77,
    "joint_number": 11590
  },
  {
    "original_index": 2355,
    "log_distance": 41717.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6333,
    "depth_percent": 14,
    "length": 1.5,
    "width": 0.79,
    "joint_number": 11590
  },
  {
    "original_index": 2356,
    "log_distance": 41717.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9333,
    "depth_percent": 16,
    "length": 0.67,
    "width": 1.34,
    "joint_number": 11590
  },
  {
    "original_index": 2357,
    "log_distance": 41717.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3167,
    "depth_percent": 15,
    "length": 0.67,
    "width": 1.02,
    "joint_number": 11590
  },
  {
    "original_index": 2358,
    "log_distance": 41717.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8167,
    "depth_percent": 10,
    "length": 0.83,
    "width": 1.26,
    "joint_number": 11590
  },
  {
    "original_index": 2359,
    "log_distance": 41717.73,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.4167,
    "depth_percent": 14,
    "length": 0.98,
    "width": 1.22,
    "joint_number": 11590
  },
  {
    "original_index": 2360,
    "log_distance": 41717.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.0667,
    "depth_percent": 11,
    "length": 1.58,
    "width": 0.79,
    "joint_number": 11590
  },
  {
    "original_index": 2361,
    "log_distance": 41717.9,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3,
    "depth_percent": 21,
    "length": 0.79,
    "width": 1.38,
    "joint_number": 11590
  },
  {
    "original_index": 2362,
    "log_distance": 41717.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.75,
    "depth_percent": 12,
    "length": 1.34,
    "width": 0.98,
    "joint_number": 11590
  },
  {
    "original_index": 2363,
    "log_distance": 41718.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9,
    "depth_percent": 10,
    "length": 2.17,
    "width": 1.42,
    "joint_number": 11590
  },
  {
    "original_index": 2364,
    "log_distance": 41718.71,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.55,
    "depth_percent": 31,
    "length": 1.5,
    "width": 3.81,
    "joint_number": 11590
  },
  {
    "original_index": 2365,
    "log_distance": 41719.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0667,
    "depth_percent": 19,
    "length": 1.1,
    "width": 1.26,
    "joint_number": 11590
  },
  {
    "original_index": 2366,
    "log_distance": 41719.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.0167,
    "depth_percent": 10,
    "length": 0.94,
    "width": 1.18,
    "joint_number": 11590
  },
  {
    "original_index": 2367,
    "log_distance": 41719.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1667,
    "depth_percent": 15,
    "length": 0.32,
    "width": 1.06,
    "joint_number": 11590
  },
  {
    "original_index": 2368,
    "log_distance": 41719.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6667,
    "depth_percent": 13,
    "length": 1.58,
    "width": 1.81,
    "joint_number": 11590
  },
  {
    "original_index": 2369,
    "log_distance": 41720.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2667,
    "depth_percent": 10,
    "length": 0.75,
    "width": 0.63,
    "joint_number": 11590
  },
  {
    "original_index": 2370,
    "log_distance": 41720.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.65,
    "depth_percent": 12,
    "length": 1.3,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2371,
    "log_distance": 41720.52,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9167,
    "depth_percent": 10,
    "length": 2.05,
    "width": 1.69,
    "joint_number": 11590
  },
  {
    "original_index": 2372,
    "log_distance": 41720.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5667,
    "depth_percent": 23,
    "length": 0.71,
    "width": 1.26,
    "joint_number": 11590
  },
  {
    "original_index": 2373,
    "log_distance": 41720.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8167,
    "depth_percent": 12,
    "length": 0.59,
    "width": 0.63,
    "joint_number": 11590
  },
  {
    "original_index": 2374,
    "log_distance": 41721.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7833,
    "depth_percent": 10,
    "length": 0.51,
    "width": 0.98,
    "joint_number": 11590
  },
  {
    "original_index": 2375,
    "log_distance": 41721.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0333,
    "depth_percent": 11,
    "length": 0.87,
    "width": 1.53,
    "joint_number": 11590
  },
  {
    "original_index": 2377,
    "log_distance": 41721.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.95,
    "depth_percent": 24,
    "length": 0.59,
    "width": 1.18,
    "joint_number": 11590
  },
  {
    "original_index": 2378,
    "log_distance": 41721.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8667,
    "depth_percent": 12,
    "length": 0.71,
    "width": 0.67,
    "joint_number": 11590
  },
  {
    "original_index": 2379,
    "log_distance": 41721.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1,
    "depth_percent": 19,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 11590
  },
  {
    "original_index": 2380,
    "log_distance": 41721.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2,
    "depth_percent": 12,
    "length": 0.83,
    "width": 1.1,
    "joint_number": 11590
  },
  {
    "original_index": 2381,
    "log_distance": 41721.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.9167,
    "depth_percent": 10,
    "length": 0.43,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2382,
    "log_distance": 41722,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5667,
    "depth_percent": 11,
    "length": 1.73,
    "width": 1.18,
    "joint_number": 11590
  },
  {
    "original_index": 2383,
    "log_distance": 41722.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8833,
    "depth_percent": 10,
    "length": 0.43,
    "width": 0.71,
    "joint_number": 11590
  },
  {
    "original_index": 2384,
    "log_distance": 41722.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8833,
    "depth_percent": 10,
    "length": 0.71,
    "width": 1.65,
    "joint_number": 11590
  },
  {
    "original_index": 2385,
    "log_distance": 41722.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9833,
    "depth_percent": 10,
    "length": 1.3,
    "width": 1.97,
    "joint_number": 11590
  },
  {
    "original_index": 2387,
    "log_distance": 41722.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.0167,
    "depth_percent": 10,
    "length": 0.59,
    "width": 0.59,
    "joint_number": 11590
  },
  {
    "original_index": 2391,
    "log_distance": 41722.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.2667,
    "depth_percent": 12,
    "length": 1.53,
    "width": 1.18,
    "joint_number": 11590
  },
  {
    "original_index": 2392,
    "log_distance": 41722.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.5167,
    "depth_percent": 30,
    "length": 0.87,
    "width": 1.53,
    "joint_number": 11590
  },
  {
    "original_index": 2393,
    "log_distance": 41722.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2,
    "depth_percent": 17,
    "length": 0.83,
    "width": 1.06,
    "joint_number": 11590
  },
  {
    "original_index": 2394,
    "log_distance": 41723.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.8,
    "depth_percent": 15,
    "length": 0.83,
    "width": 1.02,
    "joint_number": 11590
  },
  {
    "original_index": 2395,
    "log_distance": 41723.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8167,
    "depth_percent": 26,
    "length": 0.79,
    "width": 1.14,
    "joint_number": 11590
  },
  {
    "original_index": 2396,
    "log_distance": 41723.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.25,
    "depth_percent": 10,
    "length": 0.63,
    "width": 1.26,
    "joint_number": 11590
  },
  {
    "original_index": 2397,
    "log_distance": 41723.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5667,
    "depth_percent": 12,
    "length": 0.43,
    "width": 0.79,
    "joint_number": 11590
  },
  {
    "original_index": 2398,
    "log_distance": 41723.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1,
    "depth_percent": 12,
    "length": 0.63,
    "width": 1.18,
    "joint_number": 11590
  },
  {
    "original_index": 2399,
    "log_distance": 41723.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.6,
    "depth_percent": 26,
    "length": 0.75,
    "width": 1.46,
    "joint_number": 11590
  },
  {
    "original_index": 2400,
    "log_distance": 41724.08,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1167,
    "depth_percent": 11,
    "length": 0.59,
    "width": 0.94,
    "joint_number": 11590
  },
  {
    "original_index": 2401,
    "log_distance": 41724.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.55,
    "depth_percent": 37,
    "length": 0.67,
    "width": 1.58,
    "joint_number": 11590
  },
  {
    "original_index": 2402,
    "log_distance": 41724.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2667,
    "depth_percent": 14,
    "length": 0.63,
    "width": 0.75,
    "joint_number": 11590
  },
  {
    "original_index": 2403,
    "log_distance": 41724.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.25,
    "depth_percent": 23,
    "length": 0.59,
    "width": 0.87,
    "joint_number": 11590
  },
  {
    "original_index": 2404,
    "log_distance": 41724.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1167,
    "depth_percent": 25,
    "length": 0.55,
    "width": 1.46,
    "joint_number": 11590
  },
  {
    "original_index": 2405,
    "log_distance": 41725.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1667,
    "depth_percent": 10,
    "length": 1.1,
    "width": 1.81,
    "joint_number": 11590
  },
  {
    "original_index": 2406,
    "log_distance": 41725.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2667,
    "depth_percent": 18,
    "length": 0.51,
    "width": 0.87,
    "joint_number": 11590
  },
  {
    "original_index": 2407,
    "log_distance": 41725.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8,
    "depth_percent": 13,
    "length": 0.71,
    "width": 1.65,
    "joint_number": 11590
  },
  {
    "original_index": 2408,
    "log_distance": 41725.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9667,
    "depth_percent": 14,
    "length": 0.98,
    "width": 1.34,
    "joint_number": 11590
  },
  {
    "original_index": 2409,
    "log_distance": 41726.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.55,
    "depth_percent": 17,
    "length": 0.83,
    "width": 1.1,
    "joint_number": 11590
  },
  {
    "original_index": 2411,
    "log_distance": 41741.6,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.25,
    "depth_percent": 33,
    "length": 0.89,
    "width": 3.37,
    "joint_number": 11600
  },
  {
    "original_index": 2412,
    "log_distance": 41741.77,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.2,
    "depth_percent": 17,
    "length": 2.12,
    "width": 2.18,
    "joint_number": 11600
  },
  {
    "original_index": 2413,
    "log_distance": 41741.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.4,
    "depth_percent": 18,
    "length": 0.91,
    "width": 1.69,
    "joint_number": 11600
  },
  {
    "original_index": 2414,
    "log_distance": 41742.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.7667,
    "depth_percent": 26,
    "length": 2.05,
    "width": 1.42,
    "joint_number": 11600
  },
  {
    "original_index": 2415,
    "log_distance": 41742.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.6,
    "depth_percent": 14,
    "length": 0.55,
    "width": 0.59,
    "joint_number": 11600
  },
  {
    "original_index": 2416,
    "log_distance": 41742.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.8333,
    "depth_percent": 15,
    "length": 0.59,
    "width": 1.1,
    "joint_number": 11600
  },
  {
    "original_index": 2417,
    "log_distance": 41742.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8833,
    "depth_percent": 16,
    "length": 0.71,
    "width": 0.87,
    "joint_number": 11600
  },
  {
    "original_index": 2419,
    "log_distance": 41742.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.3333,
    "depth_percent": 25,
    "length": 0.55,
    "width": 1.02,
    "joint_number": 11600
  },
  {
    "original_index": 2420,
    "log_distance": 41742.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.3167,
    "depth_percent": 23,
    "length": 0.79,
    "width": 2.09,
    "joint_number": 11600
  },
  {
    "original_index": 2421,
    "log_distance": 41742.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1833,
    "depth_percent": 19,
    "length": 0.55,
    "width": 0.94,
    "joint_number": 11600
  },
  {
    "original_index": 2424,
    "log_distance": 41746.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.6167,
    "depth_percent": 17,
    "length": 0.63,
    "width": 0.94,
    "joint_number": 11610
  },
  {
    "original_index": 2425,
    "log_distance": 41747.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.9,
    "depth_percent": 25,
    "length": 0.79,
    "width": 1.26,
    "joint_number": 11610
  },
  {
    "original_index": 2426,
    "log_distance": 41747.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.7667,
    "depth_percent": 10,
    "length": 0.59,
    "width": 1.26,
    "joint_number": 11610
  },
  {
    "original_index": 2429,
    "log_distance": 41768.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.45,
    "depth_percent": 12,
    "length": 1.26,
    "width": 2.13,
    "joint_number": 11610
  },
  {
    "original_index": 2433,
    "log_distance": 41769.36,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5,
    "depth_percent": 23,
    "length": 0.77,
    "width": 2.31,
    "joint_number": 11610
  },
  {
    "original_index": 2434,
    "log_distance": 41769.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9,
    "depth_percent": 11,
    "length": 0.43,
    "width": 1.34,
    "joint_number": 11610
  },
  {
    "original_index": 2435,
    "log_distance": 41769.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.75,
    "depth_percent": 36,
    "length": 0.71,
    "width": 1.54,
    "joint_number": 11610
  },
  {
    "original_index": 2436,
    "log_distance": 41769.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.75,
    "depth_percent": 13,
    "length": 0.35,
    "width": 0.94,
    "joint_number": 11610
  },
  {
    "original_index": 2437,
    "log_distance": 41769.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3667,
    "depth_percent": 12,
    "length": 0.51,
    "width": 1.26,
    "joint_number": 11610
  },
  {
    "original_index": 2438,
    "log_distance": 41770.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1667,
    "depth_percent": 10,
    "length": 0.59,
    "width": 0.98,
    "joint_number": 11610
  },
  {
    "original_index": 2439,
    "log_distance": 41770.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2833,
    "depth_percent": 24,
    "length": 0.94,
    "width": 1.46,
    "joint_number": 11610
  },
  {
    "original_index": 2442,
    "log_distance": 41771.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8833,
    "depth_percent": 10,
    "length": 1.38,
    "width": 4.41,
    "joint_number": 11620
  },
  {
    "original_index": 2443,
    "log_distance": 41771.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.9,
    "depth_percent": 42,
    "length": 0.83,
    "width": 1.68,
    "joint_number": 11620
  },
  {
    "original_index": 2444,
    "log_distance": 41771.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.65,
    "depth_percent": 16,
    "length": 1.42,
    "width": 1.53,
    "joint_number": 11620
  },
  {
    "original_index": 2446,
    "log_distance": 41804.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9667,
    "depth_percent": 19,
    "length": 1.42,
    "width": 1.65,
    "joint_number": 11620
  },
  {
    "original_index": 2447,
    "log_distance": 41804.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0333,
    "depth_percent": 11,
    "length": 0.59,
    "width": 1.06,
    "joint_number": 11620
  },
  {
    "original_index": 2448,
    "log_distance": 41805.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1667,
    "depth_percent": 11,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 11620
  },
  {
    "original_index": 2450,
    "log_distance": 41812.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8833,
    "depth_percent": 10,
    "length": 0.79,
    "width": 1.14,
    "joint_number": 11630
  },
  {
    "original_index": 2451,
    "log_distance": 41812.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4833,
    "depth_percent": 18,
    "length": 0.71,
    "width": 1.5,
    "joint_number": 11630
  },
  {
    "original_index": 2452,
    "log_distance": 41813.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.85,
    "depth_percent": 11,
    "length": 2.05,
    "width": 1.73,
    "joint_number": 11630
  },
  {
    "original_index": 2453,
    "log_distance": 41839.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.7333,
    "depth_percent": 16,
    "length": 0.91,
    "width": 1.26,
    "joint_number": 11630
  },
  {
    "original_index": 2454,
    "log_distance": 41839.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.4167,
    "depth_percent": 14,
    "length": 0.94,
    "width": 0.67,
    "joint_number": 11630
  },
  {
    "original_index": 2457,
    "log_distance": 41852.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1333,
    "depth_percent": 14,
    "length": 0.91,
    "width": 2.17,
    "joint_number": 11640
  },
  {
    "original_index": 2458,
    "log_distance": 41852.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4833,
    "depth_percent": 10,
    "length": 0.51,
    "width": 1.22,
    "joint_number": 11640
  },
  {
    "original_index": 2460,
    "log_distance": 41930.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8,
    "depth_percent": 27,
    "length": 0.75,
    "width": 1.46,
    "joint_number": 11650
  },
  {
    "original_index": 2462,
    "log_distance": 41931.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1167,
    "depth_percent": 26,
    "length": 0.83,
    "width": 3.66,
    "joint_number": 11660
  },
  {
    "original_index": 2463,
    "log_distance": 41931.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3667,
    "depth_percent": 23,
    "length": 0.55,
    "width": 1.73,
    "joint_number": 11660
  },
  {
    "original_index": 2464,
    "log_distance": 41931.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5833,
    "depth_percent": 10,
    "length": 0.59,
    "width": 2.72,
    "joint_number": 11660
  },
  {
    "original_index": 2465,
    "log_distance": 41931.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.45,
    "depth_percent": 11,
    "length": 0.47,
    "width": 1.18,
    "joint_number": 11660
  },
  {
    "original_index": 2467,
    "log_distance": 41985.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.25,
    "depth_percent": 14,
    "length": 1.85,
    "width": 2.05,
    "joint_number": 11670
  },
  {
    "original_index": 2468,
    "log_distance": 41985.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 12,
    "length": 1.22,
    "width": 1.97,
    "joint_number": 11670
  },
  {
    "original_index": 2469,
    "log_distance": 42010.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.85,
    "depth_percent": 23,
    "length": 0.79,
    "width": 1.97,
    "joint_number": 11670
  },
  {
    "original_index": 2500,
    "log_distance": 42952.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8333,
    "depth_percent": 16,
    "length": 0.91,
    "width": 1.93,
    "joint_number": 11930
  },
  {
    "original_index": 2507,
    "log_distance": 43171.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3833,
    "depth_percent": 25,
    "length": 0.79,
    "width": 1.38,
    "joint_number": 11990
  },
  {
    "original_index": 2522,
    "log_distance": 43585.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6833,
    "depth_percent": 15,
    "length": 0.55,
    "width": 0.94,
    "joint_number": 12120
  },
  {
    "original_index": 2524,
    "log_distance": 43608.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4,
    "depth_percent": 11,
    "length": 1.22,
    "width": 1.38,
    "joint_number": 12130
  },
  {
    "original_index": 2525,
    "log_distance": 43608.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0667,
    "depth_percent": 17,
    "length": 0.63,
    "width": 1.1,
    "joint_number": 12130
  },
  {
    "original_index": 2530,
    "log_distance": 43667.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6167,
    "depth_percent": 29,
    "length": 0.83,
    "width": 0.98,
    "joint_number": 12150
  },
  {
    "original_index": 2532,
    "log_distance": 43716.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8,
    "depth_percent": 39,
    "length": 0.91,
    "width": 1.77,
    "joint_number": 12160
  },
  {
    "original_index": 2533,
    "log_distance": 43734.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1167,
    "depth_percent": 10,
    "length": 0.32,
    "width": 0.67,
    "joint_number": 12160
  },
  {
    "original_index": 2534,
    "log_distance": 43735.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.2167,
    "depth_percent": 11,
    "length": 0.79,
    "width": 1.14,
    "joint_number": 12160
  },
  {
    "original_index": 2535,
    "log_distance": 43736.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5,
    "depth_percent": 29,
    "length": 0.91,
    "width": 1.5,
    "joint_number": 12160
  },
  {
    "original_index": 2536,
    "log_distance": 43736.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3833,
    "depth_percent": 11,
    "length": 0.94,
    "width": 1.81,
    "joint_number": 12160
  },
  {
    "original_index": 2537,
    "log_distance": 43736.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.4833,
    "depth_percent": 12,
    "length": 0.67,
    "width": 1.02,
    "joint_number": 12160
  },
  {
    "original_index": 2538,
    "log_distance": 43736.9,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5,
    "depth_percent": 17,
    "length": 0.94,
    "width": 1.22,
    "joint_number": 12160
  },
  {
    "original_index": 2539,
    "log_distance": 43745.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.15,
    "depth_percent": 21,
    "length": 0.67,
    "width": 2.05,
    "joint_number": 12160
  },
  {
    "original_index": 2540,
    "log_distance": 43745.04,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.9333,
    "depth_percent": 38,
    "length": 1.92,
    "width": 4,
    "joint_number": 12160
  },
  {
    "original_index": 2541,
    "log_distance": 43745.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5833,
    "depth_percent": 13,
    "length": 0.71,
    "width": 1.02,
    "joint_number": 12160
  },
  {
    "original_index": 2543,
    "log_distance": 43746.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9167,
    "depth_percent": 12,
    "length": 0.75,
    "width": 0.63,
    "joint_number": 12170
  },
  {
    "original_index": 2544,
    "log_distance": 43746.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2667,
    "depth_percent": 14,
    "length": 1.77,
    "width": 1.1,
    "joint_number": 12170
  },
  {
    "original_index": 2545,
    "log_distance": 43746.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2333,
    "depth_percent": 34,
    "length": 1.14,
    "width": 2.36,
    "joint_number": 12170
  },
  {
    "original_index": 2546,
    "log_distance": 43748.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4333,
    "depth_percent": 25,
    "length": 0.83,
    "width": 1.14,
    "joint_number": 12170
  },
  {
    "original_index": 2547,
    "log_distance": 43749.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.05,
    "depth_percent": 13,
    "length": 1.1,
    "width": 1.42,
    "joint_number": 12170
  },
  {
    "original_index": 2548,
    "log_distance": 43750.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5,
    "depth_percent": 10,
    "length": 1.1,
    "width": 1.34,
    "joint_number": 12170
  },
  {
    "original_index": 2549,
    "log_distance": 43750.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0333,
    "depth_percent": 16,
    "length": 1.06,
    "width": 1.46,
    "joint_number": 12170
  },
  {
    "original_index": 2550,
    "log_distance": 43751.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.3667,
    "depth_percent": 17,
    "length": 1.14,
    "width": 1.3,
    "joint_number": 12170
  },
  {
    "original_index": 2551,
    "log_distance": 43752.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8,
    "depth_percent": 11,
    "length": 1.18,
    "width": 1.53,
    "joint_number": 12170
  },
  {
    "original_index": 2552,
    "log_distance": 43752.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4167,
    "depth_percent": 14,
    "length": 1.38,
    "width": 1.89,
    "joint_number": 12170
  },
  {
    "original_index": 2553,
    "log_distance": 43756.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0667,
    "depth_percent": 12,
    "length": 1.61,
    "width": 1.81,
    "joint_number": 12170
  },
  {
    "original_index": 2556,
    "log_distance": 43814.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8,
    "depth_percent": 15,
    "length": 2.09,
    "width": 1.89,
    "joint_number": 12190
  },
  {
    "original_index": 2562,
    "log_distance": 43990.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7333,
    "depth_percent": 43,
    "length": 1.73,
    "width": 1.5,
    "joint_number": 12230
  },
  {
    "original_index": 2563,
    "log_distance": 43990.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2167,
    "depth_percent": 16,
    "length": 0.87,
    "width": 1.61,
    "joint_number": 12230
  },
  {
    "original_index": 2564,
    "log_distance": 43990.9,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5667,
    "depth_percent": 21,
    "length": 0.32,
    "width": 1.58,
    "joint_number": 12230
  },
  {
    "original_index": 2565,
    "log_distance": 43990.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.3333,
    "depth_percent": 12,
    "length": 0.91,
    "width": 1.42,
    "joint_number": 12230
  },
  {
    "original_index": 2566,
    "log_distance": 43991.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.25,
    "depth_percent": 23,
    "length": 0.79,
    "width": 1.14,
    "joint_number": 12230
  },
  {
    "original_index": 2567,
    "log_distance": 43991.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.65,
    "depth_percent": 40,
    "length": 1.18,
    "width": 1.81,
    "joint_number": 12230
  },
  {
    "original_index": 2568,
    "log_distance": 43991.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2667,
    "depth_percent": 16,
    "length": 0.59,
    "width": 1.06,
    "joint_number": 12230
  },
  {
    "original_index": 2569,
    "log_distance": 43991.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 35,
    "length": 0.63,
    "width": 1.3,
    "joint_number": 12230
  },
  {
    "original_index": 2570,
    "log_distance": 43992.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.65,
    "depth_percent": 22,
    "length": 1.5,
    "width": 1.85,
    "joint_number": 12230
  },
  {
    "original_index": 2571,
    "log_distance": 43992.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1333,
    "depth_percent": 38,
    "length": 1.89,
    "width": 1.46,
    "joint_number": 12230
  },
  {
    "original_index": 2572,
    "log_distance": 43992.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 15,
    "length": 1.18,
    "width": 1.5,
    "joint_number": 12230
  },
  {
    "original_index": 2573,
    "log_distance": 43993.12,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.1,
    "depth_percent": 19,
    "length": 1.43,
    "width": 2.39,
    "joint_number": 12230
  },
  {
    "original_index": 2574,
    "log_distance": 43993.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3,
    "depth_percent": 16,
    "length": 1.1,
    "width": 1.53,
    "joint_number": 12230
  },
  {
    "original_index": 2575,
    "log_distance": 43993.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.65,
    "depth_percent": 16,
    "length": 0.83,
    "width": 1.14,
    "joint_number": 12230
  },
  {
    "original_index": 2576,
    "log_distance": 43993.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.35,
    "depth_percent": 24,
    "length": 1.38,
    "width": 1.58,
    "joint_number": 12230
  },
  {
    "original_index": 2577,
    "log_distance": 43995.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8167,
    "depth_percent": 12,
    "length": 1.06,
    "width": 1.73,
    "joint_number": 12230
  },
  {
    "original_index": 2578,
    "log_distance": 43995.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8,
    "depth_percent": 32,
    "length": 1.02,
    "width": 1.34,
    "joint_number": 12230
  },
  {
    "original_index": 2579,
    "log_distance": 43996.52,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3,
    "depth_percent": 16,
    "length": 1.46,
    "width": 1.73,
    "joint_number": 12230
  },
  {
    "original_index": 2580,
    "log_distance": 43996.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8333,
    "depth_percent": 44,
    "length": 0.75,
    "width": 1.02,
    "joint_number": 12230
  },
  {
    "original_index": 2581,
    "log_distance": 43996.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3167,
    "depth_percent": 27,
    "length": 1.89,
    "width": 1.3,
    "joint_number": 12230
  },
  {
    "original_index": 2582,
    "log_distance": 43997.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3,
    "depth_percent": 14,
    "length": 1.3,
    "width": 1.65,
    "joint_number": 12230
  },
  {
    "original_index": 2584,
    "log_distance": 43997.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.25,
    "depth_percent": 13,
    "length": 2.36,
    "width": 1.42,
    "joint_number": 12230
  },
  {
    "original_index": 2585,
    "log_distance": 43998.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9,
    "depth_percent": 18,
    "length": 1.81,
    "width": 2.05,
    "joint_number": 12230
  },
  {
    "original_index": 2586,
    "log_distance": 43999.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3,
    "depth_percent": 26,
    "length": 2.21,
    "width": 1.53,
    "joint_number": 12230
  },
  {
    "original_index": 2587,
    "log_distance": 44000.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.35,
    "depth_percent": 16,
    "length": 2.01,
    "width": 1.34,
    "joint_number": 12230
  },
  {
    "original_index": 2588,
    "log_distance": 44000.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7833,
    "depth_percent": 10,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 12230
  },
  {
    "original_index": 2589,
    "log_distance": 44000.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3167,
    "depth_percent": 23,
    "length": 1.85,
    "width": 1.65,
    "joint_number": 12230
  },
  {
    "original_index": 2590,
    "log_distance": 44000.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.25,
    "depth_percent": 17,
    "length": 0.87,
    "width": 1.38,
    "joint_number": 12230
  },
  {
    "original_index": 2591,
    "log_distance": 44000.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.5167,
    "depth_percent": 16,
    "length": 0.87,
    "width": 1.26,
    "joint_number": 12230
  },
  {
    "original_index": 2592,
    "log_distance": 44000.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.25,
    "depth_percent": 16,
    "length": 0.79,
    "width": 1.42,
    "joint_number": 12230
  },
  {
    "original_index": 2593,
    "log_distance": 44001.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3333,
    "depth_percent": 11,
    "length": 0.94,
    "width": 1.46,
    "joint_number": 12230
  },
  {
    "original_index": 2594,
    "log_distance": 44001.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.2833,
    "depth_percent": 14,
    "length": 1.42,
    "width": 1.77,
    "joint_number": 12230
  },
  {
    "original_index": 2595,
    "log_distance": 44002.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3,
    "depth_percent": 13,
    "length": 1.81,
    "width": 2.05,
    "joint_number": 12230
  },
  {
    "original_index": 2596,
    "log_distance": 44002.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.8333,
    "depth_percent": 14,
    "length": 1.73,
    "width": 0.59,
    "joint_number": 12230
  },
  {
    "original_index": 2597,
    "log_distance": 44002.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7333,
    "depth_percent": 14,
    "length": 0.71,
    "width": 1.18,
    "joint_number": 12230
  },
  {
    "original_index": 2598,
    "log_distance": 44002.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.1,
    "depth_percent": 12,
    "length": 0.94,
    "width": 1.61,
    "joint_number": 12230
  },
  {
    "original_index": 2599,
    "log_distance": 44003.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.45,
    "depth_percent": 15,
    "length": 0.87,
    "width": 1.34,
    "joint_number": 12230
  },
  {
    "original_index": 2600,
    "log_distance": 44003.16,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.2167,
    "depth_percent": 14,
    "length": 0.83,
    "width": 1.42,
    "joint_number": 12230
  },
  {
    "original_index": 2601,
    "log_distance": 44003.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4667,
    "depth_percent": 11,
    "length": 0.79,
    "width": 1.34,
    "joint_number": 12230
  },
  {
    "original_index": 2602,
    "log_distance": 44003.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.2833,
    "depth_percent": 11,
    "length": 0.63,
    "width": 1.06,
    "joint_number": 12230
  },
  {
    "original_index": 2603,
    "log_distance": 44003.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4667,
    "depth_percent": 11,
    "length": 1.42,
    "width": 1.73,
    "joint_number": 12230
  },
  {
    "original_index": 2604,
    "log_distance": 44003.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3167,
    "depth_percent": 23,
    "length": 1.58,
    "width": 2.05,
    "joint_number": 12230
  },
  {
    "original_index": 2605,
    "log_distance": 44003.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.4833,
    "depth_percent": 23,
    "length": 0.83,
    "width": 1.18,
    "joint_number": 12230
  },
  {
    "original_index": 2606,
    "log_distance": 44004.25,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.55,
    "depth_percent": 26,
    "length": 0.32,
    "width": 1.14,
    "joint_number": 12230
  },
  {
    "original_index": 2607,
    "log_distance": 44004.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3167,
    "depth_percent": 10,
    "length": 1.42,
    "width": 1.53,
    "joint_number": 12230
  },
  {
    "original_index": 2608,
    "log_distance": 44004.55,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5,
    "depth_percent": 15,
    "length": 1.58,
    "width": 1.81,
    "joint_number": 12230
  },
  {
    "original_index": 2609,
    "log_distance": 44004.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.55,
    "depth_percent": 37,
    "length": 0.63,
    "width": 1.06,
    "joint_number": 12230
  },
  {
    "original_index": 2610,
    "log_distance": 44005.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6667,
    "depth_percent": 29,
    "length": 0.55,
    "width": 1.06,
    "joint_number": 12230
  },
  {
    "original_index": 2611,
    "log_distance": 44005.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5667,
    "depth_percent": 22,
    "length": 0.67,
    "width": 1.18,
    "joint_number": 12230
  },
  {
    "original_index": 2612,
    "log_distance": 44005.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.0833,
    "depth_percent": 11,
    "length": 1.81,
    "width": 0.59,
    "joint_number": 12230
  },
  {
    "original_index": 2613,
    "log_distance": 44005.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.5,
    "depth_percent": 25,
    "length": 0.94,
    "width": 1.18,
    "joint_number": 12230
  },
  {
    "original_index": 2614,
    "log_distance": 44005.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5167,
    "depth_percent": 22,
    "length": 1.06,
    "width": 1.42,
    "joint_number": 12230
  },
  {
    "original_index": 2615,
    "log_distance": 44006.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7833,
    "depth_percent": 13,
    "length": 0.83,
    "width": 1.3,
    "joint_number": 12230
  },
  {
    "original_index": 2616,
    "log_distance": 44006.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5667,
    "depth_percent": 30,
    "length": 1.22,
    "width": 1.42,
    "joint_number": 12230
  },
  {
    "original_index": 2618,
    "log_distance": 44006.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.6833,
    "depth_percent": 25,
    "length": 1.06,
    "width": 1.46,
    "joint_number": 12230
  },
  {
    "original_index": 2619,
    "log_distance": 44007.63,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 2.3,
    "depth_percent": 36,
    "length": 1.81,
    "width": 4.15,
    "joint_number": 12230
  },
  {
    "original_index": 2620,
    "log_distance": 44007.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4167,
    "depth_percent": 17,
    "length": 0.63,
    "width": 0.91,
    "joint_number": 12230
  },
  {
    "original_index": 2621,
    "log_distance": 44008.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.55,
    "depth_percent": 21,
    "length": 0.87,
    "width": 1.34,
    "joint_number": 12230
  },
  {
    "original_index": 2622,
    "log_distance": 44008.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.6167,
    "depth_percent": 15,
    "length": 0.98,
    "width": 1.46,
    "joint_number": 12230
  },
  {
    "original_index": 2623,
    "log_distance": 44008.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.9,
    "depth_percent": 17,
    "length": 0.71,
    "width": 1.14,
    "joint_number": 12230
  },
  {
    "original_index": 2624,
    "log_distance": 44008.81,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.1667,
    "depth_percent": 28,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 12230
  },
  {
    "original_index": 2625,
    "log_distance": 44008.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1833,
    "depth_percent": 53,
    "length": 0.59,
    "width": 1.06,
    "joint_number": 12230
  },
  {
    "original_index": 2626,
    "log_distance": 44009.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.2667,
    "depth_percent": 38,
    "length": 0.67,
    "width": 1.18,
    "joint_number": 12230
  },
  {
    "original_index": 2627,
    "log_distance": 44009.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.6333,
    "depth_percent": 13,
    "length": 0.67,
    "width": 0.98,
    "joint_number": 12230
  },
  {
    "original_index": 2628,
    "log_distance": 44009.28,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 2.5333,
    "depth_percent": 22,
    "length": 2.32,
    "width": 1.59,
    "joint_number": 12230
  },
  {
    "original_index": 2629,
    "log_distance": 44009.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.4167,
    "depth_percent": 24,
    "length": 0.75,
    "width": 1.1,
    "joint_number": 12230
  },
  {
    "original_index": 2631,
    "log_distance": 44011.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1667,
    "depth_percent": 15,
    "length": 1.06,
    "width": 1.61,
    "joint_number": 12230
  },
  {
    "original_index": 2632,
    "log_distance": 44012.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.4833,
    "depth_percent": 17,
    "length": 1.38,
    "width": 1.53,
    "joint_number": 12230
  },
  {
    "original_index": 2633,
    "log_distance": 44013.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.3667,
    "depth_percent": 12,
    "length": 1.1,
    "width": 1.89,
    "joint_number": 12230
  },
  {
    "original_index": 2635,
    "log_distance": 44018.59,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 2.25,
    "depth_percent": 43,
    "length": 2.18,
    "width": 2.98,
    "joint_number": 12240
  },
  {
    "original_index": 2636,
    "log_distance": 44019.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4833,
    "depth_percent": 29,
    "length": 0.79,
    "width": 1.26,
    "joint_number": 12240
  },
  {
    "original_index": 2637,
    "log_distance": 44019.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.45,
    "depth_percent": 11,
    "length": 1.22,
    "width": 1.34,
    "joint_number": 12240
  },
  {
    "original_index": 2638,
    "log_distance": 44020.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5167,
    "depth_percent": 23,
    "length": 0.79,
    "width": 1.53,
    "joint_number": 12240
  },
  {
    "original_index": 2639,
    "log_distance": 44020.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.6,
    "depth_percent": 13,
    "length": 0.71,
    "width": 1.18,
    "joint_number": 12240
  },
  {
    "original_index": 2640,
    "log_distance": 44021.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.5667,
    "depth_percent": 13,
    "length": 0.94,
    "width": 1.61,
    "joint_number": 12240
  },
  {
    "original_index": 2641,
    "log_distance": 44021.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5667,
    "depth_percent": 24,
    "length": 0.43,
    "width": 0.98,
    "joint_number": 12240
  },
  {
    "original_index": 2642,
    "log_distance": 44021.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3,
    "depth_percent": 16,
    "length": 0.98,
    "width": 1.81,
    "joint_number": 12240
  },
  {
    "original_index": 2643,
    "log_distance": 44023.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.05,
    "depth_percent": 12,
    "length": 0.32,
    "width": 0.71,
    "joint_number": 12240
  },
  {
    "original_index": 2644,
    "log_distance": 44023.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.85,
    "depth_percent": 11,
    "length": 0.32,
    "width": 0.59,
    "joint_number": 12240
  },
  {
    "original_index": 2645,
    "log_distance": 44023.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4833,
    "depth_percent": 11,
    "length": 1.3,
    "width": 1.34,
    "joint_number": 12240
  },
  {
    "original_index": 2646,
    "log_distance": 44024.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4667,
    "depth_percent": 15,
    "length": 0.71,
    "width": 1.02,
    "joint_number": 12240
  },
  {
    "original_index": 2647,
    "log_distance": 44024.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.25,
    "depth_percent": 15,
    "length": 1.14,
    "width": 1.5,
    "joint_number": 12240
  },
  {
    "original_index": 2648,
    "log_distance": 44024.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7,
    "depth_percent": 11,
    "length": 2.01,
    "width": 0.75,
    "joint_number": 12240
  },
  {
    "original_index": 2649,
    "log_distance": 44026.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3167,
    "depth_percent": 14,
    "length": 1.65,
    "width": 1.69,
    "joint_number": 12240
  },
  {
    "original_index": 2650,
    "log_distance": 44026.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.75,
    "depth_percent": 17,
    "length": 0.67,
    "width": 1.02,
    "joint_number": 12240
  },
  {
    "original_index": 2651,
    "log_distance": 44027.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3667,
    "depth_percent": 19,
    "length": 1.53,
    "width": 1.46,
    "joint_number": 12240
  },
  {
    "original_index": 2652,
    "log_distance": 44028.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4167,
    "depth_percent": 10,
    "length": 1.02,
    "width": 1.14,
    "joint_number": 12240
  },
  {
    "original_index": 2653,
    "log_distance": 44029.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4167,
    "depth_percent": 10,
    "length": 2.13,
    "width": 1.06,
    "joint_number": 12240
  },
  {
    "original_index": 2654,
    "log_distance": 44031.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.2833,
    "depth_percent": 10,
    "length": 1.02,
    "width": 1.46,
    "joint_number": 12240
  },
  {
    "original_index": 2655,
    "log_distance": 44032.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.35,
    "depth_percent": 15,
    "length": 1.46,
    "width": 1.38,
    "joint_number": 12240
  },
  {
    "original_index": 2656,
    "log_distance": 44033.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.35,
    "depth_percent": 15,
    "length": 1.77,
    "width": 1.73,
    "joint_number": 12240
  },
  {
    "original_index": 2657,
    "log_distance": 44033.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.2833,
    "depth_percent": 10,
    "length": 0.98,
    "width": 1.3,
    "joint_number": 12240
  },
  {
    "original_index": 2658,
    "log_distance": 44033.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.35,
    "depth_percent": 11,
    "length": 0.51,
    "width": 0.67,
    "joint_number": 12240
  },
  {
    "original_index": 2659,
    "log_distance": 44033.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.3333,
    "depth_percent": 12,
    "length": 0.47,
    "width": 0.67,
    "joint_number": 12240
  },
  {
    "original_index": 2660,
    "log_distance": 44035.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1833,
    "depth_percent": 14,
    "length": 1.02,
    "width": 1.34,
    "joint_number": 12240
  },
  {
    "original_index": 2661,
    "log_distance": 44037.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.55,
    "depth_percent": 11,
    "length": 0.63,
    "width": 0.91,
    "joint_number": 12240
  },
  {
    "original_index": 2662,
    "log_distance": 44038.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8333,
    "depth_percent": 13,
    "length": 1.02,
    "width": 1.69,
    "joint_number": 12240
  },
  {
    "original_index": 2663,
    "log_distance": 44041.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1167,
    "depth_percent": 17,
    "length": 0.43,
    "width": 1.58,
    "joint_number": 12240
  },
  {
    "original_index": 2666,
    "log_distance": 44048.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.85,
    "depth_percent": 24,
    "length": 0.32,
    "width": 1.18,
    "joint_number": 12240
  },
  {
    "original_index": 2667,
    "log_distance": 44048.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.85,
    "depth_percent": 15,
    "length": 0.71,
    "width": 1.14,
    "joint_number": 12240
  },
  {
    "original_index": 2668,
    "log_distance": 44049.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.85,
    "depth_percent": 10,
    "length": 0.87,
    "width": 1.18,
    "joint_number": 12240
  },
  {
    "original_index": 2669,
    "log_distance": 44049.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.35,
    "depth_percent": 11,
    "length": 0.67,
    "width": 1.18,
    "joint_number": 12240
  },
  {
    "original_index": 2670,
    "log_distance": 44051.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.25,
    "depth_percent": 17,
    "length": 0.63,
    "width": 1.14,
    "joint_number": 12240
  },
  {
    "original_index": 2671,
    "log_distance": 44053.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.35,
    "depth_percent": 10,
    "length": 1.73,
    "width": 0.59,
    "joint_number": 12240
  },
  {
    "original_index": 2672,
    "log_distance": 44053.35,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 10.2833,
    "depth_percent": 28,
    "length": 1.46,
    "width": 4.09,
    "joint_number": 12240
  },
  {
    "original_index": 2673,
    "log_distance": 44053.36,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.95,
    "depth_percent": 28,
    "length": 1.54,
    "width": 4.17,
    "joint_number": 12240
  },
  {
    "original_index": 2674,
    "log_distance": 44053.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8,
    "depth_percent": 11,
    "length": 0.83,
    "width": 2.01,
    "joint_number": 12240
  },
  {
    "original_index": 2675,
    "log_distance": 44053.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1167,
    "depth_percent": 10,
    "length": 1.14,
    "width": 0.71,
    "joint_number": 12240
  },
  {
    "original_index": 2676,
    "log_distance": 44053.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4833,
    "depth_percent": 14,
    "length": 0.75,
    "width": 1.65,
    "joint_number": 12240
  },
  {
    "original_index": 2677,
    "log_distance": 44053.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.2333,
    "depth_percent": 11,
    "length": 0.63,
    "width": 0.94,
    "joint_number": 12240
  },
  {
    "original_index": 2679,
    "log_distance": 44055.16,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6333,
    "depth_percent": 13,
    "length": 1.46,
    "width": 0.59,
    "joint_number": 12250
  },
  {
    "original_index": 2680,
    "log_distance": 44055.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.6167,
    "depth_percent": 19,
    "length": 0.79,
    "width": 2.21,
    "joint_number": 12250
  },
  {
    "original_index": 2681,
    "log_distance": 44055.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.6333,
    "depth_percent": 26,
    "length": 1.53,
    "width": 1.22,
    "joint_number": 12250
  },
  {
    "original_index": 2682,
    "log_distance": 44055.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1167,
    "depth_percent": 11,
    "length": 1.06,
    "width": 2.05,
    "joint_number": 12250
  },
  {
    "original_index": 2683,
    "log_distance": 44055.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1667,
    "depth_percent": 14,
    "length": 0.63,
    "width": 1.69,
    "joint_number": 12250
  },
  {
    "original_index": 2687,
    "log_distance": 44126.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1667,
    "depth_percent": 41,
    "length": 0.83,
    "width": 3.9,
    "joint_number": 12270
  },
  {
    "original_index": 2689,
    "log_distance": 44170.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.65,
    "depth_percent": 11,
    "length": 0.91,
    "width": 1.3,
    "joint_number": 12280
  },
  {
    "original_index": 2690,
    "log_distance": 44171.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8667,
    "depth_percent": 11,
    "length": 1.61,
    "width": 4.33,
    "joint_number": 12280
  },
  {
    "original_index": 2691,
    "log_distance": 44171.18,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.8833,
    "depth_percent": 24,
    "length": 2.84,
    "width": 4.11,
    "joint_number": 12280
  },
  {
    "original_index": 2692,
    "log_distance": 44171.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6333,
    "depth_percent": 13,
    "length": 1.5,
    "width": 1.58,
    "joint_number": 12280
  },
  {
    "original_index": 2693,
    "log_distance": 44173.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4,
    "depth_percent": 13,
    "length": 0.79,
    "width": 1.38,
    "joint_number": 12280
  },
  {
    "original_index": 2695,
    "log_distance": 44204.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9833,
    "depth_percent": 28,
    "length": 0.67,
    "width": 2.72,
    "joint_number": 12280
  },
  {
    "original_index": 2699,
    "log_distance": 44286.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.95,
    "depth_percent": 11,
    "length": 0.91,
    "width": 1.1,
    "joint_number": 12310
  },
  {
    "original_index": 2710,
    "log_distance": 44708.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3667,
    "depth_percent": 49,
    "length": 1.02,
    "width": 1.39,
    "joint_number": 12410
  },
  {
    "original_index": 2711,
    "log_distance": 44708.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8833,
    "depth_percent": 31,
    "length": 0.75,
    "width": 1.3,
    "joint_number": 12410
  },
  {
    "original_index": 2712,
    "log_distance": 44708.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3833,
    "depth_percent": 11,
    "length": 0.51,
    "width": 0.59,
    "joint_number": 12410
  },
  {
    "original_index": 2713,
    "log_distance": 44708.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8,
    "depth_percent": 28,
    "length": 0.63,
    "width": 1.06,
    "joint_number": 12410
  },
  {
    "original_index": 2714,
    "log_distance": 44709.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.35,
    "depth_percent": 13,
    "length": 1.02,
    "width": 1.14,
    "joint_number": 12410
  },
  {
    "original_index": 2715,
    "log_distance": 44709.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8333,
    "depth_percent": 23,
    "length": 0.71,
    "width": 1.26,
    "joint_number": 12410
  },
  {
    "original_index": 2717,
    "log_distance": 44709.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8167,
    "depth_percent": 10,
    "length": 0.32,
    "width": 0.67,
    "joint_number": 12420
  },
  {
    "original_index": 2718,
    "log_distance": 44710,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4,
    "depth_percent": 29,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 12420
  },
  {
    "original_index": 2719,
    "log_distance": 44710.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9667,
    "depth_percent": 26,
    "length": 0.63,
    "width": 1.06,
    "joint_number": 12420
  },
  {
    "original_index": 2720,
    "log_distance": 44710.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5833,
    "depth_percent": 16,
    "length": 0.55,
    "width": 0.79,
    "joint_number": 12420
  },
  {
    "original_index": 2721,
    "log_distance": 44710.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8833,
    "depth_percent": 14,
    "length": 0.55,
    "width": 0.91,
    "joint_number": 12420
  },
  {
    "original_index": 2722,
    "log_distance": 44711.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.85,
    "depth_percent": 17,
    "length": 0.75,
    "width": 1.3,
    "joint_number": 12420
  },
  {
    "original_index": 2723,
    "log_distance": 44712.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8167,
    "depth_percent": 13,
    "length": 0.55,
    "width": 1.06,
    "joint_number": 12420
  },
  {
    "original_index": 2724,
    "log_distance": 44712.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4167,
    "depth_percent": 11,
    "length": 0.43,
    "width": 0.94,
    "joint_number": 12420
  },
  {
    "original_index": 2725,
    "log_distance": 44712.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5833,
    "depth_percent": 12,
    "length": 0.47,
    "width": 0.79,
    "joint_number": 12420
  },
  {
    "original_index": 2726,
    "log_distance": 44712.73,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4333,
    "depth_percent": 10,
    "length": 1.61,
    "width": 0.67,
    "joint_number": 12420
  },
  {
    "original_index": 2727,
    "log_distance": 44712.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8167,
    "depth_percent": 35,
    "length": 0.63,
    "width": 1.1,
    "joint_number": 12420
  },
  {
    "original_index": 2728,
    "log_distance": 44713.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6833,
    "depth_percent": 15,
    "length": 0.67,
    "width": 1.26,
    "joint_number": 12420
  },
  {
    "original_index": 2729,
    "log_distance": 44718.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.15,
    "depth_percent": 13,
    "length": 0.55,
    "width": 1.06,
    "joint_number": 12420
  },
  {
    "original_index": 2730,
    "log_distance": 44718.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1333,
    "depth_percent": 19,
    "length": 0.87,
    "width": 1.22,
    "joint_number": 12420
  },
  {
    "original_index": 2731,
    "log_distance": 44718.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9833,
    "depth_percent": 16,
    "length": 0.91,
    "width": 1.42,
    "joint_number": 12420
  },
  {
    "original_index": 2732,
    "log_distance": 44718.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7167,
    "depth_percent": 23,
    "length": 1.42,
    "width": 1.69,
    "joint_number": 12420
  },
  {
    "original_index": 2733,
    "log_distance": 44718.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7,
    "depth_percent": 12,
    "length": 1.18,
    "width": 1.5,
    "joint_number": 12420
  },
  {
    "original_index": 2734,
    "log_distance": 44719.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8333,
    "depth_percent": 30,
    "length": 0.98,
    "width": 1.38,
    "joint_number": 12420
  },
  {
    "original_index": 2735,
    "log_distance": 44719.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.65,
    "depth_percent": 35,
    "length": 0.83,
    "width": 1.22,
    "joint_number": 12420
  },
  {
    "original_index": 2736,
    "log_distance": 44719.27,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0333,
    "depth_percent": 33,
    "length": 0.83,
    "width": 1.53,
    "joint_number": 12420
  },
  {
    "original_index": 2737,
    "log_distance": 44719.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6167,
    "depth_percent": 72,
    "length": 0.87,
    "width": 0.83,
    "joint_number": 12420
  },
  {
    "original_index": 2738,
    "log_distance": 44719.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5,
    "depth_percent": 34,
    "length": 1.1,
    "width": 1.58,
    "joint_number": 12420
  },
  {
    "original_index": 2739,
    "log_distance": 44719.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1333,
    "depth_percent": 12,
    "length": 0.35,
    "width": 0.75,
    "joint_number": 12420
  },
  {
    "original_index": 2740,
    "log_distance": 44720.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0167,
    "depth_percent": 28,
    "length": 0.63,
    "width": 1.02,
    "joint_number": 12420
  },
  {
    "original_index": 2741,
    "log_distance": 44720.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.65,
    "depth_percent": 24,
    "length": 0.79,
    "width": 1.22,
    "joint_number": 12420
  },
  {
    "original_index": 2742,
    "log_distance": 44720.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0333,
    "depth_percent": 16,
    "length": 0.51,
    "width": 0.94,
    "joint_number": 12420
  },
  {
    "original_index": 2743,
    "log_distance": 44720.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0667,
    "depth_percent": 11,
    "length": 0.75,
    "width": 1.38,
    "joint_number": 12420
  },
  {
    "original_index": 2744,
    "log_distance": 44720.86,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0333,
    "depth_percent": 19,
    "length": 0.87,
    "width": 1.5,
    "joint_number": 12420
  },
  {
    "original_index": 2745,
    "log_distance": 44721.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5,
    "depth_percent": 13,
    "length": 0.79,
    "width": 1.26,
    "joint_number": 12420
  },
  {
    "original_index": 2746,
    "log_distance": 44721.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6,
    "depth_percent": 17,
    "length": 0.47,
    "width": 1.06,
    "joint_number": 12420
  },
  {
    "original_index": 2747,
    "log_distance": 44725.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.25,
    "depth_percent": 33,
    "length": 2.05,
    "width": 1.14,
    "joint_number": 12420
  },
  {
    "original_index": 2749,
    "log_distance": 44745.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1167,
    "depth_percent": 18,
    "length": 0.63,
    "width": 1.34,
    "joint_number": 12420
  },
  {
    "original_index": 2750,
    "log_distance": 44745.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6833,
    "depth_percent": 28,
    "length": 0.87,
    "width": 1.34,
    "joint_number": 12420
  },
  {
    "original_index": 2751,
    "log_distance": 44747.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.0833,
    "depth_percent": 10,
    "length": 0.55,
    "width": 0.87,
    "joint_number": 12420
  },
  {
    "original_index": 2752,
    "log_distance": 44747.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2333,
    "depth_percent": 10,
    "length": 1.22,
    "width": 1.73,
    "joint_number": 12420
  },
  {
    "original_index": 2753,
    "log_distance": 44747.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5667,
    "depth_percent": 14,
    "length": 1.38,
    "width": 1.06,
    "joint_number": 12420
  },
  {
    "original_index": 2754,
    "log_distance": 44747.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.0333,
    "depth_percent": 27,
    "length": 1.65,
    "width": 1.06,
    "joint_number": 12420
  },
  {
    "original_index": 2755,
    "log_distance": 44747.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.3833,
    "depth_percent": 11,
    "length": 1.73,
    "width": 0.59,
    "joint_number": 12420
  },
  {
    "original_index": 2756,
    "log_distance": 44747.8,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 11.6167,
    "depth_percent": 32,
    "length": 1.33,
    "width": 8.15,
    "joint_number": 12420
  },
  {
    "original_index": 2757,
    "log_distance": 44747.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8333,
    "depth_percent": 29,
    "length": 1.18,
    "width": 1.26,
    "joint_number": 12420
  },
  {
    "original_index": 2758,
    "log_distance": 44747.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5333,
    "depth_percent": 31,
    "length": 0.91,
    "width": 5.28,
    "joint_number": 12420
  },
  {
    "original_index": 2759,
    "log_distance": 44748.55,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.65,
    "depth_percent": 10,
    "length": 0.59,
    "width": 0.87,
    "joint_number": 12420
  },
  {
    "original_index": 2761,
    "log_distance": 44748.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7167,
    "depth_percent": 11,
    "length": 0.47,
    "width": 1.34,
    "joint_number": 12430
  },
  {
    "original_index": 2762,
    "log_distance": 44748.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6167,
    "depth_percent": 14,
    "length": 1.53,
    "width": 1.46,
    "joint_number": 12430
  },
  {
    "original_index": 2763,
    "log_distance": 44749.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.1167,
    "depth_percent": 14,
    "length": 1.22,
    "width": 1.97,
    "joint_number": 12430
  },
  {
    "original_index": 2764,
    "log_distance": 44749.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.6167,
    "depth_percent": 12,
    "length": 0.71,
    "width": 1.02,
    "joint_number": 12430
  },
  {
    "original_index": 2765,
    "log_distance": 44749.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.75,
    "depth_percent": 10,
    "length": 0.35,
    "width": 0.59,
    "joint_number": 12430
  },
  {
    "original_index": 2766,
    "log_distance": 44750.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.4667,
    "depth_percent": 18,
    "length": 0.83,
    "width": 2.09,
    "joint_number": 12430
  },
  {
    "original_index": 2767,
    "log_distance": 44750.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.2167,
    "depth_percent": 14,
    "length": 0.63,
    "width": 0.94,
    "joint_number": 12430
  },
  {
    "original_index": 2768,
    "log_distance": 44750.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5833,
    "depth_percent": 10,
    "length": 0.55,
    "width": 1.1,
    "joint_number": 12430
  },
  {
    "original_index": 2769,
    "log_distance": 44750.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8833,
    "depth_percent": 10,
    "length": 0.47,
    "width": 0.79,
    "joint_number": 12430
  },
  {
    "original_index": 2770,
    "log_distance": 44753.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7667,
    "depth_percent": 16,
    "length": 0.94,
    "width": 1.42,
    "joint_number": 12430
  },
  {
    "original_index": 2771,
    "log_distance": 44753.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6167,
    "depth_percent": 11,
    "length": 1.58,
    "width": 1.53,
    "joint_number": 12430
  },
  {
    "original_index": 2772,
    "log_distance": 44765.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8667,
    "depth_percent": 14,
    "length": 0.79,
    "width": 1.22,
    "joint_number": 12430
  },
  {
    "original_index": 2773,
    "log_distance": 44766.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9667,
    "depth_percent": 15,
    "length": 0.75,
    "width": 1.34,
    "joint_number": 12430
  },
  {
    "original_index": 2774,
    "log_distance": 44766.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9667,
    "depth_percent": 12,
    "length": 0.59,
    "width": 0.98,
    "joint_number": 12430
  },
  {
    "original_index": 2775,
    "log_distance": 44766.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.95,
    "depth_percent": 15,
    "length": 0.79,
    "width": 1.26,
    "joint_number": 12430
  },
  {
    "original_index": 2776,
    "log_distance": 44767.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1333,
    "depth_percent": 10,
    "length": 1.22,
    "width": 1.58,
    "joint_number": 12430
  },
  {
    "original_index": 2777,
    "log_distance": 44767.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2333,
    "depth_percent": 14,
    "length": 0.67,
    "width": 1.34,
    "joint_number": 12430
  },
  {
    "original_index": 2778,
    "log_distance": 44768.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6833,
    "depth_percent": 35,
    "length": 1.14,
    "width": 1.53,
    "joint_number": 12430
  },
  {
    "original_index": 2779,
    "log_distance": 44768.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6833,
    "depth_percent": 27,
    "length": 1.14,
    "width": 1.53,
    "joint_number": 12430
  },
  {
    "original_index": 2780,
    "log_distance": 44768.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2667,
    "depth_percent": 18,
    "length": 0.79,
    "width": 1.22,
    "joint_number": 12430
  },
  {
    "original_index": 2781,
    "log_distance": 44769.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.55,
    "depth_percent": 11,
    "length": 0.67,
    "width": 1.18,
    "joint_number": 12430
  },
  {
    "original_index": 2782,
    "log_distance": 44769.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8333,
    "depth_percent": 47,
    "length": 1.77,
    "width": 1.42,
    "joint_number": 12430
  },
  {
    "original_index": 2783,
    "log_distance": 44770.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7167,
    "depth_percent": 15,
    "length": 0.79,
    "width": 1.3,
    "joint_number": 12430
  },
  {
    "original_index": 2784,
    "log_distance": 44770.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.8,
    "depth_percent": 35,
    "length": 1.22,
    "width": 1.42,
    "joint_number": 12430
  },
  {
    "original_index": 2785,
    "log_distance": 44771.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.85,
    "depth_percent": 15,
    "length": 0.83,
    "width": 1.26,
    "joint_number": 12430
  },
  {
    "original_index": 2786,
    "log_distance": 44774.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.8833,
    "depth_percent": 14,
    "length": 0.35,
    "width": 0.71,
    "joint_number": 12430
  },
  {
    "original_index": 2787,
    "log_distance": 44784.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.15,
    "depth_percent": 14,
    "length": 0.59,
    "width": 1.18,
    "joint_number": 12430
  },
  {
    "original_index": 2788,
    "log_distance": 44784.38,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 12.5,
    "depth_percent": 21,
    "length": 1.73,
    "width": 2.49,
    "joint_number": 12430
  },
  {
    "original_index": 2789,
    "log_distance": 44784.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.6333,
    "depth_percent": 10,
    "length": 0.67,
    "width": 1.06,
    "joint_number": 12430
  },
  {
    "original_index": 2790,
    "log_distance": 44788.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.0167,
    "depth_percent": 14,
    "length": 0.51,
    "width": 0.94,
    "joint_number": 12430
  },
  {
    "original_index": 2791,
    "log_distance": 44788.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.1167,
    "depth_percent": 18,
    "length": 0.94,
    "width": 1.18,
    "joint_number": 12430
  },
  {
    "original_index": 2792,
    "log_distance": 44788.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.8,
    "depth_percent": 12,
    "length": 0.63,
    "width": 1.97,
    "joint_number": 12430
  },
  {
    "original_index": 2795,
    "log_distance": 44827.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.25,
    "depth_percent": 14,
    "length": 1.73,
    "width": 2.28,
    "joint_number": 12440
  },
  {
    "original_index": 2796,
    "log_distance": 44827.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6833,
    "depth_percent": 44,
    "length": 0.59,
    "width": 1.22,
    "joint_number": 12440
  },
  {
    "original_index": 2797,
    "log_distance": 44827.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2667,
    "depth_percent": 34,
    "length": 0.55,
    "width": 1.06,
    "joint_number": 12440
  },
  {
    "original_index": 2801,
    "log_distance": 44869.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8,
    "depth_percent": 19,
    "length": 1.42,
    "width": 1.73,
    "joint_number": 12460
  },
  {
    "original_index": 2802,
    "log_distance": 44874.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3,
    "depth_percent": 20,
    "length": 0.83,
    "width": 1.26,
    "joint_number": 12460
  },
  {
    "original_index": 2803,
    "log_distance": 44874.43,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.65,
    "depth_percent": 53,
    "length": 1.98,
    "width": 3.37,
    "joint_number": 12460
  },
  {
    "original_index": 2804,
    "log_distance": 44874.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.85,
    "depth_percent": 21,
    "length": 0.67,
    "width": 0.98,
    "joint_number": 12460
  },
  {
    "original_index": 2805,
    "log_distance": 44875.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3333,
    "depth_percent": 29,
    "length": 0.98,
    "width": 1.5,
    "joint_number": 12460
  },
  {
    "original_index": 2806,
    "log_distance": 44875.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9167,
    "depth_percent": 11,
    "length": 1.18,
    "width": 1.46,
    "joint_number": 12460
  },
  {
    "original_index": 2807,
    "log_distance": 44875.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9833,
    "depth_percent": 15,
    "length": 1.73,
    "width": 4.05,
    "joint_number": 12460
  },
  {
    "original_index": 2808,
    "log_distance": 44877.52,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7333,
    "depth_percent": 83,
    "length": 0.98,
    "width": 0.59,
    "joint_number": 12460
  },
  {
    "original_index": 2809,
    "log_distance": 44877.94,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.4667,
    "depth_percent": 32,
    "length": 1.97,
    "width": 4,
    "joint_number": 12460
  },
  {
    "original_index": 2810,
    "log_distance": 44878.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7167,
    "depth_percent": 11,
    "length": 0.75,
    "width": 1.58,
    "joint_number": 12460
  },
  {
    "original_index": 2813,
    "log_distance": 44909.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2667,
    "depth_percent": 20,
    "length": 0.63,
    "width": 1.14,
    "joint_number": 12470
  },
  {
    "original_index": 2817,
    "log_distance": 44989.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3833,
    "depth_percent": 43,
    "length": 0.79,
    "width": 8.15,
    "joint_number": 12490
  },
  {
    "original_index": 2818,
    "log_distance": 44989.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9333,
    "depth_percent": 15,
    "length": 0.55,
    "width": 1.02,
    "joint_number": 12490
  },
  {
    "original_index": 2819,
    "log_distance": 44989.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5,
    "depth_percent": 10,
    "length": 1.18,
    "width": 2.95,
    "joint_number": 12490
  },
  {
    "original_index": 2820,
    "log_distance": 45010.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.2667,
    "depth_percent": 19,
    "length": 1.22,
    "width": 1.97,
    "joint_number": 12490
  },
  {
    "original_index": 2822,
    "log_distance": 45034.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9,
    "depth_percent": 16,
    "length": 0.75,
    "width": 1.18,
    "joint_number": 12500
  },
  {
    "original_index": 2823,
    "log_distance": 45039.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6833,
    "depth_percent": 12,
    "length": 1.89,
    "width": 1.81,
    "joint_number": 12500
  },
  {
    "original_index": 2824,
    "log_distance": 45044.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6667,
    "depth_percent": 10,
    "length": 0.43,
    "width": 0.75,
    "joint_number": 12500
  },
  {
    "original_index": 2825,
    "log_distance": 45044.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7833,
    "depth_percent": 13,
    "length": 0.43,
    "width": 0.71,
    "joint_number": 12500
  },
  {
    "original_index": 2826,
    "log_distance": 45068,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6,
    "depth_percent": 12,
    "length": 0.39,
    "width": 0.79,
    "joint_number": 12500
  },
  {
    "original_index": 2827,
    "log_distance": 45068.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9667,
    "depth_percent": 11,
    "length": 1.65,
    "width": 1.81,
    "joint_number": 12500
  },
  {
    "original_index": 2829,
    "log_distance": 45070,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2,
    "depth_percent": 19,
    "length": 0.98,
    "width": 1.46,
    "joint_number": 12510
  },
  {
    "original_index": 2830,
    "log_distance": 45070.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1167,
    "depth_percent": 18,
    "length": 0.94,
    "width": 1.53,
    "joint_number": 12510
  },
  {
    "original_index": 2831,
    "log_distance": 45072.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5667,
    "depth_percent": 44,
    "length": 0.59,
    "width": 1.02,
    "joint_number": 12510
  },
  {
    "original_index": 2832,
    "log_distance": 45073.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7167,
    "depth_percent": 23,
    "length": 0.63,
    "width": 1.06,
    "joint_number": 12510
  },
  {
    "original_index": 2833,
    "log_distance": 45074.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6333,
    "depth_percent": 29,
    "length": 0.91,
    "width": 1.5,
    "joint_number": 12510
  },
  {
    "original_index": 2834,
    "log_distance": 45074.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1333,
    "depth_percent": 25,
    "length": 1.02,
    "width": 1.46,
    "joint_number": 12510
  },
  {
    "original_index": 2835,
    "log_distance": 45075.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5667,
    "depth_percent": 28,
    "length": 0.83,
    "width": 1.18,
    "joint_number": 12510
  },
  {
    "original_index": 2836,
    "log_distance": 45076.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.3167,
    "depth_percent": 22,
    "length": 0.75,
    "width": 1.26,
    "joint_number": 12510
  },
  {
    "original_index": 2837,
    "log_distance": 45077.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4333,
    "depth_percent": 14,
    "length": 0.55,
    "width": 0.98,
    "joint_number": 12510
  },
  {
    "original_index": 2838,
    "log_distance": 45083.16,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8167,
    "depth_percent": 17,
    "length": 1.34,
    "width": 2.91,
    "joint_number": 12510
  },
  {
    "original_index": 2839,
    "log_distance": 45083.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4667,
    "depth_percent": 14,
    "length": 0.79,
    "width": 0.98,
    "joint_number": 12510
  },
  {
    "original_index": 2840,
    "log_distance": 45083.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5333,
    "depth_percent": 30,
    "length": 1.02,
    "width": 1.46,
    "joint_number": 12510
  },
  {
    "original_index": 2841,
    "log_distance": 45084.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4167,
    "depth_percent": 21,
    "length": 0.71,
    "width": 1.26,
    "joint_number": 12510
  },
  {
    "original_index": 2842,
    "log_distance": 45084.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7,
    "depth_percent": 11,
    "length": 1.02,
    "width": 2.44,
    "joint_number": 12510
  },
  {
    "original_index": 2843,
    "log_distance": 45084.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5667,
    "depth_percent": 11,
    "length": 0.71,
    "width": 1.18,
    "joint_number": 12510
  },
  {
    "original_index": 2844,
    "log_distance": 45085.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8833,
    "depth_percent": 14,
    "length": 0.87,
    "width": 1.38,
    "joint_number": 12510
  },
  {
    "original_index": 2845,
    "log_distance": 45086.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7333,
    "depth_percent": 10,
    "length": 1.22,
    "width": 1.97,
    "joint_number": 12510
  },
  {
    "original_index": 2846,
    "log_distance": 45088.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7833,
    "depth_percent": 10,
    "length": 0.67,
    "width": 1.02,
    "joint_number": 12510
  },
  {
    "original_index": 2847,
    "log_distance": 45088.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7333,
    "depth_percent": 20,
    "length": 0.67,
    "width": 1.34,
    "joint_number": 12510
  },
  {
    "original_index": 2848,
    "log_distance": 45089.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.15,
    "depth_percent": 20,
    "length": 0.75,
    "width": 1.1,
    "joint_number": 12510
  },
  {
    "original_index": 2849,
    "log_distance": 45089.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7,
    "depth_percent": 23,
    "length": 0.55,
    "width": 1.06,
    "joint_number": 12510
  },
  {
    "original_index": 2850,
    "log_distance": 45090.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8333,
    "depth_percent": 20,
    "length": 0.67,
    "width": 1.14,
    "joint_number": 12510
  },
  {
    "original_index": 2851,
    "log_distance": 45090.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7667,
    "depth_percent": 15,
    "length": 0.71,
    "width": 2.21,
    "joint_number": 12510
  },
  {
    "original_index": 2852,
    "log_distance": 45090.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1667,
    "depth_percent": 11,
    "length": 0.51,
    "width": 0.94,
    "joint_number": 12510
  },
  {
    "original_index": 2853,
    "log_distance": 45090.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9833,
    "depth_percent": 24,
    "length": 0.55,
    "width": 0.98,
    "joint_number": 12510
  },
  {
    "original_index": 2857,
    "log_distance": 45150.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.85,
    "depth_percent": 10,
    "length": 0.55,
    "width": 1.73,
    "joint_number": 12530
  },
  {
    "original_index": 2859,
    "log_distance": 45178.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.7833,
    "depth_percent": 11,
    "length": 0.51,
    "width": 0.79,
    "joint_number": 12530
  },
  {
    "original_index": 2861,
    "log_distance": 45180.05,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.75,
    "depth_percent": 16,
    "length": 0.55,
    "width": 1.06,
    "joint_number": 12530
  },
  {
    "original_index": 2862,
    "log_distance": 45180.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.9,
    "depth_percent": 20,
    "length": 1.06,
    "width": 1.58,
    "joint_number": 12530
  },
  {
    "original_index": 2867,
    "log_distance": 45183.1,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 11.7667,
    "depth_percent": 53,
    "length": 1.36,
    "width": 5.07,
    "joint_number": 12540
  },
  {
    "original_index": 2868,
    "log_distance": 45183.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.7167,
    "depth_percent": 14,
    "length": 1.26,
    "width": 2.21,
    "joint_number": 12540
  },
  {
    "original_index": 2871,
    "log_distance": 45197.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.0833,
    "depth_percent": 39,
    "length": 0.79,
    "width": 1.38,
    "joint_number": 12540
  },
  {
    "original_index": 2872,
    "log_distance": 45197.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6,
    "depth_percent": 14,
    "length": 1.81,
    "width": 0.59,
    "joint_number": 12540
  },
  {
    "original_index": 2873,
    "log_distance": 45200.05,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.9667,
    "depth_percent": 14,
    "length": 0.67,
    "width": 1.06,
    "joint_number": 12540
  },
  {
    "original_index": 2874,
    "log_distance": 45200.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2,
    "depth_percent": 10,
    "length": 0.51,
    "width": 1.06,
    "joint_number": 12540
  },
  {
    "original_index": 2875,
    "log_distance": 45204.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.6667,
    "depth_percent": 10,
    "length": 0.51,
    "width": 1.14,
    "joint_number": 12540
  },
  {
    "original_index": 2876,
    "log_distance": 45204.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.3,
    "depth_percent": 24,
    "length": 0.87,
    "width": 1.38,
    "joint_number": 12540
  },
  {
    "original_index": 2878,
    "log_distance": 45205.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.7333,
    "depth_percent": 11,
    "length": 1.81,
    "width": 2.09,
    "joint_number": 12550
  },
  {
    "original_index": 2879,
    "log_distance": 45205.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.2167,
    "depth_percent": 15,
    "length": 2.24,
    "width": 0.83,
    "joint_number": 12550
  },
  {
    "original_index": 2880,
    "log_distance": 45205.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.35,
    "depth_percent": 14,
    "length": 1.42,
    "width": 1.58,
    "joint_number": 12550
  },
  {
    "original_index": 2881,
    "log_distance": 45205.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 18,
    "length": 0.67,
    "width": 0.87,
    "joint_number": 12550
  },
  {
    "original_index": 2882,
    "log_distance": 45206.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.8333,
    "depth_percent": 11,
    "length": 0.63,
    "width": 1.22,
    "joint_number": 12550
  },
  {
    "original_index": 2883,
    "log_distance": 45206.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3833,
    "depth_percent": 26,
    "length": 0.87,
    "width": 1.22,
    "joint_number": 12550
  },
  {
    "original_index": 2885,
    "log_distance": 45209.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.85,
    "depth_percent": 21,
    "length": 0.63,
    "width": 1.1,
    "joint_number": 12550
  },
  {
    "original_index": 2886,
    "log_distance": 45210.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6833,
    "depth_percent": 17,
    "length": 1.85,
    "width": 3.94,
    "joint_number": 12550
  },
  {
    "original_index": 2888,
    "log_distance": 45222.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2833,
    "depth_percent": 22,
    "length": 0.83,
    "width": 1.18,
    "joint_number": 12550
  },
  {
    "original_index": 2889,
    "log_distance": 45238.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.85,
    "depth_percent": 10,
    "length": 0.35,
    "width": 0.59,
    "joint_number": 12550
  },
  {
    "original_index": 2892,
    "log_distance": 45246.27,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4833,
    "depth_percent": 22,
    "length": 0.63,
    "width": 1.61,
    "joint_number": 12560
  },
  {
    "original_index": 2893,
    "log_distance": 45246.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8667,
    "depth_percent": 34,
    "length": 0.75,
    "width": 2.17,
    "joint_number": 12560
  },
  {
    "original_index": 2898,
    "log_distance": 45370.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9333,
    "depth_percent": 13,
    "length": 0.55,
    "width": 0.91,
    "joint_number": 12590
  },
  {
    "original_index": 2899,
    "log_distance": 45370.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9833,
    "depth_percent": 12,
    "length": 0.63,
    "width": 1.22,
    "joint_number": 12590
  },
  {
    "original_index": 2900,
    "log_distance": 45370.62,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3167,
    "depth_percent": 24,
    "length": 1.22,
    "width": 1.38,
    "joint_number": 12590
  },
  {
    "original_index": 2901,
    "log_distance": 45371.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2833,
    "depth_percent": 12,
    "length": 0.55,
    "width": 1.73,
    "joint_number": 12590
  },
  {
    "original_index": 2915,
    "log_distance": 45748.34,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.8667,
    "depth_percent": 28,
    "length": 1.33,
    "width": 4.8,
    "joint_number": 12710
  },
  {
    "original_index": 2916,
    "log_distance": 45748.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4,
    "depth_percent": 19,
    "length": 1.73,
    "width": 2.99,
    "joint_number": 12710
  },
  {
    "original_index": 2917,
    "log_distance": 45748.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2833,
    "depth_percent": 15,
    "length": 2.01,
    "width": 4.33,
    "joint_number": 12710
  },
  {
    "original_index": 2918,
    "log_distance": 45748.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.3667,
    "depth_percent": 11,
    "length": 0.94,
    "width": 1.3,
    "joint_number": 12710
  },
  {
    "original_index": 2919,
    "log_distance": 45748.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.0167,
    "depth_percent": 20,
    "length": 0.75,
    "width": 1.34,
    "joint_number": 12710
  },
  {
    "original_index": 2921,
    "log_distance": 45812.87,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9167,
    "depth_percent": 10,
    "length": 0.59,
    "width": 1.02,
    "joint_number": 12720
  },
  {
    "original_index": 2923,
    "log_distance": 45814.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.2667,
    "depth_percent": 13,
    "length": 1.5,
    "width": 0.59,
    "joint_number": 12730
  },
  {
    "original_index": 2929,
    "log_distance": 46022.48,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6,
    "depth_percent": 27,
    "length": 1.61,
    "width": 2.36,
    "joint_number": 12780
  },
  {
    "original_index": 2931,
    "log_distance": 46024.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6,
    "depth_percent": 14,
    "length": 0.32,
    "width": 1.14,
    "joint_number": 12790
  },
  {
    "original_index": 2932,
    "log_distance": 46044.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3833,
    "depth_percent": 17,
    "length": 1.22,
    "width": 1.46,
    "joint_number": 12790
  },
  {
    "original_index": 2934,
    "log_distance": 46082.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5667,
    "depth_percent": 23,
    "length": 1.26,
    "width": 1.77,
    "joint_number": 12800
  },
  {
    "original_index": 2935,
    "log_distance": 46082.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3833,
    "depth_percent": 20,
    "length": 0.71,
    "width": 1.14,
    "joint_number": 12800
  },
  {
    "original_index": 2936,
    "log_distance": 46082.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4667,
    "depth_percent": 11,
    "length": 0.83,
    "width": 1.02,
    "joint_number": 12800
  },
  {
    "original_index": 2937,
    "log_distance": 46083.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2333,
    "depth_percent": 34,
    "length": 1.02,
    "width": 1.58,
    "joint_number": 12800
  },
  {
    "original_index": 2938,
    "log_distance": 46083.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5667,
    "depth_percent": 10,
    "length": 1.77,
    "width": 2.09,
    "joint_number": 12800
  },
  {
    "original_index": 2939,
    "log_distance": 46083.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3167,
    "depth_percent": 13,
    "length": 1.81,
    "width": 0.59,
    "joint_number": 12800
  },
  {
    "original_index": 2940,
    "log_distance": 46083.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5,
    "depth_percent": 17,
    "length": 0.94,
    "width": 0.59,
    "joint_number": 12800
  },
  {
    "original_index": 2941,
    "log_distance": 46083.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4667,
    "depth_percent": 15,
    "length": 0.83,
    "width": 1.06,
    "joint_number": 12800
  },
  {
    "original_index": 2942,
    "log_distance": 46084.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3333,
    "depth_percent": 17,
    "length": 2.24,
    "width": 1.14,
    "joint_number": 12800
  },
  {
    "original_index": 2943,
    "log_distance": 46084.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.45,
    "depth_percent": 14,
    "length": 0.79,
    "width": 1.06,
    "joint_number": 12800
  },
  {
    "original_index": 2944,
    "log_distance": 46084.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4667,
    "depth_percent": 24,
    "length": 0.75,
    "width": 0.98,
    "joint_number": 12800
  },
  {
    "original_index": 2945,
    "log_distance": 46085,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3833,
    "depth_percent": 12,
    "length": 1.93,
    "width": 1.38,
    "joint_number": 12800
  },
  {
    "original_index": 2946,
    "log_distance": 46085.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4667,
    "depth_percent": 11,
    "length": 1.1,
    "width": 1.5,
    "joint_number": 12800
  },
  {
    "original_index": 2947,
    "log_distance": 46085.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 15,
    "length": 1.69,
    "width": 1.73,
    "joint_number": 12800
  },
  {
    "original_index": 2948,
    "log_distance": 46085.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4833,
    "depth_percent": 10,
    "length": 0.71,
    "width": 1.02,
    "joint_number": 12800
  },
  {
    "original_index": 2949,
    "log_distance": 46085.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4833,
    "depth_percent": 11,
    "length": 2.13,
    "width": 1.02,
    "joint_number": 12800
  },
  {
    "original_index": 2950,
    "log_distance": 46086.62,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.4833,
    "depth_percent": 28,
    "length": 1.57,
    "width": 3.42,
    "joint_number": 12800
  },
  {
    "original_index": 2951,
    "log_distance": 46086.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0833,
    "depth_percent": 10,
    "length": 1.58,
    "width": 1.65,
    "joint_number": 12800
  },
  {
    "original_index": 2952,
    "log_distance": 46087.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 31,
    "length": 0.94,
    "width": 1.26,
    "joint_number": 12800
  },
  {
    "original_index": 2953,
    "log_distance": 46087.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4167,
    "depth_percent": 20,
    "length": 0.87,
    "width": 1.14,
    "joint_number": 12800
  },
  {
    "original_index": 2954,
    "log_distance": 46087.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4,
    "depth_percent": 19,
    "length": 0.71,
    "width": 1.18,
    "joint_number": 12800
  },
  {
    "original_index": 2955,
    "log_distance": 46087.73,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 10,
    "length": 0.94,
    "width": 1.18,
    "joint_number": 12800
  },
  {
    "original_index": 2956,
    "log_distance": 46087.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4833,
    "depth_percent": 13,
    "length": 0.83,
    "width": 1.06,
    "joint_number": 12800
  },
  {
    "original_index": 2957,
    "log_distance": 46088.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3,
    "depth_percent": 14,
    "length": 0.79,
    "width": 1.14,
    "joint_number": 12800
  },
  {
    "original_index": 2958,
    "log_distance": 46088.52,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3,
    "depth_percent": 16,
    "length": 0.71,
    "width": 1.22,
    "joint_number": 12800
  },
  {
    "original_index": 2959,
    "log_distance": 46088.55,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5,
    "depth_percent": 10,
    "length": 0.75,
    "width": 1.02,
    "joint_number": 12800
  },
  {
    "original_index": 2960,
    "log_distance": 46088.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3833,
    "depth_percent": 13,
    "length": 1.38,
    "width": 1.5,
    "joint_number": 12800
  },
  {
    "original_index": 2961,
    "log_distance": 46089.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3333,
    "depth_percent": 11,
    "length": 0.51,
    "width": 1.14,
    "joint_number": 12800
  },
  {
    "original_index": 2962,
    "log_distance": 46089.45,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5,
    "depth_percent": 17,
    "length": 0.98,
    "width": 1.18,
    "joint_number": 12800
  },
  {
    "original_index": 2963,
    "log_distance": 46089.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3,
    "depth_percent": 12,
    "length": 0.91,
    "width": 1.46,
    "joint_number": 12800
  },
  {
    "original_index": 2964,
    "log_distance": 46089.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4,
    "depth_percent": 13,
    "length": 0.79,
    "width": 1.3,
    "joint_number": 12800
  },
  {
    "original_index": 2965,
    "log_distance": 46090.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4667,
    "depth_percent": 16,
    "length": 0.83,
    "width": 1.18,
    "joint_number": 12800
  },
  {
    "original_index": 2966,
    "log_distance": 46090.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3167,
    "depth_percent": 19,
    "length": 0.71,
    "width": 1.34,
    "joint_number": 12800
  },
  {
    "original_index": 2967,
    "log_distance": 46091.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.65,
    "depth_percent": 14,
    "length": 0.94,
    "width": 1.1,
    "joint_number": 12800
  },
  {
    "original_index": 2968,
    "log_distance": 46091.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5,
    "depth_percent": 14,
    "length": 1.18,
    "width": 1.53,
    "joint_number": 12800
  },
  {
    "original_index": 2969,
    "log_distance": 46092.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5,
    "depth_percent": 10,
    "length": 0.32,
    "width": 1.5,
    "joint_number": 12800
  },
  {
    "original_index": 2970,
    "log_distance": 46092.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4,
    "depth_percent": 11,
    "length": 2.13,
    "width": 1.58,
    "joint_number": 12800
  },
  {
    "original_index": 2971,
    "log_distance": 46093.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.45,
    "depth_percent": 13,
    "length": 0.87,
    "width": 1.14,
    "joint_number": 12800
  },
  {
    "original_index": 2972,
    "log_distance": 46093.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4333,
    "depth_percent": 11,
    "length": 1.97,
    "width": 0.59,
    "joint_number": 12800
  },
  {
    "original_index": 2973,
    "log_distance": 46093.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.95,
    "depth_percent": 17,
    "length": 1.42,
    "width": 4.41,
    "joint_number": 12800
  },
  {
    "original_index": 2974,
    "log_distance": 46093.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2667,
    "depth_percent": 19,
    "length": 1.34,
    "width": 1.65,
    "joint_number": 12800
  },
  {
    "original_index": 2975,
    "log_distance": 46094.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4833,
    "depth_percent": 16,
    "length": 1.22,
    "width": 1.34,
    "joint_number": 12800
  },
  {
    "original_index": 2976,
    "log_distance": 46094.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2,
    "depth_percent": 15,
    "length": 0.67,
    "width": 1.26,
    "joint_number": 12800
  },
  {
    "original_index": 2977,
    "log_distance": 46094.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.25,
    "depth_percent": 11,
    "length": 0.83,
    "width": 1.26,
    "joint_number": 12800
  },
  {
    "original_index": 2980,
    "log_distance": 46103.07,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.1,
    "depth_percent": 32,
    "length": 1.38,
    "width": 3.5,
    "joint_number": 12800
  },
  {
    "original_index": 2988,
    "log_distance": 46183.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6,
    "depth_percent": 15,
    "length": 1.61,
    "width": 1.38,
    "joint_number": 12820
  },
  {
    "original_index": 2990,
    "log_distance": 46204.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7,
    "depth_percent": 16,
    "length": 1.1,
    "width": 1.81,
    "joint_number": 12830
  },
  {
    "original_index": 2991,
    "log_distance": 46204.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7833,
    "depth_percent": 15,
    "length": 0.79,
    "width": 1.06,
    "joint_number": 12830
  },
  {
    "original_index": 2992,
    "log_distance": 46205.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7833,
    "depth_percent": 10,
    "length": 0.63,
    "width": 1.14,
    "joint_number": 12830
  },
  {
    "original_index": 2993,
    "log_distance": 46207.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3167,
    "depth_percent": 25,
    "length": 0.67,
    "width": 1.26,
    "joint_number": 12830
  },
  {
    "original_index": 2994,
    "log_distance": 46207.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8667,
    "depth_percent": 15,
    "length": 0.79,
    "width": 0.75,
    "joint_number": 12830
  },
  {
    "original_index": 2995,
    "log_distance": 46208.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2167,
    "depth_percent": 23,
    "length": 0.79,
    "width": 1.65,
    "joint_number": 12830
  },
  {
    "original_index": 2996,
    "log_distance": 46208.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5,
    "depth_percent": 20,
    "length": 0.83,
    "width": 1.34,
    "joint_number": 12830
  },
  {
    "original_index": 2997,
    "log_distance": 46208.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2833,
    "depth_percent": 10,
    "length": 0.83,
    "width": 1.3,
    "joint_number": 12830
  },
  {
    "original_index": 2999,
    "log_distance": 46226.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9,
    "depth_percent": 12,
    "length": 1.34,
    "width": 2.32,
    "joint_number": 12840
  },
  {
    "original_index": 3000,
    "log_distance": 46237.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1667,
    "depth_percent": 12,
    "length": 0.91,
    "width": 2.01,
    "joint_number": 12840
  },
  {
    "original_index": 3001,
    "log_distance": 46238.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9667,
    "depth_percent": 13,
    "length": 0.94,
    "width": 1.53,
    "joint_number": 12840
  },
  {
    "original_index": 3002,
    "log_distance": 46239,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.4333,
    "depth_percent": 19,
    "length": 2.17,
    "width": 1.93,
    "joint_number": 12840
  },
  {
    "original_index": 3003,
    "log_distance": 46239.23,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.4333,
    "depth_percent": 23,
    "length": 1.96,
    "width": 6.77,
    "joint_number": 12840
  },
  {
    "original_index": 3004,
    "log_distance": 46239.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9833,
    "depth_percent": 15,
    "length": 0.47,
    "width": 0.87,
    "joint_number": 12840
  },
  {
    "original_index": 3005,
    "log_distance": 46239.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5833,
    "depth_percent": 12,
    "length": 1.42,
    "width": 0.75,
    "joint_number": 12840
  },
  {
    "original_index": 3006,
    "log_distance": 46239.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0833,
    "depth_percent": 18,
    "length": 0.75,
    "width": 1.34,
    "joint_number": 12840
  },
  {
    "original_index": 3007,
    "log_distance": 46240.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4333,
    "depth_percent": 12,
    "length": 0.51,
    "width": 0.98,
    "joint_number": 12840
  },
  {
    "original_index": 3008,
    "log_distance": 46240.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.45,
    "depth_percent": 15,
    "length": 0.47,
    "width": 0.83,
    "joint_number": 12840
  },
  {
    "original_index": 3009,
    "log_distance": 46240.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9667,
    "depth_percent": 16,
    "length": 1.73,
    "width": 2.68,
    "joint_number": 12840
  },
  {
    "original_index": 3010,
    "log_distance": 46241.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3167,
    "depth_percent": 13,
    "length": 0.47,
    "width": 0.63,
    "joint_number": 12840
  },
  {
    "original_index": 3011,
    "log_distance": 46241.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9833,
    "depth_percent": 15,
    "length": 1.38,
    "width": 1.89,
    "joint_number": 12840
  },
  {
    "original_index": 3012,
    "log_distance": 46250.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7667,
    "depth_percent": 15,
    "length": 0.67,
    "width": 1.18,
    "joint_number": 12840
  },
  {
    "original_index": 3013,
    "log_distance": 46251.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9167,
    "depth_percent": 11,
    "length": 0.59,
    "width": 0.94,
    "joint_number": 12840
  },
  {
    "original_index": 3014,
    "log_distance": 46251.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8833,
    "depth_percent": 18,
    "length": 0.71,
    "width": 1.22,
    "joint_number": 12840
  },
  {
    "original_index": 3015,
    "log_distance": 46252.16,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6833,
    "depth_percent": 15,
    "length": 0.59,
    "width": 1.02,
    "joint_number": 12840
  },
  {
    "original_index": 3016,
    "log_distance": 46252.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7667,
    "depth_percent": 12,
    "length": 0.87,
    "width": 1.42,
    "joint_number": 12840
  },
  {
    "original_index": 3017,
    "log_distance": 46252.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.0667,
    "depth_percent": 33,
    "length": 0.51,
    "width": 1.06,
    "joint_number": 12840
  },
  {
    "original_index": 3018,
    "log_distance": 46252.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.85,
    "depth_percent": 24,
    "length": 0.51,
    "width": 1.26,
    "joint_number": 12840
  },
  {
    "original_index": 3019,
    "log_distance": 46253.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.8167,
    "depth_percent": 21,
    "length": 0.67,
    "width": 1.22,
    "joint_number": 12840
  },
  {
    "original_index": 3020,
    "log_distance": 46253.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6667,
    "depth_percent": 14,
    "length": 0.71,
    "width": 1.14,
    "joint_number": 12840
  },
  {
    "original_index": 3022,
    "log_distance": 46257.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9,
    "depth_percent": 16,
    "length": 0.91,
    "width": 0.79,
    "joint_number": 12840
  },
  {
    "original_index": 3024,
    "log_distance": 46263.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.85,
    "depth_percent": 32,
    "length": 1.14,
    "width": 6.5,
    "joint_number": 12840
  },
  {
    "original_index": 3025,
    "log_distance": 46263.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.45,
    "depth_percent": 47,
    "length": 0.67,
    "width": 1.38,
    "joint_number": 12840
  },
  {
    "original_index": 3026,
    "log_distance": 46263.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.6,
    "depth_percent": 20,
    "length": 1.65,
    "width": 1.22,
    "joint_number": 12840
  },
  {
    "original_index": 3027,
    "log_distance": 46263.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4667,
    "depth_percent": 19,
    "length": 0.67,
    "width": 1.26,
    "joint_number": 12840
  },
  {
    "original_index": 3028,
    "log_distance": 46263.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8,
    "depth_percent": 18,
    "length": 0.71,
    "width": 1.34,
    "joint_number": 12840
  },
  {
    "original_index": 3029,
    "log_distance": 46263.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.3667,
    "depth_percent": 15,
    "length": 0.51,
    "width": 1.02,
    "joint_number": 12840
  },
  {
    "original_index": 3030,
    "log_distance": 46263.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9833,
    "depth_percent": 12,
    "length": 0.47,
    "width": 2.28,
    "joint_number": 12840
  },
  {
    "original_index": 3032,
    "log_distance": 46265.36,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.45,
    "depth_percent": 29,
    "length": 0.72,
    "width": 6.89,
    "joint_number": 12850
  },
  {
    "original_index": 3033,
    "log_distance": 46265.36,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.9833,
    "depth_percent": 32,
    "length": 0.67,
    "width": 4.17,
    "joint_number": 12850
  },
  {
    "original_index": 3034,
    "log_distance": 46265.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5333,
    "depth_percent": 13,
    "length": 0.83,
    "width": 1.97,
    "joint_number": 12850
  },
  {
    "original_index": 3035,
    "log_distance": 46265.37,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.0167,
    "depth_percent": 37,
    "length": 0.51,
    "width": 1.3,
    "joint_number": 12850
  },
  {
    "original_index": 3036,
    "log_distance": 46265.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7,
    "depth_percent": 26,
    "length": 0.55,
    "width": 1.93,
    "joint_number": 12850
  },
  {
    "original_index": 3037,
    "log_distance": 46265.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.1333,
    "depth_percent": 10,
    "length": 0.83,
    "width": 1.42,
    "joint_number": 12850
  },
  {
    "original_index": 3038,
    "log_distance": 46265.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4833,
    "depth_percent": 18,
    "length": 1.14,
    "width": 3.03,
    "joint_number": 12850
  },
  {
    "original_index": 3039,
    "log_distance": 46265.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.0167,
    "depth_percent": 17,
    "length": 0.51,
    "width": 0.91,
    "joint_number": 12850
  },
  {
    "original_index": 3043,
    "log_distance": 46272.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.25,
    "depth_percent": 32,
    "length": 1.69,
    "width": 2.28,
    "joint_number": 12850
  },
  {
    "original_index": 3044,
    "log_distance": 46272.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9667,
    "depth_percent": 21,
    "length": 1.06,
    "width": 1.65,
    "joint_number": 12850
  },
  {
    "original_index": 3045,
    "log_distance": 46272.81,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.5667,
    "depth_percent": 12,
    "length": 0.67,
    "width": 3.19,
    "joint_number": 12850
  },
  {
    "original_index": 3046,
    "log_distance": 46273.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8167,
    "depth_percent": 15,
    "length": 1.14,
    "width": 1.42,
    "joint_number": 12850
  },
  {
    "original_index": 3047,
    "log_distance": 46273.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1,
    "depth_percent": 11,
    "length": 0.94,
    "width": 1.5,
    "joint_number": 12850
  },
  {
    "original_index": 3048,
    "log_distance": 46274.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8833,
    "depth_percent": 20,
    "length": 0.75,
    "width": 1.22,
    "joint_number": 12850
  },
  {
    "original_index": 3049,
    "log_distance": 46274.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4,
    "depth_percent": 20,
    "length": 1.53,
    "width": 1.53,
    "joint_number": 12850
  },
  {
    "original_index": 3050,
    "log_distance": 46284.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1167,
    "depth_percent": 12,
    "length": 0.47,
    "width": 0.79,
    "joint_number": 12850
  },
  {
    "original_index": 3051,
    "log_distance": 46284.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.05,
    "depth_percent": 22,
    "length": 0.71,
    "width": 1.65,
    "joint_number": 12850
  },
  {
    "original_index": 3052,
    "log_distance": 46285.4,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.3167,
    "depth_percent": 25,
    "length": 0.79,
    "width": 4.21,
    "joint_number": 12850
  },
  {
    "original_index": 3053,
    "log_distance": 46285.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8667,
    "depth_percent": 18,
    "length": 0.55,
    "width": 1.02,
    "joint_number": 12850
  },
  {
    "original_index": 3054,
    "log_distance": 46286.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.55,
    "depth_percent": 13,
    "length": 1.73,
    "width": 2.17,
    "joint_number": 12850
  },
  {
    "original_index": 3055,
    "log_distance": 46286.21,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.05,
    "depth_percent": 15,
    "length": 0.67,
    "width": 1.18,
    "joint_number": 12850
  },
  {
    "original_index": 3056,
    "log_distance": 46286.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.2667,
    "depth_percent": 13,
    "length": 0.43,
    "width": 0.67,
    "joint_number": 12850
  },
  {
    "original_index": 3057,
    "log_distance": 46286.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1167,
    "depth_percent": 21,
    "length": 0.51,
    "width": 1.22,
    "joint_number": 12850
  },
  {
    "original_index": 3058,
    "log_distance": 46287.18,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3833,
    "depth_percent": 10,
    "length": 0.75,
    "width": 1.46,
    "joint_number": 12850
  },
  {
    "original_index": 3059,
    "log_distance": 46288.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8833,
    "depth_percent": 32,
    "length": 1.14,
    "width": 1.53,
    "joint_number": 12850
  },
  {
    "original_index": 3060,
    "log_distance": 46293.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2167,
    "depth_percent": 11,
    "length": 0.83,
    "width": 1.53,
    "joint_number": 12850
  },
  {
    "original_index": 3061,
    "log_distance": 46294.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2,
    "depth_percent": 14,
    "length": 1.18,
    "width": 1.77,
    "joint_number": 12850
  },
  {
    "original_index": 3062,
    "log_distance": 46295.87,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.7667,
    "depth_percent": 10,
    "length": 1.18,
    "width": 1.69,
    "joint_number": 12850
  },
  {
    "original_index": 3064,
    "log_distance": 46342.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.25,
    "depth_percent": 18,
    "length": 0.83,
    "width": 1.34,
    "joint_number": 12860
  },
  {
    "original_index": 3065,
    "log_distance": 46342.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8,
    "depth_percent": 12,
    "length": 0.59,
    "width": 0.98,
    "joint_number": 12860
  },
  {
    "original_index": 3066,
    "log_distance": 46343.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3833,
    "depth_percent": 21,
    "length": 0.94,
    "width": 1.26,
    "joint_number": 12860
  },
  {
    "original_index": 3068,
    "log_distance": 46343.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1833,
    "depth_percent": 10,
    "length": 0.83,
    "width": 2.32,
    "joint_number": 12860
  },
  {
    "original_index": 3070,
    "log_distance": 46345.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6833,
    "depth_percent": 11,
    "length": 0.79,
    "width": 1.53,
    "joint_number": 12870
  },
  {
    "original_index": 3071,
    "log_distance": 46345.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.0333,
    "depth_percent": 16,
    "length": 0.55,
    "width": 2.44,
    "joint_number": 12870
  },
  {
    "original_index": 3072,
    "log_distance": 46345.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3333,
    "depth_percent": 43,
    "length": 0.55,
    "width": 0.91,
    "joint_number": 12870
  },
  {
    "original_index": 3073,
    "log_distance": 46345.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.15,
    "depth_percent": 31,
    "length": 0.63,
    "width": 2.52,
    "joint_number": 12870
  },
  {
    "original_index": 3075,
    "log_distance": 46415.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7333,
    "depth_percent": 18,
    "length": 0.67,
    "width": 1.02,
    "joint_number": 12880
  },
  {
    "original_index": 3076,
    "log_distance": 46415.83,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9167,
    "depth_percent": 11,
    "length": 1.89,
    "width": 1.65,
    "joint_number": 12880
  },
  {
    "original_index": 3080,
    "log_distance": 46423.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.3667,
    "depth_percent": 38,
    "length": 0.75,
    "width": 2.76,
    "joint_number": 12880
  },
  {
    "original_index": 3081,
    "log_distance": 46423.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.15,
    "depth_percent": 20,
    "length": 0.75,
    "width": 3.23,
    "joint_number": 12880
  },
  {
    "original_index": 3083,
    "log_distance": 46424.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.05,
    "depth_percent": 12,
    "length": 0.43,
    "width": 1.26,
    "joint_number": 12880
  },
  {
    "original_index": 3084,
    "log_distance": 46424.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6167,
    "depth_percent": 52,
    "length": 0.71,
    "width": 1.42,
    "joint_number": 12880
  },
  {
    "original_index": 3085,
    "log_distance": 46424.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.85,
    "depth_percent": 11,
    "length": 0.79,
    "width": 4.53,
    "joint_number": 12880
  },
  {
    "original_index": 3087,
    "log_distance": 46449.27,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2333,
    "depth_percent": 13,
    "length": 1.1,
    "width": 1.81,
    "joint_number": 12890
  },
  {
    "original_index": 3088,
    "log_distance": 46449.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1833,
    "depth_percent": 11,
    "length": 0.63,
    "width": 1.22,
    "joint_number": 12890
  },
  {
    "original_index": 3089,
    "log_distance": 46449.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1333,
    "depth_percent": 21,
    "length": 0.59,
    "width": 1.18,
    "joint_number": 12890
  },
  {
    "original_index": 3090,
    "log_distance": 46451.5,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5,
    "depth_percent": 18,
    "length": 0.71,
    "width": 1.14,
    "joint_number": 12890
  },
  {
    "original_index": 3092,
    "log_distance": 46504.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2333,
    "depth_percent": 29,
    "length": 0.71,
    "width": 4.61,
    "joint_number": 12900
  },
  {
    "original_index": 3094,
    "log_distance": 46505.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.95,
    "depth_percent": 14,
    "length": 0.59,
    "width": 1.26,
    "joint_number": 12910
  },
  {
    "original_index": 3095,
    "log_distance": 46511.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1833,
    "depth_percent": 14,
    "length": 0.35,
    "width": 0.71,
    "joint_number": 12910
  },
  {
    "original_index": 3102,
    "log_distance": 46721.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.4167,
    "depth_percent": 16,
    "length": 1.61,
    "width": 2.99,
    "joint_number": 12970
  },
  {
    "original_index": 3104,
    "log_distance": 46735.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.4333,
    "depth_percent": 13,
    "length": 1.22,
    "width": 1.58,
    "joint_number": 12980
  },
  {
    "original_index": 3105,
    "log_distance": 46738.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8167,
    "depth_percent": 31,
    "length": 1.38,
    "width": 1.02,
    "joint_number": 12980
  },
  {
    "original_index": 3109,
    "log_distance": 46796.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.7667,
    "depth_percent": 11,
    "length": 1.89,
    "width": 0.75,
    "joint_number": 13000
  },
  {
    "original_index": 3110,
    "log_distance": 46796.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.5667,
    "depth_percent": 12,
    "length": 1.89,
    "width": 0.59,
    "joint_number": 13000
  },
  {
    "original_index": 3111,
    "log_distance": 46798.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.1333,
    "depth_percent": 13,
    "length": 1.06,
    "width": 1.97,
    "joint_number": 13000
  },
  {
    "original_index": 3112,
    "log_distance": 46800.26,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.2667,
    "depth_percent": 12,
    "length": 2.05,
    "width": 1.89,
    "joint_number": 13000
  },
  {
    "original_index": 3113,
    "log_distance": 46806.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.3,
    "depth_percent": 10,
    "length": 0.55,
    "width": 1.58,
    "joint_number": 13000
  },
  {
    "original_index": 3114,
    "log_distance": 46806.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.2333,
    "depth_percent": 18,
    "length": 0.55,
    "width": 1.26,
    "joint_number": 13000
  },
  {
    "original_index": 3115,
    "log_distance": 46806.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.5,
    "depth_percent": 30,
    "length": 0.71,
    "width": 1.18,
    "joint_number": 13000
  },
  {
    "original_index": 3116,
    "log_distance": 46807.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.7333,
    "depth_percent": 17,
    "length": 0.71,
    "width": 1.26,
    "joint_number": 13000
  },
  {
    "original_index": 3117,
    "log_distance": 46807.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.45,
    "depth_percent": 12,
    "length": 0.39,
    "width": 0.98,
    "joint_number": 13000
  },
  {
    "original_index": 3118,
    "log_distance": 46807.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.4167,
    "depth_percent": 17,
    "length": 0.47,
    "width": 1.26,
    "joint_number": 13000
  },
  {
    "original_index": 3120,
    "log_distance": 46837.79,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.55,
    "depth_percent": 18,
    "length": 1.81,
    "width": 0.67,
    "joint_number": 13010
  },
  {
    "original_index": 3121,
    "log_distance": 46837.81,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.4167,
    "depth_percent": 16,
    "length": 2.01,
    "width": 3.66,
    "joint_number": 13010
  },
  {
    "original_index": 3123,
    "log_distance": 46838.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1667,
    "depth_percent": 15,
    "length": 2.21,
    "width": 1.02,
    "joint_number": 13020
  },
  {
    "original_index": 3124,
    "log_distance": 46838.97,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.7667,
    "depth_percent": 24,
    "length": 0.86,
    "width": 3.69,
    "joint_number": 13020
  },
  {
    "original_index": 3127,
    "log_distance": 46944.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.65,
    "depth_percent": 16,
    "length": 1.93,
    "width": 2.21,
    "joint_number": 13040
  },
  {
    "original_index": 3136,
    "log_distance": 47192.06,
    "event_type_normalized": "DENT",
    "clock_decimal": 5.9833,
    "depth_percent": null,
    "length": 2.66,
    "width": 15.36,
    "joint_number": 13100
  },
  {
    "original_index": 3140,
    "log_distance": 47203.53,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.1667,
    "depth_percent": 12,
    "length": 0.91,
    "width": 1.97,
    "joint_number": 13110
  },
  {
    "original_index": 3141,
    "log_distance": 47206.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1667,
    "depth_percent": 13,
    "length": 1.06,
    "width": 1.46,
    "joint_number": 13110
  },
  {
    "original_index": 3142,
    "log_distance": 47206.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6333,
    "depth_percent": 12,
    "length": 1.26,
    "width": 1.73,
    "joint_number": 13110
  },
  {
    "original_index": 3143,
    "log_distance": 47206.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4,
    "depth_percent": 12,
    "length": 0.83,
    "width": 1.22,
    "joint_number": 13110
  },
  {
    "original_index": 3144,
    "log_distance": 47207.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.25,
    "depth_percent": 14,
    "length": 0.63,
    "width": 1.1,
    "joint_number": 13110
  },
  {
    "original_index": 3153,
    "log_distance": 47272.56,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.5667,
    "depth_percent": 18,
    "length": 1.46,
    "width": 1.61,
    "joint_number": 13140
  },
  {
    "original_index": 3157,
    "log_distance": 47319.31,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6167,
    "depth_percent": 11,
    "length": 1.22,
    "width": 1.61,
    "joint_number": 13170
  },
  {
    "original_index": 3158,
    "log_distance": 47329.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3,
    "depth_percent": 17,
    "length": 0.87,
    "width": 1.46,
    "joint_number": 13170
  },
  {
    "original_index": 3159,
    "log_distance": 47329.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6667,
    "depth_percent": 20,
    "length": 0.79,
    "width": 5.87,
    "joint_number": 13170
  },
  {
    "original_index": 3166,
    "log_distance": 47341.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.8333,
    "depth_percent": 12,
    "length": 0.59,
    "width": 1.1,
    "joint_number": 13190
  },
  {
    "original_index": 3167,
    "log_distance": 47341.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.8167,
    "depth_percent": 23,
    "length": 0.59,
    "width": 1.65,
    "joint_number": 13190
  },
  {
    "original_index": 3168,
    "log_distance": 47341.2,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9667,
    "depth_percent": 17,
    "length": 0.59,
    "width": 6.97,
    "joint_number": 13190
  },
  {
    "original_index": 3169,
    "log_distance": 47341.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7333,
    "depth_percent": 62,
    "length": 0.98,
    "width": 1.85,
    "joint_number": 13190
  },
  {
    "original_index": 3172,
    "log_distance": 47373.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.1833,
    "depth_percent": 14,
    "length": 0.43,
    "width": 1.02,
    "joint_number": 13200
  },
  {
    "original_index": 3173,
    "log_distance": 47373.55,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.3333,
    "depth_percent": 34,
    "length": 1.46,
    "width": 1.26,
    "joint_number": 13200
  },
  {
    "original_index": 3174,
    "log_distance": 47373.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.0667,
    "depth_percent": 43,
    "length": 0.94,
    "width": 1.85,
    "joint_number": 13200
  },
  {
    "original_index": 3175,
    "log_distance": 47374.19,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 12.15,
    "depth_percent": 53,
    "length": 1.57,
    "width": 2.7,
    "joint_number": 13200
  },
  {
    "original_index": 3176,
    "log_distance": 47400.36,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.15,
    "depth_percent": 41,
    "length": 3.26,
    "width": 4.21,
    "joint_number": 13200
  },
  {
    "original_index": 3177,
    "log_distance": 47400.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.35,
    "depth_percent": 15,
    "length": 0.83,
    "width": 2.56,
    "joint_number": 13200
  },
  {
    "original_index": 3178,
    "log_distance": 47400.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.35,
    "depth_percent": 12,
    "length": 0.32,
    "width": 0.59,
    "joint_number": 13200
  },
  {
    "original_index": 3179,
    "log_distance": 47400.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1667,
    "depth_percent": 21,
    "length": 1.46,
    "width": 1.61,
    "joint_number": 13200
  },
  {
    "original_index": 3180,
    "log_distance": 47400.52,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.8167,
    "depth_percent": 17,
    "length": 1.89,
    "width": 2.01,
    "joint_number": 13200
  },
  {
    "original_index": 3181,
    "log_distance": 47400.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5667,
    "depth_percent": 18,
    "length": 0.47,
    "width": 1.26,
    "joint_number": 13200
  },
  {
    "original_index": 3182,
    "log_distance": 47400.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.9333,
    "depth_percent": 28,
    "length": 0.75,
    "width": 1.22,
    "joint_number": 13200
  },
  {
    "original_index": 3183,
    "log_distance": 47400.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.5667,
    "depth_percent": 12,
    "length": 0.67,
    "width": 2.6,
    "joint_number": 13200
  },
  {
    "original_index": 3184,
    "log_distance": 47400.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.2,
    "depth_percent": 12,
    "length": 0.94,
    "width": 1.14,
    "joint_number": 13200
  },
  {
    "original_index": 3185,
    "log_distance": 47400.7,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2333,
    "depth_percent": 16,
    "length": 0.51,
    "width": 2.84,
    "joint_number": 13200
  },
  {
    "original_index": 3186,
    "log_distance": 47400.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.7833,
    "depth_percent": 10,
    "length": 0.51,
    "width": 1.85,
    "joint_number": 13200
  },
  {
    "original_index": 3187,
    "log_distance": 47400.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6,
    "depth_percent": 11,
    "length": 0.39,
    "width": 1.53,
    "joint_number": 13200
  },
  {
    "original_index": 3188,
    "log_distance": 47400.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9,
    "depth_percent": 14,
    "length": 0.32,
    "width": 0.59,
    "joint_number": 13200
  },
  {
    "original_index": 3190,
    "log_distance": 47402.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4,
    "depth_percent": 12,
    "length": 1.81,
    "width": 2.48,
    "joint_number": 13210
  },
  {
    "original_index": 3191,
    "log_distance": 47402.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.95,
    "depth_percent": 12,
    "length": 0.59,
    "width": 1.97,
    "joint_number": 13210
  },
  {
    "original_index": 3192,
    "log_distance": 47402.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.0833,
    "depth_percent": 23,
    "length": 0.91,
    "width": 2.01,
    "joint_number": 13210
  },
  {
    "original_index": 3193,
    "log_distance": 47402.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.8833,
    "depth_percent": 15,
    "length": 0.87,
    "width": 4.45,
    "joint_number": 13210
  },
  {
    "original_index": 3194,
    "log_distance": 47402.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.6,
    "depth_percent": 13,
    "length": 0.87,
    "width": 3.15,
    "joint_number": 13210
  },
  {
    "original_index": 3195,
    "log_distance": 47402.54,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.65,
    "depth_percent": 14,
    "length": 0.71,
    "width": 1.14,
    "joint_number": 13210
  },
  {
    "original_index": 3196,
    "log_distance": 47412.91,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2167,
    "depth_percent": 52,
    "length": 0.32,
    "width": 1.34,
    "joint_number": 13210
  },
  {
    "original_index": 3197,
    "log_distance": 47413.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6167,
    "depth_percent": 19,
    "length": 0.47,
    "width": 1.06,
    "joint_number": 13210
  },
  {
    "original_index": 3199,
    "log_distance": 47448.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5667,
    "depth_percent": 11,
    "length": 0.32,
    "width": 0.59,
    "joint_number": 13220
  },
  {
    "original_index": 3200,
    "log_distance": 47480.61,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7333,
    "depth_percent": 15,
    "length": 0.67,
    "width": 3.03,
    "joint_number": 13220
  },
  {
    "original_index": 3202,
    "log_distance": 47482.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1167,
    "depth_percent": 11,
    "length": 0.47,
    "width": 1.22,
    "joint_number": 13230
  },
  {
    "original_index": 3206,
    "log_distance": 47623.55,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.0167,
    "depth_percent": 26,
    "length": 1.91,
    "width": 4.84,
    "joint_number": 13260
  },
  {
    "original_index": 3207,
    "log_distance": 47623.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7,
    "depth_percent": 13,
    "length": 0.43,
    "width": 1.3,
    "joint_number": 13260
  },
  {
    "original_index": 3208,
    "log_distance": 47623.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1,
    "depth_percent": 19,
    "length": 1.34,
    "width": 3.46,
    "joint_number": 13260
  },
  {
    "original_index": 3209,
    "log_distance": 47623.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.7667,
    "depth_percent": 23,
    "length": 0.55,
    "width": 1.14,
    "joint_number": 13260
  },
  {
    "original_index": 3210,
    "log_distance": 47623.73,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0667,
    "depth_percent": 18,
    "length": 0.59,
    "width": 1.42,
    "joint_number": 13260
  },
  {
    "original_index": 3217,
    "log_distance": 47726.21,
    "event_type_normalized": "DENT",
    "clock_decimal": 6.0833,
    "depth_percent": null,
    "length": 2.89,
    "width": 11.17,
    "joint_number": 13300
  },
  {
    "original_index": 3223,
    "log_distance": 47780.08,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.1,
    "depth_percent": 10,
    "length": 0.75,
    "width": 1.81,
    "joint_number": 13320
  },
  {
    "original_index": 3251,
    "log_distance": 48607.3,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9167,
    "depth_percent": 12,
    "length": 1.42,
    "width": 1.77,
    "joint_number": 13570
  },
  {
    "original_index": 3252,
    "log_distance": 48607.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8167,
    "depth_percent": 14,
    "length": 1.06,
    "width": 5.79,
    "joint_number": 13570
  },
  {
    "original_index": 3253,
    "log_distance": 48607.92,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0833,
    "depth_percent": 18,
    "length": 0.94,
    "width": 4.61,
    "joint_number": 13570
  },
  {
    "original_index": 3271,
    "log_distance": 48882.16,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.2333,
    "depth_percent": 59,
    "length": 2.75,
    "width": 2.39,
    "joint_number": 13700
  },
  {
    "original_index": 3272,
    "log_distance": 48882.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0833,
    "depth_percent": 12,
    "length": 0.43,
    "width": 0.67,
    "joint_number": 13700
  },
  {
    "original_index": 3273,
    "log_distance": 48882.26,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.3333,
    "depth_percent": 43,
    "length": 1.92,
    "width": 1.34,
    "joint_number": 13700
  },
  {
    "original_index": 3274,
    "log_distance": 48882.36,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.8833,
    "depth_percent": 13,
    "length": 0.79,
    "width": 1.22,
    "joint_number": 13700
  },
  {
    "original_index": 3276,
    "log_distance": 48934.99,
    "event_type_normalized": "DENT",
    "clock_decimal": 5.1667,
    "depth_percent": null,
    "length": 11.37,
    "width": 5.59,
    "joint_number": 13710
  },
  {
    "original_index": 3283,
    "log_distance": 49173.59,
    "event_type_normalized": "DENT",
    "clock_decimal": 5.8667,
    "depth_percent": null,
    "length": 19.46,
    "width": 6.98,
    "joint_number": 13770
  },
  {
    "original_index": 3309,
    "log_distance": 50168.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6667,
    "depth_percent": 10,
    "length": 1.22,
    "width": 0.87,
    "joint_number": 14020
  },
  {
    "original_index": 3310,
    "log_distance": 50168.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.3667,
    "depth_percent": 23,
    "length": 0.71,
    "width": 1.38,
    "joint_number": 14020
  },
  {
    "original_index": 3313,
    "log_distance": 50246.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6667,
    "depth_percent": 11,
    "length": 1.14,
    "width": 1.89,
    "joint_number": 14040
  },
  {
    "original_index": 3314,
    "log_distance": 50246.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.15,
    "depth_percent": 18,
    "length": 0.79,
    "width": 2.52,
    "joint_number": 14040
  },
  {
    "original_index": 3315,
    "log_distance": 50246.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8,
    "depth_percent": 22,
    "length": 0.71,
    "width": 1.5,
    "joint_number": 14040
  },
  {
    "original_index": 3316,
    "log_distance": 50246.97,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.3167,
    "depth_percent": 24,
    "length": 0.63,
    "width": 1.14,
    "joint_number": 14040
  },
  {
    "original_index": 3320,
    "log_distance": 50259.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.7667,
    "depth_percent": 13,
    "length": 0.67,
    "width": 2.52,
    "joint_number": 14060
  },
  {
    "original_index": 3321,
    "log_distance": 50264.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.9333,
    "depth_percent": 14,
    "length": 1.34,
    "width": 1.77,
    "joint_number": 14060
  },
  {
    "original_index": 3322,
    "log_distance": 50266.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.85,
    "depth_percent": 11,
    "length": 1.5,
    "width": 2.28,
    "joint_number": 14060
  },
  {
    "original_index": 3323,
    "log_distance": 50267.77,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.1,
    "depth_percent": 14,
    "length": 1.81,
    "width": 1.89,
    "joint_number": 14060
  },
  {
    "original_index": 3324,
    "log_distance": 50269.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.7167,
    "depth_percent": 13,
    "length": 1.3,
    "width": 1.97,
    "joint_number": 14060
  },
  {
    "original_index": 3325,
    "log_distance": 50269.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.0667,
    "depth_percent": 12,
    "length": 1.69,
    "width": 2.01,
    "joint_number": 14060
  },
  {
    "original_index": 3326,
    "log_distance": 50269.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.75,
    "depth_percent": 11,
    "length": 0.51,
    "width": 1.1,
    "joint_number": 14060
  },
  {
    "original_index": 3327,
    "log_distance": 50269.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.0333,
    "depth_percent": 11,
    "length": 1.18,
    "width": 1.58,
    "joint_number": 14060
  },
  {
    "original_index": 3328,
    "log_distance": 50269.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.6167,
    "depth_percent": 12,
    "length": 1.38,
    "width": 1.42,
    "joint_number": 14060
  },
  {
    "original_index": 3329,
    "log_distance": 50269.87,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2,
    "depth_percent": 10,
    "length": 1.22,
    "width": 1.61,
    "joint_number": 14060
  },
  {
    "original_index": 3330,
    "log_distance": 50270.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.6333,
    "depth_percent": 10,
    "length": 1.1,
    "width": 1.58,
    "joint_number": 14060
  },
  {
    "original_index": 3331,
    "log_distance": 50270.55,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.5667,
    "depth_percent": 10,
    "length": 2.01,
    "width": 2.6,
    "joint_number": 14060
  },
  {
    "original_index": 3332,
    "log_distance": 50270.98,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.55,
    "depth_percent": 12,
    "length": 0.94,
    "width": 1.38,
    "joint_number": 14060
  },
  {
    "original_index": 3333,
    "log_distance": 50271.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.75,
    "depth_percent": 17,
    "length": 1.26,
    "width": 1.97,
    "joint_number": 14060
  },
  {
    "original_index": 3334,
    "log_distance": 50271.8,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.1,
    "depth_percent": 13,
    "length": 1.22,
    "width": 1.65,
    "joint_number": 14060
  },
  {
    "original_index": 3335,
    "log_distance": 50271.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.7333,
    "depth_percent": 17,
    "length": 1.53,
    "width": 2.28,
    "joint_number": 14060
  },
  {
    "original_index": 3336,
    "log_distance": 50272.07,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.1167,
    "depth_percent": 15,
    "length": 1.38,
    "width": 1.61,
    "joint_number": 14060
  },
  {
    "original_index": 3337,
    "log_distance": 50272.39,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.7667,
    "depth_percent": 21,
    "length": 0.87,
    "width": 1.42,
    "joint_number": 14060
  },
  {
    "original_index": 3338,
    "log_distance": 50272.56,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 10.9667,
    "depth_percent": 18,
    "length": 2.42,
    "width": 6.58,
    "joint_number": 14060
  },
  {
    "original_index": 3339,
    "log_distance": 50272.6,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.5167,
    "depth_percent": 24,
    "length": 1.72,
    "width": 1.55,
    "joint_number": 14060
  },
  {
    "original_index": 3340,
    "log_distance": 50273.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.7167,
    "depth_percent": 11,
    "length": 0.47,
    "width": 0.75,
    "joint_number": 14060
  },
  {
    "original_index": 3341,
    "log_distance": 50273.19,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.9167,
    "depth_percent": 14,
    "length": 2.24,
    "width": 0.59,
    "joint_number": 14060
  },
  {
    "original_index": 3342,
    "log_distance": 50273.27,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.65,
    "depth_percent": 12,
    "length": 0.83,
    "width": 0.91,
    "joint_number": 14060
  },
  {
    "original_index": 3343,
    "log_distance": 50273.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3,
    "depth_percent": 18,
    "length": 0.79,
    "width": 1.26,
    "joint_number": 14060
  },
  {
    "original_index": 3345,
    "log_distance": 50273.68,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.7,
    "depth_percent": 17,
    "length": 0.71,
    "width": 1.3,
    "joint_number": 14060
  },
  {
    "original_index": 3346,
    "log_distance": 50274.16,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2333,
    "depth_percent": 16,
    "length": 1.3,
    "width": 1.61,
    "joint_number": 14060
  },
  {
    "original_index": 3347,
    "log_distance": 50274.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.95,
    "depth_percent": 11,
    "length": 0.67,
    "width": 1.22,
    "joint_number": 14060
  },
  {
    "original_index": 3348,
    "log_distance": 50275.01,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.7167,
    "depth_percent": 20,
    "length": 2.17,
    "width": 1.58,
    "joint_number": 14060
  },
  {
    "original_index": 3349,
    "log_distance": 50275.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.1333,
    "depth_percent": 19,
    "length": 2.21,
    "width": 1.18,
    "joint_number": 14060
  },
  {
    "original_index": 3350,
    "log_distance": 50275.41,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1,
    "depth_percent": 18,
    "length": 1.22,
    "width": 1.53,
    "joint_number": 14060
  },
  {
    "original_index": 3351,
    "log_distance": 50275.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1333,
    "depth_percent": 10,
    "length": 1.06,
    "width": 1.26,
    "joint_number": 14060
  },
  {
    "original_index": 3352,
    "log_distance": 50275.75,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6333,
    "depth_percent": 11,
    "length": 0.63,
    "width": 0.98,
    "joint_number": 14060
  },
  {
    "original_index": 3356,
    "log_distance": 50282.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9667,
    "depth_percent": 59,
    "length": 0.67,
    "width": 1.14,
    "joint_number": 14060
  },
  {
    "original_index": 3365,
    "log_distance": 50475.51,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9833,
    "depth_percent": 13,
    "length": 0.51,
    "width": 1.42,
    "joint_number": 14110
  },
  {
    "original_index": 3375,
    "log_distance": 50820.9,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 10,
    "depth_percent": 12,
    "length": 0.39,
    "width": 0.59,
    "joint_number": 14200
  },
  {
    "original_index": 3376,
    "log_distance": 50821.08,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 6.5167,
    "depth_percent": 19,
    "length": 0.35,
    "width": 0.71,
    "joint_number": 14200
  },
  {
    "original_index": 3391,
    "log_distance": 51203.96,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 10.5667,
    "depth_percent": 14,
    "length": 0.35,
    "width": 0.63,
    "joint_number": 14300
  },
  {
    "original_index": 3393,
    "log_distance": 51271.21,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.4333,
    "depth_percent": 22,
    "length": 1.26,
    "width": 5.26,
    "joint_number": 14310
  },
  {
    "original_index": 3394,
    "log_distance": 51271.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8667,
    "depth_percent": 12,
    "length": 0.75,
    "width": 0.71,
    "joint_number": 14310
  },
  {
    "original_index": 3395,
    "log_distance": 51271.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2333,
    "depth_percent": 11,
    "length": 0.75,
    "width": 2.17,
    "joint_number": 14310
  },
  {
    "original_index": 3396,
    "log_distance": 51271.67,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.35,
    "depth_percent": 15,
    "length": 0.51,
    "width": 0.79,
    "joint_number": 14310
  },
  {
    "original_index": 3397,
    "log_distance": 51271.78,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.25,
    "depth_percent": 12,
    "length": 0.55,
    "width": 0.75,
    "joint_number": 14310
  },
  {
    "original_index": 3398,
    "log_distance": 51271.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.9333,
    "depth_percent": 25,
    "length": 0.75,
    "width": 5.12,
    "joint_number": 14310
  },
  {
    "original_index": 3399,
    "log_distance": 51271.84,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.6,
    "depth_percent": 14,
    "length": 0.91,
    "width": 6.81,
    "joint_number": 14310
  },
  {
    "original_index": 3400,
    "log_distance": 51271.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3,
    "depth_percent": 10,
    "length": 0.59,
    "width": 10.08,
    "joint_number": 14310
  },
  {
    "original_index": 3421,
    "log_distance": 51640,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 11.5833,
    "depth_percent": 71,
    "length": 0.88,
    "width": 4.48,
    "joint_number": 14470
  },
  {
    "original_index": 3422,
    "log_distance": 51640.27,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.15,
    "depth_percent": 57,
    "length": 0.83,
    "width": 1.34,
    "joint_number": 14470
  },
  {
    "original_index": 3423,
    "log_distance": 51642.63,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.45,
    "depth_percent": 10,
    "length": 0.83,
    "width": 1.26,
    "joint_number": 14470
  },
  {
    "original_index": 3427,
    "log_distance": 51691.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3333,
    "depth_percent": 20,
    "length": 0.83,
    "width": 1.42,
    "joint_number": 14500
  },
  {
    "original_index": 3437,
    "log_distance": 51974.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7,
    "depth_percent": 10,
    "length": 0.51,
    "width": 0.94,
    "joint_number": 14590
  },
  {
    "original_index": 3444,
    "log_distance": 52251.87,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9667,
    "depth_percent": 15,
    "length": 2.05,
    "width": 2.28,
    "joint_number": 14650
  },
  {
    "original_index": 3445,
    "log_distance": 52251.88,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4833,
    "depth_percent": 12,
    "length": 1.97,
    "width": 0.98,
    "joint_number": 14650
  },
  {
    "original_index": 3476,
    "log_distance": 53234.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.15,
    "depth_percent": 13,
    "length": 0.51,
    "width": 0.71,
    "joint_number": 14910
  },
  {
    "original_index": 3477,
    "log_distance": 53264.25,
    "event_type_normalized": "DENT",
    "clock_decimal": 6.2,
    "depth_percent": null,
    "length": 18.09,
    "width": 5.59,
    "joint_number": 14910
  },
  {
    "original_index": 3479,
    "log_distance": 53274.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.85,
    "depth_percent": 13,
    "length": 0.91,
    "width": 1.42,
    "joint_number": 14920
  },
  {
    "original_index": 3480,
    "log_distance": 53275.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.1667,
    "depth_percent": 10,
    "length": 0.63,
    "width": 1.1,
    "joint_number": 14920
  },
  {
    "original_index": 3481,
    "log_distance": 53313.09,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.3667,
    "depth_percent": 10,
    "length": 0.51,
    "width": 0.63,
    "joint_number": 14920
  },
  {
    "original_index": 3495,
    "log_distance": 53823.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.0167,
    "depth_percent": 15,
    "length": 0.63,
    "width": 1.26,
    "joint_number": 15050
  },
  {
    "original_index": 3527,
    "log_distance": 54472.58,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.0833,
    "depth_percent": 12,
    "length": 1.65,
    "width": 0.63,
    "joint_number": 15240
  },
  {
    "original_index": 3528,
    "log_distance": 54472.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5,
    "depth_percent": 28,
    "length": 0.83,
    "width": 1.46,
    "joint_number": 15240
  },
  {
    "original_index": 3529,
    "log_distance": 54472.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.2,
    "depth_percent": 23,
    "length": 0.83,
    "width": 5.79,
    "joint_number": 15240
  },
  {
    "original_index": 3536,
    "log_distance": 54627.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.1833,
    "depth_percent": 21,
    "length": 0.55,
    "width": 2.87,
    "joint_number": 15280
  },
  {
    "original_index": 3564,
    "log_distance": 55653.55,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 4.05,
    "depth_percent": 11,
    "length": 0.35,
    "width": 0.63,
    "joint_number": 15530
  },
  {
    "original_index": 3566,
    "log_distance": 55696.34,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 3.1,
    "depth_percent": 18,
    "length": 0.39,
    "width": 0.87,
    "joint_number": 15540
  }
];

export const missing: MissingAnomaly[] = [
  {
    "original_index": 580,
    "log_distance": 9473.05,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.25,
    "depth_percent": 10,
    "length": 0.71,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 602,
    "log_distance": 10202.72,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.1833,
    "depth_percent": 13,
    "length": 2.65,
    "width": 3.81,
    "joint_number": null
  },
  {
    "original_index": 609,
    "log_distance": 10392.93,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 8.3667,
    "depth_percent": 17,
    "length": 3.66,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 610,
    "log_distance": 10404.26,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 2.3833,
    "depth_percent": 17,
    "length": 3.58,
    "width": 0.63,
    "joint_number": null
  },
  {
    "original_index": 673,
    "log_distance": 12381.12,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 5.0333,
    "depth_percent": 20,
    "length": 3.66,
    "width": 2.68,
    "joint_number": null
  },
  {
    "original_index": 707,
    "log_distance": 13393.85,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 11.8,
    "depth_percent": 14,
    "length": 2.52,
    "width": 8.15,
    "joint_number": null
  },
  {
    "original_index": 828,
    "log_distance": 15957.99,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.95,
    "depth_percent": 10,
    "length": 0.75,
    "width": 0.83,
    "joint_number": null
  },
  {
    "original_index": 831,
    "log_distance": 16000.75,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 7.5,
    "depth_percent": 16,
    "length": 0.71,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 899,
    "log_distance": 18175.87,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.4,
    "depth_percent": 20,
    "length": 4.97,
    "width": 6.79,
    "joint_number": null
  },
  {
    "original_index": 953,
    "log_distance": 19910.87,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6667,
    "depth_percent": 10,
    "length": 0.59,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 957,
    "log_distance": 20016.6,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1,
    "depth_percent": 10,
    "length": 0.71,
    "width": 0.67,
    "joint_number": null
  },
  {
    "original_index": 1000,
    "log_distance": 21304.48,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 3.15,
    "depth_percent": 14,
    "length": 0.59,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 1022,
    "log_distance": 21681.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6667,
    "depth_percent": 10,
    "length": 2.24,
    "width": 1.3,
    "joint_number": null
  },
  {
    "original_index": 1049,
    "log_distance": 22483.34,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.9167,
    "depth_percent": 10,
    "length": 2.6,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1051,
    "log_distance": 22485.22,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 12.4333,
    "depth_percent": 11,
    "length": 3.39,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1066,
    "log_distance": 22941.65,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.9833,
    "depth_percent": 15,
    "length": 3.23,
    "width": 7.6,
    "joint_number": null
  },
  {
    "original_index": 1076,
    "log_distance": 23162.08,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 1.6667,
    "depth_percent": 25,
    "length": 5.2,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1091,
    "log_distance": 23644.93,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 8.6,
    "depth_percent": 10,
    "length": 0.51,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1139,
    "log_distance": 25249.8,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.8667,
    "depth_percent": 14,
    "length": 1.14,
    "width": 5.8,
    "joint_number": null
  },
  {
    "original_index": 1168,
    "log_distance": 26080.87,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 12.0833,
    "depth_percent": 10,
    "length": 0.67,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 1218,
    "log_distance": 27579.43,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 1.35,
    "depth_percent": 12,
    "length": 5.24,
    "width": 1.38,
    "joint_number": null
  },
  {
    "original_index": 1219,
    "log_distance": 27581.21,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 1.15,
    "depth_percent": 24,
    "length": 3.9,
    "width": 0.87,
    "joint_number": null
  },
  {
    "original_index": 1220,
    "log_distance": 27582.11,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 1.0667,
    "depth_percent": 21,
    "length": 3.42,
    "width": 0.75,
    "joint_number": null
  },
  {
    "original_index": 1221,
    "log_distance": 27582.56,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 1.0167,
    "depth_percent": 11,
    "length": 3.46,
    "width": 2.17,
    "joint_number": null
  },
  {
    "original_index": 1222,
    "log_distance": 27582.88,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 1.25,
    "depth_percent": 21,
    "length": 3.39,
    "width": 0.75,
    "joint_number": null
  },
  {
    "original_index": 1231,
    "log_distance": 27892.3,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 8.2833,
    "depth_percent": 10,
    "length": 3.23,
    "width": 1.06,
    "joint_number": null
  },
  {
    "original_index": 1238,
    "log_distance": 28027.51,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 7.0333,
    "depth_percent": 10,
    "length": 0.43,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1244,
    "log_distance": 28207.03,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 10.5167,
    "depth_percent": 17,
    "length": 4.33,
    "width": 1.42,
    "joint_number": null
  },
  {
    "original_index": 1260,
    "log_distance": 28783.01,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 4.7833,
    "depth_percent": 13,
    "length": 6.3,
    "width": 1.89,
    "joint_number": null
  },
  {
    "original_index": 1268,
    "log_distance": 29052.98,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.3333,
    "depth_percent": 42,
    "length": 5.77,
    "width": 42.81,
    "joint_number": null
  },
  {
    "original_index": 1273,
    "log_distance": 29146.54,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.4833,
    "depth_percent": 35,
    "length": 8.46,
    "width": 10.87,
    "joint_number": null
  },
  {
    "original_index": 1280,
    "log_distance": 29208.08,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.4833,
    "depth_percent": 11,
    "length": 4.93,
    "width": 6.08,
    "joint_number": null
  },
  {
    "original_index": 1328,
    "log_distance": 30570.99,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 11.4833,
    "depth_percent": 19,
    "length": 3.31,
    "width": 0.55,
    "joint_number": null
  },
  {
    "original_index": 1329,
    "log_distance": 30573.44,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 11.6333,
    "depth_percent": 10,
    "length": 4.17,
    "width": 4.25,
    "joint_number": null
  },
  {
    "original_index": 1330,
    "log_distance": 30574.03,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 11.85,
    "depth_percent": 26,
    "length": 3.66,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1331,
    "log_distance": 30574.76,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 11.6,
    "depth_percent": 10,
    "length": 3.11,
    "width": 0.87,
    "joint_number": null
  },
  {
    "original_index": 1333,
    "log_distance": 30576.86,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 11.7,
    "depth_percent": 10,
    "length": 3.23,
    "width": 1.58,
    "joint_number": null
  },
  {
    "original_index": 1334,
    "log_distance": 30577.29,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 11.5,
    "depth_percent": 14,
    "length": 4.02,
    "width": 3.74,
    "joint_number": null
  },
  {
    "original_index": 1335,
    "log_distance": 30577.99,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 11.3333,
    "depth_percent": 10,
    "length": 4.13,
    "width": 8.66,
    "joint_number": null
  },
  {
    "original_index": 1340,
    "log_distance": 30676.87,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 6.4,
    "depth_percent": 17,
    "length": 3.03,
    "width": 0.55,
    "joint_number": null
  },
  {
    "original_index": 1341,
    "log_distance": 30676.88,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 6.5667,
    "depth_percent": 13,
    "length": 2.79,
    "width": 0.63,
    "joint_number": null
  },
  {
    "original_index": 1402,
    "log_distance": 31980.44,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.4333,
    "depth_percent": 13,
    "length": 3.34,
    "width": 16.86,
    "joint_number": null
  },
  {
    "original_index": 1443,
    "log_distance": 32925.21,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.3333,
    "depth_percent": 31,
    "length": 21.61,
    "width": 16.78,
    "joint_number": null
  },
  {
    "original_index": 1444,
    "log_distance": 32925.99,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.2833,
    "depth_percent": 21,
    "length": 4.21,
    "width": 2.89,
    "joint_number": null
  },
  {
    "original_index": 1445,
    "log_distance": 32927.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.8833,
    "depth_percent": 19,
    "length": 1.46,
    "width": 0.75,
    "joint_number": null
  },
  {
    "original_index": 1446,
    "log_distance": 32928.3,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.2833,
    "depth_percent": 14,
    "length": 2.57,
    "width": 5.09,
    "joint_number": null
  },
  {
    "original_index": 1450,
    "log_distance": 33031.11,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.4167,
    "depth_percent": 10,
    "length": 2.95,
    "width": 5.63,
    "joint_number": null
  },
  {
    "original_index": 1453,
    "log_distance": 33032.88,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.5667,
    "depth_percent": 10,
    "length": 0.88,
    "width": 2.51,
    "joint_number": null
  },
  {
    "original_index": 1458,
    "log_distance": 33190.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.4,
    "depth_percent": 11,
    "length": 3.66,
    "width": 7.36,
    "joint_number": null
  },
  {
    "original_index": 1462,
    "log_distance": 33304.46,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 11.7833,
    "depth_percent": 28,
    "length": 4.36,
    "width": 6.72,
    "joint_number": null
  },
  {
    "original_index": 1463,
    "log_distance": 33304.98,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 11.5833,
    "depth_percent": 11,
    "length": 3.67,
    "width": 5.55,
    "joint_number": null
  },
  {
    "original_index": 1466,
    "log_distance": 33374.95,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.1667,
    "depth_percent": 23,
    "length": 3.55,
    "width": 1.91,
    "joint_number": null
  },
  {
    "original_index": 1467,
    "log_distance": 33381.36,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.5333,
    "depth_percent": 31,
    "length": 1.76,
    "width": 1.32,
    "joint_number": null
  },
  {
    "original_index": 1468,
    "log_distance": 33381.84,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.4,
    "depth_percent": 29,
    "length": 4.33,
    "width": 4.63,
    "joint_number": null
  },
  {
    "original_index": 1469,
    "log_distance": 33383.18,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.8667,
    "depth_percent": 13,
    "length": 4.98,
    "width": 1.64,
    "joint_number": null
  },
  {
    "original_index": 1472,
    "log_distance": 33405.66,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5,
    "depth_percent": 15,
    "length": 2.05,
    "width": 1.5,
    "joint_number": null
  },
  {
    "original_index": 1473,
    "log_distance": 33405.96,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.3333,
    "depth_percent": 10,
    "length": 1.69,
    "width": 1.58,
    "joint_number": null
  },
  {
    "original_index": 1478,
    "log_distance": 33480.23,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 12.4667,
    "depth_percent": 26,
    "length": 3.61,
    "width": 3.29,
    "joint_number": null
  },
  {
    "original_index": 1480,
    "log_distance": 33481.04,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.9333,
    "depth_percent": 15,
    "length": 0.79,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1482,
    "log_distance": 33512.3,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.05,
    "depth_percent": 33,
    "length": 4.28,
    "width": 21.68,
    "joint_number": null
  },
  {
    "original_index": 1485,
    "log_distance": 33592.28,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.7667,
    "depth_percent": 25,
    "length": 4.87,
    "width": 17.39,
    "joint_number": null
  },
  {
    "original_index": 1487,
    "log_distance": 33638.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.5833,
    "depth_percent": 10,
    "length": 2.99,
    "width": 0.67,
    "joint_number": null
  },
  {
    "original_index": 1488,
    "log_distance": 33670.4,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.8833,
    "depth_percent": 10,
    "length": 2.71,
    "width": 8.94,
    "joint_number": null
  },
  {
    "original_index": 1496,
    "log_distance": 33817.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.4333,
    "depth_percent": 36,
    "length": 0.91,
    "width": 8.35,
    "joint_number": null
  },
  {
    "original_index": 1497,
    "log_distance": 33853.06,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 11.95,
    "depth_percent": 10,
    "length": 1.1,
    "width": 1.18,
    "joint_number": null
  },
  {
    "original_index": 1503,
    "log_distance": 33949.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0167,
    "depth_percent": 13,
    "length": 2.84,
    "width": 2.36,
    "joint_number": null
  },
  {
    "original_index": 1504,
    "log_distance": 33975.28,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1667,
    "depth_percent": 18,
    "length": 3.7,
    "width": 0.87,
    "joint_number": null
  },
  {
    "original_index": 1505,
    "log_distance": 33975.32,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.45,
    "depth_percent": 10,
    "length": 2.64,
    "width": 8.5,
    "joint_number": null
  },
  {
    "original_index": 1506,
    "log_distance": 33975.39,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.7167,
    "depth_percent": 16,
    "length": 2.63,
    "width": 7.23,
    "joint_number": null
  },
  {
    "original_index": 1509,
    "log_distance": 34024.54,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.4167,
    "depth_percent": 18,
    "length": 4.12,
    "width": 3.94,
    "joint_number": null
  },
  {
    "original_index": 1510,
    "log_distance": 34025.04,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.3167,
    "depth_percent": 25,
    "length": 2.81,
    "width": 3.37,
    "joint_number": null
  },
  {
    "original_index": 1511,
    "log_distance": 34055.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.4667,
    "depth_percent": 21,
    "length": 1.38,
    "width": 4.41,
    "joint_number": null
  },
  {
    "original_index": 1513,
    "log_distance": 34057.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.7167,
    "depth_percent": 11,
    "length": 0.71,
    "width": 0.67,
    "joint_number": null
  },
  {
    "original_index": 1516,
    "log_distance": 34137.11,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.5833,
    "depth_percent": 22,
    "length": 2.92,
    "width": 11.5,
    "joint_number": null
  },
  {
    "original_index": 1517,
    "log_distance": 34137.13,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.6667,
    "depth_percent": 19,
    "length": 2.6,
    "width": 14.89,
    "joint_number": null
  },
  {
    "original_index": 1518,
    "log_distance": 34137.15,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.65,
    "depth_percent": 14,
    "length": 2.72,
    "width": 3.5,
    "joint_number": null
  },
  {
    "original_index": 1537,
    "log_distance": 34859.79,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 6.9667,
    "depth_percent": 15,
    "length": 0.59,
    "width": 0.87,
    "joint_number": null
  },
  {
    "original_index": 1538,
    "log_distance": 34861.31,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 10.8333,
    "depth_percent": 17,
    "length": 0.71,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1541,
    "log_distance": 34919.27,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 11.3,
    "depth_percent": 10,
    "length": 0.61,
    "width": 3.27,
    "joint_number": null
  },
  {
    "original_index": 1561,
    "log_distance": 35581.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.9833,
    "depth_percent": 15,
    "length": 0.83,
    "width": 1.06,
    "joint_number": null
  },
  {
    "original_index": 1567,
    "log_distance": 35798.42,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 6.2667,
    "depth_percent": 18,
    "length": 0.47,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1569,
    "log_distance": 35820.7,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.0333,
    "depth_percent": 32,
    "length": 4.37,
    "width": 2.54,
    "joint_number": null
  },
  {
    "original_index": 1570,
    "log_distance": 35820.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.9,
    "depth_percent": 18,
    "length": 2.28,
    "width": 9.8,
    "joint_number": null
  },
  {
    "original_index": 1571,
    "log_distance": 35820.89,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.2667,
    "depth_percent": 22,
    "length": 1.6,
    "width": 7.23,
    "joint_number": null
  },
  {
    "original_index": 1572,
    "log_distance": 35820.93,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.8833,
    "depth_percent": 13,
    "length": 0.71,
    "width": 1.69,
    "joint_number": null
  },
  {
    "original_index": 1589,
    "log_distance": 36460.28,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 6.9667,
    "depth_percent": 10,
    "length": 1.02,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1651,
    "log_distance": 38383.95,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 9.7167,
    "depth_percent": 16,
    "length": 3.78,
    "width": 2.52,
    "joint_number": null
  },
  {
    "original_index": 1672,
    "log_distance": 39144.72,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.5333,
    "depth_percent": 10,
    "length": 0.98,
    "width": 1.18,
    "joint_number": null
  },
  {
    "original_index": 1683,
    "log_distance": 39334.75,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.4167,
    "depth_percent": 16,
    "length": 4.36,
    "width": 8.99,
    "joint_number": null
  },
  {
    "original_index": 1685,
    "log_distance": 39335.7,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 2.1,
    "depth_percent": 10,
    "length": 2.33,
    "width": 12.3,
    "joint_number": null
  },
  {
    "original_index": 1699,
    "log_distance": 39592.67,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.6667,
    "depth_percent": 25,
    "length": 4.07,
    "width": 6.33,
    "joint_number": null
  },
  {
    "original_index": 1710,
    "log_distance": 39747.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.1667,
    "depth_percent": 11,
    "length": 1.42,
    "width": 1.34,
    "joint_number": null
  },
  {
    "original_index": 1721,
    "log_distance": 40008.62,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 5.0333,
    "depth_percent": 10,
    "length": 1.46,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1722,
    "log_distance": 40009.5,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 8.6167,
    "depth_percent": 10,
    "length": 0.59,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1739,
    "log_distance": 40668.73,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.95,
    "depth_percent": 18,
    "length": 1.97,
    "width": 1.47,
    "joint_number": null
  },
  {
    "original_index": 1758,
    "log_distance": 41131.05,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 10.15,
    "depth_percent": 14,
    "length": 3.66,
    "width": 1.02,
    "joint_number": null
  },
  {
    "original_index": 1760,
    "log_distance": 41163.99,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 2.15,
    "depth_percent": 12,
    "length": 4.17,
    "width": 1.77,
    "joint_number": null
  },
  {
    "original_index": 1761,
    "log_distance": 41165.77,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 8.2,
    "depth_percent": 16,
    "length": 0.59,
    "width": 0.63,
    "joint_number": null
  },
  {
    "original_index": 1762,
    "log_distance": 41166.98,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 2.1,
    "depth_percent": 11,
    "length": 3.78,
    "width": 1.42,
    "joint_number": null
  },
  {
    "original_index": 1763,
    "log_distance": 41170.29,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 1.9,
    "depth_percent": 30,
    "length": 3.82,
    "width": 5.55,
    "joint_number": null
  },
  {
    "original_index": 1764,
    "log_distance": 41174.55,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 11.9667,
    "depth_percent": 11,
    "length": 0.47,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 1773,
    "log_distance": 41466.16,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.7333,
    "depth_percent": 29,
    "length": 5,
    "width": 10.54,
    "joint_number": null
  },
  {
    "original_index": 1774,
    "log_distance": 41466.18,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.75,
    "depth_percent": 21,
    "length": 5.56,
    "width": 2.58,
    "joint_number": null
  },
  {
    "original_index": 1775,
    "log_distance": 41466.26,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.3167,
    "depth_percent": 14,
    "length": 0.97,
    "width": 3.27,
    "joint_number": null
  },
  {
    "original_index": 1776,
    "log_distance": 41485.96,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.55,
    "depth_percent": 15,
    "length": 4.38,
    "width": 3.16,
    "joint_number": null
  },
  {
    "original_index": 1777,
    "log_distance": 41486.24,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 10.2667,
    "depth_percent": 17,
    "length": 2.56,
    "width": 2.39,
    "joint_number": null
  },
  {
    "original_index": 1778,
    "log_distance": 41486.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.15,
    "depth_percent": 15,
    "length": 1.14,
    "width": 1.26,
    "joint_number": null
  },
  {
    "original_index": 1779,
    "log_distance": 41486.78,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 10.2167,
    "depth_percent": 12,
    "length": 4.25,
    "width": 3.16,
    "joint_number": null
  },
  {
    "original_index": 1780,
    "log_distance": 41501.43,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.55,
    "depth_percent": 10,
    "length": 2.52,
    "width": 0.75,
    "joint_number": null
  },
  {
    "original_index": 1781,
    "log_distance": 41502.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1667,
    "depth_percent": 14,
    "length": 4.25,
    "width": 0.94,
    "joint_number": null
  },
  {
    "original_index": 1782,
    "log_distance": 41503.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.3667,
    "depth_percent": 10,
    "length": 1.18,
    "width": 0.83,
    "joint_number": null
  },
  {
    "original_index": 1783,
    "log_distance": 41504.01,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.4667,
    "depth_percent": 10,
    "length": 4.39,
    "width": 5.72,
    "joint_number": null
  },
  {
    "original_index": 1793,
    "log_distance": 41593.61,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.9667,
    "depth_percent": 16,
    "length": 3.71,
    "width": 3.96,
    "joint_number": null
  },
  {
    "original_index": 1794,
    "log_distance": 41605.47,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.4167,
    "depth_percent": 15,
    "length": 3.43,
    "width": 1.22,
    "joint_number": null
  },
  {
    "original_index": 1795,
    "log_distance": 41606.33,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.35,
    "depth_percent": 13,
    "length": 1.53,
    "width": 1.38,
    "joint_number": null
  },
  {
    "original_index": 1796,
    "log_distance": 41607.15,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 2.0667,
    "depth_percent": 23,
    "length": 5.15,
    "width": 3.54,
    "joint_number": null
  },
  {
    "original_index": 1797,
    "log_distance": 41607.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.45,
    "depth_percent": 11,
    "length": 1.42,
    "width": 0.91,
    "joint_number": null
  },
  {
    "original_index": 1798,
    "log_distance": 41607.68,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 1.9,
    "depth_percent": 25,
    "length": 3.62,
    "width": 2.81,
    "joint_number": null
  },
  {
    "original_index": 1799,
    "log_distance": 41608.36,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 2.4833,
    "depth_percent": 13,
    "length": 1.69,
    "width": 1.2,
    "joint_number": null
  },
  {
    "original_index": 1800,
    "log_distance": 41610.12,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.3167,
    "depth_percent": 13,
    "length": 3.25,
    "width": 6.37,
    "joint_number": null
  },
  {
    "original_index": 1801,
    "log_distance": 41610.66,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.7667,
    "depth_percent": 10,
    "length": 2.63,
    "width": 4.13,
    "joint_number": null
  },
  {
    "original_index": 1802,
    "log_distance": 41611.24,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.7333,
    "depth_percent": 17,
    "length": 3.25,
    "width": 3.71,
    "joint_number": null
  },
  {
    "original_index": 1803,
    "log_distance": 41614.46,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.2833,
    "depth_percent": 16,
    "length": 1.1,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 1805,
    "log_distance": 41636.74,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.7667,
    "depth_percent": 25,
    "length": 2.09,
    "width": 1.26,
    "joint_number": null
  },
  {
    "original_index": 1806,
    "log_distance": 41637.81,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.9333,
    "depth_percent": 14,
    "length": 2.09,
    "width": 1.89,
    "joint_number": null
  },
  {
    "original_index": 1807,
    "log_distance": 41645.97,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.35,
    "depth_percent": 20,
    "length": 5.22,
    "width": 4.96,
    "joint_number": null
  },
  {
    "original_index": 1808,
    "log_distance": 41647.17,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.25,
    "depth_percent": 16,
    "length": 0.63,
    "width": 0.87,
    "joint_number": null
  },
  {
    "original_index": 1809,
    "log_distance": 41647.33,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.7167,
    "depth_percent": 16,
    "length": 2.06,
    "width": 3.94,
    "joint_number": null
  },
  {
    "original_index": 1810,
    "log_distance": 41648.63,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.75,
    "depth_percent": 12,
    "length": 2.66,
    "width": 3.92,
    "joint_number": null
  },
  {
    "original_index": 1811,
    "log_distance": 41649.13,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 10.3833,
    "depth_percent": 15,
    "length": 0.75,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1812,
    "log_distance": 41649.59,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.6333,
    "depth_percent": 24,
    "length": 0.94,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1813,
    "log_distance": 41650.41,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.5333,
    "depth_percent": 15,
    "length": 3.7,
    "width": 3.56,
    "joint_number": null
  },
  {
    "original_index": 1814,
    "log_distance": 41651.43,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.65,
    "depth_percent": 14,
    "length": 2.66,
    "width": 2.64,
    "joint_number": null
  },
  {
    "original_index": 1815,
    "log_distance": 41651.88,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.6333,
    "depth_percent": 14,
    "length": 2.84,
    "width": 4.19,
    "joint_number": null
  },
  {
    "original_index": 1816,
    "log_distance": 41652.4,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.65,
    "depth_percent": 12,
    "length": 2.08,
    "width": 2.26,
    "joint_number": null
  },
  {
    "original_index": 1818,
    "log_distance": 41653.26,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.8667,
    "depth_percent": 19,
    "length": 3.68,
    "width": 2.75,
    "joint_number": null
  },
  {
    "original_index": 1819,
    "log_distance": 41653.89,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.8,
    "depth_percent": 21,
    "length": 2.99,
    "width": 2.54,
    "joint_number": null
  },
  {
    "original_index": 1829,
    "log_distance": 41704.24,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.3,
    "depth_percent": 14,
    "length": 5.59,
    "width": 14.6,
    "joint_number": null
  },
  {
    "original_index": 1832,
    "log_distance": 41705.97,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.7167,
    "depth_percent": 11,
    "length": 4.12,
    "width": 17.76,
    "joint_number": null
  },
  {
    "original_index": 1897,
    "log_distance": 43597.89,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.75,
    "depth_percent": 14,
    "length": 2.4,
    "width": 7.67,
    "joint_number": null
  },
  {
    "original_index": 1908,
    "log_distance": 43925.26,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 7.85,
    "depth_percent": 15,
    "length": 2.32,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 1909,
    "log_distance": 43928.97,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 9.1333,
    "depth_percent": 14,
    "length": 3.03,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 1910,
    "log_distance": 43930.49,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 9.55,
    "depth_percent": 13,
    "length": 3.46,
    "width": 0.94,
    "joint_number": null
  },
  {
    "original_index": 1911,
    "log_distance": 43930.51,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 9.3833,
    "depth_percent": 27,
    "length": 3.42,
    "width": 0.55,
    "joint_number": null
  },
  {
    "original_index": 1913,
    "log_distance": 43949.85,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4167,
    "depth_percent": 13,
    "length": 1.58,
    "width": 1.42,
    "joint_number": null
  },
  {
    "original_index": 1914,
    "log_distance": 43950.29,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.4667,
    "depth_percent": 10,
    "length": 1.65,
    "width": 2.48,
    "joint_number": null
  },
  {
    "original_index": 1915,
    "log_distance": 43954.18,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 9.4333,
    "depth_percent": 13,
    "length": 1.81,
    "width": 2.93,
    "joint_number": null
  },
  {
    "original_index": 1916,
    "log_distance": 43956.32,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 2.25,
    "depth_percent": 11,
    "length": 2.28,
    "width": 1.91,
    "joint_number": null
  },
  {
    "original_index": 1917,
    "log_distance": 43956.74,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 1.7167,
    "depth_percent": 12,
    "length": 5.46,
    "width": 5.22,
    "joint_number": null
  },
  {
    "original_index": 1918,
    "log_distance": 43957.47,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.35,
    "depth_percent": 12,
    "length": 2.4,
    "width": 1.93,
    "joint_number": null
  },
  {
    "original_index": 1919,
    "log_distance": 43959.89,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.4167,
    "depth_percent": 12,
    "length": 3.35,
    "width": 0.83,
    "joint_number": null
  },
  {
    "original_index": 1920,
    "log_distance": 43962.76,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 2.35,
    "depth_percent": 10,
    "length": 2.24,
    "width": 1.42,
    "joint_number": null
  },
  {
    "original_index": 1921,
    "log_distance": 43981.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.2333,
    "depth_percent": 11,
    "length": 0.87,
    "width": 1.18,
    "joint_number": null
  },
  {
    "original_index": 1923,
    "log_distance": 43985.28,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 10.6333,
    "depth_percent": 16,
    "length": 3.58,
    "width": 7.42,
    "joint_number": null
  },
  {
    "original_index": 1929,
    "log_distance": 44100.91,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.7,
    "depth_percent": 23,
    "length": 10.97,
    "width": 12.82,
    "joint_number": null
  },
  {
    "original_index": 1946,
    "log_distance": 44640.11,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6333,
    "depth_percent": 13,
    "length": 0.87,
    "width": 0.83,
    "joint_number": null
  },
  {
    "original_index": 1947,
    "log_distance": 44641.35,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8167,
    "depth_percent": 12,
    "length": 1.02,
    "width": 0.98,
    "joint_number": null
  },
  {
    "original_index": 1948,
    "log_distance": 44641.95,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.85,
    "depth_percent": 20,
    "length": 1.38,
    "width": 1.3,
    "joint_number": null
  },
  {
    "original_index": 1949,
    "log_distance": 44642.49,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7667,
    "depth_percent": 22,
    "length": 1.1,
    "width": 0.83,
    "joint_number": null
  },
  {
    "original_index": 1950,
    "log_distance": 44647.98,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.7,
    "depth_percent": 16,
    "length": 6.84,
    "width": 3.81,
    "joint_number": null
  },
  {
    "original_index": 1952,
    "log_distance": 44698.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.2667,
    "depth_percent": 13,
    "length": 1.22,
    "width": 1.1,
    "joint_number": null
  },
  {
    "original_index": 1953,
    "log_distance": 44698.71,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.5833,
    "depth_percent": 11,
    "length": 1.1,
    "width": 1.1,
    "joint_number": null
  },
  {
    "original_index": 1954,
    "log_distance": 44699.21,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.6333,
    "depth_percent": 20,
    "length": 3.23,
    "width": 3.77,
    "joint_number": null
  },
  {
    "original_index": 1955,
    "log_distance": 44700.94,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 7.9333,
    "depth_percent": 10,
    "length": 1.3,
    "width": 1.26,
    "joint_number": null
  },
  {
    "original_index": 1956,
    "log_distance": 44701.23,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.7167,
    "depth_percent": 10,
    "length": 0.91,
    "width": 0.91,
    "joint_number": null
  },
  {
    "original_index": 1957,
    "log_distance": 44703.81,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 3.9167,
    "depth_percent": 11,
    "length": 0.47,
    "width": 0.83,
    "joint_number": null
  },
  {
    "original_index": 1966,
    "log_distance": 44940,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.2833,
    "depth_percent": 15,
    "length": 3.73,
    "width": 5.82,
    "joint_number": null
  },
  {
    "original_index": 1968,
    "log_distance": 44963.32,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1167,
    "depth_percent": 17,
    "length": 1.06,
    "width": 1.06,
    "joint_number": null
  },
  {
    "original_index": 1971,
    "log_distance": 45013.1,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.4833,
    "depth_percent": 17,
    "length": 0.98,
    "width": 0.63,
    "joint_number": null
  },
  {
    "original_index": 1975,
    "log_distance": 45112.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.5,
    "depth_percent": 38,
    "length": 1.1,
    "width": 1.22,
    "joint_number": null
  },
  {
    "original_index": 1976,
    "log_distance": 45112.14,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.0167,
    "depth_percent": 39,
    "length": 1.22,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 1978,
    "log_distance": 45138.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 3.95,
    "depth_percent": 14,
    "length": 0.98,
    "width": 1.1,
    "joint_number": null
  },
  {
    "original_index": 1979,
    "log_distance": 45139.21,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.5667,
    "depth_percent": 47,
    "length": 5.47,
    "width": 5.59,
    "joint_number": null
  },
  {
    "original_index": 1980,
    "log_distance": 45151.38,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.35,
    "depth_percent": 14,
    "length": 1.22,
    "width": 1.34,
    "joint_number": null
  },
  {
    "original_index": 2001,
    "log_distance": 45676.4,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.3333,
    "depth_percent": 36,
    "length": 3.82,
    "width": 6.49,
    "joint_number": null
  },
  {
    "original_index": 2009,
    "log_distance": 45950.05,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.45,
    "depth_percent": 11,
    "length": 2.63,
    "width": 16.36,
    "joint_number": null
  },
  {
    "original_index": 2010,
    "log_distance": 45950.15,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.45,
    "depth_percent": 14,
    "length": 1.25,
    "width": 2.24,
    "joint_number": null
  },
  {
    "original_index": 2012,
    "log_distance": 45951.57,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.2333,
    "depth_percent": 10,
    "length": 2.4,
    "width": 5.82,
    "joint_number": null
  },
  {
    "original_index": 2013,
    "log_distance": 45951.85,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.2333,
    "depth_percent": 14,
    "length": 2.63,
    "width": 19,
    "joint_number": null
  },
  {
    "original_index": 2027,
    "log_distance": 46196.86,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.1833,
    "depth_percent": 10,
    "length": 3.97,
    "width": 2.39,
    "joint_number": null
  },
  {
    "original_index": 2028,
    "log_distance": 46199.31,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.4167,
    "depth_percent": 11,
    "length": 1.06,
    "width": 3.39,
    "joint_number": null
  },
  {
    "original_index": 2033,
    "log_distance": 46333.84,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 9.05,
    "depth_percent": 24,
    "length": 4.57,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 2036,
    "log_distance": 46377.81,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 7.6,
    "depth_percent": 12,
    "length": 0.94,
    "width": 1.06,
    "joint_number": null
  },
  {
    "original_index": 2050,
    "log_distance": 46664.82,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.8167,
    "depth_percent": 20,
    "length": 0.94,
    "width": 0.67,
    "joint_number": null
  },
  {
    "original_index": 2054,
    "log_distance": 46733.12,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.4167,
    "depth_percent": 15,
    "length": 0.87,
    "width": 0.94,
    "joint_number": null
  },
  {
    "original_index": 2057,
    "log_distance": 46764.12,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.2167,
    "depth_percent": 12,
    "length": 3.56,
    "width": 3.48,
    "joint_number": null
  },
  {
    "original_index": 2058,
    "log_distance": 46764.26,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.25,
    "depth_percent": 28,
    "length": 5.63,
    "width": 13.45,
    "joint_number": null
  },
  {
    "original_index": 2061,
    "log_distance": 46869.83,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 11.4167,
    "depth_percent": 12,
    "length": 3.42,
    "width": 4.53,
    "joint_number": null
  },
  {
    "original_index": 2078,
    "log_distance": 47266.22,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.3167,
    "depth_percent": 11,
    "length": 3.04,
    "width": 7.08,
    "joint_number": null
  },
  {
    "original_index": 2079,
    "log_distance": 47266.24,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 1.7833,
    "depth_percent": 12,
    "length": 0.94,
    "width": 1.97,
    "joint_number": null
  },
  {
    "original_index": 2081,
    "log_distance": 47298.31,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 12.2667,
    "depth_percent": 11,
    "length": 4.48,
    "width": 1.49,
    "joint_number": null
  },
  {
    "original_index": 2082,
    "log_distance": 47299.22,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 12.25,
    "depth_percent": 14,
    "length": 0.71,
    "width": 0.87,
    "joint_number": null
  },
  {
    "original_index": 2088,
    "log_distance": 47373.61,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 4.65,
    "depth_percent": 11,
    "length": 0.43,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 2089,
    "log_distance": 47373.76,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 4.5667,
    "depth_percent": 14,
    "length": 0.63,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 2094,
    "log_distance": 47548.14,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.75,
    "depth_percent": 33,
    "length": 4.97,
    "width": 18.45,
    "joint_number": null
  },
  {
    "original_index": 2095,
    "log_distance": 47548.42,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.0833,
    "depth_percent": 15,
    "length": 0.91,
    "width": 1.42,
    "joint_number": null
  },
  {
    "original_index": 2104,
    "log_distance": 47705.64,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 5.5833,
    "depth_percent": 10,
    "length": 1.18,
    "width": 0.94,
    "joint_number": null
  },
  {
    "original_index": 2142,
    "log_distance": 48680.41,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 3.7667,
    "depth_percent": 22,
    "length": 4.02,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 2149,
    "log_distance": 48804.83,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.2333,
    "depth_percent": 36,
    "length": 6.95,
    "width": 8.27,
    "joint_number": null
  },
  {
    "original_index": 2175,
    "log_distance": 49768.63,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 3.9167,
    "depth_percent": 26,
    "length": 5.08,
    "width": 10.77,
    "joint_number": null
  },
  {
    "original_index": 2188,
    "log_distance": 50192.33,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.6167,
    "depth_percent": 20,
    "length": 4.67,
    "width": 1.53,
    "joint_number": null
  },
  {
    "original_index": 2189,
    "log_distance": 50194.02,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.8,
    "depth_percent": 12,
    "length": 0.98,
    "width": 1.06,
    "joint_number": null
  },
  {
    "original_index": 2190,
    "log_distance": 50196.57,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 9.1167,
    "depth_percent": 10,
    "length": 0.87,
    "width": 0.91,
    "joint_number": null
  },
  {
    "original_index": 2191,
    "log_distance": 50199.17,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.25,
    "depth_percent": 33,
    "length": 10.43,
    "width": 5.57,
    "joint_number": null
  },
  {
    "original_index": 2192,
    "log_distance": 50200.15,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.6167,
    "depth_percent": 17,
    "length": 4.44,
    "width": 0.98,
    "joint_number": null
  },
  {
    "original_index": 2193,
    "log_distance": 50200.65,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.4833,
    "depth_percent": 19,
    "length": 3.15,
    "width": 1.73,
    "joint_number": null
  },
  {
    "original_index": 2194,
    "log_distance": 50201.03,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 4.6333,
    "depth_percent": 16,
    "length": 0.63,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 2208,
    "log_distance": 50681.04,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 10.1167,
    "depth_percent": 15,
    "length": 1.97,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 2210,
    "log_distance": 50738.69,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.6333,
    "depth_percent": 16,
    "length": 0.59,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 2221,
    "log_distance": 51120.59,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 10.5667,
    "depth_percent": 14,
    "length": 0.47,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 2223,
    "log_distance": 51188.03,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 7.4667,
    "depth_percent": 10,
    "length": 2.48,
    "width": 5.22,
    "joint_number": null
  },
  {
    "original_index": 2256,
    "log_distance": 51890.81,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 7.1,
    "depth_percent": 18,
    "length": 0.59,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 2289,
    "log_distance": 53107.12,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.1833,
    "depth_percent": 15,
    "length": 4.16,
    "width": 7.29,
    "joint_number": null
  },
  {
    "original_index": 2292,
    "log_distance": 53187.09,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.3167,
    "depth_percent": 12,
    "length": 3.23,
    "width": 8.71,
    "joint_number": null
  },
  {
    "original_index": 2294,
    "log_distance": 53188.01,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 5.55,
    "depth_percent": 24,
    "length": 3.7,
    "width": 3,
    "joint_number": null
  },
  {
    "original_index": 2315,
    "log_distance": 53920.16,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 4.6,
    "depth_percent": 10,
    "length": 0.51,
    "width": 0.71,
    "joint_number": null
  },
  {
    "original_index": 2349,
    "log_distance": 55090.68,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 4.5,
    "depth_percent": 12,
    "length": 3.08,
    "width": 9.28,
    "joint_number": null
  },
  {
    "original_index": 2362,
    "log_distance": 55606.64,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 3.1,
    "depth_percent": 23,
    "length": 0.51,
    "width": 0.63,
    "joint_number": null
  },
  {
    "original_index": 2376,
    "log_distance": 56025.84,
    "event_type_normalized": "METAL_LOSS_MFG",
    "clock_decimal": 12.9,
    "depth_percent": 13,
    "length": 0.59,
    "width": 0.59,
    "joint_number": null
  },
  {
    "original_index": 2388,
    "log_distance": 56387.34,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 8.8333,
    "depth_percent": 14,
    "length": 2.64,
    "width": 3.69,
    "joint_number": null
  },
  {
    "original_index": 2389,
    "log_distance": 56387.38,
    "event_type_normalized": "CLUSTER",
    "clock_decimal": 6.9833,
    "depth_percent": 10,
    "length": 1.03,
    "width": 3.62,
    "joint_number": null
  },
  {
    "original_index": 2390,
    "log_distance": 56387.4,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 8.1667,
    "depth_percent": 10,
    "length": 0.87,
    "width": 1.18,
    "joint_number": null
  },
  {
    "original_index": 2391,
    "log_distance": 56387.44,
    "event_type_normalized": "METAL_LOSS",
    "clock_decimal": 6.0333,
    "depth_percent": 10,
    "length": 0.71,
    "width": 1.65,
    "joint_number": null
  }
];

export const welds: WeldAlignment[] = [
  {
    "run1_idx": 14,
    "run2_idx": 10,
    "joint_number": 30,
    "run1_distance": 28.38,
    "run2_distance": 28.69,
    "offset": 0.31
  },
  {
    "run1_idx": 17,
    "run2_idx": 12,
    "joint_number": 40,
    "run1_distance": 39,
    "run2_distance": 38.83,
    "offset": -0.17
  },
  {
    "run1_idx": 19,
    "run2_idx": 14,
    "joint_number": 50,
    "run1_distance": 53.91,
    "run2_distance": 53.72,
    "offset": -0.19
  },
  {
    "run1_idx": 20,
    "run2_idx": 15,
    "joint_number": 60,
    "run1_distance": 93.8,
    "run2_distance": 94.06,
    "offset": 0.26
  },
  {
    "run1_idx": 22,
    "run2_idx": 17,
    "joint_number": 70,
    "run1_distance": 103.43,
    "run2_distance": 103.33,
    "offset": -0.1
  },
  {
    "run1_idx": 26,
    "run2_idx": 20,
    "joint_number": 80,
    "run1_distance": 128.45,
    "run2_distance": 128.88,
    "offset": 0.43
  },
  {
    "run1_idx": 27,
    "run2_idx": 21,
    "joint_number": 90,
    "run1_distance": 143.61,
    "run2_distance": 144.02,
    "offset": 0.41
  },
  {
    "run1_idx": 28,
    "run2_idx": 22,
    "joint_number": 100,
    "run1_distance": 175.18,
    "run2_distance": 175.63,
    "offset": 0.45
  },
  {
    "run1_idx": 29,
    "run2_idx": 23,
    "joint_number": 110,
    "run1_distance": 215.24,
    "run2_distance": 215.7,
    "offset": 0.46
  },
  {
    "run1_idx": 30,
    "run2_idx": 24,
    "joint_number": 120,
    "run1_distance": 255.28,
    "run2_distance": 255.86,
    "offset": 0.58
  },
  {
    "run1_idx": 32,
    "run2_idx": 26,
    "joint_number": 130,
    "run1_distance": 268.91,
    "run2_distance": 269,
    "offset": 0.09
  },
  {
    "run1_idx": 33,
    "run2_idx": 27,
    "joint_number": 140,
    "run1_distance": 308.99,
    "run2_distance": 309.49,
    "offset": 0.5
  },
  {
    "run1_idx": 34,
    "run2_idx": 28,
    "joint_number": 150,
    "run1_distance": 349.02,
    "run2_distance": 349.65,
    "offset": 0.63
  },
  {
    "run1_idx": 36,
    "run2_idx": 30,
    "joint_number": 160,
    "run1_distance": 359.15,
    "run2_distance": 359.33,
    "offset": 0.18
  },
  {
    "run1_idx": 37,
    "run2_idx": 31,
    "joint_number": 170,
    "run1_distance": 376.14,
    "run2_distance": 376.91,
    "offset": 0.77
  },
  {
    "run1_idx": 39,
    "run2_idx": 33,
    "joint_number": 180,
    "run1_distance": 384.27,
    "run2_distance": 384.52,
    "offset": 0.25
  },
  {
    "run1_idx": 40,
    "run2_idx": 34,
    "joint_number": 190,
    "run1_distance": 407.34,
    "run2_distance": 407.86,
    "offset": 0.52
  },
  {
    "run1_idx": 42,
    "run2_idx": 36,
    "joint_number": 200,
    "run1_distance": 417.43,
    "run2_distance": 417.34,
    "offset": -0.09
  },
  {
    "run1_idx": 43,
    "run2_idx": 37,
    "joint_number": 210,
    "run1_distance": 429.59,
    "run2_distance": 429.95,
    "offset": 0.36
  },
  {
    "run1_idx": 45,
    "run2_idx": 40,
    "joint_number": 220,
    "run1_distance": 446.01,
    "run2_distance": 446.26,
    "offset": 0.25
  },
  {
    "run1_idx": 46,
    "run2_idx": 41,
    "joint_number": 230,
    "run1_distance": 486.01,
    "run2_distance": 486.3,
    "offset": 0.29
  },
  {
    "run1_idx": 47,
    "run2_idx": 42,
    "joint_number": 240,
    "run1_distance": 526.15,
    "run2_distance": 526.15,
    "offset": 0
  },
  {
    "run1_idx": 48,
    "run2_idx": 43,
    "joint_number": 250,
    "run1_distance": 566.41,
    "run2_distance": 566.12,
    "offset": -0.29
  },
  {
    "run1_idx": 50,
    "run2_idx": 44,
    "joint_number": 260,
    "run1_distance": 606.45,
    "run2_distance": 606.11,
    "offset": -0.34
  },
  {
    "run1_idx": 52,
    "run2_idx": 45,
    "joint_number": 270,
    "run1_distance": 637.77,
    "run2_distance": 637.51,
    "offset": -0.26
  },
  {
    "run1_idx": 54,
    "run2_idx": 47,
    "joint_number": 280,
    "run1_distance": 647.4,
    "run2_distance": 646.78,
    "offset": -0.62
  },
  {
    "run1_idx": 56,
    "run2_idx": 49,
    "joint_number": 290,
    "run1_distance": 655.41,
    "run2_distance": 654.88,
    "offset": -0.53
  },
  {
    "run1_idx": 59,
    "run2_idx": 50,
    "joint_number": 300,
    "run1_distance": 670.49,
    "run2_distance": 670.33,
    "offset": -0.16
  },
  {
    "run1_idx": 61,
    "run2_idx": 52,
    "joint_number": 310,
    "run1_distance": 678.36,
    "run2_distance": 677.99,
    "offset": -0.37
  },
  {
    "run1_idx": 64,
    "run2_idx": 53,
    "joint_number": 320,
    "run1_distance": 687.11,
    "run2_distance": 686.92,
    "offset": -0.19
  },
  {
    "run1_idx": 65,
    "run2_idx": 54,
    "joint_number": 330,
    "run1_distance": 697.49,
    "run2_distance": 697.29,
    "offset": -0.2
  },
  {
    "run1_idx": 66,
    "run2_idx": 55,
    "joint_number": 340,
    "run1_distance": 737.46,
    "run2_distance": 737.27,
    "offset": -0.19
  },
  {
    "run1_idx": 68,
    "run2_idx": 57,
    "joint_number": 350,
    "run1_distance": 748.75,
    "run2_distance": 747.95,
    "offset": -0.8
  },
  {
    "run1_idx": 69,
    "run2_idx": 58,
    "joint_number": 360,
    "run1_distance": 754.75,
    "run2_distance": 754.23,
    "offset": -0.52
  },
  {
    "run1_idx": 70,
    "run2_idx": 59,
    "joint_number": 370,
    "run1_distance": 785.32,
    "run2_distance": 784.79,
    "offset": -0.53
  },
  {
    "run1_idx": 71,
    "run2_idx": 60,
    "joint_number": 380,
    "run1_distance": 823.17,
    "run2_distance": 822.65,
    "offset": -0.52
  },
  {
    "run1_idx": 72,
    "run2_idx": 61,
    "joint_number": 390,
    "run1_distance": 863.19,
    "run2_distance": 862.71,
    "offset": -0.48
  },
  {
    "run1_idx": 73,
    "run2_idx": 62,
    "joint_number": 400,
    "run1_distance": 903.23,
    "run2_distance": 902.75,
    "offset": -0.48
  },
  {
    "run1_idx": 74,
    "run2_idx": 63,
    "joint_number": 410,
    "run1_distance": 943.31,
    "run2_distance": 942.9,
    "offset": -0.41
  },
  {
    "run1_idx": 76,
    "run2_idx": 65,
    "joint_number": 420,
    "run1_distance": 955.78,
    "run2_distance": 954.76,
    "offset": -1.02
  },
  {
    "run1_idx": 79,
    "run2_idx": 66,
    "joint_number": 430,
    "run1_distance": 985.38,
    "run2_distance": 984.83,
    "offset": -0.55
  },
  {
    "run1_idx": 81,
    "run2_idx": 68,
    "joint_number": 440,
    "run1_distance": 999.26,
    "run2_distance": 998.04,
    "offset": -1.22
  },
  {
    "run1_idx": 82,
    "run2_idx": 69,
    "joint_number": 450,
    "run1_distance": 1039.3,
    "run2_distance": 1038.36,
    "offset": -0.94
  },
  {
    "run1_idx": 84,
    "run2_idx": 70,
    "joint_number": 460,
    "run1_distance": 1079.26,
    "run2_distance": 1078.41,
    "offset": -0.85
  },
  {
    "run1_idx": 85,
    "run2_idx": 71,
    "joint_number": 470,
    "run1_distance": 1119.24,
    "run2_distance": 1118.5,
    "offset": -0.74
  },
  {
    "run1_idx": 86,
    "run2_idx": 72,
    "joint_number": 480,
    "run1_distance": 1159.23,
    "run2_distance": 1158.59,
    "offset": -0.64
  },
  {
    "run1_idx": 88,
    "run2_idx": 73,
    "joint_number": 490,
    "run1_distance": 1199.28,
    "run2_distance": 1198.74,
    "offset": -0.54
  },
  {
    "run1_idx": 93,
    "run2_idx": 74,
    "joint_number": 500,
    "run1_distance": 1239.25,
    "run2_distance": 1238.87,
    "offset": -0.38
  },
  {
    "run1_idx": 104,
    "run2_idx": 75,
    "joint_number": 510,
    "run1_distance": 1279.23,
    "run2_distance": 1279,
    "offset": -0.23
  },
  {
    "run1_idx": 110,
    "run2_idx": 76,
    "joint_number": 520,
    "run1_distance": 1319.26,
    "run2_distance": 1319.13,
    "offset": -0.13
  },
  {
    "run1_idx": 118,
    "run2_idx": 77,
    "joint_number": 530,
    "run1_distance": 1359.29,
    "run2_distance": 1359.26,
    "offset": -0.03
  },
  {
    "run1_idx": 143,
    "run2_idx": 78,
    "joint_number": 540,
    "run1_distance": 1399.29,
    "run2_distance": 1399.33,
    "offset": 0.04
  },
  {
    "run1_idx": 168,
    "run2_idx": 79,
    "joint_number": 550,
    "run1_distance": 1439.23,
    "run2_distance": 1439.41,
    "offset": 0.18
  },
  {
    "run1_idx": 181,
    "run2_idx": 80,
    "joint_number": 560,
    "run1_distance": 1474.28,
    "run2_distance": 1474.52,
    "offset": 0.24
  },
  {
    "run1_idx": 190,
    "run2_idx": 81,
    "joint_number": 570,
    "run1_distance": 1514.27,
    "run2_distance": 1514.6,
    "offset": 0.33
  },
  {
    "run1_idx": 195,
    "run2_idx": 82,
    "joint_number": 580,
    "run1_distance": 1554.3,
    "run2_distance": 1554.67,
    "offset": 0.37
  },
  {
    "run1_idx": 205,
    "run2_idx": 83,
    "joint_number": 590,
    "run1_distance": 1594.3,
    "run2_distance": 1594.69,
    "offset": 0.39
  },
  {
    "run1_idx": 211,
    "run2_idx": 84,
    "joint_number": 600,
    "run1_distance": 1634.4,
    "run2_distance": 1634.65,
    "offset": 0.25
  },
  {
    "run1_idx": 216,
    "run2_idx": 85,
    "joint_number": 610,
    "run1_distance": 1674.51,
    "run2_distance": 1674.68,
    "offset": 0.17
  },
  {
    "run1_idx": 219,
    "run2_idx": 86,
    "joint_number": 620,
    "run1_distance": 1714.51,
    "run2_distance": 1714.66,
    "offset": 0.15
  },
  {
    "run1_idx": 220,
    "run2_idx": 87,
    "joint_number": 630,
    "run1_distance": 1754.45,
    "run2_distance": 1754.61,
    "offset": 0.16
  },
  {
    "run1_idx": 222,
    "run2_idx": 88,
    "joint_number": 640,
    "run1_distance": 1794.43,
    "run2_distance": 1794.68,
    "offset": 0.25
  },
  {
    "run1_idx": 223,
    "run2_idx": 89,
    "joint_number": 650,
    "run1_distance": 1821.46,
    "run2_distance": 1821.71,
    "offset": 0.25
  },
  {
    "run1_idx": 224,
    "run2_idx": 90,
    "joint_number": 660,
    "run1_distance": 1861.47,
    "run2_distance": 1861.75,
    "offset": 0.28
  },
  {
    "run1_idx": 225,
    "run2_idx": 91,
    "joint_number": 670,
    "run1_distance": 1901.36,
    "run2_distance": 1901.7,
    "offset": 0.34
  },
  {
    "run1_idx": 226,
    "run2_idx": 92,
    "joint_number": 680,
    "run1_distance": 1940.19,
    "run2_distance": 1940.56,
    "offset": 0.37
  },
  {
    "run1_idx": 227,
    "run2_idx": 93,
    "joint_number": 690,
    "run1_distance": 1980.16,
    "run2_distance": 1980.62,
    "offset": 0.46
  },
  {
    "run1_idx": 228,
    "run2_idx": 94,
    "joint_number": 700,
    "run1_distance": 2020.22,
    "run2_distance": 2020.72,
    "offset": 0.5
  },
  {
    "run1_idx": 229,
    "run2_idx": 95,
    "joint_number": 710,
    "run1_distance": 2060.32,
    "run2_distance": 2060.81,
    "offset": 0.49
  },
  {
    "run1_idx": 230,
    "run2_idx": 96,
    "joint_number": 720,
    "run1_distance": 2100.43,
    "run2_distance": 2100.91,
    "offset": 0.48
  },
  {
    "run1_idx": 247,
    "run2_idx": 97,
    "joint_number": 730,
    "run1_distance": 2140.46,
    "run2_distance": 2140.9,
    "offset": 0.44
  },
  {
    "run1_idx": 259,
    "run2_idx": 98,
    "joint_number": 740,
    "run1_distance": 2180.5,
    "run2_distance": 2180.93,
    "offset": 0.43
  },
  {
    "run1_idx": 267,
    "run2_idx": 99,
    "joint_number": 750,
    "run1_distance": 2220.57,
    "run2_distance": 2220.99,
    "offset": 0.42
  },
  {
    "run1_idx": 292,
    "run2_idx": 100,
    "joint_number": 760,
    "run1_distance": 2260.38,
    "run2_distance": 2260.83,
    "offset": 0.45
  },
  {
    "run1_idx": 304,
    "run2_idx": 101,
    "joint_number": 770,
    "run1_distance": 2300.45,
    "run2_distance": 2300.87,
    "offset": 0.42
  },
  {
    "run1_idx": 308,
    "run2_idx": 102,
    "joint_number": 780,
    "run1_distance": 2310.84,
    "run2_distance": 2311.27,
    "offset": 0.43
  },
  {
    "run1_idx": 309,
    "run2_idx": 103,
    "joint_number": 790,
    "run1_distance": 2350.86,
    "run2_distance": 2351.35,
    "offset": 0.49
  },
  {
    "run1_idx": 311,
    "run2_idx": 105,
    "joint_number": 800,
    "run1_distance": 2365.92,
    "run2_distance": 2365.88,
    "offset": -0.04
  },
  {
    "run1_idx": 313,
    "run2_idx": 106,
    "joint_number": 810,
    "run1_distance": 2389.72,
    "run2_distance": 2389.82,
    "offset": 0.1
  },
  {
    "run1_idx": 314,
    "run2_idx": 107,
    "joint_number": 820,
    "run1_distance": 2429.86,
    "run2_distance": 2429.86,
    "offset": 0
  },
  {
    "run1_idx": 315,
    "run2_idx": 108,
    "joint_number": 830,
    "run1_distance": 2469.96,
    "run2_distance": 2469.86,
    "offset": -0.1
  },
  {
    "run1_idx": 316,
    "run2_idx": 109,
    "joint_number": 840,
    "run1_distance": 2510.05,
    "run2_distance": 2509.92,
    "offset": -0.13
  },
  {
    "run1_idx": 317,
    "run2_idx": 110,
    "joint_number": 850,
    "run1_distance": 2550.13,
    "run2_distance": 2549.96,
    "offset": -0.17
  },
  {
    "run1_idx": 318,
    "run2_idx": 111,
    "joint_number": 860,
    "run1_distance": 2590.23,
    "run2_distance": 2590.02,
    "offset": -0.21
  },
  {
    "run1_idx": 319,
    "run2_idx": 112,
    "joint_number": 870,
    "run1_distance": 2630.32,
    "run2_distance": 2630.08,
    "offset": -0.24
  },
  {
    "run1_idx": 320,
    "run2_idx": 113,
    "joint_number": 880,
    "run1_distance": 2670.39,
    "run2_distance": 2670.11,
    "offset": -0.28
  },
  {
    "run1_idx": 321,
    "run2_idx": 114,
    "joint_number": 890,
    "run1_distance": 2710.45,
    "run2_distance": 2710.16,
    "offset": -0.29
  },
  {
    "run1_idx": 322,
    "run2_idx": 115,
    "joint_number": 900,
    "run1_distance": 2750.53,
    "run2_distance": 2750.26,
    "offset": -0.27
  },
  {
    "run1_idx": 323,
    "run2_idx": 116,
    "joint_number": 910,
    "run1_distance": 2790.6,
    "run2_distance": 2790.34,
    "offset": -0.26
  },
  {
    "run1_idx": 324,
    "run2_idx": 117,
    "joint_number": 920,
    "run1_distance": 2830.64,
    "run2_distance": 2830.42,
    "offset": -0.22
  },
  {
    "run1_idx": 325,
    "run2_idx": 118,
    "joint_number": 930,
    "run1_distance": 2870.64,
    "run2_distance": 2870.53,
    "offset": -0.11
  },
  {
    "run1_idx": 327,
    "run2_idx": 120,
    "joint_number": 940,
    "run1_distance": 2878.92,
    "run2_distance": 2878.59,
    "offset": -0.33
  },
  {
    "run1_idx": 328,
    "run2_idx": 121,
    "joint_number": 950,
    "run1_distance": 2909.7,
    "run2_distance": 2909.79,
    "offset": 0.09
  },
  {
    "run1_idx": 329,
    "run2_idx": 122,
    "joint_number": 960,
    "run1_distance": 2949.73,
    "run2_distance": 2949.78,
    "offset": 0.05
  },
  {
    "run1_idx": 331,
    "run2_idx": 123,
    "joint_number": 970,
    "run1_distance": 2989.67,
    "run2_distance": 2989.81,
    "offset": 0.14
  },
  {
    "run1_idx": 341,
    "run2_idx": 124,
    "joint_number": 980,
    "run1_distance": 3029.46,
    "run2_distance": 3029.58,
    "offset": 0.12
  },
  {
    "run1_idx": 362,
    "run2_idx": 126,
    "joint_number": 990,
    "run1_distance": 3069.45,
    "run2_distance": 3069.62,
    "offset": 0.17
  },
  {
    "run1_idx": 364,
    "run2_idx": 128,
    "joint_number": 1000,
    "run1_distance": 3109.4,
    "run2_distance": 3109.62,
    "offset": 0.22
  },
  {
    "run1_idx": 365,
    "run2_idx": 129,
    "joint_number": 1010,
    "run1_distance": 3147.83,
    "run2_distance": 3148.08,
    "offset": 0.25
  },
  {
    "run1_idx": 366,
    "run2_idx": 130,
    "joint_number": 1020,
    "run1_distance": 3187.86,
    "run2_distance": 3188.15,
    "offset": 0.29
  },
  {
    "run1_idx": 367,
    "run2_idx": 131,
    "joint_number": 1030,
    "run1_distance": 3227.9,
    "run2_distance": 3228.27,
    "offset": 0.37
  },
  {
    "run1_idx": 368,
    "run2_idx": 132,
    "joint_number": 1040,
    "run1_distance": 3267.93,
    "run2_distance": 3268.31,
    "offset": 0.38
  },
  {
    "run1_idx": 369,
    "run2_idx": 133,
    "joint_number": 1050,
    "run1_distance": 3307.98,
    "run2_distance": 3308.39,
    "offset": 0.41
  },
  {
    "run1_idx": 372,
    "run2_idx": 134,
    "joint_number": 1060,
    "run1_distance": 3348.1,
    "run2_distance": 3348.46,
    "offset": 0.36
  },
  {
    "run1_idx": 373,
    "run2_idx": 135,
    "joint_number": 1070,
    "run1_distance": 3388.15,
    "run2_distance": 3388.53,
    "offset": 0.38
  },
  {
    "run1_idx": 376,
    "run2_idx": 136,
    "joint_number": 1080,
    "run1_distance": 3428.16,
    "run2_distance": 3428.63,
    "offset": 0.47
  },
  {
    "run1_idx": 377,
    "run2_idx": 137,
    "joint_number": 1090,
    "run1_distance": 3468.12,
    "run2_distance": 3468.67,
    "offset": 0.55
  },
  {
    "run1_idx": 378,
    "run2_idx": 138,
    "joint_number": 1100,
    "run1_distance": 3508.11,
    "run2_distance": 3508.76,
    "offset": 0.65
  },
  {
    "run1_idx": 379,
    "run2_idx": 139,
    "joint_number": 1110,
    "run1_distance": 3548.05,
    "run2_distance": 3548.87,
    "offset": 0.82
  },
  {
    "run1_idx": 380,
    "run2_idx": 140,
    "joint_number": 1120,
    "run1_distance": 3588.09,
    "run2_distance": 3588.86,
    "offset": 0.77
  },
  {
    "run1_idx": 381,
    "run2_idx": 141,
    "joint_number": 1130,
    "run1_distance": 3628.09,
    "run2_distance": 3628.88,
    "offset": 0.79
  },
  {
    "run1_idx": 382,
    "run2_idx": 142,
    "joint_number": 1140,
    "run1_distance": 3668.09,
    "run2_distance": 3668.93,
    "offset": 0.84
  },
  {
    "run1_idx": 383,
    "run2_idx": 143,
    "joint_number": 1150,
    "run1_distance": 3708.03,
    "run2_distance": 3708.93,
    "offset": 0.9
  },
  {
    "run1_idx": 384,
    "run2_idx": 144,
    "joint_number": 1160,
    "run1_distance": 3742.6,
    "run2_distance": 3743.6,
    "offset": 1
  },
  {
    "run1_idx": 385,
    "run2_idx": 145,
    "joint_number": 1170,
    "run1_distance": 3782.11,
    "run2_distance": 3783.21,
    "offset": 1.1
  },
  {
    "run1_idx": 386,
    "run2_idx": 146,
    "joint_number": 1180,
    "run1_distance": 3822.05,
    "run2_distance": 3823.24,
    "offset": 1.19
  },
  {
    "run1_idx": 387,
    "run2_idx": 147,
    "joint_number": 1190,
    "run1_distance": 3862.02,
    "run2_distance": 3863.29,
    "offset": 1.27
  },
  {
    "run1_idx": 388,
    "run2_idx": 148,
    "joint_number": 1200,
    "run1_distance": 3901.98,
    "run2_distance": 3903.31,
    "offset": 1.33
  },
  {
    "run1_idx": 389,
    "run2_idx": 149,
    "joint_number": 1210,
    "run1_distance": 3941.95,
    "run2_distance": 3943.33,
    "offset": 1.38
  },
  {
    "run1_idx": 390,
    "run2_idx": 150,
    "joint_number": 1220,
    "run1_distance": 3981.92,
    "run2_distance": 3983.39,
    "offset": 1.47
  },
  {
    "run1_idx": 391,
    "run2_idx": 151,
    "joint_number": 1230,
    "run1_distance": 4021.85,
    "run2_distance": 4023.46,
    "offset": 1.61
  },
  {
    "run1_idx": 392,
    "run2_idx": 152,
    "joint_number": 1240,
    "run1_distance": 4061.77,
    "run2_distance": 4063.6,
    "offset": 1.83
  },
  {
    "run1_idx": 393,
    "run2_idx": 153,
    "joint_number": 1250,
    "run1_distance": 4089.87,
    "run2_distance": 4091.65,
    "offset": 1.78
  },
  {
    "run1_idx": 394,
    "run2_idx": 154,
    "joint_number": 1260,
    "run1_distance": 4129.81,
    "run2_distance": 4131.8,
    "offset": 1.99
  },
  {
    "run1_idx": 395,
    "run2_idx": 155,
    "joint_number": 1270,
    "run1_distance": 4169.72,
    "run2_distance": 4171.86,
    "offset": 2.14
  },
  {
    "run1_idx": 396,
    "run2_idx": 156,
    "joint_number": 1280,
    "run1_distance": 4209.61,
    "run2_distance": 4211.84,
    "offset": 2.23
  },
  {
    "run1_idx": 397,
    "run2_idx": 157,
    "joint_number": 1290,
    "run1_distance": 4249.57,
    "run2_distance": 4251.81,
    "offset": 2.24
  },
  {
    "run1_idx": 398,
    "run2_idx": 158,
    "joint_number": 1300,
    "run1_distance": 4289.56,
    "run2_distance": 4291.8,
    "offset": 2.24
  },
  {
    "run1_idx": 399,
    "run2_idx": 159,
    "joint_number": 1310,
    "run1_distance": 4329.71,
    "run2_distance": 4331.8,
    "offset": 2.09
  },
  {
    "run1_idx": 400,
    "run2_idx": 160,
    "joint_number": 1320,
    "run1_distance": 4369.88,
    "run2_distance": 4371.82,
    "offset": 1.94
  },
  {
    "run1_idx": 401,
    "run2_idx": 161,
    "joint_number": 1330,
    "run1_distance": 4409.94,
    "run2_distance": 4411.8,
    "offset": 1.86
  },
  {
    "run1_idx": 402,
    "run2_idx": 162,
    "joint_number": 1340,
    "run1_distance": 4450.01,
    "run2_distance": 4451.84,
    "offset": 1.83
  },
  {
    "run1_idx": 403,
    "run2_idx": 163,
    "joint_number": 1350,
    "run1_distance": 4490.05,
    "run2_distance": 4491.84,
    "offset": 1.79
  },
  {
    "run1_idx": 404,
    "run2_idx": 164,
    "joint_number": 1360,
    "run1_distance": 4530.09,
    "run2_distance": 4531.86,
    "offset": 1.77
  },
  {
    "run1_idx": 406,
    "run2_idx": 165,
    "joint_number": 1370,
    "run1_distance": 4570.15,
    "run2_distance": 4571.9,
    "offset": 1.75
  },
  {
    "run1_idx": 408,
    "run2_idx": 166,
    "joint_number": 1380,
    "run1_distance": 4610.18,
    "run2_distance": 4611.9,
    "offset": 1.72
  },
  {
    "run1_idx": 409,
    "run2_idx": 167,
    "joint_number": 1390,
    "run1_distance": 4650.21,
    "run2_distance": 4651.91,
    "offset": 1.7
  },
  {
    "run1_idx": 410,
    "run2_idx": 168,
    "joint_number": 1400,
    "run1_distance": 4690.15,
    "run2_distance": 4691.76,
    "offset": 1.61
  },
  {
    "run1_idx": 411,
    "run2_idx": 169,
    "joint_number": 1410,
    "run1_distance": 4730.12,
    "run2_distance": 4731.85,
    "offset": 1.73
  },
  {
    "run1_idx": 412,
    "run2_idx": 170,
    "joint_number": 1420,
    "run1_distance": 4770.09,
    "run2_distance": 4771.94,
    "offset": 1.85
  },
  {
    "run1_idx": 413,
    "run2_idx": 171,
    "joint_number": 1430,
    "run1_distance": 4810.08,
    "run2_distance": 4811.94,
    "offset": 1.86
  },
  {
    "run1_idx": 414,
    "run2_idx": 172,
    "joint_number": 1440,
    "run1_distance": 4850.01,
    "run2_distance": 4851.93,
    "offset": 1.92
  },
  {
    "run1_idx": 415,
    "run2_idx": 173,
    "joint_number": 1450,
    "run1_distance": 4890.05,
    "run2_distance": 4891.97,
    "offset": 1.92
  },
  {
    "run1_idx": 416,
    "run2_idx": 174,
    "joint_number": 1460,
    "run1_distance": 4918.04,
    "run2_distance": 4919.95,
    "offset": 1.91
  },
  {
    "run1_idx": 418,
    "run2_idx": 175,
    "joint_number": 1470,
    "run1_distance": 4957.91,
    "run2_distance": 4959.83,
    "offset": 1.92
  },
  {
    "run1_idx": 419,
    "run2_idx": 176,
    "joint_number": 1480,
    "run1_distance": 4997.71,
    "run2_distance": 4999.69,
    "offset": 1.98
  },
  {
    "run1_idx": 421,
    "run2_idx": 177,
    "joint_number": 1490,
    "run1_distance": 5034.22,
    "run2_distance": 5036.21,
    "offset": 1.99
  },
  {
    "run1_idx": 422,
    "run2_idx": 178,
    "joint_number": 1500,
    "run1_distance": 5074.25,
    "run2_distance": 5076.28,
    "offset": 2.03
  },
  {
    "run1_idx": 423,
    "run2_idx": 179,
    "joint_number": 1510,
    "run1_distance": 5104.73,
    "run2_distance": 5106.79,
    "offset": 2.06
  },
  {
    "run1_idx": 424,
    "run2_idx": 180,
    "joint_number": 1520,
    "run1_distance": 5144.75,
    "run2_distance": 5146.85,
    "offset": 2.1
  },
  {
    "run1_idx": 425,
    "run2_idx": 181,
    "joint_number": 1530,
    "run1_distance": 5184.86,
    "run2_distance": 5186.99,
    "offset": 2.13
  },
  {
    "run1_idx": 427,
    "run2_idx": 183,
    "joint_number": 1540,
    "run1_distance": 5223.59,
    "run2_distance": 5225.78,
    "offset": 2.19
  },
  {
    "run1_idx": 428,
    "run2_idx": 184,
    "joint_number": 1550,
    "run1_distance": 5263.65,
    "run2_distance": 5265.88,
    "offset": 2.23
  },
  {
    "run1_idx": 431,
    "run2_idx": 185,
    "joint_number": 1560,
    "run1_distance": 5303.53,
    "run2_distance": 5305.93,
    "offset": 2.4
  },
  {
    "run1_idx": 433,
    "run2_idx": 186,
    "joint_number": 1570,
    "run1_distance": 5343.56,
    "run2_distance": 5346.04,
    "offset": 2.48
  },
  {
    "run1_idx": 451,
    "run2_idx": 187,
    "joint_number": 1580,
    "run1_distance": 5383.67,
    "run2_distance": 5386.2,
    "offset": 2.53
  },
  {
    "run1_idx": 452,
    "run2_idx": 188,
    "joint_number": 1590,
    "run1_distance": 5423.7,
    "run2_distance": 5426.28,
    "offset": 2.58
  },
  {
    "run1_idx": 453,
    "run2_idx": 189,
    "joint_number": 1600,
    "run1_distance": 5446.59,
    "run2_distance": 5449.19,
    "offset": 2.6
  },
  {
    "run1_idx": 456,
    "run2_idx": 190,
    "joint_number": 1610,
    "run1_distance": 5486.66,
    "run2_distance": 5489.32,
    "offset": 2.66
  },
  {
    "run1_idx": 457,
    "run2_idx": 191,
    "joint_number": 1620,
    "run1_distance": 5526.72,
    "run2_distance": 5529.39,
    "offset": 2.67
  },
  {
    "run1_idx": 458,
    "run2_idx": 192,
    "joint_number": 1630,
    "run1_distance": 5549.67,
    "run2_distance": 5552.35,
    "offset": 2.68
  },
  {
    "run1_idx": 459,
    "run2_idx": 193,
    "joint_number": 1640,
    "run1_distance": 5589.75,
    "run2_distance": 5592.44,
    "offset": 2.69
  },
  {
    "run1_idx": 460,
    "run2_idx": 194,
    "joint_number": 1650,
    "run1_distance": 5605.04,
    "run2_distance": 5607.75,
    "offset": 2.71
  },
  {
    "run1_idx": 461,
    "run2_idx": 195,
    "joint_number": 1660,
    "run1_distance": 5645.08,
    "run2_distance": 5647.81,
    "offset": 2.73
  },
  {
    "run1_idx": 462,
    "run2_idx": 196,
    "joint_number": 1670,
    "run1_distance": 5685.11,
    "run2_distance": 5687.87,
    "offset": 2.76
  },
  {
    "run1_idx": 463,
    "run2_idx": 197,
    "joint_number": 1680,
    "run1_distance": 5725.11,
    "run2_distance": 5727.92,
    "offset": 2.81
  },
  {
    "run1_idx": 464,
    "run2_idx": 198,
    "joint_number": 1690,
    "run1_distance": 5751.59,
    "run2_distance": 5754.37,
    "offset": 2.78
  },
  {
    "run1_idx": 465,
    "run2_idx": 199,
    "joint_number": 1700,
    "run1_distance": 5791.63,
    "run2_distance": 5794.37,
    "offset": 2.74
  },
  {
    "run1_idx": 467,
    "run2_idx": 200,
    "joint_number": 1710,
    "run1_distance": 5831.64,
    "run2_distance": 5834.42,
    "offset": 2.78
  },
  {
    "run1_idx": 468,
    "run2_idx": 201,
    "joint_number": 1720,
    "run1_distance": 5871.65,
    "run2_distance": 5874.45,
    "offset": 2.8
  },
  {
    "run1_idx": 469,
    "run2_idx": 202,
    "joint_number": 1730,
    "run1_distance": 5911.65,
    "run2_distance": 5914.54,
    "offset": 2.89
  },
  {
    "run1_idx": 470,
    "run2_idx": 203,
    "joint_number": 1740,
    "run1_distance": 5951.63,
    "run2_distance": 5954.62,
    "offset": 2.99
  },
  {
    "run1_idx": 471,
    "run2_idx": 204,
    "joint_number": 1750,
    "run1_distance": 5991.61,
    "run2_distance": 5994.65,
    "offset": 3.04
  },
  {
    "run1_idx": 472,
    "run2_idx": 205,
    "joint_number": 1760,
    "run1_distance": 6031.65,
    "run2_distance": 6034.71,
    "offset": 3.06
  },
  {
    "run1_idx": 473,
    "run2_idx": 206,
    "joint_number": 1770,
    "run1_distance": 6068.56,
    "run2_distance": 6071.64,
    "offset": 3.08
  },
  {
    "run1_idx": 474,
    "run2_idx": 207,
    "joint_number": 1780,
    "run1_distance": 6108.59,
    "run2_distance": 6111.68,
    "offset": 3.09
  },
  {
    "run1_idx": 475,
    "run2_idx": 208,
    "joint_number": 1790,
    "run1_distance": 6148.61,
    "run2_distance": 6151.73,
    "offset": 3.12
  },
  {
    "run1_idx": 476,
    "run2_idx": 209,
    "joint_number": 1800,
    "run1_distance": 6188.61,
    "run2_distance": 6191.74,
    "offset": 3.13
  },
  {
    "run1_idx": 477,
    "run2_idx": 210,
    "joint_number": 1810,
    "run1_distance": 6228.63,
    "run2_distance": 6231.78,
    "offset": 3.15
  },
  {
    "run1_idx": 478,
    "run2_idx": 211,
    "joint_number": 1820,
    "run1_distance": 6268.74,
    "run2_distance": 6271.85,
    "offset": 3.11
  },
  {
    "run1_idx": 479,
    "run2_idx": 212,
    "joint_number": 1830,
    "run1_distance": 6308.97,
    "run2_distance": 6311.77,
    "offset": 2.8
  },
  {
    "run1_idx": 480,
    "run2_idx": 213,
    "joint_number": 1840,
    "run1_distance": 6349.05,
    "run2_distance": 6351.91,
    "offset": 2.86
  },
  {
    "run1_idx": 481,
    "run2_idx": 214,
    "joint_number": 1850,
    "run1_distance": 6389.1,
    "run2_distance": 6392.02,
    "offset": 2.92
  },
  {
    "run1_idx": 482,
    "run2_idx": 215,
    "joint_number": 1860,
    "run1_distance": 6408.47,
    "run2_distance": 6411.38,
    "offset": 2.91
  },
  {
    "run1_idx": 483,
    "run2_idx": 216,
    "joint_number": 1870,
    "run1_distance": 6448.38,
    "run2_distance": 6451.32,
    "offset": 2.94
  },
  {
    "run1_idx": 484,
    "run2_idx": 217,
    "joint_number": 1880,
    "run1_distance": 6488.37,
    "run2_distance": 6491.33,
    "offset": 2.96
  },
  {
    "run1_idx": 485,
    "run2_idx": 218,
    "joint_number": 1890,
    "run1_distance": 6528.36,
    "run2_distance": 6531.29,
    "offset": 2.93
  },
  {
    "run1_idx": 486,
    "run2_idx": 219,
    "joint_number": 1900,
    "run1_distance": 6568.34,
    "run2_distance": 6571.3,
    "offset": 2.96
  },
  {
    "run1_idx": 487,
    "run2_idx": 220,
    "joint_number": 1910,
    "run1_distance": 6608.32,
    "run2_distance": 6611.29,
    "offset": 2.97
  },
  {
    "run1_idx": 488,
    "run2_idx": 221,
    "joint_number": 1920,
    "run1_distance": 6648.28,
    "run2_distance": 6651.22,
    "offset": 2.94
  },
  {
    "run1_idx": 489,
    "run2_idx": 222,
    "joint_number": 1930,
    "run1_distance": 6688.26,
    "run2_distance": 6691.21,
    "offset": 2.95
  },
  {
    "run1_idx": 490,
    "run2_idx": 223,
    "joint_number": 1940,
    "run1_distance": 6728.16,
    "run2_distance": 6731.14,
    "offset": 2.98
  },
  {
    "run1_idx": 491,
    "run2_idx": 224,
    "joint_number": 1950,
    "run1_distance": 6768.1,
    "run2_distance": 6771.13,
    "offset": 3.03
  },
  {
    "run1_idx": 492,
    "run2_idx": 225,
    "joint_number": 1960,
    "run1_distance": 6800.01,
    "run2_distance": 6803.11,
    "offset": 3.1
  },
  {
    "run1_idx": 493,
    "run2_idx": 226,
    "joint_number": 1970,
    "run1_distance": 6839.98,
    "run2_distance": 6843.2,
    "offset": 3.22
  },
  {
    "run1_idx": 494,
    "run2_idx": 227,
    "joint_number": 1980,
    "run1_distance": 6860.61,
    "run2_distance": 6863.86,
    "offset": 3.25
  },
  {
    "run1_idx": 495,
    "run2_idx": 228,
    "joint_number": 1990,
    "run1_distance": 6900.58,
    "run2_distance": 6903.85,
    "offset": 3.27
  },
  {
    "run1_idx": 498,
    "run2_idx": 229,
    "joint_number": 2000,
    "run1_distance": 6940.56,
    "run2_distance": 6943.85,
    "offset": 3.29
  },
  {
    "run1_idx": 501,
    "run2_idx": 230,
    "joint_number": 2010,
    "run1_distance": 6980.48,
    "run2_distance": 6983.77,
    "offset": 3.29
  },
  {
    "run1_idx": 502,
    "run2_idx": 231,
    "joint_number": 2020,
    "run1_distance": 7013.31,
    "run2_distance": 7016.64,
    "offset": 3.33
  },
  {
    "run1_idx": 504,
    "run2_idx": 232,
    "joint_number": 2030,
    "run1_distance": 7053.25,
    "run2_distance": 7056.65,
    "offset": 3.4
  },
  {
    "run1_idx": 505,
    "run2_idx": 233,
    "joint_number": 2040,
    "run1_distance": 7093.24,
    "run2_distance": 7096.68,
    "offset": 3.44
  },
  {
    "run1_idx": 506,
    "run2_idx": 234,
    "joint_number": 2050,
    "run1_distance": 7133.2,
    "run2_distance": 7136.64,
    "offset": 3.44
  },
  {
    "run1_idx": 507,
    "run2_idx": 235,
    "joint_number": 2060,
    "run1_distance": 7173.17,
    "run2_distance": 7176.67,
    "offset": 3.5
  },
  {
    "run1_idx": 508,
    "run2_idx": 236,
    "joint_number": 2070,
    "run1_distance": 7213.06,
    "run2_distance": 7216.73,
    "offset": 3.67
  },
  {
    "run1_idx": 509,
    "run2_idx": 237,
    "joint_number": 2080,
    "run1_distance": 7253.1,
    "run2_distance": 7256.79,
    "offset": 3.69
  },
  {
    "run1_idx": 510,
    "run2_idx": 238,
    "joint_number": 2090,
    "run1_distance": 7293.07,
    "run2_distance": 7296.84,
    "offset": 3.77
  },
  {
    "run1_idx": 513,
    "run2_idx": 241,
    "joint_number": 2100,
    "run1_distance": 7333.11,
    "run2_distance": 7336.88,
    "offset": 3.77
  },
  {
    "run1_idx": 514,
    "run2_idx": 242,
    "joint_number": 2110,
    "run1_distance": 7373.12,
    "run2_distance": 7376.98,
    "offset": 3.86
  },
  {
    "run1_idx": 515,
    "run2_idx": 243,
    "joint_number": 2120,
    "run1_distance": 7413.01,
    "run2_distance": 7417.07,
    "offset": 4.06
  },
  {
    "run1_idx": 516,
    "run2_idx": 244,
    "joint_number": 2130,
    "run1_distance": 7452.96,
    "run2_distance": 7457.04,
    "offset": 4.08
  },
  {
    "run1_idx": 517,
    "run2_idx": 245,
    "joint_number": 2140,
    "run1_distance": 7492.89,
    "run2_distance": 7497.1,
    "offset": 4.21
  },
  {
    "run1_idx": 518,
    "run2_idx": 246,
    "joint_number": 2150,
    "run1_distance": 7532.87,
    "run2_distance": 7537.23,
    "offset": 4.36
  },
  {
    "run1_idx": 519,
    "run2_idx": 247,
    "joint_number": 2160,
    "run1_distance": 7572.84,
    "run2_distance": 7577.32,
    "offset": 4.48
  },
  {
    "run1_idx": 520,
    "run2_idx": 248,
    "joint_number": 2170,
    "run1_distance": 7612.71,
    "run2_distance": 7617.42,
    "offset": 4.71
  },
  {
    "run1_idx": 525,
    "run2_idx": 249,
    "joint_number": 2180,
    "run1_distance": 7652.58,
    "run2_distance": 7657.51,
    "offset": 4.93
  },
  {
    "run1_idx": 526,
    "run2_idx": 250,
    "joint_number": 2190,
    "run1_distance": 7692.53,
    "run2_distance": 7697.63,
    "offset": 5.1
  },
  {
    "run1_idx": 527,
    "run2_idx": 251,
    "joint_number": 2200,
    "run1_distance": 7732.39,
    "run2_distance": 7737.73,
    "offset": 5.34
  },
  {
    "run1_idx": 528,
    "run2_idx": 252,
    "joint_number": 2210,
    "run1_distance": 7772.29,
    "run2_distance": 7777.78,
    "offset": 5.49
  },
  {
    "run1_idx": 529,
    "run2_idx": 253,
    "joint_number": 2220,
    "run1_distance": 7783.18,
    "run2_distance": 7788.68,
    "offset": 5.5
  },
  {
    "run1_idx": 530,
    "run2_idx": 254,
    "joint_number": 2230,
    "run1_distance": 7823.12,
    "run2_distance": 7828.78,
    "offset": 5.66
  },
  {
    "run1_idx": 531,
    "run2_idx": 255,
    "joint_number": 2240,
    "run1_distance": 7863.12,
    "run2_distance": 7868.87,
    "offset": 5.75
  },
  {
    "run1_idx": 532,
    "run2_idx": 256,
    "joint_number": 2250,
    "run1_distance": 7903.06,
    "run2_distance": 7908.95,
    "offset": 5.89
  },
  {
    "run1_idx": 533,
    "run2_idx": 257,
    "joint_number": 2260,
    "run1_distance": 7942.72,
    "run2_distance": 7948.8,
    "offset": 6.08
  },
  {
    "run1_idx": 534,
    "run2_idx": 258,
    "joint_number": 2270,
    "run1_distance": 7982.61,
    "run2_distance": 7988.9,
    "offset": 6.29
  },
  {
    "run1_idx": 535,
    "run2_idx": 259,
    "joint_number": 2280,
    "run1_distance": 8022.5,
    "run2_distance": 8029.06,
    "offset": 6.56
  },
  {
    "run1_idx": 536,
    "run2_idx": 260,
    "joint_number": 2290,
    "run1_distance": 8062.45,
    "run2_distance": 8069.19,
    "offset": 6.74
  },
  {
    "run1_idx": 537,
    "run2_idx": 261,
    "joint_number": 2300,
    "run1_distance": 8102.44,
    "run2_distance": 8109.22,
    "offset": 6.78
  },
  {
    "run1_idx": 538,
    "run2_idx": 262,
    "joint_number": 2310,
    "run1_distance": 8142.43,
    "run2_distance": 8149.3,
    "offset": 6.87
  },
  {
    "run1_idx": 539,
    "run2_idx": 263,
    "joint_number": 2320,
    "run1_distance": 8182.43,
    "run2_distance": 8189.36,
    "offset": 6.93
  },
  {
    "run1_idx": 540,
    "run2_idx": 264,
    "joint_number": 2330,
    "run1_distance": 8222.36,
    "run2_distance": 8229.44,
    "offset": 7.08
  },
  {
    "run1_idx": 541,
    "run2_idx": 265,
    "joint_number": 2340,
    "run1_distance": 8262.31,
    "run2_distance": 8269.53,
    "offset": 7.22
  },
  {
    "run1_idx": 542,
    "run2_idx": 266,
    "joint_number": 2350,
    "run1_distance": 8302.32,
    "run2_distance": 8309.59,
    "offset": 7.27
  },
  {
    "run1_idx": 543,
    "run2_idx": 267,
    "joint_number": 2360,
    "run1_distance": 8342.32,
    "run2_distance": 8349.7,
    "offset": 7.38
  },
  {
    "run1_idx": 544,
    "run2_idx": 269,
    "joint_number": 2370,
    "run1_distance": 8382.27,
    "run2_distance": 8389.73,
    "offset": 7.46
  },
  {
    "run1_idx": 546,
    "run2_idx": 270,
    "joint_number": 2380,
    "run1_distance": 8422.32,
    "run2_distance": 8429.85,
    "offset": 7.53
  },
  {
    "run1_idx": 547,
    "run2_idx": 271,
    "joint_number": 2390,
    "run1_distance": 8447.44,
    "run2_distance": 8455.03,
    "offset": 7.59
  },
  {
    "run1_idx": 548,
    "run2_idx": 272,
    "joint_number": 2400,
    "run1_distance": 8487.44,
    "run2_distance": 8495.11,
    "offset": 7.67
  },
  {
    "run1_idx": 549,
    "run2_idx": 273,
    "joint_number": 2410,
    "run1_distance": 8527.47,
    "run2_distance": 8535.2,
    "offset": 7.73
  },
  {
    "run1_idx": 550,
    "run2_idx": 274,
    "joint_number": 2420,
    "run1_distance": 8567.45,
    "run2_distance": 8575.28,
    "offset": 7.83
  },
  {
    "run1_idx": 551,
    "run2_idx": 275,
    "joint_number": 2430,
    "run1_distance": 8607.42,
    "run2_distance": 8615.33,
    "offset": 7.91
  },
  {
    "run1_idx": 552,
    "run2_idx": 276,
    "joint_number": 2440,
    "run1_distance": 8647.32,
    "run2_distance": 8655.39,
    "offset": 8.07
  },
  {
    "run1_idx": 553,
    "run2_idx": 277,
    "joint_number": 2450,
    "run1_distance": 8686.05,
    "run2_distance": 8694.21,
    "offset": 8.16
  },
  {
    "run1_idx": 555,
    "run2_idx": 278,
    "joint_number": 2460,
    "run1_distance": 8725.97,
    "run2_distance": 8734.21,
    "offset": 8.24
  },
  {
    "run1_idx": 556,
    "run2_idx": 279,
    "joint_number": 2470,
    "run1_distance": 8765.89,
    "run2_distance": 8774.28,
    "offset": 8.39
  },
  {
    "run1_idx": 557,
    "run2_idx": 280,
    "joint_number": 2480,
    "run1_distance": 8805.81,
    "run2_distance": 8814.34,
    "offset": 8.53
  },
  {
    "run1_idx": 558,
    "run2_idx": 281,
    "joint_number": 2490,
    "run1_distance": 8845.69,
    "run2_distance": 8854.31,
    "offset": 8.62
  },
  {
    "run1_idx": 559,
    "run2_idx": 282,
    "joint_number": 2500,
    "run1_distance": 8885.64,
    "run2_distance": 8894.31,
    "offset": 8.67
  },
  {
    "run1_idx": 562,
    "run2_idx": 283,
    "joint_number": 2510,
    "run1_distance": 8925.56,
    "run2_distance": 8934.36,
    "offset": 8.8
  },
  {
    "run1_idx": 563,
    "run2_idx": 284,
    "joint_number": 2520,
    "run1_distance": 8963.32,
    "run2_distance": 8972.21,
    "offset": 8.89
  },
  {
    "run1_idx": 564,
    "run2_idx": 285,
    "joint_number": 2530,
    "run1_distance": 9003.4,
    "run2_distance": 9012.46,
    "offset": 9.06
  },
  {
    "run1_idx": 565,
    "run2_idx": 286,
    "joint_number": 2540,
    "run1_distance": 9043.4,
    "run2_distance": 9052.64,
    "offset": 9.24
  },
  {
    "run1_idx": 566,
    "run2_idx": 287,
    "joint_number": 2550,
    "run1_distance": 9083.38,
    "run2_distance": 9092.72,
    "offset": 9.34
  },
  {
    "run1_idx": 567,
    "run2_idx": 288,
    "joint_number": 2560,
    "run1_distance": 9123.35,
    "run2_distance": 9132.76,
    "offset": 9.41
  },
  {
    "run1_idx": 568,
    "run2_idx": 289,
    "joint_number": 2570,
    "run1_distance": 9163.29,
    "run2_distance": 9172.79,
    "offset": 9.5
  },
  {
    "run1_idx": 569,
    "run2_idx": 290,
    "joint_number": 2580,
    "run1_distance": 9203.22,
    "run2_distance": 9212.83,
    "offset": 9.61
  },
  {
    "run1_idx": 570,
    "run2_idx": 291,
    "joint_number": 2590,
    "run1_distance": 9243.19,
    "run2_distance": 9252.81,
    "offset": 9.62
  },
  {
    "run1_idx": 571,
    "run2_idx": 292,
    "joint_number": 2600,
    "run1_distance": 9283.21,
    "run2_distance": 9292.73,
    "offset": 9.52
  },
  {
    "run1_idx": 573,
    "run2_idx": 294,
    "joint_number": 2610,
    "run1_distance": 9323.26,
    "run2_distance": 9332.89,
    "offset": 9.63
  },
  {
    "run1_idx": 574,
    "run2_idx": 295,
    "joint_number": 2620,
    "run1_distance": 9363.32,
    "run2_distance": 9373.09,
    "offset": 9.77
  },
  {
    "run1_idx": 575,
    "run2_idx": 296,
    "joint_number": 2630,
    "run1_distance": 9403.23,
    "run2_distance": 9412.95,
    "offset": 9.72
  },
  {
    "run1_idx": 577,
    "run2_idx": 298,
    "joint_number": 2640,
    "run1_distance": 9414.71,
    "run2_distance": 9423.94,
    "offset": 9.23
  },
  {
    "run1_idx": 578,
    "run2_idx": 307,
    "joint_number": 2650,
    "run1_distance": 9454.77,
    "run2_distance": 9464.58,
    "offset": 9.81
  },
  {
    "run1_idx": 579,
    "run2_idx": 308,
    "joint_number": 2660,
    "run1_distance": 9471.61,
    "run2_distance": 9481.55,
    "offset": 9.94
  },
  {
    "run1_idx": 581,
    "run2_idx": 309,
    "joint_number": 2670,
    "run1_distance": 9492.12,
    "run2_distance": 9502.04,
    "offset": 9.92
  },
  {
    "run1_idx": 582,
    "run2_idx": 310,
    "joint_number": 2680,
    "run1_distance": 9532.22,
    "run2_distance": 9542.13,
    "offset": 9.91
  },
  {
    "run1_idx": 583,
    "run2_idx": 311,
    "joint_number": 2690,
    "run1_distance": 9572.29,
    "run2_distance": 9582.24,
    "offset": 9.95
  },
  {
    "run1_idx": 584,
    "run2_idx": 312,
    "joint_number": 2700,
    "run1_distance": 9612.32,
    "run2_distance": 9622.29,
    "offset": 9.97
  },
  {
    "run1_idx": 585,
    "run2_idx": 313,
    "joint_number": 2710,
    "run1_distance": 9652.34,
    "run2_distance": 9662.34,
    "offset": 10
  },
  {
    "run1_idx": 586,
    "run2_idx": 314,
    "joint_number": 2720,
    "run1_distance": 9688.93,
    "run2_distance": 9698.96,
    "offset": 10.03
  },
  {
    "run1_idx": 587,
    "run2_idx": 315,
    "joint_number": 2730,
    "run1_distance": 9728.98,
    "run2_distance": 9739.09,
    "offset": 10.11
  },
  {
    "run1_idx": 588,
    "run2_idx": 316,
    "joint_number": 2740,
    "run1_distance": 9768.99,
    "run2_distance": 9779.3,
    "offset": 10.31
  },
  {
    "run1_idx": 590,
    "run2_idx": 318,
    "joint_number": 2750,
    "run1_distance": 9777.36,
    "run2_distance": 9787.19,
    "offset": 9.83
  },
  {
    "run1_idx": 591,
    "run2_idx": 319,
    "joint_number": 2760,
    "run1_distance": 9792.35,
    "run2_distance": 9802.28,
    "offset": 9.93
  },
  {
    "run1_idx": 592,
    "run2_idx": 324,
    "joint_number": 2770,
    "run1_distance": 9832.35,
    "run2_distance": 9842.33,
    "offset": 9.98
  },
  {
    "run1_idx": 593,
    "run2_idx": 326,
    "joint_number": 2780,
    "run1_distance": 9869.99,
    "run2_distance": 9880.1,
    "offset": 10.11
  },
  {
    "run1_idx": 594,
    "run2_idx": 327,
    "joint_number": 2790,
    "run1_distance": 9910,
    "run2_distance": 9920.18,
    "offset": 10.18
  },
  {
    "run1_idx": 595,
    "run2_idx": 328,
    "joint_number": 2800,
    "run1_distance": 9949.99,
    "run2_distance": 9960.23,
    "offset": 10.24
  },
  {
    "run1_idx": 596,
    "run2_idx": 329,
    "joint_number": 2810,
    "run1_distance": 9989.97,
    "run2_distance": 10000.25,
    "offset": 10.28
  },
  {
    "run1_idx": 597,
    "run2_idx": 330,
    "joint_number": 2820,
    "run1_distance": 10029.99,
    "run2_distance": 10040.32,
    "offset": 10.33
  },
  {
    "run1_idx": 598,
    "run2_idx": 331,
    "joint_number": 2830,
    "run1_distance": 10070.24,
    "run2_distance": 10080.65,
    "offset": 10.41
  },
  {
    "run1_idx": 599,
    "run2_idx": 333,
    "joint_number": 2840,
    "run1_distance": 10110.48,
    "run2_distance": 10121.04,
    "offset": 10.56
  },
  {
    "run1_idx": 600,
    "run2_idx": 334,
    "joint_number": 2850,
    "run1_distance": 10123.92,
    "run2_distance": 10134.53,
    "offset": 10.61
  },
  {
    "run1_idx": 601,
    "run2_idx": 335,
    "joint_number": 2860,
    "run1_distance": 10163.9,
    "run2_distance": 10174.6,
    "offset": 10.7
  },
  {
    "run1_idx": 603,
    "run2_idx": 336,
    "joint_number": 2870,
    "run1_distance": 10203.94,
    "run2_distance": 10214.78,
    "offset": 10.84
  },
  {
    "run1_idx": 604,
    "run2_idx": 337,
    "joint_number": 2880,
    "run1_distance": 10243.98,
    "run2_distance": 10254.92,
    "offset": 10.94
  },
  {
    "run1_idx": 605,
    "run2_idx": 338,
    "joint_number": 2890,
    "run1_distance": 10284.03,
    "run2_distance": 10295.13,
    "offset": 11.1
  },
  {
    "run1_idx": 606,
    "run2_idx": 339,
    "joint_number": 2900,
    "run1_distance": 10324.04,
    "run2_distance": 10335.22,
    "offset": 11.18
  },
  {
    "run1_idx": 607,
    "run2_idx": 340,
    "joint_number": 2910,
    "run1_distance": 10364.04,
    "run2_distance": 10375.3,
    "offset": 11.26
  },
  {
    "run1_idx": 608,
    "run2_idx": 341,
    "joint_number": 2920,
    "run1_distance": 10384.56,
    "run2_distance": 10395.84,
    "offset": 11.28
  },
  {
    "run1_idx": 611,
    "run2_idx": 342,
    "joint_number": 2930,
    "run1_distance": 10424.46,
    "run2_distance": 10435.89,
    "offset": 11.43
  },
  {
    "run1_idx": 613,
    "run2_idx": 344,
    "joint_number": 2940,
    "run1_distance": 10464.47,
    "run2_distance": 10475.98,
    "offset": 11.51
  },
  {
    "run1_idx": 614,
    "run2_idx": 346,
    "joint_number": 2950,
    "run1_distance": 10504.41,
    "run2_distance": 10516.03,
    "offset": 11.62
  },
  {
    "run1_idx": 616,
    "run2_idx": 347,
    "joint_number": 2960,
    "run1_distance": 10544.42,
    "run2_distance": 10556.14,
    "offset": 11.72
  },
  {
    "run1_idx": 622,
    "run2_idx": 370,
    "joint_number": 2970,
    "run1_distance": 10584.42,
    "run2_distance": 10596.33,
    "offset": 11.91
  },
  {
    "run1_idx": 625,
    "run2_idx": 375,
    "joint_number": 2980,
    "run1_distance": 10624.41,
    "run2_distance": 10636.39,
    "offset": 11.98
  },
  {
    "run1_idx": 626,
    "run2_idx": 376,
    "joint_number": 2990,
    "run1_distance": 10664.32,
    "run2_distance": 10676.48,
    "offset": 12.16
  },
  {
    "run1_idx": 627,
    "run2_idx": 377,
    "joint_number": 3000,
    "run1_distance": 10704.25,
    "run2_distance": 10716.58,
    "offset": 12.33
  },
  {
    "run1_idx": 628,
    "run2_idx": 378,
    "joint_number": 3010,
    "run1_distance": 10742.98,
    "run2_distance": 10755.34,
    "offset": 12.36
  },
  {
    "run1_idx": 630,
    "run2_idx": 381,
    "joint_number": 3020,
    "run1_distance": 10762.72,
    "run2_distance": 10775.14,
    "offset": 12.42
  },
  {
    "run1_idx": 631,
    "run2_idx": 382,
    "joint_number": 3030,
    "run1_distance": 10802.85,
    "run2_distance": 10815.48,
    "offset": 12.63
  },
  {
    "run1_idx": 632,
    "run2_idx": 383,
    "joint_number": 3040,
    "run1_distance": 10842.83,
    "run2_distance": 10855.52,
    "offset": 12.69
  },
  {
    "run1_idx": 633,
    "run2_idx": 384,
    "joint_number": 3050,
    "run1_distance": 10882.82,
    "run2_distance": 10895.55,
    "offset": 12.73
  },
  {
    "run1_idx": 634,
    "run2_idx": 385,
    "joint_number": 3060,
    "run1_distance": 10922.74,
    "run2_distance": 10935.57,
    "offset": 12.83
  },
  {
    "run1_idx": 635,
    "run2_idx": 386,
    "joint_number": 3070,
    "run1_distance": 10962.69,
    "run2_distance": 10975.62,
    "offset": 12.93
  },
  {
    "run1_idx": 636,
    "run2_idx": 387,
    "joint_number": 3080,
    "run1_distance": 11002.66,
    "run2_distance": 11015.67,
    "offset": 13.01
  },
  {
    "run1_idx": 637,
    "run2_idx": 388,
    "joint_number": 3090,
    "run1_distance": 11042.63,
    "run2_distance": 11055.71,
    "offset": 13.08
  },
  {
    "run1_idx": 639,
    "run2_idx": 390,
    "joint_number": 3100,
    "run1_distance": 11082.6,
    "run2_distance": 11095.72,
    "offset": 13.12
  },
  {
    "run1_idx": 640,
    "run2_idx": 391,
    "joint_number": 3110,
    "run1_distance": 11122.54,
    "run2_distance": 11135.74,
    "offset": 13.2
  },
  {
    "run1_idx": 641,
    "run2_idx": 392,
    "joint_number": 3120,
    "run1_distance": 11162.41,
    "run2_distance": 11175.73,
    "offset": 13.32
  },
  {
    "run1_idx": 642,
    "run2_idx": 393,
    "joint_number": 3130,
    "run1_distance": 11202.37,
    "run2_distance": 11215.76,
    "offset": 13.39
  },
  {
    "run1_idx": 643,
    "run2_idx": 394,
    "joint_number": 3140,
    "run1_distance": 11242.31,
    "run2_distance": 11255.83,
    "offset": 13.52
  },
  {
    "run1_idx": 644,
    "run2_idx": 395,
    "joint_number": 3150,
    "run1_distance": 11282.22,
    "run2_distance": 11295.9,
    "offset": 13.68
  },
  {
    "run1_idx": 645,
    "run2_idx": 396,
    "joint_number": 3160,
    "run1_distance": 11322.21,
    "run2_distance": 11335.96,
    "offset": 13.75
  },
  {
    "run1_idx": 646,
    "run2_idx": 397,
    "joint_number": 3170,
    "run1_distance": 11362.19,
    "run2_distance": 11376.04,
    "offset": 13.85
  },
  {
    "run1_idx": 647,
    "run2_idx": 398,
    "joint_number": 3180,
    "run1_distance": 11402.14,
    "run2_distance": 11416.08,
    "offset": 13.94
  },
  {
    "run1_idx": 648,
    "run2_idx": 399,
    "joint_number": 3190,
    "run1_distance": 11442.11,
    "run2_distance": 11456.24,
    "offset": 14.13
  },
  {
    "run1_idx": 649,
    "run2_idx": 400,
    "joint_number": 3200,
    "run1_distance": 11482.02,
    "run2_distance": 11496.38,
    "offset": 14.36
  },
  {
    "run1_idx": 650,
    "run2_idx": 401,
    "joint_number": 3210,
    "run1_distance": 11521.94,
    "run2_distance": 11536.46,
    "offset": 14.52
  },
  {
    "run1_idx": 651,
    "run2_idx": 402,
    "joint_number": 3220,
    "run1_distance": 11561.92,
    "run2_distance": 11576.56,
    "offset": 14.64
  },
  {
    "run1_idx": 652,
    "run2_idx": 404,
    "joint_number": 3230,
    "run1_distance": 11601.23,
    "run2_distance": 11615.97,
    "offset": 14.74
  },
  {
    "run1_idx": 653,
    "run2_idx": 405,
    "joint_number": 3240,
    "run1_distance": 11641.02,
    "run2_distance": 11655.8,
    "offset": 14.78
  },
  {
    "run1_idx": 654,
    "run2_idx": 406,
    "joint_number": 3250,
    "run1_distance": 11680.96,
    "run2_distance": 11695.83,
    "offset": 14.87
  },
  {
    "run1_idx": 655,
    "run2_idx": 407,
    "joint_number": 3260,
    "run1_distance": 11720.88,
    "run2_distance": 11735.85,
    "offset": 14.97
  },
  {
    "run1_idx": 656,
    "run2_idx": 408,
    "joint_number": 3270,
    "run1_distance": 11760.82,
    "run2_distance": 11775.89,
    "offset": 15.07
  },
  {
    "run1_idx": 657,
    "run2_idx": 409,
    "joint_number": 3280,
    "run1_distance": 11800.88,
    "run2_distance": 11815.91,
    "offset": 15.03
  },
  {
    "run1_idx": 658,
    "run2_idx": 410,
    "joint_number": 3290,
    "run1_distance": 11840.74,
    "run2_distance": 11855.91,
    "offset": 15.17
  },
  {
    "run1_idx": 659,
    "run2_idx": 411,
    "joint_number": 3300,
    "run1_distance": 11880.7,
    "run2_distance": 11895.94,
    "offset": 15.24
  },
  {
    "run1_idx": 660,
    "run2_idx": 412,
    "joint_number": 3310,
    "run1_distance": 11920.74,
    "run2_distance": 11936,
    "offset": 15.26
  },
  {
    "run1_idx": 661,
    "run2_idx": 413,
    "joint_number": 3320,
    "run1_distance": 11960.71,
    "run2_distance": 11976.04,
    "offset": 15.33
  },
  {
    "run1_idx": 662,
    "run2_idx": 414,
    "joint_number": 3330,
    "run1_distance": 12000.69,
    "run2_distance": 12016.1,
    "offset": 15.41
  },
  {
    "run1_idx": 663,
    "run2_idx": 415,
    "joint_number": 3340,
    "run1_distance": 12040.63,
    "run2_distance": 12056.09,
    "offset": 15.46
  },
  {
    "run1_idx": 664,
    "run2_idx": 416,
    "joint_number": 3350,
    "run1_distance": 12080.55,
    "run2_distance": 12096.09,
    "offset": 15.54
  },
  {
    "run1_idx": 665,
    "run2_idx": 417,
    "joint_number": 3360,
    "run1_distance": 12120.5,
    "run2_distance": 12136.11,
    "offset": 15.61
  },
  {
    "run1_idx": 666,
    "run2_idx": 418,
    "joint_number": 3370,
    "run1_distance": 12160.45,
    "run2_distance": 12176.05,
    "offset": 15.6
  },
  {
    "run1_idx": 668,
    "run2_idx": 420,
    "joint_number": 3380,
    "run1_distance": 12200.4,
    "run2_distance": 12216.01,
    "offset": 15.61
  },
  {
    "run1_idx": 669,
    "run2_idx": 421,
    "joint_number": 3390,
    "run1_distance": 12240.32,
    "run2_distance": 12256.05,
    "offset": 15.73
  },
  {
    "run1_idx": 670,
    "run2_idx": 422,
    "joint_number": 3400,
    "run1_distance": 12280.29,
    "run2_distance": 12296.1,
    "offset": 15.81
  },
  {
    "run1_idx": 671,
    "run2_idx": 423,
    "joint_number": 3410,
    "run1_distance": 12320.26,
    "run2_distance": 12336.12,
    "offset": 15.86
  },
  {
    "run1_idx": 672,
    "run2_idx": 424,
    "joint_number": 3420,
    "run1_distance": 12360.22,
    "run2_distance": 12376.08,
    "offset": 15.86
  },
  {
    "run1_idx": 674,
    "run2_idx": 425,
    "joint_number": 3430,
    "run1_distance": 12393.72,
    "run2_distance": 12409.59,
    "offset": 15.87
  },
  {
    "run1_idx": 675,
    "run2_idx": 427,
    "joint_number": 3440,
    "run1_distance": 12433.63,
    "run2_distance": 12449.51,
    "offset": 15.88
  },
  {
    "run1_idx": 676,
    "run2_idx": 428,
    "joint_number": 3450,
    "run1_distance": 12473.56,
    "run2_distance": 12489.48,
    "offset": 15.92
  },
  {
    "run1_idx": 677,
    "run2_idx": 429,
    "joint_number": 3460,
    "run1_distance": 12513.51,
    "run2_distance": 12529.5,
    "offset": 15.99
  },
  {
    "run1_idx": 678,
    "run2_idx": 430,
    "joint_number": 3470,
    "run1_distance": 12553.39,
    "run2_distance": 12569.49,
    "offset": 16.1
  },
  {
    "run1_idx": 679,
    "run2_idx": 431,
    "joint_number": 3480,
    "run1_distance": 12581.14,
    "run2_distance": 12597.28,
    "offset": 16.14
  },
  {
    "run1_idx": 680,
    "run2_idx": 432,
    "joint_number": 3490,
    "run1_distance": 12621.19,
    "run2_distance": 12637.46,
    "offset": 16.27
  },
  {
    "run1_idx": 682,
    "run2_idx": 434,
    "joint_number": 3500,
    "run1_distance": 12634.45,
    "run2_distance": 12650.16,
    "offset": 15.71
  },
  {
    "run1_idx": 683,
    "run2_idx": 435,
    "joint_number": 3510,
    "run1_distance": 12663.2,
    "run2_distance": 12679.07,
    "offset": 15.87
  },
  {
    "run1_idx": 684,
    "run2_idx": 436,
    "joint_number": 3520,
    "run1_distance": 12703.06,
    "run2_distance": 12719.12,
    "offset": 16.06
  },
  {
    "run1_idx": 685,
    "run2_idx": 437,
    "joint_number": 3530,
    "run1_distance": 12742.98,
    "run2_distance": 12759.17,
    "offset": 16.19
  },
  {
    "run1_idx": 686,
    "run2_idx": 438,
    "joint_number": 3540,
    "run1_distance": 12782.96,
    "run2_distance": 12799.18,
    "offset": 16.22
  },
  {
    "run1_idx": 687,
    "run2_idx": 439,
    "joint_number": 3550,
    "run1_distance": 12822.92,
    "run2_distance": 12839.18,
    "offset": 16.26
  },
  {
    "run1_idx": 688,
    "run2_idx": 440,
    "joint_number": 3560,
    "run1_distance": 12862.87,
    "run2_distance": 12879.25,
    "offset": 16.38
  },
  {
    "run1_idx": 689,
    "run2_idx": 441,
    "joint_number": 3570,
    "run1_distance": 12902.81,
    "run2_distance": 12919.27,
    "offset": 16.46
  },
  {
    "run1_idx": 690,
    "run2_idx": 442,
    "joint_number": 3580,
    "run1_distance": 12942.84,
    "run2_distance": 12959.37,
    "offset": 16.53
  },
  {
    "run1_idx": 691,
    "run2_idx": 443,
    "joint_number": 3590,
    "run1_distance": 12982.69,
    "run2_distance": 12999.29,
    "offset": 16.6
  },
  {
    "run1_idx": 692,
    "run2_idx": 444,
    "joint_number": 3600,
    "run1_distance": 13018.42,
    "run2_distance": 13035.04,
    "offset": 16.62
  },
  {
    "run1_idx": 693,
    "run2_idx": 445,
    "joint_number": 3610,
    "run1_distance": 13058.31,
    "run2_distance": 13075.02,
    "offset": 16.71
  },
  {
    "run1_idx": 694,
    "run2_idx": 446,
    "joint_number": 3620,
    "run1_distance": 13098.3,
    "run2_distance": 13115.05,
    "offset": 16.75
  },
  {
    "run1_idx": 695,
    "run2_idx": 447,
    "joint_number": 3630,
    "run1_distance": 13138.29,
    "run2_distance": 13155.1,
    "offset": 16.81
  },
  {
    "run1_idx": 699,
    "run2_idx": 451,
    "joint_number": 3640,
    "run1_distance": 13178.28,
    "run2_distance": 13195.16,
    "offset": 16.88
  },
  {
    "run1_idx": 700,
    "run2_idx": 452,
    "joint_number": 3650,
    "run1_distance": 13218.22,
    "run2_distance": 13235.17,
    "offset": 16.95
  },
  {
    "run1_idx": 701,
    "run2_idx": 453,
    "joint_number": 3660,
    "run1_distance": 13258.21,
    "run2_distance": 13275.22,
    "offset": 17.01
  },
  {
    "run1_idx": 702,
    "run2_idx": 454,
    "joint_number": 3670,
    "run1_distance": 13298.08,
    "run2_distance": 13315.19,
    "offset": 17.11
  },
  {
    "run1_idx": 703,
    "run2_idx": 455,
    "joint_number": 3680,
    "run1_distance": 13338.04,
    "run2_distance": 13355.24,
    "offset": 17.2
  },
  {
    "run1_idx": 704,
    "run2_idx": 458,
    "joint_number": 3690,
    "run1_distance": 13378,
    "run2_distance": 13395.4,
    "offset": 17.4
  },
  {
    "run1_idx": 706,
    "run2_idx": 460,
    "joint_number": 3700,
    "run1_distance": 13393.08,
    "run2_distance": 13409.71,
    "offset": 16.63
  },
  {
    "run1_idx": 708,
    "run2_idx": 461,
    "joint_number": 3710,
    "run1_distance": 13433.1,
    "run2_distance": 13450.09,
    "offset": 16.99
  },
  {
    "run1_idx": 709,
    "run2_idx": 462,
    "joint_number": 3720,
    "run1_distance": 13473.1,
    "run2_distance": 13490.17,
    "offset": 17.07
  },
  {
    "run1_idx": 710,
    "run2_idx": 463,
    "joint_number": 3730,
    "run1_distance": 13513.06,
    "run2_distance": 13530.24,
    "offset": 17.18
  },
  {
    "run1_idx": 711,
    "run2_idx": 464,
    "joint_number": 3740,
    "run1_distance": 13553.08,
    "run2_distance": 13570.27,
    "offset": 17.19
  },
  {
    "run1_idx": 712,
    "run2_idx": 465,
    "joint_number": 3750,
    "run1_distance": 13593.14,
    "run2_distance": 13610.44,
    "offset": 17.3
  },
  {
    "run1_idx": 713,
    "run2_idx": 469,
    "joint_number": 3760,
    "run1_distance": 13630.69,
    "run2_distance": 13647.91,
    "offset": 17.22
  },
  {
    "run1_idx": 714,
    "run2_idx": 470,
    "joint_number": 3770,
    "run1_distance": 13669.57,
    "run2_distance": 13686.89,
    "offset": 17.32
  },
  {
    "run1_idx": 715,
    "run2_idx": 471,
    "joint_number": 3780,
    "run1_distance": 13709.48,
    "run2_distance": 13726.94,
    "offset": 17.46
  },
  {
    "run1_idx": 716,
    "run2_idx": 472,
    "joint_number": 3790,
    "run1_distance": 13733.76,
    "run2_distance": 13751.23,
    "offset": 17.47
  },
  {
    "run1_idx": 717,
    "run2_idx": 473,
    "joint_number": 3800,
    "run1_distance": 13773.69,
    "run2_distance": 13791.16,
    "offset": 17.47
  },
  {
    "run1_idx": 718,
    "run2_idx": 474,
    "joint_number": 3810,
    "run1_distance": 13813.67,
    "run2_distance": 13831.31,
    "offset": 17.64
  },
  {
    "run1_idx": 720,
    "run2_idx": 478,
    "joint_number": 3820,
    "run1_distance": 13853.66,
    "run2_distance": 13871.43,
    "offset": 17.77
  },
  {
    "run1_idx": 721,
    "run2_idx": 479,
    "joint_number": 3830,
    "run1_distance": 13893.67,
    "run2_distance": 13911.58,
    "offset": 17.91
  },
  {
    "run1_idx": 722,
    "run2_idx": 480,
    "joint_number": 3840,
    "run1_distance": 13933.62,
    "run2_distance": 13951.67,
    "offset": 18.05
  },
  {
    "run1_idx": 723,
    "run2_idx": 481,
    "joint_number": 3850,
    "run1_distance": 13944.89,
    "run2_distance": 13962.95,
    "offset": 18.06
  },
  {
    "run1_idx": 724,
    "run2_idx": 483,
    "joint_number": 3860,
    "run1_distance": 13984.76,
    "run2_distance": 14003.03,
    "offset": 18.27
  },
  {
    "run1_idx": 725,
    "run2_idx": 484,
    "joint_number": 3870,
    "run1_distance": 14011.82,
    "run2_distance": 14030.23,
    "offset": 18.41
  },
  {
    "run1_idx": 727,
    "run2_idx": 486,
    "joint_number": 3880,
    "run1_distance": 14026.52,
    "run2_distance": 14044.12,
    "offset": 17.6
  },
  {
    "run1_idx": 728,
    "run2_idx": 487,
    "joint_number": 3890,
    "run1_distance": 14039.38,
    "run2_distance": 14057.38,
    "offset": 18
  },
  {
    "run1_idx": 729,
    "run2_idx": 488,
    "joint_number": 3900,
    "run1_distance": 14079.39,
    "run2_distance": 14097.51,
    "offset": 18.12
  },
  {
    "run1_idx": 730,
    "run2_idx": 489,
    "joint_number": 3910,
    "run1_distance": 14119.36,
    "run2_distance": 14137.56,
    "offset": 18.2
  },
  {
    "run1_idx": 731,
    "run2_idx": 490,
    "joint_number": 3920,
    "run1_distance": 14159.41,
    "run2_distance": 14177.74,
    "offset": 18.33
  },
  {
    "run1_idx": 733,
    "run2_idx": 492,
    "joint_number": 3930,
    "run1_distance": 14174.14,
    "run2_distance": 14192.65,
    "offset": 18.51
  },
  {
    "run1_idx": 734,
    "run2_idx": 493,
    "joint_number": 3940,
    "run1_distance": 14196.75,
    "run2_distance": 14215.54,
    "offset": 18.79
  },
  {
    "run1_idx": 735,
    "run2_idx": 494,
    "joint_number": 3950,
    "run1_distance": 14236.85,
    "run2_distance": 14255.62,
    "offset": 18.77
  },
  {
    "run1_idx": 736,
    "run2_idx": 495,
    "joint_number": 3960,
    "run1_distance": 14277.08,
    "run2_distance": 14295.73,
    "offset": 18.65
  },
  {
    "run1_idx": 737,
    "run2_idx": 496,
    "joint_number": 3970,
    "run1_distance": 14317.04,
    "run2_distance": 14335.77,
    "offset": 18.73
  },
  {
    "run1_idx": 738,
    "run2_idx": 497,
    "joint_number": 3980,
    "run1_distance": 14356.99,
    "run2_distance": 14375.79,
    "offset": 18.8
  },
  {
    "run1_idx": 739,
    "run2_idx": 498,
    "joint_number": 3990,
    "run1_distance": 14397,
    "run2_distance": 14415.89,
    "offset": 18.89
  },
  {
    "run1_idx": 740,
    "run2_idx": 499,
    "joint_number": 4000,
    "run1_distance": 14437,
    "run2_distance": 14455.91,
    "offset": 18.91
  },
  {
    "run1_idx": 741,
    "run2_idx": 500,
    "joint_number": 4010,
    "run1_distance": 14477.02,
    "run2_distance": 14495.99,
    "offset": 18.97
  },
  {
    "run1_idx": 742,
    "run2_idx": 501,
    "joint_number": 4020,
    "run1_distance": 14516.97,
    "run2_distance": 14536.06,
    "offset": 19.09
  },
  {
    "run1_idx": 743,
    "run2_idx": 502,
    "joint_number": 4030,
    "run1_distance": 14557.02,
    "run2_distance": 14576.18,
    "offset": 19.16
  },
  {
    "run1_idx": 744,
    "run2_idx": 503,
    "joint_number": 4040,
    "run1_distance": 14597.01,
    "run2_distance": 14616.24,
    "offset": 19.23
  },
  {
    "run1_idx": 745,
    "run2_idx": 505,
    "joint_number": 4050,
    "run1_distance": 14637.01,
    "run2_distance": 14656.33,
    "offset": 19.32
  },
  {
    "run1_idx": 746,
    "run2_idx": 506,
    "joint_number": 4060,
    "run1_distance": 14677.04,
    "run2_distance": 14696.18,
    "offset": 19.14
  },
  {
    "run1_idx": 747,
    "run2_idx": 507,
    "joint_number": 4070,
    "run1_distance": 14683.91,
    "run2_distance": 14703.07,
    "offset": 19.16
  },
  {
    "run1_idx": 748,
    "run2_idx": 508,
    "joint_number": 4080,
    "run1_distance": 14721.78,
    "run2_distance": 14741.05,
    "offset": 19.27
  },
  {
    "run1_idx": 749,
    "run2_idx": 517,
    "joint_number": 4090,
    "run1_distance": 14751.47,
    "run2_distance": 14770.67,
    "offset": 19.2
  },
  {
    "run1_idx": 750,
    "run2_idx": 518,
    "joint_number": 4100,
    "run1_distance": 14757.51,
    "run2_distance": 14776.84,
    "offset": 19.33
  },
  {
    "run1_idx": 751,
    "run2_idx": 519,
    "joint_number": 4110,
    "run1_distance": 14797.06,
    "run2_distance": 14816.3,
    "offset": 19.24
  },
  {
    "run1_idx": 752,
    "run2_idx": 520,
    "joint_number": 4120,
    "run1_distance": 14837.09,
    "run2_distance": 14856.33,
    "offset": 19.24
  },
  {
    "run1_idx": 753,
    "run2_idx": 521,
    "joint_number": 4130,
    "run1_distance": 14877.13,
    "run2_distance": 14896.33,
    "offset": 19.2
  },
  {
    "run1_idx": 754,
    "run2_idx": 522,
    "joint_number": 4140,
    "run1_distance": 14883.11,
    "run2_distance": 14902.4,
    "offset": 19.29
  },
  {
    "run1_idx": 755,
    "run2_idx": 524,
    "joint_number": 4150,
    "run1_distance": 14902.3,
    "run2_distance": 14921.6,
    "offset": 19.3
  },
  {
    "run1_idx": 758,
    "run2_idx": 529,
    "joint_number": 4160,
    "run1_distance": 14942.17,
    "run2_distance": 14957.97,
    "offset": 15.8
  },
  {
    "run1_idx": 770,
    "run2_idx": 564,
    "joint_number": 4190,
    "run1_distance": 14952.69,
    "run2_distance": 14972.08,
    "offset": 19.39
  },
  {
    "run1_idx": 772,
    "run2_idx": 572,
    "joint_number": 4200,
    "run1_distance": 14965.88,
    "run2_distance": 14985.3,
    "offset": 19.42
  },
  {
    "run1_idx": 773,
    "run2_idx": 577,
    "joint_number": 4210,
    "run1_distance": 15005.81,
    "run2_distance": 15025.35,
    "offset": 19.54
  },
  {
    "run1_idx": 776,
    "run2_idx": 592,
    "joint_number": 4220,
    "run1_distance": 15045.75,
    "run2_distance": 15065.38,
    "offset": 19.63
  },
  {
    "run1_idx": 786,
    "run2_idx": 622,
    "joint_number": 4230,
    "run1_distance": 15085.66,
    "run2_distance": 15105.49,
    "offset": 19.83
  },
  {
    "run1_idx": 788,
    "run2_idx": 624,
    "joint_number": 4240,
    "run1_distance": 15125.56,
    "run2_distance": 15145.46,
    "offset": 19.9
  },
  {
    "run1_idx": 789,
    "run2_idx": 628,
    "joint_number": 4250,
    "run1_distance": 15165.45,
    "run2_distance": 15185.39,
    "offset": 19.94
  },
  {
    "run1_idx": 790,
    "run2_idx": 630,
    "joint_number": 4260,
    "run1_distance": 15205.28,
    "run2_distance": 15225.33,
    "offset": 20.05
  },
  {
    "run1_idx": 791,
    "run2_idx": 632,
    "joint_number": 4270,
    "run1_distance": 15244.57,
    "run2_distance": 15264.67,
    "offset": 20.1
  },
  {
    "run1_idx": 792,
    "run2_idx": 637,
    "joint_number": 4280,
    "run1_distance": 15255.45,
    "run2_distance": 15275.56,
    "offset": 20.11
  },
  {
    "run1_idx": 793,
    "run2_idx": 638,
    "joint_number": 4290,
    "run1_distance": 15265.43,
    "run2_distance": 15285.68,
    "offset": 20.25
  },
  {
    "run1_idx": 795,
    "run2_idx": 640,
    "joint_number": 4300,
    "run1_distance": 15274.9,
    "run2_distance": 15294.95,
    "offset": 20.05
  },
  {
    "run1_idx": 797,
    "run2_idx": 642,
    "joint_number": 4310,
    "run1_distance": 15291.49,
    "run2_distance": 15312.24,
    "offset": 20.75
  },
  {
    "run1_idx": 799,
    "run2_idx": 644,
    "joint_number": 4320,
    "run1_distance": 15300.06,
    "run2_distance": 15320.25,
    "offset": 20.19
  },
  {
    "run1_idx": 800,
    "run2_idx": 645,
    "joint_number": 4330,
    "run1_distance": 15320.52,
    "run2_distance": 15341.07,
    "offset": 20.55
  },
  {
    "run1_idx": 802,
    "run2_idx": 647,
    "joint_number": 4340,
    "run1_distance": 15332.91,
    "run2_distance": 15352.78,
    "offset": 19.87
  },
  {
    "run1_idx": 804,
    "run2_idx": 650,
    "joint_number": 4350,
    "run1_distance": 15345.9,
    "run2_distance": 15366.31,
    "offset": 20.41
  },
  {
    "run1_idx": 806,
    "run2_idx": 652,
    "joint_number": 4360,
    "run1_distance": 15354.94,
    "run2_distance": 15375.09,
    "offset": 20.15
  },
  {
    "run1_idx": 808,
    "run2_idx": 655,
    "joint_number": 4370,
    "run1_distance": 15366.89,
    "run2_distance": 15387.56,
    "offset": 20.67
  },
  {
    "run1_idx": 813,
    "run2_idx": 660,
    "joint_number": 4400,
    "run1_distance": 15443.34,
    "run2_distance": 15464.3,
    "offset": 20.96
  },
  {
    "run1_idx": 814,
    "run2_idx": 661,
    "joint_number": 4410,
    "run1_distance": 15483.48,
    "run2_distance": 15504.34,
    "offset": 20.86
  },
  {
    "run1_idx": 815,
    "run2_idx": 663,
    "joint_number": 4420,
    "run1_distance": 15523.62,
    "run2_distance": 15544.4,
    "offset": 20.78
  },
  {
    "run1_idx": 816,
    "run2_idx": 664,
    "joint_number": 4430,
    "run1_distance": 15563.57,
    "run2_distance": 15584.42,
    "offset": 20.85
  },
  {
    "run1_idx": 818,
    "run2_idx": 666,
    "joint_number": 4440,
    "run1_distance": 15603.59,
    "run2_distance": 15624.49,
    "offset": 20.9
  },
  {
    "run1_idx": 819,
    "run2_idx": 667,
    "joint_number": 4450,
    "run1_distance": 15643.63,
    "run2_distance": 15664.67,
    "offset": 21.04
  },
  {
    "run1_idx": 820,
    "run2_idx": 668,
    "joint_number": 4460,
    "run1_distance": 15683.66,
    "run2_distance": 15704.83,
    "offset": 21.17
  },
  {
    "run1_idx": 822,
    "run2_idx": 669,
    "joint_number": 4470,
    "run1_distance": 15723.64,
    "run2_distance": 15744.92,
    "offset": 21.28
  },
  {
    "run1_idx": 823,
    "run2_idx": 670,
    "joint_number": 4480,
    "run1_distance": 15763.51,
    "run2_distance": 15784.93,
    "offset": 21.42
  },
  {
    "run1_idx": 824,
    "run2_idx": 671,
    "joint_number": 4490,
    "run1_distance": 15803.52,
    "run2_distance": 15824.95,
    "offset": 21.43
  },
  {
    "run1_idx": 825,
    "run2_idx": 672,
    "joint_number": 4500,
    "run1_distance": 15838.3,
    "run2_distance": 15859.81,
    "offset": 21.51
  },
  {
    "run1_idx": 826,
    "run2_idx": 674,
    "joint_number": 4510,
    "run1_distance": 15878.27,
    "run2_distance": 15899.73,
    "offset": 21.46
  },
  {
    "run1_idx": 827,
    "run2_idx": 675,
    "joint_number": 4520,
    "run1_distance": 15918.28,
    "run2_distance": 15939.81,
    "offset": 21.53
  },
  {
    "run1_idx": 829,
    "run2_idx": 676,
    "joint_number": 4530,
    "run1_distance": 15958.36,
    "run2_distance": 15979.91,
    "offset": 21.55
  },
  {
    "run1_idx": 830,
    "run2_idx": 677,
    "joint_number": 4540,
    "run1_distance": 15998.39,
    "run2_distance": 16020.03,
    "offset": 21.64
  },
  {
    "run1_idx": 833,
    "run2_idx": 679,
    "joint_number": 4550,
    "run1_distance": 16038.27,
    "run2_distance": 16060,
    "offset": 21.73
  },
  {
    "run1_idx": 834,
    "run2_idx": 680,
    "joint_number": 4560,
    "run1_distance": 16077.27,
    "run2_distance": 16099.07,
    "offset": 21.8
  },
  {
    "run1_idx": 835,
    "run2_idx": 681,
    "joint_number": 4570,
    "run1_distance": 16117.25,
    "run2_distance": 16139.14,
    "offset": 21.89
  },
  {
    "run1_idx": 836,
    "run2_idx": 682,
    "joint_number": 4580,
    "run1_distance": 16157.19,
    "run2_distance": 16179.2,
    "offset": 22.01
  },
  {
    "run1_idx": 837,
    "run2_idx": 683,
    "joint_number": 4590,
    "run1_distance": 16197.17,
    "run2_distance": 16219.25,
    "offset": 22.08
  },
  {
    "run1_idx": 838,
    "run2_idx": 684,
    "joint_number": 4600,
    "run1_distance": 16237.12,
    "run2_distance": 16259.28,
    "offset": 22.16
  },
  {
    "run1_idx": 839,
    "run2_idx": 685,
    "joint_number": 4610,
    "run1_distance": 16277.12,
    "run2_distance": 16299.36,
    "offset": 22.24
  },
  {
    "run1_idx": 840,
    "run2_idx": 686,
    "joint_number": 4620,
    "run1_distance": 16317.11,
    "run2_distance": 16339.42,
    "offset": 22.31
  },
  {
    "run1_idx": 841,
    "run2_idx": 688,
    "joint_number": 4630,
    "run1_distance": 16357.03,
    "run2_distance": 16379.33,
    "offset": 22.3
  },
  {
    "run1_idx": 842,
    "run2_idx": 689,
    "joint_number": 4640,
    "run1_distance": 16397.04,
    "run2_distance": 16419.43,
    "offset": 22.39
  },
  {
    "run1_idx": 844,
    "run2_idx": 691,
    "joint_number": 4650,
    "run1_distance": 16436.94,
    "run2_distance": 16459.45,
    "offset": 22.51
  },
  {
    "run1_idx": 845,
    "run2_idx": 693,
    "joint_number": 4660,
    "run1_distance": 16476.79,
    "run2_distance": 16499.44,
    "offset": 22.65
  },
  {
    "run1_idx": 849,
    "run2_idx": 700,
    "joint_number": 4670,
    "run1_distance": 16516.74,
    "run2_distance": 16539.54,
    "offset": 22.8
  },
  {
    "run1_idx": 850,
    "run2_idx": 701,
    "joint_number": 4680,
    "run1_distance": 16556.75,
    "run2_distance": 16579.65,
    "offset": 22.9
  },
  {
    "run1_idx": 852,
    "run2_idx": 703,
    "joint_number": 4690,
    "run1_distance": 16596.74,
    "run2_distance": 16619.73,
    "offset": 22.99
  },
  {
    "run1_idx": 855,
    "run2_idx": 709,
    "joint_number": 4700,
    "run1_distance": 16636.75,
    "run2_distance": 16659.85,
    "offset": 23.1
  },
  {
    "run1_idx": 856,
    "run2_idx": 715,
    "joint_number": 4710,
    "run1_distance": 16676.68,
    "run2_distance": 16699.96,
    "offset": 23.28
  },
  {
    "run1_idx": 858,
    "run2_idx": 725,
    "joint_number": 4720,
    "run1_distance": 16716.67,
    "run2_distance": 16740.08,
    "offset": 23.41
  },
  {
    "run1_idx": 859,
    "run2_idx": 726,
    "joint_number": 4730,
    "run1_distance": 16756.66,
    "run2_distance": 16780.19,
    "offset": 23.53
  },
  {
    "run1_idx": 861,
    "run2_idx": 729,
    "joint_number": 4740,
    "run1_distance": 16796.65,
    "run2_distance": 16820.29,
    "offset": 23.64
  },
  {
    "run1_idx": 862,
    "run2_idx": 730,
    "joint_number": 4750,
    "run1_distance": 16836.6,
    "run2_distance": 16860.34,
    "offset": 23.74
  },
  {
    "run1_idx": 863,
    "run2_idx": 731,
    "joint_number": 4760,
    "run1_distance": 16876.6,
    "run2_distance": 16900.42,
    "offset": 23.82
  },
  {
    "run1_idx": 864,
    "run2_idx": 732,
    "joint_number": 4770,
    "run1_distance": 16916.54,
    "run2_distance": 16940.39,
    "offset": 23.85
  },
  {
    "run1_idx": 865,
    "run2_idx": 733,
    "joint_number": 4780,
    "run1_distance": 16956.5,
    "run2_distance": 16980.5,
    "offset": 24
  },
  {
    "run1_idx": 866,
    "run2_idx": 734,
    "joint_number": 4790,
    "run1_distance": 16996.43,
    "run2_distance": 17020.62,
    "offset": 24.19
  },
  {
    "run1_idx": 867,
    "run2_idx": 735,
    "joint_number": 4800,
    "run1_distance": 17036.34,
    "run2_distance": 17060.75,
    "offset": 24.41
  },
  {
    "run1_idx": 868,
    "run2_idx": 736,
    "joint_number": 4810,
    "run1_distance": 17076.33,
    "run2_distance": 17100.85,
    "offset": 24.52
  },
  {
    "run1_idx": 869,
    "run2_idx": 737,
    "joint_number": 4820,
    "run1_distance": 17116.51,
    "run2_distance": 17141.12,
    "offset": 24.61
  },
  {
    "run1_idx": 870,
    "run2_idx": 738,
    "joint_number": 4830,
    "run1_distance": 17156.73,
    "run2_distance": 17181.45,
    "offset": 24.72
  },
  {
    "run1_idx": 871,
    "run2_idx": 739,
    "joint_number": 4840,
    "run1_distance": 17168.55,
    "run2_distance": 17193.31,
    "offset": 24.76
  },
  {
    "run1_idx": 872,
    "run2_idx": 740,
    "joint_number": 4850,
    "run1_distance": 17208.55,
    "run2_distance": 17233.54,
    "offset": 24.99
  },
  {
    "run1_idx": 873,
    "run2_idx": 741,
    "joint_number": 4860,
    "run1_distance": 17248.47,
    "run2_distance": 17273.64,
    "offset": 25.17
  },
  {
    "run1_idx": 874,
    "run2_idx": 742,
    "joint_number": 4870,
    "run1_distance": 17288.47,
    "run2_distance": 17313.8,
    "offset": 25.33
  },
  {
    "run1_idx": 875,
    "run2_idx": 743,
    "joint_number": 4880,
    "run1_distance": 17328.45,
    "run2_distance": 17353.93,
    "offset": 25.48
  },
  {
    "run1_idx": 876,
    "run2_idx": 744,
    "joint_number": 4890,
    "run1_distance": 17368.47,
    "run2_distance": 17393.97,
    "offset": 25.5
  },
  {
    "run1_idx": 877,
    "run2_idx": 745,
    "joint_number": 4900,
    "run1_distance": 17408.48,
    "run2_distance": 17434.03,
    "offset": 25.55
  },
  {
    "run1_idx": 878,
    "run2_idx": 748,
    "joint_number": 4910,
    "run1_distance": 17448.47,
    "run2_distance": 17474.05,
    "offset": 25.58
  },
  {
    "run1_idx": 879,
    "run2_idx": 750,
    "joint_number": 4920,
    "run1_distance": 17488.39,
    "run2_distance": 17514.06,
    "offset": 25.67
  },
  {
    "run1_idx": 880,
    "run2_idx": 751,
    "joint_number": 4930,
    "run1_distance": 17528.3,
    "run2_distance": 17554.21,
    "offset": 25.91
  },
  {
    "run1_idx": 882,
    "run2_idx": 753,
    "joint_number": 4940,
    "run1_distance": 17538.17,
    "run2_distance": 17563.57,
    "offset": 25.4
  },
  {
    "run1_idx": 883,
    "run2_idx": 754,
    "joint_number": 4950,
    "run1_distance": 17563.11,
    "run2_distance": 17589.01,
    "offset": 25.9
  },
  {
    "run1_idx": 884,
    "run2_idx": 755,
    "joint_number": 4960,
    "run1_distance": 17594.37,
    "run2_distance": 17620.31,
    "offset": 25.94
  },
  {
    "run1_idx": 885,
    "run2_idx": 756,
    "joint_number": 4970,
    "run1_distance": 17634.32,
    "run2_distance": 17660.43,
    "offset": 26.11
  },
  {
    "run1_idx": 886,
    "run2_idx": 757,
    "joint_number": 4980,
    "run1_distance": 17674.36,
    "run2_distance": 17700.59,
    "offset": 26.23
  },
  {
    "run1_idx": 887,
    "run2_idx": 758,
    "joint_number": 4990,
    "run1_distance": 17714.28,
    "run2_distance": 17740.76,
    "offset": 26.48
  },
  {
    "run1_idx": 888,
    "run2_idx": 759,
    "joint_number": 5000,
    "run1_distance": 17754.25,
    "run2_distance": 17780.81,
    "offset": 26.56
  },
  {
    "run1_idx": 889,
    "run2_idx": 760,
    "joint_number": 5010,
    "run1_distance": 17794.26,
    "run2_distance": 17820.91,
    "offset": 26.65
  },
  {
    "run1_idx": 890,
    "run2_idx": 761,
    "joint_number": 5020,
    "run1_distance": 17834.32,
    "run2_distance": 17861.04,
    "offset": 26.72
  },
  {
    "run1_idx": 891,
    "run2_idx": 762,
    "joint_number": 5030,
    "run1_distance": 17865.98,
    "run2_distance": 17892.86,
    "offset": 26.88
  },
  {
    "run1_idx": 892,
    "run2_idx": 763,
    "joint_number": 5040,
    "run1_distance": 17906.01,
    "run2_distance": 17932.93,
    "offset": 26.92
  },
  {
    "run1_idx": 893,
    "run2_idx": 764,
    "joint_number": 5050,
    "run1_distance": 17945.98,
    "run2_distance": 17973.09,
    "offset": 27.11
  },
  {
    "run1_idx": 894,
    "run2_idx": 765,
    "joint_number": 5060,
    "run1_distance": 17986.04,
    "run2_distance": 18013.2,
    "offset": 27.16
  },
  {
    "run1_idx": 895,
    "run2_idx": 766,
    "joint_number": 5070,
    "run1_distance": 18017.29,
    "run2_distance": 18044.52,
    "offset": 27.23
  },
  {
    "run1_idx": 896,
    "run2_idx": 767,
    "joint_number": 5080,
    "run1_distance": 18057.24,
    "run2_distance": 18084.58,
    "offset": 27.34
  },
  {
    "run1_idx": 897,
    "run2_idx": 768,
    "joint_number": 5090,
    "run1_distance": 18097.15,
    "run2_distance": 18124.56,
    "offset": 27.41
  },
  {
    "run1_idx": 898,
    "run2_idx": 769,
    "joint_number": 5100,
    "run1_distance": 18137.09,
    "run2_distance": 18164.55,
    "offset": 27.46
  },
  {
    "run1_idx": 902,
    "run2_idx": 772,
    "joint_number": 5110,
    "run1_distance": 18176.97,
    "run2_distance": 18204.57,
    "offset": 27.6
  },
  {
    "run1_idx": 903,
    "run2_idx": 773,
    "joint_number": 5120,
    "run1_distance": 18185.18,
    "run2_distance": 18212.77,
    "offset": 27.59
  },
  {
    "run1_idx": 905,
    "run2_idx": 776,
    "joint_number": 5130,
    "run1_distance": 18225.2,
    "run2_distance": 18252.75,
    "offset": 27.55
  },
  {
    "run1_idx": 906,
    "run2_idx": 777,
    "joint_number": 5140,
    "run1_distance": 18265.17,
    "run2_distance": 18292.72,
    "offset": 27.55
  },
  {
    "run1_idx": 907,
    "run2_idx": 778,
    "joint_number": 5150,
    "run1_distance": 18305.11,
    "run2_distance": 18332.63,
    "offset": 27.52
  },
  {
    "run1_idx": 908,
    "run2_idx": 779,
    "joint_number": 5160,
    "run1_distance": 18344.97,
    "run2_distance": 18372.49,
    "offset": 27.52
  },
  {
    "run1_idx": 909,
    "run2_idx": 780,
    "joint_number": 5170,
    "run1_distance": 18385.01,
    "run2_distance": 18412.49,
    "offset": 27.48
  },
  {
    "run1_idx": 910,
    "run2_idx": 781,
    "joint_number": 5180,
    "run1_distance": 18425.12,
    "run2_distance": 18452.49,
    "offset": 27.37
  },
  {
    "run1_idx": 911,
    "run2_idx": 783,
    "joint_number": 5190,
    "run1_distance": 18465.18,
    "run2_distance": 18492.4,
    "offset": 27.22
  },
  {
    "run1_idx": 912,
    "run2_idx": 784,
    "joint_number": 5200,
    "run1_distance": 18499.75,
    "run2_distance": 18526.94,
    "offset": 27.19
  },
  {
    "run1_idx": 913,
    "run2_idx": 785,
    "joint_number": 5210,
    "run1_distance": 18539.81,
    "run2_distance": 18566.97,
    "offset": 27.16
  },
  {
    "run1_idx": 914,
    "run2_idx": 786,
    "joint_number": 5220,
    "run1_distance": 18579.7,
    "run2_distance": 18606.87,
    "offset": 27.17
  },
  {
    "run1_idx": 915,
    "run2_idx": 787,
    "joint_number": 5230,
    "run1_distance": 18619.65,
    "run2_distance": 18646.76,
    "offset": 27.11
  },
  {
    "run1_idx": 916,
    "run2_idx": 788,
    "joint_number": 5240,
    "run1_distance": 18659.65,
    "run2_distance": 18686.76,
    "offset": 27.11
  },
  {
    "run1_idx": 917,
    "run2_idx": 789,
    "joint_number": 5250,
    "run1_distance": 18699.62,
    "run2_distance": 18726.75,
    "offset": 27.13
  },
  {
    "run1_idx": 918,
    "run2_idx": 790,
    "joint_number": 5260,
    "run1_distance": 18739.64,
    "run2_distance": 18766.8,
    "offset": 27.16
  },
  {
    "run1_idx": 919,
    "run2_idx": 791,
    "joint_number": 5270,
    "run1_distance": 18779.65,
    "run2_distance": 18806.83,
    "offset": 27.18
  },
  {
    "run1_idx": 921,
    "run2_idx": 797,
    "joint_number": 5280,
    "run1_distance": 18814.76,
    "run2_distance": 18842.14,
    "offset": 27.38
  },
  {
    "run1_idx": 923,
    "run2_idx": 799,
    "joint_number": 5290,
    "run1_distance": 18826.74,
    "run2_distance": 18853.96,
    "offset": 27.22
  },
  {
    "run1_idx": 924,
    "run2_idx": 801,
    "joint_number": 5300,
    "run1_distance": 18866.81,
    "run2_distance": 18894.32,
    "offset": 27.51
  },
  {
    "run1_idx": 925,
    "run2_idx": 802,
    "joint_number": 5310,
    "run1_distance": 18906.55,
    "run2_distance": 18934.5,
    "offset": 27.95
  },
  {
    "run1_idx": 927,
    "run2_idx": 804,
    "joint_number": 5320,
    "run1_distance": 18946.6,
    "run2_distance": 18974.64,
    "offset": 28.04
  },
  {
    "run1_idx": 928,
    "run2_idx": 805,
    "joint_number": 5330,
    "run1_distance": 18976.77,
    "run2_distance": 19004.9,
    "offset": 28.13
  },
  {
    "run1_idx": 929,
    "run2_idx": 806,
    "joint_number": 5340,
    "run1_distance": 19016.74,
    "run2_distance": 19044.85,
    "offset": 28.11
  },
  {
    "run1_idx": 930,
    "run2_idx": 807,
    "joint_number": 5350,
    "run1_distance": 19056.8,
    "run2_distance": 19084.88,
    "offset": 28.08
  },
  {
    "run1_idx": 931,
    "run2_idx": 808,
    "joint_number": 5360,
    "run1_distance": 19096.84,
    "run2_distance": 19124.93,
    "offset": 28.09
  },
  {
    "run1_idx": 932,
    "run2_idx": 809,
    "joint_number": 5370,
    "run1_distance": 19136.92,
    "run2_distance": 19165,
    "offset": 28.08
  },
  {
    "run1_idx": 933,
    "run2_idx": 810,
    "joint_number": 5380,
    "run1_distance": 19176.92,
    "run2_distance": 19205,
    "offset": 28.08
  },
  {
    "run1_idx": 934,
    "run2_idx": 811,
    "joint_number": 5390,
    "run1_distance": 19216.29,
    "run2_distance": 19244.41,
    "offset": 28.12
  },
  {
    "run1_idx": 935,
    "run2_idx": 812,
    "joint_number": 5400,
    "run1_distance": 19256.28,
    "run2_distance": 19284.44,
    "offset": 28.16
  },
  {
    "run1_idx": 937,
    "run2_idx": 815,
    "joint_number": 5410,
    "run1_distance": 19296.27,
    "run2_distance": 19324.37,
    "offset": 28.1
  },
  {
    "run1_idx": 938,
    "run2_idx": 816,
    "joint_number": 5420,
    "run1_distance": 19336.24,
    "run2_distance": 19364.31,
    "offset": 28.07
  },
  {
    "run1_idx": 939,
    "run2_idx": 817,
    "joint_number": 5430,
    "run1_distance": 19376.22,
    "run2_distance": 19404.28,
    "offset": 28.06
  },
  {
    "run1_idx": 940,
    "run2_idx": 818,
    "joint_number": 5440,
    "run1_distance": 19416.24,
    "run2_distance": 19444.27,
    "offset": 28.03
  },
  {
    "run1_idx": 941,
    "run2_idx": 819,
    "joint_number": 5450,
    "run1_distance": 19456.24,
    "run2_distance": 19484.27,
    "offset": 28.03
  },
  {
    "run1_idx": 942,
    "run2_idx": 820,
    "joint_number": 5460,
    "run1_distance": 19496.24,
    "run2_distance": 19524.29,
    "offset": 28.05
  },
  {
    "run1_idx": 943,
    "run2_idx": 821,
    "joint_number": 5470,
    "run1_distance": 19536.21,
    "run2_distance": 19564.2,
    "offset": 27.99
  },
  {
    "run1_idx": 944,
    "run2_idx": 822,
    "joint_number": 5480,
    "run1_distance": 19576.22,
    "run2_distance": 19604.24,
    "offset": 28.02
  },
  {
    "run1_idx": 945,
    "run2_idx": 823,
    "joint_number": 5490,
    "run1_distance": 19616.26,
    "run2_distance": 19644.28,
    "offset": 28.02
  },
  {
    "run1_idx": 946,
    "run2_idx": 824,
    "joint_number": 5500,
    "run1_distance": 19656.25,
    "run2_distance": 19684.27,
    "offset": 28.02
  },
  {
    "run1_idx": 947,
    "run2_idx": 825,
    "joint_number": 5510,
    "run1_distance": 19696.24,
    "run2_distance": 19724.27,
    "offset": 28.03
  },
  {
    "run1_idx": 948,
    "run2_idx": 826,
    "joint_number": 5520,
    "run1_distance": 19736.25,
    "run2_distance": 19764.25,
    "offset": 28
  },
  {
    "run1_idx": 949,
    "run2_idx": 827,
    "joint_number": 5530,
    "run1_distance": 19776.25,
    "run2_distance": 19804.16,
    "offset": 27.91
  },
  {
    "run1_idx": 950,
    "run2_idx": 828,
    "joint_number": 5540,
    "run1_distance": 19816.29,
    "run2_distance": 19844.19,
    "offset": 27.9
  },
  {
    "run1_idx": 951,
    "run2_idx": 829,
    "joint_number": 5550,
    "run1_distance": 19856.34,
    "run2_distance": 19884.17,
    "offset": 27.83
  },
  {
    "run1_idx": 952,
    "run2_idx": 830,
    "joint_number": 5560,
    "run1_distance": 19896.39,
    "run2_distance": 19924.23,
    "offset": 27.84
  },
  {
    "run1_idx": 954,
    "run2_idx": 831,
    "joint_number": 5570,
    "run1_distance": 19936.33,
    "run2_distance": 19964.16,
    "offset": 27.83
  },
  {
    "run1_idx": 955,
    "run2_idx": 832,
    "joint_number": 5580,
    "run1_distance": 19976.3,
    "run2_distance": 20004.05,
    "offset": 27.75
  },
  {
    "run1_idx": 956,
    "run2_idx": 833,
    "joint_number": 5590,
    "run1_distance": 20016.26,
    "run2_distance": 20044.08,
    "offset": 27.82
  },
  {
    "run1_idx": 958,
    "run2_idx": 834,
    "joint_number": 5600,
    "run1_distance": 20056.21,
    "run2_distance": 20084.08,
    "offset": 27.87
  },
  {
    "run1_idx": 959,
    "run2_idx": 835,
    "joint_number": 5610,
    "run1_distance": 20096.22,
    "run2_distance": 20124.14,
    "offset": 27.92
  },
  {
    "run1_idx": 960,
    "run2_idx": 836,
    "joint_number": 5620,
    "run1_distance": 20136.18,
    "run2_distance": 20164.33,
    "offset": 28.15
  },
  {
    "run1_idx": 961,
    "run2_idx": 838,
    "joint_number": 5630,
    "run1_distance": 20176.2,
    "run2_distance": 20204.48,
    "offset": 28.28
  },
  {
    "run1_idx": 962,
    "run2_idx": 839,
    "joint_number": 5640,
    "run1_distance": 20216.19,
    "run2_distance": 20244.53,
    "offset": 28.34
  },
  {
    "run1_idx": 963,
    "run2_idx": 840,
    "joint_number": 5650,
    "run1_distance": 20256.17,
    "run2_distance": 20284.47,
    "offset": 28.3
  },
  {
    "run1_idx": 964,
    "run2_idx": 841,
    "joint_number": 5660,
    "run1_distance": 20296.17,
    "run2_distance": 20324.54,
    "offset": 28.37
  },
  {
    "run1_idx": 967,
    "run2_idx": 844,
    "joint_number": 5670,
    "run1_distance": 20336.18,
    "run2_distance": 20364.66,
    "offset": 28.48
  },
  {
    "run1_idx": 968,
    "run2_idx": 845,
    "joint_number": 5680,
    "run1_distance": 20376.2,
    "run2_distance": 20404.89,
    "offset": 28.69
  },
  {
    "run1_idx": 970,
    "run2_idx": 847,
    "joint_number": 5690,
    "run1_distance": 20414.83,
    "run2_distance": 20443.59,
    "offset": 28.76
  },
  {
    "run1_idx": 971,
    "run2_idx": 848,
    "joint_number": 5700,
    "run1_distance": 20454.83,
    "run2_distance": 20483.66,
    "offset": 28.83
  },
  {
    "run1_idx": 972,
    "run2_idx": 849,
    "joint_number": 5710,
    "run1_distance": 20494.81,
    "run2_distance": 20523.69,
    "offset": 28.88
  },
  {
    "run1_idx": 973,
    "run2_idx": 850,
    "joint_number": 5720,
    "run1_distance": 20534.85,
    "run2_distance": 20563.77,
    "offset": 28.92
  },
  {
    "run1_idx": 974,
    "run2_idx": 851,
    "joint_number": 5730,
    "run1_distance": 20574.89,
    "run2_distance": 20603.86,
    "offset": 28.97
  },
  {
    "run1_idx": 975,
    "run2_idx": 852,
    "joint_number": 5740,
    "run1_distance": 20614.9,
    "run2_distance": 20643.92,
    "offset": 29.02
  },
  {
    "run1_idx": 976,
    "run2_idx": 853,
    "joint_number": 5750,
    "run1_distance": 20654.94,
    "run2_distance": 20683.91,
    "offset": 28.97
  },
  {
    "run1_idx": 977,
    "run2_idx": 854,
    "joint_number": 5760,
    "run1_distance": 20694.99,
    "run2_distance": 20723.99,
    "offset": 29
  },
  {
    "run1_idx": 978,
    "run2_idx": 855,
    "joint_number": 5770,
    "run1_distance": 20735.06,
    "run2_distance": 20764.11,
    "offset": 29.05
  },
  {
    "run1_idx": 979,
    "run2_idx": 856,
    "joint_number": 5780,
    "run1_distance": 20775.1,
    "run2_distance": 20804.2,
    "offset": 29.1
  },
  {
    "run1_idx": 980,
    "run2_idx": 857,
    "joint_number": 5790,
    "run1_distance": 20815.25,
    "run2_distance": 20844.46,
    "offset": 29.21
  },
  {
    "run1_idx": 981,
    "run2_idx": 858,
    "joint_number": 5800,
    "run1_distance": 20826.95,
    "run2_distance": 20856.18,
    "offset": 29.23
  },
  {
    "run1_idx": 982,
    "run2_idx": 859,
    "joint_number": 5810,
    "run1_distance": 20867.05,
    "run2_distance": 20896.27,
    "offset": 29.22
  },
  {
    "run1_idx": 983,
    "run2_idx": 860,
    "joint_number": 5820,
    "run1_distance": 20907.06,
    "run2_distance": 20936.25,
    "offset": 29.19
  },
  {
    "run1_idx": 984,
    "run2_idx": 861,
    "joint_number": 5830,
    "run1_distance": 20940.5,
    "run2_distance": 20969.67,
    "offset": 29.17
  },
  {
    "run1_idx": 985,
    "run2_idx": 862,
    "joint_number": 5840,
    "run1_distance": 20980.59,
    "run2_distance": 21009.74,
    "offset": 29.15
  },
  {
    "run1_idx": 987,
    "run2_idx": 864,
    "joint_number": 5850,
    "run1_distance": 21020.73,
    "run2_distance": 21049.76,
    "offset": 29.03
  },
  {
    "run1_idx": 988,
    "run2_idx": 865,
    "joint_number": 5860,
    "run1_distance": 21041.66,
    "run2_distance": 21070.74,
    "offset": 29.08
  },
  {
    "run1_idx": 989,
    "run2_idx": 866,
    "joint_number": 5870,
    "run1_distance": 21081.9,
    "run2_distance": 21110.85,
    "offset": 28.95
  },
  {
    "run1_idx": 990,
    "run2_idx": 869,
    "joint_number": 5880,
    "run1_distance": 21121.85,
    "run2_distance": 21150.86,
    "offset": 29.01
  },
  {
    "run1_idx": 991,
    "run2_idx": 870,
    "joint_number": 5890,
    "run1_distance": 21161.9,
    "run2_distance": 21190.97,
    "offset": 29.07
  },
  {
    "run1_idx": 992,
    "run2_idx": 871,
    "joint_number": 5900,
    "run1_distance": 21201.92,
    "run2_distance": 21231.05,
    "offset": 29.13
  },
  {
    "run1_idx": 994,
    "run2_idx": 873,
    "joint_number": 5910,
    "run1_distance": 21241.88,
    "run2_distance": 21271.06,
    "offset": 29.18
  },
  {
    "run1_idx": 995,
    "run2_idx": 877,
    "joint_number": 5920,
    "run1_distance": 21281.87,
    "run2_distance": 21311.11,
    "offset": 29.24
  },
  {
    "run1_idx": 1002,
    "run2_idx": 893,
    "joint_number": 5930,
    "run1_distance": 21321.81,
    "run2_distance": 21351.11,
    "offset": 29.3
  },
  {
    "run1_idx": 1007,
    "run2_idx": 924,
    "joint_number": 5940,
    "run1_distance": 21361.81,
    "run2_distance": 21391.18,
    "offset": 29.37
  },
  {
    "run1_idx": 1013,
    "run2_idx": 931,
    "joint_number": 5950,
    "run1_distance": 21401.83,
    "run2_distance": 21431.27,
    "offset": 29.44
  },
  {
    "run1_idx": 1015,
    "run2_idx": 942,
    "joint_number": 5960,
    "run1_distance": 21441.85,
    "run2_distance": 21471.34,
    "offset": 29.49
  },
  {
    "run1_idx": 1016,
    "run2_idx": 943,
    "joint_number": 5970,
    "run1_distance": 21481.83,
    "run2_distance": 21511.39,
    "offset": 29.56
  },
  {
    "run1_idx": 1017,
    "run2_idx": 944,
    "joint_number": 5980,
    "run1_distance": 21521.84,
    "run2_distance": 21551.47,
    "offset": 29.63
  },
  {
    "run1_idx": 1018,
    "run2_idx": 946,
    "joint_number": 5990,
    "run1_distance": 21561.79,
    "run2_distance": 21591.49,
    "offset": 29.7
  },
  {
    "run1_idx": 1019,
    "run2_idx": 947,
    "joint_number": 6000,
    "run1_distance": 21601.74,
    "run2_distance": 21631.54,
    "offset": 29.8
  },
  {
    "run1_idx": 1020,
    "run2_idx": 948,
    "joint_number": 6010,
    "run1_distance": 21641.77,
    "run2_distance": 21671.62,
    "offset": 29.85
  },
  {
    "run1_idx": 1023,
    "run2_idx": 950,
    "joint_number": 6020,
    "run1_distance": 21681.65,
    "run2_distance": 21711.5,
    "offset": 29.85
  },
  {
    "run1_idx": 1024,
    "run2_idx": 951,
    "joint_number": 6030,
    "run1_distance": 21714.46,
    "run2_distance": 21744.38,
    "offset": 29.92
  },
  {
    "run1_idx": 1025,
    "run2_idx": 952,
    "joint_number": 6040,
    "run1_distance": 21724.19,
    "run2_distance": 21754.09,
    "offset": 29.9
  },
  {
    "run1_idx": 1026,
    "run2_idx": 953,
    "joint_number": 6050,
    "run1_distance": 21764.17,
    "run2_distance": 21794.15,
    "offset": 29.98
  },
  {
    "run1_idx": 1027,
    "run2_idx": 954,
    "joint_number": 6060,
    "run1_distance": 21804.3,
    "run2_distance": 21834.3,
    "offset": 30
  },
  {
    "run1_idx": 1029,
    "run2_idx": 958,
    "joint_number": 6070,
    "run1_distance": 21844.46,
    "run2_distance": 21874.41,
    "offset": 29.95
  },
  {
    "run1_idx": 1032,
    "run2_idx": 962,
    "joint_number": 6080,
    "run1_distance": 21884.47,
    "run2_distance": 21914.5,
    "offset": 30.03
  },
  {
    "run1_idx": 1033,
    "run2_idx": 963,
    "joint_number": 6090,
    "run1_distance": 21924.4,
    "run2_distance": 21954.53,
    "offset": 30.13
  },
  {
    "run1_idx": 1034,
    "run2_idx": 965,
    "joint_number": 6100,
    "run1_distance": 21964.43,
    "run2_distance": 21994.61,
    "offset": 30.18
  },
  {
    "run1_idx": 1035,
    "run2_idx": 970,
    "joint_number": 6110,
    "run1_distance": 22004.41,
    "run2_distance": 22034.68,
    "offset": 30.27
  },
  {
    "run1_idx": 1036,
    "run2_idx": 973,
    "joint_number": 6120,
    "run1_distance": 22044.44,
    "run2_distance": 22074.76,
    "offset": 30.32
  },
  {
    "run1_idx": 1039,
    "run2_idx": 980,
    "joint_number": 6130,
    "run1_distance": 22084.44,
    "run2_distance": 22114.84,
    "offset": 30.4
  },
  {
    "run1_idx": 1040,
    "run2_idx": 981,
    "joint_number": 6140,
    "run1_distance": 22124.41,
    "run2_distance": 22154.86,
    "offset": 30.45
  },
  {
    "run1_idx": 1041,
    "run2_idx": 982,
    "joint_number": 6150,
    "run1_distance": 22164.49,
    "run2_distance": 22194.99,
    "offset": 30.5
  },
  {
    "run1_idx": 1042,
    "run2_idx": 983,
    "joint_number": 6160,
    "run1_distance": 22204.4,
    "run2_distance": 22234.95,
    "offset": 30.55
  },
  {
    "run1_idx": 1043,
    "run2_idx": 984,
    "joint_number": 6170,
    "run1_distance": 22244.37,
    "run2_distance": 22274.98,
    "offset": 30.61
  },
  {
    "run1_idx": 1044,
    "run2_idx": 985,
    "joint_number": 6180,
    "run1_distance": 22284.33,
    "run2_distance": 22315,
    "offset": 30.67
  },
  {
    "run1_idx": 1045,
    "run2_idx": 988,
    "joint_number": 6190,
    "run1_distance": 22324.29,
    "run2_distance": 22355.06,
    "offset": 30.77
  },
  {
    "run1_idx": 1046,
    "run2_idx": 989,
    "joint_number": 6200,
    "run1_distance": 22364.31,
    "run2_distance": 22395.11,
    "offset": 30.8
  },
  {
    "run1_idx": 1047,
    "run2_idx": 990,
    "joint_number": 6210,
    "run1_distance": 22404.31,
    "run2_distance": 22435.16,
    "offset": 30.85
  },
  {
    "run1_idx": 1048,
    "run2_idx": 991,
    "joint_number": 6220,
    "run1_distance": 22444.29,
    "run2_distance": 22475.21,
    "offset": 30.92
  },
  {
    "run1_idx": 1050,
    "run2_idx": 992,
    "joint_number": 6230,
    "run1_distance": 22484.3,
    "run2_distance": 22515.16,
    "offset": 30.86
  },
  {
    "run1_idx": 1052,
    "run2_idx": 993,
    "joint_number": 6240,
    "run1_distance": 22524.14,
    "run2_distance": 22555.07,
    "offset": 30.93
  },
  {
    "run1_idx": 1053,
    "run2_idx": 994,
    "joint_number": 6250,
    "run1_distance": 22564.11,
    "run2_distance": 22595.05,
    "offset": 30.94
  },
  {
    "run1_idx": 1054,
    "run2_idx": 995,
    "joint_number": 6260,
    "run1_distance": 22581.09,
    "run2_distance": 22612.04,
    "offset": 30.95
  },
  {
    "run1_idx": 1055,
    "run2_idx": 996,
    "joint_number": 6270,
    "run1_distance": 22621.13,
    "run2_distance": 22652.08,
    "offset": 30.95
  },
  {
    "run1_idx": 1057,
    "run2_idx": 999,
    "joint_number": 6280,
    "run1_distance": 22661.2,
    "run2_distance": 22692.08,
    "offset": 30.88
  },
  {
    "run1_idx": 1058,
    "run2_idx": 1000,
    "joint_number": 6290,
    "run1_distance": 22701.2,
    "run2_distance": 22732.07,
    "offset": 30.87
  },
  {
    "run1_idx": 1059,
    "run2_idx": 1001,
    "joint_number": 6300,
    "run1_distance": 22741.13,
    "run2_distance": 22772.01,
    "offset": 30.88
  },
  {
    "run1_idx": 1060,
    "run2_idx": 1002,
    "joint_number": 6310,
    "run1_distance": 22781.06,
    "run2_distance": 22811.93,
    "offset": 30.87
  },
  {
    "run1_idx": 1062,
    "run2_idx": 1004,
    "joint_number": 6320,
    "run1_distance": 22821.08,
    "run2_distance": 22851.97,
    "offset": 30.89
  },
  {
    "run1_idx": 1063,
    "run2_idx": 1005,
    "joint_number": 6330,
    "run1_distance": 22861.04,
    "run2_distance": 22891.98,
    "offset": 30.94
  },
  {
    "run1_idx": 1064,
    "run2_idx": 1006,
    "joint_number": 6340,
    "run1_distance": 22901.01,
    "run2_distance": 22932.08,
    "offset": 31.07
  },
  {
    "run1_idx": 1065,
    "run2_idx": 1007,
    "joint_number": 6350,
    "run1_distance": 22940.89,
    "run2_distance": 22972.1,
    "offset": 31.21
  },
  {
    "run1_idx": 1067,
    "run2_idx": 1014,
    "joint_number": 6360,
    "run1_distance": 22980.98,
    "run2_distance": 23012.16,
    "offset": 31.18
  },
  {
    "run1_idx": 1068,
    "run2_idx": 1041,
    "joint_number": 6370,
    "run1_distance": 23021.18,
    "run2_distance": 23052.31,
    "offset": 31.13
  },
  {
    "run1_idx": 1072,
    "run2_idx": 1046,
    "joint_number": 6380,
    "run1_distance": 23061.26,
    "run2_distance": 23092.29,
    "offset": 31.03
  },
  {
    "run1_idx": 1073,
    "run2_idx": 1047,
    "joint_number": 6390,
    "run1_distance": 23101.33,
    "run2_distance": 23132.4,
    "offset": 31.07
  },
  {
    "run1_idx": 1074,
    "run2_idx": 1048,
    "joint_number": 6400,
    "run1_distance": 23141.28,
    "run2_distance": 23172.39,
    "offset": 31.11
  },
  {
    "run1_idx": 1077,
    "run2_idx": 1050,
    "joint_number": 6410,
    "run1_distance": 23181.26,
    "run2_distance": 23212.4,
    "offset": 31.14
  },
  {
    "run1_idx": 1078,
    "run2_idx": 1051,
    "joint_number": 6420,
    "run1_distance": 23208.74,
    "run2_distance": 23239.89,
    "offset": 31.15
  },
  {
    "run1_idx": 1079,
    "run2_idx": 1052,
    "joint_number": 6430,
    "run1_distance": 23248.63,
    "run2_distance": 23279.88,
    "offset": 31.25
  },
  {
    "run1_idx": 1080,
    "run2_idx": 1053,
    "joint_number": 6440,
    "run1_distance": 23288.52,
    "run2_distance": 23319.79,
    "offset": 31.27
  },
  {
    "run1_idx": 1081,
    "run2_idx": 1054,
    "joint_number": 6450,
    "run1_distance": 23328.55,
    "run2_distance": 23359.8,
    "offset": 31.25
  },
  {
    "run1_idx": 1082,
    "run2_idx": 1055,
    "joint_number": 6460,
    "run1_distance": 23368.55,
    "run2_distance": 23399.85,
    "offset": 31.3
  },
  {
    "run1_idx": 1083,
    "run2_idx": 1056,
    "joint_number": 6470,
    "run1_distance": 23408.38,
    "run2_distance": 23439.7,
    "offset": 31.32
  },
  {
    "run1_idx": 1084,
    "run2_idx": 1057,
    "joint_number": 6480,
    "run1_distance": 23448.24,
    "run2_distance": 23479.57,
    "offset": 31.33
  },
  {
    "run1_idx": 1085,
    "run2_idx": 1058,
    "joint_number": 6490,
    "run1_distance": 23488.04,
    "run2_distance": 23519.41,
    "offset": 31.37
  },
  {
    "run1_idx": 1086,
    "run2_idx": 1059,
    "joint_number": 6500,
    "run1_distance": 23527.97,
    "run2_distance": 23559.4,
    "offset": 31.43
  },
  {
    "run1_idx": 1087,
    "run2_idx": 1060,
    "joint_number": 6510,
    "run1_distance": 23567.92,
    "run2_distance": 23599.36,
    "offset": 31.44
  },
  {
    "run1_idx": 1088,
    "run2_idx": 1061,
    "joint_number": 6520,
    "run1_distance": 23607.66,
    "run2_distance": 23639.09,
    "offset": 31.43
  },
  {
    "run1_idx": 1092,
    "run2_idx": 1070,
    "joint_number": 6530,
    "run1_distance": 23647.6,
    "run2_distance": 23679.06,
    "offset": 31.46
  },
  {
    "run1_idx": 1096,
    "run2_idx": 1079,
    "joint_number": 6540,
    "run1_distance": 23675.24,
    "run2_distance": 23706.72,
    "offset": 31.48
  },
  {
    "run1_idx": 1098,
    "run2_idx": 1082,
    "joint_number": 6550,
    "run1_distance": 23715.17,
    "run2_distance": 23746.71,
    "offset": 31.54
  },
  {
    "run1_idx": 1100,
    "run2_idx": 1084,
    "joint_number": 6560,
    "run1_distance": 23755.11,
    "run2_distance": 23786.7,
    "offset": 31.59
  },
  {
    "run1_idx": 1101,
    "run2_idx": 1085,
    "joint_number": 6570,
    "run1_distance": 23795.1,
    "run2_distance": 23826.75,
    "offset": 31.65
  },
  {
    "run1_idx": 1102,
    "run2_idx": 1086,
    "joint_number": 6580,
    "run1_distance": 23835.06,
    "run2_distance": 23866.72,
    "offset": 31.66
  },
  {
    "run1_idx": 1103,
    "run2_idx": 1088,
    "joint_number": 6590,
    "run1_distance": 23874.99,
    "run2_distance": 23906.73,
    "offset": 31.74
  },
  {
    "run1_idx": 1104,
    "run2_idx": 1090,
    "joint_number": 6600,
    "run1_distance": 23914.94,
    "run2_distance": 23946.77,
    "offset": 31.83
  },
  {
    "run1_idx": 1105,
    "run2_idx": 1093,
    "joint_number": 6610,
    "run1_distance": 23954.87,
    "run2_distance": 23986.81,
    "offset": 31.94
  },
  {
    "run1_idx": 1106,
    "run2_idx": 1094,
    "joint_number": 6620,
    "run1_distance": 23994.87,
    "run2_distance": 24026.84,
    "offset": 31.97
  },
  {
    "run1_idx": 1107,
    "run2_idx": 1095,
    "joint_number": 6630,
    "run1_distance": 24034.85,
    "run2_distance": 24066.88,
    "offset": 32.03
  },
  {
    "run1_idx": 1108,
    "run2_idx": 1096,
    "joint_number": 6640,
    "run1_distance": 24074.78,
    "run2_distance": 24106.91,
    "offset": 32.13
  },
  {
    "run1_idx": 1109,
    "run2_idx": 1097,
    "joint_number": 6650,
    "run1_distance": 24111.18,
    "run2_distance": 24143.42,
    "offset": 32.24
  },
  {
    "run1_idx": 1110,
    "run2_idx": 1098,
    "joint_number": 6660,
    "run1_distance": 24151.09,
    "run2_distance": 24183.46,
    "offset": 32.37
  },
  {
    "run1_idx": 1111,
    "run2_idx": 1099,
    "joint_number": 6670,
    "run1_distance": 24191.04,
    "run2_distance": 24223.56,
    "offset": 32.52
  },
  {
    "run1_idx": 1112,
    "run2_idx": 1100,
    "joint_number": 6680,
    "run1_distance": 24230.92,
    "run2_distance": 24263.6,
    "offset": 32.68
  },
  {
    "run1_idx": 1113,
    "run2_idx": 1101,
    "joint_number": 6690,
    "run1_distance": 24270.89,
    "run2_distance": 24303.7,
    "offset": 32.81
  },
  {
    "run1_idx": 1114,
    "run2_idx": 1102,
    "joint_number": 6700,
    "run1_distance": 24310.81,
    "run2_distance": 24343.73,
    "offset": 32.92
  },
  {
    "run1_idx": 1115,
    "run2_idx": 1103,
    "joint_number": 6710,
    "run1_distance": 24350.73,
    "run2_distance": 24383.79,
    "offset": 33.06
  },
  {
    "run1_idx": 1116,
    "run2_idx": 1104,
    "joint_number": 6720,
    "run1_distance": 24390.66,
    "run2_distance": 24423.79,
    "offset": 33.13
  },
  {
    "run1_idx": 1117,
    "run2_idx": 1105,
    "joint_number": 6730,
    "run1_distance": 24430.78,
    "run2_distance": 24463.97,
    "offset": 33.19
  },
  {
    "run1_idx": 1118,
    "run2_idx": 1106,
    "joint_number": 6740,
    "run1_distance": 24470.73,
    "run2_distance": 24504.11,
    "offset": 33.38
  },
  {
    "run1_idx": 1119,
    "run2_idx": 1107,
    "joint_number": 6750,
    "run1_distance": 24510.63,
    "run2_distance": 24544.21,
    "offset": 33.58
  },
  {
    "run1_idx": 1120,
    "run2_idx": 1108,
    "joint_number": 6760,
    "run1_distance": 24550.57,
    "run2_distance": 24584.28,
    "offset": 33.71
  },
  {
    "run1_idx": 1121,
    "run2_idx": 1109,
    "joint_number": 6770,
    "run1_distance": 24578.58,
    "run2_distance": 24612.39,
    "offset": 33.81
  },
  {
    "run1_idx": 1122,
    "run2_idx": 1110,
    "joint_number": 6780,
    "run1_distance": 24618.61,
    "run2_distance": 24652.48,
    "offset": 33.87
  },
  {
    "run1_idx": 1123,
    "run2_idx": 1111,
    "joint_number": 6790,
    "run1_distance": 24658.46,
    "run2_distance": 24692.46,
    "offset": 34
  },
  {
    "run1_idx": 1125,
    "run2_idx": 1113,
    "joint_number": 6800,
    "run1_distance": 24698.25,
    "run2_distance": 24732.51,
    "offset": 34.26
  },
  {
    "run1_idx": 1126,
    "run2_idx": 1114,
    "joint_number": 6810,
    "run1_distance": 24738.2,
    "run2_distance": 24772.63,
    "offset": 34.43
  },
  {
    "run1_idx": 1127,
    "run2_idx": 1115,
    "joint_number": 6820,
    "run1_distance": 24778.37,
    "run2_distance": 24812.63,
    "offset": 34.26
  },
  {
    "run1_idx": 1128,
    "run2_idx": 1116,
    "joint_number": 6830,
    "run1_distance": 24818.35,
    "run2_distance": 24852.74,
    "offset": 34.39
  },
  {
    "run1_idx": 1129,
    "run2_idx": 1117,
    "joint_number": 6840,
    "run1_distance": 24858.08,
    "run2_distance": 24892.75,
    "offset": 34.67
  },
  {
    "run1_idx": 1130,
    "run2_idx": 1118,
    "joint_number": 6850,
    "run1_distance": 24898.02,
    "run2_distance": 24932.96,
    "offset": 34.94
  },
  {
    "run1_idx": 1131,
    "run2_idx": 1119,
    "joint_number": 6860,
    "run1_distance": 24937.92,
    "run2_distance": 24973.03,
    "offset": 35.11
  },
  {
    "run1_idx": 1132,
    "run2_idx": 1120,
    "joint_number": 6870,
    "run1_distance": 24977.75,
    "run2_distance": 25012.89,
    "offset": 35.14
  },
  {
    "run1_idx": 1133,
    "run2_idx": 1121,
    "joint_number": 6880,
    "run1_distance": 25017.72,
    "run2_distance": 25052.82,
    "offset": 35.1
  },
  {
    "run1_idx": 1134,
    "run2_idx": 1122,
    "joint_number": 6890,
    "run1_distance": 25050.48,
    "run2_distance": 25085.55,
    "offset": 35.07
  },
  {
    "run1_idx": 1135,
    "run2_idx": 1123,
    "joint_number": 6900,
    "run1_distance": 25090.57,
    "run2_distance": 25125.46,
    "offset": 34.89
  },
  {
    "run1_idx": 1136,
    "run2_idx": 1124,
    "joint_number": 6910,
    "run1_distance": 25130.73,
    "run2_distance": 25165.46,
    "offset": 34.73
  },
  {
    "run1_idx": 1137,
    "run2_idx": 1125,
    "joint_number": 6920,
    "run1_distance": 25170.81,
    "run2_distance": 25205.48,
    "offset": 34.67
  },
  {
    "run1_idx": 1138,
    "run2_idx": 1126,
    "joint_number": 6930,
    "run1_distance": 25210.76,
    "run2_distance": 25245.51,
    "offset": 34.75
  },
  {
    "run1_idx": 1140,
    "run2_idx": 1127,
    "joint_number": 6940,
    "run1_distance": 25250.69,
    "run2_distance": 25285.57,
    "offset": 34.88
  },
  {
    "run1_idx": 1141,
    "run2_idx": 1128,
    "joint_number": 6950,
    "run1_distance": 25290.57,
    "run2_distance": 25325.67,
    "offset": 35.1
  },
  {
    "run1_idx": 1142,
    "run2_idx": 1129,
    "joint_number": 6960,
    "run1_distance": 25330.46,
    "run2_distance": 25365.71,
    "offset": 35.25
  },
  {
    "run1_idx": 1143,
    "run2_idx": 1130,
    "joint_number": 6970,
    "run1_distance": 25370.46,
    "run2_distance": 25405.72,
    "offset": 35.26
  },
  {
    "run1_idx": 1144,
    "run2_idx": 1131,
    "joint_number": 6980,
    "run1_distance": 25410.34,
    "run2_distance": 25445.68,
    "offset": 35.34
  },
  {
    "run1_idx": 1145,
    "run2_idx": 1132,
    "joint_number": 6990,
    "run1_distance": 25450.34,
    "run2_distance": 25485.89,
    "offset": 35.55
  },
  {
    "run1_idx": 1146,
    "run2_idx": 1135,
    "joint_number": 7000,
    "run1_distance": 25490.32,
    "run2_distance": 25526.07,
    "offset": 35.75
  },
  {
    "run1_idx": 1147,
    "run2_idx": 1136,
    "joint_number": 7010,
    "run1_distance": 25510.19,
    "run2_distance": 25546.04,
    "offset": 35.85
  },
  {
    "run1_idx": 1148,
    "run2_idx": 1138,
    "joint_number": 7020,
    "run1_distance": 25550.17,
    "run2_distance": 25586.31,
    "offset": 36.14
  },
  {
    "run1_idx": 1149,
    "run2_idx": 1139,
    "joint_number": 7030,
    "run1_distance": 25564.05,
    "run2_distance": 25600.29,
    "offset": 36.24
  },
  {
    "run1_idx": 1150,
    "run2_idx": 1140,
    "joint_number": 7040,
    "run1_distance": 25603.78,
    "run2_distance": 25640.19,
    "offset": 36.41
  },
  {
    "run1_idx": 1151,
    "run2_idx": 1141,
    "joint_number": 7050,
    "run1_distance": 25631.45,
    "run2_distance": 25668,
    "offset": 36.55
  },
  {
    "run1_idx": 1152,
    "run2_idx": 1142,
    "joint_number": 7060,
    "run1_distance": 25671.38,
    "run2_distance": 25708.1,
    "offset": 36.72
  },
  {
    "run1_idx": 1153,
    "run2_idx": 1143,
    "joint_number": 7070,
    "run1_distance": 25708.94,
    "run2_distance": 25745.74,
    "offset": 36.8
  },
  {
    "run1_idx": 1154,
    "run2_idx": 1144,
    "joint_number": 7080,
    "run1_distance": 25748.88,
    "run2_distance": 25785.81,
    "offset": 36.93
  },
  {
    "run1_idx": 1155,
    "run2_idx": 1145,
    "joint_number": 7090,
    "run1_distance": 25778.46,
    "run2_distance": 25815.49,
    "offset": 37.03
  },
  {
    "run1_idx": 1156,
    "run2_idx": 1146,
    "joint_number": 7100,
    "run1_distance": 25788.01,
    "run2_distance": 25825.05,
    "offset": 37.04
  },
  {
    "run1_idx": 1157,
    "run2_idx": 1147,
    "joint_number": 7110,
    "run1_distance": 25828,
    "run2_distance": 25865.25,
    "offset": 37.25
  },
  {
    "run1_idx": 1159,
    "run2_idx": 1149,
    "joint_number": 7120,
    "run1_distance": 25837.35,
    "run2_distance": 25874.03,
    "offset": 36.68
  },
  {
    "run1_idx": 1161,
    "run2_idx": 1152,
    "joint_number": 7130,
    "run1_distance": 25877.31,
    "run2_distance": 25914.31,
    "offset": 37
  },
  {
    "run1_idx": 1162,
    "run2_idx": 1153,
    "joint_number": 7140,
    "run1_distance": 25917.26,
    "run2_distance": 25954.33,
    "offset": 37.07
  },
  {
    "run1_idx": 1163,
    "run2_idx": 1154,
    "joint_number": 7150,
    "run1_distance": 25957.2,
    "run2_distance": 25994.38,
    "offset": 37.18
  },
  {
    "run1_idx": 1164,
    "run2_idx": 1155,
    "joint_number": 7160,
    "run1_distance": 25997.02,
    "run2_distance": 26034.38,
    "offset": 37.36
  },
  {
    "run1_idx": 1165,
    "run2_idx": 1157,
    "joint_number": 7170,
    "run1_distance": 26037.01,
    "run2_distance": 26074.44,
    "offset": 37.43
  },
  {
    "run1_idx": 1167,
    "run2_idx": 1159,
    "joint_number": 7180,
    "run1_distance": 26077.03,
    "run2_distance": 26114.54,
    "offset": 37.51
  },
  {
    "run1_idx": 1169,
    "run2_idx": 1160,
    "joint_number": 7190,
    "run1_distance": 26097.05,
    "run2_distance": 26134.55,
    "offset": 37.5
  },
  {
    "run1_idx": 1170,
    "run2_idx": 1161,
    "joint_number": 7200,
    "run1_distance": 26137.04,
    "run2_distance": 26174.57,
    "offset": 37.53
  },
  {
    "run1_idx": 1171,
    "run2_idx": 1162,
    "joint_number": 7210,
    "run1_distance": 26177.05,
    "run2_distance": 26214.75,
    "offset": 37.7
  },
  {
    "run1_idx": 1172,
    "run2_idx": 1163,
    "joint_number": 7220,
    "run1_distance": 26216.99,
    "run2_distance": 26254.77,
    "offset": 37.78
  },
  {
    "run1_idx": 1173,
    "run2_idx": 1164,
    "joint_number": 7230,
    "run1_distance": 26256.99,
    "run2_distance": 26294.84,
    "offset": 37.85
  },
  {
    "run1_idx": 1174,
    "run2_idx": 1165,
    "joint_number": 7240,
    "run1_distance": 26296.99,
    "run2_distance": 26334.9,
    "offset": 37.91
  },
  {
    "run1_idx": 1175,
    "run2_idx": 1166,
    "joint_number": 7250,
    "run1_distance": 26336.95,
    "run2_distance": 26374.97,
    "offset": 38.02
  },
  {
    "run1_idx": 1176,
    "run2_idx": 1167,
    "joint_number": 7260,
    "run1_distance": 26376.92,
    "run2_distance": 26415.02,
    "offset": 38.1
  },
  {
    "run1_idx": 1178,
    "run2_idx": 1170,
    "joint_number": 7270,
    "run1_distance": 26416.94,
    "run2_distance": 26455.08,
    "offset": 38.14
  },
  {
    "run1_idx": 1179,
    "run2_idx": 1171,
    "joint_number": 7280,
    "run1_distance": 26456.95,
    "run2_distance": 26495.15,
    "offset": 38.2
  },
  {
    "run1_idx": 1180,
    "run2_idx": 1172,
    "joint_number": 7290,
    "run1_distance": 26496.81,
    "run2_distance": 26535.07,
    "offset": 38.26
  },
  {
    "run1_idx": 1181,
    "run2_idx": 1173,
    "joint_number": 7300,
    "run1_distance": 26536.78,
    "run2_distance": 26575.04,
    "offset": 38.26
  },
  {
    "run1_idx": 1182,
    "run2_idx": 1174,
    "joint_number": 7310,
    "run1_distance": 26576.78,
    "run2_distance": 26615.09,
    "offset": 38.31
  },
  {
    "run1_idx": 1183,
    "run2_idx": 1175,
    "joint_number": 7320,
    "run1_distance": 26616.82,
    "run2_distance": 26655.11,
    "offset": 38.29
  },
  {
    "run1_idx": 1184,
    "run2_idx": 1176,
    "joint_number": 7330,
    "run1_distance": 26656.83,
    "run2_distance": 26695.13,
    "offset": 38.3
  },
  {
    "run1_idx": 1185,
    "run2_idx": 1177,
    "joint_number": 7340,
    "run1_distance": 26696.75,
    "run2_distance": 26735.04,
    "offset": 38.29
  },
  {
    "run1_idx": 1186,
    "run2_idx": 1178,
    "joint_number": 7350,
    "run1_distance": 26736.75,
    "run2_distance": 26775.18,
    "offset": 38.43
  },
  {
    "run1_idx": 1187,
    "run2_idx": 1179,
    "joint_number": 7360,
    "run1_distance": 26776.78,
    "run2_distance": 26815.26,
    "offset": 38.48
  },
  {
    "run1_idx": 1188,
    "run2_idx": 1180,
    "joint_number": 7370,
    "run1_distance": 26789.1,
    "run2_distance": 26827.65,
    "offset": 38.55
  },
  {
    "run1_idx": 1189,
    "run2_idx": 1181,
    "joint_number": 7380,
    "run1_distance": 26828.99,
    "run2_distance": 26867.78,
    "offset": 38.79
  },
  {
    "run1_idx": 1194,
    "run2_idx": 1189,
    "joint_number": 7390,
    "run1_distance": 26868.81,
    "run2_distance": 26908,
    "offset": 39.19
  },
  {
    "run1_idx": 1195,
    "run2_idx": 1191,
    "joint_number": 7400,
    "run1_distance": 26891.58,
    "run2_distance": 26930.83,
    "offset": 39.25
  },
  {
    "run1_idx": 1197,
    "run2_idx": 1197,
    "joint_number": 7410,
    "run1_distance": 26931.62,
    "run2_distance": 26971,
    "offset": 39.38
  },
  {
    "run1_idx": 1199,
    "run2_idx": 1199,
    "joint_number": 7420,
    "run1_distance": 26945.55,
    "run2_distance": 26984.21,
    "offset": 38.66
  },
  {
    "run1_idx": 1201,
    "run2_idx": 1205,
    "joint_number": 7430,
    "run1_distance": 26975.39,
    "run2_distance": 27014.39,
    "offset": 39
  },
  {
    "run1_idx": 1202,
    "run2_idx": 1206,
    "joint_number": 7440,
    "run1_distance": 27006.9,
    "run2_distance": 27045.83,
    "offset": 38.93
  },
  {
    "run1_idx": 1203,
    "run2_idx": 1207,
    "joint_number": 7450,
    "run1_distance": 27046.71,
    "run2_distance": 27085.94,
    "offset": 39.23
  },
  {
    "run1_idx": 1204,
    "run2_idx": 1208,
    "joint_number": 7460,
    "run1_distance": 27086.56,
    "run2_distance": 27126.08,
    "offset": 39.52
  },
  {
    "run1_idx": 1205,
    "run2_idx": 1209,
    "joint_number": 7470,
    "run1_distance": 27126.46,
    "run2_distance": 27166.22,
    "offset": 39.76
  },
  {
    "run1_idx": 1206,
    "run2_idx": 1210,
    "joint_number": 7480,
    "run1_distance": 27166.44,
    "run2_distance": 27206.28,
    "offset": 39.84
  },
  {
    "run1_idx": 1207,
    "run2_idx": 1211,
    "joint_number": 7490,
    "run1_distance": 27206.48,
    "run2_distance": 27246.37,
    "offset": 39.89
  },
  {
    "run1_idx": 1208,
    "run2_idx": 1214,
    "joint_number": 7500,
    "run1_distance": 27246.47,
    "run2_distance": 27286.32,
    "offset": 39.85
  },
  {
    "run1_idx": 1209,
    "run2_idx": 1215,
    "joint_number": 7510,
    "run1_distance": 27275.76,
    "run2_distance": 27315.6,
    "offset": 39.84
  },
  {
    "run1_idx": 1210,
    "run2_idx": 1216,
    "joint_number": 7520,
    "run1_distance": 27315.75,
    "run2_distance": 27355.59,
    "offset": 39.84
  },
  {
    "run1_idx": 1212,
    "run2_idx": 1218,
    "joint_number": 7530,
    "run1_distance": 27355.73,
    "run2_distance": 27395.57,
    "offset": 39.84
  },
  {
    "run1_idx": 1213,
    "run2_idx": 1219,
    "joint_number": 7540,
    "run1_distance": 27395.71,
    "run2_distance": 27435.57,
    "offset": 39.86
  },
  {
    "run1_idx": 1214,
    "run2_idx": 1220,
    "joint_number": 7550,
    "run1_distance": 27435.72,
    "run2_distance": 27475.59,
    "offset": 39.87
  },
  {
    "run1_idx": 1215,
    "run2_idx": 1223,
    "joint_number": 7560,
    "run1_distance": 27475.73,
    "run2_distance": 27515.59,
    "offset": 39.86
  },
  {
    "run1_idx": 1216,
    "run2_idx": 1224,
    "joint_number": 7570,
    "run1_distance": 27515.78,
    "run2_distance": 27555.63,
    "offset": 39.85
  },
  {
    "run1_idx": 1217,
    "run2_idx": 1225,
    "joint_number": 7580,
    "run1_distance": 27555.75,
    "run2_distance": 27595.59,
    "offset": 39.84
  },
  {
    "run1_idx": 1223,
    "run2_idx": 1226,
    "joint_number": 7590,
    "run1_distance": 27595.72,
    "run2_distance": 27635.56,
    "offset": 39.84
  },
  {
    "run1_idx": 1224,
    "run2_idx": 1227,
    "joint_number": 7600,
    "run1_distance": 27635.77,
    "run2_distance": 27675.6,
    "offset": 39.83
  },
  {
    "run1_idx": 1225,
    "run2_idx": 1228,
    "joint_number": 7610,
    "run1_distance": 27675.83,
    "run2_distance": 27715.69,
    "offset": 39.86
  },
  {
    "run1_idx": 1226,
    "run2_idx": 1229,
    "joint_number": 7620,
    "run1_distance": 27715.9,
    "run2_distance": 27755.92,
    "offset": 40.02
  },
  {
    "run1_idx": 1227,
    "run2_idx": 1230,
    "joint_number": 7630,
    "run1_distance": 27755.88,
    "run2_distance": 27795.98,
    "offset": 40.1
  },
  {
    "run1_idx": 1228,
    "run2_idx": 1231,
    "joint_number": 7640,
    "run1_distance": 27796.02,
    "run2_distance": 27836.17,
    "offset": 40.15
  },
  {
    "run1_idx": 1229,
    "run2_idx": 1232,
    "joint_number": 7650,
    "run1_distance": 27836.05,
    "run2_distance": 27876.26,
    "offset": 40.21
  },
  {
    "run1_idx": 1230,
    "run2_idx": 1233,
    "joint_number": 7660,
    "run1_distance": 27875.93,
    "run2_distance": 27916.34,
    "offset": 40.41
  },
  {
    "run1_idx": 1232,
    "run2_idx": 1234,
    "joint_number": 7670,
    "run1_distance": 27915.84,
    "run2_distance": 27956.49,
    "offset": 40.65
  },
  {
    "run1_idx": 1234,
    "run2_idx": 1239,
    "joint_number": 7680,
    "run1_distance": 27955.58,
    "run2_distance": 27996.44,
    "offset": 40.86
  },
  {
    "run1_idx": 1236,
    "run2_idx": 1241,
    "joint_number": 7690,
    "run1_distance": 27968.75,
    "run2_distance": 28009.13,
    "offset": 40.38
  },
  {
    "run1_idx": 1237,
    "run2_idx": 1242,
    "joint_number": 7700,
    "run1_distance": 28008.71,
    "run2_distance": 28049.45,
    "offset": 40.74
  },
  {
    "run1_idx": 1239,
    "run2_idx": 1243,
    "joint_number": 7710,
    "run1_distance": 28048.69,
    "run2_distance": 28089.41,
    "offset": 40.72
  },
  {
    "run1_idx": 1240,
    "run2_idx": 1244,
    "joint_number": 7720,
    "run1_distance": 28069.22,
    "run2_distance": 28109.97,
    "offset": 40.75
  },
  {
    "run1_idx": 1241,
    "run2_idx": 1245,
    "joint_number": 7730,
    "run1_distance": 28109.2,
    "run2_distance": 28150.03,
    "offset": 40.83
  },
  {
    "run1_idx": 1242,
    "run2_idx": 1246,
    "joint_number": 7740,
    "run1_distance": 28149.12,
    "run2_distance": 28190.06,
    "offset": 40.94
  },
  {
    "run1_idx": 1243,
    "run2_idx": 1247,
    "joint_number": 7750,
    "run1_distance": 28189.11,
    "run2_distance": 28230.12,
    "offset": 41.01
  },
  {
    "run1_idx": 1245,
    "run2_idx": 1248,
    "joint_number": 7760,
    "run1_distance": 28221.69,
    "run2_distance": 28262.74,
    "offset": 41.05
  },
  {
    "run1_idx": 1246,
    "run2_idx": 1250,
    "joint_number": 7770,
    "run1_distance": 28261.77,
    "run2_distance": 28302.86,
    "offset": 41.09
  },
  {
    "run1_idx": 1247,
    "run2_idx": 1251,
    "joint_number": 7780,
    "run1_distance": 28294.62,
    "run2_distance": 28335.76,
    "offset": 41.14
  },
  {
    "run1_idx": 1248,
    "run2_idx": 1252,
    "joint_number": 7790,
    "run1_distance": 28334.54,
    "run2_distance": 28375.79,
    "offset": 41.25
  },
  {
    "run1_idx": 1249,
    "run2_idx": 1253,
    "joint_number": 7800,
    "run1_distance": 28374.6,
    "run2_distance": 28415.95,
    "offset": 41.35
  },
  {
    "run1_idx": 1250,
    "run2_idx": 1254,
    "joint_number": 7810,
    "run1_distance": 28414.51,
    "run2_distance": 28456,
    "offset": 41.49
  },
  {
    "run1_idx": 1251,
    "run2_idx": 1255,
    "joint_number": 7820,
    "run1_distance": 28454.42,
    "run2_distance": 28496.11,
    "offset": 41.69
  },
  {
    "run1_idx": 1252,
    "run2_idx": 1256,
    "joint_number": 7830,
    "run1_distance": 28494.39,
    "run2_distance": 28536.1,
    "offset": 41.71
  },
  {
    "run1_idx": 1253,
    "run2_idx": 1257,
    "joint_number": 7840,
    "run1_distance": 28534.33,
    "run2_distance": 28576.12,
    "offset": 41.79
  },
  {
    "run1_idx": 1254,
    "run2_idx": 1258,
    "joint_number": 7850,
    "run1_distance": 28574.28,
    "run2_distance": 28616.19,
    "offset": 41.91
  },
  {
    "run1_idx": 1255,
    "run2_idx": 1259,
    "joint_number": 7860,
    "run1_distance": 28614.29,
    "run2_distance": 28656.3,
    "offset": 42.01
  },
  {
    "run1_idx": 1256,
    "run2_idx": 1262,
    "joint_number": 7870,
    "run1_distance": 28654.26,
    "run2_distance": 28696.36,
    "offset": 42.1
  },
  {
    "run1_idx": 1257,
    "run2_idx": 1263,
    "joint_number": 7880,
    "run1_distance": 28694.11,
    "run2_distance": 28736.28,
    "offset": 42.17
  },
  {
    "run1_idx": 1258,
    "run2_idx": 1264,
    "joint_number": 7890,
    "run1_distance": 28734.1,
    "run2_distance": 28776.33,
    "offset": 42.23
  },
  {
    "run1_idx": 1259,
    "run2_idx": 1265,
    "joint_number": 7900,
    "run1_distance": 28774.1,
    "run2_distance": 28816.42,
    "offset": 42.32
  },
  {
    "run1_idx": 1261,
    "run2_idx": 1268,
    "joint_number": 7910,
    "run1_distance": 28814.06,
    "run2_distance": 28856.46,
    "offset": 42.4
  },
  {
    "run1_idx": 1263,
    "run2_idx": 1273,
    "joint_number": 7920,
    "run1_distance": 28854.07,
    "run2_distance": 28896.56,
    "offset": 42.49
  },
  {
    "run1_idx": 1264,
    "run2_idx": 1274,
    "joint_number": 7930,
    "run1_distance": 28894.11,
    "run2_distance": 28936.66,
    "offset": 42.55
  },
  {
    "run1_idx": 1265,
    "run2_idx": 1275,
    "joint_number": 7940,
    "run1_distance": 28934.19,
    "run2_distance": 28976.83,
    "offset": 42.64
  },
  {
    "run1_idx": 1266,
    "run2_idx": 1276,
    "joint_number": 7950,
    "run1_distance": 28974.12,
    "run2_distance": 29016.91,
    "offset": 42.79
  },
  {
    "run1_idx": 1267,
    "run2_idx": 1277,
    "joint_number": 7960,
    "run1_distance": 29014.13,
    "run2_distance": 29056.98,
    "offset": 42.85
  },
  {
    "run1_idx": 1269,
    "run2_idx": 1281,
    "joint_number": 7970,
    "run1_distance": 29054.14,
    "run2_distance": 29097.07,
    "offset": 42.93
  },
  {
    "run1_idx": 1270,
    "run2_idx": 1283,
    "joint_number": 7980,
    "run1_distance": 29087.49,
    "run2_distance": 29130.47,
    "offset": 42.98
  },
  {
    "run1_idx": 1271,
    "run2_idx": 1284,
    "joint_number": 7990,
    "run1_distance": 29127.5,
    "run2_distance": 29170.51,
    "offset": 43.01
  },
  {
    "run1_idx": 1274,
    "run2_idx": 1287,
    "joint_number": 8000,
    "run1_distance": 29167.5,
    "run2_distance": 29210.59,
    "offset": 43.09
  },
  {
    "run1_idx": 1278,
    "run2_idx": 1292,
    "joint_number": 8010,
    "run1_distance": 29207.41,
    "run2_distance": 29250.55,
    "offset": 43.14
  },
  {
    "run1_idx": 1282,
    "run2_idx": 1296,
    "joint_number": 8020,
    "run1_distance": 29247.39,
    "run2_distance": 29290.63,
    "offset": 43.24
  },
  {
    "run1_idx": 1283,
    "run2_idx": 1297,
    "joint_number": 8030,
    "run1_distance": 29287.37,
    "run2_distance": 29330.67,
    "offset": 43.3
  },
  {
    "run1_idx": 1284,
    "run2_idx": 1298,
    "joint_number": 8040,
    "run1_distance": 29327.44,
    "run2_distance": 29370.81,
    "offset": 43.37
  },
  {
    "run1_idx": 1285,
    "run2_idx": 1299,
    "joint_number": 8050,
    "run1_distance": 29367.58,
    "run2_distance": 29411.06,
    "offset": 43.48
  },
  {
    "run1_idx": 1286,
    "run2_idx": 1300,
    "joint_number": 8060,
    "run1_distance": 29407.68,
    "run2_distance": 29451.25,
    "offset": 43.57
  },
  {
    "run1_idx": 1293,
    "run2_idx": 1326,
    "joint_number": 8070,
    "run1_distance": 29447.78,
    "run2_distance": 29491.31,
    "offset": 43.53
  },
  {
    "run1_idx": 1295,
    "run2_idx": 1329,
    "joint_number": 8080,
    "run1_distance": 29487.75,
    "run2_distance": 29531.38,
    "offset": 43.63
  },
  {
    "run1_idx": 1296,
    "run2_idx": 1330,
    "joint_number": 8090,
    "run1_distance": 29527.76,
    "run2_distance": 29571.42,
    "offset": 43.66
  },
  {
    "run1_idx": 1297,
    "run2_idx": 1331,
    "joint_number": 8100,
    "run1_distance": 29567.76,
    "run2_distance": 29611.46,
    "offset": 43.7
  },
  {
    "run1_idx": 1298,
    "run2_idx": 1332,
    "joint_number": 8110,
    "run1_distance": 29607.7,
    "run2_distance": 29651.51,
    "offset": 43.81
  },
  {
    "run1_idx": 1299,
    "run2_idx": 1333,
    "joint_number": 8120,
    "run1_distance": 29645.29,
    "run2_distance": 29689.14,
    "offset": 43.85
  },
  {
    "run1_idx": 1300,
    "run2_idx": 1334,
    "joint_number": 8130,
    "run1_distance": 29685.45,
    "run2_distance": 29729.52,
    "offset": 44.07
  },
  {
    "run1_idx": 1302,
    "run2_idx": 1336,
    "joint_number": 8140,
    "run1_distance": 29697.75,
    "run2_distance": 29741.31,
    "offset": 43.56
  },
  {
    "run1_idx": 1303,
    "run2_idx": 1338,
    "joint_number": 8150,
    "run1_distance": 29737.85,
    "run2_distance": 29781.95,
    "offset": 44.1
  },
  {
    "run1_idx": 1304,
    "run2_idx": 1339,
    "joint_number": 8160,
    "run1_distance": 29757.91,
    "run2_distance": 29802.06,
    "offset": 44.15
  },
  {
    "run1_idx": 1305,
    "run2_idx": 1340,
    "joint_number": 8170,
    "run1_distance": 29792.18,
    "run2_distance": 29836.38,
    "offset": 44.2
  },
  {
    "run1_idx": 1306,
    "run2_idx": 1341,
    "joint_number": 8180,
    "run1_distance": 29832.21,
    "run2_distance": 29876.45,
    "offset": 44.24
  },
  {
    "run1_idx": 1307,
    "run2_idx": 1342,
    "joint_number": 8190,
    "run1_distance": 29872.18,
    "run2_distance": 29916.51,
    "offset": 44.33
  },
  {
    "run1_idx": 1308,
    "run2_idx": 1343,
    "joint_number": 8200,
    "run1_distance": 29912.2,
    "run2_distance": 29956.58,
    "offset": 44.38
  },
  {
    "run1_idx": 1309,
    "run2_idx": 1344,
    "joint_number": 8210,
    "run1_distance": 29952.18,
    "run2_distance": 29996.58,
    "offset": 44.4
  },
  {
    "run1_idx": 1310,
    "run2_idx": 1345,
    "joint_number": 8220,
    "run1_distance": 29992.14,
    "run2_distance": 30036.57,
    "offset": 44.43
  },
  {
    "run1_idx": 1311,
    "run2_idx": 1346,
    "joint_number": 8230,
    "run1_distance": 30032.16,
    "run2_distance": 30076.64,
    "offset": 44.48
  },
  {
    "run1_idx": 1312,
    "run2_idx": 1347,
    "joint_number": 8240,
    "run1_distance": 30072.15,
    "run2_distance": 30116.69,
    "offset": 44.54
  },
  {
    "run1_idx": 1313,
    "run2_idx": 1348,
    "joint_number": 8250,
    "run1_distance": 30112.18,
    "run2_distance": 30156.79,
    "offset": 44.61
  },
  {
    "run1_idx": 1314,
    "run2_idx": 1349,
    "joint_number": 8260,
    "run1_distance": 30151.99,
    "run2_distance": 30196.67,
    "offset": 44.68
  },
  {
    "run1_idx": 1315,
    "run2_idx": 1350,
    "joint_number": 8270,
    "run1_distance": 30192,
    "run2_distance": 30236.76,
    "offset": 44.76
  },
  {
    "run1_idx": 1316,
    "run2_idx": 1351,
    "joint_number": 8280,
    "run1_distance": 30231.91,
    "run2_distance": 30276.76,
    "offset": 44.85
  },
  {
    "run1_idx": 1319,
    "run2_idx": 1358,
    "joint_number": 8290,
    "run1_distance": 30271.83,
    "run2_distance": 30316.75,
    "offset": 44.92
  },
  {
    "run1_idx": 1320,
    "run2_idx": 1360,
    "joint_number": 8300,
    "run1_distance": 30311.61,
    "run2_distance": 30356.68,
    "offset": 45.07
  },
  {
    "run1_idx": 1321,
    "run2_idx": 1364,
    "joint_number": 8310,
    "run1_distance": 30351.5,
    "run2_distance": 30396.72,
    "offset": 45.22
  },
  {
    "run1_idx": 1322,
    "run2_idx": 1365,
    "joint_number": 8320,
    "run1_distance": 30391.46,
    "run2_distance": 30436.78,
    "offset": 45.32
  },
  {
    "run1_idx": 1323,
    "run2_idx": 1366,
    "joint_number": 8330,
    "run1_distance": 30431.48,
    "run2_distance": 30476.86,
    "offset": 45.38
  },
  {
    "run1_idx": 1324,
    "run2_idx": 1367,
    "joint_number": 8340,
    "run1_distance": 30471.4,
    "run2_distance": 30516.92,
    "offset": 45.52
  },
  {
    "run1_idx": 1326,
    "run2_idx": 1369,
    "joint_number": 8350,
    "run1_distance": 30511.36,
    "run2_distance": 30556.99,
    "offset": 45.63
  },
  {
    "run1_idx": 1327,
    "run2_idx": 1370,
    "joint_number": 8360,
    "run1_distance": 30551.28,
    "run2_distance": 30596.93,
    "offset": 45.65
  },
  {
    "run1_idx": 1337,
    "run2_idx": 1373,
    "joint_number": 8370,
    "run1_distance": 30591.29,
    "run2_distance": 30637,
    "offset": 45.71
  },
  {
    "run1_idx": 1338,
    "run2_idx": 1374,
    "joint_number": 8380,
    "run1_distance": 30631.25,
    "run2_distance": 30677.04,
    "offset": 45.79
  },
  {
    "run1_idx": 1339,
    "run2_idx": 1375,
    "joint_number": 8390,
    "run1_distance": 30671.23,
    "run2_distance": 30717.13,
    "offset": 45.9
  },
  {
    "run1_idx": 1342,
    "run2_idx": 1376,
    "joint_number": 8400,
    "run1_distance": 30711.15,
    "run2_distance": 30757.13,
    "offset": 45.98
  },
  {
    "run1_idx": 1343,
    "run2_idx": 1377,
    "joint_number": 8410,
    "run1_distance": 30739.96,
    "run2_distance": 30786.03,
    "offset": 46.07
  },
  {
    "run1_idx": 1344,
    "run2_idx": 1378,
    "joint_number": 8420,
    "run1_distance": 30775.35,
    "run2_distance": 30821.53,
    "offset": 46.18
  },
  {
    "run1_idx": 1345,
    "run2_idx": 1379,
    "joint_number": 8430,
    "run1_distance": 30811.94,
    "run2_distance": 30858.27,
    "offset": 46.33
  },
  {
    "run1_idx": 1346,
    "run2_idx": 1380,
    "joint_number": 8440,
    "run1_distance": 30851.92,
    "run2_distance": 30898.42,
    "offset": 46.5
  },
  {
    "run1_idx": 1348,
    "run2_idx": 1382,
    "joint_number": 8450,
    "run1_distance": 30862.86,
    "run2_distance": 30908.8,
    "offset": 45.94
  },
  {
    "run1_idx": 1349,
    "run2_idx": 1383,
    "joint_number": 8460,
    "run1_distance": 30884.37,
    "run2_distance": 30930.8,
    "offset": 46.43
  },
  {
    "run1_idx": 1350,
    "run2_idx": 1386,
    "joint_number": 8470,
    "run1_distance": 30924.36,
    "run2_distance": 30970.98,
    "offset": 46.62
  },
  {
    "run1_idx": 1352,
    "run2_idx": 1388,
    "joint_number": 8480,
    "run1_distance": 30934.71,
    "run2_distance": 30981.41,
    "offset": 46.7
  },
  {
    "run1_idx": 1353,
    "run2_idx": 1389,
    "joint_number": 8490,
    "run1_distance": 30968.4,
    "run2_distance": 31015.52,
    "offset": 47.12
  },
  {
    "run1_idx": 1354,
    "run2_idx": 1390,
    "joint_number": 8500,
    "run1_distance": 31008.39,
    "run2_distance": 31055.59,
    "offset": 47.2
  },
  {
    "run1_idx": 1356,
    "run2_idx": 1392,
    "joint_number": 8510,
    "run1_distance": 31048.29,
    "run2_distance": 31095.71,
    "offset": 47.42
  },
  {
    "run1_idx": 1357,
    "run2_idx": 1393,
    "joint_number": 8520,
    "run1_distance": 31088.29,
    "run2_distance": 31135.83,
    "offset": 47.54
  },
  {
    "run1_idx": 1358,
    "run2_idx": 1398,
    "joint_number": 8530,
    "run1_distance": 31128.31,
    "run2_distance": 31176.03,
    "offset": 47.72
  },
  {
    "run1_idx": 1359,
    "run2_idx": 1399,
    "joint_number": 8540,
    "run1_distance": 31168.2,
    "run2_distance": 31216.18,
    "offset": 47.98
  },
  {
    "run1_idx": 1360,
    "run2_idx": 1400,
    "joint_number": 8550,
    "run1_distance": 31208.05,
    "run2_distance": 31256.11,
    "offset": 48.06
  },
  {
    "run1_idx": 1361,
    "run2_idx": 1401,
    "joint_number": 8560,
    "run1_distance": 31247.97,
    "run2_distance": 31296.16,
    "offset": 48.19
  },
  {
    "run1_idx": 1362,
    "run2_idx": 1402,
    "joint_number": 8570,
    "run1_distance": 31287.91,
    "run2_distance": 31336.28,
    "offset": 48.37
  },
  {
    "run1_idx": 1363,
    "run2_idx": 1403,
    "joint_number": 8580,
    "run1_distance": 31323.31,
    "run2_distance": 31371.76,
    "offset": 48.45
  },
  {
    "run1_idx": 1364,
    "run2_idx": 1404,
    "joint_number": 8590,
    "run1_distance": 31363.26,
    "run2_distance": 31411.76,
    "offset": 48.5
  },
  {
    "run1_idx": 1365,
    "run2_idx": 1407,
    "joint_number": 8600,
    "run1_distance": 31403.24,
    "run2_distance": 31451.83,
    "offset": 48.59
  },
  {
    "run1_idx": 1366,
    "run2_idx": 1408,
    "joint_number": 8610,
    "run1_distance": 31443.2,
    "run2_distance": 31491.95,
    "offset": 48.75
  },
  {
    "run1_idx": 1367,
    "run2_idx": 1409,
    "joint_number": 8620,
    "run1_distance": 31483.17,
    "run2_distance": 31532.04,
    "offset": 48.87
  },
  {
    "run1_idx": 1368,
    "run2_idx": 1410,
    "joint_number": 8630,
    "run1_distance": 31492.84,
    "run2_distance": 31541.83,
    "offset": 48.99
  },
  {
    "run1_idx": 1370,
    "run2_idx": 1412,
    "joint_number": 8640,
    "run1_distance": 31502.29,
    "run2_distance": 31550.78,
    "offset": 48.49
  },
  {
    "run1_idx": 1371,
    "run2_idx": 1416,
    "joint_number": 8650,
    "run1_distance": 31508.43,
    "run2_distance": 31557.24,
    "offset": 48.81
  },
  {
    "run1_idx": 1375,
    "run2_idx": 1420,
    "joint_number": 8660,
    "run1_distance": 31548.5,
    "run2_distance": 31597.28,
    "offset": 48.78
  },
  {
    "run1_idx": 1379,
    "run2_idx": 1432,
    "joint_number": 8670,
    "run1_distance": 31564.41,
    "run2_distance": 31613.37,
    "offset": 48.96
  },
  {
    "run1_idx": 1381,
    "run2_idx": 1434,
    "joint_number": 8680,
    "run1_distance": 31574.15,
    "run2_distance": 31622.71,
    "offset": 48.56
  },
  {
    "run1_idx": 1386,
    "run2_idx": 1442,
    "joint_number": 8690,
    "run1_distance": 31585.04,
    "run2_distance": 31633.87,
    "offset": 48.83
  },
  {
    "run1_idx": 1388,
    "run2_idx": 1445,
    "joint_number": 8700,
    "run1_distance": 31606.19,
    "run2_distance": 31655.05,
    "offset": 48.86
  },
  {
    "run1_idx": 1389,
    "run2_idx": 1448,
    "joint_number": 8710,
    "run1_distance": 31646.15,
    "run2_distance": 31695.07,
    "offset": 48.92
  },
  {
    "run1_idx": 1390,
    "run2_idx": 1449,
    "joint_number": 8720,
    "run1_distance": 31656.76,
    "run2_distance": 31705.7,
    "offset": 48.94
  },
  {
    "run1_idx": 1391,
    "run2_idx": 1450,
    "joint_number": 8730,
    "run1_distance": 31681.63,
    "run2_distance": 31730.57,
    "offset": 48.94
  },
  {
    "run1_idx": 1392,
    "run2_idx": 1451,
    "joint_number": 8740,
    "run1_distance": 31692.19,
    "run2_distance": 31741.13,
    "offset": 48.94
  },
  {
    "run1_idx": 1393,
    "run2_idx": 1452,
    "joint_number": 8750,
    "run1_distance": 31732.15,
    "run2_distance": 31781.14,
    "offset": 48.99
  },
  {
    "run1_idx": 1394,
    "run2_idx": 1453,
    "joint_number": 8760,
    "run1_distance": 31740.78,
    "run2_distance": 31789.8,
    "offset": 49.02
  },
  {
    "run1_idx": 1395,
    "run2_idx": 1454,
    "joint_number": 8770,
    "run1_distance": 31780.8,
    "run2_distance": 31829.88,
    "offset": 49.08
  },
  {
    "run1_idx": 1396,
    "run2_idx": 1455,
    "joint_number": 8780,
    "run1_distance": 31818.81,
    "run2_distance": 31868.13,
    "offset": 49.32
  },
  {
    "run1_idx": 1397,
    "run2_idx": 1456,
    "joint_number": 8790,
    "run1_distance": 31832.89,
    "run2_distance": 31882.23,
    "offset": 49.34
  },
  {
    "run1_idx": 1398,
    "run2_idx": 1457,
    "joint_number": 8800,
    "run1_distance": 31872.88,
    "run2_distance": 31922.4,
    "offset": 49.52
  },
  {
    "run1_idx": 1399,
    "run2_idx": 1458,
    "joint_number": 8810,
    "run1_distance": 31884.6,
    "run2_distance": 31934.11,
    "offset": 49.51
  },
  {
    "run1_idx": 1400,
    "run2_idx": 1459,
    "joint_number": 8820,
    "run1_distance": 31924.61,
    "run2_distance": 31974.18,
    "offset": 49.57
  },
  {
    "run1_idx": 1401,
    "run2_idx": 1460,
    "joint_number": 8830,
    "run1_distance": 31941.4,
    "run2_distance": 31991.04,
    "offset": 49.64
  },
  {
    "run1_idx": 1403,
    "run2_idx": 1461,
    "joint_number": 8840,
    "run1_distance": 31981.44,
    "run2_distance": 32031.09,
    "offset": 49.65
  },
  {
    "run1_idx": 1404,
    "run2_idx": 1462,
    "joint_number": 8850,
    "run1_distance": 32021.38,
    "run2_distance": 32071.17,
    "offset": 49.79
  },
  {
    "run1_idx": 1405,
    "run2_idx": 1463,
    "joint_number": 8860,
    "run1_distance": 32033.57,
    "run2_distance": 32083.36,
    "offset": 49.79
  },
  {
    "run1_idx": 1406,
    "run2_idx": 1464,
    "joint_number": 8870,
    "run1_distance": 32073.56,
    "run2_distance": 32123.41,
    "offset": 49.85
  },
  {
    "run1_idx": 1407,
    "run2_idx": 1465,
    "joint_number": 8880,
    "run1_distance": 32079.84,
    "run2_distance": 32129.69,
    "offset": 49.85
  },
  {
    "run1_idx": 1408,
    "run2_idx": 1466,
    "joint_number": 8890,
    "run1_distance": 32119.82,
    "run2_distance": 32169.75,
    "offset": 49.93
  },
  {
    "run1_idx": 1409,
    "run2_idx": 1467,
    "joint_number": 8900,
    "run1_distance": 32159.93,
    "run2_distance": 32209.69,
    "offset": 49.76
  },
  {
    "run1_idx": 1410,
    "run2_idx": 1468,
    "joint_number": 8910,
    "run1_distance": 32179.29,
    "run2_distance": 32229.07,
    "offset": 49.78
  },
  {
    "run1_idx": 1411,
    "run2_idx": 1471,
    "joint_number": 8920,
    "run1_distance": 32218.96,
    "run2_distance": 32268.96,
    "offset": 50
  },
  {
    "run1_idx": 1413,
    "run2_idx": 1472,
    "joint_number": 8940,
    "run1_distance": 32273.61,
    "run2_distance": 32308.95,
    "offset": 35.34
  },
  {
    "run1_idx": 1414,
    "run2_idx": 1473,
    "joint_number": 8950,
    "run1_distance": 32305.53,
    "run2_distance": 32323.65,
    "offset": 18.12
  },
  {
    "run1_idx": 1416,
    "run2_idx": 1476,
    "joint_number": 8960,
    "run1_distance": 32317.15,
    "run2_distance": 32366.54,
    "offset": 49.39
  },
  {
    "run1_idx": 1417,
    "run2_idx": 1478,
    "joint_number": 8970,
    "run1_distance": 32350.93,
    "run2_distance": 32400.8,
    "offset": 49.87
  },
  {
    "run1_idx": 1419,
    "run2_idx": 1480,
    "joint_number": 8980,
    "run1_distance": 32361.49,
    "run2_distance": 32410.9,
    "offset": 49.41
  },
  {
    "run1_idx": 1420,
    "run2_idx": 1482,
    "joint_number": 8990,
    "run1_distance": 32371.94,
    "run2_distance": 32421.74,
    "offset": 49.8
  },
  {
    "run1_idx": 1421,
    "run2_idx": 1483,
    "joint_number": 9000,
    "run1_distance": 32411.84,
    "run2_distance": 32461.84,
    "offset": 50
  },
  {
    "run1_idx": 1423,
    "run2_idx": 1485,
    "joint_number": 9010,
    "run1_distance": 32422.15,
    "run2_distance": 32471.41,
    "offset": 49.26
  },
  {
    "run1_idx": 1424,
    "run2_idx": 1486,
    "joint_number": 9020,
    "run1_distance": 32445.14,
    "run2_distance": 32494.74,
    "offset": 49.6
  },
  {
    "run1_idx": 1425,
    "run2_idx": 1487,
    "joint_number": 9030,
    "run1_distance": 32485.09,
    "run2_distance": 32534.72,
    "offset": 49.63
  },
  {
    "run1_idx": 1427,
    "run2_idx": 1490,
    "joint_number": 9040,
    "run1_distance": 32514.44,
    "run2_distance": 32564.18,
    "offset": 49.74
  },
  {
    "run1_idx": 1428,
    "run2_idx": 1493,
    "joint_number": 9050,
    "run1_distance": 32554.17,
    "run2_distance": 32604.02,
    "offset": 49.85
  },
  {
    "run1_idx": 1429,
    "run2_idx": 1494,
    "joint_number": 9060,
    "run1_distance": 32594.09,
    "run2_distance": 32644.07,
    "offset": 49.98
  },
  {
    "run1_idx": 1433,
    "run2_idx": 1497,
    "joint_number": 9080,
    "run1_distance": 32642.05,
    "run2_distance": 32684.08,
    "offset": 42.03
  },
  {
    "run1_idx": 1435,
    "run2_idx": 1500,
    "joint_number": 9090,
    "run1_distance": 32650.92,
    "run2_distance": 32700.88,
    "offset": 49.96
  },
  {
    "run1_idx": 1436,
    "run2_idx": 1498,
    "joint_number": 9100,
    "run1_distance": 32689.71,
    "run2_distance": 32692.2,
    "offset": 2.49
  },
  {
    "run1_idx": 1437,
    "run2_idx": 1505,
    "joint_number": 9110,
    "run1_distance": 32729.75,
    "run2_distance": 32740.03,
    "offset": 10.28
  },
  {
    "run1_idx": 1438,
    "run2_idx": 1506,
    "joint_number": 9120,
    "run1_distance": 32769.71,
    "run2_distance": 32780.19,
    "offset": 10.48
  },
  {
    "run1_idx": 1439,
    "run2_idx": 1507,
    "joint_number": 9130,
    "run1_distance": 32801.78,
    "run2_distance": 32820.11,
    "offset": 18.33
  },
  {
    "run1_idx": 1440,
    "run2_idx": 1508,
    "joint_number": 9140,
    "run1_distance": 32832.23,
    "run2_distance": 32852.12,
    "offset": 19.89
  },
  {
    "run1_idx": 1441,
    "run2_idx": 1509,
    "joint_number": 9150,
    "run1_distance": 32872.13,
    "run2_distance": 32882.53,
    "offset": 10.4
  },
  {
    "run1_idx": 1442,
    "run2_idx": 1510,
    "joint_number": 9160,
    "run1_distance": 32912.1,
    "run2_distance": 32922.36,
    "offset": 10.26
  },
  {
    "run1_idx": 1447,
    "run2_idx": 1515,
    "joint_number": 9170,
    "run1_distance": 32952.03,
    "run2_distance": 32962.17,
    "offset": 10.14
  },
  {
    "run1_idx": 1449,
    "run2_idx": 1532,
    "joint_number": 9180,
    "run1_distance": 32992.07,
    "run2_distance": 33042.07,
    "offset": 50
  },
  {
    "run1_idx": 1452,
    "run2_idx": 1535,
    "joint_number": 9190,
    "run1_distance": 33032.09,
    "run2_distance": 33082.04,
    "offset": 49.95
  },
  {
    "run1_idx": 1454,
    "run2_idx": 1537,
    "joint_number": 9200,
    "run1_distance": 33072.12,
    "run2_distance": 33122.06,
    "offset": 49.94
  },
  {
    "run1_idx": 1455,
    "run2_idx": 1539,
    "joint_number": 9210,
    "run1_distance": 33112.12,
    "run2_distance": 33162.11,
    "offset": 49.99
  },
  {
    "run1_idx": 1459,
    "run2_idx": 1541,
    "joint_number": 9230,
    "run1_distance": 33192.15,
    "run2_distance": 33202.15,
    "offset": 10
  },
  {
    "run1_idx": 1460,
    "run2_idx": 1548,
    "joint_number": 9240,
    "run1_distance": 33232.17,
    "run2_distance": 33282.17,
    "offset": 50
  },
  {
    "run1_idx": 1461,
    "run2_idx": 1549,
    "joint_number": 9250,
    "run1_distance": 33272.18,
    "run2_distance": 33322.18,
    "offset": 50
  },
  {
    "run1_idx": 1465,
    "run2_idx": 1559,
    "joint_number": 9270,
    "run1_distance": 33351.58,
    "run2_distance": 33362.23,
    "offset": 10.65
  },
  {
    "run1_idx": 1471,
    "run2_idx": 1565,
    "joint_number": 9280,
    "run1_distance": 33391.58,
    "run2_distance": 33401.66,
    "offset": 10.08
  },
  {
    "run1_idx": 1475,
    "run2_idx": 1577,
    "joint_number": 9290,
    "run1_distance": 33431.63,
    "run2_distance": 33441.67,
    "offset": 10.04
  },
  {
    "run1_idx": 1476,
    "run2_idx": 1636,
    "joint_number": 9300,
    "run1_distance": 33471.65,
    "run2_distance": 33481.73,
    "offset": 10.08
  },
  {
    "run1_idx": 1481,
    "run2_idx": 1640,
    "joint_number": 9310,
    "run1_distance": 33511.65,
    "run2_distance": 33521.75,
    "offset": 10.1
  },
  {
    "run1_idx": 1483,
    "run2_idx": 1656,
    "joint_number": 9320,
    "run1_distance": 33551.63,
    "run2_distance": 33561.84,
    "offset": 10.21
  },
  {
    "run1_idx": 1484,
    "run2_idx": 1660,
    "joint_number": 9330,
    "run1_distance": 33591.55,
    "run2_distance": 33601.93,
    "offset": 10.38
  },
  {
    "run1_idx": 1486,
    "run2_idx": 1661,
    "joint_number": 9340,
    "run1_distance": 33631.47,
    "run2_distance": 33641.83,
    "offset": 10.36
  },
  {
    "run1_idx": 1489,
    "run2_idx": 1662,
    "joint_number": 9350,
    "run1_distance": 33671.38,
    "run2_distance": 33681.8,
    "offset": 10.42
  },
  {
    "run1_idx": 1490,
    "run2_idx": 1663,
    "joint_number": 9360,
    "run1_distance": 33711.37,
    "run2_distance": 33721.75,
    "offset": 10.38
  },
  {
    "run1_idx": 1492,
    "run2_idx": 1664,
    "joint_number": 9370,
    "run1_distance": 33751.55,
    "run2_distance": 33761.78,
    "offset": 10.23
  },
  {
    "run1_idx": 1494,
    "run2_idx": 1681,
    "joint_number": 9380,
    "run1_distance": 33776.28,
    "run2_distance": 33801.85,
    "offset": 25.57
  },
  {
    "run1_idx": 1495,
    "run2_idx": 1692,
    "joint_number": 9390,
    "run1_distance": 33816.33,
    "run2_distance": 33826.65,
    "offset": 10.32
  },
  {
    "run1_idx": 1499,
    "run2_idx": 1693,
    "joint_number": 9400,
    "run1_distance": 33856.32,
    "run2_distance": 33866.72,
    "offset": 10.4
  },
  {
    "run1_idx": 1501,
    "run2_idx": 1701,
    "joint_number": 9410,
    "run1_distance": 33896.3,
    "run2_distance": 33906.84,
    "offset": 10.54
  },
  {
    "run1_idx": 1502,
    "run2_idx": 1705,
    "joint_number": 9420,
    "run1_distance": 33936.31,
    "run2_distance": 33946.93,
    "offset": 10.62
  },
  {
    "run1_idx": 1507,
    "run2_idx": 1707,
    "joint_number": 9430,
    "run1_distance": 33976.35,
    "run2_distance": 33987.05,
    "offset": 10.7
  },
  {
    "run1_idx": 1508,
    "run2_idx": 1726,
    "joint_number": 9440,
    "run1_distance": 34016.39,
    "run2_distance": 34027.19,
    "offset": 10.8
  },
  {
    "run1_idx": 1512,
    "run2_idx": 1731,
    "joint_number": 9450,
    "run1_distance": 34056.45,
    "run2_distance": 34067.3,
    "offset": 10.85
  },
  {
    "run1_idx": 1514,
    "run2_idx": 1746,
    "joint_number": 9460,
    "run1_distance": 34096.41,
    "run2_distance": 34107.43,
    "offset": 11.02
  },
  {
    "run1_idx": 1515,
    "run2_idx": 1751,
    "joint_number": 9470,
    "run1_distance": 34136.4,
    "run2_distance": 34147.51,
    "offset": 11.11
  },
  {
    "run1_idx": 1519,
    "run2_idx": 1756,
    "joint_number": 9480,
    "run1_distance": 34176.39,
    "run2_distance": 34187.65,
    "offset": 11.26
  },
  {
    "run1_idx": 1520,
    "run2_idx": 1763,
    "joint_number": 9490,
    "run1_distance": 34216.41,
    "run2_distance": 34227.74,
    "offset": 11.33
  },
  {
    "run1_idx": 1521,
    "run2_idx": 1764,
    "joint_number": 9500,
    "run1_distance": 34256.46,
    "run2_distance": 34267.84,
    "offset": 11.38
  },
  {
    "run1_idx": 1522,
    "run2_idx": 1765,
    "joint_number": 9510,
    "run1_distance": 34296.44,
    "run2_distance": 34307.96,
    "offset": 11.52
  },
  {
    "run1_idx": 1523,
    "run2_idx": 1766,
    "joint_number": 9520,
    "run1_distance": 34328.69,
    "run2_distance": 34348.08,
    "offset": 19.39
  },
  {
    "run1_idx": 1524,
    "run2_idx": 1767,
    "joint_number": 9530,
    "run1_distance": 34368.66,
    "run2_distance": 34380.39,
    "offset": 11.73
  },
  {
    "run1_idx": 1525,
    "run2_idx": 1768,
    "joint_number": 9540,
    "run1_distance": 34408.71,
    "run2_distance": 34420.43,
    "offset": 11.72
  },
  {
    "run1_idx": 1526,
    "run2_idx": 1769,
    "joint_number": 9550,
    "run1_distance": 34448.73,
    "run2_distance": 34460.57,
    "offset": 11.84
  },
  {
    "run1_idx": 1527,
    "run2_idx": 1770,
    "joint_number": 9560,
    "run1_distance": 34478.59,
    "run2_distance": 34500.61,
    "offset": 22.02
  },
  {
    "run1_idx": 1528,
    "run2_idx": 1771,
    "joint_number": 9570,
    "run1_distance": 34518.63,
    "run2_distance": 34530.51,
    "offset": 11.88
  },
  {
    "run1_idx": 1529,
    "run2_idx": 1772,
    "joint_number": 9580,
    "run1_distance": 34558.63,
    "run2_distance": 34570.59,
    "offset": 11.96
  },
  {
    "run1_idx": 1530,
    "run2_idx": 1773,
    "joint_number": 9590,
    "run1_distance": 34598.3,
    "run2_distance": 34610.66,
    "offset": 12.36
  },
  {
    "run1_idx": 1531,
    "run2_idx": 1774,
    "joint_number": 9600,
    "run1_distance": 34638.3,
    "run2_distance": 34650.35,
    "offset": 12.05
  },
  {
    "run1_idx": 1532,
    "run2_idx": 1776,
    "joint_number": 9610,
    "run1_distance": 34678.41,
    "run2_distance": 34690.59,
    "offset": 12.18
  },
  {
    "run1_idx": 1533,
    "run2_idx": 1777,
    "joint_number": 9620,
    "run1_distance": 34718.49,
    "run2_distance": 34730.66,
    "offset": 12.17
  },
  {
    "run1_idx": 1534,
    "run2_idx": 1778,
    "joint_number": 9630,
    "run1_distance": 34758.48,
    "run2_distance": 34770.73,
    "offset": 12.25
  },
  {
    "run1_idx": 1535,
    "run2_idx": 1779,
    "joint_number": 9640,
    "run1_distance": 34798.51,
    "run2_distance": 34810.79,
    "offset": 12.28
  },
  {
    "run1_idx": 1536,
    "run2_idx": 1780,
    "joint_number": 9650,
    "run1_distance": 34838.5,
    "run2_distance": 34850.86,
    "offset": 12.36
  },
  {
    "run1_idx": 1539,
    "run2_idx": 1781,
    "joint_number": 9660,
    "run1_distance": 34878.54,
    "run2_distance": 34890.95,
    "offset": 12.41
  },
  {
    "run1_idx": 1540,
    "run2_idx": 1784,
    "joint_number": 9670,
    "run1_distance": 34918.47,
    "run2_distance": 34930.98,
    "offset": 12.51
  },
  {
    "run1_idx": 1542,
    "run2_idx": 1786,
    "joint_number": 9680,
    "run1_distance": 34958.37,
    "run2_distance": 34971.09,
    "offset": 12.72
  },
  {
    "run1_idx": 1543,
    "run2_idx": 1788,
    "joint_number": 9690,
    "run1_distance": 34998.28,
    "run2_distance": 35011.22,
    "offset": 12.94
  },
  {
    "run1_idx": 1544,
    "run2_idx": 1789,
    "joint_number": 9700,
    "run1_distance": 35025.61,
    "run2_distance": 35051.44,
    "offset": 25.83
  },
  {
    "run1_idx": 1545,
    "run2_idx": 1791,
    "joint_number": 9710,
    "run1_distance": 35065.64,
    "run2_distance": 35078.89,
    "offset": 13.25
  },
  {
    "run1_idx": 1546,
    "run2_idx": 1792,
    "joint_number": 9720,
    "run1_distance": 35105.67,
    "run2_distance": 35118.91,
    "offset": 13.24
  },
  {
    "run1_idx": 1547,
    "run2_idx": 1793,
    "joint_number": 9730,
    "run1_distance": 35145.64,
    "run2_distance": 35158.92,
    "offset": 13.28
  },
  {
    "run1_idx": 1548,
    "run2_idx": 1794,
    "joint_number": 9740,
    "run1_distance": 35185.61,
    "run2_distance": 35198.99,
    "offset": 13.38
  },
  {
    "run1_idx": 1549,
    "run2_idx": 1795,
    "joint_number": 9750,
    "run1_distance": 35225.69,
    "run2_distance": 35239.07,
    "offset": 13.38
  },
  {
    "run1_idx": 1550,
    "run2_idx": 1796,
    "joint_number": 9760,
    "run1_distance": 35265.54,
    "run2_distance": 35279.3,
    "offset": 13.76
  },
  {
    "run1_idx": 1551,
    "run2_idx": 1797,
    "joint_number": 9770,
    "run1_distance": 35305.6,
    "run2_distance": 35319.37,
    "offset": 13.77
  },
  {
    "run1_idx": 1552,
    "run2_idx": 1798,
    "joint_number": 9780,
    "run1_distance": 35345.61,
    "run2_distance": 35359.46,
    "offset": 13.85
  },
  {
    "run1_idx": 1553,
    "run2_idx": 1799,
    "joint_number": 9790,
    "run1_distance": 35385.61,
    "run2_distance": 35399.57,
    "offset": 13.96
  },
  {
    "run1_idx": 1555,
    "run2_idx": 1800,
    "joint_number": 9810,
    "run1_distance": 35429.59,
    "run2_distance": 35439.64,
    "offset": 10.05
  },
  {
    "run1_idx": 1556,
    "run2_idx": 1801,
    "joint_number": 9820,
    "run1_distance": 35433.57,
    "run2_distance": 35443.69,
    "offset": 10.12
  },
  {
    "run1_idx": 1557,
    "run2_idx": 1802,
    "joint_number": 9830,
    "run1_distance": 35473.47,
    "run2_distance": 35483.61,
    "offset": 10.14
  },
  {
    "run1_idx": 1558,
    "run2_idx": 1803,
    "joint_number": 9840,
    "run1_distance": 35500.61,
    "run2_distance": 35487.68,
    "offset": -12.93
  },
  {
    "run1_idx": 1559,
    "run2_idx": 1804,
    "joint_number": 9850,
    "run1_distance": 35540.54,
    "run2_distance": 35527.67,
    "offset": -12.87
  },
  {
    "run1_idx": 1560,
    "run2_idx": 1806,
    "joint_number": 9860,
    "run1_distance": 35580.43,
    "run2_distance": 35595,
    "offset": 14.57
  },
  {
    "run1_idx": 1562,
    "run2_idx": 1807,
    "joint_number": 9870,
    "run1_distance": 35620.35,
    "run2_distance": 35634.99,
    "offset": 14.64
  },
  {
    "run1_idx": 1563,
    "run2_idx": 1809,
    "joint_number": 9880,
    "run1_distance": 35660.23,
    "run2_distance": 35675.02,
    "offset": 14.79
  },
  {
    "run1_idx": 1564,
    "run2_idx": 1810,
    "joint_number": 9890,
    "run1_distance": 35700.25,
    "run2_distance": 35715.04,
    "offset": 14.79
  },
  {
    "run1_idx": 1565,
    "run2_idx": 1811,
    "joint_number": 9900,
    "run1_distance": 35740.24,
    "run2_distance": 35755.13,
    "offset": 14.89
  },
  {
    "run1_idx": 1566,
    "run2_idx": 1814,
    "joint_number": 9910,
    "run1_distance": 35780.19,
    "run2_distance": 35795.19,
    "offset": 15
  },
  {
    "run1_idx": 1568,
    "run2_idx": 1815,
    "joint_number": 9920,
    "run1_distance": 35820.19,
    "run2_distance": 35835.21,
    "offset": 15.02
  },
  {
    "run1_idx": 1573,
    "run2_idx": 1818,
    "joint_number": 9930,
    "run1_distance": 35860.17,
    "run2_distance": 35875.25,
    "offset": 15.08
  },
  {
    "run1_idx": 1574,
    "run2_idx": 1826,
    "joint_number": 9940,
    "run1_distance": 35900.13,
    "run2_distance": 35915.28,
    "offset": 15.15
  },
  {
    "run1_idx": 1575,
    "run2_idx": 1827,
    "joint_number": 9950,
    "run1_distance": 35940.11,
    "run2_distance": 35955.32,
    "offset": 15.21
  },
  {
    "run1_idx": 1576,
    "run2_idx": 1832,
    "joint_number": 9960,
    "run1_distance": 35980.07,
    "run2_distance": 35995.37,
    "offset": 15.3
  },
  {
    "run1_idx": 1577,
    "run2_idx": 1833,
    "joint_number": 9970,
    "run1_distance": 36020,
    "run2_distance": 36035.4,
    "offset": 15.4
  },
  {
    "run1_idx": 1578,
    "run2_idx": 1834,
    "joint_number": 9980,
    "run1_distance": 36059.99,
    "run2_distance": 36075.4,
    "offset": 15.41
  },
  {
    "run1_idx": 1579,
    "run2_idx": 1835,
    "joint_number": 9990,
    "run1_distance": 36099.95,
    "run2_distance": 36115.4,
    "offset": 15.45
  },
  {
    "run1_idx": 1580,
    "run2_idx": 1836,
    "joint_number": 10000,
    "run1_distance": 36139.93,
    "run2_distance": 36155.42,
    "offset": 15.49
  },
  {
    "run1_idx": 1581,
    "run2_idx": 1837,
    "joint_number": 10010,
    "run1_distance": 36179.68,
    "run2_distance": 36195.43,
    "offset": 15.75
  },
  {
    "run1_idx": 1582,
    "run2_idx": 1838,
    "joint_number": 10020,
    "run1_distance": 36219.68,
    "run2_distance": 36235.3,
    "offset": 15.62
  },
  {
    "run1_idx": 1583,
    "run2_idx": 1839,
    "joint_number": 10030,
    "run1_distance": 36259.48,
    "run2_distance": 36275.38,
    "offset": 15.9
  },
  {
    "run1_idx": 1584,
    "run2_idx": 1840,
    "joint_number": 10040,
    "run1_distance": 36299.41,
    "run2_distance": 36315.25,
    "offset": 15.84
  },
  {
    "run1_idx": 1585,
    "run2_idx": 1841,
    "joint_number": 10050,
    "run1_distance": 36339.41,
    "run2_distance": 36355.29,
    "offset": 15.88
  },
  {
    "run1_idx": 1586,
    "run2_idx": 1842,
    "joint_number": 10060,
    "run1_distance": 36379.31,
    "run2_distance": 36395.33,
    "offset": 16.02
  },
  {
    "run1_idx": 1587,
    "run2_idx": 1843,
    "joint_number": 10070,
    "run1_distance": 36419.28,
    "run2_distance": 36435.4,
    "offset": 16.12
  },
  {
    "run1_idx": 1588,
    "run2_idx": 1844,
    "joint_number": 10080,
    "run1_distance": 36459.43,
    "run2_distance": 36475.42,
    "offset": 15.99
  },
  {
    "run1_idx": 1590,
    "run2_idx": 1846,
    "joint_number": 10090,
    "run1_distance": 36499.41,
    "run2_distance": 36515.6,
    "offset": 16.19
  },
  {
    "run1_idx": 1591,
    "run2_idx": 1847,
    "joint_number": 10100,
    "run1_distance": 36539.42,
    "run2_distance": 36555.63,
    "offset": 16.21
  },
  {
    "run1_idx": 1592,
    "run2_idx": 1848,
    "joint_number": 10110,
    "run1_distance": 36579.38,
    "run2_distance": 36595.7,
    "offset": 16.32
  },
  {
    "run1_idx": 1593,
    "run2_idx": 1849,
    "joint_number": 10120,
    "run1_distance": 36619.36,
    "run2_distance": 36635.75,
    "offset": 16.39
  },
  {
    "run1_idx": 1594,
    "run2_idx": 1850,
    "joint_number": 10130,
    "run1_distance": 36659.26,
    "run2_distance": 36675.78,
    "offset": 16.52
  },
  {
    "run1_idx": 1595,
    "run2_idx": 1851,
    "joint_number": 10140,
    "run1_distance": 36699.25,
    "run2_distance": 36715.72,
    "offset": 16.47
  },
  {
    "run1_idx": 1596,
    "run2_idx": 1852,
    "joint_number": 10150,
    "run1_distance": 36739.24,
    "run2_distance": 36755.77,
    "offset": 16.53
  },
  {
    "run1_idx": 1597,
    "run2_idx": 1853,
    "joint_number": 10160,
    "run1_distance": 36779.11,
    "run2_distance": 36795.82,
    "offset": 16.71
  },
  {
    "run1_idx": 1598,
    "run2_idx": 1854,
    "joint_number": 10170,
    "run1_distance": 36818.54,
    "run2_distance": 36835.78,
    "offset": 17.24
  },
  {
    "run1_idx": 1599,
    "run2_idx": 1855,
    "joint_number": 10180,
    "run1_distance": 36858.54,
    "run2_distance": 36875.25,
    "offset": 16.71
  },
  {
    "run1_idx": 1600,
    "run2_idx": 1856,
    "joint_number": 10190,
    "run1_distance": 36881.65,
    "run2_distance": 36915.31,
    "offset": 33.66
  },
  {
    "run1_idx": 1602,
    "run2_idx": 1857,
    "joint_number": 10200,
    "run1_distance": 36921.6,
    "run2_distance": 36938.46,
    "offset": 16.86
  },
  {
    "run1_idx": 1604,
    "run2_idx": 1858,
    "joint_number": 10210,
    "run1_distance": 36930.67,
    "run2_distance": 36978.65,
    "offset": 47.98
  },
  {
    "run1_idx": 1606,
    "run2_idx": 1860,
    "joint_number": 10230,
    "run1_distance": 36974.72,
    "run2_distance": 36987.19,
    "offset": 12.47
  },
  {
    "run1_idx": 1607,
    "run2_idx": 1863,
    "joint_number": 10240,
    "run1_distance": 37014.68,
    "run2_distance": 37031.8,
    "offset": 17.12
  },
  {
    "run1_idx": 1608,
    "run2_idx": 1864,
    "joint_number": 10250,
    "run1_distance": 37054.66,
    "run2_distance": 37071.86,
    "offset": 17.2
  },
  {
    "run1_idx": 1609,
    "run2_idx": 1865,
    "joint_number": 10260,
    "run1_distance": 37094.29,
    "run2_distance": 37111.88,
    "offset": 17.59
  },
  {
    "run1_idx": 1612,
    "run2_idx": 1866,
    "joint_number": 10280,
    "run1_distance": 37109.08,
    "run2_distance": 37151.6,
    "offset": 42.52
  },
  {
    "run1_idx": 1613,
    "run2_idx": 1867,
    "joint_number": 10290,
    "run1_distance": 37120.42,
    "run2_distance": 37158.67,
    "offset": 38.25
  },
  {
    "run1_idx": 1614,
    "run2_idx": 1869,
    "joint_number": 10300,
    "run1_distance": 37154.37,
    "run2_distance": 37166.54,
    "offset": 12.17
  },
  {
    "run1_idx": 1615,
    "run2_idx": 1870,
    "joint_number": 10310,
    "run1_distance": 37194.38,
    "run2_distance": 37178.28,
    "offset": -16.1
  },
  {
    "run1_idx": 1616,
    "run2_idx": 1872,
    "joint_number": 10320,
    "run1_distance": 37234.4,
    "run2_distance": 37252.48,
    "offset": 18.08
  },
  {
    "run1_idx": 1617,
    "run2_idx": 1873,
    "joint_number": 10330,
    "run1_distance": 37274.47,
    "run2_distance": 37292.62,
    "offset": 18.15
  },
  {
    "run1_idx": 1618,
    "run2_idx": 1874,
    "joint_number": 10340,
    "run1_distance": 37314.43,
    "run2_distance": 37332.78,
    "offset": 18.35
  },
  {
    "run1_idx": 1619,
    "run2_idx": 1875,
    "joint_number": 10350,
    "run1_distance": 37343.49,
    "run2_distance": 37372.91,
    "offset": 29.42
  },
  {
    "run1_idx": 1620,
    "run2_idx": 1876,
    "joint_number": 10360,
    "run1_distance": 37371.12,
    "run2_distance": 37402.01,
    "offset": 30.89
  },
  {
    "run1_idx": 1621,
    "run2_idx": 1877,
    "joint_number": 10370,
    "run1_distance": 37411.1,
    "run2_distance": 37429.69,
    "offset": 18.59
  },
  {
    "run1_idx": 1622,
    "run2_idx": 1878,
    "joint_number": 10380,
    "run1_distance": 37444.88,
    "run2_distance": 37469.69,
    "offset": 24.81
  },
  {
    "run1_idx": 1624,
    "run2_idx": 1879,
    "joint_number": 10390,
    "run1_distance": 37453.92,
    "run2_distance": 37503.68,
    "offset": 49.76
  },
  {
    "run1_idx": 1625,
    "run2_idx": 1881,
    "joint_number": 10400,
    "run1_distance": 37494,
    "run2_distance": 37512.34,
    "offset": 18.34
  },
  {
    "run1_idx": 1626,
    "run2_idx": 1882,
    "joint_number": 10410,
    "run1_distance": 37533.45,
    "run2_distance": 37552.97,
    "offset": 19.52
  },
  {
    "run1_idx": 1627,
    "run2_idx": 1883,
    "joint_number": 10420,
    "run1_distance": 37570.2,
    "run2_distance": 37592.52,
    "offset": 22.32
  },
  {
    "run1_idx": 1629,
    "run2_idx": 1884,
    "joint_number": 10430,
    "run1_distance": 37581.73,
    "run2_distance": 37629.51,
    "offset": 47.78
  },
  {
    "run1_idx": 1631,
    "run2_idx": 1886,
    "joint_number": 10450,
    "run1_distance": 37630.44,
    "run2_distance": 37640.54,
    "offset": 10.1
  },
  {
    "run1_idx": 1632,
    "run2_idx": 1887,
    "joint_number": 10460,
    "run1_distance": 37668.61,
    "run2_distance": 37649.5,
    "offset": -19.11
  },
  {
    "run1_idx": 1633,
    "run2_idx": 1888,
    "joint_number": 10470,
    "run1_distance": 37708.64,
    "run2_distance": 37689.58,
    "offset": -19.06
  },
  {
    "run1_idx": 1634,
    "run2_idx": 1890,
    "joint_number": 10480,
    "run1_distance": 37748.67,
    "run2_distance": 37767.92,
    "offset": 19.25
  },
  {
    "run1_idx": 1635,
    "run2_idx": 1891,
    "joint_number": 10490,
    "run1_distance": 37788.71,
    "run2_distance": 37808.01,
    "offset": 19.3
  },
  {
    "run1_idx": 1636,
    "run2_idx": 1892,
    "joint_number": 10500,
    "run1_distance": 37828.65,
    "run2_distance": 37848.13,
    "offset": 19.48
  },
  {
    "run1_idx": 1637,
    "run2_idx": 1893,
    "joint_number": 10510,
    "run1_distance": 37868.74,
    "run2_distance": 37888.2,
    "offset": 19.46
  },
  {
    "run1_idx": 1638,
    "run2_idx": 1894,
    "joint_number": 10520,
    "run1_distance": 37908.67,
    "run2_distance": 37928.4,
    "offset": 19.73
  },
  {
    "run1_idx": 1639,
    "run2_idx": 1896,
    "joint_number": 10530,
    "run1_distance": 37946.81,
    "run2_distance": 37968.41,
    "offset": 21.6
  },
  {
    "run1_idx": 1640,
    "run2_idx": 1897,
    "joint_number": 10540,
    "run1_distance": 37986.32,
    "run2_distance": 38006.65,
    "offset": 20.33
  },
  {
    "run1_idx": 1641,
    "run2_idx": 1898,
    "joint_number": 10550,
    "run1_distance": 38026.32,
    "run2_distance": 38046.21,
    "offset": 19.89
  },
  {
    "run1_idx": 1642,
    "run2_idx": 1900,
    "joint_number": 10560,
    "run1_distance": 38066.29,
    "run2_distance": 38086.25,
    "offset": 19.96
  },
  {
    "run1_idx": 1643,
    "run2_idx": 1901,
    "joint_number": 10570,
    "run1_distance": 38106.32,
    "run2_distance": 38126.28,
    "offset": 19.96
  },
  {
    "run1_idx": 1644,
    "run2_idx": 1902,
    "joint_number": 10580,
    "run1_distance": 38146.38,
    "run2_distance": 38166.35,
    "offset": 19.97
  },
  {
    "run1_idx": 1645,
    "run2_idx": 1903,
    "joint_number": 10590,
    "run1_distance": 38186.34,
    "run2_distance": 38206.46,
    "offset": 20.12
  },
  {
    "run1_idx": 1646,
    "run2_idx": 1904,
    "joint_number": 10600,
    "run1_distance": 38226.35,
    "run2_distance": 38246.49,
    "offset": 20.14
  },
  {
    "run1_idx": 1648,
    "run2_idx": 1905,
    "joint_number": 10620,
    "run1_distance": 38274.77,
    "run2_distance": 38286.53,
    "offset": 11.76
  },
  {
    "run1_idx": 1649,
    "run2_idx": 1906,
    "joint_number": 10630,
    "run1_distance": 38314.84,
    "run2_distance": 38294.94,
    "offset": -19.9
  },
  {
    "run1_idx": 1650,
    "run2_idx": 1907,
    "joint_number": 10640,
    "run1_distance": 38349.84,
    "run2_distance": 38335.03,
    "offset": -14.81
  },
  {
    "run1_idx": 1652,
    "run2_idx": 1909,
    "joint_number": 10650,
    "run1_distance": 38389.85,
    "run2_distance": 38375.14,
    "offset": -14.71
  },
  {
    "run1_idx": 1653,
    "run2_idx": 1910,
    "joint_number": 10660,
    "run1_distance": 38429.85,
    "run2_distance": 38410.21,
    "offset": -19.64
  },
  {
    "run1_idx": 1654,
    "run2_idx": 1914,
    "joint_number": 10670,
    "run1_distance": 38469.82,
    "run2_distance": 38450.29,
    "offset": -19.53
  },
  {
    "run1_idx": 1655,
    "run2_idx": 1915,
    "joint_number": 10680,
    "run1_distance": 38509.29,
    "run2_distance": 38490.36,
    "offset": -18.93
  },
  {
    "run1_idx": 1656,
    "run2_idx": 1916,
    "joint_number": 10690,
    "run1_distance": 38549.24,
    "run2_distance": 38530.47,
    "offset": -18.77
  },
  {
    "run1_idx": 1657,
    "run2_idx": 1917,
    "joint_number": 10700,
    "run1_distance": 38589.22,
    "run2_distance": 38570.01,
    "offset": -19.21
  },
  {
    "run1_idx": 1658,
    "run2_idx": 1918,
    "joint_number": 10710,
    "run1_distance": 38629.17,
    "run2_distance": 38610.06,
    "offset": -19.11
  },
  {
    "run1_idx": 1659,
    "run2_idx": 1920,
    "joint_number": 10720,
    "run1_distance": 38669.13,
    "run2_distance": 38650.08,
    "offset": -19.05
  },
  {
    "run1_idx": 1660,
    "run2_idx": 1921,
    "joint_number": 10730,
    "run1_distance": 38708.96,
    "run2_distance": 38690.09,
    "offset": -18.87
  },
  {
    "run1_idx": 1661,
    "run2_idx": 1922,
    "joint_number": 10740,
    "run1_distance": 38748.68,
    "run2_distance": 38730.26,
    "offset": -18.42
  },
  {
    "run1_idx": 1662,
    "run2_idx": 1923,
    "joint_number": 10750,
    "run1_distance": 38788.61,
    "run2_distance": 38770.29,
    "offset": -18.32
  },
  {
    "run1_idx": 1663,
    "run2_idx": 1924,
    "joint_number": 10760,
    "run1_distance": 38828.56,
    "run2_distance": 38810.24,
    "offset": -18.32
  },
  {
    "run1_idx": 1664,
    "run2_idx": 1925,
    "joint_number": 10770,
    "run1_distance": 38868.56,
    "run2_distance": 38850.28,
    "offset": -18.28
  },
  {
    "run1_idx": 1665,
    "run2_idx": 1926,
    "joint_number": 10780,
    "run1_distance": 38908.61,
    "run2_distance": 38890.3,
    "offset": -18.31
  },
  {
    "run1_idx": 1666,
    "run2_idx": 1927,
    "joint_number": 10790,
    "run1_distance": 38948.65,
    "run2_distance": 38930.33,
    "offset": -18.32
  },
  {
    "run1_idx": 1667,
    "run2_idx": 1928,
    "joint_number": 10800,
    "run1_distance": 38988.75,
    "run2_distance": 38970.38,
    "offset": -18.37
  },
  {
    "run1_idx": 1668,
    "run2_idx": 1929,
    "joint_number": 10810,
    "run1_distance": 38996.14,
    "run2_distance": 39010.42,
    "offset": 14.28
  },
  {
    "run1_idx": 1669,
    "run2_idx": 1930,
    "joint_number": 10820,
    "run1_distance": 39036.35,
    "run2_distance": 39050.26,
    "offset": 13.91
  },
  {
    "run1_idx": 1670,
    "run2_idx": 1931,
    "joint_number": 10830,
    "run1_distance": 39076.52,
    "run2_distance": 39057.63,
    "offset": -18.89
  },
  {
    "run1_idx": 1671,
    "run2_idx": 1932,
    "joint_number": 10840,
    "run1_distance": 39116.65,
    "run2_distance": 39097.66,
    "offset": -18.99
  },
  {
    "run1_idx": 1673,
    "run2_idx": 1933,
    "joint_number": 10850,
    "run1_distance": 39145.24,
    "run2_distance": 39137.61,
    "offset": -7.63
  },
  {
    "run1_idx": 1674,
    "run2_idx": 1938,
    "joint_number": 10860,
    "run1_distance": 39185.15,
    "run2_distance": 39177.57,
    "offset": -7.58
  },
  {
    "run1_idx": 1675,
    "run2_idx": 1940,
    "joint_number": 10870,
    "run1_distance": 39225.12,
    "run2_distance": 39206.2,
    "offset": -18.92
  },
  {
    "run1_idx": 1676,
    "run2_idx": 1941,
    "joint_number": 10880,
    "run1_distance": 39241.24,
    "run2_distance": 39246.19,
    "offset": 4.95
  },
  {
    "run1_idx": 1677,
    "run2_idx": 1942,
    "joint_number": 10890,
    "run1_distance": 39281.26,
    "run2_distance": 39286.35,
    "offset": 5.09
  },
  {
    "run1_idx": 1679,
    "run2_idx": 1943,
    "joint_number": 10900,
    "run1_distance": 39293.06,
    "run2_distance": 39302.45,
    "offset": 9.39
  },
  {
    "run1_idx": 1680,
    "run2_idx": 1944,
    "joint_number": 10910,
    "run1_distance": 39301.05,
    "run2_distance": 39342.55,
    "offset": 41.5
  },
  {
    "run1_idx": 1682,
    "run2_idx": 1946,
    "joint_number": 10920,
    "run1_distance": 39312.81,
    "run2_distance": 39353.74,
    "offset": 40.93
  },
  {
    "run1_idx": 1684,
    "run2_idx": 1947,
    "joint_number": 10930,
    "run1_distance": 39335.67,
    "run2_distance": 39362.25,
    "offset": 26.58
  },
  {
    "run1_idx": 1686,
    "run2_idx": 1949,
    "joint_number": 10940,
    "run1_distance": 39364.89,
    "run2_distance": 39373.55,
    "offset": 8.66
  },
  {
    "run1_idx": 1687,
    "run2_idx": 1953,
    "joint_number": 10950,
    "run1_distance": 39404.87,
    "run2_distance": 39396.95,
    "offset": -7.92
  },
  {
    "run1_idx": 1689,
    "run2_idx": 1955,
    "joint_number": 10960,
    "run1_distance": 39444.88,
    "run2_distance": 39426.13,
    "offset": -18.75
  },
  {
    "run1_idx": 1691,
    "run2_idx": 1956,
    "joint_number": 10970,
    "run1_distance": 39480.79,
    "run2_distance": 39466.11,
    "offset": -14.68
  },
  {
    "run1_idx": 1693,
    "run2_idx": 1968,
    "joint_number": 10980,
    "run1_distance": 39490.27,
    "run2_distance": 39506.16,
    "offset": 15.89
  },
  {
    "run1_idx": 1694,
    "run2_idx": 1973,
    "joint_number": 10990,
    "run1_distance": 39530.35,
    "run2_distance": 39542.28,
    "offset": 11.93
  },
  {
    "run1_idx": 1696,
    "run2_idx": 1975,
    "joint_number": 11000,
    "run1_distance": 39552.69,
    "run2_distance": 39551.34,
    "offset": -1.35
  },
  {
    "run1_idx": 1698,
    "run2_idx": 1979,
    "joint_number": 11010,
    "run1_distance": 39592.6,
    "run2_distance": 39592.06,
    "offset": -0.54
  },
  {
    "run1_idx": 1702,
    "run2_idx": 1982,
    "joint_number": 11020,
    "run1_distance": 39629.66,
    "run2_distance": 39614.43,
    "offset": -15.23
  },
  {
    "run1_idx": 1704,
    "run2_idx": 1992,
    "joint_number": 11030,
    "run1_distance": 39639.68,
    "run2_distance": 39654.64,
    "offset": 14.96
  },
  {
    "run1_idx": 1707,
    "run2_idx": 2002,
    "joint_number": 11040,
    "run1_distance": 39671.55,
    "run2_distance": 39691.9,
    "offset": 20.35
  },
  {
    "run1_idx": 1708,
    "run2_idx": 2004,
    "joint_number": 11050,
    "run1_distance": 39705.45,
    "run2_distance": 39701.69,
    "offset": -3.76
  },
  {
    "run1_idx": 1709,
    "run2_idx": 2008,
    "joint_number": 11060,
    "run1_distance": 39745.4,
    "run2_distance": 39734.03,
    "offset": -11.37
  },
  {
    "run1_idx": 1711,
    "run2_idx": 2009,
    "joint_number": 11070,
    "run1_distance": 39762.77,
    "run2_distance": 39768.01,
    "offset": 5.24
  },
  {
    "run1_idx": 1713,
    "run2_idx": 2011,
    "joint_number": 11080,
    "run1_distance": 39771.49,
    "run2_distance": 39808.08,
    "offset": 36.59
  },
  {
    "run1_idx": 1714,
    "run2_idx": 2013,
    "joint_number": 11090,
    "run1_distance": 39777.53,
    "run2_distance": 39825.67,
    "offset": 48.14
  },
  {
    "run1_idx": 1715,
    "run2_idx": 2015,
    "joint_number": 11100,
    "run1_distance": 39807.47,
    "run2_distance": 39833.98,
    "offset": 26.51
  },
  {
    "run1_idx": 1716,
    "run2_idx": 2016,
    "joint_number": 11110,
    "run1_distance": 39832.14,
    "run2_distance": 39840.32,
    "offset": 8.18
  },
  {
    "run1_idx": 1717,
    "run2_idx": 2017,
    "joint_number": 11120,
    "run1_distance": 39869.64,
    "run2_distance": 39870.3,
    "offset": 0.66
  },
  {
    "run1_idx": 1718,
    "run2_idx": 2018,
    "joint_number": 11130,
    "run1_distance": 39909.66,
    "run2_distance": 39894.99,
    "offset": -14.67
  },
  {
    "run1_idx": 1719,
    "run2_idx": 2019,
    "joint_number": 11140,
    "run1_distance": 39949.69,
    "run2_distance": 39932.53,
    "offset": -17.16
  },
  {
    "run1_idx": 1720,
    "run2_idx": 2020,
    "joint_number": 11150,
    "run1_distance": 39989.7,
    "run2_distance": 39972.6,
    "offset": -17.1
  },
  {
    "run1_idx": 1723,
    "run2_idx": 2021,
    "joint_number": 11160,
    "run1_distance": 40029.68,
    "run2_distance": 40012.65,
    "offset": -17.03
  },
  {
    "run1_idx": 1724,
    "run2_idx": 2022,
    "joint_number": 11170,
    "run1_distance": 40069.69,
    "run2_distance": 40052.7,
    "offset": -16.99
  },
  {
    "run1_idx": 1725,
    "run2_idx": 2023,
    "joint_number": 11180,
    "run1_distance": 40109.71,
    "run2_distance": 40092.71,
    "offset": -17
  },
  {
    "run1_idx": 1726,
    "run2_idx": 2025,
    "joint_number": 11190,
    "run1_distance": 40149.7,
    "run2_distance": 40132.67,
    "offset": -17.03
  },
  {
    "run1_idx": 1727,
    "run2_idx": 2026,
    "joint_number": 11200,
    "run1_distance": 40189.73,
    "run2_distance": 40172.76,
    "offset": -16.97
  },
  {
    "run1_idx": 1728,
    "run2_idx": 2027,
    "joint_number": 11210,
    "run1_distance": 40229.79,
    "run2_distance": 40212.83,
    "offset": -16.96
  },
  {
    "run1_idx": 1729,
    "run2_idx": 2028,
    "joint_number": 11220,
    "run1_distance": 40269.89,
    "run2_distance": 40252.94,
    "offset": -16.95
  },
  {
    "run1_idx": 1730,
    "run2_idx": 2029,
    "joint_number": 11230,
    "run1_distance": 40309.91,
    "run2_distance": 40293.06,
    "offset": -16.85
  },
  {
    "run1_idx": 1731,
    "run2_idx": 2030,
    "joint_number": 11240,
    "run1_distance": 40349.93,
    "run2_distance": 40333.22,
    "offset": -16.71
  },
  {
    "run1_idx": 1732,
    "run2_idx": 2031,
    "joint_number": 11250,
    "run1_distance": 40389.57,
    "run2_distance": 40373.34,
    "offset": -16.23
  },
  {
    "run1_idx": 1733,
    "run2_idx": 2032,
    "joint_number": 11260,
    "run1_distance": 40429.65,
    "run2_distance": 40413.43,
    "offset": -16.22
  },
  {
    "run1_idx": 1734,
    "run2_idx": 2033,
    "joint_number": 11270,
    "run1_distance": 40469.62,
    "run2_distance": 40453.15,
    "offset": -16.47
  },
  {
    "run1_idx": 1735,
    "run2_idx": 2034,
    "joint_number": 11280,
    "run1_distance": 40509.61,
    "run2_distance": 40493.28,
    "offset": -16.33
  },
  {
    "run1_idx": 1736,
    "run2_idx": 2035,
    "joint_number": 11290,
    "run1_distance": 40549.64,
    "run2_distance": 40533.31,
    "offset": -16.33
  },
  {
    "run1_idx": 1737,
    "run2_idx": 2036,
    "joint_number": 11300,
    "run1_distance": 40589.67,
    "run2_distance": 40573.39,
    "offset": -16.28
  },
  {
    "run1_idx": 1738,
    "run2_idx": 2037,
    "joint_number": 11310,
    "run1_distance": 40629.73,
    "run2_distance": 40613.46,
    "offset": -16.27
  },
  {
    "run1_idx": 1740,
    "run2_idx": 2038,
    "joint_number": 11320,
    "run1_distance": 40669.73,
    "run2_distance": 40653.54,
    "offset": -16.19
  },
  {
    "run1_idx": 1742,
    "run2_idx": 2039,
    "joint_number": 11330,
    "run1_distance": 40678.32,
    "run2_distance": 40693.57,
    "offset": 15.25
  },
  {
    "run1_idx": 1743,
    "run2_idx": 2043,
    "joint_number": 11340,
    "run1_distance": 40688.46,
    "run2_distance": 40733.61,
    "offset": 45.15
  },
  {
    "run1_idx": 1745,
    "run2_idx": 2045,
    "joint_number": 11350,
    "run1_distance": 40699.15,
    "run2_distance": 40741.62,
    "offset": 42.47
  },
  {
    "run1_idx": 1746,
    "run2_idx": 2050,
    "joint_number": 11360,
    "run1_distance": 40739.16,
    "run2_distance": 40752.36,
    "offset": 13.2
  },
  {
    "run1_idx": 1747,
    "run2_idx": 2052,
    "joint_number": 11370,
    "run1_distance": 40761.14,
    "run2_distance": 40762.44,
    "offset": 1.3
  },
  {
    "run1_idx": 1748,
    "run2_idx": 2053,
    "joint_number": 11380,
    "run1_distance": 40801.09,
    "run2_distance": 40802.97,
    "offset": 1.88
  },
  {
    "run1_idx": 1749,
    "run2_idx": 2054,
    "joint_number": 11390,
    "run1_distance": 40830.31,
    "run2_distance": 40824.91,
    "offset": -5.4
  },
  {
    "run1_idx": 1750,
    "run2_idx": 2055,
    "joint_number": 11400,
    "run1_distance": 40870.34,
    "run2_distance": 40864.83,
    "offset": -5.51
  },
  {
    "run1_idx": 1751,
    "run2_idx": 2056,
    "joint_number": 11410,
    "run1_distance": 40910.33,
    "run2_distance": 40894.01,
    "offset": -16.32
  },
  {
    "run1_idx": 1752,
    "run2_idx": 2057,
    "joint_number": 11420,
    "run1_distance": 40950.25,
    "run2_distance": 40934.06,
    "offset": -16.19
  },
  {
    "run1_idx": 1753,
    "run2_idx": 2058,
    "joint_number": 11430,
    "run1_distance": 40990.2,
    "run2_distance": 40974.17,
    "offset": -16.03
  },
  {
    "run1_idx": 1755,
    "run2_idx": 2068,
    "joint_number": 11440,
    "run1_distance": 41030.11,
    "run2_distance": 41014.25,
    "offset": -15.86
  },
  {
    "run1_idx": 1756,
    "run2_idx": 2069,
    "joint_number": 11450,
    "run1_distance": 41070.06,
    "run2_distance": 41054.38,
    "offset": -15.68
  },
  {
    "run1_idx": 1757,
    "run2_idx": 2070,
    "joint_number": 11460,
    "run1_distance": 41110.07,
    "run2_distance": 41094.39,
    "offset": -15.68
  },
  {
    "run1_idx": 1759,
    "run2_idx": 2071,
    "joint_number": 11470,
    "run1_distance": 41146.22,
    "run2_distance": 41134.46,
    "offset": -11.76
  },
  {
    "run1_idx": 1765,
    "run2_idx": 2072,
    "joint_number": 11480,
    "run1_distance": 41186.18,
    "run2_distance": 41174.52,
    "offset": -11.66
  },
  {
    "run1_idx": 1766,
    "run2_idx": 2074,
    "joint_number": 11490,
    "run1_distance": 41226.16,
    "run2_distance": 41210.73,
    "offset": -15.43
  },
  {
    "run1_idx": 1767,
    "run2_idx": 2078,
    "joint_number": 11500,
    "run1_distance": 41266.15,
    "run2_distance": 41250.77,
    "offset": -15.38
  },
  {
    "run1_idx": 1768,
    "run2_idx": 2079,
    "joint_number": 11510,
    "run1_distance": 41306.08,
    "run2_distance": 41290.83,
    "offset": -15.25
  },
  {
    "run1_idx": 1769,
    "run2_idx": 2080,
    "joint_number": 11520,
    "run1_distance": 41346.07,
    "run2_distance": 41330.92,
    "offset": -15.15
  },
  {
    "run1_idx": 1770,
    "run2_idx": 2081,
    "joint_number": 11530,
    "run1_distance": 41386.16,
    "run2_distance": 41371.02,
    "offset": -15.14
  },
  {
    "run1_idx": 1771,
    "run2_idx": 2082,
    "joint_number": 11540,
    "run1_distance": 41425.47,
    "run2_distance": 41411.11,
    "offset": -14.36
  },
  {
    "run1_idx": 1772,
    "run2_idx": 2083,
    "joint_number": 11550,
    "run1_distance": 41465.45,
    "run2_distance": 41451.18,
    "offset": -14.27
  },
  {
    "run1_idx": 1784,
    "run2_idx": 2084,
    "joint_number": 11560,
    "run1_distance": 41505.39,
    "run2_distance": 41490.6,
    "offset": -14.79
  },
  {
    "run1_idx": 1787,
    "run2_idx": 2129,
    "joint_number": 11570,
    "run1_distance": 41545.34,
    "run2_distance": 41530.68,
    "offset": -14.66
  },
  {
    "run1_idx": 1791,
    "run2_idx": 2167,
    "joint_number": 11580,
    "run1_distance": 41585.28,
    "run2_distance": 41570.76,
    "offset": -14.52
  },
  {
    "run1_idx": 1804,
    "run2_idx": 2178,
    "joint_number": 11590,
    "run1_distance": 41625.37,
    "run2_distance": 41610.83,
    "offset": -14.54
  },
  {
    "run1_idx": 1823,
    "run2_idx": 2192,
    "joint_number": 11600,
    "run1_distance": 41665.39,
    "run2_distance": 41650.82,
    "offset": -14.57
  },
  {
    "run1_idx": 1826,
    "run2_idx": 2278,
    "joint_number": 11610,
    "run1_distance": 41678.56,
    "run2_distance": 41690.92,
    "offset": 12.36
  },
  {
    "run1_idx": 1831,
    "run2_idx": 2410,
    "joint_number": 11620,
    "run1_distance": 41705.44,
    "run2_distance": 41730.9,
    "offset": 25.46
  },
  {
    "run1_idx": 1835,
    "run2_idx": 2422,
    "joint_number": 11630,
    "run1_distance": 41745.43,
    "run2_distance": 41744.11,
    "offset": -1.32
  },
  {
    "run1_idx": 1839,
    "run2_idx": 2440,
    "joint_number": 11640,
    "run1_distance": 41785.36,
    "run2_distance": 41770.93,
    "offset": -14.43
  },
  {
    "run1_idx": 1842,
    "run2_idx": 2449,
    "joint_number": 11650,
    "run1_distance": 41825.08,
    "run2_distance": 41811.06,
    "offset": -14.02
  },
  {
    "run1_idx": 1843,
    "run2_idx": 2455,
    "joint_number": 11660,
    "run1_distance": 41865.05,
    "run2_distance": 41851.22,
    "offset": -13.83
  },
  {
    "run1_idx": 1845,
    "run2_idx": 2459,
    "joint_number": 11670,
    "run1_distance": 41905.04,
    "run2_distance": 41891.05,
    "offset": -13.99
  },
  {
    "run1_idx": 1846,
    "run2_idx": 2461,
    "joint_number": 11680,
    "run1_distance": 41944.95,
    "run2_distance": 41931.07,
    "offset": -13.88
  },
  {
    "run1_idx": 1847,
    "run2_idx": 2466,
    "joint_number": 11690,
    "run1_distance": 41984.91,
    "run2_distance": 41971.16,
    "offset": -13.75
  },
  {
    "run1_idx": 1848,
    "run2_idx": 2470,
    "joint_number": 11700,
    "run1_distance": 42024.83,
    "run2_distance": 42011.22,
    "offset": -13.61
  },
  {
    "run1_idx": 1849,
    "run2_idx": 2471,
    "joint_number": 11710,
    "run1_distance": 42064.76,
    "run2_distance": 42051.27,
    "offset": -13.49
  },
  {
    "run1_idx": 1850,
    "run2_idx": 2472,
    "joint_number": 11720,
    "run1_distance": 42104.81,
    "run2_distance": 42091.21,
    "offset": -13.6
  },
  {
    "run1_idx": 1851,
    "run2_idx": 2473,
    "joint_number": 11730,
    "run1_distance": 42144.82,
    "run2_distance": 42131.19,
    "offset": -13.63
  },
  {
    "run1_idx": 1852,
    "run2_idx": 2474,
    "joint_number": 11740,
    "run1_distance": 42184.89,
    "run2_distance": 42171.26,
    "offset": -13.63
  },
  {
    "run1_idx": 1853,
    "run2_idx": 2475,
    "joint_number": 11750,
    "run1_distance": 42224.88,
    "run2_distance": 42211.27,
    "offset": -13.61
  },
  {
    "run1_idx": 1855,
    "run2_idx": 2476,
    "joint_number": 11760,
    "run1_distance": 42264.86,
    "run2_distance": 42251.5,
    "offset": -13.36
  },
  {
    "run1_idx": 1857,
    "run2_idx": 2477,
    "joint_number": 11770,
    "run1_distance": 42274.71,
    "run2_distance": 42291.63,
    "offset": 16.92
  },
  {
    "run1_idx": 1858,
    "run2_idx": 2478,
    "joint_number": 11780,
    "run1_distance": 42298.11,
    "run2_distance": 42331.79,
    "offset": 33.68
  },
  {
    "run1_idx": 1859,
    "run2_idx": 2480,
    "joint_number": 11790,
    "run1_distance": 42338.07,
    "run2_distance": 42340.93,
    "offset": 2.86
  },
  {
    "run1_idx": 1860,
    "run2_idx": 2482,
    "joint_number": 11800,
    "run1_distance": 42378.12,
    "run2_distance": 42364.76,
    "offset": -13.36
  },
  {
    "run1_idx": 1861,
    "run2_idx": 2483,
    "joint_number": 11810,
    "run1_distance": 42418.14,
    "run2_distance": 42404.84,
    "offset": -13.3
  },
  {
    "run1_idx": 1862,
    "run2_idx": 2484,
    "joint_number": 11820,
    "run1_distance": 42458.14,
    "run2_distance": 42444.96,
    "offset": -13.18
  },
  {
    "run1_idx": 1863,
    "run2_idx": 2485,
    "joint_number": 11830,
    "run1_distance": 42467.5,
    "run2_distance": 42485.12,
    "offset": 17.62
  },
  {
    "run1_idx": 1864,
    "run2_idx": 2486,
    "joint_number": 11840,
    "run1_distance": 42507.69,
    "run2_distance": 42525.19,
    "offset": 17.5
  },
  {
    "run1_idx": 1865,
    "run2_idx": 2487,
    "joint_number": 11850,
    "run1_distance": 42547.83,
    "run2_distance": 42534.56,
    "offset": -13.27
  },
  {
    "run1_idx": 1866,
    "run2_idx": 2490,
    "joint_number": 11860,
    "run1_distance": 42587.8,
    "run2_distance": 42574.72,
    "offset": -13.08
  },
  {
    "run1_idx": 1867,
    "run2_idx": 2491,
    "joint_number": 11870,
    "run1_distance": 42627.69,
    "run2_distance": 42614.97,
    "offset": -12.72
  },
  {
    "run1_idx": 1868,
    "run2_idx": 2492,
    "joint_number": 11880,
    "run1_distance": 42667.62,
    "run2_distance": 42655,
    "offset": -12.62
  },
  {
    "run1_idx": 1869,
    "run2_idx": 2493,
    "joint_number": 11890,
    "run1_distance": 42707.6,
    "run2_distance": 42694.97,
    "offset": -12.63
  },
  {
    "run1_idx": 1870,
    "run2_idx": 2494,
    "joint_number": 11900,
    "run1_distance": 42747.59,
    "run2_distance": 42735.03,
    "offset": -12.56
  },
  {
    "run1_idx": 1871,
    "run2_idx": 2495,
    "joint_number": 11910,
    "run1_distance": 42787.6,
    "run2_distance": 42775.12,
    "offset": -12.48
  },
  {
    "run1_idx": 1872,
    "run2_idx": 2496,
    "joint_number": 11920,
    "run1_distance": 42827.58,
    "run2_distance": 42815.11,
    "offset": -12.47
  },
  {
    "run1_idx": 1873,
    "run2_idx": 2497,
    "joint_number": 11930,
    "run1_distance": 42867.61,
    "run2_distance": 42855.19,
    "offset": -12.42
  },
  {
    "run1_idx": 1874,
    "run2_idx": 2498,
    "joint_number": 11940,
    "run1_distance": 42907.62,
    "run2_distance": 42895.13,
    "offset": -12.49
  },
  {
    "run1_idx": 1875,
    "run2_idx": 2499,
    "joint_number": 11950,
    "run1_distance": 42935.11,
    "run2_distance": 42935.16,
    "offset": 0.05
  },
  {
    "run1_idx": 1876,
    "run2_idx": 2501,
    "joint_number": 11960,
    "run1_distance": 42955.37,
    "run2_distance": 42975.2,
    "offset": 19.83
  },
  {
    "run1_idx": 1877,
    "run2_idx": 2502,
    "joint_number": 11970,
    "run1_distance": 42995.32,
    "run2_distance": 43002.72,
    "offset": 7.4
  },
  {
    "run1_idx": 1878,
    "run2_idx": 2503,
    "joint_number": 11980,
    "run1_distance": 43035.33,
    "run2_distance": 43023.01,
    "offset": -12.32
  },
  {
    "run1_idx": 1879,
    "run2_idx": 2504,
    "joint_number": 11990,
    "run1_distance": 43075.2,
    "run2_distance": 43063.05,
    "offset": -12.15
  },
  {
    "run1_idx": 1880,
    "run2_idx": 2505,
    "joint_number": 12000,
    "run1_distance": 43104.53,
    "run2_distance": 43103.13,
    "offset": -1.4
  },
  {
    "run1_idx": 1881,
    "run2_idx": 2506,
    "joint_number": 12010,
    "run1_distance": 43111.19,
    "run2_distance": 43143.07,
    "offset": 31.88
  },
  {
    "run1_idx": 1882,
    "run2_idx": 2508,
    "joint_number": 12020,
    "run1_distance": 43151.13,
    "run2_distance": 43172.44,
    "offset": 21.31
  },
  {
    "run1_idx": 1883,
    "run2_idx": 2509,
    "joint_number": 12030,
    "run1_distance": 43170.76,
    "run2_distance": 43179.12,
    "offset": 8.36
  },
  {
    "run1_idx": 1885,
    "run2_idx": 2510,
    "joint_number": 12040,
    "run1_distance": 43181.15,
    "run2_distance": 43219.12,
    "offset": 37.97
  },
  {
    "run1_idx": 1886,
    "run2_idx": 2511,
    "joint_number": 12050,
    "run1_distance": 43216.77,
    "run2_distance": 43238.9,
    "offset": 22.13
  },
  {
    "run1_idx": 1887,
    "run2_idx": 2513,
    "joint_number": 12060,
    "run1_distance": 43256.8,
    "run2_distance": 43248.85,
    "offset": -7.95
  },
  {
    "run1_idx": 1888,
    "run2_idx": 2514,
    "joint_number": 12070,
    "run1_distance": 43296.76,
    "run2_distance": 43284.79,
    "offset": -11.97
  },
  {
    "run1_idx": 1889,
    "run2_idx": 2515,
    "joint_number": 12080,
    "run1_distance": 43336.69,
    "run2_distance": 43324.93,
    "offset": -11.76
  },
  {
    "run1_idx": 1890,
    "run2_idx": 2516,
    "joint_number": 12090,
    "run1_distance": 43376.72,
    "run2_distance": 43364.96,
    "offset": -11.76
  },
  {
    "run1_idx": 1891,
    "run2_idx": 2517,
    "joint_number": 12100,
    "run1_distance": 43416.72,
    "run2_distance": 43404.96,
    "offset": -11.76
  },
  {
    "run1_idx": 1892,
    "run2_idx": 2518,
    "joint_number": 12110,
    "run1_distance": 43456.64,
    "run2_distance": 43445.07,
    "offset": -11.57
  },
  {
    "run1_idx": 1893,
    "run2_idx": 2519,
    "joint_number": 12120,
    "run1_distance": 43496.58,
    "run2_distance": 43485.18,
    "offset": -11.4
  },
  {
    "run1_idx": 1894,
    "run2_idx": 2520,
    "joint_number": 12130,
    "run1_distance": 43517.05,
    "run2_distance": 43525.21,
    "offset": 8.16
  },
  {
    "run1_idx": 1895,
    "run2_idx": 2521,
    "joint_number": 12140,
    "run1_distance": 43557.15,
    "run2_distance": 43565.27,
    "offset": 8.12
  },
  {
    "run1_idx": 1896,
    "run2_idx": 2523,
    "joint_number": 12150,
    "run1_distance": 43597.12,
    "run2_distance": 43585.88,
    "offset": -11.24
  },
  {
    "run1_idx": 1898,
    "run2_idx": 2526,
    "joint_number": 12160,
    "run1_distance": 43636.59,
    "run2_distance": 43626.03,
    "offset": -10.56
  },
  {
    "run1_idx": 1900,
    "run2_idx": 2527,
    "joint_number": 12170,
    "run1_distance": 43676.68,
    "run2_distance": 43666.13,
    "offset": -10.55
  },
  {
    "run1_idx": 1902,
    "run2_idx": 2531,
    "joint_number": 12180,
    "run1_distance": 43716.71,
    "run2_distance": 43705.68,
    "offset": -11.03
  },
  {
    "run1_idx": 1903,
    "run2_idx": 2542,
    "joint_number": 12190,
    "run1_distance": 43744.64,
    "run2_distance": 43745.88,
    "offset": 1.24
  },
  {
    "run1_idx": 1904,
    "run2_idx": 2554,
    "joint_number": 12200,
    "run1_distance": 43784.67,
    "run2_distance": 43785.98,
    "offset": 1.31
  },
  {
    "run1_idx": 1905,
    "run2_idx": 2555,
    "joint_number": 12210,
    "run1_distance": 43824.68,
    "run2_distance": 43814,
    "offset": -10.68
  },
  {
    "run1_idx": 1906,
    "run2_idx": 2557,
    "joint_number": 12220,
    "run1_distance": 43864.61,
    "run2_distance": 43854.11,
    "offset": -10.5
  },
  {
    "run1_idx": 1907,
    "run2_idx": 2558,
    "joint_number": 12230,
    "run1_distance": 43904.53,
    "run2_distance": 43894.19,
    "offset": -10.34
  },
  {
    "run1_idx": 1912,
    "run2_idx": 2559,
    "joint_number": 12240,
    "run1_distance": 43944.39,
    "run2_distance": 43934.18,
    "offset": -10.21
  },
  {
    "run1_idx": 1922,
    "run2_idx": 2560,
    "joint_number": 12250,
    "run1_distance": 43984.57,
    "run2_distance": 43974.21,
    "offset": -10.36
  },
  {
    "run1_idx": 1924,
    "run2_idx": 2634,
    "joint_number": 12260,
    "run1_distance": 44024.57,
    "run2_distance": 44014.1,
    "offset": -10.47
  },
  {
    "run1_idx": 1925,
    "run2_idx": 2678,
    "joint_number": 12270,
    "run1_distance": 44055.69,
    "run2_distance": 44054.38,
    "offset": -1.31
  },
  {
    "run1_idx": 1928,
    "run2_idx": 2684,
    "joint_number": 12280,
    "run1_distance": 44095.66,
    "run2_distance": 44094.45,
    "offset": -1.21
  },
  {
    "run1_idx": 1931,
    "run2_idx": 2685,
    "joint_number": 12290,
    "run1_distance": 44135.55,
    "run2_distance": 44125.63,
    "offset": -9.92
  },
  {
    "run1_idx": 1932,
    "run2_idx": 2688,
    "joint_number": 12300,
    "run1_distance": 44175.53,
    "run2_distance": 44165.64,
    "offset": -9.89
  },
  {
    "run1_idx": 1934,
    "run2_idx": 2696,
    "joint_number": 12310,
    "run1_distance": 44215.54,
    "run2_distance": 44205.6,
    "offset": -9.94
  },
  {
    "run1_idx": 1935,
    "run2_idx": 2697,
    "joint_number": 12320,
    "run1_distance": 44255.55,
    "run2_distance": 44245.65,
    "offset": -9.9
  },
  {
    "run1_idx": 1936,
    "run2_idx": 2698,
    "joint_number": 12330,
    "run1_distance": 44295.57,
    "run2_distance": 44285.73,
    "offset": -9.84
  },
  {
    "run1_idx": 1937,
    "run2_idx": 2700,
    "joint_number": 12340,
    "run1_distance": 44335.56,
    "run2_distance": 44325.79,
    "offset": -9.77
  },
  {
    "run1_idx": 1938,
    "run2_idx": 2701,
    "joint_number": 12350,
    "run1_distance": 44375.54,
    "run2_distance": 44365.86,
    "offset": -9.68
  },
  {
    "run1_idx": 1939,
    "run2_idx": 2702,
    "joint_number": 12360,
    "run1_distance": 44415.58,
    "run2_distance": 44405.93,
    "offset": -9.65
  },
  {
    "run1_idx": 1940,
    "run2_idx": 2703,
    "joint_number": 12370,
    "run1_distance": 44455.58,
    "run2_distance": 44445.98,
    "offset": -9.6
  },
  {
    "run1_idx": 1941,
    "run2_idx": 2704,
    "joint_number": 12380,
    "run1_distance": 44495.61,
    "run2_distance": 44486.05,
    "offset": -9.56
  },
  {
    "run1_idx": 1942,
    "run2_idx": 2705,
    "joint_number": 12390,
    "run1_distance": 44535.64,
    "run2_distance": 44526.14,
    "offset": -9.5
  },
  {
    "run1_idx": 1943,
    "run2_idx": 2706,
    "joint_number": 12400,
    "run1_distance": 44558.85,
    "run2_distance": 44566.22,
    "offset": 7.37
  },
  {
    "run1_idx": 1944,
    "run2_idx": 2707,
    "joint_number": 12410,
    "run1_distance": 44598.87,
    "run2_distance": 44606.29,
    "offset": 7.42
  },
  {
    "run1_idx": 1945,
    "run2_idx": 2708,
    "joint_number": 12420,
    "run1_distance": 44638.93,
    "run2_distance": 44629.55,
    "offset": -9.38
  },
  {
    "run1_idx": 1951,
    "run2_idx": 2709,
    "joint_number": 12430,
    "run1_distance": 44677.96,
    "run2_distance": 44669.66,
    "offset": -8.3
  },
  {
    "run1_idx": 1958,
    "run2_idx": 2716,
    "joint_number": 12440,
    "run1_distance": 44718.17,
    "run2_distance": 44709.74,
    "offset": -8.43
  },
  {
    "run1_idx": 1960,
    "run2_idx": 2760,
    "joint_number": 12450,
    "run1_distance": 44758.11,
    "run2_distance": 44748.75,
    "offset": -9.36
  },
  {
    "run1_idx": 1961,
    "run2_idx": 2793,
    "joint_number": 12460,
    "run1_distance": 44798.13,
    "run2_distance": 44788.82,
    "offset": -9.31
  },
  {
    "run1_idx": 1962,
    "run2_idx": 2798,
    "joint_number": 12470,
    "run1_distance": 44838.22,
    "run2_distance": 44828.89,
    "offset": -9.33
  },
  {
    "run1_idx": 1963,
    "run2_idx": 2800,
    "joint_number": 12480,
    "run1_distance": 44878.09,
    "run2_distance": 44868.95,
    "offset": -9.14
  },
  {
    "run1_idx": 1964,
    "run2_idx": 2812,
    "joint_number": 12490,
    "run1_distance": 44918.03,
    "run2_distance": 44909.02,
    "offset": -9.01
  },
  {
    "run1_idx": 1967,
    "run2_idx": 2814,
    "joint_number": 12500,
    "run1_distance": 44958.08,
    "run2_distance": 44948.89,
    "offset": -9.19
  },
  {
    "run1_idx": 1970,
    "run2_idx": 2816,
    "joint_number": 12510,
    "run1_distance": 44998.21,
    "run2_distance": 44988.84,
    "offset": -9.37
  },
  {
    "run1_idx": 1972,
    "run2_idx": 2821,
    "joint_number": 12520,
    "run1_distance": 45038.35,
    "run2_distance": 45028.93,
    "offset": -9.42
  },
  {
    "run1_idx": 1973,
    "run2_idx": 2828,
    "joint_number": 12530,
    "run1_distance": 45078.33,
    "run2_distance": 45069.09,
    "offset": -9.24
  },
  {
    "run1_idx": 1974,
    "run2_idx": 2854,
    "joint_number": 12540,
    "run1_distance": 45111.38,
    "run2_distance": 45109.23,
    "offset": -2.15
  },
  {
    "run1_idx": 1977,
    "run2_idx": 2856,
    "joint_number": 12550,
    "run1_distance": 45133.57,
    "run2_distance": 45149.27,
    "offset": 15.7
  },
  {
    "run1_idx": 1982,
    "run2_idx": 2865,
    "joint_number": 12560,
    "run1_distance": 45173.61,
    "run2_distance": 45182.34,
    "offset": 8.73
  },
  {
    "run1_idx": 1985,
    "run2_idx": 2877,
    "joint_number": 12570,
    "run1_distance": 45180.28,
    "run2_distance": 45204.55,
    "offset": 24.27
  },
  {
    "run1_idx": 1986,
    "run2_idx": 2891,
    "joint_number": 12580,
    "run1_distance": 45220.19,
    "run2_distance": 45244.73,
    "offset": 24.54
  },
  {
    "run1_idx": 1987,
    "run2_idx": 2895,
    "joint_number": 12590,
    "run1_distance": 45260.07,
    "run2_distance": 45251.43,
    "offset": -8.64
  },
  {
    "run1_idx": 1988,
    "run2_idx": 2896,
    "joint_number": 12600,
    "run1_distance": 45300.06,
    "run2_distance": 45291.71,
    "offset": -8.35
  },
  {
    "run1_idx": 1989,
    "run2_idx": 2897,
    "joint_number": 12610,
    "run1_distance": 45340.05,
    "run2_distance": 45331.8,
    "offset": -8.25
  },
  {
    "run1_idx": 1990,
    "run2_idx": 2902,
    "joint_number": 12620,
    "run1_distance": 45380.06,
    "run2_distance": 45371.88,
    "offset": -8.18
  },
  {
    "run1_idx": 1991,
    "run2_idx": 2903,
    "joint_number": 12630,
    "run1_distance": 45420.08,
    "run2_distance": 45411.96,
    "offset": -8.12
  },
  {
    "run1_idx": 1992,
    "run2_idx": 2904,
    "joint_number": 12640,
    "run1_distance": 45460.13,
    "run2_distance": 45452,
    "offset": -8.13
  },
  {
    "run1_idx": 1993,
    "run2_idx": 2905,
    "joint_number": 12650,
    "run1_distance": 45500.14,
    "run2_distance": 45492.04,
    "offset": -8.1
  },
  {
    "run1_idx": 1994,
    "run2_idx": 2906,
    "joint_number": 12660,
    "run1_distance": 45540.18,
    "run2_distance": 45532.1,
    "offset": -8.08
  },
  {
    "run1_idx": 1996,
    "run2_idx": 2907,
    "joint_number": 12670,
    "run1_distance": 45548.71,
    "run2_distance": 45572.1,
    "offset": 23.39
  },
  {
    "run1_idx": 1997,
    "run2_idx": 2908,
    "joint_number": 12680,
    "run1_distance": 45588.7,
    "run2_distance": 45612.3,
    "offset": 23.6
  },
  {
    "run1_idx": 1998,
    "run2_idx": 2910,
    "joint_number": 12690,
    "run1_distance": 45609.98,
    "run2_distance": 45620.49,
    "offset": 10.51
  },
  {
    "run1_idx": 1999,
    "run2_idx": 2911,
    "joint_number": 12700,
    "run1_distance": 45650.07,
    "run2_distance": 45660.91,
    "offset": 10.84
  },
  {
    "run1_idx": 2000,
    "run2_idx": 2912,
    "joint_number": 12710,
    "run1_distance": 45675.6,
    "run2_distance": 45682.2,
    "offset": 6.6
  },
  {
    "run1_idx": 2002,
    "run2_idx": 2913,
    "joint_number": 12720,
    "run1_distance": 45715.64,
    "run2_distance": 45722.26,
    "offset": 6.62
  },
  {
    "run1_idx": 2003,
    "run2_idx": 2914,
    "joint_number": 12730,
    "run1_distance": 45740.89,
    "run2_distance": 45747.8,
    "offset": 6.91
  },
  {
    "run1_idx": 2004,
    "run2_idx": 2920,
    "joint_number": 12740,
    "run1_distance": 45780.89,
    "run2_distance": 45787.83,
    "offset": 6.94
  },
  {
    "run1_idx": 2005,
    "run2_idx": 2922,
    "joint_number": 12750,
    "run1_distance": 45820.83,
    "run2_distance": 45813.06,
    "offset": -7.77
  },
  {
    "run1_idx": 2006,
    "run2_idx": 2924,
    "joint_number": 12760,
    "run1_distance": 45839.28,
    "run2_distance": 45853.08,
    "offset": 13.8
  },
  {
    "run1_idx": 2007,
    "run2_idx": 2925,
    "joint_number": 12770,
    "run1_distance": 45879.24,
    "run2_distance": 45893.11,
    "offset": 13.87
  },
  {
    "run1_idx": 2008,
    "run2_idx": 2926,
    "joint_number": 12780,
    "run1_distance": 45911.1,
    "run2_distance": 45911.58,
    "offset": 0.48
  },
  {
    "run1_idx": 2011,
    "run2_idx": 2927,
    "joint_number": 12790,
    "run1_distance": 45951.07,
    "run2_distance": 45951.67,
    "offset": 0.6
  },
  {
    "run1_idx": 2014,
    "run2_idx": 2928,
    "joint_number": 12800,
    "run1_distance": 45990.9,
    "run2_distance": 45983.47,
    "offset": -7.43
  },
  {
    "run1_idx": 2015,
    "run2_idx": 2930,
    "joint_number": 12810,
    "run1_distance": 46030.7,
    "run2_distance": 46023.58,
    "offset": -7.12
  },
  {
    "run1_idx": 2016,
    "run2_idx": 2933,
    "joint_number": 12820,
    "run1_distance": 46070.74,
    "run2_distance": 46063.76,
    "offset": -6.98
  },
  {
    "run1_idx": 2019,
    "run2_idx": 2981,
    "joint_number": 12830,
    "run1_distance": 46110.74,
    "run2_distance": 46103.99,
    "offset": -6.75
  },
  {
    "run1_idx": 2020,
    "run2_idx": 2982,
    "joint_number": 12840,
    "run1_distance": 46150.92,
    "run2_distance": 46144.13,
    "offset": -6.79
  },
  {
    "run1_idx": 2023,
    "run2_idx": 2989,
    "joint_number": 12850,
    "run1_distance": 46191.12,
    "run2_distance": 46184.25,
    "offset": -6.87
  },
  {
    "run1_idx": 2029,
    "run2_idx": 2998,
    "joint_number": 12860,
    "run1_distance": 46231.3,
    "run2_distance": 46224.4,
    "offset": -6.9
  },
  {
    "run1_idx": 2030,
    "run2_idx": 3031,
    "joint_number": 12870,
    "run1_distance": 46271.31,
    "run2_distance": 46264.57,
    "offset": -6.74
  },
  {
    "run1_idx": 2032,
    "run2_idx": 3063,
    "joint_number": 12880,
    "run1_distance": 46311.21,
    "run2_distance": 46304.71,
    "offset": -6.5
  },
  {
    "run1_idx": 2035,
    "run2_idx": 3069,
    "joint_number": 12890,
    "run1_distance": 46351.26,
    "run2_distance": 46344.8,
    "offset": -6.46
  },
  {
    "run1_idx": 2037,
    "run2_idx": 3074,
    "joint_number": 12900,
    "run1_distance": 46391.32,
    "run2_distance": 46384.73,
    "offset": -6.59
  },
  {
    "run1_idx": 2040,
    "run2_idx": 3086,
    "joint_number": 12910,
    "run1_distance": 46431.33,
    "run2_distance": 46424.88,
    "offset": -6.45
  },
  {
    "run1_idx": 2043,
    "run2_idx": 3091,
    "joint_number": 12920,
    "run1_distance": 46452.85,
    "run2_distance": 46465.03,
    "offset": 12.18
  },
  {
    "run1_idx": 2044,
    "run2_idx": 3093,
    "joint_number": 12930,
    "run1_distance": 46492.86,
    "run2_distance": 46505.1,
    "offset": 12.24
  },
  {
    "run1_idx": 2045,
    "run2_idx": 3096,
    "joint_number": 12940,
    "run1_distance": 46522.29,
    "run2_distance": 46526.65,
    "offset": 4.36
  },
  {
    "run1_idx": 2046,
    "run2_idx": 3097,
    "joint_number": 12950,
    "run1_distance": 46562.26,
    "run2_distance": 46566.77,
    "offset": 4.51
  },
  {
    "run1_idx": 2047,
    "run2_idx": 3098,
    "joint_number": 12960,
    "run1_distance": 46583.92,
    "run2_distance": 46596.26,
    "offset": 12.34
  },
  {
    "run1_idx": 2048,
    "run2_idx": 3099,
    "joint_number": 12970,
    "run1_distance": 46623.86,
    "run2_distance": 46636.3,
    "offset": 12.44
  },
  {
    "run1_idx": 2049,
    "run2_idx": 3100,
    "joint_number": 12980,
    "run1_distance": 46656.86,
    "run2_distance": 46657.97,
    "offset": 1.11
  },
  {
    "run1_idx": 2051,
    "run2_idx": 3101,
    "joint_number": 12990,
    "run1_distance": 46696.8,
    "run2_distance": 46697.95,
    "offset": 1.15
  },
  {
    "run1_idx": 2053,
    "run2_idx": 3103,
    "joint_number": 13000,
    "run1_distance": 46707.24,
    "run2_distance": 46731.02,
    "offset": 23.78
  },
  {
    "run1_idx": 2055,
    "run2_idx": 3106,
    "joint_number": 13010,
    "run1_distance": 46747.28,
    "run2_distance": 46771.17,
    "offset": 23.89
  },
  {
    "run1_idx": 2056,
    "run2_idx": 3108,
    "joint_number": 13020,
    "run1_distance": 46763.51,
    "run2_distance": 46781.15,
    "offset": 17.64
  },
  {
    "run1_idx": 2059,
    "run2_idx": 3119,
    "joint_number": 13030,
    "run1_distance": 46803.49,
    "run2_distance": 46821.75,
    "offset": 18.26
  },
  {
    "run1_idx": 2060,
    "run2_idx": 3122,
    "joint_number": 13040,
    "run1_distance": 46843.6,
    "run2_distance": 46838,
    "offset": -5.6
  },
  {
    "run1_idx": 2062,
    "run2_idx": 3125,
    "joint_number": 13050,
    "run1_distance": 46883.68,
    "run2_distance": 46878,
    "offset": -5.68
  },
  {
    "run1_idx": 2063,
    "run2_idx": 3126,
    "joint_number": 13060,
    "run1_distance": 46923.56,
    "run2_distance": 46918.12,
    "offset": -5.44
  },
  {
    "run1_idx": 2064,
    "run2_idx": 3128,
    "joint_number": 13070,
    "run1_distance": 46963.56,
    "run2_distance": 46958.16,
    "offset": -5.4
  },
  {
    "run1_idx": 2065,
    "run2_idx": 3129,
    "joint_number": 13080,
    "run1_distance": 47002.9,
    "run2_distance": 46998.08,
    "offset": -4.82
  },
  {
    "run1_idx": 2066,
    "run2_idx": 3130,
    "joint_number": 13090,
    "run1_distance": 47042.9,
    "run2_distance": 47038.12,
    "offset": -4.78
  },
  {
    "run1_idx": 2067,
    "run2_idx": 3131,
    "joint_number": 13100,
    "run1_distance": 47082.89,
    "run2_distance": 47077.49,
    "offset": -5.4
  },
  {
    "run1_idx": 2068,
    "run2_idx": 3132,
    "joint_number": 13110,
    "run1_distance": 47122.9,
    "run2_distance": 47117.56,
    "offset": -5.34
  },
  {
    "run1_idx": 2069,
    "run2_idx": 3133,
    "joint_number": 13120,
    "run1_distance": 47156.85,
    "run2_distance": 47157.67,
    "offset": 0.82
  },
  {
    "run1_idx": 2070,
    "run2_idx": 3139,
    "joint_number": 13130,
    "run1_distance": 47160,
    "run2_distance": 47197.76,
    "offset": 37.76
  },
  {
    "run1_idx": 2073,
    "run2_idx": 3149,
    "joint_number": 13150,
    "run1_distance": 47208.5,
    "run2_distance": 47231.72,
    "offset": 23.22
  },
  {
    "run1_idx": 2074,
    "run2_idx": 3150,
    "joint_number": 13160,
    "run1_distance": 47236.71,
    "run2_distance": 47234.98,
    "offset": -1.73
  },
  {
    "run1_idx": 2075,
    "run2_idx": 3152,
    "joint_number": 13170,
    "run1_distance": 47243.85,
    "run2_distance": 47242.81,
    "offset": -1.04
  },
  {
    "run1_idx": 2076,
    "run2_idx": 3154,
    "joint_number": 13180,
    "run1_distance": 47255.56,
    "run2_distance": 47283.3,
    "offset": 27.74
  },
  {
    "run1_idx": 2077,
    "run2_idx": 3155,
    "joint_number": 13190,
    "run1_distance": 47265.47,
    "run2_distance": 47311.55,
    "offset": 46.08
  },
  {
    "run1_idx": 2080,
    "run2_idx": 3156,
    "joint_number": 13200,
    "run1_distance": 47286.51,
    "run2_distance": 47318.72,
    "offset": 32.21
  },
  {
    "run1_idx": 2085,
    "run2_idx": 3162,
    "joint_number": 13210,
    "run1_distance": 47326.57,
    "run2_distance": 47330.44,
    "offset": 3.87
  },
  {
    "run1_idx": 2087,
    "run2_idx": 3171,
    "joint_number": 13220,
    "run1_distance": 47366.65,
    "run2_distance": 47361.45,
    "offset": -5.2
  },
  {
    "run1_idx": 2090,
    "run2_idx": 3189,
    "joint_number": 13230,
    "run1_distance": 47406.54,
    "run2_distance": 47401.55,
    "offset": -4.99
  },
  {
    "run1_idx": 2091,
    "run2_idx": 3198,
    "joint_number": 13240,
    "run1_distance": 47446.51,
    "run2_distance": 47441.59,
    "offset": -4.92
  },
  {
    "run1_idx": 2092,
    "run2_idx": 3201,
    "joint_number": 13250,
    "run1_distance": 47486.51,
    "run2_distance": 47481.51,
    "offset": -5
  },
  {
    "run1_idx": 2093,
    "run2_idx": 3203,
    "joint_number": 13260,
    "run1_distance": 47509.34,
    "run2_distance": 47521.58,
    "offset": 12.24
  },
  {
    "run1_idx": 2096,
    "run2_idx": 3204,
    "joint_number": 13270,
    "run1_distance": 47549.33,
    "run2_distance": 47561.68,
    "offset": 12.35
  },
  {
    "run1_idx": 2097,
    "run2_idx": 3205,
    "joint_number": 13280,
    "run1_distance": 47589.26,
    "run2_distance": 47584.55,
    "offset": -4.71
  },
  {
    "run1_idx": 2098,
    "run2_idx": 3211,
    "joint_number": 13290,
    "run1_distance": 47628.58,
    "run2_distance": 47624.63,
    "offset": -3.95
  },
  {
    "run1_idx": 2099,
    "run2_idx": 3212,
    "joint_number": 13300,
    "run1_distance": 47650.68,
    "run2_distance": 47664.68,
    "offset": 14
  },
  {
    "run1_idx": 2100,
    "run2_idx": 3213,
    "joint_number": 13310,
    "run1_distance": 47686.69,
    "run2_distance": 47704.06,
    "offset": 17.37
  },
  {
    "run1_idx": 2102,
    "run2_idx": 3216,
    "joint_number": 13320,
    "run1_distance": 47694.8,
    "run2_distance": 47726.21,
    "offset": 31.41
  },
  {
    "run1_idx": 2105,
    "run2_idx": 3220,
    "joint_number": 13340,
    "run1_distance": 47744.86,
    "run2_distance": 47762.38,
    "offset": 17.52
  },
  {
    "run1_idx": 2106,
    "run2_idx": 3224,
    "joint_number": 13350,
    "run1_distance": 47784.82,
    "run2_distance": 47780.2,
    "offset": -4.62
  },
  {
    "run1_idx": 2108,
    "run2_idx": 3225,
    "joint_number": 13360,
    "run1_distance": 47824.77,
    "run2_distance": 47820.32,
    "offset": -4.45
  },
  {
    "run1_idx": 2109,
    "run2_idx": 3226,
    "joint_number": 13370,
    "run1_distance": 47864.75,
    "run2_distance": 47860.35,
    "offset": -4.4
  },
  {
    "run1_idx": 2110,
    "run2_idx": 3228,
    "joint_number": 13380,
    "run1_distance": 47904.74,
    "run2_distance": 47900.35,
    "offset": -4.39
  },
  {
    "run1_idx": 2111,
    "run2_idx": 3229,
    "joint_number": 13390,
    "run1_distance": 47944.71,
    "run2_distance": 47940.4,
    "offset": -4.31
  },
  {
    "run1_idx": 2112,
    "run2_idx": 3230,
    "joint_number": 13400,
    "run1_distance": 47984.74,
    "run2_distance": 47980.45,
    "offset": -4.29
  },
  {
    "run1_idx": 2113,
    "run2_idx": 3231,
    "joint_number": 13410,
    "run1_distance": 48024.8,
    "run2_distance": 48020.49,
    "offset": -4.31
  },
  {
    "run1_idx": 2114,
    "run2_idx": 3232,
    "joint_number": 13420,
    "run1_distance": 48035.75,
    "run2_distance": 48060.57,
    "offset": 24.82
  },
  {
    "run1_idx": 2115,
    "run2_idx": 3233,
    "joint_number": 13430,
    "run1_distance": 48051.67,
    "run2_distance": 48100.65,
    "offset": 48.98
  },
  {
    "run1_idx": 2116,
    "run2_idx": 3234,
    "joint_number": 13440,
    "run1_distance": 48091.65,
    "run2_distance": 48111.62,
    "offset": 19.97
  },
  {
    "run1_idx": 2117,
    "run2_idx": 3235,
    "joint_number": 13450,
    "run1_distance": 48104.66,
    "run2_distance": 48127.52,
    "offset": 22.86
  },
  {
    "run1_idx": 2118,
    "run2_idx": 3236,
    "joint_number": 13460,
    "run1_distance": 48144.75,
    "run2_distance": 48167.51,
    "offset": 22.76
  },
  {
    "run1_idx": 2119,
    "run2_idx": 3237,
    "joint_number": 13470,
    "run1_distance": 48184.79,
    "run2_distance": 48180.54,
    "offset": -4.25
  },
  {
    "run1_idx": 2120,
    "run2_idx": 3238,
    "joint_number": 13480,
    "run1_distance": 48224.88,
    "run2_distance": 48220.7,
    "offset": -4.18
  },
  {
    "run1_idx": 2121,
    "run2_idx": 3239,
    "joint_number": 13490,
    "run1_distance": 48264.9,
    "run2_distance": 48260.89,
    "offset": -4.01
  },
  {
    "run1_idx": 2122,
    "run2_idx": 3240,
    "joint_number": 13500,
    "run1_distance": 48304.86,
    "run2_distance": 48301,
    "offset": -3.86
  },
  {
    "run1_idx": 2123,
    "run2_idx": 3241,
    "joint_number": 13510,
    "run1_distance": 48344.9,
    "run2_distance": 48341.03,
    "offset": -3.87
  },
  {
    "run1_idx": 2124,
    "run2_idx": 3242,
    "joint_number": 13520,
    "run1_distance": 48384.85,
    "run2_distance": 48381.05,
    "offset": -3.8
  },
  {
    "run1_idx": 2125,
    "run2_idx": 3243,
    "joint_number": 13530,
    "run1_distance": 48424.79,
    "run2_distance": 48421.1,
    "offset": -3.69
  },
  {
    "run1_idx": 2126,
    "run2_idx": 3244,
    "joint_number": 13540,
    "run1_distance": 48464.74,
    "run2_distance": 48461.19,
    "offset": -3.55
  },
  {
    "run1_idx": 2127,
    "run2_idx": 3245,
    "joint_number": 13550,
    "run1_distance": 48504.69,
    "run2_distance": 48501.24,
    "offset": -3.45
  },
  {
    "run1_idx": 2128,
    "run2_idx": 3246,
    "joint_number": 13560,
    "run1_distance": 48512.87,
    "run2_distance": 48541.15,
    "offset": 28.28
  },
  {
    "run1_idx": 2131,
    "run2_idx": 3247,
    "joint_number": 13580,
    "run1_distance": 48531.79,
    "run2_distance": 48581.16,
    "offset": 49.37
  },
  {
    "run1_idx": 2133,
    "run2_idx": 3248,
    "joint_number": 13590,
    "run1_distance": 48542.94,
    "run2_distance": 48589.45,
    "offset": 46.51
  },
  {
    "run1_idx": 2134,
    "run2_idx": 3250,
    "joint_number": 13600,
    "run1_distance": 48569.87,
    "run2_distance": 48600.28,
    "offset": 30.41
  },
  {
    "run1_idx": 2136,
    "run2_idx": 3254,
    "joint_number": 13610,
    "run1_distance": 48581.09,
    "run2_distance": 48608.15,
    "offset": 27.06
  },
  {
    "run1_idx": 2137,
    "run2_idx": 3256,
    "joint_number": 13620,
    "run1_distance": 48590.4,
    "run2_distance": 48619.03,
    "offset": 28.63
  },
  {
    "run1_idx": 2139,
    "run2_idx": 3257,
    "joint_number": 13630,
    "run1_distance": 48599.99,
    "run2_distance": 48646.6,
    "offset": 46.61
  },
  {
    "run1_idx": 2140,
    "run2_idx": 3259,
    "joint_number": 13640,
    "run1_distance": 48614.61,
    "run2_distance": 48657.57,
    "offset": 42.96
  },
  {
    "run1_idx": 2141,
    "run2_idx": 3260,
    "joint_number": 13650,
    "run1_distance": 48654.61,
    "run2_distance": 48667.51,
    "offset": 12.9
  },
  {
    "run1_idx": 2143,
    "run2_idx": 3263,
    "joint_number": 13660,
    "run1_distance": 48694.52,
    "run2_distance": 48691.46,
    "offset": -3.06
  },
  {
    "run1_idx": 2144,
    "run2_idx": 3264,
    "joint_number": 13670,
    "run1_distance": 48734.47,
    "run2_distance": 48731.61,
    "offset": -2.86
  },
  {
    "run1_idx": 2145,
    "run2_idx": 3265,
    "joint_number": 13680,
    "run1_distance": 48774.21,
    "run2_distance": 48771.71,
    "offset": -2.5
  },
  {
    "run1_idx": 2146,
    "run2_idx": 3266,
    "joint_number": 13690,
    "run1_distance": 48794.14,
    "run2_distance": 48811.75,
    "offset": 17.61
  },
  {
    "run1_idx": 2148,
    "run2_idx": 3267,
    "joint_number": 13700,
    "run1_distance": 48804.32,
    "run2_distance": 48851.68,
    "offset": 47.36
  },
  {
    "run1_idx": 2150,
    "run2_idx": 3268,
    "joint_number": 13710,
    "run1_distance": 48833.32,
    "run2_distance": 48871.7,
    "offset": 38.38
  },
  {
    "run1_idx": 2151,
    "run2_idx": 3270,
    "joint_number": 13720,
    "run1_distance": 48873.12,
    "run2_distance": 48881.37,
    "offset": 8.25
  },
  {
    "run1_idx": 2152,
    "run2_idx": 3275,
    "joint_number": 13730,
    "run1_distance": 48913.12,
    "run2_distance": 48910.66,
    "offset": -2.46
  },
  {
    "run1_idx": 2153,
    "run2_idx": 3277,
    "joint_number": 13740,
    "run1_distance": 48953.1,
    "run2_distance": 48950.49,
    "offset": -2.61
  },
  {
    "run1_idx": 2154,
    "run2_idx": 3278,
    "joint_number": 13750,
    "run1_distance": 48992.93,
    "run2_distance": 48990.55,
    "offset": -2.38
  },
  {
    "run1_idx": 2155,
    "run2_idx": 3279,
    "joint_number": 13760,
    "run1_distance": 49032.82,
    "run2_distance": 49030.58,
    "offset": -2.24
  },
  {
    "run1_idx": 2156,
    "run2_idx": 3280,
    "joint_number": 13770,
    "run1_distance": 49072.64,
    "run2_distance": 49070.6,
    "offset": -2.04
  },
  {
    "run1_idx": 2157,
    "run2_idx": 3281,
    "joint_number": 13780,
    "run1_distance": 49112.64,
    "run2_distance": 49110.63,
    "offset": -2.01
  },
  {
    "run1_idx": 2158,
    "run2_idx": 3282,
    "joint_number": 13790,
    "run1_distance": 49130.2,
    "run2_distance": 49150.64,
    "offset": 20.44
  },
  {
    "run1_idx": 2159,
    "run2_idx": 3284,
    "joint_number": 13800,
    "run1_distance": 49170.19,
    "run2_distance": 49190.72,
    "offset": 20.53
  },
  {
    "run1_idx": 2160,
    "run2_idx": 3285,
    "joint_number": 13810,
    "run1_distance": 49210.18,
    "run2_distance": 49208.33,
    "offset": -1.85
  },
  {
    "run1_idx": 2161,
    "run2_idx": 3286,
    "joint_number": 13820,
    "run1_distance": 49250.17,
    "run2_distance": 49248.45,
    "offset": -1.72
  },
  {
    "run1_idx": 2162,
    "run2_idx": 3287,
    "joint_number": 13830,
    "run1_distance": 49290.15,
    "run2_distance": 49288.55,
    "offset": -1.6
  },
  {
    "run1_idx": 2163,
    "run2_idx": 3288,
    "joint_number": 13840,
    "run1_distance": 49329.88,
    "run2_distance": 49328.63,
    "offset": -1.25
  },
  {
    "run1_idx": 2164,
    "run2_idx": 3289,
    "joint_number": 13850,
    "run1_distance": 49369.9,
    "run2_distance": 49368.73,
    "offset": -1.17
  },
  {
    "run1_idx": 2165,
    "run2_idx": 3290,
    "joint_number": 13860,
    "run1_distance": 49409.88,
    "run2_distance": 49408.57,
    "offset": -1.31
  },
  {
    "run1_idx": 2166,
    "run2_idx": 3291,
    "joint_number": 13870,
    "run1_distance": 49449.57,
    "run2_distance": 49448.71,
    "offset": -0.86
  },
  {
    "run1_idx": 2167,
    "run2_idx": 3292,
    "joint_number": 13880,
    "run1_distance": 49489.51,
    "run2_distance": 49488.82,
    "offset": -0.69
  },
  {
    "run1_idx": 2168,
    "run2_idx": 3293,
    "joint_number": 13890,
    "run1_distance": 49529.46,
    "run2_distance": 49528.66,
    "offset": -0.8
  },
  {
    "run1_idx": 2169,
    "run2_idx": 3294,
    "joint_number": 13900,
    "run1_distance": 49568.26,
    "run2_distance": 49568.8,
    "offset": 0.54
  },
  {
    "run1_idx": 2170,
    "run2_idx": 3295,
    "joint_number": 13910,
    "run1_distance": 49608.24,
    "run2_distance": 49608.95,
    "offset": 0.71
  },
  {
    "run1_idx": 2171,
    "run2_idx": 3296,
    "joint_number": 13920,
    "run1_distance": 49648.21,
    "run2_distance": 49647.91,
    "offset": -0.3
  },
  {
    "run1_idx": 2172,
    "run2_idx": 3297,
    "joint_number": 13930,
    "run1_distance": 49688.18,
    "run2_distance": 49688.01,
    "offset": -0.17
  },
  {
    "run1_idx": 2173,
    "run2_idx": 3298,
    "joint_number": 13940,
    "run1_distance": 49728.14,
    "run2_distance": 49728.14,
    "offset": 0
  },
  {
    "run1_idx": 2174,
    "run2_idx": 3299,
    "joint_number": 13950,
    "run1_distance": 49768.06,
    "run2_distance": 49768.24,
    "offset": 0.18
  },
  {
    "run1_idx": 2176,
    "run2_idx": 3300,
    "joint_number": 13960,
    "run1_distance": 49808.13,
    "run2_distance": 49808.28,
    "offset": 0.15
  },
  {
    "run1_idx": 2177,
    "run2_idx": 3301,
    "joint_number": 13970,
    "run1_distance": 49848.12,
    "run2_distance": 49848.31,
    "offset": 0.19
  },
  {
    "run1_idx": 2178,
    "run2_idx": 3302,
    "joint_number": 13980,
    "run1_distance": 49888.14,
    "run2_distance": 49888.33,
    "offset": 0.19
  },
  {
    "run1_idx": 2179,
    "run2_idx": 3303,
    "joint_number": 13990,
    "run1_distance": 49928.1,
    "run2_distance": 49928.34,
    "offset": 0.24
  },
  {
    "run1_idx": 2180,
    "run2_idx": 3304,
    "joint_number": 14000,
    "run1_distance": 49968.07,
    "run2_distance": 49968.41,
    "offset": 0.34
  },
  {
    "run1_idx": 2181,
    "run2_idx": 3305,
    "joint_number": 14010,
    "run1_distance": 50008.09,
    "run2_distance": 50008.49,
    "offset": 0.4
  },
  {
    "run1_idx": 2182,
    "run2_idx": 3306,
    "joint_number": 14020,
    "run1_distance": 50048.08,
    "run2_distance": 50048.62,
    "offset": 0.54
  },
  {
    "run1_idx": 2183,
    "run2_idx": 3307,
    "joint_number": 14030,
    "run1_distance": 50088.07,
    "run2_distance": 50088.73,
    "offset": 0.66
  },
  {
    "run1_idx": 2184,
    "run2_idx": 3308,
    "joint_number": 14040,
    "run1_distance": 50128.07,
    "run2_distance": 50128.81,
    "offset": 0.74
  },
  {
    "run1_idx": 2185,
    "run2_idx": 3311,
    "joint_number": 14050,
    "run1_distance": 50168,
    "run2_distance": 50168.85,
    "offset": 0.85
  },
  {
    "run1_idx": 2187,
    "run2_idx": 3312,
    "joint_number": 14060,
    "run1_distance": 50178.22,
    "run2_distance": 50209.02,
    "offset": 30.8
  },
  {
    "run1_idx": 2195,
    "run2_idx": 3317,
    "joint_number": 14070,
    "run1_distance": 50218.28,
    "run2_distance": 50249.06,
    "offset": 30.78
  },
  {
    "run1_idx": 2196,
    "run2_idx": 3319,
    "joint_number": 14080,
    "run1_distance": 50235.13,
    "run2_distance": 50258.72,
    "offset": 23.59
  },
  {
    "run1_idx": 2197,
    "run2_idx": 3359,
    "joint_number": 14090,
    "run1_distance": 50275.07,
    "run2_distance": 50299.26,
    "offset": 24.19
  },
  {
    "run1_idx": 2198,
    "run2_idx": 3360,
    "joint_number": 14100,
    "run1_distance": 50315.06,
    "run2_distance": 50316.17,
    "offset": 1.11
  },
  {
    "run1_idx": 2199,
    "run2_idx": 3361,
    "joint_number": 14110,
    "run1_distance": 50355.03,
    "run2_distance": 50356.17,
    "offset": 1.14
  },
  {
    "run1_idx": 2200,
    "run2_idx": 3362,
    "joint_number": 14120,
    "run1_distance": 50394.98,
    "run2_distance": 50396.23,
    "offset": 1.25
  },
  {
    "run1_idx": 2201,
    "run2_idx": 3364,
    "joint_number": 14130,
    "run1_distance": 50431.18,
    "run2_distance": 50436.3,
    "offset": 5.12
  },
  {
    "run1_idx": 2202,
    "run2_idx": 3366,
    "joint_number": 14140,
    "run1_distance": 50471.13,
    "run2_distance": 50476.38,
    "offset": 5.25
  },
  {
    "run1_idx": 2203,
    "run2_idx": 3367,
    "joint_number": 14150,
    "run1_distance": 50511.12,
    "run2_distance": 50512.74,
    "offset": 1.62
  },
  {
    "run1_idx": 2204,
    "run2_idx": 3368,
    "joint_number": 14160,
    "run1_distance": 50550.9,
    "run2_distance": 50552.77,
    "offset": 1.87
  },
  {
    "run1_idx": 2205,
    "run2_idx": 3369,
    "joint_number": 14170,
    "run1_distance": 50590.87,
    "run2_distance": 50592.86,
    "offset": 1.99
  },
  {
    "run1_idx": 2206,
    "run2_idx": 3370,
    "joint_number": 14180,
    "run1_distance": 50630.78,
    "run2_distance": 50632.76,
    "offset": 1.98
  },
  {
    "run1_idx": 2207,
    "run2_idx": 3371,
    "joint_number": 14190,
    "run1_distance": 50670.7,
    "run2_distance": 50672.84,
    "offset": 2.14
  },
  {
    "run1_idx": 2209,
    "run2_idx": 3372,
    "joint_number": 14200,
    "run1_distance": 50710.66,
    "run2_distance": 50712.88,
    "offset": 2.22
  },
  {
    "run1_idx": 2211,
    "run2_idx": 3373,
    "joint_number": 14210,
    "run1_distance": 50750.64,
    "run2_distance": 50752.92,
    "offset": 2.28
  },
  {
    "run1_idx": 2212,
    "run2_idx": 3374,
    "joint_number": 14220,
    "run1_distance": 50790.63,
    "run2_distance": 50793,
    "offset": 2.37
  },
  {
    "run1_idx": 2213,
    "run2_idx": 3377,
    "joint_number": 14230,
    "run1_distance": 50830.6,
    "run2_distance": 50833.08,
    "offset": 2.48
  },
  {
    "run1_idx": 2214,
    "run2_idx": 3378,
    "joint_number": 14240,
    "run1_distance": 50870.58,
    "run2_distance": 50873.18,
    "offset": 2.6
  },
  {
    "run1_idx": 2215,
    "run2_idx": 3379,
    "joint_number": 14250,
    "run1_distance": 50909.98,
    "run2_distance": 50913.22,
    "offset": 3.24
  },
  {
    "run1_idx": 2216,
    "run2_idx": 3384,
    "joint_number": 14260,
    "run1_distance": 50949.88,
    "run2_distance": 50953.27,
    "offset": 3.39
  },
  {
    "run1_idx": 2217,
    "run2_idx": 3385,
    "joint_number": 14270,
    "run1_distance": 50989.86,
    "run2_distance": 50992.77,
    "offset": 2.91
  },
  {
    "run1_idx": 2218,
    "run2_idx": 3386,
    "joint_number": 14280,
    "run1_distance": 51029.8,
    "run2_distance": 51032.76,
    "offset": 2.96
  },
  {
    "run1_idx": 2219,
    "run2_idx": 3387,
    "joint_number": 14290,
    "run1_distance": 51069.73,
    "run2_distance": 51072.79,
    "offset": 3.06
  },
  {
    "run1_idx": 2220,
    "run2_idx": 3388,
    "joint_number": 14300,
    "run1_distance": 51109.57,
    "run2_distance": 51112.86,
    "offset": 3.29
  },
  {
    "run1_idx": 2222,
    "run2_idx": 3389,
    "joint_number": 14310,
    "run1_distance": 51148.51,
    "run2_distance": 51153.01,
    "offset": 4.5
  },
  {
    "run1_idx": 2224,
    "run2_idx": 3390,
    "joint_number": 14320,
    "run1_distance": 51188.79,
    "run2_distance": 51192.91,
    "offset": 4.12
  },
  {
    "run1_idx": 2226,
    "run2_idx": 3392,
    "joint_number": 14330,
    "run1_distance": 51196.36,
    "run2_distance": 51231.84,
    "offset": 35.48
  },
  {
    "run1_idx": 2229,
    "run2_idx": 3401,
    "joint_number": 14350,
    "run1_distance": 51222.38,
    "run2_distance": 51272.06,
    "offset": 49.68
  },
  {
    "run1_idx": 2230,
    "run2_idx": 3403,
    "joint_number": 14360,
    "run1_distance": 51232.84,
    "run2_distance": 51279.3,
    "offset": 46.46
  },
  {
    "run1_idx": 2233,
    "run2_idx": 3404,
    "joint_number": 14380,
    "run1_distance": 51280.69,
    "run2_distance": 51293.06,
    "offset": 12.37
  },
  {
    "run1_idx": 2234,
    "run2_idx": 3407,
    "joint_number": 14390,
    "run1_distance": 51319.99,
    "run2_distance": 51316.52,
    "offset": -3.47
  },
  {
    "run1_idx": 2235,
    "run2_idx": 3409,
    "joint_number": 14400,
    "run1_distance": 51330.83,
    "run2_distance": 51323.75,
    "offset": -7.08
  },
  {
    "run1_idx": 2236,
    "run2_idx": 3410,
    "joint_number": 14410,
    "run1_distance": 51362.48,
    "run2_distance": 51364.16,
    "offset": 1.68
  },
  {
    "run1_idx": 2237,
    "run2_idx": 3411,
    "joint_number": 14420,
    "run1_distance": 51391.84,
    "run2_distance": 51403.48,
    "offset": 11.64
  },
  {
    "run1_idx": 2238,
    "run2_idx": 3412,
    "joint_number": 14430,
    "run1_distance": 51402.33,
    "run2_distance": 51414.32,
    "offset": 11.99
  },
  {
    "run1_idx": 2239,
    "run2_idx": 3413,
    "joint_number": 14440,
    "run1_distance": 51442.16,
    "run2_distance": 51446.15,
    "offset": 3.99
  },
  {
    "run1_idx": 2240,
    "run2_idx": 3415,
    "joint_number": 14450,
    "run1_distance": 51482.08,
    "run2_distance": 51486.22,
    "offset": 4.14
  },
  {
    "run1_idx": 2241,
    "run2_idx": 3416,
    "joint_number": 14460,
    "run1_distance": 51522.07,
    "run2_distance": 51526.3,
    "offset": 4.23
  },
  {
    "run1_idx": 2243,
    "run2_idx": 3417,
    "joint_number": 14470,
    "run1_distance": 51534.04,
    "run2_distance": 51566.55,
    "offset": 32.51
  },
  {
    "run1_idx": 2244,
    "run2_idx": 3418,
    "joint_number": 14480,
    "run1_distance": 51574.08,
    "run2_distance": 51606.81,
    "offset": 32.73
  },
  {
    "run1_idx": 2245,
    "run2_idx": 3420,
    "joint_number": 14490,
    "run1_distance": 51592.51,
    "run2_distance": 51618.37,
    "offset": 25.86
  },
  {
    "run1_idx": 2247,
    "run2_idx": 3424,
    "joint_number": 14510,
    "run1_distance": 51631.88,
    "run2_distance": 51658.78,
    "offset": 26.9
  },
  {
    "run1_idx": 2248,
    "run2_idx": 3425,
    "joint_number": 14520,
    "run1_distance": 51671.47,
    "run2_distance": 51677.3,
    "offset": 5.83
  },
  {
    "run1_idx": 2249,
    "run2_idx": 3426,
    "joint_number": 14530,
    "run1_distance": 51691.33,
    "run2_distance": 51690.38,
    "offset": -0.95
  },
  {
    "run1_idx": 2250,
    "run2_idx": 3428,
    "joint_number": 14540,
    "run1_distance": 51719.48,
    "run2_distance": 51716.94,
    "offset": -2.54
  },
  {
    "run1_idx": 2251,
    "run2_idx": 3429,
    "joint_number": 14550,
    "run1_distance": 51759.38,
    "run2_distance": 51756.55,
    "offset": -2.83
  },
  {
    "run1_idx": 2252,
    "run2_idx": 3431,
    "joint_number": 14560,
    "run1_distance": 51791.42,
    "run2_distance": 51804.66,
    "offset": 13.24
  },
  {
    "run1_idx": 2253,
    "run2_idx": 3432,
    "joint_number": 14570,
    "run1_distance": 51831.45,
    "run2_distance": 51844.58,
    "offset": 13.13
  },
  {
    "run1_idx": 2254,
    "run2_idx": 3433,
    "joint_number": 14580,
    "run1_distance": 51864.4,
    "run2_distance": 51876.58,
    "offset": 12.18
  },
  {
    "run1_idx": 2255,
    "run2_idx": 3434,
    "joint_number": 14590,
    "run1_distance": 51887.97,
    "run2_distance": 51916.65,
    "offset": 28.68
  },
  {
    "run1_idx": 2257,
    "run2_idx": 3435,
    "joint_number": 14600,
    "run1_distance": 51927.99,
    "run2_distance": 51949.59,
    "offset": 21.6
  },
  {
    "run1_idx": 2258,
    "run2_idx": 3436,
    "joint_number": 14610,
    "run1_distance": 51968,
    "run2_distance": 51973.11,
    "offset": 5.11
  },
  {
    "run1_idx": 2259,
    "run2_idx": 3438,
    "joint_number": 14620,
    "run1_distance": 52008,
    "run2_distance": 52013.14,
    "offset": 5.14
  },
  {
    "run1_idx": 2260,
    "run2_idx": 3439,
    "joint_number": 14630,
    "run1_distance": 52048.02,
    "run2_distance": 52053.14,
    "offset": 5.12
  },
  {
    "run1_idx": 2261,
    "run2_idx": 3440,
    "joint_number": 14640,
    "run1_distance": 52088.06,
    "run2_distance": 52093.15,
    "offset": 5.09
  },
  {
    "run1_idx": 2262,
    "run2_idx": 3441,
    "joint_number": 14650,
    "run1_distance": 52127.93,
    "run2_distance": 52133.21,
    "offset": 5.28
  },
  {
    "run1_idx": 2263,
    "run2_idx": 3442,
    "joint_number": 14660,
    "run1_distance": 52167.96,
    "run2_distance": 52173.21,
    "offset": 5.25
  },
  {
    "run1_idx": 2264,
    "run2_idx": 3443,
    "joint_number": 14670,
    "run1_distance": 52207.98,
    "run2_distance": 52213.09,
    "offset": 5.11
  },
  {
    "run1_idx": 2265,
    "run2_idx": 3446,
    "joint_number": 14680,
    "run1_distance": 52248.02,
    "run2_distance": 52253.12,
    "offset": 5.1
  },
  {
    "run1_idx": 2266,
    "run2_idx": 3447,
    "joint_number": 14690,
    "run1_distance": 52288.07,
    "run2_distance": 52293.16,
    "offset": 5.09
  },
  {
    "run1_idx": 2267,
    "run2_idx": 3448,
    "joint_number": 14700,
    "run1_distance": 52328.1,
    "run2_distance": 52333.22,
    "offset": 5.12
  },
  {
    "run1_idx": 2268,
    "run2_idx": 3449,
    "joint_number": 14710,
    "run1_distance": 52368.14,
    "run2_distance": 52373.33,
    "offset": 5.19
  },
  {
    "run1_idx": 2269,
    "run2_idx": 3450,
    "joint_number": 14720,
    "run1_distance": 52408.06,
    "run2_distance": 52413.34,
    "offset": 5.28
  },
  {
    "run1_idx": 2270,
    "run2_idx": 3451,
    "joint_number": 14730,
    "run1_distance": 52448.07,
    "run2_distance": 52453.44,
    "offset": 5.37
  },
  {
    "run1_idx": 2271,
    "run2_idx": 3452,
    "joint_number": 14740,
    "run1_distance": 52488.11,
    "run2_distance": 52493.41,
    "offset": 5.3
  },
  {
    "run1_idx": 2272,
    "run2_idx": 3453,
    "joint_number": 14750,
    "run1_distance": 52528.15,
    "run2_distance": 52533.44,
    "offset": 5.29
  },
  {
    "run1_idx": 2273,
    "run2_idx": 3454,
    "joint_number": 14760,
    "run1_distance": 52568.17,
    "run2_distance": 52573.54,
    "offset": 5.37
  },
  {
    "run1_idx": 2274,
    "run2_idx": 3455,
    "joint_number": 14770,
    "run1_distance": 52608.18,
    "run2_distance": 52613.65,
    "offset": 5.47
  },
  {
    "run1_idx": 2275,
    "run2_idx": 3456,
    "joint_number": 14780,
    "run1_distance": 52648.18,
    "run2_distance": 52653.72,
    "offset": 5.54
  },
  {
    "run1_idx": 2276,
    "run2_idx": 3457,
    "joint_number": 14790,
    "run1_distance": 52688.13,
    "run2_distance": 52693.86,
    "offset": 5.73
  },
  {
    "run1_idx": 2277,
    "run2_idx": 3458,
    "joint_number": 14800,
    "run1_distance": 52728.17,
    "run2_distance": 52734.02,
    "offset": 5.85
  },
  {
    "run1_idx": 2278,
    "run2_idx": 3459,
    "joint_number": 14810,
    "run1_distance": 52768.12,
    "run2_distance": 52774.13,
    "offset": 6.01
  },
  {
    "run1_idx": 2279,
    "run2_idx": 3460,
    "joint_number": 14820,
    "run1_distance": 52786.59,
    "run2_distance": 52814.26,
    "offset": 27.67
  },
  {
    "run1_idx": 2280,
    "run2_idx": 3461,
    "joint_number": 14830,
    "run1_distance": 52826.6,
    "run2_distance": 52854.29,
    "offset": 27.69
  },
  {
    "run1_idx": 2281,
    "run2_idx": 3462,
    "joint_number": 14840,
    "run1_distance": 52866.63,
    "run2_distance": 52872.77,
    "offset": 6.14
  },
  {
    "run1_idx": 2282,
    "run2_idx": 3463,
    "joint_number": 14850,
    "run1_distance": 52906.69,
    "run2_distance": 52912.86,
    "offset": 6.17
  },
  {
    "run1_idx": 2283,
    "run2_idx": 3464,
    "joint_number": 14860,
    "run1_distance": 52946.7,
    "run2_distance": 52952.94,
    "offset": 6.24
  },
  {
    "run1_idx": 2285,
    "run2_idx": 3465,
    "joint_number": 14870,
    "run1_distance": 52986.67,
    "run2_distance": 52993.05,
    "offset": 6.38
  },
  {
    "run1_idx": 2286,
    "run2_idx": 3466,
    "joint_number": 14880,
    "run1_distance": 53026.56,
    "run2_distance": 53033.14,
    "offset": 6.58
  },
  {
    "run1_idx": 2287,
    "run2_idx": 3467,
    "joint_number": 14890,
    "run1_distance": 53066.45,
    "run2_distance": 53073.16,
    "offset": 6.71
  },
  {
    "run1_idx": 2288,
    "run2_idx": 3469,
    "joint_number": 14900,
    "run1_distance": 53106.38,
    "run2_distance": 53113.1,
    "offset": 6.72
  },
  {
    "run1_idx": 2290,
    "run2_idx": 3470,
    "joint_number": 14910,
    "run1_distance": 53146.45,
    "run2_distance": 53153.04,
    "offset": 6.59
  },
  {
    "run1_idx": 2291,
    "run2_idx": 3472,
    "joint_number": 14920,
    "run1_distance": 53186.5,
    "run2_distance": 53193.04,
    "offset": 6.54
  },
  {
    "run1_idx": 2297,
    "run2_idx": 3475,
    "joint_number": 14930,
    "run1_distance": 53226.51,
    "run2_distance": 53233.15,
    "offset": 6.64
  },
  {
    "run1_idx": 2298,
    "run2_idx": 3478,
    "joint_number": 14940,
    "run1_distance": 53266.43,
    "run2_distance": 53273.25,
    "offset": 6.82
  },
  {
    "run1_idx": 2299,
    "run2_idx": 3482,
    "joint_number": 14950,
    "run1_distance": 53306.5,
    "run2_distance": 53313.21,
    "offset": 6.71
  },
  {
    "run1_idx": 2300,
    "run2_idx": 3483,
    "joint_number": 14960,
    "run1_distance": 53346.59,
    "run2_distance": 53353.16,
    "offset": 6.57
  },
  {
    "run1_idx": 2301,
    "run2_idx": 3484,
    "joint_number": 14970,
    "run1_distance": 53386.66,
    "run2_distance": 53393.05,
    "offset": 6.39
  },
  {
    "run1_idx": 2302,
    "run2_idx": 3485,
    "joint_number": 14980,
    "run1_distance": 53426.71,
    "run2_distance": 53433.03,
    "offset": 6.32
  },
  {
    "run1_idx": 2303,
    "run2_idx": 3486,
    "joint_number": 14990,
    "run1_distance": 53466.77,
    "run2_distance": 53473.11,
    "offset": 6.34
  },
  {
    "run1_idx": 2304,
    "run2_idx": 3487,
    "joint_number": 15000,
    "run1_distance": 53506.72,
    "run2_distance": 53513.23,
    "offset": 6.51
  },
  {
    "run1_idx": 2305,
    "run2_idx": 3488,
    "joint_number": 15010,
    "run1_distance": 53538.01,
    "run2_distance": 53553.31,
    "offset": 15.3
  },
  {
    "run1_idx": 2306,
    "run2_idx": 3489,
    "joint_number": 15020,
    "run1_distance": 53577.92,
    "run2_distance": 53593.33,
    "offset": 15.41
  },
  {
    "run1_idx": 2307,
    "run2_idx": 3490,
    "joint_number": 15030,
    "run1_distance": 53617.86,
    "run2_distance": 53624.64,
    "offset": 6.78
  },
  {
    "run1_idx": 2308,
    "run2_idx": 3491,
    "joint_number": 15040,
    "run1_distance": 53657.77,
    "run2_distance": 53664.76,
    "offset": 6.99
  },
  {
    "run1_idx": 2309,
    "run2_idx": 3492,
    "joint_number": 15050,
    "run1_distance": 53697.57,
    "run2_distance": 53704.87,
    "offset": 7.3
  },
  {
    "run1_idx": 2310,
    "run2_idx": 3493,
    "joint_number": 15060,
    "run1_distance": 53737.6,
    "run2_distance": 53744.92,
    "offset": 7.32
  },
  {
    "run1_idx": 2311,
    "run2_idx": 3494,
    "joint_number": 15070,
    "run1_distance": 53770.07,
    "run2_distance": 53784.83,
    "offset": 14.76
  },
  {
    "run1_idx": 2312,
    "run2_idx": 3496,
    "joint_number": 15080,
    "run1_distance": 53810.18,
    "run2_distance": 53824.87,
    "offset": 14.69
  },
  {
    "run1_idx": 2313,
    "run2_idx": 3497,
    "joint_number": 15090,
    "run1_distance": 53850.23,
    "run2_distance": 53857.3,
    "offset": 7.07
  },
  {
    "run1_idx": 2314,
    "run2_idx": 3498,
    "joint_number": 15100,
    "run1_distance": 53890.39,
    "run2_distance": 53897.3,
    "offset": 6.91
  },
  {
    "run1_idx": 2316,
    "run2_idx": 3499,
    "joint_number": 15110,
    "run1_distance": 53930.44,
    "run2_distance": 53937.23,
    "offset": 6.79
  },
  {
    "run1_idx": 2317,
    "run2_idx": 3500,
    "joint_number": 15120,
    "run1_distance": 53970.47,
    "run2_distance": 53977.19,
    "offset": 6.72
  },
  {
    "run1_idx": 2318,
    "run2_idx": 3501,
    "joint_number": 15130,
    "run1_distance": 54010.45,
    "run2_distance": 54017.23,
    "offset": 6.78
  },
  {
    "run1_idx": 2319,
    "run2_idx": 3502,
    "joint_number": 15140,
    "run1_distance": 54041.62,
    "run2_distance": 54057.24,
    "offset": 15.62
  },
  {
    "run1_idx": 2320,
    "run2_idx": 3503,
    "joint_number": 15150,
    "run1_distance": 54081.56,
    "run2_distance": 54097.31,
    "offset": 15.75
  },
  {
    "run1_idx": 2322,
    "run2_idx": 3504,
    "joint_number": 15160,
    "run1_distance": 54095.34,
    "run2_distance": 54128.69,
    "offset": 33.35
  },
  {
    "run1_idx": 2323,
    "run2_idx": 3505,
    "joint_number": 15170,
    "run1_distance": 54135.4,
    "run2_distance": 54169.01,
    "offset": 33.61
  },
  {
    "run1_idx": 2324,
    "run2_idx": 3507,
    "joint_number": 15180,
    "run1_distance": 54175.42,
    "run2_distance": 54182.66,
    "offset": 7.24
  },
  {
    "run1_idx": 2325,
    "run2_idx": 3508,
    "joint_number": 15190,
    "run1_distance": 54183.68,
    "run2_distance": 54223.22,
    "offset": 39.54
  },
  {
    "run1_idx": 2326,
    "run2_idx": 3515,
    "joint_number": 15200,
    "run1_distance": 54223.78,
    "run2_distance": 54263.5,
    "offset": 39.72
  },
  {
    "run1_idx": 2327,
    "run2_idx": 3516,
    "joint_number": 15210,
    "run1_distance": 54263.92,
    "run2_distance": 54271.75,
    "offset": 7.83
  },
  {
    "run1_idx": 2328,
    "run2_idx": 3517,
    "joint_number": 15220,
    "run1_distance": 54304,
    "run2_distance": 54311.78,
    "offset": 7.78
  },
  {
    "run1_idx": 2329,
    "run2_idx": 3518,
    "joint_number": 15230,
    "run1_distance": 54344.07,
    "run2_distance": 54351.73,
    "offset": 7.66
  },
  {
    "run1_idx": 2330,
    "run2_idx": 3523,
    "joint_number": 15240,
    "run1_distance": 54384.13,
    "run2_distance": 54391.73,
    "offset": 7.6
  },
  {
    "run1_idx": 2331,
    "run2_idx": 3524,
    "joint_number": 15250,
    "run1_distance": 54418.55,
    "run2_distance": 54431.77,
    "offset": 13.22
  },
  {
    "run1_idx": 2332,
    "run2_idx": 3526,
    "joint_number": 15260,
    "run1_distance": 54458.58,
    "run2_distance": 54471.81,
    "offset": 13.23
  },
  {
    "run1_idx": 2333,
    "run2_idx": 3531,
    "joint_number": 15270,
    "run1_distance": 54498.61,
    "run2_distance": 54506.26,
    "offset": 7.65
  },
  {
    "run1_idx": 2334,
    "run2_idx": 3532,
    "joint_number": 15280,
    "run1_distance": 54538.58,
    "run2_distance": 54546.23,
    "offset": 7.65
  },
  {
    "run1_idx": 2335,
    "run2_idx": 3533,
    "joint_number": 15290,
    "run1_distance": 54570.03,
    "run2_distance": 54586.36,
    "offset": 16.33
  },
  {
    "run1_idx": 2336,
    "run2_idx": 3535,
    "joint_number": 15300,
    "run1_distance": 54610.04,
    "run2_distance": 54626.62,
    "offset": 16.58
  },
  {
    "run1_idx": 2337,
    "run2_idx": 3538,
    "joint_number": 15310,
    "run1_distance": 54650.02,
    "run2_distance": 54658.12,
    "offset": 8.1
  },
  {
    "run1_idx": 2338,
    "run2_idx": 3539,
    "joint_number": 15320,
    "run1_distance": 54690,
    "run2_distance": 54698.17,
    "offset": 8.17
  },
  {
    "run1_idx": 2339,
    "run2_idx": 3540,
    "joint_number": 15330,
    "run1_distance": 54730.01,
    "run2_distance": 54738.18,
    "offset": 8.17
  },
  {
    "run1_idx": 2340,
    "run2_idx": 3541,
    "joint_number": 15340,
    "run1_distance": 54770.02,
    "run2_distance": 54778.15,
    "offset": 8.13
  },
  {
    "run1_idx": 2341,
    "run2_idx": 3542,
    "joint_number": 15350,
    "run1_distance": 54810.04,
    "run2_distance": 54818.17,
    "offset": 8.13
  },
  {
    "run1_idx": 2342,
    "run2_idx": 3543,
    "joint_number": 15360,
    "run1_distance": 54850.05,
    "run2_distance": 54858.16,
    "offset": 8.11
  },
  {
    "run1_idx": 2343,
    "run2_idx": 3544,
    "joint_number": 15370,
    "run1_distance": 54890.06,
    "run2_distance": 54898.13,
    "offset": 8.07
  },
  {
    "run1_idx": 2344,
    "run2_idx": 3545,
    "joint_number": 15380,
    "run1_distance": 54930.03,
    "run2_distance": 54938.17,
    "offset": 8.14
  },
  {
    "run1_idx": 2345,
    "run2_idx": 3546,
    "joint_number": 15390,
    "run1_distance": 54970,
    "run2_distance": 54978.24,
    "offset": 8.24
  },
  {
    "run1_idx": 2346,
    "run2_idx": 3547,
    "joint_number": 15400,
    "run1_distance": 55009.99,
    "run2_distance": 55018.26,
    "offset": 8.27
  },
  {
    "run1_idx": 2347,
    "run2_idx": 3548,
    "joint_number": 15410,
    "run1_distance": 55049.99,
    "run2_distance": 55058.33,
    "offset": 8.34
  },
  {
    "run1_idx": 2348,
    "run2_idx": 3549,
    "joint_number": 15420,
    "run1_distance": 55089.97,
    "run2_distance": 55098.37,
    "offset": 8.4
  },
  {
    "run1_idx": 2350,
    "run2_idx": 3550,
    "joint_number": 15430,
    "run1_distance": 55129.97,
    "run2_distance": 55138.46,
    "offset": 8.49
  },
  {
    "run1_idx": 2351,
    "run2_idx": 3551,
    "joint_number": 15440,
    "run1_distance": 55169.96,
    "run2_distance": 55178.55,
    "offset": 8.59
  },
  {
    "run1_idx": 2352,
    "run2_idx": 3552,
    "joint_number": 15450,
    "run1_distance": 55210,
    "run2_distance": 55218.69,
    "offset": 8.69
  },
  {
    "run1_idx": 2353,
    "run2_idx": 3553,
    "joint_number": 15460,
    "run1_distance": 55249.96,
    "run2_distance": 55258.75,
    "offset": 8.79
  },
  {
    "run1_idx": 2354,
    "run2_idx": 3554,
    "joint_number": 15470,
    "run1_distance": 55289.93,
    "run2_distance": 55298.87,
    "offset": 8.94
  },
  {
    "run1_idx": 2355,
    "run2_idx": 3555,
    "joint_number": 15480,
    "run1_distance": 55329.81,
    "run2_distance": 55338.95,
    "offset": 9.14
  },
  {
    "run1_idx": 2356,
    "run2_idx": 3556,
    "joint_number": 15490,
    "run1_distance": 55369.84,
    "run2_distance": 55379.05,
    "offset": 9.21
  },
  {
    "run1_idx": 2357,
    "run2_idx": 3557,
    "joint_number": 15500,
    "run1_distance": 55409.72,
    "run2_distance": 55418.96,
    "offset": 9.24
  },
  {
    "run1_idx": 2358,
    "run2_idx": 3559,
    "joint_number": 15510,
    "run1_distance": 55449.71,
    "run2_distance": 55459.07,
    "offset": 9.36
  },
  {
    "run1_idx": 2359,
    "run2_idx": 3560,
    "joint_number": 15520,
    "run1_distance": 55489.72,
    "run2_distance": 55499.09,
    "offset": 9.37
  },
  {
    "run1_idx": 2360,
    "run2_idx": 3561,
    "joint_number": 15530,
    "run1_distance": 55529.73,
    "run2_distance": 55539.13,
    "offset": 9.4
  },
  {
    "run1_idx": 2361,
    "run2_idx": 3562,
    "joint_number": 15540,
    "run1_distance": 55569.74,
    "run2_distance": 55579.22,
    "offset": 9.48
  },
  {
    "run1_idx": 2363,
    "run2_idx": 3563,
    "joint_number": 15550,
    "run1_distance": 55609.76,
    "run2_distance": 55619.31,
    "offset": 9.55
  },
  {
    "run1_idx": 2364,
    "run2_idx": 3565,
    "joint_number": 15560,
    "run1_distance": 55642.74,
    "run2_distance": 55659.37,
    "offset": 16.63
  },
  {
    "run1_idx": 2366,
    "run2_idx": 3567,
    "joint_number": 15570,
    "run1_distance": 55682.72,
    "run2_distance": 55699.46,
    "offset": 16.74
  },
  {
    "run1_idx": 2367,
    "run2_idx": 3568,
    "joint_number": 15580,
    "run1_distance": 55722.68,
    "run2_distance": 55732.54,
    "offset": 9.86
  },
  {
    "run1_idx": 2368,
    "run2_idx": 3570,
    "joint_number": 15590,
    "run1_distance": 55762.7,
    "run2_distance": 55772.66,
    "offset": 9.96
  },
  {
    "run1_idx": 2369,
    "run2_idx": 3571,
    "joint_number": 15600,
    "run1_distance": 55802.72,
    "run2_distance": 55812.69,
    "offset": 9.97
  },
  {
    "run1_idx": 2370,
    "run2_idx": 3572,
    "joint_number": 15610,
    "run1_distance": 55838.78,
    "run2_distance": 55852.76,
    "offset": 13.98
  },
  {
    "run1_idx": 2371,
    "run2_idx": 3573,
    "joint_number": 15620,
    "run1_distance": 55878.7,
    "run2_distance": 55892.78,
    "offset": 14.08
  },
  {
    "run1_idx": 2372,
    "run2_idx": 3574,
    "joint_number": 15630,
    "run1_distance": 55918.63,
    "run2_distance": 55928.92,
    "offset": 10.29
  },
  {
    "run1_idx": 2373,
    "run2_idx": 3575,
    "joint_number": 15640,
    "run1_distance": 55946.89,
    "run2_distance": 55969.11,
    "offset": 22.22
  },
  {
    "run1_idx": 2374,
    "run2_idx": 3576,
    "joint_number": 15650,
    "run1_distance": 55986.95,
    "run2_distance": 56009.28,
    "offset": 22.33
  },
  {
    "run1_idx": 2375,
    "run2_idx": 3577,
    "joint_number": 15660,
    "run1_distance": 56017.41,
    "run2_distance": 56037.52,
    "offset": 20.11
  },
  {
    "run1_idx": 2377,
    "run2_idx": 3578,
    "joint_number": 15670,
    "run1_distance": 56057.48,
    "run2_distance": 56077.59,
    "offset": 20.11
  },
  {
    "run1_idx": 2378,
    "run2_idx": 3579,
    "joint_number": 15680,
    "run1_distance": 56083.77,
    "run2_distance": 56108.1,
    "offset": 24.33
  },
  {
    "run1_idx": 2379,
    "run2_idx": 3580,
    "joint_number": 15690,
    "run1_distance": 56123.79,
    "run2_distance": 56148.14,
    "offset": 24.35
  },
  {
    "run1_idx": 2380,
    "run2_idx": 3581,
    "joint_number": 15700,
    "run1_distance": 56145.31,
    "run2_distance": 56174.46,
    "offset": 29.15
  },
  {
    "run1_idx": 2381,
    "run2_idx": 3582,
    "joint_number": 15710,
    "run1_distance": 56185.24,
    "run2_distance": 56214.55,
    "offset": 29.31
  },
  {
    "run1_idx": 2382,
    "run2_idx": 3583,
    "joint_number": 15720,
    "run1_distance": 56208.76,
    "run2_distance": 56236.1,
    "offset": 27.34
  },
  {
    "run1_idx": 2383,
    "run2_idx": 3584,
    "joint_number": 15730,
    "run1_distance": 56248.71,
    "run2_distance": 56276,
    "offset": 27.29
  },
  {
    "run1_idx": 2384,
    "run2_idx": 3585,
    "joint_number": 15740,
    "run1_distance": 56268.88,
    "run2_distance": 56299.49,
    "offset": 30.61
  },
  {
    "run1_idx": 2385,
    "run2_idx": 3586,
    "joint_number": 15750,
    "run1_distance": 56307.69,
    "run2_distance": 56339.53,
    "offset": 31.84
  },
  {
    "run1_idx": 2386,
    "run2_idx": 3587,
    "joint_number": 15760,
    "run1_distance": 56328.75,
    "run2_distance": 56359.77,
    "offset": 31.02
  },
  {
    "run1_idx": 2387,
    "run2_idx": 3588,
    "joint_number": 15770,
    "run1_distance": 56368.87,
    "run2_distance": 56398.71,
    "offset": 29.84
  },
  {
    "run1_idx": 2392,
    "run2_idx": 3589,
    "joint_number": 15780,
    "run1_distance": 56388.3,
    "run2_distance": 56419.81,
    "offset": 31.51
  },
  {
    "run1_idx": 2393,
    "run2_idx": 3590,
    "joint_number": 15790,
    "run1_distance": 56428.45,
    "run2_distance": 56459.87,
    "offset": 31.42
  },
  {
    "run1_idx": 2394,
    "run2_idx": 3593,
    "joint_number": 15800,
    "run1_distance": 56448.41,
    "run2_distance": 56479.32,
    "offset": 30.91
  },
  {
    "run1_idx": 2395,
    "run2_idx": 3596,
    "joint_number": 15810,
    "run1_distance": 56488.4,
    "run2_distance": 56519.4,
    "offset": 31
  },
  {
    "run1_idx": 2396,
    "run2_idx": 3597,
    "joint_number": 15820,
    "run1_distance": 56513.79,
    "run2_distance": 56539.39,
    "offset": 25.6
  },
  {
    "run1_idx": 2397,
    "run2_idx": 3598,
    "joint_number": 15830,
    "run1_distance": 56544.05,
    "run2_distance": 56579.43,
    "offset": 35.38
  },
  {
    "run1_idx": 2398,
    "run2_idx": 3599,
    "joint_number": 15840,
    "run1_distance": 56573.34,
    "run2_distance": 56604.87,
    "offset": 31.53
  },
  {
    "run1_idx": 2399,
    "run2_idx": 3600,
    "joint_number": 15850,
    "run1_distance": 56613.46,
    "run2_distance": 56635.21,
    "offset": 21.75
  },
  {
    "run1_idx": 2400,
    "run2_idx": 3601,
    "joint_number": 15860,
    "run1_distance": 56645.16,
    "run2_distance": 56664.53,
    "offset": 19.37
  },
  {
    "run1_idx": 2402,
    "run2_idx": 3602,
    "joint_number": 15870,
    "run1_distance": 56661.12,
    "run2_distance": 56704.56,
    "offset": 43.44
  },
  {
    "run1_idx": 2403,
    "run2_idx": 3613,
    "joint_number": 15880,
    "run1_distance": 56701.17,
    "run2_distance": 56736.3,
    "offset": 35.13
  },
  {
    "run1_idx": 2404,
    "run2_idx": 3615,
    "joint_number": 15890,
    "run1_distance": 56718.51,
    "run2_distance": 56751.52,
    "offset": 33.01
  },
  {
    "run1_idx": 2405,
    "run2_idx": 3616,
    "joint_number": 15900,
    "run1_distance": 56758.56,
    "run2_distance": 56792.12,
    "offset": 33.56
  },
  {
    "run1_idx": 2406,
    "run2_idx": 3619,
    "joint_number": 15910,
    "run1_distance": 56798.48,
    "run2_distance": 56809.56,
    "offset": 11.08
  },
  {
    "run1_idx": 2407,
    "run2_idx": 3620,
    "joint_number": 15920,
    "run1_distance": 56838.37,
    "run2_distance": 56849.78,
    "offset": 11.41
  },
  {
    "run1_idx": 2408,
    "run2_idx": 3628,
    "joint_number": 15930,
    "run1_distance": 56855.49,
    "run2_distance": 56889.91,
    "offset": 34.42
  },
  {
    "run1_idx": 2411,
    "run2_idx": 3638,
    "joint_number": 15950,
    "run1_distance": 56880.11,
    "run2_distance": 56929.97,
    "offset": 49.86
  },
  {
    "run1_idx": 2412,
    "run2_idx": 3639,
    "joint_number": 15960,
    "run1_distance": 56920.04,
    "run2_distance": 56947.14,
    "offset": 27.1
  },
  {
    "run1_idx": 2413,
    "run2_idx": 3640,
    "joint_number": 15970,
    "run1_distance": 56936.15,
    "run2_distance": 56965.61,
    "offset": 29.46
  },
  {
    "run1_idx": 2415,
    "run2_idx": 3642,
    "joint_number": 15980,
    "run1_distance": 56943.76,
    "run2_distance": 56971.73,
    "offset": 27.97
  },
  {
    "run1_idx": 2416,
    "run2_idx": 3645,
    "joint_number": 15990,
    "run1_distance": 56983.8,
    "run2_distance": 57011.76,
    "offset": 27.96
  },
  {
    "run1_idx": 2417,
    "run2_idx": 3646,
    "joint_number": 16000,
    "run1_distance": 57018.97,
    "run2_distance": 57027.92,
    "offset": 8.95
  },
  {
    "run1_idx": 2419,
    "run2_idx": 3648,
    "joint_number": 16010,
    "run1_distance": 57029.27,
    "run2_distance": 57035.44,
    "offset": 6.17
  },
  {
    "run1_idx": 2420,
    "run2_idx": 3649,
    "joint_number": 16020,
    "run1_distance": 57045.96,
    "run2_distance": 57075.61,
    "offset": 29.65
  },
  {
    "run1_idx": 2421,
    "run2_idx": 3650,
    "joint_number": 16030,
    "run1_distance": 57085.89,
    "run2_distance": 57110.89,
    "offset": 25
  },
  {
    "run1_idx": 2423,
    "run2_idx": 3652,
    "joint_number": 16040,
    "run1_distance": 57107.54,
    "run2_distance": 57121.12,
    "offset": 13.58
  },
  {
    "run1_idx": 2424,
    "run2_idx": 3653,
    "joint_number": 16050,
    "run1_distance": 57124.28,
    "run2_distance": 57138.04,
    "offset": 13.76
  },
  {
    "run1_idx": 2426,
    "run2_idx": 3654,
    "joint_number": 16060,
    "run1_distance": 57138.79,
    "run2_distance": 57178.03,
    "offset": 39.24
  },
  {
    "run1_idx": 2428,
    "run2_idx": 3656,
    "joint_number": 16070,
    "run1_distance": 57178.77,
    "run2_distance": 57199.96,
    "offset": 21.19
  },
  {
    "run1_idx": 2429,
    "run2_idx": 3658,
    "joint_number": 16080,
    "run1_distance": 57184.56,
    "run2_distance": 57216.7,
    "offset": 32.14
  },
  {
    "run1_idx": 2430,
    "run2_idx": 3661,
    "joint_number": 16090,
    "run1_distance": 57189.54,
    "run2_distance": 57231.15,
    "offset": 41.61
  }
];
