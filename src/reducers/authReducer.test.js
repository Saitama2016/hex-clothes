import { authReducer } from './index';
import {
    setAuthToken,
    clearAuth,
    authRequest,
    authSuccess,
    authError
} from '../actions/auth';

describe('authReducer', () => {
    const authToken1 = 'test auth token';
    const currentUser1 = 'test user';
    const errorMessage = 'error message';

    it('Should set initial state when nothing is passed in', () => {
        const state = authReducer(undefined, { type: '_UNKNOWN'});
        expect(state).toEqual({
            authToken: null,
            currentUser: null,
            loading: false,
            error: null
        });
    });

    it('Should return the current state of an unkown action', () => {
        let currentState = {};
        const state = authReducer(currentState, { type: '_UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setAuthToken', () => {
        it('Should save the token', () => {
            let state;
            state = authReducer(state, setAuthToken(authToken1));
            expect(state).toEqual({
                authToken: authToken1,
                currentUser: null,
                loading: false,
                error: null
            });
        });
    });
    
    describe('clearAuth', () => {
        it('Should clear the token', () => {
            let state = ({
                authToken: authToken1,
                currentUser: null,
                loading: false,
                error: null
            });
            state = authReducer(state, clearAuth());
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: false,
                error: null
            });
        });
    });

    describe('authRequest', () => {
        it('Should request a token', () => {
            let state;
            state = authReducer(state, authRequest());
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: true,
                error: null
            });
        });
    });

    describe('authSuccess', () => {
        it('Should save current user', () => {
            let state = ({
                authToken: null,
                currentUser: null,
                loading: true,
                error: null
            });
            state = authReducer(state, authSuccess(currentUser1));
            expect(state).toEqual({
                authToken: null,
                currentUser: currentUser1,
                loading: false,
                error: null
            });
        });
    });

    describe('authError', () => {
        it('Should save the error', () => {
            let state = ({
                authToken: null,
                currentUser: null,
                loading: true,
                error: null
            });
            state = authReducer(state, authError(errorMessage));
            expect(state).toEqual({
                authToken: null,
                currentUser: null,
                loading: false,
                error: errorMessage
            });
        });
    });
});