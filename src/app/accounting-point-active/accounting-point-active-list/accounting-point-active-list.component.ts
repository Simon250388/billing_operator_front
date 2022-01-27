import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';

import {loadFromApiStartAction} from 'src/store/action/accounting-point.action';
import {IAccountingPointActive} from 'src/store/models/accounting-point-active.model';
import {IAppState} from 'src/store/state/app.state';
import {IServiceSimpleModel} from "../../../store/models/service-simple.model";
import {getAccountingPointsCurrentKeyRoom, isAccountingPointsLoad} from "../../../store/selectors/key-room.selector";

@Component({
  selector: 'app-accounting-point-list',
  templateUrl: './accounting-point-active-list.component.html',
  styleUrls: ['./accounting-point-active-list.component.css']
})
export class AccountingPointActiveListComponent implements OnInit {

  accountingPoints: Observable<IAccountingPointActive[]> = this._store.pipe(select(getAccountingPointsCurrentKeyRoom))
  // simpleServices: Observable<IServiceSimpleModel[]> = this._store.pipe(select(getSimpleServicesCurrentKeyRoom))
  simpleServices: Observable<IServiceSimpleModel[]> = of([])

  constructor(
    private dialog: MatDialog,
    private _store: Store<IAppState>) {
  }

  ngOnInit(): void {

    this._store.select(isAccountingPointsLoad).subscribe(accountingPointsState => {
      if (accountingPointsState && accountingPointsState.current && !accountingPointsState.isAccountingPointLoad) {
        this._store.dispatch(loadFromApiStartAction(accountingPointsState.current.id))
      }
    })

    // this._store.select(isSimpleServiceLoad).subscribe(simpleServiceState => {
    //   if (simpleServiceState && simpleServiceState.current && !simpleServiceState.isAccountingPointLoad) {
    //     this._store.dispatch(servicesHttpRequestStartAction(simpleServiceState.current.id))
    //   }
    // })
  }

}
