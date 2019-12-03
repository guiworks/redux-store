import {AddTodo, RemoveTodo, Store} from './store';

import { reducer } from "./store/reducers";

import { renderTodos } from "./utils";

//import todas as actions/creators
import * as fromActions from './store/actions';


const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const subscribe = document.querySelector('.subscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;

let reducers = {
  todos: reducer,
};

const store = new Store(reducers);

button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;

    const todo = {label: input.value, complete: false};

    store.dispatch(new AddTodo(todo));

    input.value = ''
  },
  false
);

store.subscribe(state => {
  renderTodos(state.todos.data);
});

// destroy.addEventListener('click', unsubscribe, false);

todoList.addEventListener('click', function (event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    const todo = JSON.parse(target.getAttribute('data-todo') as any);
    store.dispatch(new RemoveTodo(todo));
  }
});

store.subscribe(state => console.log('STATE:::', state));


