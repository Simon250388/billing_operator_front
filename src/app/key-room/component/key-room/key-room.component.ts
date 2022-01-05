import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StartChooseCurrentAction } from 'src/store/action/key-room.action';
import { IKeyRoom } from 'src/store/models/key-room.model';
import { getHistory } from 'src/store/selectors/key-room.selector';
import { IAppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-key-room',
  templateUrl: './key-room.component.html',
  styleUrls: ['./key-room.component.css']
})
export class KeyRoomComponent {

  items: Observable<IKeyRoom[]> = this._store.select(getHistory);

  constructor(private _store: Store<IAppState>) { }


  setCurrentKeyRoom(item: IKeyRoom) {
    this._store.dispatch(new StartChooseCurrentAction({ item: item }))

  }

}
