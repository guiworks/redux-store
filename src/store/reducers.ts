import * as fromActions from './actions';
import {ADD_TODO, REMOVE_TODO} from "./actions";

export const initialState = {
  loaded: false,
  loading: false,
  data: [{label: 'Eat pizza', complete: false}],
};


export function reducer(

  //initialState contém a 'data' armazenada na store.
  state = initialState,
  action: {type: string, payload: any}
  ) {

  switch (action.type) {
    case ADD_TODO: {

      console.log('old-data', state)

      //novos dados para inserção
      const todo = action.payload

      //é onde acontece o merge do initialState (dados que ja estavam salvos), com os novos dados da variavel
      // todo que vem do payload
      const data = [...state.data, todo];
      console.log('data', data)

      return {
        ...state,
        data,
      };
    }

    case REMOVE_TODO:{
      console.log("Remove_Todo")
    }
  }

  return state;
}
