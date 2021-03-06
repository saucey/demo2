import React, { useState, useEffect, useRef, createRef, useMemo } from 'react';
import { makeStyles, fade, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Button
import Button from '@material-ui/core/Button'

//Icon
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ControlPointTwoToneIcon from '@material-ui/icons/ControlPointTwoTone';

//TextField
import TextField from '@material-ui/core/TextField'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';
import MainLayout from '../../layouts/newMainLayout'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    addActionBtn: {
        padding: '10px',
        backgroundColor: "#136cc3",
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '23px',
        textTransform: "none",
        '&:hover': {
            background: "#136cc3",
        }
    },
    customfield: {
        paddingTop: '0',
        marginTop: '0',
        '& .MuiInputLabel-root.Mui-shrink': {
            color: 'red'
        },
        '& .MuiOutlinedInput-input': {
            padding: '8.5px 14px',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: '0',

            '& fieldset': {
                borderColor: 'grey',
            },
            '&:hover fieldset': {
            },
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: 'green'
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: 'green'
        },
        "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            margin: '0!important'
        },
        "& .MuiInputLabel-root.MuiInputLabel-animated": {
            marginTop: '-8px'
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: 'green'
        }
    },

}));

const MediaOwner = () => {

    const searchInput = useRef(null);
    const inputRef = useRef([]);
    const history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState([]);
    const { control, register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })

    useEffect(() => {
    }, [])

    const createMedia = () => {
        history.push('/media-owner/about');
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button onClick={() => createMedia()} className={classes.addActionBtn} variant="outlined" color="primary">
                        <AddCircleOutlineIcon style={{ marginRight: '10px', color: '#a2e60f' }} />
                        Create Media
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default MainLayout(MediaOwner)