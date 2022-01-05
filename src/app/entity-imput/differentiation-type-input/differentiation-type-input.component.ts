import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DifferentiationType } from 'src/store/models/differentiation-type';

@Component({
  selector: 'app-differentiation-type-input',
  templateUrl: './differentiation-type-input.component.html',
  styleUrls: ['./differentiation-type-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DifferentiationTypeInputComponent),
      multi: true
    }
  ]
})
export class DifferentiationTypeInputComponent implements ControlValueAccessor {
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  @Input() formGroup!: FormGroup;
  @Input() formControlName!: string;
  @Input() lbl!: string;
  @Input() placeholder!: string;
  
  items: DifferentiationType[] = []


}
