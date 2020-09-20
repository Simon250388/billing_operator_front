import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseInputComponent } from 'src/app/base/base-input-component';
import { Service } from 'src/app/model/service';
import { ServiceStoreService } from 'src/app/service/service/service-store.service';

@Component({
  selector: 'app-service-input',
  templateUrl: './service-input.component.html',
  styleUrls: ['./service-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ServiceInputComponent),
      multi: true
    }
  ]
})
export class ServiceInputComponent extends BaseInputComponent<Service> implements ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() lbl: string;
  @Input() placeholder: string;

  @Input() buildingId: number = 1;

  filtrItems: Observable<Service[]>;

  constructor(protected storeService: ServiceStoreService) {
    super(storeService);
  }  
}
