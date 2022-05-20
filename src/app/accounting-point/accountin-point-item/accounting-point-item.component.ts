import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  accountingPointPropertyPresent,
  accountingPointPropertyTranslations,
  IAccountingPointActive
} from 'src/store/models/accounting-point-active.model';
import {PropertyAction} from "../../../store/models/PropertyAction";

@Component({
  selector: 'app-accounting-point-item',
  templateUrl: './accounting-point-item.component.html',
  styleUrls: ['./accounting-point-item.component.css']
})
export class AccountingPointItemComponent {

  @Input() item!: IAccountingPointActive
  @Output() onItemClick: EventEmitter<IAccountingPointActive> = new EventEmitter()

  constructor() {
  }

  get propertyChangeActions(): { [key: string]: PropertyAction<IAccountingPointActive>[] } {
    return {
      "service": [],
      "provider": [],
      "meter": []
    }
  }

  get keys(): string[] {
    let result = []
    for (let key in accountingPointPropertyTranslations) {
      result.push(key)
    }
    return result;
  }

  getValuePresent(property: string): String {
    let presentFunc = accountingPointPropertyPresent[property]
    return presentFunc(this.item)
  }

  getPropertyPresent(property: string): String {
    return accountingPointPropertyTranslations[property]
  }

  onClick() {
    this.onItemClick.emit(this.item)
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

}
