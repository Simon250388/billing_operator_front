import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AbstractEntityInput} from "../abstract-entity-input";
import {Observable} from "rxjs";
import {SimpleRef} from "../../../../store/models/simple-ref.model";
import {directionOfUseSimpleRefSelector} from "../../../../store/selectors/simple-ref.selector";
import {startDirectionOfUsesHttpRequestAction} from "../../../../store/action/services.action";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../../store/state/app.state";

@Component({
  selector: 'app-direction-of-use-input',
  templateUrl: './direction-of-use-input.component.html',
  styleUrls: ['./direction-of-use-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DirectionOfUseInputComponent),
      multi: true
    }
  ]
})
export class DirectionOfUseInputComponent extends AbstractEntityInput implements ControlValueAccessor, OnInit {

  @Input() override formGroup!: FormGroup;
  @Input() override formControlName!: string;
  @Input() override lbl!: string;
  @Input() override placeholder!: string;
  @Input() override stateProperty!: string;

  items: Observable<SimpleRef[]> = this.appState.select(directionOfUseSimpleRefSelector);

  loadItemsAction = startDirectionOfUsesHttpRequestAction()

  constructor(protected override appState: Store<IAppState>) {
    super(appState);
  }

}
