import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AccountingPointService} from 'src/store/models/accounting-point-service';

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
      description: this._formBuilder.control('', [Validators.required]),
      serviceId: this._formBuilder.control('', [Validators.required]),
      providerId: this._formBuilder.control('', [Validators.required]),
      directionOfUseId: this._formBuilder.control('', [Validators.required]),
      meter: this._formBuilder.group({})
    });

    if (rowData) {
      this.formGroup.setValue(rowData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getDescriptionControl(): FormControl {
    return this.formGroup.controls['description'] as FormControl
  }
}
