import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
     apiKey: "AIzaSyB4dqtYCSwwztgfJYpwN9GasQQwdAHerVU",
     authDomain: "westhamunitedapp.firebaseapp.com",
     databaseURL: "https://westhamunitedapp.firebaseio.com",
     projectId: "westhamunitedapp",
     storageBucket: "westhamunitedapp.appspot.com",
     messagingSenderId: "1032355622131"
   };

firebase.initializeApp(config);
 
const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');

export {
     firebase,
     firebaseMatches
}