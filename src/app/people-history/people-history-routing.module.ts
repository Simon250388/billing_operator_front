import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleHistoryComponent } from './people-history.component';

const routes: Routes = [
  { path: ':keyRoomId', component: PeopleHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleHistoryRoutingModule { }
