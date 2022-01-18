import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SquareTypeRow} from 'src/store/models/square-type-row';

@Component({
  selector: 'app-square-type',
  templateUrl: './square-type.component.html',
  styleUrls: ['./square-type.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SquareTypeInputComponent),
      multi: true
    }
  ]
})
export class SquareTypeInputComponent implements ControlValueAccessor {

  items: SquareTypeRow[] = []

  @Input() formGroup!: FormGroup;
  @Input() formControlName!: string;
  @Input() lbl!: string;
  @Input() placeholder!: string;

  constructor() {
  }

  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void {

  }

  registerOnTouched(fn: any): void {

  }
}
