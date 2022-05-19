import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationItemComponent } from './calculation-item/calculation-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { CalculationItemServiceModule } from '../calculation-item-service/calculation-item-service.module';
import { CalculationAttachmentsListModule } from '../attachment/calculation-attachments-list/calculation-attachments-list.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    CalculationAttachmentsListModule,
    CalculationItemServiceModule,
    FlexLayoutModule
  ],
  declarations: [
    CalculationItemComponent
  ],
  exports: [
    CalculationItemComponent
  ]
})
export class CalculationItemModule { }
