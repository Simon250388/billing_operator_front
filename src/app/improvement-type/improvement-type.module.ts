import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprovementTypeAddComponent } from './improvement-type-add/improvement-type-add.component';
import { ImprovementTypeRowComponent } from './improvement-type-row/improvement-type-row.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ImprovementTypeAddComponent,
    ImprovementTypeRowComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    ImprovementTypeAddComponent
  ]
})
export class ImprovementTypeModule { }
