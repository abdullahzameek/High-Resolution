import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import Profile from '../Profile/profileWrapper';
import "./Results.css";

const db = firebase.firestore();
let arr = [];




export default function(){
    const [users, setUsers]  = useState([]);
    const [cur, setCur] = useState("")
    const [selected, setSelected] = useState(null);
    async function getUsers(){
        const ref = await db.collection("Profiles").get();
        arr = ref.docs.map(doc=>doc.data());
    }
    function setThis(e){
        console.log(e.target.name)
        setSelected(e.target.name)
    }

    function onchange(e){
        setCur(e.target.value);
        setUsers(arr.filter((thing)=>thing.displayName.toLowerCase().includes(cur.toLowerCase())));
    }
    useEffect(
        function(){
            getUsers();
        }, []
    )

    console.log(users);
    let show = users.map((user)=><li key={user.displayName}><button name={user.displayName} onClick={setThis} className = "Result">{user.displayName}</button></li>)
    console.log(selected)
    if (!selected)
        return(
            <div>
                <input value={cur} onChange={onchange} className = "SearchBar">
                    
                </input>
                {show}
            </div>
        )
    console.log(selected);
    return (
        <div>
            <div>
                <input value={cur} onChange={onchange} className = "SearchBar"></input>
                {show}
            </div>
            <div>
                <Profile displayName={selected}></Profile>
            </div>
        </div>
    )
}