import React from 'react';
import {
    Card, CardHeader, CardContent, Grid, Button, Typography
} from '@material-ui/core';
import Add from './components/Add';
import CollectionList from './components/CollectionList';
import { Dialog } from 'business/widgets/Mini';
import { Add as AddIcon } from '@material-ui/icons';

const UI = (props) => {
    const [changed, setChanged] = React.useState(0);
    const [overlayType, setOverlayType] = React.useState('');

    return (<>
        <Card elevation={0}>
            <CardHeader style={{paddingRight: 18}} title={
                <Grid item spacing={1} justify="center" alignContent="center" alignItems="center">
                    <Typography component="h1" variant="h1" align="center" gutterBottom>
                        Explore Collections
                    </Typography>
                    <Grid container spacing={2} xs={12} justify="flex-end" alignContent="center" alignItems="center" style={{paddingRight: 10, paddingTop: 10}}>
                        <Button color='primary' variant="outlined" startIcon={<AddIcon />} onClick={() => setOverlayType('ADD')} style={{marginTop: 2}}>New Collection</Button>
                    </Grid>
                </Grid>
            }/>
            <CardContent>
                <Card>
                    <CollectionList changed={changed} setChanged={setChanged} history={props.history}  />
                </Card>
            </CardContent>
        </Card>
        <Dialog open={overlayType} width="md" content={
            overlayType === 'ADD' ?
            <Add changed={changed} setChanged={setChanged} setOverlayType={setOverlayType} /> : null
        }/>
    </>);
};

export default UI;
