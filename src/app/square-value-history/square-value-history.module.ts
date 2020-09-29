import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SquareValueHistoryRoutingModule } from './square-value-history-routing.module';
import { SquareValueHistoryComponent } from './square-value-history.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SquareValueHistoryComponent],
  imports: [
    CommonModule,
    SquareValueHistoryRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class SquareValueHistoryModule { }
