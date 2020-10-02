import { BaseEntity } from '../base/base-entity';

export interface ProviderHistory extends BaseEntity {
    /**
     * Дата изменения значения
     */
    period: string;
    /**
     * Ключ точки учета
     */
    accountigPointId: number;
    /**
     * Ключ поставщик
     */
    providerId: number
}
