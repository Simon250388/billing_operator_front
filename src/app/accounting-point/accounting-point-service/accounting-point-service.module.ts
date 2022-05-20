import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {
  AccountingPointServiceListComponent
} from './accounting-point-service-list/accounting-point-service-list.component';
import {AccountingPointAddDialogModule} from "../accounting-point-add-dialog/accounting-point-add-dialog.module";


@NgModule({
  declarations: [
    AccountingPointServiceListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountingPointAddDialogModule,

    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    AccountingPointServiceListComponent
  ]
})
export class AccountingPointServiceModule {
}
