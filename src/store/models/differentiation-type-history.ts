import { BaseEntity } from './base-entity';

export interface DifferentiationTypeHistory extends BaseEntity {
    peirod: string;
    meterId: number;
    differentiationTypeId: number;
}
