

export class Store {
  private subscribers: Function[];
  private reducers: { [key:string]: Function }
  private state: {[key: string]: any};



  constructor(reducers={}, initialState ={}) {

    //pega os dados do reducers do app.ts
    this.reducers = reducers;
    this.state = initialState;
  }

  get value(){
    return this.state;
  }

  dispatch(action) {
    //todo/duvida de como os dados do this.reducers, que vem do app.ts, enntram na classe
    this.state = this.reduce(this.state, action);
  }

  private reduce(state, action ){
    const newState = {};
    for(const prop in this.reducers){
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;


  }

}


