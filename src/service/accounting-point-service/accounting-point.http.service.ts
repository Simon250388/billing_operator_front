import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IAccountingPointActive,
  IAccountingPointActiveToUpdateModel
} from 'src/store/models/accounting-point-active.model';
import {IAccountingPointHttpService} from './accounting-point.http.factory';

export class AccountingPointHttpService implements IAccountingPointHttpService {

  private endpoint: String = environment["apiUrl"]
  
  protected apiDomen: string = "accounting-point";

  constructor(private http: HttpClient) {
  }

  load(keyRoomId: string): Observable<IAccountingPointActive[]> {
    return this.http.get<IAccountingPointActive[]>(`${this.endpoint}/${this.apiDomen}/${keyRoomId}`);
  }

  save(model: IAccountingPointActiveToUpdateModel): Observable<IAccountingPointActive> {
    throw new Error('Method not implemented.');
  }
}
