import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuardService} from "../service/auth-guard.service";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'key-room',
    pathMatch: 'full'
  },
  {
    path: 'key-room',
    loadChildren: () => import('./key-room/key-room.module').then(m => m.KeyRoomModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'provider-history',
    loadChildren: () => import('./provider-history/provider-history.module').then(m => m.ProviderHistoryModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'square-values',
    loadChildren: () => import('./square-value-history/square-value-history.module').then(m => m.SquareValueHistoryModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'differentiation-type-history',
    loadChildren: () => import('./differentiation-type-history/differentiation-type-history.module').then(m => m.DifferentiationTypeHistoryModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'people-history',
    loadChildren: () => import('./people-history/people-history.module').then(m => m.PeopleHistoryModule),
    canActivate: [AuthGuardService]
  },
  {path: '**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
