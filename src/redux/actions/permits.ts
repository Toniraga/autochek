import * as types from '../types';

export const getPermits = (permits: any) => ({
  type: types.GET_PERMITS,
  payload: permits
});