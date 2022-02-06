import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {startChooseCurrentAction, startSearchKeyRoomAction} from 'src/store/action/key-room.action';
import {IKeyRoom} from 'src/store/models/key-room.model';
import {getKeyRoomItems} from 'src/store/selectors/key-room.selector';
import {IAppState} from 'src/store/state/app.state';

@Component({
  selector: 'app-key-room',
  templateUrl: './key-room.component.html',
  styleUrls: ['./key-room.component.css']
})
export class KeyRoomComponent implements OnInit {

  items: Observable<IKeyRoom[]> = this.store.select(getKeyRoomItems);

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.items.subscribe(items => {
      if (items.length == 0) {
        this.store.dispatch(startSearchKeyRoomAction())
      }
    })
  }

  serCurrent(item: IKeyRoom) {
      this.store.dispatch(startChooseCurrentAction(item))
  }
}
