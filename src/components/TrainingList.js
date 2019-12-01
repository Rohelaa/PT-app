import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

const TrainingList = () => {

    const [trainings, setTrainings] = React.useState([]);

    // const [training, setTraining] = React.useState({
    //     date: '',
    //     duration: '',
    //     activity: ''
    // })

    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(resData => setTrainings(resData));
    }

    React.useEffect(() => {
        fetchData()
    }, []);


    const columns = [{
        Header: 'Date',
        accessor: 'date',
        Cell: ({value}) => moment(value).format('MMMM Do YYYY, h:mm:ss a')
        
    }, {
        Header: 'Duration',
        accessor: 'duration',
    }, {
        Header: 'Activity',
        accessor: 'activity',
    }, {

        // Cell-propertyn parametrilla 'value', saa näkyviin consolessa juttuja
        Header: 'Customer',
        accessor: 'customer',
        Cell: ({value}) => value.firstname + ' ' + value.lastname //console.log(value.firstname)
    }];

    return (
        <div>
            <ReactTable data={trainings} columns={columns} />
        </div>
    );
}

export default TrainingList;