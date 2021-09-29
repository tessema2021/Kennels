import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { EmployeeList } from "./Employees/EmployeeList"
import { LocationList } from "./Locations/LocationList"
import { CustomerList } from "./Customers/CustomerList"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = ({ isAdmin, myUser }) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalList />
            </Route>


            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/employees">
                <EmployeeList />


            </Route>


            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/customers">
                <CustomerList />


            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/locations">
                <LocationList />


            </Route>
        </>
    )
}
