 import firebase from 'firebase';
 require("@firebase/firestore"); 
 
 var firebaseConfig = {
    apiKey: "AIzaSyBj_jp8bonmCmWTHLGB3Gw3dRGTfZYMi38",
    authDomain: "barter-system-f3177.firebaseapp.com",
    databaseURL: "https://barter-system-f3177.firebaseio.com", 
    projectId: "barter-system-f3177",
    storageBucket: "barter-system-f3177.appspot.com",
    messagingSenderId: "754957639812",
    appId: "1:754957639812:web:c96e0ff74f81d6cc0ca2d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 


export default firebase.firestore()