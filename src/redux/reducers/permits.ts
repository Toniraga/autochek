import * as types from '../types';

const initialState = {
  permits: [],
};


export default function permits(state = initialState, action: any) {
  switch (action.type) {
    case types.GET_PERMITS:
      return {
        ...state,
        permits: action.payload
      }
    default:
      return state;
  }
}