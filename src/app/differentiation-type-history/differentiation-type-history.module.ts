import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DifferentiationTypeHistoryRoutingModule } from './differentiation-type-history-routing.module';
import { DifferentiationTypeHistoryComponent } from './differentiation-type-history.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DifferentiationTypeHistoryComponent
  ],
  imports: [
    CommonModule,
    DifferentiationTypeHistoryRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class DifferentiationTypeHistoryModule { }
