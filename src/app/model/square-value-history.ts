import { BaseEntity } from '../base/base-entity';

export interface SquareValueHistory extends BaseEntity {
    peiod: string;
    squareTypeId: number;
    value: number;
}
