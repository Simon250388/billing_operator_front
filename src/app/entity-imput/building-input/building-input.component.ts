import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { BaseInputComponent } from 'src/app/base/base-input-component';
import { Building } from 'src/app/model/building';
import { BuildingStoreService } from 'src/app/service/building/building-store.service';

@Component({
  selector: 'app-building-input',
  templateUrl: './building-input.component.html',
  styleUrls: ['./building-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BuildingInputComponent),
      multi: true
    }    
  ]
})
export class BuildingInputComponent extends BaseInputComponent<Building> implements ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() lbl: string;
  @Input() placeholder: string;

  constructor(protected storeService: BuildingStoreService) {
    super(storeService);
  }
  
}
