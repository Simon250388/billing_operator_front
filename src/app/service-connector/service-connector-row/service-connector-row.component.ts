import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-service-connector-row',
  templateUrl: './service-connector-row.component.html',
  styleUrls: ['./service-connector-row.component.css']
})
export class ServiceConnectorRowComponent implements OnInit {

  improvementTypes: [] = [];

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public rowData: []) {
    this.formGroup = this._formBuilder.group({
      serviceId: [, Validators.required],
      providerId: [, Validators.required],
      directionOfUseId: [, Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
