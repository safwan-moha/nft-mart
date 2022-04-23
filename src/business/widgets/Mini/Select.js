import React from 'react';
import {
    Grid, TextField, MenuItem
} from '@material-ui/core';

export const UI = (props) => {
    const { size, label, name, value, onChange, values, valueObjects, style } = props;

    const _style = style || {};
    return (
        <Grid item md={size} xs={size} style={_style}>
            <TextField
                select variant="outlined" fullWidth margin="dense"
                label={label} name={name}
                value={value || ''} onChange={onChange}>
                    {values && values.map((type, i) => (<MenuItem key={i} value={type}>
                        {type}
                    </MenuItem>))}
                    {valueObjects && valueObjects.map((item, i) => (<MenuItem key={i} value={item.value}>
                        {item.label}
                    </MenuItem>))}
            </TextField>
        </Grid>
    );
};

export default UI;
