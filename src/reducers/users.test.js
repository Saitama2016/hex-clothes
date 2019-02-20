import { usersReducer } from './index';
import {
    usersRequest,
    usersSuccess,
    usersError,
    setEditing
} from '../actions/users';

describe ('usersReducer', () => {

    const users1 = 'test auth token';
    const errorMessage = 'error message';

    it('Should set initial state when nothing is passed in', () => {
        const state = usersReducer(undefined, { type: '_UNKNOWN' });
        expect(state).toEqual({
            user: '',
            editing: false,
            loading: false,
            error: null
        });
    });

    it('Should return the current state of an unknonwn action', () => {
        let currentState = {};
        const state = usersReducer(currentState, { type: '_UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('userRequest', () => {
        it('Should request users', () => {
            let state;
            state = usersReducer(state, usersRequest());
            expect(state).toEqual({
                user: '',
                editing: false,
                loading: true,
                error: null
            });
        });
    });

    describe('usersSuccess', () => {
        it('Should have current user', () => {
            let state = ({
                user: '',
                editing: false,
                loading: true,
                error: null
            });
            state = usersReducer(state, usersSuccess(users1));
            expect(state).toEqual({
                user: users1,
                editing: false,
                loading: false,
                error: null
            });
        });
    });

    describe('patternsError', () => {
        it('Should save the error', () => {
            let state = ({
                user: '',
                editing: false,
                loading: true,
                error: null
            });
            state = usersReducer(state, usersError(errorMessage));
            expect(state).toEqual({
                user: '',
                editing: false,
                loading: false,
                error: errorMessage
            });
        });
    });

    describe('setEditing', () => {
        it('Should update editing in state', () => {
            let state = ({
                editing: false,
                loading: false,
                error: null
            });
            state = usersReducer(state, setEditing(true));
            expect(state).toEqual({
                editing: true,
                loading: false,
                error: null
            });
        });
    });
});