import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import Profile from './profile';
const db: any = firebase.firestore();
export interface fields {
    profilePic: string,
    displayName: string,

}


export default function(props: any){
    async function getUserData(displayName: string){
        const details: any = await db.collection("Profiles")
                                        .doc(displayName)
                                        .get();
        
        setFields(details.data());
    };
    
    const [fields, setFields]: any = useState({});

    useEffect(function(){
        const displayName: string = props.displayName;
        getUserData(displayName);
    }, []);  
    if (fields != {})
        return(
            <div>
                <Profile details={fields}/>
            </div>
        )
    
    return(
        <div>
            <h1>
                Loading...
            </h1>
        </div>
    )
}



