import { Component, OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as EntityAction from 'src/store/action/user.action';
import { IAppState } from 'src/store/state/app.state';
import { Observable, Subscription, take } from "rxjs";
import { ESocialProvider, IUser } from "../../store/models/user.model";
import { getCurrentUser } from "../../store/selectors/user.selector";
import { GoogleLoginProvider, SocialAuthService } from "angularx-social-login";
import { Actions, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {

  form = new FormGroup({
    username: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  currentUser: Observable<IUser | undefined> = this.store.select(getCurrentUser)

  private authSubscription: Subscription;
  private navigationSubscription: Subscription;
  private currentUserSubscription: Subscription;
  private _inProgress: boolean = false


  get inProgress(): boolean {
    return this._inProgress;
  }

  constructor(
    private readonly store: Store<IAppState>,
    private readonly authService: SocialAuthService,
    private readonly actions: Actions,
    private readonly router: Router,
  ) {
    
    this.authSubscription = this.authService.authState.subscribe((user) => {
      
      if (user) {
        this.store.dispatch(EntityAction.UserTryLoginSocialProviderAction(
          {
            userName: user.email,
            token: user.idToken,
            providerType: ESocialProvider[user.provider.toUpperCase()]
          }
        ))
      } else {
        this.form.enable()
      }
    });

    this.navigationSubscription = this.actions.pipe(
      ofType(EntityAction.UserLoginSuccessAction)
    ).subscribe(() => {      
      this._inProgress = false;
      this.router.navigate(["/key-room"])
    }
    )

    this.currentUserSubscription = this.currentUser.pipe(
      take(1)
    ).subscribe(user => {
      if (user) {       
        this.router.navigate(["/key-room"])
      } else {
        this.form.enable()
      }
    })
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe()
    this.navigationSubscription.unsubscribe()
    this.currentUserSubscription.unsubscribe()
  }

  get userNameControl(): AbstractControl | null {
    return this.form.get("username")
  }

  get passwordControl(): AbstractControl | null {
    return this.form.get('password')
  }

  get userName(): string {
    return this.userNameControl?.value
  }

  get password(): string {
    return this.passwordControl?.value
  }

  login() {
    if (this.form.invalid) {
      return
    }
    this._inProgress = true;
    this.form.disable()
    this.store.dispatch(EntityAction.UserTryLoginAction({ userName: this.userName, password: this.password }))
  }

  loginWithGoogle() {
    this.form.disable()
    this.form.clearValidators()
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}
