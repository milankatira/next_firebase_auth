const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCETG6uZj65rEQRhCv6nlfGOCLCTmEP7EI",
  authDomain: "nodejs-auth-b9e33.firebaseapp.com",
  projectId: "nodejs-auth-b9e33",
  storageBucket: "nodejs-auth-b9e33.appspot.com",
  messagingSenderId: "366745868583",
  appId: "1:366745868583:web:19bd6a1aa7e35c5a41b102",
  measurementId: "G-JNKPJHY00Y",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
