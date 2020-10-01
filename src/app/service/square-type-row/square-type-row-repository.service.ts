import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { SquareTypeRow } from 'src/app/model/square-type-row';

@Injectable({
  providedIn: 'root'
})
export class SquareTypeRowRepositoryService extends BaseRepositoryService<SquareTypeRow>{
  protected apiDomen: string = 'square-type-row';
}
