import React, { useState, useEffect } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
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
        '&textarea': {
            border: '1px solid red'
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
    }
}));

export default function CreateMedia() {
    const { register, handleSubmit, errors } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })

    const [value, setValue] = useState('female');
    const [channel, setChannel] = useState('')

    const [circulation, setCirculation] = useState('')
    const [readership, setReadership] = useState('')
    const [catchment, setCatchment] = useState('')
    const [coverPrice, setCoverPrice] = useState('')

    const classes = useStyles();

    useEffect(() => {
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const selectImg = () => {

    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <h1 className={classes.pageTitle}>Create Media</h1>
                        <Grid container spacing={3}>
                            <Grid item md={2} sm={6} xs={12}>
                                <h2 className={classes.formTitle}>Channel</h2>
                                <FormControl component="fieldset">
                                    {/* <FormLabel component="legend">Gender</FormLabel> */}
                                    <RadioGroup aria-label="gender" name="television" value={value} onChange={handleChange}>
                                        <FormControlLabel value="television" control={<Radio />} label="Television" />
                                        <FormControlLabel value="radio" control={<Radio />} label="Radio" />
                                        <FormControlLabel value="print" control={<Radio />} label="Print" />
                                        <FormControlLabel value="digital-online" control={<Radio />} label="Digital/Onine" />
                                        <FormControlLabel value="ooh" control={<Radio />} label="OOH" />
                                        <FormControlLabel value="social" control={<Radio />} label="Social" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} sm={6} xs={12}>
                                <h2 className={classes.formTitle}>Title</h2>
                                <TextField
                                    value={channel}
                                    className={classes.customfield}
                                    onChange={(e) => setChannel(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    inputRef={register({ required: true })}
                                    error={errors.channel?.type === 'required'}
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

                                <TextField
                                    value={circulation}
                                    className={classes.customfield}
                                    onChange={(e) => setChannel(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="circulation"
                                    label="Circulation"
                                    name="circulation"
                                    autoComplete="circulation"
                                    autoFocus
                                    inputRef={register({ required: true })}
                                    error={errors.circulation?.type === 'required'}
                                />
                                <TextField
                                    value={readership}
                                    className={classes.customfield}
                                    onChange={(e) => setChannel(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="readership"
                                    label="Readership"
                                    name="readership"
                                    autoComplete="readership"
                                    autoFocus
                                    inputRef={register({ required: true })}
                                    error={errors.readership?.type === 'required'}
                                />
                                <TextField
                                    value={catchment}
                                    className={classes.customfield}
                                    onChange={(e) => setChannel(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="catchment"
                                    label="Catchment"
                                    name="catchment"
                                    autoComplete="catchment"
                                    autoFocus
                                    inputRef={register({ required: true })}
                                    error={errors.catchment?.type === 'required'}
                                />
                                <TextField
                                    value={coverPrice}
                                    className={classes.customfield}
                                    onChange={(e) => setChannel(e.target.value)}
                                    variant="outlined"
                                    margin="normal"
                                    fullWidth
                                    id="coverPrice"
                                    label="Cover Price"
                                    name="coverPrice"
                                    autoComplete="coverPrice"
                                    autoFocus
                                    inputRef={register({ required: true })}
                                    error={errors.coverPrice?.type === 'required'}
                                />
                            </Grid>
                            <Grid style={{ textAlign: 'center' }} item md={3} sm={6} xs={12}>
                                <h2 className={classes.formTitle}>Cover / Thumb</h2>
                                <CloudUploadIcon style={{ color: '#ba54f5', fontSize: '3em' }} />
                                <Button className={classes.selectImgBtn} onClick={selectImg}>SELECT IMAGE</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}