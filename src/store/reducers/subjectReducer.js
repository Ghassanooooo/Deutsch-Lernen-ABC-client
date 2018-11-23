import * as actionType from "../actions/actionTypes";

const initialState = {
  subjects: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_NEW_SUBJECT:
      return {
        ...state,
        subjects: state.subjects.push(action.payload),
        loading: false
      };
    case actionType.FETCH_SUBJECT_SUCCEED:
      return {
        ...state,
        subjects: action.payload || [],
        loading: false
      };

    case actionType.SUBJECT_LOADING:
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
