import * as actionType from "./actionTypes";
import axios from "axios";

export const signup = (data, history) => async dispatch => {
  dispatch(setPostLoading());
  try {
    const user = await axios.post(
      "https://deutsch-lernen-abc.herokuapp.com/api/user/signup",
      data
    );
    if (user) {
      dispatch(clearErrors());
      history.push("/login");
    }
  } catch (e) {
    dispatch({
      type: actionType.LOGIN_FAILED
    });
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data.error
    });
  }
};

export const login = (data, history) => async dispatch => {
  dispatch(setPostLoading());
  try {
    const user = await axios.post(
      "https://deutsch-lernen-abc.herokuapp.com/api/user/login",
      data
    );
    if (user) {
      dispatch(clearErrors());
      dispatch({
        type: actionType.LOGIN_SUCCEED
      });
      history.push("/");
    }
  } catch (e) {
    dispatch({
      type: actionType.LOGIN_FAILED
    });
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data.error
    });
  }
};
export const logout = history => async dispatch => {
  dispatch(setPostLoading());

  const user = await axios.post(
    "https://deutsch-lernen-abc.herokuapp.com/api/user/logout"
  );
  if (user) {
    dispatch(clearErrors());
    dispatch({
      type: actionType.LOGOUT_SUCCEED
    });
    history.push("/");
  }
};
export const currentUser = () => async dispatch => {
  dispatch(setPostLoading());

  const user = await axios.get(
    "https://deutsch-lernen-abc.herokuapp.com/api/user/current-user"
  );
  if (user) {
    dispatch(clearErrors());
    dispatch({
      type: actionType.CURRENT_USER,
      payload: user
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
