import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MeterListRoutingModule} from './meter-list-routing.module';
import {MeterListComponent} from './component/meter-list/meter-list.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MeterItemModule} from "../meter-item/meter-item.module";
import {ChangeValueModule} from "../../input/change-value/change-value.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {MeterEffect} from "../../../store/effects/meter.effect";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MeterMeterTypeChangeAction} from "../../../service/meter/meter-meter-type-change-action.service";
import {MeterVerificationDateChangeAction} from "../../../service/meter/meter-verification-date-change-action.service";
import {meterReducer} from "../../../store/reducers/meter.reducer";


@NgModule({
  declarations: [
    MeterListComponent
  ],
  imports: [
    CommonModule,
    MeterListRoutingModule,
    FlexLayoutModule,
    MeterItemModule,
    ChangeValueModule,
    MatProgressSpinnerModule,
    StoreModule.forFeature('meter-list', meterReducer),
    EffectsModule.forFeature([MeterEffect])
  ],
  providers: [
    {provide: MeterVerificationDateChangeAction},
    {provide: MeterMeterTypeChangeAction},
  ]
})
export class MeterListModule {
}
