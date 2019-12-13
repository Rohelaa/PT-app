import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddCustomer = (props) => {

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
        setCustomer({...customer, [event.target.name]: event.target.value});
        console.log(customer);
    }

    const AddCustomer = () => {
        props.saveCustomer(customer);
    }


    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add Customer
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a customer</DialogTitle>
                <DialogContent>
                {/* <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText> */}
                <TextField
                    autoFocus
                    
                    margin="dense"
                    id="firstname"
                    label="First name"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.firstName}
                    name="firstname"

                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="lastname"
                    label="Last name"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.lastName}
                    name="lastname"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="streetaddress"
                    label="Street address"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.streetAddress}
                    name="streetaddress"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="postcode"
                    label="Post Code"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.postCode}
                    name="postcode"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="city"
                    label="City"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.city}
                    name="city"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    fullWidth
                    onChange={(e) => handleChange(e)}
                    value={customer.email}
                    name="email"
                />
                <TextField
                    autoFocus
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
                <Button onClick={AddCustomer} color="primary">
                    Add
                </Button>
                </DialogActions>
            </Dialog>
        </div>
      );
}
 
export default AddCustomer;