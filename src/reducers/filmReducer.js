// @flow

import { STORE_FILMS } from '../actions/actionTypes';
import type { Film } from '../flowTypes/filmType';

const initialState = [];

function filmReducer(state: Film[] = initialState, action: { type: string, payload: any }) {
  switch (action.type) {
    case STORE_FILMS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}

export default filmReducer;
