import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from 'src/store/state/app.state';
import {Observable} from "rxjs";
import {getCurrentUser} from "../store/selectors/user.selector";
import {Router} from "@angular/router";
import {IUser} from "../store/models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  constructor() {
  }

  title = 'BillingOperator';
}

