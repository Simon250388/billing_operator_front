import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MeterModel} from "../../../../store/models/meter.model";
import {IMeterState} from "../../../../store/state/meter.state";
import {Store} from "@ngrx/store";
import {getMeterItems} from "../../../../store/selectors/meter.selector";
import {startLoadMeterItemsFromApiAction} from "../../../../store/action/meter.action";

@Component({
  selector: 'app-meter-list',
  templateUrl: './meter-list.component.html',
  styleUrls: ['./meter-list.component.css']
})
export class MeterListComponent implements OnInit, OnDestroy {

  items: Observable<MeterModel[] | undefined> = this.meterStore.select(getMeterItems)

  private subscription!: Subscription

  constructor(private meterStore: Store<IMeterState>) {
  }

  ngOnInit(): void {
    this.subscription = this.items.subscribe(items => {
      if (items == undefined) this.meterStore.dispatch(startLoadMeterItemsFromApiAction())
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
