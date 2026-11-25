import { describe, expect, it } from "vitest";
import { hasDemonstratedMastery } from "./calculate-mastery";

describe("hasDemonstratedMastery", () => {
  it("requires enough evidence and sustained recent performance", () => {
    expect(
      hasDemonstratedMastery({
        correctResponses: 8,
        totalResponses: 10,
        recentCorrectResponses: 3,
        recentResponses: 4,
      }),
    ).toBe(true);
    expect(
      hasDemonstratedMastery({
        correctResponses: 4,
        totalResponses: 5,
        recentCorrectResponses: 4,
        recentResponses: 5,
      }),
    ).toBe(false);
    expect(
      hasDemonstratedMastery({
        correctResponses: 8,
        totalResponses: 10,
        recentCorrectResponses: 2,
        recentResponses: 4,
      }),
    ).toBe(false);
  });
});
