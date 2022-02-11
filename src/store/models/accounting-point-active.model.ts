import {SimpleRef} from './simple-ref.model';

export interface IAccountingPointActive {
  id: string
  name: String;
  service: SimpleRef;
  provider: SimpleRef;
  isActive: boolean;
  meter: SimpleRef;
  meterIsActive: boolean;
  meterStateChangeAt: string;
}

export interface IAccountingPointActiveToUpdateModel {
  id: string | undefined;
  name: string;
  serviceId: string;
  providerId: string;
  isActive: boolean;
  meterId: string | undefined;
  meterIsActive: boolean;
  meterStateChangeAt: string;
}

export const accountingPointPropertyTranslations: { [key: string]: string } = {
  "service": "Услуга",
  "provider": "Поставщик",
  "meter": "Пр-р учета"
}

export const accountingPointPropertyPresent: { [key: string]: (model: IAccountingPointActive) => string } = {
  "service": (model: IAccountingPointActive) => model.service.present,
  "provider": (model: IAccountingPointActive) => model.provider.present,
  "meter": (model: IAccountingPointActive) => model.meter.present
}


