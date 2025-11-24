# Asset Summary Logic Documentation

This document explains how **KeyInsights** and **Recommendations** are calculated for individual assets in the Fleet Intelligence module.

## Metrics Used

The following metrics are used for calculation:

*   **Revenue**: `revenueAchieved`
*   **Distance**: `achievedDistance`
*   **Utilization**: `revenueAchievementScore`
*   **Connectivity**: `downtimeRiskScore`

## Derived Metrics

*   **Revenue per KM**: `Revenue / Distance` (Calculated for both the asset and the fleet average)

## Deviation Calculation

Deviations are calculated as the percentage difference between the asset's value and the benchmark (Fleet Average or Industry Benchmark).

## Logic Table

The following table details the conditions that trigger specific insights and recommendations.

| Condition (Logic) | Insight Title | Insight Level | Insight Reason | Recommendation Title | Recommendation Icon |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **High Severity** | | | | | |
| `RevFleetDiff < -10%` AND `UtilFleetDiff < -5%` | Revenue `X%` lower than fleet average; utilization gap at `Y%`. | High | Revenue < Fleet Avg by >10%; Utilization gap >5%. Indicates poor asset performance or route inefficiency. | Review route allocation and asset deployment. Evaluate downtime and driver productivity. | indianRupee |
| `DistFleetDiff < -10%` | Distance covered (`X` km) is `Y%` lower than fleet average. | High | Distance < Fleet Avg by >10%. Asset not running enough trips or under-utilized. | Reassign routes or increase trip frequency for optimal usage. | carCrash |
| `Connectivity < 80%` OR `ConnFleetDiff < -10%` | Connectivity uptime (`X%`) `significantly below fleet average` OR `< 80%` – data reliability risk. | High | Connectivity < Fleet Avg by >10% or below 80% threshold. | Check IoT device health, network stability, or data provider issues. | wifi |
| `Utilization < 65%` | Underutilized asset showing `X%` utilization for past period. | High | Utilization <65%. | Flag for operational inefficiency; assess maintenance or redeployment needs. | carCrash |
| **Medium Severity** | | | | | |
| `-10% <= UtilFleetDiff < -5%` | Utilization at `X%` vs `Y%` fleet average – asset is underused. | Medium | Utilization < Fleet Avg by 5–10%. | Analyze idle time logs, check for maintenance downtime, and reschedule for higher run time. | carCrash |
| `-10% <= RevenuePerKmDiff < -5%` | Asset lags in revenue per km efficiency by `X%` vs fleet average. | Medium | Revenue/km < Fleet Avg by 5–10%. | Optimize load capacity and review pricing or distance efficiency. | indianRupee |
| `DistFleetDiff > 10%` AND `|RevFleetDiff| < 10%` | Distance travelled `X%` higher than fleet avg but revenue comparable – low efficiency. | Medium | High distance with no proportional revenue increase. | Check route profitability and operational cost per km. | carCrash |
| **Low Severity (Neutral/Positive)** | | | | | |
| `|ConnIndustryDiff| <= 5%` AND `Connectivity >= 80%` | Connectivity uptime (`X%`) close to industry avg (`Y%`). | Low | Connectivity uptime within ±5% of industry avg. | Maintain current IoT uptime; ensure stable data transmission. | wifi |
| `UtilFleetDiff > 5%` | Asset performing above fleet average in utilization (`X%` vs `Y%`). | Low | Utilization > Fleet Avg by >5%. Positive performance indicator. | Identify as best-practice asset; replicate operational model across fleet. | carCrash |

## Definitions

*   **RevFleetDiff**: Deviation of Asset Revenue from Fleet Average Revenue.
*   **UtilFleetDiff**: Deviation of Asset Utilization from Fleet Average Utilization.
*   **DistFleetDiff**: Deviation of Asset Distance from Fleet Average Distance.
*   **ConnFleetDiff**: Deviation of Asset Connectivity from Fleet Average Connectivity.
*   **ConnIndustryDiff**: Deviation of Asset Connectivity from Industry Benchmark Connectivity.
*   **RevenuePerKmDiff**: Deviation of Asset Revenue/KM from Fleet Average Revenue/KM.
