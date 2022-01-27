import {Component, Inject, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-simple-number-change',
  templateUrl: './simple-number-change.component.html',
  styleUrls: ['./simple-number-change.component.scss']
})
export class SimpleNumberChangeComponent {

  @Input() lbl!: string;
  formGroup: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public currentValue: number
  ) {
    this.formGroup = this.formbuilder.group({
      value: ['', Validators.required]
    })
  }

  get currentValuePresent(): number {
    return this.currentValue;
  }

  get controlValue(): number {
    return this.formGroup.controls['value'].value;
  }
}
