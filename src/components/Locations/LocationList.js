import React, { useEffect, useState } from 'react';
import { deleteLocation, getAllLocations } from '../../modules/LocationManager';
import { LocationCard } from './LocationCard';



export const LocationList = () => {

    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return getAllLocations().then(locationsFromAPI => {
            console.log(locationsFromAPI);
            setLocations(locationsFromAPI);
        });
    };

    const handleDeleteLocation = id => {
        deleteLocation(id)
            .then(getLocations);

    }

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard key={location.id} location={location} handleDeleteLocation={handleDeleteLocation} />)}
        </div>
    );
};