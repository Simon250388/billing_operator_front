import { ImprovementType } from './improvement-type';
import { RateGroup } from './rate-group';
import { Service } from './service';

export interface ServiceImprovementTypeRateGroup {
    id?: number,
    serviceId?: number;
    improvementTypeId: number;
    rateGroupId: number;
}
