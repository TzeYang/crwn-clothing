import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBsWJysFoiakNG_Ng-NQvze_skJsoMRAKI",
  authDomain: "crwn-db-19357.firebaseapp.com",
  projectId: "crwn-db-19357",
  storageBucket: "crwn-db-19357.appspot.com",
  messagingSenderId: "38917100574",
  appId: "1:38917100574:web:69005873d28a2b5d924a0f",
  measurementId: "G-LXC14S5FPN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
