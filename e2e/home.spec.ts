import { expect, test } from "@playwright/test";

test("renders the foundation home page", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("main")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1, name: "BrightPath English" })).toBeVisible();
});
