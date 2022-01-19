import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {IAppState} from "../../store/state/app.state";
import {Observable} from "rxjs";
import {IUser} from "../../store/models/user.model";
import {getCurrentUser} from "../../store/selectors/user.selector";
import {UserLogoutAction} from "../../store/action/user.action";

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  currentUser: Observable<IUser | undefined> = this._store.pipe(select(getCurrentUser))

  constructor(
    private _store: Store<IAppState>
  ) {
  }

  ngOnInit(): void {

  }

  logout() {
    this._store.dispatch(UserLogoutAction())
  }



}
