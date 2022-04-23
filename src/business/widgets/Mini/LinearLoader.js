import React from 'react';
import {
    Grid, LinearProgress 
} from '@material-ui/core';

export const UI = (props) => {
    const { loading } = props;

    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {loading && <LinearProgress variant="query" />}
        </Grid>
    );
};

export default UI;
