import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MeterItemComponent} from './component/meter-item/meter-item.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    MeterItemComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    MeterItemComponent
  ]
})
export class MeterItemModule { }
