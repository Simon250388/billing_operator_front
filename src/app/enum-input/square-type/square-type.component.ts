import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseEntity } from 'src/app/base/base-entity';
import { BaseInputComponent } from 'src/app/base/base-input-component';
import { SquareTypeStoreService } from 'src/app/service/square-type/square-type-store.service';

@Component({
  selector: 'app-square-type',
  templateUrl: './square-type.component.html',
  styleUrls: ['./square-type.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SquareTypeInputComponent),
      multi: true
    }
  ]
})
export class SquareTypeInputComponent extends BaseInputComponent<BaseEntity> implements ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() lbl: string;
  @Input() placeholder: string;

  constructor(protected storeService: SquareTypeStoreService) {
    super(storeService);
  }
}
