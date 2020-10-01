import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DifferentiationTypeHistory } from 'src/app/model/differentiation-type-history';

@Injectable({
  providedIn: 'root'
})
export class DifferentiationTypeHistoryRepositoryService extends BaseRepositoryService<DifferentiationTypeHistory>{
  protected apiDomen: string = 'differentiation-type-history';
}
