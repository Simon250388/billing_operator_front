import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {MeterModel, meterPropertyPresent, meterPropertyTranslations} from "../../../../store/models/meter.model";

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

  getValuePresent(property: string): String {
    let presentFunc = meterPropertyPresent[property]
    return presentFunc(this.item)
  }

  getPropertyPresent(property: string): String {
    return meterPropertyTranslations[property]
  }

  constructor(
    private location: Location,
    private store: Store<IAppState>, private breakpointObserver: BreakpointObserver) {
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
