// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './components/App';

// ReactDOM.render(<App></App>, document.getElementById('app'));

import { createStore } from 'redux';

const initialState = {
  result: 1,
  lastValues: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, state.result + action.payload]
      }
      break;

    case 'SUBTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, state.result - action.payload]
      }
      break;
  
    default:
      break;
  }

  return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: 'ADD',
  payload: 6
})

store.dispatch({
  type: 'SUBTRACT',
  payload: 100
})