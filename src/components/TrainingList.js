import React from 'react';
import ReactTable from 'react-table';

const TrainingList = () => {

    const [trainings, setTrainings] = React.useState([]);

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
        Header: ''
    }]

    return (
        <div>
            
        </div>
    );
};

export default TrainingList;