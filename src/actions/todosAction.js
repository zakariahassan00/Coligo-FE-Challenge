import { GET_TODOS } from "./types";
import * as getFakeTodos from "../services/fakeTodos";

export const getTodos = () => dispatch => {
  const fakeData = getFakeTodos.getAll();
  dispatch({
    type: GET_TODOS,
    payload: fakeData
  });
};
