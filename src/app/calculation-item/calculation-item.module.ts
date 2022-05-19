import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationItemComponent } from './calculation-item/calculation-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CalculationItemServiceModule } from '../calculation-item-service/calculation-item-service.module';
import { CalculationAttachmentsListModule } from '../calculation-attachments-list/calculation-attachments-list.module';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    CalculationAttachmentsListModule,
    CalculationItemServiceModule
  ],
  declarations: [
    CalculationItemComponent
  ],
  exports: [
    CalculationItemComponent
  ]
})
export class CalculationItemModule { }
