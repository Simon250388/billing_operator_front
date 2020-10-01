import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { of, Observable } from 'rxjs';
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

    getPresent(items: Catalog[]): (id: number) => string {
        return (id: number) => {
            const item = items.find(row => row.id == id);
            if (item) {
                return item.present
            }
            return '';
        }
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