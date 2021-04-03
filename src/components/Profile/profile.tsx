import React from 'react';
import Results from '../search/Results'
import "./Profile.css";
import Picture from "./SexKing.png"



export default function(props: any){
    console.log(props.details.NumberofFollowers)
    return(
        <div className = "ProfileBox">
            <img src = {props.details.displayName?props.details.displayName:Picture} className = "ProfilePhoto"></img>
            <div className = "Profile">
                <h1>
                <span className = "UserID">{props.details.displayName}</span>
                </h1>
                <h4>
                    Resolutions: <span className = "highlight">{props.details.NumberOfResolutions}</span> &nbsp;&nbsp; Followers: <span className = "highlight">{props.details.NumberofFollowers}</span> 
                    {props.details.PreferredName}
                </h4>
                
                <h4> {props.details.ProfileText}</h4>
            </div>
        </div>
    )
}