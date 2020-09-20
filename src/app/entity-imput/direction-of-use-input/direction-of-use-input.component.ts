import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from 'src/app/base/base-input-component';
import { DirectionOfUse } from 'src/app/model/direction-of-use';
import { DirectionOfUseStoreService } from 'src/app/service/direction-of-use/direction-of-use-store.service';

@Component({
  selector: 'app-direction-of-use-input',
  templateUrl: './direction-of-use-input.component.html',
  styleUrls: ['./direction-of-use-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DirectionOfUseInputComponent),
      multi: true
    }
  ]
})
export class DirectionOfUseInputComponent extends BaseInputComponent<DirectionOfUse> implements ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() lbl: string;
  @Input() placeholder: string; 
  
  constructor(protected storeService: DirectionOfUseStoreService) {
    super(storeService);
  }  
}
