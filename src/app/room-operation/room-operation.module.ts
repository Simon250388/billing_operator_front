import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomOperationRoutingModule } from './room-operation-routing.module';
import { RoomOperationComponent } from './room-operation.component';


@NgModule({
  declarations: [RoomOperationComponent],
  imports: [
    CommonModule,
    RoomOperationRoutingModule
  ]
})
export class RoomOperationModule { }
