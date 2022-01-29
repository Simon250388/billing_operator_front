import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'provider-history', loadChildren: () => import('./provider-history/provider-history.module').then(m => m.ProviderHistoryModule) },
  { path: 'meter-history', loadChildren: () => import('./meter-history/meter-history.module').then(m => m.MeterHistoryModule) },
  { path: 'meter-values', loadChildren: () => import('./meter-value-history/meter-value-history.module').then(m => m.MeterValueHistoryModule) },
  { path: 'square-values', loadChildren: () => import('./square-value-history/square-value-history.module').then(m => m.SquareValueHistoryModule) },
  { path: 'differentiation-type-history', loadChildren: () => import('./differentiation-type-history/differentiation-type-history.module').then(m => m.DifferentiationTypeHistoryModule) },
  { path: 'people-history', loadChildren: () => import('./people-history/people-history.module').then(m => m.PeopleHistoryModule) },
  { path: 'key-room', loadChildren: () => import('./key-room/key-room.module').then(m => m.KeyRoomModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
