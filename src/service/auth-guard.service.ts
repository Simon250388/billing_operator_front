import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {IAppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";
import {getCurrentUser} from "../store/selectors/user.selector";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthGuardService implements CanActivate {

  private login: boolean = false

  constructor(
    public store: Store<IAppState>) {
    this.store.select(getCurrentUser).subscribe(
      value => {
        this.login = !!value;
      }
    )
  }

  canActivate(): boolean {
    return this.login;
  }
}
