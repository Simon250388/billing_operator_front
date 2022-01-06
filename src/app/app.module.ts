import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortalModule } from '@angular/cdk/portal';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EnvironmenterModule } from 'ng-environmenter';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { appRedusers } from 'src/store/app.reducer';
import { UserEffect } from 'src/store/effects/user.effect';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { KeyRoomEffect } from 'src/store/effects/key-room.effect';
import { KeyRoomHttpService } from './service/key-room/key-room.http.service';
import { AccountingPointEffect } from 'src/store/effects/accountin-point.effect';

registerLocaleData(localeRu, 'ru');


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    PortalModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EnvironmenterModule.forRoot(environment),
    StoreModule.forRoot(appRedusers),
    EffectsModule.forRoot([UserEffect, KeyRoomEffect, AccountingPointEffect]),
    StoreRouterConnectingModule.forRoot(),
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
