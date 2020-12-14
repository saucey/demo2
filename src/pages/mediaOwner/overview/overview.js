import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom';


const useStyles = props => makeStyles((theme) => ({
    boxShadow: {
        position: 'relative',
        padding: '40px 100px 0',
        boxShadow: '0px 0px 20px rgba(0,0,0,0.30), 0 20px 20px rgba(0,0,0,0.22)',
        borderRadius: '30px',
        backgroundColor: 'white',
        marginTop: '-30px'
    },
}))

export default function Overview(props) {

    const { type } = props
    const classes = useStyles(props)()
    const state = useSelector((state) => state);


    console.log(state, 'the state')

    useEffect(() => {

    }, [])

    const dispatch = useDispatch()

    return (
        <div className={classes.boxShadow}>
            <div className={classes.paper}>


            </div>
        </div >
    )
}

