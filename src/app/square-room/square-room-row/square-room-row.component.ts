import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-square-room-row',
  templateUrl: './square-room-row.component.html',
  styleUrls: ['./square-room-row.component.css']
})
export class SquareRoomRowComponent implements OnInit {

  improvementTypes: [] = [];

  formGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public rowData: []) {
    this.formGroup = this._formBuilder.group({
      squareTypeId: [, Validators.required],
      value: [, Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
