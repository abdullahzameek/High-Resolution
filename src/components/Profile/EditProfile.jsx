
import React, {useState} from 'react';
import firebase from '../../firebase';
import {useHistory} from 'react-router-dom';




export default function EditProfile(){
    const history = useHistory();
  
    const [fields, setFields] = useState({})

    const handleChange = (event) => {
        event.persist();
        setFields(values => ({
        ...values,
        [event.target.name]: event.target.value
        }));
    }   

    async function sennd(pic){
        const imgref = firebase.storage().ref()
        console.log("fields", fields);
        const displayName = sessionStorage.getItem('displayName');
        if (pic)
        imgref.child(displayName).put(pic);
        const db = firebase.firestore();
        db.collection("Profiles").doc(displayName).set(fields, {merge:true})
    }

    const handleSubmit = (event) => {
        sennd(event.target.picture.files[0]?event.target.picture.files[0]:null)
        history.push('/dashboard');
    }

    
    return(
        <div style={{textAlign: 'center'}}>
        <h1>Profile</h1>
        <form onSubmit={handleSubmit}>
        <input type="file" id="picture" ></input>
        <input type="text" name="PreferredName" placeholder="PreferredName" onChange={handleChange}/><br /><br />
        <textarea type="text" name="ProfileText" placeholder="Bio" value={fields.ProfileText} onChange={handleChange}/><br /><br />
        <button type="submit">Save</button>
      </form>
     </div>
    )
}