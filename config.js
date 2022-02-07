// Import the functions you need from the SDKs you need
import firebase from "firebase";
require("@firebase/firestore")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDoS5_C50gRi14F_tLObRspdZARiZrzOIs",
  authDomain: "bike-ri.firebaseapp.com",
  databaseURL: "https://bike-ri-default-rtdb.firebaseio.com",
  projectId: "bike-ri",
  storageBucket: "bike-ri.appspot.com",
  messagingSenderId: "525787277472",
  appId: "1:525787277472:web:1bf7f54f3f7315aa7701c5"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

