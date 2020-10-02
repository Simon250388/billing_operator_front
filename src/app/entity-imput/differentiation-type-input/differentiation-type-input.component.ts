import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseCatalogComponent } from 'src/app/base/base-catalog-component';
import { DifferentiationType } from 'src/app/model/differentiation-type';
import { DifferentiationTypeStoreService } from 'src/app/service/differentiation-type/differentiation-type-store.service';

@Component({
  selector: 'app-differentiation-type-input',
  templateUrl: './differentiation-type-input.component.html',
  styleUrls: ['./differentiation-type-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DifferentiationTypeInputComponent),
      multi: true
    }
  ]
})
export class DifferentiationTypeInputComponent extends BaseCatalogComponent<DifferentiationType> implements ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() lbl: string;
  @Input() placeholder: string; 
  
  constructor(protected storeService: DifferentiationTypeStoreService) {
    super(storeService);
  }  

}
