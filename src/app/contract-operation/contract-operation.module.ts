import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractOperationRoutingModule } from './contract-operation-routing.module';
import { ContractOperationComponent } from './contract-operation.component';


@NgModule({
  declarations: [ContractOperationComponent],
  imports: [
    CommonModule,
    ContractOperationRoutingModule
  ]
})
export class ContractOperationModule { }
