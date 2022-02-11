import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {MeterModel} from "../../../../store/models/meter.model";
import {PropertyAction} from "../../../../store/models/PropertyAction";
import {IMeterState} from "../../../../store/state/meter.state";
import {MeterMeterTypeChangeAction} from "../../../../service/meter/meter-meter-type-change-action.service";
import {
  MeterVerificationDateChangeAction
} from "../../../../service/meter/meter-verification-date-change-action.service";

@Component({
  selector: 'app-meter-item',
  templateUrl: './meter-item.component.html',
  styleUrls: ['./meter-item.component.css']
})
export class MeterItemComponent implements OnInit {

  @Input() item!: MeterModel



  private _isSmallSize: boolean = false;

  get isSmallSize(): boolean {
    return this._isSmallSize;
  }

  get keys(): string[] {
    let result = []
    for (let key in meterPropertyTranslations) {
      result.push(key)
    }
    return result;
  }

  get meterPropertyChangeActions(): { [key: string]: PropertyAction<MeterModel>[] } {
    return {
      "meterType": [
        {
          name: "Изменить",
          iconName: "edit",
          action: this.meterTypeEditAction
        }
      ],
      "verificationDate": [
        {
          name: "Изменить",
          iconName: "edit",
          action: this.meterVerificationDateChangeAction
        }
      ],
      "location": [],
      "differentiationType": [],
      "meterValueDate": [],
    }
  }

  getValuePresent(property: string): String {
    let presentFunc = meterPropertyPresent[property]
    return presentFunc(this.item)
  }

  getPropertyPresent(property: string): String {
    return meterPropertyTranslations[property]
  }

  getPropertyAction(property: string): string[] {
    return this.meterPropertyChangeActions[property].map(value => value.name)
  }

  getActionIconName(property: string, index: number): string {
    return this.meterPropertyChangeActions[property][index].iconName
  }

  getActionName(property: string, index: number): string {
    return this.meterPropertyChangeActions[property][index].name
  }

  onActionClick(property: string, index: number) {
    this.meterPropertyChangeActions[property][index].action.apply(this.item)
  }

  constructor(
    private store: Store<IMeterState>,
    private breakpointObserver: BreakpointObserver,
    private meterTypeEditAction: MeterMeterTypeChangeAction,
    private meterVerificationDateChangeAction: MeterVerificationDateChangeAction,
  ) {

  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
          Breakpoints.XSmall,
          Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Handset,
          Breakpoints.Tablet,
          Breakpoints.HandsetPortrait,
          Breakpoints.TabletPortrait,
          Breakpoints.WebPortrait,
          Breakpoints.HandsetLandscape,
          // Breakpoints.TabletLandscape,
          // Breakpoints.WebLandscape
        ]
      )
      .subscribe((state: BreakpointState) => {
        this._isSmallSize = state.matches
      });
  }
}

export const meterPropertyTranslations: { [key: string]: string } = {
  "meterType": "Тип",
  "verificationDate": "Дата поверки",
  "location": "Место установки",
  "differentiationType": "Диффир-ть",
  "meterValueDate": "Дата показаний",
}

export const meterPropertyPresent: { [key: string]: (model: MeterModel) => string } = {
  "meterType": (model) => model.meterType.present,
  "verificationDate": (model) => model.verificationDate,
  "location": (model) => model.location.present,
  "differentiationType": (model) => model.differentiationType.present,
  "meterValueDate": (model) => model.meterValueDate,
}
