import { InteractionStrategy } from "./InteractionStrategy";
import { ExecutionContext } from "../core/ExecutionContext";

export class APIAuthenticateStrategy implements InteractionStrategy<
  any,
  boolean
> {
  supports(intentName: string, context: ExecutionContext): boolean {
    return intentName === "Authenticate" && context.channel === "API";
  }

  async execute(input: any): Promise<boolean> {
    console.log("Executing API Authentication (Simulated)");

    // In real enterprise system this would call:
    // await request.post("/api/login")

    return true;
  }
}
