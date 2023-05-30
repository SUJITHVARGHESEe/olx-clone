
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"; // Add this line to import storage

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcDIpf2Rzi9d6lbaoFRFmcp0a0RUCM33E",
  authDomain: "olxapp-a8b31.firebaseapp.com",
  projectId: "olxapp-a8b31",
  storageBucket: "olxapp-a8b31.appspot.com",
  messagingSenderId: "494247779206",
  appId: "1:494247779206:web:55cf402f73ac35bac22a07",
  measurementId: "G-SBLS91BE22"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage(); // Initialize storage

export { auth, firestore, storage }; // Export storage
export default firebase;