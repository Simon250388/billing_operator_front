import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MeterListRoutingModule} from './meter-list-routing.module';
import {MeterListComponent} from './component/meter-list/meter-list.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MeterItemModule} from "../meter-item/meter-item.module";


@NgModule({
  declarations: [
    MeterListComponent
  ],
  imports: [
    CommonModule,
    MeterListRoutingModule,
    FlexLayoutModule,
    MeterItemModule
  ]
})
export class MeterListModule { }
