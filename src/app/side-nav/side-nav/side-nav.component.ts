import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {getCurrentKeyRoom, getKeyRoomItems} from "../../../store/selectors/key-room.selector";
import {Store} from "@ngrx/store";
import {IAppState} from "../../../store/state/app.state";
import {IKeyRoom} from "../../../store/models/key-room.model";
import {clearCurrentKeyRoomAction, startChooseCurrentAction} from "../../../store/action/key-room.action";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {


  currentKeyRoom: Observable<IKeyRoom | undefined> = this.store.select(getCurrentKeyRoom)
  keyRoomItems: Observable<IKeyRoom[]> = this.store.select(getKeyRoomItems)

  private _isSmallSize: boolean = false;

  constructor(private store: Store<IAppState>, private breakpointObserver: BreakpointObserver) {
  }

  get isSmallSize(): boolean {
    return this._isSmallSize;
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Handset,
        Breakpoints.Tablet,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletPortrait,
        Breakpoints.WebPortrait,
        Breakpoints.HandsetLandscape,
        // Breakpoints.TabletLandscape,
        // Breakpoints.WebLandscape
        ]
      )
      .subscribe((state: BreakpointState) => {
        this._isSmallSize = state.matches
      });
  }

  setCurrentKeyRoom(value: IKeyRoom) {
    this.store.dispatch(startChooseCurrentAction(value));
  }

  setCurrentKeyRoomUndefined() {
    this.store.dispatch(clearCurrentKeyRoomAction());
  }

}
