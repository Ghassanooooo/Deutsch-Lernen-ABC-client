import * as actionType from "./actionTypes";
import axios from "axios";

export const getSubjects = id => async dispatch => {
  dispatch(setPostLoading());
  console.log(id);

  try {
    const subject = await axios.get(
      "https://deutsch-lernen-abc.herokuapp.com/api/subject/" + id
    );
    if (subject) {
      console.log(subject.data);
      dispatch({
        type: actionType.FETCH_SUBJECT_SUCCEED,
        payload: subject.data
      });
    }
  } catch (e) {
    dispatch({
      type: actionType.FETCH_SUBJECT_FAILED
    });
    dispatch({
      type: actionType.GET_ERRORS,
      payload: e.response.data.error || null
    });
  }
};
export const addSubject = (data, id, history) => dispatch => {
  axios
    .post(
      "https://deutsch-lernen-abc.herokuapp.com/api/subject/add/" + id,
      data
    )
    .then(subject => {
      dispatch({
        type: actionType.ADD_NEW_SUBJECT,
        payload: subject.data
      });
      history.push(`/subject/subject-content/${subject.data._id}`);
    })
    .catch(e => {
      dispatch({
        type: actionType.GET_ERRORS,
        payload: e.response.data.error || null
      });
    });
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
