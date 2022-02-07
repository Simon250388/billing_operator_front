import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {SimpleRef} from "../../../store/models/simple-ref.model";

@Component({
  selector: 'app-provider-change',
  templateUrl: './provider-change.component.html',
  styleUrls: ['./provider-change.component.css']
})
export class ProviderChangeComponent {

  formGroup: FormGroup = this.formBuilder.group({
    providerId: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
     @Inject(MAT_DIALOG_DATA) private currentValue: SimpleRef | undefined
  ) {
  }

  get valuePresent(): String {
    return this.currentValue?.present || "";
  }

  get newValue(): String {
    return this.formGroup.get("providerId")?.value;
  }
}
