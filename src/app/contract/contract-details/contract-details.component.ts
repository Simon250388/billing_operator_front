import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrls: ['./contract-details.component.css']
})
export class ContractDetailsComponent implements OnInit {

  buildings: [] = [];

  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      secondName: ['', Validators.required],
      firstName: ['', Validators.required],
      midleName: [''],
      buildingId: ['', Validators.required],
      roomId: [''],
      countOwner: [1, Validators.required],
      countPrescribed: [],
      countResidents: [],
      roomTypeId: [, Validators.required]
    });
  }

}
