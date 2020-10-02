import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleHistoryRoutingModule } from './people-history-routing.module';
import { PeopleHistoryComponent } from './people-history.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    PeopleHistoryComponent
  ],
  imports: [
    CommonModule,
    PeopleHistoryRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class PeopleHistoryModule { }
