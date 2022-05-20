import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AccountingPointAddFormComponent
} from "./component/accounting-point-add-form/accounting-point-add-form.component";
import {MatInputModule} from "@angular/material/input";
import {EntityInputModule} from "../../input/entity-input/entity-input.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AccountingPointAddFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatInputModule,
    EntityInputModule
  ],
  exports:[
    AccountingPointAddFormComponent
  ]
})
export class AccountingPointAddFormModule {
}
