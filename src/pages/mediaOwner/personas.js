import React, { useState, useEffect, useRef, createRef, useMemo } from 'react';
import { makeStyles, fade, withTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Button
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
//Icon
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useForm } from 'react-hook-form'
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import IconButton from '@material-ui/core/IconButton'
import MainLayout from '../../layouts/newMainLayout'
import StepWrapper from './stepWrapper'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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
    nextButton: {
        marginLeft: 'auto',
        backgroundColor: "#1d8bf7",
        color: 'white',
        display: 'block',
        padding: '5px 40px',
        marginTop: '40px'
    },

}));

const Personas = () => {
    const location = useLocation();
    console.log(location, 'location')

    const dispatch = useDispatch()
    const history = useHistory()

    const classes = useStyles();
    const personas = useSelector((state) => state.personas);
    const personaSuccess = useSelector((state) => state.personaSuccess);
    const [personasList, setPersonasList] = useState([])
    const [personaInventories, setPersonaInventories] = useState([])


    console.log(personas, 'personas!!')
    useEffect(() => {
        if (personaSuccess !== true) {
            getPersonas();
            setPersonasList(personas)
        }
    }, [personas])

    const getPersonas = () => {
        dispatch({
            type: 'GET_PERSONAS',
        })
    }

    const goToAddPersona = () => {
        history.push('/media-owner/personas/create');
    }

    const goToAddInventory = () => {
        history.push('/media-owner/inventory', personaInventories);
    }

    const toggleSelectPersona = (id) => {

        const getIds = []
        const newcur = personasList.map(val => {
            if (val['_id'] === id) {
                val['selected'] = !val['selected'];
            }
            if (val['selected'] === true) {
                getIds.push(val)
            }
            return val
        })

        setPersonasList(newcur);
        setPersonaInventories(getIds)

    }

    return (
        <div>
            <StepWrapper step={1} />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item md={3} sm={3} xs={3}>
                            <Button onClick={() => goToAddPersona()} className={classes.addActionBtn} variant="outlined" color="primary">
                                <AddCircleOutlineIcon style={{ marginRight: '10px', color: '#a2e60f' }} />
                                    Create Persona
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        {personasList.length > 0 && personasList.map((val, index) => (
                            // Object.keys(val.persona).length > 0 &&
                            <Grid key={index} item md={3} sm={3} xs={3}>
                                <Paper>
                                    <div style={{ textAlign: 'center', padding: '40px 0px', position: 'relative' }}>
                                        <IconButton style={{
                                            position: 'absolute',
                                            top: '-10px',
                                            right: '-10px',
                                        }}
                                            onClick={() => toggleSelectPersona(val._id)}
                                            aria-label="open drawer">

                                            {val.selected ? <StarRoundedIcon style={{ fontSize: '1.5em', color: '#e96941' }} /> :
                                                <StarBorderRoundedIcon style={{ fontSize: '1.5em', color: 'rgb(233 231 238)' }} />}
                                        </IconButton>
                                        <div>
                                            <PersonPinIcon style={{ color: val.avatarColor, fontSize: '12em' }} />
                                        </div>
                                        <span style={{ color: '#0e82f4', fontSize: '1.2em', display: 'block', fontWeight: 'bold', marginBottom: '20px' }}>{val.about.name}</span>
                                        <Button className={classes.addActionBtn1} variant="outlined">
                                            Show Persona
                                            </Button>
                                    </div>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    {personaInventories.length > 0 && <Button onClick={goToAddInventory} className={classes.nextButton} type="submit">Next</Button>}
                </Grid>
            </Grid>
        </div>
    );
}
export default MainLayout(Personas)