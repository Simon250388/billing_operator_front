import {BaseCatalog} from './base-catalog';

export interface SquareTypeRow extends BaseCatalog {
  squareTypeId: string;
  value: number;
}

export const squareTypeValues = () => {
    return [
      {
        id: "someId",
        present: "Общая"
      }
    ]
}
