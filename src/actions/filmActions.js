// @flow

import { STORE_FILMS } from './actionTypes';
import type { Film } from '../flowTypes/filmType';

export function storeFilms(films: Film[]) {
  return {
    type: STORE_FILMS,
    payload: films,
  };
}

export function fetchFilms() {
  return async (dispatch: Function) => {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    if (response.status !== 200) {
      console.log(`Problem while fetching Ghibli API: ${response.status}`);
      return;
    }
    const films = await response.json();
    dispatch(storeFilms(films));
  };
}
