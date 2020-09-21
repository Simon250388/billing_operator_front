import { BaseEntity } from '../base/base-entity';

export interface AccountingPointService extends BaseEntity {
    accountingPointId:number;
    accountingPoint : BaseEntity;
    serviceId:number;
    providerId: number;
}
