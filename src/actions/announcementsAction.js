import { GET_ANNOUNCEMENTS } from "./types";
import * as getFakeAnnouncements from "../services/fakeAnnouncements";

export const getAnnouncements = () => dispatch => {
  const fakeData = getFakeAnnouncements.getAll();

  dispatch({
    type: GET_ANNOUNCEMENTS,
    payload: fakeData
  });
};
