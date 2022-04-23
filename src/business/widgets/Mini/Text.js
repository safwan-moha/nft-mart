import React from 'react';
import {
    Grid, TextField 
} from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import palette from 'portal/theme/palette';

export const UI = (props) => {
    const { size, label, name, value, onChange, onBlur, type, Icon, disabled, helperText, onKeyDown, autoFocus } = props;

    if (Icon) 
        return (
            <Grid item md={size} xs={size}>
                <TextField type={type || 'text'}
                    variant="outlined" fullWidth margin="dense"
                    placeholder={label} name={name} disabled={disabled || false}
                    InputProps={{startAdornment: (
                            <InputAdornment position="start">
                                <Icon style={{color: palette.shades.light}} />
                            </InputAdornment>),
                    }}
                    value={value || ''} onChange={onChange}>
                </TextField>
            </Grid>)
    return (
        <Grid item md={size} xs={size}>
            <TextField type={type || 'text'} disabled={disabled || false}
                autoFocus={autoFocus || false} helperText={helperText || ''}
                variant="outlined" fullWidth margin="dense"
                label={label} placeholder={label} name={name}
                value={value || ''} onChange={onChange} onBlur={onBlur} onKeyDown={onKeyDown}>
            </TextField>
        </Grid>
    );
};

export default UI;
