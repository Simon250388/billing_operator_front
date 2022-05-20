import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountingPointAddComponent} from "./component/accounting-point-add/accounting-point-add.component";


const routes: Routes = [
  {path: '', component: AccountingPointAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingPointAddRoutingModule {
}
