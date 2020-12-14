import React, { useState, useEffect } from 'react'
import { makeStyles, fade } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';

const demographic = [
    {
        name: 'asian',
        value: 'Asian'
    },
    {
        name: 'black',
        value: 'Black'
    },
    {
        name: 'disability',
        value: 'Disability'
    },
    {
        name: 'lgbtq',
        value: 'LGBTQ+'
    },
    {
        name: 'multiEthnic',
        value: 'Multi-Ethnic'
    },
    {
        name: 'gender',
        value: 'Gender'
    },
    {
        name: 'age50',
        value: 'Age 50+'
    },
    {
        name: 'religion',
        value: 'Religion'
    },
    {
        name: 'pakistani',
        value: 'Pakistani'
    },
    {
        name: 'indian',
        value: 'Indian'
    },
    {
        name: 'latinx',
        value: 'LatinX'
    },
]

const useStyles = props => makeStyles((theme) => ({
    boxShadow: {
        position: 'relative',
        padding: '40px',
        boxShadow: '0px 0px 20px rgba(0,0,0,0.30), 0 20px 20px rgba(0,0,0,0.22)',
        borderRadius: '30px',
        backgroundColor: 'white',
        marginTop: '-30px'
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
        padding: '16px',
        color: theme.palette.text.secondary,
    },
    textarea: {
        width: '100%',
        backgroundColor: '#f4f4f8',
        marginTop: '8px',
        borderRadius: '5px',
        padding: '14px',
        marginBottom: '20px'
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
        margin: '20px auto 0',
        backgroundColor: "#1d8bf7",
        color: 'white',
        display: 'block',
        padding: '5px 40px'

    },
    checkNRadio: {
        padding: 0,
        '& .MuiFormLabel-root': {
            color: '#1d8bf7',
            marginBottom: '8px'
        },
        '& .MuiFormControlLabel-root': {
            '& span': {
                paddingTop: '1px',
                paddingBottom: '1px',
            }
        }
    }
}))

