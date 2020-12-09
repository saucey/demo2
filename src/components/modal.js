import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useLocation, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import culturalIntell from '../assets/Cultural-Intelligence.svg'
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none'
    },
    paper: {
        borderRadius: '30px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderColor: 'transparent',
        boxShadow: theme.shadows[5],
        padding: '20px 60px',
        textAlign: 'center',
        '&:focus': {
            outline: 'none',
        }
    },
    okBtn: {
        background: green[500],
        color: 'white',
        border: 'none',
        paddingLeft: '40px',
        paddingRight: '40px',
        margin: '20px 0 0px',
        '&:hover': {
            border: 'none',
            background: green[100],
        }
    }
}));

export default function ModalAction({ isModalOpen, redirect, message }) {


    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory();

    React.useEffect(() => {
        setOpen(isModalOpen)
    }, [isModalOpen])

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        history.push(redirect)
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                react-transition-group
      </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>

                        <img style={{ width: '200px' }} src={culturalIntell} />
                        <h2 style={{ color: '#1d8bf7', width: '200px', fontWeight: '500', fontSize: '1.2em' }} id="transition-modal-title">{message}</h2>
                        <Button onClick={handleClose} className={classes.okBtn} variant="outlined" color="primary">ok</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}