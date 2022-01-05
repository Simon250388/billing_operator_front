import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserTryLoginAction } from 'src/store/action/user.action';
import { IAppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private _store: Store<IAppState>
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this._store.dispatch(new UserTryLoginAction())
  }
}
