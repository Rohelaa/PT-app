import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Moment from "moment";

const ShowTraining = (props) => {

    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        date: Moment(props.training.date).format('MMMM Do YYYY, h:mm:ss a'),
        duration: props.training.duration,
        activity: props.training.activity,
        content: props.training.content
    });

    const handleClickOpen = () => {
        setOpen(true);
        console.log(props.training);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteTraining = () => {
        fetch(props.training.links[0].href, {
            method: 'DELETE'
        })
        .catch(err => console.error(err));
        handleClose();
        
    }

    return (
        <div>
            <p variant="outlined" color="primary" onClick={handleClickOpen}>
                {/* näyttää harjoituksen nimen */}
                {props.training.activity}
            </p>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Date"
                    type="text"
                    defaultValue={training.date}
                    fullWidth
                    InputProps={
                        {
                            readOnly: true
                        }
                    }
                />
                <TextField
                    margin="dense"
                    label="Duration"
                    type="text"
                    defaultValue={training.duration}
                    fullWidth
                    InputProps={
                        {
                            readOnly: true
                        }
                    }
                />
                <TextField
                    margin="dense"
                    label="Activity"
                    type="text"
                    defaultValue={training.activity}
                    fullWidth
                    InputProps={
                        {
                            readOnly: true
                        }
                    }
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={deleteTraining} color="primary">
                    Delete
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ShowTraining;