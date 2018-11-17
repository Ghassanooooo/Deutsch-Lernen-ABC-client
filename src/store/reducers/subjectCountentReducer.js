import * as actionType from "../actions/actionTypes";

const initialState = {
  subjectCountent: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCH_SUBJECT_CONTENT_SUCCEED:
      return {
        ...state,
        subjectCountent: action.payload,
        loading: false
      };

    case actionType.LOADING:
      return {
        ...state,
        loading: true
      };
    case actionType.FETCH_SUBJECT_CONTENT_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
