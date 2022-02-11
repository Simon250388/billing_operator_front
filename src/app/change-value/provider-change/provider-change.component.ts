import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {getHttpRequestInProgress} from "../../../store/selectors/common.selector";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";

@Component({
  selector: 'app-provider-change',
  templateUrl: './provider-change.component.html',
  styleUrls: ['./provider-change.component.css']
})
export class ProviderChangeComponent {

  formGroup: FormGroup = this.formBuilder.group({
    providerId: ['', Validators.required]
  });

  private _saveInProgress: boolean = false

  get saveInProgress() {
    return this._saveInProgress
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ProviderChangeComponent>,
    private store: Store<IAppState>,
    @Inject(MAT_DIALOG_DATA) private data: { value: string, beforeCloseAction: (value: string) => Observable<Boolean> } | undefined
  ) {

    this.store.select(getHttpRequestInProgress).subscribe(value => {

      if (this._saveInProgress && value == false) {
        this.dialogRef.close()
      }

      this._saveInProgress = value
    })
  }

  get valuePresent(): String {
    return this.data?.value || "";
  }

  complete() {
    const currentValue = this.formGroup.get("providerId")?.value;

    if (!this.data || !this.data.beforeCloseAction) {
      this.dialogRef.close()
      return;
    }

    this.data.beforeCloseAction(currentValue)
  }
}
