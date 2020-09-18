import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterValueHistoryRoutingModule } from './meter-value-history-routing.module';
import { MeterValueHistoryComponent } from './meter-value-history.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MeterValueHistoryComponent
  ],
  imports: [
    CommonModule,
    MeterValueHistoryRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class MeterValueHistoryModule { }
