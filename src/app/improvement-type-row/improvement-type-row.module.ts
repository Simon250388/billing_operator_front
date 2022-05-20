import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImprovementTypeRowListComponent } from './improvement-type-row-list/improvement-type-row-list.component';
import { ImprovementTypeRowAddComponent } from './improvement-type-row-add/improvement-type-row-add.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityInputModule } from '../input/entity-input/entity-input.module';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    ImprovementTypeRowListComponent,
    ImprovementTypeRowAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    EntityInputModule,
    MatDialogModule
  ],
  exports: [
    ImprovementTypeRowListComponent
  ]
})
export class ImprovementTypeRowModule { }
