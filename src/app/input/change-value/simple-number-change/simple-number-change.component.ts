import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActionCreator, Store } from "@ngrx/store";
import { IAppState } from "../../../../store/state/app.state";
import { Actions } from "@ngrx/effects";
import { Subscription } from "rxjs";
import { AbstractChangeValueComponent } from "../abstract-change-value.component";

@Component({
  selector: 'app-simple-number-change',
  templateUrl: './simple-number-change.component.html',
  styleUrls: ['./simple-number-change.component.scss']
})
export class SimpleNumberChangeComponent extends AbstractChangeValueComponent {

  formGroup = new FormGroup({
    editableValue: new FormControl<string>('', [Validators.required])
  })

  get value(): string | null | undefined {
    return this.formGroup.value.editableValue
  }

  constructor(override readonly dialogRef: MatDialogRef<SimpleNumberChangeComponent>,
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
