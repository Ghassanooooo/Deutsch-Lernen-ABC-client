import * as actionType from "./actionTypes";
import axios from "axios";

export const getSubjectsContent = id => async dispatch => {
  dispatch(setPostLoading());
  try {
    const subjectsContent = await axios.get(
      "https://deutsch-lernen-abc.herokuapp.com/api/subjectContent/" + id
    );
    if (subjectsContent) {
      dispatch({
        type: actionType.FETCH_SUBJECT_CONTENT_SUCCEED,
        payload: subjectsContent.data
      });
    }
  } catch (e) {
    dispatch({
      type: actionType.FETCH_SUBJECT_CONTENT_FAILED
    });
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data.error || null
    });
  }
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: actionType.LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionType.CLEAR_ERRORS
  };
};
