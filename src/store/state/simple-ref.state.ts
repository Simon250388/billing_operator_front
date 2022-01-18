import { SimpleRef } from "../models/simple-ref.model";

export interface ISimpleRefState {
    services: SimpleRef[]
}

export const initialSimpleRefState: ISimpleRefState = {
    services: []
}
