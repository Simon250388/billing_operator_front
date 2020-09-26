import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCustomerRoutingModule } from './search-customer-routing.module';
import { SearchCustomerComponent } from './search-customer.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [SearchCustomerComponent],
  imports: [
    CommonModule,
    SearchCustomerRoutingModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatListModule
  ]
})
export class SearchCustomerModule { }
