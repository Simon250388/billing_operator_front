import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountingPointAddDialogComponent } from './component/accounting-point-add-dialog/accounting-point-add-dialog.component';
import {AccountingPointAddFormModule} from "../accounting-point-add-form/accounting-point-add-form.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AccountingPointAddDialogComponent
  ],
  imports: [
    CommonModule,

    AccountingPointAddFormModule,

    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    AccountingPointAddDialogComponent
  ]
})
export class AccountingPointAddDialogModule { }
