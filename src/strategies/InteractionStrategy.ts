import { ExecutionContext } from "../core/ExecutionContext";

export interface InteractionStrategy<TInput = any, TOutput = any> {
  supports(intentName: string, context: ExecutionContext): boolean;
  execute(input: TInput): Promise<TOutput>;
}
