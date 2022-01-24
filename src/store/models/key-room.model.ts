import { SimpleRef } from "./simple-ref.model";

export interface IKeyRoom {
    present: string,
    address: string,
    countPoints: number,
    id: string,
    building: SimpleRef,
    room: SimpleRef | undefined
}
