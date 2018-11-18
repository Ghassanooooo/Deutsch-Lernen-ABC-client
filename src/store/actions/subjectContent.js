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
export const addSubjectCountent = (
  id,
  SubjectCountentData,
  history
) => async dispatch => {
  axios
    .post(
      "https://deutsch-lernen-abc.herokuapp.com/api/CountentContent/add/5bf180bae30f0300168d98f3",
      SubjectCountentData
    )
    .then(res => console.log(res.data));
  console.log(SubjectCountentData);
  console.log(id);
  // try {
  //   const subjectCountent = await axios.post(
  //     "https://deutsch-lernen-abc.herokuapp.com/api/CountentContent/add/" + id,
  //     data
  //   );
  //   if (subjectCountent) {
  //     console.log("sssss", id);
  //     //  history.push(`/subject/subject-content/${subjectCountent.data._id}`);
  //   }
  // } catch (e) {
  //   dispatch({
  //     type: actionType.GET_ERRORS,
  //     payload: e.response.data.error || null
  //   });
  // }
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
