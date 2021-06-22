// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//npm i firebase 
//npm i -g firebase-tools
import firebase from "firebase"; 

const firebaseConfig = {
  apiKey: "AIzaSyB0iQ4QYhAHnVqxoLWKXbHLX5mlvje-IS8",
  authDomain: "clone-3467b.firebaseapp.com",
  projectId: "clone-3467b",
  storageBucket: "clone-3467b.appspot.com",
  messagingSenderId: "1045408690547",
  appId: "1:1045408690547:web:5ec4498d8c0c02ad7e1506",
  measurementId: "G-1HY7FWW5H1",
};

//INITIALISATION DE LAPPLICATION 
const firebaseApp = firebase.initializeApp(firebaseConfig);

//INITIALISATION DE LA BASE DE DONNEES
const db = firebaseApp.firestore();
//INITIALISATION DE LAUTHENTIFICATION 
const auth = firebase.auth();

export {db , auth  } ;

