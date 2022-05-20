import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SimpleRef} from 'src/store/models/simple-ref.model';
import {servicesSimpleRefSelector} from 'src/store/selectors/simple-ref.selector';
import {IAppState} from 'src/store/state/app.state';
import {AbstractEntityInput} from "../abstract-entity-input";
import {startServicesHttpRequestAction} from "../../../../store/action/services.action";

@Component({
  selector: 'app-service-input',
  templateUrl: './service-input.component.html',
  styleUrls: ['./service-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ServiceInputComponent),
      multi: true
    }
  ]
})
export class ServiceInputComponent extends AbstractEntityInput implements ControlValueAccessor, OnInit {

  @Input() override formGroup!: FormGroup;
  @Input() override formControlName!: string;
  @Input() override lbl!: string;
  @Input() override placeholder!: string;
  @Input() override stateProperty!: string;

  items: Observable<SimpleRef[]> = this.appState.select(servicesSimpleRefSelector);

  loadItemsAction = startServicesHttpRequestAction()

  constructor(protected override appState: Store<IAppState>) {
    super(appState);
  }
}
