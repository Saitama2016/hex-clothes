import {
    USERS_REQUEST,
    USERS_SUCCESS,
    USERS_ERROR,
    SET_EDITING
} from '../actions/users';

const initialState = {
    user: '',
    editing: false,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === USERS_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === USERS_SUCCESS) {
        return Object.assign({}, state, {
            user: action.user,
            loading: false,
            error: null
        });
    } else if (action.type === USERS_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    } else if (action.type === SET_EDITING) {
        return Object.assign({}, state, {
            editing: action.editing
        });
    }
    return state;
}