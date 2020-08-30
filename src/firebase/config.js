import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO76sAl4TXhoJa11nb9rxoblpjrT992Zs",
  authDomain: "firegram-70634.firebaseapp.com",
  databaseURL: "https://firegram-70634.firebaseio.com",
  projectId: "firegram-70634",
  storageBucket: "firegram-70634.appspot.com",
  messagingSenderId: "47921672650",
  appId: "1:47921672650:web:c21bfebba2eddb3fc6df33",
};

// Initialize firebase app

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
