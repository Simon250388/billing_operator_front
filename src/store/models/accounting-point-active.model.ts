import { BaseEntity } from './base-entity';
import { SimpleRef } from './simple-ref.model';

export interface AccountingPointActive extends BaseEntity {
    accountingPoint: SimpleRef;
    service: SimpleRef;
    provider: SimpleRef;
    isActive: boolean;
    meter: SimpleRef;
    meterIsActive: boolean;
    meterStateChangeAt: string;
    differentiationType: SimpleRef;
    lastMeterValue: number;
}

