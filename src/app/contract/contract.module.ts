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
import { ImprovementTypeRowModule } from '../improvement-type-row/improvement-type-row.module';
import { ServiceConnectorModule } from '../service-connector/service-connector.module';
import { EntityImputModule } from '../entity-imput/entity-imput.module';

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
    ImprovementTypeRowModule,
    ServiceConnectorModule,
    EntityImputModule
  ]
})
export class ContractModule { }
