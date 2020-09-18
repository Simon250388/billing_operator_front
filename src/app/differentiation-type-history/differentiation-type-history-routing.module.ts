import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DifferentiationTypeHistoryComponent } from './differentiation-type-history.component';

const routes: Routes = [
  { path: ':meterId', component: DifferentiationTypeHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DifferentiationTypeHistoryRoutingModule { }
