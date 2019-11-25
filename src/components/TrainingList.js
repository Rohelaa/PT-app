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
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(res => res.json())
        .then(resData => setTrainings(resData.content));
    }

    React.useEffect(() => {
        fetchData()
    }, []);


    const columns = [{
        Header: 'Date',
        accessor: 'date',
    }, {
        Header: 'Duration',
        accessor: 'duration',
    }, {
        Header: 'Activity',
        accessor: 'activity'
    }, {
        Header: 'Customer',
        accessor: 'links[2].href'
    }]

    return (
        <div>
            <ReactTable data={trainings} columns={columns} />
        </div>
    );
}

export default TrainingList;