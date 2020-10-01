import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BaseCatalog } from './base-catalog';
import { BaseRepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export abstract class StoreService<Catalog extends BaseCatalog, repository extends BaseRepositoryService<Catalog>> implements IStoreService<Catalog>  {

  private _items: BehaviorSubject<Catalog[]> = new BehaviorSubject([]);
  private _store: { items: Catalog[] } = { items: [] };

  constructor(
    protected repository: repository
  ) {
  }
  get items(): Observable<Catalog[]> {
    return this._items.asObservable();
  }

  save(entity: Catalog): void {
    if (entity.id) {
      this.repository.put(entity).subscribe(
        data => {
          this._store.items.push(data);
          this._items.next(Object.assign({}, this._store).items)
        }
      );
    }
    this.repository.post(entity).subscribe(
      data => {
        this._store.items.push(data);
        this._items.next(Object.assign({}, this._store).items)
      }
    );
  }

  load(): void {
    if (this._store.items.length != 0) {
      return;
    }
    this.repository.get().subscribe(
      data => {
        data.forEach(row => this._store.items.push(row));
        this._items.next(Object.assign({}, this._store).items)
      }
    );
  }

  loadById(id: number): void {
    this.repository.getById(id).subscribe(
      data => {
        let index = this._store.items.findIndex(x => x.id == id);
        if (index) {
          this._store.items[index] = data;
          this._items.next(Object.assign({}, this._store).items)
        }
      }
    )
  }

  getPresent(id: number): Observable<string> {
    return this.items.pipe(
      map(data => {
        const entity = data.find(row => row.id == id);
        if (entity) {
          return entity.present;
        }
        return "Объект не найден"
      })
    );
  }
}


export interface IStoreService<Catalog extends BaseCatalog> {
  save(entity: Catalog): void;
  load(): void;
  loadById(id: number): void;
  getPresent(id: number): Observable<string>;
  items: Observable<Catalog[]>
}