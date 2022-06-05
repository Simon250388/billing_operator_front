import {BaseEntity} from './base-entity';

export interface AccountingPointService extends BaseEntity {
  description: string;
  serviceId: string;
  providerId: string;
  directionOfUseId: string
}
