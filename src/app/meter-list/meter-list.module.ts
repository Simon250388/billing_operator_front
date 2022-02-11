import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MeterListRoutingModule} from './meter-list-routing.module';
import {MeterListComponent} from './component/meter-list/meter-list.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MeterItemModule} from "../meter-item/meter-item.module";
import {ChangeValueModule} from "../change-value/change-value.module";
import {ActionReducerMap, StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {MeterEffect} from "../../store/effects/meter.effect";
import {MeterReducer} from "../../store/reducers/meter.reducer";
import {IMeterModuleState} from "../../store/state/meter-module.state";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MeterMeterTypeChangeAction} from "../../service/meter/meter-meter-type-change-action.service";
import {MeterVerificationDateChangeAction} from "../../service/meter/meter-verification-date-change-action.service";


export const meterReducers: ActionReducerMap<IMeterModuleState, any> = {
  meters: MeterReducer
}

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
    StoreModule.forFeature('meter-list', meterReducers),
    EffectsModule.forFeature([MeterEffect])
  ],
  providers: [
    {provide: MeterVerificationDateChangeAction},
    {provide: MeterMeterTypeChangeAction},
  ]
})
export class MeterListModule {
}
