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

export const REMOVE_OUTFIT = 'REMOVE_OUTFIT';
export const removeOutfit = (id, message) => ({
    type: REMOVE_OUTFIT,
    id,
    message
});

// Create Get Fetch function 
export const getOutfits = outfits => dispatch => {
    dispatch(outfitsSuccess());
    return fetch(`${API_BASE_URL}/users/:id/outfits`, {
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
    return fetch(`${API_BASE_URL}/users/:id/outfits/:outfitId`, {
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
export const createOutfit = outfit => dispatch => {
    dispatch(addOutfit());
    return fetch(`${API_BASE_URL}/users/:id/outfits`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(res => normalizeResponseErrors(res))
        .then(outfit => addOutfit(outfit))
        .catch(err => {
            dispatch(outfitsError(err.message || 'Could not create outfit'))
            throw err
        });
};

// Create Fetch function to update outfit
// export const updateOutfit =  => dispatch {
//     dispatch
// }


// Create Fetch function to delete outfit