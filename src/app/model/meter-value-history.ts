import { BaseEntity } from '../base/base-entity';

export interface MeterValueHistory  extends BaseEntity{
    period: string;
    meterId:number;
    rateZoneId:number;
    value:number;
}
