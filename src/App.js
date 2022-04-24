import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { DialogProvider } from 'muibox';
import { ThemeProvider, makeStyles, withStyles } from '@material-ui/styles';
import { CssBaseline, IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import theme from './portal/theme';
import { AccessProvider } from "react-access-control"
import 'react-perfect-scrollbar/dist/css/styles.css';

import Routes from './portal/Routes';

const styles = makeStyles({
    success: { backgroundColor: 'rgb(152, 230, 152)', color: 'rgb(15, 62, 15)' },
    error: { backgroundColor: 'rgb(255, 179, 179)', color: 'rgb(77, 0, 0)' },
    warning: { backgroundColor: 'rgb(255, 204, 153)', color: 'rgb(77, 38, 0)' },
    info: { backgroundColor: 'rgb(153, 204, 255)', color: 'rgb(0, 51, 102)' }
});

class App extends React.Component {
    render() {
        const { classes } = this.props;
        const notistackRef = React.createRef();
        const onClickDismiss = key => () => {
            notistackRef.current.closeSnackbar(key);
        };
    
        return (
            <CssBaseline>
                <ThemeProvider theme={theme}>
                    <SnackbarProvider
                        maxSnack={4}
                        autoHideDuration={10000} 
                        ref={notistackRef}
                        action={key => (
                            <IconButton style={{ color: '#eeeeee' }} onClick={onClickDismiss(key)}>
                                <ClearIcon />
                            </IconButton>
                        )}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                        }}
                        classes={{
                            variantSuccess: classes.success,
                            variantError: classes.error,
                            variantWarning: classes.warning,
                            variantInfo: classes.info
                        }}>
                        <DialogProvider>
                            <AccessProvider>
                                <BrowserRouter basename={'/app'}>
                                    <Routes />
                                </BrowserRouter>
                            </AccessProvider>
                        </DialogProvider>
                    </SnackbarProvider>
                </ThemeProvider>
            </CssBaseline>
        );
    }
}

export default withStyles(styles)(App);
