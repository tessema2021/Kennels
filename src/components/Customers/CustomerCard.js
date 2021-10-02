import React from "react"
import "./Customer.css"
import { Link } from "react-router-dom"

export const CustomerCard = ({ customer, handleDeleteCustomer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__address">{customer.address}</div>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Discharge</button>
        <Link to={`/customers/${customer.id}`}>
            <button>Details</button>
        </Link>
    </section>
)