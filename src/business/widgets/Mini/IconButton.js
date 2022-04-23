import React from 'react';
import {
    Grid, Tooltip, IconButton
} from '@material-ui/core';

export const UI = (props) => {
    const { size, label, onClick, tooltip, icon } = props;

    return (
        <Grid md={size} style={{paddingTop: 15}}>
            <Tooltip title={tooltip}>
                <span>
                    <IconButton style={{fontSize: 15}} onClick={onClick}>{icon}{label}</IconButton>
                </span>
            </Tooltip>
        </Grid>
    );
};

export default UI;
