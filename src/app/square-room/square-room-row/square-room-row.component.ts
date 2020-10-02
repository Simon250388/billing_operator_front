import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SquareTypeRow } from 'src/app/model/square-type-row';

@Component({
  selector: 'app-square-room-row',
  templateUrl: './square-room-row.component.html',
  styleUrls: ['./square-room-row.component.css']
})
export class SquareRoomRowComponent  {

  formGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<SquareRoomRowComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public rowData: SquareTypeRow) {
    this.formGroup = this._formBuilder.group({
      squareTypeId: [, Validators.required],
      value: [, Validators.required]
    });

    if (rowData) {
      this.formGroup.setValue(rowData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
