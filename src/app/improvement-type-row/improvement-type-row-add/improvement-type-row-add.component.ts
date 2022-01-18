import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ServiceImprovementTypeRateGroup} from 'src/store/models/service-improvement-type-rate-group';

@Component({
  selector: 'app-improvement-type-row-add',
  templateUrl: './improvement-type-row-add.component.html',
  styleUrls: ['./improvement-type-row-add.component.css']
})
export class ImprovementTypeRowAddComponent {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ImprovementTypeRowAddComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public rowData: ServiceImprovementTypeRateGroup) {
    this.formGroup = this._formBuilder.group({
      serviceId: [Validators.required],
      improvementTypeId: [Validators.required],
      rateGroupId: [Validators.required],
    });

    if (rowData) {
      this.formGroup.setValue(rowData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
