import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, find, map } from 'rxjs/operators';
import { Customer } from '../model/customer';
import { CustomerStoreService } from '../service/customer/customer-store.service';
import { CutomerNavigationService } from '../service/customer/cutomer-navigation.service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent {
  items: Observable<Customer[]>;

  constructor(
    private storeService: CustomerStoreService,
    private navigationService: CutomerNavigationService) {
    this.items = this.storeService.items;
  }

  setCurrentCustomer(): void {
    this.storeService.load();
    
    this.items.pipe(
      map(items => items.filter(customer => customer.id == 1))
    ).subscribe(customers => this.navigationService.setCurrentCustomer(customers[0]));
  }
}
