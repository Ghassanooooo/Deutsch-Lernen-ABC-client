import * as actionType from "./actionTypes";
import axios from "axios";

export const getSubjectsContent = id => async dispatch => {
  try {
    dispatch(setSubjectsContent());
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
export const addSubjectsContent = (data, id, history) => dispatch => {
  dispatch(setSubjectsContent());
  axios
    .post(
      "https://deutsch-lernen-abc.herokuapp.com/api/subjectContent/add/" + id,
      data
    )
    .then(SubjectsContent => {
      history.push("/subject/subject-content/" + SubjectsContent.data.subject);
      dispatch({
        type: actionType.ADD_NEW_SUBJECT_CONTENT,
        payload: SubjectsContent.data
      });
    })
    .catch(e => {
      dispatch({
        type: actionType.GET_ERRORS,
        payload: e.response.data.error || null
      });
    });
};

// Set loading state
export const setSubjectsContent = () => {
  return {
    type: actionType.SUBJECT_CONTENT_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: actionType.CLEAR_ERRORS
  };
};
