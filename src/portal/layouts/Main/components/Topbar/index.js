import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
    AppBar, Toolbar, Typography, Grid,
    IconButton, Tooltip
} from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import InputIcon from '@material-ui/icons/Input';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: theme.palette.secondary.light,
    },
    logo: {
        height: '46px',
        padding: '4px',
        marginTop : '4px'
	},
	toolbar: {
		paddingLeft: theme.spacing(1) ,
        paddingRight: theme.spacing(1)
	},
	titleWrapper: {
		flexGrow: 1,
        userSelect: 'none'
	},
    title: {
		userSelect: 'none',
        color: theme.palette.primary.contrastText,
		fontWeight: 400,
		flexGrow: 1,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            display: 'hidden'
        }
    },
    subtitle: {
		userSelect: 'none',
        color: theme.palette.primary.contrastText,
		fontWeight: 600,
		flexGrow: 1,
        textAlign: 'center',
        fontFamily: 'Changa',
        [theme.breakpoints.down('sm')]: {
            display: 'hidden'
        }
    },
    flexGrow: {
        flexGrow: 1
    },
    signOutButton: {
        marginLeft: theme.spacing(1)
    },
    branch: {
        width: 130, overrides: {MuiSvgIcon: {color: 'white'}}
    },
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
}));

const Topbar = props => {
    const {
        className, onSidebarOpen, onSignOut,
        setBackdrop,
        ...rest
    } = props;

    const classes = useStyles();
    
    return (
        <AppBar {...rest} className={clsx(classes.root, className)} >
            <Toolbar variant="dense" disableGutters>
                    <IconButton color="inherit" onClick={() => {}}>
                        <Home />
                    </IconButton>
                <RouterLink to="/">
                </RouterLink>
                <Grid className={classes.titleWrapper}>
                    <Grid item>
                        <Typography variant="h5" className={classes.title} >
                            {'NFT Mart'}
                        </Typography>
                    </Grid>
                </Grid>
                <Tooltip title={'Logout'}>
                    <IconButton
                        className={classes.signOutButton}
                        color="inherit"
                        onClick={onSignOut}>
                        <InputIcon />
                    </IconButton>
                </Tooltip>
                <div style={{width: 25}}></div>
            </Toolbar>
            <div style={{width: 25, background: 'white', height: 25,
                position: 'absolute', right: 0, top: 23, }}>
                <div style={{width: 25,
                    background: '#1d1d1d', height: 25, position: 'absolute',
                    right: 0, borderRadius: '0 0 100px 0',
                }}>
                </div>
            </div> 
        </AppBar>
    );
};

export default Topbar;
