import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { CircularProgress, Backdrop } from '@material-ui/core';

import { Topbar } from './components';
import { useSnackbar } from 'notistack';
import AuthService from 'portal/services/auth.service';

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.default,
        paddingTop: 56,
        height: '100%',
        overflow: 'auto',
        [theme.breakpoints.up('sm')]: {
            paddingTop: 50
        },
        transition: theme.transitions.create('padding', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    desktopLeftPadding: {
        paddingLeft: theme.spacing(7) + 1
    },
    shiftContent: {
        paddingLeft: 0
    },
    content: {
        height: '98%',
        paddingTop: 0,
        marginTop: 6
    },
    childContainer :{
        height: '96%',
    },
    footerContainer :{
        height : '4%',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Main = props => {
    const { children } = props;
    const { enqueueSnackbar } = useSnackbar();
    const classes = useStyles();

    const [openSidebar, setOpenSidebar] = useState(false);
    const [backdrop, setBackdrop] = useState(false);

    const handleSidebarToggle = () => {
        setOpenSidebar(!openSidebar);
    };

    const onSignOut = async () => {
        try {
            await AuthService.logout();
        	window.location = `${process.env.REACT_APP_BASE_URL || '/app'}/sign-in`;
        } catch (e) {
			enqueueSnackbar("Could not log out, please delete cookies manually to ensure data safety", { variant: "warning" });
        }
    };

    const childrenWithProps = React.Children.map(children, child =>
        React.cloneElement(child, { isMobile: false })
    );

    return (
        <div
            className={clsx({
                [classes.root]: true,
                [classes.shiftContent]: true,
                [classes.desktopLeftPadding]: true
            })}>
            <Backdrop className={classes.backdrop} open={backdrop} onClick={setBackdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Topbar 
                onSidebarOpen={handleSidebarToggle}
                setBackdrop={setBackdrop} onSignOut={onSignOut}
            />
            {!backdrop &&
                <main className={classes.content}>
                    <div className={classes.childContainer}>
                        {childrenWithProps}
                    </div>
                </main>
            }
        </div>
    );
};

export default Main;
