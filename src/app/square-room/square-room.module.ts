import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SquareRoomAddComponent } from './square-room-add/square-room-add.component';
import { SquareRoomRowComponent } from './square-room-row/square-room-row.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { EnumInputModule } from '../enum-input/enum-input.module';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    SquareRoomAddComponent,
    SquareRoomRowComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    EnumInputModule,
    MatDialogModule
  ],
  exports: [
    SquareRoomAddComponent
  ]
})
export class SquareRoomModule { }
