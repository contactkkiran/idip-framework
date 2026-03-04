export interface RiskFactors {
  changeImpact: number;
  historicalFailures: number;
  criticality: number;
}

export class RiskEngine {
  calculate(factors: RiskFactors): number {
    return (
      factors.changeImpact * 2 +
      factors.historicalFailures * 1.5 +
      factors.criticality * 3
    );
  }

  shouldExecute(score: number): boolean {
    return score >= 5;
  }
}
