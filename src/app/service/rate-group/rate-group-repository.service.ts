import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { RateGroup } from 'src/app/model/rate-group';

@Injectable({
  providedIn: 'root'
})
export class RateGroupRepositoryService extends BaseRepositoryService<RateGroup>{
  protected apiDomen: string = 'rate-group';
}
