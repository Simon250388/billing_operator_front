import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { IAppState } from "../../../../store/state/app.state";
import { ActionCreator, Store } from "@ngrx/store";
import { Actions } from "@ngrx/effects";
import { AbstractChangeValueComponent } from "../abstract-change-value.component";

@Component({
  selector: 'app-date-change',
  templateUrl: './date-change.component.html',
  styleUrls: ['./date-change.component.css']
})
export class DateChangeComponent extends AbstractChangeValueComponent {

  formGroup = new FormGroup({
    editableDate: new FormControl<string>('', [Validators.required])
  })

  get value(): any {
    return this.formGroup.get("editableDate")?.value || ""
  }

  constructor(
    override readonly dialogRef: MatDialogRef<DateChangeComponent>,
    override readonly store: Store<IAppState>,
    override readonly actions: Actions,
    @Inject(MAT_DIALOG_DATA) override readonly data: {
      value: string,
      beforeCloseAction: (value: string) => Subscription,
      inProgressAction: ActionCreator,
      successCompleteAction: ActionCreator,
      failCompleteAction: ActionCreator,
    } | undefined
  ) {
    super(dialogRef, store, actions, data)
  }
}
