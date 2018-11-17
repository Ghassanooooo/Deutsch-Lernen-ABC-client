import * as actionType from "../actions/actionTypes";

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.LOGIN:
      return action.payload;
    default:
      return state;
  }
}
