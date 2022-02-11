import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyRoomComponent} from './component/key-room/key-room.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {KeyRoomRoutingModule} from './key-room-routing.module';
import {KeyRoomItemModule} from "../key-room-item/key-room-item.module";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {KeyRoomReducer} from "../../store/reducers/key-room.reducer";
import {KeyRoomEffect} from "../../store/effects/key-room.effect";


@NgModule({
  declarations: [
    KeyRoomComponent
  ],
  imports: [
    CommonModule,
    KeyRoomItemModule,
    KeyRoomRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    StoreModule.forFeature('key-room-list', KeyRoomReducer),
    EffectsModule.forFeature([KeyRoomEffect])
  ]
})
export class KeyRoomModule {
}
