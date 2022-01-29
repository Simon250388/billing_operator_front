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
        redirectTo: 'accounting-points'
      },
      {
        path: 'accounting-points',
        loadChildren: () => import('../accounting-point-active/accounting-point-active.module').then(m => m.AccountingPointActiveModule),
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyRoomCurrentRoutingModule {
}
