import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { MeterModule } from '../meter/meter.module';
import { EntityInputModule } from '../entity-input/entity-input.module';
import { AccountingPointServiceListComponent } from './accounting-point-service-list/accounting-point-service-list.component';
import { AccountingPointServiceAddComponent } from './accounting-point-service-add/accounting-point-service-add.component';
import { AccountingPointServiceRoutingModule } from './accounting-point-service-routing.module';


@NgModule({
  declarations: [
    AccountingPointServiceListComponent,
    AccountingPointServiceAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountingPointServiceRoutingModule,
    MeterModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    EntityInputModule
  ],
  exports: [
    AccountingPointServiceListComponent
  ]
})
export class AccountingPointServiceModule { }
