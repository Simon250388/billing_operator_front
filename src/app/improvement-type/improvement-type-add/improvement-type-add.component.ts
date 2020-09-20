import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServiceImprovementTypeRateGroup } from 'src/app/model/service-improvement-type-rate-group';
import { ImprovementTypeRowComponent } from '../improvement-type-row/improvement-type-row.component';

@Component({
  selector: 'app-improvement-type-add',
  templateUrl: './improvement-type-add.component.html',
  styleUrls: ['./improvement-type-add.component.css']
})
export class ImprovementTypeAddComponent {

  @Input() formArray: FormArray;

  constructor(private dialog: MatDialog) { }

  get improvementTypeItems(): ServiceImprovementTypeRateGroup[] {
    return this.formArray.value;
  }

  displayedColumns = ['service', 'improvementType', 'rateGroup', 'rowAction']

  openAddRowDialog(index?: any): void {
    let data: ServiceImprovementTypeRateGroup;

    if (index != null) {
      data = this.formArray.at(index).value as ServiceImprovementTypeRateGroup;
    }

    const dialogRef = this.dialog.open(ImprovementTypeRowComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (index != null && result) {
        this.formArray.at(index).setValue((result as FormGroup).value as ServiceImprovementTypeRateGroup);
      } else if (result) {
        this.formArray.push(result);
      }
    });
  }
}
