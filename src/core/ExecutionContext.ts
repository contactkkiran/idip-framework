export type Channel = "UI" | "API";

export interface ExecutionContext {
  channel: Channel;
  environment?: string;
  role?: string;
}
