import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MeterModel} from "../../../../store/models/meter.model";
import {IMeterState} from "../../../../store/state/meter.state";
import {Store} from "@ngrx/store";
import {getMeterItems} from "../../../../store/selectors/meter.selector";
import {
  startLoadMeterItemsFromApiAction,
  successfulLoadMeterItemsFromApiAction
} from "../../../../store/action/meter.action";
import {Actions, ofType} from "@ngrx/effects";

@Component({
  selector: 'app-meter-list',
  templateUrl: './meter-list.component.html',
  styleUrls: ['./meter-list.component.css']
})
export class MeterListComponent implements OnInit, OnDestroy {

  get itemsIsLoaded(): boolean {
    return this._itemsIsLoaded;
  }

  private _itemsIsLoaded: boolean = false

  items: Observable<MeterModel[] | undefined> = this.meterStore.select(getMeterItems)

  private subscription!: Subscription

  constructor(
    private readonly meterStore: Store<IMeterState>,
    private readonly actions: Actions) {
  }

  ngOnInit(): void {
    this.subscription = this.items.subscribe(items => {
      if (items == undefined) {
        this.meterStore.dispatch(startLoadMeterItemsFromApiAction())

        this.actions.pipe(
          ofType(successfulLoadMeterItemsFromApiAction)
        ).subscribe(() => this._itemsIsLoaded = true)
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
