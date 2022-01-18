import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {ProviderChangeComponent} from 'src/app/change-value/provider-change/provider-change.component';
import {SimpleNumberChangeComponent} from 'src/app/change-value/simple-number-change/simple-number-change.component';
import {
  changeMeterValueInActiveAccountingPointAction,
  changeProviderInActiveAccountingPointAction,
  changeSelectedActiveAccountingPointAction
} from 'src/store/action/accounting-point.action';
import {IAccountingPointActive} from 'src/store/models/accounting-point-active.model';
import {SimpleRef} from 'src/store/models/simple-ref.model';
import {IAppState} from 'src/store/state/app.state';

@Component({
  selector: 'app-accounting-point-item',
  templateUrl: './accounting-point-item.component.html',
  styleUrls: ['./accounting-point-item.component.css']
})
export class AccountingPointItemComponent implements OnInit {

  @Input() item!: IAccountingPointActive

  constructor(
    private dialog: MatDialog,
    private _store: Store<IAppState>) {
  }

  ngOnInit() {
  }

  showProviderDialog(): void {

    this._store.dispatch(changeSelectedActiveAccountingPointAction(this.item))

    const dialogRef = this.dialog.open(ProviderChangeComponent, {
      data: this.item.provider
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result != '' && <SimpleRef>result != undefined) {
        this._store.dispatch(changeProviderInActiveAccountingPointAction(<SimpleRef>result))
      }
    });
  }

  showDifferentiationTypeChangeDialog(): void {

  }

  showMeterValueChangeDialog(): void {

    this._store.dispatch(changeSelectedActiveAccountingPointAction(this.item))

    const dialogRef = this.dialog.open(SimpleNumberChangeComponent, {
      data: this.item.lastMeterValue
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result != '' && <SimpleRef>result != undefined) {
        this._store.dispatch(changeMeterValueInActiveAccountingPointAction({value: result}))
      }
    });

  }

}
