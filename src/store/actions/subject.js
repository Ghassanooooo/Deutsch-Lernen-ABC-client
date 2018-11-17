import * as actionType from "./actionTypes";
import axios from "axios";

export const getSubjects = id => async dispatch => {
  dispatch(setPostLoading());
  console.log(id);
  axios
    .get("https://deutsch-lernen-abc.herokuapp.com/api/subject/:" + id)
    .then(data => console.log(data.data));
  //   try {
  //     const subject = await axios.get(
  //       "https://deutsch-lernen-abc.herokuapp.com/api/subject/:" + id
  //     );
  //     if (subject) {
  //       console.log(subject.data);
  //       dispatch({
  //         type: actionType.FETCH_SUBJECT_SUCCEED,
  //         payload: subject.data
  //       });
  //     }
  //   } catch (e) {
  //     dispatch({
  //       type: actionType.FETCH_SUBJECT_FAILED
  //     });
  //     dispatch({
  //       type: actionType.GET_ERRORS,
  //       payload: e.response.data.error || null
  //     });
  //   }
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
