import { BaseEntity } from '../base/base-entity';

export interface PeopleHistory extends BaseEntity {
    keyRoomId: number;
    period: string;
    /**
     * Количество проживающих
     *
     * @type {number}
     * @memberof Customer
     */
    countResident: number;
    /**
     *Количество прописанных
     *
     * @type {number}
     * @memberof Customer
     */
    countPrescribed: number;
    /**
     *Количество собственников
     *
     * @type {number}
     * @memberof Customer
     */
    countOwner: number;
}
