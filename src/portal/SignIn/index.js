import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/styles';
import {
    Grid, Button, TextField, Link, Typography
} from '@material-ui/core';
import palette from 'portal/theme/palette';
import authService from 'portal/services/auth.service';

const color = palette.shades.main;
const StyledTextField = styled(TextField)`
    input:-webkit-autofill,
    input:-internal-autofill-selected,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        background-color: rgb(255,255,255) !important;
        color: ${color} !important;
    }
	.MuiFormLabel-root.Mui-error,
	.MuiFormHelperText-root.MuiFormHelperText-contained.Mui-error {
        color: #ff8080;
        font-size: 12px;
        font-weight: 500;
    }
    .MuiInputBase-input {
        border-color: ${color};
	}
	.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
		border-color: ${color};
	}
	.MuiOutlinedInput-notchedOutline {
		border-color : ${color} !important;
    }
    .MuiOutlinedInput-notchedOutline:focus {
		border-color : ${color} !important;
	}
    .MuiOutlinedInput-root {
        color: ${color};
        &:hover fieldset {
            border-color: ${color};
        }
        &.Mui-focused fieldset {
            border-color: ${color};
		}
	}
	.MuiFormLabel-root {
		color: ${color};
        &.Mui-focused {
            color: ${color};
		}
	}
`;

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: 'url(./app/images/login-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backdropFilter: 'none',
        [theme.breakpoints.down('sm')]: {
            backgroundPosition: '81% center'
		},
        [theme.breakpoints.up('xl')]: {
			backgroundPosition: 'unset',
        },
        height: '100vh'
    },
    grid: {
        height: '100%'
    },
    textDanger: {
        color: theme.palette.error.light
    },
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
        },
        [theme.breakpoints.up('xl')]: {
            justifyContent: 'center'
        },
    },
    form: {
        borderRadius: '10px',
        flexBasis: '500px',
        margin: '80px 80px 80px 80px',
        padding:'10px 40px 40px 40px',
        background: theme.palette.shades.alpha,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2)
        }
    },
    textField: {
        marginTop: theme.spacing(2)
    },
    signInButton: {
        margin: theme.spacing(2, 0)
	},
    buttonSubtitle: {
        color: theme.palette.white,
        '& a': {
            color: theme.palette.white
        }
    }
}));

const SignIn = props => {

    const classes = useStyles();

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    });

	const [uiLock, setUILock] = useState(false);

    useEffect(() => {
        const errors = (!formState.values.username) ? ({
            username: ['Please type username']
        }) : (!formState.values.password) ? ({
            password: ['Please type password']
        }) : null

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {}
        }));
    }, [formState.values]);

    const handleChange = event => {
        event.persist();

        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]: event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true
            }
        }));
    };

    const handleSignIn = async event => {
        event.preventDefault();
        setUILock(true);
        try {
            let result = true 
            result = await authService.login(formState.values)
            if (result) { 
                const { from } = props.location.state || {
                    from: { pathname: '/' }
                };
                props.history.push(from);
            } else {
				throw result;
			}
        } catch (e) {
			setUILock(false);
            setFormState({
                ...formState,
                errors: { ...formState.errors, auth: 'Unable to login' }
            });
        }
    };

    const hasError = field =>
        formState.touched[field] && formState.errors[field] ? true : false;

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container justify="flex-end">
                <Grid className={classes.content} item lg={12} xs={12}>
                    <div className={classes.content}>
                        <div className={classes.contentBody}>
                            <form
                                disabled={uiLock}
                                className={classes.form}
                                onSubmit={handleSignIn}>
                                <Typography className={classes.title} variant="h2" gutterBottom>
                                NFT Mart - Login
                                </Typography>
                                {formState.errors.auth && (
                                    <Typography variant="overline" className={classes.textDanger}>
                                        {formState.errors.auth}
                                    </Typography>
                                )}
                                <StyledTextField
                                    className={classes.textField}
                                    error={hasError('auth')} fullWidth
                                    helperText={hasError('username')
                                            ? formState.errors.username[0] : null
                                    }
                                    label="Username" name="username" onChange={handleChange} type="text"
                                    value={formState.values.username || ''} variant="outlined"
                                />
                                <StyledTextField className={classes.textField}
                                    error={hasError('password')} fullWidth
                                    helperText={hasError('password')
                                            ? formState.errors.password[0] : null
                                    }
                                    label="Password" name="password" onChange={handleChange} type="password"
                                    value={formState.values.password || ''} variant="outlined"
                                />
								<div className={classes.spacer} />
                                <Button className={classes.signInButton} color="primary"
                                    disabled={uiLock} fullWidth
                                    size="large" type="submit" variant="contained">
                                    Login
                                </Button>
                                <Typography className={classes.buttonSubtitle} variant="body1">
                                    Forgot password?{' '}
                                    <Link
                                        variant="h6">
                                        Contact Here
                                    </Link>
                                </Typography>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

SignIn.propTypes = {
    history: PropTypes.object
};

export default withRouter(SignIn);
