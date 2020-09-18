import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseEntity } from './base-entity';
import { BaseRepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root'
})
export abstract class StoreService<Entity extends BaseEntity, repository extends BaseRepositoryService<Entity>> {

  private _items: BehaviorSubject<Entity[]> = new BehaviorSubject([]);
  private _store: { items: Entity[] } = { items: [] };

  get items(): Observable<Entity[]> {
    return this._items.asObservable();
  }

  constructor(
    protected repository: repository
  ) {    
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
    this.repository.get().subscribe(
      data => {
        this._store.items = [...this._store.items, ...data];
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
}
