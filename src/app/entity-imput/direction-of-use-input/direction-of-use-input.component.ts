import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DirectionOfUse } from 'src/store/models/direction-of-use';

@Component({
  selector: 'app-direction-of-use-input',
  templateUrl: './direction-of-use-input.component.html',
  styleUrls: ['./direction-of-use-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DirectionOfUseInputComponent),
      multi: true
    }
  ]
})
export class DirectionOfUseInputComponent implements ControlValueAccessor {
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
  items: DirectionOfUse[] = []

}
