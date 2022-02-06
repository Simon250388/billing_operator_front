import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {
  accountingPointPropertyPresent,
  accountingPointPropertyTranslations,
  IAccountingPointActive
} from 'src/store/models/accounting-point-active.model';
import {IAppState} from 'src/store/state/app.state';

@Component({
  selector: 'app-accounting-point-item',
  templateUrl: './accounting-point-item.component.html',
  styleUrls: ['./accounting-point-item.component.css']
})
export class AccountingPointItemComponent implements OnInit {

  @Input() item!: IAccountingPointActive
  @Output() onItemClick: EventEmitter<IAccountingPointActive> = new EventEmitter()

  constructor(
    private dialog: MatDialog,
    private store: Store<IAppState>) {
  }

  ngOnInit(): void {
  }

  get keys(): string[] {
    let result = []
    for (let key in accountingPointPropertyTranslations) {
      result.push(key)
    }
    return result;
  }

  getValuePresent(property: string): String {
    let presentFunc = accountingPointPropertyPresent[property]
    return presentFunc(this.item)
  }

  getPropertyPresent(property: string): String {
    return accountingPointPropertyTranslations[property]
  }

  onClick() {
    this.onItemClick.emit(this.item)
  }

  // ngOnInit() {
  // }
  //
  // showProviderDialog(): void {
  //
  //   this.store.dispatch(AccountingPointActions.changeSelectedActiveAccountingPointAction(this.item))
  //
  //   const dialogRef = this.dialog.open(ProviderChangeComponent, {
  //     data: this.item.provider
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result && result != '' && <SimpleRef>result != undefined) {
  //       this.store.dispatch(AccountingPointActions.changeProviderInActiveAccountingPointAction(<SimpleRef>result))
  //     }
  //   });
  // }
  //
  // showDifferentiationTypeChangeDialog(): void {
  //
  // }
  //
  // showMeterValueChangeDialog(): void {
  //
  //   this.store.dispatch(AccountingPointActions.changeSelectedActiveAccountingPointAction(this.item))
  //
  //   const dialogRef = this.dialog.open(SimpleNumberChangeComponent, {
  //     data: this.item.lastMeterValue
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result && result != '' && <SimpleRef>result != undefined) {
  //       this.store.dispatch(AccountingPointActions.changeMeterValueInActiveAccountingPointAction({value: result}))
  //     }
  //   });
  // }

}
