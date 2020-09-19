import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingInputComponent } from './building-input/building-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RoomInputComponent } from './room-input/room-input.component';



@NgModule({
  declarations: [
    BuildingInputComponent,
    RoomInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    BuildingInputComponent,
    RoomInputComponent
  ]
})
export class EntityImputModule { }
