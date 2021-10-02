import React, { useEffect, useState } from 'react';
import { getAllAnimals, deleteAnimal } from '../../modules/AnimalManager';
import { AnimalCard } from './AnimalCard';

export const AnimalList = () => {

    const [animals, setAnimals] = useState([]);

    const getAnimals = () => {
        return getAllAnimals().then(animalsFromAPI => {
            // We'll do something more interesting with this data soon.
            console.log(animalsFromAPI);
            setAnimals(animalsFromAPI);
        });
    };


    const handleDeleteAnimal = id => {
        deleteAnimal(id)
            .then(() => getAllAnimals().then(setAnimals));
    };




    useEffect(() => {
        getAnimals();
    }, []);

    return (
        <div className="container-cards">
            {animals.map(animal => <AnimalCard animal={animal} handleDeleteAnimal={handleDeleteAnimal} />)}
        </div>
    );
};



