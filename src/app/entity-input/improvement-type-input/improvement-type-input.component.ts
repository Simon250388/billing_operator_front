import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AbstractEntityInput} from "../abstract-entity-input";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {Observable} from "rxjs";
import {SimpleRef} from "../../../store/models/simple-ref.model";
import {improvementSimpleRefSelector} from "../../../store/selectors/simple-ref.selector";
import {startImprovementHttpRequestAction} from "../../../store/action/services.action";

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
export class ImprovementTypeInputComponent extends AbstractEntityInput implements ControlValueAccessor, OnInit {

  @Input() override formGroup!: FormGroup;
  @Input() override formControlName!: string;
  @Input() override lbl!: string;
  @Input() override placeholder!: string;
  @Input() override stateProperty!: string;

  items: Observable<SimpleRef[]> = this.appState.select(improvementSimpleRefSelector);

  loadItemsAction = startImprovementHttpRequestAction()

  constructor(protected override appState: Store<IAppState>) {
    super(appState);
  }
}
