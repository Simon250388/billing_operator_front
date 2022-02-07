import {createReducer, on} from "@ngrx/store";
import * as EntityActions from "../action/meter.action";
import {IMeterState, initialMeterState} from "../state/meter.state";
import {SimpleRef} from "../models/simple-ref.model";

export const MeterReducer = createReducer(
  initialMeterState,
  on(EntityActions.completeChangeMeterTypeAction, (state: IMeterState, meterType: SimpleRef) => {

    console.log("it works")
    return {...state}
  })
)
