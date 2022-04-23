import React from 'react';
import {
    Grid, Typography 
} from '@material-ui/core';

export const UI = (props) => {
    const { size, label, value } = props;

    return (
        <Grid item md={size} xs={size}>
            <Typography variant="overline">{label}</Typography>
            <Typography variant="h5">{value || '-'}</Typography>
        </Grid>
    );
};

export default UI;
