import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingInputComponent } from './building-input/building-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RoomInputComponent } from './room-input/room-input.component';
import { ServiceInputComponent } from './service-input/service-input.component';
import { ImprovementTypeInputComponent } from './improvement-type-input/improvement-type-input.component';
import { RateGroupInputComponent } from './rate-group-input/rate-group-input.component';



@NgModule({
  declarations: [
    BuildingInputComponent,
    RoomInputComponent,
    ServiceInputComponent,
    ImprovementTypeInputComponent,
    RateGroupInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  exports: [
    BuildingInputComponent,
    RoomInputComponent,
    ServiceInputComponent,
    ImprovementTypeInputComponent,
    RateGroupInputComponent
  ]
})
export class EntityImputModule { }
