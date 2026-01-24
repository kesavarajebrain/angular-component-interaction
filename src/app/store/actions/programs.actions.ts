import { createAction, props } from '@ngrx/store';

export const loadPrograms = createAction('[Programs] Load Programs');

export const loadProgramsSuccess = createAction(
  '[Programs] Load Programs Success',
  props<{ programs: any[] }>()
);

export const loadProgramsFailure = createAction(
  '[Programs] Load Programs Failure',
  props<{ error: string }>()
);
