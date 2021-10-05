import React, { useEffect, useState } from 'react';
import { deleteCustomer, getAllCustomers } from '../../modules/CustomerManager';
import { CustomerCard } from './CustomerCard';
import { useHistory } from 'react-router';


export const CustomerList = () => {

    const [customers, setCustomers] = useState([]);
    const history = useHistory();

    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            console.log(customersFromAPI);
            setCustomers(customersFromAPI)
        });
    };



    const handleDeleteCustomer = id => {
        deleteCustomer(id)
            .then(() => getAllCustomers().then(setCustomers));
    };




    useEffect(() => {
        getCustomers();
    }, []);


    return (
        <>

            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => { history.push("/customers/create") }}>
                    Admit Customer
                </button>
            </section>
            <div className="container-cards">
                {customers.map(customer => <CustomerCard key={customer.id} customer={customer} handleDeleteCustomer={handleDeleteCustomer} />)}

            </div>
        </>
    );




};