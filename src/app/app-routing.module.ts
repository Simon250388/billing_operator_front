import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'contract', loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule) },
  { path: 'contract-info', loadChildren: () => import('./contract-info/contract-info.module').then(m => m.ContractInfoModule) },
  { path: 'accounting-point-service', loadChildren: () => import('./accounting-point-service/accounting-point-service.module').then(m => m.AccountingPointServiceModule) },
  { path: 'meters', loadChildren: () => import('./meter-connector/meter-connector.module').then(m => m.MeterConnectorModule) },
  { path: 'meters', loadChildren: () => import('./meter/meter.module').then(m => m.MeterModule) },
  { path: 'active-accounting-point', loadChildren: () => import('src/app/accounting-point-active/accounting-point-active.module').then(m => m.AccountingPointActiveModule) },
  { path: 'search-customer', loadChildren: () => import('./search-customer/search-customer.module').then(m => m.SearchCustomerModule) },
  { path: 'provider-history', loadChildren: () => import('./provider-history/provider-history.module').then(m => m.ProviderHistoryModule) },
  { path: 'meter-history', loadChildren: () => import('./meter-history/meter-history.module').then(m => m.MeterHistoryModule) },
  { path: 'meter-values', loadChildren: () => import('./meter-value-history/meter-value-history.module').then(m => m.MeterValueHistoryModule) },
  { path: 'square-values', loadChildren: () => import('./square-value-history/square-value-history.module').then(m => m.SquareValueHistoryModule) },
  { path: 'differentiation-type-history', loadChildren: () => import('./differentiation-type-history/differentiation-type-history.module').then(m => m.DifferentiationTypeHistoryModule) },
  { path: 'people-history', loadChildren: () => import('./people-history/people-history.module').then(m => m.PeopleHistoryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
