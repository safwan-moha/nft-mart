import React from 'react';
import {
    Grid, Button, ExpansionPanel, ExpansionPanelDetails
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import Service from 'business/services/nft.service';
import { Create, Description } from '@material-ui/icons';
import {
    Text, LinearLoader, HeadingOverlay, HeadingExpansion
} from 'business/widgets/Mini';
import { DropzoneArea } from 'material-ui-dropzone'

const UI = (props) => {
    const {
        setChanged, changed, setOverlayType
    } = props;
    const { enqueueSnackbar } = useSnackbar();
    
    const [loading, setLoading] = React.useState(false);
    const [details, setDetails] = React.useState({
    });

    const onAction = () => {
        if (!details.name) {
            enqueueSnackbar('Please fill', { variant: 'warning' });
            return
        }
        if ((details.walletId || '').length < 7) {
            enqueueSnackbar('ID should contain minimum 7 chars', { variant: 'warning' });
            return
        }

        setLoading(true)
        Service.create(details)
            .then(rows => {
                enqueueSnackbar('Created', { variant: 'success' });
                setChanged(changed + 1)
                setOverlayType(false)
            }).catch(e => {
                enqueueSnackbar('Could not Create', { variant: 'error' });
            }).finally(e => setLoading(false))
    };

    const onChange = e => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const onChangeTrim = e => {
        setDetails({ ...details, [e.target.name]: (e.target.value || '').split(' ').join('') });
    };

    return (<>
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <HeadingOverlay title={'CREATE NEW COLLECTIONS'} onClose={() => setOverlayType(false)} />
                    <LinearLoader loading={loading} />
                    <Grid container spacing={0} style={{paddingTop: 20}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <ExpansionPanel defaultExpanded>
                                <HeadingExpansion title={'BASIC DETAILS'} />
                                <ExpansionPanelDetails>
                                    <Grid container spacing={1} alignContent="flex-start" alignItems="flex-start" justify="flex-start">
                                        <Text size={4} label="Collection Name" name="collectionName"
                                            value={details.collectionName} onChange={onChangeTrim}
                                        />
                                        <Text size={8} label="Wallet ID" name="walletId"
                                            value={details.walletId} onChange={onChangeTrim}
                                        />
                                        <Text size={12} label="Description" name="description"
                                            helperText={'Minimum 50 characters'}
                                            value={details.description} onChange={onChange} 
                                        />
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{paddingTop: 20}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <ExpansionPanel defaultExpanded>
                                <HeadingExpansion title={'FILE UPLOAD*'} />
                                <ExpansionPanelDetails>
                                    <Grid container spacing={1} alignContent="flex-start" alignItems="flex-start" justify="flex-start">
                                        <Grid container spacing={2} xs={3} >
                                        </Grid>
                                        <Grid container spacing={2} xs={6} justify="flex-end" alignContent="center" alignItems="center" style={{marginLeft: 10, marginTop: 10}}>
                                            <DropzoneArea onChange={a => {}} filesLimit={1} getPreviewIcon={() => <Description />} maxFileSize={2000000}/>
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{paddingTop: 20, paddingBottom: 20}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container spacing={1} alignContent="flex-end" alignItems="flex-end" justify="flex-end">
                                <Button variant="contained" color="primary" endIcon={<Create />}
                                    disabled={loading} onClick={() => onAction()}>Create
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <LinearLoader loading={loading} />
                </Grid>
            </Grid>
        </div>
    </>);
};

export default UI;
