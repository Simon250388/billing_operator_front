import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DifferentiationTypeStoreService } from 'src/app/service/differentiation-type/differentiation-type-store.service';

@Component({
  selector: 'app-differentiation-type-change',
  templateUrl: './differentiation-type-change.component.html',
  styleUrls: ['./differentiation-type-change.component.css']
})
export class DifferentiationTypeChangeComponent  {

  formGroup: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public currentValueId: number,
    private store: DifferentiationTypeStoreService
  ) {
    this.formGroup = this.formbuilder.group({
      differentiationTypeId: ['', Validators.required]
    })
  }

  get currentValuePresent(): Observable<string> {
    return this.store.getPresent(this.currentValueId);
  }

  get controlValue(): number {
    return this.formGroup.controls['differentiationTypeId'].value;
  }

}
