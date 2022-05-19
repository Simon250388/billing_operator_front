import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationItemServiceComponent } from './calculation-item-service/calculation-item-service.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculationItemServiceComponent],
  exports: [
    CalculationItemServiceComponent
  ]
})
export class CalculationItemServiceModule { }
