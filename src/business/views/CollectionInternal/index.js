import React from 'react';
import {
    Card, CardHeader, CardContent, Grid, Typography
} from '@material-ui/core';
import View from './components/View';
import OneCollection from './components/OneCollection';
import { Dialog } from 'business/widgets/Mini';
import { PeopleOutline, CategoryOutlined, ListAlt } from '@material-ui/icons';

const UI = (props) => {
    const [overlayType, setOverlayType] = React.useState(false);
    const collectionId = props.match?.params?.id;

    return (<>
        <Card elevation={0}>
            <CardHeader style={{paddingTop: 50, paddingBottom: 30}} title={
                <Grid item spacing={1} justify="center" alignContent="center" alignItems="center">
                    <Typography component="h1" variant="h1" align="center">
                        Buy. Own your NFT. Now.
                    </Typography>
                    <Grid container spacing={2} xs={12} justify="center" alignContent="center" alignItems="center" style={{paddingRight: 10, paddingTop: 40}}>
                        <Grid xs={1}>
                            <Typography align="center"><CategoryOutlined /></Typography>
                        </Grid>
                        <Grid xs={1}>
                            <Typography align="center"><PeopleOutline /></Typography>
                        </Grid>
                        <Grid xs={1}>
                            <Typography align="center"><ListAlt /></Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} xs={12} justify="center" alignContent="center" alignItems="center" style={{paddingRight: 10, paddingTop: 10}}>
                        <Grid xs={1}>
                            <Typography variant="h3" align="center">512</Typography>
                        </Grid>
                        <Grid xs={1} >
                            <Typography variant="h3"  align="center">307</Typography>
                        </Grid>
                        <Grid xs={1}>
                            <Typography variant="h3"  align="center">27.5</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} xs={12} justify="center" alignContent="center" alignItems="center" style={{paddingRight: 10, paddingTop: 10}}>
                        <Grid xs={1}>
                            <Typography align="center">Items</Typography>
                        </Grid>
                        <Grid xs={1}>
                            <Typography align="center">Owners</Typography>
                        </Grid>
                        <Grid xs={1}>
                            <Typography align="center">Volume</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }/>
            <CardContent>
                <Card>
                    <OneCollection setOverlayType={setOverlayType} id={collectionId} />
                </Card>
            </CardContent>
        </Card>
        <Dialog open={overlayType !== false} width="sm" content={
            overlayType !== false ? <View setOverlayType={setOverlayType} id={overlayType} collectionId={collectionId} /> : null
        }/>
    </>);
};

export default UI;
