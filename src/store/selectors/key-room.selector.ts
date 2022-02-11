import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IKeyRoomState} from "../state/key-room.state";

export const keyRoomModuleState = createFeatureSelector<IKeyRoomState>('key-room-list');

export const getCurrentKeyRoom = createSelector(
  keyRoomModuleState,
  (state: IKeyRoomState) => state.current
)

export const getKeyRoomItems = createSelector(
  keyRoomModuleState,
  (state: IKeyRoomState) => state.items
)
