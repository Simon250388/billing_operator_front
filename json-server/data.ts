import keyRoom from "./data/key-room"
import servicesFn from "./data/services"
import providersFn from "./data/providers"
import accountingPointFn from "./data/accounting-point"

export const data = () => {
    
    const keyRooms = keyRoom()
    
    const services = servicesFn()
    
    const providers = providersFn()
    
    const accountingPoints = accountingPointFn(keyRooms.map(value => value.id), services, providers)
    
    return {
        "key-room" : keyRooms,
        "accounting-point" : accountingPoints,
    }
}

