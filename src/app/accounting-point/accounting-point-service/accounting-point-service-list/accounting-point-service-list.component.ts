import { Component, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AccountingPointService } from 'src/store/models/accounting-point-service';
import { Observable } from "rxjs";
import {
  directionOfUseSimpleRefPresentSelector,
  providerSimpleRefPresentSelector,
  serviceSimpleRefPresentSelector
} from "../../../../store/selectors/simple-ref.selector";
import { IAppState } from "../../../../store/state/app.state";
import { Store } from "@ngrx/store";
import {
  AccountingPointAddDialogComponent
} from "../../accounting-point-add-dialog/component/accounting-point-add-dialog/accounting-point-add-dialog.component";

@Component({
  selector: 'accounting-point-service-list',
  templateUrl: './accounting-point-service-list.component.html',
  styleUrls: ['./accounting-point-service-list.component.css']
})
export class AccountingPointServiceListComponent {

  @Input() formArray!: FormArray;

  constructor(
    private dialog: MatDialog,
    private store: Store<IAppState>
  ) {
  }

  get items(): AccountingPointService[] {
    return this.formArray.value;
  }

  displayedColumns = [
    'description',
    'service',
    'provider',
    'pointLocation',
    'directionOfUse',
    'meterIsActive',
    'rowAction']

  openAddRowDialog(index?: any): void {
    let data;

    if (index != null) {
      data = this.formArray.at(index).value as AccountingPointService;
    }

    const dialogRef = this.dialog.open(AccountingPointAddDialogComponent, {
      data: data
    });

    dialogRef.afterClosed().subscribe((result: FormGroup) => {
      if (index != null && result) {
        this.formArray.at(index).setValue(result.value as AccountingPointService);
      } else if (result) {
        this.formArray.push(result);
      }
    });
  }

  getServicePresent(id: string): Observable<String> {
    return this.store.select(serviceSimpleRefPresentSelector(id));
  }

  getProviderPresent(id: string): Observable<String> {
    return this.store.select(providerSimpleRefPresentSelector(id));
  }

  getDirectionOfUsePresent(id: string): Observable<String> {
    return this.store.select(directionOfUseSimpleRefPresentSelector(id));
  }

}
