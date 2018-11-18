import * as actionType from "./actionTypes";
import axios from "axios";

export const getLevels = () => async dispatch => {
  dispatch(setPostLoading());
  try {
    const levels = await axios.get(
      "https://deutsch-lernen-abc.herokuapp.com/api/level"
    );
    if (levels) {
      dispatch({
        type: actionType.FETCH_LEVELS_SUCCEED,
        payload: levels.data
      });
    }
  } catch (e) {
    dispatch({
      type: actionType.FETCH_LEVELS_FAILED
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
