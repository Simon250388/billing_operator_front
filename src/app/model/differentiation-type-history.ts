import { BaseEntity } from '../base/base-entity';

export interface DifferentiationTypeHistory extends BaseEntity {
    peirod: string;
    meterId: number;
    differentiationTypeId: number;
}
