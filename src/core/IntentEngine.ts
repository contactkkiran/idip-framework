import { ExecutionContext } from "./ExecutionContext";
import { InteractionStrategy } from "../strategies/InteractionStrategy";

export class IntentEngine {
  constructor(
    private strategies: InteractionStrategy[],
    private context: ExecutionContext,
  ) {}

  async perform<TInput, TOutput>(
    intentName: string,
    input: TInput,
  ): Promise<TOutput> {
    const strategy = this.strategies.find((s) =>
      s.supports(intentName, this.context),
    );

    if (!strategy) {
      throw new Error(`No strategy found for intent: ${intentName}`);
    }

    return strategy.execute(input);
  }
}
