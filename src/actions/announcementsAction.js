import { GET_ANNOUNCEMENTS } from './types';
import getFakeAnnouncements from '../services/fakeAnnouncements'

export const getAnnouncements = () => dispatch => {
    const fakeData = getFakeAnnouncements();
    dispatch({
        type : GET_ANNOUNCEMENTS ,
        payload: fakeData
    })
}




