import { FETCH_STATISTICS_SUCCESS, FETCH_STATISTICS_FAILED } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // case ADD_INVENTORY_SUCCESS:
        //     return state;
        case FETCH_STATISTICS_SUCCESS:
            return {
                ...state,
                ...payload
            }
        // case ADD_INVENTORY_FAIL:
        //     return state;
        case FETCH_STATISTICS_FAILED:
            return []

        default:
            return state;
    }

}