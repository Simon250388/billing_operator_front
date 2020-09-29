import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SquareValueHistoryComponent } from './square-value-history.component';

const routes: Routes = [
  { path: ':keyRoom', component: SquareValueHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SquareValueHistoryRoutingModule { }
