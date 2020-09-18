import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProviderStoreService } from 'src/app/service/provider/provider-store.service';

@Component({
  selector: 'app-provider-change',
  templateUrl: './provider-change.component.html',
  styleUrls: ['./provider-change.component.css']
})
export class ProviderChangeComponent {

  formGroup: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public currentValueId: number,
    private store: ProviderStoreService
  ) {
    this.formGroup = this.formbuilder.group({
      providerId: ['', Validators.required]
    })
  }

  get currentValuePresent(): Observable<string> {
    return this.store.getPresent(this.currentValueId);
  }

  get controlValue(): number {
    return this.formGroup.controls['providerId'].value;
  }



}
