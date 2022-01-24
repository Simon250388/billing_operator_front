import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceInputComponent} from './service-input/service-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ImprovementTypeInputComponent } from './improvement-type-input/improvement-type-input.component';
import { BuildingInputComponent } from './building-input/building-input.component';
import { ProviderInputComponent } from './provider-input/provider-input.component';
import { DirectionOfUseInputComponent } from './direction-of-use-input/direction-of-use-input.component';
import { RateGroupInputComponent } from './rate-group-input/rate-group-input.component';

@NgModule({
  declarations: [
    ServiceInputComponent,
    ImprovementTypeInputComponent,
    BuildingInputComponent,
    ProviderInputComponent,
    DirectionOfUseInputComponent,
    RateGroupInputComponent
  ],
  exports: [
    ServiceInputComponent,
    ProviderInputComponent,
    BuildingInputComponent,
    RateGroupInputComponent,
    DirectionOfUseInputComponent,
    ImprovementTypeInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class EntityInputModule { }
