import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import {ActionCreator, Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {AbstractChangeValueComponent} from "../abstract-change-value.component";
import {Actions} from "@ngrx/effects";

@Component({
  selector: 'app-provider-change',
  templateUrl: './provider-change.component.html',
  styleUrls: ['./provider-change.component.css']
})
export class ProviderChangeComponent extends AbstractChangeValueComponent {

  formGroup: FormGroup = this.formBuilder.group({
    providerId: ['', Validators.required]
  });

  get value(): any {
    return this.formGroup.get("providerId")?.value || ""
  }

  constructor(
    override readonly formBuilder: FormBuilder,
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
    super(formBuilder, dialogRef, store, actions, data)
  }


}
