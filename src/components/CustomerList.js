import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddCustomer from './AddCustomer';
import { Button } from '@material-ui/core';
import EditCustomer from './EditCustomer';
import { Route, BrowserRouter, Link} from 'react-router-dom';


const CustomerList = () => {

    const [customers, setCustomers] = useState([]);
    
    
    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(res => res.json())
        .then(resData => setCustomers(resData.content));
        

    }

    const deleteCustomer = (link) => {
        fetch(link, {method: 'DELETE'})
    const saveCustomer = (newCustomer) => {
        fetch("https://customerrest.herokuapp.com/api/customers",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer)

        })
        .then(response => fetchData())
        .catch(error => console.error(error));
    }

    const editCustomer = (customer, link) => {
        fetch(link,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
            });
    }

    useEffect(() => {
        fetchData();
    }, []
    );

    const columns = [{
        Header: 'Firstname',
        accessor: 'firstname'
    }, {
        Header: 'LastName',
        accessor: 'lastname'
    }, {
        Header: 'Street Address',
        accessor: 'streetaddress'
    }, {
        Header: 'Post Code',
        accessor: 'postcode'
    }, {
        Header: 'City',
        accessor: 'city'
    }, {
        Header: 'Email',
        accessor: 'email'
    }, {
        Header: 'Phone',
        accessor: 'phone'
    }, {
        accessor: 'links[0].href',
        
        // Aaltosulkujen sisällä olevassa funktiokutsussa oltava vielä erillinen funktiokutsu
        // Ilman sitä kaikki tiedot poistuvat, kun haetaan tietoa funktion fetchData avulla

        Cell: ({value}) => <button onClick={() => deleteCustomer(value)}>Delete</button>
    }, {
        accessor: 'links[0].href',
        Cell: () =>
            <BrowserRouter>
                <div>
                    <Link to="/trainings">Trainings</Link>
                    <Route path="/trainings" component={}></Route>
                </div>
            </BrowserRouter>
    }];

    return (
        <div>
            <AddCustomer saveCustomer={saveCustomer} />
            <ReactTable data={customers} columns={columns} filterable={true} />
        </div>
    );

    }}

    export default CustomerList;