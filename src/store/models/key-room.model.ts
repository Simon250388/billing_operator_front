import { SimpleRef } from "./simple-ref.model";

export interface IKeyRoom {
    present: string,
    id: string,
    building: SimpleRef,
    room: SimpleRef | undefined
}