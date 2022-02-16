import {Component, OnDestroy} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {IAccountingPointActiveState} from "../../../../store/state/accounting-pointactive.state";
import {Store} from "@ngrx/store";
import {IAccountingPointActiveToUpdateModel} from "../../../../store/models/accounting-point-active.model";
import {
  addAccountingPointStartAction,
  addAccountingPointSuccessAction
} from "../../../../store/action/accounting-point.action";
import {Actions, ofType} from "@ngrx/effects";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-accounting-point-add',
  templateUrl: './accounting-point-add.component.html',
  styleUrls: ['./accounting-point-add.component.css']
})
export class AccountingPointAddComponent implements OnDestroy {

  private formGroupValue: FormGroup | undefined;
  private _saveInProgress: boolean = false;
  private addItemSubscription: Subscription;

  get saveInProgress(): boolean {
    return this._saveInProgress;
  }

  constructor(
    private readonly store: Store<IAccountingPointActiveState>,
    private readonly actions: Actions,
    private readonly router: Router,
    private readonly activeRoute: ActivatedRoute
  ) {
    this.addItemSubscription = this.actions.pipe(
      ofType(addAccountingPointSuccessAction)
    )
      .subscribe(() => this.router.navigate(["../"], { relativeTo: this.activeRoute }))
  }

  setFormGroupValue($event: FormGroup) {
    this.formGroupValue = $event
  }

  save() {
    this.formGroupValue?.disable()

    this._saveInProgress = true

    this.store.dispatch(addAccountingPointStartAction(this.formGroupValue?.value as IAccountingPointActiveToUpdateModel))
  }

  ngOnDestroy(): void {
    this.addItemSubscription.unsubscribe()
  }
}
