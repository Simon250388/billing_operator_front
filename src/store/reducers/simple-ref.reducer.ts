import { createReducer, on } from "@ngrx/store";
import { successfulCompleteServicesHttpRequestAction } from "../action/services.action";
import { SimpleRef } from "../models/simple-ref.model";
import { initialSimpleRefState, ISimpleRefState } from "../state/simple-ref.state";

export const simpleRefReducer = createReducer(
    initialSimpleRefState,
    on(successfulCompleteServicesHttpRequestAction, (state: ISimpleRefState, payload: { items: SimpleRef[] }) => {
        return {
            ...state,
            services: payload.items
        }
    })
)
