import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      secondName: ['', Validators.required],
      firstName: ['', Validators.required],
      midleName: [''],
      buildingId: ['', Validators.required],
      roomId: [''],
      countOwner: [1, Validators.required],
      countPrescribed: [0],
      countResidents: [0],
      roomTypeId: [, Validators.required],
      squareValues: this._formBuilder.array([]),
      improvementTypes: this._formBuilder.array([]),
      accountingPoints: this._formBuilder.array([])
    });
  }
}
