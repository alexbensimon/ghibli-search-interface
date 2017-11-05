// @flow

import { MODIFY_FILTER } from './actionTypes';
import type { Filter } from '../flowTypes/filterType';

// eslint-disable-next-line import/prefer-default-export
export function modifyFilter(filter: Filter) {
  return {
    type: MODIFY_FILTER,
    payload: filter,
  };
}
