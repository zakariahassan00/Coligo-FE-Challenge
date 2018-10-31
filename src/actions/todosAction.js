import {GET_TODOS} from './types';
import getFakeTodos from '../services/fakeTodos';

export const getTodos = () => dispatch => {
    const fakeData = getFakeTodos();
    dispatch({
        type: GET_TODOS,
        payload: fakeData
    })
}