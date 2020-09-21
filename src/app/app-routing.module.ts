import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'contract', loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule) },
  { path: 'accounting-point-service', loadChildren: () => import('./accounting-point-service/accounting-point-service.module').then(m => m.AccountingPointServiceModule) },
  { path: 'meters', loadChildren: () => import('./meter-connector/meter-connector.module').then(m => m.MeterConnectorModule) },
  { path: 'meters', loadChildren: () => import('./meter/meter.module').then(m => m.MeterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
