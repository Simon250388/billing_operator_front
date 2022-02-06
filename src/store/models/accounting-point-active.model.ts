import {BaseEntity} from './base-entity';
import {SimpleRef} from './simple-ref.model';

export interface IAccountingPointActive extends BaseEntity {
    accountingPoint: SimpleRef;
    service: SimpleRef;
    provider: SimpleRef;
    isActive: boolean;
    meter: SimpleRef;
    meterIsActive: boolean;
    meterStateChangeAt: string;
    differentiationType: SimpleRef;
    lastMeterValue: number;
    avgVolume: number;
}

export const accountingPointPropertyTranslations: { [key: string]: string } = {
  "service": "Услуга",
  "provider": "Поставщик",
  "meter": "Пр-р учета",
  "differentiationType": "Вид дифф-ти"
}

export const accountingPointPropertyPresent: { [key: string]: (model: IAccountingPointActive) => string } = {
  "service": (model: IAccountingPointActive) => model.service.present,
  "provider": (model: IAccountingPointActive) => model.provider.present,
  "meter": (model: IAccountingPointActive) => model.meter.present,
  "differentiationType":  (model: IAccountingPointActive) => model.differentiationType.present
}


