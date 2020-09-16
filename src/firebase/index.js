import * as firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBW_7aZCgjobXOWCNju6TLLNHtat05p1LQ",
  authDomain: "e-commerce-coderhouse.firebaseapp.com",
  databaseURL: "https://e-commerce-coderhouse.firebaseio.com",
  projectId: "e-commerce-coderhouse",
  storageBucket: "e-commerce-coderhouse.appspot.com",
  messagingSenderId: "461569651548",
  appId: "1:461569651548:web:987d902c6cc61c47b90799",
  measurementId: "G-6ME19W9QCK",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
