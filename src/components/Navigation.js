import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import TrainingCalendar from './TrainingCalendar';

const Navigation = () => {

    return ( 
        <BrowserRouter>
            <div>
                <Link to="/trainingCalendar">Training Calendar</Link>{' '}
                <Route path="/trainingCalendar" component={TrainingCalendar} />
            </div>
        </BrowserRouter>
     );
}
 
export default Navigation;