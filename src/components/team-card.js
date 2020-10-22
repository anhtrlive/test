import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LogoPNGplaceholder from '../img/nba-logo-placeholder.png'

const useStyles = makeStyles({
  root: {
    width: 225,
    marginTop: 50,
    textAlign: 'left',
  },
  img: {
    objectFit: "contain"
  }
});

export default function ImgMediaCard({logo, fullName, city, shortName, id}) {
  const classes = useStyles();
  logo = logo ? logo : LogoPNGplaceholder;
  fullName = fullName ? fullName : 'team name';
  city = city ? city : 'city';
  shortName = shortName ? shortName : 'short name';

  return (
    <Card className={classes.root}>
      <Link  to={`/team/${id}`} className="team-card__link">
        <CardActionArea>
          <CardMedia 
            className = {classes.img}
            component="img"
            alt={fullName}
            height="140"
            src={logo}
            title={fullName}
            onError={e => {
              e.target.src=LogoPNGplaceholder;
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="h2" >
            {fullName}
            </Typography>
            <Typography gutterBottom variant="body1" component="h2">
              {city}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {shortName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
