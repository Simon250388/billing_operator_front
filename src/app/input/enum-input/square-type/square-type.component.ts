import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {SimpleRef} from "../../../../store/models/simple-ref.model";
import {squareTypeValues} from "../../../../store/models/square-type-row";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";

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

  items: SimpleRef[] = squareTypeValues()


  @Input() formGroup!: FormGroup;
  @Input() formControlName!: string;
  @Input() lbl!: string;
  @Input() placeholder!: string;

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {

  }

  registerOnTouched(fn: any): void {

  }

  displayWithFn(value: any): string {
    if (value && value as number) {
      let item = this.items.find(itm => itm.id == value);
      if (item) {
        return item.present
      }
      return "";
    }

    return "";
  }

  displayFnWrapper() {
    return (value: any) => this.displayWithFn(value);
  }
}
