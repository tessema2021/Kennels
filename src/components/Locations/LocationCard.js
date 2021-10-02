import React from "react"
import "./Location.css"

export const LocationCard = ({ location, handleDeleteLocation }) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">{location.address}</div>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>Discharge</button>
    </section>
)




//<button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Discharge</button>