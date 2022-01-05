import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProviderChangeComponent } from 'src/app/change-value/provider-change/provider-change.component';
import { ChangeProviderIntoSelectedAccountingPoint, ChangeSelected, GetActiveAccountingPoint } from 'src/store/action/accounting-point.action';
import { AccountingPointActive } from 'src/store/models/accounting-point-active.model';
import { getSelectedAccountingPoint, selectAccountingAllPoint } from 'src/store/selectors/accountiing-point.selector';
import { IAppState } from 'src/store/state/app.state';
import { SimpleRef } from 'src/store/models/simple-ref.model';

@Component({
  selector: 'app-accounting-point-list',
  templateUrl: './accounting-point-active-list.component.html',
  styleUrls: ['./accounting-point-active-list.component.css']
})
export class AccountingPointActiveListComponent implements OnInit {


  items: Observable<AccountingPointActive[]> = this._store.pipe(select(selectAccountingAllPoint))
  selected: Observable<AccountingPointActive | undefined> = this._store.pipe(select(getSelectedAccountingPoint))

  constructor(
    private dialog: MatDialog,
    private _store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this._store.dispatch(new GetActiveAccountingPoint())
  }

  showProviderDialog(newSelected: AccountingPointActive): void {

    this._store.dispatch(new ChangeSelected(newSelected))

    const dialogRef = this.dialog.open(ProviderChangeComponent, {
      data: newSelected.provider
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result != '' && <SimpleRef>result != undefined) {
        this._store.dispatch(new ChangeProviderIntoSelectedAccountingPoint(<SimpleRef>result))
      }
    });
  }

  showDifferentiationTypeChangeDialog(item: AccountingPointActive): void {

  }

  showMeterValueChangeDialog(item: AccountingPointActive): void {

  }
}
