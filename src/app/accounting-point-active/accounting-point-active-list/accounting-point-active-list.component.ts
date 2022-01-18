import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {loadFromApiStartAction} from 'src/store/action/accounting-point.action';
import {IAccountingPointActive} from 'src/store/models/accounting-point-active.model';
import {selectAccountingAllPoint} from 'src/store/selectors/accountiing-point.selector';
import {IAppState} from 'src/store/state/app.state';
import {servicesHttpRequestStartAction} from "../../../store/action/service-simple.action";
import {IServiceSimpleModel} from "../../../store/models/service-simple.model";
import {getSimpleServicesItems} from "../../../store/selectors/service-simple.selector";

@Component({
  selector: 'app-accounting-point-list',
  templateUrl: './accounting-point-active-list.component.html',
  styleUrls: ['./accounting-point-active-list.component.css']
})
export class AccountingPointActiveListComponent implements OnInit {

  accountingPoints: Observable<IAccountingPointActive[]> = this._store.pipe(select(selectAccountingAllPoint))
  simpleServices: Observable<IServiceSimpleModel[]> = this._store.pipe(select(getSimpleServicesItems))

  constructor(
    private dialog: MatDialog,
    private _store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this._store.dispatch(loadFromApiStartAction())
    this._store.dispatch(servicesHttpRequestStartAction())
  }

}
