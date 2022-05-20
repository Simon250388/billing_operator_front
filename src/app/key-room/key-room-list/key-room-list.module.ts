import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyRoomListComponent} from './component/key-room-list/key-room-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {KeyRoomListRoutingModule} from './key-room-list-routing.module';
import {KeyRoomItemModule} from "../key-room-item/key-room-item.module";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {KeyRoomReducer} from "../../../store/reducers/key-room.reducer";
import {KeyRoomEffect} from "../../../store/effects/key-room.effect";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {KeyRoomCountResidentChangeAction} from "../../../service/key-room/key-room-count-resident-change.action";
import {KeyRoomCountSubscribedChangeAction} from "../../../service/key-room/key-room-count-subscribed-change.action";
import {KeyRoomCountOwnerChangeAction} from "../../../service/key-room/key-room-count-owner-change.action";
import {RouterEffect} from "../../../store/effects/router.effect";

@NgModule({
  declarations: [
    KeyRoomListComponent
  ],
  imports: [
    CommonModule,
    KeyRoomItemModule,
    KeyRoomListRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature('key-room-list', KeyRoomReducer),
    EffectsModule.forFeature([KeyRoomEffect, RouterEffect]),
  ],
  providers: [
    {provide: KeyRoomCountResidentChangeAction},
    {provide: KeyRoomCountSubscribedChangeAction},
    {provide: KeyRoomCountOwnerChangeAction},
  ]
})
export class KeyRoomListModule {
}
