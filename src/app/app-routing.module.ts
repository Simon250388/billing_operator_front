import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'contract', loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule) },
  { path: 'service', loadChildren: () => import('./service-connector/service-connector.module').then(m => m.ServiceConnectorModule) },
  { path: 'meters', loadChildren: () => import('./meter-connector/meter-connector.module').then(m => m.MeterConnectorModule) },
  { path: 'room-operation', loadChildren: () => import('./room-operation/room-operation.module').then(m => m.RoomOperationModule) },
  { path: 'contract-operation', loadChildren: () => import('./contract-operation/contract-operation.module').then(m => m.ContractOperationModule) },
  { path: 'meters', loadChildren: () => import('./meter/meter.module').then(m => m.MeterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
