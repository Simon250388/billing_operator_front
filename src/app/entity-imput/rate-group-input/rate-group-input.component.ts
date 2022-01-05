import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RateGroup } from 'src/store/models/rate-group';

@Component({
  selector: 'app-rate-group-input',
  templateUrl: './rate-group-input.component.html',
  styleUrls: ['./rate-group-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RateGroupInputComponent),
      multi: true
    }
  ]
})
export class RateGroupInputComponent implements ControlValueAccessor {
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

  @Input() buildingId: number = 1;

  items: RateGroup[] = []
}
