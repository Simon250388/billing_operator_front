import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from 'src/app/base/base-input-component';
import { RateGroup } from 'src/app/model/rate-group';
import { RateGroupStoreService } from 'src/app/service/rate-group/rate-group-store.service';

@Component({
  selector: 'app-rate-group-input',
  templateUrl: './rate-group-input.component.html',
  styleUrls: ['./rate-group-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RateGroupInputComponent),
      multi: true
    }
  ]
})
export class RateGroupInputComponent extends BaseInputComponent<RateGroup> implements ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() lbl: string;
  @Input() placeholder: string;

  @Input() buildingId: number = 1;
  
  constructor(protected storeService: RateGroupStoreService) {
    super(storeService);
  }  
}
