import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActionCreator, Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";
import {Actions} from "@ngrx/effects";
import {Subscription} from "rxjs";
import {AbstractChangeValueComponent} from "../abstract-change-value.component";

@Component({
  selector: 'app-simple-number-change',
  templateUrl: './simple-number-change.component.html',
  styleUrls: ['./simple-number-change.component.scss']
})
export class SimpleNumberChangeComponent extends AbstractChangeValueComponent  {

  formGroup = this.formBuilder.group({
    editableValue: ['', Validators.required]
  })

  get value(): number {
    return this.formGroup.get("editableValue")?.value || 0
  }

  constructor(
    override readonly formBuilder: FormBuilder,
    override readonly dialogRef: MatDialogRef<SimpleNumberChangeComponent>,
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
    super(formBuilder, dialogRef, store, actions, data)
  }
}
