import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {IAppState} from "../../../../store/state/app.state";
import {Store} from "@ngrx/store";
import * as EntityActions from "../../../../store/action/key-room.action";
import {IKeyRoomUpdateModel} from "../../../../store/models/key-room.model";
import {roomTypes} from "../../../../store/models/room-type";
import { Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract-details',
  templateUrl: './key-room-add.component.html',
  styleUrls: ['./key-room-add.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false, showError: true}
  }]
})
export class KeyRoomAddComponent {

  keyRoomFormGroup!: FormGroup;

  accountingPointFormGroup!: FormGroup;

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
    private _formBuilder: FormBuilder,
    private router: Router,
    private store: Store<IAppState>,
    private actions: Actions,
  ) {

    this.keyRoomFormGroup = this._formBuilder.group({
      id: ['', [Validators.required]],
      address: [''],
      roomTypeId: [0, [Validators.required]],
      countOwner: [1, [Validators.required, Validators.min(1)]],
      countSubscribed: [0, [Validators.required, Validators.min(1)]],
      countResident: [0, [Validators.required, Validators.min(1)]],
      square: [0, [Validators.required, Validators.min(1)]]
    });

    this.accountingPointFormGroup = this._formBuilder.group({
      accountingPointFormArray: this._formBuilder.array([], Validators.required)
    })

    this.actions.pipe(
      ofType(EntityActions.addNewKeyRoomSuccessAction)
    ).subscribe(() => this.router.navigate(["/key-room"]))


  }

  idControl() {
    return this.keyRoomFormGroup.controls['id'] as FormArray;
  }

  accountingPointsArray() {
    return this.keyRoomFormGroup.controls['accountingPoints'] as FormArray;
  }

  countOwnerControl() {
    return this.keyRoomFormGroup.get('countOwner') as FormControl
  }

  countPrescribedControl() {
    return this.keyRoomFormGroup.get('countSubscribed') as FormControl
  }

  countResidentsControl() {
    return this.keyRoomFormGroup.get('countResident') as FormControl
  }

  squareControl() {
    return this.keyRoomFormGroup.get('square') as FormControl
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

  get accountingPointFormArray(): FormArray {
    return this.accountingPointFormGroup.get('accountingPointFormArray') as FormArray
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
