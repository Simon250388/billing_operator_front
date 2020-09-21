import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AccountingPointService } from 'src/app/model/accounting-point-service';
import { ServiceImprovementTypeRateGroup } from 'src/app/model/service-improvement-type-rate-group';
import { AccountingPointServiceStoreService } from 'src/app/service/accounting-point-service/accounting-point-service-store.service';
import { AccountingPointServiceAddComponent } from '../accounting-point-service-add/accounting-point-service-add.component';

@Component({
  selector: 'accounting-point-service-list',
  templateUrl: './accounting-point-service-list.component.html',
  styleUrls: ['./accounting-point-service-list.component.css']
})
export class AccountingPointServiceListComponent {

  @Input() formArray: FormArray;

  constructor(
    private dialog: MatDialog,
    private _store: AccountingPointServiceStoreService
  ) { }

  get items(): ServiceImprovementTypeRateGroup[] {
    return this.formArray.value;
  }

  get store(): AccountingPointServiceStoreService {
    return this._store;
  }

  displayedColumns = ['service', 'provider', 'pointLocation', 'directionOfUse', 'meterIsActive', 'rowAction']

  openAddRowDialog(index?: any): void {
    let data: AccountingPointService;

    if (index != null) {
      data = this.formArray.at(index).value as AccountingPointService;
    }

    const dialogRef = this.dialog.open(AccountingPointServiceAddComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (index != null && result) {
        this.formArray.at(index).setValue((result as FormGroup).value as AccountingPointService);
      } else if (result) {
        this.formArray.push(result);
      }
    });
  }

}
