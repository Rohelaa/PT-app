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

    // props.link esim. "https://customerrest.herokuapp.com/api/customers/1/trainings"
    const fetchTrainings = () => {
        fetch(props.link)
       .then(response => response.json())
       //.then(resposen => console.log(props))
       .then(responseData => setTrainings(responseData.content));
    }

    const addTraining = (newTraining) => {
        fetch('https://customerrest.herokuapp.com/api/trainings',
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

    // const addTraining = (newTraining) => {
    //     fetch(props.link.content,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(newTraining)
    //         })
    //         .then(response => fetchTrainings())
    //         .catch(error => console.error(error));
    // }

    
    useEffect(() => {
        fetchTrainings();
    }, []
    );

    // käytetään komponenttia ShowTraining, koska halutaan saada harjoitus näkyviin siten että sitä 
    // klikkaamalla avautuu dialog ikkuna
    // Tästä näkyy harjoituksen tiedot ja lisäksi poistopainike
    // oltava key attribuutti. Ilman sitä console valittaa

    const trainingNames = trainings.map((training, index) => <ShowTraining key={index} fetchTrainings={fetchTrainings} training={training} />);
    //<li key={index}>{training.activity}</li>);

    return (
        <div>
            <ul>
                {trainingNames}

                {/* Annetaan komponentille propsina sama attribuutti kuin CustomerTrainingille.
                Propsi on olio, joka sisältää muuttujanimellä links[0].href linkin asiakkaaseen */}
                <AddTraining customer={props.customer} addTraining={addTraining} />
            </ul>
        </div>
     );
}
 
export default CustomersTrainings;