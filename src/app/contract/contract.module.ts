import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { SquareRoomModule } from '../square-room/square-room.module';
import { ImprovementTypeModule } from '../improvement-type/improvement-type.module';
import { ServiceConnectorModule } from '../service-connector/service-connector.module';

@NgModule({
  declarations: [
    ContractDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContractRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    SquareRoomModule,
    ImprovementTypeModule,
    ServiceConnectorModule
  ]
})
export class ContractModule { }
