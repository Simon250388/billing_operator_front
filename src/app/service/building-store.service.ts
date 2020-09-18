import { Injectable } from '@angular/core';
import { BuildingRepositoryService } from './building-repository.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BuildingStoreService  {

  constructor(
  ) { }
}
