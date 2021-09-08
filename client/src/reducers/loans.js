import { FETCH_LOAN_SUCCESS, FETCH_LOAN_FAILED } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        // case ADD_INVENTORY_SUCCESS:
        //     return state;
        case FETCH_LOAN_SUCCESS:
            return {
                ...state,
                ...payload
            }
        // case ADD_INVENTORY_FAIL:
        //     return state;
        case FETCH_LOAN_FAILED:
            return []

        default:
            return state;
    }

}