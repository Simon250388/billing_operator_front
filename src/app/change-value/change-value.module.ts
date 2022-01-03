import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityImputModule } from '../entity-imput/entity-imput.module';
import { ProviderChangeComponent } from './provider-change/provider-change.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DifferentiationTypeChangeComponent } from './differentiation-type-change/differentiation-type-change.component';
import { SimpleNumberChangeComponent } from './simple-number-change/simple-number-change.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ProviderChangeComponent,
    DifferentiationTypeChangeComponent,
    SimpleNumberChangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EntityImputModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class ChangeValueModule { }