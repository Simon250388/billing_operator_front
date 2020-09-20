import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprovementTypeAddComponent } from './improvement-type-add/improvement-type-add.component';
import { ImprovementTypeRowComponent } from './improvement-type-row/improvement-type-row.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityImputModule } from '../entity-imput/entity-imput.module';

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
    EntityImputModule
  ],
  exports: [
    ImprovementTypeAddComponent
  ]
})
export class ImprovementTypeModule { }
