import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';

import {
  AccountingPointActiveListComponent
} from './accounting-point-active-list/accounting-point-active-list.component';
import {AccountingPointActiveRoutingModule} from './accounting-point-active-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {AccountingPointItemComponent} from './accountin-point-item/accounting-point-item.component';
import {SimpleServiceComponent} from './simple-service/simple-service.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {accountingPointReducer} from "../../store/reducers/accounting-point.reducer";
import {AccountingPointEffect} from "../../store/effects/accountin-point.effect";


@NgModule({
  declarations: [
    AccountingPointActiveListComponent,
    AccountingPointItemComponent,
    SimpleServiceComponent
  ],
  imports: [
    CommonModule,
    AccountingPointActiveRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    StoreModule.forFeature('accounting-points', accountingPointReducer),
    EffectsModule.forFeature([AccountingPointEffect])
  ]
})
export class AccountingPointActiveModule {
}
