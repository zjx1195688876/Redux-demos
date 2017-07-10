import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { todoApp } from './components/App.js';

let store = createStore(todoApp);

render(
    <Provider store={ store }>
		<App></App>
	</Provider>,
    document.getElementById('app')
);