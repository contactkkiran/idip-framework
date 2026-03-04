export interface Transition {
  from: string;
  intent: string;
  to: string;
}

export class StateMachine {
  private currentState: string;

  constructor(
    initialState: string,
    private transitions: Transition[],
  ) {
    this.currentState = initialState;
  }

  apply(intent: string) {
    const transition = this.transitions.find(
      (t) => t.from === this.currentState && t.intent === intent,
    );

    if (!transition) {
      throw new Error(
        `Invalid transition from ${this.currentState} using ${intent}`,
      );
    }

    this.currentState = transition.to;
  }

  getState() {
    return this.currentState;
  }
}
