import React, { useState, useEffect, useRef, createRef, useMemo } from 'react';
import { makeStyles, fade, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Button
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
//Icon
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ControlPointTwoToneIcon from '@material-ui/icons/ControlPointTwoTone';

//TextField
import TextField from '@material-ui/core/TextField'
import { useForm } from 'react-hook-form'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    addActionBtn: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#0e82f4',
        '&:hover': {
            backgroundColor: 'white',
            color: '#0e82f4',
        }
    }
}));

export default function PersonaOverview() {

    const searchInput = useRef(null);
    const inputRef = useRef([]);

    const classes = useStyles();

    const { control, register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
    const createMedia = useSelector((state) => state.createMedia);

    const currentCreateMedia = [createMedia]

    console.log(currentCreateMedia, 'currentCreateMedia');

    useEffect(() => {
    }, [])

    const handleChange = (event) => {
        console.log(event, 'the event')
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={3} sm={3} xs={3}>
                            {currentCreateMedia.map((val, index) => (
                                <Paper key={index}>
                                    <div style={{ textAlign: 'center', padding: '40px 0px' }}>
                                        <div>
                                            <PersonPinIcon style={{ fontSize: '12em' }} />
                                        </div>
                                        <span style={{ color: '#0e82f4', fontSize: '1.2em', display: 'block', fontWeight: 'bold', marginBottom: '20px' }}>{val.persona.about.name}</span>
                                        <Button className={classes.addActionBtn} variant="outlined">
                                            Show Persona
                                    </Button>
                                    </div>
                                </Paper>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}