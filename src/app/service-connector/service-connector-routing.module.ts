import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceConnectorComponent } from './service-connector.component';

const routes: Routes = [{ path: '', component: ServiceConnectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceConnectorRoutingModule { }
