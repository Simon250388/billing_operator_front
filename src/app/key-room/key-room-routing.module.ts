import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyRoomComponent } from './component/key-room/key-room.component';


const routes: Routes = [
    { path: '', component: KeyRoomComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KeyRoomRoutingModule { }