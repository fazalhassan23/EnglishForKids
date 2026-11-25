export interface MasteryEvidence {
  correctResponses: number;
  totalResponses: number;
  recentCorrectResponses: number;
  recentResponses: number;
}
export interface MasteryPolicy {
  minimumAttempts: number;
  minimumRecentAttempts: number;
  overallThreshold: number;
  recentThreshold: number;
}
export type MasteryCriterion =
  "INSUFFICIENT_ATTEMPTS" | "RECENT_PERFORMANCE" | "OVERALL_PERFORMANCE";
export interface MasteryEvaluation {
  mastered: boolean;
  overallAccuracy: number;
  recentAccuracy: number;
  unmetCriteria: MasteryCriterion[];
  recommendation: "ADVANCE" | "PRACTICE" | "REVIEW";
}

export const defaultMasteryPolicy: MasteryPolicy = {
  minimumAttempts: 8,
  minimumRecentAttempts: 4,
  overallThreshold: 0.8,
  recentThreshold: 0.75,
};

function validCount(value: number) {
  return Number.isInteger(value) && value >= 0;
}
function validateEvidence(evidence: MasteryEvidence) {
  if (
    !Object.values(evidence).every(validCount) ||
    evidence.correctResponses > evidence.totalResponses ||
    evidence.recentCorrectResponses > evidence.recentResponses ||
    evidence.recentResponses > evidence.totalResponses
  )
    throw new RangeError("Mastery evidence contains invalid response counts.");
}
function validatePolicy(policy: MasteryPolicy) {
  if (
    !Number.isInteger(policy.minimumAttempts) ||
    !Number.isInteger(policy.minimumRecentAttempts) ||
    policy.minimumAttempts < 1 ||
    policy.minimumRecentAttempts < 1 ||
    policy.minimumRecentAttempts > policy.minimumAttempts ||
    policy.overallThreshold <= 0 ||
    policy.overallThreshold > 1 ||
    policy.recentThreshold <= 0 ||
    policy.recentThreshold > 1
  )
    throw new RangeError("Mastery policy contains invalid thresholds.");
}

export function evaluateMastery(
  evidence: MasteryEvidence,
  policy: MasteryPolicy = defaultMasteryPolicy,
): MasteryEvaluation {
  validateEvidence(evidence);
  validatePolicy(policy);
  const overallAccuracy =
    evidence.totalResponses === 0 ? 0 : evidence.correctResponses / evidence.totalResponses;
  const recentAccuracy =
    evidence.recentResponses === 0 ? 0 : evidence.recentCorrectResponses / evidence.recentResponses;
  const unmetCriteria: MasteryCriterion[] = [];
  if (
    evidence.totalResponses < policy.minimumAttempts ||
    evidence.recentResponses < policy.minimumRecentAttempts
  )
    unmetCriteria.push("INSUFFICIENT_ATTEMPTS");
  if (recentAccuracy < policy.recentThreshold) unmetCriteria.push("RECENT_PERFORMANCE");
  if (overallAccuracy < policy.overallThreshold) unmetCriteria.push("OVERALL_PERFORMANCE");
  return {
    mastered: unmetCriteria.length === 0,
    overallAccuracy,
    recentAccuracy,
    unmetCriteria,
    recommendation: unmetCriteria.includes("INSUFFICIENT_ATTEMPTS")
      ? "PRACTICE"
      : unmetCriteria.length === 0
        ? "ADVANCE"
        : "REVIEW",
  };
}

export function hasDemonstratedMastery(evidence: MasteryEvidence, policy?: MasteryPolicy) {
  return evaluateMastery(evidence, policy).mastered;
}
