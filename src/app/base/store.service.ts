import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseEntity } from './base-entity';
import { BaseRepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export abstract class StoreService<Entity extends BaseEntity, repository extends BaseRepositoryService<Entity>> implements IStoreService<Entity>  {

  private _items: BehaviorSubject<Entity[]> = new BehaviorSubject([]);
  private _store: { items: Entity[] } = { items: [] };

  constructor(
    protected repository: repository
  ) {
  }
  get items(): Observable<Entity[]> {
    return this._items.asObservable();
  }

  save(entity: Entity): void {
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

  getPresent(id: number): string {
   return this._store.items.find(row => row.id == id).present;
  }
}


export interface IStoreService<Entity extends BaseEntity> {
  save(entity: Entity): void;
  load(): void;
  loadById(id: number): void;
  getPresent(id: number): String;
  items: Observable<Entity[]>
}