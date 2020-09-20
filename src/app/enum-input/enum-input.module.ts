import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareTypeComponent } from './square-type/square-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SquareTypeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    SquareTypeComponent
  ]
})
export class EnumInputModule { }
