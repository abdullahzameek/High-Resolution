import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActionArea, CardMedia } from "@material-ui/core";
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles} from '@material-ui/core';
import { SettingsBrightnessOutlined } from "@material-ui/icons";
import { resolveTypeReferenceDirective } from "typescript";


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

class ResolutionCard extends Component{
  constructor(props){
    super(props)
    //console.log(this.props)
    this.state = {
      card_clicked : false,
      make_post_clicked: false
    }


  }
  
  componentDidMount = () => {
    console.log("component loaded")
  }

  handleClick = () => {
    this.setState({
      card_clicked : true 
    })
    console.log('clicked here');
    sessionStorage.setItem("author", this.props.author);
    sessionStorage.setItem('posts',JSON.stringify(this.props.posts))
    
  }

  handlePostClick = () => {
    
    this.setState({
      make_post_clicked : true 
    })
  }


  render(){
    const { classes } = this.props
    if (this.state.card_clicked) {
			return (<Redirect to={`/see`} />)
    }
    if (this.state.make_post_clicked){
      sessionStorage.setItem("makeFor", this.props.resContent);
      return (<Redirect to={`/post`}/>)
    }
    if (this.props.author == sessionStorage.getItem('displayName'))
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {this.props.completion} Complete
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.resContent}
          </Typography>
        </CardContent>
        <CardActionArea onClick={this.handleClick}>
        <CardActions>
          <Button size="small">View Resolution</Button>
        </CardActions>
        </CardActionArea>

        <CardActionArea onClick={this.handlePostClick}>
        <CardActions>
          <Button size="small">Make Post</Button>
        </CardActions>
        </CardActionArea>


      </Card>
    )
    return(
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {this.props.completion} Complete
          </Typography>
          <Typography variant="h5" component="h2">
            {this.props.resContent}
          </Typography>
        </CardContent>
        <CardActionArea onClick={this.handleClick}>
        <CardActions>
          <Button size="small">View Resolution</Button>
        </CardActions>
        </CardActionArea>

      </Card>
    )
  }
}

  
export default withStyles(useStyles)(ResolutionCard);