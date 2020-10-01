import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { AccountingPoint } from 'src/app/model/accounting-point';

@Injectable({
  providedIn: 'root'
})
export class AccountingPointRepositoryService extends BaseRepositoryService<AccountingPoint>{
  protected apiDomen: string = 'accounting-point';  
}
