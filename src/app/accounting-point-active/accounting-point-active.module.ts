import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { AccountingPointActiveListComponent } from './accounting-point-active-list/accounting-point-active-list.component';
import { AccountingPointActiveRoutingModule } from './accounting-point-active-routing.module';


@NgModule({
  declarations: [
    AccountingPointActiveListComponent
  ],
  imports: [
    CommonModule,
    AccountingPointActiveRoutingModule,
    FlexLayoutModule,
    MatCardModule
  ],
  exports: [
    AccountingPointActiveListComponent
  ]
})
export class AccountingPointActiveModule { }
