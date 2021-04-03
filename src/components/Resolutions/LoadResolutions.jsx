import React, {useEffect, useState} from "react";
import ResolutionsCard from "./ResolutionCard";
import { Grid } from "@material-ui/core";
import resolutionsList from "./resolutionsList";
import firebase from '../../firebase';

const db = firebase.firestore();

function ResProgress () {
  const [cards, setCards] = useState(null);
  async function getCards(){
    const Ref = db.collection("Users")
                           .doc(firebase.auth().currentUser?.uid);
    const displayData = await Ref.get();
    let data = displayData.data();
    const displayName = data.displayName;
    const ref = db.collection("Profiles").doc(displayName).collection("Unfinished");
    const unfinished = await ref.get();
    let arr = unfinished.docs.map(doc=>doc.data());
    console.log(arr);
    setCards(arr);
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
  const getResCard = resCardObj => {
    return (
      <Grid item xs={12} sm={4}>
        <ResolutionsCard {...resCardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={8}>
      {cards.map(resCardObj=> getResCard(resCardObj))}
    </Grid>
  );
};

export default ResProgress;