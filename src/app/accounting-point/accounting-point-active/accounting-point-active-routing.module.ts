import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountingPointActiveListComponent } from './accounting-point-active-list/accounting-point-active-list.component';


const routes: Routes = [
  { path: '', component: AccountingPointActiveListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountingPointActiveRoutingModule { }
