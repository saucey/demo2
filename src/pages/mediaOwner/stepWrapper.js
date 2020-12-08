import React, { useState, useEffect, useRef, createRef, useMemo } from 'react';
import { makeStyles, fade, withTheme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useForm, Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'
//Radio
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//Text field
import TextField from '@material-ui/core/TextField';

// Select
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

//Textarea
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

//Icon
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

//Button
import Button from '@material-ui/core/Button'

// Stepper
import Stepper from '@material-ui/core/Stepper';
import StepConnector from '@material-ui/core/StepConnector';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import clsx from 'clsx';

//Add Persona
import AddPersona from '../addPersona/index'
import PersonaOverview from '../personaOverview/index'
import { useDispatch } from 'react-redux'
import MainLayout from '../../layouts/newMainLayout'

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundColor: '#0e82f4'
        },
    },
    completed: {
        '& $line': {
            backgroundColor: '#0e82f4'
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);


const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#0e82f4'
        // backgroundImage:'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundColor: '#0e82f4'
        // backgroundImage:
        // 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

const getSteps = () => {
    return ['ABOUT', 'VIEW/ADD PERSONAS', 'ADD INVENTORY', 'CONFIRM'];
}

const useStyles = makeStyles((theme) => ({
    stepperWrapper: {
        paddingLeft: 0,
        paddingRight: 0,
        background: 'none'
    },
    root: {
        flexGrow: 1,
        padding: '60px'
    },
    pageTitle: {
        color: '#e96941',
        fontWeight: 'normal'
    },
    formTitle: {
        color: "#1d8bf7",
        fontWeight: 'normal'
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    textarea: {
        width: '100%',
        backgroundColor: '#f4f4f8',
        marginTop: '8px',
        borderRadius: '5px',
        padding: '14px'
    },
    customfield: {
        paddingTop: '0',
        marginTop: '0',
        backgroundColor: '#f4f4f8',
        borderRadius: '5px',
        '& .MuiInputLabel-root.Mui-shrink': {
            color: 'red'
        },
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
        '& .MuiOutlinedInput-input': {
            padding: '8.5px 14px',
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: '5px',

            '& fieldset': {
                borderColor: 'grey',
            },
            '&:hover fieldset': {
            },
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: 'grey'
        },
        "& .MuiInputLabel-root.Mui-focused": {
            color: 'grey'
        },
        "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            margin: '0!important'
        },
        "& .MuiInputLabel-root.MuiInputLabel-animated": {
            marginTop: '-8px'
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: 'grey'
        }
    },
    selectImgBtn: {
        marginTop: '10px',
        display: 'block',
        margin: '0 auto',
        color: '#ba54f5',
        border: '1px solid #ba54f5',
        padding: '5px 30px'
    },
    nextButton: {
        marginLeft: 'auto',
        backgroundColor: "#1d8bf7",
        color: 'white',
        display: 'block',
        padding: '5px 40px'
    },
    radioControl: {
    },
    checkNRadio: {
        '& .MuiFormLabel-root': {
            color: '#1d8bf7',
            marginBottom: '8px'
        },
    }
}));


const StepWrapper = ({ step }) => {

    const { register, handleSubmit, errors, control } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
    const dispatch = useDispatch()

    const [activeStep, setActiveStep] = useState(step);
    const steps = getSteps();
    const [channel, setChannel] = useState('radio')
    const [name, setName] = useState('')
    const [frequency, setFrequency] = useState('')
    const [circulation, setCirculation] = useState('')
    const [viewer, setViewer] = useState('')
    const [catchment, setCatchment] = useState('')
    const [listeners, setListeners] = useState('')
    const [readership, setReadership] = useState('')
    const [impressions, setImpressions] = useState('')
    const [browsers, setBrowsers] = useState('')
    const [visibilty, setVisibilty] = useState('')
    const [engagement, setEngagement] = useState('')

    const personaSaved = useSelector((state) => state.personaSaved);

    const classes = useStyles();

    useEffect(() => {
    }, [channel, personaSaved])


    const selectImg = () => {

    }

    const onSubmit = createMedia => {

        createMedia.profile.channel.name = channel

        createMedia.persona = {}

        dispatch({
            type: 'SEND_MEDIA_CREATE',
            createMedia
        })

        setActiveStep((prevActiveStep) => prevActiveStep + 1);

    }

    const goToPersonaOverview = () => {
    }

    return (
        <div>
            <Stepper className={classes.stepperWrapper} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div >
    );
}

export default StepWrapper