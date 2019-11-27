import BigCalendar from "react-big-calendar";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const TrainingCalendar = () => {

    // Setup the localizer by providing the moment (or globalize) Object
    // to the correct localizer.

    const localizer = BigCalendar.momentLocalizer(moment);
    return (
        <div>
            <BigCalendar localizer={localizer} />
        </div>

    );
}

export default TrainingCalendar;