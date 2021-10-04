import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { EmployeeList } from "./Employees/EmployeeList"
import { LocationList } from "./Locations/LocationList"
import { CustomerList } from "./Customers/CustomerList"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerDetail } from "./Customers/CustomerDetail"
import { EmployeeDetail } from "./Employees/EmployeeDetail"
import { LocationDetail } from "./Locations/LocationDetail"

export const ApplicationViews = ({ isAdmin, myUser }) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <AnimalList />
            </Route>


            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
            {/* Render the animal list when http://localhost:3000/employees */}
            <Route exact path="/employees">
                <EmployeeList />
            </Route>


            <Route path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>

            {/* Render the animal list when http://localhost:3000/customers */}
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route>

            {/* Render the animal list when http://localhost:3000/locations */}
            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>
        </>
    )
}
