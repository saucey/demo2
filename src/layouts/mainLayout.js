import React, { useEffect, useState, useRef } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid';

const useStyles = height => makeStyles((theme) => ({
    sideBar: {
        minHeight: `${height}px`,
        backgroundImage: 'linear-gradient(to right, #9211a2, #4911a2)',
        borderLeft: '10px solid #f64d0c'
    }
}))

const MainLayout = WrappedComponent => {
    const NewComponent = props => {

        const [height, setHeight] = useState(0)
        const ref = useRef(null)

        useEffect(() => {
            console.log(document.documentElement.scrollHeight, 'ofset')
            setHeight(document.documentElement.scrollHeight)
        }, [])

        const classes = useStyles(height)();
        const history = useHistory();

        const dispatch = useDispatch()

        return (
            <Grid ref={ref} spacing={0} style={{ border: '1px solid red' }}>
                <Grid item md={2}>
                    <div className={classes.sideBar}></div>
                </Grid>
                <Grid item md={10}>
                    <WrappedComponent {...props} />
                </Grid>
            </Grid>
        )
    }
    return NewComponent
}

export default MainLayout
