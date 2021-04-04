import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';

const db = firebase.firestore();
const storage = firebase.storage().ref();
export default function MakePost(){

    async function onsubmit(e){
        e?.preventDefault();

        const post = e.target.content.value;
        const displayName = sessionStorage.getItem('displayName')
        const imgref = storage.child(displayName).child(e.target.file.value);
        imgref.put(e.target.file.files[0]);
        
        const resRef = db.collection("Profiles").doc("sexking").collection("Unfinished").doc("53rnAOFd5m1519RxHYcF");
        const res = await resRef.update(
            {
                posts: firebase.firestore.FieldValue.arrayUnion({
                    img: e.target.file.value,
                    post: e.target.content.value
                })
            }
        )
        console.log(e.target.file.value);
        console.log(e.target.file.files[0]);
    }


    return(
        <div>
            <form onSubmit={onsubmit}>
                <label>Post content</label>
                <textarea id="content"></textarea>
                <label>postImage</label>
                <input type="file" id="file"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}