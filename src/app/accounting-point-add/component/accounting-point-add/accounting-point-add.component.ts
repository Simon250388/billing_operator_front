import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-accounting-point-add',
  templateUrl: './accounting-point-add.component.html',
  styleUrls: ['./accounting-point-add.component.css']
})
export class AccountingPointAddComponent implements OnInit {

  formGroupValue : FormGroup | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setFormGroupValue($event: FormGroup) {
    this.formGroupValue = $event
  }

}
