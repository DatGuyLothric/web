import { createAction, props } from '@ngrx/store';
import { IPet } from 'src/api/api.service';

export const selectAction = createAction('selectAction', props<{ id: number | string }>());
export const editAction = createAction('editAction', props<{ id: number | string }>());
export const deleteAction = createAction('deleteAction', props<{ id: number | string }>());
export const getAction = createAction('getAction');
export const getActionUpdate = createAction('getActionUpdate', props<{ pets: IPet[] }>());