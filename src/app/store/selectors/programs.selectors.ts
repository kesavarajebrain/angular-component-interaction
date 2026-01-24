import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProgramState } from '../interface/programs';

const selectProgramState =
    createFeatureSelector<ProgramState>('programs');

const selectPrograms =
    createSelector(selectProgramState, s => s.programsList);

const selectLoading =
    createSelector(selectProgramState, s => s.loading);

const selectError =
    createSelector(selectProgramState, s => s.error);


const programsSelectors = {
    selectError,
    selectLoading,
    selectPrograms,
}

export default programsSelectors;
