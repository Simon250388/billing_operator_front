import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindAbonentComponent } from './find-abonent.component';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    FindAbonentComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    FindAbonentComponent
  ]
})
export class FindAbonentModule { }
