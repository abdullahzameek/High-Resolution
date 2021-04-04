import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';

const db = firebase.firestore();
const storage = firebase.storage().ref();
export default function MakePost(){

    async function onsubmit(e){
        const post = e.target.content.value;
        const displayName = sessionStorage.getItem('displayName')
        const imgref = storage.child(displayName);
        console.log(e.target.file);
    }


    return(
        <div>
            <form onSubmit={onsubmit}>
                <label>Post content</label>
                <textarea id="content"></textarea>
                <label>postImage</label>
                <input type="file"></input>
            </form>
        </div>
    )
}