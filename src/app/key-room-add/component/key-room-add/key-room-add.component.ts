import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {IAppState} from "../../../../store/state/app.state";
import {Store} from "@ngrx/store";
import {addNewKeyRoomStartAction} from "../../../../store/action/key-room.action";
import {IKeyRoomUpdateModel} from "../../../../store/models/key-room.model";

@Component({
  selector: 'app-contract-details',
  templateUrl: './key-room-add.component.html',
  styleUrls: ['./key-room-add.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false, showError: true}
  }]
})
export class KeyRoomAddComponent implements OnInit {

  formGroup!: FormGroup;

  get accountingPointsArrayIsValid(): boolean {
    return this.accountingPointsArray().valid
  }

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store<IAppState>
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      buildingId: [''],
      roomId: [''],
      countOwner: [1, [Validators.required, Validators.min(1)]],
      countPrescribed: [0, [Validators.required, Validators.min(1)]],
      countResidents: [0, [Validators.required, Validators.min(1)]],
      roomTypeId: [Validators.required],
      squareValues: this._formBuilder.array([], Validators.required),
      improvementTypes: this._formBuilder.array([], Validators.required),
      accountingPoints: this._formBuilder.array([], Validators.required)
    });
  }

  squareValuesArray(): FormArray {
    return this.formGroup.controls['squareValues'] as FormArray;
  }

  improvementTypesArray() {
    return this.formGroup.controls['improvementTypes'] as FormArray;
  }

  accountingPointsArray() {
    return this.formGroup.controls['accountingPoints'] as FormArray;
  }

  countOwnerControl() {
    return this.formGroup.get('countOwner') as FormControl
  }

  countPrescribedControl() {
    return this.formGroup.get('countPrescribed') as FormControl
  }

  countResidentsControl() {
    return this.formGroup.get('countResidents') as FormControl
  }

  roomPropertyHasError(): boolean {

    let controls = ['buildingId', 'roomId', 'countOwner', 'countPrescribed', 'countResidents']

    for (const control of controls) {
      if (this.formGroup.get(control) && this.formGroup.get(control)!.invalid) {
        return true
      }
    }

    return false;
  }

  save() {
    if (this.formGroup.invalid) {
      return
    }
    this.store.dispatch(addNewKeyRoomStartAction(this.formGroup.value as IKeyRoomUpdateModel))
  }
}
