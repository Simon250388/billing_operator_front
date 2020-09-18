import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractOperationComponent } from './contract-operation.component';

const routes: Routes = [{ path: '', component: ContractOperationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractOperationRoutingModule { }
