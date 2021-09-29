import React, { useEffect, useState } from 'react';
import { getAllCustomers } from '../../modules/CustomerManager';
import { CustomerCard } from './CustomerCard';


export const CustomerList = () => {

    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            console.log(customersFromAPI);
            setCustomers(customersFromAPI)
        });
    };

    useEffect(() => {
        getCustomers();
    }, []);


    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard customer={customer} />)}

        </div>
    );




};