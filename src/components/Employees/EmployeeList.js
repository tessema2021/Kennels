import React, { useEffect, useState } from 'react';
import { getAllEmployees } from "../../modules/EmployeeManager";
import { EmployeeCard } from "./EmployeeCard";


export const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees().then(employeesFromAPI => {
            console.log(employeesFromAPI);
            setEmployees(employeesFromAPI);
        });
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard employee={employee} />)}
        </div>
    );
};