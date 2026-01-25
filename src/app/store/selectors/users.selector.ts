import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../interface/users';

const selectUserState =
    createFeatureSelector<UserState>('users');

const selectUsers =
    createSelector(selectUserState, s => s.data);

const selectLoading =
    createSelector(selectUserState, s => s.loading);

const selectError =
    createSelector(selectUserState, s => s.error);


const usersSelectors = {
    selectError,
    selectLoading,
    selectUsers,
}

export default usersSelectors;
