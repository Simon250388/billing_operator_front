import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ImprovementType } from 'src/store/models/improvement-type';

@Component({
  selector: 'app-meter-list-add-add',
  templateUrl: './meter-add.component.html',
  styleUrls: ['./meter-add.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ]
})
export class MeterAddComponent implements OnInit {
  formGroup!: FormGroup;

  improvementTypes: ImprovementType[] = [];

  constructor(private _formBuilder: FormBuilder) {
    this.formGroup = this._formBuilder.group({
      factoryNumber: [Validators.required],
      modelId: [Validators.required],
      coefficient: [1, Validators.required],
      verificationDate: [Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
