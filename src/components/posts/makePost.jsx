import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
const db = firebase.firestore();
export default function MakePost(){

    async function onsubmit(e){
        const post = e.target.content.value;
        
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