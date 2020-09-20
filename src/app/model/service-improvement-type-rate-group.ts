import { ImprovementType } from './improvement-type';
import { RateGroup } from './rate-group';
import { Service } from './service';

export interface ServiceImprovementTypeRateGroup {
    id?: number,
    service: Service;
    improvementType: ImprovementType;
    rateGroup: RateGroup;
}
