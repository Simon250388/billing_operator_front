import { Injectable } from '@angular/core';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DirectionOfUse } from 'src/app/model/direction-of-use';

@Injectable({
  providedIn: 'root'
})
export class DirectionOfUseRepositoryService extends BaseRepositoryService<DirectionOfUse>{
  protected apiDomen: string = 'directionOfUse';
}
