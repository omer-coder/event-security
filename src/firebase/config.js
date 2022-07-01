import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

 const firebaseConfig = {
    apiKey: "AIzaSyBEdUJwDNZwxKXEeotsKViRfUhgLaDwYM0",
    authDomain: "event-security-fbf4e.firebaseapp.com",
    projectId: "event-security-fbf4e",
    storageBucket: "event-security-fbf4e.appspot.com",
    messagingSenderId: "413658225582",
    appId: "1:413658225582:web:fdf8657c05154bdceb463f"
  };

  firebase.initializeApp(firebaseConfig)

//   init services

const projectFirestore = firebase.firestore();
const projectauth = firebase.auth();
const projectStorage = firebase.storage();

// time stamp
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export {projectFirestore , projectauth , projectStorage , timeStamp}