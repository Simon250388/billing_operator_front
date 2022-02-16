import {Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {getCurrentKeyRoomSelector, getKeyRoomItems} from "../../../store/selectors/key-room.selector";
import {Store} from "@ngrx/store";
import {IKeyRoom} from "../../../store/models/key-room.model";
import {chooseCurrenAction} from "../../../store/action/key-room.action";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {IKeyRoomState} from "../../../store/state/key-room.state";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnDestroy {

  get currentKeyRoom(): Observable<IKeyRoom | undefined> {
    return this._currentKeyRoom;
  }

  get keyRoomItems(): Observable<IKeyRoom[] | undefined> {
    return this._keyRoomItems;
  }

  private _currentKeyRoom: Observable<IKeyRoom | undefined> = this.store.select(getCurrentKeyRoomSelector)
  private _keyRoomItems: Observable<IKeyRoom[] | undefined> = this.store.select(getKeyRoomItems)
  private _isSmallSize: boolean = false;
  private subscription: Subscription;

  constructor(
    private store: Store<IKeyRoomState>,
    private breakpointObserver: BreakpointObserver) {
    this.subscription = this.breakpointObserver
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get isSmallSize(): boolean {
    return this._isSmallSize;
  }

  setCurrentKeyRoom(value: IKeyRoom) {
    this.store.dispatch(chooseCurrenAction({currentId: value.id}));
  }
}
