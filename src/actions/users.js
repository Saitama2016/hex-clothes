import {API_BASE_URL} from '../config';
import { normalizeResponseErrors } from './utils';

export const USERS_REQUEST = 'USERS_REQUEST';
export const usersRequest = () => ({
    type: USERS_REQUEST
});

export const USERS_SUCCESS = 'USERS_SUCCESS';
export const usersSuccess = user => ({
    type: USERS_SUCCESS,
    user
});

export const USERS_ERROR = 'USERS_ERROR';
export const usersError = error => ({
    type: USERS_ERROR,
    error
});

export const SET_EDITING = 'SET_EDITING';
export const setEditing = editing => ({
    type: SET_EDITING,
    editing
});

export const registerUser = user => dispatch => {
    dispatch(usersRequest());
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(user => dispatch(usersSuccess(user)))
        .catch(err => {
            dispatch(usersError(err.message || 'Error submitting Signup Form.'))
            throw err
        });
};

export const fetchUserById = (id) => (dispatch, getState) => {
    dispatch(usersRequest());
    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then((user) => dispatch(usersSuccess(user)))
        .catch(err => {
            dispatch(usersError(err.message || 'Error fetching user.'))
            throw err
        });
};

export const updateUser = (id, values) => (dispatch, getState) => {
    dispatch(usersRequest());
    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/users/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(values)
    })
        .then(res => normalizeResponseErrors(res))
        .then(user => dispatch(usersSuccess(user)))
        .catch(err => {
            dispatch(usersError(err.message || 'Error updating user.'))
            throw err
        });
};

/* Make fetch functions */