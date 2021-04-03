import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
const db = firebase.firestore();
let arr:any = []



export default function(){
    const [users, setUsers]:any  = useState([]);
    const [cur, setCur]:any = useState("")
    async function getUsers(){
        const ref = await db.collection("Profiles").get();
        arr = ref.docs.map(doc=>doc.data());
    }


    function onchange(e:any){
        setCur(e.target.value);
        setUsers(arr.filter((thing:any)=>thing.displayName.toLowerCase().includes(cur.toLowerCase())));
    }
    useEffect(
        function(){
            
            getUsers();
        }, []
    )

    console.log(users);
    let show = users.map((user: any)=><li key={user.displayName}><a>{user.displayName}</a></li>)
    return(

        <div>
            <input value={cur} onChange={onchange}></input>
            {show}
        </div>
        
    )
}