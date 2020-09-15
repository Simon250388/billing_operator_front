import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceConnectorRoutingModule } from './service-connector-routing.module';
import { ServiceConnectorComponent } from './service-connector.component';
import { ServiceConnectorAddComponent } from './service-connector-add/service-connector-add.component';


@NgModule({
  declarations: [
    ServiceConnectorComponent,
    ServiceConnectorAddComponent
  ],
  imports: [
    CommonModule,
    ServiceConnectorRoutingModule
  ],
  exports: [
    ServiceConnectorAddComponent
  ]
})
export class ServiceConnectorModule { }
