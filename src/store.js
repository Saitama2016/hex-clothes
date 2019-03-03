import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import outfitReducer from './reducers/createOutfits';
import authReducer from './reducers/authReducer';
import { loadAuthToken } from './localStorage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const store = createStore(
    combineReducers({
        authReducer: authReducer,
        form: formReducer,
        outfitReducer: outfitReducer
    }), 
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    store.dispatch(setAuthToken(authToken));
    store.dispatch(refreshAuthToken());
}

export default store;