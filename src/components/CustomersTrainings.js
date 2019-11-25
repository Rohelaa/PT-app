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

    const addTraining = (newTraining) => {
        fetch(props.link,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTraining)
            })
            .then(response => fetchTrainings())
            .catch(error => console.error(error));
    }

    

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
                <AddTraining addTraining={addTraining} />
            </ul>
        </div>
     );
}
 
export default CustomersTrainings;