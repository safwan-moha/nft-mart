import React from 'react';
import {
    Typography, IconButton, Toolbar
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    overlayHeader: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)'
    },
    overlayTitle: {
        flexGrow: 1
    },
}));

export const UI = (props) => {
    const { title, onClose } = props;
    const classes = useStyles();

    return (
        <Toolbar className={classes.overlayHeader} variant="dense">
            <Typography variant="h6" color="inherit" className={classes.overlayTitle}>{title}</Typography>
            <IconButton edge="end" color="inherit" aria-label="close" onClick={onClose}>
                <Close />
            </IconButton>
        </Toolbar>
    );
};

export default UI;
