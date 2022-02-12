import {createFeatureSelector, createSelector} from "@ngrx/store";
import {IKeyRoomState} from "../state/key-room.state";

export const keyRoomModuleState = createFeatureSelector<IKeyRoomState>('key-room-list');

export const getCurrentKeyRoomSelector = createSelector(
  keyRoomModuleState,
  (state: IKeyRoomState) => {
    if (!state.items) return undefined
    if (!state.currentId) return undefined
    if (!state.items.size) return undefined
    if (state.items.size == 0) return undefined
    if (!state.items.has(state.currentId)) return undefined
    return  state.items.get(state.currentId)
  }
)

export const getCurrentIdSelector = createSelector(
  keyRoomModuleState,
  (state: IKeyRoomState) => state.currentId
)

export const getKeyRoomByIdSelector = (id: string) => createSelector(
  keyRoomModuleState,
  (state: IKeyRoomState) => {
    if (!state.items) throw Error("asdasd")
    return state.items.get(id)!
  }
)

export const getKeyRoomItems = createSelector(
  keyRoomModuleState,
  (state: IKeyRoomState) => {
    if (!state.items) return undefined
    if (!state.items.size || state.items.size == 0) return undefined
    return [...state.items.values()]
  }
)
