import {createSelector} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {IKeyRoomState} from "../state/key-room.state";


const keyRoomState = (state: IAppState) => state.keyRooms;

export const getCurrentKeyRoom = createSelector(
  keyRoomState,
  (state: IKeyRoomState) => state.current
)

export const getAccountingPointsCurrentKeyRoom = createSelector(
  keyRoomState,
  (state: IKeyRoomState) => {
    if (state.current) {
      return state.current.accountingPoints
    } else {
      return []
    }
  }
)

export const getSimpleServicesCurrentKeyRoom = createSelector(
  keyRoomState,
  (state: IKeyRoomState) => {
    if (state.current) {
      return state.current.simpleServices
    } else {
      return []
    }
  }
)

export const isAccountingPointsLoad = createSelector(
  keyRoomState,
  (state: IKeyRoomState) => {
    if (state.current) {
      return {current: state.current, isAccountingPointLoad: state.current.isAccountingPointLoad}
    } else {
      return {current: state.current, isAccountingPointLoad: false}
    }
  }
)

export const isSimpleServiceLoad = createSelector(
  keyRoomState,
  (state: IKeyRoomState) => {
    if (state.current) {
      return {current: state.current, isAccountingPointLoad: state.current.isSimpleServiceLoad}
    } else {
      return {current: state.current, isAccountingPointLoad: false}
    }
  }
)

export const getKeyRoomItems = createSelector(
  keyRoomState,
  (state: IKeyRoomState) => state.items
)
