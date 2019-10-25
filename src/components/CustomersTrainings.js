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
                <AddTraining link={props.link} />
            </ul>
        </div>
     );
}
 
export default CustomersTrainings;