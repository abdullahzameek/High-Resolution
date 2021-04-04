import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter } from 'react-router-dom';
import { NoEncryptionTwoTone } from '@material-ui/icons';
import "./Logo.css";
import Logo from "./Logo.png";
import SearchIcon from "./SearchIcon.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav:{
        backgroundColor:"#ffffff",
        height:"8%"
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
          <a href="/dashboard"><img src = {Logo} className = "Logo"></img></a>
          <div className = "SearchButton">
            <a href="/search"><img src = {SearchIcon} className = "SearchButton"></img></a>
          </div>
        </Toolbar>
      </AppBar>
      </BrowserRouter>
    </div>
  );
}