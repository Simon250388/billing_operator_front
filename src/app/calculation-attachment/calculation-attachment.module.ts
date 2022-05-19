import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationAttachmentComponent } from './calculation-attachment/calculation-attachment.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [CalculationAttachmentComponent],
  exports: [
    CalculationAttachmentComponent
  ]
})
export class CalculationAttachmentModule { }
