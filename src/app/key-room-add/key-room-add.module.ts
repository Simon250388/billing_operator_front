import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KeyRoomAddComponent} from "./component/key-room-add/key-room-add.component";
import {KeyRoomAddRoutingModule} from "./key-room-add-routing.module";
import {MatStepperModule} from "@angular/material/stepper";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {ImprovementTypeRowModule} from "../improvement-type-row/improvement-type-row.module";
import {SquareRoomModule} from "../square-room/square-room.module";
import {EntityInputModule} from "../entity-input/entity-input.module";
import {AccountingPointServiceModule} from "../accounting-point-service/accounting-point-service.module";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    KeyRoomAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KeyRoomAddRoutingModule,

    AccountingPointServiceModule,
    ImprovementTypeRowModule,
    SquareRoomModule,
    EntityInputModule,

    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class KeyRoomAddModule { }
