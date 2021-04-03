import firebase from "firebase/app";

const config = {
    apiKey: "AIzaSyBzgudDNJrruoqplsuth8D-iQUlW1BPFuM",
    authDomain: "princetonhres-b6632.firebaseapp.com",
    projectId: "princetonhres-b6632",
    storageBucket: "princetonhres-b6632.appspot.com",
    messagingSenderId: "716969035902",
    appId: "1:716969035902:web:911ef453a177129d32302f",
    measurementId: "G-XN09BZ3VPE"
};


if (!firebase.apps.length)
    firebase.initializeApp(config);
    
export default firebase;
