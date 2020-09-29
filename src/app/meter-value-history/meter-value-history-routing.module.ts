import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeterValueHistoryComponent } from './meter-value-history.component';

const routes: Routes = [
  { path: ':id', component: MeterValueHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterValueHistoryRoutingModule { }
