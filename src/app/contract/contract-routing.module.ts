import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContractDetailsComponent } from './contract-details/contract-details.component';

import { ContractComponent } from './contract.component';

const routes: Routes = [
  { path: '', component: ContractComponent },
  { path: ':id', component: ContractDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContractRoutingModule { }
