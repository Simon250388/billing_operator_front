import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyRoomComponent } from './component/key-room/key-room.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { KeyRoomRoutingModule } from './key-room-routing.module';


@NgModule({
  declarations: [
    KeyRoomComponent
  ],
  imports: [
    CommonModule,
    KeyRoomRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatListModule,
    MatCardModule
  ]
})
export class KeyRoomModule { }
