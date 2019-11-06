import React, { useEffect } from 'react';
import AddTraining from './AddTraining';

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

<<<<<<< HEAD
    const addTrainingToCustomer = (newTraining) => {
        fetch(props.link, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTraining)
            });
    }
=======
    
>>>>>>> b9bbc0c3951f0bf63e2aae9e3a1dc892c189dc11

    useEffect(() => {
        fetchTrainings();
    }, []
    );

    const trainingNames = trainings.map((training, index) => 
    <li key={index}>{training.activity}</li>);

    return (
        <div>
            <ul>
                {trainingNames}
<<<<<<< HEAD
                <AddTraining />
=======
                <AddTraining link={props.link} />
>>>>>>> b9bbc0c3951f0bf63e2aae9e3a1dc892c189dc11
            </ul>
        </div>
     );
}
 
export default CustomersTrainings;