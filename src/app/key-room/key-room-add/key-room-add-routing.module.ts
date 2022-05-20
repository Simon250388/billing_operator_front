import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {KeyRoomAddComponent} from "./component/key-room-add/key-room-add.component";


const routes: Routes = [
  {path: '', component: KeyRoomAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyRoomAddRoutingModule {
}
