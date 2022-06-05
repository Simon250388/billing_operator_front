import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, UntypedFormArray, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { IAppState } from "../../../../../store/state/app.state";
import { Store } from "@ngrx/store";
import * as EntityActions from "../../../../../store/action/key-room.action";
import { IKeyRoomUpdateModel } from "../../../../../store/models/key-room.model";
import { roomTypes } from "../../../../../store/models/room-type";
import { Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-details',
  templateUrl: './key-room-add.component.html',
  styleUrls: ['./key-room-add.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false, showError: true }
  }]
})
export class KeyRoomAddComponent {

  keyRoomFormGroup = new FormGroup({
    id: new FormControl<string | null>(null, [Validators.required]),
    address: new FormControl<string>(''),
    roomTypeId: new FormControl<number>(0, [Validators.required]),
    countOwner: new FormControl<number>(1, [Validators.required, Validators.min(1)]),
    countSubscribed: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
    countResident: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
    square: new FormControl<number>(0, [Validators.required, Validators.min(1)])
  });;

  accountingPointFormGroup = new FormGroup({
    accountingPointFormArray: new FormArray([], Validators.required)
  });

  private _saveInProgress: boolean = false

  get saveInProgress(): boolean {
    return this._saveInProgress;
  }

  get roomTypesKeys(): string[] {
    const keys = []
    for (const item in roomTypes) {
      keys.push(item)
    }
    return keys
  }

  getRoomTypePresent(key: string): string {
    return roomTypes[key].present
  }

  get accountingPointsArrayIsValid(): boolean {
    return this.accountingPointsArray().valid
  }

  constructor(
    private router: Router,
    private store: Store<IAppState>,
    private actions: Actions
  ) {
    this.actions.pipe(
      ofType(EntityActions.addNewKeyRoomSuccessAction)
    ).subscribe(() => this.router.navigate(["/key-room"]))
  }

  idControl(): FormControl<string | null> {
    return this.keyRoomFormGroup.controls.id;
  }

  accountingPointsArray() {
    return this.accountingPointFormGroup.controls.accountingPointFormArray;
  }

  countOwnerControl() {
    return this.keyRoomFormGroup.controls.countOwner;
  }

  countPrescribedControl() {
    return this.keyRoomFormGroup.controls.countSubscribed;
  }

  countResidentsControl() {
    return this.keyRoomFormGroup.controls.countResident;
  }

  squareControl() {
    return this.keyRoomFormGroup.controls.square
  }

  roomPropertyHasError(): boolean {

    let controls = ['id', 'address', 'countOwner', 'square', 'countSubscribed', 'countResident']

    for (const control of controls) {
      if (this.keyRoomFormGroup.get(control) && this.keyRoomFormGroup.get(control)!.invalid) {
        return true
      }
    }

    return false;
  }

  get accountingPointFormArray(): UntypedFormArray {
    return this.accountingPointFormGroup.get('accountingPointFormArray') as UntypedFormArray
  }

  save() {

    if (this.keyRoomFormGroup.invalid) {
      return
    }

    this.keyRoomFormGroup.disable()

    this._saveInProgress = true

    this.store.dispatch(EntityActions.addNewKeyRoomStartAction(this.keyRoomFormGroup.value as IKeyRoomUpdateModel))
  }
}
