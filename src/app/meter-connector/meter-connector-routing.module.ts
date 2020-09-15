import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeterConnectorComponent } from './meter-connector.component';

const routes: Routes = [{ path: '', component: MeterConnectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterConnectorRoutingModule { }
