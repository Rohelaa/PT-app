import React, { useEffect } from 'react';

const CustomersTrainings = (props) => {

    const [trainings, setTrainings] = React.useState([]);
    const [training, setTraining] = React.useState({
        date: '',
        duration: '',
        activity: ''
    })

    const fetchTrainings = () => {
       fetch(props.link)
       .then(response => response.json())
       .then(responseData => setTrainings(responseData.content));
    }

    const addTrainingToCustomer = () => {

    }

    useEffect(() => {
        fetchTrainings();
    }, []
    );

    const trainingNames = trainings.map((training, index) => 
    <li key={index}>{training.activity}</li>);

    return (
        <div onMouseOver>
            <ul>
                {trainingNames}
                <p>Add training</p>
            </ul>
        </div>
     );
}
 
export default CustomersTrainings;