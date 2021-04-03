
import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';

const db = firebase.firestore();



export default function Discover(){
    const [cards, setCards] = useState(null)
    async function getCards(){
        
        
        let valid = []
        db.collectionGroup("Unfinished").get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc=>{
                valid.push(doc.data());
                
            }
        )});
        
        setCards(valid);
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
    console.log(cards)
    return(
        <div>
            oki
        </div>
    )
}