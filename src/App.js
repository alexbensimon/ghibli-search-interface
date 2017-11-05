// @flow

import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import './App.css';
import logo from './logo.svg';
import filmReducer from './reducers/filmReducer';

import Root from './containers/Root';

const store = createStore(filmReducer, {}, applyMiddleware(ReduxThunk, ReduxLogger));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* eslint-disable jsx-a11y/accessible-emoji */}
          <h1 className="App-title">Welcome to Ghibli Search Interface 😻🔍</h1>
        </header>
        <Root />
      </div>
    </Provider>
  );
}
