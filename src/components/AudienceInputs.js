import React, { useRef, useState, useEffect } from "react";
//Text field
import TextField from '@material-ui/core/TextField';
import { makeStyles, fade } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

const AudienceInputs = (props) => {
    // The number of references is undetermined
    // After fetching data, we can determine array's length
    const inputRef = useRef([]);
    const classes = useStyles();
    // Data is empty before fetching
    const [data, setData] = useState([]);
    const [aud, setAud] = useState({
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

    useEffect(() => {
        // We will fetch data and receive an array
        // let data = fetchData();
        // To simplify, let's suppose that the array is:
        let data = props.data;
        // We define the size of array after receiving the data
        inputRef.current = new Array(data.length);
        // We set state
        setData(data);
    }, []);

    useEffect(() => {
        // debugger;
        // If data is filled -> focus
        if (data.length !== 0) {
            // Focusing the last <input></input>
            inputRef.current[data.length - 1].focus();
        }
    }, [data]);

    const onAChange = (e) => {
        setAud({
            ...aud,
            [e.target.name]: e.target.value
        });
        props.onChange(aud)
    }
    return (
        <div>
            {data.map((element, i) => <TextField variant="outlined" margin="normal" label={element} fullWidth className={classes.customfield} value={aud[element]} name={element} onChange={(event) => onAChange(event)} ref={el => inputRef.current[i] = el} placeholder={element} />)}
        </div>
    );
}

export default React.memo(AudienceInputs);