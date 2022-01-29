import {Component, Input, OnInit} from '@angular/core';
import {IKeyRoom} from "../../../../store/models/key-room.model";
import {startChooseCurrentAction} from "../../../../store/action/key-room.action";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";

@Component({
  selector: 'app-key-room-item',
  templateUrl: './key-room-item.component.html',
  styleUrls: ['./key-room-item.component.css']
})
export class KeyRoomItemComponent implements OnInit {

  @Input() item: IKeyRoom | null | undefined

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
  }

  setCurrentKeyRoom() {
    if (!this.item) {
      return
    }
    this.store.dispatch(startChooseCurrentAction(this.item))
  }

}
