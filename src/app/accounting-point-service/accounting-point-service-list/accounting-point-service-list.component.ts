import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AccountingPointService } from 'src/store/models/accounting-point-service';
import { ServiceImprovementTypeRateGroup } from 'src/store/models/service-improvement-type-rate-group';
import { AccountingPointServiceAddComponent } from '../accounting-point-service-add/accounting-point-service-add.component';

@Component({
  selector: 'accounting-point-service-list',
  templateUrl: './accounting-point-service-list.component.html',
  styleUrls: ['./accounting-point-service-list.component.css']
})
export class AccountingPointServiceListComponent {

  @Input() formArray!: AbstractControl;

  constructor(
    private dialog: MatDialog
  ) { }

  get items(): ServiceImprovementTypeRateGroup[] {
    return this.formArray.value;
  }

  displayedColumns = ['service', 'provider', 'pointLocation', 'directionOfUse', 'meterIsActive', 'rowAction']

  openAddRowDialog(index?: any): void {

    let data = undefined;

    if (index) data = (<FormArray>this.formArray).at(index).value as AccountingPointService;

    const dialogRef = this.dialog.open(AccountingPointServiceAddComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (index != null && result) {
        (<FormArray>this.formArray).at(index).setValue((result as FormGroup).value as AccountingPointService);
      } else if (result) {
        (<FormArray>this.formArray).push(result);
      }
    });
  }

}
