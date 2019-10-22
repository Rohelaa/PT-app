import React, { useEffect } from 'react';

const CustomersTrainings = (props) => {

    const [trainings, setTrainings] = React.useState([]);
    const [training, setTraining] = React.useState({
        date: '',
        duration: '',
        activity: ''
    })

    const fetchTrainings = () => {
       setTrainings(props.fetchData);
    }

    useEffect(() => {
        fetchTrainings();
    }
    );

    const trainingNames = trainings.map((training, index) => 
    <li key={index}>{training.activity}</li>);

    return (
        <div>
            <ul>
                {trainingNames}
            </ul>
        </div>
     );
}
 
export default CustomersTrainings;