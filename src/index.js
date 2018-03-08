import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createStore from './createStore'
import changeCount from './reducers/changeCount'

const store = createStore(changeCount)

export function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

store.dispatch({ type: '@@INIT' });

