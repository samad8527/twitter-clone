import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDetvxOb6pqxgzrMArJLXHiiFN9SQ2DwHg",
  authDomain: "twitter-clone-129a7.firebaseapp.com",
  projectId: "twitter-clone-129a7",
  storageBucket: "twitter-clone-129a7.appspot.com",
  messagingSenderId: "798119086604",
  appId: "1:798119086604:web:d7073e5eb4543f4a947c29",
  measurementId: "G-V6JB5DCBVJ"
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
// const auth = firebase.auth();

export default db ;