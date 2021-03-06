import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const OUTFITS_REQUEST = 'OUTFIT_REQUEST';
export const outfitsRequest = () => ({
    type: OUTFITS_REQUEST
});

export const OUTFITS_SUCCESS = 'OUTFITS_SUCCESS';
export const outfitsSuccess = outfits => ({
    type: OUTFITS_SUCCESS,
    outfits
});

export const OUTFITS_ERROR = 'OUTFITS_ERROR';
export const outfitsError = error => ({
    type: OUTFITS_ERROR,
    error
});

export const OUTFIT_SUCCESS = 'OUTFIT_SUCCESS';
export const outfitSuccess = outfit => ({
    type: OUTFIT_SUCCESS,
    outfit
});

export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const updateSuccess = () => ({
    type: UPDATE_SUCCESS,
});

export const SET_EDITING = 'SET_EDITING';
export const setEditing = (editing, editType) => ({
    type: SET_EDITING,
    editing,
    editType
});

export const ADD_OUTFIT = 'ADD_OUTFIT';
export const addOutfit = outfit => ({
    type: ADD_OUTFIT,
    outfit
});

export const EDIT_OUTFIT = 'EDIT_OUTFIT';
export const editOutfit = outfit => ({
    type: EDIT_OUTFIT,
    outfit
});

export const REMOVE_OUTFIT = 'REMOVE_OUTFIT';
export const removeOutfit = (id, message) => ({
    type: REMOVE_OUTFIT,
    id,
    message
});

// Create Get Fetch function 
export const getOutfits = outfits => dispatch => {
    dispatch(outfitsSuccess());
    return fetch(`${API_BASE_URL}/outfits`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(outfits)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(outfits => dispatch(outfitsSuccess(outfits)))
        .catch(err => {
            dispatch(outfitsError(err.message || 'Could not get your outfits'))
            throw err
        });
};

//Get Oufit by Id
export const getOutfitById = outfit => dispatch => {
    dispatch(outfitSuccess());
    return fetch(`${API_BASE_URL}/outfits/:id`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(outfit)
    })
        .then(res => normalizeResponseErrors(res))
        .then(outfit => dispatch(outfitSuccess(outfit)))
        .catch(err => {
            dispatch(outfitsError(err.message || 'Could not retrieve your outfit'))
            throw err
        });
};

// Create Fetch function create
export const createOutfit = (outfit) => (dispatch, getState) => {
    const outfitObject = {
        outfit
    }
    dispatch(addOutfit());
    const authToken = getState().authToken.authToken;
    return fetch(`${API_BASE_URL}/outfits`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(outfitObject)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(outfit => dispatch(outfitSuccess(outfit)))
        .catch(err => {
            dispatch(outfitsError(err.message || 'Could not create outfit'))
            throw err
        });
}

// Create Fetch function to update outfit
export const updateOutfit = (id, values) => (dispatch, getState) => {
    dispatch(outfitsRequest());
    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/outfits/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(values)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(updateSuccess()))
        .catch(err => {
            dispatch(outfitsError(err.message || 'Error updating outfit.'))
            throw err
        });
}

// Create Fetch function to delete outfit
export const deleteOutfit = id => (dispatch, getState) => {
    dispatch(outfitsRequest());
    const authToken = getState().authReducer.authToken;
    return fetch(`${API_BASE_URL}/outfits/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((res) => dispatch(removeOutfit(res.message)))
        .catch(err => {
            dispatch(outfitsError(err.message || 'Error deleting outfit.'))
            throw err
        });
};