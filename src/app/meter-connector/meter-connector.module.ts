import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterConnectorRoutingModule } from './meter-connector-routing.module';
import { MeterConnectorComponent } from './meter-connector.component';


@NgModule({
  declarations: [MeterConnectorComponent],
  imports: [
    CommonModule,
    MeterConnectorRoutingModule
  ]
})
export class MeterConnectorModule { }
