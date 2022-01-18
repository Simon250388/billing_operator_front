import {HttpClient} from '@angular/common/http';
import {Environmenter} from 'ng-environmenter';
import {Observable} from 'rxjs';
import {BaseEntity} from "../../store/models/base-entity";

export abstract class BaseRepositoryService<Catalog extends BaseEntity> {
  protected abstract apiDomain: string;

  protected constructor(
    protected environment: Environmenter,
    protected http: HttpClient) { }

  get(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(`${this.environment.getGlobalEnvironment()['apiUrl']}/${this.apiDomain}`);
  }

  getById(id: number): Observable<Catalog> {
    return this.http.get<Catalog>(`${this.environment.getGlobalEnvironment()['apiUrl']}/${this.apiDomain}/${id}`);
  }

  post(entity: Catalog): Observable<Catalog> {
    return this.http.post<Catalog>(`${this.environment.getGlobalEnvironment()['apiUrl']}/${this.apiDomain}`, entity);
  }

  put(entity: Catalog): Observable<Catalog> {
    return this.http.put<Catalog>(`${this.environment.getGlobalEnvironment()['apiUrl']}/${this.apiDomain}/${entity.id}`, entity);
  }

  delete(id: number): Observable<object> {
    return this.http.delete(`${this.environment.getGlobalEnvironment()['apiUrl']}/${this.apiDomain}/${id}`);
  }
}


