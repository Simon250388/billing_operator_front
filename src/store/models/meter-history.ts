import { BaseEntity } from './base-entity';

export interface MeterHistory extends BaseEntity {
    period: string;
    accountigPointId: number;
    meterId: number;
}
