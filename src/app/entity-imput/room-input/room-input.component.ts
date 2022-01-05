import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Room } from 'src/store/models/room';


@Component({
  selector: 'app-room-input',
  templateUrl: './room-input.component.html',
  styleUrls: ['./room-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RoomInputComponent),
      multi: true
    }
  ]
})
export class RoomInputComponent implements OnInit, ControlValueAccessor {
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

  filtrItems: Room[] = [];


  ngOnInit(): void { }
}
