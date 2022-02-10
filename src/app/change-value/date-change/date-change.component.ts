import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";

@Component({
  selector: 'app-date-change',
  templateUrl: './date-change.component.html',
  styleUrls: ['./date-change.component.css']
})
export class DateChangeComponent {

  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DateChangeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { value: string, beforeCloseAction: (value: string) => Observable<Boolean> } | undefined
  ) {
    this.formGroup = this.formBuilder.group({
      editableDate: ['', Validators.required]
    })
  }

  get valuePresent(): String {
    return this.data?.value || "";
  }

  complete() {
    const currentValue = this.formGroup.get("editableDate")?.value;

    if (!this.data || !this.data.beforeCloseAction) {
      this.dialogRef.close()
      return;
    }

    this.data.beforeCloseAction(currentValue)

    this.dialogRef.close()
  }
}
