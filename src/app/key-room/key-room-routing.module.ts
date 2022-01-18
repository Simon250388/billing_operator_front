import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyRoomAddComponent } from './component/key-room-add/key-room-add.component';
import { KeyRoomComponent } from './component/key-room/key-room.component';


const routes: Routes = [
    { path: '', component: KeyRoomComponent },
    { path: 'new', component: KeyRoomAddComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KeyRoomRoutingModule { }