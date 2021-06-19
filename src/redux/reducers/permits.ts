import * as types from '../types';

const initialState = {
  permits: [],
  loading: false,
  error: null
};


export default function permits(state = initialState, action: any) {
  switch (action.type) {
    case types.GET_PERMITS:
      return {
        ...state,
        loading: true,
      }
    case types.GET_PERMITS_SUCCESS:
      return {
        ...state,
        loading: false,
        permits: action.permits
      }
    case types.GET_PERMITS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.message
      }
      
    default:
      return state;
  }
}