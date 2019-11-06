<<<<<<< HEAD
=======

>>>>>>> b9bbc0c3951f0bf63e2aae9e3a1dc892c189dc11
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
<<<<<<< HEAD
import DialogTitle from '@material-ui/core/DialogTitle';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const AddTraining = () => {
    
=======
import DialogTitle from '@material-ui/core/DialogTitle'
import AddCircle from '@material-ui/icons/AddCircle';


const AddTraining = (props) => {

>>>>>>> b9bbc0c3951f0bf63e2aae9e3a1dc892c189dc11
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: '',
        duration: '',
        activity: ''
<<<<<<< HEAD
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeCursor = () => {
        document.body.style.cursor = 'pointer';
    }

    const handleChange = (event) => {
        setTraining({[event.target.name]: event.target.value});
    }

    return (
        <div>
            <AddCircleIcon onClick={handleClickOpen} color="primary" onMouseOver={changeCursor} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Date"
                    name="date"
                    value={training.date}
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Duration"
                    name="duration"
                    value={training.duration}
                    fullWidth
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Activity"
                    name="activity"
                    value={training.activity}
                    fullWidth
                    onChange={handleChange}
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

=======
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

    const addTrainingToCustomer = (newTraining) => {
        fetch(props.link, 
            {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newTraining)   
            });
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
            <Button onClick={() => addTrainingToCustomer(training)} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      );
}
 
>>>>>>> b9bbc0c3951f0bf63e2aae9e3a1dc892c189dc11
export default AddTraining;