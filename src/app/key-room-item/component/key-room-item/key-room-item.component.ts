import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IKeyRoom, keyRoomPropertyPresent, keyRoomPropertyTranslations} from "../../../../store/models/key-room.model";
import {PropertyAction} from "../../../../store/models/PropertyAction";
import {KeyRoomCountResidentChangeAction} from "../../../../service/key-room/key-room-count-resident-change.action";
import {KeyRoomCountSubscribedChangeAction} from "../../../../service/key-room/key-room-count-subscribed-change.action";
import {KeyRoomCountOwnerChangeAction} from "../../../../service/key-room/key-room-count-owner-change.action";


@Component({
  selector: 'app-key-room-item',
  templateUrl: './key-room-item.component.html',
  styleUrls: ['./key-room-item.component.css']
})
export class KeyRoomItemComponent {

  @Input() item!: IKeyRoom
  @Input() chooseMode: boolean = false
  @Output() onChoose: EventEmitter<IKeyRoom> = new EventEmitter()

  get keys(): string[] {
    let result = []
    for (let key in keyRoomPropertyTranslations) {
      result.push(key)
    }
    return result;
  }

  constructor(
    private readonly countResidentChangeAction: KeyRoomCountResidentChangeAction,
    private readonly countSubscribedChangeAction: KeyRoomCountSubscribedChangeAction,
    private readonly countOwnerChangeAction: KeyRoomCountOwnerChangeAction,
  ) {
  }

  get propertyChangeActions(): { [key: string]: PropertyAction<IKeyRoom>[] } {
    return {
      "address": [],
      "type": [],
      "countSubscribed": [
        {
          name: "Изменить",
          iconName: "edit",
          action: this.countSubscribedChangeAction
        }
      ],
      "countResident": [
        {
        name: "Изменить",
        iconName: "edit",
        action: this.countResidentChangeAction
      }
      ],
      "countOwner": [
        {
          name: "Изменить",
          iconName: "edit",
          action: this.countOwnerChangeAction
        }
      ],
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

  choose() {
    this.onChoose.emit(this.item)
  }
}
