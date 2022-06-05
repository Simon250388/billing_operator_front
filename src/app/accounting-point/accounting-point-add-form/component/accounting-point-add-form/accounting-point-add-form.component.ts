import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { AccountingPointService } from "../../../../../store/models/accounting-point-service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-accounting-point-add-form',
  templateUrl: './accounting-point-add-form.component.html',
  styleUrls: ['./accounting-point-add-form.component.css']
})
export class AccountingPointAddFormComponent implements OnInit, OnDestroy {

  formGroup = new FormGroup({
    id: new FormControl<string| undefined>('', [Validators.required]),
    serviceId: new FormControl<string>('', [Validators.required]),
    providerId: new FormControl<string>('', [Validators.required]),
    directionOfUseId: new FormControl<string>('', [Validators.required])
  });

  @Input() value: AccountingPointService | undefined
  @Output() onFormGroupValueChange: EventEmitter<FormGroup> = new EventEmitter<UntypedFormGroup>();

  private subscription: Subscription;

  constructor() {
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

  getDescriptionControl(): FormControl<string> {
    return this.formGroup.controls['id'] as FormControl<string>
  }
}
