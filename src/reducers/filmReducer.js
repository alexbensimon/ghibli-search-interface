// @flow

import { STORE_FILMS } from '../actions/actionTypes';
import type { Film } from '../flowTypes/filmType';

export default function filmReducer(state: Film[] = [], action: { type: string, payload: any }) {
  switch (action.type) {
    case STORE_FILMS:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
