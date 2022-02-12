import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {IAccountingPointActive} from 'src/store/models/accounting-point-active.model';
import {IServiceSimpleModel} from "../../../store/models/service-simple.model";
import {Actions, ofType} from "@ngrx/effects";
import * as EntityAction from "../../../store/action/accounting-point.action";
import {IAccountingPointActiveState} from "../../../store/state/accounting-pointactive.state";
import {getAccountingPointsItems, getSimpleServiceItems} from "../../../store/selectors/accounting-point.selector";

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
  private actionAccountingPointSubscription: Subscription | undefined
  private actionSimpleServiceSubscription: Subscription | undefined

  constructor(
    private readonly store: Store<IAccountingPointActiveState>,
    private readonly actions: Actions) {

    this.accountingPointSubscription = this.accountingPoints.subscribe(items => {
      if (items == undefined) {
        this._itemsIsLoaded  = false

        this.store.dispatch(EntityAction.startLoadItemsFromApiAction())

        this.actionAccountingPointSubscription = this.actions.pipe(
          ofType(EntityAction.successfulLoadItemsFromApiAction)
        ).subscribe(() => this._itemsIsLoaded = true)
      } else {
        this._itemsIsLoaded = true
      }
    })


    this.simpleServiceSubscription = this.simpleServices.subscribe(items => {
      if (items == undefined) {

        this._simpleServiceIsLoaded  = false

        this.store.dispatch(EntityAction.startLoadSimpleServiceItemsFromApiAction())

        this.actionSimpleServiceSubscription = this.actions.pipe(
          ofType(EntityAction.successfulLoadSimpleServiceItemsFromApiAction)
        ).subscribe(() => this._simpleServiceIsLoaded = true)
      } else {
        this._simpleServiceIsLoaded = true
      }
    })

  }

  ngOnDestroy(): void {
    this.accountingPointSubscription.unsubscribe()
    this.simpleServiceSubscription.unsubscribe()
    if (this.actionAccountingPointSubscription) this.actionAccountingPointSubscription.unsubscribe()
    if (this.actionSimpleServiceSubscription) this.actionSimpleServiceSubscription.unsubscribe()
  }
}
