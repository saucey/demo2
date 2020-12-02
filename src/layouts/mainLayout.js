import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid';

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    sideBar: {
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(to right, #9211a2, #4911a2)',
        borderLeft: '10px solid #f64d0c'
    }
}))

const MainLayout = WrappedComponent => {
    const NewComponent = props => {

        const classes = useStyles();
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);
        const history = useHistory();

        const dispatch = useDispatch()

        return (
            <Grid container spacing={0}>
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
