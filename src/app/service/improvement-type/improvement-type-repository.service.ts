import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environmenter } from 'ng-environmenter';
import { Observable, from } from 'rxjs';
import { BaseRepositoryService } from 'src/app/base/repository.service';
import { ImprovementType } from 'src/app/model/improvement-type';

@Injectable({
  providedIn: 'root'
})
export class ImprovementTypeRepositoryService extends BaseRepositoryService<ImprovementType>{
  protected apiDomen: string = 'improvement-type';

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) {
    super(environmenter, http);
  }
}
