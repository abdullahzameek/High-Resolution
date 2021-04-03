import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import { Grid } from "@material-ui/core";
import ResProgress from './LoadResolutions';
import ResCompleted from './LoadCompletedRes';



export default function(props: any){
    // if (!props)
    //     return (<div>
    //             <a href="/discover">
    //                 Discover
    //             </a>
    //             <a href="/createNew">
    //                 Set your Goal
    //             </a>
    //             </div>)
    // else if (props.inProgres){
    //     //Evan you do this, fucker.
    // }
    // else{
    //     //Evan, you do this, fucker.
    // }
    return (
        <>
        <div style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
            <h3>Resolutions in Progress!</h3>
        </div>
        <Grid container direction="column">
        <Grid item container justify="center" alignItems="center">
          <Grid item xs={false} sm={2} />
            <ResProgress/>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <div style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
            <h3>Resolutions Completed!</h3>
        </div>
        <Grid container direction="column">
        <Grid item container justify="center" alignItems="center">
          <Grid item xs={false} sm={2} />
            <ResCompleted/>
          </Grid>
        </Grid>
        </>
    );
}