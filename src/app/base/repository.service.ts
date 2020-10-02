import { HttpClient } from '@angular/common/http';
import { Environmenter } from 'ng-environmenter';
import { Observable } from 'rxjs';
import { BaseCatalog } from './base-catalog';

export abstract class BaseRepositoryService<Catalog extends BaseCatalog> {
  protected abstract apiDomen: string;

  constructor(
    protected environmenter: Environmenter,
    protected http: HttpClient) { }

  get(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(`${this.environmenter.getGlobalEnvironment().apiUrl}/${this.apiDomen}`);
  }

  getById(id: number): Observable<Catalog> {
    return this.http.get<Catalog>(`${this.environmenter.getGlobalEnvironment().apiUrlpiUrl}/${this.apiDomen}/${id}`);
  }

  post(entity: Catalog): Observable<Catalog> {
    return this.http.post<Catalog>(`${this.environmenter.getGlobalEnvironment().apiUrlpiUrl}/${this.apiDomen}`, entity);
  }

  put(entity: Catalog): Observable<Catalog> {
    return this.http.put<Catalog>(`${this.environmenter.getGlobalEnvironment().apiUrlpiUrl}/${this.apiDomen}/${entity.id}`, entity);
  }

  delete(id: number): Observable<object> {
    return this.http.delete(`${this.environmenter.getGlobalEnvironment().apiUrlpiUrl}/${this.apiDomen}/${id}`);
  }
}


