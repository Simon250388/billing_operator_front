import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareRoomAddComponent } from './square-room-add/square-room-add.component';



@NgModule({
  declarations: [
    SquareRoomAddComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SquareRoomAddComponent
  ]
})
export class SquareRoomModule { }
