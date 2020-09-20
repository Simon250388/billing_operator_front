import { Component, forwardRef, Input} from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseInputComponent } from 'src/app/base/base-input-component';
import { Provider } from 'src/app/model/provider';
import { ProviderStoreService } from 'src/app/service/provider/provider-store.service';

@Component({
  selector: 'app-provider-input',
  templateUrl: './provider-input.component.html',
  styleUrls: ['./provider-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProviderInputComponent),
      multi: true
    }
  ]
})
export class ProviderInputComponent extends BaseInputComponent<Provider> implements ControlValueAccessor {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() lbl: string;
  @Input() placeholder: string;

  @Input() buildingId: number = 1;
  
  constructor(protected storeService: ProviderStoreService) {
    super(storeService);
  }  
}
