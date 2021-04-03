import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav:{
        backgroundColor:"#ffffff"
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color:"#000000",
    }
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
      <AppBar position="static" className={classes.nav} >
        <Toolbar>
          <Typography variant="h4" className={classes.title} >
            High<br></br>Resolution
          </Typography>
          
    
         
        </Toolbar>
      </AppBar>
      </BrowserRouter>
    </div>
  );
}