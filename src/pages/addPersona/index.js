import React, { useState, useEffect, useRef, createRef, useMemo } from 'react';
import { makeStyles, fade, withTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useForm, Controller } from 'react-hook-form'

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
import { useSelector } from 'react-redux'

import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import AudienceInputs from '../../components/AudienceInputs'
import { useDispatch } from 'react-redux'


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


export default function addPersona() {
    const { register, handleSubmit, errors, control } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })

    const [value, setValue] = useState('female');
    const [channel, setChannel] = useState('television')
    const [age, setAge] = useState('')
    const [income, setIncome] = useState('')
    const [personality, setPersonality] = useState('')
    const [motivations, setMotivations] = useState()
    const [hobbiesInterests, setHobbiesInterests] = useState()
    const [housingUnits, setHousingUnits] = useState('')
    const [politicalBeliefs, setPoliticalBeliefs] = useState('')
    const [avatar, setAvatar] = useState('')
    const [educationLevel, setEducationLevel] = useState('')
    const [parentalEducationLevel, setParentalEducationLevel] = useState('')

    const [name, setName] = useState('')
    const [occupation, setOccupation] = useState([])
    const [status, setStatus] = useState('')
    const [gender, setGender] = useState('')
    const [religion, setReligion] = useState('')
    const [sexuality, setSexuality] = useState('')
    const [disability, setDisability] = useState([])
    const [bodySize, setBodySize] = useState('')
    const [nationality, setNationality] = useState('')
    const [ethnicity, setEthnicity] = useState('')
    const [description, setDescription] = useState('')

    const [checktest, setChecktest] = useState('')
    const [checkchange, setCheckchange] = useState(true)

    const dispatch = useDispatch()

    const [state, setState] = React.useState({
        gilad: false,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;

    const createMedia = useSelector((state) => state.createMedia);

    const classes = useStyles();

    useEffect(() => {
        console.log(createMedia, 'media states')
    }, [createMedia])

    const onSubmit = data => {

        dispatch({
            type: 'SEND_PERSONA',
            persona: data
        })
    }

    return (
        // <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <form
                    className={classes.form}
                    // ref={useRef()  }
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Paper className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item md={3} sm={3} xs={3}>
                                <FormControl component="fieldset" error={Boolean(errors.person && errors.person.age)}>
                                    <FormLabel component="legend">Age</FormLabel>
                                    <Controller
                                        as={
                                            <RadioGroup>
                                                <FormControlLabel value="-16" control={<Radio />} label="-16" />
                                                <FormControlLabel value="17-20" control={<Radio />} label="17-20" />
                                                <FormControlLabel value="21-25" control={<Radio />} label="21-25" />
                                                <FormControlLabel value="26-30" control={<Radio />} label="26-30" />
                                                <FormControlLabel value="31-40" control={<Radio />} label="31-40" />
                                                <FormControlLabel value="41-50" control={<Radio />} label="41-50" />
                                                <FormControlLabel value="51-60" control={<Radio />} label="51-60" />
                                                <FormControlLabel value="60+" control={<Radio />} label="60+" />
                                            </RadioGroup>
                                        }
                                        aria-label="Age"
                                        name="persona[age]"
                                        // rules={{ required: "this is required" }}
                                        control={control}
                                        // error={errors.person && errors.person.age?.type === 'required'}
                                        onChange={(event) => setAge(event.target.value)}
                                        defaultValue={age}
                                    />
                                </FormControl>
                                <hr />
                                <FormControl component="fieldset" error={Boolean(errors.income)}>
                                    <FormLabel component="legend">Income</FormLabel>
                                    <Controller
                                        as={
                                            <RadioGroup>
                                                <FormControlLabel value="less than 10k" control={<Radio />} label="less than 10k" />
                                                <FormControlLabel value="-14k-18k" control={<Radio />} label="-14k-18k" />
                                                <FormControlLabel value="-18k-22k" control={<Radio />} label="-18k-22k" />
                                                <FormControlLabel value="-22k-26k" control={<Radio />} label="-22k-26k" />
                                                <FormControlLabel value="-26-30k" control={<Radio />} label="-26-30k" />
                                                <FormControlLabel value="-30-36k" control={<Radio />} label="-30-36k" />
                                                <FormControlLabel value="-36-40k" control={<Radio />} label="-36-40k" />
                                                <FormControlLabel value="-40-46k" control={<Radio />} label="-40-46k" />
                                                <FormControlLabel value="-50-60k" control={<Radio />} label="-50-60k" />
                                                <FormControlLabel value="-70-80k" control={<Radio />} label="-70-80k" />
                                                <FormControlLabel value="-80-100k" control={<Radio />} label="-80-100k" />
                                                <FormControlLabel value="-100k+" control={<Radio />} label="-100k+" />
                                            </RadioGroup>
                                        }
                                        name="persona[income]"
                                        aria-label="Income"
                                        // rules={{ required: "this is required" }}
                                        control={control}
                                        error={errors.income?.type === 'required'}
                                        onChange={(event) => setIcome(event.target.value)}
                                        defaultValue={income}
                                    />
                                </FormControl>
                                <hr />
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Personality</FormLabel>
                                    {['Television', 'Intuitive', 'Thinking', 'Judging', 'Extrovert', 'Sensing', 'Feeling', 'Perceiving'].map(val => {
                                        return (
                                            <FormControlLabel
                                                label={val}
                                                control={<Controller
                                                    name={`persona[personality][${val}]`}
                                                    control={control}
                                                    defaultValue={false}
                                                    // rules={{ required: true }}
                                                    render={props =>
                                                        <Checkbox
                                                            onChange={e => props.onChange(e.target.checked)}
                                                            checked={props.value}
                                                        />
                                                    } // props contains: onChange, onBlur and value
                                                />}
                                            >
                                            </FormControlLabel>
                                        )
                                    })}
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={6} xs={6}>
                                <Grid container spacing={1}>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <h2 className={classes.formTitle}>Title</h2>
                                        <TextField
                                            value={name}
                                            className={classes.customfield}
                                            onChange={(e) => setName(e.target.value)}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="name"
                                            label="name"
                                            name="persona[about][name]"
                                            inputRef={register({ required: true })}
                                            error={errors.persona && errors.persona.about && errors.persona.about.name?.type === 'required'}
                                        />
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')} error={Boolean(errors.persona && errors.persona.about && errors.persona.about.occupation)}>
                                            <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
                                            <Controller
                                                as={
                                                    <Select multiple>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'Web Designer'}>Web Designer</MenuItem>
                                                        <MenuItem value={'CAD architect'}>CAD architect</MenuItem>
                                                        <MenuItem value={'Teacher'}>Teacher</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Occupation"
                                                name="persona[about][occupation]"
                                                // rules={{
                                                //     validate: value => Array.isArray(value) && value.length > 0
                                                // }}
                                                control={control}
                                                onChange={(event) => setOccupation(event.target.value)}
                                                defaultValue={occupation}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')} error={Boolean(errors.persona && errors.persona.about && errors.persona.about.status)}>
                                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                            <Controller
                                                as={
                                                    <Select>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'Single'}>Single</MenuItem>
                                                        <MenuItem value={'Married'}>Married</MenuItem>
                                                        <MenuItem value={'Divorced'}>Divorced</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Status"
                                                name="persona[about][status]"
                                                // rules={{ required: "this is required" }}
                                                control={control}
                                                onChange={(event) => setStatus(event.target.value)}
                                                defaultValue={status}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')} error={Boolean(errors.persona && errors.persona.about && errors.persona.about.religion)}>
                                            <InputLabel id="demo-simple-select-label">Religion</InputLabel>
                                            <Controller
                                                as={
                                                    <Select>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'Christianity'}>Christianity</MenuItem>
                                                        <MenuItem value={'Judaism'}>Judaism</MenuItem>
                                                        <MenuItem value={'Hinduism'}>Hinduism</MenuItem>
                                                        <MenuItem value={'Buddhism'}>Buddhism</MenuItem>
                                                        <MenuItem value={'Rastafarianism'}>Rastafarianism</MenuItem>
                                                        <MenuItem value={'Islam'}>Islam</MenuItem>
                                                        <MenuItem value={'Myth'}>Myth</MenuItem>
                                                        <MenuItem value={'Daoism'}>Daoism</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Religion"
                                                name="persona[about][religion]"
                                                // rules={{ required: "this is required" }}
                                                control={control}
                                                onChange={(event) => setReligion(event.target.value)}
                                                defaultValue={religion}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')} error={Boolean(errors.persona && errors.persona.about && errors.persona.about.gender)}>
                                            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                            <Controller
                                                as={
                                                    <Select>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'Male'}>Male</MenuItem>
                                                        <MenuItem value={'Female'}>Female</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Gender"
                                                name="persona[about][gender]"
                                                // rules={{ required: "this is required" }}
                                                control={control}
                                                onChange={(event) => setGender(event.target.value)}
                                                defaultValue={gender}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')} error={Boolean(errors.persona && errors.persona.about && errors.persona.about.sexuality)}>
                                            <InputLabel id="demo-simple-select-label">Sexuality</InputLabel>
                                            <Controller
                                                as={
                                                    <Select>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'Homosexual'}>Homosexual</MenuItem>
                                                        <MenuItem value={'Heterosexual'}>Heterosexual</MenuItem>
                                                        <MenuItem value={'Bisexual'}>Bisexual</MenuItem>
                                                        <MenuItem value={'Asexual'}>Asexual</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Sexuality"
                                                name="persona[about][sexuality]"
                                                // rules={{ required: "this is required" }}
                                                control={control}
                                                onChange={(event) => setSexuality(event.target.value)}
                                                defaultValue={sexuality}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')} error={Boolean(errors.persona && errors.persona.about && errors.persona.about.disability)}>
                                            <InputLabel id="demo-simple-select-label">Disability</InputLabel>
                                            <Controller
                                                as={
                                                    <Select multiple>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'None'}>None</MenuItem>
                                                        <MenuItem value={'Diabetes'}>Diabetes</MenuItem>
                                                        <MenuItem value={'Arthritis'}>Arthritis</MenuItem>
                                                        <MenuItem value={'Cancer'}>Cancer</MenuItem>
                                                        <MenuItem value={'Blindness'}>Blindness</MenuItem>
                                                        <MenuItem value={'Dwarfism'}>Dwarfism</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Disability"
                                                name="persona[about][disability]"
                                                // rules={{
                                                //     validate: value => Array.isArray(value) && value.length > 0
                                                // }}
                                                control={control}
                                                onChange={(event) => setDisability(event.target.value)}
                                                defaultValue={disability}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')} error={Boolean(errors.persona && errors.persona.about && errors.persona.about.bodySize)}>
                                            <InputLabel id="demo-simple-select-label">Body Size</InputLabel>
                                            <Controller
                                                as={
                                                    <Select>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'Athletic'}>Athletic</MenuItem>
                                                        <MenuItem value={'Slim'}>Slim</MenuItem>
                                                        <MenuItem value={'Large'}>Large</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Body Size"
                                                name="persona[about][bodySize]"
                                                // rules={{ required: "this is required" }}
                                                control={control}
                                                onChange={(event) => setBodySize(event.target.value)}
                                                defaultValue={bodySize}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')} error={Boolean(errors.nationality)}>
                                            <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
                                            <Controller
                                                as={
                                                    <Select>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'UK'}>UK</MenuItem>
                                                        <MenuItem value={'Asian'}>Asian</MenuItem>
                                                        <MenuItem value={'European'}>European</MenuItem>
                                                        <MenuItem value={'African'}>African</MenuItem>
                                                        <MenuItem value={'American'}>African</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Nationality"
                                                name="persona[about][nationality]"
                                                // rules={{ required: "this is required" }}
                                                control={control}
                                                onChange={(event) => setNationality(event.target.value)}
                                                defaultValue={nationality}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} sm={6} xs={6}>
                                        <FormControl fullWidth variant="outlined" className={[classes.selectControl, classes.customfield].join(' ')} error={Boolean(errors.ethnicity)}>
                                            <InputLabel id="demo-simple-select-label">Ethnicity</InputLabel>
                                            <Controller
                                                as={
                                                    <Select>
                                                        <MenuItem value={''}></MenuItem>
                                                        <MenuItem value={'Asian'}>Asian</MenuItem>
                                                        <MenuItem value={'Black'}>African</MenuItem>
                                                        <MenuItem value={'white'}>African</MenuItem>
                                                    </Select>
                                                }
                                                aria-label="Ethnicity"
                                                name="persona[about][ethnicity]"
                                                // rules={{ required: "this is required" }}
                                                control={control}
                                                onChange={(event) => setEthnicity(event.target.value)}
                                                defaultValue={ethnicity}
                                            />
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    {/* <FormControl variant="outlined" error={Boolean(errors.description)} fullWidth> */}
                                    <Controller
                                        as={
                                            <TextareaAutosize />
                                        }
                                        name="persona[about][description]"
                                        // rules={{ required: "this is required" }}
                                        control={control}
                                        error={errors.description?.type === 'required'}
                                        onChange={(event) => setDescription(event.target.value)}
                                        defaultValue={description}
                                        className={classes.textarea} aria-label="minimum height" rowsMin={10} placeholder="Description"
                                    />
                                    {/* </FormControl> */}
                                </Grid>
                                {/* <Grid> */}
                                <FormControl component="fieldset" error={Boolean(errors.educationLevel)}>
                                    <FormLabel component="legend">Education Level</FormLabel>
                                    <Controller
                                        as={
                                            <RadioGroup>
                                                <FormControlLabel value="television" control={<Radio />} label="Higher Education & professional/vocational equivalents" />
                                                <FormControlLabel value="radio" control={<Radio />} label="A levels, vocational level 3 and equivalents" />
                                                <FormControlLabel value="print" control={<Radio />} label="GCSE/O Level grade A*-C, vocational level 2 and equivalents" />
                                                <FormControlLabel value="digital" control={<Radio />} label="Qualifications at level 1 and below" />
                                                <FormControlLabel value="ooh" control={<Radio />} label="Other qualifications: level unknown (inclduing foreign qualifications)" />
                                                <FormControlLabel value="social" control={<Radio />} label="No qualifications" />
                                            </RadioGroup>
                                        }
                                        name="persona[educationLevel]"
                                        aria-label="Education Level"
                                        // rules={{ required: "this is required" }}
                                        control={control}
                                        error={errors.educationLevel?.type === 'required'}
                                        onChange={(event) => setEducationLevel(event.target.value)}
                                        defaultValue={educationLevel}
                                    />
                                </FormControl>
                                <hr />
                                <FormControl component="fieldset" error={Boolean(errors.parentalEducationLevel)}>
                                    <FormLabel component="legend">Parental Education Level</FormLabel>
                                    <Controller
                                        as={
                                            <RadioGroup>
                                                <FormControlLabel value="television" control={<Radio />} label="One parent with higher education" />
                                                <FormControlLabel value="print" control={<Radio />} label="More than one parent with higher education qualification" />
                                                <FormControlLabel value="ooh" control={<Radio />} label="No parents with higher education qualification" />
                                            </RadioGroup>
                                        }
                                        name="persona[parentalEducationLevel]"
                                        aria-label="Parental Education Level"
                                        // rules={{ required: "this is required" }}
                                        control={control}
                                        error={errors.parentalEducationLevel?.type === 'required'}
                                        onChange={(event) => setParentalEducationLevel(event.target.value)}
                                        defaultValue={parentalEducationLevel}
                                    />
                                </FormControl>
                                {/* <FormControl required error={error} component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Pick two</FormLabel>
                                    <FormGroup>
                                        <FormControlLabel
                                            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                                            label="Gilad Gray"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
                                            label="Jason Killian"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
                                            label="Antoine Llorca"
                                        />
                                    </FormGroup>
                                    <FormHelperText>You can display an error</FormHelperText>
                                </FormControl> */}
                                {/* </Grid> */}
                            </Grid>
                            <Grid item md={3} sm={3} xs={3}>
                                <FormControl component="fieldset" error={Boolean(errors.motivations)}>
                                    <FormLabel component="legend">Motivations</FormLabel>
                                    {['Price', 'Saves Time', 'Ease of Use', 'Creativity', 'Uniquencess'].map(val => {
                                        return (
                                            <FormControlLabel
                                                label={val}
                                                control={<Controller
                                                    name={`persona[motivations][${val}]`}
                                                    control={control}
                                                    defaultValue={false}
                                                    // rules={{ required: true }}
                                                    render={props =>
                                                        <Checkbox
                                                            onChange={e => props.onChange(e.target.checked)}
                                                            checked={props.value}
                                                        />
                                                    } // props contains: onChange, onBlur and value
                                                />}
                                            >
                                            </FormControlLabel>
                                        )
                                    })}
                                </FormControl>
                                <hr />
                                <FormControl component="fieldset" error={Boolean(errors.hobbiesInterests)}>
                                    <FormLabel component="legend">Hobbies & Interests</FormLabel>
                                    {['Television', 'Radio', 'Print', 'Digital/Onine', 'Cinema/Threatre', 'Art/Design', 'Blogging', 'Volunteering', 'Yoga', 'Reading'].map(val => {
                                        return (
                                            <FormControlLabel
                                                label={val}
                                                control={<Controller
                                                    name={`persona[hobbiesInterests][${val}]`}
                                                    control={control}
                                                    defaultValue={false}
                                                    // rules={{ required: true }}
                                                    render={props =>
                                                        <Checkbox
                                                            onChange={e => props.onChange(e.target.checked)}
                                                            checked={props.value}
                                                        />
                                                    } // props contains: onChange, onBlur and value
                                                />}
                                            >
                                            </FormControlLabel>
                                        )
                                    })}
                                </FormControl>
                                <hr />
                                <FormControl component="fieldset" error={Boolean(errors.housingUnits)}>
                                    <FormLabel component="legend">Housing Unit</FormLabel>
                                    <Controller
                                        as={
                                            <RadioGroup>
                                                <FormControlLabel value="Home Owner" control={<Radio />} label="Home Owner" />
                                                <FormControlLabel value="Private Renter" control={<Radio />} label="Private Renter" />
                                                <FormControlLabel value="Council Tenent" control={<Radio />} label="Council Tenent" />
                                                <FormControlLabel value="Housing Benefit" control={<Radio />} label="Housing Benefit" />
                                            </RadioGroup>
                                        }
                                        name="persona[housingUnits]"
                                        aria-label="Housing Unit"
                                        // rules={{ required: "this is required" }}
                                        control={control}
                                        error={errors.housingUnits?.type === 'required'}
                                        onChange={(event) => setHousingUnits(event.target.value)}
                                        defaultValue={housingUnits}
                                    />
                                </FormControl>
                                <hr />
                                <FormControl component="fieldset" error={Boolean(errors.politicalBeliefs)}>
                                    <FormLabel component="legend">Political Beliefs</FormLabel>
                                    {['Anarchism', 'Absolutism', 'Liberalism', 'Conservatism', 'Socialism', 'Capitalism', 'Other', 'Prefer not to say'].map(val => {
                                        return (
                                            <FormControlLabel
                                                label={val}
                                                control={<Controller
                                                    name={`persona[politicalBeliefs][${val}]`}
                                                    control={control}
                                                    defaultValue={false}
                                                    // rules={{ required: true }}
                                                    render={props =>
                                                        <Checkbox
                                                            onChange={e => props.onChange(e.target.checked)}
                                                            checked={props.value}
                                                        />
                                                    } // props contains: onChange, onBlur and value
                                                />}
                                            >
                                            </FormControlLabel>
                                        )
                                    })}
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button className={classes.nextButton} type="submit">Next</Button>
                    </Paper>
                </form>
            </Grid>
        </Grid>
        // </div>
    );
}