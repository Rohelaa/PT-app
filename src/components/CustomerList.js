import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const CustomerList = () => {

    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({
        id: '',
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });
    
    const fetchData = () => {
        fetch("https://customerrest.herokuapp.com/api/customers")
        .then(res => res.json())
        .then(resData => setCustomers(resData.content));
        

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
    }];

    return (

        <ReactTable data={customers} columns={columns} filterable={true}/>

    );
}
 
export default CustomerList;