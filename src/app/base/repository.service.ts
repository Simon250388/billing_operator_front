import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BaseCatalog } from './base-catalog';

export abstract class BaseRepositoryService<Catalog extends BaseCatalog> {
  protected abstract apiDomen: string;

  constructor(
    protected http: HttpClient) { }

  get(): Observable<Catalog[]> {
    return this.http.get<Catalog[]>(`${environment.apiUrl}/${this.apiDomen}`);
  }

  getById(id: number): Observable<Catalog> {
    return this.http.get<Catalog>(`${environment.apiUrl}/${this.apiDomen}/${id}`);
  }

  post(entity: Catalog): Observable<Catalog> {
    return this.http.post<Catalog>(`${environment.apiUrl}/${this.apiDomen}`, entity);
  }

  put(entity: Catalog): Observable<Catalog> {
    return this.http.put<Catalog>(`${environment.apiUrl}/${this.apiDomen}/${entity.id}`, entity);
  }

  delete(id: number): Observable<object> {
    return this.http.delete(`${environment.apiUrl}/${this.apiDomen}/${id}`);
  }
}


