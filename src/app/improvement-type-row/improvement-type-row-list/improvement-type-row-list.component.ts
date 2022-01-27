import {Component, Input} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ServiceImprovementTypeRateGroup} from 'src/store/models/service-improvement-type-rate-group';
import {ImprovementTypeRowAddComponent} from '../improvement-type-row-add/improvement-type-row-add.component';
import {IAppState} from "../../../store/state/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {
  improvementSimpleRefPresentSelector, rateGroupSimpleRefPresentSelector,
  serviceSimpleRefPresentSelector
} from "../../../store/selectors/simple-ref.selector";
import {SquareTypeRow} from "../../../store/models/square-type-row";

@Component({
  selector: 'app-improvement-type-row-list',
  templateUrl: './improvement-type-row-list.component.html',
  styleUrls: ['./improvement-type-row-list.component.css']
})
export class ImprovementTypeRowListComponent {

  displayedColumns = ['service', 'improvementType', 'rateGroup', 'rowAction'];

  @Input() formArray!: FormArray;

  constructor(
    private dialog: MatDialog,
    private store: Store<IAppState>
    ) {
  }

  get items(): ServiceImprovementTypeRateGroup[] {
    return this.formArray.value;
  }


  openAddRowDialog(index?: any): void {

    let data;

    if (index != null) {
      data = this.formArray.at(index).value as ServiceImprovementTypeRateGroup;
    }

    const dialogRef = this.dialog.open(ImprovementTypeRowAddComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe((result: FormGroup) => {
      if (index != null && result) {
        this.formArray.at(index).setValue(result.value as ServiceImprovementTypeRateGroup);
      } else if (result) {
        this.formArray.push(result);
      }
    });
  }

  getServicePresent(id: string): Observable<String> {
    return this.store.select(serviceSimpleRefPresentSelector(id));
  }

  getImprovementTypePresent(id: string): Observable<String> {
    return this.store.select(improvementSimpleRefPresentSelector(id));
  }

  getRateGroupPresent(id: string): Observable<String> {
    return this.store.select(rateGroupSimpleRefPresentSelector(id));
  }
}