export default function Insight(props) {
    const { register, handleSubmit, errors, control } = useForm({ mode: 'onSubmit', reValidateMode: 'onSubmit' })
    const { type } = props
    const classes = useStyles(props)()
    const userLoggedIn = useSelector((state) => state.loggedInSession);

    const [age, setAge] = useState('')
    const [income, setIncome] = useState('')
    const [housingUnits, setHousingUnits] = useState('')
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
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {

    }, [])

    const onSubmit = insight => {
        console.log(insight, 'form data')

    }


    const dispatch = useDispatch()

    return (
        <div className={classes.boxShadow}>
            <div className={classes.paper}>
                <form
                    className={classes.form}
                    // ref={useRef()  }
                    onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Grid container spacing={3}>
                            <Grid item md={3} sm={3} xs={3}>
                                <FormControl component="fieldset" error={Boolean()} className={classes.checkNRadio}>
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
                                        name="insight[age]"
                                        // rules={{ required: "this is required" }}
                                        control={control}
                                        error={errors.person && errors.person.age?.type === 'required'}
                                        onChange={(event) => setAge(event.target.value)}
                                        defaultValue={age}
                                    />
                                </FormControl>
                                <hr style={{ marginBottom: '20px' }} />
                                <FormControl component="fieldset" error={Boolean(errors.income)} className={classes.checkNRadio}>
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
                                        name="insight[income]"
                                        aria-label="Income"
                                        control={control}
                                        onChange={(event) => setIncome(event.target.value)}
                                        defaultValue={income}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item md={6} sm={6} xs={6}>
                                <Grid container spacing={1}>
                                    {/* <Grid> */}
                                    <FormControl component="fieldset" error={Boolean(errors.educationLevel)} className={classes.checkNRadio}>
                                        <FormLabel component="legend">Education Level</FormLabel>
                                        <Controller
                                            as={
                                                <RadioGroup>
                                                    <FormControlLabel value="Higher Education & professional/vocational equivalents" control={<Radio />} label="Higher Education & professional/vocational equivalents" />
                                                    <FormControlLabel value="A levels, vocational level 3 and equivalents" control={<Radio />} label="A levels, vocational level 3 and equivalents" />
                                                    <FormControlLabel value="GCSE/O Level grade A*-C, vocational level 2 and equivalents" control={<Radio />} label="GCSE/O Level grade A*-C, vocational level 2 and equivalents" />
                                                    <FormControlLabel value="Qualifications at level 1 and below" control={<Radio />} label="Qualifications at level 1 and below" />
                                                    <FormControlLabel value="Other qualifications: level unknown (inclduing foreign qualifications)" control={<Radio />} label="Other qualifications: level unknown (inclduing foreign qualifications)" />
                                                    <FormControlLabel value="No qualifications" control={<Radio />} label="No qualifications" />
                                                </RadioGroup>
                                            }
                                            name="insight[educationLevel]"
                                            aria-label="Education Level"
                                            // rules={{ required: "this is required" }}
                                            control={control}
                                            // error={errors.educationLevel?.type === 'required'}
                                            onChange={(event) => setEducationLevel(event.target.value)}
                                            defaultValue={educationLevel}
                                        />
                                    </FormControl>
                                    <FormControl component="fieldset" error={Boolean(errors.parentalEducationLevel)} className={classes.checkNRadio}>
                                        <FormLabel component="legend">Parental Education Level</FormLabel>
                                        <Controller
                                            as={
                                                <RadioGroup>
                                                    <FormControlLabel value="One parent with higher education" control={<Radio />} label="One parent with higher education" />
                                                    <FormControlLabel value="More than one parent with higher education qualification" control={<Radio />} label="More than one parent with higher education qualification" />
                                                    <FormControlLabel value="No parents with higher education qualification" control={<Radio />} label="No parents with higher education qualification" />
                                                </RadioGroup>
                                            }
                                            name="insight[parentalEducationLevel]"
                                            aria-label="Parental Education Level"
                                            // rules={{ required: "this is required" }}
                                            control={control}
                                            // error={errors.parentalEducationLevel?.type === 'required'}
                                            onChange={(event) => setParentalEducationLevel(event.target.value)}
                                            defaultValue={parentalEducationLevel}
                                        />
                                    </FormControl>
                                    <Grid container>
                                        <Grid ite md={6} sm={6} xs={6}>
                                            <FormControl component="fieldset" className={classes.checkNRadio}>
                                                <FormLabel component="legend">Personality</FormLabel>
                                                {['Television', 'Intuitive', 'Thinking', 'Judging', 'Extrovert', 'Sensing', 'Feeling', 'Perceiving'].map(val => {
                                                    return (
                                                        <FormControlLabel
                                                            key={val}
                                                            label={val}
                                                            control={<Controller
                                                                name={`insight[personality][${val}]`}
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
                                        <Grid ite md={6} sm={6} xs={6}>
                                            <FormControl component="fieldset" error={Boolean(errors.motivations)} className={classes.checkNRadio}>
                                                <FormLabel component="legend">Motivations</FormLabel>
                                                {['Price', 'SavesTime', 'EaseofUse', 'Creativity', 'Uniquencess'].map(val => {
                                                    return (
                                                        <FormControlLabel
                                                            key={val}
                                                            label={val}
                                                            control={<Controller
                                                                name={`insight[motivations][${val}]`}
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
                                            <Button className={classes.nextButton} type="submit">Next</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} sm={3} xs={3}>
                                <FormControl component="fieldset" error={Boolean(errors.politicalBeliefs)} className={classes.checkNRadio}>
                                    <FormLabel component="legend">Demographic</FormLabel>
                                    {demographic.map(val => {
                                        return (
                                            <FormControlLabel
                                                key={val.name}
                                                label={val.value}
                                                control={<Controller
                                                    name={`insight[politicalBeliefs][${val.name}]`}
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
                                <hr style={{ marginBottom: '20px' }} />
                                <FormControl component="fieldset" error={Boolean(errors.hobbiesInterests)} className={classes.checkNRadio}>
                                    <FormLabel component="legend">Hobbies & Interests</FormLabel>
                                    {['Television', 'Radio', 'Print', 'DigitalOnline', 'CinemaThreatre', 'ArtDesign', 'Blogging', 'Volunteering', 'Yoga', 'Reading'].map(val => {
                                        return (
                                            <FormControlLabel
                                                key={val}
                                                label={val}
                                                control={<Controller
                                                    name={`insight[hobbiesInterests][${val}]`}
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
                                <hr style={{ marginBottom: '20px' }} />
                                <FormControl component="fieldset" error={Boolean(errors.housingUnits)} className={classes.checkNRadio}>
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
                                        name="insight[housingUnits]"
                                        aria-label="Housing Unit"
                                        // rules={{ required: "this is required" }}
                                        control={control}
                                        // error={errors.housingUnits?.type === 'required'}
                                        onChange={(event) => setHousingUnits(event.target.value)}
                                        defaultValue={housingUnits}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>
                </form>
            </div>
        </div >
    )
}

