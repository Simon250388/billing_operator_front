import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractDetailsComponent } from './contract-details/contract-details.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';

import { SquareRoomModule } from '../square-room/square-room.module';
import { ImprovementTypeRowModule } from '../improvement-type-row/improvement-type-row.module';
import { AccountingPointServiceModule } from '../accounting-point-service/accounting-point-service.module';
import { EntityImputModule } from '../entity-imput/entity-imput.module';
import { ContractInfoComponent } from './contract-info/contract-info.component';

@NgModule({
  declarations: [
    ContractDetailsComponent,
    ContractInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContractRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatListModule,
    SquareRoomModule,
    ImprovementTypeRowModule,
    AccountingPointServiceModule,
    EntityImputModule
  ],
  exports: [
    ContractInfoComponent
  ]
})
export class ContractModule { }
