import { IKeyRoom } from "../../src/store/models/key-room.model";
import { faker } from "@faker-js/faker"
import { roomTypes } from "../../src/store/models/room-type";

faker.locale = 'ru'

export default (): IKeyRoom[] => {

    const rows: IKeyRoom[] = []

    for (let index = 0; index < 4; index++) {
        rows.push({
            id: faker.name.firstName(),
            address: faker.address.streetAddress(),
            countOwner: faker.datatype.number({ min: 1, max: 10 }),
            countResident: faker.datatype.number({ min: 1, max: 10 }),
            countSubscribed: faker.datatype.number({ min: 1, max: 10 }),
            square: faker.datatype.number({ min: 1, max: 500 }),
            roomType: roomTypes[faker.datatype.number({ min: 0, max: 1 })]
        })
    }


    return rows
}