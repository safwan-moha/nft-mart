import React from 'react';
import { Grid, Paper, CircularProgress, Typography } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

const AuthLoader = ({ error }) => (
    <Grid container alignContent="center" justify="center" alignItems="center" spacing={4}
        component={Paper} style={{ height: '100%' }}>
        <Grid item>
            {error ? (<ErrorIcon />) : (<CircularProgress />)}
        </Grid>
        <Grid item>
            {error ? (
                <Typography>Error. Please contact a NFT Team.</Typography>
            ) : (
                <Typography>Loading ...</Typography>
            )}
        </Grid>
    </Grid>
);

export default AuthLoader;
