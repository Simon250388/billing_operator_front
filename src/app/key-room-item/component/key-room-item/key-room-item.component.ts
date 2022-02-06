import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IKeyRoom, keyRoomPropertyPresent, keyRoomPropertyTranslations} from "../../../../store/models/key-room.model";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";


@Component({
  selector: 'app-key-room-item',
  templateUrl: './key-room-item.component.html',
  styleUrls: ['./key-room-item.component.css']
})
export class KeyRoomItemComponent implements OnInit {

  @Input() item!: IKeyRoom
  @Output() onItemClick: EventEmitter<IKeyRoom> = new EventEmitter()

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
  }

  get keys(): string[] {
    let result = []
    for (let key in keyRoomPropertyTranslations) {
      result.push(key)
    }
    return result;
  }

  getValuePresent(property: string): String {
    let presentFunc = keyRoomPropertyPresent[property]
    return presentFunc(this.item)
  }

  getPropertyPresent(property: string): String {
    return keyRoomPropertyTranslations[property]
  }

  onClick() {
    this.onItemClick.emit(this.item)
  }
}
