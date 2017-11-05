// @flow

import { MODIFY_FILTER } from '../actions/actionTypes';

const initialState = {
  title: '',
  director: '',
  producer: '',
};

export default function filterReducer(
  state: any = initialState,
  action: { type: string, payload: any },
) {
  switch (action.type) {
    case MODIFY_FILTER:
      return { ...state, [action.payload.property]: action.payload.value };

    default:
      return state;
  }
}
