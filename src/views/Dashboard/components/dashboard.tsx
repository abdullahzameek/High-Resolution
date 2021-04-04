import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase";
import "firebase/firestore";
import Profile from '../../../components/Profile/profileWrapper';
import Resolution from '../../../components/Resolutions/Resolution'
import CreateResolution from './CreateResolution';
import SetGoal from './SetGoal.png';
import Logout from './Logout.png';

const Dashboard = () => {
   const [display, setDisplay] = useState("");
   async function set(){
      const db = firebase.firestore();
      const Ref = await db.collection("Users")
                           .doc(firebase.auth().currentUser?.uid).get();
      const data: any = Ref.data();
      const displayName: string = data.displayName;
      setDisplay(displayName);
                        }
   useEffect(function(){
      set();
      
   }, []
   )
   const history = useHistory();
   const handleClick = (event: any) => {
      event.preventDefault();
      
      firebase
      .auth()
      .signOut()
      .then(res => {
         history.push("/auth/login");
       })
    } 
    if (display)
      return(
         <div>
            <Profile displayName={display}></Profile>
            <a href="/createNew" ><img src = {SetGoal} className = "SetGoalIcon"></img></a>
            <Resolution></Resolution>
            <button onClick={handleClick} className = "Logout"><img src = {Logout}></img></button>
         </div>
      )
    return (
    <div style={{textAlign: 'center'}}>
      Loading...
    </div>
   );
}

export default Dashboard;