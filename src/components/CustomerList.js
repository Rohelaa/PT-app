import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddCustomer from './AddCustomer';
import { Button } from '@material-ui/core';
import EditCustomer from './EditCustomer';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import CustomersTrainings from './CustomersTrainings';

const CustomerList = () => {

    const [customers, setCustomers] = useState([]);
    
    
    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(res => res.json())
        .then(resData => setCustomers(resData.content));
        

    }

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

    const editCustomer = (link, customer) => {
        fetch(link,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customer)
            })
            .then(response => fetchData())
            .catch(error => console.error(error));
            
    }

    const deleteCustomer = (link) => {
        fetch(link,
            {
                method: 'DELETE'
            })
            .then(res => fetchData());
    }

    const fetchTrainingData = (link) => {
        fetch(link)
        .then(response => response.json())
        .then(responseData => responseData.content);
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
        Header: 'Trainings',
        accessor: 'links[2].href',
        Cell: ({value}) => //console.log(value)
        <CustomersTrainings fetchData={fetchTrainingData(value)} />
        
            // <BrowserRouter>
            //     <div>
            //         <Link to={value}>link</Link>{' '}
            //         <Switch>
                
            //             <Route path={value} component={CustomersTrainings}></Route>
            //         </Switch>                
            //     </div>
            // </BrowserRouter>
        

    }, {
        accessor: 'links[0].href',
        Cell: ({value}) => <div><EditCustomer link={value} editCustomer={editCustomer} /><Button onClick={() => deleteCustomer(value)}>Delete</Button></div>
    }];

    return (
        <div>
            <AddCustomer saveCustomer={saveCustomer} />
            <ReactTable data={customers} columns={columns} filterable={true}/>
        </div>
    );
}
 
export default CustomerList;