import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FindAbonentModule } from './find-abonent/find-abonent.module';
import { ContractModule } from './contract/contract.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FindAbonentModule,
    ContractModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
