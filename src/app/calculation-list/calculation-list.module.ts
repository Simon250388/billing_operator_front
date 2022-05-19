import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcultaionListComponent } from './component/calcultaion-list/calcultaion-list.component';
import { CalculationRoutingModule } from './calculcation-routing.module';
import { CalculationItemModule } from '../calculation-item/calculation-item.module';

@NgModule({
  declarations: [
    CalcultaionListComponent
  ],
  imports: [
    CalculationItemModule,
    CommonModule,
    CalculationRoutingModule  
  ]  
})
export class CalculationListModule { }
