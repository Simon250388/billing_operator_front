import { BaseEntity } from '../base/base-entity';

export interface AccountingPointActive extends BaseEntity {
    accountingPointId: number;
    serviceId: number;
    providerId: number;
    isActive: boolean;
    meterId: number;
    meterIsActive: boolean;
    meterStateChangeAt: string;
    differentiationTypeId: number;
    lastMeterValue: number;
}
