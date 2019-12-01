import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import TrainingCalendar from './TrainingCalendar';
import TrainingList from './TrainingList';

const Navigation = () => {

    return ( 
        <BrowserRouter>
            <div>
                <Link to="/trainingList">Trainings</Link>{' '}
                <Link to="/trainingCalendar">Training Calendar</Link>
                <Switch>
                    <Route path="/trainingList" component={TrainingList} />
                    <Route path="/trainingCalendar" component={TrainingCalendar} />
                </Switch>
            </div>
        </BrowserRouter>
     );
}
 
export default Navigation;