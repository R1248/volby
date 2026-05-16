# Simulation Data v0.3

Runtime source of truth is the NMS-calibrated weighted field:

`outputs/cz_voter_points_50000_ess10_eb103_8d_nms_weighted.csv`

Do not use the older uncalibrated ESS-only field for runtime support calculations.

The prepare script converts the CSV into compact JSON:

`src/simulation/data/voterField.v03.json`

It also writes:

- `src/simulation/data/voterField.v03.regionalized.json` for the full 14-kraj particle field.
- `src/simulation/data/voterField.v03.regionalized.clustered.json` for faster weekly gameplay calculations.

The weekly runtime uses the clustered regional file. Full regional particles are kept for final election/debug calculations.
