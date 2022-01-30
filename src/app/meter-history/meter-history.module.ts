import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterHistoryRoutingModule } from './meter-history-routing.module';
import { MeterHistoryComponent } from './meter-history.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    MeterHistoryComponent],
  imports: [
    CommonModule,
    MeterHistoryRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class MeterHistoryModule { }
