export class State {
  stateId: string = '';
  stateInternalId: string = '';
  stateDescription: string = '';

  constructor(obj: Partial<State> = {}) {
    Object.assign(this, obj);
  }
}
