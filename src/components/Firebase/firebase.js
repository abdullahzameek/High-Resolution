import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDlsLKQFz-8RsAwXC2iKL1jJV3YRv9-MCo",
    authDomain: "hyung-347d9.firebaseapp.com",
    databaseURL: "https://hyung-347d9.firebaseio.com",
    projectId: "hyung-347d9",
    storageBucket: "hyung-347d9.appspot.com",
    messagingSenderId: "445518833990",
    appId: "1:445518833990:web:954967e098dd512d3f9d47"
};


if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
    
    
export default firebase;