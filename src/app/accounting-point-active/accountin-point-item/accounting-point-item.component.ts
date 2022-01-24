import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {ProviderChangeComponent} from 'src/app/change-value/provider-change/provider-change.component';
import {SimpleNumberChangeComponent} from 'src/app/change-value/simple-number-change/simple-number-change.component';
import {IAccountingPointActive} from 'src/store/models/accounting-point-active.model';
import {SimpleRef} from 'src/store/models/simple-ref.model';
import {IAppState} from 'src/store/state/app.state';
import * as AccountingPointActions from 'src/store/action/accounting-point.action';

@Component({
  selector: 'app-accounting-point-item',
  templateUrl: './accounting-point-item.component.html',
  styleUrls: ['./accounting-point-item.component.css']
})
export class AccountingPointItemComponent implements OnInit {

  @Input() item!: IAccountingPointActive

  constructor(
    private dialog: MatDialog,
    private store: Store<IAppState>) {
  }

  ngOnInit() {
  }

  showProviderDialog(): void {

    this.store.dispatch(AccountingPointActions.changeSelectedActiveAccountingPointAction(this.item))

    const dialogRef = this.dialog.open(ProviderChangeComponent, {
      data: this.item.provider
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result != '' && <SimpleRef>result != undefined) {
        this.store.dispatch(AccountingPointActions.changeProviderInActiveAccountingPointAction(<SimpleRef>result))
      }
    });
  }

  showDifferentiationTypeChangeDialog(): void {

  }

  showMeterValueChangeDialog(): void {

    this.store.dispatch(AccountingPointActions.changeSelectedActiveAccountingPointAction(this.item))

    const dialogRef = this.dialog.open(SimpleNumberChangeComponent, {
      data: this.item.lastMeterValue
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result != '' && <SimpleRef>result != undefined) {
        this.store.dispatch(AccountingPointActions.changeMeterValueInActiveAccountingPointAction({value: result}))
      }
    });
  }

}
