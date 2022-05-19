import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationAttachmentAddComponent } from './calculation-attachment-add/calculation-attachment-add.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [CalculationAttachmentAddComponent],
  exports: [
    CalculationAttachmentAddComponent
  ]
})
export class CalculationAttachmentAddModule { }
