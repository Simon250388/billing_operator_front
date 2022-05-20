import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationAttachmentsListComponent } from './calculation-attachments-list/calculation-attachments-list.component';
import { CalculationAttachmentModule } from '../calculation-attachment/calculation-attachment.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    CalculationAttachmentModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  declarations: [CalculationAttachmentsListComponent],
  exports: [CalculationAttachmentsListComponent]
})
export class CalculationAttachmentsListModule { }
