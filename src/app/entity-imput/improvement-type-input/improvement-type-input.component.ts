import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseCatalogComponent } from 'src/app/base/base-catalog-component';
import { ImprovementType } from 'src/app/model/improvement-type';
import { ImprovementTypeStoreService } from 'src/app/service/improvement-type/improvement-type-store.service';

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
export class ImprovementTypeInputComponent extends BaseCatalogComponent<ImprovementType> implements ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() lbl: string;
  @Input() placeholder: string;

  @Input() buildingId: number = 1;

  constructor(protected storeService: ImprovementTypeStoreService) {
    super(storeService);
  }  
}
