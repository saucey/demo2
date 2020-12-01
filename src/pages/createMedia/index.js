import React, { useState, useEffect, useRef, createRef, useMemo } from 'react';
import { makeStyles, fade, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form'

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

import AudienceInputs from '../../components/AudienceInputs'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: '40px'
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
    }
}));


export default function CreateMedia() {
    const { register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })

    const [value, setValue] = useState('female');
    const [channel, setChannel] = useState('television')
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [audience, setAudience] = useState({
        circulation: '',
        viewer: '',
        catchment: '',
        listeners: '',
        readership: '',
        impressions: '',
        browsers: '',
        visibilty: '',
        engagement: '',
    })

    const classes = useStyles();


    useEffect(() => {
    }, [channel, setChannel])

    const selectImg = () => {

    }

    const onSubmit = data => {
        console.log(data, 'the data!!!!!!!!!!!!!!!!!!!!!');
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
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
                                    <h2 className={classes.formTitle}>Channel</h2>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup aria-label="gender" name="channel" value={channel} onChange={(event) => setChannel(event.target.value)}>
                                            <FormControlLabel value="television" control={<Radio />} label="Television" />
                                            <FormControlLabel value="radio" control={<Radio />} label="Radio" />
                                            <FormControlLabel value="print" control={<Radio />} label="Print" />
                                            <FormControlLabel value="digital" control={<Radio />} label="Digital/Onine" />
                                            <FormControlLabel value="ooh" control={<Radio />} label="OOH" />
                                            <FormControlLabel value="social" control={<Radio />} label="Social" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item md={4} sm={6} xs={12}>
                                    <h2 className={classes.formTitle}>Title</h2>
                                    <TextField
                                        value={sex}
                                        className={classes.customfield}
                                        onChange={(e) => setSex(e.target.value)}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="sex"
                                        label="sex"
                                        name="sex"
                                        // autoComplete="name"
                                        inputRef={register({ required: true })}
                                        error={errors.sex?.type === 'required'}
                                    />
                                    <TextField
                                        value={name}
                                        className={classes.customfield}
                                        onChange={(e) => setName(e.target.value)}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        name="name"
                                        // autoComplete="name"
                                        inputRef={register({ required: true })}
                                        error={errors.name?.type === 'required'}
                                    />

                                    <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')}>
                                        <InputLabel id="demo-simple-select-outlined-label">Frequency</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={channel}
                                            onChange={(event) => channelOnChange(event)}
                                            label="Feed Type"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={'top-albums'}>Top Albums</MenuItem>
                                            <MenuItem value={'top-songs'}>Top Songs</MenuItem>
                                            <MenuItem value={'hot-tracks'}>Hot Tracks</MenuItem>
                                            <MenuItem value={'new-releases'}>New Releases</MenuItem>
                                            <MenuItem value={'coming-soon'}>Coming Soon</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <Grid container>
                                        <TextareaAutosize className={classes.textarea} aria-label="minimum height" rowsMin={10} placeholder="Description" />
                                    </Grid>
                                </Grid>
                                <Grid item md={3} sm={6} xs={12}>
                                    <h2 className={classes.formTitle}>Audience (print)</h2>

                                    {/print|television/.test(channel) && <TextField variant="outlined" margin="normal" label={'Circulation'} fullWidth className={classes.customfield} value={audience['circulation']} name="circulation" error={errors.circulation?.type === 'required'} inputRef={register({ required: true })} onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })} placeholder={'Circulation'} />}
                                    {/television/.test(channel) && <TextField variant="outlined" margin="normal" label={'Viewer'} fullWidth className={classes.customfield} value={audience['viewer']} name="viewer" error={errors.viewer?.type === 'required'} inputRef={register({ required: true })} onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })} placeholder={'Viewer'} />}
                                    {/radio|television/.test(channel) && <TextField variant="outlined" margin="normal" label={'Catchment'} fullWidth className={classes.customfield} value={audience['catchment']} name="catchment" error={errors.catchment?.type === 'required'} inputRef={register({ required: true })} onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })} placeholder={'Catchment'} />}
                                    {/radio/.test(channel) && <TextField variant="outlined" margin="normal" label={'Listeners'} fullWidth className={classes.customfield} value={audience['listeners']} name="listeners" error={errors.listeners?.type === 'required'} inputRef={register({ required: true })} onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })} placeholder={'Listeners'} />}
                                    {/print/.test(channel) && <TextField variant="outlined" margin="normal" label={'Readership'} fullWidth className={classes.customfield} value={audience['readership']} name="readership" error={errors.readership?.type === 'required'} inputRef={register({ required: true })} onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })} placeholder={'Readership'} />}
                                    {/digital/.test(channel) && <TextField variant="outlined" margin="normal" label={'Impressions'} fullWidth className={classes.customfield} value={audience['impressions']} name="impressions" error={errors.impressions?.type === 'required'} inputRef={register({ required: true })} onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })} placeholder={'Impressions'} />}
                                    {/digital/.test(channel) && <TextField variant="outlined" margin="normal" label={'Browsers'} fullWidth className={classes.customfield} value={audience['browsers']} name="browsers" error={errors.browsers?.type === 'required'} inputRef={register({ required: true })} onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })} placeholder={'Browsers'} />}
                                    {/ooh/.test(channel) && <TextField variant="outlined" margin="normal" label={'Visibilty'} fullWidth className={classes.customfield} value={audience['visibilty']} name="visibilty" error={errors.visibilty?.type === 'required'} inputRef={register({ required: true })} onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })} placeholder={'Visibilty'} />}
                                    {/social/.test(channel) && <TextField variant="outlined" margin="normal" label={'Engagement'} fullWidth className={classes.customfield} value={audience['engagement']} name="engagement" error={errors.engagement?.type === 'required'} inputRef={register({ required: true })} onChange={(e) => setAudience({ ...audience, [e.target.name]: e.target.value })} placeholder={'engagement'} />}

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
            </Grid>
        </div>
    );
}