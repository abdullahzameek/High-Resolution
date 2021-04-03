import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';

const db = firebase.firestore();



export default function Discover(){
    const [cards, setCards] = useState(null)
    async function getCards(){
        const Ref = db.collection("Users")
                            .doc(firebase.auth().currentUser?.uid);
        const displayData = await Ref.get();
        let data = displayData.data();
        const displayName = data.displayName;
        const ref = db.collection("Profiles");
        const unfinished = await ref.get();;
        let arr = unfinished.docs.map(doc=>doc.data());
        console.log(arr);
    }
    
    useEffect(
        function(){
            getCards()
        }, []
    )

    if (!cards){
        return(
            <div>
                Loading...
            </div>
        )
    }
}