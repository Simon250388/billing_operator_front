import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { ActionCreator, Store } from "@ngrx/store";
import { IAppState } from "../../../../store/state/app.state";
import { AbstractChangeValueComponent } from "../abstract-change-value.component";
import { Actions } from "@ngrx/effects";

@Component({
  selector: 'app-provider-change',
  templateUrl: './provider-change.component.html',
  styleUrls: ['./provider-change.component.css']
})
export class ProviderChangeComponent extends AbstractChangeValueComponent {

  formGroup = new FormGroup({
    providerId: new FormControl<string>('', [Validators.required])
  });

  get value(): string | undefined | null {
    return this.formGroup.value.providerId
  }

  constructor(
    override readonly dialogRef: MatDialogRef<ProviderChangeComponent>,
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
