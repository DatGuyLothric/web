import { IPet } from "src/api/api.service";

export interface IState {
    pets: IPet[],
    selectedPets: IPet[]
}

export const initialState: IState = {
    pets: [],
    selectedPets: []
}