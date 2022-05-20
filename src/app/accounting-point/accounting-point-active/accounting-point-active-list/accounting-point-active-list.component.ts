import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {IAccountingPointActive} from 'src/store/models/accounting-point-active.model';
import {IServiceSimpleModel} from "../../../../store/models/service-simple.model";
import * as EntityAction from "../../../../store/action/accounting-point.action";
import {IAccountingPointActiveState} from "../../../../store/state/accounting-pointactive.state";
import {getAccountingPointsItems, getSimpleServiceItems} from "../../../../store/selectors/accounting-point.selector";

@Component({
  selector: 'app-accounting-point-list',
  templateUrl: './accounting-point-active-list.component.html',
  styleUrls: ['./accounting-point-active-list.component.css']
})
export class AccountingPointActiveListComponent  {

  get simpleServiceIsLoaded(): boolean {
    return this._simpleServiceIsLoaded;
  }

  get itemsIsLoaded(): boolean {
    return this._itemsIsLoaded;
  }

  private _itemsIsLoaded: boolean = false
  private _simpleServiceIsLoaded: boolean = false

  accountingPoints: Observable<IAccountingPointActive[] | undefined> = this.store.select(getAccountingPointsItems)
  simpleServices: Observable<IServiceSimpleModel[] | undefined> = this.store.select(getSimpleServiceItems)

  private readonly accountingPointSubscription: Subscription
  private readonly simpleServiceSubscription: Subscription

  constructor(
    private readonly store: Store<IAccountingPointActiveState>) {

    this.store.dispatch(EntityAction.startLoadItemsFromApiAction())
    this.store.dispatch(EntityAction.startLoadSimpleServiceItemsFromApiAction())

    this.simpleServiceSubscription = this.simpleServices.subscribe(items => {
      this._simpleServiceIsLoaded  = items != undefined
    })

    this.accountingPointSubscription = this.accountingPoints.subscribe(items => {
        this._itemsIsLoaded  = items != undefined
      })

    this.simpleServiceSubscription = this.simpleServices.subscribe(items => {
        this._simpleServiceIsLoaded  = items != undefined
    })
  }

  ngOnDestroy(): void {
    this.accountingPointSubscription.unsubscribe()
    this.simpleServiceSubscription.unsubscribe()
  }
}
