import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AccountingPointService} from "../../../../store/models/accounting-point-service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-accounting-point-add-form',
  templateUrl: './accounting-point-add-form.component.html',
  styleUrls: ['./accounting-point-add-form.component.css']
})
export class AccountingPointAddFormComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  @Input() value: AccountingPointService | undefined
  @Output() onFormGroupValueChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  private subscription: Subscription;

  constructor(
    private _formBuilder: FormBuilder) {

    this.formGroup = this._formBuilder.group({
      id: this._formBuilder.control('', [Validators.required]),
      serviceId: this._formBuilder.control('', [Validators.required]),
      providerId: this._formBuilder.control('', [Validators.required]),
      directionOfUseId: this._formBuilder.control('', [Validators.required]),
      meter: this._formBuilder.group({})
    });

    this.subscription = this.formGroup.valueChanges.subscribe(() =>
      this.onFormGroupValueChange.emit(this.formGroup)
    )
  }

  ngOnInit(): void {
    if (this.value) {
      this.formGroup.setValue(this.value)
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getDescriptionControl(): FormControl {
    return this.formGroup.controls['id'] as FormControl
  }
}
