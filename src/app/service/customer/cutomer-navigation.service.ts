import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerStoreService } from './customer-store.service';

@Injectable({
  providedIn: 'root'
})
export class CutomerNavigationService {

  private currentCustomerSubject: BehaviorSubject<Customer> = new BehaviorSubject(null);

  get currentCustomer(): Observable<Customer> {
    return this.currentCustomerSubject.asObservable();
  }

  setCurrentCustomer(current?: Customer): void {
    this.currentCustomerSubject.next(current);
    if (current) {
      this.router.navigate(['active-accounting-point']);
    }
  }

  constructor(
    private router: Router,
    private store: CustomerStoreService) { }
}
