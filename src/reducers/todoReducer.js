import { GET_TODOS } from "../actions/types";


const initialState = {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                data: action.payload
            }
        default : {
            return state
        }
    }
}