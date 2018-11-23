import * as actionType from "../actions/actionTypes";

const initialState = {
  subjectsCountent: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_NEW_SUBJECT_CONTENT:
      return {
        ...state,
        subjectsCountent: action.payload,
        loading: false
      };
    case actionType.FETCH_SUBJECT_CONTENT_SUCCEED:
      return {
        ...state,
        subjectsCountent: action.payload || null,
        loading: false
      };

    case actionType.SUBJECT_CONTENT_LOADING:
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
