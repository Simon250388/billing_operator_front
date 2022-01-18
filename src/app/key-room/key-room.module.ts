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
import { EntityImputModule } from '../entity-imput/entity-imput.module';
import { ReactiveFormsModule } from '@angular/forms';
import { KeyRoomAddComponent } from './component/key-room-add/key-room-add.component';
import { SquareRoomModule } from '../square-room/square-room.module';
import { MatSelectModule } from '@angular/material/select';
import { ImprovementTypeRowModule } from '../improvement-type-row/improvement-type-row.module';
import { AccountingPointServiceModule } from '../accounting-point-service/accounting-point-service.module';


@NgModule({
  declarations: [
    KeyRoomComponent,
    KeyRoomAddComponent
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
    EntityImputModule,
    SquareRoomModule,
    ImprovementTypeRowModule,
    AccountingPointServiceModule
  ]
})
export class KeyRoomModule { }
