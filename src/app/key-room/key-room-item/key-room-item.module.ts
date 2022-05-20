import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyRoomItemComponent} from "./component/key-room-item/key-room-item.component";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    KeyRoomItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports : [
    KeyRoomItemComponent
  ]
})
export class KeyRoomItemModule { }
