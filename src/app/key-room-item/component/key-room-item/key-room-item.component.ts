import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IKeyRoom, keyRoomPropertyPresent, keyRoomPropertyTranslations} from "../../../../store/models/key-room.model";
import {PropertyAction} from "../../../../store/models/PropertyAction";


@Component({
  selector: 'app-key-room-item',
  templateUrl: './key-room-item.component.html',
  styleUrls: ['./key-room-item.component.css']
})
export class KeyRoomItemComponent  {

  @Input() item!: IKeyRoom
  @Output() onItemClick: EventEmitter<IKeyRoom> = new EventEmitter()

  get keys(): string[] {
    let result = []
    for (let key in keyRoomPropertyTranslations) {
      result.push(key)
    }
    return result;
  }

  get propertyChangeActions(): { [key: string]: PropertyAction<IKeyRoom>[] } {
    return {
      "address": [],
      "type": [],
      "countPresubcribe": [],
      "countResident": [],
      "countOwner": [],
      "commonSquare": [],
      "debt": []
    }
  }

  getValuePresent(property: string): String {
    let presentFunc = keyRoomPropertyPresent[property]
    return presentFunc(this.item)
  }

  getPropertyPresent(property: string): String {
    return keyRoomPropertyTranslations[property]
  }

  getPropertyAction(property: string): string[] {
    return this.propertyChangeActions[property].map(value => value.name)
  }

  getActionIconName(property: string, index: number): string {
    return this.propertyChangeActions[property][index].iconName
  }

  getActionName(property: string, index: number): string {
    return this.propertyChangeActions[property][index].name
  }

  onActionClick(property: string, index: number) {
    this.propertyChangeActions[property][index].action.apply(this.item)
  }

  onClick() {
    this.onItemClick.emit(this.item)
  }
}
