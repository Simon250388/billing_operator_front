import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServiceImprovementTypeRateGroup } from 'src/app/model/service-improvement-type-rate-group';
import { ImprovementTypeRowStoreService } from 'src/app/service/improvement-type-row/improvement-type-row-store.service';
import { ImprovementTypeRowAddComponent } from '../improvement-type-row-add/improvement-type-row-add.component';

@Component({
  selector: 'app-improvement-type-row-list',
  templateUrl: './improvement-type-row-list.component.html',
  styleUrls: ['./improvement-type-row-list.component.css']
})
export class ImprovementTypeRowListComponent {

  @Input() formArray: FormArray;

  constructor(
    private dialog: MatDialog,
    private _store : ImprovementTypeRowStoreService
    ) { }

  get improvementTypeItems(): ServiceImprovementTypeRateGroup[] {
    return this.formArray.value;
  }

  get store(): ImprovementTypeRowStoreService {
    return this._store; 
  }


  displayedColumns = ['service', 'improvementType', 'rateGroup', 'rowAction']

  openAddRowDialog(index?: any): void {
    let data: ServiceImprovementTypeRateGroup;

    if (index != null) {
      data = this.formArray.at(index).value as ServiceImprovementTypeRateGroup;
    }

    const dialogRef = this.dialog.open(ImprovementTypeRowAddComponent, {
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
