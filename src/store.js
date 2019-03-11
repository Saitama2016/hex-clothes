import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/authReducer';
import usersReducer from './reducers/users';
import outfitReducer from './reducers/createOutfits';
import { loadAuthToken } from './localStorage';
import { setAuthToken, refreshAuthToken } from './actions/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        form: formReducer,
        authReducer,
        usersReducer,
        outfit: outfitReducer
    }), 
    composeEnhancers(applyMiddleware(thunk))
);

const authToken = loadAuthToken();
if (authToken) {
    store.dispatch(setAuthToken(authToken));
    store.dispatch(refreshAuthToken());
}

export default store;