import { BaseEntity } from '../base/base-entity';
import { AccountingPoint } from './accounting-point';
import { DifferentiationType } from './differentiation-type';
import { Meter } from './meter';

export interface AccountingPointActive extends BaseEntity {
    accountingPoint: AccountingPoint;
    isActive: boolean;
    meter: Meter;
    meterIsActive: boolean;
    differentiationType: DifferentiationType;
    lastMeterValues: number[];
}
