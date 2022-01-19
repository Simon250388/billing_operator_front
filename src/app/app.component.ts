import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
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
export class AppComponent implements OnInit {

  currentUser: Observable<IUser | undefined> = this.store.select(getCurrentUser)

  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry,
    private store: Store<IAppState>,
    private router: Router) {
    this.matIconRegistry.addSvgIcon("logo", this.domSanitizer.bypassSecurityTrustResourceUrl("assets/logo.svg"));
  }

  title = 'BillingOperator';

  ngOnInit(): void {
    this.currentUser.subscribe(
      (user) => {
        if (!user) {
          this.router.navigate(["login"])
        }
      }
    )
  }
}
