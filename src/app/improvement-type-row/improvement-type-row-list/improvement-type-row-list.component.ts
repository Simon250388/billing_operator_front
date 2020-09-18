import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ServiceImprovementTypeRateGroup } from 'src/app/model/service-improvement-type-rate-group';
import { ImprovementTypeRowStoreService } from 'src/app/service/improvement-type-row/improvement-type-row-store.service';
import { ImprovementTypeStoreService } from 'src/app/service/improvement-type/improvement-type-store.service';
import { RateGroupStoreService } from 'src/app/service/rate-group/rate-group-store.service';
import { ServiceStoreService } from 'src/app/service/service/service-store.service';
import { ImprovementTypeRowAddComponent } from '../improvement-type-row-add/improvement-type-row-add.component';

@Component({
  selector: 'app-improvement-type-row-list',
  templateUrl: './improvement-type-row-list.component.html',
  styleUrls: ['./improvement-type-row-list.component.css']
})
export class ImprovementTypeRowListComponent {

  displayedColumns = ['service', 'improvementType', 'rateGroup', 'rowAction'];

  @Input() formArray: FormArray;

  constructor(
    private dialog: MatDialog,
    private store: ImprovementTypeRowStoreService,
    private serviceStore: ServiceStoreService,
    private improvementTypeStore: ImprovementTypeStoreService,
    private rateGroupStore: RateGroupStoreService
  ) { }

  get items(): ServiceImprovementTypeRateGroup[] {
    return this.formArray.value;
  }


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

  getServicePresent(id: number): Observable<string> {
    return this.serviceStore.getPresent(id);
  }

  getImprovementTypePresent(id: number): Observable<string> {
    return this.improvementTypeStore.getPresent(id);
  }

  getRateGroupPresent(id: number): Observable<string> {
    return this.rateGroupStore.getPresent(id);
  }
}
