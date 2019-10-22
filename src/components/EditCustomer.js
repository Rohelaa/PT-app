import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditCustomer = (props) => {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (event) => {
        // esim. 'firstname': 'Make'
        setCustomer({...customer, [event.target.name]: event.target.value});
        console.log(customer);
    }

    const editCustomer = () => {
        props.editCustomer(props.link, customer);
    }


    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit customers information</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstname"
                    label="First name"
                    fullWidth
                    onChange={(e) => handleChange(e)} // ????
                    value={customer.firstname}
                    name="firstname"

                />
                <TextField
                   
                    margin="dense"
                    id="lastname"
                    label="Last name"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.lastname}
                    name="lastname"
                />
                <TextField
                  
                    margin="dense"
                    id="streetaddress"
                    label="Street address"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.streetaddress}
                    name="streetaddress"
                />
                <TextField
                  
                    margin="dense"
                    id="postcode"
                    label="Post Code"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.postcode}
                    name="postcode"
                />
                <TextField
                  
                    margin="dense"
                    id="city"
                    label="City"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.city}
                    name="city"
                />
                <TextField
                   
                    margin="dense"
                    id="email"
                    label="Email"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.email}
                    name="email"
                />
                <TextField
                    
                    margin="dense"
                    id="phone"
                    label="Phone"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.phone}
                    name="phone"
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={editCustomer} color="primary">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
      );
}
 
 
export default EditCustomer;