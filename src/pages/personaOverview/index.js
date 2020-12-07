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

import AddPersona from '../addPersona/index'
import { useDispatch } from 'react-redux'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import IconButton from '@material-ui/core/IconButton'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    addActionBtn1: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#0e82f4',
        '&:hover': {
            backgroundColor: 'white',
            color: '#0e82f4',
        }
    },
    addActionBtn: {
        padding: '10px',
        paddingRight: '20px',
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

export default function PersonaOverview({ setCreatePersona }) {

    const searchInput = useRef(null);
    const inputRef = useRef([]);
    const dispatch = useDispatch()

    const classes = useStyles();

    const { control, register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
    const createMedia = useSelector((state) => state.createMedia);
    const [selected, setSelected] = useState('')

    const currentCreateMedia = [createMedia]

    const currentCreateMediaTest = [
        {
            persona: {
                id: 1,
                about: {
                    name: 'Mag1'
                }
            }
        },
        {
            persona: {
                id: 2,
                about: {
                    name: 'Mag2'
                }
            }
        },
        {
            persona: {
                id: 3,
                about: {
                    name: 'Mag3'
                }
            }
        }
    ]

    useEffect(() => {
    }, [])

    const handleChange = (event) => {
        console.log(event, 'the event')
    };

    const goToCreatePersona = () => {
        dispatch({
            type: 'SET_CREATED_PERSONA',
            setCreatePersona: true,
        })
    }

    const toggleSelectPersona = () => {
        setSelected(!selected)
    }

    return (
        <div className={classes.root}>

            {setCreatePersona ? <AddPersona /> :
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item md={3} sm={3} xs={3}>
                                <Button onClick={() => goToCreatePersona()} className={classes.addActionBtn} variant="outlined" color="primary">
                                    <AddCircleOutlineIcon style={{ marginRight: '10px', color: '#a2e60f' }} />
                                    Create Persona
                            </Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            {currentCreateMediaTest.length > 0 && currentCreateMediaTest.map((val, index) => (
                                Object.keys(val.persona).length > 0 &&
                                <Grid item md={3} sm={3} xs={3}>
                                    <Paper key={index}>
                                        <div style={{ textAlign: 'center', padding: '40px 0px', position: 'relative' }}>
                                            <IconButton style={{
                                                position: 'absolute',
                                                top: '-10px',
                                                right: '-10px',
                                            }}
                                                onClick={toggleSelectPersona()}
                                                aria-label="open drawer">

                                                {selected ? <StarRoundedIcon style={{ fontSize: '1.5em', color: '#e96941' }} /> :
                                                    <StarBorderRoundedIcon style={{ fontSize: '1.5em', color: 'rgb(233 231 238)' }} />}
                                            </IconButton>
                                            <div>
                                                <PersonPinIcon style={{ fontSize: '12em' }} />
                                            </div>
                                            <span style={{ color: '#0e82f4', fontSize: '1.2em', display: 'block', fontWeight: 'bold', marginBottom: '20px' }}>{val.persona.about.name}</span>
                                            <Button className={classes.addActionBtn1} variant="outlined">
                                                Show Persona
                                            </Button>
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>}

        </div>
    );
}