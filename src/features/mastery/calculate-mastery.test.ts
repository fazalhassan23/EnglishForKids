import { describe, expect, it } from "vitest";
import { evaluateMastery, hasDemonstratedMastery } from "./calculate-mastery";

describe("evaluateMastery", () => {
  it("advances after enough overall and recent evidence", () => {
    expect(
      evaluateMastery({
        correctResponses: 8,
        totalResponses: 10,
        recentCorrectResponses: 3,
        recentResponses: 4,
      }),
    ).toMatchObject({ mastered: true, recommendation: "ADVANCE" });
  });
  it("explains insufficient recent evidence", () => {
    expect(
      evaluateMastery({
        correctResponses: 8,
        totalResponses: 10,
        recentCorrectResponses: 1,
        recentResponses: 1,
      }),
    ).toMatchObject({
      mastered: false,
      recommendation: "PRACTICE",
      unmetCriteria: ["INSUFFICIENT_ATTEMPTS"],
    });
  });
  it("recommends review after a recent performance drop", () => {
    expect(
      evaluateMastery({
        correctResponses: 8,
        totalResponses: 10,
        recentCorrectResponses: 2,
        recentResponses: 4,
      }),
    ).toMatchObject({
      mastered: false,
      recommendation: "REVIEW",
      unmetCriteria: ["RECENT_PERFORMANCE"],
    });
  });
  it.each([
    { correctResponses: -1, totalResponses: 1, recentCorrectResponses: 0, recentResponses: 1 },
    { correctResponses: 2, totalResponses: 1, recentCorrectResponses: 1, recentResponses: 1 },
    { correctResponses: 1, totalResponses: 2, recentCorrectResponses: 2, recentResponses: 1 },
  ])("rejects invalid evidence", (evidence) => {
    expect(() => hasDemonstratedMastery(evidence)).toThrow(RangeError);
  });
});
