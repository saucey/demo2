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
import MainLayout from '../../layouts/mainLayout'

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundColor: '#0e82f4'
            // backgroundImage:
            // 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundColor: '#0e82f4'
            // backgroundImage:
            // 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
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
    return ['ABOUT', 'ADD PERSONA', 'ADD INVENTORY', 'CONFIRM'];
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
            // "& .Mui-shrink": {
            // 	color: 'red'
            // },
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
        // border: '1px solid red'
    },
    checkNRadio: {
        '& .MuiFormLabel-root': {
            color: '#1d8bf7',
            marginBottom: '8px'
        },
    }
}));


const CreateMedia = () => {
    const { register, handleSubmit, errors, control } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
    const dispatch = useDispatch()

    const [activeStep, setActiveStep] = useState(0);
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
        if (personaSaved) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
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
        <div className={classes.root}>
            <Stepper className={classes.stepperWrapper} alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            { activeStep === 0 &&
                < Grid container spacing={3}>
                    <Grid item xs={12}>
                        <form
                            className={classes.form}
                            // ref={useRef()  }
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Paper className={classes.paper}>
                                <h1 className={classes.pageTitle}>Create Media</h1>
                                <Grid container spacing={3}>
                                    <Grid item md={2} sm={6} xs={12}>
                                        <FormControl variant="outlined" className={classes.checkNRadio} style={{ minWidth: 300 }} error={Boolean(errors.channel)}>
                                            <FormLabel component="legend">Channel</FormLabel>
                                            <Controller
                                                control={control}
                                                name={`profile[channel][name]`}
                                                render={({ onChange, onBlur, value, name, ref }) => (
                                                    <RadioGroup
                                                        aria-label="channel"
                                                        value={channel}
                                                        onChange={e => setChannel(e.target.value)}
                                                    >
                                                        <FormControlLabel value="television" control={<Radio />} label="Television" />
                                                        <FormControlLabel value="radio" control={<Radio />} label="Radio" />
                                                        <FormControlLabel value="print" control={<Radio />} label="Print" />
                                                        <FormControlLabel value="digital" control={<Radio />} label="Digital/Onine" />
                                                        <FormControlLabel value="ooh" control={<Radio />} label="OOH" />
                                                        <FormControlLabel value="social" control={<Radio />} label="Social" />
                                                    </RadioGroup>
                                                )}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={4} sm={6} xs={12}>
                                        <h2 className={classes.formTitle}>Title</h2>
                                        <TextField
                                            value={name}
                                            className={classes.customfield}
                                            onChange={(e) => setName(e.target.value)}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="profile[title][name]"
                                            inputRef={register({ required: true })}
                                            error={errors.name?.type === 'required'}
                                        />
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')}>
                                            <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
                                            <Controller
                                                as={
                                                    <Select>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'Web Designer'}>one</MenuItem>
                                                        <MenuItem value={'CAD architect'}>two</MenuItem>
                                                        <MenuItem value={'Teacher'}>three</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Frequency"
                                                name="profile[title][frequency]"
                                                control={control}
                                                onChange={(event) => setFrequence(event.target.value)}
                                                defaultValue={frequency}
                                            />
                                        </FormControl>
                                        <Grid container>
                                            {/* <FormControl variant="outlined" error={Boolean(errors.description)} fullWidth> */}
                                            <Controller
                                                as={
                                                    <TextareaAutosize />
                                                }
                                                name="profile[title][description]"
                                                // rules={{ required: "this is required" }}
                                                control={control}
                                                onChange={(event) => setDescription(event.target.value)}
                                                defaultValue={''}
                                                className={classes.textarea} aria-label="minimum height" rowsMin={10} placeholder="Description"
                                            />
                                            {/* </FormControl> */}
                                        </Grid>
                                    </Grid>
                                    <Grid item md={3} sm={6} xs={12}>
                                        <h2 className={classes.formTitle}>Audience (print)</h2>
                                        {/print|television/.test(channel) && <TextField variant="outlined" margin="normal" label={'Circulation'} fullWidth className={classes.customfield} value={circulation} name="profile[channel][audience][circulation]" error={errors.circulation?.type === 'required'} inputRef={register()} onChange={(e) => setCirculation(e.target.value)} placeholder={'Circulation'} />}
                                        {/television/.test(channel) && <TextField variant="outlined" margin="normal" label={'Viewer'} fullWidth className={classes.customfield} value={viewer} name="profile[channel][audience][viewer]" error={errors.viewer?.type === 'required'} inputRef={register()} onChange={(e) => setViewer(e.target.value)} placeholder={'Viewer'} />}
                                        {/radio|television/.test(channel) && <TextField variant="outlined" margin="normal" label={'Catchment'} fullWidth className={classes.customfield} value={catchment} name="profile[channel][audience][catchment]" error={errors.catchment?.type === 'required'} inputRef={register()} onChange={(e) => setCatchment(e.target.value)} placeholder={'Catchment'} />}
                                        {/radio/.test(channel) && <TextField variant="outlined" margin="normal" label={'Listeners'} fullWidth className={classes.customfield} value={listeners} name="profile[channel][audience][listeners]" error={errors.listeners?.type === 'required'} inputRef={register()} onChange={(e) => setListeners(e.target.value)} placeholder={'Listeners'} />}
                                        {/print/.test(channel) && <TextField variant="outlined" margin="normal" label={'Readership'} fullWidth className={classes.customfield} value={readership} name="profile[channel][audience][readership]" error={errors.readership?.type === 'required'} inputRef={register()} onChange={(e) => setReadership(e.target.value)} placeholder={'Readership'} />}
                                        {/digital/.test(channel) && <TextField variant="outlined" margin="normal" label={'Impressions'} fullWidth className={classes.customfield} value={impressions} name="profile[channel][audience][impressions]" error={errors.impressions?.type === 'required'} inputRef={register()} onChange={(e) => setImpressions(e.target.value)} placeholder={'Impressions'} />}
                                        {/digital/.test(channel) && <TextField variant="outlined" margin="normal" label={'Browsers'} fullWidth className={classes.customfield} value={browsers} name="profile[channel][audience][browsers]" error={errors.browsers?.type === 'required'} inputRef={register()} onChange={(e) => setBrowsers(e.target.value)} placeholder={'Browsers'} />}
                                        {/ooh/.test(channel) && <TextField variant="outlined" margin="normal" label={'Visibilty'} fullWidth className={classes.customfield} value={visibilty} name="profile[channel][audience][visibilty]" error={errors.visibilty?.type === 'required'} inputRef={register()} onChange={(e) => setVisibilty(e.target.value)} placeholder={'Visibilty'} />}
                                        {/social/.test(channel) && <TextField variant="outlined" margin="normal" label={'Engagement'} fullWidth className={classes.customfield} value={engagement} name="profile[channel][audience][engagement]" error={errors.engagement?.type === 'required'} inputRef={register()} onChange={(e) => setEngagement(e.target.value)} placeholder={'engagement'} />}
                                    </Grid>
                                    <Grid style={{ textAlign: 'center' }} item md={3} sm={6} xs={12}>
                                        <h2 className={classes.formTitle}>Cover / Thumb</h2>
                                        <CloudUploadIcon style={{ color: '#ba54f5', fontSize: '3em' }} />
                                        <Button className={classes.selectImgBtn} onClick={selectImg}>SELECT IMAGE</Button>
                                    </Grid>
                                </Grid>
                                <Button className={classes.nextButton} type="submit">Next</Button>
                            </Paper>
                        </form>
                    </Grid>
                </Grid>}
            {
                activeStep === 1 &&
                <div>
                    <AddPersona goToPersonaOverview={goToPersonaOverview} />
                </div>
            }
            {
                activeStep === 2 &&
                <PersonaOverview />
            }
        </div >
    );
}

export default MainLayout(CreateMedia)