import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceInputComponent} from './service-input/service-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ImprovementTypeInputComponent} from './improvement-type-input/improvement-type-input.component';
import {BuildingInputComponent} from './building-input/building-input.component';
import {ProviderInputComponent} from './provider-input/provider-input.component';
import {DirectionOfUseInputComponent} from './direction-of-use-input/direction-of-use-input.component';
import {RateGroupInputComponent} from './rate-group-input/rate-group-input.component';
import {DateInputComponent} from './date-input/date-input.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [
    ServiceInputComponent,
    ImprovementTypeInputComponent,
    BuildingInputComponent,
    ProviderInputComponent,
    DirectionOfUseInputComponent,
    RateGroupInputComponent,
    DateInputComponent
  ],
  exports: [
    ServiceInputComponent,
    ProviderInputComponent,
    BuildingInputComponent,
    RateGroupInputComponent,
    DirectionOfUseInputComponent,
    ImprovementTypeInputComponent,
    DateInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [

  ]
})
export class EntityInputModule {
}
