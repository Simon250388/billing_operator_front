import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { CalcultaionListComponent } from './component/calcultaion-list/calcultaion-list.component';
import { CalculationRoutingModule } from './calculcation-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CalcultaionListComponent
  ],
  imports: [
    CommonModule,
    CalculationRoutingModule,
    MatExpansionModule
  ]  
})
export class CalculationListModule { }
