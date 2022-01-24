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
import { MatStepperModule } from '@angular/material/stepper';
import { EntityInputModule } from '../entity-input/entity-input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyRoomAddComponent } from './component/key-room-add/key-room-add.component';
import { SquareRoomModule } from '../square-room/square-room.module';
import { MatSelectModule } from '@angular/material/select';
import { ImprovementTypeRowModule } from '../improvement-type-row/improvement-type-row.module';
import { AccountingPointServiceModule } from '../accounting-point-service/accounting-point-service.module';
import { KeyRoomItemComponent } from './component/key-room-item/key-room-item.component';
import { CurrentKeyRoomComponent } from './component/current-key-room/current-key-room.component';
import {AccountingPointActiveModule} from "../accounting-point-active/accounting-point-active.module";
import {SideNavComponent} from "../side-nav/side-nav/side-nav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    KeyRoomComponent,
    KeyRoomAddComponent,
    KeyRoomItemComponent,
    CurrentKeyRoomComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KeyRoomRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatSelectModule,
    MatInputModule,
    EntityInputModule,
    SquareRoomModule,
    ImprovementTypeRowModule,
    AccountingPointServiceModule,
    AccountingPointActiveModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class KeyRoomModule { }
