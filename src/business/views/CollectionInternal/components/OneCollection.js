import React from 'react';
import { Grid } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import Service from 'business/services/nft.service';
import CollectionsNfts from './CollectionsNfts';
import { LinearLoader } from 'business/widgets/Mini';

const UI = (props) => {
    const {
        changed, id, setOverlayType 
    } = props;
    const { enqueueSnackbar } = useSnackbar();
    
    const [loading, setLoading] = React.useState(false);
    const [details, setDetails] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        Service.getOneCollection(id)
            .then(rows => {
                setDetails(rows);
            }).catch(e => {
                enqueueSnackbar('Could not Fetch', { variant: 'error' });
            }).finally(e => setLoading(false))
    }, [enqueueSnackbar, changed, id]);

    return (
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
            <LinearLoader loading={loading} />
            {details.map((i, j) => <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                <CollectionsNfts collectionId={id} id={j} name={i.name} price={i.price} setOverlayType={setOverlayType} />
            </Grid>)}
        </Grid>
    );
};

export default UI;
