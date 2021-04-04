import React, {useState, useEffect} from "react";
import firebase from '../../firebase';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { couldStartTrivia } from "typescript";

const db = firebase.firestore();
export default function MakeResolution(){
    const history = useHistory();

    const displayN = sessionStorage.getItem('displayName')
    console.log(displayN);  
   
    async function sendsome(toSend){
        const db = firebase.firestore();
        db.collection("Profiles").doc(displayN).collection("Unfinished").doc(toSend.resContent).set({...toSend, posts:[]})
    }
     

    const onsubmit = (e)=>{

        async function getWatson(textContent){

            let payload = {
                "text": textContent
            }
            let emotion = await axios.post(`https://ibm-watson-princeton.herokuapp.com/getEmotion`, payload)
            console.log('this is emotion');
            console.log(emotion.data);
            if (emotion.data['sadness'] > 0.5){
                alert('Hey! We noticed that you might be feeling a bit down. Maybe consider seeking some profession help. Links here')
            }
            if(emotion.data['anger'] > 0.5){
                alert('Hey! We noticed that your comment might have hurtful content. We want everyone at High Resolution to feel safe and not threatened')
            }
            if(emotion.data['fear'] > 0.5){
                alert("Hey! Is everything alright? We're always looking out for our members")
            }

            let sentiment = await axios.post(`https://ibm-watson-princeton.herokuapp.com/getSentiment`, payload)
            if(sentiment.data['score'] < -0.5){
                alert('Hey! We want our members to be able to freely express themselves, but maybe you might want to consider reaching out to someone in person?')
            }

        }
        getWatson(e.target.resContent.value)
        e?.preventDefault();
        const things = {
            resContent: e.target.resContent.value,
            author: displayN,
            completion: "0%",
            category: e.target.category.value
        };
        sendsome(things);
        history.push('/dashboard');
    }

    return(
    <div>
        <form onSubmit={onsubmit}>
        <div className='reactangle'><p>Name Your Goal</p></div>
        <input type="text" id="resContent"></input>
        <div className='line'></div>
        <div className='setcontainer'><p className='set'>Set Goal Date: </p><input type="date" id="goal" name="trip-goal" min="2021-04-01" max="2050-12-31"></input></div>
        <div className='setcontainer'><p className='set'>Set Start Date: </p><input type="date" id="start" name="trip-start" min="2021-04-01" max="2050-12-31"></input></div>
        <div className='setcontainer'>Set Interval:
            <select name="interval" id="interval">
                <option value="Once a Day">Once a Day</option>
                <option value="Once a Week">Once a Week</option>
                <option value="Once a Month ">Once a Month</option>
            </select>
        </div>
        <div className='setcontainer'><p className='set'>Select Tags: </p><input type="text" id="category"></input></div>
        <div className='hashtags'>#randomhashtag</div>
        <div className='line'></div>
        <button className='reactangle2'><p>Start Resolution!</p></button>
    
        </form>
    </div>
    );

};