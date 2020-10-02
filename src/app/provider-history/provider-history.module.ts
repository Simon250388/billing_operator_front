import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderHistoryComponent } from './provider-history.component';
import { MatTableModule } from '@angular/material/table';
import { ProviderHistoryRoutingModule } from './provider-history-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    ProviderHistoryComponent
  ],
  imports: [
    CommonModule,
    ProviderHistoryRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class ProviderHistoryModule { }
