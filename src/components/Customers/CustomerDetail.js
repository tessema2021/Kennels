import React, { useState, useEffect } from 'react';
import { getCustomerById } from '../../modules/CustomerManager';
import './CustomerDetail.css';
import { useParams, useHistory } from "react-router-dom"


export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({ name: "", address: "", location: "", animal: "" });

    const { customerId } = useParams();
    const history = useHistory();

    useEffect(() => {
        //getCustomerById(id) from CustoerManager and hang on to the data; put it into state
        console.log("useEffect", customerId)
        getCustomerById(customerId)
            .then(customer => {
                setCustomer({
                    name: customer.name,
                    address: customer.address,
                    location: customer.loction.name,
                    animal: customer.animal.name

                });
            });
    }, [customerId]);

    return (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__address">{customer.address}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="customer__location">Location: {customer.location}</div>
            <div className="customer__owner">Animal: {customer.animal}</div>

        </section>
    );
}


