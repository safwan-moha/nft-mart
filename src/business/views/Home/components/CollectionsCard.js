import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function MediaCard({id, name, desc, history}) {

  const onView = () => {
    history.push('/home/' + (id % 8))
  }

  return (
    <Card style={{ maxWidth: 495, margin: 20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
      <CardMedia
        component="img"
        height="140"
        image={"/app/images/nfts/nft-datastore/" + (id % 8) + "/main.png"}
        alt="Mems Voyage"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onView}>View Collection</Button>
      </CardActions>
    </Card>
  );
}