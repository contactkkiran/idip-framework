import { test } from "@playwright/test";
import {
  IntentEngine,
  ExecutionContext,
  UIAuthenticateStrategy,
  APIAuthenticateStrategy,
} from "../src";

test("Enterprise Multi-Channel Execution Demo", async ({ page }) => {
  // Shared context object
  const context: ExecutionContext = {
    channel: "UI",
    environment: "QA",
    role: "admin",
  };

  const strategies = [
    new UIAuthenticateStrategy(page),
    new APIAuthenticateStrategy(),
  ];

  const engine = new IntentEngine(strategies, context);

  // 🔹 Step 1 – Execute via UI
  await engine.perform("Authenticate", {
    username: "Admin",
    password: "admin123",
  });

  console.log("Authentication completed via UI");

  // 🔹 Step 2 – Switch channel dynamically
  context.channel = "API";

  await engine.perform("Authenticate", {
    username: "Admin",
    password: "admin123",
  });

  console.log("Authentication completed via API");
});
