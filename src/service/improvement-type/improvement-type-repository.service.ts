import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Environmenter} from 'ng-environmenter';
import {BaseRepositoryService} from 'src/app/base/repository.service';
import {ImprovementType} from 'src/store/models/improvement-type';

@Injectable({
  providedIn: 'root'
})
export class ImprovementTypeRepositoryService extends BaseRepositoryService<ImprovementType> {
  protected apiDomain: string = 'improvement-type';

  constructor(
    protected override environment: Environmenter,
    protected override http: HttpClient) {
    super(environment, http);
  }
}
