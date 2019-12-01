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
        // parametrin nimellä ei tässä tapauksessa merkitystä
        //Cell: ({value}) => moment(value).format('MMMM Do YYYY, h:mm:ss a')
        
    }, {
        Header: 'Duration',
        accessor: 'duration',
    }, {
        Header: 'Activity',
        accessor: 'activity',
    }, {
        Header: 'Customer',
        accessor: 'customer',
       // Cell: ({value}) => console.log(value)
    }];

    return (
        <div>
            <ReactTable data={trainings} columns={columns} />
        </div>
    );
}

export default TrainingList;