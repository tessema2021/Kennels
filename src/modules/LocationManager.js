const remoteURL = "http://localhost:5002"

export const getLocationById = (locationId) => {

    return fetch(`${remoteURL}/locations/${locationId}?_expand=animal&_expand=customer`)
        .then(res => res.json())

}

export const getAllLocations = () => {
    return fetch(`${remoteURL}/locations`)
        .then(res => res.json())
}