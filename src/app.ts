import {AddTodo, Store} from './store';
import {ADD_TODO, REMOVE_TODO} from "./store/actions";

import { reducer } from "./store/reducers";
import { renderTodos } from "./utils";

//import todas as actions/creators
import * as fromActions from './store/actions';


const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

let reducers = {
  todo: reducer,
};

const store = new Store(reducers);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const todo = { label: input.value, complete: false };

    store.dispatch(new AddTodo(todo));

    input.value = ''
  },
  false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
