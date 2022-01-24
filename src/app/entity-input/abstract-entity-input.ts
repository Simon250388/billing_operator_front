import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {SimpleRef} from "../../store/models/simple-ref.model";
import {Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {TypedAction} from "@ngrx/store/src/models";
import {Injectable} from "@angular/core";

@Injectable()
export abstract class AbstractEntityInput {
  formGroup!: FormGroup;
  formControlName!: string;
  lbl!: string;
  placeholder!: string;
  stateProperty!: string;

  abstract items: Observable<SimpleRef[]>

  abstract loadItemsAction: TypedAction<any>

  protected constructor(protected appState: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.appState.dispatch(this.loadItemsAction);
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  displayWithFn(item: SimpleRef) {
    return item?.present
  }

}
