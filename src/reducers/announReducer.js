import { GET_ANNOUNCEMENTS } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ANNOUNCEMENTS:
      return {
        ...state,
        data: action.payload
      };
    default: {
      return state;
    }
  }
};
