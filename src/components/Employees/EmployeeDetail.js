import React, { useState, useEffect } from 'react';
import { getEmployeeById } from '../../modules/EmployeeManager';
import './EmployeeDetail.css';
import { useParams, useHistory } from "react-router-dom"


export const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({ name: "", address: "", location: "", animal: "" });

    const { employeeId } = useParams();
    const history = useHistory();

    useEffect(() => {
        //getEmployeeById(id) from EmployeeManager and hang on to the data; put it into state
        console.log("useEffect", employeeId)
        getEmployeeById(employeeId)
            .then(employee => {
                setEmployee({
                    name: employee.name,
                    address: employee.address,
                    // location: employee.location.name,
                    // animal: employee.animal.name

                });
            });
    }, [employeeId]);

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__address">{employee.address}</div>
            {/* What's up with the question mark???? See below.*/}
            <div className="employee__location">Location: {employee.location}</div>
            <div className="employee__animal">Animal: {employee.animal}</div>

        </section>
    );
}
