import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircle from '@material-ui/icons/AddCircle';

const AddTraining = (props) => {
    
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: '',
        duration: '',
        activity: '',
        customer: props.customer.links[0].href
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value});
    }

    const addTrainingToCustomer = () => {
        props.addTraining(training);
    }
  
    return (
      <div>
        <AddCircle onClick={handleClickOpen} />
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add a training</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="date"
              label="Date"
              type="date"
              fullWidth
              value={training.date}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              id="duration"
              name="duration"
              label="Duration"
              type="text"
              fullWidth
              value={training.duration}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              id="activity"
              name="activity"
              label="Activity"
              type="text"
              fullWidth
              value={training.activity}
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={addTrainingToCustomer} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      );
}
 
export default AddTraining;