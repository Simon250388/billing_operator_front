import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeyRoomAddComponent} from './component/key-room-add/key-room-add.component';
import {KeyRoomComponent} from './component/key-room/key-room.component';
import {CurrentKeyRoomComponent} from "./component/current-key-room/current-key-room.component";


const routes: Routes = [
  {path: '', component: KeyRoomComponent},
  {path: ':id/accounting-points', component: CurrentKeyRoomComponent},
  {path: 'new', component: KeyRoomAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyRoomRoutingModule {
}
