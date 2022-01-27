import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityInputModule } from '../entity-input/entity-input.module';
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
    EntityInputModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class ChangeValueModule { }
