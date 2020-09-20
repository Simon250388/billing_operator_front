import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ServiceConnectorRoutingModule } from './service-connector-routing.module';
import { ServiceConnectorAddComponent } from './service-connector-add/service-connector-add.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceConnectorRowComponent } from './service-connector-row/service-connector-row.component';
import { MeterModule } from '../meter/meter.module';
import { EntityImputModule } from '../entity-imput/entity-imput.module';


@NgModule({
  declarations: [
    ServiceConnectorAddComponent,
    ServiceConnectorRowComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServiceConnectorRoutingModule,
    MeterModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    EntityImputModule
  ],
  exports: [
    ServiceConnectorAddComponent
  ]
})
export class ServiceConnectorModule { }
