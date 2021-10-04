import React, { useState, useEffect } from 'react';
import { deleteLocation, getLocationById } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom"


export const LocationDetail = () => {
    const [location, setLocation] = useState({ name: "", address: "", customer: "", animal: "" });
    const [isLoading, setIsLoading] = useState(true);

    const { locationId } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true);
        deleteLocation(locationId).then(() =>
            history.push("/locations")
        );
    };


    useEffect(() => {
        //getEmployeeById(id) from EmployeeManager and hang on to the data; put it into state
        console.log("useEffect", locationId)
        getLocationById(locationId)
            .then(location => {
                console.log(location)
                setLocation({
                    name: location.name,
                    address: location.address,
                    customer: location.customer.name,
                    animal: location.animal.name

                });
                setIsLoading(false);
            });
    }, [locationId]);

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="location__customer">customer: {location.customer}</div>
            <div className="location__animal">Animal: {location.animal}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>
                Discharge
            </button>

        </section>
    );
}