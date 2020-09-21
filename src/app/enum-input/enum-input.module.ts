import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareTypeInputComponent } from './square-type/square-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    SquareTypeInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    SquareTypeInputComponent
  ]
})
export class EnumInputModule { }
