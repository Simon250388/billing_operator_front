import { Injectable } from '@angular/core';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { DifferentiationType } from 'src/app/model/differentiation-type';

@Injectable({
  providedIn: 'root'
})
export class DifferentiationTypeRepositoryService extends BaseRepositoryService<DifferentiationType>{
  protected apiDomen: string = 'differentiation-type';  
}
