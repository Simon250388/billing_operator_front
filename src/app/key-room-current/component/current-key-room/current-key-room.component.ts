import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {IKeyRoom} from "../../../../store/models/key-room.model";
import {getCurrentKeyRoomSelector} from "../../../../store/selectors/key-room.selector";
import {IKeyRoomState} from "../../../../store/state/key-room.state";

@Component({
  selector: 'app-current-key-room',
  templateUrl: './current-key-room.component.html',
  styleUrls: ['./current-key-room.component.css']
})
export class CurrentKeyRoomComponent {

  item: Observable<IKeyRoom | undefined> = this.store.select(getCurrentKeyRoomSelector);

  constructor(private store: Store<IKeyRoomState>) {
  }

}
