import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ImprovementType } from 'src/store/models/improvement-type';


@Component({
  selector: 'app-improvement-type-input',
  templateUrl: './improvement-type-input.component.html',
  styleUrls: ['./improvement-type-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ImprovementTypeInputComponent),
      multi: true
    }
  ]
})
export class ImprovementTypeInputComponent implements ControlValueAccessor {

  @Input() formGroup!: FormGroup;
  @Input() formControlName!: string;
  @Input() lbl!: string;
  @Input() placeholder!: string;

  @Input() buildingId: number = 1;

  items: ImprovementType[] = []

  constructor() { }
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
