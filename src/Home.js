import React from "react";
import { PropsAndState } from "./components/PropsAndState";
import { AnimalSpotlight } from "./components/animal/AnimalSpotlight";
import { useEffect, useState } from "react";
import { getRandomId } from "./modules/AnimalManager";
import { QuoteCard } from "./components/qoutes/quotes";

export const Home = () => {

    const [spotlightId, setSpotlightId] = useState(0);

    const refreshSpotlightAnimal = () => {
        getRandomId().then(setSpotlightId);
    };

    useEffect(() => {
        refreshSpotlightAnimal();
    }, []);


    return (
        <>

            <div>
                <p>You are an admin</p>

                <h2>Nashville Kennels</h2>
                <small>Loving care when you're not there.</small>

                <address>
                    <div>Visit Us at the Nashville North Location</div>
                    <div>500 Puppy Way</div>
                </address>
            </div>


            <PropsAndState />




            <h1>Animal Spotlight</h1>
            <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
            {
                spotlightId && <AnimalSpotlight animalId={spotlightId} />
            }

        </>
    )
}
