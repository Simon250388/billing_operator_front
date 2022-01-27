import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-details',
  templateUrl: './key-room-add.component.html',
  styleUrls: ['./key-room-add.component.css']
})
export class KeyRoomAddComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      buildingId: ['', Validators.required],
      roomId: [''],
      countOwner: [1, Validators.required],
      countPrescribed: [0],
      countResidents: [0],
      roomTypeId: [Validators.required],
      squareValues: this._formBuilder.array([]),
      improvementTypes: this._formBuilder.array([]),
      accountingPoints: this._formBuilder.array([])
    });
  }

  squareValuesArray(): FormArray {
    return this.formGroup.controls['squareValues'] as FormArray;
  }

  improvementTypesArray() {
    return this.formGroup.controls['improvementTypes'] as FormArray;
  }
}
