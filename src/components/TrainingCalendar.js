import { Calendar, momentLocalizer } from "react-big-calendar";
import React, { useState, useEffect } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";



const TrainingCalendar = () => {

    // Setup the localizer by providing the moment (or globalize) Object
    // to the correct localizer.
    const [trainings, setTrainings] = useState([]);


    const localizer = momentLocalizer(moment);
    
    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(responseData => setTrainings(responseData.content/*{
            start: responseData.content.date,
            end: responseData.content.date,
            title: responseData.content.activity
        }*/));
    }

    // aika luultavasti muutettava eri muotoon
    
    const calendarEvents = trainings.map(training => ({
        start: training.date,
        end: training.date,
        title: training.activity
    }));
    

    useEffect(() => {
        fetchTrainings()
    }, []);
    
    return (
        <div>
            <Calendar 
                localizer={localizer}
                events={calendarEvents}
             />
        </div>

    );
}

export default TrainingCalendar;