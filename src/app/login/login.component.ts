import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as EntityAction from 'src/store/action/user.action';
import {IAppState} from 'src/store/state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private _store: Store<IAppState>
  ) {
  }

  ngOnInit(): void {
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

  submit() {

    if (this.form.invalid) {
      return
    }

    this._store.dispatch(EntityAction.UserTryLoginAction({userName: this.userName, password: this.password}))
  }
}
