import * as types from '../actions/actionTypes';

const initialState = {
  place: 'cn'
};

export default function esports(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_PLACE:
        console.log("changed");
      return {
        ...state,
        place: 'us'
      };
    default:
      return state;
  }
}
export {
    esports
}
