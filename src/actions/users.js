const {API_BASE_URL} = require('../config');


export const registerUsers = () => dispatch => {
    fetch(`${API_BASE_URL}/auth/register/`)
}

export const fetchUserProfile = (userId) => dispatch => {
    fetch(`${API_BASE_URL}/users/${userId}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(userProfile => {
        dispatch(fetchUserProfileSuccess(userProfile));
    }).catch(err => dispatch(fetchUserProfileError(err)));
};

/* Make fetch functions */