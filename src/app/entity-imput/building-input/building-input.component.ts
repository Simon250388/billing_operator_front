import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { startServicesHttpRequestAction } from 'src/store/action/services.action';
import { SimpleRef } from 'src/store/models/simple-ref.model';
import { getSimpleItemsByNameSelector } from 'src/store/selectors/simple-ref.selector';
import { IAppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-entity-input',
  templateUrl: './building-input.component.html',
  styleUrls: ['./building-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EntityInputComponent),
      multi: true
    }
  ]
})
export class EntityInputComponent implements ControlValueAccessor, OnInit {

  @Input() formGroup!: FormGroup;
  @Input() formControlName!: string;
  @Input() lbl!: string;
  @Input() placeholder!: string;
  @Input() stateProperty!: string;

  items: Observable<SimpleRef[]> = this.appState.select(getSimpleItemsByNameSelector("services"));

  constructor(private appState: Store<IAppState>) { }

  ngOnInit(): void {
    this.appState.dispatch(startServicesHttpRequestAction());
  }

  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }

  displayWithFn(item: SimpleRef) {
    return item?.present
  }
}
