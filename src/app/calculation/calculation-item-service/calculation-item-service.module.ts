import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationItemServiceComponent } from './calculation-item-service/calculation-item-service.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [CalculationItemServiceComponent],
  exports: [
    CalculationItemServiceComponent
  ]
})
export class CalculationItemServiceModule { }
