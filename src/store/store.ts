

export class Store {
  private subscribers: Function[];
  private reducers: { [key:string]: Function }
  private state: {[key: string]: any};



  constructor(reducers={}, initialState ={}) {


    this.subscribers = [];

    //pega os dados do reducers do app.ts
    this.reducers = reducers;

    //dados já salvos
    this.state = this.reduce(initialState, {});
  }

  get value() {
    return this.state;
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    this.notify();

    return() => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn)
    }
  }

  dispatch(action) {
    //todo/duvida de como os dados do this.reducers, que vem do app.ts, enntram na classe
    this.state = this.reduce(this.state, action);
    this.notify();
  }

  private notify() {
    this.subscribers.forEach(fn => fn(this.value))
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }

}


