import { Page } from "@playwright/test";
import { InteractionStrategy } from "./InteractionStrategy";
import { ExecutionContext } from "../core/ExecutionContext";

export class UIAuthenticateStrategy implements InteractionStrategy<
  any,
  boolean
> {
  constructor(private page: Page) {}

  supports(intentName: string, context: ExecutionContext): boolean {
    return intentName === "Authenticate" && context.channel === "UI";
  }

  async execute(input: any): Promise<boolean> {
    console.log("Executing UI Authentication via OrangeHRM");

    // Navigate to OrangeHRM login page
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );

    // Wait for login form to be visible
    await this.page.getByPlaceholder("Username").waitFor();

    // Fill credentials
    await this.page.getByPlaceholder("Username").fill(input.username);
    await this.page.getByPlaceholder("Password").fill(input.password);

    // Click Login button
    await this.page.getByRole("button", { name: "Login" }).click();

    // Wait until dashboard loads
    await this.page.waitForURL("**/dashboard/**");

    console.log("UI Authentication successful");

    return true;
  }
}
