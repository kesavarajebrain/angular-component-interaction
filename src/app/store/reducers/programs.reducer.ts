import { createReducer, on } from '@ngrx/store';
import * as ProgramsActions from '../actions/programs.actions';
import { ProgramState } from '../interface/programs';

export const programsFeatureKey = 'programs';

const initialState: ProgramState = {
    programsList: [],
    loading: false,
    error: null,
}

export const programsReducer = createReducer(
    initialState,

    on(ProgramsActions.loadPrograms, state => ({
        ...state,
        loading: true,
        error: null,
    })),

    on(ProgramsActions.loadProgramsSuccess, (state, { programs }) => ({
        ...state,
        programsList: programs,
        loading: false,
    })),

    on(ProgramsActions.loadProgramsFailure, (state, { error }) => ({
        ...state,
        error,
        loading: false
    }))
)