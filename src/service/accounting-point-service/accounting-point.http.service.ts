import {Observable} from 'rxjs';
import {
  IAccountingPointActive,
  IAccountingPointActiveToUpdateModel
} from 'src/store/models/accounting-point-active.model';
import {IAccountingPointHttpService} from './accounting-point.http.factory';

export class AccountingPointHttpService implements IAccountingPointHttpService {


  protected apiDomain: string = 'building';

  constructor() {
  }

  load(keyRoomId: string): Observable<IAccountingPointActive[]> {
    throw new Error('Method not implemented.');
  }

  save(model: IAccountingPointActiveToUpdateModel): Observable<IAccountingPointActive> {
    throw new Error('Method not implemented.');
  }
}
