import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractEntityInput} from "../abstract-entity-input";
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Observable} from "rxjs";
import {SimpleRef} from "../../../store/models/simple-ref.model";
import {providerSimpleRefSelector} from "../../../store/selectors/simple-ref.selector";
import {startProvidesHttpRequestAction} from "../../../store/action/services.action";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";

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
export class ProviderInputComponent extends AbstractEntityInput implements ControlValueAccessor, OnInit {

  @Input() override formGroup!: FormGroup;
  @Input() override formControlName!: string;
  @Input() override lbl!: string;
  @Input() override placeholder!: string;
  @Input() override stateProperty!: string;

  items: Observable<SimpleRef[]> = this.appState.select(providerSimpleRefSelector);

  loadItemsAction = startProvidesHttpRequestAction

  constructor(protected override appState: Store<IAppState>) {
    super(appState);
  }

}
