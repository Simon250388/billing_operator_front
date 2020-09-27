import { BaseCatalog } from '../base/base-catalog';
import { AccountingPointActive } from './accounting-point-active';

export interface Customer extends BaseCatalog {
    /**
     * Номер лицевого счета
     */
    lsNumber: string;
    /**
     * Действующие точки учета
     */
    accountingPoint: AccountingPointActive[];
    /**
     * Адрес помещения
     */
    address: string;
    /**
     * Сумма задолженности
     */
    debt: number;
    /**
     *Состояние лицевого счета
     *
     * @type {boolean}
     * @memberof Customer
     */
    isActive: boolean;
    /**
     *Дата изменения статуса
     *
     * @type {string}
     * @memberof Customer
     */
    stateChangeAt: string;
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
    /**
     *Общая площадь помещения
     *
     * @type {number}
     * @memberof Customer
     */
    totalSquare: number;

}
