import {createAction, props} from "@ngrx/store";
import {MeterModel} from "../models/meter.model";
import {SimpleRef} from "../models/simple-ref.model";

export enum EMeterActions {
  StartChangeMeterType = "[Meter] start change meter type",
  CompleteChangeMeterType = "[Meter] complete change meter type",
}

export const startChangeMeterTypeAction = createAction(
  EMeterActions.StartChangeMeterType,
  props<MeterModel>()
);

export const completeChangeMeterTypeAction = createAction(
  EMeterActions.CompleteChangeMeterType,
  props<SimpleRef>()
);


