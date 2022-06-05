import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceImprovementTypeRateGroup } from 'src/store/models/service-improvement-type-rate-group';

@Component({
  selector: 'app-improvement-type-row-add',
  templateUrl: './improvement-type-row-add.component.html',
  styleUrls: ['./improvement-type-row-add.component.css']
})
export class ImprovementTypeRowAddComponent {

  formGroup = new FormGroup({
    serviceId: new FormControl<string>('', [Validators.required]),
    improvementTypeId: new FormControl<string>('', [Validators.required]),
    rateGroupId: new FormControl<string>('', [Validators.required]),
  });;

  constructor(
    public dialogRef: MatDialogRef<ImprovementTypeRowAddComponent>,
    @Inject(MAT_DIALOG_DATA) public rowData: ServiceImprovementTypeRateGroup) {
   

    if (rowData) {
      this.formGroup.setValue(rowData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
