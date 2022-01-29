import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeyRoomComponent} from './component/key-room/key-room.component';


const routes: Routes = [
  {path: '', component: KeyRoomComponent},
  {path: 'new', loadChildren: () => import('../key-room-add/key-room-add.module').then(m => m.KeyRoomAddModule)},
  {
    path: ':id',
    loadChildren: () => import('../key-room-current/key-room-current.module').then(m => m.KeyRoomCurrentModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyRoomRoutingModule {
}
