import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KeyRoomItemComponent} from "./component/key-room-item/key-room-item.component";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    KeyRoomItemComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
  ],
  exports : [
    KeyRoomItemComponent
  ]
})
export class KeyRoomItemModule { }
