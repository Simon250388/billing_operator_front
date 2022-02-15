import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {EnvironmenterModule} from 'ng-environmenter';
import {ActionReducer, INIT, MetaReducer, StoreModule, UPDATE} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {appReducers} from 'src/store/app.reducer';
import {UserEffect} from 'src/store/effects/user.effect';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {SimpleRefEffects} from 'src/store/effects/simple-ref-effects.service';
import {ServiceSimpleEffect} from "../store/effects/service-simple.effect";
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {MatDialogModule} from "@angular/material/dialog";
import {IAppState} from "../store/state/app.state";
import {IUserState} from "../store/state/user.state";

registerLocaleData(localeRu, 'ru');

export const appMetaReducer = (
  reducer: ActionReducer<IAppState>
): ActionReducer<IAppState> => {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          const userSate = JSON.parse(storageValue) as IUserState
          const nextUserState = reducer(state, action)
          return {...nextUserState, user: userSate}
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.removeItem("state")
    if (nextState.user) localStorage.setItem("state", JSON.stringify(nextState.user))
    return nextState;
  };
};

export const metaReducers: MetaReducer[] = [appMetaReducer];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    EnvironmenterModule.forRoot(environment),
    StoreModule.forRoot(appReducers, { metaReducers }),
    EffectsModule.forRoot([
      UserEffect,
      SimpleRefEffects,
      ServiceSimpleEffect
    ]),
    StoreRouterConnectingModule.forRoot(),
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatToolbarModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    })
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
