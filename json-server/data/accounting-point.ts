import faker from "@faker-js/faker"
import { IAccountingPointActive } from "../../src/store/models/accounting-point-active.model"
import { SimpleRef } from "../../src/store/models/simple-ref.model"



export default (
    keyRoomIds: String[],
    services: SimpleRef[],
    providers: SimpleRef[]) => {

    const rows: IAccountingPointActive[] = []

    keyRoomIds.forEach(keyRoomIdValue => {
        for (let index = 0; index < 4; index++) {
            rows.push({
                id: faker.name.firstName(),
                keyRoomId: keyRoomIdValue,
                service: faker.random.arrayElement(services),
                provider: faker.random.arrayElement(providers),
                isActive: true,
                meter: {
                    id: "somestring",
                    present: "12555454/СГВ-15"
                },
                meterIsActive: true,
                meterStateChangeAt: faker.datatype.datetime().toISOString()
            })
        }
    })

    return rows
}