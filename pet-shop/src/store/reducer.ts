import { Action, createReducer, on } from "@ngrx/store";
import { deleteAction, getActionUpdate, selectAction } from "./action";
import { initialState, IState } from "./state";

const scoreboardReducer = createReducer(
    initialState,
    on(selectAction, (state, { id }) => { console.log(id); return { ...state, selectedPets: [...state.selectedPets.concat(state.pets.find(pet => pet.name === id))], pets: [...state.pets.filter(pet => pet.name !== id)] }; }),
    on(deleteAction, (state, { id }) => ({ ...state, selectedPets: [...state.selectedPets.filter(pet => pet.name !== id)] })),
    on(getActionUpdate, (state, { pets }) => ({ ...state, pets: pets }))
);
  
export function reducer(state: IState | undefined, action: Action) {
    return scoreboardReducer(state, action);
}