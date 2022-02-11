import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {startChooseCurrentAction, startSearchKeyRoomAction} from 'src/store/action/key-room.action';
import {IKeyRoom} from 'src/store/models/key-room.model';
import {getKeyRoomItems} from 'src/store/selectors/key-room.selector';
import {IKeyRoomState} from "../../../../store/state/key-room.state";

@Component({
  selector: 'app-key-room',
  templateUrl: './key-room.component.html',
  styleUrls: ['./key-room.component.css']
})
export class KeyRoomComponent implements OnDestroy {

  readonly items: Observable<IKeyRoom[]> = this.store.select(getKeyRoomItems);

  private readonly subscription: Subscription

  constructor(private store: Store<IKeyRoomState>) {
    this.subscription = this.items.subscribe(items => {
      if (items.length == 0) {
        this.store.dispatch(startSearchKeyRoomAction())
      }
    })
  }

  serCurrent(item: IKeyRoom) {
    this.store.dispatch(startChooseCurrentAction(item))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
