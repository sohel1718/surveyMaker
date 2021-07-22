import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCAkq_Zx7ChBNQS83xrCyfNQunTBJ9pKaY",
    authDomain: "survey-maker-a0b12.firebaseapp.com",
    projectId: "survey-maker-a0b12",
    storageBucket: "survey-maker-a0b12.appspot.com",
    messagingSenderId: "126975118073",
    appId: "1:126975118073:web:73ef9581d4a35d1b107028",
    measurementId: "G-0D25SZTE4G"
  };
  
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };