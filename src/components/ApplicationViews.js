import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { AnimalCard } from "./animal/AnimalCard"
import { EmployeeCard } from "./Employees/EmployeeCard"
import { LocatoinCard } from "./Locations/LocationCard"
import { CustomerCard } from "./Customers/CustomerCard"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>


            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/employees">
                <EmployeeCard />

            </Route>


            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/customers">
                <CustomerCard />

            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/locations">
                <LocatoinCard />

            </Route>
        </>
    )
}
