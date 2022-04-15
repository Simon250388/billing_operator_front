import faker from "@faker-js/faker";
import { SimpleRef } from "../../src/store/models/simple-ref.model";

faker.locale = 'ru'

export default (): SimpleRef[] => {

    const rows: SimpleRef[] = []

    for (let index = 0; index < 4; index++) {
        rows.push({
            id: faker.name.firstName(),
            present: faker.datatype.string()
        })
    }

    return rows
}