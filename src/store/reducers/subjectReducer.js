import * as actionType from "../actions/actionTypes";

const initialState = {
  subject: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCH_SUBJECT_SUCCEED:
      return {
        ...state,
        subject: action.payload,
        loading: false
      };

    case actionType.LOADING:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_SUBJECT_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
