import React from 'react';
import {
    Grid, Typography
} from '@material-ui/core';

export const UI = (props) => {
    const { size, title, subtitle, Icon, style } = props;

    const _style = style || {};
    if (Icon)
        return (
            <Grid container md={size}>
                <Grid item>
                   <Icon style={{fontSize: 40, paddingRight: 10}} />
                </Grid>
                <Grid item>
                    <Typography variant="body1">{subtitle}</Typography>
                    <Typography variant="h5" color="inherit">{title}</Typography>
                </Grid>
            </Grid>
        );
    return <Grid item  md={size} style={{..._style}}>
        <Typography variant="body1">{subtitle}</Typography>
        <Typography variant="h5" color="inherit">{title}</Typography>
    </Grid>
};

export default UI;
