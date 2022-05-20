import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import * as EntityAction from 'src/store/action/key-room.action';
import {IKeyRoom} from 'src/store/models/key-room.model';
import {getKeyRoomItems} from 'src/store/selectors/key-room.selector';
import {IKeyRoomState} from "../../../../../store/state/key-room.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-key-room-list',
  templateUrl: './key-room-list.component.html',
  styleUrls: ['./key-room-list.component.css']
})
export class KeyRoomListComponent implements OnDestroy {

  get itemsIsLoaded(): boolean {
    return this._itemsIsLoaded;
  }

  private _itemsIsLoaded: boolean = false
  private _itemsIsLoadedSubscription: Subscription

  readonly items: Observable<IKeyRoom[] | undefined> = this.store.select(getKeyRoomItems);

  constructor(
    private store: Store<IKeyRoomState>,
    private router: Router,
  ) {
    this.store.dispatch(EntityAction.startLoadItemsFromApiAction())

    this._itemsIsLoadedSubscription = this.items.pipe().subscribe((items) => this._itemsIsLoaded = items != undefined)
  }

  ngOnDestroy(): void {
    this._itemsIsLoadedSubscription.unsubscribe()
  }

  serCurrent(item: IKeyRoom) {
    this.router.navigate([".", item.id])
  }
}
