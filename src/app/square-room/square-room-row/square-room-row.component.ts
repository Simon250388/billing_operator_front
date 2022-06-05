import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SquareTypeRow } from 'src/store/models/square-type-row';

@Component({
  selector: 'app-square-room-row',
  templateUrl: './square-room-row.component.html',
  styleUrls: ['./square-room-row.component.css']
})
export class SquareRoomRowComponent {

  formGroup = new FormGroup({
    squareTypeId: new FormControl<string | null>(null, [Validators.required]),
    value: new FormControl<number>(0, [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<SquareRoomRowComponent>,
    @Inject(MAT_DIALOG_DATA) public rowData: SquareTypeRow) {

    if (rowData) {
      this.formGroup.setValue(rowData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
