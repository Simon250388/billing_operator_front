import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MeterAddRoutingModule } from './meter-add-routing.module';
import { MeterAddComponent } from './meter-add/meter-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    MeterAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MeterAddRoutingModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  exports: [
    MeterAddComponent
  ]
})
export class MeterAddModule { }
