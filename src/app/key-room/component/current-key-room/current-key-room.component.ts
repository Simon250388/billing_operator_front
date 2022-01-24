import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {Observable} from "rxjs";
import {IKeyRoom} from "../../../../store/models/key-room.model";
import {getCurrentKeyRoom} from "../../../../store/selectors/key-room.selector";

@Component({
  selector: 'app-current-key-room',
  templateUrl: './current-key-room.component.html',
  styleUrls: ['./current-key-room.component.css']
})
export class CurrentKeyRoomComponent implements OnInit {

  item: Observable<IKeyRoom | undefined> = this.store.select(getCurrentKeyRoom);

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {

  }

}
