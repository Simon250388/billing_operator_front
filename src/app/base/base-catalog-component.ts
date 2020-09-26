import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseCatalog } from './base-catalog';
import { IStoreService } from './store.service';


export abstract class BaseCatalogComponent<Catalog extends BaseCatalog> {

    items: Observable<Catalog[]>;
    abstract formGroup: FormGroup;

    constructor(protected storeService: IStoreService<Catalog>) {
        this.storeService.load();
        this.items = this.storeService.items;
    }

    public onTouched: () => void = () => { };

    getPresent(id: number | string): string {
        if (!id || id == '') {
            return '';
        }
        return this.storeService.getPresent(id as number);
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