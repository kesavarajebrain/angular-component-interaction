import { createReducer, on } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';
import { UserState } from '../interface/users';

export const programsFeatureKey = 'programs';

const initialState: UserState = {
    data: [],
    loading: false,
    error: null,
}

export const userReducer = createReducer(
    initialState,

    on(UsersActions.loadUsers, state => ({
        ...state,
        loading: true,
        error: null
    })),

    on(UsersActions.loadUsersSuccess, (state, { Users }) => ({
        ...state,
        data: Users,
        loading: false,
        error: null
    })),

    on(UsersActions.loadUsersFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error: error
    })),


)