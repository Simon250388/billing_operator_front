import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseEntity } from './base-entity';
import { IStoreService } from './store.service';


export abstract class BaseInputComponent<Entity extends BaseEntity> {

    items: Observable<Entity[]>;
    abstract formGroup: FormGroup;

    constructor(protected storeService: IStoreService<Entity>) {
        this.storeService.load();
        this.items = this.storeService.items;
    }

    public onTouched: () => void = () => { };

    getPresent(value: Entity): String {
        return value && value.present ? value.present : '';
    }

    writeValue(obj: any): void {
      
    }
    registerOnChange(fn: any): void {
        
    }
    registerOnTouched(fn: any): void {
      
    }
    setDisabledState?(isDisabled: boolean): void {
      
    }

    validate(control: AbstractControl): ValidationErrors {
        throw new Error('Method not implemented.');
    }
    registerOnValidatorChange?(fn: () => void): void {
        throw new Error('Method not implemented.');
    }
}