import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"
import { firstLetterCase } from '../../modules/helper'
import { useHistory } from "react-router"




export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    const history = useHistory();
    return (

        <section className="animal">
            <h3 className="animal__name">{firstLetterCase(animal.name)}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
            <Link to={`/animals/${animal.id}`}>
                <button>Details</button>
            </Link>
            <button type="button"
                onClick={() => history.push(`/animals/${animal.id}/edit`)}>
                Edit
            </button>


        </section>
    )
}
