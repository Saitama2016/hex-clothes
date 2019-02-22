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

