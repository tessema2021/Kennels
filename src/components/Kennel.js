
import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

const isAdmin = true;
// example of object passed
const myUser = {
    name: " Tessema",
    pet: "bucha"
}

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews isAdmin={isAdmin} myUser={myUser} />
    </>
)

