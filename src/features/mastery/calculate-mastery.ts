export interface MasteryEvidence {
  correctResponses: number;
  totalResponses: number;
  recentCorrectResponses: number;
  recentResponses: number;
}

export interface MasteryPolicy {
  minimumAttempts: number;
  overallThreshold: number;
  recentThreshold: number;
}

export const defaultMasteryPolicy: MasteryPolicy = {
  minimumAttempts: 8,
  overallThreshold: 0.8,
  recentThreshold: 0.75,
};

export function hasDemonstratedMastery(
  evidence: MasteryEvidence,
  policy: MasteryPolicy = defaultMasteryPolicy,
): boolean {
  if (evidence.totalResponses < policy.minimumAttempts || evidence.recentResponses === 0) {
    return false;
  }

  return (
    evidence.correctResponses / evidence.totalResponses >= policy.overallThreshold &&
    evidence.recentCorrectResponses / evidence.recentResponses >= policy.recentThreshold
  );
}
