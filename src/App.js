// @flow

import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import './App.css';
import reducers from './reducers';

import Header from './components/Header';
import Filters from './containers/Filters';
import FilmList from './containers/FilmList';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxLogger));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Filters />
        <FilmList />
      </div>
    </Provider>
  );
}
