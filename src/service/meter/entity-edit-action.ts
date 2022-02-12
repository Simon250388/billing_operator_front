import {MeterModel, MeterModelToUpdate} from "../../store/models/meter.model";

export interface EntityEditAction<T> {
  apply(model: T): void
}


export const convertModelToUpdateModel = (model: MeterModel): MeterModelToUpdate => {
  return {
    id: model.id,
    meterTypeId: model.meterType.id,
    verificationDate: model.verificationDate,
    meterValueDate: model.meterValueDate,
    locationId: model.location.id,
    differentiationTypeId: model.differentiationType.id
  }
}
