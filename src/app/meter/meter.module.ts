import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterRoutingModule } from './meter-routing.module';
import { MeterAddComponent } from './meter-add/meter-add.component';


@NgModule({
  declarations: [
    MeterAddComponent
  ],
  imports: [
    CommonModule,
    MeterRoutingModule
  ],
  exports: [
    MeterAddComponent
  ]
})
export class MeterModule { }
