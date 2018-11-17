import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import levelsReducer from "./levelReducer";
import subjectsReducer from "./subjectReducer";
import subjectsCountentReducer from "./subjectCountentReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  levels: levelsReducer,
  subjects: subjectsReducer,
  subjectsCountent: subjectsCountentReducer
});
