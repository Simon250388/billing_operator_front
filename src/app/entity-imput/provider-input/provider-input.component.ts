import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Provider } from 'src/store/models/provider';
import { SimpleRef } from 'src/store/models/simple-ref.model';

@Component({
  selector: 'app-provider-input',
  templateUrl: './provider-input.component.html',
  styleUrls: ['./provider-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProviderInputComponent),
      multi: true
    }
  ]
})
export class ProviderInputComponent implements ControlValueAccessor {

  @Input() formGroup!: FormGroup;
  @Input() formControlName!: string;
  @Input() lbl!: string;
  @Input() placeholder!: string;

  @Input() buildingId: number = 1;

  items: SimpleRef[] = [{
    id: "someId",
    present: "ООО Водоканал"
  },
  {
    id: "someId",
    present: "Другой поставщик"
  }]

  constructor() { }


  presentFn(item: SimpleRef) {
    return item && item.present ? item.present : '';

  }

  writeValue(obj: any): void {
    ;
  }
  registerOnChange(fn: any): void {
    ;
  }
  registerOnTouched(fn: any): void {
    ;
  }
}
