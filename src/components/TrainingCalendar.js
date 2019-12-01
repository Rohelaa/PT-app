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


    useEffect(() => {
        fetchEventData();
    }, []);


    // toimii kalenterissa
    // päivänäkymä avautuu
    const events = [
        {
            start: new Date(2019, 11, 1, 10),
            end: new Date(2019, 11, 1, 12),
            title: 'Some event',
        },
        {
            start: new Date(2019, 11, 2, 13),
            end: new Date(2019, 11, 2, 13, 30),
            title: 'Some other event',
        },
    ];

    // ???
    // const ColoredDateCellWrapper = ({ children }) =>
    //     React.cloneElement(React.Children.only(children), {
    //         style: {
    //             backgroundColor: 'lightblue',
    //         },
    //     });

    
    
    var exampleDate2 = new Date().setTime(3534534534);
    console.log(exampleDate2)
    var exampleDate = new Date().toTimeString();
    console.log(exampleDate.toString());
    
    
    // aika luultavasti muutettava eri muotoon
    // luotaessa uudet Date-oliot, yksittäisen päivän tarkasteleminen onnistuu
    // lopetusaika ei vielä oikea
    
    const calendarEvents = trainings.map(training => ({
        start: new Date(training.date),
        end: new Date(training.date),
        title: training.activity
    }));
    
    
    
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
                // components={{ // ????
                //     timeSlotWrapper: ColoredDateCellWrapper,
                // }}
            />
        </div>

    );
}

export default TrainingCalendar;