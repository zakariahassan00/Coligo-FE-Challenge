import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import announReducer from "./announReducer";

// combine reducers -- every value has its own reducer
export default combineReducers({
  announcements: announReducer,
  todos: todoReducer
});
