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
    }]

    return (

        <ReactTable data={customers} columns={columns}/>

    );
}
 
export default CustomerList;