import { Component, Inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountingPointService } from 'src/store/models/accounting-point-service';

@Component({
  selector: 'accounting-point-service-add',
  templateUrl: './accounting-point-service-add.component.html',
  styleUrls: ['./accounting-point-service-add.component.css']
})
export class AccountingPointServiceAddComponent {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AccountingPointServiceAddComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public rowData: AccountingPointService) {
    this.formGroup = this._formBuilder.group({
      serviceId: [Validators.required],
      providerId: [Validators.required],
      directionOfUseId: [Validators.required],
      accountingPoint: this._formBuilder.group({
        location: [Validators.required]
      }),
      meter: this._formBuilder.group({
      })
    });

    if (rowData) {
      this.formGroup.setValue(rowData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
