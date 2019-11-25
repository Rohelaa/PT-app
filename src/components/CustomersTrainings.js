import React, { useEffect } from 'react';
import AddTraining from './AddTraining';
import ShowTraining from "./ShowTraining";

const CustomersTrainings = (props) => {
    const [trainings, setTrainings] = React.useState([]);

    // const [training, setTraining] = React.useState({
    //     date: '',
    //     duration: '',
    //     activity: ''
    // })

    const fetchTrainings = () => {
        fetch(props.link)
       .then(response => response.json())
       //.then(resposen => console.log(props))
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
            .then(response => fetchTrainings());
    }

    // const deleteTraining = () => {
    //     fetch(link, {
    //         method: 'DELETE'
    //     });
    // }

    useEffect(() => {
        fetchTrainings();
    }, []
    );

    // käytetään komponenttia ShowTraining, koska halutaan saada harjoitus näkyviin siten että sitä 
    // klikkaamalla avautuu dialog ikkuna
    // Tästä näkyy harjoituksen tiedot ja lisäksi poistopainike

    const trainingNames = trainings.map((training, index) => 
    <ShowTraining fetchTrainings={fetchTrainings} training={training} />);
    //<li key={index}>{training.activity}</li>);

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