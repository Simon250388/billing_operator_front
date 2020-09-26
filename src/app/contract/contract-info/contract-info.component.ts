import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CutomerNavigationService } from 'src/app/service/customer/cutomer-navigation.service';

@Component({
  selector: 'app-contract-info',
  templateUrl: './contract-info.component.html',
  styleUrls: ['./contract-info.component.css']
})
export class ContractInfoComponent {

  customer: Customer;

  constructor(private cutomerNavigationService: CutomerNavigationService) {
    this.cutomerNavigationService.currentCustomer.subscribe(customer => {
      if (customer) {
        this.customer = customer;
      }
    })
   }


  setCurrentCustomer(): void {
    this.cutomerNavigationService.setCurrentCustomer(null);
  }
}
