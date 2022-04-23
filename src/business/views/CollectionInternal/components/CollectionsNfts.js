import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FlashOn } from '@material-ui/icons';

export default function MediaCard({collectionId, id, name, price, setOverlayType}) {

  const onView = () => {
    setOverlayType(id)
  }

  return (
    <Card style={{ maxWidth: 345, margin: 20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
      <CardMedia
        component="img"
        height="140"
        image={"/app/images/nfts/nft-datastore/" + collectionId + "/sub " + (id + 1) + ".png"}
        alt="Mems Voyage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign: 'right'}}>
          <FlashOn style={{marginBottom: -7}} /> <span style={{fontSize: 15}}>{price}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onView}>Buy Now</Button>
        <Button size="small" onClick={onView}>Favourite</Button>
      </CardActions>
    </Card>
  );
}