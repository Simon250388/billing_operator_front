import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityInputComponent } from './building-input/building-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  declarations: [
    EntityInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    EntityInputComponent
  ]
})
export class EntityImputModule { }
