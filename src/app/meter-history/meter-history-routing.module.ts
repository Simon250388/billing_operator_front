import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeterHistoryComponent } from './meter-history.component';

const routes: Routes = [
  { path: ':id', component: MeterHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterHistoryRoutingModule { }
