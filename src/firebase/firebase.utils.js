import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const config = {
  apiKey: "AIzaSyAXGyVrAhCb9FjxRY0ceISu5EtgOx1_Hx0",
  authDomain: "gosin-eha.firebaseapp.com",
  projectId: "gosin-eha",
  storageBucket: "gosin-eha.appspot.com",
  messagingSenderId: "474767532832",
  appId: "1:474767532832:web:7f89881a0706d35a016d45",
  measurementId: "G-SEYYE7BQF3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
