import { Injectable } from '@angular/core';
import { BaseCatalog } from 'src/app/base/base-catalog';
import { BaseRepositoryService } from 'src/app/base/repository.service';

@Injectable({
  providedIn: 'root'
})
export class SquareTypeRepositoryService extends BaseRepositoryService<BaseCatalog>{
  protected apiDomen: string = 'square-type';
}