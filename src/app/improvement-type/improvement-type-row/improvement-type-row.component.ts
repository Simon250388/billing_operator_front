import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-improvement-type-row',
  templateUrl: './improvement-type-row.component.html',
  styleUrls: ['./improvement-type-row.component.css']
})
export class ImprovementTypeRowComponent implements OnInit {

  improvementTypes: [] = [];

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public rowData: []) {
    this.formGroup = this._formBuilder.group({
      serviceId: [, Validators.required],
      improvementTypeId: [, Validators.required],
      rateGroupId: [, Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
