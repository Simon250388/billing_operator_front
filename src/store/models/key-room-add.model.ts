import {SquareTypeRow} from "./square-type-row";
import {ServiceImprovementTypeRateGroup} from "./service-improvement-type-rate-group";
import {AccountingPointService} from "./accounting-point-service";


export interface IKeyRoomAddModel {
  buildingId: String,
  roomId: number,
  countOwner: number,
  countPrescribed: number,
  countResidents: number,
  roomTypeId: number,
  squareValues: SquareTypeRow[],
  improvementTypes: ServiceImprovementTypeRateGroup[],
  accountingPoints: AccountingPointService[]
}
