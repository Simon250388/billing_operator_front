import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderHistoryComponent } from './provider-history.component';


const routes: Routes = [{ path: ':id', component: ProviderHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderHistoryRoutingModule { }
