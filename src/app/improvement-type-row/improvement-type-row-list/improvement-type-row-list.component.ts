import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServiceImprovementTypeRateGroup } from 'src/store/models/service-improvement-type-rate-group';
import { ImprovementTypeRowAddComponent } from '../improvement-type-row-add/improvement-type-row-add.component';

@Component({
  selector: 'app-improvement-type-row-list',
  templateUrl: './improvement-type-row-list.component.html',
  styleUrls: ['./improvement-type-row-list.component.css']
})
export class ImprovementTypeRowListComponent {

  displayedColumns = ['service', 'improvementType', 'rateGroup', 'rowAction'];

  @Input() formArray!: AbstractControl;

  constructor(
    private dialog: MatDialog  ) { }

  get items(): ServiceImprovementTypeRateGroup[] {
    return (<FormArray>this.formArray).value;
  }


  openAddRowDialog(index?: any): void {

    let data = undefined

    if (index) data = (<FormArray>this.formArray).at(index).value as ServiceImprovementTypeRateGroup;

    const dialogRef = this.dialog.open(ImprovementTypeRowAddComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (index != null && result) {
        (<FormArray>this.formArray).at(index).setValue((result as FormGroup).value as ServiceImprovementTypeRateGroup);
      } else if (result) {
        (<FormArray>this.formArray).push(result);
      }
    });
  }

  getServicePresent(): string {
    return "";
  }

  getImprovementTypePresent(): string {
    return "";
  }

  getRateGroupPresent(): string {
    return "";
  }
}
