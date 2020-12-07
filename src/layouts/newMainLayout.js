import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        backgroundColor: 'red',
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        background: 'white',
        '& .MuiToolbar-regular': {
            minHeight: '50px',
        },
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        backgroundImage: 'linear-gradient(to right, #9211a2, #4911a2)',
        borderLeft: '10px solid #f64d0c',
        width: drawerWidth,
    },
    content: {
    },
    logoutBtn: {
        background: '#e96941',
        fontWeight: '400',
        color: 'white',
        marginLeft: 'auto',
        paddingLeft: '20px',
        paddingRight: '20px'
    }
}));

const MainLayout = WrappedComponent => props => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const history = useHistory();
    const dispatch = useDispatch();
    const loggedInSession = useSelector((state) => state.loggedInSession);
    const classes = useStyles();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const logout = () => {
        history.push('/');
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    {loggedInSession && <Button onClick={logout} className={classes.logoutBtn}>Logout</Button>}
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders" style={{ background: 'red' }}>
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css" style={{ background: 'red' }}>
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css" style={{ background: 'red' }}>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                    </Drawer>
                </Hidden>
            </nav>
            <div className={classes.toolbar} />
            <Grid spacing={0} style={{ width: '100%', padding: '60px 30px' }}>
                <Grid item md={12}>
                    <WrappedComponent {...props} />
                </Grid>
            </Grid>
        </div>
    );
}

export default MainLayout;