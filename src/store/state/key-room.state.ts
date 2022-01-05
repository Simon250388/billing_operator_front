import { IKeyRoom } from "../models/key-room.model";

export interface IKeyRoomState {
    items: IKeyRoom[],
    history: IKeyRoom[],
    current: IKeyRoom | undefined
}

export const initialKeyRoomState: IKeyRoomState = {
    items: [],
    history: [{
        present: "414000, г. Москва, ул. Королева, д. 985б кв. 999",
        building: {
            id: "someBuildingId",
            present: "some"
        },
        room: undefined
    },
    {
        present: "414000, г. Москва, ул. Королева, д. 985б кв. 999",
        building: {
            id: "someBuildingId",
            present: "some"
        },
        room: undefined
    },
    {
        present: "414000, г. Москва, ул. Королева, д. 985б кв. 999",
        building: {
            id: "someBuildingId",
            present: "some"
        },
        room: undefined
    },
    {
        present: "414000, г. Москва, ул. Королева, д. 985б кв. 999",
        building: {
            id: "someBuildingId",
            present: "some"
        },
        room: undefined
    }],
    current: undefined
}