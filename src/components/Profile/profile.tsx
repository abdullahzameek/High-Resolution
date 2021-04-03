import React from 'react';
import Results from '../search/Results'



export default function(props: any){
    console.log('here are props');
    console.log(props);
    return(
        <div>
            <h1>
            {props.details.displayName}
            </h1>
            <br></br>
            <h4>
                Resolutions: {props.details.NumberOfResolutions} &nbsp;&nbsp; Followers: {props.details.NumberofFollowers} 
            </h4>
            <br></br>
            <h4> {props.details.ProfileText}</h4>
            
        </div>
    )
}