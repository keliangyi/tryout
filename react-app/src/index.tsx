import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Tc as todo } from './model';
import { observer } from 'mobx-react-lite';

// const todo = new Todo()
const Count:FC = observer(() => {
	// const todo = useTodo()
	return <h1>todo counts：{ todo.count }</h1>
})

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Count />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
