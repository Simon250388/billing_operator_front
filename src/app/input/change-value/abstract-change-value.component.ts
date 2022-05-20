import {Inject, Injectable, OnDestroy} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActionCreator, Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {Actions, ofType} from "@ngrx/effects";
import {Subscription} from "rxjs";

@Injectable()
export abstract class AbstractChangeValueComponent implements OnDestroy {
  abstract formGroup: FormGroup

  private _saveInProgress: boolean = false
  private readonly inProgressSubscription: Subscription | null = null
  private readonly successCompleteSubscription: Subscription | null = null
  private readonly failCompleteSubscription: Subscription | null = null

  get saveInProgress(): boolean {
    return this._saveInProgress
  }

  get valuePresent(): string {
    return this.data?.value || "";
  }

  abstract get value(): any

  protected constructor(
    protected readonly formBuilder: FormBuilder,
    protected readonly dialogRef: MatDialogRef<any>,
    protected readonly store: Store<IAppState>,
    protected readonly actions: Actions,
    @Inject(MAT_DIALOG_DATA) protected readonly data: {
      value: string,
      beforeCloseAction: (value: string) => Subscription,
      inProgressAction: ActionCreator,
      successCompleteAction: ActionCreator,
      failCompleteAction: ActionCreator,
    } | undefined
  ) {
    if (this.data?.inProgressAction) {
     this.inProgressSubscription = this.actions.pipe(
        ofType(this.data.inProgressAction))
        .subscribe(() => this._saveInProgress = true)
    }

    if (this.data?.successCompleteAction) {
      this.successCompleteSubscription = this.actions.pipe(
        ofType(this.data.successCompleteAction)
      ).subscribe(() => {
        this._saveInProgress = false
        this.dialogRef.close()
      })
    }

    if (this.data?.failCompleteAction) {
      this.failCompleteSubscription = this.actions.pipe(
        ofType(this.data.failCompleteAction)
      ).subscribe((errorMessage) => {
        this._saveInProgress = false
        console.log(errorMessage)
      })
    }
  }

  ngOnDestroy(): void {
    if (this.inProgressSubscription) this.inProgressSubscription.unsubscribe()
    if (this.successCompleteSubscription) this.successCompleteSubscription.unsubscribe()
    if (this.failCompleteSubscription) this.failCompleteSubscription.unsubscribe()
  }

  complete() {
    if (!this.data || !this.data.beforeCloseAction) {
      this.dialogRef.close()
      return;
    }

    this.data.beforeCloseAction(this.value)
  }

  close() {
    this.dialogRef.close()
  }
}
