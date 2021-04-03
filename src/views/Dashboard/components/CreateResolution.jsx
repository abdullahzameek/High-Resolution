import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CreateResolution() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

//   const handleClick = () => {
//     console.log('clcik was triggered here');
//         <Redirect to={'/createNew'}/>
//     }   

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Create Resolution
        </Typography>
      </CardContent>
      <CardActions> 
        <a href="/createNew" size="small">Learn More</a>
      </CardActions>
    </Card>
  );
}
