import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import * as EntityAction from 'src/store/action/key-room.action';
import {IKeyRoom} from 'src/store/models/key-room.model';
import {getKeyRoomItems} from 'src/store/selectors/key-room.selector';
import {IKeyRoomState} from "../../../../store/state/key-room.state";
import {Actions, ofType} from "@ngrx/effects";

@Component({
  selector: 'app-key-room',
  templateUrl: './key-room.component.html',
  styleUrls: ['./key-room.component.css']
})
export class KeyRoomComponent implements OnDestroy {

  get itemsIsLoaded(): boolean {
    return this._itemsIsLoaded;
  }

  private _itemsIsLoaded: boolean = false

  readonly items: Observable<IKeyRoom[] | undefined> = this.store.select(getKeyRoomItems);

  private readonly subscription: Subscription
  private actionSubscription: Subscription | undefined

  constructor(
    private store: Store<IKeyRoomState>,
    private actions: Actions
  ) {
    this.subscription = this.items.subscribe(items => {
      if (items == undefined) {
        this.store.dispatch(EntityAction.startLoadItemsFromApiAction())

        this.actionSubscription = this.actions.pipe(
          ofType(EntityAction.successfulLoadItemsFromApiAction)
        ).subscribe(() => this._itemsIsLoaded = true)
      } else {
        this._itemsIsLoaded = true
      }
    })
  }

  serCurrent(item: IKeyRoom) {
    this.store.dispatch(EntityAction.startChooseCurrenAction({currentId: item.id}))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    this.actionSubscription?.unsubscribe()
  }
}
