import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { MeterModel } from "../../../../../store/models/meter.model";
import { IMeterState } from "../../../../../store/state/meter.state";
import { Store } from "@ngrx/store";
import { getMeterItems } from "../../../../../store/selectors/meter.selector";
import * as EntityAction from "../../../../../store/action/meter.action";
import { Actions, ofType } from "@ngrx/effects";

@Component({
  selector: 'app-meter-list',
  templateUrl: './meter-list.component.html',
  styleUrls: ['./meter-list.component.css']
})
export class MeterListComponent implements OnDestroy {

  get itemsIsLoaded(): boolean {
    return this._itemsIsLoaded;
  }

  private _itemsIsLoaded: boolean = false

  items: Observable<MeterModel[] | undefined> = this.meterStore.select(getMeterItems)

  private readonly subscription: Subscription
  private actionSubscription: Subscription | undefined

  constructor(
    private readonly meterStore: Store<IMeterState>,
    private readonly actions: Actions) {

    this.subscription = this.items.subscribe(items => {
      if (items == undefined) {
        this._itemsIsLoaded = false
        this.meterStore.dispatch(EntityAction.startLoadMeterItemsFromApiAction())

        this.actionSubscription = this.actions.pipe(
          ofType(EntityAction.successfulLoadMeterItemsFromApiAction)
        ).subscribe(() => this._itemsIsLoaded = true)
      } else {
        this._itemsIsLoaded = true
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    if (this.actionSubscription) this.actionSubscription.unsubscribe()
  }
}
