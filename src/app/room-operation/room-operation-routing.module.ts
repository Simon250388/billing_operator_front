import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomOperationComponent } from './room-operation.component';

const routes: Routes = [{ path: '', component: RoomOperationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomOperationRoutingModule { }
