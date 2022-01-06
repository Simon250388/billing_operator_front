import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { changeMeterValueInActiveAccountingPointAction, changeProviderInActiveAccountingPointAction, changeSelectedActiveAccountingPointAction, loadFromApiStartAction } from 'src/store/action/accounting-point.action';
import { IAccountingPointActive } from 'src/store/models/accounting-point-active.model';
import { getSelectedAccountingPoint, selectAccountingAllPoint } from 'src/store/selectors/accountiing-point.selector';
import { IAppState } from 'src/store/state/app.state';
import { SimpleRef } from 'src/store/models/simple-ref.model';
import { SimpleNumberChangeComponent } from 'src/app/change-value/simple-number-change/simple-number-change.component';
import { ProviderChangeComponent } from 'src/app/change-value/provider-change/provider-change.component';

@Component({
  selector: 'app-accounting-point-list',
  templateUrl: './accounting-point-active-list.component.html',
  styleUrls: ['./accounting-point-active-list.component.css']
})
export class AccountingPointActiveListComponent implements OnInit {


  items: Observable<IAccountingPointActive[]> = this._store.pipe(select(selectAccountingAllPoint))
  selected: Observable<IAccountingPointActive | undefined> = this._store.pipe(select(getSelectedAccountingPoint))

  constructor(
    private dialog: MatDialog,
    private _store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this._store.dispatch(loadFromApiStartAction())
  }

  showProviderDialog(newSelected: IAccountingPointActive): void {

    this._store.dispatch(changeSelectedActiveAccountingPointAction(newSelected))

    const dialogRef = this.dialog.open(ProviderChangeComponent, {
      data: newSelected.provider
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result != '' && <SimpleRef>result != undefined) {
        this._store.dispatch(changeProviderInActiveAccountingPointAction(<SimpleRef>result))
      }
    });
  }

  showDifferentiationTypeChangeDialog(item: IAccountingPointActive): void {

  }

  showMeterValueChangeDialog(newSelected: IAccountingPointActive): void {

    this._store.dispatch(changeSelectedActiveAccountingPointAction(newSelected))

    const dialogRef = this.dialog.open(SimpleNumberChangeComponent, {
      data: newSelected.lastMeterValue
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result != '' && <SimpleRef>result != undefined) {
        this._store.dispatch(changeMeterValueInActiveAccountingPointAction({ value: result }))
      }
    });

  }
}
