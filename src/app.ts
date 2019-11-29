
import { renderTodos } from './utils';
import { Store } from './store';
import { reducer} from "./store/reducers";

const input = document.querySelector('input') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const destroy = document.querySelector('.unsubscribe') as HTMLButtonElement;
const todoList = document.querySelector('.todos') as HTMLLIElement;



let reducers = {
  todo: reducer
};

const state = {
  todos: {
    loaded: false,
    loading: false,
    data: []
  }
};

const store = new Store(reducers);


button.addEventListener(
  'click',
  () => {
    if (!input.value.trim()) return;



    const payload = { label: input.value, complete: true };

    store.dispatch({
      type: 'ADD_TODO',
      payload
    })


    input.value = '';

    console.log('store.value', store.value)
  },
  false
);

todoList.addEventListener('click', function(event) {
  const target = event.target as HTMLButtonElement;
  if (target.nodeName.toLowerCase() === 'button') {
    console.log(target);
  }
});
