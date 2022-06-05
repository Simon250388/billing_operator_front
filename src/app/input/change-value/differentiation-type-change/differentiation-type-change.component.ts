import { Component, Inject } from '@angular/core';
import { UntypedFormGroup, Validators, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-differentiation-type-change',
  templateUrl: './differentiation-type-change.component.html',
  styleUrls: ['./differentiation-type-change.component.css']
})
export class DifferentiationTypeChangeComponent {

  formGroup = new FormGroup({
    differentiationTypeId: new FormControl<number | undefined | null>(null, [Validators.required])
  });

  constructor(@Inject(MAT_DIALOG_DATA) public currentValueId: number) { }

  get currentValuePresent(): string {
    return "";
  }

  get controlValue(): number | undefined | null {
    return this.formGroup.value.differentiationTypeId
  }

}
