import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccountingPointAddComponent} from './component/accounting-point-add/accounting-point-add.component';
import {AccountingPointAddFormModule} from "../accounting-point-add-form/accounting-point-add-form.module";
import {AccountingPointAddRoutingModule} from "./accounting-point-add-routing.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AccountingPointAddComponent
  ],
  imports: [
    CommonModule,
    AccountingPointAddRoutingModule,
    AccountingPointAddFormModule,

    FlexLayoutModule,
    MatButtonModule
  ]
})
export class AccountingPointAddModule {
}
