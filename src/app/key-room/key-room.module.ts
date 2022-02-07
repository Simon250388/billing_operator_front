import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyRoomComponent} from './component/key-room/key-room.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {KeyRoomRoutingModule} from './key-room-routing.module';
import {KeyRoomItemModule} from "../key-room-item/key-room-item.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    KeyRoomComponent
  ],
  imports: [
    CommonModule,
    KeyRoomItemModule,
    KeyRoomRoutingModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class KeyRoomModule {
}
