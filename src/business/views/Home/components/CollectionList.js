import React from 'react';
import { Grid } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import Service from 'business/services/nft.service';
import CollectionsCard from './CollectionsCard';
import { LinearLoader } from 'business/widgets/Mini';

const UI = (props) => {
    const {
        changed, history, setChanged 
    } = props;
    const { enqueueSnackbar } = useSnackbar();
    
    const [loading, setLoading] = React.useState(false);
    const [details, setDetails] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        Service.getAllCollections()
            .then(rows => {
                setDetails(details => [ ...details, ...rows]);
            }).catch(e => {
                enqueueSnackbar('Could not Fetch', { variant: 'error' });
            }).finally(e => setLoading(false))
    }, [enqueueSnackbar, changed]);

    React.useEffect(() => {
        const onScroll = function () {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                setChanged(changed + 1)
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    }, [changed, setChanged]);

    return (
        <Grid container xs={12} sm={12} md={12} lg={12} xl={12}>
            <LinearLoader loading={loading} />
            {details.map((i, j) => <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <CollectionsCard id={j} name={i.name} desc={i.desc} history={history} />
            </Grid>)}
        </Grid>
    );
};

export default UI;
