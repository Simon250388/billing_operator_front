import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {IAppState} from "../../../store/state/app.state";
import {ActionCreator, Store} from "@ngrx/store";
import {Actions, ofType} from "@ngrx/effects";

@Component({
  selector: 'app-date-change',
  templateUrl: './date-change.component.html',
  styleUrls: ['./date-change.component.css']
})
export class DateChangeComponent {

  formGroup = this.formBuilder.group({
    editableDate: ['', Validators.required]
  })

  private _saveInProgress: boolean = false

  get saveInProgress() {
    return this._saveInProgress
  }

  get valuePresent(): String {
    return this.data?.value || "";
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DateChangeComponent>,
    private store: Store<IAppState>,
    private actions: Actions,
    @Inject(MAT_DIALOG_DATA) private data: {
      value: string,
      beforeCloseAction: (value: string) => Subscription,
      inProgressAction: ActionCreator,
      successCompleteAction: ActionCreator,
      failCompleteAction: ActionCreator,
    } | undefined
  ) {
    if (this.data?.inProgressAction) {
      this.actions.pipe(
        ofType(this.data.inProgressAction))
        .subscribe(() => this._saveInProgress = true)
    }

    if (this.data?.successCompleteAction) {
      this.actions.pipe(
        ofType(this.data.successCompleteAction)
      ).subscribe(() => {
        this._saveInProgress = false
        this.dialogRef.close()
      })
    }

    if (this.data?.failCompleteAction()) {
      this.actions.pipe(
        ofType(this.data.failCompleteAction)
      ).subscribe((errorMessage) => {
        this._saveInProgress = false
        console.log(errorMessage)
      })
    }
  }

  complete() {
    const currentValue = this.formGroup.get("editableDate")?.value;

    if (!this.data || !this.data.beforeCloseAction) {
      this.dialogRef.close()
      return;
    }

    this.data.beforeCloseAction(currentValue)
  }

  close() {
    this.dialogRef.close()
  }
}
