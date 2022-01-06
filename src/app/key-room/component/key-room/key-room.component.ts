import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startChooseCurrentAction, startSearchKeyRoomAction } from 'src/store/action/key-room.action';
import { IKeyRoom } from 'src/store/models/key-room.model';
import { getHistory, getItems } from 'src/store/selectors/key-room.selector';
import { IAppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-key-room',
  templateUrl: './key-room.component.html',
  styleUrls: ['./key-room.component.css']
})
export class KeyRoomComponent implements OnInit {

  items$: Observable<IKeyRoom[]> = this._store.select(getItems);

  constructor(private _store: Store<IAppState>) { }
  
  ngOnInit(): void {
    this._store.dispatch(startSearchKeyRoomAction())
  }


  setCurrentKeyRoom(item: IKeyRoom) {
    this._store.dispatch(startChooseCurrentAction(item))

  }

}
