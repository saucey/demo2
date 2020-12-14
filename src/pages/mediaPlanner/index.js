import React, { useState, useEffect, useRef, createRef, useMemo } from 'react';
import { makeStyles, fade, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Button
import Button from '@material-ui/core/Button'

//Icon
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { useForm } from 'react-hook-form'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '40px'
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

}));

export default function MediaPlanner() {

    const searchInput = useRef(null);
    const inputRef = useRef([]);

    const classes = useStyles();
    const [email, setEmail] = useState([]);
    const { control, register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })

    useEffect(() => {
    }, [])

    const handleChange = (event) => {
        console.log(event, 'the event')
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Button className={classes.addActionBtn} variant="outlined" color="primary">
                        <AddCircleOutlineIcon style={{ marginRight: '10px', color: '#a2e60f' }} />
                        Create Media Campaign
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}