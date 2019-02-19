import {
    USERS_REQUEST, usersRequest,
    USERS_SUCCESS, usersSuccess,
    USERS_ERROR, usersError,
    SET_EDITING, setEditing
} from './users';

describe('usersRequest', () => {
    it('Should return the action', () => {
        const action = usersRequest();
        expect(action.type).toEqual(USERS_REQUEST);
    });
});

describe('usersSuccess', () => {
    it('Should return the action', () => {
        const user = 'users';
        const action = usersSuccess(user);
        expect(action.type).toEqual(USERS_SUCCESS);
        expect(action.user).toEqual(user);
    });
});

describe('usersError', () => {
    it('Should return the action', () => {
        const error = 'users error';
        const action = usersError(error);
        expect(action.type).toEqual(USERS_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('setEditing', () => {
    it('Should return the action', () => {
        const editing = true;
        const action = setEditing(editing);
        expect(action.type).toEqual(SET_EDITING);
        expect(action.editing).toEqual(editing);
    });
});