import { Calendar, momentLocalizer, Views} from "react-big-calendar";
import React, { useState, useEffect } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const TrainingCalendar = () => {

    const [trainings, setTrainings] = useState([]);

    const fetchEventData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(resData => setTrainings(resData.content))
        .catch(error => console.error(error));
    }

    // toimii
    // consolesta löytyy Calendar-komponentista propsina lista

    const calendarEvents = trainings.map(training => ({
        start: training.date, 
        end: training.date, 
        title: training.activity
    }));


    useEffect(() => {
        fetchEventData();
    }, []);

    const ColoredDateCellWrapper = ({ children }) =>
        React.cloneElement(React.Children.only(children), {
            style: {
                backgroundColor: 'lightblue',
            },
        });

    // Setup the localizer by providing the moment (or globalize) Object
    // to the correct localizer.

    const localizer = momentLocalizer(moment);

    let allViews = Object.keys(Views).map(k => Views[k]);

    return (
        <div>
            <Calendar 
                localizer={localizer}
                events={calendarEvents}
                views={allViews}
                startAccessor="start"
                endAccessor="end"
                showMultiDayTimes // ???
                style={{height: 500}}
                components={{ // ????
                    timeSlotWrapper: ColoredDateCellWrapper,
                }}
            />
        </div>

    );
}

export default TrainingCalendar;