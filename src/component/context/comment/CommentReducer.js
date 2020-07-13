import {
    ADD_VALUE,
    DELETE_VALUE,
    UPDATE_VALUE
} from '../types'

export default (state, action) => {
    switch (action.type) {
        case ADD_VALUE:
            return {
                ...state,

            };
        case DELETE_VALUE:
            return {
                ...state,
            }
        case UPDATE_VALUE:
            return {
                ...state,
            }

        default:
            return state;
    }
}