import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import { Grid } from "@material-ui/core";
import Discover from './Discover';


export default function(){
    return (
        <>
        <Grid container direction="column">
        <Grid item container justify="center" alignItems="center">
          <Grid item xs={false} sm={2} />
            <Discover/>
          </Grid>
        </Grid>
        </>
    );
}
