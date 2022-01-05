import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Building } from 'src/store/models/building';

@Component({
  selector: 'app-building-input',
  templateUrl: './building-input.component.html',
  styleUrls: ['./building-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuildingInputComponent),
      multi: true
    }
  ]
})
export class BuildingInputComponent implements ControlValueAccessor {

  @Input() formGroup!: FormGroup;
  @Input() formControlName!: string;
  @Input() lbl!: string;
  @Input() placeholder!: string;

  items: Building[] = []

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
}
