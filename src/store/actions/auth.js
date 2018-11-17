import * as actionType from "./actionTypes";
import axios from "axios";

export const signup = (data, history) => async dispatch => {
  try {
    const user = await axios.post(
      "https://deutsch-lernen-abc.herokuapp.com/api/user/signup",
      data
    );
    if (user) {
      history.push("/login");
    }
  } catch (e) {
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data.error
    });
  }
};

export const login = (history, data) => async dispatch => {
  try {
    const user = await axios.post(
      "https://deutsch-lernen-abc.herokuapp.com/api/user/login",
      data
    );
    if (user) {
      dispatch({
        type: actionType.LOGIN,
        payload: user
      });
      history.push("/");
    }
  } catch (e) {
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data.error
    });
  }
};
