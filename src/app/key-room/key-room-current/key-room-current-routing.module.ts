import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CurrentKeyRoomComponent} from "./component/current-key-room/current-key-room.component";

const routes: Routes = [
  {
    path: '',
    component: CurrentKeyRoomComponent,
    children: [
      {
        path: '',
        redirectTo: 'accounting-points',
        pathMatch: 'full'
      },
      {
        path: 'accounting-points',
        loadChildren: () => import('../../accounting-point/accounting-point-active/accounting-point-active.module').then(m => m.AccountingPointActiveModule),
      },
      {
        path: 'accounting-points/new',
        loadChildren: () => import('../../accounting-point/accounting-point-add/accounting-point-add.module').then(m => m.AccountingPointAddModule),
      },
      {
        path: 'meters',
        loadChildren: () => import('../../meter/meter-list/meter-list.module').then(m => m.MeterListModule),
      },
      {
        path: 'calculation',
        loadChildren: () => import('../../calculation/calculation-list/calculation-list.module').then(m => m.CalculationListModule),
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyRoomCurrentRoutingModule {
}
