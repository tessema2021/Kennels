import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "../Home"
import { EmployeeList } from "./Employees/EmployeeList"
import { LocationList } from "./Locations/LocationList"
import { CustomerList } from "./Customers/CustomerList"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerDetail } from "./Customers/CustomerDetail"
import { CustomerForm } from "./Customers/CustomerForm"
import { EmployeeDetail } from "./Employees/EmployeeDetail"
import { LocationDetail } from "./Locations/LocationDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"

export const ApplicationViews = ({ isAdmin, myUser }) => {



    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }


    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser} />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
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
            <Route path="/customers/create">
                <CustomerForm />
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
