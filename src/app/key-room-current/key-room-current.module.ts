import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyRoomItemModule} from "../key-room-item/key-room-item.module";
import {CurrentKeyRoomComponent} from "./component/current-key-room/current-key-room.component";
import {SideNavComponent} from "../side-nav/side-nav/side-nav.component";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {KeyRoomCurrentRoutingModule} from "./key-room-current-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    CurrentKeyRoomComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    KeyRoomCurrentRoutingModule,

    KeyRoomItemModule,

    FlexLayoutModule,

    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class KeyRoomCurrentModule {
}
