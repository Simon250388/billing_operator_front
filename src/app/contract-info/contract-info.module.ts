import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractInfoRoutingModule } from './contract-info-routing.module';
import { ContractInfoComponent } from './contract-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ChangeValueModule } from '../change-value/change-value.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ContractInfoComponent
  ],
  imports: [
    CommonModule,
    ContractInfoRoutingModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    ChangeValueModule
  ]
})
export class ContractInfoModule { }
