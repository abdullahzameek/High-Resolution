import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase";
import "firebase/auth";
import "firebase/firestore";
import {AuthContext} from "../../../AuthProvider";

interface FormItems {
  displayName: string;
  phone: string;
  email: string;
  password: string;
}



const SignUp = () => {
   const authContext = useContext(AuthContext);
   const [values, setValues] = useState({
      displayName: "",
      email: "",
      password: "",
      phone: ""
    } as FormItems);
 
    const history = useHistory();
    const handleClick = () => {
       history.push("/auth/login")
   }   
   async function getDisplay(email:any){

      const db = firebase.firestore();
      const uid = firebase.auth().currentUser?.uid;
      const ref = db.collection("Users").doc(uid);
      const unparsed = await ref.get();
      const displayName = unparsed.data()?.displayName;
      console.log(displayName);
      sessionStorage.setItem('displayName',displayName);  
     }
   const handleChange = (event: any) => {
      event.persist();
      setValues(values => ({
        ...values,
        [event.target.name]: event.target.value
    }));
   }    
   
   const handleSubmit = async (event: any) => {
      event?.preventDefault();
      console.log(values, 'values');  
      console.log(authContext);    
      await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
      const userCredential = firebase.auth().currentUser;
      authContext.setUser(userCredential);
      const db = firebase.firestore();
      await db.collection("Users")
         .doc(userCredential?.uid)
         .set({
            email: values.email,
            displayName: values.displayName,
            phone: values.phone
         }).catch(error => {
            console.log(error.message);
            alert(error.message);
         });   
      await db.collection("Profiles")
      .doc(values.displayName)
      .set({
         displayName: values.displayName,
         bio: "No bio yet.",
      });
      getDisplay(values.email);
      history.push("/dashboard");
      
    
  } 
  return (
     <div style={{textAlign: 'center'}}>
     <h1>Sign Up</h1>
     <form onSubmit={handleSubmit}>
        <input type="text" name="displayName" placeholder="Display Name" onChange={handleChange} /><br /><br />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange}/><br /><br />
        <input type="text" name="email" placeholder="Enter your Email" onChange={handleChange}/><br /><br />
        <input type="password" name="password" placeholder="Enter your Password" onChange={handleChange}/><br /><br />
        <button type="submit">Sign Up</button>
        <p>Already have account?</p>
        <button onClick={handleClick}>Login</button>
      </form>
     </div>
   );
}

export default SignUp;