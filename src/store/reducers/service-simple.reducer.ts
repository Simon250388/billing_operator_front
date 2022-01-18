import {createReducer, on} from "@ngrx/store";

import {servicesHttpRequestSuccessAction} from "../action/service-simple.action";
import {initialServiceSimpleState} from "../state/simple-service.state";
import {IServiceSimpleModel} from "../models/service-simple.model";

export const simpleServiceReducer = createReducer(
  initialServiceSimpleState,
  on(servicesHttpRequestSuccessAction, (state, payload: { items: IServiceSimpleModel[] }) => {
    return {...state, items: payload.items};
  })
)


