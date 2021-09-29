const remoteURL = "http://localhost:5002"

export const getLocationById = (locationId) => {
    //be sure your animals have good data and related to a location and customer
    return fetch(`${remoteURL}/locations/${locationId}?_expand=animal&_expand=customer`)
        .then(res => res.json())

}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
        .then(res => res.json())
}