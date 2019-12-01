import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import TrainingCalendar from './TrainingCalendar';
import TrainingList from "./TrainingList";
import CustomerList from './CustomerList';

const Navigation = () => {

    return ( 
        <BrowserRouter>
            <div>
                <Link to="/customerList">Customer List</Link>{' '}
                <Link to="/trainingList">Training List</Link>{' '}
                <Link to="/trainingCalendar">Training Calendar</Link>
                <Switch>
                    <Route path="/customerList" component={CustomerList} />
                    <Route path="/trainingList" component={TrainingList} />
                    <Route path="/trainingCalendar" component={TrainingCalendar} />
                </Switch>
            </div>
        </BrowserRouter>
     );
}
 
export default Navigation;