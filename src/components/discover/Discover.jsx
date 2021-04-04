
import React, {useEffect, useState} from 'react';
import firebase from '../../firebase';
import ResolutionsCard from "../Resolutions/ResolutionCard";
import { Grid } from "@material-ui/core";
import { ContactSupportTwoTone } from '@material-ui/icons';

const db = firebase.firestore();


let valid = []

export default function Discover(){
    const [cards, setCards] = useState(null)
    async function getCards(){
        
        

        const whatever = db.collectionGroup("Unfinished");
        const oki = await whatever.get();
        oki.forEach(doc=>valid.push(doc.data()));
         
        
        setCards([...valid])
            
    }
    
    useEffect(
        function(){
            getCards()
        }, []
    )

    if (!cards){
        console.log('hi')
        return(
            <div>
                Loading...
            </div>
        )
    }
    
    const getResCard = resCardObj => {
        return (
          <Grid item xs={12} sm={4}>
            <ResolutionsCard {...resCardObj} />
          </Grid>
        );
    };

    console.log(cards)
    console.log(typeof(cards))
    const newCards = cards.map(resCardObj=> getResCard(resCardObj)) 
    console.log('here is new cards');
    console.log(newCards);
    console.log(cards)
    return(
        <Grid container spacing={8}>
            {newCards}
        </Grid>
    );
};