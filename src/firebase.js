import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDBnUYpIUApjRjQofrwnzuNX6dJGw2ea1I",
  authDomain: "djalebi-a27cc.firebaseapp.com",
  projectId: "djalebi-a27cc",
  storageBucket: "djalebi-a27cc.appspot.com",
  messagingSenderId: "183202982602",
  appId: "1:183202982602:web:0215e38f86a920b85c2233",
  measurementId: "G-K3TPEG83VD",
});
const auth = firebase.auth();
export { auth, firebaseConfig };
