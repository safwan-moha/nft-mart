import React from 'react';
import {
    Grid, Button, Typography
} from '@material-ui/core';
import { AccountBalance, LocalOffer } from '@material-ui/icons';
import {
    LinearLoader, HeadingOverlay, 
} from 'business/widgets/Mini';
import Service from 'business/services/nft.service';

const UI = (props) => {
    const {
        setOverlayType, id, collectionId
    } = props;
    
    const [loading, setLoading] = React.useState(false);
    const [details, setDetails] = React.useState({
    });

    React.useEffect(() => {
        setLoading(true);
        Service.getOneCollection(collectionId)
            .then(rows => {
                setDetails(rows[id]);
            }).catch(e => {
            }).finally(e => setLoading(false))
    }, [collectionId, id]);

    const onAction = () => {
        setLoading(false)  
    };

    return (<>
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <HeadingOverlay title={''} onClose={() => setOverlayType(false)} />
                    <LinearLoader loading={loading} />
                    <Grid container spacing={0} style={{paddingTop: 20}}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{padding: 10}}>
                            <img src={"/app/images/nfts/nft-datastore/" + collectionId + "/sub " + (id + 1) + ".png"} alt="" style={{width: '100%', borderRadius: 10}} />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} style={{padding: 10}}>
                            <Typography variant="body">NFT Name</Typography>
                            <Typography variant="h5">{details.name}</Typography><br/>
                            <Typography variant="body" style={{marginTop: 15}}>Current Price</Typography>
                            <Typography variant="h5">{details.price} SOL</Typography><br/><hr/>
                            <Typography variant="body" style={{marginTop: 15}}>Digital Culture, Curated. Quantum is an NFT platform for artists and collectors to share their work with the world.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{paddingTop: 20, paddingBottom: 20}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Grid container spacing={1} alignContent="center" alignItems="center" justify="center">
                                <Button variant="contained" color="primary" endIcon={<LocalOffer />}
                                    disabled={loading} onClick={() => onAction()}>BUY NOW
                                </Button>
                                <Button variant="outlined" color="primary" endIcon={<AccountBalance />} style={{marginLeft: 10}}
                                    disabled={loading} onClick={() => onAction()}>MAKE OFFER
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
