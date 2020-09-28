import { BaseEntity } from '../base/base-entity';

export interface MeterHistory extends BaseEntity {
    period: string;
    accountigPointId: number;
    meterId: number;
}
