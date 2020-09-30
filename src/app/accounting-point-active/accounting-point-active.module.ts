import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { AccountingPointActiveListComponent } from './accounting-point-active-list/accounting-point-active-list.component';
import { AccountingPointActiveRoutingModule } from './accounting-point-active-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ChangeValueModule } from '../change-value/change-value.module';


@NgModule({
  declarations: [
    AccountingPointActiveListComponent
  ],
  imports: [
    CommonModule,
    AccountingPointActiveRoutingModule,
    ChangeValueModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule
  ],
  exports: [
    AccountingPointActiveListComponent
  ]
})
export class AccountingPointActiveModule { }
