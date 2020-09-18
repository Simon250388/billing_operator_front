import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BaseEntity } from './base-entity';

export abstract class BaseRepositoryService<Entity extends BaseEntity> {
  protected abstract apiDomen: string;

  constructor(
    protected http: HttpClient) { }

  get(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${environment.apiUrl}/${this.apiDomen}`);
  }

  getById(id: number): Observable<Entity> {
    return this.http.get<Entity>(`${environment.apiUrl}/${this.apiDomen}/${id}`);
  }

  post(entity: Entity): Observable<Entity> {
    return this.http.post<Entity>(`${environment.apiUrl}/${this.apiDomen}`, entity);
  }

  put(entity: Entity): Observable<Entity> {
    return this.http.put<Entity>(`${environment.apiUrl}/${this.apiDomen}/${entity.id}`, entity);
  }

  delete(id: number): Observable<object> {
    return this.http.delete(`${environment.apiUrl}/${this.apiDomen}/${id}`);
  }
}


