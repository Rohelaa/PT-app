import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import TrainingCalendar from './TrainingCalendar';
import TrainingList from "./TrainingList";
import CustomerList from './CustomerList';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/customerList">Customer List</Link>{' '}</MenuItem>
        <MenuItem onClick={handleClose}>Trainings</MenuItem>
        <MenuItem onClick={handleClose}>Training calendar</MenuItem>
      </Menu>
    </div>
  );
}