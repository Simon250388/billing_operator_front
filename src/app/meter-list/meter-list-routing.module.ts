import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeterListComponent } from './component/meter-list/meter-list.component';

const routes: Routes = [
  { path: '', component: MeterListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterListRoutingModule { }
