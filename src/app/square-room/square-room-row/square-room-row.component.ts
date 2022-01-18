import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SquareTypeRow} from 'src/store/models/square-type-row';

@Component({
  selector: 'app-square-room-row',
  templateUrl: './square-room-row.component.html',
  styleUrls: ['./square-room-row.component.css']
})
export class SquareRoomRowComponent {

  formGroup: FormGroup = this._formBuilder.group({
    squareTypeId: [Validators.required],
    value: [Validators.required]
  });

  constructor(
    public dialogRef: MatDialogRef<SquareRoomRowComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public rowData: SquareTypeRow) {

    if (rowData) {
      this.formGroup.setValue(rowData);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
