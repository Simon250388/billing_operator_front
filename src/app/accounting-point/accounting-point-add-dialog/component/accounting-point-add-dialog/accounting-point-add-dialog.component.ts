import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { AccountingPointService } from "../../../../../store/models/accounting-point-service";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-accounting-point-add-form-form-dialog',
  templateUrl: './accounting-point-add-dialog.component.html',
  styleUrls: ['./accounting-point-add-dialog.component.css']
})
export class AccountingPointAddDialogComponent {

  value: AccountingPointService | undefined;
  formGroupValue: FormGroup | undefined;

  constructor(
    public dialogRef: MatDialogRef<AccountingPointAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public rowData: AccountingPointService) {

    if (rowData) {
      this.value = rowData as AccountingPointService;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  setFormGroupValue($event: FormGroup) {
    this.formGroupValue = $event
  }
}
