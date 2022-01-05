import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-differentiation-type-change',
  templateUrl: './differentiation-type-change.component.html',
  styleUrls: ['./differentiation-type-change.component.css']
})
export class DifferentiationTypeChangeComponent {

  formGroup: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public currentValueId: number
  ) {
    this.formGroup = this.formbuilder.group({
      differentiationTypeId: ['', Validators.required]
    })
  }

  get currentValuePresent(): string {
    return "";
  }

  get controlValue(): number {
    return this.formGroup.controls['differentiationTypeId'].value;
  }

}
